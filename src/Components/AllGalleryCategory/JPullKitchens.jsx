import React, { useState } from "react";
import { CheckCircle, Star, Phone, Hammer, Ruler, Truck, Sparkles, Layers, ThumbsUp } from "lucide-react";
import OurDesign from "../Home/OurDesign";
import ClaimDesign from "../ClaimDesign/ClaimDesign";

const processSteps = [
	{ icon: Phone, title: 'Free Consultation', desc: 'Discuss your needs with our expert design team at no cost.', extra: 'We’ll guide you through styles, finishes, and layouts to match your vision.' },
	{ icon: Ruler, title: 'Measurement & Design', desc: 'We measure your space and create 3D kitchen designs.', extra: 'Get a realistic preview of your dream kitchen before production begins.' },
	{ icon: Hammer, title: 'Manufacturing', desc: 'Custom build with premium materials and attention to detail.', extra: 'Every unit is crafted with precision and durability in mind.' },
	{ icon: Truck, title: 'Delivery & Installation', desc: 'Hassle-free installation by our trained professionals.', extra: 'We ensure everything is perfectly fitted and ready for use.' }
];

const testimonial = [
	{
		name: "Emma L., Colchester",
		text: "We recently had our new fitted kitchen in Manchester designed and installed by Best Fitted Kitchens UK, and I couldn’t be happier with the result. The designers really understood our style and created a modern kitchen that is both practical and elegant. The quality of the fitted units and worktops is excellent, and the whole process was smooth from start to finish. If you’re looking for modern fitted kitchens in the UK, this company is a brilliant choice.",
		avatar: "/assets/placeholder.svg",
		rating: 5,
	},
	{
		name: "James & Rebecca T., Romford",
		text: "We chose Best Fitted Kitchens after researching several companies in London, and we’re so glad we did. Their team gave us fantastic ideas for maximising space, and the installation was quick and hassle-free. The finished result is a stylish, high-quality bespoke fitted kitchen that has completely transformed our home. Anyone looking for custom fitted kitchens in the UK should definitely check them out!",
		avatar: "https://i.pravatar.cc/100?img=5",
		rating: 5,
	},
	{
		name: "Sarah P., Newbury Park",
		text: "From the initial consultation to the final installation, the experience was excellent. The design team helped us create a modern fitted kitchen in Leeds with clever storage solutions and a sleek look. The attention to detail and craftsmanship are second to none. I would recommend Best Fitted Kitchens UK to anyone searching for high-quality fitted kitchens across the UK.",
		avatar: "https://i.pravatar.cc/100?img=8",
		rating: 5,
	},
]

const faqs = [
	{ q: 'How much does a fitted kitchen cost in the UK?', a: 'Prices start from around £5,000, depending on size, design, and finishes.' },
	{ q: 'Will a fitted kitchen increase my home’s value?', a: 'Yes — a professionally designed fitted kitchen can increase your home’s value by up to 60%.' },
	{ q: 'How long does a kitchen installation take?', a: 'Most installations take 2–4 weeks, depending on complexity.' },
	{ q: 'Do you install kitchens across the UK?', a: 'Yes — we serve homeowners nationwide, including London, Manchester, Leeds, and Birmingham.' },
]

