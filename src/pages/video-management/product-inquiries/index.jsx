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

class ProductInquiries extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Product Inquiries',
			link: '#'
		},
		{
			title: 'Product Inquiry Management-List',
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

				<ChangeTitle title={'Home'} />

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
										<div class="row formWrapper align-items-center">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Search word:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="searchWrapper">
																<select>
																	<option value="">Product Name</option>
																	<option value="">Member ID</option>
																	<option value="">Member Name</option>
																</select>
																<input type="text" placeholder="Please enter your search term." />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Period Search:</label>
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
															<label>Processing Status:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="row">
																<div class="col">
																	<input class="customCheck" type="radio" id="all" name="all"
																		value="all" />
																	<label for="all"> All  </label>
																</div>
																<div class="col">
																	<input class="customCheck" type="radio" id="two"
																		name="two" value="two" />
																	<label for="two">Answer Completed</label>
																</div>
																<div class="col">
																	<input class="customCheck" type="radio" id="three"
																		name="three" value="three" />
																	<label for="three">Waiting for answer</label>
																</div>
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
									<div class="cardHeader clearfix">
										<h1>Product Inquiry Management-List</h1>
									</div>
									<div class="cardBody">
										<div className="tableSorting">
											<span>A total of 00</span>
											<a className="active" href="javascript:void(0)">Registration date <i className="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Product Name <i className="fa fa-caret-up"></i></a>
										</div>
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<th>#</th>
														<th>Product Name</th>
														<th>Inquiry Title</th>
														<th>Registration date and time</th>
														<th>Member ID</th>
														<th>Member Name</th>
														<th>Response date and time</th>
														<th>Response Handler</th>
														<th>Response Processing</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<td>1</td>
														<td>Vita</td>
														<td>I have a question.</td>
														<td>2021.08.10. 12:32:12</td>
														<td>Ground77</td>
														<td data-toggle="modal" data-target="#productInquiry">Hong Gil Dong</td>
														<td>2021.08.10. 12:32:12</td>
														<td>manager</td>
														<td>Answer complete</td>
													</tr>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<td>2</td>
														<td>Vita</td>
														<td>I have a question.</td>
														<td>2021.08.10. 12:32:12</td>
														<td>Ground77</td>
														<td data-toggle="modal" data-target="#productInquiry">Hong Gil Dong</td>
														<td> - </td>
														<td> - </td>
														<td>Waiting for answer</td>
													</tr>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<td>3</td>
														<td>Vita</td>
														<td>I have a question.</td>
														<td>2021.08.10. 12:32:12</td>
														<td>Ground77</td>
														<td data-toggle="modal" data-target="#productInquiry">Hong Gil Dong</td>
														<td> - </td>
														<td> - </td>
														<td>Temporary Storage</td>
													</tr>

												</tbody>
											</table>
										</div>
										<div class="tableDetails">
											<button class="myBtn btnSm btn-danger mr-2">Select Delete</button>
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


				<div class="modal fade" id="productInquiry" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-xl" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Inquiry Details</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>
							<div class="modal-body">
								<div className="row dataOnly">
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Author ID</label>
											<div className="infoText">Ground77</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Author name</label>
											<div className="infoText">Hong Gil Dong</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Creation date and time</label>
											<div className="infoText">2021.08.10. 12:12:32</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Product Name</label>
											<div className="infoText">Vita</div>
										</div>
									</div>
									<div className="col-12 col-md-12">
										<div className="formData">
											<label>Supplier</label>
											<div className="infoText">Vita</div>
										</div>
									</div>
									<div className="col-12 col-md-12">
										<div className="formData">
											<label>Inquiry Title</label>
											<div className="infoText">I have a question.</div>
										</div>
									</div>
									<div className="col-12 col-md-12">
										<div className="formData">
											<label>Content of inquiry</label>
											<div className="infoText">I think it's really good.</div>
										</div>
									</div>
								</div>

								<div class="row formWrapper">
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Administrator answer</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<textarea name="reason_of_making" rows="5"></textarea>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">

								<div class="tableDetails">
									<button class="myBtn btnSm btn-info">Temporary Storage</button>
									<span class="ml-2">Last Update : 2021.08.10 12:32:12</span>

									<button type="button" class="myBtn btnSm btn-primary float-right">List</button>
									<button class="myBtn btnSm btn-success mr-2 float-right">Reply registration</button>
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

export default ProductInquiries;

