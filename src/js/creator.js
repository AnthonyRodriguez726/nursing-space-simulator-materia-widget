document.addEventListener("DOMContentLoaded", function(event) {
	console.log("woo!");

	var qset = {
		items: [],
		options: {}
	};

	var widget =
	{
		engineName: '',
		title: ''
	};

	var materiaInterface = {}

	// Note: We're populating the qset assets and gridloader properties with default assets
	// This is currently copy/pasted from the demo.json
	qset.options.assets = {
		"bed": {
			"assetRotationState": 0,
			"buttonSource":"assets/HOSPITAL_BED_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#376AD3",
			"horizontal": 0,
			"id": "bed-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/bed/mesh_bed.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/bed/mesh_bed.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 1, "y": 1, "z": 1},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 1,
			"category" : "beds"
		},
		"bed-2": {
			"assetRotationState": 0,
			"buttonSource":"assets/HOSPITAL_BED_2D_2.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#B5848A",
			"horizontal": 0,
			"id": "bed-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/HOSPITAL_BED.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.1, "y": 0.1, "z": 0.1},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 1,
			"category" : "beds"
		},
		"bed-3": {
			"assetRotationState": 0,
			"buttonSource":"assets/HOSPITAL_BED_2D_3.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#54A898",
			"horizontal": 0,
			"id": "bed-3",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/HOSPITAL_BED.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.1, "y": 0.1, "z": 0.1},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 1,
			"category" : "beds"
		},
		"crashcart": {
			"assetRotationState": 0,
			"buttonSource":"assets/wheelchair/WHEELCHAIR_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "crashcart",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/crashcart/mesh_crashcart.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/crashcart/mesh_crashcart.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.025, "y": 0.025, "z": 0.025},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category" : "equipment"
		},
		"computer": {
			"assetRotationState": 0,
			"buttonSource":"assets/wheelchair/WHEELCHAIR_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "computer-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/computer-stand/mesh_computerstand.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/computer-stand/mesh_computerstand.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.025, "y": 0.025, "z": 0.025},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category" : "equipment"
		},
		"door-1": {
			"assetRotationState": 0,
			"buttonSource":"assets/DOOR_1_2D.png",
			"canReplace": ["door"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "door-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "textured",
			"movable": "false",
			"objectSource": "assets/DOOR_1.png",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"repeat": "1 1",
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "door",
			"vertical": 0,
			"category" : "walls"
		},
		"door-2": {
			"assetRotationState": 0,
			"buttonSource":"assets/DOOR_2_2D.png",
			"canReplace": ["door"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "door-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "textured",
			"movable": "false",
			"objectSource": "assets/DOOR_2.png",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"repeat": "1 1",
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "door",
			"vertical": 0,
			"category" : "walls"
		},
		"iv": {
			"assetRotationState": 0,
			"buttonSource":"assets/wheelchair/WHEELCHAIR_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "iv-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/iv/mesh_iv.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/iv/mesh_iv.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.025, "y": 0.025, "z": 0.025},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category" : "equipment"
		},
		"largeBox": {
			"assetRotationState": 0,
			"buttonSource":"assets/LARGE_BOX_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#FF00FF",
			"horizontal": 1,
			"id": "largeBox-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "true",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 2, "y": 1, "z": 2},
			"tag": "a-box",
			"type": "object",
			"vertical": 1,
			"category" : "equipment"
		},
		"trashcan": {
			"assetRotationState": 0,
			"buttonSource":"assets/trashcan/TRASHCAN_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "trashcan-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/trashcan/mesh_trashcan.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/trashcan/mesh_trashcan.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.4, "y": 0.4, "z": 0.4},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category" : "equipment"
		},
		"viewer": {
			"assetRotationState": 0,
			"buttonSource":"assets/VIEWER_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "pov-camera",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/body-armour/BodyArmour02.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/body-armour/BodyArmour02.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 180, "z": 0},
			"scale": {"x":0.0008, "y":0.0008, "z":0.0008},
			"tag": "a-obj-model",
			"type": "view",
			"vertical": 0,
			"category" : "equipment"
		},
		"wall-1": {
			"assetRotationState": 0,
			"buttonSource":"assets/WALL_2D_1.png",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#9FCDB1",
			"horizontal": 0,
			"id": "wall-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category" : "walls"
		},
		"wall-2": {
			"assetRotationState": 0,
			"buttonSource":"assets/WALL_2D_2.png",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#CBC99D",
			"horizontal": 0,
			"id": "wall-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category" : "walls"
		},
		"wall-3": {
			"assetRotationState": 0,
			"buttonSource":"assets/WALL_2D_3.png",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#86867C",
			"horizontal": 0,
			"id": "wall-3",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category" : "walls"
		},
		"wheelchair": {
			"assetRotationState": 0,
			"buttonSource":"assets/wheelchair/WHEELCHAIR_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "wheelchair-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/wheelchair/wheelchair.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/wheelchair/wheelchair.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.025, "y": 0.025, "z": 0.025},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category" : "equipment"
		}
	}

	qset.options.categories = [ "beds", "equipment", "walls" ];

	qset.options.gridLoader = {
		"columns": 30,
		"content": "x-x-x-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-d1-d2-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-w1-w1-w1-w1-d1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-d1-w1-w1-w1-w1-w1-w1-x-x-x",
		"rows": 12
	}

	materiaInterface.initNewWidget = function(w) {
		console.log("new");
	};

	materiaInterface.initExistingWidget = function(title, widget, qset, version, baseUrl) {
		console.log("Existing!");
	}

	materiaInterface.onSaveClicked = function() {
		title = document.getElementById("title").value;
		Materia.CreatorCore.save(title, qset, 1);

	}

	materiaInterface.onSaveComplete = function() {
		console.log("save complete!");
		return true;
	}

	return Materia.CreatorCore.start(materiaInterface);

});