import React from 'react';
import { Lupdate } from '../data/Sdata';
import Titlesec from '../data/Titlesec';

const About = () => {
  return <div>
      <Titlesec titlesec="About Us"/>
      <section className="pos-r o-hidden">
        <div className="pattern-3">
          <img className="img-fluid rotateme" src="images/pattern/03.png" alt=""/>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="section-title">
                <h6>About Us</h6>
                <h2 className="title">Welcome to <span className="apnacolor">{global.company}</span></h2> 
              </div>
              <p>
                  {global.company} established in {global.established} year in a short time we made our presence known in India with 60,000+ active agents across 25 states and 500+ districts. {global.company} is India's most trusted digital services portal which provides more than 50 services like banking, travel, household bill payment, voter pen, and Aadhaar card to its agents, then agents provide these services to their customers and earn commission per transactions.
                  We provide distributors, retailers, master distributors, and state heads id at very reasonable prices to our agents and provide every possible opportunity to our retailers and distributors to earn with minimum investment and maximum return. We trust that "Our Success" is possible just through" Your Success" so we put our best effort to make you succeed by giving round-the-clock support.
                  Cost-Effective We never take more or undersell our product which means all of our products and services are evaluated according to the Industry standards.
              </p>
            </div>
            <div className="col-lg-7 col-md-12 md-mt-5">
              <div className="owl-carousel owl-theme no-pb" data-dots="false" data-items="2" data-sm-items="1" data-autoplay="true">
                {Lupdate.map((val,ind)=>{
                  const {imgs,title} = val;
                  return(
                    <div className="item" key={ind}>
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

      {/* tab start */}
      <section className="green-bg animatedBackground"  style={{backgroundImage: "url(images/pattern/05.png)"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="tab style-2 ">
                {/* Nav tabs */}
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist"> <a className="nav-item nav-link active" id="nav-tab1" data-toggle="tab" href="#tab1-1" role="tab" aria-selected="true">{global.hcompany}  क्या है </a>
                    <a className="nav-item nav-link" id="nav-tab2" data-toggle="tab" href="#tab1-2" role="tab" aria-selected="false">हम क्या करते हैं  </a>
                    <a className="nav-item nav-link" id="nav-tab3" data-toggle="tab" href="#tab1-3" role="tab" aria-selected="false">हमसे  क्यों जुड़े</a>
                    <a className="nav-item nav-link" id="nav-tab4" data-toggle="tab" href="#tab1-4" role="tab" aria-selected="false">हमारा  विज़न  </a> 
                  </div>
                </nav>
                {/* Tab panes */}
                <div className="tab-content" id="nav-tabContent">
                  <div role="tabpanel" className="tab-pane fade show active" id="tab1-1">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <img className="img-fluid" src="images/about/02.png" alt=""/>
                      </div>
                      <div className="col-lg-6 col-md-12 md-mt-5">
                        <h4 className="title">{global.hcompany}  क्या है </h4>
                        <p>{global.company} भारत में वन-स्टॉप B2B सेवा प्रदाता है। जो सभी प्रकार की CSP सेवाएँ जैसे  (AEPS, BBPS, DMT, बैंकिंग, यूटिलिटी बिल इत्यादि ) देता हैं |  हमारे  पास  कुशल  और  विशेषज्ञों की टीम  है जिसमें व्यवसाय विश्लेषक, सॉफ्टवेयर आर्किटेक्ट, डेटाबेस विशेषज्ञ, प्रोग्रामर, परीक्षक और परियोजना प्रबंधक शामिल हैं। हमारे विशेषज्ञ आपके व्यावसायिक लक्ष्यों को प्राप्त करने के लिए गुणवत्ता की सेवा करने में कुशल हैं।हमारे पास वर्षों का अनुभव है और एक विश्वसनीय वितरण ढांचा जो निरंतरता की गारंटी देता है और आपके बिजनेस को कुशलता  पुर्वक चालने में मदद करात है। </p>
                        
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab1-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <img className="img-fluid" src="images/about/02.png" alt=""/>
                      </div>
                      <div className="col-lg-6 col-md-12 md-mt-5">
                        <h4 className="title">हम क्या करते हैं </h4>
                        <p>{global.hcompany} भारत का सबसे  विश्वनिये  डिजिटल  सर्विसेज पोर्टल है जो  बैंकिंग, ट्रैवेल, घरेलू  बिल पेमेंट, वोटर पेन और  आधार कार्ड जैसी 50 से अधिक   सर्विसेज  अपने एजेंटो को देता  है  फिर एजेंट अपने  ग्राहकों को ये सर्विसेज उपलबध करते है और कमीशन के द्वारा  आपने  रोजगार  करते है |</p>
                        <p>हमारे ऑफिस में कार्यरत कर्मचारियों द्वारा हम उनको हर तरह  से सहायता प्रदान भी कराते  हैं |</p>
                        <p>{global.hcompany} डिस्ट्रीब्यूटर , रिटेलर , मास्टर  डिस्ट्रीब्यूटर और स्टेट हेड कि  id बहुत ही  उचित मूल्य में  अपने एजेंटो को देता है, इससे  हम पुरे भारत  में अपने एजेंट बनाते हैं। उस  id  से एजेंट  अपना बिज़नेस घर या दुकान को  ग्राहक सेवा केन्द्र बनाकर  करते  हैं |</p>
                        <p>{global.hcompany} सुनहरा लोग के लिए लाया ताकि वो हमसे जोड़कर अपने घर ये दुकान से स्वयं का रोज़गार कर सकें।</p>                        
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab1-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <img className="img-fluid" src="images/about/02.png" alt=""/>
                      </div>
                      <div className="col-lg-6 col-md-12 md-mt-5">
                      <h4 className="title">हमसे  क्यों जुड़े</h4>                   
                      <p>{global.company} इंडिया का सबसे तेज बढ़ता हुआ डिजिटल  सर्विस प्रदता पोर्टल  है , जिसकी स्थापना नवम्बर  2020 को हुई  थी और  इतने थोड़े  वक़्त  में  हमने हज़ारो  लोगो को हमारे  साथ जोड़  लिया  है जो की हमरे लिए एक उपलब्धि  है और   दिन  प्रतिदिन  हमारे साथ  लोग जुड़ते ही  जा रहे, जिसका  कारण  हमारी  अपने  एजेंटो  को  दी  गई सेवा &amp; सपोर्ट  है  और दूसरा  हमारा डिजिटल  पोर्टल भारत  में  सबसे सस्ती और विश्वसनीय सर्विसेज  देता है | </p>
                      <p>{global.company} अपने एजेंटो को सस्ती  सर्विस  के साथ साथ सबसे जायदा कमीशन भी देता है  जो  पुरे भारत में  हमारे द्वारा ही दिया जाता  है | 
                      हम हामारे डिजिटल पोर्टल में AEPS, BBPS , FasTag, गैस  बुकिंग, बिजली बिल , गैस कनेक्शन , माइक्रो एटीएम , क्रेडिट  कार्ड बिल पे , मनी ट्रांसफर इत्यादि सर्विसेज देते  है |    </p>
                      </div>
                    </div>
                  </div> 
                  <div role="tabpanel" className="tab-pane fade" id="tab1-4">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <img className="img-fluid" src="images/about/02.png" alt="" />
                      </div>
                      <div className="col-lg-6 col-md-12 md-mt-5">
                        <h4 className="title">हमारा  विज़न  </h4>
                        <p>{global.hcompany}  का विज़न  है   सस्ती  सर्विसेस प्रदान  कर  अधिक से  अधिक  लोगो को रोज़गार  देना ताकि वो अपने घर या दुकान  से  एक्स्ट्रा  इनकम  कर सके।  {global.hcompany}  हर  सर्विसेज पर  सबसे अधिक कमीशन देता है |  </p>
                        <p>हमारी  सर्विसेस   से घर और दुकान  को ग्राहक सर्विस  केंद्र   बना सकते हो जिससे नकद  लेन-देन के  साथ  बैलेंस  इन्क्वायरी, बिल पेमेंट, आधार कार्ड, पेन कार्ड  आदि   की  सुविधा  अपने ग्राहकों  को दे सकते  है  और हर ट्रांसक्शन  पर कमीशन  भी प्राप्त  करें। जिससे  हर महीने  इनकम  प्राप्त  कर सकते है |  </p>
                        <p>हम अब अपने एजेंटो को लिए लोन की सुविधा भी देने  लगे  हैं | </p>

                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tab end */}

      {/* counter start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="counter style-2">
                <img className="img-center" src="images/counter/01.png" alt="" /> <span className="count-number" data-to="97551" data-speed="500"><span id="ContentPlaceHolder1_lblagent">97551</span></span>
                <h5>Agent</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 xs-mt-5">
              <div className="counter style-2">
                <img className="img-center" src="images/counter/02.png" alt="" /> <span className="count-number" data-to="10699" data-speed="500"><span id="ContentPlaceHolder1_lbldm">10699</span></span>
                <h5>District Manager</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 sm-mt-5">
              <div className="counter style-2">
                <img className="img-center" src="images/counter/03.png" alt="" /> <span className="count-number" data-to="1753" data-speed="500"><span id="ContentPlaceHolder1_lblmd">1753</span></span>
                <h5>Zonal District Manager</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 sm-mt-5">
              <div className="counter style-2">
                <img className="img-center" src="images/counter/04.png" alt="" /> <span className="count-number" data-to="1736" data-speed="500"><span id="ContentPlaceHolder1_lblshcount">1736</span></span>
                <h5>Head Of State</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* client logo end */}
  </div>;
};

export default About;
