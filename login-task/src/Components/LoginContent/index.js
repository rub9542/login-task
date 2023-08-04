import React, { useState } from "react";
import amazon from "../../assets/Amazon_logo.svg.webp";
import tree from "../../assets/tree.png";
import InputFields from "./InputFields";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";

export default function LoginContent() {
   
   return (
     <div className="login-content">
       <div className="login-top">
         <img src={amazon} />
       </div>
       <div className="login-center">
         <div className="heading"> Login</div>
         <div className="tree">
           <img src={tree} />
         </div>
       </div>
       <div className="login-fields">
         <InputFields />
       </div>
       <div className="login-bottom">
         <div className="log-option-top">
           <div className="log-option-top-left pointer">Forgot Password?</div>

           <div className="log-option-top-right pointer">New User? Sign Up</div>
         </div>
         <div className="login-option-center"> or</div>
         <div className="login-option-bottom">
           <div className="log-option google">
             <img src={google} />{" "}
             <div className="btn-text pointer">CONTINUE WITH GOOGLE</div>
           </div>
           <div className="log-option fb">
             <img src={fb} />{" "}
             <div className="btn-text pointer">CONTINUE WITH FACEBOOK</div>
           </div>
         </div>
       </div>
     </div>
   );
}
