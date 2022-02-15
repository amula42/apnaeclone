import React from 'react'

const Servcard = (props) => {
  return (
    <div>
        <div className="page-content">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div>
                                <div className="service-images">
                                    <img className="img-fluid w-100" src={props.imgsrc} alt="Services" />
                                </div>
                                <div className="service-details mt-4">
                                    <h2 className="title">{props.title}</h2>
                                    <p className="lead text-black">{props.text1}</p>
                                    <p className="lead text-black">{props.text2}</p>
                                    <p className="lead text-black">{props.text3}</p>
                                    <p className="lead text-black">{props.text4}</p>
                                    <p className="lead text-black">{props.text5}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Servcard