let id = 0;
let items = []

function todo() {
    let input1 = document.getElementById("field1");
    if (input1.value == "") {
        return
    }








    //    h3.textContent = input1.value;

    items.push(input1.value);
    console.log(items);

    maptodo()

    input1.value = "";
}

function maptodo() {
    container.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        let div = `<div class="parent" > <ul>  <h3> <li>${items[i]}   </li>  </h3>  <button onclick="Delete(${i})">Delete</button>  <button onclick="edittodo(${i})">Edit</button> </ul> </div>`
        container.innerHTML += div;


    }
}

function Delete(n) {

    console.log(n)


    let newarr = []
    for (let i = 0; i < items.length; i++) {
        if (i == n) {


        } else {
            newarr.push(items[i])
        }


    }
    items = newarr;
    console.log(items)
    maptodo()
}

function deletetodo() {
    let container = document.getElementById("container");
    container.innerHTML = "";

}

function edittodo(e) {

let edit_task=prompt("please enter task to edit")

items[e]=edit_task;

console.log(edit_task)

maptodo()

console.log(e)




}






















