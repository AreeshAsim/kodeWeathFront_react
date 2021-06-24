import React,{useState,useEffect} from 'react'
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import axios from "axios"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';

 function OrderManagement() {
  
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	
	const  [payments , showPayments] = useState({offset:0,tableData:[],orgTableData:[],perPage:10,currentPage:0}); 
 
    const [inputSearch,setSearch] = useState("");
	

	const  handlePagination = (e)=>{

		const selectedPage =  e.selected
		const data = payments.orgTableData
		
                
		const offset = selectedPage * payments.perPage
		console.log(offset);
		const  slice = data.slice(offset,offset + payments.perPage)
		 console.log(slice);

		 var newdata = {...payments}
		 newdata.tableData = slice
	
		 showPayments(newdata)
		}
	
   
	
	


const searchData = (e)=>{


	setSearch(e.target.value)
	handleSearch(e.target.value)

	

}




	
	useEffect(() => {
	   

		console.log(inputSearch);
   
	   axios.get(`${BASE_URL}/getAllPaymentDetails`).then((res)=>{   




	const data = res.data.data.reverse();
	
	
			const slice = data.slice(payments.offset,payments.offset + payments.perPage)
			showPayments({
				pageCount :  (data.length / payments.perPage),
				orgTableData :	res.data.data,
				tableData : slice,
				offset:0,
				perPage:10,
			})

	

}).catch((err)=>{



	showPayments({
		pageCount :  "",
		orgTableData :	[],
		tableData : [],
		offset:"",
		perPage:"",
	})

	console.log(err);
})
   
   
   }, [])
	
   const    handleSearch = (text) =>{

	console.log(text);
	const data1 = payments.orgTableData
	
	// const datafree = data1.filter(payment => payment.name === text || payment.email === text ||payment.phone_number === text || payment.subscription_title === text || payment.course_amount === text);
      const datafree = data1.filter(payment => payment.name.toLowerCase().includes(text.toLowerCase())||payment.email.toLowerCase().includes(text.toLowerCase())||payment.phone_number.includes(text)||  payment.subscription_title.toLowerCase().includes(text.toLowerCase()) ||  parseInt(payment.course_amount) == parseInt(text) ||  payment.status.toLowerCase().includes(text.toLowerCase())) 
	console.log(datafree);
	var newdata = {...payments}
	newdata.tableData = datafree
	// if(newdata.length > 0 )
	


		showPayments(newdata)




	


}
	
	
	
	
	
	
	
	
	const  breadcrumbNavigation = [
		{
			title: 'Order Management Page',
			link: '#'
		},
		{
			title: 'Order Management Page',
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
						<div class="row">
				
							<div class="col-12">
								<div class="contentCard">
									
									<div class="cardHeader">
										<h1>Order List</h1>
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
														<th>Email</th>
														<th>Contact Number</th>
														<th>Subscription Title</th>
														<th>Course Amount</th>
														<th>Payment Status</th>
														
													
													
													</tr>
												</thead>
												
												{payments.tableData.map((payment)=>{return(<>   
												<tbody>
													<tr>
														
														<td>{payment.name}</td>
														<td>{payment.email}</td>
														<td>{payment.phone_number}</td>
														<td>{payment.subscription_title}</td>
														<td>{`$${payment.course_amount}`}</td>
														<td><span class="badge badge-pill badge-primary">{payment.status}</span></td>
						
													</tr>
												
												
												

												</tbody>
												</>)  })}
											</table>

										</div>



										<ReactPaginate
                   					 previousLabel={<KeyboardArrowLeftIcon/>}
                   					 nextLabel={<KeyboardArrowRightIcon/>}
                   					 breakLabel={"..."}
                   					 breakClassName={"break-me"}
                   				     pageCount={payments.pageCount}
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

export default  OrderManagement