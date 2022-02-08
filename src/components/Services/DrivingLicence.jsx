import React from 'react';
import Titlesec from '../../data/Titlesec';

const DrivingLicence = () => {
  return <div>
    <Titlesec titlesec="Driving Licence" />
    <div className="page-content">

    {/* team start */}
    <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <div>
                <div className="service-images">
                <img className="img-fluid w-100" src="images/service/drivinglicensebanner.png" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                <h2 className="title">Driving Licence</h2>
                <p class="lead text-black">
                The driving license is issued by the Regional Transport Authority in India, the Dl (driving license) is an official document that permits the people to operate motor vehicles after they have reached the age of 18 years. If you are looking to apply for driving license (DL), then you are at the right place. Through our website ({global.company}), you can Apply for the driving license. Once you have applied for the driving license, the Regional Transport Authority will provide you the driving test date. Then you will have to visit the RTO centre and take the test. On the basis of your performance, you will be issued a driving license by the Regional Transport Authority.
                </p>
                    <p class="lead text-black">
                Note that, it will be a temporary driving license that will last for 1 months. But after the first month, you can take the final driving test. If you qualify the driving test, you will get a permanent driving license.</p>
                    <p class="lead text-black">
                {global.company} provide you the the driving license service on their portal. You can get this service at your center and provide this to your customers and earn the good commission on the driving license service.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  </div>;
};

export default DrivingLicence;
