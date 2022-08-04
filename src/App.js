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
	}

	return (
		<>
			<NewAsset onAddAssetData={addAssetDataHandler} latestAssetId={latestAssetId} />
			<Asset assets={assets} />
		</>
	);
};

export default App;
