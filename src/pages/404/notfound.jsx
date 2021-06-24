/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React from 'react';
import './style.css';
import PageHeader from '../../components/page-header';
import PageFooter from '../../components/page-footer';
import ChangeTitle from '../../components/change_page_title';

const NotFoundIllus = () => <div className="cap-error-page">
	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<a href={'/'}>Go TO Homepage</a>
		</div>
	</div>
</div>;


class NotFound extends React.Component {
	render () {
		return (
			<React.Fragment>
				<div className="content p-0">
					<ChangeTitle title={'404'}/>
					<NotFoundIllus/>
				</div>
			</React.Fragment>
		);
	}
}

export default NotFound;
