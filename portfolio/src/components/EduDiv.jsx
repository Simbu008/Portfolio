import React from "react";
function EduDiv(){
    return(
        <div>
            {/* Main-2 section Right Div-1 */}
          <div className="my-3">
                {/* right upper Div */}
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="text-white font-bold text-xl">My Education</h3>
                  <p className="text-xs text-gray-300 ">
                    I have excelled in my educational career, consistently
                    achieving top grades
                  </p>
                </div>
                {/* right lower Div */}
                <div className=" flex flex-col gap-3 my-3 mx-5 md:mx-20">
                  {/* cards */}
                  <div className="flex flex-col gap-1 bg-card p-4">
                    <h5 className="text-secondary text-xs ">2023</h5>
                    <h5 className="text-white text-sm font-bold">
                      Bachelor of Engineering CSE
                    </h5>
                    <p className="text-gray-300 text-xs ">
                      Dr.Mahalingam College of Engineering and technology
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 bg-card p-4">
                    <h5 className="text-secondary text-xs ">2019</h5>
                    <h5 className="text-white text-sm font-bold">
                      Higher Secondary Certificate{" "}
                    </h5>
                    <p className="text-gray-300 text-xs ">
                      National Higher Secondary School
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 bg-card p-4">
                    <h5 className="text-secondary text-xs ">2017</h5>
                    <h5 className="text-white text-sm font-bold">
                      Secondary School Leaving Certificate.
                    </h5>
                    <p className="text-gray-300 text-xs  text-justify">
                      Iqra Matriculation School
                    </p>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default EduDiv;