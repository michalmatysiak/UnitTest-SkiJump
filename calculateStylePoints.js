const calculateStylePoints = (styleNotes) => {

	//const stylesNotes = [16,17,16.5,16,18];

	let max = Math.max(...styleNotes);
  	let min = Math.min(...styleNotes);

  return styleNotes.reduce((acc,cur) => acc + cur, 0) - (max + min) 
};

module.exports = calculateStylePoints;