import React from 'react';
import CTA from '../CTA/CTA';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="">
			{/* Hero Section */}
			<div className='h-[400px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/kitchen.jpg' alt="Banner" className='object-cover object-center w-full h-full' />
			</div>

			<div className="">
				{/* Section 1: About Kitchen Design */}
				<section className="container flex flex-col lg:flex-row items-center justify-between px-6 my-24 bg-white gap-12">
					{/* Images */}
					<div className="lg:w-1/2 relative w-full flex justify-center overflow-visible">
						<div className="">
							<img
								src="/assets/img/about-img.png"
								alt="Kitchen Design"
								className="rounded-lg w-[450px] object-cover"
							/>
						</div>
						{/* <div className="relative right-0 top-16 z-10">
							<img
								src="/assets/img/kitchen2.jpg"
								alt="Couple Cooking"
								className="rounded-lg w-96"	
							/>
						</div> */}
						{/* <div className="absolute -bottom-10 left-0 w-20 h-20 border-t-4 border-l-4 border-black"></div> */}
					</div>

					{/* Text Content */}
					<div className="w-full lg:w-1/2 space-y-6 mb-20">
						<h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-900 uppercase">
							About Us
						</h2>
						<p className='text-center mb-12 text-lg font-semibold'>Crafting Beautiful Fitted Kitchens Across the UK for Over 20 Years</p>
						<p className="text-gray-600 leading-relaxed">
							For more than two decades, we’ve been helping homeowners across the UK transform their houses into dream homes with high-quality, bespoke fitted kitchens. Built on craftsmanship, service, and attention to detail, our mission is simple: to deliver beautifully designed kitchens that combine style, function, and lasting durability.
						</p>
						<p className="text-gray-600 leading-relaxed">
							Whether you’re renovating your current kitchen or designing one for a brand-new home, our team is here to guide you every step of the way. We offer a complete solution—free kitchen design consultations, custom manufacturing, and expert installation. Every kitchen we create is made-to-measure, ensuring a perfect fit for your lifestyle and space.</p>
						{/* Contact Us Button and Phone Box */}
						<div className="flex items-center gap-4 mt-6">
							<Link href='/contact-us'>
								<button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
									Contact Us
								</button>
							</Link>
							<div className="border border-green-400 px-6 py-2 rounded text-center">
								<p className="text-sm text-gray-600 font-medium mb-2">Call Anytime</p>
								<p className="text-xl font-bold text-black tracking-widest">
									796 107 0327
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Section 2: Watch Your Future Kitchen */}
				{/* Video Section */}
				<section className="relative h-[460px] bg-gray-900 overflow-hidden">
					{/* Background Image with Overlay */}
					<div className="absolute inset-0">
						<img
							src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
							alt="Kitchen Background"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					</div>

					{/* Content */}
					<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
						{/* Play Button with Concentric Circles */}
						<div className="relative mb-8">
							<div className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping"></div>
							<div className="absolute inset-0 rounded-full border border-emerald-500 opacity-75 scale-125"></div>
							<div className="absolute inset-0 rounded-full border border-emerald-500 opacity-50 scale-150"></div>
							<button className="relative bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200">
								<Play className="w-6 h-6 ml-1" fill="currentColor" />
							</button>
						</div>

						<h2 className="text-white text-xl font-medium tracking-widest uppercase">
							WATCH YOUR FUTURE KITCHEN
						</h2>
					</div>
				</section>
			</div>

			{/* Our Story */}
			{/* <section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-heading mb-6">ABOUT US</h2>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								Founded in 2008 by master craftsman John Miller, KitchenCraft began as a small family business
								with a simple mission: to create beautiful, functional kitchens that bring families together.
							</p>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								What started as a passion project in a small workshop has grown into one of the region's most
								trusted kitchen design companies, serving over 500 satisfied customers and creating countless
								memories around beautiful kitchen spaces.
							</p>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								Today, we continue to honor our founding principles: exceptional craftsmanship, personalized
								service, and an unwavering commitment to quality that stands the test of time.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								Our team combines traditional woodworking techniques with modern technology, ensuring each kitchen
								is both timeless and cutting-edge. We believe that the heart of every home deserves nothing less than perfection.
							</p>
						</div>
						<div className="relative">
							<div className="bg-heading rounded-2xl p-8 transform rotate-3">
								<div className="bg-white rounded-xl p-8 transform -rotate-6">
									<h3 className="text-2xl font-bold text-gray-900 mb-4">15+ Years</h3>
									<p className="text-gray-600 mb-4">of excellence in kitchen design</p>
									<div className="grid grid-cols-2 gap-4 text-center">
										<div>
											<div className="text-2xl font-bold text-heading">500+</div>
											<div className="text-sm text-gray-600">Projects</div>
										</div>
										<div>
											<div className="text-2xl font-bold text-heading">98%</div>
											<div className="text-sm text-gray-600">Satisfaction</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Mission & Vision */}
			{/* <section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="text-center">
							<div className="w-20 h-20 bg-[#dce775] rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-heading">🎯</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
							<p className="text-gray-600 leading-relaxed">
								To create extraordinary kitchen spaces that enhance daily life, foster family connections,
								and reflect the unique personality of each homeowner through innovative design and superior craftsmanship.
							</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 bg-[#4dd0e1] rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-heading">🌟</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
							<p className="text-gray-600 leading-relaxed">
								To be the premier kitchen design company known for transforming ordinary spaces into extraordinary
								experiences, setting new standards for quality, sustainability, and customer satisfaction.
							</p>
						</div>
					</div>
				</div>
			</section> */}

			{/* Values Section */}
			{/* <section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The principles that guide everything we do
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-heading rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-white">🎯</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
							<p className="text-gray-600">
								We never compromise on materials or craftsmanship. Every kitchen we create is built to last generations.
							</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-heading rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-white">❤️</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Customer Care</h3>
							<p className="text-gray-600">
								Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.
							</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-heading rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-white">💡</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
							<p className="text-gray-600">
								We stay ahead of trends and technology to offer you the most modern and efficient solutions.
							</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-heading rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl text-white">🌱</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
							<p className="text-gray-600">
								Committed to eco-friendly practices and materials that protect our environment for future generations.
							</p>
						</div>
					</div>
				</div>
			</section> */}

			{/* Team Section */}
			{/* <section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The talented professionals behind every beautiful kitchen
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center group border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50">
							<div className="w-48 h-48 bg-gradient-to-br from-[#dce775] to-[#4dd0e1] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
								<div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
									<span className="text-6xl">👨‍🔧</span>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">John Miller</h3>
							<p className="text-heading font-semibold mb-2">Founder & Master Craftsman</p>
							<p className="text-gray-600 mb-4">15+ years of experience in custom kitchen design and installation. Passionate about creating functional art that families love.</p>
							<div className="text-sm text-gray-500">
								<p>• Certified Kitchen Designer</p>
								<p>• Master Carpenter</p>
								<p>• Sustainability Expert</p>
							</div>
						</div>

						<div className="text-center group border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50">
							<div className="w-48 h-48 bg-gradient-to-br from-[#dce775] to-[#4dd0e1] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
								<div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
									<span className="text-6xl">👩‍🎨</span>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
							<p className="text-heading font-semibold mb-2">Lead Designer</p>
							<p className="text-gray-600 mb-4">Award-winning interior designer specializing in modern kitchen concepts and space optimization techniques.</p>
							<div className="text-sm text-gray-500">
								<p>• Interior Design Degree</p>
								<p>• 3D Visualization Expert</p>
								<p>• Color Theory Specialist</p>
							</div>
						</div>

						<div className="text-center group border p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50">
							<div className="w-48 h-48 bg-gradient-to-br from-[#dce775] to-[#4dd0e1] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
								<div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
									<span className="text-6xl">👨‍💼</span>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Mike Davis</h3>
							<p className="text-heading font-semibold mb-2">Project Manager</p>
							<p className="text-gray-600 mb-4">Ensures every project runs smoothly from start to finish with exceptional attention to timeline and quality control.</p>
							<div className="text-sm text-gray-500">
								<p>• Project Management Certified</p>
								<p>• Quality Assurance Expert</p>
								<p>• Customer Relations Specialist</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<div className='my-12'>
				<CTA />
			</div>
		</div>
	);
};

export default About;