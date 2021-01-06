import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar, Home, About, Contact, 
  Layout, Portfolio, Services, Footer} from "./components"
import './App.css';

function App() {

  return (
    <React.Fragment>
      <Router>
        <NavigationBar/>
        <Layout style={{display:"flex", flexDirection:"column"}} fluid={true}>
          <Switch>
            <Route exact={true} path="/"  component={Home} />
            <Route exact={true} path="/about"  component={About} />
            <Route exact={true} path="/services"  component={Services} />
            <Route exact={true} path="/portfolio"  component={Portfolio} />
            <Route exact={true} path="/contact"  component={Contact} />
          </Switch>
        </Layout>
      </Router>
      <Footer/>        
    </React.Fragment>
  );
}

export default App;
