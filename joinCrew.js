var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);



var reverseMe = crew.reverse();
console.log(reverseMe);

var nArray = [8,5,3,1,9,4];

var orgArray = nArray.sort();
console.log(orgArray);

var words = ["cat", "in", "hat", "bat"];
var wrds = words.join();
console.log(wrds);

var wds = words.toString();
console.log(wds);