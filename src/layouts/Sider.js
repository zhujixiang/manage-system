import React, { PureComponent } from 'react';

import style from './index.less';

export class Sider extends PureComponent {

    render() {
        return (
            <div>
                <div className='slider'>ddd</div>

                <div className={style.slider}>ddd</div>
                {this.props.children}六六六
            </div>
        )
    }
}

export default Sider