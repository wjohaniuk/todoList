const strContains = (str1, str2) => {
	const stringToCompare = str1.toLowerCase();
	const stringToFind = str2.toLowerCase();
	return stringToCompare.includes(stringToFind);
};

export default strContains;
