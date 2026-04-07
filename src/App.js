import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="StNcls ORIGINALS" // Updated branding from Netflix to StNcls
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending To Guys!!" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Bakbakan" fetchUrl={requests.fetchActionMovies} />
      <Row title="Nakaka-Good vibes" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Kakila-kilabot" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Nakaka-kilig" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
