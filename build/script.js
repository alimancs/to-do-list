let toDos = []
function createToDo(toDos) {
    const textval = document.getElementById("new-td");
    if (textval.value == "") {
        alert("you have to make an input in the text field.");
    } else {
        const indicator = document.getElementById("ind");
        const main = document.getElementById("to-dos");
        const box = document.createElement("div");
        const checkboxcontainer = document.createElement("div");
        const checkboxcontainerattri = document.createAttribute("id");
        let indnum = 1 + Number(indicator.innerText);
        indicator.innerHTML=indnum;
        
        const boxattri = document.createAttribute("id");
        let boxname = "box" + String(indnum);
    
        boxattri.value = boxname;
        checkboxcontainerattri.value="check-container";
        checkboxcontainer.setAttributeNode(checkboxcontainerattri);
        box.setAttributeNode(boxattri);
    
        const newtodo = document.createElement("p");
        const newtodoattri = document.createAttribute("id");
        newtodoattri.value="text";
        newtodo.setAttributeNode(newtodoattri);
        const checker = document.createElement("input");
        const checkerattri = document.createAttribute("type");
        checkerattri.value = "checkbox";
        checker.setAttributeNode(checkerattri);
        main.appendChild(box);
        box.appendChild(checkboxcontainer);
        checkboxcontainer.appendChild(checker);
        box.appendChild(newtodo);
        const text = document.createTextNode(textval.value);
        newtodo.appendChild(text);
        const deletebutton = document.createElement("button");
        const delclick = document.createAttribute("onclick");
        const deltext = document.createTextNode("×");
        const delbox = document.createElement("div");
        const delboxattri = document.createAttribute("id");
        delboxattri.value="del-container";
        delbox.setAttributeNode(delboxattri);
        delclick.value=`deleteToDo(${indnum})`;
        deletebutton.setAttributeNode(delclick);
        deletebutton.appendChild(deltext);
        box.appendChild(delbox);
        delbox.appendChild(deletebutton);
        toDos.push(box);
        textval.value='';
    }

}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const textval = document.getElementById("new-td");
        if (textval.value == "") {
            alert("you have to make an input in the text field.");
        } else {
            const indicator = document.getElementById("ind");
            const main = document.getElementById("to-dos");
            const box = document.createElement("div");
            const checkboxcontainer = document.createElement("div");
            const checkboxcontainerattri = document.createAttribute("id");
            let indnum = 1 + Number(indicator.innerText);
            indicator.innerHTML=indnum;
            
            const boxattri = document.createAttribute("id");
            let boxname = "box" + String(indnum);
        
            boxattri.value = boxname;
            checkboxcontainerattri.value="check-container";
            checkboxcontainer.setAttributeNode(checkboxcontainerattri);
            box.setAttributeNode(boxattri);
        
            const newtodo = document.createElement("p");
            const newtodoattri = document.createAttribute("id");
            newtodoattri.value="text";
            newtodo.setAttributeNode(newtodoattri);
            const checker = document.createElement("input");
            const checkerattri = document.createAttribute("type");
            checkerattri.value = "checkbox";
            checker.setAttributeNode(checkerattri);
            main.appendChild(box);
            box.appendChild(checkboxcontainer);
            checkboxcontainer.appendChild(checker);
            box.appendChild(newtodo);
            const text = document.createTextNode(textval.value);
            newtodo.appendChild(text);
            const deletebutton = document.createElement("button");
            const delclick = document.createAttribute("onclick");
            const deltext = document.createTextNode("×");
            const delbox = document.createElement("div");
            const delboxattri = document.createAttribute("id");
            delboxattri.value="del-container";
            delbox.setAttributeNode(delboxattri);
            delclick.value=`deleteToDo(${indnum})`;
            deletebutton.setAttributeNode(delclick);
            deletebutton.appendChild(deltext);
            box.appendChild(delbox);
            delbox.appendChild(deletebutton);
            toDos.push(box);
            textval.value='';
        }
    }
})

function deleteToDo(boxnumber) {
    let boxname = "box" + boxnumber;
    const box = document.getElementById(boxname);
    box.style.display = "none";
}