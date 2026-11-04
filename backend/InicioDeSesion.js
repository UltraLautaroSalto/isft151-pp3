import {MostrarSeccion as MSeccion} from './Secciones.js'
import {Sesion_Actual} from './base_de_datos.js'

const IniciarSesion_Usuario = document.getElementById("IniciarSesion");

function MostrarInicioSesionUsuario(){
    if(Sesion_Actual.Usuario_Actual === null){
        MSeccion(IniciarSesion_Usuario);
    }else{
        switch(Sesion_Actual.Usuario_Actual.rol) {
            case "Estudiante":
                MSeccion(Sesion_Estudiante);
            break;

            case "Docente":
                MSeccion(Sesion_Docente);
            break;

            case "Administrador":
                MSeccion(Sesion_Administrador);
            break;

            default:
                console.log("Rol no Reconocido");
            break;
        }
    }
};

export {MostrarInicioSesionUsuario}