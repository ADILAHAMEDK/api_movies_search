    import "bootstrap/dist/css/bootstrap.css";
    import { useState } from "react";
    import axios from "axios";
    import { Link } from "react-router-dom";

    function ApiMoviesSearch() {
    let [searchData, setSearchData] = useState([]);
    let [movies, setMovies] = useState([]);

    let SearchHandle = (event) => {
        setSearchData(event.target.value);
    };

    let SubmitHandle = async () => {
        let response = await axios.get(
        `https://www.omdbapi.com/?s=${searchData}&apikey=a5ef1268`
        );
        console.log(response.data.Search);
        setMovies(response.data.Search);
    };

    return (
        <div>
        <input type="search" onChange={SearchHandle} />

        <button onClick={SubmitHandle} variant="dark">
            Search
        </button>

        <div>
            {movies.map((item) => {
            return (
                <div>
                <ul>
                    <Link to={`/detail/${item.imdbID}`}>
                    <img src={item.Poster} alt="" />
                    </Link>
                    <li>{item.Title}</li>
                </ul>
                </div>
            );
            })}
        </div>
        </div>
    );
    }

    export default ApiMoviesSearch;
