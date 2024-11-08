const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-8 text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-800 text-white p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-gray-800 text-white p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full bg-gray-800 text-white p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="https://github.com"
          className="text-blue-500 hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="text-blue-500 hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://whatsapp.com"
          className="text-blue-500 hover:text-blue-400"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
