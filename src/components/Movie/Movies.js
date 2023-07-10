import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Loading from "../Layouts/Loading";


const Movies = () => {

const [movies,setMovies] = React.useState([]);

const [isLoading,setIsLoading]=React.useState(false);

 const fetchMovieHandler = () => {
    fetch('https://swapi.dev/api/films').then(
        (response) => {
           return response.json();
        }
    ).then(
        data => {
            setMovies(data.results); 
        }
    );
 }

 React.useEffect(()=>{
    fetchMovieHandlerAsync();
 },[]);

 const  fetchMovieHandlerAsync=React.useCallback(async() => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const movies = data.results;
    setMovies(movies);
    setIsLoading(false)
 },[]);
  return (
    <React.Fragment>
        <div className="row" >
        <button onClick={fetchMovieHandlerAsync}>fetch Movies</button>
        </div>
        
         { isLoading && <Loading></Loading>}
       
       
        <div className="container row">
        {!isLoading && movies.map((movie) => {
        return (
          <div key={movie.id} className="col-md-3">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{movie.title}</MDBCardTitle>
                <MDBCardText>
                 {movie.opening_crawl}
                </MDBCardText>
                <MDBCardText>
                 {movie.release_date}
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        );
      })}
        </div>
     
    </React.Fragment>
  );
};

export default Movies;
