import React, { useEffect, useState } from "react";
import NewItemContainer from "./components/NewItem/NewItemContainer";
import PocketContainer from "./components/Pocket/PocketContainer";
import "./styles/reset.css";
import "./styles/font.css";
import "./styles/button.css";
import "./styles/common.css";

const App = () => {
	const [isAddItem, setIsAddItem] = useState(false);
	const [nextItemId, setNextItemId] = useState(0);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const localItems = JSON.parse(localStorage.getItem("items"));

		if (localItems === null) {
			localStorage.setItem("items", JSON.stringify(items));
			localStorage.setItem("nextItemId", nextItemId);

			return;
		}

		const localNextItemId = +localStorage.getItem("nextItemId");
		let copyLocalItems = [...localItems];

		copyLocalItems.forEach((item, index) => {
			copyLocalItems[index].date = new Date(item.date)
		});

		setItems(copyLocalItems);
		setNextItemId(localNextItemId);
	}, []);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
		localStorage.setItem("nextItemId", nextItemId);
	}, [items]);

	const addItemHandler = (addItemData) => {
		setNextItemId(nextItemId + 1);
		setIsAddItem(true);
		
		setItems(prevItems => {
			return [...prevItems, addItemData];
		});
	};

	const deleteItemHandler = (deleteItemData) => {
		setIsAddItem(false);

		let copyItems = [...items];
		copyItems = copyItems.filter(item => item.id !== deleteItemData);

		setItems(copyItems);
	};

	return (
		<>
			<PocketContainer
				items={items}
				onDeleteItem={deleteItemHandler}
				isAddItem={isAddItem}
			/>
			<NewItemContainer
				nextItemId={nextItemId}
				onAddItem={addItemHandler}
			/>
		</>
	);
};

export default App;
