import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Result.css";
const Result = () => {
  const results = [
    { year: 2025, image: "/results/2025.jpg" },
    { year: 2024, image: "/images/2011.jpg" },
    { year: 2023, image: "/images/2011.jpg" },
    { year: 2022, image: "/images/2011.jpg" },
    { year: 2021, image: "/images/2011.jpg" },
    { year: 2020, image: "/images/2011.jpg" },
    { year: 2019, image: "/images/2011.jpg" },
    { year: 2018, image: "/images/2011.jpg" },
    { year: 2017, image: "/images/2011.jpg" },
    { year: 2016, image: "/images/2013.jpg" },
    { year: 2015, image: "/images/2011.jpg" },
    { year: 2014, image: "/images/2011.jpg" },
    { year: 2013, image: "/images/2011.jpg" },
    { year: 2012, image: "/images/2011.jpg" },
    { year: 2011, image: "/images/2011.jpg" },
  ];

  return (
    <div>
      <h2 className="text-center text-white">Secondary Results</h2>
      <h3 className="text-center text-white schl-name mb-3">Ramakrishna Ashrama Vidyamandir – 731222</h3>
      <Accordion defaultActiveKey="0">
        {results.map((result, index) => (
          <Accordion.Item eventKey={index.toString()} key={result.year}>
            <Accordion.Header>MADHYAMIK RESULTS {result.year}</Accordion.Header>
            <Accordion.Body>
              <img src={result.image} alt={`Result ${result.year}`} style={{ width: "100%" }} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Result;
