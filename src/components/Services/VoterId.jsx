import React from 'react';
import Titlesec from '../../data/Titlesec';

const VoterId = () => {
  return <div>
    <Titlesec titlesec="Voter Id Card" />
    <div className="page-content">

    {/* team start */}
    <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <div>
                <div className="service-images">
                <img className="img-fluid w-100" src="images/service/voteridcardbanner.png" alt="moneytransfer" />
                </div>
                <div className="service-details mt-4">
                <h2 className="title">Voter Id Card</h2>
                <p class="lead text-black">
                Voter card is an identifier that also enables a person to vote. To have a voter card, a person should be over the age of 18, in our country and should also be a citizen of our nation. Voter card serves many purposes and should be made by all people to exercise their right to vote.</p>
                <p class="lead text-black">
                Each state has their own service center where you can go and make your voter card, in many instances, they run drives where they send their workers to make it easy for the citizens to get enrolled. But, you can also fill your voter card enrolment form online and work from there to get the voter card.</p>
                <p class="lead text-black">
                In case of movement from one state to another, the voter card needs to be altered accordingly. People are only allowed to vote in the area where they live. This ensures that the result of the poll affects them only and not someone else.</p>
                <p class="lead text-black">
                Making a voter card is a must. It provides us with our right to vote and also gives us the power of choosing the person who would run the city after the election. It affects us directly and that is why it should not be taken lightly.</p>
                <p class="lead text-black">
                {global.company} provides you the best voter card enrollment and verification service. You can get this service from the {global.company} B2B portal, if you want to get this service then contact with us and provide this service to all your customers.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  </div>;
};

export default VoterId;
