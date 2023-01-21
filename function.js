one = document.getElementById('one');
two = document.getElementById('two');
three = document.getElementById('three');
four = document.getElementById('four');
five = document.getElementById('five');
six = document.getElementById('six');
seven = document.getElementById('seven');
eight = document.getElementById('eight');
nine = document.getElementById('nine');
zero = document.getElementById('zero');

plus = document.getElementById('plus');
minus = document.getElementById('minus');
mult = document.getElementById('mult');
div = document.getElementById('div');
equal = document.getElementById('equal');
c = document.getElementById('c');


blank = document.getElementById('inp-box');

one.onclick = function(){
    blank.value += 1;
}
two.onclick = function(){
    blank.value += 2;
}
three.onclick = function(){
    blank.value += 3;
}
four.onclick = function(){
    blank.value += 4;
}
five.onclick = function(){
    blank.value += 5;
}
six.onclick = function(){
    blank.value += 6;
}
seven.onclick = function(){
    blank.value += 7;
}
eight.onclick = function(){
    blank.value += 8;
}
nine.onclick = function(){
    blank.value += 9;
}
zero.onclick = function(){
    blank.value += 0;
}

plus.onclick = function(){
    blank.value +='+';
}
minus.onclick = function(){
    blank.value += '-';
}
mult.onclick = function(){
    blank.value += '*';
}
div.onclick = function(){
    blank.value += '/';
}

equal.onclick = function(){
    var word = eval(blank.value);
    blank.value = word;
}

c.onclick = function(){
    blank.value = '';
}


