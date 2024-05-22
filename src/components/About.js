import React from 'react';

function About() {
  return (
    <div className="about-page container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">About Tuinue Wasichana</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Tuinue Wasichana is a non-profit organization dedicated to empowering young girls in underserved communities through access to essential resources and opportunities. Our mission is to create a world where every girl has the tools and support she needs to thrive, regardless of her background or circumstances.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Founded on the belief that education and health are fundamental rights, we focus on providing sanitary towels, clean water projects, and improved sanitation facilities to schools and communities in need. By addressing these critical areas, we aim to remove the barriers that prevent girls from attending school and achieving their full potential.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Our programs are designed to foster a supportive environment where girls can learn, grow, and aspire to reach their dreams. We work closely with local partners, schools, and volunteers to ensure that our initiatives are sustainable and impactful. Through community engagement and education, we strive to break the cycle of poverty and empower the next generation of leaders.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        At Tuinue Wasichana, we believe in the power of collective action. By joining hands with donors, volunteers, and community members, we can make a lasting difference in the lives of countless girls. Together, we can create a brighter future where every girl has the opportunity to succeed.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Thank you for your support and commitment to our cause. With your help, we can continue to make a positive impact and ensure that no girl is left behind.
      </p>
      <div className="text-center mt-8">
        <img src="https://www.shutterstock.com/image-photo/happy-little-girl-walking-street-600nw-2187361011.jpg" alt="Empowered Girl" className="inline-block rounded-lg shadow-lg"/>
      </div>
    </div>
  );
}

export default About;
