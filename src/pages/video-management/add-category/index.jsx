import React, { useState } from 'react'
//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import {Link} from "react-router-dom";

import ReactPlayer from 'react-player'
import $ from 'jquery';


//Other Dependenies
import axios from "axios"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ReactHTMLParser from 'react-html-parser';


export default function AddCategory() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [title, setTitle] = useState("");
    const [responseTitle, courseTitle] = useState("");
    // const [responseId, courseId] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    const [videoUpload, setVideoUpload] = useState("");
    const [publishButton, setPublishButton] = useState(true);
    const [error, setError] = useState("")
    const [showdata, setSubmitData] = useState("");

    /* onChange Function */

    const inputHandleTitle = (e) => {

        setTitle(e.target.value)
    }
    const inputHandleDescription = (e, editor) => {
        const decriptionData = editor.getData();

        setDescription(decriptionData);

    }
    const inputHandleVideo = (e) => {

        setVideo(e.target.files[0])
        setVideoUpload(URL.createObjectURL(e.target.files[0]));
        e.target.value = null;
    }

    const inputHandleImage = (e) => {
        setImage(e.target.files[0])
        setImageUpload(URL.createObjectURL(e.target.files[0]));
        e.target.value = null;
    }


    const resetForm = () => {
        setPublishButton(true)
        setTitle("");
        setDescription("");
        setImageUpload("")
        setImage("")
        setVideoUpload("");
        setVideo("")
        setSubmitData("")
        setError("");
        courseTitle("")
    }
    const addCategory = (e) => {
      
       
        e.preventDefault();
        if (title == "") {
            setError("Please Fill Title")
        }
        else if (description == "") {

            setError("Please Fill Description")

        }
        else if (video == "") {
            setError("Please Select Video");
        }
        else {
            $("#loader").removeClass('display');

          
            const data = new FormData();
            data.append("title", title);
            data.append("description", description);
            data.append("video", video);
            data.append("image", image);

           
            axios.post(`${BASE_URL}/create/category`, data).then(
                res => {
                    
                     setError("")
                    setPublishButton(false)
                    
                    
                
                    if(res.data.type==200){
                        $("#loader").addClass('display')
                        setSubmitData("Data Submit Successfully")
                       
                        setError("");
                        courseTitle(res.data.categorydata.title);
                        // courseId(res.data.categorydata._id)
                        
                        
                   
                    }else{
                        // setSubmitData(res.data.status)
                        // console.log(res.data.title);
                        setError("Category Already Exit");
                        $("#loader").addClass('display')
                    
                       
                    }
                    setTimeout(() => {
                        setSubmitData('');
                        setPublishButton(true)
                        setError('');
                        
                    }, 2000);
                 
                }, error => {
                    setError("Error")
                    setPublishButton(true)
                    $("#loader").addClass('display')
                    // setSubmitData("Error")
                })

            //   setbool(!bool);

        }
    }
    const breadcrumbNavigation = [
        {
            title: 'Add Category Page',
            link: '#'
        },
        {
            title: 'Add Category Page',
            link: '#'
        }
    ]
   



    return (
        <div>
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

                        <form onSubmit={addCategory} encType="multipart/form-data">
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
                                                <label htmlFor="exampleFormControlInput1">Category Title</label>
                                                <input type="text" name="title" className="form-control" id="exampleFormControlInput1" value={title} onChange={inputHandleTitle} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Description</label>

                                                <CKEditor name="description" editor={ClassicEditor} onChange={inputHandleDescription} data={description} />

                                            </div>
                                        </div></div>

                                       
                                        <div id={"loader"} className={'display'}>Loading</div>
                                       
                                        {responseTitle !="" ?(                     
												<div class="contentCard ">
													<div style={{display:"flex", justifyContent:"space-between"}}>
									 		  	<h3 className="heading">{responseTitle}</h3> <Link to ={{pathname:"/add-courses",aboutProps:{responseTitle}}}><button type="button" className="btn btn-danger btn-sm"> Add Course </button></Link>  
												   </div>
												</div>):(null)
                                                }
                                </div>
                                <div class="col-5">

                                    {publishButton ? (<button type="submit" className="btn btn-primary">Published</button>) : (<button type="submit" className="btn btn-danger">Published</button>)}

                                    {<button style={{ marginLeft: "20px" }} type="button" className="btn btn-primary" onClick={resetForm}>Reset</button>}

                                    <div class="contentCard addCourseCard">
                                        <h3 className="heading"> Add Video Trailler</h3>
                                    </div>

                                    <div className="card">

                                        {videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="/assets/images/default_video.png" alt="default Video" />)}

                                        <div className="card-body">
                                            <div className="form-group">
                                                <div class='file file--upload'>
                                                    <label for='input-file'>
                                                        Upload
     								         </label>
                                                    <input id='input-file' type='file' accept="video/*" onChange={inputHandleVideo} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

        </div>

    )
}
