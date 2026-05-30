import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-20 px-8">

      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      >
        <h1 className="text-5xl font-bold leading-tight">
          Great design is invisible
        </h1>

        <p className="mt-6 text-gray-600">
         lorem ipsum dolor sit 
        </p>

        <button className="mt-6 bg-black
            text-white px-6 py-3 rounded-xl">
         Button
        </button>
      </motion.div>

      <motion.img
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      className="rounded-2xl shadow-xl"
      />
    </section>
  );
}