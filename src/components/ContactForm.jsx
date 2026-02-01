import React, { useState } from "react";   

function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("शुक्रिया! आपका संदेश हमें मिल गया है।");
  };

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* बायां हिस्सा: संपर्क जानकारी (Blue Section) */}
        <div className="md:w-1/3 bg-gray-700 p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">संपर्क करें</h2>
          <p className="text-blue-100 mb-6">
            अरावली ई सर्विसेज के बारे में कोई भी सवाल हो, हमें संदेश भेजें।
          </p>
          <div className="space-y-4">
            <p>📍चित्तौडगढ, राजस्थान</p>
            <p>📞 +91 7688964604</p>
            <p>✉️ support@aravliservices.netlify.app</p>
          </div>
        </div>

        {/* दायां हिस्सा: फॉर्म (Form Section) */}
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="md:w-2/3 p-8 space-y-4">
        <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* नाम */}
            <div>
              <label className="block text-sm font-medium text-gray-700">नाम</label>
              <input 
                name="name"
                type="text" 
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="आपका नाम"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            {/* मोबाइल */}
            <div>
              <label className="block text-sm font-medium text-gray-700">मोबाइल</label>
              <input 
                name="mobile"
                type="number" 
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="आपका मोबाइल नंबर"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* मैसेज */}
          <div>
            <label className="block text-sm font-medium text-gray-700">संदेश</label>
            <textarea 
              name="message"
              rows="4" 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 outline-none"
              placeholder="आपका संदेश यहाँ लिखें..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          {/* बटन */}
          <button 
            type="submit"
            className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            संदेश भेजें
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;