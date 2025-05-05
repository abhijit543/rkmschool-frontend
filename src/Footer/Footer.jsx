import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#cc8400", color: "white", padding: "40px 20px" }}>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 style={{ fontWeight: "bold", fontSize: "2rem", textShadow: "0 0 3px red, 0 0 5px #00f" }}>Contact Details and Timings</h2>

          <div className="my-4">
            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-home fa-2x me-3"></i>
              <p className="mb-0">Ramakrishna Mission, Ramakrishna Ashram Marg, New Delhi - 110055</p>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-clock fa-2x me-3"></i>
              <div>
                <p className="mb-0">
                  <strong>Visiting Hours:</strong>
                </p>
                <p className="mb-0">05.00 am to 12.00 noon</p>
                <p className="mb-0">04:00 pm to 9.00 pm (Apr - Sep)</p>
                <p className="mb-0">3:30 pm to 8:30 pm (Oct - Mar)</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-sun fa-2x me-3"></i>
              <div>
                <p className="mb-0">
                  <strong>Arati Timings:</strong>
                </p>
                <p className="mb-0">Mangalarati: 5 am</p>
                <p className="mb-0">Evening Arati: At sunset</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <i className="fas fa-envelope fa-2x me-3"></i>
              <p className="mb-0">
                <a href="mailto:delhi@rkmm.org" className="text-white text-decoration-none">
                  delhi@rkmm.org
                </a>
              </p>
            </div>

            <div className="d-flex align-items-start">
              <i className="fas fa-phone fa-2x me-3"></i>
              <p className="mb-0">
                <a href="tel:+9101145626785" className="text-white text-decoration-none">
                  +91 - 011 45626785
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.3852219086884!2d87.86893887441856!3d24.541346657954346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa40309c449e0b%3A0xa6a49bc45302965d!2sRamakrishna%20Ashram%20Vidyamandir!5e0!3m2!1sen!2sin!4v1716296530702!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ramakrishna Mission Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
