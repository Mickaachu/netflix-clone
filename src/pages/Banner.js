import React, { useEffect, useState } from "react";
import "../style/Banner.scss";
import {BsFillPlayFill} from "react-icons/bs";
import {AiOutlineInfoCircle} from "react-icons/ai";
import axios from './axios';

import requests from "./Request";
function Banner() {
    //API call
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
    fetchData();
    },[])
    
   

    //DECRIPTION
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <div className="banner" 
        style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }}
        >
        
        
        
            <div className="bannercontents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h2 className="banner-description">
                   {truncate(movie?.overview, 150)}
                </h2>
                <div className="banner-buttons">
                    <button className="banner-button play-button">
                       <BsFillPlayFill className="play"/> 
                       <span>Play</span>
                    </button>
                    <button className="banner-button info-button">
                      <AiOutlineInfoCircle className="info"/> 
                      <span> More Info</span>
                    </button>
                </div>
               
            </div>
            <div className="banner-fadeBottom" />

            
        </div>
    )
}
export default Banner;