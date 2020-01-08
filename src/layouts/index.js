import React, { Component } from 'react';

import Sider from './Sider';
import Header from './Header';

class BasicLayout extends Component {
	render() {
		return (
			<div>
				<Sider />
				<Header />
				<div className='content'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default BasicLayout