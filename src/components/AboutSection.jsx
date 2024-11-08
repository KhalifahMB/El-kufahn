const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-16 px-8 text-center"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        I&rsquo;m a full-stack developer with expertise in modern web
        technologies, building user-centric web applications that deliver
        seamless experiences.
      </p>
      <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">
        Download Resume
      </button>
    </section>
  );
};

export default AboutSection;
