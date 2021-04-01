import React , {Component} from 'react';

export default class Programs extends Component
{
state=
{
programs:[]
}
  //METODO DE CICLO DE VIDA DEL COMPONENTE DE REACT

  //Este metodo se ejecuta intantaneamente cuando se carga el componente
  
 async componentDidMount()
  {
    
   await this.listprogams();
  }
    render()
    {
      
    return <div>
        <h1>
          Programs
          {
            this.state.programs.map
            (
              p=>{
              return <div key={p._name}>
                 <h1>{p._name}</h1>
                 <p>{p._producer}</p>
              </div>
              }
            )
          }
        </h1>
      </div>
    }
  listprogams=async ()=>
  {
    
    const url='https://apin-extjs-radiotrasmitter.vercel.app/api/program/program'
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const listp=await fetch(url, requestOptions);
    const response=await listp.json();
    const result=await response;
    this.setState({programs:result})
  }
}
