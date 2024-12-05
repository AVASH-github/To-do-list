import styles from './Button.module.css'
import {useState} from 'react';
function Button (){

    const [text,setText]= useState('Click Me');
    
return (
    <button  onClick={()=> setText('Clicked')} className={styles.button}> {text}</button>
);

}
export default Button;