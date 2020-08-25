import React from 'react';
import ReactDom from 'react-dom';
import DecideLoc from './decideLoc';


class App extends React.Component{
  render(){
    return(
      
      <div>
        <DecideLoc />
        
      </div>
      
    )
  }
}

ReactDom .render(
  <App />,
  document.querySelector('#root')
);