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

class OrderManagementList extends React.Component {

	breadcrumbNavigation = [
		{
			title:'Order Management',
			link:'#'
		},
		{
			title:'Order Integration List',
			link:'#'
		}
	]

	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Order List'} />

				{/*SideBar*/}
				<SideBar />

				{/*Page Header*/}
				<PageHeader />

				<BreadCrumb navigation={this.breadcrumbNavigation}/>

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
										<h1>Order Integration List</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStripedTow">
											<table class="table">
												<thead>
													<tr>
														<th scope="col">#</th>
														<th scope="col">Order Number</th>
														<th scope="col">Order Date</th>
														<th scope="col">Products ordered</th>
														<th scope="col">Suppliers</th>
														<th scope="col">Orderer ID</th>
														<th scope="col">Orderer name</th>
														<th scope="col">Total product amount</th>
														<th scope="col">Total shipping costs</th>
														<th scope="col">Total order amount</th>
														<th scope="col">Payment method</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th rowspan="2" scope="row">1</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">2</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">3</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">4</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">5</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">6</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)
                                            </td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">7</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">8</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0) </td>
													</tr>
													<tr>
														<th rowspan="2" scope="row">9</th>
														<td>WB5265874</td>
														<td>2021.08.10 12:23:12</td>
														<td>Vitamin C</td>
														<td>비타</td>
														<td>Ground77</td>
														<td>홍길동</td>
														<td>100,000</td>
														<td>5,000</td>
														<td>105,000</td>
														<td>Kakao pay</td>
													</tr>
													<tr>
														<td colspan="10">Product reserves (0) | Shipping (0) | Shipping completed
														(0) | Cancel (0)</td>
													</tr>

												</tbody>
											</table>

										</div>

										<div class="paginationWrapper clearfix">
											<div class="tableInfo">Showing page 1 of 5</div>
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

export default OrderManagementList;

