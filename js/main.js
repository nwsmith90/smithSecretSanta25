let familyChoices = ["Grandma","Grandpa","Ashley","Brittney","Nathan","Stephanie","Omar","Danny","Kyler","Abigail","Ethan","Shawn","Byron","Logan","Patrick","Lillian","Samuel","Gabriel","Olivia"]
let newArray = [];
const countArray = ["Grandma","Grandpa","Ashley","Brittney","Nathan","Stephanie","Omar","Danny","Kyler","Abigail","Ethan","Shawn","Byron","Logan","Patrick","Lillian","Samuel","Gabriel","Olivia"];



function pickRecipient(sourceArray, destinationArray) {

  if (sourceArray.length === 0) {
    console.log("Source array is empty. No element to pick.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * sourceArray.length)
  let recipientName = sourceArray[randomIndex]

  //hide all except current recipient
  for(let i = 0; i < countArray.length; i++){
    let div = countArray[i];
    if(div !== recipientName){
      document.getElementById(div).hidden = true;
    }
    else{
      document.getElementById(div).hidden = false;
    }
  }

  //move from unpicked to picked array
  destinationArray.push(recipientName);
  sourceArray.splice(randomIndex, 1);

  console.log(`Next to pick: ${recipientName}`);
  console.log("left to pick after removal:", sourceArray);
  console.log("Already picked:", destinationArray);
}


document.getElementById("choice").addEventListener(
 "click",
 () => {
pickRecipient(familyChoices, newArray);
 }
)