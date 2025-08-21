import React, { useState } from "react";

function LoginButtonCondition(){
const [isLogged, SetisLogged] = useState(false);
const handleLKogged = () =>{
        SetisLogged(!isLogged)
}
    return(
        <div style={{width:'100px', margin:'10px auto'}}>
            <h2>Login  Scenario</h2>
            {isLogged
            ?
            (<button onClick={handleLKogged}>
                Logout
            </button>)
            :
            (
                <button onClick={handleLKogged}>
                    Login
                </button>
            )}
        </div>
    )
}

export default LoginButtonCondition;