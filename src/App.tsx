import React from 'react';
import './App.css';
import Header from './components/header';
import Upload from './components/upload'
import Gallery from './components/gallery';

function App() {
  const tfjs = document.createElement("script");
      tfjs.async = true;
      tfjs.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1";
  const mobilenet = document.createElement("script");
      mobilenet.async = true;
      mobilenet.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0";
  return (
    <div className="text-center">
      
      <div>
        < Header/>
      </div>
      
      <div>
        < Upload/>
      </div>
      
      <div>
        < Gallery/>
      </div>

    </div>
  );
}

export default App;
