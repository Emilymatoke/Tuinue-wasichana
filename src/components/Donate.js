import React from 'react';
import '../styling/Donate.css';
import donateImage from '../assets/donate.jpg'; // Ensure this path is correct
import image1 from '../assets/akwang-primary-school-agago-aangepast-1030x548.jpg';
import image2 from '../assets/ketty-auma-1030x594.jpg';
import image3 from '../assets/rose-gladys-sevitra-susan-lira-kato-pri-sch-aangepast-1030x687.jpg';
import image4 from '../assets/abilnino-primary-school-agago-district-1030x687.jpg';

function Donate() {
  return (
    <div className="donate-page">
      <h2 className="title">The Gift of Dignity</h2>
      <p className="intro-text">
        For every money you donate to us, Tuinue Wasichana donates to each girl it supports. 
        Most importantly, these products are accompanied with education about the use of pads, 
        menstrual hygiene and sexual and reproductive health. This way, we help girls have an 
        informed and dignified period.
      </p>
      <div className="image-container">
        <img src={donateImage} alt="Donation" />
      </div>
      <h3>Your donation includes:</h3>
      <ul>
        <li>1 Schoolgirl Kit, which includes 5 reusable sanitary pads.</li>
        <li>1 pair of Underwear.</li>
        <li>Our educational comic book ‘Girl Talk!’ which explains what happens during menstruation to girls in an accessible and engaging manner.</li>
        <li>Training on the use and care of the pads Schoolgirl Kit.</li>
        <li>Access to the full MHH Education Curriculum and Data Collection Toolkit. These tools provide partners with comprehensive content on menstrual health including the reproductive system, the menstrual cycle and how to track it as well as tips on how to be happy and healthy during your period.</li>
        <li>Building of latrines and provision of clean water.</li>
      </ul>
      <div className="additional-images">
        <img src={image1} alt="Akwang Primary School" />
        <img src={image2} alt="Ketty Auma" />
        <img src={image3} alt="Rose Gladys Sevitra Susan Lira Kato Pri Sch" />
        <img src={image4} alt="Abilnino Primary School Agago District" />
      </div>
    </div>
  );
}

export default Donate;

