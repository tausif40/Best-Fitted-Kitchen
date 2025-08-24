import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const HomePageNav = () => {
	const location = useLocation();
	const dropdownRef = useRef(null);

	const [ isDesktopDropdownOpen, setIsDesktopDropdownOpen ] = useState(false);
	const [ isMobileDropdownOpen, setIsMobileDropdownOpen ] = useState(false);
	const [ scrolled, setScrolled ] = useState(false);
	const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

	// Close desktop dropdown when clicking outside
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDesktopDropdownOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	// Scroll shadow effect
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY >= 80);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
	}, [ mobileMenuOpen ]);

	const headerData = {
		navigationLinks: [
			{ title: 'Home', link: '/' },
			{ title: 'About us', link: '/about-us' },
			{ title: 'Sale', link: '/sale' },
			{ title: 'Gallery', link: '/gallery' },
			{ title: 'Contact us', link: '/contact-us' }
		],
		dropdownLinks: [
			{ title: 'Handle Kitchens', link: '/handle-kitchens' },
			{ title: 'J Pull Kitchens', link: '/j-pull-kitchens' },
			{ title: 'Profile Kitchens', link: '/profile-kitchens' },
			{ title: 'Shaker style Kitchens', link: '/shaker-style-kitchens' }
		]
	};

	return (
		<header className="w-full">
			<div
				className={`bg-white lg:border-b-0 w-full fixed lg:static top-0 z-40 ${scrolled && 'border-b shadow-md'
					}`}
			>
				<div className="container !overflow-visible mx-auto px-4 py-2 flex items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0">
						<img
							src="/assets/img/logos/icon.png"
							alt="Best Fitted Wardrobe"
							className="w-36 lg:w-36"
						/>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex gap-8 items-center">
						{headerData.navigationLinks.map((link, index) => (
							<React.Fragment key={index}>
								<Link to={link.link}
									className={`hover:text-[#46bfd2] ${location.pathname === link.link ? 'text-mySky' : 'text-text'} font-normal`}>
									{link.title}
								</Link>

								{index === 2 && (
									<div ref={dropdownRef} className="relative">
										<button
											onClick={() =>
												setIsDesktopDropdownOpen(!isDesktopDropdownOpen)
											}
											className="flex items-center gap-1 text-text font-normal hover:text-[#46bfd2]"
										>
											All Category
											<ChevronDown
												className={`w-4 h-4 transform transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''
													}`}
											/>
										</button>
										{isDesktopDropdownOpen && (
											<div className="absolute left-0 top-full mt-2 border bg-white shadow-lg rounded-md z-50 min-w-[200px] py-2">
												{headerData.dropdownLinks.map((item, idx) => (
													<Link
														key={idx}
														to={item.link}
														className="block px-4 py-2 text-text hover:bg-gray-100"
													>
														{item.title}
													</Link>
												))}
											</div>
										)}
									</div>
								)}
							</React.Fragment>
						))}
					</nav>

					{/* Mobile Hamburger */}
					<button
						className="lg:hidden"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Menu size={28} />
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white/85 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
			>
				<div className="flex justify-between items-center px-4 py-3 border-b">
					<span className="font-bold">Menu</span>
					<button
						onClick={() => {
							setMobileMenuOpen(false);
							setIsMobileDropdownOpen(false);
						}}
					>
						<X size={28} />
					</button>
				</div>

				<div className="flex flex-col px-4 py-4 space-y-4 overflow-y-auto h-full">
					{headerData.navigationLinks.map((link, index) => (
						<React.Fragment key={index}>
							<Link
								to={link.link}
								className={`block hover:text-[#46bfd2] ${location.pathname === link.link
									? 'text-mySky'
									: 'text-text'
									} font-raleway`}
								onClick={() => {
									setMobileMenuOpen(false);
									setIsMobileDropdownOpen(false);
								}}
							>
								{link.title}
							</Link>

							{index === 2 && (
								<div>
									<button
										onClick={() =>
											setIsMobileDropdownOpen(!isMobileDropdownOpen)
										}
										className="flex items-center gap-1 text-text font-normal hover:text-[#46bfd2]"
									>
										ALL CATEGORY
										<ChevronDown
											className={`w-4 h-4 transform transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''
												}`}
										/>
									</button>
									{isMobileDropdownOpen && (
										<div className="pl-4 mt-2 space-y-2">
											{headerData.dropdownLinks.map((item, idx) => (
												<Link
													key={idx}
													to={item.link}
													className="block text-sm hover:text-[#46bfd2]"
													onClick={() => {
														setIsMobileDropdownOpen(false);
														setMobileMenuOpen(false);
													}}
												>
													{item.title}
												</Link>
											))}
										</div>
									)}
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			{/* Dark overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={() => {
						setMobileMenuOpen(false);
						setIsMobileDropdownOpen(false);
					}}
				></div>
			)}
		</header>
	);
};

export default HomePageNav;
