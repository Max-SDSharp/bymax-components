declare module "bymax-react-select" {
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
    value: Option | Option[] | null;
    isMulti: boolean;
    isInvalid?: boolean;
    isLocked?: boolean;
    isDisabled?: boolean;
    isClearable?: boolean;
    options: Option[];
    placeholder?: string;
    noOptionsMessage: string;
    onChange: (id: string, value: Option | Option[] | null) => void;
    onFormikChange?: (id: string, value: Option | Option[] | null) => void;
    onFormikBlur?: (id: string, touched?: boolean, shouldValidate?: boolean) => void;
  }

  const Select: React.FC<SelectProps>;

  export { Select, type Option, type SelectProps };
}
