import React, { Component } from 'react';

import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

import Sider from './Sider';

class BasicLayout extends Component {
	render() {
		return (
			<div style={{
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				// background:'ligthgray'
			}}>
				<Sider>12123132</Sider>
				{this.props.children}
			</div>
		);
	}
}

export default BasicLayout