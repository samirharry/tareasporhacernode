
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado  pendiente la tarea'
}

const estConsulta ={
    demand: true,
    alias: 'c',
    default: 'any',
    desc: 'estado de las tareas a consultar'
}

const argv=require('yargs')
            .command('crear','Crea una nueva tarea por hacer',{
                descripcion: descripcion
            })
            .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion,
                completado: completado
            })
            .command('borrar','Borra cualquier tarea',{
                descripcion
            })
            .command('listar','Lista las tareas por hacer dependiendo de la peticion',{
                estConsulta
            })
            .help()
            .argv;


module.exports={
    argv
}