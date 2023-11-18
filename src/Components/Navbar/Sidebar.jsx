import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Links } from '../utils/Link/Links';

// TODO: Implement handleClose arguments
const Sidebar = ({ isOpen, setIsOpen }) => {
	const sidebarRef = useRef(null);

	const handleNavLinkClick = () => {
		setIsOpen(false);
	};
	const handleOutsideClick = (event) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	let previousIndex;
	const getRandomColor = () => {
		const colors = [
			'#f5d939',
			'#ff0099',
			'#00ff91',
			'#00FFFF',
			'#2469fe',
			'#ffac07',
			'#ff163d',
			'#f78045',
		];

		// Generate a random index different from the previous one
		let randomIndex = Math.floor(Math.random() * colors.length);
		while (randomIndex === previousIndex) {
			randomIndex = Math.floor(Math.random() * colors.length);
		}
		// Store the current index for the next call
		previousIndex = randomIndex;
		return colors[randomIndex];
	};

	return (
		<aside
			ref={sidebarRef}
			className="fixed h-screen top-0  left-0 bg-[#1a1c2e] p-4 shadow-2xl  border-r-2 border-r-cyan-500 z-50 transform transition-all duration-300 ease-in-out "
			aria-label="Sidebar ">
			<div className="mt-20 ">
				<ul>
					{Links.map((item, index) => (
						<li key={index} className="mb-4 whitespace-nowrap">
							<NavLink
								to={item.link}
								className="transition-all ease-in-out shadow-2xl border-2 border-cyan-500 text-blue-100  flex items-center gap-2 rounded hover:bg-gray-900  hover:text-white hover:bg-gradient-to-l hover:from-pink-900 hover:to-slate-900"
								onClick={handleNavLinkClick}>
								<span
									className="text-cyan-500 my-2 ml-2 text-lg sm:text-xl"
									style={{ color: getRandomColor() }}>
									{' '}
									{item.icon}
								</span>
								<span className="my-2 mr-2 text-sm sm:text-base font-normal">
									{' '}
									{item.text}
								</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
