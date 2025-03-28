"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutUs = ({}) => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const isInView1 = useInView(ref1, { once: true, amount: 0.2 });
	const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

	return (
		<div className='bg-black overflow-x-hidden'>
			{/* Section des images avec Grid */}
			<div className='grid grid-cols-2 px-4 md:px-16 p-24'>
				<div className='grid grid-rows-2 gap-8'>
					<motion.div
						ref={ref1}
						initial={{ opacity: 0, x: -300 }}
						animate={isInView1 ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 2,
							type: "tween",
							ease: "easeOut",
						}}
						className='row-span-2 w-full transform md:-translate-y-16 md:translate-x-32'
					>
						<Image
							src='/64cbbb48ed140787d7a628ed_about1.webp'
							alt='First image'
							width={800}
							height={600}
							className='object-cover rounded-lg shadow-lg w-full'
						/>
					</motion.div>
				</div>
				<div className='grid grid-rows-2 gap-8'>
					<motion.div
						ref={ref2}
						initial={{ opacity: 0, x: 300 }}
						animate={isInView2 ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 2,
							type: "tween",
							ease: "easeOut",
						}}
						className='row-span-2 w-full transform md:translate-y-16 md:-translate-x-32'
					>
						<Image
							src='/64cbbb481c255d2dd3783688_about2.webp'
							alt='Second image'
							width={800}
							height={600}
							className='object-cover rounded-lg shadow-lg w-full'
						/>
					</motion.div>
				</div>
			</div>

			{/* Section de texte */}
			<div className='bg-black text-white px-4 md:px-64 py-24 flex flex-col md:flex-row justify-evenly gap-16'>
				<div className='mb-8 text-center md:text-left'>
					<div className='flex justify-center md:justify-start text-2xl'>
						<p className='font-semibold mr-2'>Shade</p>
						<p className='font-extralight'>Film</p>
					</div>
				</div>
				<div className='text-base leading-relaxed space-y-4 px-4 md:px-0'>
					<p className='text-base leading-relaxed opacity-70'>
						Shade Film est un studio vidéo créatif dédié à l&poas;innovation et
						à l&apos;excellence visuelle. Nous capturons des histoires, des
						émotions et des idées avec un style unique et moderne, en alliant
						techniques de production avancées et sensibilité artistique.
					</p>
					<p>
						De la conception à la post-production, nous mettons tout en œuvre
						pour créer des vidéos qui marquent et inspirent, que ce soit pour
						des marques, des événements ou des projets personnels. Chez Shade
						Film, chaque projet est une occasion de repousser les limites de la
						créativité et d&poas;offrir une expérience visuelle inoubliable.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
