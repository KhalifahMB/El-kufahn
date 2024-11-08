const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#blog" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="hover:text-blue-500">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://whatsapp.com" className="hover:text-blue-500">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
