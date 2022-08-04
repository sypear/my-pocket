import React, { useState } from "react";

import NewAsset from "./components/NewAsset/NewAsset";
import Asset from "./components/Asset/Asset";

import "./components/UI/Font.css";
import "./components/UI/Button.css";

const App = () => {
	const [latestAssetId, setLatestAssetId] = useState(0);
	const [assets, setAssets] = useState("");

	const addAssetDataHandler = (assetData) => {
		setLatestAssetId(latestAssetId + 1);
		
		setAssets(prevAssets => {
			return [...prevAssets, assetData];
		});
	};

	const deleteAssetDataHandler = (deleteData) => {
		let copyAssets = [...assets];

		copyAssets = copyAssets.filter(asset => asset.id !== deleteData);

		setAssets(copyAssets);
	};

	return (
		<>
			<Asset assets={assets} latestAssetId={latestAssetId} onDeleteAssetData={deleteAssetDataHandler} />
			<NewAsset latestAssetId={latestAssetId} onAddAssetData={addAssetDataHandler} />
		</>
	);
};

export default App;
