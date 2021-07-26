import React from "react";
import { breedService } from "../services/breed-service";

class Gallery extends React.Component<any, any> {
  constructor(props: any){
    super(props)
    this.state = {
      breed: "",
      images: []
    }
    breedService.getData().subscribe(breed => {
      this.setState({
        breed: breed
      });
      this.searchBreedImage();
    });
  }

  // fetches data using the first word, in lowercase, of a breed of dog from an API
  searchBreedImage() {
    fetch(`https://dog.ceo/api/breed/${this.state.breed.toLowerCase().split(" ")[0]}/images/random/5`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: data.message
      })
    });
  }

  // takes the data given by the API and maps out the images 
  render() {
    return (
      <div className="flex flex-wrap justify-center py-3 mx-5 rounded-xl">
        {this.state.images.map((image:any) => (
          <img src={image} alt="Woof, woof!" id="img"className="object-contain w-64 h-64 p-4"/>
        ))}
      </div>
    );
  }
}
  
export default Gallery;
