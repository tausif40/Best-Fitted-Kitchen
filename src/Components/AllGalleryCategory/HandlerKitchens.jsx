import React from 'react'
import CTA from '../CTA/CTA'
import Footer from '../Footer/Footer'
import TopNav from '../Navbar/TopNav'
import HomePageNav from '../Navbar/HomePageNav'
import { Outlet } from 'react-router-dom'
import { HardHat, ChefHat, Tag } from "lucide-react"
import { Home } from "lucide-react"


const kitchenProducts = [
	{
		id: 1,
		name: "The Camberley Kitchen",
		series: "Black Series",
		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: true,
	},
	{
		id: 2,
		name: "The Camberley Kitchen",
		series: "Woody Series",
		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: true,
	},
	{
		id: 3,
		name: "Matt Black",
		series: "Black Series",

		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: true,
	},
	{
		id: 4,
		name: "Classic Emerald",
		series: "Natural Lines",

		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: false,
	},
	{
		id: 5,
		name: "White And Black Drip",
		series: "Woody Series",

		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: false,
	},
	{
		id: 6,
		name: "Modern Cappuccino",
		series: "Woody Series",

		image: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.9157333333333334xw:1xh;center,top&resize=1200:*",
		onSale: true,
		featured: false,
	},
]

const features = [
	{
		icon: HardHat,
		title: "We Have Expert and Personable Team",
		description: "Achieving excellence through results-driven solutions and personalized service"
	},
	{
		icon: ChefHat,
		title: "Sustainable Sustainable kitchen",
		description: "Elevate your kitchen with eco-friendly and sustainable solutions."
	},
	{
		icon: Tag,
		title: "Get a custom Expertise Quote",
		description: "Unlock your dream space with a personalized quote tailored just for you."
	}
];


const HandlerKitchens = () => {



	return (
		<>
			{/* Hero Section */}
			<div
				className="py-10 h-[500px] w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center "
				style={{
					backgroundImage:
						"url('https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Kitchen/Kitchen_HallofFame14.jpg')",
				}}>
				<div className="absolute inset-0 bg-slate-800/70"></div>
				<div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
					<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
						Innovative Solutions
					</h1>
					<p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide">
						Transforming ideas into digital experiences
					</p>
				</div>
			</div>
			{/* Hero Section */}
			{/* About Us */}
			<section className="py-10 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="space-y-8">
							<div className="grid grid-cols-2 gap-4 h-80">
								<div className="bg-gray-200 rounded-lg overflow-hidden">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDVu3fet24dWv3IKt7NHUTE4Uacvf2pJ8Ig&s"
										alt="Gallery wall with framed artwork"
										className="w-full h-full object-cover" />
								</div>
								<div className="bg-gray-200 rounded-lg overflow-hidden">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDVu3fet24dWv3IKt7NHUTE4Uacvf2pJ8Ig&s"
										alt="Modern interior with plant and decor"
										className="w-full h-full object-cover" />
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="flex items-center gap-4 mb-8">
								<div className="w-12 h-0.5 bg-teal-600"></div>
								<h2 className="text-3xl lg:text-4xl font-bold text-gray-800">History of our creation</h2>
							</div>
							<div className="space-y-6">
								<p className="text-gray-600 text-lg leading-relaxed">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos adipisci praesentium, modi nulla ea sed. Omnis fuga unde iste, libero, quos consequuntur quod natus cumque ad numquam incidunt aut distinctio?
								</p>
								<div className="pt-4">
									<button className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300 group">
										<span style={{ color: '#4dd0e1' }}>Read more</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Us */}
			{/* Information' */}
			<div className="bg-white py-10 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<div className="flex justify-center mb-6">
							<div className="bg-gradient-to-r from-[#4dd0e1] to-[#dce775] p-3 rounded-full">
								<Home className="w-8 h-8 text-white" />
							</div>
						</div>
						<h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-8 ">
							Amet accusamus nam minima veniam
						</h2>
						<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-6xl mx-auto">
							The design concept of the building is focused on creating a modern, luxurious, and comfortable living
							environment. The building features a clean and minimalistic exterior with a mix of glass and concrete
							materials. The interior of the apartments is designed with an open plan layout to maximize natural light and
							create a spacious feel. Each apartment has a balcony or terrace overlooking the city skyline.
						</p>
					</div>
				</div>
			</div>
			{/* Information' */}
			{/* feathures */}
			<div className="bg-gray-50 py-10 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<div key={index} className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<Icon className="w-12 h-12 text-gray-700 stroke-1" color="#4dd0e1" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
										<p className="text-gray-600 leading-relaxed">{feature.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* feathures */}
			{/* Product Gallery */}
			<section className="py-10 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<p className="text-[#3f3e3e] font-medium text-sm uppercase tracking-wide mb-2">YOUR DREAM KITCHEN AWAITS</p>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our most popular kitchens</h2>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{kitchenProducts.map((product) => (
							<div
								key={product.id}
								className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
								<div className="relative overflow-hidden aspect-[4/3]">
									<img
										src={product.image || "././assets/img/img-free.jpg"}
										alt={product.name}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
											<button className="bg-gradient-to-r from-[#4dd0e1] to-[#dce775] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 mr-3">
												View Details
											</button>
										</div>
									</div>
								</div>
								{/* Product Info */}
								<div className="p-6 group-hover:bg-[#45c0d0] transition-colors duration-300 text-white">
									<div className="mb-3">
										<h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
											{product.name}
										</h3>
										<p className="text-gray-600 text-sm font-medium group-hover:text-white transition-colors duration-300">{product.series}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center">
						<button className="bg-[#000000] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform">
							View All Spaces
						</button>
					</div>
				</div>
			</section>
			{/* Product Gallery */}
			{/* Newsletter Section */}
			<section className="py-20 bg-gradient-to-r from-[#4dd0e1] to-[#dce775] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
					<h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stay Updated with Kitchen Trends</h2>
					<p className="text-xl text-emerald-100 mb-8">
						Get the latest design inspiration, tips, and exclusive offers delivered to your inbox
					</p>
					<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500" />
						<button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
							Subscribe
						</button>
					</div>
					<p className="text-emerald-200 text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
				</div>
			</section>
			<br />
			<div className='my-12'>
				<CTA />
			</div>
		</>
	)
}
export default HandlerKitchens;
