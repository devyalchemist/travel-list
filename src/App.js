import { useEffect, useState } from "react";

export default function App() {
	// const [itemCount, setItemCount] =
	const initialItems = [
		{ id: 1, description: "Passports", quantity: 2, packed: false },
		{ id: 2, description: "Socks", quantity: 12, packed: false },
		{ id: 3, description: "Bicycle", quantity: 7, packed: false },
	];
	const [items, setItems] = useState(initialItems);
	function addItem(value) {
		setItems((prev) => {
			return [...prev, value];
		});
	}

	return (
		<>
			<div class="app">
				<Logo />
				<Form addItem={addItem} />
				<PackingList initialItems={items} />
				<Stats />
			</div>
		</>
	);
}

function Logo() {
	return (
		<>
			<h1> 🌴 Far Away 👜</h1>
		</>
	);
}
function Form({ addItem }) {
	const [description, setDescription] = useState("TEST");
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
function PackingList({ initialItems }) {
	console.log(initialItems);
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems(initialItems);
	}, [initialItems]);
	function unpack(id) {
		setItems((prev) => {
			const newArray = prev.filter((item) => {
				return item.id !== id;
			});
			return newArray;
		});
	}
	return (
		<>
			<div class="list">
				<ul>
					{items.map((item) => {
						return <Item unpack={unpack} item={item} key={item.id} />;
					})}
				</ul>
			</div>
		</>
	);
}
function Item({ item, unpack }) {
	const [packed, setPacked] = useState(item.packed);
	function pack() {
		setPacked((prev) => !prev);
	}

	return (
		<>
			<li>
				<span
					onClick={pack}
					style={{
						textDecoration: `${packed ? "line-through" : "none"}`,
					}}>
					{`${item.quantity} ${item.description}`}
				</span>
				<button onClick={() => unpack(item.id)}>❌</button>
			</li>
		</>
	);
}
function Stats() {
	return (
		<>
			<footer className="stats">
				<em>You have X items on your list, and you already packed X {"x"} </em>
			</footer>
		</>
	);
}
