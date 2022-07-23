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
    modalTuri = 'new';
    document.getElementById("countryModal").style.display = 'block';
    document.getElementById("modalHeaderAdd").innerText = 'Are you sure you want to add this to your wishlist?';
    document.getElementById("countryName").value = '';
}















function savePhone() {

    let formModel = document.getElementById("model").value;
    let Quantity = document.getElementById("quantity").value;

    function afterAlert() {
        document.getElementById("quantity").style.backgroundColor = "#e2484c"
    }

    if (Quantity < 1||Quantity>20) {
        window.alert("Write appropriate number or its reached quantity limit");
        afterAlert();
        window.local.reload();
        closeAddModal();
    } else {
        document.getElementById("quantity").style.backgroundColor = "limegreen";
    }

    // non-repeat function

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
    //     }
    //
    // }
    // nonRepeat();


    let Color = document.getElementById("color").value;
    let lastId = phoneList.length > 0 ? phoneList[phoneList.length - 1].id : 0;
    let obj = '';
    if (modalTuri === 'new') {
        obj = {id: lastId + 1, model: formModel, quantity: Quantity, color: Color};
        phoneList.push(obj);
    }else {
        let index  = 0;
        for (let i = 0; i < phoneList.length; i++) {
            if (phoneList[i].id === selectedId) {
                index = i;
                break;
            }
        }
        obj = {id: selectedId, model: formModel, quantity: document.getElementById("countryName").value + " (editted)", color: Color};
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



