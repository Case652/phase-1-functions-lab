// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks<42) {
        return(42-blocks); 
    } else {
        return(blocks-42);
    }
}
function distanceFromHqInFeet(blocks) {
    if (blocks<42) {
        return(42-blocks) * 264; 
    } else {
        return(blocks-42) * 264;
    }
}
function distanceTravelledInFeet(start, destination) {
    if (start>destination) {
        return(start-destination) * 264; 
    } else {
        return(destination-start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    let fair = distanceTravelledInFeet(start, destination)
        if (fair<401) {
            return 0;
        } else if (fair>400 && fair<2001) {
            return (fair-400) * 0.02;
        } else if (fair>2000 && fair<2501) {
            return 25;
        } else {
            return `cannot travel that far`;
        }
}