import React from 'react';
import { Suspense, lazy } from 'react';
import './App.css';

const Gallery = React.lazy(() => import('./components/gallery'));
const Header = React.lazy(() => import('./components/header'));
const Upload = React.lazy(() => import('./components/upload'))

function App() {
  const tfjs = document.createElement("script");
      tfjs.async = true;
      tfjs.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1";
  const mobilenet = document.createElement("script");
      mobilenet.async = true;
      mobilenet.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0";

  return (
    <div className="font-sans text-center">
      <Suspense fallback={<div></div>}>
          < Header/>
          < Upload/>
          < Gallery/>
      </Suspense>
    </div>
  );
}

export default App;
