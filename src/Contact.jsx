import React, { Component } from 'react'

export class Contact extends Component {

    render() {
        return (
            <div>
                <div>
           EMAIL :         <input type="text" placeholder="Your email" required></input> <br></br>
          SUBJECT : <input type="text" placeholder="Your email" required></input> <br></br>
                    <button  className="btn btn-dark "type="submit" onClick={()=>alert("YOUR RESPONSE SUBMITTED")}>SEND MAIL</button>
                </div>
              <h3>Further any quieries ....please contact us ...
                  <address>
                      Street : ABC , <br></br>
                      AREA : MUMBAI , <br></br>
                      BUILDING : 2-3-65, 105-C <br></br>
                      STATE : MAHARASTRA <br></br>
                      COUNTRY : INDIA <br></br>

                  </address>
                  </h3> 
            </div>
        )
    }
}

export default Contact
