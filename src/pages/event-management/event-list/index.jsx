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

class EventList extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Event Management',
			link: '#'
		},
		{
			title: 'Event List',
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

				<ChangeTitle title={'Event List'} />

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
															<label>Search word:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" placeholder="Please enter your search term." />
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
															<label>Display status:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="row">
																<div class="col">
																	<input class="customCheck" type="checkbox" id="all" name="status"
																		value="all" />
																	<label for="all"> All </label>
																</div>
																<div class="col">
																	<input class="customCheck" type="checkbox" id="Exhibition"
																		name="status" value="Exhibition" />
																	<label for="Exhibition"> Exhibition</label>
																</div>
																<div class="col">
																	<input class="customCheck" type="checkbox" id="Unexhibited"
																		name="status" value="Unexhibited" />
																	<label for="Unexhibited"> Non Exhibited</label>
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
									<div class="cardHeader">
										<h1>Event List</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th>#</th>
														<th>Event title</th>
														<th>Start Date</th>
														<th>End Date</th>
														<th>Registration date</th>
														<th>Home pop-up Exposure</th>
														<th>Exhibition status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Vita</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10</td>
														<td>
															<div className="formWrapper">
																<select>
																	<option value="">Exposure</option>
																	<option value="">Unexposed</option>
																</select>
															</div>
														</td>
														<td>Exhibition</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Vita</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10</td>
														<td>
															<div className="formWrapper">
																<select>
																	<option value="">Unexposed</option>
																	<option value="">Exposure</option>
																</select>
															</div>
														</td>
														<td>Unexhibited</td>
													</tr>
													<tr>
														<td>1</td>
														<td>Vita</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10. 12:32:12</td>
														<td>2021.08.10</td>
														<td>
															<div className="formWrapper">
																<select>
																	<option value="">Exposure</option>
																	<option value="">Unexposed</option>
																</select>
															</div>
														</td>
														<td>Unexhibited</td>
													</tr>

												</tbody>
											</table>
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

export default EventList;

