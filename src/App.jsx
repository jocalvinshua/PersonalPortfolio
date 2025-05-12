import './Style.css';
import { FaReact, FaPython, FaJsSquare, FaDatabase, FaFileExcel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Joshua.C</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#aboutme" className="hover:text-blue-600">About Me</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#project" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contactme" className="hover:text-blue-600">Contact Me</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#aboutme" className="hover:text-blue-600">About Me</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#project" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contactme" className="hover:text-blue-600">Contact Me</a></li>
        </ul>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4 pt-28">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello World! My name is Joshua Calvin</h1>
      <p className="text-base md:text-xl max-w-xl mb-6">
        A creative web developer dedicated to building sleek, modern, and user-friendly web applications.
      </p>
      <a href="https://github.com/jocalvinshua?tab=repositories" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl transition">See All My Project</a>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="aboutme" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition">
          <img
            src="/profile_img.jpg"
            alt="Profile of Joshua"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed max-w-xl">
            I am an enthusiastic web developer and love learning new things to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillItems = [
    { icon: <FaReact className="text-blue-500 text-xl" />, label: 'React' },
    { icon: <FaJsSquare className="text-yellow-500 text-xl" />, label: 'JavaScript' },
    { icon: <SiTailwindcss className="text-sky-500 text-xl" />, label: 'Tailwind CSS' },
    { icon: <FaPython className="text-blue-600 text-xl" />, label: 'Python' },
    { icon: <FaDatabase className="text-indigo-600 text-xl" />, label: 'SQL & NoSQL' },
    { icon: <FaFileExcel className="text-green-600 text-xl" />, label: 'Excel' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skillItems.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
            {skill.icon}
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
}

function Project() {
  const projects = [
    {
      title: "Weather App",
      img: "/weatherAppProject.png",
      desc: "A simple weather application built with React and API integration.",
      link: "https://github.com/jocalvinshua/Weather-App-Project"
    },
    {
      title: "To-Do App",
      img: "/TodoAppProject.png",
      desc: "A task management app built with React that helps users manage daily tasks.",
      link: "https://github.com/jocalvinshua/To-Do-List-Project"
    },
    {
      title: "Recipe Website App",
      img: "/recipeWebsite.png",
      desc: "A recipe website that lets users browse and view categorized recipes.",
      link: "https://github.com/jocalvinshua/Recipe-Website"
    }
  ];

  return (
    <section id="project" className="py-20 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-left mb-10">My Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out p-6 flex flex-col">
            <img src={proj.img} alt={proj.title} className="rounded-lg mb-4 h-40 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.desc}</p>
            <div className="mt-auto">
              <a href={proj.link} target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactme" className="py-20 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center mb-6">Please contact me via email or social media below.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="mailto:calvinjoshua37@gmail.com" className="text-blue-600 hover:underline"><Mail /></a>
        <a href="https://github.com/joshuacalvin" target="_blank" className="text-blue-600 hover:underline"><Github /></a>
        <a href="https://linkedin.com/in/joshua-calvin-12a7a2319" target="_blank" className="text-blue-600 hover:underline"><Linkedin /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Joshua Calvin. All rights reserved.</p>
    </footer>
  );
}
