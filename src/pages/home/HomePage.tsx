import React from "react";
import { TopBar } from "../../components/interface/topbar";
import LogicGateTestPage from "pages/LogicGates/LogicGateTestPage";

const HomePage: React.FC = () => {
	return (
		<div>
			{/* Include the TopBar component */}
			<TopBar />

			{/* Main content */}
			<div className="bg-gray-900 min-h-screen flex justify-center items-center">
				<div className="max-w-4xl w-full mx-4">
					<h1 className="text-4xl text-white mb-8 text-center">
            Welcome to University of Portsmouth Architecture Test
					</h1>

					{/* Buttons for different tests */}
					<div className="grid grid-cols-1 gap-4 text-center">
						<a href="/logic-gates-test" className="text-decoration-none">
							{/* Use the updated import path */}
							<div className="bg-gray-800 p-6 rounded-lg text-white">
								<h2 className="text-2xl mb-4">Logic Gates Test</h2>
								<p>Test your logic with this interactive Logic Gate simulator.</p>
							</div>
						</a>

						{/* Use the LogicGateTestPage component */}
						<LogicGateTestPage />

						<a href="/fetch-execute-cycle-test" className="text-decoration-none">
							<div className="bg-gray-800 p-6 rounded-lg text-white">
								<h2 className="text-2xl mb-4">Fetch Execute Cycle Test</h2>
								<p>Test your knowledge of the fetch-execute cycle in computing.</p>
							</div>
						</a>

						<a href="/binary-operations-test" className="text-decoration-none">
							<div className="bg-gray-800 p-6 rounded-lg text-white">
								<h2 className="text-2xl mb-4">Binary Operations Test</h2>
								<p>Test your understanding of binary operations in computer science.</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
