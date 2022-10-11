import './style.scss';

// global variables

let currentScene = 0;
const RangeForTransY = 15;

const VideoCount = 2;
const ImgCount = [287, 374];
const imgArr = [];

// cloudflare defalut bucket url

const Basic_URL = 'https://pub-b7f3edbf1c224a028525eec6746ddd09.r2.dev/';

const sceneArr = [
	// Scene 0
	{
		type: 'sticky',
		height: 0,
		heightMultiple: 5,
		obj: {
			scene: document.querySelector('.scene0'),
			v1: document.querySelector('.scene0 .video'),
			message1: document.querySelector('.scene0 .message_1'),
			message2: document.querySelector('.scene0 .message_2'),
			message3: document.querySelector('.scene0 .message_3'),
		},
		// stR enR stV edV
		value: {
			v1: {
				opacityIn: [0, 0.1, 0, 1],
				opacityOut: [0.9, 1, 1, 0],
				threshold: 0.5,
				SR: 0,
			},
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
			v2: document.querySelector('.scene1 .video_elem'),
			message1: document.querySelector('.scene1 .message_1'),
			message2: document.querySelector('.scene1 .message_2'),
			message3: document.querySelector('.scene1 .message_3'),
			message4: document.querySelector('.scene1 .message_4'),
			message5: document.querySelector('.scene1 .message_5'),
		},
		value: {
			// for Video
			v2: {
				opacityIn: [0, 0.1, 0, 1],
				opacityOut: [0.9, 1, 1, 0],
				threshold: 0.5,
				SR: 0,
			},
			// message 1 (0.05 ~ 0.2)
			m1: {
				opacityIn: [0.05, 0.1, 0, 1],
				opacityOut: [0.15, 0.2, 1, 0],
				translateYIn: [0.05, 0.1, RangeForTransY, 0],
				translateYOut: [0.15, 0.2, 0, -RangeForTransY],
				threshold: 0.13,
			},
			// message 2 (0.23 ~ 0.38)
			m2: {
				opacityIn: [0.23, 0.28, 0, 1],
				opacityOut: [0.33, 0.38, 1, 0],
				translateYIn: [0.23, 0.28, RangeForTransY, 0],
				translateYOut: [0.33, 0.38, 0, -RangeForTransY],
				threshold: 0.31,
			},
			// message 3 (0.41 ~ 0.56)
			m3: {
				opacityIn: [0.41, 0.46, 0, 1],
				opacityOut: [0.51, 0.56, 1, 0],
				translateYIn: [0.41, 0.46, RangeForTransY, 0],
				translateYOut: [0.51, 0.56, 0, -RangeForTransY],
				threshold: 0.48,
			},
			// message 4 (0.59 ~ 0.74)
			m4: {
				opacityIn: [0.59, 0.64, 0, 1],
				opacityOut: [0.69, 0.74, 1, 0],
				translateYIn: [0.59, 0.64, RangeForTransY, 0],
				translateYOut: [0.69, 0.74, 0, -RangeForTransY],
				threshold: 0.67,
			},
			// message 5(0.77 ~ 0.92)
			m5: {
				opacityIn: [0.77, 0.82, 0, 1],
				opacityOut: [0.87, 0.92, 1, 0],
				translateYIn: [0.77, 0.82, RangeForTransY, 0],
				translateYOut: [0.87, 0.92, 0, -RangeForTransY],
				threshold: 0.9,
			},
		},
	},
	// Scene 2
	{
		type: 'sticky',
		height: 0,
		heightMultiple: 15,
		obj: {
			scene: document.querySelector('.scene2'),
			v3: document.querySelector('.video_1'), // 0 ~ 0.2
			message1: document.querySelector('.video1_message1'),
			message2: document.querySelector('.video1_message2'),
			message3: document.querySelector('.video1_message3'),
			message4: document.querySelector('.video1_message4'),
			message5: document.querySelector('.video1_message5'),
			v4: document.querySelector('.video_2'), // 0.2 ~ 0.45
			message6: document.querySelector('.video2_message1'),
			message7: document.querySelector('.video2_message2'),
			message8: document.querySelector('.video2_message3'),
			message9: document.querySelector('.video2_message4'),
			message10: document.querySelector('.video2_message5'),
			v5: document.querySelector('.video_3'), // 0.5 ~ 0.75
			message11: document.querySelector('.video3_message1'),
			message12: document.querySelector('.video3_message2'),
			message13: document.querySelector('.video3_message3'),
			message14: document.querySelector('.video3_message4'),
			message15: document.querySelector('.video3_message5'),
			v6: document.querySelector('.video_4'), // 0.75 ~ 1
		},
		value: {
			v3: {
				// 0.1 ~ 0.3
				opacityIn: [0, 0.1, 0, 1],
				opacityOut: [0.5, 0.55, 1, 0],
				threshold: 0.3,
				SR: 0,
				WR: 0,
			},
			// message 1 (0.1 ~ 0.14)
			m1: {
				opacityIn: [0.1, 0.11, 0, 1],
				opacityOut: [0.13, 0.14, 1, 0],
				translateYIn: [0.1, 0.11, RangeForTransY, 0],
				translateYOut: [0.13, 0.14, 0, -RangeForTransY],
				threshold: 0.12,
			},
			// message 2 (0.14 ~ 0.18)
			m2: {
				opacityIn: [0.14, 0.15, 0, 1],
				opacityOut: [0.17, 0.18, 1, 0],
				translateYIn: [0.14, 0.15, RangeForTransY, 0],
				translateYOut: [0.17, 0.18, 0, -RangeForTransY],
				threshold: 0.16,
			},
			// message 3 (0.18 ~ 0.22)
			m3: {
				opacityIn: [0.18, 0.19, 0, 1],
				opacityOut: [0.21, 0.22, 1, 0],
				translateYIn: [0.18, 0.19, RangeForTransY, 0],
				translateYOut: [0.21, 0.22, 0, -RangeForTransY],
				threshold: 0.2,
			},
			// message 4 (0.22 ~ 0.26)
			m4: {
				opacityIn: [0.22, 0.23, 0, 1],
				opacityOut: [0.25, 0.26, 1, 0],
				translateYIn: [0.22, 0.23, RangeForTransY, 0],
				translateYOut: [0.25, 0.26, 0, -RangeForTransY],
				threshold: 0.24,
			},
			// message 5(0.26 ~ 0.3)
			m5: {
				opacityIn: [0.26, 0.27, 0, 1],
				opacityOut: [0.29, 0.3, 1, 0],
				translateYIn: [0.26, 0.27, RangeForTransY, 0],
				translateYOut: [0.29, 0.3, 0, -RangeForTransY],
				threshold: 0.28,
			},
			v4: {
				threshold: [0.3, 0.75], // videoIn(0.3) -> v5In(Overpainting)(0.5) -> videoOut(0.75)
				rotateIn: 90,
				rotateOut: 0,
				// translateY(In, Out) will be adjusted after "setSize" method executed
				translateYIn: 0,
				translateYOut: 0,
				SR: 0,
				WR: 0,
				fixedWidth: 0,
			},
			// message 6 (0.3 ~ 0.34)
			m6: {
				opacityIn: [0.3, 0.31, 0, 1],
				opacityOut: [0.33, 0.34, 1, 0],
				translateYIn: [0.3, 0.31, RangeForTransY, 0],
				translateYOut: [0.33, 0.34, 0, -RangeForTransY],
				threshold: 0.32,
			},
			// message 7 (0.34 ~ 0.38)
			m7: {
				opacityIn: [0.34, 0.35, 0, 1],
				opacityOut: [0.37, 0.38, 1, 0],
				translateYIn: [0.34, 0.35, RangeForTransY, 0],
				translateYOut: [0.37, 0.38, 0, -RangeForTransY],
				threshold: 0.36,
			},
			// message 8 (0.38 ~ 0.42)
			m8: {
				opacityIn: [0.38, 0.39, 0, 1],
				opacityOut: [0.41, 0.42, 1, 0],
				translateYIn: [0.38, 0.39, RangeForTransY, 0],
				translateYOut: [0.41, 0.42, 0, -RangeForTransY],
				threshold: 0.4,
			},
			// message 9 (0.42 ~ 0.46)
			m9: {
				opacityIn: [0.42, 0.43, 0, 1],
				opacityOut: [0.45, 0.46, 1, 0],
				translateYIn: [0.42, 0.43, RangeForTransY, 0],
				translateYOut: [0.45, 0.46, 0, -RangeForTransY],
				threshold: 0.44,
			},
			// message 10 (0.46 ~ 0.5)
			m10: {
				opacityIn: [0.46, 0.47, 0, 1],
				opacityOut: [0.49, 0.5, 1, 0],
				translateYIn: [0.46, 0.47, RangeForTransY, 0],
				translateYOut: [0.49, 0.5, 0, -RangeForTransY],
				threshold: 0.48,
			},
			v5: {
				threshold: [0.5, 0.75], // videoIn(0.5) -> videoOut(0.75)
				rotateIn: 90,
				rotateOut: 0,
				// translateY(In, Out) will be adjusted after "setSize" method executed
				translateYIn: 0,
				translateYOut: 0,
				SR: 0,
				WR: 0,
				fixedWidth: 0,
			},
			// message 11 (0.5 ~ 0.55)
			m11: {
				opacityIn: [0.5, 0.51, 0, 1],
				opacityOut: [0.54, 0.55, 1, 0],
				translateYIn: [0.5, 0.51, RangeForTransY, 0],
				translateYOut: [0.54, 0.55, 0, -RangeForTransY],
				threshold: 0.525,
			},
			// message 12 (0.55 ~ 0.6)
			m12: {
				opacityIn: [0.55, 0.56, 0, 1],
				opacityOut: [0.59, 0.6, 1, 0],
				translateYIn: [0.55, 0.56, RangeForTransY, 0],
				translateYOut: [0.59, 0.6, 0, -RangeForTransY],
				threshold: 0.575,
			},
			// message 13 (0.6 ~ 0.65)
			m13: {
				opacityIn: [0.6, 0.61, 0, 1],
				opacityOut: [0.64, 0.65, 1, 0],
				translateYIn: [0.6, 0.61, RangeForTransY, 0],
				translateYOut: [0.64, 0.65, 0, -RangeForTransY],
				threshold: 0.625,
			},
			// message 14 (0.65 ~ 0.7)
			m14: {
				opacityIn: [0.65, 0.66, 0, 1],
				opacityOut: [0.69, 0.7, 1, 0],
				translateYIn: [0.65, 0.66, RangeForTransY, 0],
				translateYOut: [0.69, 0.7, 0, -RangeForTransY],
				threshold: 0.675,
			},
			// message 15(0.7 ~ 0.75)
			m15: {
				opacityIn: [0.7, 0.71, 0, 1],
				opacityOut: [0.74, 0.75, 1, 0],
				translateYIn: [0.7, 0.71, RangeForTransY, 0],
				translateYOut: [0.74, 0.75, 0, -RangeForTransY],
				threshold: 0.725,
			},
			v6: {
				// canvas_elem (0.75 ~ 1)
				threshold: 0.8,
				videoIndex: [0.75, 0.95, 0, ImgCount[1] - 1],
				opacityIn: [0.55, 0.6, 0, 1],
				opacityOut: [0.9, 1, 1, 0],
				SR: 0,
				WR: 0,
			},
		},
	},
	{
		// Scene 3
		type: 'sticky',
		height: 0,
		heightMultiple: 3,
		obj: {
			scene: document.querySelector('.scene3'),
			v7: document.querySelector('.scene3 .video'),
			m1: document.querySelector('.scene3 .video4_message1'),
		},
		value: {
			v7: {
				SR: 0,
				WR: 0,
				opacityIn: [0, 0.1, 0, 1],
				// the Value hasn't decied. (size of canvas height)
				// it will be adjusted by "setSize" method.
				overpaintingIn: [0.3, 0.6, 0, 0],
			},
			m1: {
				opacityIn: [0.2, 0.3, 0, 1],
				opacityOut: [0.4, 0.5, 1, 0],
				translateYIn: [0.2, 0.3, RangeForTransY, 0],
				translateYOut: [0.4, 0.5, 0, -RangeForTransY],
				threshold: 0.35,
			},
		},
	},
];

