import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	const socialLink = [
		{ name: 'Facebook', link: 'https://www.facebook.com/BestfittedWardrobeltd' },
		{ name: 'Twitter', link: 'https://x.com/' },
		{ name: 'Google', link: '' },
		{ name: 'Instagram', link: 'https://www.instagram.com/bestfittedwardrobe/' },
	]

	const navLinks = [
		{ name: 'Home', link: '/' },
		{ name: 'About us', link: '/about-us' },
		{ name: 'Wardrobes', link: '/Wardrobes' },
		{ name: 'Sliding wardrobes', link: '/sliding-wardrobes' },
		{ name: 'Built in wardrobes', link: '/built-in-wardrobes' },
		{ name: 'Fitted Kitchens', link: '/built-in-wardrobes' },
		{ name: 'Sale', link: '/sale' },
		{ name: 'Gallery', link: '/gallery' },
		{ name: 'Contact us', link: '/contact' },
		// { name: 'Terms & Conditions', link: '/terms-conditions' },
		// { name: 'Payment and Cancellation Terms', link: '/payment-terms-and-conditions' },
	]

	return (
		<footer className="bg-white pt-12 pb-8 border-t">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<Link to="/" className="flex-shrink-0">
							<img
								src="/assets/img/logos/icon.png"
								alt="Best Fitted Wardrobe"
								className="w-36 lg:w-36"
							/>
						</Link>
						<p className="text-gray-600 my-4">
							Bringing you the finest in wardrobe and kitchen design solutions.
						</p>
						<div className="mt-4">
							<a href="tel:01708756789" className="block text-gray-700 hover:text-teal-500">
								01708 756789
							</a>
							<a href="tel:07961070327" className="block text-gray-700 hover:text-teal-500">
								07961 070327
							</a>
						</div>
					</div>

					{/* Categories / Navigation */}
					<div>
						<h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
						<ul className="space-y-2 text-gray-600">
							{navLinks.map((item, i) => (
								<li key={i}>
									<Link to={item.link} className="hover:text-teal-500 capitalize">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Popular Products (re-using some main links) */}
					<div>
						<h4 className="font-bold text-gray-900 mb-4">Popular Products</h4>
						<ul className="space-y-2 text-gray-600">
							<li><Link to="/Wardrobes" className="hover:text-teal-500">Wardrobes</Link></li>
							<li><Link to="/sliding-wardrobes" className="hover:text-teal-500">Sliding Wardrobes</Link></li>
							<li><Link to="/built-in-wardrobes" className="hover:text-teal-500">Built-in Wardrobes</Link></li>
							<li><Link to="/sale" className="hover:text-teal-500">Sale Items</Link></li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
						<ul className="space-y-2 text-gray-600">
							{socialLink.map((social, i) => (
								<li key={i}>
									<a href={social.link} target="_blank" rel="noreferrer" className="hover:text-teal-500">
										{social.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col md:flex-row gap-4 justify-between items-center border-t mt-6 pt-6 text-gray-600">
					<p className='text-xs md:text-sm'>
						© 2025 BEST FITTED KITCHEN. All rights reserved.
					</p>

					<div className='flex gap-4 text-xs'>
						<Link href='/terms-conditions' className='hover:text-teal-500'>
							<p>Terms & Conditions</p>
						</Link>
						<Link href='/payment-terms-and-conditions' className='hover:text-teal-500'>
							<p>Payment and Cancellation Terms</p>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
