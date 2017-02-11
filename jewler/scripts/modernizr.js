/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-ambientlight-animation-apng-appearance-applicationcache-atobbtoa-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-bdi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cryptography-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6collections-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-forcetouch-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hashchange-hidden-hiddenscroll-history-hsla-htmlimports-ie8compat-imgcrossorigin-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-ligatures-localizednumber-localstorage-lowbandwidth-lowbattery-matchmedia-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-scrollsnappoints-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-userdata-userselect-vibrate-video-videoautoplay-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xdomainrequest-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,r){function n(e,t){return e-1===t||e===t||e+1===t}var i=createElement("input"),o="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),d={};Modernizr.input=function(t){for(var r=0,n=t.length;n>r;r++)d[t[r]]=!!(t[r]in i);return d.list&&(d.list=!(!createElement("datalist")||!e.HTMLDataListElement)),d}(o),Modernizr.addTest("datalistelem",Modernizr.input.list);var s="search tel url email datetime date month week time datetime-local number range color".split(" "),a={};Modernizr.inputtypes=function(e){for(var n,o,d,s=e.length,l="1)",c=0;s>c;c++)i.setAttribute("type",n=e[c]),d="text"!==i.type&&"style"in i,d&&(i.value=l,i.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&i.style.WebkitAppearance!==r?(docElement.appendChild(i),o=t.defaultView,d=o.getComputedStyle&&"textfield"!==o.getComputedStyle(i,null).WebkitAppearance&&0!==i.offsetHeight,docElement.removeChild(i)):/^(search|tel)$/.test(n)||(d=/^(url|email)$/.test(n)?i.checkValidity&&i.checkValidity()===!1:i.value!=l)),a[e[c]]=!!d;return a}(s),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,r=createElement("div"),n=getBody(),i=function(){return docElement.insertBefore(n,docElement.firstElementChild||docElement.firstChild)}();r.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=r.childNodes[0];i.appendChild(r),o.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(d){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),i.removeChild(r),n.fake&&i.parentNode.removeChild(i),e});var l={elem:createElement("modernizr")};Modernizr._q.push(function(){delete l.elem}),Modernizr.addTest("csschunit",function(){var e,t=l.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(r){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=l.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(r){e=!1}return e});var c=ModernizrProto.testProp=function(e,t,n){return testProps([e],r,t,n)};Modernizr.addTest("textshadow",c("textShadow","1px 1px")),testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var r=t.childNodes[2],i=t.childNodes[1],o=t.childNodes[0],d=parseInt((i.offsetWidth-i.clientWidth)/2,10),s=o.clientWidth/100,a=o.clientHeight/100,l=parseInt(50*Math.max(s,a),10),c=parseInt((e.getComputedStyle?getComputedStyle(r,null):r.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",n(l,c)||n(l,c-d))},3),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var r=t.childNodes[2],i=t.childNodes[1],o=t.childNodes[0],d=parseInt((i.offsetWidth-i.clientWidth)/2,10),s=o.clientWidth/100,a=o.clientHeight/100,l=parseInt(50*Math.min(s,a),10),c=parseInt((e.getComputedStyle?getComputedStyle(r,null):r.currentStyle).width,10);Modernizr.addTest("cssvminunit",n(l,c)||n(l,c-d))},3),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)});var p=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(r){return!1}return"response"in t&&t.responseType==e};Modernizr.addTest("xhrresponsetypearraybuffer",p("arraybuffer")),Modernizr.addTest("xhrresponsetypeblob",p("blob")),Modernizr.addTest("xhrresponsetypedocument",p("document")),Modernizr.addTest("xhrresponsetypejson",p("json")),Modernizr.addTest("xhrresponsetypetext",p("text"));var u={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(u.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(u.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(u.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))})}(window,document);