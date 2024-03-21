import React, { useState } from "react";

// Contact component that renders the contact form for the portfolio
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation for required fields
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    // Update validation errors state
    setErrors(newErrors);

    // Check if there are no validation errors
    if (Object.keys(newErrors).length === 0) {
      // Logic for form submission
      console.log(formData);
    }
  };

  return (
    <main>
      <h2 className="flex text-3xl font-bold justify-center items-center py-8 pb-0 text-slate-600">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
          {errors.name && (
            <div className="text-red-500 text-xs mt-1">{errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
          {errors.email && (
            <div className="text-red-500 text-xs mt-1">{errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
          {errors.message && (
            <div className="text-red-500 text-xs mt-1">{errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
