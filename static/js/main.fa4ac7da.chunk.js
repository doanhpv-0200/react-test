(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,i){},232:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i.n(n),a=i(27),r=i.n(a),l=(i(87),i(2)),s=i(15),c=i(5),d=i(3),u=i(4),h=i(6),p=(i(89),i(81)),m=(i(93),function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={allImages:[]},i.onDrop=i.onDrop.bind(Object(h.a)(Object(h.a)(i))),i.onDropRejected=i.onDropRejected.bind(Object(h.a)(Object(h.a)(i))),i}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onDrop",value:function(e){if(0!==e.length){var t=this.mergeFiles(e);this.setState({allImages:t}),this.props.onImageChange(t)}}},{key:"onDropRejected",value:function(){}},{key:"mergeFiles",value:function(e){for(var t=this.state.allImages,i=0;i<e.length;i++){var n={file:e[i],id:"".concat(i).concat(Date.now())};t.push(n)}return t}},{key:"onRemoveImage",value:function(e,t){t.stopPropagation();var i=this.state.allImages;i=i.filter(function(t){return e!==t.id}),this.setState({allImages:i}),this.props.onImageChange(i)}},{key:"renderPreview",value:function(e){var t=this;return e.map(function(e){return o.a.createElement("div",{key:e.id,className:"App-upload__preview-item"},o.a.createElement("img",{src:URL.createObjectURL(e.file),alt:"",onClick:t.onClickImage}),o.a.createElement("span",{onClick:t.onRemoveImage.bind(t,e.id)},"Remove file"))})}},{key:"onClickImage",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.state.allImages;return o.a.createElement(p.a,{className:"App-upload",multiple:this.props.multiple,onDrop:this.onDrop,onDropRejected:this.onDropRejected,accept:"image/*"},o.a.createElement("div",{className:"App-upload__placeholder"},o.a.createElement("div",{className:"image"}),o.a.createElement("span",{className:"placeholder"},this.props.placeholder)),e.length>0?o.a.createElement("div",{className:"App-upload__previews"},this.renderPreview(e)):null)}}]),t}(n.Component));m.defaultProps={placeholder:"Up h\xecnh th\xe0nh ph\u1ea9m",multiple:!1};var g=m,f=i(0),v=i.n(f),y=(i(95),o.a.forwardRef(function(e,t){return o.a.createElement("div",{className:"App-title"},o.a.createElement("input",{type:"text",ref:t,placeholder:e.placeholder}))}));y.defaultProps={placeholder:"\u0110i\u1ec1n t\xean m\xf3n"},y.propTypes={placeholder:v.a.string};var b=y,w=(i(97),i(29)),x=i.n(w),k=(i(195),i(10)),O=i.n(k),j=i(28),E=i.n(j),C={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}},S=function e(t){Object(l.a)(this,e),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=t.overlay,this.img=t.img,this.vid=t.vid,this.options=t.options,this.requestUpdate=t.onUpdate},R=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var e=i.getCurrentSize();if(i.display.innerHTML=e.join(" &times; "),e[0]>120&&e[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===i.img.style.float){var t=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-".concat(t.height+4,"px"),left:"-".concat(t.width+4,"px")})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-".concat(n.width+4,"px"),bottom:"-".concat(n.height+4,"px"),left:"auto"})}}},i.getCurrentSize=function(){return[i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},i}return Object(u.a)(t,e),t}(S),q=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onCreate=function(){i.toolbar=document.createElement("div"),Object.assign(i.toolbar.style,i.options.toolbarStyles),i.overlay.appendChild(i.toolbar),i._defineAlignments(),i._addToolbarButtons()},i.onDestroy=function(){},i.onUpdate=function(){},i._selectButton=function(e){e.style.filter="invert(20%)"},i}return Object(u.a)(t,e),t}(S),B=O.a.imports.parchment,D=new B.Attributor.Style("float","float"),A=new B.Attributor.Style("margin","margin"),z=new B.Attributor.Style("display","display"),U='\n    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n    </svg>',M='\n    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n    </svg>',L='\n    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n    </svg>',I=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o))))._defineAlignments=function(){i.alignments=[{icon:M,apply:function(){z.add(i.img,"inline"),D.add(i.img,"left"),A.add(i.img,"0 1em 1em 0")},isApplied:function(){return"left"===D.value(i.img)}},{icon:U,apply:function(){z.add(i.img,"block"),D.remove(i.img),A.add(i.img,"auto")},isApplied:function(){return"auto"===A.value(i.img)}},{icon:L,apply:function(){z.add(i.img,"inline"),D.add(i.img,"right"),A.add(i.img,"0 0 1em 1em")},isApplied:function(){return"right"===D.value(i.img)}}]},i._addToolbarButtons=function(){var e=[];i.alignments.forEach(function(t,n){var o=document.createElement("span");o.innerHTML=t.icon,e.push(o),o.addEventListener("click",function(){e.forEach(function(e){return e.style.filter=""}),t.isApplied()?(D.remove(i.img),A.remove(i.img),z.remove(i.img)):(i._selectButton(o),t.apply()),i.requestUpdate()}),Object.assign(o.style,i.options.toolbarButtonStyles),n>0&&(o.style.borderLeftWidth="0"),i.toolbar.appendChild(o)})},i}return Object(u.a)(t,e),t}(q),N=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes()},i.onDestroy=function(){i.setCursor("")},i.positionBoxes=function(){var e="".concat(-parseFloat(i.options.handleStyles.width)/2,"px"),t="".concat(-parseFloat(i.options.handleStyles.height)/2,"px");[{left:e,top:t},{right:e,top:t},{right:e,bottom:t},{left:e,bottom:t}].forEach(function(e,t){Object.assign(i.boxes[t].style,e)})},i.addBox=function(e){var t=document.createElement("div");Object.assign(t.style,i.options.handleStyles),t.style.cursor=e,t.style.width="".concat(i.options.handleStyles.width,"px"),t.style.height="".concat(i.options.handleStyles.height,"px"),t.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(t),i.boxes.push(t)},i}return Object(u.a)(t,e),t}(S),T={DisplaySize:R,Toolbar:I,Resize:function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleMousedown=function(e){i.dragBox=e.target,i.dragStartX=e.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(e){if(i.img){var t=e.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-t):i.img.width=Math.round(i.preDragWidth+t),i.requestUpdate()}},i.setCursor=function(e){[document.body,i.img].forEach(function(t){t.style.cursor=e})},i}return Object(u.a)(t,e),t}(N)},_={DisplaySize:function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.vid){var e=i.getCurrentSize();if(i.display.innerHTML=e.join(" &times; "),e[0]>120&&e[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===i.vid.style.float){var t=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-".concat(t.height+4,"px"),left:"-".concat(t.width+4,"px")})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-".concat(n.width+4,"px"),bottom:"-".concat(n.height+4,"px"),left:"auto"})}}},i.getCurrentSize=function(){return[i.vid.width,i.vid.height]},i}return Object(u.a)(t,e),t}(S),Toolbar:function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o))))._defineAlignments=function(){i.alignments=[{icon:M,apply:function(){z.add(i.vid,"inline"),D.add(i.vid,"left"),A.add(i.vid,"0 1em 1em 0")},isApplied:function(){return"left"===D.value(i.vid)}},{icon:U,apply:function(){z.add(i.vid,"block"),D.remove(i.vid),A.add(i.vid,"auto")},isApplied:function(){return"auto"===A.value(i.vid)}},{icon:L,apply:function(){z.add(i.vid,"inline"),D.add(i.vid,"right"),A.add(i.vid,"0 0 1em 1em")},isApplied:function(){return"right"===D.value(i.vid)}}]},i._addToolbarButtons=function(){var e=[];i.alignments.forEach(function(t,n){var o=document.createElement("span");o.innerHTML=t.icon,e.push(o),o.addEventListener("click",function(){e.forEach(function(e){return e.style.filter=""}),t.isApplied()?(D.remove(i.vid),A.remove(i.vid),z.remove(i.vid)):(i._selectButton(o),t.apply()),i.requestUpdate()}),Object.assign(o.style,i.options.toolbarButtonStyles),n>0&&(o.style.borderLeftWidth="0"),i.toolbar.appendChild(o)})},i}return Object(u.a)(t,e),t}(q),Resize:function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(e){if(i.vid){var t=e.clientX-i.dragStartX,n=e.clientY-i.dragStartY;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?(i.vid.width=Math.round(i.preDragWidth-t),i.vid.height=Math.round(i.preDragHeight-n)):(i.vid.width=Math.round(i.preDragWidth+t),i.vid.height=Math.round(i.preDragHeight+n)),i.requestUpdate()}},i.handleMousedown=function(e){i.dragBox=e.target,i.dragStartX=e.clientX,i.dragStartY=e.clientY,i.preDragWidth=i.vid.getBoundingClientRect().width,i.preDragHeight=i.vid.getBoundingClientRect().height,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.setCursor=function(e){[document.body,i.vid].forEach(function(t){t.style.cursor=e})},i}return Object(u.a)(t,e),t}(N)},W=function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(l.a)(this,e),this.onUpdate=function(){i.repositionElements(),i.modules.forEach(function(e){e.onUpdate()})},this.removeModules=function(){i.modules.forEach(function(e){e.onDestroy()}),i.modules=[]},this.handleClick=function(e){if(e.target===i.quill.root)for(var t=i.quill.root.querySelectorAll("iframe"),n=0;n<t.length;++n){var o=t[n].getBoundingClientRect();if(!(e.clientX<o.x)&&(!(e.clientX>o.right)&&!(e.clientY<o.y)&&!(e.clientY>o.bottom))){if(t[n]&&t[n].tagName&&"IFRAME"===t[n].tagName.toUpperCase()){if(i.vid===t[n])return;i.vid&&i.hide(),i.show(t[n])}else i.vid&&i.hide();return}}i.vid&&i.hide()},this.show=function(e){i.vid=e,i.showOverlay(),i.initializeModules()},this.showOverlay=function(){i.overlay&&i.hideOverlay(),i.quill.setSelection(null),i.setUserSelect("none"),document.addEventListener("keyup",i.checkVideo,!0),i.quill.root.addEventListener("input",i.checkVideo,!0),i.overlay=document.createElement("div"),Object.assign(i.overlay.style,i.options.overlayStyles),i.quill.root.parentNode.appendChild(i.overlay),i.repositionElements()},this.hideOverlay=function(){i.overlay&&(i.quill.root.parentNode.removeChild(i.overlay),i.overlay=void 0,document.removeEventListener("keyup",i.checkVideo),i.quill.root.removeEventListener("input",i.checkVideo),i.setUserSelect(""))},this.repositionElements=function(){if(i.overlay&&i.vid){var e=i.quill.root.parentNode,t=i.vid.getBoundingClientRect(),n=e.getBoundingClientRect();Object.assign(i.overlay.style,{left:"".concat(t.left-n.left-1+e.scrollLeft,"px"),top:"".concat(t.top-n.top+e.scrollTop,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")})}},this.hide=function(){i.hideOverlay(),i.removeModules(),i.vid=void 0},this.setUserSelect=function(e){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(t){i.quill.root.style[t]=e,document.documentElement.style[t]=e})},this.checkVideo=function(e){i.vid&&(46!==e.keyCode&&8!==e.keyCode||O.a.find(i.vid).deleteAt(0),i.hide())},this.quill=t;var o=!1;n.modules&&(o=n.modules.slice()),this.options=E()({},n,C),!1!==o&&(this.options.modules=o),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",function(e){i.handleClick(e)},!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]}return Object(s.a)(e,[{key:"initializeModules",value:function(){var e=this;this.removeModules(),this.modules=this.moduleClasses.map(function(t){return new(_[t]||t)(e)}),this.modules.forEach(function(e){e.onCreate()}),this.onUpdate()}}]),e}();w.Quill.register("modules/imageResize",function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(l.a)(this,e),this.initializeModules=function(){i.removeModules(),i.modules=i.moduleClasses.map(function(e){return new(T[e]||e)(i)}),i.modules.forEach(function(e){e.onCreate()}),i.onUpdate()},this.onUpdate=function(){i.repositionElements(),i.modules.forEach(function(e){e.onUpdate()})},this.removeModules=function(){i.modules.forEach(function(e){e.onDestroy()}),i.modules=[]},this.handleClick=function(e){if(e.target&&e.target.tagName&&"IMG"===e.target.tagName.toUpperCase()){if(i.img===e.target)return;i.img&&i.hide(),i.show(e.target)}else i.img&&i.hide()},this.show=function(e){i.img=e,i.showOverlay(),i.initializeModules()},this.showOverlay=function(){i.overlay&&i.hideOverlay(),i.quill.setSelection(null),i.setUserSelect("none"),document.addEventListener("keyup",i.checkImage,!0),i.quill.root.addEventListener("input",i.checkImage,!0),i.overlay=document.createElement("div"),Object.assign(i.overlay.style,i.options.overlayStyles),i.quill.root.parentNode.appendChild(i.overlay),i.repositionElements()},this.hideOverlay=function(){i.overlay&&(i.quill.root.parentNode.removeChild(i.overlay),i.overlay=void 0,document.removeEventListener("keyup",i.checkImage),i.quill.root.removeEventListener("input",i.checkImage),i.setUserSelect(""))},this.repositionElements=function(){if(i.overlay&&i.img){var e=i.quill.root.parentNode,t=i.img.getBoundingClientRect(),n=e.getBoundingClientRect();Object.assign(i.overlay.style,{left:"".concat(t.left-n.left-1+e.scrollLeft,"px"),top:"".concat(t.top-n.top+e.scrollTop,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")})}},this.hide=function(){i.hideOverlay(),i.removeModules(),i.img=void 0},this.setUserSelect=function(e){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(t){i.quill.root.style[t]=e,document.documentElement.style[t]=e})},this.checkImage=function(e){i.img&&(46!==e.keyCode&&8!==e.keyCode||O.a.find(i.img).deleteAt(0),i.hide())},this.quill=t;var o=!1;n.modules&&(o=n.modules.slice()),this.options=E()({},n,C),!1!==o&&(this.options.modules=o),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]}),w.Quill.register("modules/videoResize",W);var H=o.a.forwardRef(function(e,t){return o.a.createElement(x.a,Object.assign({},e,{ref:t,className:"App-description",theme:H.theme,modules:H.modules,formats:H.formats}))});H.defaultProps={placeholder:"Enter news content here..."},H.propTypes={placeholder:v.a.string,innerRef:v.a.oneOfType([v.a.func,v.a.shape({current:v.a.instanceOf(Element)})])},H.theme="snow",H.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],imageResize:{modules:["Resize","DisplaySize","Toolbar"]},videoResize:{modules:["Resize","DisplaySize","Toolbar"]}},H.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"];var P=H,X=(i(219),function(e){var t=e.title,i=e.color,n=e.onClick;return o.a.createElement("button",{className:"btn btn-".concat(i),onClick:n,type:"button"},t)});X.defaultProps={title:"Test",color:"Success"};var Y=function(e){return o.a.createElement(X,Object.assign({},e,{color:"success"}))},F=i(30),V=(i(230),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={photos:[]},e.titleRef=o.a.createRef(),e.descriptionRef=o.a.createRef(),e.onSubmit=e.onSubmit.bind(Object(h.a)(Object(h.a)(e))),e.onImageChange=e.onImageChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onImageChange",value:function(e){this.setState({photos:e})}},{key:"onSubmit",value:function(){this.validateData()}},{key:"validateData",value:function(){var e=this.titleRef.current.value,t=this.descriptionRef.current.state.value,i=this.state.photos.length,n=!0,o=!0;return i||this.showError("You must upload at least 1 photo"),null!=e&&""!==e.trim()||(n=!1,this.showError("Title can not empty")),""===(t=t||"").replace(/<\/?(?!(img)\b)\w+[^>]*>/gm,"")&&(o=!1,this.showError("Description can not empty")),i&&n&&o}},{key:"showError",value:function(e){F.toast.error(e,{position:F.toast.POSITION.TOP_RIGHT})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F.ToastContainer,{autoClose:2e3}),o.a.createElement(g,{onImageChange:this.onImageChange}),o.a.createElement(b,{ref:this.titleRef}),o.a.createElement(P,{ref:this.descriptionRef}),o.a.createElement("div",{className:"App-submit"},o.a.createElement(Y,{title:"Submit",onClick:this.onSubmit})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,i){e.exports=i(232)},87:function(e,t,i){},89:function(e,t,i){},93:function(e,t,i){},95:function(e,t,i){},97:function(e,t,i){}},[[82,2,1]]]);
//# sourceMappingURL=main.fa4ac7da.chunk.js.map