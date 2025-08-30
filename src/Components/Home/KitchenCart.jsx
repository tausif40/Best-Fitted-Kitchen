import React, { useMemo, useState } from 'react'
import { FaDollarSign } from "react-icons/fa6";

const kitchenProducts = [
	{
		id: 1,
		name: 'The Camberley Kitchen',
		series: 'Best Seller',
		image: '/assets/img/home/product1.png',
		price: 12999,
		discount: 10,
		featured: true,
		tags: [ 'Best Seller', 'Modern' ]
	},
	{
		id: 2,
		name: 'Matt Black',
		series: 'Best Seller',
		image: '/assets/img/home/product2.png',
		price: 9999,
		discount: 8,
		featured: true,
		tags: [ 'Best Seller' ]
	},
	{
		id: 3,
		name: 'Classic Emerald',
		series: 'Natural Lines',
		image: '/assets/img/home/product3.png',
		price: 10999,
		discount: 13,
		featured: false,
		tags: [ 'Natural Lines' ]
	},
	{
		id: 4,
		name: 'Scandi Minimal',
		series: 'Minimal Collection',
		image: '/assets/img/home/product4.png',
		price: 7499,
		discount: 16,
		featured: false,
		tags: [ 'Minimal' ]
	},
	{
		id: 5,
		name: 'White & Drip',
		series: 'Woody Series',
		image: '/assets/img/home/product5.png',
		price: 7999,
		discount: 12,
		featured: false,
		tags: [ 'Woody Series' ]
	},
	{
		id: 6,
		name: 'Modern Cappuccino',
		series: 'Woody Series',
		image: '/assets/img/home/product6.png',
		price: 11999,
		discount: 10,
		featured: false,
		tags: [ 'Woody Series', 'Modern' ]
	},
	{
		id: 7,
		name: 'Scandi Minimal',
		series: 'Minimal Collection',
		image: '/assets/img/home/product7.png',
		price: 7499,
		discount: 16,
		featured: false,
		tags: [ 'Minimal' ]
	},
	{
		id: 8,
		name: 'White & Drip',
		series: 'Woody Series',
		image: '/assets/img/home/product8.png',
		price: 7999,
		discount: 12,
		featured: false,
		tags: [ 'Woody Series' ]
	},
]

function KitchenCart() {
	const [ query, setQuery ] = useState('')
	const [ activeTag, setActiveTag ] = useState('All')
	const [ sort, setSort ] = useState('featured')

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

	const getDiscountedPrice = (price, discount) => {
		if (!price || !discount) return price;

		const discountedPrice = price - (price * discount) / 100;
		return Math.ceil(discountedPrice);
	}

	return (
		<>
			<section id="gallery" className="py-16">
				<div className="container mx-auto px-6">
					<div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mb-8">
						<div className='space-y-3 flex flex-col items-center lg:items-start lg:justify-end'>
							<p className='text-red-500 bg-gray-200 font-semibold text-xl rounded-lg py-2 px-6 truncate max-w-min'>Check Out Product</p>
							<p className='text-2xl font-bold '>Crafted with excellent material</p>
						</div>
						<div className='flex items-center flex-wrap gap-3'>
							{allTags.map(t => (
								<button key={t} onClick={() => setActiveTag(t)} className={`px-3 py-1.5 rounded-full text-sm ${activeTag === t ? 'bg-teal-400 text-white' : 'bg-white border'}`}>{t}</button>
							))}
						</div>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filtered.map(p => (
							<div key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
								<img src={p.image} alt={p.name} className="h-72 w-full object-cover" />
								<div className="p-4">
									<h4 className="font-semibold">{p.name}</h4>
									<p className="text-sm text-gray-500">{p.series}</p>
									<div className="mt-2 flex gap-2 items-center">
										<span className="font-semibold line-through flex items-center text-gray-500"><FaDollarSign /> {getDiscountedPrice(p.price)}</span>
										<span className="font-bold flex items-center text-gray-800"><FaDollarSign /> {p.price}</span>
										{/* {p.featured && <span className="bg-teal-400 text-white px-2 py-1 rounded text-xs">Featured</span>} */}
									</div>
									{/* <button onClick={() => setSelectedProduct(p)} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">View</button> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default KitchenCart