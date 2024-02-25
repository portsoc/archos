import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import LogicGateTestPage from "./LogicGates/LogicGateTestPage";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/logic-gates-test" element={<LogicGateTestPage />} />
				{/* Add more routes for other pages */}
			</Routes>
		</Router>
	);
};

export default App;
