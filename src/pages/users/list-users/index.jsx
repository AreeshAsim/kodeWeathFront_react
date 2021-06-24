import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/page-header";
import ChangeTitle from "../../../components/change_page_title";
import PageFooter from "../../../components/page-footer";
import SideBar from "../../../components/side-bar";
import BreadCrumb from "../../../components/bread-crumb";
import axios from "axios"
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';


function ListUsers() {


	const BASE_URL = process.env.REACT_APP_BASE_URL;
	const  [users , showUsers] = useState({offset:0,tableData:[],orgTableData:[],perPage:10,currentPage:0});
	const [inputSearch,setSearch] = useState("");
	
	
	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = users.orgTableData
		
                
		const offset = selectedPage * users.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + users.perPage)
		 console.log(slice);

		 var newdata = {...users}
		 newdata.tableData = slice
	
		 showUsers(newdata)
		}
		const searchData = (e)=>{


			setSearch(e.target.value)
			handleSearch(e.target.value)
		
			
		
		}




	useEffect(() => {


		axios.get(`${BASE_URL}/getAllUsersDetails`).then((res) => {

	
			const data = res.data.data.reverse();
			const slice = data.slice(users.offset,users.offset + users.perPage)
			showUsers({
				pageCount :  (data.length / users.perPage),
				orgTableData :	res.data.data,
				tableData : slice,
				offset:0,
				perPage:10,
			})




		}).catch((err) => {

			// console.log(err);
			showUsers({
				pageCount :  "",
				orgTableData :	[],
				tableData : [],
				offset:"",
				perPage:"",
			})




		})


	}, [])
	const    handleSearch = (text) =>{

		console.log(text);
		const data = users.orgTableData
		
	
		  const userdata = data.filter(user => user.nickName.toLowerCase().includes(text.toLowerCase())||user.email_address.toLowerCase().includes(text.toLowerCase())||user.phone_number.includes(text)) 
		
		var newdata = {...users}
		newdata.tableData = userdata
	
		
	
	
		showUsers(newdata)
	
	
	
	
		
	
	
	}









	const breadcrumbNavigation = [
		{
			title: "Manage UsersList Page",
			link: "#",
		},
		{
			title: "Manage UsersList Page",
			link: "#",
		},
	];

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
								
								<Link to ="/add-users">
									<button className="btn btn-danger">Add User</button>
							  </Link>
									</div>


							<div class="contentCard">
								<div class="cardHeader">
									<h1>Users List</h1>
								
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

													<th>Nick Name</th>

													<th>Email</th>
													<th>Contact Number </th>
													<th>Created Date</th>
													<th>Date Of Birth</th>


												</tr>
											</thead>

											{users.tableData.map((user) => {
												return (<>
													<tbody>
														<tr>

															<td>{user.nickName}</td>
															<td>{user.email_address}</td>
															<td>{user.phone_number}</td>
															<td>
																<Moment format="D MMM YYYY">{user.created_date}</Moment>

															</td>
															<td>
																<Moment format="D MMM YYYY">
																	{user.date_of_birth}</Moment>
															</td>

														</tr>




													</tbody>
												</>)
											})}
										</table>

									</div>


									<ReactPaginate
                   					 previousLabel={<KeyboardArrowLeftIcon/>}
                   					 nextLabel={<KeyboardArrowRightIcon/>}
                   					 breakLabel={"..."}
                   					 breakClassName={"break-me"}
                   				     pageCount={users.pageCount}
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
	);
}

export default ListUsers;
