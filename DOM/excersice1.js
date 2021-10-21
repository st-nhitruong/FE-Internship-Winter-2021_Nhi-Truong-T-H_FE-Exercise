var input = document.createElement('input');
var button = document.createElement('button');
var p = document.createElement('p');

var attr1 = document.createAttribute('placeholder');
var attrinput = document.createAttribute('class');
var idp = document.createAttribute('id');
var textbutton = document.createTextNode('Tính tuổi');
var idbtn = document.createAttribute('id');
var idp = document.createAttribute('id');

attr1.value = 'nhập năm sinh';
attrinput.value = 'input';
idbtn.value = 'myBtn';
idp.value = 'ketqua';

input.setAttributeNode(attr1);
input.setAttributeNode(attrinput);
button.appendChild(textbutton);
button.setAttributeNode(idbtn);
p.setAttributeNode(idp);

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(p);

document.getElementById("myBtn").addEventListener("click", displayAge);
function displayAge() {
    var ipnElement = document.querySelector('input');
    var yearOfBirth = parseInt(ipnElement.value);
    var date = new Date();
    var currentYear = date.getFullYear();
    var age = currentYear - yearOfBirth;
    document.getElementById("ketqua").innerHTML = 'Tuổi của bạn là:'+age;
    document.body.appendChild(p);
}
