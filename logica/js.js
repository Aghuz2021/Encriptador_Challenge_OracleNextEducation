const encriptar = () => {
    if (!validarMensaje()) {
      return;
    }
    const textoOriginal = capturarTexarea();
    const textoEncriptado = encriptarTexto(textoOriginal);
    mostrarMensajeEncriptado(textoEncriptado);
  };
  
  const validarMensaje = () => {
    const capturarTexto = document.getElementById("textArea").value;
    if (capturarTexto.trim() === "") {
      alert("Ingrese un texto");
      return false;
    }
    return true;
  };
  
  const capturarTexarea = () => {
    const capturarTexto = document.getElementById("textArea").value.toLowerCase();
    document.getElementById("textArea").value = "";
    return capturarTexto;
  };
  
  const encriptarTexto = (texto) => {
    const reemplazos = [
      { patron: /a/g, reemplazo: "a#2" },
      { patron: /b/g, reemplazo: "b#3" },
      { patron: /c/g, reemplazo: "c#4" },
      { patron: /d/g, reemplazo: "d#5" },
      { patron: /e/g, reemplazo: "e#6" },
      { patron: /f/g, reemplazo: "f#7" },
      { patron: /g/g, reemplazo: "g#8" },
      { patron: /h/g, reemplazo: "hito" },
    ];
    for (const reemplazo of reemplazos) {
      texto = texto.replace(reemplazo.patron, reemplazo.reemplazo);
    }
    return texto;
  };
  
  const desencriptarTexto = (texto) => {
    const reemplazos = [
      { patron: /a#2/g, reemplazo: "a" },
      { patron: /b#3/g, reemplazo: "b" },
      { patron: /c#4/g, reemplazo: "c" },
      { patron: /d#5/g, reemplazo: "d" },
      { patron: /e#6/g, reemplazo: "e" },
      { patron: /f#7/g, reemplazo: "f" },
      { patron: /g#8/g, reemplazo: "g" },
      { patron: /hito/g, reemplazo: "h" },
    ];
    for (const reemplazo of reemplazos) {
      texto = texto.replace(reemplazo.patron, reemplazo.reemplazo);
    }
    return texto;
  };
  
  const mostrarMensajeEncriptado = (textoEncriptado) => {
    const imagen = document.getElementById("logo");
    imagen.src = "../img/1f512.png";
    const tituloAside = document.getElementById("tituloAside");
    tituloAside.textContent = "Mensaje encriptado con éxito!";
    tituloAside.style.color = "#3fc93f";
    tituloAside.style.fontSize = "22px";
    copiarMsj.style.display = "block";
    const pAside = document.getElementById("p_aside");
    pAside.style.overflowY = "scroll";
    pAside.textContent = textoEncriptado;
  };
  
  const mostrarMensajedesencriptado = (textoEncriptado) => {
    const imagen = document.getElementById("logo");
    imagen.src = "../img/1f513.png";
    const tituloAside = document.getElementById("tituloAside");
    tituloAside.textContent = "¡Alerta! Mensaje desencriptado con éxito!";
    tituloAside.style.fontSize = "22px";
    tituloAside.style.color = "#ff3021";
    copiarMsj.style.display = "block";
    const pAside = document.getElementById("p_aside");
    pAside.style.overflowY = "scroll";
    pAside.textContent = textoEncriptado;
  };
  
  const desencriptar = () => {
    if (!validarMensaje()) {
      return;
    }
    const textoOriginal = capturarTexarea();
    const textoEncriptado = desencriptarTexto(textoOriginal);
    mostrarMensajedesencriptado(textoEncriptado);
  };
  

  const copiarTextoEncriptado = () => {
    const textoEncriptado = document.getElementById("p_aside").textContent;
    console.log(textoEncriptado);
    const input = document.createElement("input");
    input.value = textoEncriptado;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    const div = document.getElementById("alerta");
    div.style.display = "block";
    div.style.color = "rgb(105 219 105)";
    div.style.width = "100%";
    div.textContent = "Mensaje copiado";
    div.style.background = "#d3ffd3";
    div.style.border = "5px";
    div.style.padding = "5px";
    div.style.marginTop = "13px";
    div.style.textAlign = "center"
    document.body.removeChild(input);
  
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      div.style.display = "none";
    }, 1000);
  };
