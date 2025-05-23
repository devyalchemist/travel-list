import { useState } from "react";

function Form({ addItem }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);
	function handleSubmit(event) {
		event.preventDefault();
		if (!description) return;

		const newItem = {
			quantity: quantity,
			description: description,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);
		addItem(newItem);
		setDescription("");
		setQuantity(1);
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="add-form">
				<h3>What do you need for your 😍 trip</h3>
				<select
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Item..."
					value={description}
					onChange={(e) => setDescription(e.target.value)}></input>
				<button>Add</button>
			</form>
		</>
	);
}

export default Form;
