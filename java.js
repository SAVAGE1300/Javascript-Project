let modalTuri = '';
let selectedId = '';
let phonedelete = '';


let phoneList = [];


chizish2(phoneList);


function chizish2(tesha) {
    let list = [];
    tesha.map((item, i) => {
        list.push(`<tr><td>${i + 1}</td>
            <td>  ${item.model}  </td>
            <td> ${item.quantity} </td>
            <td> ${item.color} </td>
            <td style="font-weight: 800" class="fas text-warning">${item.price}<span>$</span> </td>
            <td><button class='btn btn-warning' onclick="edit(${item.id})">Edit</button></td>
            <td><button class='btn btn-danger' onclick="openDeleteModal(${item.id})" >Delete</button></td>
            </tr>`)
    });
    list = list.join('');
    document.getElementById("tbody").innerHTML = list;
}



function closeAddModal() {
    document.getElementById("countryModal").style.display = "none";
}




function showModal() {

    let formModel = document.getElementById("model").value;
    let Quantity = document.getElementById("quantity").value;




    // SumFunc---------------------------------------------------------------------------------------------------

    let donasi = document.getElementById("don");
    let sum = document.getElementById("sum");


    if (formModel === 'Samsung Galaxy M12'){
        donasi.innerHTML = 200;
        sum.innerHTML = Quantity*200;
    }
    else  if (formModel === "Samsung Galaxy S9"){
        donasi.innerHTML = 700;
        sum.innerHTML = Quantity*700;
    }
    else  if (formModel === "Samsung Galaxy S21 Ultra"){
        donasi.innerHTML = 1250;
        sum.innerHTML = Quantity*1250;
    }
    else  if (formModel === "Samsung Galaxy S24 Ultra"){
        donasi.innerHTML = 1500;
        sum.innerHTML = Quantity*1500;
    }
    else  if (formModel === "Samsung Galaxy S23 Ultra"){
        donasi.innerHTML = 1030;
        sum.innerHTML = Quantity*1030;
    }
    else  if (formModel === "Iphone 9"){
        donasi.innerHTML = 800;
        sum.innerHTML = Quantity*800;
    }
    else  if (formModel === "Iphone XYZ PRO MAX Ultra ++"){
        donasi.innerHTML = 2030;
        sum.innerHTML = Quantity*2030;
    }
    else  if (formModel === "NOKIA 1202 (New Version)"){
        donasi.innerHTML = 5000;
        sum.innerHTML = Quantity*5000;
    }





    modalTuri = 'new';
    document.getElementById("countryModal").style.display = 'block';
    document.getElementById("modalHeaderAdd").innerText = 'Are you sure you want to add this to your wishlist?';
    document.getElementById("countryName").value = '';
}









// SAVE FUNCTION ---------------------------------------------------------------------------------------

function savePhone() {

    let formModel = document.getElementById("model").value;
    let Quantity = document.getElementById("quantity").value;



    //SumFunction-----------------------------------------------------------------------------------------------------------

    let summa = document.getElementById("sum");
    let don = document.getElementById("don");



    if (formModel === "Samsung Galaxy M12"){
        don.value = 200;
        summa.value = Quantity*200;
    }
    else if (formModel === "Samsung Galaxy S9"){
        don.value = 700;
        summa.value = Quantity*700;
    }else if (formModel === "Samsung Galaxy S21 Ultra"){
        don.value = 1250;
        summa.value = Quantity*1250;
    }else if (formModel === "Samsung Galaxy S24 Ultra"){
        don.value = 1500;
        summa.value = Quantity*1500;
    }else if (formModel === "Samsung Galaxy S23 Ultra"){
        don.value = 1030;
        summa.value = Quantity*1030;
    }else if (formModel === "Iphone 9"){
        don.value = 800;
        summa.value = Quantity*800;
    }else if (formModel === "Iphone XYZ PRO MAX Ultra ++"){
        don.value = 2030;
        summa.value = Quantity*2030;
    }else if (formModel === "NOKIA 1202 (New Version)"){
        don.value = 5000;
        summa.value = Quantity*5000;
    }









    function afterAlert() {
        document.getElementById("quantity").style.backgroundColor = "#e2484c"
    }

    if (Quantity < 1||Quantity>99) {
        window.alert("Write appropriate number or its reached quantity limit");
        afterAlert();
        window.local.reload();
        closeAddModal();
    } else {
        document.getElementById("quantity").style.backgroundColor = "limegreen";
    }

    // non-repeat function-------------------------------------------------

    // function nonRepeat() {
    //     let includes;
    //     includes = phoneList.includes(formModel);
    //
    //
    //
    //     if (includes === true){
    //         window.alert("You have already have that cell phone");
    //     }
    //
    //     else {
    //         savePhone();
    //     }
    //
    // }
    // nonRepeat();


    let Color = document.getElementById("color").value;
    let lastId = phoneList.length > 0 ? phoneList[phoneList.length - 1].id : 0;
    let obj = '';


    if (modalTuri === 'new') {

        obj = {id: lastId + 1, model: formModel, quantity: Math.round(Quantity), color: Color, price: summa.value};
        phoneList.push(obj);
    }else {
        let index  = 0;
        for (let i = 0; i < phoneList.length; i++) {
            if (phoneList[i].id === selectedId) {
                index = i;
                break;
            }
        }
        obj = {id: selectedId, model: formModel, quantity: document.getElementById("countryName").value, color: Color ,price: don.value * document.getElementById("countryName").value};
        phoneList[index] = obj;
    }




    closeAddModal();
    modalYopish();
    chizish2(phoneList);
}



















// DELETE MODAL FUNCTION

function openDeleteModal(id) {
    selectedId = id;
    phoneList.map(item => item.id === id ? phonedelete = item.name : '');
    document.getElementById("name").innerText = phonedelete;
    document.getElementById("deleteModal").style.display = 'block';
}


function deleteModalClose() {
    document.getElementById("deleteModal").style.display = 'none';
}


function deleteCountry() {
    let index;
    phoneList.map((item, i) => item.id === selectedId ? index = i : 0)
    deleteModalClose();
    phoneList.splice(index, 1);
    chizish2(phoneList);
}


// EDIT MODAL FUNCTION Yopish

function modalYopish() {
    document.getElementById("editModal").style.display = 'none';
}












//Edit chiqarish


function edit(id) {
    modalTuri = 'tahrirlash';
    let name = "";
    for (let i = 0; i < phoneList.length; i++) {
            if (phoneList[i].id === id) {
                name = phoneList[i].quantity;
                break;
            }
        }
    // phoneList.map(item => {
    //     if (item.id === id) {
    //         name = item.quantity;
    //     }
    // });
    // phoneList.map(item => item.id === id ? name = item.quantity : '');
    document.getElementById("editModal").style.display = 'block';
    document.getElementById("modalHeader").innerText = 'Edit quantity of smartphones in your wishlist';
    document.getElementById("countryName").value = name;
    selectedId = id;
}


