import React from 'react';
import Titlesec from '../../data/Titlesec';

const Bbps = () => {
  return <div>
    <Titlesec titlesec="BBPS" />
    <div className="page-content">

    {/* team start */}
    <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <div>
                <div className="service-images">
                <img className="img-fluid w-100" src="images/service/bbpsbanners.jpg" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                <h2 className="title">BBPS</h2>
                <p className="lead text-black">
                Bharat Bill Payment System conceptualized system driven by National Payments Corporation of India (NPCI). It is a one-stop bill payment platform for all bills – electricity, mobile, broadband and landline, DTH, Gas, Water, etc - across India with certainty, reliability and safety of transactions. This service is active in {global.company}. Bharat Bill Payment System conceptualized framework driven by National Payments Corporation of India (NPCI). It is a one-stop charge installment stage for all bills – power, versatile, broadband and landline, DTH, Gas, Water, and so on - across India with assurance, unwavering quality and security of exchanges. This administration is dynamic in {global.company}.
                </p>
                <p className="lead text-black">
                There are touch points in BBPS which means that these people or buildings are registered under BBPS and is authorized to accept bills on the behalf of the company. With our services you can make the bill payments from the comfort of your home. You can make the bill payment by one of the several methods available under the payment option. Bringing A Revolution in india bill payment market, {global.company} enable every citizen to pay their different bills under the same window. This unified ecosystem brings banks, non banks and online payment platforms under one roof as its official authorized units for bill collections. Getting A Revolution india charge installment market, {global.company} empower each resident to take care of their various tabs under a similar window. This brought together biological system brings banks, non banks and online installment stages under one rooftop as its authority approved units for charge assortments.
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

export default Bbps;
