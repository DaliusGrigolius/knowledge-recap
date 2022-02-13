console.log("--- trecia ---");

const age2 = 21;

if (age2 < 18) {
	console.log("nepilnametis");
} else if (age2 >= 18 && age2 <= 20) {
	console.log("pilnametis, bet gert pasvajok");
} else {
	console.log("varyk gert, nieko vertingiau nera");
}

// 10 min, 4 balai

// ternary operator
const isAge2IsLegal =
	age2 < 18
		? console.log("nepilnametis")
		: age2 >= 18 && age2 <= 20
		? console.log("pilnametis, bet gert pasvajok")
		: age2 >= 21
		? console.log("varyk gert, nieko vertingiau neraaaaaa")
		: "";
