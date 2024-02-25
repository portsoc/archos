// components/LogicGates/LogicGateTestPage.tsx
import React, { useState } from "react";
import { Circuit } from "components/utils/LogicGates/Circuit";
import { type Switch } from "components/utils/LogicGates/switch.type";
import BulbComponent from "./BulbComponent";
import { Bulb } from "components/utils/LogicGates/Bulb";

const LogicGateTestPage: React.FC = () => {
	const [inputA, setInputA] = useState<Switch>("0");
	const [inputB, setInputB] = useState<Switch>("0");

	const bulbA = new Bulb(inputA);
	const bulbB = new Bulb(inputB);

	const circuit = new Circuit(bulbA, bulbB);

	const handleInputChange = (input: Switch, setInput: React.Dispatch<React.SetStateAction<Switch>>) => {
		setInput(input);
	};

	const renderInputLabel = (label: string, input: Switch, setInput: React.Dispatch<React.SetStateAction<Switch>>) => (
		<label className="flex items-center space-x-2">
			<span>{label}:</span>
			<input
				type="radio"
				value="0"
				checked={input === "0"}
				onChange={() => handleInputChange("0", setInput)}
				className="mx-1"
			/>
			<span>0</span>
			<input
				type="radio"
				value="1"
				checked={input === "1"}
				onChange={() => handleInputChange("1", setInput)}
				className="mx-1"
			/>
			<span>1</span>
		</label>
	);

	return (
		<div className="logic-gate-test-container p-8 bg-gray-900 text-white min-h-screen">
			<h1 className="text-3xl font-bold mb-4">Logic Gate Test Page</h1>

			<div className="inputs-container mb-4 space-y-4">
				{renderInputLabel("Input A", inputA, setInputA)}
				{renderInputLabel("Input B", inputB, setInputB)}
			</div>

			<div className="bulbs-container mb-8 space-y-4 flex">
				<div className="flex flex-col items-center">
					<p className="mb-2">Bulb A</p>
					<BulbComponent bulb={bulbA} />
				</div>
				<div className="flex flex-col items-center">
					<p className="mb-2">Bulb B</p>
					<BulbComponent bulb={bulbB} />
				</div>
			</div>

			<div className="test-results-container space-y-2">
				<p><span className="font-bold">AND:</span> {circuit.and()}</p>
				<p><span className="font-bold">OR:</span> {circuit.or()}</p>
				<p><span className="font-bold">NOT A:</span> {circuit.not()}</p>
				<p><span className="font-bold">NAND:</span> {circuit.nand()}</p>
				<p><span className="font-bold">NOR:</span> {circuit.nor()}</p>
				<p><span className="font-bold">XOR:</span> {circuit.xor()}</p>
				<p><span className="font-bold">XNOR:</span> {circuit.xnor()}</p>
			</div>
		</div>
	);
};

export default LogicGateTestPage;
