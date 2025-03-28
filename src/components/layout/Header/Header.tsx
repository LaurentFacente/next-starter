import Link from "next/link";

export function Header() {
	return (
		<header className='flex justify-between items-center px-4 py-4 border-b border-gray-800 bg-black'>
			{/* Work Link */}
			<Link
				href='/work'
				className='font-bold  text-white  
        relative 
        hover:text-primary 
        transition-colors 
        duration-300 
        after:absolute 
        after:bottom-[-4px] 
        after:left-0 
        after:w-0 
        after:h-[2px] 
        after:bg-primary 
        hover:after:w-full 
        after:transition-all 
        after:duration-300'
			>
				WORK
			</Link>

			{/* About Link */}
			<Link
				href='/about'
				className='font-bold  text-white 
        relative 
        hover:text-primary 
        transition-colors 
        duration-300 
        after:absolute 
        after:bottom-[-4px] 
        after:left-0 
        after:w-0 
        after:h-[2px] 
        after:bg-primary 
        hover:after:w-full 
        after:transition-all 
        after:duration-300'
			>
				ABOUT
			</Link>

			{/* Logo in the Center */}
			<div className='absolute left-1/2 transform -translate-x-1/2  text-white '>
				<div className='flex text-3xl'>
					<p className='font-semibold'>Shade</p>
					<p className='font-extralight'>Film</p>
				</div>
			</div>

			{/* Contact Link */}
			<Link
				href='/contact'
				className='font-bold  text-white  
        relative 
        hover:text-primary 
        transition-colors 
        duration-300 
        after:absolute 
        after:bottom-[-4px] 
        after:left-0 
        after:w-0 
        after:h-[2px] 
        after:bg-primary 
        hover:after:w-full 
        after:transition-all 
        after:duration-300'
			>
				CONTACT
			</Link>
			{/* Extra Link */}
			<Link
				href='/contact'
				className='font-bold text-white 
        relative 
        hover:text-primary 
        transition-colors 
        duration-300 
        after:absolute 
        after:bottom-[-4px] 
        after:left-0 
        after:w-0 
        after:h-[2px] 
        after:bg-primary 
        hover:after:w-full 
        after:transition-all 
        after:duration-300'
			>
				EXTRA
			</Link>
		</header>
	);
}

export default Header;
