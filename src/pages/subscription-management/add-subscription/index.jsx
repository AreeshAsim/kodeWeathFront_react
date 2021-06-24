import React, { useState } from "react";
import PageHeader from "../../../components/page-header";
import ChangeTitle from "../../../components/change_page_title";
import PageFooter from "../../../components/page-footer";
import SideBar from "../../../components/side-bar";
import BreadCrumb from "../../../components/bread-crumb";
import axios from "axios"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import $ from 'jquery';



function Subscription() {



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
 
  const [imageUpload, setImageUpload] = useState("");
 
  const [publishButton, setPublishButton] = useState(true);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("")
  const [planType, setPlanType] = useState(0);


	const [showdata, setSubmitData] = useState("");
  const [checked, setChecked] = useState(true);
  // env variable
  
   const BASE_URL = process.env.REACT_APP_BASE_URL;
   const SUCCESS = process.env.REACT_APP_SUCCESS;
   const ERORR =  process.env.REACT_APP_ERROR;
  /* onChange Function */

  const inputHandleTitle = (e) => {

    setTitle(e.target.value)
  }
  const inputHandleDescription = (e, editor) => {
    const decriptionData = editor.getData();

    setDescription(decriptionData);

  }
 

  const inputHandleImage = (e) => {

    setImage(e.target.files[0])
    setImageUpload(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;

  }

  const  MontlyPlan = ()=>{
    setChecked(true);
    setPlanType(0)

  }

  const YearPlan = ()=>{
    setChecked(false);
    setPlanType(1)

  }

  
  const resetForm = ()=>{

    setPublishButton(true)

		setTitle("");
		setDescription("");
		setImageUpload("")
		setImage("")
	
		setSubmitData("")
		setError("");
    setPrice("");
     setChecked(true);
    }


  const addSubscription = (e) => {

    e.preventDefault();
  

  	if (title == "") {
			setError("Please Fill Title")
		}
    else if(price==""){

      setError("Please Write Price")

    }
		else if (description == "") {

			setError("Please Fill Description")

		}
  
    else{
      $("#loader").removeClass('display');

      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("price",price)
  
      data.append("type",planType)
      data.append("file", image);


        
    axios.post(`${BASE_URL}/create/subscription`, data).then((res)=>{
      $("#loader").addClass('display');	

      // setSubmitData(`${SUCCESS}`)
      setSubmitData("Data Submit Successfully")
      setPublishButton(false);
      setError("");
     
      setTimeout(() => {
        setPublishButton(true)
        setSubmitData("")
       
        
      }, 2000);


    }).catch((err)=>{

      $("#loader").addClass('display');	
      console.log(err);
      setError("Subscription Not added");
      
      setTimeout(() => {
        setPublishButton(true)
        setError("");
  
        
      }, 2000);

    })

  


    }

	 }


 
 

  const breadcrumbNavigation = [
    {
      title: "Subscription Page",
      link: "#",
    },
    {
      title: "Subscription Page",
      link: "#",
    },
  ];

  return (
    <React.Fragment>

      <ChangeTitle title={'Home'} />

      {/*SideBar*/}
      <SideBar />

      {/*Page Header*/}
      <PageHeader />

      <BreadCrumb navigation={breadcrumbNavigation} />

      {/* main content starts here */}
      <section class="pageWrapper">
        <div class="container-fluid">
          <form onSubmit={addSubscription} encType="multipart/form-data">
            <div class="row">



              <div class="col-7">
              {error ? (<div class="alert alert-warning alert-dismissible show" role="alert">
											<strong>{error}</strong></div>) : (null)}
										{showdata ? (<div class="alert alert-success alert-dismissible show" role="alert">
											<strong>{showdata}</strong></div>) : (null)}
                <div class="contentCard ">
                  <h3 className="heading">Basic Information</h3>
                </div>
                
               
                  <div class="contentCard">

                  <div class="cardBody">
                 <div className="form-group formWrapper">
                      <label htmlFor="exampleFormControlInput1">Title</label>
                      <input type="text" name="title" className="form-control" id="exampleFormControlInput1" value={title} onChange={inputHandleTitle} />
                    </div>

                    <div className="form-group formWrapper" style ={{position:"relative"}}>
                      <label htmlFor="exampleFormControlInput1"> Price</label>
                      <input type="number" name="courseplan" className="form-control" id="exampleFormControlInput1" value={price} onChange={(e)=>setPrice(e.target.value)} />
                      <i className="w_icon"><MonetizationOnIcon /></i>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }} >
												<div className="form-check">
													<input className="form-check-input" checked = {checked} type="radio" name="flexRadioDefault" id="flexRadioDefault1"   onClick={MontlyPlan} />
													<label className="form-check-label" htmlFor="flexRadioDefault1">
														Monthly Plan
									         	</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" checked = {!checked}  type="radio" name="flexRadioDefault" id="flexRadioDefault2"   onClick={YearPlan} />
													<label className="form-check-label" htmlFor="flexRadioDefault2">
														Year Plan
 									         	 </label>
												</div>	</div>


                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Description</label>

                      <CKEditor name="description" editor={ClassicEditor} onChange={inputHandleDescription}  data={description}/>

                    </div>
                    <div id={"loader"} className={'display'}>Loading</div>



                  </div></div>


              </div>
              <div class="col-5">

                
                {publishButton ? (<button type="submit" className="btn btn-primary">Published</button>) : (<button type="submit" className="btn btn-danger">Published</button>)}
                <button style={{marginLeft:"20px"}} type="button" className="btn btn-primary" onClick={resetForm}>Reset</button>
                <div class="contentCard imagCard">
                  <h3 className="heading"> Add Image</h3>
                </div>
                <div className="card">
                  {imageUpload ? (<img className="card-img-top" src={imageUpload} alt="Card image cap" />) : (<img className="card-img-top" src="/assets/images/default_image.png" alt="default Image" />)}
                  <div className="card-body">

                    <div class='file file--upload'>
                      <label for='data'>
                        Upload
                            </label>
                      <input id='data' type='file' accept="image/*" onChange={inputHandleImage} />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </section>
      <PageFooter />
    </React.Fragment>

  );
}

export default Subscription;
