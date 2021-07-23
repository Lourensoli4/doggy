import React from "react";
import {AI} from '../models/ai';
import Gallery from './gallery';

declare var mobilenet:any;

class Upload extends React.Component<any, any> {
  constructor(props: any){
    super(props)
    this.state = {
      file: null,
      prediction: {},
      images: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(event: any) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })

    const img = document.getElementById('img');

    const model = await mobilenet.load();

    const predictionResult:AI[] = await model.classify(img);
    this.setState({
      file: this.state.file,
      prediction: predictionResult[0]
    });

    console.log('Predictions: ');
    console.log(this.state.prediction);

    fetch(`https://dog.ceo/api/breed/${this.state.prediction.className.toLowerCase().split(" ")[0]}/images/random/5`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        file: this.state.file,
        prediction: this.state.prediction,
        images: data.message
      })
    });
  }

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <input type="file" onChange={this.handleChange} className=""/>
        </div>
        <div className="flex justify-center my-5">
          <img src={this.state.file} alt="Woof, woof!" id="img" className="flex justify-center"/>
        </div>
        <div className="flex justify-center">
          <p></p>
          <label className="w-60">Do you know what dog breed it is? We're prety sure it's a... {this.state.prediction.className}</label>
        </div>
        <div className="flex flex-wrap justify-center py-3 mx-5 rounded-xl">
          {this.state.images.map((image:any) => (
            <img src={image} alt="Woof, woof!" id="img"className="object-contain w-64 h-64 p-4"/>
          ))}
        </div>
      </div>
    );
  }
}

export default Upload;