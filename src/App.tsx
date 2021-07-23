import React from 'react';
import './App.css';
import Header from './components/header';
import Upload from './components/upload'
import Gallery from './components/gallery';

function App() {
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
