/*Turnos ya creados*/

turnos= [
    {fecha: 4, mes: "Abril", especialidad: "Cardiología", medico: "Juan Pérez"},
    {fecha: 17, mes: "Abril", especialidad: "Dermatología", medico: "Yanina Durán",},
    {fecha: 26, mes: "Abril", especialidad: "Ginecología", medico: "Luis Soto",},
    {fecha: 6, mes: "Mayo", especialidad: "Alergias", medico: "Florencia Molina",},
    {fecha: 10, mes: "Mayo", especialidad: "Fonoaudiología", medico: "Carmen Bueno",},
];    

//funciones
const misTurnosCards= document.getElementById("misTurnos");
//elementos de la lista
const cardsMisTurnos=() =>{
    turnos.forEach((element) => {
        detalleTurnos= `${element.fecha},${element.mes} ${element.especialidad}, ${element.medico} `
        const nuevaCard= document.createElement("li");
        nuevaCard.classList.add("list-group-item");
        nuevaCard.innerHTML=detalleTurnos;
        misTurnos.append(nuevaCard);
    });

}

//crear calendrio
const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let fechaActual=new Date()
let diaActual= fechaActual.getDate();
let mesActual= fechaActual.getMonth()+1;
let agnoActual= fechaActual.getFullYear();

console.log(diaActual+ "/" + mesActual+"/"+agnoActual);













//llamadas
cardsMisTurnos();
