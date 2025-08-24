import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Home.css"

function OurDesign() {
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
		<>
			<section className="mb-10 m-auto">
				<div className="container mx-auto">
					<div className='flex justify-center items-center flex-col mb-12 space-y-4'>
						<p className='text-red-500 bg-gray-200 font-semibold text-xl rounded-lg py-2 px-4 text-center'>Check Our Collection</p>
						<h2 className="text-4xl text-gray-800 font-bold text-center">Our Feature Gallery</h2>
						<p className="text-text text-center">Explore our Gallery of Inspiring Design</p>
					</div>

					<div className="">
						<div className='grid grid-cols-7 gap-6 mb-6'>
							<img src='/assets/img/home/gallery1.png' alt='img' className='object-cover w-full h-full col-span-2' />
							<img src='/assets/img/home/gallery2.png' alt='img' className='object-cover w-full h-full col-span-2' />
							<img src='/assets/img/home/gallery3.png' alt='img' className='object-cover w-full h-full col-span-3' />
						</div>
						<div className='grid grid-cols-7 gap-6'>
							<img src='/assets/img/home/gallery4.png' alt='img' className='object-cover w-full h-full col-span-3' />
							<img src='/assets/img/home/gallery5.png' alt='img' className='object-cover w-full h-full col-span-2' />
							<img src='/assets/img/home/gallery6.png' alt='img' className='object-cover w-full h-full col-span-2' />
						</div>
					</div>

					{/* <div className="text-center mt-6">
						<Link to='/gallery'>
							<button className="text-white border bg-mySky px-6 py-2 rounded-full hover:bg-darkSky hover:text-white transition-all">
								VIEW GALLERY
							</button>
						</Link>
					</div> */}
				</div>
			</section>
		</>
	)
}

export default OurDesign