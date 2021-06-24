/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React from "react";
import {Helmet} from "react-helmet";

//https://github.com/nfl/react-helmet
class ChangeTitle extends React.Component {
	render () {
		return (
			<Helmet>
				<meta charSet="utf-8" />
				<title>{'WealthKode - '+this.props.title}</title>
			</Helmet>
		);
	}
};

export default ChangeTitle;
