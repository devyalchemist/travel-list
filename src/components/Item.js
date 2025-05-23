export default function Item({ item, unpack, pack }) {
	// const [packed, setPacked] = useState(item.packed);
	// function pack() {
	// 	setPacked((prev) => !prev);
	// }
	return (
		<>
			<li>
				<input
					onChange={() => pack(item.id, item.packed)}
					type="checkbox"
					value={item.packed}
				/>
				<span
					style={{
						textDecoration: `${item.packed ? "line-through" : "none"}`,
					}}>
					{`${item.quantity} ${item.description}`}
				</span>
				<button onClick={() => unpack(item.id)}>❌</button>
			</li>
		</>
	);
}
