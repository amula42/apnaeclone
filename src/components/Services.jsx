import React from 'react';
import { NavLink } from 'react-router-dom';
import { Servpg } from '../data/Sdata';
import Titlesec from '../data/Titlesec';

const Services = () => {
  return <div>
      <Titlesec titlesec="Service"/>
      <div className="page-content">
      {/* service start */}
      <section className="o-hidden">
         <div className="container">
            <div className="row text-center">
               <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                  <div className="section-title">
                     <h6>Service</h6>
                     <h2 className="title">We’r Provided Best Digital Payment Services!</h2>
                  </div>
               </div>
            </div>

            <div className="row spacedata">
              {Servpg.map((serval,serkey) => {
                const { servimgs, servtitle, servlink } = serval;
                return(
                  <div className="col-lg-3 col-md-6 wow fadeInLeft" key={serkey} data-wow-duration="0.6">
                    <div className="featured-item text-center">
                      <div className="featured-icon">
                          <img className="img-center" src={servimgs} alt="" />
                      </div>
                      <div className="featured-title">
                          <h5> <span id="ContentPlaceHolder1_rptBind_lblservicename_0">{servtitle}</span> </h5>
                      </div>
                      <div className="featured-desc">
                          <NavLink className="btn btn-theme" to={servlink}><span>View</span></NavLink>
                      </div>
                    </div>
                  </div>
                )
              })}
              
            </div>         
         </div>
      </section>
   </div>
  </div>;
};

export default Services;
