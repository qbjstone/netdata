!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3b74b0b9-ed37-449d-bb07-990d0398248d",e._sentryDebugIdIdentifier="sentry-dbid-3b74b0b9-ed37-449d-bb07-990d0398248d")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"0c0a7a41a0e7ecb4870dbce38dbd7d5e0913bb7f"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[9895],{39979:function(e,t,r){r.d(t,{Z:function(){return g}});r(47941),r(82526),r(57327),r(41539),r(88449),r(2490),r(59849),r(38880),r(15581),r(34514),r(54747),r(49337),r(33321),r(69070);var n=r(87462),a=r(4942),o=r(45987),c=r(67294),i=r(87267),l=["callback","feature","isStart","isSuccess","isFailure","eventReason","payload"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){return(0,c.forwardRef)((function(t,r){var u=t.callback,d=t.feature,b=t.isStart,s=t.isSuccess,p=t.isFailure,y=t.eventReason,g=t.payload,O=void 0===g?{}:g,w=(0,o.Z)(t,l),j=(0,i.Z)(),v=j.sendLog,m=j.isReady,k=(0,c.useCallback)((function(){var e=w[u],t=f(f(f(f(f({feature:d,isStart:b,isSuccess:s,isFailure:p,eventReason:y},O),w["data-ga"]?{dataGa:w["data-ga"]}:{}),w.dataGa?{dataGa:w.dataGa}:{}),w["data-track"]?{dataTrack:w["data-track"]}:{}),w.label?{label:w.label}:{});"function"==typeof e&&e(),v(t,!0)}),[u,v,m,O,w]),E=(0,c.useMemo)((function(){return f(f({},w),{},(0,a.Z)({},u,k))}),[w,u,k]);return c.createElement(e,(0,n.Z)({ref:r},E))}))},b=r(16294),s=["payload"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return(0,c.forwardRef)((function(t,r){var a=t.payload,i=void 0===a?{}:a,l=(0,o.Z)(t,s),u=d(e);return c.createElement(u,(0,n.Z)({},l,{ref:r,callback:"onClick",payload:y(y({},i),{},{action:b.Nw.buttonClicked})}))}))}},79895:function(e,t,r){r.r(t),r.d(t,{MobileApp:function(){return u}});r(74916),r(15306);var n=r(67294),a=r(59978),o=r(78266),c=r(39979),i=r(63346),l=(0,c.Z)(a.Button),u=function(){return n.createElement(i.ZP,{feature:"MobileApp"},n.createElement(a.Layer,{full:!0},n.createElement(a.Flex,{alignItems:"center",justifyContent:"center",column:!0,width:"100%",height:"100%",background:"mainBackground",gap:4},n.createElement(o.H,null),n.createElement(a.TextBigger,{textAlign:"center"},"Please open this link using your mobile device."),n.createElement(a.Flex,{alignItems:"center"},n.createElement(l,{onClick:function(){return window.location.replace("/")},feature:"MobileApp",payload:{label:"Go to app"}},"Go to app")))))};t.default=u}}]);