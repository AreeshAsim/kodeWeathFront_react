/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React,{useState} from 'react';
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import axios from "axios";
import $ from 'jquery';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {FaPercentage } from "react-icons/fa";
// import './adduser.css'

export default function AddDiscount() {
  const [discountTitle,setDiscount] = useState("");
   const [addButton,setAddButton] = useState(true);
   const [error, setError] = useState("")
  const [showdata, setSubmitData] = useState("");
  const [type, setType] = useState(1);
  const [checked,setChecked] = useState(true);
  const [discountPrice, setPrice] = useState("");
  const [inputField, setInputField] = useState(false);
  const [randCode,setRondomCode] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
    const addDiscount= (e)=>{
     
    


      e.preventDefault();

      
 
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
    //   console.log(makeid());
      
      const  rand = (makeid());
    //   console.log(rand);

if(discountTitle== ""){
    setError("Please Fill Discount Title Field")
}	
else if(discountPrice== ""){
    setError("Please Enter Discount")
}	

else{
    $("#loader").removeClass('display');
    

    setError("")

    const data={
             
        discounttitle :discountTitle,
        discountprice: discountPrice,
        type: type,
        randnumber: rand
        }
   
       
   
  
    
     axios.post(`${BASE_URL}/create/discount`,data).then((res)=>{
               
                    //   console.log(res.data.data.randnumber);
                      setRondomCode(res.data.data.randnumber);
                      $("#loader").addClass('display');
                       setSubmitData("Data Submit Successfully");
                       setAddButton(false);
             
                       setTimeout(() => {
                          setAddButton(true);
                    setSubmitData("")
             
                         
                      }, 2000);	

        }).catch((err)=>{

            $("#loader").addClass('display');
            setError("Data Not Submited");
            setAddButton(false);
  
            setTimeout(() => {
               setAddButton(true);
               setError("")
  
              
           }, 2000);	

        })
    
}
    
}
const resetForm = ()=>{
    setDiscount("");
		setSubmitData("")
		setError("");
        setAddButton(true);
        setPrice("")
    }

    const fixedDiscount = (e) => {
		setChecked(false)
		setInputField(!false)
		// setType("1")

		setType(0);
        setRondomCode("");
	}

    const copytoclip = () => {
        console.log("slected")
        const el = document.createElement('textarea');
        el.value = randCode;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        $('.addcopyMsg[copyindex="index"]').fadeIn();
        setTimeout(() => {
            $('.addcopyMsg[copyindex="index"]').fadeOut();
        },2000);
    }

	const percentage = (e) => {
		setChecked(true)
		setInputField(false)

		 setType(1);
		// setPrice("");

	}










   const breadcrumbNavigation = [
        {
            title: 'AddDiscount Page',
            link: '#'
        },
        {
            title: 'AddDiscount Page',
            link: '#'
        }
    ]




    return (
        /*Content Area*/
        <React.Fragment>

            <ChangeTitle title={'Home'} />

            {/*SideBar*/}
            <SideBar />

            {/*Page Header*/}
            <PageHeader />

            <BreadCrumb navigation={breadcrumbNavigation} />

            {/* main content starts here */}



            <section class="pageWrapper">
                <div class="col-8">
            {error ? (<div class="alert alert-warning alert-dismissible show" role="alert">
											<strong>{error}</strong></div>) : (null)}
										{showdata ? (<div class="alert alert-success alert-dismissible show" role="alert">
											<strong>{showdata}</strong></div>) : (null)}
                                 </div>
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-8"  >
                            <div class="contentCard">
                                <form onSubmit={addDiscount}>
                                    <div className="form-group formWrapper">
                               
                                                                        
                                        <label htmlFor="exampleFormControlInput1">Discount Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e)=>setDiscount(e.target.value)}/>
                                    </div>
                                    <div id={"loader"} className={'display'}>Loading</div>
                                    <div className="form-group">
										<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }} >
												<div className="form-check">
													<input className="form-check-input" checked={!checked}  value={type}  type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={fixedDiscount} />
													<label className="form-check-label" htmlFor="flexRadioDefault1">
														Fixed Discount 
									         	</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" checked={checked} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={type} onClick={percentage} />
													<label className="form-check-label" htmlFor="flexRadioDefault2">
														Percentage
 									         	 </label>
												</div>	</div>
												<>{inputField ? (<div style={{ position: "relative" }}><label htmlFor="exampleFormControlInput1">Discount</label><input type="number" name="type" value={discountPrice} placeholder="Enter Discount " className="form-control" id="exampleFormControlInput1" onChange={(e) => setPrice(e.target.value)} /><i className="w_icon"><MonetizationOnIcon /></i></div>) : (<div style={{ position: "relative" }}><label htmlFor="exampleFormControlInput1">Discount</label><input type="number" name="type" value={discountPrice} placeholder="Enter Discount " className="form-control" id="exampleFormControlInput1" onChange={(e) => setPrice(e.target.value)} /><i className="w_icon"><FaPercentage/></i></div>)}</>
									</div>
                                  
                                 
                                 
                                 
                                 
                                 
                                 {addButton? (<button className=" btn btn-primary btn-sm">Add Discount</button>):(<button className=" btn btn-danger btn-sm " onClick={()=>setAddButton(false)}>Add Discount</button>)}
                                 <button type="reset" style={{marginLeft:"20px"}} className="btn btn-primary btn-sm" onClick={resetForm}>Reset</button> 

                                </form>
                            </div>
                            {randCode ==""? (null):(
                            
                            <div class="contentCard ">

                                    
                                       <div  className="copyParent"  style ={{display:"flex",justifyContent:"space-between"}}>
                                        
                                        <h3 style={{marginTop:"8px"}} className="heading" id="myInput">{randCode}</h3>

                                       <div>
                                        <span  copyindex={'index'} className="badge badge-dark addcopyMsg">Copied</span>
                                        <button type="button"  onClick={copytoclip} className="btn btn-primary btn-sm">Copy</button>
                                        </div>
                                        </div>
                                       
                           
                            </div>)}
                            
                        </div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </React.Fragment>

    )
}
