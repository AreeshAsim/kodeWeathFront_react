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

class CreatCoupon extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Coupon Management',
			link: '#'
		},
		{
			title: 'Creat Coupon',
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

				<ChangeTitle title={'Creat Coupon'} />

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
										<h1>Creat Coupon</h1>
									</div>
									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Coupon Type</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="copupon_type" value="1" checked />
															<label class="mr-4 ml-2"> Automatic issuance  </label>
															<input type="radio" name="copupon_type" value="2" />
															<label class="mr-4 ml-2"> Download</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Coupon Name <span>*</span></label>
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
															<label>Benefit</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="benefit" value="1" checked />
															<label class="mr-4 ml-2"> Order Amount Discount  </label>
															<input type="radio" name="benefit" value="2" />
															<label class="mr-4 ml-2"> Shipping Cost Discount</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Benefit Type <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="form-group inlineInput">
																<input class="mr-2" type="radio" name="benefit_type" value="1" checked />
																<input type="text" />
																<label class="mr-4 ml-2"> Won discount  </label>
															</div>
															<div class="form-group inlineInput">
																<input className="mr-2" type="radio" name="benefit_type" value="2" />
																<input type="text" />
																<label class=" mx-2"> % Discount / Maximum</label>
																<input type="text" />
																<label class=" ml-2"> Won Discount</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Use Condition <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="inlineInput">
																<label class="mr-2"> Total amount over  </label>
																<input type="text" />
																<label class="ml-2">Won</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Usage Period <span>*</span></label>
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
															<label>Download Period <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="form-group inlineInput">
																<input class="mr-2" type="radio" name="downloadPeriod" value="1" checked />

																<DateRangePicker
																	initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
																	onEvent={this.handleEvent}
																>
																	<input type="text" name="" id="" />
																	{/* <button>Click Me To Open Picker!</button> */}
																</DateRangePicker>
															</div>
															<div class="form-group inlineInput">
																<input class="mr-2" type="radio" name="downloadPeriod" value="1" />
																<label class="ml-2"> Downloadable from issue date to </label>
																<input type="text" />
																<label class="ml-2"> Day </label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Issue Target</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="inlineInput">
																<input class="mr-2" type="radio" name="issue_target" value="1" checked />
																<label class="mr-2"> All members</label>
																<input class="mr-2" type="radio" name="issue_target" value="2" />
																<label class="mr-2"> Designated member ID:</label>
																<input type="text" />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Issue Number</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="number" name="" id="" />
														</div>
													</div>
												</div>
											</div>

											<div class="col-12 col-md-12 text-right">
												<button class="myBtn" data-toggle="modal" data-target="#confirmIssue">Issue</button>
												<button class="myBtn btn-success ml-2">List</button>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div class="modal fade" id="confirmIssue" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Delete Selected Coupon</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>
							<div class="modal-body">
								<p>The coupon has been created normally.</p>
							</div>
							<div class="modal-footer">
								<div className="tableDetails text-center">

									<button class="myBtn btnSm btn-simple" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
									<button class="myBtn btnSm btn-success ml-2">Confirm</button>
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

export default CreatCoupon;

