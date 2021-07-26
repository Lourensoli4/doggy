import React from "react";

class Header extends React.Component<any, any> {
  public title = "Doggy Identification Application";
  public paragraph = "Upload an image below to identify a dog!"
   render() {
    return (
      <header className="my-5 space-y-4">
          <h1 className="text-2xl sm:text-3xl">{this.title}</h1>
          <p className="">{this.paragraph}</p>
      </header>
    );
  }
}

export default Header;
