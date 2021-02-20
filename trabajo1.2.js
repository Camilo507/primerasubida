const {cursos, imprimir} = require('./trabajo1.2.js');
const fs = require('fs');
const yargs = require('yargs');
var numeral = require('numeral');

const opciones = {
    'id':{
        alias:'i',
        describe:'Id del curso a inscribir',
        demand: true
    },
    'nombre':{
        alias:'n',
        describe:'Nombre del interesado',
        demand: true
    },
    'cedula':{
        alias:'c',
        describe:'Cedula del interesado',
        demand: true
    }
}

const argv = yargs.command('inscribir', 'Realizar inscripcion a un curso', opciones).argv

if(argv._.find(comando => comando == 'inscribir')){
    let nombre = argv.nombre;
    let cedula = argv.cedula;
    let id = argv.Id;
    realizarInscripcion(id, nombre, cedula);
}else{
    imprimirCursos(cursos);
}

function imprimirCurso(curso){
    console.log(`Curso: ${curso.nombre}`);
    console.log(`Id: ${curso.Id}`);
    console.log(`Duracion: ${curso.Duracion} dias`);
    console.log(`Valor: ${numeral(curso.Valor).format('$0,0.00')}`);
}

function matricular() {
    texto = 'El estudiante: ' + argv.Nombre + '\nCon cedula: ' + argv.Cedula +
    '\nSe matriculo en el curso: ' + matricula[argv.idCurso-1].curso + '\nCon una ' + matricula[argv.idCurso-1].intencidad +
    '\nTiene un ' + matricula[argv.idCurso-1].valor;
    fs.writeFile('datos.txt', texto, (err)=>{
        if(err) throw (err);
        console.log('\nSe ha matriculado con exito' + '\nlos datos se han guardado en el archivo datos.txt\n')
    })
}

if (argv.idCurso == undefined) {
    listar();
}else
if (argv.idCurso != 1 && argv.idCurso != 2 && argv.idCurso != 3){
    console.log('El id del grupo no coincide con uno existente grupo.');
    listar();
}else{
    matricular();
}