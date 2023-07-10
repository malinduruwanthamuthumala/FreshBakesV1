import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function AddMovie() {
    const movieTitleref = React.useRef("");
    const movieOpeneingCrawlRef = React.useRef("");
    const movieReleasedDateRef = React.useRef("");

   

    async function addMovieHandler() {
        const moviec = createMovieObject();
        const response = await fetch('https://moviebuzz-c9305-default-rtdb.firebaseio.com/films.json',{
            method:'POST',
            body: JSON.stringify(moviec),
            headers:{
                'Content-Type':'application/json'
            }});
            debugger
        const movies = await response.json();
        console.log(movies);
      }
 
     const createMovieObject = () => {
        return {
            title:movieTitleref.current.value,
            opening_crawl:movieOpeneingCrawlRef.current.value,
            release_date:movieReleasedDateRef.current.value
        }
     }
  return (
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='title' ref={movieTitleref}/>
      <MDBInput  id='form4Example2' wrapperClass='mb-4' label='opening_crawl' ref={movieOpeneingCrawlRef}/>
      <MDBInput  type="date" wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='release_date' ref={movieReleasedDateRef}/>

     

      <MDBBtn type='submit' className='mb-4' block onClick={addMovieHandler}>
       Add Movie
      </MDBBtn>
    </form>
  );
}