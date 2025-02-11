/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here

function num5() {
	return 5;
}

async function stringy() {
	return "Luffy";
}

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting() {
	const value = await stringy();
	console.log('waiting', value);
}


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitForMyPromise() {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve('done!!!!');
		}, 1000)
	});

	const result = await promise;
	console.log('my promise is', result);
}

waitForMyPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

new Promise((resolve) => {
	setTimeout(() => {
		resolve('done!');
	}, 1500)
//}).then(r => console.log('then my other promise is', r));
}).then(r => wait(1500).then(() => console.log('then my other promise is', r)));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

const tryRandomPromise = random => {
	return new Promise((resolve, reject) => {
		if (random > 0.5) {
			resolve('Success!!!');
		} else {
			reject('random error');
		}
	});
}

//for (let i = 0; i < 10; i++) {
//	const random = Math.random();
//	wait(2000 + random * 5000)
//		.then(() => tryRandomPromise(random))
//		.then(result => console.log('random try #', i, result))
//		.catch(error => console.error('random try #', i, error));
//}



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

const tryTryAgain = async (i) => {
	const random = Math.random();
	
	await wait(3000 + random * 1000);

	try {
		const result = await tryRandomPromise(random);
		console.log('random again #', i , result);
	} catch (error) {
		console.error('random again #', i , error);
	}
}

for (let i = 0; i < 10; i++) {
	tryTryAgain(i);
}



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here

console.log('END OF PROGRAM');
