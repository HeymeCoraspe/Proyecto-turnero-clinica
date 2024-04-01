
/*Turnos ya creados*/

turnos= [
    {fecha: 4, mes: "Abril", turno:"Mañana",especialidad: "Cardiología", medico: "Juan Pérez", motivo: "consulta pre operatoria"},
    {fecha: 17, mes: "Abril", turno:"Mañana", especialidad: "Dermatología", medico: "Yanina Durán", motivo: "consulta pre operatoria"},
    {fecha: 26, mes: "Abril", turno:"Tarde", especialidad: "Ginecología", medico: "Luis Soto", motivo: "consulta pre operatoria"},
    {fecha: 6, mes: "Mayo", turno:"Tarde", especialidad: "Alergias", medico: "Florencia Molina", motivo: "consulta pre operatoria"},
    {fecha: 10, mes: "Mayo", turno:"Tarde",especialidad: "Fonoaudiología", medico: "Carmen Bueno", motivo: "consulta pre operatoria"},
];    

//funciones
const misTurnosCards= document.getElementById("misTurnos");
//elementos de la lista
const cardsMisTurnos=() =>{
    turnos.forEach((element) => {
        detalleTurnos= `${element.fecha}, ${element.mes}, ${element.turno}, ${element.especialidad}, ${element.medico}, ${element.motivo}`
        const nuevaCard= document.createElement("li");
        nuevaCard.classList.add("list-group-item");
        nuevaCard.innerHTML=detalleTurnos;
        misTurnos.append(nuevaCard);
    });

}



//nuevo turno
const take_Date= document.getElementById("inpunt-fecha");
const take_Month= document.getElementById("inpunt-mes");
const selectMorning= document.getElementById("input-TurnoMañana");
const selectAfternoon= document.getElementById("input-TurnoTarde");
const selectSpeciality= document.getElementById("especialidad-NvoTurno");
const selectDoctor= document.getElementById("especialista-NvoTurno");
const selectMessage= document.getElementById("motivoConsulta");
const sendForm= document.getElementById("enviarForm");
let monthsDate=["enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiempre", "octubre", "noviembre", "diciembre"]
let medicalSpeciality=["Alergias", "Cardiolodía", "Dermatología", "Fonoaudiología", "Gastroenterología"];





//lLamadas
cardsMisTurnos();
