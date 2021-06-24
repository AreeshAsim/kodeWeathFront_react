import React, { useState, useEffect } from 'react'
//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import ReactPlayer from 'react-player'

//Other Dependenies
import axios from "axios"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ReactHTMLParser from 'react-html-parser';
import $ from 'jquery';


export default function EditCategory({ match }) {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [title, setTitle] = useState("");
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


    useEffect(() => {




        axios.get(`${BASE_URL}/singlecategory/` + match.params.id).then((res) => {


            setTitle(res.data[0].title);
            setDescription(res.data[0].description);
            setImage(res.data[0].image)
            setVideo(res.data[0].video)



        })



    }, [])

    const editCategory = (e) => {
        e.preventDefault();

        console.log(image);
        // console.log(video);
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



            axios.post(`${BASE_URL}/updatecategory/` + match.params.id, data).then((res) => {


                $("#loader").addClass('display');	

                setError("")
                setPublishButton(false)
                setSubmitData("Category Update Successfully");

                setTimeout(() => {
                    setPublishButton(true)
              setSubmitData("")
        
                    
                }, 2000);



            }).catch((err) => {
                $("#loader").addClass('display');	
                console.log(err);

            })






        }
    }
    const breadcrumbNavigation = [
        {
            title: 'Edit Category Page',
            link: '#'
        },
        {
            title: 'Edit Category Page',
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

                        <form onSubmit={editCategory} encType="multipart/form-data">
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
                                            	{/* Loader */}
									<div id={"loader"} className={'display'}>Loading</div>

                                        </div></div>
                                </div>
                                <div class="col-5">

                                    {publishButton ? (<button type="submit" className="btn btn-primary">Published</button>) : (<button type="submit" className="btn btn-danger">Published</button>)}

                                   

                                    <div class="contentCard addCourseCard">
                                        <h3 className="heading"> Add Video Trailler</h3>
                                    </div>

                                    <div className="card">


                                        {videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (video != "" ? <ReactPlayer url={`${BASE_URL}/upload/${video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} /> : <img className="card-img-top" src="/assets/images/default_video.png" alt="default video" />)}
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
                                        {imageUpload ? (<img className="card-img-top" src={imageUpload} alt="Card image" />) : (<img className="card-img-top" src={image != "" ? `${BASE_URL}/upload/${image.replace(/[\\]/g, '/')}` : "/assets/images/default_image.png"} alt="default image" />)}
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
