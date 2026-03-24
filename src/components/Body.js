import Photo from "./photo";
import { motion } from "framer-motion";
const Body = () => {
  return (
    <div name="body" className="min-h-screen">
      <div className=" flex justify-center items-end p-8">
        <div className=" w-125 flex justify-center-end fixed bottom-0 items-center">
          <Photo />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="font-bold flex justify-center mb-3">
              {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
              <button className="border text-md rounded-4xl py-2 px-2 mb-2 font-mono">
                Hello!
              </button>
              {/* </motion.div> */}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-5xl flex justify-center font-mono mb-3">
              <span>I'm</span>
              <span> </span>
              <span className="text-orange-500 font-semibold"> Sahitha,</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-8xl font-mono">Frontend Developer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Body;
