var programmingLanguages=['html','css','javascript','php','wordpress','react'];

console.log(programmingLanguages);
console.log(programmingLanguages[2]);
console.log(programmingLanguages[4]);

programmingLanguages.push('java');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.unshift('python');
console.log(programmingLanguages);


programmingLanguages.shift();
programmingLanguages.shift();
console.log(programmingLanguages);

console.log(Math.random()*200);
console.log(Math.floor(Math.random()*200));

var stundetat=["Edmond","Esma","Diar"];

var[s1,s2,s3]=stundetat;

console.log(s1);

var places=["Madrid","Turkey","Paris","Spain","Germany","New York"];
var[,,firstplace,secondplace,,thirdplace,fourthplace]=places;
console.log(firstplace);
//New York
//Germany