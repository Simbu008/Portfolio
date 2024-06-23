import "./output.css";
import NavBar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faDownload,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import SkillDiv from "./components/SkillDiv";
import Info from "./components/Info";
import EduDiv from "./components/EduDiv";
import { useState } from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState("skills");
  const [activeButton, setActiveButton] = useState("skills");

  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  //  form input data control
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit button functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    try {
      const response = await fetch(
        "https://portfolio-server-eight-wine.vercel.app/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully");
        setFormData(initialFormData); // Reset the form to initial state
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("An error occured");
    }
  };

  // why hire me sectio tab butoons functionality
  const handleButtonClick = (component, buttonName) => {
    setActiveComponent(component);
    setActiveButton(buttonName);
  };

  // code for handling the download button for resume download
  const handleDownload = () => {
    // URL of the file you want to download
    const fileUrl =
      "https://drive.google.com/file/d/15hGDNq-cnUPhojv2E74SHrClXx4xF-D4/view?usp=drivesdk";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    // Open the file in a new tab
    link.target = "_blank";

    // Append to the document body
    document.body.appendChild(link);

    // Trigger the download by programmatically clicking the link
    link.click();

    // Remove the link after triggering download
    document.body.removeChild(link);
  };
  return (
    <div className="App">
      <div className="w-full min-h-screen bg-primary flex flex-col px-6 py-3 gap-3 md:px-10 md:py-7 lg:px-16 ">
        <header>
          <NavBar></NavBar>
        </header>
        <main className="font-jetbrains">
          {/* hero Section div */}
          <div className="flex flex-col lg:w-1/2">
            {/* hero Section first Div{Content Div} */}
            <div className="md:w-2/3 ">
              <h5 className="text-gray-300 text-sm lg:font-bold lg:text-base">
                Developer
              </h5>
              <h1 className="text-white text-4xl lg:text-5xl">Hello I'm</h1>
              <h1 className="text-secondary text-4xl lg:text-6xl">
                Silambarasan K
              </h1>
              <p className="text-gray-300 text-xs text-justify lg:text-sm">
                Iam Excel at crafting elegant digital technologies and Iam
                proficient in various programming languages and technologies
              </p>
            </div>
            {/* hero section second Div {Buttons div} */}
            <div className="text-xs  font-bold flex  items-center lg:text-sm">
              <button
                className="bg-primary px-3 py-2 border  border-secondary rounded-full text-secondary my-3 hover:bg-secondary hover:text-black"
                onClick={handleDownload}
              >
                Download Resume <FontAwesomeIcon icon={faDownload} />
              </button>

              <div className="px-2 space-x-3">
                <a
                  href="https://www.linkedin.com/in/silambarasan-k-527b58207"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="bg-primary px-1 py-1 border border-secondary rounded-full text-secondary  hover:bg-secondary hover:text-black"
                  />
                </a>
                <a href="https://github.com/Simbu008" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="bg-primary px-1 py-1 border border-secondary rounded-full text-secondary  hover:bg-secondary hover:text-black"
                  />
                </a>

                <a href="mailto:simbukaran390@gmail.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="bg-primary px-1 py-1 border border-secondary rounded-full text-secondary  hover:bg-secondary hover:text-black"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Main-1 Section Div */}
          <div className="md:grid grid-rows-2 grid-flow-col gap-5 lg:flex items-center">
            <div className="my-3 text-justify flex flex-col gap-2 order-1 lg:order-1 lg:basis-1/3">
              <h3 className="text-white font-tourney text-2xl">01</h3>
              <h3 className="text-white font-bold text-xl">Web Development</h3>
              <p className="text-gray-300 text-xs">
                Specialize in creating dynamic, responsive websites and web
                applications using modern technologies.
              </p>
            </div>
            <div className="my-3 text-justify flex flex-col gap-2 order-3 lg:order-2 lg:basis-1/3">
              <h3 className="text-white font-tourney text-2xl">02</h3>
              <h3 className="text-white font-bold text-xl">UI/UX Design</h3>
              <p className="text-gray-300 text-xs">
                Specializing in creating intuitive and engaging user interfaces
                and experiences for web and mobile applications.
              </p>
            </div>
            <div className="my-3 text-justify flex flex-col gap-2 order-2 lg:order-3 lg:basis-1/3">
              <h3 className="text-white font-tourney text-2xl">03</h3>
              <h3 className="text-white font-bold text-xl">Java Development</h3>
              <p className="text-gray-300 text-xs">
                A proficient Java developer in building robust, scalable, and
                high-performance applications with a strong understanding of
                software design.
              </p>
            </div>
          </div>
          {/* Main-2 Section Div */}
          <div className="my-3 lg:flex ">
            {/* Main-2 section Left Div */}
            <div className="flex flex-col gap-2 my-3 lg:basis-1/3">
              {/* left upper Div */}
              <div className="flex flex-col gap-2 md:justify-center md:items-center text-center">
                <h4 className="text-white text-2xl font-bold">Why Hire Me?</h4>
                <p className="text-gray-300 text-xs  ">
                  creating visually appealing, user-centric applications that
                  are both functional and scalable.
                </p>
              </div>
              {/* left Lower Div */}
              <div className="flex flex-col gap-1.5 mx-10">
                <button
                  className={`${
                    activeButton === "skills"
                      ? "bg-secondary text-primary"
                      : "bg-primary border border-secondary text-secondary"
                  } rounded-lg font-bold px-3 py-1.5 `}
                  onClick={() => handleButtonClick("skills", "skills")}
                >
                  Skills
                </button>
                <button
                  className={`${
                    activeButton === "education"
                      ? "bg-secondary text-primary"
                      : "bg-primary border border-secondary text-secondary"
                  } rounded-lg font-bold px-3 py-1.5 `}
                  onClick={() => handleButtonClick("education", "education")}
                >
                  Education
                </button>

                <button
                  className={`${
                    activeButton === "info"
                      ? "bg-secondary text-primary"
                      : "bg-primary border border-secondary text-secondary"
                  } rounded-lg font-bold px-3 py-1.5 `}
                  onClick={() => handleButtonClick("info", "info")}
                >
                  Personal Info
                </button>
              </div>
            </div>
            <div className="basis-2/3 text-white">
              {activeComponent === "skills" && <SkillDiv />}
              {activeComponent === "education" && <EduDiv />}
              {activeComponent === "info" && <Info />}
            </div>
          </div>
          {/* Contact Section Div */}
          <div className="lg:flex gap-6" id="contact">
            {/* Contact form Div */}
            <div className=" bg-card p-6 lg:w-1/2">
              <h2 className="font-bold text-xl text-secondary ">
                Let us work Together
              </h2>
              <form
                onSubmit={handleSubmit}
                className=" mt-3 flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  className="text-sm bg-primary text-white p-3 rounded-sm"
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  className="text-sm bg-primary text-white p-3 rounded-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="leave your email here"
                  className="text-sm bg-primary text-white p-3 rounded-sm"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Contact Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="text-sm bg-primary text-white p-3 rounded-sm"
                />
                <input
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message here"
                  className="text-sm bg-primary text-white p-3 rounded-sm"
                />
                <button
                  className="font-bold bg-secondary px-3 py-1.5 rounded-full"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Conatact handle Div */}
            <div className="my-3 flex flex-col gap-5 ">
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl text-secondary bg-card p-3"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-300">phone</p>
                  <p className="text-white text-sm">+91 9894942282</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-2xl text-secondary bg-card p-3"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-300">location</p>
                  <p className="text-white text-sm">India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl text-secondary bg-card p-3"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-300">email</p>
                  <p className="text-white text-sm">simbukaran390@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="my-3 text-center">
            <p className="text-gray-600 text-xs">
              © 2024 Simbu Karan All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
