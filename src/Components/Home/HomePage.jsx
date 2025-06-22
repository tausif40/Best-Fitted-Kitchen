import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import { Phone } from 'lucide-react';
import OurDesign from './OurDesign';
import CTA from '../CTA/CTA';

function HomePage() {
	return (
		<>
			<Hero />

			<section className=''>
				<div className='container flex items-center py-6 my-16'>
					<p className='text-4xl font-poppins min-w-[350px] border-r-2 '><span className='text-6xl text-green-300'>20</span> years Quality services </p>
					<p className='pl-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida maximus blandit. Proin malesuada
						laoreet odio non hendrerit Morbi viverra orci tellus, quis vulputate orci tincidunt sed Proin non interdum
						mi. Nam lorem nisi. egestas in erat vitae, accumsan ullamcorper enim. Ut sagittis turpis sed orci aliquet.
						non interdum turpis rutrum. Aenean ac lacus justo. Proin sed urna eu ipsum convallis sollicitudin semper
						ut nisl.</p>
				</div>
			</section>

			<AboutUs />

			{/* Get a Professional Services, Call us Now */}
			<section className='bg-primary py-16 px-10 my-16'>
				<div className='container flex justify-between items-center text-text'>
					<p className='text-4xl font-semibold'>Get a Professional Services, Call us Now</p>
					<a href={`tel:01708756789`} className="min-w-max text-2xl font-semibold px-8 py-3 rounded-full bg-mySky text-white flex items-center gap-6"><Phone /> 01708 7 56789</a>

				</div>
			</section>

			<Services />
			<OurDesign />
			<div className='my-12'>
				<CTA />
			</div>

		</>
	)
}

export default HomePage