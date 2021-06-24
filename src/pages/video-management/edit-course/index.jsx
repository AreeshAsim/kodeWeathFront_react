
import React, { useState, useEffect } from 'react';

//components......
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';

// Other Dependencies
import ReactPlayer from 'react-player';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';


import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactHTMLParser from 'react-html-parser';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from "react-router-dom"

import axios from 'axios';
import $ from 'jquery';

export default function EditCourse({ match }) {
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [video, setVideo] = useState("");
	const [image, setImage] = useState("");
	const [imageUpload, setImageUpload] = useState("");
	const [videoUpload, setVideoUpload] = useState("");
	const [showCategories, setCategories] = useState([]);
	const [selectCategory, setCategory] = useState("");

	const [price, setPrice] = useState("");

	const [showTags, setShowTags] = useState([]);
	const [tag, setTag] = useState("");
	const [publishButton, setPublishButton] = useState(true);
	const [saveButton, setSaveButton] = useState(true);
	const [inputField, setInputField] = useState(false);
	const [error, setError] = useState("")

	const [showdata, setSubmitData] = useState("");
	const [coursePlan, setPlan] = useState("");
	const [lessons, setLesson] = useState([]);
	const [bool, setBool] = useState(true);
	



	
	const [responseId, courseId] = useState("");


	useEffect(() => {


		//For Add Lesson From Edit Course
		courseId(match.params.id)


		axios.get(`${BASE_URL}/show/categories`).then((res) => {


			if (res.data.type == 200) {
				setCategories(res.data.data);

			} else {

				setCategories([]);
			}
		}
		).catch((error) => {
			console.log(error)
			setCategories([]);
		})


		axios.get(`${BASE_URL}/show/tags`).then(res =>
			setShowTags(res.data)
		);


		axios.get(`${BASE_URL}/singlecourse/` + match.params.id).then((res) => {


			setTitle(res.data[0].title);
			setDescription(res.data[0].description);
			setImage(res.data[0].image)
			setVideo(res.data[0].video)
			setCategory(res.data[0].category)
			setPlan(res.data[0].courseplan)
			setPrice(res.data[0].price)
			setTag(res.data[0].tagname)

			// console.log(res.data[0].lessons);
			setLesson(res.data[0].lessons);
			

			if(res.data[0].courseplan=="master"){
				setInputField(!false)

			}
			
			



		})









	}, [bool])



	const inputLessonTitle = (e, index) => {
		// setTitle(e.target.value);



		lessons[index].title = e.target.value
		setLesson(lessons)

	}
	const inputLessonCheckEditor = (e, editor, index) => {
		const data = editor.getData();
		lessons[index].description = data
		setLesson(lessons)
		console.log(lessons[index].description);

	}





	const inputLessonHandleImage = (e, index) => {
	

		var update = [...lessons]
		update[index].image = e.target.files[0]
		e.target.value = null;


		setLesson(update)
	}

	const inputLessonHandleVideo = (e, index) => {
		
		var update = [...lessons]
		update[index].video = e.target.files[0]
		console.log(update[index].video.name)
		e.target.value = null;

		setLesson(update)


	}


	const deleteLesson = (e, index) => {


		e.preventDefault();
		console.log(lessons[index].course_id);
		const removeData = {

			id: match.params.id,
			course_id: lessons[index].course_id
		}



		axios
			.post(`${BASE_URL}/deleteLession`, removeData)
			.then((res) => {
				console.log(res.status);
				console.log("response delete");
				setBool(!bool)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				console.log("response delete");
				setBool(!bool)
			})
			;


	}










	const updateLesson = (e, index) => {
		$("#loader").addClass('display');	


		e.preventDefault()

		setSaveButton(false)
		setTimeout(() => {
			setSaveButton(true)

		}, 2000);



		console.log("update");
		console.log(lessons[index].course_id);

		const data = new FormData();
		data.append("indexNumber",index)
		data.append("id", match.params.id);
		data.append("course_id", lessons[index].course_id);
		data.append("title", lessons[index].title);
		data.append("description", lessons[index].description);
		data.append("video", lessons[index].video);
		data.append("image", lessons[index].image);
		axios
			.post(`${BASE_URL}/editLession`, data)
			.then((res) => {
				$("#loader").addClass('display');	


				// setBool(!bool)

				console.log("data");

		});


	}




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



	const breadcrumbNavigation = [
		{
			title: 'Edit Course Page',
			link: '#'
		},
		{
			title: 'Course',
			link: '#'
		}
	]


	const masterDetail = (e) => {
		setInputField(!false)


		setPlan("master");

	}

	const freeDetail = (e) => {

		setInputField(false)

		setPlan("free");
		setPrice("");

	}


	const updateCourse = (e) => {

		e.preventDefault()


		if (title == "") {
			setError("Please Fill Title")
		}
		else if (description == "") {

			setError("Please Fill Description")
		}
		else if (video == "") {
			setError("Please Select Video");
		}
		else if (selectCategory == "") {
			setError("Please Select Category");
		}

		else if (coursePlan == "") {
			setError("Please Select The Plan")

		}

		else {
			$("#loader").removeClass('display');


			const data = new FormData();
			data.append("title", title);
			data.append("description", description);


			data.append("category", selectCategory)
			data.append("video", video);
			data.append("image", image);
			data.append("price", price)
			data.append("courseplan", coursePlan)
			data.append("tagname", tag)
			axios.post(`${BASE_URL}/updatecourse/` + match.params.id, data).then((res) => {


				setError("");
				setSubmitData(res.data.status);
				setPublishButton(false)
				console.log(res.data.id)
				// console.log(res.data.title);
				// console.log(res.data)
				// courseTitle(res.data.title);
			
				$("#loader").addClass('display');	

				setTimeout(() => {
					setPublishButton(true)
					setSubmitData("")


				}, 2000);


			})




		}
	}

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
					<form onSubmit={updateCourse} encType="multipart/form-data">
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
											<label htmlFor="exampleFormControlInput1">Category</label>
											<select value={selectCategory} class="form-control" id="exampleFormControlSelect1" name="category" onChange={(e) => { setCategory(e.target.value) }}>
												<option value="">Select Category</option>
												{showCategories.map((category, index) => {
													return (<>

														<option>{category.title}</option>
													</>)
												})}

											</select>



										</div>

										<div className="form-group formWrapper">
											<label htmlFor="exampleFormControlInput1">Course Title</label>
											<input type="text" name="title" className="form-control" id="exampleFormControlInput1" onChange={inputHandleTitle} value={title} />
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">Description</label>

											<CKEditor editor={ClassicEditor} onChange={inputHandleCheckEditor} name="description" data={description} />

										</div>
										<div id={"loader"} className={'display'}>Loading</div>
										<div className="form-group formWrapper">
											<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }} >
												<div className="form-check">
													<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="master" checked={coursePlan === 'master'} onClick={masterDetail} />
													<label className="form-check-label" htmlFor="flexRadioDefault1">
														Master
									         	</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="free" checked={coursePlan === 'free'} onClick={freeDetail} />
													<label className="form-check-label" htmlFor="flexRadioDefault2">
														Free
 									         	 </label>
												</div>	</div>
											<>{inputField ? (<div style={{ position: "relative" }}><label htmlFor="exampleFormControlInput1">Course Price</label><input type="number" name="courseplan" value={price} placeholder="Enter Price" className="form-control" id="exampleFormControlInput1" onChange={(e) => setPrice(e.target.value)} /><i className="w_icon"><MonetizationOnIcon /></i></div>) : (null)}</>


										</div>



									</div>
								</div>





								{lessons.map((lesson, index) => {
									return (<>

										<div id="accordion">
											<div id={index} class="card">
												<div class="card-header" id="heading">
													<h5 class="mb-0">

														<button style={{ width: "100%" }} class="btn btn-link" type="button" data-toggle="collapse" data-target={"#a" + index} aria-expanded="false" aria-controls={"a" + index}>

															<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>{lesson.title}<ArrowDropDownIcon /></div>

														</button>

													</h5>
												</div>

												<div id={"a" + index} class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
													<div class="card-body">
														<form encType="multipart/form-data" >
															<div className="form-group formWrapper">

																<label htmlFor="exampleFormControlInput1">Course Title</label>
																<input type="text" name="lesson" className="form-control" id={"exampleFormControlInput"} onChange={(text) => inputLessonTitle(text, index)} defaultValue={lesson.title} />
															</div>
															<div className="form-group">
																<label htmlFor="exampleFormControlTextarea1">Description</label>

																<CKEditor editor={ClassicEditor} onChange={(event, editor) => inputLessonCheckEditor(event, editor, index)} name="description" data={lesson.description} />

															</div>


															{/* <div style={{ width: 500 }}> */}

																<div>
																<div class="contentCard addCourseCard">

																	<div></div>
																	<h3 className="heading"> Add Video Trailler</h3>
																</div>
																<div className="card">
					
																	{(lesson.video != "" ? lesson.video.name != undefined ?   <ReactPlayer url={URL.createObjectURL(lesson.video)} width="100%" height="100%" controls={true} /> :  <ReactPlayer url={`${BASE_URL}/upload/${lesson.video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} /> : <img className="card-img-top" src="/assets/images/default_video.png" alt="default video" />)}
																	<div className="card-body">
																		<div class='file file--upload'>
																			<label for={'data' + index}>
																				Upload
     								                                       </label>
																			<input id={'data' + index} type='file' accept="video/*" name="file" onChange={(e) => inputLessonHandleVideo(e, index)} />
																		</div>
																	</div>
																</div>
																<div class="contentCard imagCard">
																	<h3 className="heading"> Add Image</h3>
																</div>
																<div className="card">



																
																		 {(lesson.image != "" ? lesson.image.name != undefined ?   <img src={URL.createObjectURL(lesson.image)} /> :  <img src={`${BASE_URL}/upload/${lesson.image.replace(/[\\]/g, '/')}`}  /> : <img className="card-img-top" src="/assets/images/default_image.png" alt="default image" />)} 
																	<div id={"d" + index} className="card-body">
																		<div id={"b" + index} class='file file--upload'>
																			<label for={'data1' + index}>
																				Upload
     								                                    </label>
																			<input id={'data1' + index} type='file' accept="image/*" onChange={(e) => inputLessonHandleImage(e, index)} />


																		</div>

																	</div>
																</div>
															</div>




															<div style={{ marginTop: "20px", display: 'flex', justifyContent: "space-between" }}>

																{saveButton == false ? (<button type="submit" id={'data3'} className="btn btn-danger" onClick={(e) => updateLesson(e, index)}>Save</button>) : (<button type="submit" id={'data3'} className="btn btn-primary" onClick={(e) => updateLesson(e, index)}>Save</button>)}

																<button type="submit" className="btn btn-danger" onClick={(e) => deleteLesson(e, index)}>Delete</button>


															</div>
														</form>

													</div>
												</div>
											</div>
										</div>

									</>
									)
								})}

							</div>
							<div class="col-5">
								{publishButton ? (<button type="submit" className="btn btn-primary">Published</button>) : (<button type="submit" className="btn btn-danger">Published</button>)}
								{/* <button  type="button" className="btn btn-danger">Add Lesson</button> */}
								<Link to ={{pathname:"/add-lesson",aboutProps:{responseId}}}><button style={{ marginLeft: "20px" }} type="button" className="btn btn-danger "> Add Lesson </button></Link>
								<div class="contentCard addCourseCard">
									<h3 className="heading"> Add Video Trailler</h3>
								</div>
								<div className="card">
									{/* {videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="https://www.pngkit.com/png/full/267-2678423_bacteria-video-thumbnail-default.png" alt="Card image cap" />)} */}
									{videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (video != "" ? <ReactPlayer url={`${BASE_URL}/upload/${video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} /> : <img className="card-img-top" src="/assets/images/default_video.png" alt="Card image cap" />)}

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

									{imageUpload ? (<img className="card-img-top" src={imageUpload} alt="Card image" />) : (<img className="card-img-top" src={image != "" ? `${BASE_URL}/upload/${image.replace(/[\\]/g, '/')}` : "/assets/images/default_image.png"} alt="default image" />)}

									<div className="card-body">
										<div class='file file--upload'>
											<label for='data'>
												Upload
     								    </label>
											<input id='data' type='file' name="file" accept="image/*" onChange={inputHandleImage} />
										</div>

									</div>
								</div>



								<div class="cardBody">
									<div class="form-group formWrapper">







										<div style={{ marginTop: "25px" }}>
											<label htmlFor="exampleFormControlInput1">Tags</label>
											<select value={tag} class="form-control" id="exampleFormControlSelect1" onChange={(e) => setTag(e.target.value)} value={tag}>

												<option value="">Select Tag</option>

												{showTags.map((tag) => {
													return (
														<option>{tag.tagname}</option>
													)

												})}

											</select>
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
