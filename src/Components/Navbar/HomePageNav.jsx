import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import ClaimDesign from '../ClaimDesign/ClaimDesign';

const HomePageNav = () => {
	let location = useLocation();
	const dropdownRef = useRef(null);
	const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
	const [ scrolled, setScrolled ] = useState(false);
	const [ modalOpen, setModalOpen ] = useState(false);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 80) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!modalOpen) {
			setTimeout(() => {
				setModalOpen(true);
			}, 30000);
		}
	}, []);

	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
		socialLinks: [
			{ platform: FaFacebookF, link: "https://www.facebook.com/BestfittedWardrobeltd" },
			{ platform: FaXTwitter, link: "https://x.com" },
			{ platform: IoLogoGoogleplus, link: "#" },
			{ platform: BsInstagram, link: "https://www.instagram.com/bestfittedwardrobe" }
		],
		navigationLinks: [
			{ title: "HOME", link: "/" },
			{ title: "ABOUT US", link: "/about-us" },
			{ title: "SALE", link: "/sale" },
			{ title: "GALLERY", link: "/gallery" },
			{ title: "CONTACT US", link: "/contact-us" }
		],
		dropdownLinks: [
			{ title: "Handle Kitchens", link: "/handle-kitchens" },
			{ title: "J Pull Kitchens", link: "/j-pull-kitchens" },
			{ title: "Profile Kitchens", link: "/Profile-kitchens" },
			{ title: "Shaker style Kitchens", link: "/shaker-style-kitchens" }
		]
	};

	return (
		<>
			<header className="w-full">
				<div className='h-[90px] lg:h-0'></div>
				<div className={`bg-white lg:border-b-0 w-full fixed lg:static top-0 z-40 ${scrolled && 'border-b shadow-md'}`}>
					<div className="container !overflow-visible mx-auto px-4 py-2 flex items-center justify-between">
						<Link to={'/'} className="flex-shrink-0 mr-4">
							<div className="flex items-center gap-2">
								<img src="/assets/img/logos/icon.png" alt="Best Fitted Wardrobe" className="w-40 lg:w-48" />
							</div>
						</Link>
						<div className="flex items-center flex-row-reverse lg:flex-row gap-10">
							<div className="xl:flex gap-x-10 hidden xl:block">
								{headerData.navigationLinks.map((link, index) => (
									<>
										<Link
											key={index}
											to={link.link}
											className={`hover:text-[#46bfd2] ${location.pathname === link.link ? "text-mySky" : "text-text"} font-raleway font-normal`}
										>
											{link.title}
										</Link>

										{
											index === 2 &&
											<div ref={dropdownRef} className="relative inline-block">
												<button
													onClick={() => setIsDropdownOpen(!isDropdownOpen)}
													className="flex items-center gap-1 text-text font-normal hover:text-[#46bfd2]"
												>
													ALL CATEGORY
													<ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
												</button>
												{isDropdownOpen && (
													<div className="absolute left-0 top-full mt-2 border bg-white shadow-lg rounded-md z-50 min-w-[200px] py	-2">
														<ul className="flex flex-col text-sm">
															{headerData.dropdownLinks.map((item, index) => (
																<li key={index}>
																	<Link
																		to={item.link}
																		className="block px-4 py-2 hover:bg-gray-100"
																	>
																		{item.title}
																	</Link>
																</li>
															))}
														</ul>
													</div>
												)}
											</div>
										}

									</>

								))}

							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HomePageNav;
