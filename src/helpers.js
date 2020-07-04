import json from './config.json'


export let sendRequest = (request) => {
  console.log("Request Sent!");
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', request, true);
  xhttp.send();
}

export let rgbToHex = (r, g, b) => {
  var redHex = Number(r).toString(16);
  var greenHex = Number(g).toString(16);
  var blueHex = Number(b).toString(16);

  var hexacode = redHex + greenHex + blueHex;
  return hexacode;
}

export let targetDeviceIPFetcher = (device) => {
  const configFile = JSON.stringify(json);
  let config = JSON.parse(configFile);
  var search = "config." + device + ".ip";

  return eval(search);
}

export let colorFetch = (height) => {
  var barPercentage = height / 3;
  var r, g, b = 0;
  var hexString = '&';

  if(barPercentage < 14){
      r = 255;
      g = Math.round((barPercentage * 115) / 14) + 38;
      b = 0;
  }
  if(barPercentage >= 14 && barPercentage < 28){
      r = 255;
      g = Math.round((barPercentage * 102) / 28) + 153;
      b = 0;
  }
  if(barPercentage >= 28 && barPercentage < 41){
      r = Math.round((barPercentage * -255) / 41) + 255;
      g = 255
      b = Math.round((barPercentage * 17) / 41) + 0;
  }
  if(barPercentage >= 41 && barPercentage < 54){
      r = 0
      g = Math.round((barPercentage * -30) / 54) + 255;
      b = Math.round((barPercentage * 238) / 54) + 17;
  }
  if(barPercentage >= 54 && barPercentage < 70){
      r = 0
      g = Math.round((barPercentage * -182) / 70) + 225;
      b = 255
  }
  if(barPercentage >= 70 && barPercentage < 87){
      r = Math.round((barPercentage * 255) / 87) + 0;
      g = Math.round((barPercentage * 43) / 87) + 43;
      b = Math.round((barPercentage * -38) / 87) + 255;
  }
  if(barPercentage >= 87){
      r = 255
      g = Math.round((barPercentage * 21) / 100) + 0;
      b = Math.round((barPercentage * -217) / 100) + 217;
  }
  
  //document.body.style.backgroundColor = "rgb(" + r + "," + g + ","+ b + ")"
  
  sendRequest("http://" + targetDeviceIPFetcher("device1") + "/" + hexString + rgbToHex(r, g, b));
}

