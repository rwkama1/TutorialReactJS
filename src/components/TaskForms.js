import  React,{Component } from "react";

class TaskForm extends Component
{
    state=
    {
        title:'',
        description:''
    }
    onSubmit=(event)=>
    {
        this.props.addTask(this.state.title,this.state.description);
// console.log(this.state)
event.preventDefault();
//Cambia el comportamiento por defecto del formulario
//no refresca la pagina cuando yo apreto el boton Enviar
    }
    onChange= e=>
    {
        // console.log(e.target.name,e.target.value);
        this.setState(
           {
               [e.target.name]:e.target.value
           }

            
        )
        // console.log(e.target.value);
    }
    render()
    {
      
      return   <form onSubmit={this.onSubmit} >
            <input type="text" placeholder='Write a Task' 
            name='title'
            onChange={this.onChange} 
            value={this.state.title}/>
            <br/>
            <br/>
            <textarea placeholder='Write a Description' 
            name='description'
             onChange={this.onChange}
              value={this.state.description}></textarea>
            <br/>
            <input type="submit"/>
        </form>
    }
}
export default TaskForm