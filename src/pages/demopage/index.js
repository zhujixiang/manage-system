import React, { Component } from 'react';
import { Button } from 'antd';

import AddList from '@/components/AddList';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonList: new Array(3).fill(null)
        }
    }

    addButton = () => {
        const { buttonList } = this.state;
        
        // 这里涉及修改原state和新state的问题

        this.setState({
            buttonList:buttonList.concat([null])
        });
    }

    render() {
        const { buttonList } = this.state;

        return (
            <div style={{
                // background: 'lightyellow',
            }}>
                <Button type='primary' onClick={this.addButton}>按钮</Button>
                <br />
                {
                    buttonList.map((item, index) => {
                        return <AddList key={index} list={[11, 22, 33]}></AddList>
                    })
                }

            </div>
        )
    }
}

export default List