import React from "react";

const TopBar = () => {
	return (
		<div className="bg-gray-800 p-4 flex justify-between items-center">
			{/* Logo or website title */}
			<h1 className="text-white text-xl">
        University of Portsmouth Architecture Test
			</h1>
			{/* Navigation links */}
			<nav>
				<ul className="flex space-x-4 text-white">
					<li>
						<a href="#" className="hover:text-gray-300">
              Architectural Styles
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-300">
              History of Architecture
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-300">
              Architectural Theory
						</a>
					</li>
				</ul>
			</nav>
			{/* Login and account buttons */}
			<div>
				<button className="text-white bg-gray-600 px-4 py-2 rounded-md mr-4">
          Login
				</button>
				<button className="text-white bg-gray-600 px-4 py-2 rounded-md">
          Account
				</button>
			</div>
		</div>
	);
};

export { TopBar };
