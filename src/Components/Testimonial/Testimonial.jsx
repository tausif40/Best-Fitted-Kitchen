"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Michael Roberts",
		text: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable.",
		avatar: "https://i.pravatar.cc/100?img=3",
		rating: 4.5,
	},
	{
		name: "Marta Brown",
		text: "My experience has been consistently outstanding. From the bedroom to the living room, they have a wide range of stylish and well-crafted furniture.",
		avatar: "https://i.pravatar.cc/100?img=5",
		rating: 5,
	},
	{
		name: "John Smith",
		text: "I am beyond impressed with the quality of the recliner chair I bought. The comfort it provides is beyond compare, and the design perfectly complements our living room.",
		avatar: "https://i.pravatar.cc/100?img=8",
		rating: 4.5,
	},
	{
		name: "Sophia Taylor",
		text: "Absolutely love the sofa I bought. It’s not only elegant but also extremely comfortable. Great quality and value for money.",
		avatar: "https://i.pravatar.cc/100?img=10",
		rating: 5,
	},
];

export default function TestimonialSwiper() {
	return (
		<div className="w-full container mx-auto py-12">
			{/* Header */}
			<div className="flex justify-center items-center flex-col mb-12 space-y-4">
				<p className='text-red-500 bg-gray-200 font-semibold text-xl rounded-lg py-2 px-4 text-center'>	Testimonial Section</p>
				<h2 className="text-3xl font-bold mt-3">What Our Customer Say</h2>
				<p className="text-gray-600 mt-2">
					Discover the Stories and Experiences of Our Delighted Customers
				</p>
			</div>

			<div className="relative mx-4 px-6">
				{/* Swiper */}
				<Swiper
					modules={[ Navigation, Autoplay ]}
					spaceBetween={20}
					breakpoints={{
						768: { slidesPerView: 1 },
						1024: { slidesPerView: 2 },
					}}
					autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
					navigation={{
						nextEl: ".next-btn",
						prevEl: ".prev-btn",
					}}
					loop={true}
					className="pb-10"
				>
					{testimonials.map((t, i) => (
						<SwiperSlide key={i}>
							<div className="bg-white rounded-2xl border p-6">
								<img src="/assets/img/icons/colon.png" alt="" className="h-4 mb-4" />
								<p className="text-gray-700 mb-4">{t.text}</p>
								<div className="flex items-center justify-between mt-4">
									<div className="flex items-center gap-3">
										<img
											src={t.avatar}
											alt={t.name}
											className="w-10 h-10 rounded-full"
										/>
										<span className="font-medium">{t.name}</span>
									</div>
									<div className="flex">
										{Array.from({ length: 5 }).map((_, idx) => (
											<span
												key={idx}
												className={`text-xl ${idx < Math.floor(t.rating)
													? "text-yellow-400"
													: idx < t.rating
														? "text-yellow-400/70"
														: "text-gray-300"
													}`}
											>
												★
											</span>
										))}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Controls */}
				<button className="prev-btn absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button className="next-btn absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div >
	);
}
