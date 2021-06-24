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
class EditPost extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Help Center',
			link: '#'
		},
		{
			title: 'Edit Post',
			link: '#'
		}
	]


	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Anouncement'} />

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
										<h1>Modify Post</h1>
									</div>
									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Title <span>*</span></label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="text" value="This is an announcement." placeholder="Enter the event name." />
														</div>
													</div>
												</div>
											</div>

											<div className="col-12 col-md-6 dataOnly">
												<div class="formData">
													<label>Reviewers</label>
													<div class="infoText">Manager</div>
												</div>
											</div>
											<div className="col-12 col-md-6 dataOnly">
												<div class="formData">
													<label>Creation Date and Time</label>
													<div class="infoText">2021.08.10. 12:12:32</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Order of Announcements</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<input type="number" value="3" />
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>Announcements</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<textarea name="reason_of_making" rows="5"></textarea>
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

export default EditPost;

