import React from 'react';

// Progress bar component
const ProgressBar = ({ label, progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <span>{label}</span>
    </div>
  );
};

function CharityPage() {
  // Sample data for progress bars
  const progressData = [
    { label: 'Sanitary Towels Distributed', progress: 75 },
    { label: 'Clean Water Projects', progress: 50 },
    { label: 'Sanitation Facilities', progress: 35 },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      name: 'Atieno',
      role: 'Donor',
      quote: "I'm proud to support such an impactful cause. Keep up the great work!",
    },
    {
      name: 'Wanjiku',
      role: 'Beneficiary',
      quote: 'Thanks to this charity, I can attend school without worrying about basic necessities.',
    },
  ];

  // Sample data for impact stories
  const impactStories = [
    {
      title: 'A Girl\'s Journey to Education',
      story:
        'Meet Sarah, a young girl from a rural village. Before our charity intervened, Sarah had to walk long distances to fetch water, often missing school. With the installation of clean water facilities, Sarah\'s life has changed. She now attends school regularly and dreams of becoming a doctor.',
      image: 'https://www.shutterstock.com/image-photo/happy-little-girl-walking-street-600nw-2187361011.jpg',  
    },
    
    // Add more impact stories as needed
  ];

  return (
    <div className="charity-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Tuinue Wasichana</h1>
          <p>Empowering school-going girls with sanitary towels, clean water, and proper sanitation facilities.</p>
          <button className="btn btn-primary">Donate Now</button>
        </div>
      </header>
      <section className="impact-section">
        <div className="container">
          <h2>Our Charity Impact</h2>
          <div className="impact-cards">
            <div className="impact-card card1">
              <div className="card-image"></div>
              <div className="card-content">
                <h3>Sanitary Towels Distributed</h3>
                <p>Over 10,000 girls provided with sanitary towels annually.</p>
              </div>
            </div>
            <div className="impact-card card2">
              <div className="card-image"></div>
              <div className="card-content">
                <h3>Clean Water Projects</h3>
                <p>20 schools equipped with clean water facilities.</p>
              </div>
            </div>
            <div className="impact-card card3">
              <div className="card-image"></div>
              <div className="card-content">
                <h3>Sanitation Facilities</h3>
                <p>15 schools provided with new sanitation facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars for Impact */}
      <section className="progress-section">
        <div className="container">
          <h2>Our Impact Progress</h2>
          <div className="progress-bars">
            {progressData.map((data, index) => (
              <ProgressBar key={index} label={data.label} progress={data.progress} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What People Are Saying</h2>
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p>{testimonial.quote}</p>
                <p className="testimonial-info">
                  <span className="name">{testimonial.name}</span>, <span className="role">{testimonial.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Impact Stories */}
<section className="impact-stories-section">
  <div className="container">
    <h2>Impact Stories</h2>
    <div className="impact-stories">
      {impactStories.map((story, index) => (
        <div key={index} className="impact-story">
          <div className="story-image">
            <img src={story.image} alt={`Image for ${story.title}`} />
          </div>
          <div className="story-content">
            <h3>{story.title}</h3>
            <p>{story.story}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    
    </div>
  );
}

export default CharityPage;
