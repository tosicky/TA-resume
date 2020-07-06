import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Frontview from "./components/Frontview/frontview";
import About from "./components/PageSections/about";
import Resume from "./components/PageSections/resume";
import Services from "./components/PageSections/services";
import Accomplishment from "./components/PageSections/accomplishment";
import Contact from "./components/PageSections/contact";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // const script = document.createElement("script");
    // script.src = "../public/js/main.js";
    // script.async = true;
    // document.body.appendChild(script);

    /*-----------------------------------------------------*/
    /* Navigation Menu
   ------------------------------------------------------ */

    var toggleButton = $(".menu-toggle"),
      nav = $(".main-navigation");

    // toggle button
    toggleButton.on("click", function (e) {
      e.preventDefault();
      toggleButton.toggleClass("is-clicked");
      nav.slideToggle();
    });

    // nav items
    nav.find("li a").on("click", function () {
      // update the toggle button
      toggleButton.toggleClass("is-clicked");
      // fadeout the navigation panel
      nav.fadeOut();
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Frontview />
        <About />
        <Resume />
        <Services />
        <Accomplishment />
        <Contact />
      </div>
    );
  }
}

export default App;
