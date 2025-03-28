"use client";
import {
	motion,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Parallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);

	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 150]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className='h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black'
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
				}}
				className=''
			>
				<motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className='flex flex-row  mb-20 space-x-20 '>
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className='flex flex-row-reverse space-x-reverse space-x-20'>
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className='max-w-7xl relative mx-auto py-60 md:py-70 px-4 w-full  left-0 top-0'>
			<h1 className=' text-9xl md:text-6xl dark:text-white'>
				<div className='flex text-9xl'>
					<p className='font-semibold'></p>
					<p className='font-light ml-2'></p>
				</div>
				<p className='mt-4 md:text-7xl'></p>
			</h1>
			<p className='italic max-w-4xl text-2xl md:text-2xl mt-8 text-neutral-300'></p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className='group/product h-96 w-[30rem] relative shrink-0'
		>
			<Link
				href={product.link}
				className='block group-hover/product:shadow-2xl '
			>
				<Image
					src={product.thumbnail}
					height='600'
					width='600'
					className='object-cover object-left-top absolute h-full w-full inset-0'
					alt={product.title}
				/>
			</Link>
			<div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-0 bg-black pointer-events-none'></div>
			<h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-0 text-white'>
				{product.title}
			</h2>
		</motion.div>
	);
};
