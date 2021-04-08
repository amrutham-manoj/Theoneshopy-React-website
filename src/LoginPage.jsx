import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export class LoginPage extends Component {
    render() {
        return (
            <div>
                 {/* <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}

<div>
           EMAIL :         <input type="text" placeholder="Your email" required></input> <br></br>
          SUBJECT : <input type="text" placeholder="Your email" required></input> <br></br>
                    <button  className="btn btn-dark "type="submit" onClick={()=>alert("YOUR RESPONSE SUBMITTED")}>SEND MAIL</button>
                </div>
                
            </div>
        )
    }
}

export default LoginPage;
