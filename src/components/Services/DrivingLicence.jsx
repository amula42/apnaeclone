import React from 'react';
import Titlesec from '../../data/Titlesec';
import Servcard from './Servcard';

const DrivingLicence = () => {
  return <div>
    <Titlesec titlesec="Driving Licence" />
    <Servcard 
      imgsrc="images/service/drivinglicensebanner.png"
      title="Driving Licence"
      text1="The driving license is issued by the Regional Transport Authority in India, the Dl (driving license) is an official document that permits the people to operate motor vehicles after they have reached the age of 18 years. If you are looking to apply for driving license (DL), then you are at the right place. Through our website, you can Apply for the driving license. Once you have applied for the driving license, the Regional Transport Authority will provide you the driving test date. Then you will have to visit the RTO centre and take the test. On the basis of your performance, you will be issued a driving license by the Regional Transport Authority."
      text2="Note that, it will be a temporary driving license that will last for 1 months. But after the first month, you can take the final driving test. If you qualify the driving test, you will get a permanent driving license."
      text3="We provide you the the driving license service on their portal. You can get this service at your center and provide this to your customers and earn the good commission on the driving license service." />
  </div>;
};

export default DrivingLicence;
