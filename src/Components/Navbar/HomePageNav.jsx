import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search, Menu } from 'lucide-react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import ClaimDesign from '../ClaimDesign/ClaimDesign';


const HomePageNav = () => {
	let location = useLocation();
	const menuRef = useRef(null);
	const [ isSearchOpen, setIsSearchOpen ] = useState(false);
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const [ scrolled, setScrolled ] = useState(false);
	const [ menuHeight, setMenuHeight ] = useState(0);
	const [ modalOpen, setModalOpen ] = useState(false);
	useEffect(() => {
		if (menuRef.current) {
			setMenuHeight(isMenuOpen ? menuRef.current.scrollHeight : 0);
		}
	}, [ isMenuOpen ]);


	const searchRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsSearchOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
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
			// return () => clearTimeout(timer);
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
			// { title: "WARDROBES", link: "/wardrobes" },
			// { title: "SLIDING WARDROBES", link: "/sliding-wardrobes" },
			// { title: "BUILT IN WARDROBES", link: "/built-in-wardrobes" },
			// { title: "FITTED KITCHENS", link: "/fitted-kitchens" },
			{ title: "SALE", link: "/sale" },
			{ title: "GALLERY", link: "/gallery" },
			{ title: "CONTACT US", link: "/contact-us" }
		],
		features: [
			{ image: "/assets/img/icons/england.png", text: "Made in UK" },
			{ image: "/assets/img/icons/bage.png", text: "10 Year Product Guarantee" },
			{ image: "/assets/img/icons/asset5.png", text: "Soft Close Doors As Standard" },
			{ image: "/assets/img/icons/hanger.png", text: "We fit wardrobes in less than 2-3 weeks" }
		]
	};

	return (
		<>
			<header className="w-full  ">
				{/* Top Bar */}
				<div className='h-[80px] lg:h-0'></div>
				<div className={`bg-white lg:border-b-0 w-full fixed lg:static top-0 z-40 ${scrolled && 'border-b shadow-md'}`}>
					<div className="container mx-auto px-4 py-2 flex items-center justify-between">
						{/* Logo */}
						<Link to={'/'} className="flex-shrink-0 mr-4">
							<div className="flex items-center gap-2">
								<img src="/assets/img/logos/icon.png" alt="Best Fitted Wardrobe " className="w-12 lg:w-16" />
								<div className='text-2xl font-semibold font-poppins text-headingGray'>
									<p>BEST FITTED</p>
									<p>KITCHEN</p>
								</div>
							</div>
						</Link>

						<div className="flex items-center flex-row-reverse lg:flex-row gap-10">
							{/* Social Icons */}
							<div className="xl:flex gap-x-6 hidden xl:block">
								{headerData.navigationLinks.map((link, index) => (
									<Link key={index} to={link.link} className="text-text hover:text-[#46bfd2]">
										{link.title}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* <div className={`${navBarHide ? "fixed" : ""} scroll-smooth mx-auto px-10 h-20 w-full flex justify-between items-center z-50 duration-500 ${navBar ? "bg-[#726654]" : ""}`}> */}

				{/* </div> */}

				{/* Features Banner */}
				{/* <div className='h-[45px]'></div> */}
				{/* <div className="mx-auto md:py-2 bg-[#ffffff]">
					<div className="container md:px-2 lg:px-16 xl:px-20 md:flex items-center justify-between gap-6 text-sm text-gray-600">
						{headerData.features.map((feature, index) => (
							<div key={index} className="flex items-center gap-2 md:gap-1 xl:gap-2 border-b md:border-b-0 p-2 md:p-0">
								<img src={feature?.image} className="w-3 lg:w-3 xl:w-5" alt='img' />
								<span className='text-xs lg:text-sm'>{feature.text}</span>
							</div>
						))}
					</div>
				</div> */}
			</header>
			{/* } */}
		</>
	);
};

export default HomePageNav