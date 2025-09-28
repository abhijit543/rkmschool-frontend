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
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755836240/2016_uupoe4.webp" alt="Ramakrishna Mission" />
          </div>
          <div className="about-text">
            <h1>History of Ramakrishna Ashram, Rajgram</h1>
            <p><strong>Ramkrishna Ashram Vidyamandir</strong> was founded on 12th January, 2006 to spread the life and message of Sri Ramakrishna, Holy Sri Sri Maa and Swami Vivekananda, the prophet of this modern age.......</p>
            {!showMore && <p>True and truthful Swamiji said: “Education is the panacea of all diseases.”
Education, in other words, means value-oriented education that makes and shapes disciplined students. <br/>To the children of the poor and backward community from this arid and underdeveloped area, the school started functioning on 6th April, 2006 with only 18 students in a thatched house in an open field.<br/>Since then, the school has been running smoothly and has also produced good results in the Secondary Examination.
<br/>At present the total number of students studying in Primary & Secondary Units is 750. The Ashram also manages another school named Ramkrishna Ashram Vivekananda Vidyapith. In this institution, 250 students from all communities pursue their studies with free spirit and enthusiasm.
<br/>
For the religious and cultural development of the people, various religious and cultural functions are conducted. For all the students residing in our hostel, it is obligatory that they must attend the prayer held daily in the morning and evening.
<br/>
The values of honesty, character, chastity, purity and piety, unselfishness, love and sacrifice for others, above all the sense of surrender to the all-pervasive and omniscient reality, are being taught to our students through the messages of the noble and illuminating lives of the religious leaders of various faiths and sects.
</p>}
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
