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

class ViewStatement extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Help Center',
			link: '#'
		},
		{
			title: 'View Statement',
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

				<ChangeTitle title={'Statement'} />

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
										<h1>Reply Statement</h1>
									</div>
									<div class="cardBody">
										<div class="row dataOnly">
											<div class="col-12 col-md-6">
												<div className="formData">
													<label>Author ID</label>
													<div className="infoText">Ground77</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div className="formData">
													<label>Author's Name</label>
													<div className="infoText">홍길동</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div className="formData">
													<label>Creation Date and Time</label>
													<div className="infoText">2021.08.10. 12:12:32</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div className="formData">
													<label>Classification</label>
													<div className="infoText">Other</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div className="formData">
													<label>Subject of Inquiry</label>
													<div className="infoText">I have a Question.</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div className="formData">
													<label>Contents of Inquiry</label>
													<div className="infoText"></div>
												</div>
											</div>
										</div>
										<div class="row formWrapper">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Admin Answers</label>
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
															<label>Attachments</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
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
												<div className="float-left">
													<button class="myBtn btnSm btn-info mr-2">Temporary Storage</button>
													<span>Last Update : 2021.08.10 12:32:12</span>
												</div>
												<button class="myBtn btnSm">Register Replies</button>
												<button class="myBtn btnSm btn-success ml-2">List</button>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<PageFooter />
			</React.Fragment >
		);
	}
}

export default ViewStatement;

