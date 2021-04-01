import  React,{Component } from "react";
import  "./Task.css";
import PropTypes from "prop-types";

class Task extends Component
 //ESTA TASK LO QUE HACE ES TOMAR CADA UNO DE LOS DATOS DE TASKS Y
    //PRESENTARLOS EN PANTALLA
{
    StyleCompleted()
    {
        return {
            fontSize:'20px',
            color:this.props.task.done?'grey':'black',
            textDecoration:this.props.task.done?'line-through':'none'
        }
    }

   
    render()
    {
        const {task}=this.props;
        // const redColor={background:'red'};//SE PUEDE ESTILIZAR DE ESTA MANERA
        //LA FUNCION IMPRIMIRTASK LO PASAMOS A UN COMPONENTE APARTE
        return   <div style={this.StyleCompleted()} > 
        {/* SIEMPRE ES MEJOR USAR CLASSNAME QUE CLASS */}
        <h1>{task.title}</h1>
        <h2>{task.description}</h2>
        <h3>{task.done}</h3>
        <h4>{task.id}</h4>
        <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
        {/* NOS VA A SERVIR PARA CAMBIAR EL ESTADO DE LA TASKS */}
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>
            {/* LO QUE HAGO EN EL BOTON ES PASAR LA PROPIEDAD DELETETASK QUE VIENE DESDE APPJ 
            QUE PASO POR TASKS, E INDICO EL ID DEL OBJETO QUE QUIERO ELIMINAR CON LA PROPIEDAD
            BIND */}
            X
        </button>
        <div>
          *****************************************************************
        </div>
        <div>
        
        </div>
        </div>
    }
   

}

Task.propTypes=
{
    task:PropTypes.object.isRequired
}
const btnDelete=//REPRESENTA UN OBJETO JAVASCRIPT PARA ESTILIZAR UN BOTON, SE PUEDE HACER DE ESTA MANERA
//O SE PUEDE USAR UN ARCHIVO APARTE COMO TASK.CSS
{
    fontSize:'18px',
    background:'#ea2027',
    color:'#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer'

}
export default Task;