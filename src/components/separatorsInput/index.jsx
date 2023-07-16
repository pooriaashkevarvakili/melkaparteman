import React from "react";
import { InputNumber, Form } from "antd";

function InputsSeparator({ form, type = "number",
    label = "",
    name = "",
    classes = "",
    extraClasses = "",
    value,
    required,
    pattern,
    patternMessage,
    defaultValue = undefined,
    placeholder = "",
    disabled,
    visibilityToggle,
    formatter,
    size,
    min,
    max,
    style = {},
    children,
    autoSize = false, }) {
    const numberWithCommas = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
        return x;
    };

    return (
        // <Form.Item label={label} name={name} rules={[{ required }]}>
        //   <InputNumber
        //     style={{ width: "100%" }}
        //     placeholder={label}
        //     formatter={(value) => numberWithCommas(value)}
        //     parser={(value) => value.replace(/,/g, "")}
        //   />
        // </Form.Item>
        <Form.Item
            labelCol={{ xs: 24 }}
            wrapperCol={{ xs: 24 }}
            className={extraClasses}
            label={label}
            name={name}
            initialValue={defaultValue}
            rules={[{ required }]}
        >

            <InputNumber
                disabled={disabled}
                className={`${classes} w-96`}
                size={`${size || `large`}`}
                min={min}
                max={max}
                style={style}
                formatter={(value) => numberWithCommas(value)}
                parser={(value) => value.replace(/,/g, "")}
                autoComplete="off"
                defaultValue={defaultValue}
            />

        </Form.Item>
    );
}

export default InputsSeparator;