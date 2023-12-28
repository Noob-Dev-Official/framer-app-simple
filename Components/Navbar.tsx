'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
	{ href: '/', text: 'Home' },
	{ href: '/about', text: 'About' },
	{ href: '/products', text: 'Products' },
	{ href: '/contact', text: 'Contact' },
];

const Navbar = () => {
	const path = usePathname();
	return (
		<>
			<nav className='container mx-auto bg-yellow-100 text-gray-800 mb-5'>
				<ul className='flex justify-center py-5  rounded-sm'>
					{links.map((l) => (
						<li className='pr-[2.5rem]' key={l.href}>
							<motion.div whileHover={{ scale: 1.1 }}>
								<Link
									className={`${
										l.href === path ? 'text-yellow-600 font-bold' : ''
									} text-base`}
									href={l.href}
								>
									{l.text}
								</Link>
							</motion.div>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
