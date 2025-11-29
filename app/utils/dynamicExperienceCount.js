const startDate = new Date(2021, 7);
const now = new Date();
const yearsExperience = (now - startDate) / (1000 * 60 * 60 * 24 * 365);
const roundedYears = Math.floor(yearsExperience) + "+";

export { roundedYears };
