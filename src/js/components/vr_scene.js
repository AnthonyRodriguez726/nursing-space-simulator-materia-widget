import AFRAME from "aframe";
import { Scene } from "aframe-react";
import React from "react";

// Scene Assets
import CeilingUnit from "./assets/ceiling_unit";
import CameraTP from "./assets/camera_tp";
import CameraFP from "./assets/camera_fp";
import QsetAsset from "./assets/qset_asset";
import FloorUnit from "./assets/floor_unit";
import Skybox from "./assets/skybox";

export default class VRScene extends React.Component {
	componentDidMount() {
		const stage2_vr = [
			{
				title: "VR Scene",
				text: "Click/touch inside the room to place the object.",
				selector: ".vr-scene",
				position: "bottom",
				trigger: ".vr-scene"
			}
		];
		this.props.addSteps(stage2_vr);
	}
	isAssetSelected(tileXPosition, tileYPosition) {
		if (
			!this.props.selectedAsset ||
			!this.props.selectedAsset.asset.id === "pov_camera"
		)
			return false;

		const assetXPosition = this.props.selectedAsset.x;
		const assetYPosition = this.props.selectedAsset.y;

		// Check if the asset covers this tile
		if (assetXPosition === tileXPosition && assetYPosition === tileYPosition) {
			return true;
		}

		return false;
	}

	render() {
		return (
			<Scene className="vr-scene">
				<a-assets>
					<img id="ceilingTexture" alt="sorry" src="assets/CEILING_TILE.jpg" />
					<img id="wallTexture" alt="sorry" src="assets/WALL_2D_1.png" />
				</a-assets>
				<Skybox />
				<CameraFP
					active={!this.props.thirdPerson}
					position={this.props.position}
				/>
				<CameraTP
					active={this.props.thirdPerson}
					position={this.props.position}
				/>
				{// Draw the floor and the assets to the screen
				this.props.grid.map((row, rowIndex) =>
					row.map(
						(column, colIndex) =>
							this.props.grid[rowIndex][colIndex] !== "0"
								? <QsetAsset
										assetSelected={this.isAssetSelected(rowIndex, colIndex)}
										x={rowIndex}
										z={colIndex}
										onClick={this.props.manipulateAsset.bind(
											this,
											this.props.assetsFromFile[
												this.props.grid[rowIndex][colIndex].id
											],
											"select",
											rowIndex,
											colIndex
										)}
										onMouseEnter={this.props.mouseEnterAsset.bind(
											this,
											this.props.assetsFromFile[
												this.props.grid[rowIndex][colIndex].id
											]
										)}
										onMouseLeave={this.props.mouseExitAsset.bind(this)}
										data={
											this.props.assetsFromFile[
												this.props.grid[rowIndex][colIndex].id
											]
										}
										rotation={this.props.grid[rowIndex][colIndex].rotation}
									/>
								: null
					)
				)}
				{// Draw the floor (tile by tile) to the scene
				this.props.grid.map((row, rowIndex) =>
					row.map((column, colIndex) =>
						<FloorUnit
							thirdPerson={this.props.thirdPerson}
							x={rowIndex}
							y={colIndex}
							onClick={this.props.onClick.bind(this, rowIndex, colIndex)}
						/>
					)
				)}
				{// Draw the ceiling (tile by tile) to the scene
				this.props.grid.map((row, rowIndex) =>
					row.map(
						(column, colIndex) =>
							this.props.thirdPerson
								? null
								: <CeilingUnit x={rowIndex} z={colIndex} />
					)
				)}
			</Scene>
		);
	}
}
