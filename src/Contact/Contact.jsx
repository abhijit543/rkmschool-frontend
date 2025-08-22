import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_mobile: "",
    message_type: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    from_mobile: "",
    message_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name) newErrors.from_name = "Name is required";
    if (!formData.from_email) newErrors.from_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.from_email)) newErrors.from_email = "Email is not valid";

    if (!formData.from_mobile) newErrors.from_mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.from_mobile)) newErrors.from_mobile = "Mobile number must be 10 digits";

    if (!formData.message_type) newErrors.message_type = "Please select a purpose";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch("https://rajgram-school-react.vercel.app/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({ icon: "success", title: "Submitted!", text: "Your contact form has been submitted successfully." });

        setFormData({
          from_name: "",
          from_email: "",
          from_mobile: "",
          message_type: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error || "Failed to send message.",
        });
      }
    } catch (err) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Server error. Please try again." });
      console.error(err);
    }
  };

  return (
    <div className="bg-contact">
      <div className="container contact-us">
        <h2 className="contact-title">Contact Us</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input id="from_name" type="text" name="from_name" value={formData.from_name} onChange={handleChange} />
            {errors.from_name && <span className="error">{errors.from_name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input id="from_email" type="email" name="from_email" value={formData.from_email} onChange={handleChange} />
            {errors.from_email && <span className="error">{errors.from_email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="from_mobile">Mobile Number</label>
            <input id="from_mobile" type="tel" name="from_mobile" pattern="[0-9]{10}" value={formData.from_mobile} onChange={handleChange} />
            {errors.from_mobile && <span className="error">{errors.from_mobile}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message_type">Purpose</label>
            <select id="message_type" name="message_type" value={formData.message_type} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Admission">Admission</option>
              <option value="Hostel">Hostel</option>
              <option value="Guest">Guest Visits</option>
              <option value="other">Other</option>
            </select>
            {errors.message_type && <span className="error">{errors.message_type}</span>}
          </div>

          <button type="button" className="submit-btn" onClick={submit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
