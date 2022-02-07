import React from 'react';

const Titlesec = (props) => {
  return <div>
      <section className="page-title o-hidden text-center grey-bg bg-contain animatedBackground" data-bg-img="images/pattern/05.png">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                    <h1 className="title">{props.titlesec}</h1>
                </div>
            </div>
        </div>
        <div className="page-title-pattern"><img className="img-fluid" src="images/bg/06.png" alt=""/></div>
        </section>
  </div>;
};

export default Titlesec;
