import { Select } from "../../components/Select";
import btc from "./coins/btc.svg";
import eth from "./coins/eth.svg";
import sol from "./coins/sol.svg";

export default {
  title: "bymax-react-select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    isMulti: true,
    isInvalid: false,
    isLocked: false,
    isDisabled: false,
    isClearable: true,
    placeholder: "Select a coin",
    placeholderSearch: "Search for a coin",
    noOptionsMessage: "No coins found",
  },
};

export const select = (args) => (
  <div style={{ width: "300px", height: "150px" }}>
    <Select
      id="example-id"
      value={null}
      isMulti={args.isMulti}
      isInvalid={args.isInvalid}
      isLocked={args.isLocked}
      isDisabled={args.isDisabled}
      isClearable={args.isClearable}
      options={[
        {
          id: 1,
          value: "BTC",
          label: "Bitcoin",
          image: btc,
          base: "BTC",
          quote: "USDT",
        },
        {
          id: 2,
          value: "eth",
          label: "Ethereum",
          image: eth,
          base: "ETH",
        },
        {
          id: 3,
          value: "sol",
          label: "Solana",
          image: sol,
        },
      ]}
      placeholder={args.placeholder}
      placeholderSearch={args.placeholderSearch}
      noOptionsMessage={args.noOptionsMessage}
      onChange={(selectedOption) =>
        console.log("Selected Option:", selectedOption)
      }
      onFormikChange={(id, value) => console.log("Formik Change:", id, value)}
      onFormikBlur={(id, value) => console.log("Formik Blur:", id, value)}
    />
  </div>
);
