# bymax React Select component

Is a component created using the [react-select](https://react-select.com) component, a flexible and beautiful select input control for ReactJS
with multiselect, singleselect and search system.

Customized to facilitate its use, it has an animation feature with its placeholder text which can be used as the title of the component and properties that help
in integration with the [formik](https://formik.org/) forms component.

The <b>bymax React Select</b> component was designed for use in forms that work with cryptocurrencies, but it was also developed to work with any type of data.

![npm](https://img.shields.io/npm/v/bymax-react-select) ![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/bymax-react-select.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bymax-react-select/)

[![storybook](https://img.shields.io/badge/tutorial-storybook-purple)](https://bymax-components.vercel.app/)

## Getting Started

### Installation

```bash
npm i bymax-react-select --save
```
or
```bash
yarn add bymax-react-select
```

### Usage

##### JavaScript Example

###### App.js
```jsx
import React, { useMemo, useState } from "react";
import { Select } from "bymax-react-select";

export default function App() {
  const options = useMemo(() => [
      {
        id: 1, // acts as primary key, should be unique and non-empty
        value: "BTC",
        label: "Bitcoin",
        image: "path to your images/image.svg",
        base: "BTC",
        quote: "USDT",
      },
      {
        id: 2,
        value: "eth",
        label: "Ethereum",
        base: "ETH",
      },
      {
        id: 3,
        value: "sol",
        label: "Solana",
      },
    ],[]);

  const [value, setValue] = useState(options[0]);

  return (
    <Select
      id="example-id"
      value={value}
      isMulti={false}
      isClearable={true}
      options={options}
      placeholder="Select a coin"
      noOptionsMessage="No coins found"
      onChange={(selectedOption) =>
        setValue(selectedOption)
      }
    />
  );
}
```

##### TypeScript Example

###### App.tsx
```tsx
import React, { useMemo, useState } from "react";
import { Select, Option } from "bymax-react-select";

export default function App() {
  const options: Option[] = useMemo(() => [
    {
      id: "1", // acts as primary key, should be unique and non-empty
      value: "BTC",
      label: "Bitcoin",
      image: "path to your images/image.svg",
      base: "BTC",
      quote: "USDT",
    },
    {
      id: "2",
      value: "eth",
      label: "Ethereum",
      base: "ETH",
    },
    {
      id: "3",
      value: "sol",
      label: "Solana",
    },
  ], []);

  const [value, setValue] = useState<Option | Option[] | null>(options[0]);

  return (
    <Select
      id="example-id"
      value={value}
      isMulti={true}
      isClearable={true}
      options={options}
      placeholder="Select a coin"
      noOptionsMessage="No coins found"
      onChange={(selectedOption) =>
        setValue(selectedOption)
      }
    />
  );
}
```

### Props

- **id**: Identifier
- **value**: Current value, must be an object as follows: ```{ id: '', value: '', label: '', image: '', base: '', quote: '' }```
- **isMulti**: Allows you to choose several options (true: Multi Selection | false: Single selection)
- **isInvalid**: Data verification status (true: Changes the component's border color to red | false: Maintains the component's border color respecting the applied style)
- **isLocked**: Shows the value and blocks the component, preventing it from changing its value (true: enable | false: disable)
- **isDisabled**: Changes the value to empty ("") and blocks the component, not allowing it to change its value (true: enable | false: disable)
- **isClearable**: Allows you to delete the content of the component in value by clicking on the X icon (true: enable | false: disable)
- **options**: Items that are shown by the component, must be an object as follows: ```{ id: '', value: '', label: '', image: '', base: '', quote: '' }```
               - **id**: Value identifier (Required)
               - **value**: Value of the item (Required)
               - **label**: Text shown by the component. If the base AND quote is entered, the base/quote will be shown as text, otherwise only the label (Required)
               - **image**: Icon that will be shown next to the text (Optional)
               - **base**: Base currency (Optional)
               - **quote**: Quote currency (Optional)
- **placeholder**: Component title
- **noOptionsMessage**: Message shown when there is no search result
- **styles**: Define custom CSS styles
- **onChange**: Function that returns every time the component's value is changed (Returns the complete object chosen in options)
- **onFormikChange**: Function for integration with the Formik component, triggered every time the component's value changes
- **onFormikBlur**: Function for integration with the Formik component, triggered every time the component loses focus

## Contributions

Fork and create a pull request

## License

[MIT License](https://github.com/msalvatti/bymax-components/blob/master/LICENSE)

## Sponsor

Was I able to help you? Buy me a coffee!

<p style="display: flex; align-items: center;">
  <img src="./src/stories/Select/coins/btc.svg" width="20" style="margin-right: 5px;">
  <b>Bitcoin:&nbsp;</b> bc1qx0jwnwkum3xxz77ge86qgpumk4plzgrkmxh5aw
</p>


<p style="display: flex; align-items: center;">
  <img src="./src/stories/Select/coins/eth.svg" width="20" style="margin-right: 5px;">
  <b>Ethereum:&nbsp;</b> 0xb3718C66311eFcC7a868973205E0Dca6dB05822e
</p>

<p style="display: flex; align-items: center;">
  <img src="./src/stories/Select/coins/sol.svg" width="20" style="margin-right: 5px;">
    <b>Solana:&nbsp;</b> 9GZ6sJj6xHbH2KdgMz1WEmJ86HUmSMgxkszwVjhnRfky
</p>

<p style="display: flex; align-items: center;">
  <img src="./src/stories/Select/coins/matic.svg" width="20" style="margin-right: 5px;">
    <b>Polygon:&nbsp;</b> 0xb3718C66311eFcC7a868973205E0Dca6dB05822e
</p>



