import React from "react";
import {AI} from '../models/ai';
import { breedService } from '../services/breed-service';

declare var mobilenet:any;

class Upload extends React.Component<any, any> {
  constructor(props: any){
    super(props)
    this.state = {
      file: null,
      prediction: {}
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
    breedService.setData (this.state.prediction.className);
    
  }

  render() {
    return (
      <div>
        {/* Upload */}
        <div className="flex justify-center">
          <input type="file" onChange={this.handleChange} className=""/>
        </div>
        {/* Preview */}
        <div className="flex justify-center my-5">
          <img src={this.state.file} alt="Woof, woof!" id="img" className="flex justify-center"/>
        </div>
        {/* Prediction */}
        <div className="flex justify-center">
          <p></p>
          <label className="w-60">Do you know what dog breed it is? We're prety sure it's a... {this.state.prediction.className}</label>
        </div>
      </div>
    );
  }
}

export default Upload;