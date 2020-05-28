import React, { Component } from 'react';
import curriculoDados from '../../curriculoDados';
import { Link, Router } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">Sobre Mim</a></li>
              <li><a className="smoothscroll" href="#resume">Curriculo</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projetos</a></li>
              <li><a className="smoothscroll" href="#testimonials">Opiniões</a></li>
              <li><a className="smoothscroll" href="#contact">Contato</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{curriculoDados.name}.</h1>
              <h3>Sou {curriculoDados.role}, de ferramentas como React js, Node js, React Native. Além de Python e Django</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/nicole-barros-ba8a8b13b/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/nicolebarroos_/?hl=pt-br"><i className="fa fa-instagram" /></a></li>

              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>

      </React.Fragment>
    );
  }
}