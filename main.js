// Formalar validatsiyasi uchun



// Mashq Tavsifi: Shaxsiy Profil Ma’lumotlarini To‘ldirish Formasi
// Vazifa: Foydalanuvchi o‘z shaxsiy profil ma’lumotlarini to‘ldirishi uchun forma yarating. Har bir maydon uchun validatsiya qoidalari qo‘llansin. Agar maydon noto‘g‘ri to‘ldirilsa, foydalanuvchiga xatolik xabari ko‘rsatiladi. Forma tugmasi faqat barcha maydonlar to‘g‘ri to‘ldirilganda faollashadi.

//   const form = document.getElementById("form");
//   const firstName = document.getElementById("name");
//   const lastName = document.getElementById("lastname");
//   const date = document.getElementById("date");
//   const number = document.getElementById("number");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const checkpassword = document.getElementById("checkpassword");
//   const adress = document.getElementById("adress");
//   const postalcode = document.getElementById("postalcode");
//   const gender = document.getElementById("gender");
//   const check = document.getElementById("check");
//   const submitBtn = document.getElementById("submitBtn");

//   function validateFirstName() {
//     const value = firstName.value;
//     const error = document.getElementById("firstNameError");
//     if (value === "" || value.length < 2 || !/^[a-zA-Z]+$/.test(value)) {
//       error.textContent =
//         "Ismni to‘g‘ri kiriting. Kamida 2 ta harf bo‘lishi kerak va faqat lotin harflaridan foydalaning.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateLastName() {
//     const value = lastName.value;
//     const error = document.getElementById("lastNameError");
//     if (value === "" || value.length < 2 || !/^[a-zA-Z]+$/.test(value)) {
//       error.textContent = "Familiyani to‘g‘ri kiriting.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateDateOfBirth() {
//     const value = date.value;
//     const error = document.getElementById("dobError");
//     if (
//       !value ||
//       new Date(value) >
//         new Date(new Date().setFullYear(new Date().getFullYear() - 18))
//     ) {
//       error.textContent = "Yoshingiz 18 dan katta bo‘lishi kerak.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validatePhoneNumber() {
//     const value = number.value;
//     const error = document.getElementById("numberError");
//     if (!/^\+998\d{9}$/.test(value)) {
//       error.textContent =
//         "Telefon raqamini to‘g‘ri kiriting, masalan: +998901234567.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateEmail() {
//     const value = email.value;
//     const error = document.getElementById("emailError");
//     if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
//       error.textContent = "Emailni to‘g‘ri kiriting.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validatePassword() {
//     const value = password.value;
//     const error = document.getElementById("passwordError");
//     if (
//       value.length < 8 ||
//       !/[A-Z]/.test(value) ||
//       !/[a-z]/.test(value) ||
//       !/[0-9]/.test(value)
//     ) {
//       error.textContent =
//         "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateConfirmPassword() {
//     const value1 = password.value;
//     const value2 = checkpassword.value;
//     const error = document.getElementById("confirmPasswordError");
//     if (value1 !== value2) {
//       error.textContent = "Parol va tasdiqlash bir xil bo‘lishi kerak.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateAdress() {
//     const value = adress.value;
//     const error = document.getElementById("adressError");
//     if (value.length < 10) {
//       error.textContent =
//         "Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validatePostalCode() {
//     const value = postalcode.value;
//     const error = document.getElementById("postalcodeError");
//     if (!/^\d{5,6}$/.test(value)) {
//       error.textContent =
//         "Pochta indeksini faqat raqamlardan iborat qilib kiriting.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateGender() {
//     const value = gender.value;
//     const error = document.getElementById("genderError");
//     if (value === "") {
//       error.textContent = "Jinsingizni tanlang.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateTerms() {
//     const error = document.getElementById("checkError");
//     if (!check.checked) {
//       error.textContent = "Qoidalarga rozilik bildiring.";
//       return false;
//     }
//     error.textContent = "";
//     return true;
//   }

//   function validateForm() {
//     return (
//       validateFirstName() &&
//       validateLastName() &&
//       validateDateOfBirth() &&
//       validatePhoneNumber() &&
//       validateEmail() &&
//       validatePassword() &&
//       validateConfirmPassword() &&
//       validateAdress() &&
//       validatePostalCode() &&
//       validateGender() &&
//       validateTerms()
//     );
//   }

