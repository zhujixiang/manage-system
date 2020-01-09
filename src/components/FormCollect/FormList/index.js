import React, { PureComponent } from 'react';

import { Input } from 'antd';

class FormList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = (val) => {
        const { value, onChange } = this.props;
        console.log(this.props)

        if (typeof onChange !== 'function') return;
        onChange(val)
    }

    componentDidMount() {
    }

    render() {
        const { attach, placeholder1,...extra } = this.props;
        console.log(attach)
        console.log(extra)
        return (
            <div>
                <Input
                    {...attach}
                    {...extra}
                    onChange={this.handleChange}
                >
                </Input>
                <Input
                    {...attach}
                    {...extra}
                    onChange={this.handleChange}
                >
                </Input>
            </div>
        )
    }
}

export default FormList
