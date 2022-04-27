import React from "react";
import "./App.css";


import { useReducer } from "react";



const initialState = {
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Accepted: false
};
function reducer(state, action){
    //console.log(action);
        return {...state, [action.input]: action.value};
    
}


function validateState(state){

    return state.Password === state.ConfirmPassword
    && state.Accepted && state.Password.lenght > 4;

   
    
}

function App(){
    const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(state);

    function handleClick(e){
        e.preventDefault();
        
     if (state.Password !== state.ConfirmPassword){return alert('enter the same password');}
     else if (state.UserName === '' || state.Password === '' || state.ConfirmPassword === '' || state.Email === '')
        {return alert( `Please, fill up the information`);}

        alert (`your registration is successful`);
    }

    function onChange(e){
        const {name, value, checked} = e.target;
        const action = {
            input : name,
            value : name === "Accepted" ? checked : value,
        }
        dispatch(action);

    }


    return (
        <div className = "App">
            <div className="RegisterForm">
                <h2> Welcome! to the Registration Process </h2>
                    <form className="Form">
                     <input
                        className="TextInput"
                        type= "text"
                        name = "UserName"
                        placeholder = "UserName"
                        onChange={onChange}
                    />  

                     <input
                        className="TextInput"
                        type= "Email"
                        name = "Email"
                        placeholder = "Email"
                        onChange={onChange}
                    />   

                     <input
                        className="TextInput"
                        type= "Password"
                        name = "Password"
                        placeholder = "Password"
                        onChange={onChange}
                    />   

                     <input
                        className="TextInput"
                        type= "Password"
                        name = "ConfirmPassword"
                        placeholder = "Confirm Password"
                        onChange={onChange}
                    />    

                    <label className="label">
                        <input
                            type = "checkbox"
                            className="checkbox"
                            name="Accepted"
                            onChange={onChange}
                        />

                        Accept Terms of Use !
                    </label>

                    <button 
                    className="btn"
                        onClick={handleClick}>

                            Register
                    </button>

                    </form>

            </div>
         

         </div>

    );
}

export default App;