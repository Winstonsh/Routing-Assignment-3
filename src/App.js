import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NoMatch from './component/NoMatch/NoMatch';

class App extends Component {
  render () {
    return (
      
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          <nav>
              <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
                <li style={{margin: '10px', display: 'inline-block'}}><NavLink to="/users">Users</NavLink></li>
                <li style={{margin: '10px', display: 'inline-block'}}><NavLink to="/courses">Courses</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/users" component={Users}/>
              <Route path="/courses" component={Courses}/>
              <Route component={NoMatch}></Route>
            </Switch>
        </div>
    );
  }
}

export default App;
