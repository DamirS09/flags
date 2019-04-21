// Игра "Флажки"
//  Игра "Флажки"
//   Правила:
//   В игре 21 флажок и 2 игрока, за ход
//   игрок может взять 3,2 или 1 флажок.
//   Побеждает тот, кто забирает последние 1,2 или 3 флажка.
//
// Кол-во флажков= 21;
// Текущий компьютер = 1 == компьютер если 0 == игрок1
// Флажок  = 1 || 2 || 3
// Ход игрока = 1
// первый ход компьютер  ходит на 1 флажков           
//     Ход игрока = игрок
// игрок ходит на N флажков
//     кол-во флажков - N
//     Ход компьютера = компьютер
//  компьютер ходит на 4 крутную ходу игрока
// если кол-во флажков = (1 || 2 || 3) И ход компьютера
//     то победил компьютер
// иначе
//     победил игрок1
var vibor = prompt("C кем хотите играть? Компьютер-1/Человек-2");
if(vibor == 1){ 
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
        if(isNaN(flag)){ 
            console.log(name+' ввел не число'); 
            continue; 
            } 
            if( ( flag != 1 ) && ( flag != 2 ) && ( flag != 3 ) ){ 
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
if( vibor == 2){
    alert('Играете против человека'); 
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
        
}
