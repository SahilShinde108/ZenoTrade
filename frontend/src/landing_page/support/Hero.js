import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3 ps-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O"/>
          <br/>
          <a href="" >Track account opening</a>
          <a href="" style={{marginLeft:"15px"}}>Track segment activations</a>
          <a href="" style={{marginLeft:"15px"}}>Intraday margins</a>
          <a href="" style={{marginLeft:"15px"}}>kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3 ms-">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="" >Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="" style={{lineHeight:"3.0"}}>Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;