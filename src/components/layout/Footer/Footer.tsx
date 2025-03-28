import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='border-t border-accent bg-background px-4 py-4'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
				{/* Logo */}
				<div className='flex text-xl'>
					<p className='font-semibold'>Shade</p>
					<p className='font-extralight'>Film</p>
				</div>

				{/* Social Links */}
				<div className='flex space-x-4'>
					<Link
						href='https://instagram.com'
						target='_blank'
						className='text-foreground hover:text-primary transition-colors'
						aria-label='GitHub'
					>
						<Instagram className='w-6 h-6' />
					</Link>
					<Link
						href='https://linkedin.com'
						target='_blank'
						className='text-foreground hover:text-primary transition-colors'
						aria-label='LinkedIn'
					>
						<Linkedin className='w-6 h-6' />
					</Link>
					<Link
						href='https://twitter.com'
						target='_blank'
						className='text-foreground hover:text-primary transition-colors'
						aria-label='Twitter'
					>
						<Twitter className='w-6 h-6' />
					</Link>
				</div>
			</div>

			{/* Copyright */}
			<div className='text-center text-muted-foreground mt-6 text-sm'>
				© {currentYear} ShadeFilm. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
