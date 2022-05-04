import axios from "./axios";
import React, { useEffect, useState } from "react";
import "../style/Row.scss";
function Row({title , fetchUrl, isLargeRow = false} ){
    const [movies, setMovies] = useState([]);
    const innitUrl = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    } , [fetchUrl])




    return (
        <div className="row">
            <h2 >
                {title}
            </h2>
            <div className="posters">
                {movies.map(movie =>
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                        <img className={`row_poster ${isLargeRow && "row_largePoster"}`} key={movie.id} src={`${innitUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                            
                        }`}
                        alt={movie.name} />
                    )
                   
                )} 
            </div>
           
        </div>
    )
}
export default Row;