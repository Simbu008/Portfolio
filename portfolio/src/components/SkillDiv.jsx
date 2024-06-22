import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faJs,
  faReact,
  faFigma,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function SkillDiv() {
  return (
    <div>
      {/* Main-2 section Right Div-2 */}
      <div className="my-3">
        {/* right upper Div */}
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-white font-bold text-xl">My Skills</h3>
          <p className="text-xs text-gray-300 ">
            Here's a snapshot of my skills
          </p>
        </div>
        {/* right lower Div */}
        <div className="text-white text-7xl mt-3 grid grid-rows-4 grid-flow-col gap-3 justify-center md:grid md:grid-rows-2  ">
          <FontAwesomeIcon icon={faHtml5} className="bg-card py-4 px-6 " />
          <FontAwesomeIcon icon={faCss3} className="bg-card py-4 px-4 " />
          <FontAwesomeIcon icon={faJs} className="bg-card py-4 px-5" />
          <FontAwesomeIcon icon={faReact} className="bg-card py-4 px-4" />
          <FontAwesomeIcon icon={faNodeJs} className="bg-card py-4 px-5" />
          <FontAwesomeIcon icon={faFigma} className="bg-card py-4 px-6" />
          <FontAwesomeIcon icon={faJava} className="bg-card py-4 px-6" />
          <FontAwesomeIcon icon={faDatabase} className="bg-card py-4 px-5" />
        </div>
      </div>
    </div>
  );
}

export default SkillDiv;
