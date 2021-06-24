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

class OrderDetail extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Order Management',
			link: '#'
		},
		{
			title: 'Order Detail',
			link: '#'
		}
	]

	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Order Detail'} />

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
									<div class="cardHeader">
										<h1>Order Details</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table textRight">
												<thead>
													<tr>
														<th>Total Order Amount</th>
														<th>Total discount amount</th>
														<th>Total earned points</th>
														<th>The amount of the real payment</th>
														<th>Total cancellation amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<h2>358,000 won</h2>
														</td>
														<td>
															<h2>-100,000 won</h2>
															<p>Coupon : 50,000 won</p>
															<p>Point : 50,000 won</p>
														</td>
														<td>
															<h2>P</h2>
														</td>
														<td>
															<h1>308,000 won</h1>
														</td>
														<td>
															<h2>0 won</h2>
															<p>Amount due to cancellation : 0 won</p>
														</td>
													</tr>
												</tbody>
											</table>
											<table class="table">
												<thead>
													<tr>
														<th>
															<input type="checkbox" class="customCheck" />
														</th>
														<th>#</th>
														<th>Product Order Number</th>
														<th>Orders / Options</th>
														<th>Quantity</th>
														<th>Sale</th>
														<th>Shipping</th>
														<th>Total Order Amount</th>
														<th>Invoice Number</th>
														<th>Order Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row"><input type="checkbox" class="customCheck" /></th>
														<td>1</td>
														<td>WB5265874</td>
														<td>Vitamin C</td>
														<td>1</td>
														<td>1,000</td>
														<td>5,000</td>
														<td>103,000</td>
														<td>Post Office Courier / Invoice Number: 123456789</td>
														<td>Shipping completed</td>
													</tr>
													<tr>
														<th scope="row"><input type="checkbox" class="customCheck" /></th>
														<td>2</td>
														<td>WB5265874</td>
														<td> - </td>
														<td>1</td>
														<td>1,000</td>
														<td> - </td>
														<td> - </td>
														<td>Post Office Courier / Invoice Number: 123456789</td>
														<td>Shipping completed</td>
													</tr>
													<tr>
														<th scope="row"><input type="checkbox" class="customCheck" /></th>
														<td>2</td>
														<td>WB5265874</td>
														<td> - </td>
														<td>1</td>
														<td>1,000</td>
														<td> - </td>
														<td> - </td>
														<td>Post Office Courier / Invoice Number: 123456789</td>
														<td>Shipping completed</td>
													</tr>
													<tr>
														<th scope="row"><input type="checkbox" class="customCheck" /></th>
														<td>2</td>
														<td>WB5265874</td>
														<td> - </td>
														<td>1</td>
														<td>1,000</td>
														<td> - </td>
														<td> - </td>
														<td>Post Office Courier / Invoice Number: 123456789</td>
														<td>Shipping completed</td>
													</tr>

												</tbody>
											</table>
										</div>
										<div className="tableDetails">
											<span className="mr-2">The product you selected</span>
											<select >
												<option value="">Select order status </option>
												<option value="">Payment completed</option>
												<option value="">Product provisioning</option>
												<option value="">Shipping</option>
												<option value="">Shipping completed </option>
											</select>
										</div>


										<hr />
										<h2 className="cardInnerTitle">Discounts and Earnings</h2>
										<div className="row dataOnly">
											<div className="col-12 col-md-12">
												<div className="formData">
													<label>Point discounts</label>
													<div className="infoText">50,000 won</div>
												</div>
											</div>
											<div className="col-12 col-md-12">
												<div className="formData">
													<label>Earn Points</label>
													<div className="infoText">P</div>
												</div>
											</div>
											<div className="col-12 col-md-12">
												<div className="formData">
													<label>Coupon discounts</label>
													<div className="infoText">50,000 won</div>
												</div>
											</div>
										</div>


										<div class="table-responsive tableDesign">
											<table className="table textLeft">
												<thead>
													<tr>
														<th className="text-center">Cancel</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Request: 1 case</td>
													</tr>
													<tr>
														<td>Completed: 0 case</td>
													</tr>
												</tbody>
											</table>
										</div>


										<hr />
										<h2 className="cardInnerTitle">Payment Method</h2>

										<div className="row dataOnly">
											<div className="col-12 col-md-6">
												<div className="formData">
													<label>Method of Payment</label>
													<div className="infoText">Credit Card</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="formData">
													<label>Account holder</label>
													<div className="infoText">Holder : ㈜왓비타</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="formData">
													<label>Name</label>
													<div className="infoText">홍길동</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="formData">
													<label>Deposit Confirmation Date</label>
													<div className="infoText">2021.08.13 12:32:12</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="formData">
													<label>Credit Card Slips</label>
													<div className="infoText"><button className="myBtn btnSm btn-success">Credit Card Slips</button></div>
												</div>
											</div>
										</div>
										<hr />

										<div className="row ">
											<div className="col-12 col-md-6">
												<div className="row dataOnly">
													<div className="col-12 col-md-12">
														<h2 className="cardInnerTitle clearfix">About The Orderer
															<button className="myBtn btnSm float-right" data-toggle="modal" data-target="#orderInfo">Changing Information</button>
														</h2>
														<div className="formData">
															<label>Orderer</label>
															<div className="infoText">홍길동</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Orderer ID</label>
															<div className="infoText">Ground3211</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Phone</label>
															<div className="infoText">010-1324-5678</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Email</label>
															<div className="infoText">ground3211@naver.com</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Address</label>
															<div className="infoText">[12356] 143-9, Samsung 1-dong, Gangnam-myeon, Seoul, South Korea</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="row dataOnly">
													<div className="col-12 col-md-12">
														<h2 className="cardInnerTitle clearfix">Recipient Information
															<button className="myBtn btnSm float-right" data-toggle="modal" data-target="#recipentInfo">Changing Information</button>
														</h2>
														<div className="formData">
															<label>Recipients</label>
															<div className="infoText">홍길동</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Phone</label>
															<div className="infoText">010-1324-5678</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Email</label>
															<div className="infoText">ground3211@naver.com</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Address</label>
															<div className="infoText">[12356] 143-9, Samsung 1-dong, Gangnam-myeon, Seoul, South Korea</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Shipping Requests</label>
															<div className="infoText">Please safe shipping. Put it at the door.</div>
														</div>
													</div>
													<div className="col-12 col-md-12">
														<div className="formData">
															<label>Collection Address</label>
															<div className="infoText">[12356] 143-9, Samsung 1-dong, Gangnam-myeon, Seoul, South Korea</div>
														</div>
													</div>
												</div>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* order info modal */}
				<div class="modal fade" id="orderInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-xl" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Orderer Information</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>
							<div class="modal-body">
								<div className="row dataOnly">
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Name of orderer</label>
											<div className="infoText">Hong Gil Dong</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="formData">
											<label>Orderer ID</label>
											<div className="infoText">Ground3211</div>
										</div>
									</div>
								</div>

								<div class="row formWrapper">
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Phone Number</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<input type="text" value="010-9881-4818" />
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>E-mail</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<input type="email" value="ground3211@naver.com" />
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Address</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<div className="inlineInput">
														<input type="number" value="123456" />
														<button className="myBtn btnSm btn-success ml-2">Search Address</button>
													</div>
													<input type="number" value="Samsung 2-dong, Gangnam-gu, Seoul" />
													<input type="number" value="134-59" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button class="myBtn btnSm btn-simple" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
								<button class="myBtn btnSm btn-primary">Modifications Completed</button>
							</div>
						</div>
					</div>
				</div>
				{/* recipent info */}
				<div class="modal fade" id="recipentInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-xl" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Recipient Information</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</button>
							</div>
							<div class="modal-body">

								<div class="row formWrapper">
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Name of Recipient</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<input type="text" value="Hong Gil Dong" />
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Phone number</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<input type="tel" value="010-9881-4818" />
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>E-mail</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<input type="emial" value="ground3211@naver.com" />
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Address</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<div className="form-group inlineInput">
														<input type="number" value="123456" />
														<button className="myBtn btnSm btn-success ml-2">Search Address</button>
													</div>
													<div className="form-group">
														<input type="number" value="Samsung 2-dong, Gangnam-gu, Seoul" />
													</div>
													<input type="number" value="134-59" />
												</div>
											</div>
										</div>
									</div>

									<div className="dataOnly col-12">
										<div className="formData">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Delivery Request</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<div className="infoText p-0">Please secure delivery. Please put it at the door.</div>
												</div>
											</div>
										</div>
									</div>

									<div class="col-12 col-md-12">
										<div class="form-group inlineField">
											<div class="row align-items-center">
												<div class="col-12 col-md-4 col-lg-3">
													<label>Collection Address</label>
												</div>
												<div class="col-12 col-md-8 col-lg-9">
													<div className="form-group inlineInput">
														<input type="number" value="123456" />
														<button className="myBtn btnSm btn-success ml-2">Search Address</button>
													</div>
													<div className="form-group">
														<input type="number" value="Samsung 2-dong, Gangnam-gu, Seoul" />
													</div>
													<input type="number" value="134-59" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="myBtn btnSm btn-primary float-right">List</button>
								<button class="myBtn btnSm btn-success mr-2 float-right">Reply registration</button>
							</div>
						</div>
					</div>
				</div>
				<PageFooter />
			</React.Fragment>
		);
	}
}

export default OrderDetail;

