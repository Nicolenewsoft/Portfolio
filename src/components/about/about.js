import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/Me.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>Sobre Mim</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
      </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Detalhes para contato</h2>
                  <p className="address">
                    <span>Nicole Barros</span><br />
                    <span>Rua Leão Veloso 667<br />
            </span><br />
                    <span>(85)0000-0000</span><br />
                    <span>barrosnicole094@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  {/**<p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p> */}
                
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>

      </React.Fragment>
    );
  }
}