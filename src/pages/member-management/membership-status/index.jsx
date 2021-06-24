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
// react chart 
import { Line } from 'react-chartjs-2';

class MembershipStatus extends React.Component {

	breadcrumbNavigation = [
		{
			title: 'Member Management',
			link: '#'
		},
		{
			title: 'Membership Status',
			link: '#'
		}
	]


	handleEvent(event, picker) {
		console.log(picker.startDate.toDate());
		console.log(picker.endDate.toDate());
	}

	data = {
		labels: ['Apr 4', 'May 4', 'Jun 4', 'Jul 4', 'Aug 4', 'Sep 4'],
		datasets: [
			{
				label: '# of Votes',
				data: [102, 119, 13, 55, 2, 38],
				fill: true,
				// backgroundColor: '#35bcf7',
				borderColor: '#35bcf7',
			},
		],
	};
	// data = {
	// 	datasets: [{
	// 		data: [10, 20, 30]
	// 	}],
	
	// 	// These labels appear in the legend and in the tooltips when hovering different arcs
	// 	labels: [
	// 		'Red',
	// 		'Yellow',
	// 		'Blue'
	// 	]
	// };
	render() {
		return (
			/*Content Area*/
			<React.Fragment>

				<ChangeTitle title={'Membership Status'} />

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
										<h1>Filters</h1>
									</div>

									<div class="cardBody">
										<div class="row formWrapper">
											<div class="col-12 col-md-12">

												<Line
													data={this.data}
													width={100}
													options={{ maintainAspectRatio: false }}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Cumulative Membership Status</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th>Date</th>
														<th>Subscribers</th>
														<th>Withdrawer</th>
														<th>Cumulative Member</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
														<td>2 (▲2)</td>
														<td>13,456</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
														<td>2 (▲2)</td>
														<td>13,456</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
														<td>2 (▲2)</td>
														<td>13,456</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
														<td>2 (▲2)</td>
														<td>13,456</td>
													</tr>

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>

							<div class="col-12 col-md-6">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Member Status</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th>Date</th>
														<th>Members</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="contentCard">
									<div class="cardHeader">
										<h1>Withdrawal Member Status</h1>
									</div>
									<div class="cardBody">
										<div class="table-responsive customStriped">
											<table class="table">
												<thead>
													<tr>
														<th>Date</th>
														<th>Members</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
													<tr>
														<td>YYYY.MM.DD</td>
														<td>45 (▼11)</td>
													</tr>
												</tbody>
											</table>
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

export default MembershipStatus;

