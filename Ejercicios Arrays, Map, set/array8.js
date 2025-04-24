const proyectos = [
    new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
  ];
  const nuevoProyecto = new Map([["nombre", "Proyecto C"], ["presupuesto", 6000]]);
  proyectos.push(nuevoProyecto);
  console.log(proyectos);
  