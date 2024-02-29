import React from "react";
import { components } from "react-select";

const { ValueContainer, Placeholder, SingleValue, MultiValue, Option } = components;

export const IconSingleValue = (props) => (
    <SingleValue {...props}>
        {
            (props.data.image && (props.data.image !== ''))
                ? <img src={props.data.image} alt={props.data.label} style={{ height: '20px', width: '20px', borderRadius: '50%', marginRight: '10px' }} />
                : <React.Fragment></React.Fragment>
        }
        {(props.data.base && props.data.quote)
            ? <><span style={{ fontSize: '14px' }}><strong>{props.data.base}</strong></span>
                <span style={{ fontSize: '10px' }}>/{props.data.quote}</span></>
            : <span>{props.data.label}</span>
        }
    </SingleValue>
);

export const IconMultiValue = (props) => (
    <MultiValue {...props}>
        {
            (props.data.image && (props.data.image !== ''))
                ? <img src={props.data.image} alt={props.data.label} style={{ height: '15px', width: '15px', borderRadius: '50%', marginRight: '5px' }} />
                : <React.Fragment></React.Fragment>
        }
        {(props.data.base && props.data.quote)
            ? <><span style={{ fontSize: '12px' }}>{props.data.base}</span>
                <span style={{ fontSize: '8.5px' }}>/{props.data.quote}</span></>
            : <span>{props.data.label}</span>
        }
    </MultiValue>
);

export const IconOption = (props) => (
    <Option {...props}>
        {
            (props.data.image && (props.data.image !== ''))
                ? <img src={props.data.image} alt={props.data.label} style={{ height: '25px', width: '25px', borderRadius: '50%', marginRight: '10px' }} />
                : <React.Fragment></React.Fragment>
        }
        {(props.data.base && props.data.quote)
            ? <><span style={{ fontSize: '14px' }}><strong>{props.data.base}</strong></span>
                <span style={{ fontSize: '10px' }}>/{props.data.quote}</span></>
            : <span>{props.data.label}</span>
        }
    </Option>
);

export const CustomValueContainer = ({ children, ...props }) => {
    return (
        <ValueContainer {...props}>
            <Placeholder {...props} isFocused={props.isFocused}>
                {props.selectProps.placeholder}
            </Placeholder>
            {React.Children.map(children, child =>
                child && child.type !== Placeholder ? child : null
            )}
        </ValueContainer>
    );
};