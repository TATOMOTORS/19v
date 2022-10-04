const oFocusSePlus = document.querySelector("#o-ford-focseplus");
const cFocusSePlus = document.querySelector("#c-ford-focseplus");
const focusSePlus = document.querySelector("#focus-se-plus");

oFocusSePlus.addEventListener("click",()=>{
    focusSePlus.showModal();
})

cFocusSePlus.addEventListener("click",()=>{
    focusSePlus.close();
})

const oEtiosXls = document.querySelector("#o-etios-xls");
const cEtiosXls = document.querySelector("#c-etios-xls");
const etiosXls = document.querySelector("#etios-xls");

oEtiosXls.addEventListener("click",()=>{
    etiosXls.showModal();
})

cEtiosXls.addEventListener("click",()=>{
    etiosXls.close();
})