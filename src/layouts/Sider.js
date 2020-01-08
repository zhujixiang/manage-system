import React, { PureComponent } from 'react';

import style from './index.less';

import { Menu } from 'antd';
const { SubMenu } = Menu;

export class Sider extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                {
                    name: '首页',
                    id: '1',
                    submenuList: []
                },
                {
                    name: '卖家',
                    id: '2',
                    submenuList: []
                },
                {
                    name: '买家',
                    id: '3',
                    submenuList: []
                },
            ]
        }
    }

    render() {
        const { menuList } = this.state;
        return (
            <div className='left bgcolor_2a4266' style={{}}>
                <Menu
                    mode="vertical"
                    // vertical horizontal inline
                    defaultSelectedKeys={['1']}>
                    <h1 style={{ height: '46px', textAlign: 'center', lineHeight: '46px' }}>888</h1>
                    {
                        menuList.map(item => {
                            const { name, id } = item;
                            return <Menu.Item key={id}>{name}</Menu.Item>
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default Sider