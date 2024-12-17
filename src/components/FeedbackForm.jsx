import React, { useState } from "react";

const FeedbackForm = ({onSubmit}) => {

  const [service, setService] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { service, rating, name, email, comment };
    onSubmit(data)

    setService("");
    setRating("");
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800 p-4">
      <div className="w-full max-w-lg bg-gray-700 text-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Feedback Form
        </h2>
        <form className="w-full" onSubmit={submitHandler}>
          {/* Service Dropdown */}
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium">
              Service
            </label>
            <select
              onChange={(e) => setService(e.target.value)}
              value={service}
              id="service"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-400"
            >
              <option value="">Select a service</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Product Delivery">Product Delivery</option>
              <option value="Product Quality">Product Quality</option>
            </select>
          </div>

          {/* Rating Dropdown */}
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium">
              Rating
            </label>
            <select
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              id="rating"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-400"
            >
              <option value="">Select rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-800"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-800"
            />
          </div>

          {/* Comment Field */}
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium">
              Comment
            </label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              id="comment"
              rows="3"
              placeholder="Write your feedback here..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-800"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
