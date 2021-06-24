import React, { useState,useEffect } from "react";
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





function EditSubscription({match}) {


   

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
 
  const [imageUpload, setImageUpload] = useState("");
 
  const [publishButton, setPublishButton] = useState(true);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("")
  const [planType, setPlanType] = useState();
  

	const [showdata, setSubmitData] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const SUCCESS = process.env.REACT_APP_SUCCESS;
  // const  ERORR =  process.env.REACT_APP_ERROR;
 
 
 
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
 





  useEffect(() => {

       
            

         axios.get(`${BASE_URL}/subscription/`+match.params.id).then((res)=>{

           console.log(res.data[0].title);
           setTitle(res.data[0].title);
           setDescription(res.data[0].description);
           setPlanType(res.data[0].type) 
           setImage(res.data[0].image)
            setPrice(res.data[0].price);
         

         })
    
  
  
  }, [])

  
 




 




   const editSubscription = (e) => {

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


    axios.put(`${BASE_URL}/edit/`+match.params.id,data).then((res)=>{
      $("#loader").addClass('display');	
      setError("");
    // setSubmitData(res.data.status);
      setSubmitData("Data Update Successfully");

    setPublishButton(false)
    
    setTimeout(() => {
			setPublishButton(true)
      setSubmitData("")

			
		}, 2000);

    }).catch((err)=>{
      $("#loader").addClass('display');	
          
      console.log(err);
    })


    }

	  } 

  const breadcrumbNavigation = [
    {
      title: " Edit Subscription Page",
      link: "#",
    },
    {
      title: " Edit Subscription Page",
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
          <form onSubmit={editSubscription} encType="multipart/form-data">
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
                      <label htmlFor="exampleFormControlInput1"> Course Price</label>
                      <input type="number" name="courseplan" className="form-control" id="exampleFormControlInput1" value={price} onChange={(e)=>setPrice(e.target.value)} />
                      <i className="w_icon"><MonetizationOnIcon /></i>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }} >
												<div className="form-check">
													<input className="form-check-input"  checked = {planType == 0} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={()=>setPlanType(0)} />
													<label className="form-check-label" htmlFor="flexRadioDefault1">
														Monthly Plan
									         	</label>
												</div>
												<div className="form-check">
													<input checked = {planType == 1}   className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onClick={()=>setPlanType(1)} />
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

                <div class="contentCard imagCard">
                  <h3 className="heading"> Add Image</h3>
                </div>
                <div className="card">                                                                                                                                                     
               
                  {imageUpload ? (<img className="card-img-top" src={imageUpload} alt="Card image" />) : (<img className="card-img-top" src={image != "" ? `${BASE_URL}/upload/${image.replace(/[\\]/g, '/')}` : "/assets/images/default_image.png" } alt="default Image" />)}
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

export default EditSubscription;
