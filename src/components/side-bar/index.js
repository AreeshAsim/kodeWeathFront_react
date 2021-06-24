/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React from "react";
import { withRouter } from "react-router-dom";
import $ from 'jquery';

class SideBar extends React.Component {

	changePage(e) {
		const pageLink = $(e.target).attr('dataAttr')
		this.props.history.push(pageLink);
		setTimeout(() => {
			console.log(pageLink)
			$('.menuListing a').each(function () {
				$(this).removeClass('active');
			});
			$('.subMenu').slideUp(0);

			$('.subMenu a[dataAttr="' + pageLink + '"]').addClass('active');
			
			$('.subMenu a[dataAttr="' + pageLink + '"]').closest('.hasChild').find('.navItem').addClass('activeComponent');
			$('a[dataAttr="' + pageLink + '"]').closest('.hadChild').find('.navItem').addClass('active');
			$('.subMenu a[dataAttr="' + pageLink + '"]').closest('.hasChild').find('.subMenu').slideDown();
		}, 100)
	}

	render() {
		return (
			<React.Fragment>

				<section class="sideBar">
					<div class="profileView">
						<div class="profileImg">
							<img src="/assets/images/user.jpg" alt="" />
						</div>
						<h3>WealthKode</h3>
						{/* <div class="profileBtn">
							<a href="#"><i class="fa fa-cog"></i></a>
							<a href="#"><i class="fa fa-envelope"></i></a>
							<a href="#"><i class="fa fa-sign-out"></i></a>
						</div> */}
					</div>
					<div class="menuListing">
						<ul>
							<li class="hadChild">
								<a class="navItem " href="javascript:void(0)" dataAttr="" onClick={this.changePage.bind(this)}>Reporting</a>
								
							</li>
							
							<li class="hasChild" >
								<a class="navItem " href="javascript:void(0)">Subscription Management</a>
								<ul class="subMenu">
									<li><a href="javascript:void(0)" dataAttr="add-subscription" onClick={this.changePage.bind(this)}>Add Subscription </a></li>
									<li><a href="javascript:void(0)" dataAttr="list-subscription" onClick={this.changePage.bind(this)}>Subscription List</a></li>
				
							
								</ul>
							</li>
							
	
							<li class="hasChild" style={{marginTop:"5px"}} >
								<a class="navItem " href="javascript:void(0)">Video Management</a>
								<ul class="subMenu">
									<li><a href="javascript:void(0)" dataAttr="manage-courses" onClick={this.changePage.bind(this)}>Manage Courses</a></li>
									<li><a href="javascript:void(0)" dataAttr="add-courses" onClick={this.changePage.bind(this)}>Add Courses</a></li>
									<li><a href="javascript:void(0)" dataAttr="manage-categories" onClick={this.changePage.bind(this)}>Manage Categories</a></li>
									<li><a href="javascript:void(0)" dataAttr="add-category" onClick={this.changePage.bind(this)}>Add Categories</a></li>
							        <li><a href="javascript:void(0)" dataAttr="add-lesson" onClick={this.changePage.bind(this)}>Add Lessons</a></li>
								  
								</ul>
							</li>
							<li class="hasChild" style={{marginTop:"5px"}} >
								<a class="navItem " href="javascript:void(0)">Discount Management</a>
								<ul class="subMenu">
									<li><a href="javascript:void(0)" dataAttr="add-discount" onClick={this.changePage.bind(this)}>Add Discount</a></li>
									<li><a href="javascript:void(0)" dataAttr="manage-discount" onClick={this.changePage.bind(this)}>Manage Discount</a></li>
								
								  
								</ul>
							</li>
							
							
							
							
							
							<li class="hadChild" >
								<a class="navItem " href="javascript:void(0) " dataAttr="order-management" onClick={this.changePage.bind(this)} >Order Management</a>
								
							</li>
							
							<li class="hasChild" >
								<a class="navItem " href="javascript:void(0)">Tags Mangement</a>
								<ul class="subMenu">
									<li><a href="javascript:void(0)" dataAttr="add-tags" onClick={this.changePage.bind(this)}>Add Tags </a></li>
									<li><a href="javascript:void(0)" dataAttr="list-tags" onClick={this.changePage.bind(this)}>Tags List</a></li>
				
							
								</ul>
							</li>
						

							<li class="hasChild" style={{marginTop:"5px"}} >
								<a class="navItem " href="javascript:void(0)">Users</a>
								<ul class="subMenu">
									<li><a href="javascript:void(0)" dataAttr="add-users" onClick={this.changePage.bind(this)}>Add Users </a></li>
									<li><a href="javascript:void(0)" dataAttr="list-users" onClick={this.changePage.bind(this)}>Users List</a></li>
				
							
								</ul>
							</li>
			
							
							
							
							
							
							
							
						
						</ul>
					</div>
				</section>
				
			</React.Fragment>
		);
	}
}



export default withRouter(SideBar)
