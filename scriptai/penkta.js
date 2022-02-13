console.log("--- penkta ---");

const age4 = 37;

const generation =
	age4 >= 10 && age4 <= 25
		? "Gen Z"
		: age4 >= 26 && age4 <= 41
		? "Millenials"
		: age4 >= 42 && age4 <= 57
		? "Gex X"
		: age4 >= 58 && age4 <= 67
		? "Boomers II*"
		: age4 >= 68 && age4 <= 76
		? "Boomers I*"
		: age4 >= 77 && age4 <= 94
		? "Post War"
		: age4 >= 94 && age4 <= 100
		? "WW II"
		: age4 >= 101
		? "God Mode"
		: "";

console.log(generation);

// 15 min, 6 balai
