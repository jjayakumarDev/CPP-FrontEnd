import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import NewsFeeds from "./Components/NewsFeed";
import Achievements from "./Components/Achievements";
import Chat from "./Components/Chat";
import Events from "./Components/Events";
import Profile from "./Components/Profile";
import Reports from "./Components/Reports";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
  }
  showNavBar(){
    document.getElementById('navbarSupportedContent1').classList.toggle('toggle-nav-bar-display');
  }

  render(){
  return (
    <div class="App">
      <Router>
        <Header/>
        <nav class="navbar navbar-light light-blue lighten-4">

          <div class="dropdown">
          <button onClick={this.showNavBar} class="btn btn-secondary dropdown-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
                class="fas fa-bars fa-1x"></i></span>Menu</button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent1">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/">News Feed</Link>
              </li>
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/Events">Events</Link>
              </li>
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/Chat">Chat</Link>
              </li>
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/Achievements">Achievements</Link>
              </li>
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/Reports">Continious Feedback</Link>
              </li>
              <li class="nav-item">
                <Link onClick={this.showNavBar} class="nav-link" to="/Profile">Profile</Link>
              </li>
            </ul>

          </div>

        </nav>
        
        <Switch>
        <Route path="/Login" exact component={() => <Login />} />
        <Route path="/" exact component={() => <NewsFeeds />} />
        <Route path="/Achievements" exact component={() => <Achievements />} />
        <Route path="/Chat" exact component={() => <Chat />} />
        <Route path="/Events" exact component={() => <Events />} />
        <Route path="/Profile" exact component={() => <Profile />} />
        <Route path="/Reports" exact component={() => <Reports />} />
        </Switch>
      </Router>
   </div>
  );
  }
}

export default App;
