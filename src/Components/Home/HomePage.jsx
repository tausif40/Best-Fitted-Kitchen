import React, { useState } from 'react'
import Hero from './Hero'
import OurDesign from './OurDesign';
import KitchenCart from './KitchenCart';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from "react-helmet-async";
import ClaimDesign from '../ClaimDesign/ClaimDesign';

function HomePage() {
	const [ modalOpen, setModalOpen ] = useState(false);

	return (
		<>
			<Helmet>
				<title>Best Fitted Kitchens UK | Modern & Bespoke Designs</title>
				<meta
					name="description"
					content="Transform your home with bespoke fitted kitchens in the UK. Add up to 60% to your property value with modern, luxury, and space-saving designs."
				/>
				<link rel="canonical" href="https://best-fitted-kitchen.vercel.app/" />
				<meta property="og:title" content="Best Fitted Kitchens UK" />
				<meta
					property="og:description"
					content="Modern, bespoke fitted kitchens designed to add value to your home."
				/>
				<meta property="og:type" content="website" />

				{/* JSON-LD structured data */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: "Best Fitted Kitchens UK",
						url: "https://best-fitted-kitchen.vercel.app/",
						image: "https://best-fitted-kitchen.vercel.app/images/kitchen.jpg",
						address: {
							"@type": "PostalAddress",
							streetAddress: "123 Kitchen Lane",
							addressLocality: "London",
							addressRegion: "England",
							postalCode: "W1A 1AA",
							addressCountry: "UK",
						},
						telephone: "+44 20 1234 5678",
						priceRange: "£££",
					})}
				</script>
			</Helmet>

			<ClaimDesign isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			<Hero />
			<div className='mt-32 sm:mt-10 md:mt-0'>
				<KitchenCart />
			</div>

			<section className="container pb-16">
				<div className="flex flex-col lg:flex-row gap-8 justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-gray-100 rounded-md">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Secure your free design appointment</h2>
						<p className="text-gray-600">Get expert guidance and design consultation for your dream kitchen</p>
					</div>
					<button className="bg-mySky text-white px-8 py-3 rounded-full transition-colors" onClick={() => setModalOpen(true)}>
						Book a free appointment
					</button>
				</div>
			</section>

			<OurDesign />


			{/* Value Proposition */}
			<section className="container py-12">
				<div className="flex flex-col lg:flex-row gap-8 justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-gray-100 rounded-md">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Add Up to 60% to Your Home’s Value</h2>
						<p className="text-gray-600 max-w-2xl">A new fitted kitchen isn’t just about comfort — it’s an <b>investment in your property.</b> Research shows that a professionally designed <b>fitted kitchen can add up to 60%</b> to your home’s resale value. With Best Fitted Kitchens UK, you get both <b>style today</b> and <b>value for tomorrow.</b></p>
					</div>
					<button className="bg-mySky text-white px-8 py-3 rounded-full transition-colors" onClick={() => setModalOpen(true)}>
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
				<div className="absolute mx-auto text-center md:text-start px-4 sm:px-6 lg:px-8 top-1/2 md:right-6 transform -translate-y-1/2 pl-14">
					<h2 className="text-3xl font-bold text-white mb-4 ">
						Our Furniture&nbsp;
						<br className='hidden md:block' />
						Review
					</h2>
					<p className="text-gray-300 mb-8">Subscribe to get attractive offers on our products</p>
				</div>
			</div>

			{/* Subscribe Section */}
			<section className="bg-gray-700 py-5 md:py-8 lg:py-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex md:gap-4 flex-col md:flex-row items-center md:justify-between">
						<div className="mb-6 md:mb-0">
							<h3 className="text-2xl font-semibold text-white mb-2">
								Subscribe to get attractive	offers on our products
							</h3>
						</div>
						<div className="flex w-full md:w-auto">
							<input
								type="email"
								placeholder="Your email address here"
								className="flex-1 md:w-80 px-4 py-3 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<button className="bg-orange-500 text-white px-4 md:px-8 py-3 rounded-r-full hover:bg-orange-600 transition-colors">
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