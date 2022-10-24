fetch("./props.json").then(res => res.json()).then(
 props=>{
    let datos = document.querySelector("#datosIndex")//estoy seleccionando el html
    console.log(props)
    props.map(element => {
        datos.innerHTML +=`
       
        <td>${element.titulo}</td>
        <td>${element.precio}</td>
        <td> <img src="${element.imagen}" width="50px"></img></td>
        <td>${element.descripción}</td>
        <td>${element.categoria}</td>
        <td>${element.id}</td>
    `
    });
 }

)