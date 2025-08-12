import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const Hero = () => {
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		const loadImages = async () => {
			const imageFolderPath = '/assets/img/ourDesign/img';
			const maxImages = 9;
			const tempImages = [];

			for (let i = 1; i <= maxImages; i++) {
				const imgPath = `${imageFolderPath}${i}.jpg`;

				try {
					const response = await fetch(imgPath, { method: 'HEAD' });
					if (response.ok) {
						setImages([ ...tempImages ]);
						tempImages.push(imgPath);
					} else {
						console.warn(`Image not found or error status: ${imgPath} - Status: ${response.status}`);
					}
				} catch (error) {
					console.error(`Error fetching image ${imgPath}:`, error);
				}
			}
		};

		loadImages();
	}, []);

	return (
		<section id="home" className="relative min-h-[90vh] flex items-center -z-10">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/assets/img/home/homeBg.jpg')"
				}}
			>
				<div className="absolute inset-0 bg-gray-600 bg-opacity-5"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
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

					<div className="max-w-lg mx-auto bg-gradient-to-br from-[#d6dd52] to-[#45c0d0] rounded-2xl shadow-2xl overflow-hidden ">
						<div className="p-6 text-center text-white">
							<h2 className="text-2xl font-bold tracking-wide drop-shadow-md text-blue-800">
								🌟 Beautiful Kitchens Gallery 🌟
							</h2>
						</div>

						<div className='px-4 pb-2'>
							<Swiper
								modules={[ Navigation, Autoplay ]}
								navigation
								autoplay={{ delay: 2500, disableOnInteraction: false }}
								loop={true}
								className="rounded-lg overflow-hidden"
							>
								{images.map((src, idx) => (
									<SwiperSlide key={idx}>
										<img
											src={src}
											alt={`Slide ${idx}`}
											className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="p-4 flex justify-center bg-white">
							<Link to='/gallery'>
								<button
									onClick={() => alert("Gallery clicked!")}
									className="px-6 py-2 rounded-full font-semibold text-white bg-blue-800 shadow-lg hover:scale-105 transition-transform"
								>
									Show Gallery
								</button>
							</Link>
						</div>
					</div>

				</div>
			</div >
		</section>
	);
};

export default Hero;