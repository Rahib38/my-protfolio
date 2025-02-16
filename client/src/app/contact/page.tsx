import React from 'react'

const ContactPage = () => {
  return (
    <div>
 <section className="py-12 flex justify-center items-center min-h-screen dark:bg-gray-900 bg-white text-gray-900 dark:text-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg mb-6">We`d love to hear from you. Fill out the form and we`ll get back to you as soon as possible.</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Feni, Bangladesh</span>
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>01815170218</span>
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>nadimulrahib38@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form noValidate className="space-y-6">
            <label className="block">
              <span className="text-lg font-semibold">Full Name</span>
              <input type="text" placeholder="Enter your name" className="block w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:ring " />
            </label>
            <label className="block">
              <span className="text-lg font-semibold">Email Address</span>
              <input type="email" placeholder="Enter your email" className="block w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:ring " />
            </label>
            <label className="block">
              <span className="text-lg font-semibold">Message</span>
              <textarea rows={4} placeholder="Your message here..." className="block w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:ring "></textarea>
            </label>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">Submit</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactPage
