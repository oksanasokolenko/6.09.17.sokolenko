// var a = [5, 6, 7];
// var b = {
//     'name': "alex",
//     'age' : 123
// };
// document.getElementById('arr1').innerHTML = a;
// // document.getElementById('arr2').innerHTML = b;
// var out = '';
// for (var key in b) {
//     out +=`${b [key]}<br>`;
//
// }
// document.getElementById('arr2').innerHTML = out;


// Задание 1
// Дан массив
// var m = [7, [7, 8,9], 17]
// Как вывести на экран число 9 из данного массива?

// var m = [ 7,
//     [7, 8, 9],
//     17];
//  console.log(m[1][2]);

//Задание 2
//Дан массив
//var m = [5, {“one”: 2000, “two”: 4000}, 56]
//Как вывести на экран число 4000 из данного массива? Число 56?


// var m = [5,
//     {   "one": 2000,
//         "two" : 4000
//     },
// 56] ;
// console.log(m[1]['two']);
// console.log(m[2]);


// Задание 3
// Дан массив
// var m ={“one”: 5, “two”: [23, 45]}
// Как вывести на экран число 45 из данного массива?

// var m = {"one": 5,
// "two": [23, 45] };
// console.log(m['two'][1]);


// Задание 4
// Дан массив
// var m ={“one”: 5, “two”: {“kkk”:23,”mmm”: 45}}
// Как вывести на экран число 45 из данного массива?

// var m ={"one": 5,
//  'two': {"kkk":23, "mmm": 45}};
// console.log(m['two']["mmm"]);
//
// Задание 5
// Дан массив
// var m =[{“mts”: “+38050556677”, “life”: “+093445566”}, {“mts”: “+38050665544”, “life”: “+093112233”} ]
// С помощью цикла for выведите на экран все телефоны mts. Затем, все life и mts.

// var m =[ {"mts": "+38050556677", "life": "+093445566"}, {"mts": "+38050665544", "life": "+093112233"} ];
// var out='';
// var out1='';
//
//
// for (var  i=0; i<m.length; i++){
//     out+= m[i]['mts'] + "<br>";
//     out1+= m[i]['life'] + "<br>";
//
// }
// document.getElementById('out').innerHTML = out;
// document.getElementById('out1').innerHTML = out1;


// Задание 6
// Дан массив
// var m ={
// “phone1” : {“mts”: “+38050556677”, “life”: “+093445566”},
// “phone2”: {“mts”: “+38050665544”, “life”: “+093112233”}
// }
// С помощью цикла for выведите на экран все телефоны mts.
//     Затем, все life и mts.


// var m = {
// 'phone1' : {'mts': '+38050556677', 'life': '+093445566'},
// 'phone2': {'mts': '+38050665544', 'life': '+093112233'}
// }
//
// var out = '';
// var out1='';
//
// for (var key in m){
//
//     out+=m[key].mts +'<br>';
//
//     out1+=m[key].life +'<br>';
//
// }
// document.getElementById('out').innerHTML = out;
// document.getElementById('out1').innerHTML = out1;


// Задание 7
// Дан массив
// var m =[[ “+38050556677”, “+093445566”], [ “+38050665544”, “+093112233”]]
// С помощью цикла for выведите на экран все телефоны.

// var m =[['+38050556677', '+093445566'], [ '+38050665544', '+093112233']]
// var out = '';
// for ( var  i=0; i<m.length; i++){
//     for (var j=0; j<m[i].length; j++){
//         out+=m[i][j] + "<br>";
//     }
//  }
//  document.getElementById('out').innerHTML = out;


// Задание 8
// Дан массив var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
// Выведите его на страницу в формате “индекс” –“значение”.

// var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
// var out='';
// for (var i=0; i<mas.length; i++){
//
//     out+= i + ' '+ '-' + mas[i]+ '<br>';
//  }
// document.getElementById('out').innerHTML = out;

// Задание 9
// Дано массив
// var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// Выведите те элементы массива, которые меньше 35.

//  var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// var out = '';
// for (var i=0; i<a.length; i++) {
//     if (a[i] < 35) {
//         out += a[i] + '<br>';
//     }
// }
//  document.getElementById('out').innerHTML = out;


// Задание 10
// Дан массив
// var b = {
// {"name" : "Alex", "age": 17}, {"name" : "Ivan", "age": 27},
// {"name" : "Sergey", "age": 28},
// {"name" : "Vitaliy", "age": 30}, {"name" : "Olga", "age": 24},
// }
// Выведите с помощью цикла for-in только имена людей из данного массива.

var b = {
 {"name" : "Alex", "age": 17},
{"name" : "Ivan", "age": 27},
 {"name" : "Sergey", "age": 28},
{"name" : "Vitaliy", "age": 30},
{"name" : "Olga", "age": 24},
}
var out = '';
for (var key in b){
    out+=b.[key].name;
}