import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar, Home, About, Contact, GetQuote, 
  Layout, Portfolio, Services, Footer} from "./components"
import './App.css';

function App() {
  return (
    <div>
      <React.Fragment>
      <NavigationBar/>
      <Layout style={{display:"flex", flexDirection:"column"}} fluid={true}>
        <Router>
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/about"  component={About} />
            <Route exact path="/services"  component={Services} />
            <Route exact path="/portfolio"  component={Portfolio} />
            <Route exact path="/contact"  component={Contact} />
            <Route exact path="/getQuote"  component={GetQuote} />
          </Switch>
        </Router>
      </Layout>
      <Footer/>        
    </React.Fragment>
    </div>
  );
}

export default App;
