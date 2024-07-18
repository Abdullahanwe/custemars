
let arr = [];
let arry = [];

let rowData = document.getElementById("data")
let searchTerm = document.getElementById("searchTerm")
let searchNum = document.getElementById("search")
async function allData() {
    let dataa = await fetch('https://abdullahanwe.github.io/json/index.json');
    let data = await dataa.json();
    arr = data;
    console.log(arr);
    arr = data.customers;
    arry = data.transactions;
    // console.log(arry);
    displayData(arr);


}
allData()

function displayData() {
    let cartona = '';
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name);
        // console.log(arry[i].date);
        cartona += `
        <tr>
            <td>${arr[i].name}</td>
            <td>
            ${arry[i].date} 
            </td>
            <td> ${arry[i].amount} </td>
            <td>
            <button class="btn btn-info">Veiw</button>
            </td>
        </tr>   `
    }
    rowData.innerHTML = cartona;
}

function searchName() {

    let cartona = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(searchTerm.value.toLowerCase()) == true) {
            cartona += `
        
        <tr>
            <td>${arr[i].name}</td>
            <td>
            ${arry[i].date} 
            </td>
            <td> ${arry[i].amount} </td>
            <td>
            <button class="btn btn-info">Veiw</button>
            </td>
        </tr>       `
        }
    }
    rowData.innerHTML = cartona;
}
function searchNumber() {

    let cartona = '';
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name);
        // console.log(arry[i].date);
        console.log(customers.id);
        if (arr[i].customers.id(searchNum.value) == true) {
            cartona += `
            <tr>
                <td>${arr[i].name}</td>
                <td>
                ${arry[i].date} 
                </td>
                <td> ${arry[i].amount} </td>
                <td>
                <button class="btn btn-info">Veiw</button>
                </td>
            </tr>    `
        }
    }
    rowData.innerHTML = cartona;
}

