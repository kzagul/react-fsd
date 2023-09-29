import React from "react";
import { Button as AntButton } from 'antd';

export const Button: React.FC = () => {
    return(
        <>
            <AntButton type="primary" size="large">Primary Button</AntButton>
        </>
    )
}