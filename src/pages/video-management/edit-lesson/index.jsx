

import React, { useState, useEffect } from 'react';

//components......
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import CourseSection from '../../../components/course-section';
// Other Dependencies
import ReactPlayer from 'react-player';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ReactHTMLParser from 'react-html-parser';
// import './addcourse.css';
import axios from 'axios';





export default function AddLeasson() {

	const [title,setTitle] = useState("");
	const [description,setDescription] = useState("");
	const [videoUpload,setVideoUpload] = useState("");
	const [imageUpload,setImageUpload] = useState("");
    const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
   	const [selectCourse,setCourse]= useState("");
	const [showCourses, setShowCourses] = useState([]);
	const [publishButton,setPublishButton] = useState(true);
	const [error, setError] = useState("")
	const [showdata, setSubmitData] = useState("");
		useEffect(() => {
		axios.get("http://207.180.212.174:3001/show/courses").then(res =>
			setShowCourses(res.data)

		);



	}, [ ])



	const inputHandleTitle = (e)=>{
           setTitle(e.target.value);
	}


	const inputHandleVideo = (e) => {
		setVideoUpload(URL.createObjectURL(e.target.files[0]))
        setVideo(e.target.files[0])
		e.target.value = null;
	}

	const inputHandleImage = (e) => {
		setImageUpload(URL.createObjectURL(e.target.files[0]))
		setImage(e.target.files[0])
		e.target.value = null;
         
	}
	const inputHandleCheckEditor = (event, editor) => {

		const data = editor.getData();

		setDescription(data);

	}
	
	
	const resetForm = () => {

		setPublishButton(true)
		setCourse("");
		setTitle("");
		setDescription("");
		setImageUpload("")
		setImage("")
		setVideoUpload("");
		setVideo("")
		setSubmitData("")
		setError("");

        }
	const  addLesson = (e)=>{
         e.preventDefault()
		if(selectCourse== ""){
			setError("Please Select Course")
		}	
		else if (title == "") {
			setError("Please Fill Title")
		}
		else if (description == "") {

			setError("Please Fill Description");
		}
		else if (video == "") {
			setError("Please Select Video");
		}
	  else{

        const data = new FormData();
		data.append("title", title);
	   	data.append("description", description);
		data.append("course_id",selectCourse)
		data.append("video", video);
		data.append("image", image);
	    axios.post("http://207.180.212.174:3001/create/lesson",data).then((res)=>{
		 })
			 setError("");
			 setPublishButton(false);
			 setSubmitData("Data Submit Successfully");
 
			 }
			}

	const breadcrumbNavigation = [
		{
			title: 'Add Lesson',
			link: '#'
		},
		{
			title: 'Lesson',
			link: '#'
		}
	]


	



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
					<form onSubmit={addLesson}  encType="multipart/form-data">
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
								
                                
                                    <div class="form-group formWrapper">
											<label htmlFor="exampleFormControlInput1">Courses</label>
											<select class="form-control" id="exampleFormControlSelect1" name="course"   onChange={(e)=>setCourse(e.target.value)} value={selectCourse} >  
                                            <option value="">Select Course</option>
                                            {showCourses.map((showCourse)=>{
                                                return( <>
                                                      
                                            	<option value={showCourse._id}>{showCourse.title}</option>
												
                                                </>)

                                            })}

											</select><br></br>

											</div>


										<div className="form-group formWrapper">
											<label htmlFor="exampleFormControlInput1">Lesson Title</label>
											<input type="text" name="title" className="form-control" id="exampleFormControlInput1" onChange={inputHandleTitle} value={title} />
										</div>


										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">Description</label>

											<CKEditor editor={ClassicEditor} onChange={inputHandleCheckEditor} name="description" data={description}/>


										</div>

										</div>
								</div>


							</div>
							<div class="col-5">

							
								{publishButton? (<button type="submit" className="btn btn-primary">Published</button>):(<button type="submit" className="btn btn-danger">Published</button>)}
								<button style={{marginLeft:"20px"}} type="button" className="btn btn-primary" onClick={resetForm}>Reset</button>

								<div class="contentCard addCourseCard">
									<h3 className="heading"> Add Video Trailler</h3>
								</div>

								<div className="card">


									{videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="https://www.pngkit.com/png/full/267-2678423_bacteria-video-thumbnail-default.png" alt="Card image cap" />)}

									<div className="card-body">

										<div class='file file--upload'>
											<label for='input-file'>
												Upload
     								        </label>
											<input id='input-file' type='file' accept="video/*" name="file" onChange={inputHandleVideo} />
										</div>
									</div>
								</div>
								<div class="contentCard imagCard">
									<h3 className="heading"> Add Image</h3>
								</div>
								<div className="card">

									{imageUpload ? (
										<img className="card-img-top" src={imageUpload} alt="Card image cap" />

									) : (<img className="card-img-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXp7vG6vsHs8fS3u77Fycy+wsXc4eTX3N/h5unT2NrHzM7N0tW1ubzu8/W7v8LBxcjl6uwx8f6JAAADy0lEQVR4nO2c23aDIBBFCQheUf//a6vRpEZuJgXj0LNXH7oaK3WXwXEQGAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGnw9Hz7Et+Ds1ElpxoJaeGsHHqRHlkoKlJ0JbvbKQhRjCSs8FKcY+RuRVKQwqsTlUxShm9f8BGGU53cuvryHeXUyLnTj9++5hC8WJ2kv+2sTkR79Y4y9uuf2papKVYnxcWd8GpV0uj0aaxcnFx9lH04ESeMfLpZ2pLJW/obZzrhcGK2BSdmW3BitkXdyfxYz7mO2hZtJ7yqCznIoVUsXv8h7YSPzZJ2CtENZTQplJ1Mj0CbZ6CuiFUdI+yEt69PhUJGih+6Tni5L7qJJlJbZJ2MZu1A1FHuP2Sd7CPnTh+nLapOKtNIrIyOqhNe28puYvjXThp7KfKAE16FDqDqxF6x7sI1VK26wFCcmRMR6gOTEhG6P+XmJNRPtJrruqL0SSHrxD6ehJxwtZS6vVLIOrFP9wTuO1o95XnCh6qTj/ITrsSRQ8k6Ydbg8YYOV9tDhbO4QNaJbUrd301elXikkHUyZbLGc7F34m4bOI9z2ccUuk6Ybl+liMFXP9GGEme/IuxkfubZXKcofL+vVW8ocYUPZSfThRbdYkUIWftKj3YljjyFtBPGtWplL259UzJfZmoLHPeYQtvJMr0zjsxfnnYrsY4p1J0c+l1H4DzOaByfv5N9XhLsKfk7MfOSkJTsnYSVGANt7k50IHBsZ83ciSsv8faUjJxw821w303YLSUfJ7q+VbvPjit5eRs2Gyfzw0//usTkaODsz5yLk6mXTPTbnhLKS5xSMnGyKJnnMn4j4I3AWeie9e8cnGxmSh/h876S55CShZNtEX8Nn3eG1xyd6Nf59FnKsVQtXyf7qR5R6U96SU5OLG9dVB8pyceJbUJQvpOX5OdElx9dfs5OdMxVgnk4ibtwMgsnvI5oJA8nMceSTJxEHUvycBJ/ETZ5JwnWpZN3Yn1n+H874RJODr4LCidwAic74MQETkzgxAROTODEBE5MzDy2i763VEfcCVOlmr+UMr8J/8DxybpIjKyTlG3BidkWnJhtwYnZFpyYbcGJ2VZBwwkb18SqV6lb4usUyeX3NmTrJozzvy81j7S2Sd8l/4a27XeSFHH5jbqfG4OexvVDx7HjSTqu300Y+91p+BS6NuregKnQjn1gEiBCe6RcBl7K6AUCO0VFRMm89EK1RXKatoq4e+QJJN+N+r4jNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzuIHpk8/wVCHmdcAAAAASUVORK5CYII" alt="Card image cap" />)}
									<div className="card-body">
										{/* <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={inputHandleImage} /> */}


										<div class='file file--upload'>
											<label for='data'>
												Upload
     								 </label>
											<input id='data' type='file' name="file" accept="image/*" onChange={inputHandleImage} />
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

	)
}
