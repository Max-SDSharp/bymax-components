import{j as n,a as t,F as l,S as s,s as c}from"./Select.stories-4ba5aab2.js";import{M as a,C as h}from"./index-e7920d12.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isNativeReflectConstruct-a221c5d1.js";import"./index-d3ea75b5.js";import"./iframe-fcce4e2f.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function i(o){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code"},r(),o.components);return t(l,{children:[n(a,{of:s}),`
`,n(e.h1,{id:"select",children:"Select"}),`
`,t(e.p,{children:[n("b",{children:"bymax React Select"})," is a component created using the ",n(e.a,{href:"https://react-select.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-select"}),` component, a flexible and beautiful select input control for ReactJS
with multiselect, singleselect and search system.`]}),`
`,t(e.p,{children:[`Customized to facilitate its use, it has an animation feature with its placeholder text which can be used as the title of the component and properties that help
in integration with the `,n(e.a,{href:"https://formik.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"formik"})," forms component."]}),`
`,t(e.p,{children:["The ",n("b",{children:"bymax React Select"})," component was designed for use in forms that work with cryptocurrencies, but it was also developed to work with any type of data."]}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"id"}),": Identifier"]}),`
`,t(e.li,{children:[n(e.strong,{children:"value"}),": Current value, must be an object as follows: ",n(e.code,{children:"{ id: '', value: '', label: '', image: '', base: '', quote: '' }"})]}),`
`,t(e.li,{children:[n(e.strong,{children:"isMulti"}),": Allows you to choose several options (true: Multi Selection | false: Single selection)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isInvalid"}),": Data verification status (true: Changes the component's border color to red | false: Maintains the component's border color respecting the applied style)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isLocked"}),": Shows the value and blocks the component, preventing it from changing its value (true: enable | false: disable)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isDisabled"}),': Changes the value to empty ("") and blocks the component, not allowing it to change its value (true: enable | false: disable)']}),`
`,t(e.li,{children:[n(e.strong,{children:"isClearable"}),": Allows you to delete the content of the component in value by clicking on the X icon (true: enable | false: disable)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"options"}),": Items that are shown by the component, must be an object as follows: ",n(e.code,{children:"{ id: '', value: '', label: '', image: '', base: '', quote: '' }"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"id"}),": Value identifier (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"value"}),": Value of the item (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"label"}),": Text shown by the component. If the base AND quote is entered, the base/quote will be shown as text, otherwise only the label (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"image"}),": Icon that will be shown next to the text (Optional)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"base"}),": Base currency (Optional)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"quote"}),": Quote currency (Optional)"]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"placeholder"}),": Component title"]}),`
`,t(e.li,{children:[n(e.strong,{children:"placeholderSearch"}),": Search input placeholder text when search is enabled"]}),`
`,t(e.li,{children:[n(e.strong,{children:"moveSelectedToTop"}),": Moves selected option to top of dropdown options list when true."]}),`
`,t(e.li,{children:[n(e.strong,{children:"noOptionsMessage"}),": Message shown when there is no search result"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isLoading"}),": Controls the display of the loading indicator"]}),`
`,t(e.li,{children:[n(e.strong,{children:"loadingMessage"}),": Message shown during loading"]}),`
`,t(e.li,{children:[n(e.strong,{children:"menuPortalTarget"}),": HTMLElement where the menu will be rendered"]}),`
`,t(e.li,{children:[n(e.strong,{children:"styles"}),": Define custom CSS styles"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onChange"}),": Function that returns every time the component's value is changed (Returns the complete object chosen in options)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onFormikChange"}),": Function for integration with the Formik component, triggered every time the component's value changes"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onFormikBlur"}),": Function for integration with the Formik component, triggered every time the component loses focus"]}),`
`]}),`
`,n(h,{of:c})]})}function S(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n(e,Object.assign({},o,{children:n(i,o)})):i(o)}export{S as default};
