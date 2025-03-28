"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = ({ text = "CONTACT" }) => {
	const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className='flex flex-col justify-center items-center h-[50vh] bg-black'>
			<p className='text-base leading-relaxed text-gray-300 opacity-70  mb-16'>
				LETS MAKE SOMETHING TOGETHER
			</p>
			{/* Animated Text */}
			<div className='flex relative space-x-20 mb-16'>
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
                                text-white text-5xl font-bold transition-all duration-1000 ease-in-out origin-center inline-block font-serif

                                ${
																	hoveredLetter === index
																		? "z-10 relative scale-x-[2] scale-y-[2] w-auto"
																		: "z-0 scale-y-[2] scale-x-[2]"
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

export default Contact;
