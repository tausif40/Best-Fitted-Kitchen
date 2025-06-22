import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
	return (
		<section id="home" className="relative min-h-[90vh] flex items-center">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10 flex justify-between">
				<div className="w-1/2 h-full">
					<h1 className="text-3xl md:text-4xl text-white mb-6 leading-tight font-poppins space-y-4">
						<p>WE PROVIDE ULTIMATE</p>
						<p className="block text-primary text-5xl md:text-8xl font-anton">KITCHENS SPACE</p>
						{/* <span className="block text-red-400"> With Modern Elegance</span> */}
					</h1>
					{/* WE PROVIDE ULTIMATE
					KITCHENS */}
					{/* <p className="text-xl text-white mb-8 opacity-90">
						Transform your kitchen into a beautiful, functional space where memories are made and families come together.
					</p> */}
					<div className="flex flex-col sm:flex-row gap-4 mt-12">
						<button className="bg-mySky text-white px-8 py-3 rounded-full font-semibold hover:bg-darkSky transition-colors flex items-center justify-center gap-2">
							Get Started Today
							<ArrowRight className="w-5 h-5" />
						</button>
						<button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
							View Our Work
						</button>
					</div>
				</div>

				<div className='w-1/2' >
					<img src="https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="" className='heroImage' />
				</div>
			</div >
		</section>
	);
};

export default Hero;