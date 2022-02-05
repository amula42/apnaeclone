import React from 'react';
import { NavLink } from 'react-router-dom';
import {Lupdate, Hservices, Testimonial} from '../data/Sdata';

const Home = () => {

  const company = "Apna E-Kendra";
  const hcompany = "अपना ई केन्द्र";
  const established = "November 2020";

  return <div>
      <section className="fullscreen-banner banner banner-3 p-0 o-hidden grediant-overlay" data-overlay="9">
        <div className="insideText">{company}</div>
        <div className="owl-carousel owl-theme no-pb" data-items="1" data-dots="false" data-autoplay="true" style={{ position:"absolute" }}>
          <div className="item">
            <div className="align-center p-0">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12 order-lg-12">
                    <div className="mouse-parallax info-img">
                      <img className="img-center animated zoomIn delay-2 duration-2" src="images/banner/14.png" alt="banner"/>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 order-lg-1 md-mt-5">
                    <h2 className="mb-4 text-white animated bounce delay-2 duration-4">  
                    <span className="font-w-5 text-black">आप का  स्वागत है | </span> </h2>
                    <h1 className=" mb-4 text-blue animated bounce delay-2 duration-4">  {hcompany} </h1>
                    <h3 className="mb-4 text-white animated bounce delay-2 duration-4">  
                    <span className="font-w-6 text-black"> में  जो देते  है  डिजिटल भुगतान  की  सुविधा | </span> </h3>
                    <p className="lead text-white animated fadeInUp delay-3 duration-4">Start working with an company that provide everything you need to generate awareness, drive traffic, connect with customers.</p>
                    <div className="animated fadeInUp delay-3 duration-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="align-center p-0">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12 order-lg-12">
                    <div className="mouse-parallax info-img">
                      <img className="img-center animated zoomIn delay-2 duration-2" src="images/about/02.png" alt="02"/>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 order-lg-1 md-mt-5">
                            <h1 className=" mb-4 text-blue animated bounce delay-2 duration-4">  {hcompany} </h1>
                    <h2 className="mb-4 text-black animated bounce delay-2 duration-4"> डिजिटल भुगतान की सेवाएं  प्रदान  करता है |  <span className="font-w-5 text-orange "> कही भी  और  कभी  भी </span> </h2>
                  
                    <div className="animated fadeInUp delay-3 duration-4">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        <div className="item">
            <div className="align-center p-0">
              <div className="container">
                <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 order-lg-12">
                <div className="mouse-parallax">
                  <div className="bnr-img1 animated fadeInRight delay-4 duration-4">
                    <img className="img-center rotateme" src="images/banner/01.png" alt=""/>
                  </div>
                  <img className="img-center bnr-img2 animated zoomIn delay-5 duration-4" src="images/banner/02.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 order-lg-1 md-mt-5">
                <h1 className="mb-4 animated bounceInLeft delay-2 duration-4">Looking For Most Powerfull <span className="font-w-5">Digital Payment Service Provider</span> </h1>
                
                <div className="d-flex align-items-center animated fadeInUp delay-4 duration-5"> <a className="btn btn-theme" href="#"><span>Learn More</span></a>
                  <a className="play-btn popup-youtube ml-4 d-flex align-items-center" href="https://www.youtube.com/watch?v=hkRKTdo9rZk"><span>Play Now</span><img className="img-fluid pulse radius-4" src="images/play.png" alt=""/></a>
                </div>
              </div>        
            </div>
                </div>
              </div>
            </div> 
          </div>
        
      </section>

    <div className="page-content">
      <div className="notice sticky">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-9 col-sm-10 col-xs-12">
                <marquee scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();">
                 <h6 className="spacemark">
                  <a href="#" style={{color: "#fff;"}}> अपना ई - केंद्र  का रजिस्ट्रेशन करने के लिए  Online Signup https://apnaekendra.in/MemberRegistration.aspx </a>
                  </h6>
                </marquee>
              </div>
            </div>
          </div>
      </div>

    {/* Latest Update */}
    <section className="pos-r">
      <div className="pattern-3">
        <img className="img-fluid rotateme" src="images/pattern/03.png" alt=""/>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="section-title">
              <h6>Latest Update </h6>
            </div>

         <marquee scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();">
            <ul className="list-unstyled list-icon">
              <li className="mb-3"><i className="flaticon-tick"></i>"अपना ई केंद्र" लाया है "लोन " की एक नयी सुविधा अब आप "अपना ई केंद्र" के साथ जुड़ कर अपने गांव शहर में कही भी किसे भी लोन की सुविधा दे सकते है , इतना ही नहीं प्रत्येक "लोन" देने पर कमीशन की सुविधा अब रिटेलर , डिस्ट्रीब्यूटर , मास्टर , सुपर सभी को मिलेगा। लोन देने पर कमीशन साथ ही साथ , EMI पेमेंट पर भी 0.50% तक कमीशन। देर न करे जल्द ही रजिस्टर करे :- https://apnaekendra.in या संपर्क करे:- 9076617197,96,92,94</li>
          
            </ul>
          </marquee>
          </div>
          <div className="col-lg-7 col-md-12 md-mt-5 wow fadeInRight" data-wow-duration="0.8">
            <div className="owl-carousel owl-theme no-pb" data-dots="false" data-items="2" data-sm-items="1" data-autoplay="true">

              {Lupdate.map((val)=>{
                const {imgs,title} = val;
                return(
                  <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                      <div className="featured-icon">
                      <img className="img-center" src={imgs} alt=""/>
                      </div>
                      <div className="featured-title">
                      <h5>{title}</h5>
                      </div>
                      <div className="featured-desc">
                      </div>
                  </div>
                </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About us */}
    <section className="pos-r">
      <div className="container">
        <div className="row">
          <div className="col-lg-5  image-column bg-contain bg-pos-l" data-bg-img="images/pattern/07.png  ">
            <div className="round-animation1">
             <img className="img-fluid" src="images/about/02.gif" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 ml-auto md-mt-5 wow fadeInLeft" data-wow-duration="0.6">
              <div className="section-title mb-4">
                  <h6>About Us</h6>
                  <h2 className="title">Welcome to {company}</h2>
                  <p>
                      {company} established in {established} year in a short time we made our presence known in India with 60,000+ active agents across 25 states and 500+ districts. {company} is India's most trusted digital services portal which provides more than 50 services like banking, travel, household bill payment, voter pen, and Aadhaar card to its agents, then agents provide these services to their customers and earn commission per transactions.
                      We provide distributors, retailers, master distributors, and state heads id at very reasonable prices to our agents and provide every possible opportunity to our retailers and distributors to earn with minimum investment and maximum return. We trust that "Our Success" is possible just through" Your Success" so we put our best effort to make you succeed by giving round-the-clock support.
                      Cost-Effective We never take more or undersell our product which means all of our products and services are evaluated according to the Industry standards.
                  </p>
              </div>
              {/* <ul className="list-unstyled list-icon-3">
                <li className="mb-2"><i className="fas fa-check"></i> Mattis effic iturut magna pelle sit</li>
                <li className="mb-2"><i className="fas fa-check"></i> Iturut magna pelle ntesque sit</li>
                <li><i className="fas fa-check"></i> Fusce enim nulla mollis eu metus in fringilla</li>
              </ul> */}
          </div>
        </div>
      </div>
    </section>

    <section className="pos-r">
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 ml-auto md-mt-5">
          <div className="white-bg box-shadow radius px-4 py-4 mt-5">
              <div className="row">
                <div className="col-sm-5 xs-mt-3">
                  <div className="counter"> <i className="flaticon-development"></i>
                    <span className="count-number" data-to="2000000" data-speed="500">2000000</span>
                      <span>+</span>
                    <h5>Happy Customer</h5>
                  </div>
                </div>
                 <div className="col-sm-4 xs-mt-3">
                  <div className="counter"> <i className="flaticon-development"></i>
                    <span className="count-number" data-to="500" data-speed="500">500</span>
                      <span>+</span>
                    <h5>Total City</h5>
                  </div>
                </div>
                <div className="col-sm-3 xs-mt-3">
                  <div className="counter"> <i className="flaticon-user"></i>
                    <span className="count-number" data-to="80" data-speed="500">80</span>
                      <span>+</span>
                    <h5>Support Members</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

    {/* <!--about end-->


    <!--service start--> */}

    <section className="green-bg pos-r text-center">
      <div className="pattern-3">
        <img className="img-fluid rotateme" src="images/pattern/03.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h6>Our Service</h6>
              <h2 className="title">We’r Provided Best Digital Payment Services!</h2> 
            </div>
          </div>
        </div>
       
        <div className="row spacedata">
          {Hservices.map((hsval) => {
            const { hsimgs, hstitle, hslink } = hsval;
            return(
              <div className="col-lg-3 col-md-6 wow fadeInLeft" data-wow-duration="0.6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src={hsimgs} alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>{hstitle}</h5>
                  </div>
                  <div className="featured-desc">
                    <a className="btn btn-theme" href={hslink}><span>View</span></a>
                  </div>
                </div>
            </div>
            )
          })} 

        </div>
    
      </div>
       <div className="text-center mt-5">
          <NavLink className="btn btn-theme" to="/services"><span>View More Services</span></NavLink>
        </div>
    </section>

    {/* <!--service end-->

    <!--content start--> */}
    <section className="o-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h2>Smart Solutions for Everyone</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="0.8">
            <div className="info-img pos-r">
              <img className="img-fluid topBottom" src="images/about/044.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 md-mt-5 wow fadeInLeft" data-wow-duration="0.8">
            <div className="section-title mb-4">
              <h2 className="title">Retailer</h2> 
              <p className="mb-0 text-black">{company} is to provide employment to more and more people by providing affordable services so that they can make extra income from their home or shop. {company} gives the highest commission on every service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!--content end-->


    <!--content start--> */}
    <section className="pt-0 o-hidden">
      <div className="container">
        <div className="row align-items-center"> 
          <div className="col-lg-6 col-md-12 order-lg-12 wow fadeInRight" data-wow-duration="0.8">
            <div className="info-img pos-r">
              <img className="img-fluid topBottom" src="images/about/03.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1 md-mt-5 wow fadeInLeft" data-wow-duration="0.8">
            <div className="section-title mb-4">
              <h2 className="title">Distributor</h2> 
              <p className="mb-0 text-black">{company} has brought a golden opportunity for distributors to do business! {company} commits handsome commission to distributors which is more than other service providers in the market. We have now started providing loan facilities to our agents as well.</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>

    <section className="pt-0 o-hidden">
       <div className="container">
    
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="0.8">
            <div className="info-img pos-r">
              <img className="img-fluid topBottom" src="images/about/02.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 md-mt-5 wow fadeInLeft" data-wow-duration="0.8">
            <div className="section-title mb-4">
              <h2 className="title">Individual Business</h2> 
              <p className="mb-0 text-black">{company} offers a golden opportunity for people so that they can connect with us and do their own work from this shop at their home. Our services can make home and shop a customer service center, allowing customers to provide cash inquiries, balance inquiries, bill payments, Aadhaar cards, pen cards, etc. to their customers and also get a commission on every transaction. With which you can get income every month.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    {/* <!--content end-->


    <!--step start--> */}
    <section className="text-center o-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 ml-auto mr-auto">
            <div className="section-title">
              <h6>How It Work</h6>
              <h2 className="title">Three Step For Started Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="0.8">
            <div className="work-process">
              <div className="work-process-inner"> 
                <div className="work-img">
                  <img className="img-center" src="images/how-it-work/01.png" alt=""/>
                  <span className="step-num">01</span>
                </div>
                <h4 className="colorbox2">पंजीकरण करें</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 md-mt-5 wow fadeInRight" data-wow-duration="0.8">
            <div className="work-process">
              <div className="work-process-inner"> 
                <div className="work-img">
                  <img className="img-center" src="images/how-it-work/02.png" alt=""/>
                  <span className="step-num">02</span>
                </div>
                <h4 className="colorbox2">अपना खाता बनाएँ</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 md-mt-5 wow fadeInDown" data-wow-duration="0.8">
            <div className="work-process">
              <div className="work-process-inner">
                <div className="work-img">
                  <img className="img-center" src="images/how-it-work/03.png" alt=""/>
                  <span className="step-num">03</span> 
                </div>
                <h4 className="colorbox2">{hcompany}  की सेवाएं  का उपयोग  करे </h4>
              </div>
            </div>
          </div>s
        </div>
      </div>
    </section>

    {/* <!--step end-->

    <!--testimonial start--> */}
    <section className="animatedBackground" data-bg-img="images/pattern/05.png">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="section-title mb-0">
              <h6>Customer Testimonial</h6>
              <h2 className="title">You Can See our clients feedback What You Say?</h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 md-mt-5">
            <div className="owl-carousel owl-theme" data-items="1">
              {Testimonial.map((testi) => {
                const { thmimg, thnname, thmcntnt, thmlcn } = testi;
                return(
                  <div className="item">
                    <div className="testimonial">
                      <div className="testimonial-img">
                        <img className="img-center" src={thmimg} alt=""/> 
                      </div>
                      <div className="testimonial-content">
                        <p>{thmcntnt}</p>
                        <div className="testimonial-caption">
                          <h5>{thnname}</h5>
                          <label>{thmlcn}</label>
                        </div>
                      </div>
                      <div className="testimonial-quote"><i className="flaticon-quotation"></i>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!--testimonial end--> */}

    <section className="text-center o-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h6>Our Partner</h6>
            </div>
          </div>
        </div>
        <div className="row">

        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm"><img className="d-block w-100" src="images/client/icici.png" alt="1 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/idfc.png" alt="2 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/NSDL_Logo.png" alt="3 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/aeps.png" alt="4 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/bbps.png" alt="5 slide"/></div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm"><img className="d-block w-100" src="images/client/fino.png" alt="7 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/uti.png" alt="5 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/yesbank.png" alt="6 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/NPCI-Logo.png" alt="6 slide"/></div>
                <div className="col-sm"><img className="d-block w-100" src="images/client/digital.png" alt="6 slide"/></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* latter end */}

    </div>

    {/* <!--body content end-->  */}




  </div>;
};

export default Home;
