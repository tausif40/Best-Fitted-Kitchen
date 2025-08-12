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
						tempImages.push(imgPath);
					} else {
						console.warn(`Image not found: ${imgPath}`);
					}
				} catch (error) {
					console.error(`Error fetching image ${imgPath}:`, error);
				}
			}
			setImages(tempImages);
		};

		loadImages();
	}, []);

	return (
		<section id="home" className="relative min-h-[90vh] flex items-center -z-10">
			{/* Background */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/assets/img/home/homeBg.jpg')" }}
			>
				<div className="absolute inset-0"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto pt-20 pb-14 lg:pb-0 lg:pt-0 px-4 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">

				{/* Left Text Section */}
				<div className="w-full lg:w-1/2 text-center lg:text-left">
					<h1 className="text-3xl md:text-4xl text-white mb-6 leading-tight font-poppins space-y-4">
						<p>WE PROVIDE ULTIMATE</p>
						<p className="block text-primary text-5xl sm:text-6xl md:text-7xl font-anton">
							KITCHENS SPACE
						</p>
					</h1>
					<div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12 justify-center lg:justify-start">
						<button className="bg-mySky text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-darkSky transition-colors flex items-center justify-center gap-2">
							Get Started Today
							<ArrowRight className="w-5 h-5" />
						</button>
						<button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
							View Our Work
						</button>
					</div>
				</div>

				{/* Right Gallery Section */}
				<div className="w-full lg:w-1/2">
					<div className="max-w-lg mx-auto bg-gradient-to-br from-[#d6dd52] to-[#45c0d0] rounded-2xl shadow-2xl overflow-hidden">
						<div className="p-4 sm:p-6 text-center text-white">
							<h2 className="text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md text-blue-800">
								🌟 Beautiful Kitchens Gallery 🌟
							</h2>
						</div>

						<div className="px-2 sm:px-4 pb-2">
							<Swiper
								modules={[ Navigation, Autoplay ]}
								navigation
								autoplay={{ delay: 2500, disableOnInteraction: false }}
								loop
								className="rounded-lg overflow-hidden bg-gray-200"
							>
								{images.map((src, idx) => (
									<SwiperSlide key={idx}>
										<img
											src={src}
											alt={`Slide ${idx}`}
											className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						<div className="p-3 sm:p-4 flex justify-center bg-white">
							<Link to="/gallery">
								<button
									className="px-5 sm:px-6 py-2 rounded-full font-semibold text-white bg-blue-800 shadow-lg hover:scale-105 transition-transform"
								>
									Show Gallery
								</button>
							</Link>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Hero;
