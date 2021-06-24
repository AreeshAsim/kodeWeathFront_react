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

class EditFaq extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Help Center',
			link: '#'
		},
		{
			title: 'Register FAQ',
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

				<ChangeTitle title={'Register FAQ'} />

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
										<h1>FAQ Registration</h1>
									</div>
									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">

												<h2 className="cardInnerTitle clearfix">Basic Detail</h2>
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Date <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">

															<DateRangePicker
																initialSettings={{
																	startDate: '1/1/2014', singleDatePicker: true, timePicker: true,
																	locale: {
																		format: 'YYYY/MM/DD hh:mm A',
																	}
																}}
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
															<label>Writer <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" value="(Chief Manager)" readOnly/>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Category <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<select>
																<option value="">FAQ Select a division</option>
																<option value="">Introduction to services</option>
																<option value="">How to use it</option>
																<option value="">Sign-up/Certification</option>
																<option value="">Members</option>
																<option value="">Products</option>
																<option value="">Delete Member Info</option>
																<option value="">Other</option>
															</select>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Title <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" value="About Watvita Services" />
														</div>
													</div>
												</div>
											</div>


											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Publish <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="radio" name="publish" value="1" checked />
															<label className="mr-4 ml-2"> Publish </label>
															<input type="radio" name="publish" value="2" />
															<label className="mr-4 ml-2"> Don't Publish</label>
														</div>
													</div>
												</div>
											</div>
											
											
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Views</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="number" value="245" readOnly />
														</div>
													</div>
												</div>
											</div>

											<div class="col-12 col-md-12">

												<h2 className="cardInnerTitle clearfix">Basic Detail</h2>
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Body</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<textarea name="reason_of_making" rows="5"></textarea>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Attachment <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<label><small>2M or less</small></label>
															<div className="inputFile attachWrapper">

																<input type="file" />
																<div className="attachFile">eventlist.xlxs (0.4M) <span>x</span></div>
																<div className="attachFile">eventlist.xlxs (0.4M) <span>x</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>


											<div class="col-12 col-md-12 text-right">
												<button class="myBtn">Register</button>
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

export default EditFaq;

