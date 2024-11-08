/* eslint-disable react/no-unknown-property */
// /* eslint-disable react/no-unescaped-entities */
// import CV from "../assets/CV.pdf";
// const HeroSection = () => {
//   const viewPortfolio = () => {
//     window.open(CV, "_blank", re);
//   };

//   return (
//     <section className="">
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white w-full text-center px-4">
//         <h1 className="text-5xl font-bold mb-4">
//           I'am Muhammad Ahmad El-kufahn
//         </h1>
//         <p className="text-lg text-gray-300 mb-8">
//           Web Developer Specializing in Frontend & Backend
//         </p>
//         <div className="flex flex-wrap justify-center sm:flex-row gap-4">
//           <button
//             onClick={viewPortfolio}
//             className="bg-blue-500 w-fit px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
//           >
//             View Portfolio
//           </button>
//           <a
//             href={CV}
//             download={true}
//             className="bg-purple-500 w-fit px-6 py-2 rounded-full hover:bg-purple-600 transition duration-200"
//           >
//             Download Resume
//           </a>
//         </div>
//         <div className="mt-10 flex space-x-4 justify-center flex-wrap">
//           {["Python", "JavaScript", "ReactJS", "TailwindCSS", "Django"].map(
//             (tech) => (
//               <div key={tech} className="text-center">
//                 <div className="text-2xl mb-1">{/* Insert icons here */}</div>
//                 <p className="text-gray-400 text-sm">{tech}</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//       <img src="../assets/model1.png" alt="" srcset="" />
//     </section>
//   );
// };

// export default HeroSection;
import { motion } from "framer-motion"; // For animations
import { Canvas } from "@react-three/fiber"; // For 3D animations
import { OrbitControls } from "@react-three/drei"; // For smooth 3D rotation
import { FaPython, FaJsSquare, FaReact, FaCss3Alt } from "react-icons/fa"; // Placeholder icons
import { SiDjango, SiTailwindcss } from "react-icons/si";

const HeroSection = () => {
  const skillIcons = [
    { icon: <FaPython size={30} />, color: "#306998" },
    { icon: <FaJsSquare size={30} />, color: "#F7DF1E" },
    { icon: <FaReact size={30} />, color: "#61DAFB" },
    { icon: <FaCss3Alt size={30} />, color: "#1572B6" },
    { icon: <SiDjango size={30} />, color: "#092E20" },
    { icon: <SiTailwindcss size={30} />, color: "#38BDF8" },
  ];

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center h-screen bg-gray-900 text-white w-full text-center px-4">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl lg:text-S5xl font-bold mb-4">
          I'm Muhammad Ahmad eL-KUFAHN
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Web Developer Specializing in Frontend & Backend
        </p>
        <div className="flex flex-wrap justify-center sm:flex-row gap-4 mb-6">
          <button
            onClick={() => console.log("View Portfolio")}
            className="bg-blue-500 w-fit px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          >
            View Portfolio
          </button>
          <a
            href="/path/to/CV.pdf"
            download={true}
            className="bg-purple-500 w-fit px-6 py-2 rounded-full hover:bg-purple-600 transition duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image and 3D Section */}
      <div className="lg:w-1/2 relative w-full h-96 lg:h-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-48 h-48 lg:w-60 lg:h-60 object-cover rounded-full shadow-lg"
        />

        {/* 3D Rotating Skill Icons */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} />
          {skillIcons.map((skill, index) => (
            <motion.mesh
              key={index}
              initial={{ x: Math.random() * 3, y: Math.random() * 3 }}
              animate={{ x: [-1, 1], y: [-1, 1], z: [0, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <torusGeometry args={[0.3, 0.1, 16, 100]} />
              <meshStandardMaterial color={skill.color} />
              <textGeometry attach="geometry" />
            </motion.mesh>
          ))}
        </Canvas>
      </div>
    </section>
  );
};

export default HeroSection;
