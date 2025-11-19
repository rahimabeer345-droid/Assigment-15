var stuname = []
var a =["Abeer","Ahmed"]
var b =[10,20,30,40,50]
var c =["true", "false", "true"]
var d =["Ali",200,"true","false"]
var e =["e.g. SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]

var f =["Faizan","Ayan","Ali"]
var g =[450,380, 490]
var h =500
var i = (g[0]/h) * 100
console.log(f[0], g[0], i + "%");
var j = (g[1]/h) *100
console.log(f[1],g[1],j+"%");
var n =(g[2]/h) *100
console.log(f[2],g[2],n+"%");



alert("Original Colors:" + k);
var l = prompt("Which color do you want to add at the beginning?");
k.unshift(l);
alert("After adding at beginning: " + k);
var m = prompt("Which color do you want to add at the end?");
k.push(m);
alert("After adding at end: " + k);

k.shift();
alert("After deleting the first color: " + k);


k.pop();
alert("After deleting the last color: " + k);


var k = ["Green", "Yellow", "Orange"]; 


var q = prompt("At which index do you want to add a color?");
var r = prompt("Enter the name of the color to add:");


k.splice(q, 0, r); 
alert("After adding the color: " + k);


var s = prompt("From which index do you want to delete color(s)?");
var t = prompt("How many color(s) do you want to delete?");

k.splice(s, t);
alert("After deleting the color(s):" + k);

var u =[320, 230, 480, 120];
alert("Scores of Students:" + u);
u.sort(function(a,b){return a-b;});
alert("Ordered Scores of Students:" + u);


var v =["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
alert("Original Cities:" + v);
var sc = v.slice(0,3);
alert("Selected Cities:" + sc);



var x =["This" , "is" , "my" ,"cat"];
var y = x.join(" ");
alert(y);

var zz = ["keybord" , "mose" , "printer" , "moniter"];
alert("Out:" + "\n" + zz[0] + "\n" + "Out:"+ "\n" + zz[1] + "\n" + "Out:" + "\n" + zz[2] + "\n" + "Out:" + "\n" + zz[3]);
document.write("Out:" + "<br>" + zz[3] + "<br>" + "Out:" + "<br>" + zz[2] + "<br>" + "Out:" + "<br>" + zz[1] + "<br>" + "Out:" + "<br>" + zz[0]);
