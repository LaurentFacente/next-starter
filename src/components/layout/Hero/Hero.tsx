"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Hero = ({ text = "SHADE" }) => {
	const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className='flex justify-center items-center h-screen bg-black'>
			<div className='flex relative space-x-20'>
				<AnimatePresence>
					{text.split("").map((letter, index) => (
						<motion.span
							ref={ref}
							key={index}
							initial={{ opacity: 0, x: -50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							exit='hidden'
							transition={{
								duration: 1,
								delay: index * 0.1,
							}}
							onMouseEnter={() => setHoveredLetter(index)}
							onMouseLeave={() => setHoveredLetter(null)}
							className={`
                text-white text-9xl font-bold transition-all duration-1000 ease-in-out origin-center inline-block font-serif

                ${
									hoveredLetter === index
										? "z-10 relative scale-x-[4] scale-y-[5] w-auto"
										: "z-0 scale-y-[5] scale-x-[2]"
								}
                ${
									hoveredLetter !== null
										? hoveredLetter < index
											? "translate-x-24"
											: hoveredLetter > index
											? "-translate-x-24"
											: ""
										: ""
								}
              `}
						>
							{letter}
						</motion.span>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Hero;
