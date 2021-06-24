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

class MemberList extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Member Management',
			link: '#'
		},
		{
			title: 'Membership Status',
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

				<ChangeTitle title={'Membership Status'} />

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
															<label>Subscription Date :</label>
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
															<label>Certification Date:</label>
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
															<label>Final Login:</label>
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
															<label>State:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<select>
																<option value="">All</option>
																<option value="">Normal Members</option>
																<option value="">Dormant Members</option>
																<option value="">Suspended Members</option>
															</select>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Search for a period:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div className="searchWrapper">
																<select>
																	<option value="">All</option>
																	<option value="">ID/Email</option>
																	<option value="">Name</option>
																	<option value="">Mobile Phone Number</option>
																</select>
																<input type="text" placeholder="Please enter a search word." />
															</div>
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
										<h1>Cumulative Membership Status</h1>
									</div>
									<div class="cardBody">
										<div className="tableSorting">
											<span>Total  30/300,000</span>

											<select>
												<option value="">30</option>
												<option value="">50 </option>
												<option value="">100 </option>
												<option value="">200 </option>
											</select>
											<a class="active" href="javascript:void(0)">Subscription Date  <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Final Login <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">State <i class="fa fa-caret-up"></i></a>
										</div>
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<th>No</th>
														<th>ID/Email</th>
														<th>Name</th>
														<th>Mobile Phone Bumber</th>
														<th>Subscription Date</th>
														<th>Final Login</th>
														<th>State</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td>1</td>
														<td>sample@gmail.com</td>
														<td>홍길동</td>
														<td>010-1245-****</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>Normal members</td>
													</tr>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td>1</td>
														<td>sample@gmail.com</td>
														<td>홍길동</td>
														<td>010-1245-****</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>Normal members</td>
													</tr>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td>1</td>
														<td>sample@gmail.com</td>
														<td>홍길동</td>
														<td>010-1245-****</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>Normal members</td>
													</tr>
													<tr>
														<td><input type="checkbox" class="customCheck" /></td>
														<td>1</td>
														<td>sample@gmail.com</td>
														<td>홍길동</td>
														<td>010-1245-****</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>YYYY-MM-DD hh:mm</td>
														<td>Normal members</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="tableDetails mb-4">
											<button class="myBtn btnSm btn-info">Download Excel</button>
											<button class="myBtn btnSm btn-success float-right">Member Registration</button>
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

				<PageFooter />

			</React.Fragment>
		);
	}
}

export default MemberList;

