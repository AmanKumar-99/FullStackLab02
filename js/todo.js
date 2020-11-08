var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

todoButton.onclick = createList;
todoList.onclick = checkdelete;


function createList(e){

    e.preventDefault();

    if(todoInput.value!=""){
    var listTile = document.createElement("div");
    listTile.classList.add("todo");

    var newList = document.createElement("li");
    newList.classList.add("todo-item");
    newList.innerHTML = todoInput.value;
    listTile.appendChild(newList);

    var chk = document.createElement("button");
    chk.classList.add("chk-btn");
    chk.innerHTML='<i class ="fa fa-check"></i>';
    listTile.appendChild(chk);

    var del = document.createElement("button");
    del.classList.add("del-btn");
    del.innerHTML='<i class ="fa fa-trash"></i>';
    listTile.appendChild(del);

    todoList.appendChild(listTile);
    todoInput.value="";
    }else{
        alert("Todo list cannot be empty");
    }
}

function checkdelete(e){
    var item = e.target;
    
    if(item.classList[0]==="del-btn"){
        var parent = item.parentNode;
        parent.remove();
    }

    if(item.classList[0]==="chk-btn"){
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}