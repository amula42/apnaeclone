import React from 'react';
import Titlesec from '../../data/Titlesec';

const MoneyTransfer = () => {
  return <div>
      <Titlesec titlesec="Money Transfer" />
      <div className="page-content">

      {/* team start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div>
                <div className="service-images">
                  <img className="img-fluid w-100" src="images/service/moneytransfer3.png" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                  <h2 className="title">Money Transfer</h2>
                  <p className="lead text-black">
                    You can easily transfer money from {global.company} anytime, anywhere and this is an easy way to transfer money and also it is secure and authentic. This facility is provided to you 24 hours a day 365 days. {global.company} has a robust intra-bank transfer and IMPS facility, using which our Adhikari can help customers remit funds to a wide array of banks or locations in real-time. The money is safe during transit, thanks to the highly secure process with multiple authentication levels. {global.company} Wallet is an RBI approved semi-closed PPI wallet linked to the sender’s mobile number which is highly secure.
                  </p>
                  <p className="lead text-black">
                  You can without much of a stretch exchange cash from {global.company} whenever, anyplace and this is a simple method to move cash and furthermore it is secure and genuine. This office is given to you 24 hours every day 365 days. {global.company} has a strong intra-bank move and IMPS office, utilizing which our Adhikari can assist clients with transmitting assets to a wide cluster of banks or areas continuously. The cash is protected during travel, because of the exceptionally secure cycle with numerous verification levels. {global.company} Wallet is a RBI endorsed semi-shut PPI wallet connected to the sender's versatile number which is exceptionally secure.
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

export default MoneyTransfer;
