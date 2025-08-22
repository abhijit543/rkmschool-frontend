import { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import "./HomeChildCard.css";

export default function HomeChildCard({ show, onHide, heading, content }) {
  const [teacherData, setTeacherData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (heading === "Rajgram Teachers") {
          const response = await axios.get("https://rajgram-school-react.vercel.app/api/v1/teacher/");
          setTeacherData(response.data.message);
        } else if (heading === "Holidays") {
          const response = await axios.get("https://rajgram-school-react.vercel.app/api/v1/holiday");
          setHolidayData(response.data.message);
        }
      } catch (error) {
        console.error(`Error fetching ${heading} data`, error);
      } finally {
        setLoading(false);
      }
    };

    if (show) fetchData();
    else {
      setTeacherData([]);
      setHolidayData([]);
    }
  }, [show, heading]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered style={{ zIndex: 11111111 }}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-4">{content}</p>

        {loading ? (
          <div className="loader-container">
            <div className="bounce-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
            {heading === "Rajgram Teachers" && (
              <div className="table-scroll">
                {teacherData.length > 0 ? (
                  <Table striped bordered hover responsive>
                    <thead className="table-dark sticky-header">
                      <tr>
                        <th>Name</th>
                        <th>Joined Date</th>
                        <th>Qualification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherData.map((teacher, index) => (
                        <tr key={index}>
                          <td>{teacher.name}</td>
                          <td>{teacher.joinedDate}</td>
                          <td>{teacher.qualification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p className="text-center text-muted">No teacher data to display</p>
                )}
              </div>
            )}

            {heading === "Holidays" && (
              <div className="table-scroll">
                {holidayData.length > 0 ? (
                  <Table striped bordered hover responsive>
                    <thead className="table-dark sticky-header">
                      <tr>
                        <th>Holiday Name</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holidayData.map((holiday, index) => (
                        <tr key={index}>
                          <td>{holiday.name}</td>
                          <td>{holiday.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p className="text-center text-muted">No holiday data to display</p>
                )}
              </div>
            )}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
