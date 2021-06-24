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

class AnnouncementList extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Help Center',
			link: '#'
		},
		{
			title: 'Announcements List',
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

				<ChangeTitle title={'Announcements List'} />

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
															<input type="text" placeholder="Enter your search terms." />
														</div>
													</div>
												</div>
											</div>


										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Announcements List</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th>No</th>
														<th>Review Title</th>
														<th>Set order</th>
														<th>Reviewers</th>
														<th>Registration date</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">1</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													
													<tr>
														<td>2</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">2</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													
													<tr>
														<td>3</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">3</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													<tr>
														<td>4</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">4</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													
													<tr>
														<td>5</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">5</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													
													<tr>
														<td>6</td>
														<td>This is an announcement.</td>
														<td><span className="badge badge-primary">6</span></td>
														<td>Manager</td>
														<td>2021.08.10. 12:32:12</td>
													</tr>
													

												</tbody>
											</table>
										</div>
										<div class="tableDetails"><button class="myBtn btnSm btn-success">Register Announcement</button></div>
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

export default AnnouncementList;

