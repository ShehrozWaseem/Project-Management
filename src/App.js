import './App.css'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Create from './pages/Create/Create'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';
function App() {
  const {user , authisReady} = useAuthContext();
  return (
    <div className="App">
      {authisReady && (<BrowserRouter>
      {user && <Sidebar/>}
      <div className='container'>
      <Navbar/>
        <Switch>

          <Route exact path='/'>
          {!user && <Redirect to='/login'/> }
             {user &&  <Dashboard/>}
          </Route>

          <Route path='/create'>
          {!user && <Redirect to='/login'/> }
            {user &&  <Create/>}
           
          </Route>

          <Route path='/projects/:id'>
          {!user && <Redirect to='/login'/> }
          {user && <Project/>}
      
          </Route>

          <Route path='/login'>
          {user && <Redirect to='/'/> }
            {!user && <Login/>}
          </Route>

          <Route path='/signup'>
          {user && <Redirect to='/'/> }
            {!user && <Signup/>}
          </Route>

        </Switch>
      </div>
      {user && <OnlineUsers/>}
      </BrowserRouter>)}
    </div>
  );
}

export default App
