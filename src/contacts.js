import style from "./_scss/contacts.scss";
import burger from './modules/burger';

burger.init();
// let contactsForm=document.querySelector('.question');
// let contactsButton= document.getElementById('form-submit');
// contactsButton.addEventListener('click',function () {
//     return formValidation(contactsForm);
// });
// function formValidation(form){
//     if (form.text != null && form.text.value.length < 3 )
//     {
//         alert("Заполните поле «Ваше имя»");
//         return false;}
//
//     if(form.email != null && form.email.value.length < 5)
//     {
//         alert("слишком короткий «E-Mail»");
//         return false;}
//
//     if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(form.email.value)) )
//     {
//         alert("Введите правильный E-Mail адрес");
//         return false;}
//     if (form.comments != null && form.comments.value.length < 3)
//     {
//         alert("Заполните поле «Сообщение»");
//         return false;}
// }
