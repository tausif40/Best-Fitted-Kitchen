import React from 'react'
import Hero from './Hero'
import Services from '../Pages/Services'
import { Phone } from 'lucide-react';
import OurDesign from './OurDesign';
import CTA from '../CTA/CTA';
import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';
import { GiStarShuriken } from "react-icons/gi";
import { FaStar, FaHeart, FaCog, FaTachometerAlt } from 'react-icons/fa';
import KitchenCart from './KitchenCart';
import Testimonial from '../AllGalleryCategory/Testimonial/Testimonial';

function HomePage() {
	return (
		<>
			<Hero />
			<KitchenCart />


			<section className="container pb-16">
				<div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-gray-100 rounded-md">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Secure your free design appointment</h2>
						<p className="text-gray-600">Get expert guidance and design consultation for your dream kitchen</p>
					</div>
					<button className="bg-mySky text-white px-8 py-3 rounded-full transition-colors">
						Book a free appointment
					</button>
				</div>
			</section>

			<OurDesign />


			{/* Value Proposition */}
			<section className="container py-12">
				<div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-gray-100 rounded-md">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Add 60% to your home's value</h2>
						<p className="text-gray-600 max-w-2xl">A new kitchen can significantly increase the value of your home making it an investment in your future as well as your present comfort.</p>
					</div>
					<button className="bg-mySky text-white px-8 py-3 rounded-full transition-colors">
						Book a free appointment
					</button>
				</div>
			</section>

			<div className='bg-gray-100 py-4'>
				<Testimonial />
			</div>


			{/* Newsletter Section */}
			<div className="relative inset-0">
				<img
					src="/assets/img/home/Newsletter.png"
					alt="Kitchen Background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute mx-auto text-start px-4 sm:px-6 lg:px-8 top-1/2 right-6 transform -translate-y-1/2 pl-14">
					<h2 className="text-3xl font-bold text-white mb-4 ">
						Our Furniture
						<br />
						Review
					</h2>
					<p className="text-gray-300 mb-8">Subscribe to get attractive offers on our products</p>
				</div>
			</div>

			{/* Subscribe Section */}
			<section className="bg-gray-700 py-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-6 md:mb-0">
							<h3 className="text-2xl font-semibold text-white mb-2">
								Subscribe to get attractive	offers on our products
							</h3>
						</div>
						<div className="flex w-full md:w-auto">
							<input
								type="email"
								placeholder="Your email address here"
								className="flex-1 md:w-80 px-4 py-3 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-teal-500"
							/>
							<button className="bg-orange-500 text-white px-8 py-3 rounded-r-full hover:bg-orange-600 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default HomePage