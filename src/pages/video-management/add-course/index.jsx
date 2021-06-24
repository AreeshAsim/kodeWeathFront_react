
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
import $ from 'jquery';


import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {Link} from "react-router-dom"

import './addcourse.css';
import axios from 'axios';


export default function AddCourse(props) {

	const BASE_URL = process.env.REACT_APP_BASE_URL;
	const [title, setTitle] = useState("");
	const [responseTitle, courseTitle] = useState("");
	const [responseId, courseId] = useState("");
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
	const [inputField, setInputField] = useState(false);
	const [error, setError] = useState("")

	const [showdata, setSubmitData] = useState("");
	const [coursePlan, setPlan] = useState("free");
	const [checked,setChecked] = useState(true);



	useEffect(() => {



		axios.get(`${BASE_URL}/show/categories`).then((res) => {


			var defaultCategory = props.location.aboutProps;
			var category = (defaultCategory == undefined) ? "" : defaultCategory.responseTitle;
		  if (category != "") {
				setCategory(res.data.data.length-1)
			}
		
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
		setTitle("");
		setDescription("");
		setImageUpload("")
		setImage("")
		setVideoUpload("");
		setVideo("")
		setCategory("")
		setTag("")
		setPrice("");
		setSubmitData("")
		setError("");
		setPlan("free");
		courseTitle("")
		setInputField("");
		setChecked(true)

	}

	const breadcrumbNavigation = [
		{
			title: 'Add Course Page',
			link: '#'
		},
		{
			title: 'Course',
			link: '#'
		}
	]


	const masterDetail = (e) => {
		setChecked(false)
		setInputField(!false)
		// setType("1")

		setPlan("master");

	}

	const freeDetail = (e) => {
		setChecked(true)
		setInputField(false)

		setPlan("free");
		setPrice("");

	}


	const addCourse = (e) => {

		e.preventDefault()
		
   
		console.log("selectCategory")
		console.log(selectCategory)
		if (selectCategory == "") {
			setError("Please Select Category");
		}

		else if (title == "") {
			setError("Please Fill Title")
		}
		else if (description == "") {

			setError("Please Fill Description")
		}
		else if (video == "") {
			setError("Please Select Video");
		}
	
		else if (coursePlan == "master" && price == "") {
			setError("Please write Price")



		}

		else {


			$("#loader").removeClass('display');
			const data = new FormData();
			data.append("title", title);
			data.append("description", description);
			data.append("category", showCategories[selectCategory].title)
			data.append("category_desc", showCategories[selectCategory].description)
			data.append("category_image", showCategories[selectCategory].image)
			data.append("category_video", showCategories[selectCategory].video)
			data.append("video", video);
			data.append("image", image);
			data.append("price", price)
			data.append("courseplan", coursePlan)
			data.append("tagname", tag)


			axios.post(`${BASE_URL}/create/course`, data).then((res) => {

				$("#loader").addClass('display');	
			   setPlan(res.data.coursePlan);
			   setPrice("");
			   setInputField(false);
				
				courseTitle(res.data.title);
				courseId(res.data._id)
				setError("");
				setSubmitData("Data Submit Successfully");
				setPublishButton(false)
				setPlan("free")
				setChecked(true)
			

				setTimeout(() => {
					setSubmitData('');
					setPublishButton(true)
					setError('');
					
				}, 2000);

				

			})


            
				setSubmitData("");
		
         
		


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
					<form onSubmit={addCourse} encType="multipart/form-data">
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
											<label htmlFor="exampleFormControlInput1">Category</label>
											<select class="form-control" id="exampleFormControlSelect1" name="category" onChange={(e) => { setCategory(e.target.value) }} value={selectCategory}>
												<option value="">Select Category</option>
												{showCategories.map((category, index) => {
													return (<>

														<option value={index}>{category.title}</option>
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
										<div className="form-group">
										<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }} >
												<div className="form-check">
													<input className="form-check-input" checked={!checked}  value={coursePlan}  type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={masterDetail} />
													<label className="form-check-label" htmlFor="flexRadioDefault1">
														Master 
									         	</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" checked={checked} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={coursePlan} onClick={freeDetail} />
													<label className="form-check-label" htmlFor="flexRadioDefault2">
														Free
 									         	 </label>
												</div>	</div>
												<>{inputField ? (<div style={{ position: "relative" }}><label htmlFor="exampleFormControlInput1">Course Price</label><input type="number" name="courseplan" value={price} placeholder="Enter Price" className="form-control" id="exampleFormControlInput1" onChange={(e) => setPrice(e.target.value)} /><i className="w_icon"><MonetizationOnIcon /></i></div>) : (null)}</>
												</div>
												
												
											

									</div>
								   </div>
							        	
										  <div id={"loader"} className="display">Loading</div>
										
										{responseTitle !="" ?(                     
												<div class="contentCard ">
													<div style={{display:"flex", justifyContent:"space-between"}}>
									 		  	<h3 className="heading">{responseTitle}</h3> <Link to ={{pathname:"/add-lesson",aboutProps:{responseId}}}><button type="button" className="btn btn-danger btn-sm"> Add Lesson </button></Link>  
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
									{videoUpload ? (<ReactPlayer url={videoUpload} width="100%" height="100%" controls={true} />) : (<img className="card-img-top" src="/assets/images/default_video.png" alt="default video" />)}
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
												<select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setTag(e.target.value)} value={tag}>

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
