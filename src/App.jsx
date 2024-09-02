import { useEffect, useState } from "react";

function App(){
  const [type,setType]=useState("password");
  // validation states
  const[lowerValidated,setLowerValidated]=useState(false);
  const[upperValidated,setUpperValidated]=useState(false);
  const[numberValidated,setNumberValidated]=useState(false);
  const[specialValidated,setSpecialValidated]=useState(false);
  const[lengthValidated,setLengthValidated] = useState(false);

  function handleChange(value){
    //regular expression
    // RegExp to create regular expression
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const length = new RegExp('(?=.{8,})');// length should be 8
    
    // test is used to test or compare while it is true with the lower and value
    if(lower.test(value)){
      setLowerValidated(true)
    }
    else{
      setLowerValidated(false)
    }
    //upper
    if(upper.test(value)){
      setUpperValidated(true)
    }
    else{
      setUpperValidated(false)
    }
    //number
    if(number.test(value)){
      setNumberValidated(true)
    }
    else{
      setNumberValidated(false)
    }
    //special
    if(special.test(value)){
      setSpecialValidated(true)
    }
    else{
      setSpecialValidated(false)
    }
    // length
    if(length.test(value)){
      setLengthValidated(true)
    }
    else{
      setLengthValidated(false)
    }
   

  }

  


  return(
    <>
       <div className="wrapper">
        {/* box contains input field and validation tracker */}
        <div className="box">
          {/* input field */}
          <div className="input-field">
            <input type={type} className="custom-input" onChange={(e)=>{handleChange(e.target.value)}}/>
            {type==="password" ? 
            (
              <span className="icon-span" onClick={()=>{setType("text")}}>
                <ion-icon name="eye-off-outline"></ion-icon>
              </span>
            ):(
              
              <span className="icon-span" onClick={()=>{setType("password")}}>
                <ion-icon name="eye-outline"></ion-icon>
              </span>
            )}
          </div>
          {/* validation tracker */}
          <main className="tracker-box">
            <div className={lowerValidated ?'validated':'not-validated'}>
              {lowerValidated ? (
                <ion-icon style={{color:"rgb(28, 193, 28)"}} className="tick" name="checkmark-circle-outline"></ion-icon>
              )
              :
              (
                <ion-icon name="ellipse-outline"></ion-icon>
              )}Atleast one lowercase letter</div>
            <div className={upperValidated ?'validated':'not-validated'}>
            {upperValidated ? (
                <ion-icon style={{color:"rgb(28, 193, 28)"}} className="tick" name="checkmark-circle-outline"></ion-icon>
              )
              :
              (
                <ion-icon name="ellipse-outline"></ion-icon>
              )}Atleast one uppercase letter</div>
            <div className={numberValidated ?'validated':'not-validated'}>
            {numberValidated ? (
                <ion-icon style={{color:"rgb(28, 193, 28)"}} className="tick" name="checkmark-circle-outline"></ion-icon>
              )
              :
              (
                <ion-icon name="ellipse-outline"></ion-icon>
              )}Atleast one number</div>
            <div className={specialValidated ?'validated':'not-validated'}>
            {specialValidated ? (
                <ion-icon style={{color:"rgb(28, 193, 28)"}} name="checkmark-circle-outline"></ion-icon>
              )
              :
              (
                <ion-icon name="ellipse-outline"></ion-icon>
              )}Atleast one special character</div>
            <div className={lengthValidated ?'validated':'not-validated'}>
            {lengthValidated ? (
                <ion-icon style={{color:"rgb(28, 193, 28)"}} className="tick" name="checkmark-circle-outline"></ion-icon>
              )
              :
              (
                <ion-icon name="ellipse-outline"></ion-icon>
              )}Atleast 8 characters</div>
          </main>
        </div>
       </div>
    </>
  )
}

export default App;