
import React,{useEffect,useState} from "react";
import PageHeader from "../../../components/page-header";
import ChangeTitle from "../../../components/change_page_title";
import PageFooter from "../../../components/page-footer";
import SideBar from "../../../components/side-bar";
import BreadCrumb from "../../../components/bread-crumb";
import axios from "axios"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';


function ListTags() {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
 	
	const  [tags , showTags] = useState({offset:0,tableData:[],orgTableData:[],perPage:10,currentPage:0}); 
	const [bool ,setbool] = useState(true);
	const [inputSearch,setSearch] = useState("");
	
	const breadcrumbNavigation = [
    {
      title: "Manage Tag Page",
      link: "#",
    },
    {
      title: "Manage Tag Page",
      link: "#",
    },
  ];

  
	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = tags.orgTableData
		
                
		const offset = selectedPage * tags.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + tags.perPage)
		 console.log(slice);

		 var newdata = {...tags}
		 newdata.tableData = slice
	
		 showTags(newdata)
		}

		const searchData = (e)=>{


			setSearch(e.target.value)
			handleSearch(e.target.value)
		
			
		
		}



useEffect(() => {

	
	axios.get(`${BASE_URL}/show/tags`).then((res)=>{
		const data = res.data.reverse();
		const slice = data.slice(tags.offset,tags.offset + tags.perPage)
		showTags({
			pageCount :  (data.length / tags.perPage),
			orgTableData :	res.data,
			tableData : slice,
			offset:0,
			perPage:10,
		})
		


	}).catch((error)=>{
		showTags({
			pageCount :  "",
			orgTableData :	[],
			tableData :  [],
			offset:"",
			perPage:"",
		})

	
	})
	
	
}, [bool])







  const deleteTag = (id)=>{
	axios
	.delete("http://207.180.212.174:3001/delete/tag/" + id)
	.then((res) => {
	   
	 
	  setbool(!bool)
  
   
	   
	});

      
  }
  const    handleSearch = (text) =>{

	console.log(text);
	const data = tags.orgTableData
	

	  const tegdata = data.filter(tag => tag.tagname.toLowerCase().includes(text.toLowerCase())) 
	
	var newdata = {...tags}
	newdata.tableData = tegdata

	


	showTags(newdata)




	


}

  return (
    /*Content Area*/
    <React.Fragment>
      <ChangeTitle title={"Home"} />

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
								
							<Link to ="/add-tags">
               			 	<button className="btn btn-danger">Add Tag</button>
                		  </Link>
								</div>
								
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Tag List</h1>
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
														
														<th>Name</th>
														
														<th>Action</th>
													
													
													</tr>
												</thead>
												{tags.tableData.map((tag,index)=>{ return(<>	 
												<tbody>
											
													<tr>
													
														 <td>{tag.tagname}</td> 
														 <td>


														 <Link to={"/tag-edit"+tag._id}>
														
															<EditIcon/>
														</Link>	
															
														    
															<DeleteIcon onClick ={()=>deleteTag(tag._id)} style={{marginLeft:"20px",color:"red"}}/> 
														 </td>
													
														 
 													
													</tr>
												
													
												</tbody>
												</>)        })}
											
											</table>

										</div> 


										<ReactPaginate
                   					 previousLabel={<KeyboardArrowLeftIcon/>}
                   					 nextLabel={<KeyboardArrowRightIcon/>}
                   					 breakLabel={"..."}
                   					 breakClassName={"break-me"}
                   				     pageCount={tags.pageCount}
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
				<PageFooter/>
    </React.Fragment>
  );
}

export default ListTags;
