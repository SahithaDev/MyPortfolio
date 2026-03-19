import Photo from "./photo";
const Body = () => {
  return (
    <div className=" flex justify-center items-end p-8">
      <div className=" w-125  flex justify-center-end fixed bottom-0 items-center">
        <Photo />
      </div>
      <div>
        <p className="font-bold flex justify-center mb-3">
          <button className="border text-md rounded-4xl py-2 px-2 mb-2 font-mono">
            Hello!
          </button>
        </p>
        <p className="text-5xl flex justify-center font-mono mb-3">
          I'm <span className="text-orange-500 font-semibold"> Sahitha,</span>
        </p>
        <p className="text-8xl font-mono">Frontend Developer</p>
      </div>
    </div>
  );
};
export default Body;
