import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/curriculo/curriculo';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;