import React from 'react';
import Titlesec from '../../data/Titlesec';
import Servcard from './Servcard';

const VoterId = () => {
  return <div>
    <Titlesec titlesec="Voter Id Card" />
    <Servcard 
      imgsrc="images/service/voteridcardbanner.png"
      title="Voter Id Card"
      text1="Voter card is an identifier that also enables a person to vote. To have a voter card, a person should be over the age of 18, in our country and should also be a citizen of our nation. Voter card serves many purposes and should be made by all people to exercise their right to vote."
      text2="Each state has their own service center where you can go and make your voter card, in many instances, they run drives where they send their workers to make it easy for the citizens to get enrolled. But, you can also fill your voter card enrolment form online and work from there to get the voter card."
      text3="In case of movement from one state to another, the voter card needs to be altered accordingly. People are only allowed to vote in the area where they live. This ensures that the result of the poll affects them only and not someone else."
      text4="Making a voter card is a must. It provides us with our right to vote and also gives us the power of choosing the person who would run the city after the election. It affects us directly and that is why it should not be taken lightly."
      text5="We provides you the best voter card enrollment and verification service. You can get this service from our B2B portal, if you want to get this service then contact with us and provide this service to all your customers." />
  </div>;
};

export default VoterId;
