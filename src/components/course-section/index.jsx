import React, { useState,useEffect} from 'react'
import ReactPlayer from 'react-player'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ReactHTMLParser from 'react-html-parser';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from "axios"


export default function CourseSection(props) {
   
   
    const [title, setTitle] = useState("Lesson Name");
    const [SaveDescription, setSaveDescription] = useState();
    const [SaveVideo,setSaveVideo] = useState();
    const [video, setVideo] = useState();
    const[SaveImage,setSaveImage] = useState();
    const [image, setImage] = useState();
    const [showCourses,setShowCourses]= useState([]); 
    // const id = props.id
    const [course,setCourses] = useState();
    
      console.log(course);

     useEffect(() => {

        axios.get("http://207.180.212.174:4000/show/course").then(res =>
       
        // console.log(res.data)
          
        setShowCourses(res.data)

    );

        
       
     }, [])




	



    const inputHandleTitle = (e)=>{
        setTitle(e.target.value)
    }

    const inputHandleDescription = (e,editor)=>{
        const data = editor.getData();

		setSaveDescription(data);

    }


    const inputHandleVideo = (e) => {
          
        setSaveVideo(e.target.files[0]);
        setVideo(URL.createObjectURL(e.target.files[0]))
    }

    const inputHandleImage = (e) => {
       setSaveImage(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    }


    const  addLeasson = (e)=>{

        e.preventDefault()
      
        const data = new FormData();
        data.append("course_id",course)
        data.append("title", title);
        data.append("description", SaveDescription);
        data.append("file", SaveVideo);
        data.append("file", SaveImage);

   
         
        axios.post("http://207.180.212.174:4000/create/lesson",data).then((res)=>{
                      
                    console.log(res);
             })
       
    }


    return (
        <React.Fragment>
            <div>

            <form  encType="multipart/form-data">

                <div class="accordion" id={"accordionExample"} >
                    <div class="card">
                        <div class="card-header heading accordionheader" id="headingOne">



                            <div className="sectiondisplay ">

                                <h5



                                > <span className="heading">{title}</span>

                                    <span className="btn btn-link" data-toggle="collapse" data-target={"#collapse" + props.id} aria-expanded="true" aria-controls="collapseOne">


                                        <ArrowDropDownIcon />

                                    </span>
                                </h5>
                            </div>
                        </div>

                        <div id={"collapse" + props.id} class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">

                            <div class="form-group formWrapper">
											<label htmlFor="exampleFormControlInput1">Courses</label>
											<select class="form-control" id="exampleFormControlSelect1" name="course" onChange={(e)=>setCourses(e.target.value)}>  
                                            <option>Select Course</option>
                                            {showCourses.map((showCourse)=>{
                                                return( <>
                                                      
                                                  
                                            
                                            
                                            	<option value={showCourse._id}>{showCourse.title}</option>
												
                                                </>)

                                            })}

											</select><br></br>

											
										</div>
                         


                               
                                    <div className="form-group formWrapper">
                                        <label htmlFor="exampleFormControlInput1">Lesson Title</label>
                                        <input type="text" name="title" className="form-control inlineField" id="exampleFormControlInput1" onChange={inputHandleTitle} />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description</label>

                                        <CKEditor editor={ClassicEditor} onChange={inputHandleDescription} name="description" />
                                    </div>
                                    <hr></hr>

                                    <div class="contentCard">
                                        <h3 className="heading">Add Video Trailler</h3>
                                    </div>


                                    <div className="card" style={{ maxWidth: "20rem", width: "100%", borderBottom: "1px solid rgba(0,0,0,.125)" }}>
                                        {video ? (<ReactPlayer url={video} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="https://www.pngkit.com/png/full/267-2678423_bacteria-video-thumbnail-default.png" alt="Card image cap" />)}


                                        {/* */}
                                        <div className="card-body">
                                  
                                                <div className="form-group">

                                                    <div class='file file--upload'>
                                                        <label for={'input-fileone' + props.id}>
                                                            Upload
     								                 </label>
                                                        <input id={'input-fileone' + props.id} type='file' onChange={inputHandleVideo}  name="file"/>
                                                    </div>




                                                  

                                                </div>
                                        


                                        </div>
                                    </div>




                                    <div class="contentCard" style={{ marginTop: "10px" }}>
                                        <h3 className="heading">Add Pic</h3>
                                    </div>


                                    <div className="card" style={{ maxWidth: "20rem", width: "100%", borderBottom: "1px solid rgba(0,0,0,.125)" }}>

                                        {image ? (<img className="card-img-top" src={image} alt="Card image cap" />) : (<img className="card-img-top" src="https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png" alt="Card image cap" />)}

                                        <div className="card-body">
                                        
                                                <div className="form-group">

                                                  
                                                <div class='file file--upload'>
                                                        <label for={'image'+props.id}>
                                                            Upload
     								                 </label>
                                                        <input id={'image' + props.id} type='file' onChange={inputHandleImage}  name="file"/>
                                                    </div>
                                                  
                                                    {/* <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={inputHandleImage} /> */}
                                                </div>
                                           


                                        </div>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between", marginTop: "10px"
                                    }}>
                                        {/* <button  type="submit"  className="btn btn-primary btn-sm" onClick={(e) => { props.save({id : id,title:title,image:image,video:video},e) }}>Save</button> */}
                                       
                                          {/* <button  type="submit"  className="btn btn-primary " onClick={(e) => { props.save({id : props.id,title:title,image:image,video:video}) }}>Save</button> */}
                                         <button  type="submit" onClick={addLeasson}  className="btn btn-primary btn-sm">Save</button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={(e) => { props.section(props.id) }}>Delete</button>
                                    
                               

                                        </div>



                            </div>
                        </div>
                    </div>


                </div>
                </form>

            </div>






        </React.Fragment>
    )
}
