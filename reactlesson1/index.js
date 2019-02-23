//For statefull component
/*class Item extends React.Component{
  render(){
    return(
      <div>
        <p>title:{this.props.title}</p>
        <p>year:{this.props.year}</p>
        <p>Description:{this.props.Description}</p>
        <p>genre:{this.props.genre}</p>
      </div>
    );
  }
}*/

//For stateless Component
const Item = (props)=>(
  <div>
  <p>title:{props.title}</p>
  <p>year:{props.year}</p>
  <p>Description:{props.Description}</p>
  <p>genre:{props.genre}</p>
</div>
)

class App extends React.Component{
  handleClick=(e)=>{
    this.setState({name:"Yesha Baral"});
  };
  movies = [
    { title: 'Dark phoneix', year: 2019, genre:'Action', Description: 'Best movie in 2019'},
    { title: 'Avengers', year: 2019, genre:'Drama', Description: 'movie we have seen together'},
    { title: 'Avengers:Infinity war',year: 2019, genre: 'Action', Description:'released in 2019'}
];
  state = {
    name:"Neha Baral"
  };
    render(){
        return(
          <div>
            <button onClick={this.handleClick}>click me</button>
            <h1>Hello react</h1>
            <p>{this.state.name}</p>
            <p>message from prop is : {this.props.message}</p>

            <h3>lists of movies</h3>
            {this.movies.map((movie) => <Item title={movie.title} year={movie.year} genre={movie.genre}
             Description={movie.Description} />)}
          
          </div>
         
        );
    }
}

ReactDOM.render(<App message="This is for prop"/>,document.getElementById("app"));