import React, { PureComponent } from 'react';
import router from 'umi/router';

class List extends PureComponent {
	componentDidMount() {
		router.push('demopage');
	}

	render() {
		return (
			<div>
				跳转页
			</div>
		)
	}
}

export default List
