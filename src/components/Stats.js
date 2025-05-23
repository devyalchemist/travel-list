export default function Stats({ items }) {
	if (!items.length)
		return (
			<>
				<p className="stats">
					<em>Start adding some items to your packing list</em>
				</p>
			</>
		);
	const packedQuantity = items.filter((e) => e.packed === true).length;
	// packedQuantity={packedQuantity}
	const totalItems = items.length;
	const percentage = `${Math.round((packedQuantity / totalItems) * 100)}%`;
	return (
		<>
			<footer className="stats">
				<em>
					{percentage === "100%" ? (
						"You got everything! Ready to go ✈️"
					) : (
						<>
							You have {totalItems} items on your list, and you already packed{" "}
							{packedQuantity} <span className="percentage">{percentage}</span>
						</>
					)}
				</em>
			</footer>
		</>
	);
}
