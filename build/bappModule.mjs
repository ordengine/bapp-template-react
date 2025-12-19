import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';





///// component: components/Greetings.jsx 
///// JSX source:
///
// export const Greetings = () => {
// 
//     return (
//         <div className={'w-full h-full flex flex-col justify-center items-center text-[18px] text-lime-300 bg-gradient-to-tl from-zinc-900 to-gray-700'}>
// 
//             <div className={'w-16 h-16 rounded-sm bg-orange-400 ring-8 ring-neutral-800 hover:ring-neutral-700 active:scale-[90%] cursor-crosshair mb-4'}></div>
// 
//             <div className={'dogicaPixel tracking-[-1.5px]'}>
//                 greetings, <b className={'text-orange-400 px-0.5 text-[24px]'}>bitmap</b><span className={'text-[28px]'}>!</span>
//             </div>
//         </div>
//     )
// }
// 

export const Greetings = () => {
  return /*#__PURE__*/_jsxs("div", {
    className: 'w-full h-full flex flex-col justify-center items-center text-[18px] text-lime-300 bg-gradient-to-tl from-zinc-900 to-gray-700',
    children: [/*#__PURE__*/_jsx("div", {
      className: 'w-16 h-16 rounded-sm bg-orange-400 ring-8 ring-neutral-800 hover:ring-neutral-700 active:scale-[90%] cursor-crosshair mb-4'
    }), /*#__PURE__*/_jsxs("div", {
      className: 'dogicaPixel tracking-[-1.5px]',
      children: ["greetings, ", /*#__PURE__*/_jsx("b", {
        className: 'text-orange-400 px-0.5 text-[24px]',
        children: "bitmap"
      }), /*#__PURE__*/_jsx("span", {
        className: 'text-[28px]',
        children: "!"
      })]
    })]
  });
};






///// component: App.jsx 
///// JSX source:
///
// import {Greetings} from "./components/Greetings";
// 
// function App() {
// 
//   return (
//       <div className={'w-full h-full'}>
//           <Greetings />
//       </div>
//   )
// }
// 
// export default App
// 

function App() {
  return /*#__PURE__*/_jsx("div", {
    className: 'w-full h-full',
    children: /*#__PURE__*/_jsx(Greetings, {})
  });
}
export default App;
