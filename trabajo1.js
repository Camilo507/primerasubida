let cursos = [{
        id:"1",
        nombre:"Matematicas",
        duracion: '5',
        precio:'50000'
    },
    {
        id:"2",
        nombre:"Aleman",
        duracion: '50',
        precio:'1000000'
    },
    {
        id:"3",
        nombre:"Programacion",
        duracion: '30',
        precio:'60000'
    }
];

	for(let i=0;i<cursos.length;i++){
		setTimeout(()=>{imprimir(i)}, (2000*(i*1)));
	}
	
	let imprimir = (x) => {	
		console.log(' el curso se llama: ' + cursos[x].nombre + ' El id es: ' + cursos[x].id + ' con una duracion de: '
 +cursos[x].duracion + ' su valor es: ' + cursos[x].precio);
	
};

