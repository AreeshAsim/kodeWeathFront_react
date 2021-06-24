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

class DeliveriesList extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Order Management',
			link: '#'
		},
		{
			title: 'Deliveries List',
			link: '#'
		}
	]

	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Deliveries List'} />

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
															<div class="searchWrapper">
																<select>
																	<option value="">Order Number</option>
																	<option value="">Order Product Name</option>
																	<option value="">Orderer Name</option>
																	<option value="">Orderer ID</option>
																	<option value="">Phone Number</option>
																</select>
																<input type="text" placeholder="Please enter a search word." />
															</div>
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
															<div class="searchWrapper">
																<select>
																	<option value="">Order Reception Date</option>
																	<option value="">Payment completion date</option>
																	<option value="">Credit card payment completion date</option>
																	<option value="">Delivery date</option>
																	<option value="">Change shipping status to "Shipping"</option>
																	<option value="">Delivery completion date</option>
																	<option value="">The date on which the delivery status was
                                                            changed to "Shipping Completed"</option>
																</select>
																<input class="dateRange" type="text"
																	placeholder="Please enter a search word." />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group inlineField">
													<div class="row align-items-center">
														<div class="col-12 col-md-4 col-lg-3">
															<label>method of payment:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="row">
																<div class="col">
																	<input class="customCheck" type="checkbox" id="all" name="all"
																		value="all" />
																	<label for="all"> All </label>
																</div>
																<div class="col">
																	<input class="customCheck" type="checkbox" id="cCard"
																		name="cCard" value="creditCard" />
																	<label for="cCard"> Credit Card</label>
																</div>
																<div class="col">
																	<input class="customCheck" type="checkbox" id="kakoPay"
																		name="kakoPay" value="kakoPay" />
																	<label for="kakoPay"> Kakao Pay</label>
																</div>
																<div class="col">
																	<input class="customCheck" type="checkbox" id="naverPay"
																		name="naverPay" value="naverPay" />
																	<label for="naverPay"> Naver Pay</label>
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
															<label>Amount of payment:</label>
														</div>
														<div class="col-12 col-md-8 col-lg-9">
															<div class="row">
																<div class="col-12 col-md-6">
																	<div class="inlineInput">
																		<label>won:</label>
																		<input type="text" />
																	</div>
																</div>
																<div class="col-12 col-md-6">
																	<div class="inlineInput">
																		<label>won:</label>
																		<input type="text" />
																	</div>
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
										<h1>List of Deliveries</h1>
									</div>
									<div class="cardBody">

										<div class="tableSorting">
											<span>A total of 00 orders were found. |   Total payments for search results orders : <b>252,000,000 won</b></span>
											<a class="active" href="javascript:void(0)">Registration date <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Product Name <i class="fa fa-caret-up"></i></a>
											<a href="javascript:void(0)">Price <i class="fa fa-caret-up"></i></a>
										</div>
										<div class="table-responsive autoSriped">
											<table class="table">
												<thead>
													<tr>
														<th><input type="checkbox" class="customCheck" /></th>
														<th>#</th>
														<th>Order Number</th>
														<th>Order Date</th>
														<th>Products ordered</th>
														<th>Orderer ID</th>
														<th>Orderer Name</th>
														<th>Total product amount</th>
														<th>Total shipping costs</th>
														<th>Total order amount</th>
														<th>Payment method</th>

													</tr>
												</thead>
												<tbody>
													<tr className="even">
														<td rowSpan="2"><input type="checkbox" class="customCheck" /></td>
														<td rowSpan="2" scope="row">1</td>
														<td rowSpan="2">WB5265874</td>
														<td rowSpan="2">2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>Ground77</td>
														<td>Hong Gil Dong</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr className="even">
														<td>Vitamin C</td>
														<td colSpan="6">Post Office Courier / Invoice Number <input type="text" /></td>
													</tr>


													<tr className="odd">
														<td rowSpan="5"><input type="checkbox" class="customCheck" /></td>
														<td rowSpan="5" scope="row">1</td>
														<td rowSpan="5">WB5265874</td>
														<td rowSpan="5">2021.08.10 12:23:12</td>
														<td>Vitamin C and 4 other cases</td>
														<td>Ground77</td>
														<td>Hong Gil Dong</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Credit card</td>
													</tr>
													<tr className="odd">
														<td>Vitamin C</td>
														<td colSpan="6">Post Office Courier / Invoice Number <input type="text" /></td>
													</tr>
													<tr className="odd">
														<td>Vitamin C</td>
														<td colSpan="6">Post Office Courier / Invoice Number <input type="text" /></td>
													</tr>
													<tr className="odd">
														<td>Vitamin C</td>
														<td colSpan="6">Post Office Courier / Invoice Number <input type="text" /></td>
													</tr>
													<tr className="odd">
														<td>Vitamin C</td>
														<td colSpan="6">Post Office Courier / Invoice Number <input type="text" /></td>
													</tr>
												</tbody>
											</table>

										</div>

										<div class="tableDetails">
											<span class="mr-2">The selected order</span>
											<select>
												<option value="">Select order status </option>
												<option value="">Select order status </option>
											</select>
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

export default DeliveriesList;

