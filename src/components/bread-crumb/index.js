/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React from "react";

class BreadCrumb extends React.Component {
	
	renderNavigation(){
		let links = []
		
		for ( const [index, element] of this.props.navigation.entries() ) {
			// if(index==this.props.navigation.length-1){
			// 	links.push(
			// 		<li class="active"><a href="javascript:void(0)">{element.title}</a></li>
			// 	)
			// }
			// else {
			// 	links.push(
			// 		<li class="mainCrum"><a href="javascript:void(0)">{element.title}</a></li>
			// 	)
			// }
		}
		return links
	}
	
	render() {
		return (
			<React.Fragment>
				<div class="pageCrums">
					<div class="pageTitle">{this.props.navigation[0].title}</div>
					<ul class="customCrums">
							{this.renderNavigation()}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default BreadCrumb;
