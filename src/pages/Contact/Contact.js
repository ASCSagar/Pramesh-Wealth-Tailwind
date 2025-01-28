import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import emailjs from "emailjs-com";

const branches = [
  {
    name: "AKOTA",
    address:
      "F-13, Om park Society Opp. Kalash Circle, Near White Potato restaurant, Akota, Vadodara -390012",
  },
  {
    name: "MANJALPUR",
    address:
      "1st floor ,109 lillaria paramount opp icici bank Manjalpur 390011",
  },
  {
    name: "GANGOTRI",
    address:
      "5, swastik apartment, Near Gangotri Apartment, R V desai road, Vadodara – 390001",
  },
  {
    name: "WAGHODIA ROAD",
    address:
      "FF-D-6 Gajanan park Co-op Hsg Soc., Opp Indrapuri Atithi Gruh, Waghodia road, Vadodara -390019",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateOnePromise = emailjs.send(
      "service_2oba7nq",
      "template_p5y4jrd",
      formData,
      "Y0rnccQhZBlQb2bWi"
    );

    const templateTwoPromise = emailjs.send(
      "service_2oba7nq",
      "template_0jp5c53",
      formData,
      "Y0rnccQhZBlQb2bWi"
    );

    Promise.all([templateOnePromise, templateTwoPromise])
      .then((responses) => {
        console.log("Emails sent successfully:", responses);
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("error");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-soft"
    >
      <h2 className="text-2xl font-semibold mb-4 text-primary-700">
        Get in Touch
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border border-secondary-600 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border border-secondary-600 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-secondary-600 rounded"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-2 border border-secondary-600 rounded"
          required
        >
          <option value="">Service Interested</option>
          <option value="mutual_funds">Mutual Funds</option>
          <option value="insurance">Insurance</option>
          <option value="fixed_income">Fixed Income Securities</option>
          <option value="real_estate">Real Estate</option>
          <option value="loans">Loans</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border border-secondary-600 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition duration-300"
        >
          Send Message
        </button>
        {status === "success" && (
          <p className="text-green-500 mt-2">
            Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-2">
            Failed to send your message. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
};

const ContactInfo = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-primary-700">{title}</h2>
      {children}
    </div>
  );
};

const BranchInfo = ({ name, address }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 mt-2"
    >
      <h3 className="font-semibold text-primary-600">{name}</h3>
      <p className="text-sm text-secondary-600">{address}</p>
    </motion.div>
  );
};

const Contact = () => {
  const [activeBranch, setActiveBranch] = React.useState(null);

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <ContactInfo title="Main Office">
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-1" />
                <p className="text-secondary-600">
                  Pramesh Wealth Pvt. Ltd. "Pramesh House" 8, Vedant Bunglow,
                  Main Kalali road, Kalali, Vadodara- 390012
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                <p className="text-secondary-600">+91-89800 27229</p>
              </div>
            </ContactInfo>

            <ContactInfo title="Our Branches">
              {branches.map((branch, index) => (
                <div key={branch.name} className="mb-2">
                  <button
                    className="w-full text-left p-2 flex justify-between items-center bg-primary-100 hover:bg-primary-200 rounded transition duration-300"
                    onClick={() =>
                      setActiveBranch(activeBranch === index ? null : index)
                    }
                  >
                    <span>{branch.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        activeBranch === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeBranch === index && (
                    <BranchInfo address={branch.address} />
                  )}
                </div>
              ))}
            </ContactInfo>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-soft">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">
            Location Map
          </h2>
          <div className="w-full aspect-w-4 aspect-h-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29538.037538860368!2d73.162309!3d22.26834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7e6c7e25675%3A0x7d7190b6d655a076!2sPramesh%20Wealth%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1729531945865!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pramesh Wealth Pvt Ltd Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
