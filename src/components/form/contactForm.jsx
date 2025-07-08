import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Frontend validation (optional, but good for user experience)
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return; // Stop the submission
    }

    // Prepare data to send to your serverless function
    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Make a POST request to your Vercel Serverless Function
      // The path '/api/contact' corresponds to your 'api/contact.js' file
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        // Success: Show a positive message to the user
        alert('Your message has been sent successfully! I will get back to you soon.');
        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Error: Read the error message from the serverless function's response
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        alert(`Failed to send message: ${errorData.message || 'An unknown error occurred. Please try again.'}`);
      }
    } catch (clientError) {
      // Handle network errors or other client-side issues
      console.error('Client-side submission error:', clientError);
      alert('A network error occurred. Please check your internet connection or try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#222222] w-full h-[572px] rounded-[16px] p-[33px]">
      <div className="flex gap-[16px] mb-[24px]">
        <div className="w-full">
          <p className="text-white text-[14px]"><label htmlFor="name-input">Name</label></p>
          <input
            id="name-input"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-[#333333] mt-[8px] w-full rounded-[12px] h-[50px] pl-[16px] text-black text-[16px]"
            placeholder="Your name"
          />
        </div>
        <div className="w-full">
          <p className="text-white text-[14px]"><label htmlFor="email-input">Email</label></p>
          <input
            id="email-input"
            name="email"
            type="email" // Important for email validation and mobile keyboards
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-[#333333] mt-[8px] w-full rounded-[12px] h-[50px] pl-[16px] text-black text-[16px]"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-white"><label htmlFor="subject-input">Subject</label></p>
        <input
          id="subject-input"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full h-[50px] rounded-[12px] bg-[#333333] mt-[8px] text-black text-[16px] pl-[16px]"
          placeholder="Project inquiry"
        />
      </div>
      <div className="w-full mt-[24px]">
        <p className="text-white animate-pop"><label htmlFor="message-textarea">Message</label></p>
        <textarea
          id="message-textarea"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full h-[180px] rounded-[12px] bg-[#333333] mt-[8px] text-black text-[16px] pl-[16px] h-[146px]" // Note: duplicate h-[146px] might override h-[180px]
        ></textarea>
      </div>
      <button type="submit" className="w-full h-[48px] rounded-[12px] mt-[30px] bg-gradient-to-r to-[#4ADE80] from-[#22C55E] text-black font-semibold hover:scale-105 glow"> Send Message</button>
      {/* <BtnMessage /> */}
    </form>
  );
}

export default ContactForm;