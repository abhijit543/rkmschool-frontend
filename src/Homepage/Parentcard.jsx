import React, { useState } from "react";
import HomeChildCard from "./childcard";
import { Button, Card } from "react-bootstrap";

export default function Parentcard() {
  const [modalShow, setModalShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalContent, setModalContent] = useState("");

  // Show Modal and Fetch Data
  const showModal = async (heading, content) => {
    setModalHeading(heading);
    setModalContent(content);

    setModalShow(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="card-flex">
            <Card.Title>Teachers Association</Card.Title>
            <Button variant="primary" onClick={() => showModal("Rajgram Teachers")}>
              Open
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="card-flex">
            <Card.Title>Holiday List 2025</Card.Title>
            <Button variant="success" onClick={() => showModal("Holidays")}>
              Open
            </Button>
          </Card.Body>
        </Card>
      </div>

      <HomeChildCard show={modalShow} onHide={() => setModalShow(false)} heading={modalHeading} content={modalContent} />
    </>
  );
}
