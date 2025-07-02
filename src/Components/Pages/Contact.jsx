import { Phone, Mail, MapPin, Clock } from "lucide-react";
import CTA from "../CTA/CTA";
import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

export default function Contact() {

	const [ showPopup, setShowPopup ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false)
	const [ sendMessage, setSendMessage ] = useState('Send Message')
	const [ errorMessage, setErrorMessage ] = useState(false)
	const BASE_URL = process.env.REACT_APP_API_URL;
	const [ formData, setFormData ] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		if (e.target.name === 'phone') {
			setErrorMessage(false)
		}
		setFormData({ ...formData, [ e.target.name ]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		console.log('formData', formData);
		if (formData.phone.length !== 11) {
			toast.error('Phone number must be 11 digits')
			setErrorMessage(true)
			setIsLoading(false)
			return;
		}
		try {
			setSendMessage('Message sending...')
			await axios.post(`${BASE_URL}/contact-us`, formData).then((res) => {
				console.log("Success:", res.data);
				setSendMessage('Send Successfully')
				setShowPopup(true);
				setTimeout(() => setShowPopup(false), 3000);
				setIsLoading(false)
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
			});
		} catch (error) {
			console.error("Error:", error);
			setSendMessage('Failed! Try again')
			setIsLoading(false)
		}
	};


	return (
		<section id="contact" className=" bg-white">

			<div className='min-h-[100px] max-h-[350px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/kitchen.jpg' alt="Banner" className='object-bottom w-full' />
			</div>

			<div className="container mx-auto pt-20">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-900 mb-2 uppercase">
						CONTACT US
					</h2>
					<p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Bestfittedkitchen
					</p>
				</div>
				{/* Contact Info Cards */}
				<div className="grid sm:grid-cols-4 gap-6 my-14">
					{/* Card 1 */}
					<div className="shadow p-6 text-center border rounded">
						<div className="bg-mySky w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
							<Phone className="w-6 h-6 text-white" />
						</div>
						<h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
						<a href="tel:01708756789" className="text-blue-600 hover:underline">01708 7 56789</a> <br />
						<a href="tel:07961070327" className="text-blue-600 hover:underline">07961070327</a>
					</div>

					{/* Card 2 */}
					<div className="shadow p-6 text-center border rounded">
						<div className="bg-mySky w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
							<Mail className="w-6 h-6 text-white" />
						</div>
						<h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
						<a href="mailto:info@bestfittedkitchen.co.uk" className="text-blue-600 hover:underline">
							info@bestfittedkitchen.co.uk
						</a>
					</div>

					{/* Card 3 */}
					<div className="shadow p-6 text-center border rounded">
						<div className="bg-mySky w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
							<MapPin className="w-6 h-6 text-white" />
						</div>
						<h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
						<p className="text-gray-600">
							Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ
						</p>
					</div>

					{/* Card 4 */}
					<div className="shadow p-6 text-center border rounded">
						<div className="bg-mySky w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
							<Clock className="w-6 h-6 text-white" />
						</div>
						<h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
						<p className="text-gray-600">
							MON-FRI 9:00 A.M to 6:00 P.M <br /> SAT:10:00 A.M to 2:00 P.M <br /> SUN: CLOSED
						</p>
					</div>
				</div>
				<div className="mb-12 h-[400px] w-full overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.893972741806!2d0.1811100758151814!3d51.57017720611629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4cc4bb00001%3A0xbd432536a1ce38a9!2sBest%20Fitted%20Wardrobe!5e0!3m2!1sen!2sin!4v1739813132394!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				{/* Get in Touch Section */}
				<div className="relative mb-12">
					<div className="absolute inset-0 bg-[#2A9D8F] opacity-90"></div>
					<div className="relative z-10 px-4 py-12 text-center text-gray-700">
						<h2 className="text-4xl font-bold mb-8">Get in touch</h2>
						<form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 flex flex-col">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								required
							/>
							<input
								type="number"
								name="phone"
								placeholder="Phone"
								value={formData.phone}
								onChange={handleChange}
								className={`bg-white px-4 py-2 focus:outline-mySky ${errorMessage && 'border-2 border-red-600 text-red-500'}`}
								required
								maxLength="11"
								pattern="\d{11}"
								title="Phone number must be exactly 11 digits"
							/>
							{/* {errorMessage && <p className='text-red-700 text-sm text-start'>Phone number must be 11 digits</p>} */}
							<textarea
								name="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								rows={4}
								required
							/>
							<button
								type="submit"
								className="w-full bg-primary text-[#2A9D8F] hover:bg-primaryDark px-4 py-2 transition-all font-semibold"
								disabled={isLoading}
							>
								{sendMessage}
							</button>
						</form>
					</div>
				</div>

				<div className='my-12'>
					<CTA />
				</div>
			</div>

			{showPopup && (
				<div className="z-50 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f5fcd6] text-black px-6 py-3 rounded-md shadow-lg transition-opacity duration-500 ease-in-out animate-fadeInOut border-2 border-[#4be6bd]">
					<div className='text-md md:text-xl p-3 text-center'>
						Thank you for contacting us.<br />We will get back to you shortly.
					</div>
				</div>
			)}

		</section>
	);
}
