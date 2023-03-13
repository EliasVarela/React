import "../Button/Buttons.css"


const Button =(props)=>{
    console.log(props);
    return <button onClick={props.callback} className="Buttons">{props.label}</button>
            
}
export default Button