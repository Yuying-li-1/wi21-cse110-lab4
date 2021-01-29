for (const prop in statistics){
  if((`${prop}`).indexOf("r") == 0){
    console.log(`${statistics[prop]}`);
  }
  if((`${statistics[prop]}` % 2) == 1){
    console.log(`${statistics[prop]}`);
  }
}
