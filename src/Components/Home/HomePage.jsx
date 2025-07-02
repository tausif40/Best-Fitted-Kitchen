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
					<p className='pl-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida maximus blandit. Proin malesuada
						laoreet odio non hendrerit Morbi viverra orci tellus, quis vulputate orci tincidunt sed Proin non interdum
						mi. Nam lorem nisi. egestas in erat vitae, accumsan ullamcorper enim. Ut sagittis turpis sed orci aliquet.
						non interdum turpis rutrum. Aenean ac lacus justo. Proin sed urna eu ipsum convallis sollicitudin semper
						ut nisl.</p>
				</div>
			</section>

			{/* About us */}
			<section className="flex flex-col md:flex-row items-center justify-between pl-6 md:pl-32 bg-gray-50 mb-14">
				{/* Left Content */}
				<div className="w-full md:w-1/2 pr-20">
					<h2 className="text-4xl font-bold text-black mb-4">ABOUT US</h2>
					<p className="text-gray-600 mb-2">
						Vivamus dictum tristique mi vitae interdum. Lorem ipsum dolor sit amet.
					</p>

					{/* Star Divider */}
					<div className="flex items-center justify-start gap-4 mb-6">
						<div className="w-24 h-px bg-mySky"></div>
						<div className="text-mySky text-xl"><GiStarShuriken /></div>
						<div className="w-24 h-px bg-mySky"></div>
					</div>

					<p className="text-gray-600 mb-14 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula
						quis magna porta lacinia eu eget enim. Vestibulum euismod augue sed commodo congue.
						Praesent a felis urnahasellus luctus.
					</p>

					{/* Features */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
						<div className="flex flex-col items-start">
							<FaSyncAlt className="text-mySky text-3xl mb-3" />
							<h3 className="text-lg font-semibold text-black mb-2">FULL SERVICE</h3>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula
								quis magna porta lacinia.
							</p>
						</div>

						<div className="flex flex-col items-start">
							<FaCheckCircle className="text-mySky text-3xl mb-3" />
							<h3 className="text-lg font-semibold text-black mb-2">REPUTATION</h3>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula
								quis magna porta lacinia.
							</p>
						</div>
					</div>
				</div>

				{/* Right Image */}
				<div className="w-full md:w-1/2">
					<img
						src="/assets/img/kitchensImg/asset1.jpeg"
						alt="Modern Kitchen"
						className="object-cover w-full h-full"
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
								Phasellus et lorem in mauris accumsan viverra non quis neque. Etiam non odio erat. Aenean ut urna lorem.
							</p>
						</div>
						<div className="flex flex-col items-center lg:items-end">
							<FaCog className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">INSTALLATION</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-right">
								Phasellus et lorem in mauris accumsan viverra non quis neque. Etiam non odio erat. Aenean ut urna lorem.
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
								Phasellus et lorem in mauris accumsan viverra non quis neque. Etiam non odio erat. Aenean ut urna lorem.
							</p>
						</div>
						<div className="flex flex-col items-center lg:items-start">
							<FaTachometerAlt className="text-mySky text-3xl mb-3" />
							<h3 className="font-semibold text-lg mb-2">SPEED OPTIMIZED</h3>
							<p className="text-gray-600 max-w-sm text-center lg:text-left">
								Phasellus et lorem in mauris accumsan viverra non quis neque. Etiam non odio erat. Aenean ut urna lorem.
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