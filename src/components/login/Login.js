import React from 'react'
// Importing the Bootstrap 5 CSS
import 'bootstrap/dist/css/bootstrap.min.css';


export const Login = () => {
  return (
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card bg-white border-0">
              <div class="card-body p-4 ">
                <form class="mb-3 mt-md-4">
                  <h2 class="mb-3 text-center">Iniciar Sesion</h2>
                  <div class="mb-3">
                    <label for="email" class="form-label ">Correo electronico</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"></input>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label ">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="*******"></input>
                  </div>
                  <p class="small"><a class="text-primary" href="forget-password.html">Olvidaste tu contraseña?</a></p>
                  <div class="d-grid">
                    <button class="btn btn-outline-dark" type="submit">Ingresar</button>
                  </div>
                </form>
                <div>
                  <p class="mb-0  text-center">No tienes cuenta? <a href="signup.html" class="text-primary fw-bold">Crea 
                      una</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
  )
}
