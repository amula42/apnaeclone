import React from 'react';
import Titlesec from '../../data/Titlesec';
import Servcard from './Servcard';

const Aeps = () => {
  return <div>
      <Titlesec titlesec="Aeps" />
      <Servcard 
      imgsrc="images/service/aeps_banner.jpg"
      title="Aeps"
      text1="This service empowers the customer to use Aadhaar as an identity to access the Aadhaar enabled bank account and perform basic bank transactions like deposit & withdrawal. These transactions can be easily done using a secure Biometric Scanner which is available at our company. Forget about visiting the branch for getting payments done through your Aadhar Card. We have created a platform to authenticate your Aadhar card data and initiate the payment on your behalf. Using AEPS services, you are allowed to perform specify transactions without any requirement of Digital Signature or debit card."
      text2="This administration engages the client to utilize Aadhaar as a personality to get to the Aadhaar empowered ledger and perform fundamental bank exchanges like store and withdrawal. These exchanges can be effectively done utilizing a protected Biometric Scanner which is accessible at our company. Disregard visiting the branch for completing installments through your Aadhar Card. We have made a stage to verify your Aadhar card information and start the installment for your sake. Utilizing AEPS administrations, you are permitted to perform indicate exchanges with no necessity of Digital Signature or check card." />
  </div>;
};

export default Aeps;
