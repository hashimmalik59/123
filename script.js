// let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// console.log("My city is 'Mehmanon ka Shehar'" + cities[3]);
// alert("My city is 'Mehmanon ka Shehar' " + cities[3]);

// let class_nursery = [
//   "Hashim",
//   "Ahmad",
//   "Malik",
//   "Hashim Ahmad",
//   "Hashim Malik",
// ];
// console.log(class_nursery);
// class_nursery.push("Abdullah");
// console.log(class_nursery);
// class_nursery.pop("Abdullah");
// console.log(class_nursery);

// let Students_Marks = [98, 76, 34, 65, 82];
// console.log(Students_Marks);

// Students_Marks.shift(100);
// console.log(Students_Marks);

// Students_Marks.unshift(100);
// console.log(Students_Marks);



let count = 0;
document.getElementById('decre').onclick = function() {
    count -= 1;
    document.getElementById('count-number').innerHTML = count;
}
document.getElementById('rst').onclick = function() {
    count = 0;
    document.getElementById('count-number').innerHTML = count;
}
document.getElementById('incre').onclick = function() {
    count += 1;
    document.getElementById('count-number').innerHTML = count;
}