'use strict';

/* <label class="all item">
<input type="checkbox">
<div>item test 1</div>
<input type="button" value="X">
</label> 
---> isto estava no html e sera criado no JS*/

/*
const criarItem = () => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox">
        <div>item test 1</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}
*/
/*
const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox">
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}*/
/*adicinado checked para riscar a tarefa*/
/*const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" checked>
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}*/

/*foi trocado checked por status para riscar a tarefa --> no concole digitar:
 <<criarItem("luis","checked");>> */
const criarItem = (tarefa, status='') => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

