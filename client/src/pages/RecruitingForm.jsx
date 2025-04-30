import React from "react";

function AgentsRecruiting() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Recruit the Right Agents for Your Business</h1>
      <p className="text-lg mb-8 text-gray-600">
        Fill out the form below and we’ll connect you with top-performing Sales, CSR, or Recruiting agents.
      </p>

      <form 
        action="https://formspree.io/f/mwpoprql" 
        method="POST" 
        className="space-y-6 text-left"
      >
        <div>
          <label className="block mb-2 font-semibold">Company Name</label>
          <input 
            type="text" 
            name="company" 
            placeholder="Octela + Rigo Productions" 
            value="Octela + Rigo Productions"
            readOnly
            className="w-full p-3 rounded border" 
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Type of Agents Needed</label>
          <input 
            type="text" 
            name="agentType" 
            placeholder="Sales, CSR, Cold Caller..." 
            className="w-full p-3 rounded border" 
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Contact Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-3 rounded border" 
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Phone Number</label>
          <input 
            type="text" 
            name="phone" 
            placeholder="Phone Number (optional)" 
            className="w-full p-3 rounded border" 
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Additional Notes</label>
          <textarea 
            name="notes" 
            placeholder="Other requirements, preferred skills, etc..." 
            className="w-full p-3 rounded border" 
            rows="4"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default AgentsRecruiting;