const setSize = () => {
	const innerH = window.innerHeight;
	const bodyW = document.body.offsetWidth;
	for (let i = 0; i < sceneArr.length; i++) {
		// Set the height values of each scenes by the value 'heightMultiple'
		sceneArr[i].height = innerH * sceneArr[i].heightMultiple;
		// change the size of element
		sceneArr[i].obj.scene.style.height = `${sceneArr[i].height}px`;
	}

	// Set canvas size
	// canvas should cover the screen
	// Arr -> for doing 'for' loop
	const videoArr = [];
	videoArr.push(sceneArr[0].obj.v1);
	videoArr.push(sceneArr[1].obj.v2);
	videoArr.push(sceneArr[2].obj.v3);
	videoArr.push(sceneArr[2].obj.v4); // videoArr[3]
	videoArr.push(sceneArr[2].obj.v5); // videoArr[4]
	videoArr.push(sceneArr[2].obj.v6);
	videoArr.push(sceneArr[3].obj.v7);
	for (let i = 0; i < videoArr.length; i++) {
		const HR = videoArr[i].offsetHeight / innerH;
		const WR = videoArr[i].offsetWidth / bodyW;
		const SR = HR < WR ? 1 / HR : 1 / WR;
		// set SR
		if (i === 0) sceneArr[i].value.v1.SR = SR;

		if (i === 1) sceneArr[i].value.v2.SR = SR;

		if (i > 1 && i < 6) {
			// v2 ~ v5
			sceneArr[2].value[`v${i + 1}`].SR = SR;
			sceneArr[2].value[`v${i + 1}`].WR = WR;
		}

		// Scene2 -> adjust the location of videos(v4, v5)
		if (i === 3) {
			videoArr[i].style.transform = `scale(${SR}) translate3d(-${
				(1 / SR) * 50
			}%, ${(1 / SR) * 300}%, 0)`;
		} else if (i === 4) {
			videoArr[i].style.transform = `scale(${SR}) translate3d(-${
				(1 / SR) * 50
			}%, -${(1 / SR) * 300}%, 0)`;
		} else {
			videoArr[i].style.transform = `scale(${SR}) translate3d(-${
				(1 / SR) * 50
			}%, -${(1 / SR) * 50}%, 0)`;
		}
	}

	sceneArr[2].value.v4.fixedWidth =
		sceneArr[2].obj.v4.offsetWidth * sceneArr[2].value.v4.WR;
	sceneArr[2].value.v5.fixedWidth =
		sceneArr[2].obj.v5.offsetWidth * sceneArr[2].value.v5.WR;

	// determine v7(canvas) height size
	sceneArr[3].value.v7.overpaintingIn[2] = sceneArr[3].obj.v7.height;
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

// For painting messages
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

// For drawing canvas

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

	// define temporary array to push it into imgArr(global)
	const I_Arr1 = [];
	const I_Arr2 = [];

	// load each Imgs
	// scene0 img(287) sam2
	for (let j = 0; j < ImgCount[0]; j++) {
		const img = new Image();
		img.src = Basic_URL + `sam${2}/out${j + 1}.png`;
		img.addEventListener('load', () => {
			console.log(`img${j} load`);
			I_Arr1[j] = img;
		});
	}
	// push I_Arr in imgArr
	imgArr.push(I_Arr1);

	// scene2 img(374) sam1
	for (let j = 0; j < ImgCount[1]; j++) {
		const img = new Image();
		img.src = Basic_URL + `sam${1}/out${j + 1}.png`;
		img.addEventListener('load', () => {
			console.log(`img${j} load`);
			I_Arr2[j] = img;
		});
	}
	// push I_Arr in imgArr
	imgArr.push(I_Arr2);

	const v7_Arr = [];
	// IMG Load for v7
	for (let i = 0; i < 2; i++) {
		const img = new Image();
		img.src = Basic_URL + `sample${i + 1}.jpeg`;
		img.addEventListener('load', () => {
			v7_Arr[i] = img;
		});
	}
	imgArr[2] = v7_Arr;
};

