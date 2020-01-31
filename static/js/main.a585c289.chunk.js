(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),s=a.n(i),o=(a(14),a(1)),l=a(2),c=a(4),u=a(3),d=a(5),h=a(8),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(){var e=a.state.value;a.props.handleSubmit(e)},a.state={value:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),n.a.createElement("input",{type:"button",value:"Submit",onClick:this.onSubmit}))}}]),t}(n.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){var t=e.toLowerCase()===a.props.wordStr;a.setState({isSubmitted:!0,isCorrect:t})},a.initialState={isSubmitted:!1,isCorrect:!1,isAnsRequested:!1},a.state=a.initialState,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.isAnsRequested?n.a.createElement("div",{className:"userInteractions"},"The correct answer is ",n.a.createElement("strong",null,this.props.wordStr),"."):this.state.isSubmitted?this.state.isCorrect?n.a.createElement("div",{className:"userInteractions"},"Good job! Your answer is correct"," ",n.a.createElement("span",{role:"img","aria-label":"smiling face"},"\ud83d\ude04")):n.a.createElement("div",{className:"userInteractions"},"Incorrect answer"," ",n.a.createElement("span",{role:"img","aria-label":"frowning face"},"\u2639\ufe0f"),n.a.createElement("div",{className:"userOptions"},n.a.createElement("button",{onClick:function(){return e.setState(e.initialState)}},"Try Again"),n.a.createElement("button",{onClick:function(){return e.setState({isAnsRequested:!0})}},"Show answer"))):n.a.createElement("div",{className:"userInteractions"},n.a.createElement(m,{handleSubmit:this.handleSubmit}))}}]),t}(n.a.Component),f=function(e){return n.a.createElement("div",{className:"prompt"},n.a.createElement("em",null,e.prompt))},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isClicked:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.example.replace(this.props.wordStr,"______");return this.state.isClicked?n.a.createElement("div",{className:"clue"}," ",t," "):n.a.createElement("div",{className:"clue-prompt",onClick:function(){return e.setState({isClicked:!0})}},"Click here for a clue")}}]),t}(n.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).prompt=a.props.word.definition,a.example=a.props.word.example,a.wordStr=a.props.word.string,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card"},n.a.createElement("p",null,"Guess one word for "),n.a.createElement(f,{prompt:this.prompt}),n.a.createElement(b,{example:this.example,wordStr:this.wordStr}),n.a.createElement(p,{wordStr:this.wordStr}))}}]),t}(n.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderCard",value:function(e){var t=h[e];return n.a.createElement(g,{word:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("h1",null," Guess the words "),n.a.createElement("hr",null),n.a.createElement("div",{className:"card-grid"},this.renderCard(0),this.renderCard(1),this.renderCard(2),this.renderCard(3),this.renderCard(4),this.renderCard(5),this.renderCard(6),this.renderCard(7)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e){e.exports=JSON.parse('[{"string":"front","definition":"the side or part of an object that presents itself to view or that is normally seen or used first; the most forward part of something","example":"a page at the front of the book had been torn out"},{"string":"around","definition":"located or situated on every side","example":"the mountains towering all around"},{"string":"strange","definition":"unusual or surprising in a way that is unsettling or hard to understand","example":"children have some strange ideas"},{"string":"stripe","definition":"a long narrow band or strip, typically of the same width throughout its length, differing in color or texture from the surface on either side of it","example":"a pair of blue shorts with pink stripes"},{"string":"basket","definition":"a container used to hold or carry things, typically made from interwoven strips of cane or wire","example":"a laundry basket"},{"string":"steep","definition":"(of a slope, flight of stairs, angle, ascent, etc.) rising or falling sharply; nearly perpendicular","example":"she pushed the bike up the steep hill"},{"string":"stone","definition":"hard solid nonmetallic mineral matter of which rock is made, especially as a building material","example":"the houses are built of stone"},{"string":"support","definition":"bear all or part of the weight of; hold up","example":"the dome was supported by a hundred white columns"},{"string":"beast","definition":"an animal, especially a large or dangerous four-footed one","example":"a wild beast"},{"string":"camera","definition":"a device for recording visual images in the form of photographs, film, or video signals","example":"she faced the cameras"}]')},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a585c289.chunk.js.map