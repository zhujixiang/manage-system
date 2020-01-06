import React, { Component } from 'react';

// import styles from './index.css';

class BasicLayout extends Component {
	render() {
		return (
			<div>
				<div style={{ background: 'lightgray', textAlign: 'center' }}>
					laylout
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default BasicLayout