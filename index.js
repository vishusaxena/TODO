const btn=document.querySelector("#add");
const inputTask=document.querySelector("#input-box");
 btn.onclick=()=>{
    const task=document.createElement("p");
    task.innerHTML=inputTask.value;
    document.getElementById("task").appendChild(task);
    
};