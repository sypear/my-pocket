import React, { useEffect, useState } from "react";

import NewAsset from "./components/NewAsset/NewAsset";
import Asset from "./components/Asset/Asset";

import "./styles/reset.css";
import "./components/common/Font.css";
import "./components/common/Button.css";

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
			<Asset assets={assets} latestAssetId={latestAssetId} onDeleteAssetData={deleteAssetDataHandler} isAddAsset={isAddAsset} />
			<NewAsset latestAssetId={latestAssetId} onAddAssetData={addAssetDataHandler} />
		</>
	);
};

export default App;
