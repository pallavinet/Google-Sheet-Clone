let rows=100;
let cols=26;


let scol=document.querySelector(".s-col");
let srow=document.querySelector(".s-row");
let cellsCont=document.querySelector(".cell-cont");
// let foraddress=document.querySelector(".formulae-add")

for(let i=0;i<rows;i++){
    let col=document.createElement("div");
    col.setAttribute("class","col")
    col.innerText=i+1;
    scol.appendChild(col);
}


for(let i=0;i<cols;i++){
    let row=document.createElement("div");
    row.setAttribute("class","row")
    row.innerText=String.fromCharCode(i+65);
    srow.appendChild(row);
}

//       ===============cells=============

for(let i=0;i<rows;i++){
    let rowCont=document.createElement("div");
    rowCont.setAttribute("class","row-cont");
    for(let j=0;j<cols;j++){
        
    let cell=document.createElement("div");
    cell.setAttribute("class","cell");
    cell.setAttribute("contenteditable","true");
        rowCont.appendChild(cell);
        // addDispaly(cell,i ,j);
    }
    cellsCont.appendChild(rowCont);
}


// function addDispaly(cell,i,j){
//     cell.addEventListner("click",(e)=>{
//         let rowid=i+1;
//         let colid=String.fromCharCode(65+j);
//         // foraddress.value=${colid}${rowid};
//     })
// }