
import React,{useEffect,useState} from "react";
import PageHeader from "../../../components/page-header";
import ChangeTitle from "../../../components/change_page_title";
import PageFooter from "../../../components/page-footer";
import SideBar from "../../../components/side-bar";
import BreadCrumb from "../../../components/bread-crumb";
import axios from "axios"
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';

import { IoCopyOutline } from "react-icons/io5";
import $ from 'jquery';




function ListDiscount() {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	
 	
	const  [discounts , showDiscounts] = useState({offset:0,tableData:[],orgTableData:[],perPage:10,currentPage:0}); 
	const [bool ,setbool] = useState(true);
	
	
	const breadcrumbNavigation = [
    {
      title: "Manage Discount Page",
      link: "#",
    },
    {
      title: "Manage Discount Page",
      link: "#",
    },
  ];

  
	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = discounts.orgTableData
		
                
		const offset = selectedPage * discounts.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + discounts.perPage)
		 console.log(slice);

		 var newdata = {...discounts}
		 newdata.tableData = slice
	
		 showDiscounts(newdata)
		}

		const searchData = (e)=>{


			
			handleSearch(e.target.value)
		
			
		
		}





useEffect(() => {

	
	axios.get(`${BASE_URL}/show/discounts`).then((res)=>{
		const data = res.data.reverse();
		const slice = data.slice(discounts.offset,discounts.offset + discounts.perPage)
		showDiscounts({
			pageCount :  (data.length / discounts.perPage),
			orgTableData :	res.data,
			tableData : slice,
			offset:0,
			perPage:10,
		})
		


	}).catch((error)=>{
		showDiscounts({
			pageCount :  "",
			orgTableData :	[],
			tableData :  [],
			offset:"",
			perPage:"",
		})

	
	})
	
	
}, [bool])


const    handleSearch = (text) =>{

	console.log(text);
	const data1 = discounts.orgTableData;
	

	  const discountdata = data1.filter(discount => discount.discounttitle.toLowerCase().includes(text.toLowerCase()) || parseInt(discount.discountprice) == parseInt(text)||(discount.type == 0 ? ("fixed discount").includes(text.toLowerCase()):("percentage").includes(text.toLowerCase()))) 
	
	var newdata = {...discounts}
	newdata.tableData = discountdata

	


	showDiscounts(newdata)




	


}









const copytoclip = (index) => {
	// console.log(discounts.orgTableData[index].randnumber);
	console.log("slected")
	const el = document.createElement('textarea');
	el.value =  discounts.orgTableData[index].randnumber;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	$('.copyMsg[copyindex="index-' + index + '"]').fadeIn();
	setTimeout(() => {
		$('.copyMsg[copyindex="index-' + index + '"]').fadeOut();
	},2000);	
}






  const deleteDiscount = (id)=>{
	axios
	.delete(`${BASE_URL}/delete/discount/`+ id)
	.then((res) => {
	   
	 
	  setbool(!bool)
  
   
	   
	});

      
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
								
							<Link to ="/add-discount">
               			 	<button className="btn btn-danger">Add Discount</button>
                		  </Link>
								</div>
								
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Discount List</h1>
										<div class="input-group search-input">
  										<div class="form-outline" >

										  <input type="text" name="name" placeholder="Search" className="form-control" id="exampleFormControlInput1"  onChange={searchData} />
    						              
    						             </div>
 							
								        </div>
									</div>
									<div class="cardBody">

										
										 <div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														
														<th>Discount Title</th>
													    <th>Discount Type</th> 
														<th>Discount Price</th>
														 <th>Code</th>
														
													
														
														<th>Action</th>
													
													
													</tr>
												</thead>
												 {discounts.tableData.map((discount,index)=>{ return(<>	 
												<tbody>
											
													<tr>
													
														 <td>{discount.discounttitle}</td> 
														 
														 <td>
													    {discount.type == 0 ? (<p>Fixed Discount</p>):(<p> </p>)}
													    {discount.type == 1 ? (<p>Percentage</p>):(<p>  </p>)}

														</td> 
														<td>
															{discount.type == 0 ? (<p>{discount.discountprice}$</p>):(<p>{discount.discountprice}%</p>)}
															
															
															
															
														</td>
														 
														
														 <td>{discount.randnumber}</td> 
														 
														 <td>


														    
															<DeleteIcon onClick ={()=>deleteDiscount(discount._id)} style={{marginLeft:"20px",color:"red"}}/>
															 <span class="copyParent">
																<span style={{marginLeft:"10px"}} type="button" onClick={()=>{copytoclip(index)}} ><IoCopyOutline size={18}/></span>
																<span style={{marginLeft:"10px"}} copyindex={'index-'+ index} className="badge badge-dark copyMsg">Copied</span>
															 </span>
															 
															
														
														
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
                   				     pageCount={discounts.pageCount}
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

export default ListDiscount;
