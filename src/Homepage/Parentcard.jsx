import { useState } from "react";
import HomeChildCard from "./childcard";
import { Button, Card } from "react-bootstrap";
import "./ParentCard.css";

export default function Parentcard() {
  const [modalShow, setModalShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalContent, setModalContent] = useState("");

  // Show Modal
  const showModal = (heading, content) => {
    setModalHeading(heading);
    setModalContent(content);
    setModalShow(true);
  };

  return (
    <div className="parent-container">
      <div className="card-wrapper">
        <Card className="custom-card">
          <Card.Body className="card-body">
            <Card.Title>Teachers Association</Card.Title>
            <Button className="btn-gradient btn-hover" onClick={() => showModal("Rajgram Teachers", "Here is the list of teachers.")}>
              View
            </Button>
          </Card.Body>
        </Card>

        <Card className="custom-card">
          <Card.Body className="card-body">
            <Card.Title>Holiday List 2025</Card.Title>
            <Button className="btn-gradient btn-success btn-hover" onClick={() => showModal("Holidays", "Here is the list of holidays.")}>
              View
            </Button>
          </Card.Body>
        </Card>
      </div>

      <HomeChildCard show={modalShow} onHide={() => setModalShow(false)} heading={modalHeading} content={modalContent} />
    </div>
  );
}
