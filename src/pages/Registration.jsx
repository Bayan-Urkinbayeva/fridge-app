import React from 'react'
import { Link } from "react-router-dom";
const Registration = () => {
    return ( 
        <div className='d-flex align-items-center text-center h-100'>
            <main class="form-signin m-auto w-100" style={{maxWidth: "330px"}}>
                <form >
                    <h1 class="h3 mb-3 fw-normal">Grab it</h1>
                    <div class="form-floating">
                    <input type="email" class="form-control mt-2" id="floatingInput" placeholder="Фамилия"/>
                    <label for="floatingInput">Фамилия</label>
                    </div>
                    <div class="form-floating">
                    <input type="email" class="form-control mt-2" id="floatingInput" placeholder="Имя"/>
                    <label for="floatingInput">Имя</label>
                    </div>
                    <div class="form-floating">
                    <input type="email" class="form-control mt-2" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Почта</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control mt-2" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Пароль</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary my-3" type="submit">Зарегистрироваться</button>

                </form>
            </main>
        </div>
     );
}
 
export default Registration;