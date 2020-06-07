//редактирование данных в одной персоне
function editBandit(i){
  display("create_person");
  document.getElementById("textFirstName").value=  arrBandits[i].firstName;
  document.getElementById("textBreed").value = arrBandits[i].breed;
  document.getElementById("selectWool").value = arrBandits[i].wool;
  document.getElementById("selectAge").value = arrBandits[i].age;
  document.getElementById("selectFood").value = arrBandits[i].food;
  document.getElementById("selectDetension").value = arrBandits[i].detenation;
  document.getElementById("selectVaccination").value = arrBandits[i].vaccination;
  deleteBandit(i,arrBandits);
  document.getElementById("mainMenu").style.display="none";
}

//удаление информации о персоне из массива и страницы

function deleteBandit(i,arrBandits) {
  arrBandits.splice(i,1);
  printInfo(arrBandits);
}

// вывод всей информации на странице о выбранной персоне в классе all_info

///// var elem = document.getElementById("all_info");
// createTable(elem, 9, 4);
// function createTable(parent, cols, rows){
//   var table = document.createElement("table");

//   for(var i = 0; i < rows; i++){
//     var tr = document.createElement("tr");

//     for(var j = 0; j < cols; j++){
//       var td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   parent.appendChild(table);
///// }



// function printDetailedInfo(i){
//   let form = document.getElementById("all_info").getElementsByTagName("form");
//   form[0].innerHTML='<br>';
//   form[0].innerHTML+='<div class="detailInfo">'+
//       '<div class="details">'+'<div class="elem">Имя</div>'+'</div>'+
//       '<div class="details">'+'<div class="elem">'+arrBandits[i].firstName+'</div>'+'</div>'+
//       '<p class="gInfo">Порода вашего питомца: ' + arrBandits[i].breed + '</p>' +
//       '<p class="gInfo">Тип шерсти: ' + arrBandits[i].wool + '</p>' +
//       '<p class="gInfo">Возраст питомца: ' + arrBandits[i].age + '</p>' +
//       '<p class="gInfo">Тип питания питомца: ' + arrBandits[i].food; + '</p>' +
//       '<p class="gInfo">Условия содержания питомца: ' + arrBandits[i].detenation + '</p>' +
//       '<p class="gInfo">Вакцинация: ' + arrBandits[i].vaccination + '</p>'
//     '</div><br>'+
//     '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';

//   document.getElementById("mainMenu2").addEventListener("click",function() {
//     display("information");
//   });
// }

  // отрисовка всей информации о персонах в классе info

function printInfo(arrBandits) {
  let form = document.getElementById("information").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  //Первая (верхняя) строка таблицы
  form[0].innerHTML+='<div class="text_description">'+
    '<div class="text_name strong">Имя</div>'+
    '<div class="cell text_breed strong">Порода вашего питомца</div>' +
    '<div class="cell text_wool strong">Тип шерсти</div>' +
    '<div class="cell text_age strong">Возраст питомца</div>' +
    '<div class="cell text_food strong">Тип питания питомца</div>'+
    '<div class="cell text_detenation strong">Условия содержания питомца</div>'+
    '<div class="cell text_vaccination strong">Вакцинация</div>'+
    '<div class = "cell">Редактировать</div>'+
    '<div class = "cell">Удалить</div>'+
    '</div>';

  for (let i=0; i<arrBandits.length; i++) {
    //каждое i - информация о персоне

    form[0].innerHTML+='<div class="text_description">'+
      '<div class="text_name " id="details'+i+'">'+arrBandits[i].firstName+'</div>'+
      '<div class="cell text_breed">'+ arrBandits[i]._breed + '</div>' +
      '<div class="cell text_wool">'+ arrBandits[i]._wool  + '</div>' +
      '<div class="cell text_age">'+ arrBandits[i]._age + '</div>' +
      '<div class="cell text_food">'+ arrBandits[i]._food + '</div>' +
      '<div class="cell text_detenation">'+ arrBandits[i]._detenation + '</div>' +
      '<div class="cell text_food">'+ arrBandits[i]._food + '</div>' +
      '<div class="text_name " id="edit'+i+'">Редактировать</div>'+
      '<div class="text_name " id="remove'+i+'">Удалить</div>'+
      '</div>';
  }
  form[0].innerHTML+='<br>'+
  '<div class="newC"><input type="button" id="newBanditButton" class="buttons" value="Добавить нового клиента"></div>';

  // добавим обработчики

  for (let i=0;i<arrBandits.length;i++){
    let edit='edit'+i;
    let remove='remove'+i;
    let details='details'+i;
    document.getElementById(edit).style.color="blue";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="green";

    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrBandits);
      display("all_info");
    });

    document.getElementById(edit).addEventListener("click",function(){
      editBandit(i);
      let add = document.getElementById("createPerson");
      add.value = "Сохранить";
    });
    document.getElementById(remove).addEventListener("click",function(){
      if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
      arrBandits[i].firstName + " " +arrBandits[i].secondName+"?")) {
          deleteBandit(i,arrBandits);
      } else {

      }

    });
  }
  document.getElementById("newBanditButton").addEventListener("click",function(){
    display("create_person");
    document.getElementById("createPerson").style.display="";
    let add = document.getElementById("createPerson");
     add.value = "Добавить нового!";
  })
}

