import React from 'react';
import Titlesec from '../../data/Titlesec';

const PaytmBank = () => {
  return <div>
    <Titlesec titlesec="Paytm Payments Bank" />
    <div className="page-content">

    {/* team start */}
    <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <div>
                <div className="service-images">
                <img className="img-fluid w-100" src="images/service/paytmpayment.jpg" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                <h2 className="title">Paytm Payments Bank</h2>
                <p class="lead text-black">
                Bharat Bill Payment System conceptualized system driven by National Payments Corporation of India (NPCI). It is a one-stop bill payment platform for all bills â€“ electricity - across India with certainty, reliability and safety of transactions. This service is active in {global.company}. Bharat Bill Payment System conceptualized framework driven by National Payments Corporation of India (NPCI). It is a one-stop charge installment stage for all bills â€“ power, versatile, broadband and landline, DTH, Gas, Water, and so on - across India with assurance, unwavering quality and security of exchanges. This administration is dynamic in {global.company}. Bharat Bill Payment System conceptualized framework driven by National Payments Corporation of India (NPCI).</p>
                <p class="lead text-black">

                It is a one-stop charge installment stage for all bills â€“ power - across India with assurance, dependability and wellbeing of exchanges. This administration is dynamic in {global.company}. Bharat Bill Payment System conceptualized structure driven by National Payments Corporation of India (NPCI). It is a one-stop charge portion stage for all bills â€“ power, flexible, broadband and landline, DTH, Gas, Water, etc - across India with affirmation, immovable quality and security of trades. This organization is dynamic in {global.company}.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  </div>;
};

export default PaytmBank;
