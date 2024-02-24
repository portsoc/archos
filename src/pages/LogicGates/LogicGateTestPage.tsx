// components/LogicGates/LogicGateTestPage.tsx
import React, { useState } from "react";
import { Circuit } from "components/utils/LogicGates/Circuit";
import { type Switch } from "components/utils/LogicGates/switch.type";
import { Bulb } from "components/utils/LogicGates/Bulb";
import BulbComponent from "./BulbComponent";

const LogicGateTestPage: React.FC = () => {
	const [inputA, setInputA] = useState<Switch>("0");
	const [inputB, setInputB] = useState<Switch>("0");

	const bulbA = new Bulb(inputA);
	const bulbB = new Bulb(inputB);

	const circuit = new Circuit(bulbA, bulbB);

	return (
		<div>
			<h1>Logic Gate Test Page</h1>
			<label>
        Input A:
				<input
					type="radio"
					value="0"
					checked={inputA === "0"}
					onChange={() => setInputA("0")}
				/>
        0
				<input
					type="radio"
					value="1"
					checked={inputA === "1"}
					onChange={() => setInputA("1")}
				/>
        1
			</label>
			<label>
        Input B:
				<input
					type="radio"
					value="0"
					checked={inputB === "0"}
					onChange={() => setInputB("0")}
				/>
        0
				<input
					type="radio"
					value="1"
					checked={inputB === "1"}
					onChange={() => setInputB("1")}
				/>
        1
			</label>

			<BulbComponent bulb={bulbA} />
			<BulbComponent bulb={bulbB} />

			<p>AND: {circuit.and()}</p>
			<p>OR: {circuit.or()}</p>
			<p>NOT A: {circuit.not()}</p>
			<p>NAND: {circuit.nand()}</p>
			<p>NOR: {circuit.nor()}</p>
			<p>XOR: {circuit.xor()}</p>
			<p>XNOR: {circuit.xnor()}</p>
		</div>
	);
};

export default LogicGateTestPage;
