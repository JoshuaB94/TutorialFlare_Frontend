import './FormInput.css';

const FormInput = (props) => {
    return ( 
        <div className="formInput">
            <input placeholder={props.placeholder} onChange={e=>props.setValues(e.target.value)} />
        </div>
     );
}
 
export default FormInput;