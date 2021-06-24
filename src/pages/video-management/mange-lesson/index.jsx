import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
// import './managecategory.css';
import axios from "axios"
import ReactHTMLParser from 'react-html-parser';
import { Link } from "react-router-dom";


export default function ListCategories() {
   

	const [courses,showCourses] = useState([]);
	const [bool,setbool] = useState(true);
	
	
    
       useEffect(() => {
		 
          
		   axios.get("http://207.180.212.174:3001/show/courses").then((res)=>{

		   console.log(res.data);

		    //  setTest(res.data[0].image)
		   showCourses(res.data);

		   })}, [bool])	

		

		   const deleteCategory = (id) => {
			
			
			// alert(id);
			axios
			  .delete("http://207.180.212.174:3001/delete/category/" + id)
			  .then((res) => {
				 
			   
				setbool(!bool)
			
			 
				 
			  });
			 
			  
		  };
	
	
	
	
	
	
	const breadcrumbNavigation = [
        {
            title: 'Manage Lesson Page',
            link: '#'
        },
        {
            title: 'Manage Lesson Page',
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

			

                <section class="pageWrapper">
					<div class="container-fluid">
						<div class="row">
				
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Lesson List</h1>
									</div>
									<div class="cardBody">

										
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
													    
														<th>Lesson Title</th>
														<th>Description</th>
														<th>Video Trailler</th>
														<th>Image</th>
														<th>Action</th>
													
													</tr>
												</thead>
												
												
												{courses.map((course)=>{return(<>   {course.lessons.map((lesson)=>{return(<> 
												<tbody>
												
												
												
												
												
												
											
													<tr>

													   <td>{lesson.title}</td>
													   <td>{ReactHTMLParser(lesson.description)}</td>
													   <td><ReactPlayer url={`http://207.180.212.174:3001/${lesson.video.replace(/[\\]/g, '/')}`} width="50px" height="50px" controls={true} /></td>
													    <td> <img src= {`http://207.180.212.174:3001/${lesson.image.replace(/[\\]/g, '/')}`} width="50px" height="50px"/></td>
														<td> 
														<Link to={"/lesson-edit"+lesson._id}>
															
															 <EditIcon/>
														</Link>	 
														<DeleteIcon onClick ={()=>deleteCategory(lesson._id)} style={{marginLeft:"20px",color:"red"}}/> 
														
														
														</td>
														
														
													
														
								
													
														</tr>
														
														{/* </>)})} */}
														 
												
										
												

												</tbody>
												</> ) })}        </>)         })}
											</table>

										</div>

										{/* <div class="tableDetails">
											<span class="mr-2">The selected order</span>
											<select>
												<option value="">Select order status </option>
												<option value="">Select order status </option>
											</select>
										</div> */}
										<div class="paginationWrapper clearfix">
											<ul class="pagination">
												<li class="page-item previous disabled">
													<a href="#" class="page-link">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
															stroke-linecap="round" stroke-linejoin="round"
															class="feather feather-arrow-left">
															<line x1="19" y1="12" x2="5" y2="12"></line>
															<polyline points="12 19 5 12 12 5"></polyline>
														</svg>
													</a>
												</li>
												<li class="page-item active"><a href="#" class="page-link">1</a></li>
												<li class="page-item "><a href="#" class="page-link">2</a></li>
												<li class="page-item next" id="style-3_next">
													<a href="#" class="page-link">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
															stroke-linecap="round" stroke-linejoin="round"
															class="feather feather-arrow-right">
															<line x1="5" y1="12" x2="19" y2="12"></line>
															<polyline points="12 5 19 12 12 19"></polyline>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


			

				<PageFooter />
			</React.Fragment>
      
       
    )
}
