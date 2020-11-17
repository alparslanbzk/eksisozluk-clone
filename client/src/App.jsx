import React, { createContext, useReducer, useEffect, useContext } from "react"
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Details from "./pages/Details"
import Create from "./pages/Create"
import { reducer, initializeState } from './reducers/userReducer'


export const UserContext = createContext()

const Routing = ()=>{
    console.log("çalışıyor")
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
          console.log("çalışıyor")
        dispatch({type:"USER",payload:user})
      }else{
        console.log("çalışıyor")
             history.push('/signin')
      }
    },[])
    return(
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:_id" component={Details} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user/:userId" component={Profile} />
            <Route exact path="/create" component={Create} />        
      </Switch>
    )
  }
  
  function App() {
    const [state,dispatch] = useReducer(reducer,initializeState)
    return (
      <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Routing />
        
      </BrowserRouter>
      </UserContext.Provider>
    );
  }
  
  export default App;