// components/utils/LogicGates/BulbComponent.tsx
import React from "react";
import type { Bulb } from "components/utils/LogicGates/Bulb";

interface BulbComponentProps {
  bulb: Bulb;
}

const BulbComponent: React.FC<BulbComponentProps> = ({ bulb }) => {
	return (
		<div>
			<p>Bulb Status: {bulb.checkStatus()}</p>
		</div>
	);
};

export default BulbComponent;
