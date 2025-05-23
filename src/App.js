import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
	// const [itemCount, setItemCount] =
	let initialItems = [
		{ id: 1, description: "Passports", quantity: 2, packed: false },
		{ id: 2, description: "Socks", quantity: 12, packed: false },
		{ id: 3, description: "Bicycle", quantity: 7, packed: false },
	];
	initialItems = [];
	const [items, setItems] = useState(initialItems);
	const [packedQuantity, setPackedQuantity] = useState();

	useEffect(() => {
		const length = items.filter((e) => e.packed === true).length;
		setPackedQuantity(length);
	}, [items]);

	function addItem(value) {
		setItems((prev) => {
			return [...prev, value];
		});
	}
	function handleUnpack(id) {
		setItems((prev) => {
			const newArray = prev.filter((item) => {
				return item.id !== id;
			});
			return newArray;
		});
	}
	function handlePack(id, isPacked) {
		// setItems((prev) => {
		// 	const newArray = [...prev];
		// 	const index = newArray.findIndex((e) => e.id === id);
		// 	const item = newArray[index];
		// 	newArray[index] = { ...item, packed: !isPacked };
		// 	return newArray;
		// });
		setItems((item) =>
			item.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearList() {
		const confirmed = window.confirm("Do you want to clear the list?");
		confirmed && setItems([]);
	}
	return (
		<>
			<div class="app">
				<Logo />
				<Form addItem={addItem} />
				<PackingList
					items={items}
					unpack={handleUnpack}
					pack={handlePack}
					clearList={handleClearList}
				/>
				<Stats items={items} />
			</div>
		</>
	);
}
