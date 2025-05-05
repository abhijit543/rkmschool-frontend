import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";

export default function HomeChildCard({ show, onHide, heading, content }) {
  const [teacherData, setTeacherData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  console.log(holidayData);

  useEffect(() => {
    if (show && heading === "Rajgram Teachers") {
      axios
        .get("http://localhost:5000/api/v1/teacher/")
        .then((response) => {
          setTeacherData(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching teacher data", error);
        });
    } else {
      setTeacherData([]);
    }
    if (show && heading === "Holidays") {
      axios
        .get("http://localhost:5000/api/v1/holiday/")
        .then((response) => {
          setHolidayData(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching teacher data", error);
        });
    } else {
      setHolidayData([]);
    }
  }, [show, heading]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>

        {heading === "Rajgram Teachers" && teacherData.length > 0 ? (
          <Table striped bordered hover>
            <thead>
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
        ) : heading === "Rajgram Teachers" ? (
          <p>No teacher data to display</p>
        ) : null}

        {/* Holiday Data */}
        {heading === "Holidays" && holidayData.length > 0 ? (
          <Table striped bordered hover>
            <thead>
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
        ) : heading === "Holidays" ? (
          <p>No holiday data to display</p>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
