import React from 'react';

const Hero = () => {

	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] relative">
			<div className="grid lg:grid-cols-2 gap-12 items-start">
				<div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4 space-y-2">
						<p>Perfect</p>
						<p>Harmony:</p>
						<p>Comfort & Style</p>
					</h1>
					<p className="text-text mb-6 text-lg">
						Modern kitchen system made-to-order
					</p>
					<div className="flex items-center space-x-4 mb-8">
						<button className="bg-mySky text-sm text-white px-4 py-3 rounded-full hover:bg-teal-600 transition-colors">
							Book a free appointment
						</button>
						<button className="flex items-center text-gray-700 hover:text-teal-500">
							<div className="w-10 h-10 bg-gray-100 rounded-full shadow-xl flex items-center justify-center mr-3">
								<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
									<path d="M8 5v10l7-5-7-5z" />
								</svg>
							</div>
							Watch Video
						</button>
					</div>
				</div>
				<div className="relative">
					<img
						src="/assets/img/home/Rectangle.png"
						alt="Modern Kitchen"
						className="rounded-4xl w-full h-auto"
					/>

				</div>
			</div>

			{/* md:absolute w-[95%] lg:w-auto flex flex-wrap lg:flex-row items-center -md:justify-between gap-6 lg:gap-16 text-sm text-gray-600 py-6 px-12 shadow-md rounded-[4rem] sm:rounded-full border-t bottom-0 md:bottom-8 lg:bottom-10 bg-white */}
			<div className="absolute w-[93%] sm:w-[94%]  md:w-[95%] flex flex-col lg:flex-row items-center md:justify-between gap-6 lg:gap-16 text-sm text-gray-600 py-6 px-12 shadow-md rounded-[4rem] xs:rounded-full border-t -bottom-32 sm:-bottom-8 md:bottom-8 lg:bottom-10 bg-white">
				<div className='grid px-2 xs:px-6 sm:px-12 md:px-6 grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full'>
					<div>
						<h5 className='font-semibold mb-2 min-w-max'>Comfort</h5>
						<div className="flex items-center gap-2">
							<img src="/assets/img/icons/yoga.png" alt="" />
							<p className='min-w-max'>Relax with ease</p>
						</div>
					</div>
					<div>
						<h5 className='font-semibold mb-2 min-w-max'>Quality Assurance</h5>
						<div className="flex items-center gap-2">
							<img src="/assets/img/icons/vector.png" alt="" />
							<p className='min-w-max'>Trusted quality</p>
						</div>
					</div>
					<div>
						<h5 className='font-semibold mb-2 min-w-max'>Free Shipping</h5>
						<div className="flex items-center gap-2">
							<img src="/assets/img/icons/box.png" alt="" />
							<p className='min-w-max'>No-Cost delivery</p>
						</div>
					</div>
					<div className='flex items-center gap-10'>
						<div className='h-12 w-px bg-slate-200 hidden lg:block'></div>
						<div>
							<h5 className='font-semibold mb-2 min-w-max'>Secure checkout</h5>
							<div className="flex items-center gap-2">
								<img src="/assets/img/icons/verified.png" alt="" />
								<p className='min-w-max'>Secure payment</p>
							</div>
						</div>
					</div>
				</div>

				<button className='text-gray-700 hover:text-mySky flex items-center border-2 border-gray-500 px-6 h-12 rounded-full min-w-max'>
					See More
				</button>
			</div>

		</section>
	);
};

export default Hero;
