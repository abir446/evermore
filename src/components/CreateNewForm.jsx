'use client'
import React, { useState } from 'react';


export default function App() {
  // State to hold form data: eventName, and selectedPackage.
  const [formData, setFormData] = useState({
    eventName: '',
    selectedPackage: '',
    photoUploadStart: '',
    photoUploadEnd: '',
  });
  const [eventCreated, setEventCreated] = useState(false);
  const [dateError, setDateError] = useState('');

  // Define package details
  const packages = {
    'package1': { days: 2, storage: '500GB', validity: '1-month', price: '₹2,000' },
    'package2': { days: 2, storage: '1TB', validity: '2-month', price: '₹2,500' },
    'package3': { days: 10, storage: '2TB', validity: '3-month', price: '₹4,000' },
  };

  // Handle changes in the form inputs and update the state.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle initial form submission to "create" the event.
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!formData.eventName || !formData.selectedPackage) {
      alert("Please fill out all fields.");
      return;
    }
    // Simulate event creation and show the next form section.
    setEventCreated(true);
  };

  // Handle the final form submission for checkout with validation.
  const handleCheckout = (e) => {
    e.preventDefault();
    // Clear previous errors
    setDateError('');

    const { photoUploadStart, photoUploadEnd, selectedPackage } = formData;
    const selectedDays = packages[selectedPackage].days;

    const startDate = new Date(photoUploadStart);
    const endDate = new Date(photoUploadEnd);

    // Calculate the difference in milliseconds
    const timeDiff = endDate.getTime() - startDate.getTime();
    // Convert to days
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    if (dayDiff < 0) {
      setDateError('End date cannot be before the start date.');
      return;
    }
    
    // Validate based on the package days
    if (dayDiff >= selectedDays) {
      setDateError(`The upload window cannot be more than ${selectedDays} days for this package.`);
      return;
    }

    // If validation passes
    console.log('Final Form Submitted:', formData);
    alert('Proceeding to checkout! Check the console for final data.');
  };

  // Render the initial form if the event has not been created.
  if (!eventCreated) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 font-sans">
        <form onSubmit={handleCreateEvent} className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Create New Event
          </h1>
          <p className="text-center text-gray-500 text-lg">
            Fill out the details below to set up your photo-sharing event.
          </p>
          {/* Event Name Input */}
          <div className="space-y-2">
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              required
              placeholder="e.g., Evermore Wedding"
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200"
            />
          </div>

          {/* Package Dropdown */}
          <div className="space-y-2">
            <label htmlFor="selectedPackage" className="block text-sm font-semibold text-gray-700">
              Choose a Media Package
            </label>
            <select
              id="selectedPackage"
              name="selectedPackage"
              value={formData.selectedPackage}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a plan</option>
              <option value="package1">2-day media upload, 500GB storage, 1-month validity (₹2,000)</option>
              <option value="package2">2-day media upload, 1TB storage, 2-month validity (₹2,500)</option>
              <option value="package3">10-day media upload, 2TB storage, 3-month validity (₹4,000)</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Create Event
          </button>
        </form>
      </div>
    );
  }

  // Render the photo upload date form after the event is "created".
  const selectedPackage = packages[formData.selectedPackage];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-sans">
      <form onSubmit={handleCheckout} className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Set Photo Upload Dates
        </h2>
        <p className="text-center text-gray-500 text-lg">
          Your selected plan has a {selectedPackage.days}-day upload window.
        </p>

        {/* Photo Upload Start Date */}
        <div className="space-y-2">
          <label htmlFor="photoUploadStart" className="block text-sm font-semibold text-gray-700">
            Start Date for Upload
          </label>
          <input
            type="date"
            id="photoUploadStart"
            name="photoUploadStart"
            value={formData.photoUploadStart}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200"
          />
        </div>

        {/* Photo Upload End Date */}
        <div className="space-y-2">
          <label htmlFor="photoUploadEnd" className="block text-sm font-semibold text-gray-700">
            End Date for Upload
          </label>
          <input
            type="date"
            id="photoUploadEnd"
            name="photoUploadEnd"
            value={formData.photoUploadEnd}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition duration-200"
          />
          {dateError && (
            <p className="text-red-500 text-sm mt-1">{dateError}</p>
          )}
        </div>
        
        {/* Checkout Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        >
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}
