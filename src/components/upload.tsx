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
      <div className="flex flex-col items-center">
        {/* Upload */}
        <div className="p-4 text-center bg-white rounded shadow-inner w-80">
          <input type="file" onChange={this.handleChange} className=""/>
        </div>
        {/* Preview */}
        <div className="my-5">
          <img src={this.state.file} alt="" id="img" className="rounded w-80"/>
        </div>
        {/* Prediction */}
        <div className="p-4 bg-gray-100 rounded shadow w-80">
          <label className="text-gray-800">Do you know what dog breed it is? We're prety sure it's a... {this.state.prediction.className}</label>
        </div>
      </div>
    );
  }
}

export default Upload;