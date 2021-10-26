import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import classes from "./App.module.css";
import Home from "./Main/Home/Home";
import Gallery from "./Main/Gallery/Gallery";
import Contact from "./Main/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Carousel from "./Main/Carousel/Carousel";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header className={classes.mainHeader}>
            <Navbar />
          </header>
          <main className={classes.mainContent}>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/view/:id" component={Carousel} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
