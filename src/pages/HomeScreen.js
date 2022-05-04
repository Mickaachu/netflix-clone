import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Row from "./Row"
import "../style/HomeScreen.scss";
import request from "./Request";
function HomeScreen() {
  return (
    <div>
      <NavBar />
      {/* banner */}
      <Banner/>

      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow  />
      <Row  title="New Releases" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}  />
      <Row title="Because you watched Conjuring2" fetchUrl={request.fetchHorrorMovies} />

    </div>
  );
}
export default HomeScreen;