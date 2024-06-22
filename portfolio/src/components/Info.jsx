import React from "react";

function Info() {
  return (
    <div>
      {/* Main-2 section Right Div-3  */}
      <div className="my-3">
        {/* right upper Div */}
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-white font-bold text-xl">Personal Info</h3>
          <p className="text-xs text-gray-300 ">
            Here is my personal information,for further correspondence.
          </p>
        </div>
        {/* right lower Div */}
        <div className=" lg:flex gap-5 md:flex justify-center my-3 ">
          <div className="flex flex-col gap-2 mt-3">
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Name </p>
              <p className="text-white font-bold">Silambarasan K</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Age </p>
              <p className="text-white font-bold">23 Yrs</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Nationality </p>
              <p className="text-white font-bold">India</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Contact No </p>
              <p className="text-white font-bold">+91 9894942282</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Email </p>
              <p className="text-white font-bold">simbukaran390@gmail.com</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Linkedin </p>
              <p className="text-white font-bold">silambarasan-k-527b58207</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Github </p>
              <p className="text-white font-bold">simbu008</p>
            </div>
            <div className=" text-xs flex gap-5 lg:text-sm">
              <p className="text-gray-300">Languages </p>
              <p className="text-white font-bold">Tamil, English, Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
