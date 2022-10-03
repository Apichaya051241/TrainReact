import React, { Component } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import Stock from "./components/stock";
import StockEdit from "./components/stockEdit";
import StockCreate from "./components/stockCreate";
import Shop from "./components/shop";
import Report from "./components/report";
import Transaction from "./components/transaction";
import "./App.css"

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { server } from "./constants";
import { connect } from 'react-redux';

const isLoggedIn = ()=>{
  return localStorage.getItem(server.TOKEN_KEY) != null
}

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      isLoggedIn() === true ? (
        <Component {...props}/>
      )
      :
      (<Redirect to="/login"/>)
    }
  />
);


class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_IS_PRODUCTION == 1 ? "/demo" : ""} >
        <Switch>
          <div>
          {isLoggedIn() && <Header /> }  
          {isLoggedIn() && <Menu /> }  
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>          
          <SecuredRoute path="/stock" component={Stock}/>
          <SecuredRoute path="/stock-create" component={StockCreate}/>
          <SecuredRoute path="/stock-edit/:id/" component={StockEdit}/>
          <SecuredRoute path="/shop" component={Shop}/>
          <SecuredRoute path="/report" component={Report} />
          <SecuredRoute path="/transaction" component={Transaction} />
          <SecuredRoute exact={true} path="/" component={()=>(<Redirect to="/login"/>)}/>
          <Route render={props=>(<Redirect to="/login"/>)}/> {/* The Default not found component */}
          {isLoggedIn() && <Footer /> }  
          </div>
        </Switch>
      </Router>
    );
  }
}



const mapStateToProps = ({loginReducer}) => ({
  loginReducer
})

const mapDispatchToProps = {  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)