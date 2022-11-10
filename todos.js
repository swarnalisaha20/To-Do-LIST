// my code
// not working
function getAndUpdate(){
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArraystr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    update();
}

function update(){
    if (localStorage.getItem('itemJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
        //Ppulate the table
        let tableBody = document.getElementById("tableBody");
        let str = "";
        itemJsonArray.forEach((element,index) => {
            str+= `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
            </tr>`;
        });
        tableBody.innerHTML = str;
    }

}

add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();

function deleted(itemIndex){
    console.log("deleted",itemIndex);
    itemJsonArraystr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    //delete item
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    update();
}

function clearStorage(){
    console.log("Clearing the Storage");
    localStorage.clear();
    update();
    console.log("complete");
}