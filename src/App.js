// import { useEffect, useState } from "react";
// import Logo from "./components/Logo";
// import Form from "./components/Form";
// import PackingList from "./components/PackingList";
// import Stats from "./components/Stats";

// export default function App() {
// 	// const [itemCount, setItemCount] =
// 	let initialItems = [
// 		{ id: 1, description: "Passports", quantity: 2, packed: false },
// 		{ id: 2, description: "Socks", quantity: 12, packed: false },
// 		{ id: 3, description: "Bicycle", quantity: 7, packed: false },
// 	];
// 	initialItems = [];
// 	const [items, setItems] = useState(initialItems);
// 	// const [packedQuantity, setPackedQuantity] = useState();

// 	// useEffect(() => {
// 	// 	const length = items.filter((e) => e.packed === true).length;
// 	// 	setPackedQuantity(length);
// 	// }, [items]);

// 	function addItem(value) {
// 		setItems((prev) => {
// 			return [...prev, value];
// 		});
// 	}
// 	function handleUnpack(id) {
// 		setItems((prev) => {
// 			const newArray = prev.filter((item) => {
// 				return item.id !== id;
// 			});
// 			return newArray;
// 		});
// 	}
// 	function handlePack(id, isPacked) {
// 		// setItems((prev) => {
// 		// 	const newArray = [...prev];
// 		// 	const index = newArray.findIndex((e) => e.id === id);
// 		// 	const item = newArray[index];
// 		// 	newArray[index] = { ...item, packed: !isPacked };
// 		// 	return newArray;
// 		// });
// 		setItems((item) =>
// 			item.map((item) =>
// 				item.id === id ? { ...item, packed: !item.packed } : item
// 			)
// 		);
// 	}
// 	function handleClearList() {
// 		const confirmed = window.confirm("Do you want to clear the list?");
// 		confirmed && setItems([]);
// 	}
// 	return (
// 		<>
// 			<div class="app">
// 				<Logo />
// 				<Form addItem={addItem} />
// 				<PackingList
// 					items={items}
// 					unpack={handleUnpack}
// 					pack={handlePack}
// 					clearList={handleClearList}
// 				/>
// 				<Stats items={items} />
// 			</div>
// 		</>
// 	);
// }

import { useState } from "react";
import "./styles.css";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
	},
];

export default function App() {
	return (
		<>
			<Accordion data={faqs} />
		</>
	);
}

function Accordion({ data }) {
	// let accordion = data.map((e) => ({ ...e, isOpen: false }));
	// const [accordionData, setAccordionData] = useState(accordion);

	// function handleOpen(id) {
	// 	setAccordionData((prev) =>
	// 		prev.map((e, i) => (i === id ? { ...e, isOpen: !e.isOpen } : e))
	// 	);
	// }
	return (
		<>
			<div className="accordion">
				{data.map((e, i) => {
					return (
						<AccordionItem
							number={i + 1}
							title={e.title}
							text={e.text}
							// isOpen={e.isOpen}
							// onOpen={handleOpen}
							id={i}
						/>
					);
				})}
			</div>
		</>
	);
}

function AccordionItem({ number, title, text, onOpen, id }) {
	const [isOpen, setOpen] = useState(false);
	function handleToggle() {
		setOpen((prev) => !prev);
	}
	return (
		<>
			<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
				<p className="number">{number < 10 ? `0${number}` : number}</p>
				<p className="title">{title}</p>
				<p className="icon">{isOpen ? "-" : "+"}</p>
				{isOpen && <div className="content-box">{text}</div>}
			</div>
		</>
	);
}
