import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>Hey clever programmers! lets build netflix clone</h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      {/* <Row title='NERFLIX ORIGINALS' /> */}


    </div>
  );
}

export default App;
