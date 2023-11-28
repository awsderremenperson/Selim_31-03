const user = prompt('')

if( +user < 18){
    alert("Привет, и имя юзера")
}else if(+user >= 18 && +user < 60){
    alert('Здравствуйте, ФИО юзера')
} else if(+user >= 61 && +user <= 80){
    alert('Добро пожаловать, ФИО')
} else {alert('Произошла ошибка')
}