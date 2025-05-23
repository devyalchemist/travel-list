import React from "react";

function Select({ value, handleSelect }) {
	return (
		<>
			<select value={value} onChange={handleSelect}>
				<option value="5">Fair (5%)</option>
				<option value="10">Good (10%)</option>
				<option value="20">Perfect (20%)</option>
			</select>
		</>
	);
}

export default Select;
