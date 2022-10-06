import './style.scss';

// global variables

let currentScene = 0;

const RangeForTransY = 15;

const VideoCount = 1;
const ImgCount = [271];
const imgArr = [];

const sceneArr = [
	// Scene 0
	{
		type: 'sticky',
		height: 0,
		heightMultiple: 5,
		obj: {
			scene: document.querySelector('.scene0'),
			canvas: document.querySelector('.scene0 .video'),
			message1: document.querySelector('.scene0 .message_1'),
			message2: document.querySelector('.scene0 .message_2'),
			message3: document.querySelector('.scene0 .message_3'),
		},
		// stR enR stV edV
		value: {
			// message 1 (0.1 ~ 0.3)
			m1: {
				opacityIn: [0.1, 0.15, 0, 1],
				opacityOut: [0.25, 0.3, 1, 0],
				translateYIn: [0.1, 0.15, RangeForTransY, 0],
				translateYOut: [0.25, 0.3, 0, -RangeForTransY],
				threshold: 0.2,
			},
			// message 2 (0.35 ~ 0.55)
			m2: {
				opacityIn: [0.35, 0.4, 0, 1],
				opacityOut: [0.5, 0.55, 1, 0],
				translateYIn: [0.35, 0.4, RangeForTransY, 0],
				translateYOut: [0.5, 0.55, 0, -RangeForTransY],
				threshold: 0.45,
			},
			// message 3 (0.6 ~ 0.8)
			m3: {
				opacityIn: [0.6, 0.65, 0, 1],
				opacityOut: [0.75, 0.8, 1, 0],
				translateYIn: [0.6, 0.65, RangeForTransY, 0],
				translateYOut: [0.75, 0.8, 0, -RangeForTransY],
				threshold: 0.7,
			},
		},
	},
	// Scene 1
	{
		type: 'sticky',
		height: 0,

		heightMultiple: 5,
		obj: {
			scene: document.querySelector('.scene1'),
			canvas: document.querySelector('.scene1 .video'),
			message1: document.querySelector('.scene1 message_1'),
			message2: document.querySelector('.scene1 message_2'),
			message3: document.querySelector('.scene1 message_3'),
			message4: document.querySelector('.scene1 message_4'),
			message5: document.querySelector('.scene1 message_5'),
		},
	},
	// Scene 2
	{
		type: 'sticky',
		height: 0,
		heightMultiple: 10,
		obj: {
			scene: document.querySelector('.scene2'),
			canvas1: document.querySelector('.video_1'),
			message1: document.querySelector('video1_message1'),
			message2: document.querySelector('video1_message2'),
			message3: document.querySelector('video1_message3'),
			canvas2: document.querySelector('.video_2'),
			message4: document.querySelector('video2_message1'),
			message5: document.querySelector('video2_message2'),
			message6: document.querySelector('video2_message3'),
			message7: document.querySelector('video2_message4'),
			canvas3: document.querySelector('.video_3'),
			message8: document.querySelector('video3_message1'),
			message9: document.querySelector('video3_message2'),
			message10: document.querySelector('video3_message3'),
			message11: document.querySelector('video3_message4'),
			// Overpainting pictures
			// messages for video_4, but still use the canvas for video_3
			message12: document.querySelector('video4_message1'),
			message13: document.querySelector('video4_message2'),
			message14: document.querySelector('video4_message3'),
			message15: document.querySelector('video4_message4'),
		},
	},
];

const setSize = () => {
	const innerH = window.innerHeight;
	for (let i = 0; i < sceneArr.length; i++) {
		// Set the height values of each scenes by the value 'heightMultiple'
		sceneArr[i].height = innerH * sceneArr[i].heightMultiple;
		// change the size of element
		sceneArr[i].obj.scene.style.height = `${sceneArr[i].height}px`;
	}

	// Set canvas size
	// canvas should cover the screen
};

const getCurrentSceneScrollY = () => {
	// Current Scene Check ->  use currentScene
	// calculate prev-scene height by using 'currentScene' value
	let prevHeight = 0;
	for (let i = 0; i < currentScene; i++) {
		prevHeight += sceneArr[i].height;
	}
	return scrollY - prevHeight;
};

const getCurrentScene = () => {
	let sceneVal = 0;
	let sceneHeightVal = 0;
	for (let i = 0; i < sceneArr.length; i++) {
		sceneHeightVal += sceneArr[i].height;
		if (sceneHeightVal < scrollY) sceneVal++;
	}
	return sceneVal;
};

