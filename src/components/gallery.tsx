import React from "react";
import { breedService } from "../services/breed-service";

class Gallery extends React.Component<any, any> {
  public galleryText =  "Nope, no doggy images just yet";
  
  constructor(props: any){
    super(props)
    this.state = {
      breed: "",
      images: [],
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
    fetch(`https://dog.ceo/api/breed/${this.state.breed.toLowerCase().split(" ")[0]}/images/random/20`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: data.message,
      })
    });
  }

  // takes the data given by the API and maps out the images 
  render() {
    return (
      <div className="flex flex-wrap justify-center py-10 mx-5 rounded-xl">
        {Array.isArray(this.state.images) && this.state.images.length === 0 && `${this.galleryText}`}
        {Array.isArray(this.state.images) && this.state.images.length > 0 && this.state.images.map((image:any) => (
            <img src={image} alt="Woof, woof!" id="img" className="object-contain m-4 rounded shadow max-w-60 max-h-60"/>
        ))}
      </div>
    );
  }
}
  
export default Gallery;
