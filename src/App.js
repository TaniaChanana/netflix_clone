import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch,useSelector  } from 'react-redux';
import { login,logout,selectUser} from './features/userSlice';

function App() {
  // we use useSelector to select the user (selectUser is the variable which has the value)
  const user = useSelector(selectUser);
  // used to dispatch the user info about login and logout
  const dispatch = useDispatch();
  useEffect(() => {
    // userAuth is a listener that detects wheter a user logged in or not
    // It tells us that we logged in (stores on local storage which user is loggid in)\
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //Logged in
        console.log(userAuth);
        // becaz in userslice we are using a payload in login so pass uid and email at that time to set the parameters
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }))
      }else{
        //logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="App">
      <Router>
      {!user ? (<LoginScreen/>) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen/>
          </Route>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      )}        
      </Router>
    </div>


  );
}

export default App;


// Redux is global store which is used to store some info at the global level so that we don't have to pass the info from one componenet to another comp and then to the another one 
