import React, { PureComponent } from 'react';
import { Button } from 'antd';

class AddList extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return <Button key={index}>{`组件内Button${item}`}</Button>
                    })
                }

            </div>
        )
    }
}

export default AddList
