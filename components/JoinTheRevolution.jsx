"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function JoinTheRevolution() {
  const [role, setRole] = useState("hospital");
  const [quantity, setQuantity] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    calculateSavings(selectedRole, quantity);
  };

  const handleQuantityChange = (event) => {
    const qty = parseInt(event.target.value) || 0;
    setQuantity(qty);
    calculateSavings(role, qty);
  };

  const calculateSavings = (role, quantity) => {
    let originalPrice = 250;
    let unitPrice = 0;

    if (role === "hospital") {
      unitPrice = 210;
    } else if (role === "voluntary") {
      unitPrice = 230;
    } else if (role === "influencer") {
      unitPrice = 240;
    }

    const totalSaved = (originalPrice - unitPrice) * quantity;
    setSavedMoney(totalSaved > 0 ? totalSaved : 0);
  };
  return (
    <div className="flex flex-col w-full h-auto md:min-h-screen items-center bg-ste-500 overflow-scroll scrollbar-hide md:pb-10 pb-10 ">
      <motion.h1
        className="mt-8 md:mt-[4.5rem] mb-6 text-4xl mx-auto text-center md:text-6xl font-bold text-emerald-300"
        style={{
          textShadow: "4px 0px 1px #ffffff",
        }}
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
        <form className="w-11/12 max-w-lg bg-slate-800 rounded-lg p-4 shadow-lg ">
          <h2 className="text-2xl font-bold text-center mb-4">Join Us!</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter your name"
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
                Voluntary Org
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
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter quantity"
              min="0"
              onChange={handleQuantityChange}
              required
            />
          </div>

          {/* Savings Display */}
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-semibold">You Save:</span>{" "}
              <span className="text-emerald-400">${savedMoney.toFixed(2)}</span>
            </p>
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter your address"
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
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter your phone number"
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
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter your country"
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
              className="w-full px-3 py-2 mt-1 text-white bg-slate-900/50 rounded-md"
              placeholder="Enter your email"
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
