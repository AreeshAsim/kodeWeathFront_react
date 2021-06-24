import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ImageIcon from '@material-ui/icons/Image';
//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import './managecategory.css';
import axios from "axios"
import ReactHTMLParser from 'react-html-parser';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';


export default function ListCategories() {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
   

	// const [categories,showCategories] = useState([]);
	const  [categories , showCategories] = useState({offset:0,tableData:[],orgTableData:[],perPage:4,currentPage:0});
	const [bool,setbool] = useState(true);
	const [inputSearch,setSearch] = useState("");


	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = categories.orgTableData
		
                
		const offset = selectedPage * categories.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + categories.perPage)
		 console.log(slice);

		 var newdata = {...categories}
		 newdata.tableData = slice
	
		 showCategories(newdata)
		}
	

		const searchData = (e)=>{


			setSearch(e.target.value)
			handleSearch(e.target.value)
		
			
		
		}





	
	
    
       useEffect(() => {
		 
		   axios.get(`${BASE_URL}/show/categories`).then((res)=>{

		   
				if(res.data.type == 200){
					const data = res.data.data.reverse();
					const slice = data.slice(categories.offset,categories.offset + categories.perPage)
					
					
					
					showCategories({
						pageCount :  (data.length / categories.perPage),
						orgTableData :	res.data.data,
						tableData : slice,
						offset:0,
						perPage:4,
					})
					
					
					
					
				}else{
				
					// showCategories([]);
					showCategories({
						pageCount :  "",
						orgTableData :	[],
						tableData : [],
						offset:"",
						perPage:"",
					})
						


				}
		   }
		   ).catch ((error) => {
				console.log(error)
				// showCategories([]);

				showCategories({
					pageCount :  "",
					orgTableData :	[],
					tableData : [],
					offset:"",
					perPage:"",
				})
		   })	
	
		}, [bool])	

		

		   const deleteCategory = (id) => {
			
			
			// alert(id);
			axios
			  .delete(`${BASE_URL}/delete/category/` + id)
			  .then((res) => {
				 
			   
				setbool(!bool)
			
			 
				 
			  });
			 
			  
		  };

		  const    handleSearch = (text) =>{

			console.log(text);
			const data1 = categories.orgTableData;
			
		
			  const categorydata = data1.filter(category => category.title.toLowerCase().includes(text.toLowerCase())) 
			
			var newdata = {...categories}
			newdata.tableData = categorydata
		
			
		
		
			showCategories(newdata)
		
		
		
		
			
		
		
		}
	
	
	
	
	
	
	const breadcrumbNavigation = [
        {
            title: 'Manage Categories Page',
            link: '#'
        },
        {
            title: 'Manage Categories Page',
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

							<div class="btn_align">
               
             			  <Link to ="/add-category">
               			 	<button className="btn btn-danger">Add Category</button>
                		  </Link>
               			 </div>
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Category List</h1>
										<div class="input-group search-input">
  										<div class="form-outline" >

										  <input type="text" name="name" placeholder="Search" className="form-control" id="exampleFormControlInput1" defaultValue={inputSearch} onChange={searchData} />
    						              
    						             </div>
 							
								        </div>
									
									
									
									
									</div>
									<div class="cardBody">

										
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														
														<th>Category Title</th>
														<th>Description</th>
														<th>Video Trailler</th>
														<th>Image</th>
														
														<th>Action</th>
														
													
													</tr>
												</thead>
												<tbody>
												{categories.tableData.map((category,index)=>{ return(<>  	
													<tr>
													
														<td>{category.title}</td>
														<td style ={{textAlign:"left"}}>{ReactHTMLParser(category.description)}</td>
														<td style={{ verticalAlign: "middle"}}>
														
														<PlayCircleFilledIcon type="button" data-toggle="modal" data-target={"#a"+index}/> 
														
														<div class="modal fade" id={"a"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
														  <div class="modal-dialog" role="document">
															<div class="modal-content">
															  <div class="modal-header">
															  
																<button type="button" class="close" data-dismiss="modal" aria-label="Close">
																  <span aria-hidden="true">&times;</span>
																</button>
															  </div>
															  <div class="modal-body" style={{padding:"0px"}}>
															  {category.video!==""?( <ReactPlayer url={`${BASE_URL}/upload/${category.video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} />):(<div><img src="/assets/images/default_video.png" width="100%" height="100%"/></div>)}
															  </div>
															
															</div>
														  </div>
														</div>
													</td>
													<td style={{ verticalAlign: "middle"}}>
														
														<ImageIcon type="button" data-toggle="modal" data-target={"#b"+index}/> 
														
														<div class="modal fade" id={"b"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
														  <div class="modal-dialog" role="document">
															<div class="modal-content">
															  <div class="modal-header">
															  
																<button type="button" class="close" data-dismiss="modal" aria-label="Close">
																  <span aria-hidden="true">&times;</span>
																</button>
															  </div>
															  <div class="modal-body" style={{padding:"0px"}}>
																{category.image!==""?(<img src={`${BASE_URL}/upload/${category.image.replace(/[\\]/g, '/')}`} width="100%" height="100%" />):(<div><img src="/assets/images/default_image.png" width="100%" height="100%" /></div>)} 
															  </div>
															
															</div>
														  </div>
														</div>
													</td>		
													
													
														
														<td style={{verticalAlign:"middle"}}>

								                             
														<Link to={"/category-edit"+category._id}>
														
															<EditIcon/>
														</Link>	
															
														    
															<DeleteIcon  onClick ={()=>deleteCategory(category._id)} style={{color:"red"}}/>
														
														</td>
	

														</tr>
														
														</>)})}
														
												
										
												

												</tbody>
											</table>

										</div>
										<ReactPaginate
                   					 previousLabel={<KeyboardArrowLeftIcon/>}
                   					 nextLabel={<KeyboardArrowRightIcon/>}
                   					 breakLabel={"..."}
                   					 breakClassName={"break-me"}
                   				     pageCount={categories.pageCount}
                   					 marginPagesDisplayed={2}
                   					 pageRangeDisplayed={5}
                  				     onPageChange={handlePagination}
                   					 containerClassName={"pagination"}
                   					 subContainerClassName={"pages pagination"}
                   					 activeClassName={"active"}
					                 />
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
