console.log("--- antra ---");

const age = 17;
const legalAge = 18;

if (age >= legalAge) {
	console.log("vairuoti gali");
} else {
	const yearsTillLegalYears = legalAge - age;
	console.log("vairuoti gales po", yearsTillLegalYears, "metu");
}

// ternary operator
const age1 = 15;

const isLegalAge =
	age1 >= 18 ? `vairuoti gali` : `vairuoti gales po ${18 - age1} metu`;

console.log(isLegalAge);

// 15min, 5 balai
