nomedosestudantes = [];

function submit(){
    var name1 = document.getElementById("nome1").value;
    var name2 = document.getElementById("nome2").value;
    var name3 = document.getElementById("nome3").value;
    var name4 = document.getElementById("nome4").value;

    nomedosestudantes.push(name1);
    nomedosestudantes.push(name2);
    nomedosestudantes.push(name3);
    nomedosestudantes.push(name4);

    console.log(nomedosestudantes);

    document.getElementById("displayName").innerHTML = nomedosestudantes;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}
function sorting(){
    nomedosestudantes.sort();
    console.log(nomedosestudantes);
    document.getElementById("displayName").innerHtMl = nomedosestudantes;
}