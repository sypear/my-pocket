import React, { useEffect, useState } from "react";
import NewItemContainer from "./components/NewItem/NewItemContainer";
import PocketContainer from "./components/Pocket/PocketContainer";
import "./styles/reset.css";
import "./components/UI/Font.css";
import "./components/UI/Button.css";

const App = () => {
	const [isAddAsset, setIsAddAsset] = useState(false);
	const [latestAssetId, setLatestAssetId] = useState(0);
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		const localAssets = JSON.parse(localStorage.getItem("assets"));
		const localLatestAssetId = +localStorage.getItem("latestAssetId");

		if (localAssets === null) {
			localStorage.setItem("assets", JSON.stringify(assets));
			localStorage.setItem("latestAssetId", latestAssetId);
		} else {
			let copyLocalAssets = [...localAssets];

			copyLocalAssets.forEach((element, i) => {
				copyLocalAssets[i].date = new Date(element.date)
			});

			setAssets(copyLocalAssets);
			setLatestAssetId(localLatestAssetId);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("assets", JSON.stringify(assets));
		localStorage.setItem("latestAssetId", latestAssetId);
	}, [assets]);

	const addAssetDataHandler = (assetData) => {
		setLatestAssetId(latestAssetId + 1);
		setIsAddAsset(true);
		
		setAssets(prevAssets => {
			return [...prevAssets, assetData];
		});
	};

	const deleteAssetDataHandler = (deleteData) => {
		setIsAddAsset(false);

		let copyAssets = [...assets];
		copyAssets = copyAssets.filter(asset => asset.id !== deleteData);

		setAssets(copyAssets);
	};

	return (
		<>
			<PocketContainer assets={assets} latestAssetId={latestAssetId} onDeleteAssetData={deleteAssetDataHandler} isAddAsset={isAddAsset} />
			<NewItemContainer latestAssetId={latestAssetId} onAddAssetData={addAssetDataHandler} />
		</>
	);
};

export default App;
