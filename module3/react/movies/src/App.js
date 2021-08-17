import React from "react";
import Filter from "./Filter"
import Navbar from "./Navbar"

class App extends React.Component {
  state ={
    movies: [],
    genre: [],
  };

  componentDidMount(){
    //getdata
    let f = async() =>{
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");
      let genrejson = await responseGenre.json();
      let moviesjson = await responseMovies.json();
      
      this.setState({
        movies: moviesjson,
        genre: genrejson,
      });
    };
    f();
  }
  render() {
    return (
      <div>
        <Navbar/>

       <div className="row">
         <Filter genreData = {this.state.genre}/>
       </div>
      </div>
    );
  }
}

export default App;