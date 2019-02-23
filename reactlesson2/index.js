class App extends React.Component{


state={
    name:"Yesha Baral",
    level:"BSC Csit 5th semester",
    address:"Bhaktapur,thimi"
}

render(){
    return(
        <div>
            <button onClick></button>
           <h1>Me Neha!!</h1>
           <p>{this.state.name},<br />{this.state.level},<br/>{this.state.address}</p>
        </div>
    )
}
}
ReactDOM.render(<App/>,document.getElementById("app"));