// import React, { useState } from "react";
// import axios from "axios"

// export default function Ragistration() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [contact, setContact] = useState("");
//     const [password,setPassword] = useState("")
//     const [cpassword,setCPassword] = useState("");
  

//     const Ragister = (e)=>{

//         e.preventDefault();
//         if(password !== cpassword){

//             alert("password and conform password not match");
//         }
//         else{

//            const userData ={
//                 nickName:name,
//                 email_address:email,
//                 phone_number:contact,
//                 password :password,
//                 confirmed_password:cpassword
//             }
         
//             axios.post("http://207.180.212.174:3001/signUp",userData).then((res)=>{
               
//                 // console.log(res.data);

//  })
         
//         }
//     }
 
 
//     return (
      
//         <div>

//             <div className="containerLogin">
//                 <div id="login-row" className="row justify-content-center align-items-center">
//                     <div id="login-column" className="col-md-6">
//                         <div id="login-box" className="col-md-12">
//                             <form onSubmit={Ragister} className="form">

                               
//                             <div className="form-group">
//                                     <label htmlFor="username" className="text-info">Name</label><br />
//                                     <input type="text" name="email" id="username" className="form-control"  onChange={(e)=>setName(e.target.value)} />
//                                 </div>
                              
//                                 <div className="form-group">
//                                     <label htmlFor="username" className="text-info">Email</label><br />
//                                     <input type="text" name="email" id="username" className="form-control"  onChange={(e)=>setEmail(e.target.value)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="username" className="text-info">Contact</label><br />
//                                     <input type="text" name="number" id="username" className="form-control"  onChange={(e)=>setContact(e.target.value)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="password" className="text-info">Password:</label><br />
//                                     <input type="text" name="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="password" className="text-info">CPassword:</label><br />
//                                     <input type="text" name="cpassword" id="password" className="form-control" onChange={(e)=>setCPassword(e.target.value)} />
//                                 </div>

//                                 <div className="form-group">

//                                     <input type="submit" name="submit" className="btn btn-info btn-md" />
//                                 </div>
//                                 <div id="register-link" className="text-right">


//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
