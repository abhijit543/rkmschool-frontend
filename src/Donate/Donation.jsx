import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../Contact/Contact.css";
const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpay = (order) => {
    const options = {
      key: "rzp_test_f99qB9EJhb6jEX",
      amount: order.amount,
      currency: order.currency,
      name: "Donation",
      description: "Support Us",
      order_id: order.id,
      handler: async function (response) {
        try {
          await axios.post("https://rajgram-school-react.vercel.app/api/v1/donate/save-donation", {
            ...formData,
            amount: formData.amount,
            paymentId: response.razorpay_payment_id,
          });
          Swal.fire({ icon: "success", title: "Submitted!", text: "Donation Successful! Thank you 🙏" });
          setFormData({
            name: "",
            email: "",
            mobile: "",
            amount: "",
          });
        } catch (error) {
          console.log(error);
          alert("Error saving donation");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const res = await axios.post("https://rajgram-school-react.vercel.app/api/v1/donate/create-order", {
        amount: formData.amount,
      });
      loadRazorpay(res.data); // now Razorpay will be available
    } catch (error) {
      console.log(error);
      alert("Error creating order");
    }
  };

  return (
    <div className="bg-donate">
      <div className="container contact-us">
        <h2 className="contact-title">Donate Now</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input name="email" placeholder="Your Email" id="from_email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="from_name">Mobile</label>
            <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required type="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="from_name">Amount</label>
            <input name="amount" placeholder="Amount (INR)" type="number" value={formData.amount} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-btn">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
