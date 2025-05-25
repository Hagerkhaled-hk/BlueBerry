import React from "react";
import "./Contact.css"
import "bootstrap/dist/css/bootstrap.min.css"
import DynamicIndex from "../../common/DynamicIndex/DynamicIndex"

export default function Contact()
{
    return (
<div className="Contact">
    <DynamicIndex tilte={'Contact'} page={['Contact']}/>
    
    <main>
<div className="input_container">
<div className="inputs">
<div>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your first name"/>
</div>
<div>
  <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter your last name"/>
</div>
<div>
  <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Enter your Email"/>
</div>
<div>
  <input type="email" className="form-control" id="exampleFormControlInput4" placeholder="Enter your phone number"/>
</div>
<div>
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Please leave your comment here" rows="3"></textarea>
<div className="btn_conteiner" >
  <button className="btn"> submit</button>
  </div>
</div>
    
</div>
</div>
<div className="location">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3522999284583!2d31.49415247446136!3d30.595824774650588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sen!2seg!4v1747842438423!5m2!1sen!2seg" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</main>
</div>

    )
}
 
