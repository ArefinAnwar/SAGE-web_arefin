"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function JoinTheRevolution() {
  const [role, setRole] = useState("hospital");
  const [quantity, setQuantity] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);
  const [dunitPrice, setdunitPrice] = useState(250);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ ...formData, role: selectedRole });
    calculateSavings(selectedRole, quantity);
  };

  const handleQuantityChange = (event) => {
    const qty = parseInt(event.target.value) || 0;
    setQuantity(qty);
    calculateSavings(role, qty);
    handleInputChange(event);
  };

  const calculateSavings = (role, quantity) => {
    let originalPrice = 250;
    let unitPrice = 0;
    if (quantity < 5) {
      unitPrice = 250;
      setdunitPrice(250);
    } else {
      if (role === "hospital") {
        unitPrice = 240;
        setdunitPrice(240);
      } else if (role === "voluntary") {
        unitPrice = 210;
        setdunitPrice(210);
      } else if (role === "influencer") {
        unitPrice = 230;
        setdunitPrice(230);
      }
    }

    const totalSaved = (originalPrice - unitPrice) * quantity;
    setSavedMoney(totalSaved > 0 ? totalSaved : 0);
  };
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quantity: "",
    location: "",
    phone: "",
    country: "",
    email: "",
  });
  const handleInputChange = (event) => {
    const { id, value } = event.target; // Get input field's id and value
    setFormData((prevData) => ({
      ...prevData, // Spread previous data to retain other fields
      [id]: value, // Update the specific field
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, role, quantity, location, phone, country, email } = formData;

    // Gather form data
    // const formData = new FormData(event.target);

    // Send email using EmailJS
    const serviceID = "service_tbaaxnp";
    const templateID = "template_xa1eqfp";
    const publicKey = "7x6YrslQW2FNEUn-O";
    // Simulate sending email (Replace this with your actual backend/email API)
    console.log(formData);
    try {
      emailjs.send(serviceID, templateID, formData, publicKey).then(
        (result) => {
          alert(
            "Your order has been received. We will contact you within 24 hours."
          );
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert(
            "An error occurred while submitting your order. Please try again later."
          );
        }
      );
      console.log(formData);
      alert(
        "Your order has been received, and we will contact you within 24 hours."
      );
      setTimeout(() => {
        setFormData({
          name: "",
          role: "",
          quantity: "",
          location: "",
          phone: "",
          country: "",
          email: "",
        });
      }, 100);
    } catch (err) {
      alert("Failed to send the order. Please try again.");
    }
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="flex flex-col w-full h-auto md:min-h-screen items-center bg-ste-500 overflow-scroll scrollbar-hide md:pb-10 pb-10 ">
      <motion.h1
        className="mt-8 md:mt-[4.5rem] mb-6 text-4xl mx-auto text-center md:text-6xl font-bold text-emerald-400"
        style={
          isMobile
            ? {
                textShadow: "2.5px 1px 1px #ffffff",
              }
            : {
                textShadow: "4px 0px 1px #ffffff",
              }
        }
      >
        Spread the Revolution
      </motion.h1>
      <div className="flex flex-col md:flex-row md:w-11/12 w-[95%] h-10/12 items-center md:items-start mt-10 md:px-10 justify-center">
        <JoinUsCard
          title="As a Hospital"
          description="Partner with us to bring cutting-edge seizure prediction to patients, transforming healthcare with technology"
        />
        <JoinUsCard
          title="As a voluntary organization"
          description="Join hands to make life safer for epilepsy patients—together, we can make a difference"
        />
        {/* <JoinUsCard
          title="As a financial institution"
          description="Empower innovation in healthcare—support SAGE and help us redefine epilepsy management"
        /> */}
        <JoinUsCard
          title="As a health influencer"
          description="Be a voice of change! Advocate for smarter epilepsy care and inspire a healthier tomorrow"
        />
      </div>
      <div className="bg-slate-900 text-emerald-400 min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-11/12 max-w-lg bg-slate-800 rounded-lg p-4 shadow-lg "
        >
          <h2 className="text-2xl font-bold text-center mb-4">Join Us!</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Name"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Role</label>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <button
                type="button"
                onClick={() => handleRoleChange("hospital")}
                className={`py-2 px-4 rounded-lg font-medium ${
                  role === "hospital"
                    ? "bg-emerald-400 text-slate-900"
                    : "bg-slate-700"
                }`}
              >
                Hospital
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("voluntary")}
                className={`py-2 px-4 rounded-lg font-medium ${
                  role === "voluntary"
                    ? "bg-emerald-400 text-slate-900"
                    : "bg-slate-700"
                }`}
              >
                Non-profit Org
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("influencer")}
                className={`py-2 px-4 rounded-lg font-medium ${
                  role === "influencer"
                    ? "bg-emerald-400 text-slate-900"
                    : "bg-slate-700"
                }`}
              >
                Health Influencer
              </button>
            </div>
          </div>

          {/* Quantity Field */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium">
              Quantity (min. 5 to get discount)
            </label>
            <input
              type="number"
              id="quantity"
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Quantity"
              min="0"
              value={formData.quantity}
              onChange={handleQuantityChange}
              required
            />
          </div>

          {/* Savings Display */}
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-semibold">You Save:</span>{" "}
              <span className="text-emerald-400">{savedMoney.toFixed(2)}$</span>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Unit price:</span>{" "}
              <span className="text-emerald-400">{dunitPrice}$</span>
            </p>
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Address"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Phone number"
              required
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Country"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Email"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/80"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function JoinUsCard({ title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="flex flex-col w-full md:w-1/4 px-2 py-4 h-full mx-2 "
    >
      <motion.div
        style={{ willChange: "transform, opacity, scale" }}
        className="flex flex-col items-center justify-center bg-emerald-600 bg-opacity-10 rounded-lg h-28 text-xl py-4 border-2 border-emerald-400"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-center">{title}</h1>
      </motion.div>
      <motion.p
        style={{ willChange: "transform, opacity, scale" }}
        className="text-slate-200 italic text-center text-lg mt-5 px-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {description}
      </motion.p>
      <div></div>
    </div>
  );
}
