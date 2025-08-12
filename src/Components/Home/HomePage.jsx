import React from 'react'
import Hero from './Hero'
import Services from '../Pages/Services'
import { Phone } from 'lucide-react';
import OurDesign from './OurDesign';
import CTA from '../CTA/CTA';
import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';
import { GiStarShuriken } from "react-icons/gi";
import { FaStar, FaHeart, FaCog, FaTachometerAlt } from 'react-icons/fa';

function HomePage() {
	return (
		<>
			<Hero />

			<section className=''>
				<div className='container flex items-center py-6 my-16'>
					<p className='text-4xl font-poppins min-w-[350px] border-r-2 '><span className='text-6xl text-green-300'>20</span> years Quality services </p>
					<p className='pl-12'>With over 20 years of experience, we specialise in premium fitted kitchens, offering custom kitchen design, manufacturing, and professional kitchen installation services. Whether you're upgrading or starting fresh, our expert team ensures a smooth journey from concept to completion. Discover stunning, made-to-measure kitchens that combine innovative design, top craftsmanship, and everyday functionality—crafted to suit your space, lifestyle, and budget.</p>
				</div>
			</section>

			{/* About us */}
			<section className="flex flex-col md:flex-row items-center justify-between pl-6 md:pl-32 bg-gray-50 mb-14">
				{/* Left Content */}
				<div className="w-full md:w-1/2 pr-20 py-6">
					<h2 className="text-4xl font-bold text-black mb-4">ABOUT US</h2>
					<p className="text-gray-600 mb-2">
						Delivering Quality Fitted Kitchens for Over 20 Years
					</p>

					{/* Star Divider */}
					<div className="flex items-center justify-start gap-4 mb-2">
						<div className="w-24 h-px bg-mySky"></div>
						<div className="text-mySky text-xl"><GiStarShuriken /></div>
						<div className="w-24 h-px bg-mySky"></div>
					</div>

					<p className="text-gray-600 mb-12 leading-relaxed">
						With decades of experience in bespoke kitchen design and installation, we’ve earned a trusted name in the industry. Our team brings craftsmanship, innovation, and attention to detail to every kitchen project. Whether it’s a full kitchen renovation or a modern made-to-measure kitchen, we’re committed to transforming homes across the UK with functional, stylish solutions tailored to your needs.
					</p>

					{/* Features */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="">
							<div className="flex items-center gap-4">
								<FaSyncAlt className="text-mySky text-3xl mb-2" />
								<h3 className="text-lg font-semibold text-black mb-2">FULL SERVICE</h3>
							</div>
							<p>Complete Kitchen Design & Installation Under One Roof</p>
							<p className="text-gray-600 text-sm">
								From the first design consultation to final installation, we offer an end-to-end kitchen fitting service. Our specialists manage every stage—kitchen planning, manufacturing, delivery, and installation—ensuring precision and peace of mind. We use the highest quality materials and trusted UK suppliers to bring your dream kitchen to life with lasting durability.
							</p>
						</div>

						<div className="mt-4 md:mt-0">
							<div className="flex items-center gap-4">
								<FaCheckCircle className="text-mySky text-3xl mb-2" />
								<h3 className="text-lg font-semibold text-black mb-2">REPUTATION</h3>
							</div>
							<p>Trusted by Homeowners Across the UK</p>
							<p className="text-gray-600 text-sm">
								We pride ourselves on our strong reputation built on reliability, transparency, and excellent results. Our clients choose us for our professional service, exceptional craftsmanship, and commitment to quality. Whether you're fitting a compact kitchen or renovating a large open-plan space, our satisfied customers speak for our work—referrals and repeat clients are at the heart of our business.
							</p>
						</div>
					</div>
				</div>

				{/* Right Image */}
				<div className="w-full md:w-1/2">
					<img
						src="/assets/img/home/about.jpg"
						alt="Modern Kitchen"
						className="object-cover w-full h-[650px]"
					/>
				</div>
			</section>


			{/* WhyChoseUS.jsx */}
			<section className="container py-16 px-4 bg-white text-center">
				{/* Heading */}
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-3">WHY CHOOSE US</h2>
				<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
					Vivamus dictum tristique mi vitae interdum. Lorem ipsum dolor sit amet.
				</p>

				{/* Star Divider */}
				<div className="flex justify-center items-center gap-4 mb-10">
					<div className="w-20 h-px bg-mySky"></div>
					<div className="text-mySky text-xl"><GiStarShuriken /></div>
					<div className="w-20 h-px bg-mySky"></div>
				</div>

				{/* Content Layout */}
				<div className="flex flex-col lg:flex-row items-center justify-center gap-10">
					{/* Left Features */}
					<div className="flex flex-col gap-16 text-left">
						<div className="flex flex-col items-center lg:items-end">
							<FaStar className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">FREE DESIGN TOOLS</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-right">
								Use our free online tools to explore layouts, colours, and storage ideas. Create a kitchen that fits your style and start planning today.
							</p>
						</div>
						<div className="flex flex-col items-center lg:items-end">
							<FaCog className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">EXPERT INSTALLATION</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-right">
								Our certified team handles everything—from removing old fittings to precision installation—so your kitchen is ready to enjoy.
							</p>
						</div>
					</div>

					{/* Center Image */}
					<div className="rounded-full overflow-hidden border-[16px] border-primary/40 w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
						<img
							src="/assets/img/kitchensImg/assets2.jpg"
							alt="Choose Us"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Right Features */}
					<div className="flex flex-col gap-16 text-left">
						<div className="flex flex-col items-center lg:items-start">
							<FaHeart className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">LOVELY SUPPORT</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-left">
								From consultation to aftercare, our friendly team guides you through every step for a smooth experience.
							</p>
						</div>
						<div className="flex flex-col items-center lg:items-start">
							<FaTachometerAlt className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">SPEED OPTIMIZED</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-left">
								We deliver and install kitchens quickly using efficient processes, without compromising on quality.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Get a Professional Services, Call us Now */}
			<section className='bg-primary py-16 px-10 my-16'>
				<div className='container flex justify-between items-center text-text'>
					<p className='text-4xl font-semibold'>Get a Professional Services, Call us Now</p>
					<a href={`tel:01708756789`} className="min-w-max text-2xl font-semibold px-8 py-3 rounded-full bg-mySky text-white flex items-center gap-6"><Phone /> 01708 7 56789</a>

				</div>
			</section>

			<Services />
			<OurDesign />
			<div className='my-12'>
				<CTA />
			</div>

		</>
	)
}

export default HomePage