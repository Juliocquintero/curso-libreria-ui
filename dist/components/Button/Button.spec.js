"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_Button=_interopRequireDefault(require("./Button")),_jsxRuntime=require("react/jsx-runtime");describe("@components/Button",function(){it("should render",function(){// arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button"})),b=a.getByRole,c=b("button");// act
// assert
expect(c).toBeDefined()}),it("Given className sent it should be combined with className of the component",function(){// arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button",className:"foo"})),b=a.getByRole,c=b("button");// act
// assert
expect(c).toHaveClass("foo")}),it("Given the Button, when the props provide width attribute then the component will take those style",function(){// arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button",width:"100%"})),b=a.getByRole,c=b("button");// act
// assert
expect(c).toHaveStyle("width: 100%")}),it("Given the Button, when the props provide height attribute then the component will take those style",function(){// arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button",height:"30px"})),b=a.getByRole,c=b("button");// act
// assert
expect(c).toHaveStyle("height: 30px")})});