let number = 5;
const leftBorderWidth = 1;

const sba = {
    a: 50
};

sba.a = 10;
console.log(sba);
// Типы данные в JS

//Простые типы.
let num = 1; // число
let nm = 'me'; // строка
const lt = false; //boolean(правда или нет)
// null - не существует
// undefiend - есть такая переменная,но у нее нет никакого значения
// Symbol
// BigInt

//Спец.объекты(комплексные)
//Массив 
const obj = {
    name: 'John',
    age: 25,
    isMarried: false,
};
console.log(obj.isMarried);
console.log(obj["name"]);

let arr = ['plum.png', 'orange', 'apple'];

/* const result = prompt("Are you okay?", ""); Лучше оставлять пустые ковычки для ответа(чаще всего). typeof,чтобы проверить тип текста
const result2 = +prompt("Are you okay?", "");Меняет тип введенных данных на цифры(вместо базовой строки) */

const answers = [];

answers[0] = prompt("Имя?", "");
answers[1] = prompt("Фамилия", "");
answers[2] = prompt("Отчество", "");

const category = 'toys';

console.log(`https://someurl.com/${category}/5/14`) // Интерполяция(${category})

let incr = 10,
    decro = 10;
incr++; // Увеличивает строго на 1
decro--; // Уменьшает строго на 1
// Можно ставить перед переменной(префиксная) или после переменной(постфиксная)

console.log(incr++); //Получим 10 ибо сначала выводит число,а потом повышает его на 1
console.log(--decro); // Получим 9,ибо сначала число уменьшили,а потом вывели в консоль

console.log(5%2); // Остаток
console.log(4*2 == 8); // Обычное равенство
console.log(4*2 === 8); // Строгое равенство
// && / || = И/Или

const isChecked = true,
      isClose = true;
console.log(isChecked && isClose); // Только если оба значения true,то будет выводится в консоли тру,если хоть одно не равно тру,то будет фолс 
// С оператором ||(или) только одно из значений должно быть тру,или оба фолс.
// ! - Знак отрицания(меняет тру на фолс и тд.)