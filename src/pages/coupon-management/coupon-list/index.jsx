/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React from 'react';
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
// date time picker 
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

class CouponList extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Coupon Management',
			link: '#'
		},
		{
			title: 'Coupon List',    
			link: '#'
		}
	]


	handleEvent(event, picker) {
		console.log(picker.startDate.toDate());
		console.log(picker.endDate.toDate());
	}

	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Coupon List'} />

				{/*SideBar*/}
				<SideBar />

				{/*Page Header*/}
				<PageHeader />

				<BreadCrumb navigation={this.breadcrumbNavigation} />

				{/* main content starts here */}
				<section class="pageWrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader clearfix">
										<h1>Filters

                                <svg id="Capa_1" enable-background="new 0 0 20 20" height="20" viewBox="0 0 512 512"
												width="20" xmlns="http://www.w3.org/2000/svg">
												<g>
													<path d="m90.5 0h-30v362h-30v90h30v60h30v-60h30v-90h-30zm0 422h-30v-30h30z" />
													<path
														d="m481.5 362h-30v-362h-30v362h-30v90h30v60h30v-60h30zm-30 60h-30v-30h30z" />
													<path
														d="m331.5 0h-30v222h-30v90h30v200h30v-200h30v-90h-30zm0 282h-30v-30h30z" />
													<path
														d="m210.5 0h-30v53.652h-30v90h30v368.348h30v-368.348h30v-90h-30zm0 113.652h-30v-30h30z" />
												</g>
											</svg>
										</h1>
										<span class="toogleCard open">
											<i class="fa fa-angle-down"></i>
										</span>
									</div>

									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Coupon Name:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" placeholder="Enter the coupon name." />
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Registration Date</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<DateRangePicker
																initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
																onEvent={this.handleEvent}
															>
																<input type="text" name="" id="" />
																{/* <button>Click Me To Open Picker!</button> */}
															</DateRangePicker>

														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Coupon Name:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="coupon_status" value="1" checked />
															<label className="mr-4 ml-2"> All </label>
															<input type="radio" name="coupon_status" value="2" />
															<label className="mr-4 ml-2"> Automatic issuance Coupon</label>
															<input type="radio" name="coupon_status" value="3" />
															<label className="mr-4 ml-2"> Download Coupon</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Choose a Benefit:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="benefit_status" value="1" checked />
															<label className="mr-4 ml-2"> All </label>
															<input type="radio" name="benefit_status" value="2" />
															<label className="mr-4 ml-2"> Discount on Order Amount</label>
															<input type="radio" name="benefit_status" value="3" />
															<label className="mr-4 ml-2"> Discount on Chipping</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12 text-right">
												<button class="myBtn">
													Search <i class="fa fa-search"></i>
												</button>
											</div>


										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Cancellation List</h1>
									</div>
									<div class="cardBody">

										<div class="tableSorting">
											<span>A total of 00 orders were found. |   Total payments for search results orders : <b>252,000,000 won</b></span>
											<a class="active" href="javascript:void(0)">Registration date <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Product Name <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Price <i class="fa fa-caret-up"></i></a>
										</div>
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<th>#</th>
														<th>Type</th>
														<th>Coupon name</th>
														<th>Benefit</th>
														<th>Date</th>
														<th>Download date</th>
														<th>Usable date</th>
														<th>available</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td scope="row">1</td>
														<td>Automatic issued</td>
														<td>-</td>
														<td>-</td>
														<td>2020.07.30</td>
														<td>2020.07.30 ~ 2020.08.30</td>
														<td>2020.07.30 ~ 2020.08.30</td>
														<td>Available</td>
													</tr>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td scope="row">2</td>
														<td>Download</td>
														<td>-</td>
														<td>Order amount discount (20%)</td>
														<td>2020.07.30</td>
														<td>30 days from the date of issue</td>
														<td>2020.07.30 ~ 2020.08.30</td>
														<td>Expired</td>
													</tr>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td scope="row">1</td>
														<td>Automatic issued</td>
														<td>-</td>
														<td>Shipping cost discount (2,500 won)</td>
														<td>2020.07.30</td>
														<td>2020.07.30 ~ 2020.08.30</td>
														<td>2020.07.30 ~ 2020.08.30</td>
														<td>Available</td>
													</tr>

												</tbody>
											</table>

										</div>

										<div class="tableDetails">
											<button className="myBtn btnSm btn-danger" data-toggle="modal" data-target="#confirmDelete">Delete Selected</button>
										</div>
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
				<div class="modal fade" id="confirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Delete Selected Coupon</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>
							<div class="modal-body">
								<p>Do you want to delete the selected post?
								Deleted information is not recovered.</p>
							</div>
							<div class="modal-footer">
								<div className="tableDetails text-center">

									<button class="myBtn btnSm btn-simple" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
									<button class="myBtn btnSm btn-danger ml-2">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<PageFooter />
			</React.Fragment>
		);
	}
}

export default CouponList;

