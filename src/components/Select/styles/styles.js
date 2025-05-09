const customStyles = {
    control: (provided, state) => ({
        ...provided,
        minHeight: 58,
        border: state.isFocused || state.selectProps.isInvalid ? 0 : provided,
        boxShadow: 0,
        cursor: 'pointer',
    }),
    container: (provided, state) => ({
        ...provided,
        marginTop: provided,
        borderRadius: '5px',
        border: state.isFocused ? (state.selectProps.isInvalid ? "1px solid #d9534f" : "1px solid #84aef2") : (state.selectProps.isInvalid ? "1px solid #d9534f" : 0),
        boxShadow: state.isFocused ? (state.selectProps.isInvalid ? "0 0 0 0.2rem rgb(217 83 79 / 25%)" : "0 0 0 0.2rem rgb(63 128 234 / 25%)") : 'none',
    }),
    input: provided => ({
        ...provided,
        fontSize: provided,
        color: provided,
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: provided,
        color: provided,
    }),
    multiValue: (provided) => ({
        ...provided,
        fontSize: provided,
        color: provided,
        height: '28px',
        width: 'auto',
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        marginLeft: 'auto',
      }),
    option: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: provided,
        color: provided,
        zIndex: 9999,
        cursor: 'pointer',
        pointerEvents: 'auto',
    }),
    noOptionsMessage: provided => ({
        ...provided,
        fontSize: provided,
        color: provided
    }),
    dropdownIndicator: provided => ({
        ...provided,
        padding: 4
    }),
    clearIndicator: provided => ({
        ...provided,
        padding: 4
    }),
    menu: (provided, state) => ({
        ...provided,
        marginTop: 0,
        transform: 'none',
        zIndex: 9999,
        pointerEvents: 'auto',        
    }),
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 9999,
        position: 'fixed',
        pointerEvents: 'auto',
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0px 6px',
        top: state.hasValue || state.selectProps.inputValue ? 11 : "10%",
        left: 4,
        overflow: "visible",
    }),
    placeholder: (provided, state) => ({
        ...provided,
        position: "absolute",
        top: state.hasValue || state.selectProps.inputValue ? -17 : "15%",
        transition: "top 0.1s, font-size 0.1s",
        fontSize: (state.hasValue || state.selectProps.inputValue) && 11,
        opacity: state.hasValue || state.selectProps.inputValue ? 0.5 : 0.8,
    })
};

export default customStyles;