import React, { useState, useEffect, useRef } from "react";
import ReactSelect, { createFilter } from "react-select";

import customStyles from "./styles/styles";
import {
  IconSingleValue,
  IconMultiValue,
  IconOption,
  CustomValueContainer,
} from "./components/components.jsx";

/**
 * props:
 * - id -> Identifier
 * - value -> Current value, must be an object as follows: { id: '', value: '', label: '', image: '', base: '', quote: '' }
 * - isMulti -> Allows you to choose several options (true: Multi Selection | false: Single selection)
 * - isInvalid -> Data verification status (true: Changes the component's border color to red | false: Maintains the component's border color respecting the applied style)
 * - isLocked -> Shows the value and blocks the component, preventing it from changing its value (true: enable | false: disable)
 * - isDisabled -> Changes the value to empty ("") and blocks the component, not allowing it to change its value (true: enable | false: disable)
 * - isClearable -> Allows you to delete the content of the component in value by clicking on the X icon (true: enable | false: disable)
 * - options -> Items that are shown by the component, must be an object as follows: { id: '', value: '', label: '', image: '', base: '', quote: '' }
 *              id: Value identifier (Required)
 *              value: Value of the item (Required)
 *              label: Text shown by the component. If the base AND quote is entered, the base/quote will be shown as text, otherwise only the label (Required)
 *              image: Icon that will be shown next to the text (Optional)
 *              base: Base currency (Optional)
 *              quote: Quote currency (Optional)
 * - placeholder -> Component title
 * - noOptionsMessage -> Message shown when there is no search result
 * - isLoading -> Controls the display of the loading indicator
 * - loadingMessage -> Message shown during loading
 * - styles -> Define custom CSS styles
 * - onChange -> Function that returns every time the component's value is changed (Returns the complete object chosen in options)
 * - onFormikChange -> Function for integration with the Formik component, triggered every time the component's value changes
 * - onFormikBlur -> Function for integration with the Formik component, triggered every time the component loses focus
 */
export const Select = (props) => {
  const maxOptions = 1;

  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [values, setValues] = useState([]);
  const [valuesMulti, setValuesMulti] = useState();
  const [maxValues, setMaxValues] = useState({});
  const [isMaxVal, setIsMaxVal] = useState(false);

  const propsRef = useRef(props);

  const [options, setOptions] = useState();
  const [actualOptions, setActualOptions] = useState();

  const handleBlur = () => {
    if (propsRef.current.onFormikBlur)
      propsRef.current.onFormikBlur(props.id, true, false);
  };

  const handleChange = (e) => {
    let els = [];
    let eValue, eLabel, eImage;

    if (Array.isArray(e)) {
      if (e.length > 0) {
        eValue = e[e.length - 1].value;
        eLabel = e[e.length - 1].label;
        eImage = e[e.length - 1].image;
      }

      if (
        Array.isArray(values) &&
        values.findIndex((val) => val.value && val.value === eValue) === -1
      ) {
        e.map((el) => els.push(el));

        if (els.length > maxOptions || values.length > maxOptions) {
          if (els.length === 0) {
            setValues(els);
            setIsMaxVal(false);
          } else {
            setIsMaxVal(true);

            const val = [
              {
                id: props.id,
                value: eValue,
                label: eLabel + " +" + values.length.toString(),
                image: eImage,
              },
            ];

            setValuesMulti((values) => {
              return [...values, els[els.length - 1]];
            });

            setMaxValues(val);

            let opt = [];

            options.map((el) => {
              if (!values.includes(el) && !els.includes(el)) {
                opt.push(el);
              }
              return options;
            });

            setActualOptions(opt);
          }
        } else {
          setValuesMulti(els);
        }

        if (e.length === 0) {
          setValuesMulti(e)
        }
      }
    } else if (e) {
      setValues(e);
      propsRef.current.onChange(e);
      if (propsRef.current.onFormikChange)
        propsRef.current.onFormikChange(props.id, e);
    } else {
      setValues([]);
      setOptions(props.options);
      setActualOptions(props.options);
      propsRef.current.onChange({ id: props.id, value: "" });
      if (propsRef.current.onFormikChange)
        propsRef.current.onFormikChange(props.id, []);
    }
  };

  useEffect(() => {
    setValues([]);
  }, [props.isMulti]);

  useEffect(() => {
    if (valuesMulti) {
      setValues(valuesMulti);
      propsRef.current.onChange(valuesMulti);
      if (propsRef.current.onFormikChange)
        propsRef.current.onFormikChange(props.id, valuesMulti);
    }
  }, [
    valuesMulti,
    propsRef.current.onChange,
    propsRef.onFormikChange,
    props.id,
  ]);

  useEffect(() => {
    if (props.isDisabled) {
      setDisabled(true);
      setValues([]);
      propsRef.current.onChange({ id: props.id, value: "" });
      if (propsRef.current.onFormikChange)
        propsRef.current.onFormikChange(props.id, []);
    } else setDisabled(false);
  }, [
    props.isDisabled,
    propsRef.current.onChange,
    propsRef.onFormikChange,
    props.id,
  ]);

  useEffect(() => {
    setInvalid(props.isInvalid);
  }, [props.isInvalid]);

  useEffect(() => {
    if (props.options) {
      setOptions(props.options);
      setActualOptions(props.options);
    }
  }, [props.options]);

  useEffect(() => {
    if (props.value) {
      setValues(props.value);
      propsRef.current.onChange(props.value);
    } else {
      setValues([]);
      propsRef.current.onChange({ id: props.id, value: "" });
    }
  }, [props.value, propsRef.current.onChange, props.id]);

  const mergeStyles = (defaultStyles, customStyles) => {
    const combinedStyles = { ...defaultStyles }

    for (const key in customStyles) {
      if (defaultStyles[key]) {
        combinedStyles[key] = (provided, state) => {
          const defaultStyle = defaultStyles[key](provided, state)
          const customStyle = customStyles[key](provided, state)
          return { ...defaultStyle, ...customStyle }
        }
      } else {
        combinedStyles[key] = customStyles[key]
      }
    }

    return combinedStyles
  }

  const combinedStyles = mergeStyles(customStyles, props.styles)

  return (
    <ReactSelect
      id={props.id}
      styles={combinedStyles}
      className="react-select-container"
      classNamePrefix="react-select"
      options={isMaxVal ? actualOptions : options}
      isMulti={props.isMulti}
      closeMenuOnSelect={!props.isMulti}
      isDisabled={disabled || props.isLocked}
      isInvalid={invalid}
      isClearable={props.isClearable}
      onChange={(e) => handleChange(e)}
      onBlur={() => handleBlur()}
      value={
        !values.length
          ? values
          : values.length <= maxOptions
          ? values
          : maxValues
      }
      noOptionsMessage={() => props.noOptionsMessage}
      isLoading={props.isLoading}
      loadingMessage={() => props.loadingMessage}
      filterOption={createFilter({ ignoreAccents: false })}
      components={{
        ValueContainer: CustomValueContainer,
        SingleValue: IconSingleValue,
        MultiValue: IconMultiValue,
        Option: IconOption,
      }}
      placeholder={props.placeholder}
    />
  );
};
