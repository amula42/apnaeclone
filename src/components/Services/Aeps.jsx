import React from 'react';
import Titlesec from '../../data/Titlesec';

const Aeps = () => {
  return <div>
      <Titlesec titlesec="Aeps" />
        <div className="page-content">

        {/* team start */}
        <section>
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                <div>
                    <div className="service-images">
                    <img className="img-fluid w-100" src="images/service/aeps_banner.jpg" alt="moneytransfer" />
                    </div>
                    <div className="service-details mt-4">
                    <h2 className="title">Aeps</h2>
                    <p className="lead text-black">
                    This service empowers the customer to use Aadhaar as an identity to access the Aadhaar enabled bank account and perform basic bank transactions like deposit & withdrawal. These transactions can be easily done using a secure Biometric Scanner which is available at our {global.company}. Forget about visiting the branch for getting payments done through your Aadhar Card. We have created a platform to authenticate your Aadhar card data and initiate the payment on your behalf. Using AEPS services, you are allowed to perform specify transactions without any requirement of Digital Signature or debit card.
                    </p>
                    <p className="lead text-black">
                    This administration engages the client to utilize Aadhaar as a personality to get to the Aadhaar empowered ledger and perform fundamental bank exchanges like store and withdrawal. These exchanges can be effectively done utilizing a protected Biometric Scanner which is accessible at our {global.company}. Disregard visiting the branch for completing installments through your Aadhar Card. We have made a stage to verify your Aadhar card information and start the installment for your sake. Utilizing AEPS administrations, you are permitted to perform indicate exchanges with no necessity of Digital Signature or check card.
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

export default Aeps;
