

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
import $ from 'jquery';




export default function AddLeasson(props) {
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [videoUpload, setVideoUpload] = useState("");
	const [imageUpload, setImageUpload] = useState("");
	const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
	const [selectCourse, setCourse] = useState("");
	const [showCourses, setShowCourses] = useState([]);
	const [publishButton, setPublishButton] = useState(true);
	const [error, setError] = useState("")
	const [showdata, setSubmitData] = useState("");
	

	useEffect(() => {
		axios.get(`${BASE_URL}/show/courses`).then(res => {
			setShowCourses(res.data)
			var defaultCourse = props.location.aboutProps;
			var course = (defaultCourse == undefined) ? "" : defaultCourse.responseId;
			if (course != "") {
				setCourse(course+"")
			}
			
		}
		);
	}, [])




	
	const inputHandleTitle = (e) => {
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
	const addLesson = (e) => {
		e.preventDefault()
	
		if (selectCourse == "") {
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
		else {
			
			$("#loader").removeClass('display');

			const data = new FormData();
			data.append("title", title);
			data.append("description", description);
			data.append("course_id", selectCourse)
			data.append("video", video);
			data.append("image", image);
			axios.post(`${BASE_URL}/create/lesson`, data).then((res) => {


			
				
				
		})
		$("#loader").addClass('display');
			setError("");
			setPublishButton(false);
			setSubmitData("Data Submit Successfully");

			setTimeout(() => {
				setPublishButton(true)
				setSubmitData("")


			}, 2000);



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
					<form onSubmit={addLesson} encType="multipart/form-data">
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
											<select value={selectCourse}
												class="form-control" id="exampleFormControlSelect1" name="course"
												onChange={(e) => setCourse(e.target.value)}>


												<option value="">Select Course</option>
												{showCourses.map((showCourse) => {
													return (<>

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

											<CKEditor editor={ClassicEditor} onChange={inputHandleCheckEditor} name="description" data={description} />


										</div>
										<div id={"loader"} className={'display'}>Loading</div>

									</div>
								</div>


							</div>
							<div class="col-5">


								{publishButton ? (<button type="submit" className="btn btn-primary">Published</button>) : (<button type="submit" className="btn btn-danger">Published</button>)}
								<button style={{ marginLeft: "20px" }} type="button" className="btn btn-primary" onClick={resetForm}>Reset</button>

								<div class="contentCard addCourseCard">
									<h3 className="heading"> Add Video Trailler</h3>
								</div>

								<div className="card">


									{videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="/assets/images/default_video.png" alt=" default image" />)}

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

									) : (<img className="card-img-top" src="/assets/images/default_image.png" alt="default image" />)}
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
