import React from "react";

function Universe() {
  return (
    <>
      <div className="container mt-3">
        <div className="row text-center">
          <h1 className="mt-5">The ZenoTrade Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4 p-5 mt-3">
            <img src="media\images\zerodhaFundhouse.png" style={{width: "70%"}}/>
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="media\images\sensibullLogo.svg" style={{width: "70%"}} className="mt-2 mb-2"/>
            <p className="text-small text-muted mt-4">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="media\images\tijoriLogo.svg" style={{width: "50%"}} className="mt-1 mb-3"/>
            <p className="text-small text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="media\images\streakLogo.png" style={{width: "60%"}} className="mb-2"/>
            <p className="text-small text-muted mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="media\images\smallcaseLogo.png" style={{width: "80%"}}/>
            <p className="text-small text-muted mt-4">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5 mt-3">
            <img src="media\images\dittoLogo.png" style={{width: "40%"}} className="mt-1 mb-3"/>
            <p className="text-small text-muted mt-4">
              Personalized advice on life and health insurance. No spam and no mis-selling.
            </p>
          </div>
          <button className='p-3 btn btn-primary mt-3 mb-3 fs-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
        </div>
      </div>
    </>
  );
}

export default Universe;
