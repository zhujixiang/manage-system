import React, { Component } from 'react';
import { Button } from 'antd';

import AddList from '@/components/AddList';

class List extends Component {
    render() {
        return (
            <div>
                <Button type='primary'>按钮</Button>
                <AddList list={[11, 22, 33]}></AddList>
            </div>
        )
    }
}

export default List