//   form.addEventListener("input", function () {
//     submitBtn.disabled = !validateForm();
//   });

//   form.addEventListener("submit", function (event) {
//     if (!validateForm()) {
//       event.preventDefault(); 
//     }
//   });



// Kichik mashqlar




// 1. Foydalanuvchi Ismini Ko‘rsatish
// Vazifa: Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.
// Ishlatiladigan mavzular: createElement, append, value.

const name = document.getElementById("name")
const btn = document.getElementById("btn")
const box = document.getElementById("create")

btn && btn.addEventListener('click', function(){
     const names = name.value;
     const newDiv = document.createElement("div");
     newDiv.textContent = names;
      box.appendChild(newDiv);
})

// 2. Shaxsiy Profilni O‘zgartirish
// Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.
// Ishlatiladigan mavzular: replaceChild, value.

const div = document.getElementById("namediv")
const editbtn = document.getElementById("editbtn")
const savebtn = document.getElementById("savebtn")

editbtn && editbtn.addEventListener('click', function(){
    div.setAttribute('contenteditable', true)
    div.focus();
     savebtn.style.display = "block"
     editbtn.style.display = "none";
});

savebtn && savebtn.addEventListener('click',function(){
     div.removeAttribute('contenteditable')
     savebtn.style.display = "none";
     editbtn.style.display = "block";
})
// 3. Parolni Tasdiqlash
// Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.
// Ishlatiladigan mavzular: value, alert.

const passwordInt = document.getElementById('password')
const confirmPasswordInt = document.getElementById('confirmPassword')
const submitBtn = document.getElementById('submitBtn')

submitBtn && submitBtn.addEventListener('click', function(){
     const password = passwordInt.value;
     const confirmPassword = confirmPasswordInt.value;
     if (password == confirmPassword) {
        alert("Parol mos")
     }else{
        alert("Parol mos emas")
     }
});

// 4. Rang Tanlash
// Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.
// Ishlatiladigan mavzular: style.backgroundColor, createElement.

const colorInput = document.getElementById("colorInt");  
colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = selectedColor;

  newDiv.style.width = "50px";
  newDiv.style.height = "50px";
  document.body.appendChild(newDiv);
});

// 5. Shaharlar Ro‘yxati
// Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.
// Ishlatiladigan mavzular: createElement, append.
const cityInput = document.getElementById("cityInt");
const cityBtn = document.getElementById("cityBtn"); 
const cityUl = document.getElementById("cityul");

cityBtn && cityBtn.addEventListener("click", function () {
  const cityName = cityInput.value;
  if (cityName !== "") {
    const newCity = document.createElement("li");
    newCity.textContent = cityName;
    cityUl.appendChild(newCity);
    cityInput.value = "";
  } else {
    alert("Iltimos, shahar nomini kiriting!");
  }
});


// 6. Xabar Yozish
// Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.
// Ishlatiladigan mavzular: value, textContent.

const messageInput = document.getElementById("messageInput");
const messagebtn = document.getElementById("messagebtn"); 
const messagediv = document.getElementById("messagediv"); 

 messagebtn && messagebtn.addEventListener("click", function () {

  const messageText = messageInput.value;
  
  if (messageText !== "") {
    const newMessageBlock = document.createElement("div");

    newMessageBlock.textContent = messageText;

    messagediv.appendChild(newMessageBlock);

    messageInput.value = "";
  } else {
    alert("Iltimos, xabarni kiriting!");
  }
});


// 7. Yosh Tekshirish
// Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin.
// Ishlatiladigan mavzular: value, if.

const ageInt = document.getElementById("ageInt");
const checkBtn = document.getElementById("checkBtn"); 
const resMessage = document.getElementById("resMessage");

checkBtn.addEventListener("click", function () {
  const age = parseInt(ageInt.value); 
  if (age >= 18) {
   
    resMessage.textContent = "Kirishga ruxsat berildi";
    resMessage.style.color = "green";
  } else if (age > 0) {

    resMessage.textContent = "Kirishga ruxsat berilmaydi";
    resMessage.style.color = "red";
  }
});



