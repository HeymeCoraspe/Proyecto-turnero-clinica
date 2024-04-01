const monthNames= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let currentDate=new Date()
let currentDay= currentDate.getDate();
let monthNumber= currentDate.getMonth();
let currentYear= currentDate.getFullYear();


let dates= document.getElementById("dates");
let month= document.getElementById("mes");
let year= document.getElementById("agno");

let prevMonthDom= document.getElementById("mes-retro");
let nextMonthDom= document.getElementById("mes-sig");

month.textContent=monthNames[monthNumber];
year.textContent=currentYear.toString();

prevMonthDom.addEventListener("click", ()=>lastMonth());
nextMonthDom.addEventListener("click", ()=> nextMonth());


//funciones calendario

const writeMonth=(month)=>{//escribe el mes

   for(let i = startDay(); i>0; i--){
        dates.innerHTML += ` <div class="calendar__dates calendar__item">${getTotalDays(monthNumber-1)-(i-1)}</div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
}

const getTotalDays=(month)=>{//escriba la cantidad de días del mes
    if(month===-1) month=11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {//para saber los meses de 31 días
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {//para saber los meses de 30 días
        return 30; 

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap=()=>{ //año bisiesto
    return ((currentYear%100 !== 0) && (currentYear%4===0) || (currentYear%400 === 0) )
}


const startDay=()=>{//día en que empieza la semana
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth=()=>{//para el botón retroceso
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}


const nextMonth=()=>{//para botón siguiente
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate=()=>{//para cuando el calendario se mueva
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);