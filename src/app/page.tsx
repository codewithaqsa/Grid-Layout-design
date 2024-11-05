import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className=" relative min-h-screen py-5 bg-[#e7c599]">
      <div className="absolute left-0 bottom-0 bg-teal-300 h-[500px] w-[150px] text-center mb-8 rounded-md ml-16">
        AG1 <br /> 2 of 10
      </div>
      <div className="absolute bottom-0 right-0 bg-teal-300 h-[500px] w-[150px] text-center mb-8 rounded-md mr-16">
        AG3 <br /> 2 of 10 (omega)
      </div>

      <div className="relative inset-0 flex items-center justify-center">
        <div className="absolute top-10 h-[500px] w-[500px] bg-yellow-100 p-4 mt-12 text-center rounded-md">
          AG2 <br /> 6 of 10
          <div>
            <div className="absolute left-0 top-24 bg-red-300 h-[100px] w-[225px] text-center rounded-md">
              AG4 <br /> 3 of 6
            </div>
            <div className="absolute top-24 right-0 bg-red-300 h-[100px] w-[225px] text-center rounded-md">
              AG5 <br /> 3 of 6 (omega)
            </div>
          </div>
          <div>
        <div className="absolute left-0 bottom-0 bg-orange-400 h-[300px] w-[150px] text-center rounded-md">
            AG6 <br /> 2 of 6
          </div>
        <div className="absolute bottom-0 right-0 bg-yellow-300 h-[300px] w-[325px] text-center rounded-md">
            AG7 <br /> 4 of 6 (omega)
            <div>
            <div className="absolute left-0 top-24 bg-red-300 h-[100px] w-[150px] text-center rounded-md">
              AG8 <br /> 2 of 4
            </div>
            <div className="absolute top-24 right-0 bg-red-300 h-[100px] w-[150px] text-center rounded-md">
              AG9  <br /> 2 of 4 (omega)
            </div>
            <div className="absolute left-0 bottom-0 bg-purple-400 h-[100px] w-[325px] text-center rounded-md">
            AG10 <br /> auto
          </div>
          </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;




