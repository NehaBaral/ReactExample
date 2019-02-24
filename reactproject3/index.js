//for stateless Component
const Person = (props)=>(
    <div>
        <p>Name:{props.name}</p>
        <p>Address:{props.address}</p>
        <p>Contact:{props.contact}</p>
    </div>
)
class App extends React.Component{
    friends=[
        {name:'Neha Bhandari',address:'Lokanthali,Bhaktapur',contact:'9819675727'},
        {name:'Neha Siwakoti',address:'Baneshor',contact:9860905667},
        {name:'Sujata Thapa',address:'Old baneshwar',contact:9815462345},
        {name:'Elsa Bista',address:'Maitidevi',contact:9814567822}
    ];
    state = {
        name:"Neha Baral"
    };
    render(){
        return(
           <div>
           <p>{this.state.name}</p>
           <p>message from prop is : {this.props.message}</p>
               <h2>List of Friends</h2>
               {this.friends.map((friend) => <Person name = {friend.name} address = {friend.address}
                contact = {friend.contact}/>)}
           </div>
        );
    }
}
ReactDOM.render(<App message="This is list of friends of Neha Baral"/>,document.getElementById("app"));