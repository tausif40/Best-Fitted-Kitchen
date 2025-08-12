import React, { useState } from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search, Menu } from 'lucide-react';
import ClaimDesign from '../ClaimDesign/ClaimDesign';

function TopNav() {
	const [ modalOpen, setModalOpen ] = useState(false);

	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
		socialLinks: [
			{ platform: FaFacebookF, link: "https://www.facebook.com/BestfittedWardrobeltd" },
			{ platform: FaXTwitter, link: "https://x.com" },
			{ platform: IoLogoGoogleplus, link: "#" },
			{ platform: BsInstagram, link: "https://www.instagram.com/bestfittedwardrobe" }
		],
	}

	return (
		<>
			<ClaimDesign isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			<nav className="bg-gray-200">
				<div className="container max-sm:pl-2 max-sm:pr-0 flex justify-between gap-10">

					{/* Contact Info */}
					<div className="flex items-center gap-4 xl:gap-8 text-heading font-sans text-base	">
						<div className="flex items-center gap-2 ">
							{/* <p className='bg-gray-100 rounded-full p-3'>
							</p> */}
							<Phone className="h-4 w-4 text-[#5d8dcb]" />
							<a href={`tel:${headerData.contactInfo.phone}`} className="min-w-max">{headerData.contactInfo.phone}</a>
						</div>
						<div className="hidden lg:block">
							<div className="flex items-center gap-2">
								{/* <p className='bg-gray-100 rounded-full p-3'>
								</p> */}
								<Mail className="h-4 w-4 text-[#5d8dcb] " />
								<a href={`mailto:${headerData.contactInfo.email}`} className="hover:text-heading">{headerData.contactInfo.email}</a>
							</div>
						</div>

						{/* Social Icons */}
						<div className="xl:flex gap-x-8 hidden">
							{headerData.socialLinks.map((social, index) => (
								<Link key={index} to={social.link} className="flex items-center justify-center " target='_blank'>
									{<social.platform className="h-4 w-4 text-gray-600 hover:text-[#6BC7D9]" />}
								</Link>
							))}
						</div>
					</div>

					<button className="flex cursor-pointer items-center justify-center overflow-hidden" onClick={() => setModalOpen(true)}>
						<span className=" btnSpan relative z-10 w-full bg-primary px-4 py-3 text-sm lg:text-base text-sky-800 backdrop-blur-[40px] min-w-max">
							Claim your free design
						</span>
					</button>
				</div>
			</nav>
		</>
	)
}

export default TopNav