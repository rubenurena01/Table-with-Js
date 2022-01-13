function anadirPre(){
    let Producto = document.getElementById('producto').value
    let Precio = parseInt(document.getElementById('precio').value)
    let Cantidad = parseInt(document.getElementById('cantidad').value)
    //METODO 1
    /*
    if(!Producto || Precio<=0 || Cantidad<=0){
        alert("Introduce los elementos bien para poder calcular el presupuesto")
    }else{
        var resultadoIva = 0, resultadoTotal = 0
        var parametros = [Producto, Cantidad, Precio, resultadoIva, resultadoTotal]
        parametros[3] = Precio*0.21
        parametros[4] = ((Precio*Cantidad)+parametros[3])
        var tabla="<tr>"
        for (i=0;i<5;i++){
            tabla+="<td>"+parametros[i]+"</td>"
        }
        tabla+="</tr>"
        document.getElementById('thbody').insertAdjacentHTML('beforeEnd',tabla)
    }*/

    //METODO 2
    /*
    if(!Producto || Precio<=0 || Cantidad<=0){
        alert("Introduce los elementos bien para poder calcular el presupuesto")
    }else{
        var tabla = document.getElementById('thbody')
        var resultadoIva = 0, resultadoTotal = 0
        var parametros = [Producto, Cantidad, Precio, resultadoIva, resultadoTotal]
        parametros[3] = Precio*0.21
        parametros[4] = ((Precio*Cantidad)+parametros[3])
        var fila = tabla.insertRow(-1)
        for(i=0;i<parametros.length;i++){
            var celda = fila.insertCell(-1)
            celda.innerHTML=parametros[i]
        }
    }*/

    //METODO 3
    let parametros = [Producto, Cantidad, Precio, resultadoIva, resultadoTotal]
    if (!Producto || Precio<=0 || Cantidad<=0){
        alert("Introduce los elementos bien para poder calcular el presupuesto")
    }else{
        var resultadoIva = 0, resultadoTotal = 0
        let tabla = document.getElementById('thbody')
        let fila = document.createElement('tr')
        let celda = ['celda1','celda2','celda3','celda4','celda5']
        let texto = ['texto1','texto2','texto3','texto4','texto5']
        parametros[3] = Precio*0.21
        parametros[4] = ((Precio*Cantidad)+parametros[3])
        for(i=0;i<parametros.length;i++){
            celda[i] = document.createElement('td')
            texto[i] = document.createTextNode(parametros[i])
            celda[i].appendChild(texto[i])
            fila.appendChild(celda[i])
        }
        tabla.appendChild(fila)
    }
}