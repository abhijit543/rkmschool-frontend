import "./About.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const testimonials = [
  {
    name: "Akhilesh",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Hi Myself Akhilesh from Mandya district in Karnataka... aiming to achieve Gold medal.`,
  },
  {
    name: "Abhijit",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Hi Myself Abhijit from Mandya district in Karnataka... aiming to achieve Gold medal.`,
  },
  {
    name: "Ramesh",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Ramesh from Karnataka shares his experience...`,
  },
  {
    name: "Suresh",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Suresh from Karnataka shares his journey...`,
  },
  {
    name: "Pooja",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Pooja from Karnataka shares her story...`,
  },
  {
    name: "Neha",
    image: "https://static3.toyotabharat.com/images/ttti/ttti-testimonial-thumbnail-akhilesh.png",
    content: `Neha from Karnataka shares her experience...`,
  },
];

const About = () => {
  const [showMore, setShowMore] = useState(true);

  const toggleText = () => setShowMore(!showMore);

  // Helper to group testimonials per slide
  const groupTestimonials = (array, size) => {
    const grouped = [];
    for (let i = 0; i < array.length; i += size) {
      grouped.push(array.slice(i, i + size));
    }
    return grouped;
  };

  // Responsive: 3 per slide on desktop
  const slides = groupTestimonials(testimonials, 3);

  return (
    <>
      <div className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755756231/samples/cloudinary-group.jpg" alt="Ramakrishna Mission" />
          </div>
          <div className="about-text">
            <h1>History of Ramakrishna Mission, Rajgram</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            {!showMore && <p>Additional history content...</p>}
            <button onClick={toggleText}>{!showMore ? "Read Less" : "Read More"}</button>
          </div>
        </div>
      </div>

      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <Carousel indicators={false} interval={null}>
          {slides.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="testimonial-slide">
                {group.map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <img src={t.image} alt={t.name} />
                    <h4>{t.name}</h4>
                    <p>❝ {t.content} ❞</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default About;
