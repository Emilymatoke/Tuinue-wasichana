import React from 'react';
import '../styling/About.css';
import missionImage from '../assets/WhatsApp Image 2024-05-21 at 11.48.08.jpeg';
import aboutImage from '../assets/about.jpg';
import supportImage from '../assets/WhatsApp Image 2024-05-21 at 11.48.07(1).jpeg';

function About() {
  return (
    <div className="about-page">
      <h2>About Tuinue Wasichana</h2>
      <div className="mission">
        <h3>Mission</h3>
        <p>To empower schoolgirls in Africa, with a spotlight on East Africa, to achieve their full academic potential, and manage their periods with dignity.</p>
      </div>
      <div className="mission-image-container">
        <img src={missionImage} alt="Empowered Girl" />
        <p className="mission-quote">For every year a girl stays in school, her future income increases with 10% to 20%.</p>
      </div>
      <p className="about-text">
        Tuinue Wasichana, established in 2024, was created to raise funds and distribute necessities for menstrual health. The platform believes that all girls have the right to hygienic solutions for their period and this is why we raise funds to provide disadvantaged girls.
      </p>
      <div className="quote-image-container">
        <img src={aboutImage} alt="Girls Education" />
        <p className="quote">According to UNESCO estimates, around the world, 129 million girls are out of school, including 32 million of primary school age, and 97 million of secondary school age. Both individuals and countries benefit from girls’ education. Better educated women tend to be more informed about nutrition and healthcare, have fewer children, marry at a later age, and their children are usually healthier, should they choose to become mothers. They are more likely to participate in the formal labor market and earn higher incomes. A recent World Bank study estimates that the “limited educational opportunities for girls, and barriers to completing 12 years of education, cost countries between US$15 trillion and $30 trillion in lost lifetime productivity and earnings.”</p>
      </div>
      <img src={supportImage} alt="Support Us" className="support-image" />
    </div>
  );
}

export default About;
