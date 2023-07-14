"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _templateObject,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_react=_interopRequireDefault(require("react")),_css=require("@emotion/css"),_propTypes=_interopRequireDefault(require("prop-types")),_jsxRuntime=require("react/jsx-runtime"),_excluded=["className","type","width","height","bgColor","color","colorHover","bgColorHover"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var buttonStyles=function(a){var b=a.bgColor,c=a.color,d=a.width,e=a.height,f=a.colorHover,g=a.bgColorHover,h=a.borderRadius;return(0,_css.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2["default"])(["\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  width: ",";\n  height: ",";\n  text-align: center;\n  &:hover{\n    background-color: ","\n    color: ","\n  }\n"])),b,c,h||"8px",d||"150px",e||"40px",g,f)},Button=/*#__PURE__*/_react["default"].forwardRef(function(a,b){var c=a.className,d=a.type,e=a.width,f=a.height,g=a.bgColor,h=a.color,i=a.colorHover,j=a.bgColorHover,k=(0,_objectWithoutProperties2["default"])(a,_excluded);return/*#__PURE__*/(0,_jsxRuntime.jsx)("button",_objectSpread({ref:b,type:d||"button",className:(0,_css.cx)(buttonStyles({width:e,height:f,bgColor:g,color:h,bgColorHover:j,colorHover:i}),c)},k))});Button.propTypes={className:_propTypes["default"].string,bgColor:_propTypes["default"].string,color:_propTypes["default"].string,width:_propTypes["default"].string,height:_propTypes["default"].string,colorHover:_propTypes["default"].string,bgColorHover:_propTypes["default"].string,borderRadius:_propTypes["default"].string};var _default=Button;exports["default"]=_default;