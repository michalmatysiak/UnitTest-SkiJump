const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let size;
	let startpoints;
	let points;

    // Distane
	let distancepoints = distance - kPoint;
    
    // Hill Size
    if (hillSize >= 75 && hillSize < 110) {
        size = 'normal';
    } else if (hillSize >= 110 && hillSize < 185) {
        size = 'big';
    } else if (hillSize >= 185) {
        size = 'mamut';
    }

    if (hillSize >= 185) {
        startpoints = 120;
    } else {
        startpoints = 60;
    }


	// K Points
    switch(size) {
    	case 'normal':
    		points = startpoints + (distancepoints * 2)
    		break;
    	case 'big':
    		points = startpoints + (distancepoints * 1.8)
    		break;
    	case 'mamut':
    		points = startpoints + (distancepoints * 1.2)
    }

    return points;

};

module.exports = calculateDistancePoints;