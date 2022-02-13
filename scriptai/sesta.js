console.log("--- sesta ---");

const dateObj = new Date();
const currentMonth = dateObj.getMonth();

const warmSeasonNow = () => {
	if (currentMonth >= 4 && currentMonth <= 10) {
		return true;
	} else {
		return false;
	}
};

const speed = 131;

const speedRange =
	speed <= 70
		? 70
		: speed > 70 && speed <= 90
		? 90
		: speed > 90 && speed <= 110
		? 110
		: speed > 110 && speed <= 120
		? 120
		: speed > 120 && speed <= 130
		? 130
		: "";

switch (speedRange) {
	case 70:
		console.log("kituose keliuose");
		break;
	case 90:
		console.log("keliuose su asfalto ar betono danga");
		break;
	case 110:
		console.log(`greitkeliuose, automagistralese`);
		break;
	case 120:
		if (warmSeasonNow === true) {
			console.log("greitkeliuose");
			console.log("automagistralese");
		} else {
			console.log("siuo metu tai neleistinas greitis! 110 max");
		}
		break;
	case 130:
		if (warmSeasonNow === true) {
			console.log("greitkeliuose");
		} else {
			console.log("siuo metu tai neleistinas greitis! max 110");
		}
		break;
	default:
		console.log("sere, cia ne Vokietija..");
		break;
}

// 3 val, 10 balu
