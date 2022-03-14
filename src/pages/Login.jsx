import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {
    return ( 
        <div className='d-flex align-items-center text-center h-100'>
            <main class="form-signin m-auto w-100" style={{maxWidth: "330px"}}>
                <form >
                    <h1 class="h3 mb-3 fw-normal">Grab it</h1>
                    <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Почта</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control mt-3" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Пароль</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary my-3" type="submit">Войти</button>
                    
                    <Link to="/" className="mt-5 text-primary">Забыли пароль?</Link>

                </form>
            </main>
        </div>
     );
}
 
export default Login;