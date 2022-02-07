function clearPreloader(){
    var preloader = document.querySelector('#preloader');
    var content = document.querySelector('#site');
    preloader.style.display = 'none';
    content.style.opacity = '1';

}

setTimeout(clearPreloader, 1000);


////// Task 1

var square = document.querySelector('#quad');

square.addEventListener('dblclick',function(){
    //square.style.backgroundColor = 'blue';
    //square.style.border = 'none';
    square.classList.toggle('change-quad-color');
})


///// Task 2

var images = document.querySelector('.club-image');

images.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        alert(event.target.getAttribute('src'));
    }
})


///// Task 3

var links = document.querySelector('#links');

links.addEventListener('mouseover', function(event){
    if(event.target.tagName === 'A'){
        event.target.nextElementSibling.classList.add('href-visible');
        //event.target.innerHTML = event.target.innerHTML + ' ' + event.target.getAttribute('href');
    }
})

////// Task 4

var card4 = document.querySelector('.card');

window.addEventListener('keydown', function(event){
    //console.log(event.key);
    if (event.key === 'Escape'){
        card4.remove();
    }
})


///// Task 5

var select = document.querySelector('#selecters');

function addSelectText(){
    for (var i = 0; i < select.options.length; i++) {
		//console.log(select.options[i].text);
		//console.log(select.options[i].value);

		if(select.options[i].selected === true){
            document.querySelector('#current-result').innerHTML = select.options[i].text;
        }
        select.options[i].addEventListener('select', addSelectText);

    }
}

select.addEventListener('change', addSelectText);


/*document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });*/


 ////// Task 6

 var table = document.querySelector('table');

 table.addEventListener('click', function(e){
     if(e.target.tagName === 'TD'){
         var newTableValue = prompt('Input new value', e.target.textContent);
         e.target.textContent = newTableValue;
     }
 })

 var form = document.querySelector('#add-form');
 var btnAddNewUser = document.querySelector('#button-add');

 var inputName = form.elements.fName;
 var inputProduct = form.elements.product;
 var inputPrice = form.elements.price;

 function isCorrectNewName(){
    if(inputName.value.trim() !== '' && inputName.value[0] === inputName.value[0].toUpperCase()){
        inputName.nextElementSibling.hidden = true;
        return true;
    } else {
       inputName.nextElementSibling.hidden = false;
       return false;
    }
 }

 inputName.addEventListener('blur', isCorrectNewName);

 function isCorrectNewProduct(){
    if(inputProduct.value.trim() !== ''){
        inputProduct.nextElementSibling.hidden = true;
        return true;
    } else {
        inputProduct.nextElementSibling.hidden = false;
        return false;
    }
 }

 inputProduct.addEventListener('blur', isCorrectNewProduct);

 function isCorrectNewPrice(){
    if(inputPrice.value.trim() !== '' && inputPrice.value[0] === '$' && inputPrice.value.length > 4){
        inputPrice.nextElementSibling.hidden = true;
        return true;
    } else {
        inputPrice.nextElementSibling.hidden = false;
        return false;
    }
 }

 inputPrice.addEventListener('blur', isCorrectNewPrice);

 function createNewUser(){
     var isCorrectName = isCorrectNewName();
     var isCorrectProduct = isCorrectNewProduct();
     var isCorrectPrice = isCorrectNewPrice();
    if(isCorrectName && isCorrectProduct && isCorrectPrice){
        var newName = document.createElement('td');
        newName.innerText = inputName.value;
    
        var newProduct = document.createElement('td');
        newProduct.innerText = inputProduct.value;
    
        var newPrice = document.createElement('td');
        newPrice.innerHTML = inputPrice.value;
    
        var newUser = document.createElement('tr');
        newUser.append(newName);
        newUser.append(newProduct);
        newUser.append(newPrice);
        table.children[1].append(newUser);
        form.reset();
    }
 }

 btnAddNewUser.addEventListener('click', createNewUser);

////// Task 7

var inputNameToy = document.querySelector('#search-value');

var listToys = document.querySelector('#list');

function searchToy(){
    for (let toy of listToys.children){
        if(toy.textContent.toLocaleLowerCase().indexOf(inputNameToy.value.toLocaleLowerCase()) !== -1 && inputNameToy.value.trim() !== '') {
            toy.style.color = 'orange';
        } else {
            toy.style.color = 'black';
        }
    } 
}

inputNameToy.addEventListener('input', searchToy);

/**Task7 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]