function display(visibleId/*выбирается либо:"information" либо "all_info" либо "create_person"*/) {
  //display flex чтобы отобразить нужный блок

  switch (visibleId) {
  case "create_person":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="flex";
  break;
  case "all_info":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="flex";
  document.getElementById("create_person").style.display="none";
  break;
  case "information":
  default :
  document.getElementById("information").style.display="flex";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="none";
  }
}

//родительский класс гет сет

class BaseClass{
  constructor(firstName){
    this.firstName = firstName;
    // this.breed = breed;
    // this.wool = wool;
    // this.age = age;
    // this.food = food;
    // this.detenation = detenation;
    // this.vaccination = vaccination;
  }


  // breed, wool, age, food, detenition, vaccination

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    if(value.length == ""){
      alert("Ввидите имя ");
      return;
    }
    this._firstName = value;
  }


  get breed(){
    return this._breed;
  }

  set breed(value){
    if(value.length == ""){
      alert("Порода вашего питомца ");
      return;
    }
    this._breed = value;
  }

  get wool(){
    return this._wool;
  }

  set wool(value){
    if(value.length == ""){
      alert("Тип шерсти ");
      return;
    }
    this._wool = value;
  }

  get age(){
    return this._age;
  }

  set age(value){
    if(value.length == 0){
      alert("Введите возраст питомца");
      return;
    }
    this._age = value;
  }



  get food(){
    return this._food;
  }

  set food(value){
    if(value.length == ""){
      alert("Тип питания питомца ");
      return;
    }
    this._food = value;
  }


  get detenation(){
    return this._detenation;
  }

  set detenation(value){
    if(value.length == ""){
      alert("Тип питания питомца ");
      return;
    }
    this._detenation = value;
  }


  get vaccination(){
    return this._vaccination;
  }

  set vaccination(value){
    if(value.length == ""){
      alert("Тип питания питомца ");
      return;
    }
    this._vaccination = value;
  }


}

//наследники

class OneExtendsClass extends BaseClass{
  constructor(firstName, type1, type2){
    super(firstName);
    this.type="killer";
    this.type1 = type1;
    this.type2 = type2
  }
}

class TwoExtendsClass extends BaseClass{
  constructor(firstName, type3){
    super(firstName);
    this.type="sniper";
    this.type3 = type3;
  }
}


// проверка какая радио-кнопка и возвращаем его value
function checkRadio() {
    var radio=document.getElementsByName('radioBanditType');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
    }
}

let arrBandits = []; // массив из персон


//Создание экземпляров класса



//статичные 
let bandit1 = new OneExtendsClass("Боб", "нет", 15);
arrBandits.push(bandit1); 
let bandit2 = new OneExtendsClass("Черныш", "нет", 23);
arrBandits.push(bandit2); 
let bandit3 = new OneExtendsClass("Лео", "нет", 12);
arrBandits.push(bandit3); 
display("information");
printInfo(arrBandits);




// главная страница готова
// с кнопками crud


/*listeners*/
//
//на главное меню
document.getElementById("createPerson").addEventListener("click", function() {
  document.getElementById("mainMenu").style.display="";


  let firstName = document.getElementById("textFirstName").value;
  let typeBreed = document.getElementById("textBreed").value;
  let typeWool = document.getElementById("selectWool").value;
  let typeAge = document.getElementById("selectAge").value;
  let typeFood = document.getElementById("selectFood").value;
  let typeDetenition = document.getElementById("selectDetension").value;
  let typeVaccination = document.getElementById("selectVaccination").value;
  let type = checkRadio();
   switch (type) {
    case "killer":
      arrBandits[arrBandits.length] = new OneExtendsClass(firstName, typeBreed, typeWool, typeAge, typeFood, typeDetenition, typeVaccination);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
    break;
    case "sniper":
      arrBandits[arrBandits.length] = new TwoExtendsClass(firstName, typeBreed, typeWool, typeAge, typeFood, typeDetenition, typeVaccination);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
      break;
    default :
      arrBandits[arrBandits.length] = new  OneExtendsClass(firstName, typeBreed, typeWool, typeAge, typeFood, typeDetenition, typeVaccination);
      printInfo(arrBandits);
      display("information");
      alert("Добавил нового");
  } 
});


document.getElementById("mainMenu").addEventListener("click",function() {
  display("information");
});

// document.getElementById("selectPet").addEventListener("change", function () {
//   document.getElementById("general").style.display = "";
//   let type = checkRadio();
//   switch (type) {
//       case "killer":
//           displaySelect("killer");
//           break;
//       case "sniper":
//           displaySelect("sniper");
//           break;
//   }
// });
