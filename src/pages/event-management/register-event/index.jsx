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

class RegisterEvent extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Event Management',
			link: '#'
		},
		{
			title: 'Register Event',
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

				<ChangeTitle title={'Register Eevnt'} />

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
										<h1>Event Registration</h1>
									</div>
									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Event title <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" placeholder="Enter the event name." />
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Progress period <span>*</span></label>
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
															<label>Display status</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="display_status" value="1" checked />
															<label> Exhibition </label>
															<input type="radio" name="display_status" value="2" />
															<label> Unexhibition</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Enter the event name.</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="row">
																<div class="col">
																	<input type="radio" name="event_name" value="1" checked />
																	<label> Unexposed </label>
																	<input type="radio" name="event_name" value="2" />
																	<label> Exposure</label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Popup image</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<label>* File extension jpg, gif, png (*** x *** size)</label>
															<div className="inputFile">
																<input name="product_thumbnails" type="file" multiple />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Event image</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<label>* File extension jpg, gif, png (*** x *** size)</label>
															<div className="inputFile">
																<input name="product_thumbnails" type="file" multiple />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Event product</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div className="tableSorting">
																<button className="myBtn btnSm">Product search</button>
															</div>
															<div class="table-responsive customStriped">
																<table class="table">
																	<thead>
																		<tr>
																			<th>#</th>
																			<th>Image</th>
																			<th>Product Name</th>
																			<th>Price</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>1</td>
																			<td><img class="img-80" src="/assets/images/placeholder.jpg" alt="alt-img" /></td>
																			<td>Vitamin C</td>
																			<td>10,000 won</td>
																		</tr>
																		<tr>
																			<td>1</td>
																			<td><img class="img-80" src="/assets/images/placeholder.jpg" alt="alt-img" /></td>
																			<td>Vitamin C</td>
																			<td>10,000 won</td>
																		</tr>

																	</tbody>
																</table>

															</div>
															<div className="tableDetails">
																<button className="myBtn btnSm btn-danger">Delete</button>
															</div>

														</div>
													</div>
												</div>
											</div>



											<div class="col-12 col-md-12 text-right">
												<button class="myBtn">Enrollment</button>
												<button class="myBtn btn-success ml-2">List</button>
											</div>

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

export default RegisterEvent;

