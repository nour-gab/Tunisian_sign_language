let mobilenet;
let model;
const webcam = new Webcam(document.getElementById('wc'));
let isPredicting = false;

function handleButton(elem){

	const img = webcam.capture();

        const MODEL_URL = './model.json';
        tf.loadLayersModel(MODEL_URL).then(async(model) => {
        console.log(model.summary());
        const result = model.predict(img);
        const predict = await result.data()
        console.log(predict)
        alert(result.argMax(1).dataSync()[0]) 
        })	
}




function doTraining(){
	train();
}

function startPredicting(){
	isPredicting = true;
	predict();
}

function stopPredicting(){
	isPredicting = false;
	predict();
}

async function init(){
	await webcam.setup();
	//mobilenet = await loadMobilenet();
	//tf.tidy(() => mobilenet.predict(webcam.capture()));
		
}



init();