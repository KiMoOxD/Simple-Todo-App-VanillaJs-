let form = document.querySelector("form");
let input = document.querySelector("form").children[0];
let inBtn = document.querySelector("form").children[1];
let tCont = document.querySelector(".tasks");
let task = document.querySelector(".task");


let tasks = [{}];
let l = (localStorage.getItem('tasks')) ? localStorage.getItem('tasks').length : 0;

showTasks();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        tasks.push({id: Date.now() , name:input.value});
        window.localStorage.setItem(`tasks`, JSON.stringify(tasks));
        createTask(input.value, `${Date.now()}`);
    } 
    input.value = ``;
})



tCont.addEventListener('click', (el) => {
    if(el.target.classList.contains('del')) {
        tasks = tasks.filter((e) => {
            return e.id != el.target.dataset.id;
        })
        localStorage.setItem('tasks', JSON.stringify(tasks || {}));
        el.target.parentElement.remove();
    }
})




function showTasks() {
    
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    for (let i = 0; i<tasks.length; i++) {
        let spanval = document.createTextNode(tasks[i].name);
        let ntask = document.createElement('div');
        let nspan = document.createElement('span');
        let tBtn = document.createElement('button');
        tBtn.setAttribute('data-id', `${tasks[i].id}`)
        ntask.classList.add('task');
        tBtn.append("Delete")
        nspan.appendChild(spanval);
        ntask.appendChild(nspan);
        ntask.appendChild(tBtn);
        tCont.appendChild(ntask);
        ntask.classList.add('task');
        tBtn.classList.add('del');
    }
}


function createTask(inp, tid) {
    let spanval = inp;
    let ntask = document.createElement('div');
    let nspan = document.createElement('span');
    let tBtn = document.createElement('button');
    tBtn.setAttribute('data-id', tid)
    ntask.classList.add('task');
    tBtn.classList.add('del');
    tBtn.append("Delete")
    nspan.append(spanval);
    ntask.appendChild(nspan);
    ntask.appendChild(tBtn);
    tCont.appendChild(ntask);
}






// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (input.value) {
//         window.localStorage.setItem(`task_${++localStorage.length}`, input.value);
//         createTask(input.value, `task_${localStorage.length}`);
//     } else {
//         window.localStorage.setItem(`task_${++localStorage.length}`, null);
//         createTask("N/A", `task_${localStorage.length}`);
//     }
//     input.value = ``;
// })



// function showTasks() {
//     for (let i = 0; i<localStorage.length; i++) {
//         let spanval = document.createTextNode(localStorage.getItem(localStorage.key(i)));
//         let ntask = document.createElement('div');
//         let nspan = document.createElement('span');
//         let tBtn = document.createElement('button');
    
//         ntask.classList.add('task');
//         tBtn.append("Delete")
//         nspan.appendChild(spanval);
//         ntask.appendChild(nspan);
//         ntask.appendChild(tBtn);
//         tCont.appendChild(ntask);
//         ntask.classList.add('task');
//         tBtn.classList.add('del');
//     }
// }


// function createTask(inp, tn) {
//     let spanval = inp;
//     let ntask = document.createElement('div');
//     let nspan = document.createElement('span');
//     let tBtn = document.createElement('button');
//     tBtn.setAttribute('tName', tn)
//     ntask.classList.add('task');
//     tBtn.classList.add('del');
//     tBtn.append("Delete")
//     nspan.append(spanval);
//     ntask.appendChild(nspan);
//     ntask.appendChild(tBtn);
//     tCont.appendChild(ntask);
// }

