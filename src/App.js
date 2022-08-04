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
			return [assetData, ...prevAssets];
		});
	};

	const deleteAssetDataHandler = (deleteData) => {
		let copyAssets = assets;

		copyAssets = copyAssets.filter(asset => asset.id !== deleteData);

		setAssets(copyAssets);
	};

	return (
		<>
			<NewAsset latestAssetId={latestAssetId} onAddAssetData={addAssetDataHandler} />
			<Asset assets={assets} latestAssetId={latestAssetId} onDeleteAssetData={deleteAssetDataHandler} />
		</>
	);
};

export default App;
