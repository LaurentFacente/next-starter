import AboutUs from "@/components/layout/AboutUs/AboutUs";
import Contact from "@/components/layout/Contact/Contact";
import { Parallax } from "@/components/layout/Parallax/Parallax";
import { products } from "@/components/layout/Parallax/parallax.utils";
import SplashCursor from "@/components/SplashCursor/SplashCursor";
import Hero from "../src/components/layout/Hero/Hero";

export default function Page() {
	return (
		<>
			<SplashCursor />
			<Hero />
			<Parallax products={products} />
			<AboutUs />
			<Contact />
		</>
	);
}
