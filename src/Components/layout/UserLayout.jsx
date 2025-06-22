import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import CookiePolicy from "../CookiePolicy/CookiePolicy";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import HomePageNav from "../Navbar/HomePageNav";
import TopNav from "../Navbar/TopNav";

const UserLayout = () => {

	const [ isVisible, setIsVisible ] = useState(false);

	useEffect(() => {
		const hasAccepted = Cookies.get("cookiesAccepted");
		if (!hasAccepted) {
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			{isVisible && <CookiePolicy />}
			<TopNav />
			<HomePageNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default UserLayout;
