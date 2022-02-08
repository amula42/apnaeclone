import React from 'react';
import Titlesec from '../../data/Titlesec';

const AllRecharge = () => {
  return <div>
        <Titlesec titlesec="All Recharge" />
        <div className="page-content">

        {/* team start */}
        <section>
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                <div>
                    <div className="service-images">
                    <img className="img-fluid w-100" src="images/service/allrechage.jpg" alt="moneytransfer" />
                    </div>
                    <div className="service-details mt-4">
                    <h2 className="title">All Recharge</h2>
                    <p className="lead text-black">
                        Mobile phone and Data Card Recharge of all the Telecom Service Providers can be done through the {global.company}. This service connects with the Telecom Service Providers to enable customers recharge their mobile real time. Mobile recharge can now be done without any hassle, it has brought to you latest technology, that you can use from anywhere at any time.
                    </p>
                    <p className="lead text-black">
                        Mobile recharge and data packs are the sole and breathe of every person in today’s world. {global.company} provide the best commission based Mobile Recharge services that support all kinds of recharge and bill payments such as prepaid & postpaid mobile recharge, data card recharge, DTH recharge, etc. All these recharges and bill payments works with our one multi recharge. Our sole purpose is to make your recharge experience more enriching and at the same time rewarding and hence on every online recharge we give you exciting deals and offers.
                    </p>
                    <p className="lead text-black">
                        One such instance is online mobile recharge and DTH recharge with the Ways4all it is the most recharge experience. Avail seamless and quick facility online at our website and forget the old troublesome offline process. With Ways for all, you can do easy recharge online anytime and from anywhere, be it from home, office, holiday or travelling, all you need is internet access and that's it.
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

export default AllRecharge;
