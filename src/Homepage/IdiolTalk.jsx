import React from "react";
import "./IdiolTalk.css";
const IdiolTalk = () => {
  return (
    <div className="zigzag-container">
      <div className="zigzag-item">
        <img src="/idiol/card-1.jpg" alt="Image 1" className="zigzag-image" />
        <div className="zigzag-content">
          <h2>Content Heading 1</h2>
          <p>This is some content that will be displayed next to the first image. It is part of a zigzag layout.</p>
        </div>
      </div>

      <div className="zigzag-item reverse" style={{ "flex-direction": "column" }}>
        <img src="/idiol/card-1.jpg" alt="Image 2" className="zigzag-image" />
        <div className="zigzag-content">
          <h2>Content Heading 2</h2>
          <p>This content will appear on the opposite side of the image, creating the zigzag effect.</p>
        </div>
      </div>

      <div className="zigzag-item">
        <img src="/idiol/card-1.jpg" alt="Image 3" className="zigzag-image" />
        <div className="zigzag-content">
          <h2>Content Heading 3</h2>
          <p>This is another example, and the image will be on the left side while the content is on the right.</p>
        </div>
      </div>
    </div>
  );
};

export default IdiolTalk;
