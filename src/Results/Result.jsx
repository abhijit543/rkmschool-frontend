import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import "./Result.css";
import axios from "axios";

const Result = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      await axios.get(`https://rajgram-school-react.vercel.app/api/v1/result`).then((data) => {
        setResults(data.data.message);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="result-container">
      <h2 className="text-center text-white">Secondary Results</h2>
      <h3 className="text-center text-white schl-name mb-3">Ramakrishna Ashrama Vidyamandir – 731222</h3>

      {loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        <Accordion defaultActiveKey="0" flush>
          {results.map((result, index) => (
            <Accordion.Item eventKey={index.toString()} key={result._id || index}>
              <Accordion.Header>MADHYAMIK RESULTS {result.year}</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover responsive className="result-table">
                  <thead>
                    <tr>
                      <th>No. of Students</th>
                      <th>Appeared</th>
                      <th>Passed</th>
                      <th>1st Division</th>
                      <th>2nd Division</th>
                      <th>Pass</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{result.datayear.students}</td>
                      <td>{result.datayear.appeared}</td>
                      <td>{result.datayear.passed}</td>
                      <td>{result.datayear.division.first}</td>
                      <td>{result.datayear.division.second}</td>
                      <td>{result.datayear.division.pass}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Result;
