import './Style.css'
import { FaReact, FaPython, FaJsSquare, FaDatabase, FaFileExcel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"; 
import { Github, Linkedin, Mail } from 'lucide-react'

export default function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

function Navbar(){
  return(
    <div className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Joshua.C</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  )
}

function Hero(){
  return(
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hello World! My Name is Joshua Calvin</h1>
      <p className="text-xl max-w-xl mb-6">A creative web developer dedicated to building sleek, modern, and user-friendly web applications.</p>
      <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl transition">See My Project</a>
    </section>
  )

}

function AboutMe() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg hover:scale-[1.02] transform transition-transform duration-300 ease-in-out">
          <img 
            src="./src/img/profile_img.jpg" 
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
  return (
    <section className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <FaReact className="text-blue-500 text-xl" />
          React
        </div>
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <FaJsSquare className="text-yellow-500 text-xl" />
          JavaScript
        </div>
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <SiTailwindcss className="text-sky-500 text-xl" />
          Tailwind CSS
        </div>
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <FaPython className="text-blue-600 text-xl" />
          Python
        </div>
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <FaDatabase className="text-indigo-600 text-xl" />
          SQL & NoSQL
        </div>
        <div className="flex items-center gap-2 bg-white py-3 px-5 rounded shadow text-gray-700 font-medium hover:scale-105 hover:shadow-md transition duration-300">
          <FaFileExcel className="text-green-600 text-xl" />
          Excel
        </div>

      </div>
    </section>
  );
}

function Project(){
  return(
    <section className="py-20 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-left mb-10">My Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-gray-50 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] hover:shadow-blue-200 transition-all duration-300 ease-in-out p-6 flex flex-col">
          <img 
            src="./src/img/weatherAppProject.png" 
            alt="Weather App Screenshot" 
            className="rounded-lg mb-4 h-40 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Weather App</h3>
          <p className="text-gray-600 mb-4">
            A simple weather application built with React and API integration. It shows real-time weather data for any city.
          </p>
          <div className="mt-auto">
            <a 
              href="https://github.com/jocalvinshua/Weather-App-Project" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] hover:shadow-blue-200 transition-all duration-300 ease-in-out p-6 flex flex-col">
          <img 
            src="src/img/TodoAppProject.png" 
            alt="To-Do App Screenshot" 
            className="rounded-lg mb-4 h-40 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">To-Do App</h3>
          <p className="text-gray-600 mb-4">
            A task management app built with React that helps users create, check off, and manage their daily to-dos efficiently.
          </p>
          <div className="mt-auto">
            <a 
              href="https://github.com/jocalvinshua/To-Do-List-Project" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] hover:shadow-blue-200 transition-all duration-300 ease-in-out p-6 flex flex-col">
          <img 
            src="./src/img/recipeWebsite.png" 
            alt="Recipe Website Screenshot" 
            className="rounded-lg mb-4 h-40 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Recipe Website App</h3>
          <p className="text-gray-600 mb-4">
            A recipe website that lets users browse, search, and view simple recipes categorized by type. Built with React.
          </p>
          <div className="mt-auto">
            <a 
              href="https://github.com/jocalvinshua/Recipe-Website" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}


function Contact(){
  return(
    <section className="py-20 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center mb-6">Silakan hubungi saya melalui email atau media sosial di bawah ini.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:email@example.com" className="text-blue-600 hover:underline"><Mail /></a>
        <a href="https://github.com/joshuacalvin" className="text-blue-600 hover:underline"><Github /></a>
        <a href="https://linkedin.com/in/joshuacalvin" className="text-blue-600 hover:underline"><Linkedin /></a>
      </div>
    </section>

  )
}

function Footer(){
  return(
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Joshua Calvin. All rights reserved.</p>
    </footer>

  )
}
