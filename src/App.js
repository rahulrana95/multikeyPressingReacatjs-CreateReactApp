import React, { Component } from 'react';
import keydown from 'react-keydown';
import dataMy from './data.json';
import './App.css';

let data = dataMy.data;
let query =[];
let keyPressed=[];

@keydown
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displaySearchItems:false,
      searchValue:"1",
      key:'n/a',
      inputDisplay:false
    };
  }

  componentWillReceiveProps( nextProps ) {
    const { keydown: { event } } = nextProps;
    if ( event ) {
      if(event.which === 17){
          keyPressed.push(17);
          if(keyPressed.length>1){
            keyPressed=[];
          }

      } else if(event.which === 32){
          keyPressed.push(32);
          if(keyPressed.length>2){
            keyPressed=[];
          }

      } else if(event.which === 65){
          keyPressed.push(65);
          if(keyPressed.length>3){
            keyPressed=[];
          }

          if(keyPressed.length>2  && keyPressed[0]==17 && keyPressed[1]==32 && keyPressed[2]==65 ){
            keyPressed=[];
            this.setState({inputDisplay:!this.state.inputDisplay});
          }
      } else {
        keyPressed = [];
      }

    }
  }

  search = (e) => {
    if(e.target.value.length == 0){
      query=[];
      this.setState({
        displaySearchItems:false
      });
    }
    else
      this.search1(e.target.value);
  }

  search1 = (search) => {
    query = [];
    for(var i = 0; i < data.length ; i++){
      let temp='';
      for(var j=0;j<search.length;j++){
        temp=temp+data[i].title[j]
      }
      if(temp == search){
        console.log('asda');
        query.push(data[i]);
      }
    }

    if(query.length>0 && this.state.searchValue.length>0){
    this.setState({
      displaySearchItems:true,
      searchValue:search
    });
  }
  else {
    query=[];
    this.setState({
      displaySearchItems:false,
      searchValue:search
    });
  }
  }

  display = () => {
    console.log('display');
    if(query.length === 0 && this.state.searchValue.length > 0){
      return (
        <div className="App-card">
        <h3>No Items Found <br/> Keep Searching</h3>
        </div>
      );
    }
    return (query.map((data,index)=> {
      return (
        <div className="App-card" >
        <span style={{ float:'left',marginLeft:'10px' }}>{data.title}</span>
        <span style={{ float:'right',marginRight:'10px' }}>{data.year}</span>
        </div>
      );
    }));
  }

  render() {
    console.log(this.state.displaySearchItems);
    console.log(query.length);
    return (
      <div className="App"   >
        <div className="App-header" >
        { this.state.inputDisplay ?  <input type="text" onChange={this.search}  className="App-input" /> : null}

        <div style={{ height:'200px',overflow:'auto',marginTop:'20px' }}>
        {this.state.displaySearchItems  && query.length ? this.display() : null}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
