declare module "@bymax/select" {
    interface Option {
      id: string;
      value: string;
      label: string;
      image?: string;
      base?: string;
      quote?: string;
    }
  
    interface SelectProps {
      id: string;
      value: Option | Option[];
      isMulti: boolean;
      isInvalid?: boolean;
      isLocked?: boolean;
      isDisabled?: boolean;
      isClearable?: boolean;
      options: Option[];
      placeholder?: string;
      noOptionsMessage: () => string;
      onChange: (value: Option | Option[] | null) => void;
      onFormikChange?: (id: string, value: Option | Option[] | null) => void;
      onFormikBlur?: (id: string, value: Option | Option[] | null) => void;
    }
  
    const Select: React.FC<SelectProps>;
  
    export default Select;
  }
  