export default function JPullKitchens() {
	const [ faqOpen, setFaqOpen ] = useState(null)
	const [ modalOpen, setModalOpen ] = useState(false);

	return (
		<>
			<ClaimDesign isOpen={modalOpen} onClose={() => setModalOpen(false)} />

			<div className="font-sans text-[#444]">
				{/* Hero Section */}
				<section className="relative text-white py-32 px-6 text-center overflow-hidden">
					{/* Background image */}
					<div className="absolute inset-0">
						<img
							src="/assets/img/galleryCategory/hero.jpg"
							alt="Kitchen Background"
							className="w-full h-full object-cover"
						/>
						{/* Gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#013d8e]/40 via-[#4dd0e1]/40 to-[#dce775]/40"></div>
						{/* <div className="absolute inset-0 bg-gradient-to-r from-[#013d8e]/90 via-[#4dd0e1]/70 to-[#dce775]/70"></div> */}
					</div>

					{/* Content */}
					<div className="container mx-auto relative z-10">
						<h1 className="text-5xl md:text-7xl text-bold md:font-extrabold mb-6 drop-shadow-xl">
							Modern JPull Kitchens
						</h1>
						<p className="text-lg md:text-2xl mb-10 opacity-90">
							Where Style Meets Function – Transform your cooking space today
						</p>
						{/* <div className="flex gap-4 justify-center">
						<button className="bg-white text-[#013d8e] px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-[#f0f0f0]">
							Explore Designs
						</button>
						<button className="bg-[#ffb400] text-[#013d8e] px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-[#eaa200]">
							Get Free Quote
						</button>
					</div> */}
					</div>
				</section>


				{/* About Section */}
				<section className="py-20 px-6 bg-white">
					<div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
						<img
							src="/assets/img/galleryCategory/about.jpg"
							alt="Handle Kitchen"
							className="rounded-2xl shadow-lg transition"
						/>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-[#013d8e] mb-6">
								What Are JPull Kitchens?
							</h2>
							<p className="text-lg mb-4">
								Handle kitchens are modular kitchens with visible handles on cabinets and drawers. They are practical, durable, and budget-friendly compared to handle-less kitchens.
							</p>
							<ul className="space-y-3">
								{[ "Durable & Long-lasting", "Affordable & Stylish", "Wide Range of Designs" ].map((point, i) => (
									<li key={i} className="flex items-center gap-2 text-[#535353]">
										<CheckCircle className="text-[#4dd0e1]" /> {point}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* Features Section (New) */}
				<section className="py-20 px-6 bg-gradient-to-r from-[#f9f9f9] to-[#eef2f3]">
					<h2 className="text-3xl md:text-5xl font-bold text-center text-[#013d8e] mb-12">
						Key Features
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{ title: "Elegant Designs", icon: <Sparkles className="w-10 h-10 text-[#ffb400]" /> },
							{ title: "Durable Materials", icon: <Layers className="w-10 h-10 text-[#4dd0e1]" /> },
							{ title: "Trusted Quality", icon: <ThumbsUp className="w-10 h-10 text-[#dce775]" /> },
						].map((f, i) => (
							<div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
								<div className="flex justify-center mb-4">{f.icon}</div>
								<h3 className="text-xl font-semibold text-[#013d8e]">{f.title}</h3>
								<p className="text-sm text-gray-600 mt-2">
									We deliver excellence with designs that fit your lifestyle.
								</p>
							</div>
						))}
					</div>
				</section>

				<section className="container py-16">
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

				{/* Benefits Section */}
				<section className="py-20 px-6 bg-[#f9f9f9]">
					<h2 className="text-3xl md:text-5xl font-bold text-center text-[#333] mb-12">
						Why Choose Handle Kitchens?
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							"Easy to Use",
							"Budget Friendly",
							"Strong Grip",
							"Variety of Styles",
							"Custom Finishes",
							"Family Friendly",
						].map((item, i) => (
							<div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
								<CheckCircle className="w-10 h-10 text-[#4dd0e1] mb-4 mx-auto" />
								<h3 className="text-xl font-semibold mb-2 text-[#013d8e]">{item}</h3>
								<p className="text-sm text-gray-600">
									{item} makes handle kitchens the best choice for your dream home.
								</p>
							</div>
						))}
					</div>
				</section>

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


				{/* Process Section */}
				<section className="py-20 bg-gradient-to-b from-[#dce775]/20 via-white to-[#4dd0e1]/10 relative">
					<div className="container mx-auto pb-8">
						{/* Heading */}
						<h2 className="text-4xl font-bold mb-4 text-center text-[#013d8e]">
							Our Process
						</h2>
						<p className="text-center text-[#535353] max-w-2xl mx-auto mb-12">
							We make your dream kitchen a reality — from the first idea to the final installation.
						</p>

						{/* Cards */}
						<div className="grid md:grid-cols-4 gap-8 relative">
							{processSteps.map((step, i) => (
								<div
									key={i}
									className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 group border-t-4 border-[#dce775] hover:border-[#4dd0e1]"
								>
									{/* Icon */}
									<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#dce775] to-[#4dd0e1] shadow-md group-hover:scale-110 transition-transform duration-300">
										<step.icon className="w-8 h-8 text-white" />
									</div>

									{/* Title */}
									<h4 className="font-bold text-xl mb-3 text-[#333333] group-hover:text-[#013d8e] transition-colors">
										{step.title}
									</h4>

									{/* Description */}
									<p className="text-sm text-[#535353] leading-relaxed mb-3">
										{step.desc}
									</p>

									{/* Extra Info */}
									<p className="text-xs text-[#013d8e]/80 italic">
										{step.extra}
									</p>

								</div>
							))}
						</div>
					</div>
				</section>
				{/* Gallery Section */}
				{/* <section className="py-20 px-6 bg-[#f9f9f9]">
				<h2 className="text-3xl md:text-5xl font-bold text-center text-[#013d8e] mb-12">
					Explore Our Kitchen Gallery
				</h2>
				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{[ 1, 2, 3, 4, 5, 6 ].map((img) => (
						<div
							key={img}
							className="h-64 bg-gradient-to-br from-[#dce775] to-[#4dd0e1] rounded-2xl shadow-md flex items-center justify-center text-[#013d8e] font-semibold"
						>
							Image {img}
						</div>
					))}
				</div>
			</section> */}
				<div className="py-12">
					<OurDesign />
				</div>

				{/* Testimonials Section */}
				<section className="py-20 px-6 bg-gradient-to-r from-[#4dd0e1] to-[#dce775] text-white">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
						What Our Customers Say
					</h2>
					<div className="grid md:grid-cols-3 gap-8 container mx-auto">
						{/* {testimonial.map((t) => (
						<div key={t} className="bg-white text-[#333] p-6 rounded-2xl shadow-lg">
							<Star className="w-6 h-6 text-[#ffb400] mb-2" />
							<p className="mb-4 italic">
								“Handle Kitchens completely changed my home – stylish, modern, and functional!”
							</p>
							<h4 className="font-semibold">Happy Customer {t}</h4>
						</div>
					))} */}
						{testimonial.map((t, i) => (
							<div key={i} className="bg-white text-[#333] p-6 rounded-2xl shadow-lg flex flex-col items-center">
								<img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 shadow" />
								<div className="flex items-center mb-2">
									{Array.from({ length: Math.floor(t.rating) }).map((_, idx) => (
										<Star key={idx} className="w-6 h-6 text-[#ffb400]" />
									))}
									{t.rating % 1 !== 0 && <Star className="w-6 h-6 text-[#ffb400] opacity-50" />}
								</div>
								<p className="mb-4 italic text-center">{t.text}</p>
								<h4 className="font-semibold mb-1">{t.name}</h4>
								{/* <pre className="bg-gray-100 text-xs text-left p-2 rounded w-full overflow-x-auto mt-2">{JSON.stringify(t, null, 2)}</pre> */}
							</div>
						))}
					</div>
				</section>

				{/* Callout Banner (New) */}
				{/* <section className="py-16 px-6 bg-[#ffb400] text-center text-[#013d8e]">
				<h2 className="text-2xl md:text-4xl font-bold mb-4">
					Limited Time Offer: Get Upto 20% Off on Modular Kitchens!
				</h2>
				<p className="mb-6 text-lg">
					Book your consultation this month and enjoy exclusive discounts.
				</p>
				<button className="bg-white text-[#013d8e] px-7 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
					Claim Offer Now
				</button>
			</section> */}

				{/* FAQ Section */}
				<section id="contact" className="py-16">
					<div className="container mx-auto">
						<div>
							<h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
							{faqs.map((f, i) => (
								<div key={i} className="border rounded-lg mb-2">
									<button className="text-start w-full p-4 flex justify-between" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
										<span>{f.q}</span>
										<span>{faqOpen === i ? '-' : '+'}</span>
									</button>
									{faqOpen === i && <div className="p-4 text-sm text-gray-600">{f.a}</div>}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Final CTA Section */}
				<section className="py-20 px-6 bg-gradient-to-r from-[#013d8e] to-[#4dd0e1] text-white text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Book Your Free Kitchen Design Consultation
					</h2>
					<p className="max-w-2xl mx-auto mb-8">
						Ready to transform your home? Get started with a free, no-obligation consultation. Our designers will listen to your needs, share ideas, and create a plan for your perfect fitted kitchen.
					</p>
					<div className="flex gap-4 justify-center">
						<button className="bg-[#ffb400] text-[#013d8e] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#eaa200]" onClick={() => setModalOpen(true)}>
							Book Your Free Consultation Today
						</button>
						{/* <button className="bg-white text-[#013d8e] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
						View Catalog
					</button> */}
					</div>
				</section>

				{/* Contact Section */}
				{/* <section className="py-20 px-6 bg-[#f9f9f9] text-center">
				<h2 className="text-3xl md:text-5xl font-bold text-[#013d8e] mb-6">
					Contact Us
				</h2>
				<p className="mb-8 max-w-2xl mx-auto">
					Get in touch for design consultations, catalogs, or queries. We are here to help you create the kitchen you deserve.
				</p>
				<div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
					<div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow">
						<Phone className="text-[#4dd0e1]" />
						<span>+91 98765 43210</span>
					</div>
					<div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow">
						<Mail className="text-[#4dd0e1]" />
						<span>info@handlekitchens.com</span>
					</div>
					<div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow">
						<MapPin className="text-[#4dd0e1]" />
						<span>Mumbai, India</span>
					</div>
				</div>
			</section> */}
			</div>
		</>
	);
}
