(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=r(t(2)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};i.get||i.set?Object.defineProperty(a,t,i):a[t]=e[t]}return a.default=e,a}(t(0));r(t(1)),r(t(81));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,a,t,o){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&s)for(var n in s)void 0===a[n]&&(a[n]=s[n]);else a||(a=s||{});if(1===r)a.children=o;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(o[t]=e[t]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const u=e=>{let{to:a}=e,t=c(e,["to"]);return a.includes("http")?s.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/Ignite/","pages/BulmaPlugins.html")+a),s.default.createElement("a",d({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const i=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(i),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:i});return dispatchEvent(s),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const m=e=>{var a,t;return t=a=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),t};m(()=>t.e(22).then(t.bind(null,59))),m(()=>t.e(22).then(t.bind(null,80)));var h=n("h1",{},void 0,"Bulma Plugins"),v=n("p",{},void 0,"Ignite is built upon Bulma and exposes some of the elements and components as markdown extensions. Not all of them are implemented but feel free to make a pull request!"),g=n("p",{},void 0,"The classic button, in different colors, sizes, and states"),p=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: button is-large is-bold",n("br",{}),"[",n("span",{className:"hljs-string"},void 0,"Get Started :tada:"),"](",n("span",{className:"hljs-link"},void 0,"/Ignite/pages/GettingStarted.html"),")",n("br",{}),":::",n("br",{}))),f=n("p",{},void 0,"OUTPUT:"),b=n("p",{},void 0,"The .box element is simply a container with a shadow, a border, a radius, and some padding. For example, you can include a media object."),P=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: box",n("br",{}),n("br",{}),n("span",{className:"hljs-section"},void 0,"# Title"),n("br",{}),n("br",{}),"I can contain various combinations of elements.",n("br",{}),":::",n("br",{}))),N=n("p",{},void 0,"OUTPUT:"),k=n("div",{className:"column "},void 0,n("div",{className:"box"},void 0,n("h1",{},void 0,"Title"),n("p",{},void 0,"I can contain various combinations of elements."))),y=n("p",{},void 0,"Colored message blocks, to emphasize part of your page. Supports color, size, w/o Title"),w=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: message is-warning",n("br",{}),":warning: Body of the message",n("br",{}),":::",n("br",{}),n("br",{}),"::: message is-danger Message with a Title",n("br",{}),"Body of the message",n("br",{}),":::",n("br",{}))),T=n("p",{},void 0,"OUTPUT:"),x=n("article",{className:"message column is-warning"},void 0,n("div",{className:"message-body"},void 0,n("p",{},void 0,"\u26a0\ufe0f Body of the message"))),O=n("article",{className:"message column is-danger"},void 0,n("div",{className:"message-header"},void 0,n("p",{},void 0,"Message with a Title")),n("div",{className:"message-body"},void 0,n("p",{},void 0,"Body of the message"))),L=n("p",{},void 0,"Native HTML progress bars"),S=n("p",{},void 0,"STRUCTURE: %% [VALUE COLOR SIZE] Message %%"),U=n("p",{},void 0,"Value is required."),j=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"%% 75 is-primary is-large message %%",n("br",{}))),_=n("p",{},void 0,"OUTPUT:"),C=n("p",{},void 0,n("div",{className:"progress-with-message"},void 0,n("progress",{className:"progress is-primary is-large",value:"75",max:"100"},void 0,"75%"),n("span",{className:"progress-message"},void 0,"Look at all this progress!"))),q=n("p",{},void 0,"Small tag labels to insert anywhere"),E=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,n("span",{className:"hljs-section"},void 0,"#:is-info useful information #:is-success:is-large extension"),n("br",{}))),I=n("p",{},void 0,"OUTPUT:"),M=n("p",{},void 0,n("span",{className:"tag is-info"},void 0,"useful information"),n("span",{className:"tag is-success is-medium"},void 0,"extension extension")),z=n("p",{},void 0,"The hero component allows you to add a full width banner to your webpage, which can optionally cover the full height of the page as well."),B=n("p",{},void 0,"Support color, gradient, and size. Full height hero unsupported."),R=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: hero is-primary is-bold is-medium",n("br",{}),n("br",{}),n("span",{className:"hljs-section"},void 0,"# This is getting cool"),n("br",{}),n("br",{}),"...really cool",n("br",{}),":::",n("br",{}))),A=n("p",{},void 0,"OUTPUT:"),D=n("h1",{className:"title"},void 0,"This is getting cool"),G=n("p",{},void 0,"An element to organize a bunch of boxes into equal columns."),V=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"||| row",n("br",{}),n("br",{}),"::: box",n("br",{}),n("br",{}),n("span",{className:"hljs-section"},void 0,"# Title"),n("br",{}),n("br",{}),"I can contain various combinations of elements.",n("br",{}),":::",n("br",{}),n("br",{}),"::: box",n("br",{}),n("br",{}),n("span",{className:"hljs-section"},void 0,"# Title"),n("br",{}),n("br",{}),"I can contain various combinations of elements.",n("br",{}),":::",n("br",{}),n("br",{}),"|||",n("br",{}))),Z=n("p",{},void 0,"OUTPUT:"),H=n("div",{className:"columns "},void 0,n("div",{className:"column "},void 0,n("div",{className:"box"},void 0,n("h1",{},void 0,"Title"),n("p",{},void 0,"I can contain various combinations of elements."))),n("div",{className:"column "},void 0,n("div",{className:"box"},void 0,n("h1",{},void 0,"Title"),n("p",{},void 0,"I can contain various combinations of elements.")))),F=n("p",{},void 0,"A single tile element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids."),J=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: tile is-warning notification",n("br",{}),"I'm a simple tile.",n("br",{}),":::",n("br",{}))),W=n("p",{},void 0,"OUTPUT:"),$=n("div",{className:"tile is-warning notification"},void 0,n("p",{},void 0,"I'm a simple tile.")),Q=n("div",{className:"tile "},void 0,n("div",{className:"tile is-vertical is-parent"},void 0,n("div",{className:"tile is-child is-primary notification"},void 0,n("h1",{},void 0,"Vertical"),n("p",{},void 0,"Top Tile")),n("div",{className:"tile is-child is-warning notification"},void 0,n("h1",{},void 0,"...tiles"),n("p",{},void 0,"Bottom Tile"))),n("div",{className:"tile is-vertical is-parent"},void 0,n("div",{className:"tile is-child is-info notification"},void 0,n("h1",{},void 0,"Middle tile")))),X=n("h1",{},void 0,"Wide Tile"),K=n("p",{},void 0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."),Y=n("h1",{},void 0,"Tall tile"),ee=n("p",{},void 0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam."),ae=n("p",{},void 0,"Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor."),te=n("p",{},void 0,"Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo."),ie=n("p",{},void 0,"Many of the Bulma plugins above can take bulma helper classes as arguments. These are applied to the html. These helpers can be used to change the color of text or backgrounds, to change the size of components, and to layout the components in a specific pattern."),oe=n("p",{},void 0,"The following are used throughout ignite and can be used to easily theme your plugins to match Bulma."),se=n("table",{},void 0,n("thead",{},void 0,n("tr",{},void 0,n("th",{},void 0,"Class"),n("th",{},void 0,"Effect"))),n("tbody",{},void 0,n("tr",{},void 0,n("td",{},void 0,"is-primary"),n("td",{},void 0,"in combination with an element changes its color to whatever the theme sets for the primary color")),n("tr",{},void 0,n("td",{},void 0,"has-background-[COLOR]"),n("td",{},void 0,"changes the background to one of the defined color values")),n("tr",{},void 0,n("td",{},void 0,"has-text-[COLOR]"),n("td",{},void 0,"changes the text color to one of the defined color values")))),re=n("table",{},void 0,n("thead",{},void 0,n("tr",{},void 0,n("th",{},void 0,"Class"),n("th",{},void 0,"Effect"))),n("tbody",{},void 0,n("tr",{},void 0,n("td",{},void 0,"is-[SIZE]"),n("td",{},void 0,"Set a columns width [three-quarters, two-thirds, half, one-third, one-quarter, one-fifth, two-fifths, ...]")),n("tr",{},void 0,n("td",{},void 0,"is-[NUMBER]"),n("td",{},void 0,"Set a columns width to 1-12")),n("tr",{},void 0,n("td",{},void 0,"is-offset-[SIZE]"),n("td",{},void 0,"Set a columns offset (same values as size above)")))),ne=n("article",{className:"message column is-success is-three-fifths is-offset-one-fifth has-text-centered"},void 0,n("div",{className:"message-body"},void 0,n("p",{},void 0,"TIP: Use size and offset to narrow and center any bulma element"))),le=n("p",{},void 0,"Sometimes your just really want a div, so we gave you one!"),de=n("pre",{},void 0,n("code",{className:"language-markdown"},void 0,"::: div takes classes like this",n("br",{}),":::",n("br",{}),n("br",{}),"::: div /.or .like .this\\",n("br",{}),":::",n("br",{})));var ce=e=>n("div",{className:e.className},void 0,n("section",{},void 0,h,v,n("h2",{id:"elements"},void 0,"Elements ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#elements","aria-hidden":"true"})),n("h3",{id:"button"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/button/",className:"external-link"},void 0,"Button")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#button","aria-hidden":"true"})),g,p,f,n("button",{className:"button  is-large is-bold"},void 0,n("p",{},void 0,n(u,{currentPage:e.currentPage,to:"/Ignite/pages/GettingStarted.html"},void 0,"Get Started \ud83c\udf89"))),n("h3",{id:"box"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/box/",className:"external-link"},void 0,"Box")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#box","aria-hidden":"true"})),b,P,N,k,n("h3",{id:"message"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/components/message/",className:"external-link"},void 0,"Message")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#message","aria-hidden":"true"})),y,w,T,x,O,n("h3",{id:"progress"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/progress/",className:"external-link"},void 0,"Progress")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#progress","aria-hidden":"true"})),L,S,U,j,_,C,n("h3",{id:"tags"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/tag/",className:"external-link"},void 0,"Tags")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#tags","aria-hidden":"true"})),q,n("p",{},void 0,"Structure: # : [",n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/tag/#colors",className:"external-link"},void 0,"COLOR"),"][your_string]"),n("p",{},void 0,"Structure: # : [",n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/tag/#colors",className:"external-link"},void 0,"COLOR"),"]:[",n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/elements/tag/#sizes",className:"external-link"},void 0,"SIZE"),"][your_string]"),E,I,M,n("h2",{id:"layout"},void 0,"Layout ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#layout","aria-hidden":"true"})),n("h3",{id:"hero"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/layout/hero/",className:"external-link"},void 0,"Hero")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#hero","aria-hidden":"true"})),z,B,R,A,n("section",{className:"hero is-primary is-bold is-medium"},void 0,n("div",{className:"hero-body"},void 0,D,n("h2",{id:"...really-cool",className:"subtitle"},void 0,"...really cool ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#...really-cool","aria-hidden":"true"})))),n("h3",{id:"row"},void 0,"Row ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#row","aria-hidden":"true"})),G,V,Z,H,n("h3",{id:"tile"},void 0,"Tile ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#tile","aria-hidden":"true"})),F,J,W,$,n("p",{},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/layout/tiles/#example",className:"external-link"},void 0,"COMPLEX OUTPUT"),":"),n("div",{className:"tile is-ancestor"},void 0,n("div",{className:"tile is-vertical is-8"},void 0,Q,n("div",{className:"tile is-parent"},void 0,n("div",{className:"tile is-child is-danger notification"},void 0,X,n("h2",{id:"aligned-with-the-right-tile"},void 0,"Aligned with the right tile ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#aligned-with-the-right-tile","aria-hidden":"true"})),K))),n("div",{className:"tile is-parent"},void 0,n("div",{className:"tile is-child notification is-success"},void 0,Y,n("h2",{id:"with-even-more-content"},void 0,"With even more content ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#with-even-more-content","aria-hidden":"true"})),ee,ae,te))),n("h2",{id:"useful-helpers"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/modifiers/",className:"external-link"},void 0,"Useful Helpers")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#useful-helpers","aria-hidden":"true"})),ie,oe,n("h3",{id:"color"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/modifiers/color-helpers/",className:"external-link"},void 0,"Color")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#color","aria-hidden":"true"})),se,n("h3",{id:"size"},void 0,n(u,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/columns/sizes/",className:"external-link"},void 0,"Size")," ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#size","aria-hidden":"true"})),re,ne,n("h3",{id:"a-sneaky-div"},void 0,"A Sneaky Div ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#a-sneaky-div","aria-hidden":"true"})),le,de));a.default=ce,e.exports=a.default}}]);
//# sourceMappingURL=BulmaPlugins.js.map