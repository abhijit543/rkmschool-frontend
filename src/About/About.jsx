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
    content: `Hi Myself Akhilesh from Mandya district in Karnataka... aiming to achieve Gold medal.`,
  },
];
const About = () => {
  const [showMore, setShowMore] = useState(true);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="full-bg-about">
      <div className="container about-main-head">
        <h1>
          History of Ramakrishna Mission, Rajgram <hr />
        </h1>
      </div>

      <div className="container dmn-maharaj">
        <p className="maharaj-text-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem, dignissimos quae laborum quidem fugit, id enim dolores nostrum voluptatum mollitia nemo labore nesciunt? Quod ratione
          quo impedit modi Swami Devmayananda.
        </p>

        {!showMore && (
          <p className="maharaj-text-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa blanditiis minima corrupti similique vitae! Quia enim incidunt omnis voluptates placeat consequatur aliquam, veniam id
            iure tempore corrupti aut earum!
          </p>
        )}
        <div className="dmn-maharaj-know-more">
          <button style={{ fontWeight: "bold" }} onClick={toggleText}>
            {!showMore ? "Please Click to Read Less" : "Please Click to Read More"}
          </button>
        </div>

        <hr style={{ borderWidth: "9px", color: "black" }} />
      </div>
      <section className="testimonial-section py-5">
        <h2 className="text-center mb-5">Testimonials</h2>
        <Carousel indicators={false} controls={true} interval={null}>
          {testimonials.map((t, idx) => (
            <Carousel.Item key={idx}>
              <div className="testimonial-box mx-auto p-4">
                <div className="text-center">
                  <img src={t.image} alt={t.name} className="testimonial-img mb-3" />
                  <h4 className="testimonial-name">{t.name}</h4>
                </div>
                <p className="testimonial-content">
                  <span className="quote-icon">❝</span> {t.content} <span className="quote-icon">❞</span>
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default About;
