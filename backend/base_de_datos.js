let Cuentas_Registradas = [
    {id: 1, nombre: "Jorge", apellido: "Torres", edad: "16", genero: "Masculino", codigo_de_ingreso: "1234", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {id: 2, nombre: "Maria", apellido: "Gutierrez", edad: "15", genero: "Femenino", codigo_de_ingreso: "4321", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {id: 3, nombre: "Alex", apellido: "Santos", edad: "17", genero: "Sin Identificar", codigo_de_ingreso: "9999", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},

    {id: 4,nombre: "Miguel", apellido: "Vanze", edad:"34", genero: "Masculino", codigo_de_ingreso: "VanceLastDance9876", rol: "Docente"},
    {id: 5,nombre: "Daniela", apellido: "Robinson", edad:"45", genero: "Femenino", codigo_de_ingreso: "CJMYLOVE6789", rol: "Docente"},
    {id: 6,nombre: "Niko", apellido: "Petrovich", edad:"54", genero:"Masculino", codigo_de_ingreso: "STIWTDFLTITVWLF", rol: "Docente"},

    {id: 7,nombre: "Ralph", apellido: "Philips", edad:"53", genero: "Masculino", codigo_de_ingreso: "AM128894", rol: "Administrador"}
];

let Clases_Actuales = [
    {id: 1, Materia: "Algoritmo y Estructura de Datos 1", Año: "1°", Docente_Asignado: "Lance", Estudiantes: ["Jorge","Maria"]},
    {id: 2, Materia: "Practicar Profecionalizantes 3", Año: "3°", Docente_Asignado: "Denise", Estudiantes: ["Maria", "Alex"]},
    {id: 3, Materia: "Matematicas 2", Año: "2°", Docente_Asignado: "Niko", Estudiantes: ["Alex", "Jorge"]} 
];

let Apelaciones_Pendientes = [{id: 1, nombre: "Pepito",apellido: "Alvarez",Clase_Seleccionada: "Algoritmo y Estructura de Datos 1",Razon_Apelacion: "Prueba"}];

export const Sesion_Actual = {Usuario_Actual: null};
export {Cuentas_Registradas, Clases_Actuales, Apelaciones_Pendientes}