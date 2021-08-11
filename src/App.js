import './App.css';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { Home } from './components/Home/Home';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  const [art, setart] = useState([]);


  useEffect(() => {
    axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=yCF8BjBo&involvedMaker=Rembrandt+van+Rijn')
      .then(res => setart(res.data))
  }, [])


  console.log(art);

  return (
    <div className="main">
      <div>
        <Home />
        <Gallery art={art} />
      </div>
    </div>
  );
}

export default App;