const getCurrentSceneRatio = () => {
	// check Current scene -> use currentScene
	// get height of currentScene
	const currentSceneHeight = sceneArr[currentScene].height;

	// get scrollY VAL of current scene
	const currentSceneScrollY = getCurrentSceneScrollY();

	// calculate the Ratio to return
	const currentSceneRatio = currentSceneScrollY / currentSceneHeight;

	return currentSceneRatio;
};

// get the value for interaction
const getValForElement = (elemArr, currentSceneRatio) => {
	const startRatio = elemArr[0];
	const endRatio = elemArr[1];
	const startValue = elemArr[2];
	const endValue = elemArr[3];
	// because there are many elements in one scene and each element operates independently
	// the elements should only be operated according to the "Raito" which is decided.

	// if the Ratio is out of range, nothing happen -> min / max Value.
	if (currentSceneRatio < startRatio) {
		return startValue;
	} else if (currentSceneRatio > endRatio) {
		return endValue;
	} else {
		// calculate RV

		// Range of Operation
		const RO = endRatio - startRatio;

		// Relative Ratio
		const RR = currentSceneRatio - startRatio;

		// Range of changes
		const RC = endValue - startValue;

		return startValue + (RC * RR) / RO;
	}
};

// Main Methods

const sceneCheck = () => {
	// check Current Scene
	currentScene = getCurrentScene();

	// set Attr of "body"
	document.body.setAttribute('id', `show-scene${currentScene}`);
};

// Img load
const imgLoad = () => {
	// load Img for Video Each
	// let i (to decide the index of 'ImgCount' array)
	for (let i = 0; i < VideoCount; i++) {
		// define temporary array to push it into imgArr(global)
		const I_Arr = [];

		// load each Imgs
		for (let j = 0; j < ImgCount[i]; j++) {
			const img = new Image();
			img.src = `video/scene${i + 1}/sample-${j + 1}.jpg`;
			img.addEventListener('load', () => {
				I_Arr.push(img);
			});
		}
		// push I_Arr in imgArr
		imgArr.push(I_Arr);
	}
	console.log(imgArr);
};

// ** Play Animation !important
const playAnimaiton = (ratio) => {
	// declare variables for playing animaiton
	let op = 0;
	let transY = 0;

	// currentScene <- Global variable
	const CVal = sceneArr[currentScene].value;
	const CObj = sceneArr[currentScene].obj;
	switch (currentScene) {
		case 0: // SCENE 0
			// Img -> 271 // range of Img: 0 ~ 270
			const imgIndex = Math.round(ratio * (ImgCount[currentScene] - 1));
			const can = sceneArr[currentScene].obj.canvas;
			const cont = can.getContext('2d');
			cont.drawImage(imgArr[currentScene][imgIndex], 0, 0);

			// Message 1
			if (ratio < CVal.m1.threshold) {
				op = getValForElement(CVal.m1.opacityIn, ratio);
				transY = getValForElement(CVal.m1.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m1.opacityOut, ratio);
				transY = getValForElement(CVal.m1.translateYOut, ratio);
			}
			CObj.message1.style.opacity = op;
			CObj.message1.style.transform = `translateY(${transY}px)`;

			// Message 2
			if (ratio < CVal.m2.threshold) {
				op = getValForElement(CVal.m2.opacityIn, ratio);
				transY = getValForElement(CVal.m2.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m2.opacityOut, ratio);
				transY = getValForElement(CVal.m2.translateYOut, ratio);
			}
			CObj.message2.style.opacity = op;
			CObj.message2.style.transform = `translateY(${transY}px)`;

			// Message 3
			if (ratio < CVal.m3.threshold) {
				op = getValForElement(CVal.m3.opacityIn, ratio);
				transY = getValForElement(CVal.m3.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m3.opacityOut, ratio);
				transY = getValForElement(CVal.m3.translateYOut, ratio);
			}
			CObj.message3.style.opacity = op;
			CObj.message3.style.transform = `translateY(${transY}px)`;
			break;
		case 1:
			break;
		case 2:
			break;
		default:
			break;
	}
};

// OnWindowScroll
const onWindowScroll = () => {
	sceneCheck();
	const currentSceneRatio = getCurrentSceneRatio();
	playAnimaiton(currentSceneRatio);
};

const init = () => {
	imgLoad();

	window.addEventListener('load', () => {
		sceneCheck();
		setSize();
	});
	window.addEventListener('scroll', onWindowScroll);
};

init();
