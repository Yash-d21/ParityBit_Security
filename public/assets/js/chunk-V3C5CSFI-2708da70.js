function a(i,u){let t=0,n,w=(...e)=>{t=Date.now(),n=void 0,i(...e)};function d(...e){let r=Date.now(),o=u-(r-t);o<=0||o>u?(n&&(window.clearTimeout(n),n=void 0),t=r,i.apply(this,e)):n||(n=window.setTimeout(w,o,...e))}return d.cancel=()=>{n&&(window.clearTimeout(n),n=void 0)},d}export{a};
//# sourceMappingURL=/assets/js/chunk-V3C5CSFI-2708da70.js.map
