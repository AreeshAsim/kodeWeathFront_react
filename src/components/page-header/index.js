import React from 'react'
import { Block } from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";


export default function PageHeader() {

const gotologin = () => {
	sessionStorage.removeItem("id")
	window.location.reload(false);
}

	return (

		<section class="topBar">
			<div class="topBarInnwe">
				<div class="logoWrapper">
					<a class="logo" href="#">
						{/* <img src="/assets/images/logowhite.png" alt="" /> */}
						<h4 style={{ color: "white" }}>WealthKode</h4>
					</a>
					<span class="toggleMenu">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-list">
							<line x1="8" y1="6" x2="21" y2="6"></line>
							<line x1="8" y1="12" x2="21" y2="12"></line>
							<line x1="8" y1="18" x2="21" y2="18"></line>
							<line x1="3" y1="6" x2="3" y2="6"></line>
							<line x1="3" y1="12" x2="3" y2="12"></line>
							<line x1="3" y1="18" x2="3" y2="18"></line>
						</svg>
					</span>
				</div>
				<div class="navWrapper">
					{/* <div class="searchField">
						<input type="text" placeholder="Search" />
						<button><i class="fa fa-search"></i></button>
					</div> */}
					<div class="dropdown">
						<button type="button" class="profileDropdown" data-toggle="dropdown">
							<img src="/assets/images/user.jpg" />
						</button>
						<div class="dropdown-menu profileCard">
							<div class="profileHeader">
								<div class="profileImg">
									<img src="/assets/images/user.jpg" alt="" />
								</div>
								<div class="proDetails">
									<h3>WealthKode</h3>
									
								</div>
							</div>
							<ul>
							
								{/* <li><span className="user-profile" ><i class="fa fa-user"></i>My Profile</span></li> */}
								

								{/* <li><a href="javascript:void(0)"><i class="fa fa-cog"></i>My Profile</a></li>
								
								<Link to ="/">
								<li><span className="user-profile" ><i class="fa fa-user"></i>Account Settings</span></li>
								</Link> */}
								<button className="Logout"  onClick={gotologin}>
								<li><span className="user-profile" ><i class="fa fa-user"></i>Logout</span></li>
								
								</button>
								
								
								{/* <li><a href="javascript:void(0)"><i class="fa fa-sign-out"></i>Logout</a></li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
