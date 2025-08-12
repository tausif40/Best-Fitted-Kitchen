import React from 'react'
import { Link } from 'react-router-dom';

const data = [
	{
		url: '/handleless-kitchens',
		icon: '/assets/img/icon1.png',
		img: '/assets/img/kitchen1.jpg',
		title: "Handleless Kitchens",
		description:
			"Modern Handleless Kitchens offer a sleek, minimalist look with smooth surfaces and clean lines. Perfect for contemporary homes, these handle-free cabinets use push-to-open or recessed grip mechanisms for an elegant, clutter-free finish.",
	},
	{
		url: '/j-pull-kitchens',
		icon: '/assets/img/icon2.png',
		img: '/assets/img/kitchen2.jpg',
		title: "J-Pull Kitchens",
		description:
			"J-Pull Kitchens feature a built-in J-shaped groove that acts as a handle, combining modern style with practical function. Their smooth, integrated grip design offers a streamlined look without visible handles.",
	},
	{
		url: '/profile-kitchens',
		icon: '/assets/img/icon3.png',
		img: '/assets/img/kitchen3.jpg',
		title: "Profile Kitchens",
		description:
			"Profile Kitchens bring a unique, contemporary edge with subtle trim details that add character while keeping a sleek finish. Ideal for a modern look with distinctive detailing.",
	},
	{
		url: '/shaker-style-kitchens',
		icon: '/assets/img/icon3.png',
		img: '/assets/img/kitchen4.jpg',	
		title: "Shaker Style Kitchens",
		description:
			"Shaker Kitchens are timeless, featuring five-piece cabinet doors and classic square-framed design. They offer durability, simplicity, and a warm, welcoming feel that never goes out of style.",
	},
];

const Services = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 lg:gap-6  xl:gap-10 lg:px-8 xl:px-12">
					{data.map((item, index) => (
						<div key={index} className="text-center relative">
							<div className="mb-16">
								<img src={item.img} alt="img" className='h-80 w-full object-cover' />
								<img src={item.icon} alt="icon" className='absolute left-1/2  -translate-x-1/2 -translate-y-1/2 ' />
								{/* <item.icon className="mx-auto h-12 w-12 text-[#4DD4D4]" />, */}
							</div>
							<h3 className="text-xl lg:text-2xl font-bold mb-3 text-heading">{item.title}</h3>
							<p className="text-gray-600 md:text-sm lg:text-base mb-4 px-4">{item.description}</p>
							<Link to={item?.url}>
								<button className="text-mySky border border-mySky px-6 py-2 rounded-full hover:bg-mySky hover:text-white transition-all">
									READ MORE
								</button>
							</Link>
						</div>
					))}
				</div>


				{/* <div className="grid md:grid-cols-2 gap-8 mt-4">
					{data.map((item, index) => (
						<div
							key={index}
							className="border-2 border-dashed rounded-xl border-sky-300 bg-gradient-to-br from-primary/30 to-white dark:from-purple-900/20 dark:to-background overflow-hidden"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="p-0 text-center">
								<div className="relative w-full h-72 overflow-hidden">
									<img
										src={item.img}
										alt="img"
										className="w-full h-full object-cover"
										style={{
											maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
											WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
										}}
									/>
								</div>

								<div className="px-8 pb-8 pt-2 relative">
									<h3 className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 min-w-max ">
										{item?.heading}
									</h3>
									<h3 className="text-ld font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
									<p className="text-muted-foreground mb-4">{item.description}</p>
									<div className="flex gap-6 justify-center">
										<Link to={item?.url}>
											<button className="text-mySky border border-mySky px-6 py-2 rounded-full hover:bg-mySky hover:text-white transition-all">
												READ MORE
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div> */}


			</div>
		</section>
	);
};

export default Services;