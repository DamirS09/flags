/*
*   Игра "Флажки"
*   Правила:
*   В игре 21 флажок и 2 игрока, за ход
*   игрок может взять 3,2 или 1 флажок.
*   Побеждает тот, кто забирает последние 1,2 или 3 флажка.
* */
// Кол-во флажков= 21;
// Текущий игрок = 1 == игрок1 если 0 == игрок2
// Флажок  = 1 || 2 || 3
// //Ход игрока = 1
//
// игрок1 ходит на N флажков
//     кол-во флажков - N
//     Ход игрока = игрок2
// игрок2 ходит на N флажков
//     кол-во флажков - N
//     Ход игрока = игрок1
// если кол-во флажков = (1 || 2 || 3) И ход игрок1
//     то победил игрок1
// иначе
//     победил игрок2
//
// // Типы данных
// // Строки
// // Числа | Вещественные и Целые
// // Логический Истина | Ложь
// String
// Number
// Boolean
// NaN
/*
var
    name = 'Вася',
    age = 30,
    isMan = true;
// Проверка типа typeof
// Проверка NaN isNaN(выражение)
*/
 // OR ||  ИЛИ
/*
* 1+1 = 1
* 1+0 = 1
* 0+1= 1
* 0+0 = 0
* */
// И &&
/*
* 1*1 = 1
* 1*0 = 0
* 0*1= 0
* 0*0 = 0
* */
 // 0 + 0 + 1 = 1
 // 0 * 0 * 1 = 0

// Псевдоистина :
// Псевдоложь : '',0, null, undefined;
// #Сделать определение текущего игрока
// #Сделать определение победителя
// Сделать возможность выбора имени
// Сделать возможность игры с компьютером или на 2их
/*var vibor = prompt("C кем хотите играть? Компьютер-1/Человек-2"); 

if(vibor == 1){ 
    pve();     // Вызов функций
} else if(vibor == 2){ 
    pvp();   // вызов функций
} else{ 
alert('Ввели не те данные'); 
} 

function pvp(){
    var name1 = prompt("Введите Имя первого играка");{ 
        console.log(name1) 
        } 
        var name2 = prompt("Введите Имя второго игрока");{ 
        console.log(name2) 
        } 
        var 
        flag_cnt = 21;
        name = name2 , 
        player = 1; 
        while( flag_cnt > 3 ) { 
        var flag = prompt ('Введите кол-во флагов') * 1; 
        if( flag == -1){ 
        console.log('До свидания'); 
        break; 
        } 
        if( ( flag != 1 ) && ( flag != 2 ) && ( flag != 3 ) && isNaN(flag) ){ 
        console.log(name+ ' ввел не корректное число',flag); 
        continue; 
        } 
        flag_cnt = flag_cnt - flag; 
        console.log(name+' походил на '+flag); 
        if(player){ 
        player = 0; 
        name = name1; 
        }else{ 
        player = 1; 
        name = name2 ; 
        } 
        console.log("Остаток флагов: "+flag_cnt); 
        } 
        console.log("Победил: "+name); 
}
function pve(){
    alert ('Игрок против компьютера');
    var name1 = prompt("Введите Имя игрока");{ 
        console.log(name1) 
        } 
    var 
    flag_cnt = 20;
    console.log("Компьютер походил на 1 флажок"); 
    console.log("Остаток флагов: "+flag_cnt);

    while( flag_cnt > 3 ) { 
        var flag = prompt ('Введите кол-во флагов') * 1; 
        if( flag == -1){ 
        console.log('До свидания'); 
        break; 
        } 
        if( ( flag != 1 ) && ( flag != 2 ) && ( flag != 3 ) && isNaN(flag) ){ 
            console.log(name+ ' ввел не корректное число',flag); 
            continue; 
            }
            flag_cnt = flag_cnt - flag; 
            console.log(name1+' походил на '+flag); 
            console.log("Остаток флагов: "+flag_cnt);
        var Compflag = countflag(flag) // ход компьютера
        flag_cnt = flag_cnt - Compflag;  // ход
        console.log('Компьютер походил на'+Compflag); 
        console.log("Остаток флагов: "+flag_cnt);
    }
    console.log("Победил Компьютер");

}
function countflag (step){
    return 4-step;          //формула
}
            
        
/*if(flag){
    console.log(flag)
}else{
    console.log('Передан не флаг')
}*/
/*if(  !flag  ){
    console.log('Передан не флаг')
}*/
var vibor = prompt("C кем хотите играть? Компьютер-1/Человек-2"); 

if(vibor == 1){ 
alert('Играете против компьютера'); 
} 
else if(vibor == 2){ 
alert('Играете против человека'); 
} 
else{ 
alert('Ввели не те данные'); 
}
 
var name1 = prompt("Введите Имя первого играка");{ 
console.log(name1) 
} 
var name2 = prompt("Введите Имя второго игрока");{ 
console.log(name2) 
} 
var 
flag_cnt = 21, 
name = name2 , 
player = 1; 
while( flag_cnt > 3 ) { 
var flag = prompt ('Введите кол-во флагов') * 1; 
if( flag == -1){ 
console.log('До свидания'); 
break; 
} 
if(isNaN(flag)){ 
console.log(name+' ввел не число'); 
continue; 
} 
if( ( flag != 1 ) && ( flag != 2 ) && ( flag != 3 ) ){ 
console.log(name+ ' ввел не корректное число',flag); 
continue; 
} 
flag_cnt = flag_cnt - flag; 
console.log(name+' походил на '+flag); 
if(player){ 
player = 0; 
name = name1; 
}else{ 
player = 1; 
name = name2 ; 
} 
console.log("Остаток флагов: "+flag_cnt); 
} 
console.log("Победил: "+name);
