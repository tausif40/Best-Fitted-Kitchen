import React, { useEffect, useMemo, useState } from 'react'
import CTA from '../CTA/CTA'
import Footer from '../Footer/Footer'
import TopNav from '../Navbar/TopNav'
import HomePageNav from '../Navbar/HomePageNav'
import { HardHat, ChefHat, Tag, Home, Star, Award, CheckCircle2, Search, Filter, Mail, Phone, Hammer, Ruler, Truck, Brush, BookOpen, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

// --- Data ---
const kitchenProducts = [
	{ id: 1, name: 'The Camberley Kitchen', series: 'Black Series', image: '/assets/placeholder.svg', price: 12999, featured: true, tags: [ 'Black Series', 'Modern' ] },
	{ id: 3, name: 'Matt Black', series: 'Black Series', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80', price: 9999, featured: true, tags: [ 'Black Series' ] },
	{ id: 4, name: 'Classic Emerald', series: 'Natural Lines', image: '/assets/placeholder.svg', price: 10999, featured: false, tags: [ 'Natural Lines' ] },
	{ id: 7, name: 'Scandi Minimal', series: 'Minimal Collection', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', price: 7499, featured: false, tags: [ 'Minimal' ] },
	{ id: 5, name: 'White & Drip', series: 'Woody Series', image: '/assets/placeholder.svg', price: 7999, featured: false, tags: [ 'Woody Series' ] },
	{ id: 6, name: 'Modern Cappuccino', series: 'Woody Series', image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80', price: 11999, featured: false, tags: [ 'Woody Series', 'Modern' ] },
]

const features = [
	{ icon: HardHat, title: 'Expert Craftsmanship', desc: 'A seasoned team of designers and fitters focused on long-lasting quality.' },
	{ icon: ChefHat, title: 'Functional by Design', desc: 'Layouts that make cooking joyful, efficient and beautiful.' },
	{ icon: Tag, title: 'Personalized Quotes', desc: 'Transparent pricing and tailored proposals for your budget.' },
	{ icon: CheckCircle2, title: 'Aftercare & Warranty', desc: '1-year installation warranty and easy aftercare support.' }
]

const processStep = [
	{ icon: Phone, title: 'Free Consultation', desc: 'Discuss your needs with our expert design team at no cost.' },
	{ icon: Ruler, title: 'Measurement & Design', desc: 'We measure your space and create 3D kitchen designs.' },
	{ icon: Hammer, title: 'Manufacturing', desc: 'Custom build with premium materials and attention to detail.' },
	{ icon: Truck, title: 'Delivery & Installation', desc: 'Hassle-free installation by our trained professionals.' }
]

const processSteps = [
	{ icon: Phone, title: 'Free Consultation', desc: 'Discuss your needs with our expert design team at no cost.', extra: 'We’ll guide you through styles, finishes, and layouts to match your vision.' },
	{ icon: Ruler, title: 'Measurement & Design', desc: 'We measure your space and create 3D kitchen designs.', extra: 'Get a realistic preview of your dream kitchen before production begins.' },
	{ icon: Hammer, title: 'Manufacturing', desc: 'Custom build with premium materials and attention to detail.', extra: 'Every unit is crafted with precision and durability in mind.' },
	{ icon: Truck, title: 'Delivery & Installation', desc: 'Hassle-free installation by our trained professionals.', extra: 'We ensure everything is perfectly fitted and ready for use.' }
];

const materials = [
	{ name: 'Solid Wood', image: '/assets/placeholder.svg', desc: 'Rich grains, timeless durability.' },
	{ name: 'Laminate', image: '/assets/placeholder.svg', desc: 'Affordable, versatile finishes.' },
	{ name: 'Quartz', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80', desc: 'Scratch-resistant, elegant surfaces.' },
	{ name: 'Eco-friendly Plywood', image: '/assets/placeholder.svg', desc: 'Sustainable and sturdy core.' }
]

const testimonials = [
	{ id: 1, name: 'Asha K.', quote: 'Transformed our tiny kitchen into a magazine-worthy space. Timely and professional!', rating: 5 },
	{ id: 2, name: 'Rahul S.', quote: 'Excellent design sense — compact, smart, and beautiful.', rating: 5 },
	{ id: 3, name: 'Meera P.', quote: 'Loved the sustainable material choices and finish quality.', rating: 5 }
]

const faqs = [
	{ q: 'Do you provide free on-site consultation?', a: 'Yes — we provide a complimentary initial consultation to understand your needs and space.' },
	{ q: 'What is the typical project timeline?', a: 'Most kitchens complete within 4–8 weeks depending on scope and custom items.' },
	{ q: 'Do you offer modular and custom cabinetry?', a: 'Both modular systems and fully custom cabinetry options are available.' },
	{ q: 'Can you work with small kitchen spaces?', a: 'Absolutely! We specialize in smart designs for compact homes.' },
	{ q: 'Do you provide warranty?', a: 'We offer a 1-year installation warranty and support for all hardware.' }
]

// --- Utility ---
function useAutoCarousel(length, interval = 4000) {
	const [ index, setIndex ] = useState(0)
	useEffect(() => {
		const t = setInterval(() => setIndex(i => (i + 1) % length), interval)
		return () => clearInterval(t)
	}, [ length, interval ])
	return [ index, setIndex ]
}

export default function KitchensPremium() {
	const [ query, setQuery ] = useState('')
	const [ activeTag, setActiveTag ] = useState('All')
	const [ sort, setSort ] = useState('featured')
	const [ selectedProduct, setSelectedProduct ] = useState(null)
	const [ faqOpen, setFaqOpen ] = useState(null)
	const [ testiIndex ] = useAutoCarousel(testimonials.length, 4500)

	const allTags = useMemo(() => [ 'All', ...new Set(kitchenProducts.flatMap(p => p.tags)) ], [])

	const filtered = useMemo(() => {
		let list = kitchenProducts
		if (activeTag !== 'All') list = list.filter(p => p.tags.includes(activeTag))
		if (query.trim()) list = list.filter(p => (p.name + ' ' + p.series).toLowerCase().includes(query.toLowerCase()))
		if (sort === 'price-asc') list = [ ...list ].sort((a, b) => a.price - b.price)
		if (sort === 'price-desc') list = [ ...list ].sort((a, b) => b.price - a.price)
		if (sort === 'featured') list = [ ...list ].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
		return list
	}, [ activeTag, query, sort ])

	return (
		<div className="min-h-screen font-sans text-gray-900 bg-white">
			{/* HERO */}
			<header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80')" }}>
				<div className="absolute inset-0 bg-black/60" />
				<div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Design-led Kitchens — Built to Last</h1>
					<p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">Handcrafted cabinets, smart storage, and sustainable materials. From concept to completion.</p>
					<div className="mt-6 flex flex-col sm:flex-row gap-4">
						<p className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-3 rounded-full font-semibold transition">Get a Free Quote</p>
						<Link to="/gallery" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full transition">Explore Gallery </Link>
					</div>
					<div className="mt-8 flex gap-6 text-sm text-gray-300">
						<span className="flex items-center gap-2"><Award className="w-5 h-5" /> 8+ Years Experience</span>
						{/* <span className="flex items-center gap-2"><Star className="w-5 h-5" /> 4.9/5 Rating</span> */}
					</div>
				</div>
			</header>Link

			{/* WHY CHOOSE US */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
						{features.map((f, i) => (
							<div key={i} className="bg-slate-50 p-6 rounded-lg shadow hover:shadow-lg transition">
								<f.icon className="w-8 h-8 text-teal-400 mb-4" />
								<h4 className="font-semibold mb-2">{f.title}</h4>
								<p className="text-sm text-gray-600">{f.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* PROCESS */}
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

			{/* MATERIALS */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-8 text-center">Premium Materials & Finishes</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
						{materials.map((m, i) => (
							<div key={i} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
								<img src={m.image} alt={m.name} className="h-48 w-full object-cover" />
								<div className="p-4">
									<h4 className="font-semibold">{m.name}</h4>
									<p className="text-sm text-gray-600">{m.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* GALLERY FILTERS */}
			<section id="gallery" className="py-16 bg-slate-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-wrap gap-4 mb-6">
						{/* <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="px-4 py-2 border rounded-full flex-1" />
						<select value={sort} onChange={e => setSort(e.target.value)} className="px-4 py-2 border rounded-full">
							<option value="featured">Featured</option>
							<option value="price-asc">Price ↑</option>
							<option value="price-desc">Price ↓</option>
						</select> */}
						{allTags.map(t => (
							<button key={t} onClick={() => setActiveTag(t)} className={`px-4 py-2 rounded-full text-sm ${activeTag === t ? 'bg-teal-400 text-white' : 'bg-white border'}`}>{t}</button>
						))}
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filtered.map(p => (
							<div key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
								<img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
								<div className="p-4">
									<h4 className="font-semibold">{p.name}</h4>
									<p className="text-sm text-gray-500">{p.series}</p>
									<div className="mt-2 flex justify-between items-center">
										<span className="font-bold">₹{p.price.toLocaleString()}</span>
										{p.featured && <span className="bg-teal-400 text-white px-2 py-1 rounded text-xs">Featured</span>}
									</div>
									{/* <button onClick={() => setSelectedProduct(p)} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">View</button> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-16 bg-gradient-to-r from-teal-400 to-lime-300 text-white">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
					<blockquote className="italic text-lg">"{testimonials[ testiIndex ].quote}"</blockquote>
					<p className="mt-4 font-semibold">— {testimonials[ testiIndex ].name}</p>
					<div className="mt-3 flex justify-center gap-1">
						{Array.from({ length: testimonials[ testiIndex ].rating }).map((_, i) => <Star key={i} className="w-5 h-5" />)}
					</div>
				</div>
			</section>

			<div className='my-12'>
				<CTA />
			</div>

			{/* FAQ + CONTACT */}
			<section id="contact" className="py-16">
				<div className="container mx-auto">
					<div>
						<h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
						{faqs.map((f, i) => (
							<div key={i} className="border rounded-lg mb-2">
								<button className="w-full p-4 flex justify-between" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
									<span>{f.q}</span>
									<span>{faqOpen === i ? '-' : '+'}</span>
								</button>
								{faqOpen === i && <div className="p-4 text-sm text-gray-600">{f.a}</div>}
							</div>
						))}
					</div>
				</div>
			</section>


		</div >
	)
}
