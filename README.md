# REACT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## INSTALAR

npx create-react-app nombrereact
cd nombrereact
npm start

### ESTRUCTURA


Readme.md
Package.json
.gitignore
src
public
node_modules

react-scripts----------------> Describe los modulos que podemos ultilizar como babel
react y react-dom ---------------> Si remplazamos react-dom por otra cosa podemos
                                   realizar otras apliaciones como aplicaciones nativas

src-------------------------------> Contiene el codigo de la aplicacion de react

public --------------------------> Da basicamente el template  
                                   y el archivo que nos va a permitir montar la app de real (index.html)

En REACT todo lo generado no es con HTML, sino que se genera con Javascript

<div id="root"></div>-------------------------> Contiene toda la aplicacion

### COMPONENTE

Es una manera de dividir lo grande en pequenias partes

TENEMOS EL COMPONENTE PERO ESCRITO DE VARIAS FORMAS

// const App=()=> <div>This is my component: <HelloWorld/></div>

class App extends React.Component
{
render()
{
 return  <div>This is my component: <HelloWorld/></div> 
}

}
// function App() {
//   return (
//     <div>
//        This is my component: <HelloWorld/>
//     </div>
//   );
// }

### PROPS

Es un objeto que recibe un texto por ejemplo

class HelloWorld extends React.Component
{
  
render()
{
  console.log(this.props);//Primero llama al hello world despues ejecuto  text: hi
  //Luego al text:Hola mundo
  //Luego al text: Hello World
 return (
 <div id="hello">
   <h3>{this.props.subtitule}</h3>
   {this.props.text}
   </div> 
 )
}

}

// {
//   text="Hello"
// }
class App extends React.Component
{
// render()
// {
//  return  <div>This is my component: <HelloWorld text="Hello"/> <HelloWorld/> <HelloWorld/></div> 
// } //ESCRIBE  EL HELLO WORLD EN EL QUE YO  MANDO EL PROPS
render()
{
 return  <div>This is my component:
 <HelloWorld text="Hi" subtitule="Subtitulo"/> 
 <HelloWorld text="Hola mundo" subtitule="Subtitulo2"/>
 <HelloWorld text="Hello World" subtitule="Subtitulo3"/></div> 
}

}

Estamos pasando datos  a un solo componente, y cada uno tiene distintos props
Los props son datos que recibe un componente a travez de un objeto

### STATE

El STATE hace que cada componente tenga su propio estado


class HelloWorld extends React.Component
{
  constructor(props) {
    super(props);

    this.state=//Almacena datos del componente HelloWorld
    {
      show: true
  
    }

    // this.delta = this.delta.bind(this);
}
 
render()
{
  console.log(this.props);//Primero llama al hello world despues ejecuto  text: hi
  //Luego al text:Hola mundo
  //Luego al text: Hello World
  if(this.state.show)//Llamo al state
  {
 return (
 <div id="hello">
   <h3>{this.props.subtitule}</h3>
   {this.props.text}
   //<button onClick={this.cambiarstate}>Cambiar estado</button>
   {/* //Cada vez que hago click en el boton ejecuto una funcion */}
   </div> 
 )
//  onClick={()=>this.setState({show:false})}
//Con este evento cambio el estado del componente
  }
  else
  {
    return <h1>There are not elements
      <button onClick={this.cambiarstate}>
        Cambiar Estado
      </button>
    </h1>
  }
}
cambiarstate=()=> 
{
  this.setState({show:!this.state.show})//SI ESTA EN TRUE SE CAMBIA A FALSE
  //SI ESTA TRUE SE CAMBIA A FALSE
}
//ACLARACION: CUANDO TRABAJAMOS CON REACT  ES MEJOR USAR FUNCIONES FLECHADAS
//YA QUE SI SE ULTILIZA "FUNCTION" ES MAS PROPENSO A QUE SALTEN  ERRORES

//  cambiarstate()//El button llama esta funcion
// {
// this.setState({show:false})
// }
// async unafuncion()//Se pueden llamar funciones asincronicas desde un boton
// {
// alert("Welcome")
// }

}
Si show es falso retorno el H1, y si es true retorno  el div, ESTOY CAMBIANDO EL STATE DEL COMPONENTE

## PROPTYPES

A medida que tu aplicación crece, 
puedes capturar una gran cantidad de errores con verificación de tipos.
Para algunas aplicaciones,
puedes usar extensiones de Javascript como Flow o TypeScript para verificar los tipos en tu aplicación.
Pero incluso si no usas alguno de ellos,
React tiene algunas habilidades de verificación de tipos incorporadas.
Para usar verificación de tipos en las props de un componente, 
puedes asignar la propiedad especial PropTypes 