// ** Play Animation !important
const playAnimaiton = (ratio) => {
	if (ratio > 1) return;

	// declare variables for playing animaiton
	let op = 0;
	let transY = 0;
	let fixedY = 0;

	// currentScene <- Global variable
	const CVal = sceneArr[currentScene].value;
	const CObj = sceneArr[currentScene].obj;
	switch (currentScene) {
		case 0: // SCENE 0
			// Img -> 271 // range of Img: 0 ~ 270
			const imgIndex = Math.round(ratio * (ImgCount[currentScene] - 1));
			const can = CObj.v1;
			const cont = can.getContext('2d');
			if (imgIndex > 0 && imgIndex < ImgCount[currentScene])
				cont.drawImage(imgArr[currentScene][imgIndex], 0, 0);

			// Video Opacity
			if (ratio < CVal.v1.threshold) {
				op = getValForElement(CVal.v1.opacityIn, ratio);
			} else {
				op = getValForElement(CVal.v1.opacityOut, ratio);
			}
			CObj.v1.style.opacity = op;

			// Message 1
			if (ratio < CVal.m1.threshold) {
				op = getValForElement(CVal.m1.opacityIn, ratio);
				transY = getValForElement(CVal.m1.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m1.opacityOut, ratio);
				transY = getValForElement(CVal.m1.translateYOut, ratio);
			}
			fixedY = CObj.message1.offsetHeight / 2;
			CObj.message1.style.opacity = op;
			CObj.message1.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;

			// Message 2
			if (ratio < CVal.m2.threshold) {
				op = getValForElement(CVal.m2.opacityIn, ratio);
				transY = getValForElement(CVal.m2.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m2.opacityOut, ratio);
				transY = getValForElement(CVal.m2.translateYOut, ratio);
			}

			fixedY = CObj.message2.offsetHeight / 2;
			CObj.message2.style.opacity = op;
			CObj.message2.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;

			// Message 3
			if (ratio < CVal.m3.threshold) {
				op = getValForElement(CVal.m3.opacityIn, ratio);
				transY = getValForElement(CVal.m3.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m3.opacityOut, ratio);
				transY = getValForElement(CVal.m3.translateYOut, ratio);
			}
			fixedY = CObj.message3.offsetHeight / 2;
			CObj.message3.style.opacity = op;
			CObj.message3.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;

			// video element in other scenes shouldn't be seen
			sceneArr[1].obj.v2.style.opacity = 0;
			sceneArr[2].obj.v3.style.opacity = 0;
			sceneArr[2].obj.v4.style.opacity = 0;
			sceneArr[2].obj.v5.style.opacity = 0;
			sceneArr[3].obj.v7.style.opacity = 0;
			break;
		case 1: // Scene 1
			// Video Elem
			if (ratio < CVal.v2.threshold) {
				op = getValForElement(CVal.v2.opacityIn, ratio);
			} else {
				op = getValForElement(CVal.v2.opacityOut, ratio);
			}
			CObj.v2.style.opacity = op;

			// Message 1
			if (ratio < CVal.m1.threshold) {
				op = getValForElement(CVal.m1.opacityIn, ratio);
				transY = getValForElement(CVal.m1.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m1.opacityOut, ratio);
				transY = getValForElement(CVal.m1.translateYOut, ratio);
			}
			fixedY = CObj.message1.offsetHeight / 2;
			CObj.message1.style.opacity = op;
			CObj.message1.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;
			// Message 2
			if (ratio < CVal.m2.threshold) {
				op = getValForElement(CVal.m2.opacityIn, ratio);
				transY = getValForElement(CVal.m2.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m2.opacityOut, ratio);
				transY = getValForElement(CVal.m2.translateYOut, ratio);
			}
			fixedY = CObj.message2.offsetHeight / 2;
			CObj.message2.style.opacity = op;
			CObj.message2.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;
			// Message 3
			if (ratio < CVal.m3.threshold) {
				op = getValForElement(CVal.m3.opacityIn, ratio);
				transY = getValForElement(CVal.m3.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m3.opacityOut, ratio);
				transY = getValForElement(CVal.m3.translateYOut, ratio);
			}
			fixedY = CObj.message3.offsetHeight / 2;
			CObj.message3.style.opacity = op;
			CObj.message3.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;
			// Message 4
			if (ratio < CVal.m4.threshold) {
				op = getValForElement(CVal.m4.opacityIn, ratio);
				transY = getValForElement(CVal.m4.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m4.opacityOut, ratio);
				transY = getValForElement(CVal.m4.translateYOut, ratio);
			}
			fixedY = CObj.message4.offsetHeight / 2;
			CObj.message4.style.opacity = op;
			CObj.message4.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;
			// Message 5
			if (ratio < CVal.m5.threshold) {
				op = getValForElement(CVal.m5.opacityIn, ratio);
				transY = getValForElement(CVal.m5.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m5.opacityOut, ratio);
				transY = getValForElement(CVal.m5.translateYOut, ratio);
			}
			fixedY = CObj.message5.offsetHeight / 2;
			CObj.message5.style.opacity = op;
			CObj.message5.style.transform = `translate3d(-50%,${
				-fixedY + transY
			}px, 0)`;

			// videos in other scenes shouldn't be seen
			sceneArr[0].obj.v1.style.opacity = 0;
			sceneArr[2].obj.v4.style.opacity = 0;
			sceneArr[2].obj.v5.style.opacity = 0;
			sceneArr[3].obj.v7.style.opacity = 0;
			break;
		case 2: // Scene 2
			// V3
			if (ratio < CVal.v3.threshold) {
				op = getValForElement(CVal.v3.opacityIn, ratio);
			} else {
				op = getValForElement(CVal.v3.opacityOut, ratio);
			}
			CObj.v3.style.opacity = op;

			// V4 - Video Out
			if (ratio < CVal.v4.threshold[0] || ratio > CVal.v4.threshold[1]) {
				CObj.v4.style.transform = `scale(${CVal.v4.SR}) translate3d(-${
					(1 / CVal.v4.SR) * 50
				}%, ${(1 / CVal.v4.SR) * 300}%, 0) rotate(90deg)`;
			} else {
				CObj.v4.style.transform = `scale(${CVal.v4.SR}) translate3d(-${
					(1 / CVal.v4.SR) * 50
				}%, -${(1 / CVal.v4.SR) * 50}%, 0) rotate(0deg)`;
			}

			// V5 - Video Out
			if (ratio < CVal.v5.threshold[0] || ratio > CVal.v5.threshold[1]) {
				CObj.v5.style.transform = `scale(${CVal.v5.SR}) translate3d(-${
					(1 / CVal.v5.SR) * 50
				}%, -${(1 / CVal.v5.SR) * 300}%, 0) rotate(90deg)`;
			} else {
				CObj.v5.style.transform = `scale(${CVal.v5.SR}) translate3d(-${
					(1 / CVal.v5.SR) * 50
				}%, -${(1 / CVal.v5.SR) * 50}%, 0) rotate(0deg)`;
			}
			CObj.v4.style.opacity = 1;
			CObj.v5.style.opacity = 1;
			// V6 -> opacity
			if (ratio < CVal.v6.threshold) {
				op = getValForElement(CVal.v6.opacityIn, ratio);
			} else {
				op = getValForElement(CVal.v6.opacityOut, ratio);
			}
			CObj.v6.style.opacity = op;
			// Location of Message

			for (let i = 0; i < 15; i++) {
				if (ratio < CVal[`m${i + 1}`].threshold) {
					op = getValForElement(CVal[`m${i + 1}`].opacityIn, ratio);
					transY = getValForElement(CVal[`m${i + 1}`].translateYIn, ratio);
				} else {
					op = getValForElement(CVal[`m${i + 1}`].opacityOut, ratio);
					transY = getValForElement(CVal[`m${i + 1}`].translateYOut, ratio);
				}
				fixedY = CObj[`message${i + 1}`].offsetHeight / 2;
				CObj[`message${i + 1}`].style.opacity = op;
				CObj[`message${i + 1}`].style.transform = `translate3d(-50%,${
					-fixedY + transY
				}px, 0)`;
			}

			// V6 -> canvas draw
			const imgIndex2 = Math.round(getValForElement(CVal.v6.videoIndex, ratio));
			const can2 = CObj.v6;
			const cont2 = can2.getContext('2d');
			cont2.drawImage(imgArr[1][imgIndex2], 0, 0);

			// videos in other scenes shouldn't be seen
			sceneArr[0].obj.v1.style.opacity = 0;
			sceneArr[1].obj.v2.style.opacity = 0;
			sceneArr[3].obj.v7.style.opacity = 0;
			break;
		case 3: // Scene 3
			const can3 = CObj.v7;
			const con3 = can3.getContext('2d');

			// overYIndex = canvas height size ~ 0
			const v7Height = CObj.v7.height;
			const v7Width = CObj.v7.width;
			const overYIndex = getValForElement(CVal.v7.overpaintingIn, ratio);
			console.log(overYIndex, ratio);

			con3.drawImage(imgArr[2][0], 0, 0);
			// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
			con3.drawImage(
				imgArr[2][1],
				0,
				overYIndex,
				v7Width,
				v7Height - overYIndex,
				0,
				overYIndex,
				v7Width,
				v7Height - overYIndex
			);

			op = getValForElement(CVal.v7.opacityIn, ratio);
			CObj.v7.style.opacity = op;

			// message 1
			if (ratio < CVal.m1.threshold) {
				op = getValForElement(CVal.m1.opacityIn, ratio);
				transY = getValForElement(CVal.m1.translateYIn, ratio);
			} else {
				op = getValForElement(CVal.m1.opacityOut, ratio);
				transY = getValForElement(CVal.m1.translateYOut, ratio);
			}
			fixedY = CObj.m1.offsetHeight / 2;
			CObj.m1.style.opacity = op;
			CObj.m1.style.transform = `translate3d(-50%,${-fixedY + transY}px, 0)`;

			// videos in other scenes shouldn't be seen
			sceneArr[0].obj.v1.style.opacity = 0;
			sceneArr[1].obj.v2.style.opacity = 0;
			sceneArr[2].obj.v3.style.opacity = 0;
			sceneArr[2].obj.v4.style.opacity = 0;
			sceneArr[2].obj.v5.style.opacity = 0;
			sceneArr[2].obj.v6.style.opacity = 0;
		default:
			break;
	}
};

// OnWindowScroll
const onWindowScroll = () => {
	const currentSceneRatio = getCurrentSceneRatio();
	sceneCheck(currentSceneRatio);
	playAnimaiton(currentSceneRatio);
};

const init = () => {
	// if previous 'Scrolling value' is not (0, 0) it's possible that the Error is happening.
	// so we have to use the 'Closer' trigger.

	window.addEventListener('resize', () => {
		window.location.reload();
	});

	window.addEventListener('orientationchange', () => {
		scrollTo(0, 0);
		location.reload();
	});

	window.addEventListener('load', () => {
		document.body.classList.remove('before-loaded');
		setTimeout(() => {
			scrollTo(0, 0);
		}, 100);

		/* before-loaded container won't be removed naturally 
		if you remove the container as soon as the process of loading is finished */
		document
			.querySelector('.loading')
			.addEventListener('transitionend', (e) => {
				document.body.removeChild(e.currentTarget);
			});
		imgLoad();
		sceneCheck();
		setSize();
	});

	window.addEventListener('scroll', onWindowScroll);
};

init();
