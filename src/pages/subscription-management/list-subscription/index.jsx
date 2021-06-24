import React,{useEffect,useState} from 'react'

//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';


// import './managecategory.css';
import axios from "axios"
import ReactHTMLParser from 'react-html-parser';
import {Link} from "react-router-dom"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';


export default function ListSubcription() {
   

	
	const  [subscriptions , showSubscription] = useState({offset:0,tableData:[],orgTableData:[],perPage:4,currentPage:0}); 
	const [bool ,setBool] = useState(true);
	const [inputSearch,setSearch] = useState("");

	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = subscriptions.orgTableData
		
                
		const offset = selectedPage * subscriptions.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + subscriptions.perPage)
		 console.log(slice);

		 var newdata = {...subscriptions}
		 newdata.tableData = slice
	
		showSubscription(newdata)
		}

		const searchData = (e)=>{


			setSearch(e.target.value)
			handleSearch(e.target.value)
		
			
		
		}
		const    handleSearch = (text) =>{

			console.log(text);
			const data = subscriptions.orgTableData
			
		
			  const subscriptiondata = data.filter(subscription =>  parseInt(subscription.price) == parseInt(text)|| (subscription.type == 0 ? ("monthly plan").includes(text.toLowerCase()):("year plan").includes(text.toLowerCase()))) 
			
			var newdata = {...subscriptions}
			newdata.tableData = subscriptiondata
		
			
		
		
			showSubscription(newdata)
		
		
		
		
			
		
		
		}


	
	
	
    
       useEffect(() => {
		 
          
		   axios.get(`${BASE_URL}/show/subscription`).then((res)=>{

		  
				if(res.data.type == 200){
					const data = res.data.data.reverse();
					const slice = data.slice(subscriptions.offset,subscriptions.offset + subscriptions.perPage)
					
					showSubscription({
						pageCount :  (data.length / subscriptions.perPage),
						orgTableData :	res.data.data,
						tableData : slice,
						offset:0,
						perPage:4,
					})
					
					
				
				}else{
				
					showSubscription({
						pageCount : "",
						orgTableData :	[],
						tableData : [],
						offset:"",
						perPage:"",
					})
					
				}
		   }
		   ).catch ((error) => {
				console.log(error)
				// showSubscription([]);
				showSubscription({
					pageCount : "",
					orgTableData :	[],
					tableData : [],
					offset:"",
					perPage:"",
				})
		   })	
		
		}, [bool])	

	
		   const deleteSubscription = (id)=>{

			axios
			.delete(`${BASE_URL}/delete/subscription/` + id)
			.then((res) => {
			   
			 
				setBool(!bool)
		  
		   
			   
			});

		     
		}
	
	
	
	
	
	
	const breadcrumbNavigation = [
        {
            title: 'Manage Subcription Page',
            link: '#'
        },
        {
            title: 'Manage Subscription Page',
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
               
               <Link to ="/add-subscription">
                <button className="btn btn-danger">Add Subscription</button>
                </Link>
                </div>
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Subscription List</h1>
									
									
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
														
														<th>Subscription Title</th>
														<th>Price</th>
														<th>Description</th>
														<th>Image</th>
														<th>Pkg</th> 
														 
														<th>Action</th>
													
													</tr>
												</thead>
												<tbody>
												{subscriptions.tableData.map((subscription,index)=>{ return(<>  	
													<tr>
													
														<td>{subscription.title}</td>
														 <td>{`$${subscription.price}`}</td>
														<td style={{textAlign:"left"}}>{ReactHTMLParser(subscription.description)}</td>



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
																{subscription.image!==""?(<img src={`${BASE_URL}/upload/${subscription.image.replace(/[\\]/g, '/')}`} width="100%" height="100%" />):(<div><img src="/assets/images/default_image.png" width="100%" height="100%" /></div>)} 
															  </div>
															
															</div>
														  </div>
														</div>
													</td>		



														 
															 {/* {subscription.image!==""?(<td><img src={`${BASE_URL}/upload/${subscription.image.replace(/[\\]/g, '/')}`} width="50px" height="50px"/></td>):(<div><td><img src="/assets/images/default_image.png" width="50px" height="50px"/></td></div>)} */}
	
														<td>
														    {subscription.type == 0 ? (<p>Monthly Plan</p>):(<p> </p>)}
															{subscription.type == 1 ? (<p>Year Plan</p>):(<p>  </p>)}

														</td> 
														<td style ={{verticalAlign:"middle"}}>
														<Link to={"/edit-"+subscription._id}>
															
														   <EditIcon/>
															</Link>	
                                                            
															
															<DeleteIcon  onClick ={()=>deleteSubscription(subscription._id)} style={{ color:"red"}}/>

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
                    pageCount={subscriptions.pageCount}
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

