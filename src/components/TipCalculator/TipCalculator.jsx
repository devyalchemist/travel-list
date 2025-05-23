import { useState } from "react";
import "../../tipcalculator.css";
import Field from "./Field";
import Select from "./Select";

function TipCalculator() {
	const [bill, setBill] = useState(0);
	const [userrating, setUserRating] = useState(5);
	const [friendRating, setFriendRating] = useState(5);
	const average = (userrating + friendRating) / 2;
	// console.log(`average : ${average}`);
	const tip = Number((average / 100) * bill).toFixed(2);
	const total = Number(tip) + bill;
	// console.log(`total ${total}`);

	function handleReset() {
		setBill(0);
		setUserRating(5);
		setFriendRating(5);
	}
	return (
		<>
			<div className="form-container">
				<Field>
					<p>How much was the bill:</p>
					<input
						type="text"
						value={bill}
						onChange={(e) => setBill(Number(e.target.value))}
						placeholder="eg. $60"
					/>
				</Field>
				<Field>
					<p>How did you like the service:</p>{" "}
					<Select
						value={userrating}
						handleSelect={(e) => setUserRating(Number(e.target.value))}
					/>
				</Field>
				<Field>
					<p>How did your friend like the service:</p>
					<Select
						value={friendRating}
						handleSelect={(e) => setFriendRating(Number(e.target.value))}
					/>
				</Field>

				<div className="display">{`You pay $${total} (${bill} + $${tip} tip)`}</div>
				{/* <div className="display">{total}</div> */}
			</div>
			<button onClick={handleReset}>RESET</button>
		</>
	);
}

export default TipCalculator;
