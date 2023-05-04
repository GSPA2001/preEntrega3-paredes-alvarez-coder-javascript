console.log("Holaa 👋🏼, esta 🥁🥁🥁 es la tercera pre-entrega");
//El boton calcular presupuesto me permite, eso mismo
document.addEventListener('DOMContentLoaded', function() {
    class Plato {
      constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }
    }
  
    
    const listaPlatos = [
      new Plato('Ceviche', 2200),
      new Plato('Pollo Dorado', 950),
      new Plato('Lomo Saltado', 1950),
      new Plato('Chaufa', 1650),
      new Plato('Rabas', 2600),
      new Plato('Tamales', 600),
      new Plato('Cabrito', 1900),
      new Plato('Jalea de mariscos', 3150)
    ];
  
    
    function crearListaPlatos() {
      const listaPlatosEl = document.querySelector('#lista-platos');
      listaPlatos.forEach(plato => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = plato.nombre;
        checkbox.value = plato.precio;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(`${plato.nombre} ($${plato.precio})`));
        listaPlatosEl.appendChild(li);
      });
    }
  
    
    function obtenerPlatosSeleccionados() {
      const platosSeleccionados = [];
      const checkboxes = document.querySelectorAll('#lista-platos input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          platosSeleccionados.push(new Plato(checkbox.name, parseFloat(checkbox.value)));
        }
      });
      return platosSeleccionados;
    }
  
    
    function mostrarPlatosSeleccionados(platos) {
      const platosSeleccionadosContainer = document.querySelector('#platos-seleccionados');
      platosSeleccionadosContainer.innerHTML = '';
      platos.forEach(plato => {
        const platoSeleccionado = document.createElement('div');
        platoSeleccionado.innerHTML = `<p>${plato.nombre}: $${plato.precio.toFixed(2)}</p>`;
        platosSeleccionadosContainer.appendChild(platoSeleccionado);
      });
    }
  
    
    function calcularPresupuesto() {
      const platosSeleccionados = obtenerPlatosSeleccionados();
      let presupuestoTotal = 0;
      platosSeleccionados.forEach(plato => {
        presupuestoTotal += plato.precio;
      });
      const resultadoPresupuestoEl = document.querySelector('#resultado-presupuesto');
      resultadoPresupuestoEl.textContent = `$${presupuestoTotal.toFixed(2)}`;
      mostrarPlatosSeleccionados(platosSeleccionados);
    }
  
    
    crearListaPlatos();
  
    
    const btnCalcularPresupuestoEl = document.querySelector('#btn-calcular-presupuesto');
    btnCalcularPresupuestoEl.addEventListener('click', calcularPresupuesto);

    
    const btnCerrarCuadroFlotanteEl = document.querySelector('#btn-cerrar-cuadro-flotante');
    btnCerrarCuadroFlotanteEl.addEventListener('click', () => {
     const cuadroFlotanteEl = document.querySelector('#cuadro-flotante');
     cuadroFlotanteEl.classList.add('oculto');
    });

    
    const btnPresupuestoEl = document.querySelector('#btn-presupuesto');
    btnPresupuestoEl.addEventListener('click', () => {
    const cuadroFlotanteEl = document.querySelector('#cuadro-flotante');
    cuadroFlotanteEl.classList.remove('oculto');
    });
});