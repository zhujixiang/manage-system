import React, { Component } from 'react';
import { Button } from 'antd';

import AddList from '@/components/AddList';
import FormCollect from '../../components/FormCollect';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonList: new Array(3).fill(null),
            formItems: [
                {
                    type: 'form-list',
                    name: 'qwe',
                    label: '表单名',
                    attach: {
                        placeholder: '123123',
                        // style: { width: '200px' }
                    },

                },
                {
                    type: 'form-list',
                    name: 'qwe1',
                    label: '表单名表单名表单名',
                    attach: {
                        placeholder: '123123',
                        style: { width: '200px' }
                    },

                }
            ]
        }
    }

    addButton = () => {
        const { buttonList } = this.state;

        // 这里涉及修改原state和新state的问题

        this.setState({
            buttonList: buttonList.concat([null])
        });
    }

    render() {
        const { buttonList, formItems } = this.state;

        return (
            <div>
                <FormCollect
                    formItems={formItems}
                // onChange={e=>console.log(e)}
                />
                {/* <Button type='primary' onClick={this.addButton}>按钮</Button>
                <br />
                {
                    buttonList.map((item, index) => {
                        return <AddList key={index} list={[11, 22, 33]}></AddList>
                    })
                } */}

            </div>
        )
    }
}

export default List