import React from 'react';
import Titlesec from '../data/Titlesec';

const Contact = () => {
  return <div>
      <Titlesec titlesec="Contact Us"/>
      <div className="page-content">

      <section className="contact-1" style={{backgroundImage: "url(images/pattern/02.png)"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="section-title mb-2">
                <h6>Get In Touch</h6>
                <h2>Contact Us</h2> 
              </div>
              <div className="contact-main">
                <div id="contact-form" className="row" method="post">
                  <div className="messages"></div>
                  <div className="form-group col-md-12">
                      <input name="ctl00$ContentPlaceHolder1$txtname" type="text" id="ContentPlaceHolder1_txtname" className="form-control" autoComplete="off" placeholder="Name" />
                      {/* <span id="ContentPlaceHolder1_RequiredFieldValidator1" style={{color:"Red", display:"hidden"}}>Required</span> */}
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <input name="ctl00$ContentPlaceHolder1$txtmob" type="number" id="ContentPlaceHolder1_txtmob" className="form-control" autoComplete="off" placeholder="Enter Your Mobile Number" />
                        {/* <span id="ContentPlaceHolder1_RequiredFieldValidator4" style={{color:"Red", display:"hidden"}}>Required</span> */}
                        {/* <span id="ContentPlaceHolder1_RegularExpressionValidator2" style={{color:"Red", display:"hidden"}}>Invalid Mobile Number</span> */}
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <input name="ctl00$ContentPlaceHolder1$txtemail" type="text" id="ContentPlaceHolder1_txtemail" className="form-control" autoComplete="off" placeholder="Enter Your Email" />
                        {/* <span id="ContentPlaceHolder1_RequiredFieldValidator11" style={{color:"Red", display:"hidden"}}>Required</span> */}
                        {/* <span id="ContentPlaceHolder1_RegularExpressionValidator1" style={{color:"Red", display:"none"}}>Invalid email address</span> */}
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                  <input name="ctl00$ContentPlaceHolder1$txtsub" type="text" id="ContentPlaceHolder1_txtsub" className="form-control" autoComplete="off" placeholder="Enter Your Subject" />
                        {/* <span id="ContentPlaceHolder1_RequiredFieldValidator3" style={{color:"Red", display:"hidden"}}>Required</span> */}
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea name="ctl00$ContentPlaceHolder1$txtmsg" rows="2" cols="20" id="ContentPlaceHolder1_txtmsg" className="form-control" placeholder="Enter Your Message" style={{height:"200px"}}></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-md-12">
                      <input type="submit" name="ctl00$ContentPlaceHolder1$btnsubmit" value="Send Message" id="ContentPlaceHolder1_btnsubmit" className="btn btn-theme btn-radius" style={{fontSize: "x-large"}} />
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 ml-auto sm-mt-5">
              <ul className="contact-info list-unstyled">
                <li className="mb-4"><i className="flaticon-location"></i><span>Address 1:</span>
                  <p><span id="ContentPlaceHolder1_add1" className="address">C-B 2/5,Shivangi Tower, Vibhuti Khand Gomti Nagar, Lucknow 226010</span></p>
                </li>
                  <li className="mb-4"><i className="flaticon-location"></i><span>Address 2:</span>
                  <p><span id="ContentPlaceHolder1_add2" className="address">Vaishali Nagar, Jaipur (Rajasthan)</span></p>
                </li>
                <li className="mb-4"><i className="flaticon-email"></i><span>Email</span><a href="mailto:SUPPORT@APNAEKENDRA.IN"><span id="ContentPlaceHolder1_lblemail" className="address">support@apnaekendra.in</span></a>
                </li>
                <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><span id="ContentPlaceHolder1_lblphone" className="address">9076617189</span>
              
                <span id="ContentPlaceHolder1_lblwhatapp" className="address"></span>
                </li>
              </ul>
            </div>            
          </div>
        </div>
      </section>

      {/* contact end */}

      <section className="o-hidden p-0">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="map iframe-h-2">
          <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.258850632251!2d80.99793271504386!3d26.863515883148718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be356d255b39d%3A0x67675f8f9961f18!2sApna%20E-Kendra!5e0!3m2!1sen!2sin!4v1614158830855!5m2!1sen!2sin" width="100%" height="250px" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
        </div>
            </div>
            </div>
          </div>
        </section>
      </div>
  </div>;
};

export default Contact;
