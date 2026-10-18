import{a as xt}from"./chunk-BSVWT34Q.js";import{$ as C,A as xe,Aa as z,B as be,Ba as mt,C as Xe,Ca as _,D as te,Da as f,E as T,Ea as G,F as Je,Fa as ht,G as m,H as F,J as L,Ja as S,K as ye,L as j,M as et,Ma as ft,N as M,Na as se,O as B,Oa as N,P as tt,Pa as gt,Q as nt,Qa as Ae,R as it,S as ot,Sa as ae,T as d,Ta as de,U as ve,Ua as ce,V as rt,Va as _t,W as st,Y as ne,Z as at,_ as v,a as J,aa as y,ba as K,c as k,ca as I,d as Be,da as Ie,e as p,f as Ke,fa as dt,g as Ve,ga as E,ha as ct,i as ze,ia as lt,j as Ge,ja as h,ka as l,l as We,la as c,m as A,ma as we,n as Qe,na as ie,o as qe,oa as Me,p as $e,pa as pt,q as Ze,qa as oe,r as ge,ra as re,s as ee,sa as Ce,t as Ye,ta as O,ua as g,v as u,va as Ee,w,wa as P,x as b,xa as De,y as s,ya as ut,z as _e,za as V}from"./chunk-VZSFBBH7.js";var Te={},D=class n{_appId=s(tt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Te.hasOwnProperty(i)||(Te[i]=0),`${i}${e?n._infix+"-":""}${Te[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};var W=(()=>{class n{_listeners=[];notify(e,t){for(let o of this._listeners)o(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oe=new b("CdkAccordion"),bt=(()=>{class n{_stateChanges=new p;_openCloseAllActions=new p;id=s(D).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",N]},exportAs:["cdkAccordion"],features:[S([{provide:Oe,useExisting:n}]),j]})}return n})(),yt=(()=>{class n{accordion=s(Oe,{optional:!0,skipSelf:!0});_changeDetectorRef=s(se);_expansionDispatcher=s(W);_openCloseAllSubscription=k.EMPTY;closed=new m;opened=new m;destroyed=new m;expandedChange=new m;id=s(D).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",N],disabled:[2,"disabled","disabled",N]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[S([{provide:Oe,useValue:void 0}])]})}return n})(),vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=w({})}return n})();var Q=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Pe=class extends Q{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},q=class extends Q{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Se=class extends Q{element;constructor(i){super(),this.element=i instanceof M?i.nativeElement:i}},Ne=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Pe)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof q)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Se)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var It=(()=>{class n extends Ne{_moduleRef=s(at,{optional:!0});_document=s(T);_viewContainerRef=s(ne);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new m;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[K]})}return n})(),wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=w({})}return n})();function Mt(n){return n.buttons===0||n.detail===0}function Ct(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Re;function Vt(){if(Re==null){let n=typeof document<"u"?document.head:null;Re=!!(n&&(n.createShadowRoot||n.attachShadow))}return Re}function Et(n){if(Vt()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function U(n){return n.composedPath?n.composedPath()[0]:n.target}var ke;try{ke=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ke=!1}var $=(()=>{class n{_platformId=s(nt);isBrowser=this._platformId?_t(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ke)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Z;function zt(){if(Z==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Z=!0}))}finally{Z=Z||!1}return Z}function Dt(n){return zt()?n:!!n.capture}function le(n){return n instanceof M?n.nativeElement:n}var At=new b("cdk-input-modality-detector-options"),Tt={ignoreKeys:[18,17,224,91,16]},Ot=650,Fe={passive:!0,capture:!0},Pt=(()=>{class n{_platform=s($);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ke(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=U(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ot||(this._modality.next(Mt(e)?"keyboard":"mouse"),this._mostRecentTarget=U(e))};_onTouchstart=e=>{if(Ct(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=U(e)};constructor(){let e=s(F),t=s(T),o=s(At,{optional:!0});if(this._options=J(J({},Tt),o),this.modalityDetected=this._modality.pipe(Ze(1)),this.modalityChanged=this.modalityDetected.pipe($e()),this._platform.isBrowser){let r=s(rt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Fe),r.listen(t,"mousedown",this._onMousedown,Fe),r.listen(t,"touchstart",this._onTouchstart,Fe)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Y=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Y||{}),St=new b("cdk-focus-monitor-default-options"),pe=Dt({passive:!0,capture:!0}),Le=(()=>{class n{_ngZone=s(F);_platform=s($);_inputModalityDetector=s(Pt);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(T);_stopInputModalityDetector=new p;constructor(){let e=s(St,{optional:!0});this._detectionMode=e?.detectionMode||Y.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=U(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=le(e);if(!this._platform.isBrowser||o.nodeType!==1)return ze();let r=Et(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let H={checkChildren:t,subject:new p,rootNode:r};return this._elementInfo.set(o,H),this._registerGlobalListeners(H),H.subject}stopMonitoring(e){let t=le(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=le(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([H,Kt])=>this._originChanged(H,t,Kt)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Y.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Y.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Ot:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=U(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,pe),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,pe)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ee(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,pe),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,pe),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ue=new WeakMap,je=(()=>{class n{_appRef;_injector=s(te);_environmentInjector=s(_e);load(e){let t=this._appRef=this._appRef||this._injector.get(dt),o=ue.get(t);o||(o={loaders:new Set,refs:[]},ue.set(t,o),t.onDestroy(()=>{ue.get(t)?.refs.forEach(r=>r.destroy()),ue.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(Ae(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nt=new Set,R,Ue=(()=>{class n{_platform=s($);_nonce=s(ot,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Wt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Gt(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Gt(n,i){if(!Nt.has(n))try{R||(R=document.createElement("style"),i&&R.setAttribute("nonce",i),R.setAttribute("type","text/css"),document.head.appendChild(R)),R.sheet&&(R.sheet.insertRule(`@media ${n} {body{ }}`,0),Nt.add(n))}catch(e){console.error(e)}}function Wt(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Qt=200,me=class{_letterKeyStream=new p;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new p;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Qt;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ye(e=>this._pressedLetters.push(e)),Qe(i),A(()=>this._pressedLetters.length>0),Ge(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function he(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var fe=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=k.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof B?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ie(i)&&(this._effectRef=ye(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new p;change=new p;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new me(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||he(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ie(this._items)?this._items():this._items instanceof B?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var X=class extends fe{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var qt=new b("MATERIAL_ANIMATIONS"),Rt=null;function $t(){return s(qt,{optional:!0})?.animationsDisabled||s(it,{optional:!0})==="NoopAnimations"?"di-disabled":(Rt??=s(Ue).matchMedia("(prefers-reduced-motion)").matches,Rt?"reduced-motion":"enabled")}function kt(){return $t()!=="enabled"}var Ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=w({})}return n})();var Xt=["body"],Jt=["bodyWrapper"],en=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],tn=["mat-expansion-panel-header","*","mat-action-row"];function nn(n,i){}var on=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],rn=["mat-panel-title","mat-panel-description","*"];function sn(n,i){n&1&&(ie(0,"span",1),Xe(),ie(1,"svg",2),pt(2,"path",3),Me()())}var He=new b("MAT_ACCORDION"),jt=new b("MAT_EXPANSION_PANEL"),an=(()=>{class n{_template=s(ve);_expansionPanel=s(jt,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Ut=new b("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),dn=(()=>{class n extends yt{_viewContainerRef=s(ne);_animationsDisabled=kt();_document=s(T);_ngZone=s(F);_elementRef=s(M);_renderer=s(st);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new m;afterCollapse=new m;_inputChanges=new p;accordion=s(He,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=s(D).getId("mat-expansion-panel-header-");constructor(){super();let e=s(Ut,{optional:!0});this._expansionDispatcher=s(W),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ge(null),A(()=>this.expanded&&!this._portal),qe(1)).subscribe(()=>{this._portal=new q(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,o,r){if(t&1&&De(r,an,5),t&2){let a;V(a=z())&&(o._lazyContent=a.first)}},viewQuery:function(t,o){if(t&1&&ut(Xt,5)(Jt,5),t&2){let r;V(r=z())&&(o._body=r.first),V(r=z())&&(o._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,o){t&2&&_("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[S([{provide:He,useValue:void 0},{provide:jt,useExisting:n}]),K,j],ngContentSelectors:tn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,o){t&1&&(Ee(en),P(0),l(1,"div",2,0)(3,"div",3,1)(5,"div",4),P(6,1),I(7,nn,0,0,"ng-template",5),c(),P(8,2),c()()),t&2&&(d(),E("inert",o.expanded?null:""),d(2),h("id",o.id),E("aria-labelledby",o._headerId),d(4),h("cdkPortalOutlet",o._portal))},dependencies:[It],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n{panel=s(dn,{host:!0});_element=s(M);_focusMonitor=s(Le);_changeDetectorRef=s(se);_parentChangeSubscription=k.EMPTY;constructor(){s(je).load(Ft);let e=this.panel,t=s(Ut,{optional:!0}),o=s(new ft("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(A(a=>!!(a.hideToggle||a.togglePosition))):Ve;this.tabIndex=parseInt(o||"")||0,this._parentChangeSubscription=We(e.opened,e.closed,r,e._inputChanges.pipe(A(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(A(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:he(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,o){t&1&&O("click",function(){return o._toggle()})("keydown",function(a){return o._keydown(a)}),t&2&&(E("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),mt("height",o._getHeaderHeight()),_("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:gt(e)]},ngContentSelectors:rn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,o){t&1&&(Ee(on),ie(0,"span",0),P(1),P(2,1),P(3,2),Me(),ct(4,sn,3,0,"span",1)),t&2&&(_("mat-content-hide-toggle",!o._showToggle()),d(4),lt(o._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ao=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),To=(()=>{class n extends bt{_keyManager;_ownHeaders=new B;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(ge(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new X(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=et(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,o,r){if(t&1&&De(r,cn,5),t&2){let a;V(a=z())&&(o._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,o){t&2&&_("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[S([{provide:He,useExisting:n}]),K]})}return n})(),Oo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=w({imports:[vt,wt,Lt]})}return n})();function Bo(n){n||(n=s(Je));let i=new Be(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(ee(i))}function un(n,i){n&1&&(l(0,"span"),f(1," Copy "),c())}function mn(n,i){n&1&&(l(0,"span"),f(1," \u2713 copied to clipboard "),c())}function hn(n,i){n&1&&we(0,"br")}function fn(n,i){if(n&1&&(oe(0),l(1,"span"),f(2),c(),I(3,hn,1,0,"br",5),re()),n&2){let e=i.$implicit,t=i.last,o=g();d(),_("terminal-comment",o.isComment(e))("terminal-command",!o.isComment(e)),d(),G(e),d(),h("ngIf",!t)}}var Ht=class n{context=s(xt);command="";copied=!1;get formattedCommand(){return this.context.replacePlaceholders(this.command).trim().split(`
`).map(e=>e.replace(/\r$/,""))}isComment(i){return i.trimStart().startsWith("#")}async copyCommand(){try{let i=this.context.replacePlaceholders(this.command);await navigator.clipboard.writeText(i),this.copied=!0,setTimeout(()=>{this.copied=!1},1800)}catch(i){console.error("Failed to copy command:",i)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-terminal"]],inputs:{command:"command"},decls:16,vars:5,consts:[[1,"terminal"],[1,"terminal-header"],[1,"terminal-dots"],[1,"terminal-title"],[1,"copy-button",3,"click"],[4,"ngIf"],[1,"terminal-body"],[1,"prompt"],[4,"ngFor","ngForOf"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),we(3,"span")(4,"span")(5,"span"),c(),l(6,"span",3),f(7," get.sh "),c(),l(8,"button",4),O("click",function(){return t.copyCommand()}),I(9,un,2,0,"span",5)(10,mn,2,0,"span",5),c()(),l(11,"div",6)(12,"span",7),f(13,"$"),c(),l(14,"code"),I(15,fn,4,6,"ng-container",8),c()()()),e&2&&(d(8),_("copied",t.copied),d(),h("ngIf",!t.copied),d(),h("ngIf",t.copied),d(5),h("ngForOf",t.formattedCommand))},dependencies:[ce,ae,de],styles:[".terminal[_ngcontent-%COMP%]{background:#0b1316;border:1px solid #29383d;border-radius:8px;overflow:hidden;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.terminal-header[_ngcontent-%COMP%]{height:38px;display:flex;align-items:center;padding:0 12px;background:#121c20;border-bottom:1px solid #29383d;position:relative}.terminal-dots[_ngcontent-%COMP%]{display:flex;gap:6px}.terminal-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#65767b}.terminal-title[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);color:#a6b4b9;font-size:11px;letter-spacing:.5px}.copy-button[_ngcontent-%COMP%]{margin-left:auto;background:transparent;border:1px solid transparent;color:#b0bdc2;font-family:inherit;font-size:11px;padding:4px 8px;border-radius:5px;cursor:pointer;transition:color .2s ease,background .2s ease,border-color .2s ease}.copy-button[_ngcontent-%COMP%]:hover{color:#78d6cd;background:#182529;border-color:#365157}.terminal-body[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:10px;padding:14px 16px;overflow-x:auto;color:#78d6cd;font-size:13px;line-height:1.6;white-space:pre-wrap}.prompt[_ngcontent-%COMP%]{flex-shrink:0;color:#22c55e;font-weight:700;-webkit-user-select:none;user-select:none}.terminal-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#e2e8f0;font-family:inherit;white-space:pre-wrap}.copy-button[_ngcontent-%COMP%]{margin-left:auto;background:transparent;border:1px solid transparent;color:#64748b;font-family:inherit;font-size:11px;padding:4px 8px;border-radius:5px;cursor:pointer;transition:color .2s ease,background .2s ease,border-color .2s ease}.copy-button[_ngcontent-%COMP%]:hover{color:#38bdf8;background:#0f172a;border-color:#1e3a5f}.copy-button.copied[_ngcontent-%COMP%]{color:#22c55e;background:#22c55e0d;border-color:#22c55e33}.terminal-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .terminal-comment[_ngcontent-%COMP%]{color:#aebdc2!important;font-style:normal;opacity:1}.terminal-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .terminal-command[_ngcontent-%COMP%]{color:#89e1d8!important;font-weight:600}"]})};function gn(n,i){if(n&1){let e=Ce();l(0,"button",5),O("click",function(){xe(e);let o=g().$implicit,r=g();return be(r.toggleGroup(o.group))}),l(1,"span"),f(2),c(),l(3,"span",6),f(4),c(),l(5,"span",7),f(6,"\u2304"),c()()}if(n&2){let e=g().$implicit,t=g();E("aria-expanded",!t.isGroupCollapsed(e.group)),d(2),G(e.group),d(2),G(t.countGroupItems(e.group)),d(),_("section-index__chevron--collapsed",t.isGroupCollapsed(e.group))}}function _n(n,i){if(n&1){let e=Ce();l(0,"button",8),O("click",function(){xe(e);let o=g().$implicit,r=g();return be(r.sectionChange.emit(o.id))}),l(1,"span",9),f(2,"\u203A"),c(),f(3),c()}if(n&2){let e=g().$implicit,t=g();_("active",e.id===t.activeId)("disabled",e.disabled)("section-index__item--nested",!!e.group),h("disabled",e.disabled),E("aria-current",e.id===t.activeId?"page":null),d(3),ht(" ",e.label," ")}}function xn(n,i){if(n&1&&(oe(0),I(1,gn,7,5,"button",3)(2,_n,4,9,"button",4),re()),n&2){let e=i.$implicit,t=i.index,o=g();d(),h("ngIf",e.group&&(t===0||o.items[t-1].group!==e.group)),d(),h("ngIf",!e.group||!o.isGroupCollapsed(e.group))}}var Bt=class n{items=[];activeId="";sectionChange=new m;collapsedGroups=new Set;initialized=!1;get hasGroups(){return this.items.some(i=>!!i.group)}ngOnChanges(){let i=this.items.find(e=>e.id===this.activeId)?.group;this.initialized||(new Set(this.items.map(t=>t.group).filter(t=>!!t)).forEach(t=>{t!==i&&this.collapsedGroups.add(t)}),this.initialized=!0),i&&this.collapsedGroups.delete(i)}isGroupCollapsed(i){return this.collapsedGroups.has(i)}toggleGroup(i){this.isGroupCollapsed(i)?this.collapsedGroups.delete(i):this.collapsedGroups.add(i)}countGroupItems(i){return this.items.filter(e=>e.group===i).length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-section-index"]],inputs:{items:"items",activeId:"activeId"},outputs:{sectionChange:"sectionChange"},features:[j],decls:4,vars:3,consts:[["aria-label","Section index",1,"section-index"],[1,"section-index__label"],[4,"ngFor","ngForOf"],["class","section-index__group","type","button",3,"click",4,"ngIf"],["type","button",3,"active","disabled","section-index__item--nested","click",4,"ngIf"],["type","button",1,"section-index__group",3,"click"],[1,"section-index__count"],["aria-hidden","true",1,"section-index__chevron"],["type","button",3,"click","disabled"],["aria-hidden","true",1,"section-index__marker"]],template:function(e,t){e&1&&(l(0,"nav",0)(1,"span",1),f(2,"Browse"),c(),I(3,xn,3,2,"ng-container",2),c()),e&2&&(_("section-index--grouped",t.hasGroups),d(3),h("ngForOf",t.items))},dependencies:[ce,ae,de],styles:["[_nghost-%COMP%]{display:block;min-width:0}.section-index[_ngcontent-%COMP%]{position:sticky;top:1rem;display:flex;flex-direction:column;gap:.25rem;max-height:calc(100vh - 2rem);overflow-y:auto}.section-index__label[_ngcontent-%COMP%]{padding:.25rem .65rem .55rem;color:#aebdc2;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.section-index__group[_ngcontent-%COMP%]{width:100%;min-height:2.65rem;display:flex;align-items:center;gap:.55rem;margin-top:.35rem;padding:.55rem .65rem;color:#e0e9eb;text-align:left;background:#121f23;border:1px solid #34474d;border-radius:7px;font:inherit;font-size:.88rem;font-weight:700;letter-spacing:.02em;cursor:pointer}.section-index__group[_ngcontent-%COMP%]:hover, .section-index__group[aria-expanded=true][_ngcontent-%COMP%]{color:#eff8f7;background:#17302f;border-color:#477b7d}.section-index__count[_ngcontent-%COMP%]{min-width:1.35rem;margin-left:auto;padding:.1rem .3rem;color:#a9c9c7;text-align:center;background:#0c171a;border-radius:4px;font-size:.67rem;font-weight:600}.section-index__chevron[_ngcontent-%COMP%]{color:#78d6cd;font-size:1rem;transition:transform .16s ease}.section-index__chevron--collapsed[_ngcontent-%COMP%]{transform:rotate(-90deg)}.section-index__item--nested[_ngcontent-%COMP%]{margin-left:.5rem}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:2.45rem;display:flex;align-items:center;gap:.55rem;padding:.55rem .65rem;color:#c3cdd1;text-align:left;background:transparent;border:1px solid transparent;border-radius:6px;font:inherit;font-size:.84rem;line-height:1.3;cursor:pointer}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#f1f6f7;background:#121f23;border-color:#293d42}.section-index[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#e7f5f3;background:#15302e;border-color:#416d69}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#82949a;cursor:not-allowed}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   .section-index__marker[_ngcontent-%COMP%]{color:#718287}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{outline:2px solid #78d6cd;outline-offset:2px}.section-index__marker[_ngcontent-%COMP%]{flex:0 0 auto;color:#78d6cd}@media(max-width:900px){.section-index[_ngcontent-%COMP%]{position:static;flex-direction:row;max-height:none;overflow-x:auto;overflow-y:hidden;padding:.15rem 0 .5rem;border-bottom:1px solid #29383d}.section-index__label[_ngcontent-%COMP%]{display:none}.section-index[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto;min-height:2.2rem;white-space:nowrap}.section-index--grouped[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;max-height:42vh;overflow-x:hidden;overflow-y:auto}.section-index--grouped[_ngcontent-%COMP%]   .section-index__group[_ngcontent-%COMP%], .section-index--grouped[_ngcontent-%COMP%]   .section-index__item--nested[_ngcontent-%COMP%]{flex:0 0 auto;white-space:normal}}"]})};export{dn as a,cn as b,Ao as c,To as d,Oo as e,Bo as f,Ht as g,Bt as h};
