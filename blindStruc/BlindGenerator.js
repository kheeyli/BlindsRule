export function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function generateBlindsStructure(gameTime, multiplier) {
  let blindsStructure = [];
  let time = 3 *60; 
  let level = 1; 
  let SmallBlinds = 1;
  let BigBlinds = SmallBlinds * 2;
  let intervalBetweenIncreases = 3; // Initial interval in minutes

  while (time < gameTime) {

    let formattedTime = formatTime(time); 
   
    blindsStructure.push({ level: level, time: formattedTime, blinds: `${SmallBlinds}/${BigBlinds}` });

    // Increment time
    time += intervalBetweenIncreases * 60; // Convert interval to seconds
    level++;


    // Adjust multiplier based on bigblinds
    if (BigBlinds <= 100) {
      multiplier = 2;
    } 
    else if (BigBlinds <= 600 ) {
      multiplier = 1.8;
    } 
    else {
      multiplier = 1.6;
    }


    // Update blinds values
    SmallBlinds = Math.round(SmallBlinds * multiplier);
    BigBlinds = Math.round(BigBlinds * multiplier);


    // Prevent time from exceeding gameTime
    time = Math.min(time, gameTime);
  }

  return blindsStructure;
}
