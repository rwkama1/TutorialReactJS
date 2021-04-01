import  React,{Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
class Tasks extends Component
{
    render()
    {
      
        return this.props.tasks.map(
            task=>
         <Task 
         task={task}
         key={task.id} 
         deleteTask={this.props.deleteTask}
         checkDone={this.props.checkDone}
         />
            //ESTE COMPONENTE LO QUE HACE ES RECORRER CADA UNAS DE LAS TAREAS
            //Y POR CADA RECORRIDO GENERO UN UNICO COMPONENTE TASK
         );
    }
  
}
Tasks.propTypes=
{
    tasks:PropTypes.array.isRequired
}
// A medida que tu aplicación crece,
//  puedes capturar una gran cantidad de errores con verificación de tipos.
//   Para algunas aplicaciones, 
//   puedes usar extensiones de Javascript como Flow o TypeScript para verificar 
//   los tipos en tu aplicación. Pero incluso si no usas alguno de ellos, 
//   React tiene algunas habilidades de verificación de tipos incorporadas.
//    Para usar verificación de tipos en las props de un componente,
//     puedes asignar la propiedad especial PropTypes
export default Tasks;