// 8. Input Orqali Rang O‘zgartirish
// Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.
// Ishlatiladigan mavzular: style.backgroundColor, value.

const colorInt = document.getElementById('colorInt')
const ColorBtn = document.getElementById('ColorBtn')

ColorBtn && ColorBtn.addEventListener('input',function(){
    const color = colorInt.value.trim().toLowerCase();
     if (
       color == "red" ||
       color == "green" ||
       color == "blue"
       
     ) {
       document.body.style.backgroundColor = color;
     } else {
       alert(
         "Iltimos, 'red', 'green' yoki 'blue', ranglarini kiriting!"
       );
     }
})



// 9. Foydalanuvchi Qo‘shish
// Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.
// Ishlatiladigan mavzular: value, createElement, append.

const firstName = document.getElementById("firstName"); 
const lastName = document.getElementById("lastName");
const addBtn = document.getElementById("addBtn"); 
const nameList = document.getElementById("nameList");
addBtn && addBtn.addEventListener("click", function () {
 
  const firstNamee = firstName.value.trim(); 
  const lastNamee = lastName.value.trim();
  if (firstNamee !== "" && lastNamee !== "") {
    const listItem = document.createElement("li");

  
    listItem.textContent = `${firstNamee} ${lastNamee}`;

    nameList.appendChild(listItem);
    firstName.value = "";
    lastName.value = "";
  } else {
    alert("Iltimos, ism va familiya kiriting.");
  }
});



// 10. Harflarni Hisoblash
// Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.
// Ishlatiladigan mavzular: value, textContent.
const desc = document.querySelector('#description')
const count = document.querySelector('#count')

desc && desc.addEventListener('input', function(){
    if (this.value) {
        count.innerHTML = this.value.length;
        if (this.value.length >=300) {
            this.value = this.value.substr(0, 9)
        }
    }else{
        count.innerHTML = 0
    }
})

// 11. Davlatlarni Saralash
// Vazifa: Sahifada davlatlar ro‘yxati (ul) bo‘lsin. Formada "Saralash" tugmasi bo‘lsin. Tugma bosilganda, davlatlar ro‘yxati alifbo bo‘yicha qayta tartiblanadi.
// Ishlatiladigan mavzular: childNodes, sort, appendChild.



// 12. Tugmani Faollashtirish
// Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.
// Ishlatiladigan mavzular: disabled, input hodisasi.






// 13. Forma Tozalash
// Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.
// Ishlatiladigan mavzular: value.

const firsttName = document.getElementById('firsttName')
const lasttName = document.getElementById("lasttName");
const email = document.getElementById("email");
const clearBtn = document.getElementById("clearBtn");

clearBtn && clearBtn.addEventListener('click', function(){
    lasttName.value = ''
    firsttName.value = ''
    email.value = ''
})

// 14. Foydalanuvchi Ro‘yxatini Filtrlash
// Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.
// Ishlatiladigan mavzular: textContent, style.display.

const search = document.querySelector('#search')
const list = document.querySelectorAll("#list li")


search && search.addEventListener('input', function(){
    let searchValue = this.value
    if (searchValue.length >= 2) {
        list.forEach(function(item){
            if (!item.textContent.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                item.style.display = 'none'
            }
        })
    }else{
        list.forEach(function(item){
            item.style.display = 'block'
        })
    }
})
// 15. Matnni Tahrirlash
// Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.
// Ishlatiladigan mavzular: replaceChild, value.
const textdiv = document.getElementById("textdiv");
const editbutton = document.getElementById("editbutton");
const text= document.getElementById("text");
const savebutton = document.getElementById("savebutton");

editbutton &&
  editbutton.addEventListener("click", function () {
    text.value = textdiv.textContent;

    text.style.display = "block";
    savebutton.style.display = "block";
    textdiv.style.display = "none";
    editbutton.style.display = "none";
  });

savebutton &&
  savebutton.addEventListener("click", function () {
    const newName = nameInput.value;
    namediv.textContent = newName;
    text.style.display = "none";
    savebutton.style.display = "none";
    textdiv.style.display = "block";
    editbutton.style.display = "block";
  });
