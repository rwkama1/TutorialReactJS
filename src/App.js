
//************************************************** */

//RESUMEN DE LO BASICO DE REACT


// class HelloWorld extends React.Component
// {
//   constructor(props) {
//     super(props);

//     this.state=//Almacena datos del componente HelloWorld
//     {
//       show: true
  
//     }

//     // this.delta = this.delta.bind(this);
// }
 
// render()//SE ENCARGA DE MOSTRAR LA INTERFAZ EN EL NAVEGADOR
//CADA VEZ QUE CARGA RETORNA SIEMPRE UN ELEMENTO
// {
//   console.log(this.props);//Primero llama al hello world despues ejecuto  text: hi
//   //Luego al text:Hola mundo
//   //Luego al text: Hello World
//   if(this.state.show)//Llamo al state
//   {
//  return (
//  <div id="hello">
//    <h3>{this.props.subtitule}</h3>
//    {this.props.text}
//    <button onClick={this.cambiarstate}>Cambiar estado</button>
//    {/* //Cada vez que hago click en el boton ejecuto una funcion */}
//    </div> 
//  )
// //  onClick={()=>this.setState({show:false})}
// //Con este evento cambio el estado del componente
//   }
//   else
//   {
//     return <h1>There are not elements
//       <button onClick={this.cambiarstate}>
//         Cambiar Estado
//       </button>
//     </h1>
//   }
// }
// cambiarstate=()=> 
// {
//   this.setState({show:!this.state.show})//SI ESTA EN TRUE SE CAMBIA A FALSE
//   //SI ESTA TRUE SE CAMBIA A FALSE
// }
// //ACLARACION: CUANDO TRABAJAMOS CON REACT  ES MEJOR USAR FUNCIONES FLECHADAS
// //YA QUE SI SE ULTILIZA "FUNCTION" ES MAS PROPENSO A QUE SALTEN  ERRORES

// //  cambiarstate()//El button llama esta funcion
// // {
// // this.setState({show:false})
// // }
// // async unafuncion()//Se pueden llamar funciones asincronicas desde un boton
// // {
// // alert("Welcome")
// // }

// }
// // PROPS
// // {
// //   text="Hello"
// // }
// class App extends React.Component
// {
// // render()
// // {
// //  return  <div>This is my component: <HelloWorld text="Hello"/> <HelloWorld/> <HelloWorld/></div> 
// // } //ESCRIBE  EL HELLO WORLD EN EL QUE YO  MANDO EL PROPS
// render()
// {
//  return  <div>This is my component:
//  <HelloWorld text="Hi" subtitule="Subtitulo"/> 
//  <HelloWorld text="Hola mundo" subtitule="Subtitulo2"/>
//  <HelloWorld text="Hello World" subtitule="Subtitulo3"/></div> 
// }

// }
// //TENEMOS EL COMPONENTE PERO ESCRITO DE VARIAS FORMAS


// // const App=()=> <div>This is my component: <HelloWorld/></div> 


// // function App() {
// //   return (
// //     <div>
// //        This is my component: <HelloWorld/>
// //     </div>
// //   );
// // }
//     En REACT no se ultilizan los for como siempre se usa, sino que se usan unas variaciones de for,
// esto es porque react tiene un enfoque de programacion funcional, permite iterar un arreglo y devolver un
// nuevo arreglo
//************************************************************************* */

import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router,Route ,Link } from "react-router-dom";
//Components
import tasks from './sample/tasks.json';
import  Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForms";
import Programs from './components/Programs';


class App extends Component
{
  state=
  {
    tasks:tasks//GUARDO mis tasks en el STATE
  }
  addTask=(title,description)=>
  {
      const newTask=
      {
        title:title,
        description:description,
        id:this.state.tasks.length
      }
// console.log(newTask);
        this.setState(
    {
      tasks:[...this.state.tasks,newTask]//Obtengo todas las tareas del STATE y agrego una nueva

    }
        )
  }
  deleteTask=(id)=>
  {
  const newTasks=  this.state.tasks.filter(
   //El método filter() crea un nuevo array
   // con todos los elementos que cumplan la condición 
   //implementada por la función dada.
      task=>
      task.id!==id);
      this.setState(
        {
          tasks:newTasks
    
        }
      )
  }
  checkDone=(id)=>
  {
const newTasks= this.state.tasks.map
// El método map() crea un nuevo array con los resultados de la llamada 
// a la función indicada aplicados a cada uno de sus elementos.
 (
   task=>
   {
     if(task.id===id)
     {
       task.done=!task.done
     }
     return task;
   }

 )
 this.setState(
  {
    tasks:newTasks

  }
)
  }
  render()
  {
   
     return <div>
       <Router>
         <Link to="/">
           {/* el "to" seria como el href para dirigir a otra ruta */}
        Home
         </Link>
         <br/>
        
         <Link to="/programs">
        Programs
         </Link>
         <br/>
         <br/>
       {/* Nos permite crear una ruta en nuestro navegador, en este CASO
         estoy renderizando una funcion que contiene las TASKS */}
        <Route exact path='/' render={this.renderizar}>
          {/* Exact: Cuando se indica exact en el Route signfica que las 
          siguientes ROUTES se van a renderizar al componente de  /programs
          sin mostrar los componentes TASKS,
          Sin el exact nuestra ruta "/" y '/programs' van aparecer en
          la misma pagina */}
       

        </Route>
      <Route path='/programs' component={Programs}> 

      </Route>
       </Router>    
      </div>
  }
  renderizar=()=>
  {

   return <div> <TaskForm addTask={this.addTask}/>
    {/* //CONECTO TASKFORM CON APP PARA PASARLE DATOS Y LA FUNCION ADDTASK */}
     <Tasks tasks={this.state.tasks} 
     deleteTask={this.deleteTask}
     checkDone={this.checkDone}>
     </Tasks>
    
     </div>
     {/* GUARDO LOS DATOS DE MI STATE EN EL COMPONENTE TASKS */}
  }
 
  //key: Es una propiedad de REACT y cuando iteramos con map o otra cosa sin el key,
  //nos va a saltar una advertencia,
  //SIEMPRE SE  DA UN VALOR UNICO QUE NO SE REPITE, EN ESTE CASO EL ID del tasks
  
    /* {
30/2 EJECUTA CODIGO DE JAVASCRIPT
    } */
    /* {this.state.tasks.map(e=><h1>{e.title}</h1>)} */
    /* RECORRO TODAS MIS TASK E IMPRIMO LOS TITLES */
}
export default App;
