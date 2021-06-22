import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Data from './components/Data';
import {BrowserRouter as Router , Switch , Route , Link ,Redirect} from 'react-router-dom'
import Details from './components/Details';
import Edit from './components/Edit'
import LogOut from './components/Logout';

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
       <Route exact path="/" component={Login}/>
         <Route exact path="/data" component={Data}/>
         <Route exact path={`/details/:id`} component={Details}/>
         <Route exact path={`/edit/:id`} component={Edit}/>
         <Route exact path="/logout" component={LogOut}/>
       </Switch>
       
    </div>
      </Router>
  );
}

export default App;
