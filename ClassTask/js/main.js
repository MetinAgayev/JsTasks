//  var x = window.confirm("Background will be black")

//  if (x === true) { document.getElementById('body').style.backgroundColor = "#000" }
// var age = prompt("Yasinizi daxil ediniz");
// if (age < 18) {
//     alert("18den kicik ola bilmez")
// }
class Person {
    constructor(name, lastname, password) {

        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }

    fullname() {
        var x = this.name + " " + this.lastname;
        return x;
    }
    upper() {

        return document.getElementById("h2").innerHTML = this.fullname().toUpperCase()
    }
}
var a = new Person("Metin", "agayev", "1234")
console.log(a.fullname())