
/*Turnos ya creados*/

turnos= [
    {fecha: 4, mes: "Abril", turno:"Mañana",especialidad: "Cardiología", medico: "Juan Pérez", motivo: "consulta pre operatoria"},
    {fecha: 17, mes: "Abril", turno:"Mañana", especialidad: "Dermatología", medico: "Yanina Durán", motivo: "consulta pre operatoria"},
    {fecha: 26, mes: "Abril", turno:"Tarde", especialidad: "Ginecología", medico: "Luis Soto", motivo: "consulta pre operatoria"},
    {fecha: 6, mes: "Mayo", turno:"Tarde", especialidad: "Alergias", medico: "Florencia Molina", motivo: "consulta pre operatoria"},
    {fecha: 10, mes: "Mayo", turno:"Tarde",especialidad: "Fonoaudiología", medico: "Carmen Bueno", motivo: "consulta pre operatoria"},
    
];    

//añardir nuevo turno

const sendForm= document.getElementById("enviarForm");
const formDate= document.getElementById("form-turno");
const listnewDate= document.getElementById("misTurnos");

const newMedicalDate=[];

formDate.addEventListener("submit", function(event){
    event.preventDefault();

    const take_Date= document.getElementById("input-fecha").value;
    const take_Month= document.getElementById("meses-turno").option.value;
    const selectHour= document.getElementById("horarioTurno").option.value;
    const selectSpeciality= document.getElementById("especialidad-NvoTurno").option.value;
    const selectDoctor= document.getElementById("especialista-NvoTurno").option.value;
    const selectMessage= document.getElementById("motivoConsulta").value;

    
    const elementListDate= document.createElement("li");
    
    elementListDate.innerHTML= 
    `Fecha: ${take_Date}, 
    Mes: ${take_Month}, 
    Horas:${selectHour}, 
    Especialidad:${selectSpeciality},
    Médico:${selectDoctor}:
    Motivo de la consulta:${selectMessage} `;
    
    listnewDate.appendChild(elementListDate);

}
   
);

/** 
if(selectMessage.value===""){
    alert ("El motivo no puede estar vacío")
}else{

}



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



//lLamadas
cardsMisTurnos();
*/