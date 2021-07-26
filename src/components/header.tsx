import React from "react";

class Header extends React.Component<any, any> {
  public title = "Doggy Identification Application";
  public paragraph = "Upload an image below to identify a dog!"
   render() {
    return (
      <header className="my-5 space-y-14 ">
          <h1 className="px-4 text-2xl font-semibold text-gray-700 sm:text-3xl">{this.title}</h1>
          <p className="text-gray-800">{this.paragraph}</p>
      </header>
    );
  }
}

export default Header;
