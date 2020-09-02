import React from 'react';
import {Switch,Route,HashRouter} from 'react-router-dom'
import About from './component/About';
import Home from './component/Home';
import Hi from './component/Hi'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
     <HashRouter>
       <Switch>
         <Route exact component={Home} path='/'></Route>
         <Route component={About} path='/About'></Route>
         <Route component={Hi} path='/Hi'></Route>
       </Switch>
     </HashRouter>
    )
  }
}
export default App;
