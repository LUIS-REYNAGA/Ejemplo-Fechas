const formulario = document.querySelector("#formulario");

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

formulario.addEventListener("submit", e => {
    e.preventDefault();
    
    let fecha = document.querySelector("#fecha"),
        dias = document.querySelector("#dia").value;
    const contenido = document.querySelector("#contenido");
    const tituloFecha = document.getElementById("titulo");

    /**Convetir string a date */
    let date = new Date(fecha.value.replace(/-+/g, "/"));

    dias = parseInt(dias);
    const fechaNum = date.getDate();
    const mes_name = date.getMonth();
    let name_dia = date.getDay();

    /**Cambiar titulo */
    tituloFecha.innerHTML = `${meses[mes_name]} - ${date.getFullYear()}`;

    /**Logica para agrgar los dias a la tabla */
    let dia = fechaNum - 1;
    while (dias > 0) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let td = document.createElement("td");
            if (name_dia !== j) {
                td.innerHTML = ``;
            } else {
                if (dias !== 0) {
                    td.innerHTML = `${(dia = dia + 1)}`;
                    name_dia = j + 1;
                }
                dias = dias - 1;
            }
            tr.appendChild(td);
        }
        name_dia = 0;

        contenido.appendChild(tr);
    }
});
