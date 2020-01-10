import React, { PureComponent } from 'react';

// 转换为form表单的组件
import FormList from './FormList';

import { Form } from 'antd';
const { Item: FormItem } = Form;


@Form.create()//页面可获取this.props.form
class FormCollect extends PureComponent {

    renderForms = () => {
        console.log(this.props)
        const { formItems = [], form } = this.props;
        const { getFieldDecorator } = form;

        if (formItems.length === 0) return null;
        return formItems.map(formItem => {
            const {
                type, // 区分各个组件
                label, // 表单名
                name, // 表单名
                decorator, // getFieldDecorator方法使用，常用属性有initialValue、rules
                attach = {}, // 附加表单属性
                otherAttach = {}, // 其它表单属性
            } = formItem;

            const {
                style = {
                    width: '800px', // 设置默认表单宽度
                },
                placeholder = '请输入啦啦啦',
            } = attach;

            let formElement = null;
            if (type === 'form-list') {
                formElement = (
                    <FormList
                        {...formItem}
                    />
                )
            }
            console.log(attach)
            const formItemElement = (
                <>
                    <FormItem
                        // {...attach} // 附加属性，放在下方可覆盖上方默认属性
                        style={{
                            width: '500px'
                        }}
                        key={name} // map遍历需要唯一值key
                        label={label}
                    // labelCol={{ span: 3 }}
                    // wrapperCol={{ span: 20, offset: 1 }}
                    >
                        {getFieldDecorator(name, decorator)(formElement)}
                        <span className='colorred'>123123</span>
                    </FormItem>
                </>

            );

            return formItemElement;
        })
    }

    render() {
        return (
            <Form
                layout={'horizontal'}
            // labelAlign='right'
            // 'horizontal'|'vertical'|'inline'
            >
                {this.renderForms()}
            </Form>
            // <Form
            //     layout={formLayout}
            //     className={className}
            //     hideRequiredMark={hideRequiredMark}
            // >
            //     {
            //         !isMulti && this.renderForms(formItems)
            //     }
            //     {/** 多组表单的时候，children一定要为function */}
            //     {
            //         isMulti
            //         &&
            //         typeof children === 'function'
            //         &&
            //         children(formItems.map(f => this.renderForms(f)))
            //     }
            //     {!buttonInline && <div />}
            //     {buttonElement}
            // </Form>
            // <div>
            //     {this.renderForms()}
            // </div>
        )
    }
}

export default FormCollect


// this.props.form.setFieldsValue
// initialValue
// onChange

// 代码decorator为下面的options
// getFieldDecorator(id, options)
// options={
//     getValueFromEvent,
//     initialValue,
//     normalize,
//     rules,
//     trigger,
//     validateFirst,
//     validateTrigger,
//     valuePropName,
// }