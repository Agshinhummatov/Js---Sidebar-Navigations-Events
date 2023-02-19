"use strict";

// let btn = document.querySelector("#products button");
// let input = document.querySelector("#products input");
// let ul = document.querySelector("#products ul")



// btn.addEventListener("click", function () {
//     if (input.value == "") {
//         alert("Dont empty");
//         return;
//     }

//     let items = document.querySelectorAll("li");

//     for (const item of items) {
//         if (item.innerText == input.value) {
//             alert("Already exist");
//             input.value = "";
//             return;
//         }

//     }

//     let li = document.createElement("li");
//     li.className = "list-group-item mt-2";
//     let span = document.createElement("span");
//     let icon = document.createElement("i");
//     icon.className = "fa-solid fa-circle-xmark";
//     span.innerText = input.value;

//     li.append(span,icon);
//     ul.append(li);
//     input.value = "";


//     deleteItem(li,icon);




//     //    ul.innerHTML+= `<li class = "list-group-item mt-2>" ${input.value}</li>` 



// })


// function deleteItem(li, icon) {

//     icon.addEventListener("click", function () {

//         li.remove();
//     })
// }





// yazdiqimiz reqem qeder add etmelidir


let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
let ul = document.querySelector("#products ul")



btn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Dont empty");
        return;
    }



    ul.innerHTML = "";

    for (let i = 1; i<= input.value; i++) {
        
        let li = document.createElement("li");
        li.className = "list-group-item mt-2";
        li.innerText = i;
        ul.append(li);
    }

    input.value = "";

})


