declare module "bymax-react-select" {
  interface Option {
    id: string;
    value: string;
    label: string;
    image?: string;
    base?: string;
    quote?: string;
  }

  interface CSSObject {
    [key: string]: string | number | CSSObject | undefined;
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
    styles?: {[key: string]: CSSObject | undefined};
    onChange: (value: Option | Option[] | null) => void;
    onFormikChange?: (id: string, value: Option | Option[] | null) => void;
    onFormikBlur?: (id: string, touched?: boolean, shouldValidate?: boolean) => void;
  }

  const Select: React.FC<SelectProps>;

  export { Select, type Option, type SelectProps };
}
