/**
 * Created by Kira on 03.06.2019.
 */
let randomNum = 18;
let randomNum2 = randomNum; // рандомчисло2 будет уже отдельным экземпляром, которое хранит значение равное 18-и

var a = {   // а - это просто ссылка на объект.
    name: 'Kirill',
    protocol: 'https',
    maxIq: 200,
    isOnline: true,
    friends: ['DenChainy', 'Nikolay', 'Alexey'],
    home: {
        address: {
            flat: 24,
            street: 'Pervomayskaya'
        }
    }
};
var b = a; // скопировали ссылку на объект в переменную b.

b.name = 'Kuroyami';
console.log(b.name); //Kuroyami (значение меняется у объекта. т.к. в памяти попрежнему существует только 1 объект
console.log(a.name); //Kuroyami

// СПОСОБЫ КОПИРОВАНИЯ ОБЪЕКТА
var c = {...a}; // 1) ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА А (ВНУТРИ ПОПРЕЖНЕМУ ОСТАЮТСЯ ССЫЛКИ(ЕСЛИ ПОЛЕ НЕ ПРИМИТИВ))
c.name = 'zantetsuken';
console.log(c.name); // zantetsuken (Поле с примитивным значением изменилось лишь в копии объекта)
console.log(a.name); // Kuroyami

//НЕ ПРИМИТИВ:
c.friends.push('Kizaru');
c.home.address = 'Oplesnina';

console.log(a.friends); //[ 'DenChainy', 'Nikolay', 'Alexey', 'Kizaru' ]
                        // В первоисточнике все равно изменилось количество друзей

console.log(a.home.address); //Oplesnina (КАК И ПОЛЕ ВНУТРИ ВЛОЖЕННОГО ОБЪКТА)


// 2) ГЛУБОКОЕ (не очень удобный способ)
var d = {...a};
d.friends =  [...a.friends];  // В данном случае будет дип копия. и значения будут уже разными
d.home = {...a.home};
