import React from 'react';

const Servcrd = (props) => {
  return <div>
      <div className="page-content">

      {/* team start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div>
                <div className="service-images">
                  <img className="img-fluid w-100" src="images/service/moneytransfer3.png" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                  <h2 className="title">{props.servtitle}</h2>
                  <p className="lead text-black">
                    {props.servdes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  </div>;
};

export default Servcrd;
