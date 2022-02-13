import React, { useEffect } from 'react';

const Titlesec = (props) => {

    useEffect(() => {
        document.title = `${props.titlesec} - ${global.company}`
    });
    
  return <div>
      <section className="page-title o-hidden text-center grey-bg bg-contain animatedBackground" style={{backgroundImage: "url(images/pattern/05.png)"}} >
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
