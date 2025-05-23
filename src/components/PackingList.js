import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, unpack, pack, clearList }) {
	console.log(items);
	const [sortBy, setSortBy] = useState("input");
	let sortedItems;
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	// const [items, setItems] = useState([...initialItems]);
	// useEffect(() => {
	// 	setItems(initialItems);
	// }, [initialItems]);
	return (
		<>
			<div class="list">
				<ul>
					{sortedItems.map((item) => {
						return (
							<Item unpack={unpack} item={item} key={item.id} pack={pack} />
						);
					})}
				</ul>
				<div className="actions">
					<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
						<option value="input">Sort by input order</option>
						<option value="description">Sort by description</option>
						<option value="packed">Sort by packed status</option>
					</select>
					<button onClick={clearList}>Clear list</button>
				</div>
			</div>
		</>
	);
}
