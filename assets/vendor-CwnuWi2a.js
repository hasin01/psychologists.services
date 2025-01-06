var za={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},_u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,y=(s&3)<<4|c>>4;let A=(c&15)<<2|d>>6,P=d&63;l||(P=64,a||(A=64)),r.push(t[p],t[y],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||y==null)throw new Ud;const A=s<<2|c>>4;if(r.push(A),d!==64){const P=c<<4&240|d>>2;if(r.push(P),y!==64){const D=d<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bd=function(n){const e=gu(n);return _u.encodeByteArray(e,!0)},Yr=function(n){return Bd(n).replace(/\./g,"")},yu=function(n){try{return _u.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=()=>qd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof za>"u")return;const n=za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yu(n[1]);return e&&JSON.parse(e)},mi=()=>{try{return jd()||$d()||zd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vu=n=>{var e,t;return(t=(e=mi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gd=n=>{const e=vu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Eu=()=>{var n;return(n=mi())===null||n===void 0?void 0:n.config},Iu=n=>{var e;return(e=mi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yr(JSON.stringify(t)),Yr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Qd(){var n;const e=(n=mi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xd(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zd(){return!Qd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Au(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function ef(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="FirebaseError";class Me extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tf,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?nf(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Me(i,c,r)}}function nf(n,e){return n.replace(rf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rf=/\{\$([^}]+)}/g;function sf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ga(s)&&Ga(a)){if(!Jr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ga(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Un(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function of(n,e){const t=new af(n,e);return t.subscribe.bind(t)}class af{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=as),i.error===void 0&&(i.error=as),i.complete===void 0&&(i.complete=as);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function as(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=1e3,lf=2,hf=4*60*60*1e3,df=.5;function Wa(n,e=uf,t=lf){const r=e*Math.pow(t,n),i=Math.round(df*r*(Math.random()-.5)*2);return Math.min(hf,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}class Ne{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mf(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pf(n){return n===Ct?void 0:n}function mf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ff(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const _f={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},yf=B.INFO,vf={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ef=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=Ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const If=(n,e)=>e.some(t=>n instanceof t);let Ha,Ka;function Tf(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wf(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,Is=new WeakMap,Su=new WeakMap,cs=new WeakMap,Gs=new WeakMap;function Af(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(mt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ru.set(t,n)}).catch(()=>{}),Gs.set(e,n),e}function Rf(n){if(Is.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,e)}let Ts={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Is.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Su.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sf(n){Ts=n(Ts)}function Pf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(us(this),e,...t);return Su.set(r,e.sort?e.sort():[e]),mt(r)}:wf().includes(n)?function(...e){return n.apply(us(this),e),mt(Ru.get(this))}:function(...e){return mt(n.apply(us(this),e))}}function bf(n){return typeof n=="function"?Pf(n):(n instanceof IDBTransaction&&Rf(n),If(n,Tf())?new Proxy(n,Ts):n)}function mt(n){if(n instanceof IDBRequest)return Af(n);if(cs.has(n))return cs.get(n);const e=bf(n);return e!==n&&(cs.set(n,e),Gs.set(e,n)),e}const us=n=>Gs.get(n);function Pu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=mt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(mt(a.result),l.oldVersion,l.newVersion,mt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Cf=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],ls=new Map;function Qa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=kf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cf.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return ls.set(e,s),s}Sf(n=>({...n,get:(e,t,r)=>Qa(e,t)||n.get(e,t,r),has:(e,t)=>!!Qa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ws="@firebase/app",Ya="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new gi("@firebase/app"),Nf="@firebase/app-compat",Of="@firebase/analytics-compat",Lf="@firebase/analytics",Mf="@firebase/app-check-compat",xf="@firebase/app-check",Ff="@firebase/auth",Uf="@firebase/auth-compat",Bf="@firebase/database",qf="@firebase/data-connect",jf="@firebase/database-compat",$f="@firebase/functions",zf="@firebase/functions-compat",Gf="@firebase/installations",Wf="@firebase/installations-compat",Hf="@firebase/messaging",Kf="@firebase/messaging-compat",Qf="@firebase/performance",Yf="@firebase/performance-compat",Jf="@firebase/remote-config",Xf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/vertexai",rp="@firebase/firestore-compat",ip="firebase",sp="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]",op={[ws]:"fire-core",[Nf]:"fire-core-compat",[Lf]:"fire-analytics",[Of]:"fire-analytics-compat",[xf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Ff]:"fire-auth",[Uf]:"fire-auth-compat",[Bf]:"fire-rtdb",[qf]:"fire-data-connect",[jf]:"fire-rtdb-compat",[$f]:"fire-fn",[zf]:"fire-fn-compat",[Gf]:"fire-iid",[Wf]:"fire-iid-compat",[Hf]:"fire-fcm",[Kf]:"fire-fcm-compat",[Qf]:"fire-perf",[Yf]:"fire-perf-compat",[Jf]:"fire-rc",[Xf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[rp]:"fire-fst-compat",[np]:"fire-vertex","fire-js":"fire-js",[ip]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,ap=new Map,Rs=new Map;function Ja(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $e(n){const e=n.name;if(Rs.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,n);for(const t of Xr.values())Ja(t,n);for(const t of ap.values())Ja(t,n);return!0}function sr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new Ft("app","Firebase",cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=sp;function lp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Eu()),!t)throw gt.create("no-options");const s=Xr.get(i);if(s){if(Jr(t,s.options)&&Jr(r,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const a=new gf(i);for(const l of Rs.values())a.addComponent(l);const c=new up(t,r,a);return Xr.set(i,c),c}function bu(n=As){const e=Xr.get(n);if(!e&&n===As&&Eu())return lp();if(!e)throw gt.create("no-app",{appName:n});return e}function Ce(n,e,t){var r;let i=(r=op[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(c.join(" "));return}$e(new Ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="firebase-heartbeat-database",dp=1,Qn="firebase-heartbeat-store";let hs=null;function Cu(){return hs||(hs=Pu(hp,dp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),hs}async function fp(n){try{const t=(await Cu()).transaction(Qn),r=await t.objectStore(Qn).get(ku(n));return await t.done,r}catch(e){if(e instanceof Me)Ze.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function Xa(n,e){try{const r=(await Cu()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,ku(n)),await r.done}catch(t){if(t instanceof Me)Ze.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(r.message)}}}function ku(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1024,mp=30*24*60*60*1e3;class gp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Za();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=mp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Za(),{heartbeatsToSend:r,unsentEntries:i}=_p(this._heartbeatsCache.heartbeats),s=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ze.warn(t),""}}}function Za(){return new Date().toISOString().substring(0,10)}function _p(n,e=pp){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ec(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ec(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wu()?Au().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ec(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){$e(new Ne("platform-logger",e=>new Df(e),"PRIVATE")),$e(new Ne("heartbeat",e=>new gp(e),"PRIVATE")),Ce(ws,Ya,n),Ce(ws,Ya,"esm2017"),Ce("fire-js","")}vp("");function Ws(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ep=Du,Vu=new Ft("auth","Firebase",Du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new gi("@firebase/auth");function Ip(n,...e){Zr.logLevel<=B.WARN&&Zr.warn(`Auth (${mn}): ${n}`,...e)}function Br(n,...e){Zr.logLevel<=B.ERROR&&Zr.error(`Auth (${mn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,...e){throw Hs(n,...e)}function Fe(n,...e){return Hs(n,...e)}function Nu(n,e,t){const r=Object.assign(Object.assign({},Ep()),{[e]:t});return new Ft("auth","Firebase",r).create(e,{appName:n.name})}function Je(n){return Nu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vu.create(n,...e)}function M(n,e,...t){if(!n)throw Hs(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Br(e),new Error(e)}function et(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tp(){return tc()==="http:"||tc()==="https:"}function tc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||Tu()||"connection"in navigator)?navigator.onLine:!0}function Ap(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Kd()||Jd()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new or(3e4,6e4);function At(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rt(n,e,t,r,i={}){return Lu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=ir(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return Yd()||(d.referrerPolicy="no-referrer"),Ou.fetch()(Mu(n,n.config.apiHost,t,c),d)})}async function Lu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rp),e);try{const i=new bp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Or(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Or(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Or(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Nu(n,p,d);Oe(n,p)}}catch(i){if(i instanceof Me)throw i;Oe(n,"network-request-failed",{message:String(i)})}}async function ar(n,e,t,r,i={}){const s=await rt(n,e,t,r,i);return"mfaPendingCredential"in s&&Oe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Mu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ks(n.config,i):`${n.config.apiScheme}://${i}`}function Pp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Sp.get())})}}function Or(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fe(n,e,r);return i.customData._tokenResponse=t,i}function nc(n){return n!==void 0&&n.enterprise!==void 0}class Cp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Pp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kp(n,e){return rt(n,"GET","/v2/recaptchaConfig",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e){return rt(n,"POST","/v1/accounts:delete",e)}async function xu(n,e){return rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vp(n,e=!1){const t=ce(n),r=await t.getIdToken(e),i=Qs(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zn(ds(i.auth_time)),issuedAtTime:zn(ds(i.iat)),expirationTime:zn(ds(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ds(n){return Number(n)*1e3}function Qs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const i=yu(t);return i?JSON.parse(i):(Br("Failed to decode base64 JWT payload"),null)}catch(i){return Br("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rc(n){const e=Qs(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Me&&Np(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Np({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n){var e;const t=n.auth,r=await n.getIdToken(),i=await on(n,xu(t,{idToken:r}));M(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fu(s.providerUserInfo):[],c=Mp(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=l?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ps(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function Lp(n){const e=ce(n);await ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fu(n){return n.map(e=>{var{providerId:t}=e,r=Ws(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n,e){const t=await Lu(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Mu(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ou.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fp(n,e){return rt(n,"POST","/v2/accounts:revokeToken",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=rc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await xp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new en;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Op(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ps(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await on(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vp(this,e)}reload(){return Lp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Je(this.auth));const e=await this.getIdToken();return await on(this,Dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,P=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,W=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:ee,isAnonymous:Pe,providerData:te,stsTokenManager:E}=t;M(H&&E,e,"internal-error");const m=en.fromJSON(this.name,E);M(typeof H=="string",e,"internal-error"),ut(y,e.name),ut(A,e.name),M(typeof ee=="boolean",e,"internal-error"),M(typeof Pe=="boolean",e,"internal-error"),ut(P,e.name),ut(D,e.name),ut(O,e.name),ut(k,e.name),ut(z,e.name),ut(W,e.name);const _=new Qe({uid:H,auth:e,email:A,emailVerified:ee,displayName:y,isAnonymous:Pe,photoURL:D,phoneNumber:P,tenantId:O,stsTokenManager:m,createdAt:z,lastLoginAt:W});return te&&Array.isArray(te)&&(_.providerData=te.map(v=>Object.assign({},v))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new en;i.updateFromServerResponse(t);const s=new Qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ei(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new en;c.updateFromIdToken(r);const l=new Qe({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ps(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Map;function Ye(n){et(n instanceof Function,"Expected a class definition");let e=ic.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ic.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uu.type="NONE";const sc=Uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=qr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Ye(sc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Ye(sc);const a=qr(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const y=Qe._fromJSON(e,p);d!==s&&(c=y),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new tn(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new tn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($u(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gu(e))return"Blackberry";if(Wu(e))return"Webos";if(qu(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bu(n=Ee()){return/firefox\//i.test(n)}function qu(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(n=Ee()){return/crios\//i.test(n)}function $u(n=Ee()){return/iemobile/i.test(n)}function zu(n=Ee()){return/android/i.test(n)}function Gu(n=Ee()){return/blackberry/i.test(n)}function Wu(n=Ee()){return/webos/i.test(n)}function Ys(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Up(n=Ee()){var e;return Ys(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bp(){return Xd()&&document.documentMode===10}function Hu(n=Ee()){return Ys(n)||zu(n)||Wu(n)||Gu(n)||/windows phone/i.test(n)||$u(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e=[]){let t;switch(n){case"Browser":t=oc(Ee());break;case"Worker":t=`${oc(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e={}){return rt(n,"GET","/v2/passwordPolicy",At(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=6;class zp{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$p,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ac(this),this.idTokenSubscription=new ac(this),this.beforeStateQueue=new qp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xu(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Je(this));const t=e?ce(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jp(this),t=new zp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ip(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ut(n){return ce(n)}class ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=of(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wp(n){_i=n}function Qu(n){return _i.loadJS(n)}function Hp(){return _i.recaptchaEnterpriseScript}function Kp(){return _i.gapiScript}function Qp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Yp{constructor(){this.enterprise=new Jp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Xp="recaptcha-enterprise",Yu="NO_RECAPTCHA";class Zp{constructor(e){this.type=Xp,this.auth=Ut(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{kp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Cp(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;nc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Yu)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yp().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&nc(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Hp();l.length!==0&&(l+=c),Qu(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function cc(n,e,t,r=!1,i=!1){const s=new Zp(n);let a;if(i)a=Yu;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bs(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await cc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await cc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n,e){const t=sr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Jr(s,e??{}))return i;Oe(i,"already-initialized")}return t.initialize({options:e})}function tm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nm(n,e,t){const r=Ut(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ju(e),{host:a,port:c}=rm(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),im()}function Ju(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rm(n){const e=Ju(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:uc(a)}}}function uc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function im(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function sm(n,e){return rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(n,e){return ar(n,"POST","/v1/accounts:signInWithPassword",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}async function cm(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Js{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Yn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Yn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bs(e,t,"signInWithPassword",om);case"emailLink":return am(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bs(e,r,"signUpPassword",sm);case"emailLink":return cm(e,{idToken:t,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e){return ar(n,"POST","/v1/accounts:signInWithIdp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="http://localhost";class Nt extends Js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ws(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Nt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hm(n){const e=Fn(Un(n)).link,t=e?Fn(Un(e)).deep_link_id:null,r=Fn(Un(n)).deep_link_id;return(r?Fn(Un(r)).link:null)||r||t||e||n}class Xs{constructor(e){var t,r,i,s,a,c;const l=Fn(Un(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=lm((i=l.mode)!==null&&i!==void 0?i:null);M(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=hm(e);try{return new Xs(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,t){return Yn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Xs.parseLink(t);return M(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Xu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends cr{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends cr{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends cr{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(n,e){return ar(n,"POST","/v1/accounts:signUp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Qe._fromIdTokenResponse(e,r,i),a=lc(r);return new Ot({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=lc(r);return new Ot({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function lc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Me{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ti.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ti(e,t,r,i)}}function Zu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ti._fromErrorAndOperation(n,s,e,r):s})}async function fm(n,e,t=!1){const r=await on(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ot._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,e,t=!1){const{auth:r}=n;if(xe(r.app))return Promise.reject(Je(r));const i="reauthenticate";try{const s=await on(n,Zu(r,i,e,n),t);M(s.idToken,r,"internal-error");const a=Qs(s.idToken);M(a,r,"internal-error");const{sub:c}=a;return M(n.uid===c,r,"user-mismatch"),Ot._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n,e,t=!1){if(xe(n.app))return Promise.reject(Je(n));const r="signIn",i=await Zu(n,r,e),s=await Ot._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function mm(n,e){return el(Ut(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(n){const e=Ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tI(n,e,t){if(xe(n.app))return Promise.reject(Je(n));const r=Ut(n),a=await bs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tl(n),l}),c=await Ot._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function nI(n,e,t){return xe(n.app)?Promise.reject(Je(n)):mm(ce(n),gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tl(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(n,e){return rt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ce(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await on(r,gm(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function _m(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function ym(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function iI(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function sI(n){return ce(n).signOut()}const ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ni,"1"),this.storage.removeItem(ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=1e3,Em=10;class rl extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Bp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Em):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const Im=rl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}il.type="SESSION";const sl=il;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),l=await Tm(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const d=Zs("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(A.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function Am(n){Ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function Rm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Pm(){return ol()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="firebaseLocalStorageDb",bm=1,ri="firebaseLocalStorage",cl="fbase_key";class ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vi(n,e){return n.transaction([ri],e?"readwrite":"readonly").objectStore(ri)}function Cm(){const n=indexedDB.deleteDatabase(al);return new ur(n).toPromise()}function Cs(){const n=indexedDB.open(al,bm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ri,{keyPath:cl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ri)?e(r):(r.close(),await Cm(),e(await Cs()))})})}async function hc(n,e,t){const r=vi(n,!0).put({[cl]:e,value:t});return new ur(r).toPromise()}async function km(n,e){const t=vi(n,!1).get(e),r=await new ur(t).toPromise();return r===void 0?null:r.value}function dc(n,e){const t=vi(n,!0).delete(e);return new ur(t).toPromise()}const Dm=800,Vm=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Vm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rm(),!this.activeServiceWorker)return;this.sender=new wm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await hc(e,ni,"1"),await dc(e,ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>km(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vi(i,!1).getAll();return new ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const Nm=ul;new or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n,e){return e?Ye(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lm(n){return el(n.auth,new eo(n),n.bypassAuthState)}function Mm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),pm(t,new eo(n),n.bypassAuthState)}async function xm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),fm(t,new eo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lm;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:Oe(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new or(2e3,1e4);class Zt extends ll{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=Zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fm.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="pendingRedirect",jr=new Map;class Bm extends ll{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const r=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(n,e){const t=zm(e),r=$m(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function jm(n,e){jr.set(n._key(),e)}function $m(n){return Ye(n._redirectPersistence)}function zm(n){return qr(Um,n.config.apiKey,n.name)}async function Gm(n,e,t=!1){if(xe(n.app))return Promise.reject(Je(n));const r=Ut(n),i=Om(r,e),a=await new Bm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=10*60*1e3;class Hm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Km(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wm&&this.cachedEventUids.clear(),this.cachedEventUids.has(fc(e))}saveEventToCache(e){this.cachedEventUids.add(fc(e)),this.lastProcessedEventTime=Date.now()}}function fc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Km(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(n,e={}){return rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jm=/^https?/;async function Xm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qm(n);for(const t of e)try{if(Zm(t))return}catch{}Oe(n,"unauthorized-domain")}function Zm(n){const e=Ss(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Jm.test(t))return!1;if(Ym.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new or(3e4,6e4);function pc(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tg(n){return new Promise((e,t)=>{var r,i,s;function a(){pc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pc(),t(Fe(n,"network-request-failed"))},timeout:eg.get()})}if(!((i=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ue().gapi)===null||s===void 0)&&s.load)a();else{const c=Qp("iframefcb");return Ue()[c]=()=>{gapi.load?a():t(Fe(n,"network-request-failed"))},Qu(`${Kp()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw $r=null,e})}let $r=null;function ng(n){return $r=$r||tg(n),$r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new or(5e3,15e3),ig="__/auth/iframe",sg="emulator/auth/iframe",og={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ag=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ks(e,sg):`https://${n.config.authDomain}/${ig}`,r={apiKey:e.apiKey,appName:n.name,v:mn},i=ag.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ir(r).slice(1)}`}async function ug(n){const e=await ng(n),t=Ue().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:cg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:og,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Fe(n,"network-request-failed"),c=Ue().setTimeout(()=>{s(a)},rg.get());function l(){Ue().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hg=500,dg=600,fg="_blank",pg="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mg(n,e,t,r=hg,i=dg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},lg),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ee().toLowerCase();t&&(c=ju(d)?fg:t),Bu(d)&&(e=e||pg,l.scrollbars="yes");const p=Object.entries(l).reduce((A,[P,D])=>`${A}${P}=${D},`,"");if(Up(d)&&c!=="_self")return gg(e||"",c),new mc(null);const y=window.open(e||"",c,p);M(y,n,"popup-blocked");try{y.focus()}catch{}return new mc(y)}function gg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__/auth/handler",yg="emulator/auth/handler",vg=encodeURIComponent("fac");async function gc(n,e,t,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mn,eventId:i};if(e instanceof Xu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof cr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${vg}=${encodeURIComponent(l)}`:"";return`${Eg(n)}?${ir(c).slice(1)}${d}`}function Eg({config:n}){return n.emulator?Ks(n,yg):`https://${n.authDomain}/${_g}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class Ig{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sl,this._completeRedirectFn=Gm,this._overrideRedirectResult=jm}async _openPopup(e,t,r,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await gc(e,t,r,Ss(),i);return mg(e,a,Zs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await gc(e,t,r,Ss(),i);return Am(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ug(e),r=new Hm(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fs,{type:fs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fs];a!==void 0&&t(!!a),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hu()||qu()||Ys()}}const Tg=Ig;var _c="@firebase/auth",yc="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rg(n){$e(new Ne("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(n)},d=new Gp(r,i,s,l);return tm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$e(new Ne("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(r=>new wg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(_c,yc,Ag(n)),Ce(_c,yc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=5*60,Pg=Iu("authIdTokenMaxAge")||Sg;let vc=null;const bg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Pg)return;const i=t==null?void 0:t.token;vc!==i&&(vc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oI(n=bu()){const e=sr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=em(n,{popupRedirectResolver:Tg,persistence:[Nm,Im,sl]}),r=Iu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=bg(s.toString());ym(t,a,()=>a(t.currentUser)),_m(t,c=>a(c))}}const i=vu("auth");return i&&nm(t,`http://${i}`),t}function Cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Wp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Fe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rg("Browser");var kg="firebase",Dg="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(kg,Dg,"app");const dl="@firebase/installations",to="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=1e4,pl=`w:${to}`,ml="FIS_v2",Vg="https://firebaseinstallations.googleapis.com/v1",Ng=60*60*1e3,Og="installations",Lg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Lt=new Ft(Og,Lg,Mg);function gl(n){return n instanceof Me&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l({projectId:n}){return`${Vg}/projects/${n}/installations`}function yl(n){return{token:n.token,requestStatus:2,expiresIn:Fg(n.expiresIn),creationTime:Date.now()}}async function vl(n,e){const r=(await e.json()).error;return Lt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function El({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function xg(n,{refreshToken:e}){const t=El(n);return t.append("Authorization",Ug(e)),t}async function Il(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Fg(n){return Number(n.replace("s","000"))}function Ug(n){return`${ml} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=_l(n),i=El(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:ml,appId:n.appId,sdkVersion:pl},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Il(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:yl(d.authToken)}}else throw await vl("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^[cdef][\w-]{21}$/,ks="";function $g(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=zg(n);return jg.test(t)?t:ks}catch{return ks}}function zg(n){return qg(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map;function Al(n,e){const t=Ei(n);Rl(t,e),Gg(t,e)}function Rl(n,e){const t=wl.get(n);if(t)for(const r of t)r(e)}function Gg(n,e){const t=Wg();t&&t.postMessage({key:n,fid:e}),Hg()}let kt=null;function Wg(){return!kt&&"BroadcastChannel"in self&&(kt=new BroadcastChannel("[Firebase] FID Change"),kt.onmessage=n=>{Rl(n.data.key,n.data.fid)}),kt}function Hg(){wl.size===0&&kt&&(kt.close(),kt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebase-installations-database",Qg=1,Mt="firebase-installations-store";let ps=null;function no(){return ps||(ps=Pu(Kg,Qg,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Mt)}}})),ps}async function ii(n,e){const t=Ei(n),i=(await no()).transaction(Mt,"readwrite"),s=i.objectStore(Mt),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Al(n,e.fid),e}async function Sl(n){const e=Ei(n),r=(await no()).transaction(Mt,"readwrite");await r.objectStore(Mt).delete(e),await r.done}async function Ii(n,e){const t=Ei(n),i=(await no()).transaction(Mt,"readwrite"),s=i.objectStore(Mt),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Al(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){let e;const t=await Ii(n.appConfig,r=>{const i=Yg(r),s=Jg(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===ks?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Yg(n){const e=n||{fid:$g(),registrationStatus:0};return Pl(e)}function Jg(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Lt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Xg(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zg(n)}:{installationEntry:e}}async function Xg(n,e){try{const t=await Bg(n,e);return ii(n.appConfig,t)}catch(t){throw gl(t)&&t.customData.serverCode===409?await Sl(n.appConfig):await ii(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Zg(n){let e=await Ec(n.appConfig);for(;e.registrationStatus===1;)await Tl(100),e=await Ec(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ro(n);return r||t}return e}function Ec(n){return Ii(n,e=>{if(!e)throw Lt.create("installation-not-found");return Pl(e)})}function Pl(n){return e_(n)?{fid:n.fid,registrationStatus:0}:n}function e_(n){return n.registrationStatus===1&&n.registrationTime+fl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_({appConfig:n,heartbeatServiceProvider:e},t){const r=n_(n,t),i=xg(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:pl,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Il(()=>fetch(r,c));if(l.ok){const d=await l.json();return yl(d)}else throw await vl("Generate Auth Token",l)}function n_(n,{fid:e}){return`${_l(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n,e=!1){let t;const r=await Ii(n.appConfig,s=>{if(!bl(s))throw Lt.create("not-registered");const a=s.authToken;if(!e&&s_(a))return s;if(a.requestStatus===1)return t=r_(n,e),s;{if(!navigator.onLine)throw Lt.create("app-offline");const c=a_(s);return t=i_(n,c),c}});return t?await t:r.authToken}async function r_(n,e){let t=await Ic(n.appConfig);for(;t.authToken.requestStatus===1;)await Tl(100),t=await Ic(n.appConfig);const r=t.authToken;return r.requestStatus===0?io(n,e):r}function Ic(n){return Ii(n,e=>{if(!bl(e))throw Lt.create("not-registered");const t=e.authToken;return c_(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function i_(n,e){try{const t=await t_(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ii(n.appConfig,r),t}catch(t){if(gl(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Sl(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ii(n.appConfig,r)}throw t}}function bl(n){return n!==void 0&&n.registrationStatus===2}function s_(n){return n.requestStatus===2&&!o_(n)}function o_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ng}function a_(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function c_(n){return n.requestStatus===1&&n.requestTime+fl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n){const e=n,{installationEntry:t,registrationPromise:r}=await ro(e);return r?r.catch(console.error):io(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e=!1){const t=n;return await h_(t),(await io(t,e)).token}async function h_(n){const{registrationPromise:e}=await ro(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(n){if(!n||!n.options)throw ms("App Configuration");if(!n.name)throw ms("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ms(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ms(n){return Lt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="installations",f_="installations-internal",p_=n=>{const e=n.getProvider("app").getImmediate(),t=d_(e),r=sr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},m_=n=>{const e=n.getProvider("app").getImmediate(),t=sr(e,Cl).getImmediate();return{getId:()=>u_(t),getToken:i=>l_(t,i)}};function g_(){$e(new Ne(Cl,p_,"PUBLIC")),$e(new Ne(f_,m_,"PRIVATE"))}g_();Ce(dl,to);Ce(dl,to,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="analytics",__="firebase_id",y_="origin",v_=60*1e3,E_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",so="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new gi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new Ft("analytics","Analytics",I_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n){if(!n.startsWith(so)){const e=ke.create("invalid-gtag-resource",{gtagURL:n});return Ae.warn(e.message),""}return n}function kl(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function w_(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function A_(n,e){const t=w_("firebase-js-sdk-policy",{createScriptURL:T_}),r=document.createElement("script"),i=`${so}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function R_(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function S_(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await kl(t)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(c){Ae.error(c)}n("config",i,s)}async function P_(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await kl(t);for(const l of a){const d=c.find(y=>y.measurementId===l),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Ae.error(s)}}function b_(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await P_(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await S_(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){Ae.error(c)}}return i}function C_(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=b_(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function k_(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(so)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=30,V_=1e3;class N_{constructor(e={},t=V_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dl=new N_;function O_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function L_(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:O_(r)},s=E_.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function M_(n,e=Dl,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw ke.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ke.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new U_;return setTimeout(async()=>{c.abort()},v_),Vl({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Vl(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Dl){var s;const{appId:a,measurementId:c}=n;try{await x_(r,e)}catch(l){if(c)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await L_(n);return i.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!F_(d)){if(i.deleteThrottleMetadata(a),c)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw l}const p=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wa(t,i.intervalMillis,D_):Wa(t,i.intervalMillis),y={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return i.setThrottleMetadata(a,y),Ae.debug(`Calling attemptFetch again in ${p} millis`),Vl(n,y,r,i)}}function x_(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F_(n){if(!(n instanceof Me)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class U_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function B_(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(){if(wu())try{await Au()}catch(n){return Ae.warn(ke.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ae.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j_(n,e,t,r,i,s,a){var c;const l=M_(n);l.then(P=>{t[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>Ae.error(P)),e.push(l);const d=q_().then(P=>{if(P)return r.getId()}),[p,y]=await Promise.all([l,d]);k_(s)||A_(s,p.measurementId),i("js",new Date);const A=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return A[y_]="firebase",A.update=!0,y!=null&&(A[__]=y),i("config",p.measurementId,A),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},wc=[];const Ac={};let gs="dataLayer",z_="gtag",Rc,Nl,Sc=!1;function G_(){const n=[];if(Tu()&&n.push("This is a browser extension environment."),ef()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=ke.create("invalid-analytics-context",{errorInfo:e});Ae.warn(t.message)}}function W_(n,e,t){G_();const r=n.options.appId;if(!r)throw ke.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Gn[r]!=null)throw ke.create("already-exists",{id:r});if(!Sc){R_(gs);const{wrappedGtag:s,gtagCore:a}=C_(Gn,wc,Ac,gs,z_);Nl=s,Rc=a,Sc=!0}return Gn[r]=j_(n,wc,Ac,e,Rc,gs,t),new $_(n)}function H_(n,e,t,r){n=ce(n),B_(Nl,Gn[n.app.options.appId],e,t,r).catch(i=>Ae.error(i))}const Pc="@firebase/analytics",bc="0.10.10";function K_(){$e(new Ne(Tc,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return W_(r,i,t)},"PUBLIC")),$e(new Ne("analytics-internal",n,"PRIVATE")),Ce(Pc,bc),Ce(Pc,bc,"esm2017");function n(e){try{const t=e.getProvider(Tc).getImmediate();return{logEvent:(r,i,s)=>H_(t,r,i,s)}}catch(t){throw ke.create("interop-component-reg-failed",{reason:t})}}}K_();var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,Ol;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,I,w){for(var g=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)g[Ge-2]=arguments[Ge];return m.prototype[I].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],I=E.g[2];var w=E.g[3],g=m+(w^_&(I^w))+v[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+v[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+v[2]+606105819&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+v[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+v[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+v[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+v[6]+2821735955&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+v[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+v[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+v[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+v[10]+4294925233&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+v[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(w^_&(I^w))+v[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(I^m&(_^I))+v[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=I+(_^w&(m^_))+v[14]+2792965006&4294967295,I=w+(g<<17&4294967295|g>>>15),g=_+(m^I&(w^m))+v[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^w&(_^I))+v[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+v[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+v[11]+643717713&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+v[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+v[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+v[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+v[15]+3634488961&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+v[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+v[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+v[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+v[3]+4107603335&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+v[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^w&(_^I))+v[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^I&(m^_))+v[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(w^m))+v[7]+1735328473&4294967295,I=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(I^w))+v[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^w)+v[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+v[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+v[11]+1839030562&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+v[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+v[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+v[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+v[7]+4139469664&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+v[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+v[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+v[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+v[3]+3572445317&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+v[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^w)+v[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^I)+v[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=I+(w^m^_)+v[15]+530742520&4294967295,I=w+(g<<16&4294967295|g>>>16),g=_+(I^w^m)+v[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~w))+v[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+v[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+v[14]+2878612391&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+v[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+v[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+v[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+v[10]+4293915773&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+v[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+v[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+v[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+v[6]+2734768916&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+v[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~w))+v[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~I))+v[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=I+(m^(w|~_))+v[2]+718787259&4294967295,I=w+(g<<15&4294967295|g>>>17),g=_+(w^(I|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,v=this.B,I=this.h,w=0;w<m;){if(I==0)for(;w<=_;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(v[I++]=E.charCodeAt(w++),I==this.blockSize){i(this,v),I=0;break}}else for(;w<m;)if(v[I++]=E[w++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)E[_++]=this.g[m]>>>v&255;return E};function s(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],v=!0,I=E.length-1;0<=I;I--){var w=E[I]|0;v&&w==m||(_[I]=w,v=!1)}this.g=_}var c={};function l(E){return-128<=E&&128>E?s(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return k(d(-E));for(var m=[],_=1,v=0;E>=_;v++)m[v]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=y,I=0;I<E.length;I+=8){var w=Math.min(8,E.length-I),g=parseInt(E.substring(I,I+w),m);8>w?(w=d(Math.pow(m,w)),v=v.j(w).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var y=l(0),A=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(O(this))return"-"+k(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,v="";;){var I=ee(_,m).g;_=z(_,I.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,D(_))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=z(this,E),O(E)?-1:D(E)?0:1};function k(E){for(var m=E.g.length,_=[],v=0;v<m;v++)_[v]=~E.g[v];return new a(_,~E.h).add(A)}n.abs=function(){return O(this)?k(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0,I=0;I<=m;I++){var w=v+(this.i(I)&65535)+(E.i(I)&65535),g=(w>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=g>>>16,w&=65535,g&=65535,_[I]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(E,m){return E.add(k(m))}n.j=function(E){if(D(this)||D(E))return y;if(O(this))return O(E)?k(this).j(k(E)):k(k(this).j(E));if(O(E))return k(this.j(k(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<E.g.length;I++){var w=this.i(v)>>>16,g=this.i(v)&65535,Ge=E.i(I)>>>16,In=E.i(I)&65535;_[2*v+2*I]+=g*In,W(_,2*v+2*I),_[2*v+2*I+1]+=w*In,W(_,2*v+2*I+1),_[2*v+2*I+1]+=g*Ge,W(_,2*v+2*I+1),_[2*v+2*I+2]+=w*Ge,W(_,2*v+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function W(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function ee(E,m){if(D(m))throw Error("division by zero");if(D(E))return new H(y,y);if(O(E))return m=ee(k(E),m),new H(k(m.g),k(m.h));if(O(m))return m=ee(E,k(m)),new H(k(m.g),m.h);if(30<E.g.length){if(O(E)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,v=m;0>=v.l(E);)_=Pe(_),v=Pe(v);var I=te(_,1),w=te(v,1);for(v=te(v,2),_=te(_,2);!D(v);){var g=w.add(v);0>=g.l(E)&&(I=I.add(_),w=g),v=te(v,1),_=te(_,1)}return m=z(E,I.j(m)),new H(I,m)}for(I=y;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(_),g=w.j(m);O(g)||0<g.l(E);)_-=v,w=d(_),g=w.j(m);D(w)&&(w=A),I=I.add(w),E=z(E,g)}return new H(I,E)}n.A=function(E){return ee(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function Pe(E){for(var m=E.g.length+1,_=[],v=0;v<m;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function te(E,m){var _=m>>5;m%=32;for(var v=E.g.length-_,I=[],w=0;w<v;w++)I[w]=0<m?E.i(w+_)>>>m|E.i(w+_+1)<<32-m:E.i(w+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ol=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Vt=a}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ll,Bn,Ml,zr,Ds,xl,Fl,Ul;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,T={next:function(){if(!f&&h<o.length){var R=h++;return{value:u(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(u,T)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,A.apply(null,arguments)}function P(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function D(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,T,R){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return u.prototype[T].apply(f,C)}}function O(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function k(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const T=o.length||0,R=f.length||0;o.length=T+R;for(let C=0;C<R;C++)o[T+C]=f[C]}else o.push(f)}}class z{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var Pe=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function te(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function E(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function w(o){c.setTimeout(()=>{throw o},0)}function g(){var o=xi;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ge{constructor(){this.h=this.g=null}add(u,h){const f=In.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var In=new z(()=>new rd,o=>o.reset());class rd{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,wn=!1,xi=new Ge,zo=()=>{const o=c.Promise.resolve(void 0);Tn=()=>{o.then(id)}};var id=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){w(h)}var u=In;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}wn=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var sd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function An(o,u){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Pe){e:{try{ee(u.nodeName);var T=!0;break e}catch{}T=!1}T||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:od[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&An.aa.h.call(this)}}D(An,fe);var od={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var mr="closure_listenable_"+(1e6*Math.random()|0),ad=0;function cd(o,u,h,f,T){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=T,this.key=++ad,this.da=this.fa=!1}function gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _r(o){this.src=o,this.g={},this.h=0}_r.prototype.add=function(o,u,h,f,T){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var C=Ui(o,u,f,T);return-1<C?(u=o[C],h||(u.fa=!1)):(u=new cd(u,this.src,R,!!f,T),u.fa=h,o.push(u)),u};function Fi(o,u){var h=u.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=T)&&Array.prototype.splice.call(f,T,1),R&&(gr(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ui(o,u,h,f){for(var T=0;T<o.length;++T){var R=o[T];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return T}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),qi={};function Go(o,u,h,f,T){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Go(o,u[R],h,f,T);return null}return h=Ko(h),o&&o[mr]?o.K(u,h,d(f)?!!f.capture:!!f,T):ud(o,u,h,!1,f,T)}function ud(o,u,h,f,T,R){if(!u)throw Error("Invalid event type");var C=d(T)?!!T.capture:!!T,Q=$i(o);if(Q||(o[Bi]=Q=new _r(o)),h=Q.add(u,h,f,C,R),h.proxy)return h;if(f=ld(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)sd||(T=C),T===void 0&&(T=!1),o.addEventListener(u.toString(),f,T);else if(o.attachEvent)o.attachEvent(Ho(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ld(){function o(h){return u.call(o.src,o.listener,h)}const u=hd;return o}function Wo(o,u,h,f,T){if(Array.isArray(u))for(var R=0;R<u.length;R++)Wo(o,u[R],h,f,T);else f=d(f)?!!f.capture:!!f,h=Ko(h),o&&o[mr]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],h=Ui(R,h,f,T),-1<h&&(gr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=$i(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ui(u,h,f,T)),(h=-1<o?u[o]:null)&&ji(h))}function ji(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[mr])Fi(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Ho(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=$i(u))?(Fi(h,o),h.h==0&&(h.src=null,u[Bi]=null)):gr(o)}}}function Ho(o){return o in qi?qi[o]:qi[o]="on"+o}function hd(o,u){if(o.da)o=!0;else{u=new An(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&ji(o),o=h.call(f,u)}return o}function $i(o){return o=o[Bi],o instanceof _r?o:null}var zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(o){return typeof o=="function"?o:(o[zi]||(o[zi]=function(u){return o.handleEvent(u)}),o[zi])}function pe(){st.call(this),this.i=new _r(this),this.M=this,this.F=null}D(pe,st),pe.prototype[mr]=!0,pe.prototype.removeEventListener=function(o,u,h,f){Wo(this,o,u,h,f)};function Ie(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new fe(u,o);else if(u instanceof fe)u.target=u.target||o;else{var T=u;u=new fe(f,o),v(u,T)}if(T=!0,h)for(var R=h.length-1;0<=R;R--){var C=u.g=h[R];T=yr(C,f,!0,u)&&T}if(C=u.g=o,T=yr(C,f,!0,u)&&T,T=yr(C,f,!1,u)&&T,h)for(R=0;R<h.length;R++)C=u.g=h[R],T=yr(C,f,!1,u)&&T}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)gr(h[f]);delete o.g[u],o.h--}}this.F=null},pe.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},pe.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function yr(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==h){var Q=C.listener,ue=C.ha||C.src;C.fa&&Fi(o.i,C),T=Q.call(ue,f)!==!1&&T}}return T&&!f.defaultPrevented}function Qo(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Yo(o){o.g=Qo(()=>{o.g=null,o.i&&(o.i=!1,Yo(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class dd extends st{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Yo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(o){st.call(this),this.h=o,this.g={}}D(Rn,st);var Jo=[];function Xo(o){te(o.g,function(u,h){this.g.hasOwnProperty(h)&&ji(u)},o),o.g={}}Rn.prototype.N=function(){Rn.aa.N.call(this),Xo(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gi=c.JSON.stringify,fd=c.JSON.parse,pd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Wi(){}Wi.prototype.h=null;function Zo(o){return o.h||(o.h=o.i())}function ea(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){fe.call(this,"d")}D(Hi,fe);function Ki(){fe.call(this,"c")}D(Ki,fe);var Rt={},ta=null;function vr(){return ta=ta||new pe}Rt.La="serverreachability";function na(o){fe.call(this,Rt.La,o)}D(na,fe);function Pn(o){const u=vr();Ie(u,new na(u))}Rt.STAT_EVENT="statevent";function ra(o,u){fe.call(this,Rt.STAT_EVENT,o),this.stat=u}D(ra,fe);function Te(o){const u=vr();Ie(u,new ra(u,o))}Rt.Ma="timingevent";function ia(o,u){fe.call(this,Rt.Ma,o),this.size=u}D(ia,fe);function bn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function md(o,u,h,f,T,R){o.info(function(){if(o.g)if(R)for(var C="",Q=R.split("&"),ue=0;ue<Q.length;ue++){var G=Q[ue].split("=");if(1<G.length){var me=G[0];G=G[1];var ge=me.split("_");C=2<=ge.length&&ge[1]=="type"?C+(me+"="+G+"&"):C+(me+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+h+`
`+C})}function gd(o,u,h,f,T,R,C){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+h+`
`+R+" "+C})}function Gt(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+yd(o,h)+(f?" "+f:"")})}function _d(o,u){o.info(function(){return"TIMEOUT: "+u})}Cn.prototype.info=function(){};function yd(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return Gi(h)}catch{return u}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qi;function Ir(){}D(Ir,Wi),Ir.prototype.g=function(){return new XMLHttpRequest},Ir.prototype.i=function(){return{}},Qi=new Ir;function ot(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new Rn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oa}function oa(){this.i=null,this.g="",this.h=!1}var aa={},Yi={};function Ji(o,u,h){o.L=1,o.v=Rr(We(u)),o.m=h,o.P=!0,ca(o,null)}function ca(o,u){o.F=Date.now(),Tr(o),o.A=We(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ta(h.i,"t",f),o.C=0,h=o.j.J,o.h=new oa,o.g=Ba(o.j,h?u:null,!o.m),0<o.O&&(o.M=new dd(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Jo[0]=T.toString()),T=Jo);for(var R=0;R<T.length;R++){var C=Go(h,T[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Pn(),md(o.i,o.u,o.A,o.l,o.R,o.m)}ot.prototype.ca=function(o){o=o.target;const u=this.M;u&&He(o)==3?u.j():this.Y(o)},ot.prototype.Y=function(o){try{if(o==this.g)e:{const ge=He(this.g);var u=this.g.Ba();const Kt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||ge!=4||u==7||(u==8||0>=Kt?Pn(3):Pn(2)),Xi(this);var h=this.g.Z();this.X=h;t:if(ua(this)){var f=Ca(this.g);o="";var T=f.length,R=He(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){St(this),kn(this);var C="";break t}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(R&&u==T-1)});f.length=0,this.h.g+=o,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=h==200,gd(this.i,this.u,this.A,this.l,this.R,ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ue=this.g;if((Q=ue.g?ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Q)){var G=Q;break t}}G=null}if(h=G)Gt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,h);else{this.o=!1,this.s=3,Te(12),St(this),kn(this);break e}}if(this.P){h=!0;let De;for(;!this.J&&this.C<C.length;)if(De=vd(this,C),De==Yi){ge==4&&(this.s=4,Te(14),h=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(De==aa){this.s=4,Te(15),Gt(this.i,this.l,C,"[Invalid Chunk]"),h=!1;break}else Gt(this.i,this.l,De,null),Zi(this,De);if(ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||C.length!=0||this.h.h||(this.s=1,Te(16),h=!1),this.o=this.o&&h,!h)Gt(this.i,this.l,C,"[Invalid Chunked Response]"),St(this),kn(this);else if(0<C.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ss(me),me.M=!0,Te(11))}}else Gt(this.i,this.l,C,null),Zi(this,C);ge==4&&St(this),this.o&&!this.J&&(ge==4?Ma(this.j,this):(this.o=!1,Tr(this)))}else Md(this.g),h==400&&0<C.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),St(this),kn(this)}}}catch{}finally{}};function ua(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function vd(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Yi:(h=Number(u.substring(h,f)),isNaN(h)?aa:(f+=1,f+h>u.length?Yi:(u=u.slice(f,f+h),o.C=f+h,u)))}ot.prototype.cancel=function(){this.J=!0,St(this)};function Tr(o){o.S=Date.now()+o.I,la(o,o.I)}function la(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=bn(A(o.ba,o),u)}function Xi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ot.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(_d(this.i,this.A),this.L!=2&&(Pn(),Te(17)),St(this),this.s=2,kn(this)):la(this,this.S-o)};function kn(o){o.j.G==0||o.J||Ma(o.j,o)}function St(o){Xi(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Xo(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Zi(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||es(h.h,o))){if(!o.K&&es(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Dr(h),Cr(h);else break e;is(h),Te(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=bn(A(h.Za,h),6e3));if(1>=fa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else bt(h,11)}else if((o.K||h.g==o)&&Dr(h),!W(u))for(T=h.Da.g.parse(u),u=0;u<T.length;u++){let G=T[u];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const me=G[3];me!=null&&(h.la=me,h.j.info("VER="+h.la));const ge=G[4];ge!=null&&(h.Aa=ge,h.j.info("SVER="+h.Aa));const Kt=G[5];Kt!=null&&typeof Kt=="number"&&0<Kt&&(f=1.5*Kt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const De=o.g;if(De){const Nr=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var R=f.h;R.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ts(R,R.h),R.h=null))}if(f.D){const os=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;os&&(f.ya=os,J(f.I,f.D,os))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var C=o;if(f.qa=Ua(f,f.J?f.ia:null,f.W),C.K){pa(f.h,C);var Q=C,ue=f.L;ue&&(Q.I=ue),Q.B&&(Xi(Q),Tr(Q)),f.g=C}else Oa(f);0<h.i.length&&kr(h)}else G[0]!="stop"&&G[0]!="close"||bt(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?bt(h,7):rs(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}Pn(4)}catch{}}var Ed=class{constructor(o,u){this.g=o,this.map=u}};function ha(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function da(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fa(o){return o.h?1:o.g?o.g.size:0}function es(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ts(o,u){o.g?o.g.add(u):o.h=u}function pa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ha.prototype.cancel=function(){if(this.i=ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return O(o.i)}function Id(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function Td(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function ga(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Td(o),f=Id(o),T=f.length,R=0;R<T;R++)u.call(void 0,f[R],h&&h[R],o)}var _a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),T=null;if(0<=f){var R=o[h].substring(0,f);T=o[h].substring(f+1)}else R=o[h];u(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Pt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pt){this.h=o.h,wr(this,o.j),this.o=o.o,this.g=o.g,Ar(this,o.s),this.l=o.l;var u=o.i,h=new Nn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),ya(this,h),this.m=o.m}else o&&(u=String(o).match(_a))?(this.h=!1,wr(this,u[1]||"",!0),this.o=Dn(u[2]||""),this.g=Dn(u[3]||"",!0),Ar(this,u[4]),this.l=Dn(u[5]||"",!0),ya(this,u[6]||"",!0),this.m=Dn(u[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}Pt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Vn(u,va,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Vn(u,va,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Vn(h,h.charAt(0)=="/"?Sd:Rd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Vn(h,bd)),o.join("")};function We(o){return new Pt(o)}function wr(o,u,h){o.j=h?Dn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ar(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ya(o,u,h){u instanceof Nn?(o.i=u,Cd(o.i,o.h)):(h||(u=Vn(u,Pd)),o.i=new Nn(u,o.h))}function J(o,u,h){o.i.set(u,h)}function Rr(o){return J(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Dn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Vn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Ad),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ad(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var va=/[#\/\?@]/g,Rd=/[#\?:]/g,Sd=/[#\?]/g,Pd=/[#\?@]/g,bd=/#/g;function Nn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function at(o){o.g||(o.g=new Map,o.h=0,o.i&&wd(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Nn.prototype,n.add=function(o,u){at(this),this.i=null,o=Wt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ea(o,u){at(o),u=Wt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ia(o,u){return at(o),u=Wt(o,u),o.g.has(u)}n.forEach=function(o,u){at(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(u,T,f,this)},this)},this)},n.na=function(){at(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const T=o[f];for(let R=0;R<T.length;R++)h.push(u[f])}return h},n.V=function(o){at(this);let u=[];if(typeof o=="string")Ia(this,o)&&(u=u.concat(this.g.get(Wt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return at(this),this.i=null,o=Wt(this,o),Ia(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ta(o,u,h){Ea(o,u),0<h.length&&(o.i=null,o.g.set(Wt(o,u),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var T=R;C[f]!==""&&(T+="="+encodeURIComponent(String(C[f]))),o.push(T)}}return this.i=o.join("&")};function Wt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Cd(o,u){u&&!o.j&&(at(o),o.i=null,o.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(Ea(this,f),Ta(this,T,h))},o)),o.j=u}function kd(o,u){const h=new Cn;if(c.Image){const f=new Image;f.onload=P(ct,h,"TestLoadImage: loaded",!0,u,f),f.onerror=P(ct,h,"TestLoadImage: error",!1,u,f),f.onabort=P(ct,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(ct,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Dd(o,u){const h=new Cn,f=new AbortController,T=setTimeout(()=>{f.abort(),ct(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(T),R.ok?ct(h,"TestPingServer: ok",!0,u):ct(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),ct(h,"TestPingServer: error",!1,u)})}function ct(o,u,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function Vd(){this.g=new pd}function Nd(o,u,h){const f=h||"";try{ga(o,function(T,R){let C=T;d(T)&&(C=Gi(T)),u.push(f+R+"="+encodeURIComponent(C))})}catch(T){throw u.push(f+"type="+encodeURIComponent("_badmap")),T}}function Sr(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Sr,Wi),Sr.prototype.g=function(){return new Pr(this.l,this.j)},Sr.prototype.i=function(o){return function(){return o}}({});function Pr(o,u){pe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Pr,pe),n=Pr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ln(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?On(this):Ln(this),this.readyState==3&&wa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,On(this))},n.Qa=function(o){this.g&&(this.response=o,On(this))},n.ga=function(){this.g&&On(this)};function On(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ln(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Ln(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Aa(o){let u="";return te(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function ns(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Aa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):J(o,u,h))}function Z(o){pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,pe);var Od=/^https?$/i,Ld=["POST","PUT"];n=Z.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qi.g(),this.v=this.o?Zo(this.o):Zo(Qi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Ra(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ld,u,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of h)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ba(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Ra(this,R)}};function Ra(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Sa(o),br(o)}function Sa(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pa(this):this.bb())},n.bb=function(){Pa(this)};function Pa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||He(o)!=4||o.Z()!=2)){if(o.u&&He(o)==4)Qo(o.Ea,0,o);else if(Ie(o,"readystatechange"),He(o)==4){o.h=!1;try{const C=o.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=C===0){var T=String(o.D).match(_a)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!Od.test(T?T.toLowerCase():"")}h=f}if(h)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var R=2<He(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Sa(o)}}finally{br(o)}}}}function br(o,u){if(o.g){ba(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ie(o,"ready");try{h.onreadystatechange=f}catch{}}}function ba(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function He(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<He(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),fd(u)}};function Ca(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Md(o){const u={};o=(o.g&&2<=He(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(W(o[f]))continue;var h=I(o[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[T]||[];u[T]=R,R.push(h)}E(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function ka(o){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mn("baseRetryDelayMs",5e3,o),this.cb=Mn("retryDelaySeedMs",1e4,o),this.Wa=Mn("forwardChannelMaxRetries",2,o),this.wa=Mn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ha(o&&o.concurrentRequestLimit),this.Da=new Vd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ka.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,f){Te(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ua(this,null,this.W),kr(this)};function rs(o){if(Da(o),o.G==3){var u=o.U++,h=We(o.I);if(J(h,"SID",o.K),J(h,"RID",u),J(h,"TYPE","terminate"),xn(o,h),u=new ot(o,o.j,u),u.L=2,u.v=Rr(We(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ba(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Tr(u)}Fa(o)}function Cr(o){o.g&&(ss(o),o.g.cancel(),o.g=null)}function Da(o){Cr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Dr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function kr(o){if(!da(o.h)&&!o.s){o.s=!0;var u=o.Ga;Tn||zo(),wn||(Tn(),wn=!0),xi.add(u,o),o.B=0}}function xd(o,u){return fa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=bn(A(o.Ga,o,u),xa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new ot(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Na(this,T,u),h=We(this.I),J(h,"RID",o),J(h,"CVER",22),this.D&&J(h,"X-HTTP-Session-Id",this.D),xn(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(Aa(R)))+"&"+u:this.m&&ns(h,this.m,R)),ts(this.h,T),this.Ua&&J(h,"TYPE","init"),this.P?(J(h,"$req",u),J(h,"SID","null"),T.T=!0,Ji(T,h,null)):Ji(T,h,u),this.G=2}}else this.G==3&&(o?Va(this,o):this.i.length==0||da(this.h)||Va(this))};function Va(o,u){var h;u?h=u.l:h=o.U++;const f=We(o.I);J(f,"SID",o.K),J(f,"RID",h),J(f,"AID",o.T),xn(o,f),o.m&&o.o&&ns(f,o.m,o.o),h=new ot(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Na(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ts(o.h,h),Ji(h,f,u)}function xn(o,u){o.H&&te(o.H,function(h,f){J(u,f,h)}),o.l&&ga({},function(h,f){J(u,f,h)})}function Na(o,u,h){h=Math.min(o.i.length,h);var f=o.l?A(o.l.Na,o.l,o):null;e:{var T=o.i;let R=-1;for(;;){const C=["count="+h];R==-1?0<h?(R=T[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let Q=!0;for(let ue=0;ue<h;ue++){let G=T[ue].g;const me=T[ue].map;if(G-=R,0>G)R=Math.max(0,T[ue].g-100),Q=!1;else try{Nd(me,C,"req"+G+"_")}catch{f&&f(me)}}if(Q){f=C.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function Oa(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Tn||zo(),wn||(Tn(),wn=!0),xi.add(u,o),o.v=0}}function is(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=bn(A(o.Fa,o),xa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,La(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=bn(A(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Cr(this),La(this))};function ss(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function La(o){o.g=new ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=We(o.qa);J(u,"RID","rpc"),J(u,"SID",o.K),J(u,"AID",o.T),J(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&J(u,"TO",o.ja),J(u,"TYPE","xmlhttp"),xn(o,u),o.m&&o.o&&ns(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Rr(We(u)),h.m=null,h.P=!0,ca(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Cr(this),is(this),Te(19))};function Dr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ma(o,u){var h=null;if(o.g==u){Dr(o),ss(o),o.g=null;var f=2}else if(es(o.h,u))h=u.D,pa(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var T=o.B;f=vr(),Ie(f,new ia(f,h)),kr(o)}else Oa(o);else if(T=u.s,T==3||T==0&&0<u.X||!(f==1&&xd(o,u)||f==2&&is(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),T){case 1:bt(o,5);break;case 4:bt(o,10);break;case 3:bt(o,6);break;default:bt(o,2)}}}function xa(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function bt(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),f=o.Xa;const T=!f;f=new Pt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wr(f,"https"),Rr(f),T?kd(f.toString(),h):Dd(f.toString(),h)}else Te(2);o.G=0,o.l&&o.l.sa(u),Fa(o),Da(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Fa(o){if(o.G=0,o.ka=[],o.l){const u=ma(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Ua(o,u,h){var f=h instanceof Pt?We(h):new Pt(h);if(f.g!="")u&&(f.g=u+"."+f.g),Ar(f,f.s);else{var T=c.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var R=new Pt(null);f&&wr(R,f),u&&(R.g=u),T&&Ar(R,T),h&&(R.l=h),f=R}return h=o.D,u=o.ya,h&&u&&J(f,h,u),J(f,"VER",o.la),xn(o,f),f}function Ba(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Z(new Sr({eb:h})):new Z(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qa(){}n=qa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vr(){}Vr.prototype.g=function(o,u){return new Se(o,u)};function Se(o,u){pe.call(this),this.g=new ka(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!W(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ht(this)}D(Se,pe),Se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Se.prototype.close=function(){rs(this.g)},Se.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Gi(o),o=h);u.i.push(new Ed(u.Ya++,o)),u.G==3&&kr(u)},Se.prototype.N=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,Se.aa.N.call(this)};function ja(o){Hi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}D(ja,Hi);function $a(){Ki.call(this),this.status=1}D($a,Ki);function Ht(o){this.g=o}D(Ht,qa),Ht.prototype.ua=function(){Ie(this.g,"a")},Ht.prototype.ta=function(o){Ie(this.g,new ja(o))},Ht.prototype.sa=function(o){Ie(this.g,new $a)},Ht.prototype.ra=function(){Ie(this.g,"b")},Vr.prototype.createWebChannel=Vr.prototype.g,Se.prototype.send=Se.prototype.o,Se.prototype.open=Se.prototype.m,Se.prototype.close=Se.prototype.close,Ul=function(){return new Vr},Fl=function(){return vr()},xl=Rt,Ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,zr=Er,sa.COMPLETE="complete",Ml=sa,ea.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Bn=ea,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Ll=Z}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});const kc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new gi("@firebase/firestore");function Qt(){return xt.logLevel}function N(n,...e){if(xt.logLevel<=B.DEBUG){const t=e.map(oo);xt.debug(`Firestore (${_n}): ${n}`,...t)}}function tt(n,...e){if(xt.logLevel<=B.ERROR){const t=e.map(oo);xt.error(`Firestore (${_n}): ${n}`,...t)}}function an(n,...e){if(xt.logLevel<=B.WARN){const t=e.map(oo);xt.warn(`Firestore (${_n}): ${n}`,...t)}}function oo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: `+n;throw tt(e),new Error(e)}function K(n,e){n||x()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class Y_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class J_{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xe,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xe)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new Bl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new ye(e)}}class X_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Z_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new X_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ty{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){K(this.o===void 0);const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new ey(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ny(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function cn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new se(0,0))}static max(){return new F(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Y extends Jn{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const ry=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Jn{construct(e,t,r){return new he(e,t,r)}static isValidIdentifier(e){return ry.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(Y.fromString(e))}static fromName(e){return new L(Y.fromString(e).popFirst(5))}static empty(){return new L(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new Y(e.slice()))}}function iy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new yt(i,L.empty(),e)}function sy(n){return new yt(n.readTime,n.key,-1)}class yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yt(F.min(),L.empty(),-1)}static max(){return new yt(F.max(),L.empty(),-1)}}function oy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==ay)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new b((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function uy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ti.oe=-1;function wi(n){return n==null}function si(n){return n===0&&1/n==-1/0}function ly(n){return typeof n=="number"&&Number.isInteger(n)&&!si(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dc(e)),e=dy(n.get(t),e);return Dc(e)}function dy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Dc(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.comparator=e,this.root=t||le.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mr(this.root,e,this.comparator,!0)}}class Mr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??le.RED,this.left=i??le.EMPTY,this.right=s??le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new le(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,s){return this}insert(e,t,r){return new le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new oe(he.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $l("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const fy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(K(!!n),typeof n=="string"){let e=0;const t=fy.exec(n);if(K(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Et(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ri(n){const e=n.mapValue.fields.__previous_value__;return Ai(e)?Ri(e):e}function Xn(n){const e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Zn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ai(n)?4:gy(n)?9007199254740991:my(n)?10:11:x()}function ze(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xn(n).isEqual(Xn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=vt(i.timestampValue),c=vt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Et(i.bytesValue).isEqual(Et(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ne(i.doubleValue),c=ne(s.doubleValue);return a===c?si(a)===si(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return cn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Vc(a)!==Vc(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!ze(a[l],c[l])))return!1;return!0}(n,e);default:return x()}}function er(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function un(n,e){if(n===e)return 0;const t=It(n),r=It(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ne(s.integerValue||s.doubleValue),l=ne(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Oc(n.timestampValue,e.timestampValue);case 4:return Oc(Xn(n),Xn(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Et(s),l=Et(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=j(c[d],l[d]);if(p!==0)return p}return j(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=j(ne(s.latitude),ne(a.latitude));return c!==0?c:j(ne(s.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Lc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,p;const y=s.fields||{},A=a.fields||{},P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,D=(l=A.value)===null||l===void 0?void 0:l.arrayValue,O=j(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Lc(P,D)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===xr.mapValue&&a===xr.mapValue)return 0;if(s===xr.mapValue)return 1;if(a===xr.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){const A=j(l[y],p[y]);if(A!==0)return A;const P=un(c[l[y]],d[p[y]]);if(P!==0)return P}return j(l.length,p.length)}(n.mapValue,e.mapValue);default:throw x()}}function Oc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=vt(n),r=vt(e),i=j(t.seconds,r.seconds);return i!==0?i:j(t.nanos,r.nanos)}function Lc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=un(t[i],r[i]);if(s)return s}return j(t.length,r.length)}function ln(n){return Vs(n)}function Vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Et(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Vs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Vs(t.fields[a])}`;return i+"}"}(n.mapValue):x()}function Gr(n){switch(It(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ri(n);return e?16+Gr(e):16;case 5:return 2*n.stringValue.length;case 6:return Et(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Gr(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Bt(r.fields,(s,a)=>{i+=s.length+Gr(a)}),i}(n.mapValue);default:throw x()}}function oi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ns(n){return!!n&&"integerValue"in n}function ao(n){return!!n&&"arrayValue"in n}function Mc(n){return!!n&&"nullValue"in n}function xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wr(n){return!!n&&"mapValue"in n}function my(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=he.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Wn(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new be(Wn(this.value))}}function zl(n){const e=[];return Bt(n.fields,(t,r)=>{const i=new he([t]);if(Wr(r)){const s=zl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ve(e,0,F.min(),F.min(),F.min(),be.empty(),0)}static newFoundDocument(e,t,r,i){return new ve(e,1,t,F.min(),r,i,0)}static newNoDocument(e,t){return new ve(e,2,t,F.min(),F.min(),be.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,F.min(),F.min(),be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=un(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function _y(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{}class ie extends Gl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vy(e,t,r):t==="array-contains"?new Ty(e,r):t==="in"?new wy(e,r):t==="not-in"?new Ay(e,r):t==="array-contains-any"?new Ry(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ey(e,r):new Iy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(un(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Le extends Gl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Le(e,t)}matches(e){return Wl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wl(n){return n.op==="and"}function Hl(n){return yy(n)&&Wl(n)}function yy(n){for(const e of n.filters)if(e instanceof Le)return!1;return!0}function Os(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+ln(n.value);if(Hl(n))return n.filters.map(e=>Os(e)).join(",");{const e=n.filters.map(t=>Os(t)).join(",");return`${n.op}(${e})`}}function Kl(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&ze(r.value,i.value)}(n,e):n instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Kl(a,i.filters[c]),!0):!1}(n,e):void x()}function Ql(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(n):n instanceof Le?function(t){return t.op.toString()+" {"+t.getFilters().map(Ql).join(" ,")+"}"}(n):"Filter"}class vy extends ie{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ey extends ie{constructor(e,t){super(e,"in",t),this.keys=Yl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Iy extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Yl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Ty extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ao(t)&&er(t.arrayValue,this.value)}}class wy extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&er(this.value.arrayValue,t)}}class Ay extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!er(this.value.arrayValue,t)}}class Ry extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>er(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function Bc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Sy(n,e,t,r,i,s,a)}function co(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Os(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ln(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ln(r)).join(",")),e.ue=t}return e.ue}function uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_y(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function Ls(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Py(n,e,t,r,i,s,a,c){return new qt(n,e,t,r,i,s,a,c)}function lo(n){return new qt(n)}function qc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ho(n){return n.collectionGroup!==null}function rn(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new oe(he.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new tr(s,r))}),t.has(he.keyField().canonicalString())||e.ce.push(new tr(he.keyField(),r))}return e.ce}function Be(n){const e=U(n);return e.le||(e.le=by(e,rn(n))),e.le}function by(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tr(i.field,s)});const t=n.endAt?new hn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hn(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ms(n,e){const t=n.filters.concat([e]);return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ai(n,e,t){return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Si(n,e){return uo(Be(n),Be(e))&&n.limitType===e.limitType}function Jl(n){return`${co(Be(n))}|lt:${n.limitType}`}function Yt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ql(i)).join(", ")}]`),wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ln(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ln(i)).join(",")),`Target(${r})`}(Be(n))}; limitType=${n.limitType})`}function Pi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of rn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const d=Fc(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,rn(r),i)||r.endAt&&!function(a,c,l){const d=Fc(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,rn(r),i))}(n,e)}function Cy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xl(n){return(e,t)=>{let r=!1;for(const i of rn(n)){const s=ky(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ky(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?un(l,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new X(L.comparator);function nt(){return Dy}const Zl=new X(L.comparator);function qn(...n){let e=Zl;for(const t of n)e=e.insert(t.key,t);return e}function eh(n){let e=Zl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dt(){return Hn()}function th(){return Hn()}function Hn(){return new jt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vy=new X(L.comparator),Ny=new oe(L.comparator);function q(...n){let e=Ny;for(const t of n)e=e.add(t);return e}const Oy=new oe(j);function Ly(){return Oy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:si(e)?"-0":e}}function nh(n){return{integerValue:""+n}}function My(n,e){return ly(e)?nh(e):fo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this._=void 0}}function xy(n,e,t){return n instanceof ci?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ai(s)&&(s=Ri(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof nr?ih(n,e):n instanceof rr?sh(n,e):function(i,s){const a=rh(i,s),c=jc(a)+jc(i.Pe);return Ns(a)&&Ns(i.Pe)?nh(c):fo(i.serializer,c)}(n,e)}function Fy(n,e,t){return n instanceof nr?ih(n,e):n instanceof rr?sh(n,e):t}function rh(n,e){return n instanceof ui?function(r){return Ns(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ci extends bi{}class nr extends bi{constructor(e){super(),this.elements=e}}function ih(n,e){const t=oh(e);for(const r of n.elements)t.some(i=>ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class rr extends bi{constructor(e){super(),this.elements=e}}function sh(n,e){let t=oh(e);for(const r of n.elements)t=t.filter(i=>!ze(i,r));return{arrayValue:{values:t}}}class ui extends bi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jc(n){return ne(n.integerValue||n.doubleValue)}function oh(n){return ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Uy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?cn(r.elements,i.elements,ze):r instanceof ui&&i instanceof ui?ze(r.Pe,i.Pe):r instanceof ci&&i instanceof ci}(n.transform,e.transform)}class By{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ci{}function ah(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new po(n.key,qe.none()):new lr(n.key,n.data,qe.none());{const t=n.data,r=be.empty();let i=new oe(he.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new $t(n.key,r,new Ve(i.toArray()),qe.none())}}function qy(n,e,t){n instanceof lr?function(i,s,a){const c=i.value.clone(),l=zc(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,s,a){if(!Hr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=zc(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(ch(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kn(n,e,t,r){return n instanceof lr?function(s,a,c,l){if(!Hr(s.precondition,a))return c;const d=s.value.clone(),p=Gc(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(s,a,c,l){if(!Hr(s.precondition,a))return c;const d=Gc(s.fieldTransforms,l,a),p=a.data;return p.setAll(ch(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,c){return Hr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function jy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=rh(r.transform,i||null);s!=null&&(t===null&&(t=be.empty()),t.set(r.field,s))}return t||null}function $c(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cn(r,i,(s,a)=>Uy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lr extends Ci{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends Ci{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ch(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zc(n,e,t){const r=new Map;K(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Fy(a,c,t[i]))}return r}function Gc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,xy(s,a,e))}return r}class po extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=th();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=ah(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&cn(this.mutations,e.mutations,(t,r)=>$c(t,r))&&cn(this.baseMutations,e.baseMutations,(t,r)=>$c(t,r))}}class mo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){K(e.mutations.length===r.length);let i=function(){return Vy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new mo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,$;function Hy(n){switch(n){default:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function uh(n){if(n===void 0)return tt("GRPC error has no .code"),S.UNKNOWN;switch(n){case re.OK:return S.OK;case re.CANCELLED:return S.CANCELLED;case re.UNKNOWN:return S.UNKNOWN;case re.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case re.INTERNAL:return S.INTERNAL;case re.UNAVAILABLE:return S.UNAVAILABLE;case re.UNAUTHENTICATED:return S.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case re.NOT_FOUND:return S.NOT_FOUND;case re.ALREADY_EXISTS:return S.ALREADY_EXISTS;case re.PERMISSION_DENIED:return S.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case re.ABORTED:return S.ABORTED;case re.OUT_OF_RANGE:return S.OUT_OF_RANGE;case re.UNIMPLEMENTED:return S.UNIMPLEMENTED;case re.DATA_LOSS:return S.DATA_LOSS;default:return x()}}($=re||(re={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Vt([4294967295,4294967295],0);function Wc(n){const e=Ky().encode(n),t=new Ol;return t.update(e),new Uint8Array(t.digest())}function Hc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vt([t,r],0),new Vt([i,s],0)]}class go{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jn(`Invalid padding: ${t}`);if(r<0)throw new jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Vt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Vt.fromNumber(r)));return i.compare(Qy)===1&&(i=new Vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wc(e),[r,i]=Hc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new go(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Wc(e),[r,i]=Hc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ki(F.min(),i,new X(j),nt(),q())}}class hr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hr(r,t,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class lh{constructor(e,t){this.targetId=e,this.me=t}}class hh{constructor(e,t,r=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Kc{constructor(){this.fe=0,this.ge=Qc(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=q(),t=q(),r=q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new hr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Qc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Yy{constructor(e){this.Le=e,this.Be=new Map,this.ke=nt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new X(j)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(Ls(s))if(r===0){const a=new L(s.path);this.We(t,a,ve.newNoDocument(a,F.min()))}else K(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Et(r).toUint8Array()}catch(l){if(l instanceof $l)return an("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new go(a,i,s)}catch(l){return an(l instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Ye(a);if(c){if(s.current&&Ls(c.target)){const l=new L(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,ve.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=q();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ki(e,t,this.Ke,this.ke,r);return this.ke=nt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new X(j),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Kc,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new oe(j),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new oe(j),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Kc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fr(){return new X(L.comparator)}function Qc(){return new X(L.comparator)}const Jy={asc:"ASCENDING",desc:"DESCENDING"},Xy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zy={and:"AND",or:"OR"};class ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xs(n,e){return n.useProto3Json||wi(e)?e:{value:e}}function li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tv(n,e){return li(n,e.toTimestamp())}function je(n){return K(!!n),F.fromTimestamp(function(t){const r=vt(t);return new se(r.seconds,r.nanos)}(n))}function _o(n,e){return Fs(n,e).canonicalString()}function Fs(n,e){const t=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fh(n){const e=Y.fromString(n);return K(yh(e)),e}function Us(n,e){return _o(n.databaseId,e.path)}function _s(n,e){const t=fh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(mh(t))}function ph(n,e){return _o(n.databaseId,e)}function nv(n){const e=fh(n);return e.length===4?Y.emptyPath():mh(e)}function Bs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mh(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yc(n,e,t){return{name:Us(n,e),fields:t.value.mapValue.fields}}function rv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string"),de.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array),de.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?S.UNKNOWN:uh(d.code);return new V(p,d.message||"")}(a);t=new hh(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_s(n,r.document.name),s=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):F.min(),c=new be({mapValue:{fields:r.document.fields}}),l=ve.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Kr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_s(n,r.document),s=r.readTime?je(r.readTime):F.min(),a=ve.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Kr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_s(n,r.document),s=r.removedTargetIds||[];t=new Kr([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Wy(i,s),c=r.targetId;t=new lh(c,a)}}return t}function iv(n,e){let t;if(e instanceof lr)t={update:Yc(n,e.key,e.value)};else if(e instanceof po)t={delete:Us(n,e.key)};else if(e instanceof $t)t={update:Yc(n,e.key,e.data),updateMask:fv(e.fieldMask)};else{if(!(e instanceof $y))return x();t={verify:Us(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof ci)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ui)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:tv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x()}(n,e.precondition)),t}function sv(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?je(i.updateTime):je(s);return a.isEqual(F.min())&&(a=je(s)),new By(a,i.transformResults||[])}(t,e))):[]}function ov(n,e){return{documents:[ph(n,e.path)]}}function av(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ph(n,i);const s=function(d){if(d.length!==0)return _h(Le.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Jt(A.field),direction:lv(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=xs(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function cv(n){let e=nv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){K(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(y){const A=gh(y);return A instanceof Le&&Hl(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(A=>function(D){return new tr(Xt(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(y){let A;return A=typeof y=="object"?y.value:y,wi(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(y){const A=!!y.before,P=y.values||[];return new hn(P,A)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const A=!y.before,P=y.values||[];return new hn(P,A)}(t.endAt)),Py(e,i,a,s,c,"F",l,d)}function uv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xt(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xt(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Xt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Le.create(t.compositeFilter.filters.map(r=>gh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function lv(n){return Jy[n]}function hv(n){return Xy[n]}function dv(n){return Zy[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function Xt(n){return he.fromServerFormat(n.fieldPath)}function _h(n){return n instanceof ie?function(t){if(t.op==="=="){if(xc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(Mc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(Mc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:hv(t.op),value:t.value}}}(n):n instanceof Le?function(t){const r=t.getFilters().map(i=>_h(i));return r.length===1?r[0]:{compositeFilter:{op:dv(t.op),filters:r}}}(n):x()}function fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,s=F.min(),a=F.min(),c=de.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.ht=e}}function mv(n){const e=cv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ai(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.ln=new _v}addToCollectionParentIndex(e,t){return this.ln.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(yt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(yt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class _v{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new oe(Y.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class we{static withCacheSize(e){return new we(e,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(41943040,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new dn(0)}static Qn(){return new dn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc([n,e],[t,r]){const i=j(n,t);return i===0?j(e,r):i}class yv{constructor(e){this.Gn=e,this.buffer=new oe(Xc),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vn(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Yn(3e5)})}}class Ev{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ti.oe);const r=new yv(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Jc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(s=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Qt()<=B.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:y})))}}function Iv(n,e){return new Ev(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Kn(r.mutation,i,Ve.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=q()){const i=Dt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=qn();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Dt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=nt();const a=Hn(),c=function(){return Hn()}();return t.forEach((l,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof $t)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),se.now())):a.set(d.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return c.set(d,new wv(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Hn();let i=new X((a,c)=>a-c),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Ve.empty();p=c.applyToLocalView(d,p),r.set(l,p);const y=(i.get(c.batchId)||q()).add(l);i=i.insert(c.batchId,y)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,y=th();p.forEach(A=>{if(!s.has(A)){const P=ah(t.get(A),r.get(A));P!==null&&y.set(A,P),s=s.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ho(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(Dt());let c=-1,l=s;return a.next(d=>b.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),s.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{l=l.insert(p,A)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,q())).next(p=>({batchId:c,changes:eh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=qn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,s).next(c=>b.forEach(c,l=>{const d=function(y,A){return new qt(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ve.newInvalidDocument(p)))});let c=qn();return a.forEach((l,d)=>{const p=s.get(l);p!==void 0&&Kn(p.mutation,d,Ve.empty(),se.now()),Pi(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return b.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:je(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:mv(i.bundledQuery),readTime:je(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.overlays=new X(L.comparator),this.Er=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dt();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Dt(),s=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new X((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Dt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Dt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return b.resolve(c)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gy(t,r));let s=this.Er.get(t);s===void 0&&(s=q(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.dr=new oe(ae.Ar),this.Rr=new oe(ae.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new ae(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ae(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new L(new Y([])),r=new ae(t,e),i=new ae(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new L(new Y([])),r=new ae(t,e),i=new ae(t,e+1);let s=q();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ae(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return L.comparator(e.key,t.key)||j(e.br,t.br)}static Vr(e,t){return j(e.br,t.br)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new oe(ae.Ar)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zy(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new ae(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const c=this.Cr(a.br);s.push(c)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(j);return t.forEach(i=>{const s=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),b.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const a=new ae(new L(s),0);let c=new oe(j);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.br)),!0)},a),b.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){K(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return b.forEach(t.mutations,i=>{const s=new ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new ae(t,0),i=this.vr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.Nr=e,this.docs=function(){return new X(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=nt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=nt();const a=t.path,c=new L(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||oy(sy(p),r)<=0||(i.has(p.key)||Pi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){x()}Lr(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new kv(this)}getSize(e){return b.resolve(this.size)}}class kv extends Tv{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.persistence=e,this.Br=new jt(t=>co(t),uo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new yo,this.targetCount=0,this.Qr=dn.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),b.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new dn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Un(t),b.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ti(0),this.Ur=!1,this.Ur=!0,this.Wr=new Pv,this.referenceDelegate=e(this),this.Gr=new Dv(this),this.indexManager=new gv,this.remoteDocumentCache=function(i){return new Cv(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new pv(t),this.jr=new Rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new bv(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Vv(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return b.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class Vv extends cy{constructor(e){super(),this.currentSequenceNumber=e}}class vo{constructor(e){this.persistence=e,this.Zr=new yo,this.Xr=null}static ei(e){return new vo(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),b.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ti,r=>{const i=L.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,F.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return b.or([()=>b.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class hi{constructor(e,t){this.persistence=e,this.ri=new jt(r=>hy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Iv(this,t)}static ei(e,t){return new hi(e,t)}Hr(){}Jr(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return b.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,F.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),b.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gr(e.data.value)),t}ir(e,t,r){return b.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=q(),i=q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Eo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Zd()?8:uy(Ee())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Nv;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Qt()<=B.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),b.resolve()):(Qt()<=B.DEBUG&&N("QueryEngine","Query:",Yt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Qt()<=B.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):b.resolve())}Xi(e,t){if(qc(t))return b.resolve(null);let r=Be(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ai(t,null,"F"),r=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=q(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,ai(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return qc(t)||i.isEqual(F.min())?b.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?b.resolve(null):(Qt()<=B.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yt(t)),this.os(e,a,t,iy(i,-1)).next(c=>c))})}rs(e,t){let r=new oe(Xl(e));return t.forEach((i,s)=>{Pi(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Qt()<=B.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Yt(t)),this.Zi.getDocumentsMatchingQuery(e,t,yt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new X(j),this.cs=new jt(s=>co(s),uo),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Av(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Mv(n,e,t,r){return new Lv(n,e,t,r)}async function Eh(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=q();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function xv(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const y=d.batch,A=y.keys();let P=b.resolve();return A.forEach(D=>{P=P.next(()=>p.getEntry(l,D)).next(O=>{const k=d.docVersions.get(D);K(k!==null),O.version.compareTo(k)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ih(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Fv(n,e){const t=U(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((p,y)=>{const A=i.get(y);if(!A)return;c.push(t.Gr.removeMatchingKeys(s,p.removedDocuments,y).next(()=>t.Gr.addMatchingKeys(s,p.addedDocuments,y)));let P=A.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(de.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(y,P),function(O,k,z){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(A,P,p)&&c.push(t.Gr.updateTargetData(s,P))});let l=nt(),d=q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(Uv(s,a,e.documentUpdates).next(p=>{l=p.Is,d=p.Es})),!r.isEqual(F.min())){const p=t.Gr.getLastRemoteSnapshotVersion(s).next(y=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return b.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function Uv(n,e,t){let r=q(),i=q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=nt();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function Bv(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qv(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new pt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function qs(n,e,t){const r=U(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!vn(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Zc(n,e,t){const r=U(n);let i=F.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const y=U(l),A=y.cs.get(p);return A!==void 0?b.resolve(y.us.get(A)):y.Gr.getTargetData(d,p)}(r,a,Be(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?s:q())).next(c=>(jv(r,Cy(e),c),{documents:c,ds:s})))}function jv(n,e,t){let r=n.ls.get(e)||F.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class eu{constructor(){this.activeTargetIds=Ly()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $v{constructor(){this._o=new eu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new eu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur=null;function ys(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection";class Hv extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const c=ys(),l=this.No(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(p=>(N("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw an("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_n}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=Gv[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const s=ys();return new Promise((a,c)=>{const l=new Ll;l.setWithCredentials(!0),l.listenOnce(Ml.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zr.NO_ERROR:const p=l.getResponseJson();N(_e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case zr.TIMEOUT:N(_e,`RPC '${e}' ${s} timed out`),c(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const y=l.getStatus();if(N(_e,`RPC '${e}' ${s} failed with status:`,y,"response text:",l.getResponseText()),y>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const D=function(k){const z=k.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(P.status);c(new V(D,P.message))}else c(new V(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new V(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N(_e,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);N(_e,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){const i=ys(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ul(),c=Fl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=s.join("");N(_e,`Creating RPC '${e}' stream ${i}: ${p}`,l);const y=a.createWebChannel(p,l);let A=!1,P=!1;const D=new Wv({Eo:k=>{P?N(_e,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(A||(N(_e,`Opening RPC '${e}' stream ${i} transport.`),y.open(),A=!0),N(_e,`RPC '${e}' stream ${i} sending:`,k),y.send(k))},Ao:()=>y.close()}),O=(k,z,W)=>{k.listen(z,H=>{try{W(H)}catch(ee){setTimeout(()=>{throw ee},0)}})};return O(y,Bn.EventType.OPEN,()=>{P||(N(_e,`RPC '${e}' stream ${i} transport opened.`),D.So())}),O(y,Bn.EventType.CLOSE,()=>{P||(P=!0,N(_e,`RPC '${e}' stream ${i} transport closed`),D.Do())}),O(y,Bn.EventType.ERROR,k=>{P||(P=!0,an(_e,`RPC '${e}' stream ${i} transport errored:`,k),D.Do(new V(S.UNAVAILABLE,"The operation could not be completed")))}),O(y,Bn.EventType.MESSAGE,k=>{var z;if(!P){const W=k.data[0];K(!!W);const H=W,ee=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(ee){N(_e,`RPC '${e}' stream ${i} received error:`,ee);const Pe=ee.status;let te=function(_){const v=re[_];if(v!==void 0)return uh(v)}(Pe),E=ee.message;te===void 0&&(te=S.INTERNAL,E="Unknown error status: "+Pe+" with message "+ee.message),P=!0,D.Do(new V(te,E)),y.close()}else N(_e,`RPC '${e}' stream ${i} received:`,W),D.vo(W)}}),O(c,xl.STAT_EVENT,k=>{k.stat===Ds.PROXY?N(_e,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Ds.NOPROXY&&N(_e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return new ev(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Th(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kv extends wh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=rv(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?je(a.readTime):F.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Bs(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=Ls(l)?{documents:ov(s,l)}:{query:av(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dh(s,a.resumeToken);const d=xs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=li(s,a.snapshotVersion.toTimestamp());const d=xs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=uv(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Bs(this.serializer),t.removeTarget=e,this.c_(t)}}class Qv extends wh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return K(!!e.streamToken),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=sv(e.writeResults,e.commitTime),r=je(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Bs(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>iv(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Fs(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(S.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Fs(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Jv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tt(t),this.C_=!1):N("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{zt(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=U(l);d.k_.add(4),await dr(d),d.K_.set("Unknown"),d.k_.delete(4),await Vi(d)}(this))})}),this.K_=new Jv(r,i)}}async function Vi(n){if(zt(n))for(const e of n.q_)await e(!0)}async function dr(n){for(const e of n.q_)await e(!1)}function Ah(n,e){const t=U(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Ao(t)?wo(t):En(t).s_()&&To(t,e))}function Io(n,e){const t=U(n),r=En(t);t.B_.delete(e),r.s_()&&Rh(t,e),t.B_.size===0&&(r.s_()?r.a_():zt(t)&&t.K_.set("Unknown"))}function To(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}En(n).V_(e)}function Rh(n,e){n.U_.xe(e),En(n).m_(e)}function wo(n){n.U_=new Yy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),En(n).start(),n.K_.F_()}function Ao(n){return zt(n)&&!En(n).i_()&&n.B_.size>0}function zt(n){return U(n).k_.size===0}function Sh(n){n.U_=void 0}async function Zv(n){n.K_.set("Online")}async function eE(n){n.B_.forEach((e,t)=>{To(n,e)})}async function tE(n,e){Sh(n),Ao(n)?(n.K_.O_(e),wo(n)):n.K_.set("Unknown")}async function nE(n,e,t){if(n.K_.set("Online"),e instanceof hh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await di(n,r)}else if(e instanceof Kr?n.U_.$e(e):e instanceof lh?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(F.min()))try{const r=await Ih(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.B_.get(d);p&&s.B_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=s.B_.get(l);if(!p)return;s.B_.set(l,p.withResumeToken(de.EMPTY_BYTE_STRING,p.snapshotVersion)),Rh(s,l);const y=new pt(p.target,l,d,p.sequenceNumber);To(s,y)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await di(n,r)}}async function di(n,e,t){if(!vn(e))throw e;n.k_.add(1),await dr(n),n.K_.set("Offline"),t||(t=()=>Ih(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Vi(n)})}function Ph(n,e){return e().catch(t=>di(n,t,e))}async function Ni(n){const e=U(n),t=Tt(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;rE(e);)try{const i=await Bv(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,iE(e,i)}catch(i){await di(e,i)}bh(e)&&Ch(e)}function rE(n){return zt(n)&&n.L_.length<10}function iE(n,e){n.L_.push(e);const t=Tt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function bh(n){return zt(n)&&!Tt(n).i_()&&n.L_.length>0}function Ch(n){Tt(n).start()}async function sE(n){Tt(n).w_()}async function oE(n){const e=Tt(n);for(const t of n.L_)e.g_(t.mutations)}async function aE(n,e,t){const r=n.L_.shift(),i=mo.from(r,e,t);await Ph(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ni(n)}async function cE(n,e){e&&Tt(n).f_&&await async function(r,i){if(function(a){return Hy(a)&&a!==S.ABORTED}(i.code)){const s=r.L_.shift();Tt(r).__(),await Ph(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ni(r)}}(n,e),bh(n)&&Ch(n)}async function nu(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=zt(t);t.k_.add(3),await dr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Vi(t)}async function uE(n,e){const t=U(n);e?(t.k_.delete(2),await Vi(t)):e||(t.k_.add(2),await dr(t),t.K_.set("Unknown"))}function En(n){return n.W_||(n.W_=function(t,r,i){const s=U(t);return s.b_(),new Kv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Zv.bind(null,n),mo:eE.bind(null,n),po:tE.bind(null,n),R_:nE.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Ao(n)?wo(n):n.K_.set("Unknown")):(await n.W_.stop(),Sh(n))})),n.W_}function Tt(n){return n.G_||(n.G_=function(t,r,i){const s=U(t);return s.b_(),new Qv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:sE.bind(null,n),po:cE.bind(null,n),p_:oE.bind(null,n),y_:aE.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ni(n)):(await n.G_.stop(),n.L_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Ro(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(n,e){if(tt("AsyncQueue",`${e}: ${n}`),vn(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{static emptySet(e){return new sn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=qn(),this.sortedSet=new X(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.z_=new X(L.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class fn{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new fn(e,t,sn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class hE{constructor(){this.queries=iu(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=U(t),s=i.queries;i.queries=iu(),s.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function iu(){return new jt(n=>Jl(n),Si)}async function kh(n,e){const t=U(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new lE,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=So(a,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Po(t)}async function Dh(n,e){const t=U(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dE(n,e){const t=U(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&Po(t)}function fE(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function Po(n){n.X_.forEach(e=>{e.next()})}var js,su;(su=js||(js={})).na="default",su.Cache="cache";class Vh{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.key=e}}class Oh{constructor(e){this.key=e}}class pE{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=q(),this.mutatedKeys=q(),this.Va=Xl(e),this.ma=new sn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new ru,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const A=i.get(p),P=Pi(this.query,y)?y:null,D=!!A&&this.mutatedKeys.has(A.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let k=!1;A&&P?A.data.isEqual(P.data)?D!==O&&(r.track({type:3,doc:P}),k=!0):this.ya(A,P)||(r.track({type:2,doc:P}),k=!0,(l&&this.Va(P,l)>0||d&&this.Va(P,d)<0)&&(c=!0)):!A&&P?(r.track({type:0,doc:P}),k=!0):A&&!P&&(r.track({type:1,doc:A}),k=!0,(l||d)&&(c=!0)),k&&(P?(a=a.add(P),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((p,y)=>function(P,D){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(P)-O(D)}(p.type,y.type)||this.Va(p.doc,y.doc)),this.wa(r),i=i!=null&&i;const c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new fn(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ru,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=q(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Oh(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Nh(r))}),t}va(e){this.da=e.ds,this.Ra=q();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return fn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class mE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gE{constructor(e){this.key=e,this.Fa=!1}}class _E{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new jt(c=>Jl(c),Si),this.Oa=new Map,this.Na=new Set,this.La=new X(L.comparator),this.Ba=new Map,this.ka=new yo,this.qa={},this.Qa=new Map,this.Ka=dn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function yE(n,e,t=!0){const r=Bh(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Lh(r,e,t,!0),i}async function vE(n,e){const t=Bh(n);await Lh(t,e,!0,!1)}async function Lh(n,e,t,r){const i=await qv(n.localStore,Be(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await EE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ah(n.remoteStore,i),c}async function EE(n,e,t,r,i){n.Ua=(y,A,P)=>async function(O,k,z,W){let H=k.view.ga(z);H.ss&&(H=await Zc(O.localStore,k.query,!1).then(({documents:E})=>k.view.ga(E,H)));const ee=W&&W.targetChanges.get(k.targetId),Pe=W&&W.targetMismatches.get(k.targetId)!=null,te=k.view.applyChanges(H,O.isPrimaryClient,ee,Pe);return au(O,k.targetId,te.ba),te.snapshot}(n,y,A,P);const s=await Zc(n.localStore,e,!0),a=new pE(e,s.ds),c=a.ga(s.documents),l=hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);au(n,t,d.ba);const p=new mE(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function IE(n,e,t){const r=U(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!Si(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Io(r.remoteStore,i.targetId),$s(r,i.targetId)}).catch(yn)):($s(r,i.targetId),await qs(r.localStore,i.targetId,!0))}async function TE(n,e){const t=U(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Io(t.remoteStore,r.targetId))}async function wE(n,e,t){const r=kE(n);try{const i=await function(a,c){const l=U(a),d=se.now(),p=c.reduce((P,D)=>P.add(D.key),q());let y,A;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=nt(),O=q();return l.hs.getEntries(P,p).next(k=>{D=k,D.forEach((z,W)=>{W.isValidDocument()||(O=O.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,D)).next(k=>{y=k;const z=[];for(const W of c){const H=jy(W,y.get(W.key).overlayedDocument);H!=null&&z.push(new $t(W.key,H,zl(H.value.mapValue),qe.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,z,c)}).next(k=>{A=k;const z=k.applyToLocalDocumentSet(y,O);return l.documentOverlayCache.saveOverlays(P,k.batchId,z)})}).then(()=>({batchId:A.batchId,changes:eh(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new X(j)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await fr(r,i.changes),await Ni(r.remoteStore)}catch(i){const s=So(i,"Failed to persist write");t.reject(s)}}async function Mh(n,e){const t=U(n);try{const r=await Fv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?K(a.Fa):i.removedDocuments.size>0&&(K(a.Fa),a.Fa=!1))}),await fr(t,r,e)}catch(r){await yn(r)}}function ou(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=U(a);l.onlineState=c;let d=!1;l.queries.forEach((p,y)=>{for(const A of y.J_)A.ea(c)&&(d=!0)}),d&&Po(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AE(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),s=i&&i.key;if(s){let a=new X(L.comparator);a=a.insert(s,ve.newNoDocument(s,F.min()));const c=q().add(s),l=new ki(F.min(),new Map,new X(j),a,c);await Mh(r,l),r.La=r.La.remove(s),r.Ba.delete(e),bo(r)}else await qs(r.localStore,e,!1).then(()=>$s(r,e,t)).catch(yn)}async function RE(n,e){const t=U(n),r=e.batch.batchId;try{const i=await xv(t.localStore,e);Fh(t,r,null),xh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fr(t,i)}catch(i){await yn(i)}}async function SE(n,e,t){const r=U(n);try{const i=await function(a,c){const l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>(K(y!==null),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Fh(r,e,t),xh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fr(r,i)}catch(i){await yn(i)}}function xh(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Fh(n,e,t){const r=U(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function $s(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Uh(n,r)})}function Uh(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Io(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),bo(n))}function au(n,e,t){for(const r of t)r instanceof Nh?(n.ka.addReference(r.key,e),PE(n,r)):r instanceof Oh?(N("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Uh(n,r.key)):x()}function PE(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(N("SyncEngine","New document in limbo: "+t),n.Na.add(r),bo(n))}function bo(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new L(Y.fromString(e)),r=n.Ka.next();n.Ba.set(r,new gE(t)),n.La=n.La.insert(t,r),Ah(n.remoteStore,new pt(Be(lo(t.path)),r,"TargetPurposeLimboResolution",Ti.oe))}}async function fr(n,e,t){const r=U(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);const y=Eo.zi(l.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){const p=U(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>b.forEach(d,A=>b.forEach(A.Wi,P=>p.persistence.referenceDelegate.addReference(y,A.targetId,P)).next(()=>b.forEach(A.Gi,P=>p.persistence.referenceDelegate.removeReference(y,A.targetId,P)))))}catch(y){if(!vn(y))throw y;N("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const P=p.us.get(A),D=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(D);p.us=p.us.insert(A,O)}}}(r.localStore,s))}async function bE(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await Eh(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new V(S.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fr(t,r.Ts)}}function CE(n,e){const t=U(n),r=t.Ba.get(e);if(r&&r.Fa)return q().add(r.key);{let i=q();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function Bh(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AE.bind(null,e),e.Ma.R_=dE.bind(null,e.eventManager),e.Ma.Wa=fE.bind(null,e.eventManager),e}function kE(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SE.bind(null,e),e}class fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Mv(this.persistence,new Ov,e.initialUser,this.serializer)}ja(e){return new vh(vo.ei,this.serializer)}za(e){return new $v}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fi.provider={build:()=>new fi};class DE extends fi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){K(this.persistence.referenceDelegate instanceof hi);const r=this.persistence.referenceDelegate.garbageCollector;return new vv(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new vh(r=>hi.ei(r,t),this.serializer)}}class zs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ou(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bE.bind(null,this.syncEngine),await uE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hE}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),r=function(s){return new Hv(s)}(e.databaseInfo);return function(s,a,c,l){return new Yv(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new Xv(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ou(this.syncEngine,t,0),function(){return tu.p()?new tu:new zv}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,p){const y=new _E(i,s,a,c,l,d);return p&&(y.$a=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=U(i);N("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await dr(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zs.provider={build:()=>new zs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=So(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Es(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Eh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NE(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>nu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>nu(e.remoteStore,i)),n._onlineComponents=e}async function NE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Es(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;an("Error using user provided cache. Falling back to memory cache: "+t),await Es(n,new fi)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Es(n,new DE(void 0));return n._offlineComponents}async function jh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await cu(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await cu(n,new zs))),n._onlineComponents}function OE(n){return jh(n).then(e=>e.syncEngine)}async function $h(n){const e=await jh(n),t=e.eventManager;return t.onListen=yE.bind(null,e.syncEngine),t.onUnlisten=IE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TE.bind(null,e.syncEngine),t}function LE(n,e,t={}){const r=new Xe;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const p=new qh({next:A=>{p.eu(),a.enqueueAndForget(()=>Dh(s,y));const P=A.docs.has(c);!P&&A.fromCache?d.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&l&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Vh(lo(c.path),p,{includeMetadataChanges:!0,ua:!0});return kh(s,y)}(await $h(n),n.asyncQueue,e,t,r)),r.promise}function ME(n,e,t={}){const r=new Xe;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const p=new qh({next:A=>{p.eu(),a.enqueueAndForget(()=>Dh(s,y)),A.fromCache&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Vh(c,p,{includeMetadataChanges:!0,ua:!0});return kh(s,y)}(await $h(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xE(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lu(n){if(!L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hu(n){if(L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function wt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oi(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Li{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new du({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new du(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Q_;switch(r.type){case"firstParty":return new Z_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=uu.get(t);r&&(N("ComponentProvider","Removing Datastore"),uu.delete(t),r.terminate())}(this),Promise.resolve()}}function FE(n,e,t,r={}){var i;const s=(n=wt(n,Li))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ye.MOCK_USER;else{c=Hd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ye(d)}n._authCredentials=new Y_(new Bl(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new it(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class _t extends it{constructor(e,t,r){super(e,t,lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new L(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function lI(n,e,...t){if(n=ce(n),Gh("collection","path",e),n instanceof Li){const r=Y.fromString(e,...t);return hu(r),new _t(n,null,r)}{if(!(n instanceof Re||n instanceof _t))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return hu(r),new _t(n.firestore,null,r)}}function hI(n,e,...t){if(n=ce(n),arguments.length===1&&(e=ql.newId()),Gh("doc","path",e),n instanceof Li){const r=Y.fromString(e,...t);return lu(r),new Re(n,null,new L(r))}{if(!(n instanceof Re||n instanceof _t))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return lu(r),new Re(n.firestore,n instanceof _t?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Th(this,"async_queue_retry"),this.fu=()=>{const r=vs();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Xe;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!vn(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Ro.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class pr extends Li{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new fu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fu(e),this._firestoreClient=void 0,await e}}}function dI(n,e){const t=bu(),r="(default)",i=sr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gd("firestore");s&&FE(i,...s)}return i}function Co(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UE(n),n._firestoreClient}function UE(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,d,p){return new py(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,zh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new VE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(de.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=/^__.*__$/;class qE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}function Hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class No{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new No(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return pi(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Hh(this.Mu)&&BE.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class jE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Di(e)}$u(e,t,r,i=!1){return new No({Mu:e,methodName:t,Ku:r,path:he.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new jE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $E(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Jh("Data must be an object, but it was:",a,r);const c=Qh(r,a);let l,d;if(s.merge)l=new Ve(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const y of s.mergeFields){const A=zE(e,y,t);if(!a.contains(A))throw new V(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);WE(p,A)||p.push(A)}l=new Ve(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new qE(new be(c),l,d)}function Kh(n,e,t,r=!1){return Lo(t,n.$u(r?4:3,e))}function Lo(n,e){if(Yh(n=ce(n)))return Jh("Unsupported field value:",e,n),Qh(n,e);if(n instanceof Wh)return function(r,i){if(!Hh(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=Lo(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return My(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:li(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:li(i.serializer,s)}}if(r instanceof Do)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:dh(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_o(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return fo(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Oi(r)}`)}(n,e)}function Qh(n,e){const t={};return jl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,i)=>{const s=Lo(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Yh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Do||n instanceof pn||n instanceof Re||n instanceof Wh||n instanceof Vo)}function Jh(n,e,t){if(!Yh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Oi(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function zE(n,e,t){if((e=ce(e))instanceof ko)return e._internalPath;if(typeof e=="string")return Xh(n,e);throw pi("Field path arguments must be of type string or ",n,!1,void 0,t)}const GE=new RegExp("[~\\*/\\[\\]]");function Xh(n,e,t){if(e.search(GE)>=0)throw pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ko(...e.split("."))._internalPath}catch{throw pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new V(S.INVALID_ARGUMENT,c+n+l)}function WE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HE extends Mo{data(){return super.data()}}function xo(n,e){return typeof e=="string"?Xh(n,e):e instanceof ko?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fo{}class Mi extends Fo{}function fI(n,e,...t){let r=[];e instanceof Fo&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof Bo).length,c=s.filter(l=>l instanceof Uo).length;if(a>1||a>0&&c>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Uo extends Mi{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Uo(e,t,r)}_apply(e){const t=this._parse(e);return Zh(e._query,t),new it(e.firestore,e.converter,Ms(e._query,t))}_parse(e){const t=Oo(e.firestore);return function(s,a,c,l,d,p,y){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){mu(y,p);const P=[];for(const D of y)P.push(pu(l,s,D));A={arrayValue:{values:P}}}else A=pu(l,s,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||mu(y,p),A=Kh(c,a,y,p==="in"||p==="not-in");return ie.create(d,p,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bo extends Fo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const l of c)Zh(a,l),a=Ms(a,l)}(e._query,t),new it(e.firestore,e.converter,Ms(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qo extends Mi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qo(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tr(s,a)}(e._query,this._field,this._direction);return new it(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new qt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function pI(n,e="asc"){const t=e,r=xo("orderBy",n);return qo._create(r,t)}class jo extends Mi{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new jo(e,t,r)}_apply(e){return new it(e.firestore,e.converter,ai(e._query,this._limit,this._limitType))}}function mI(n){return jo._create("limit",n,"F")}class $o extends Mi{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $o(e,t,r)}_apply(e){const t=QE(e,this.type,this._docOrFields,this._inclusive);return new it(e.firestore,e.converter,function(i,s){return new qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function gI(...n){return $o._create("startAfter",n,!1)}function QE(n,e,t,r){if(t[0]=ce(t[0]),t[0]instanceof Mo)return function(s,a,c,l,d){if(!l)throw new V(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const p=[];for(const y of rn(s))if(y.field.isKeyField())p.push(oi(a,l.key));else{const A=l.data.field(y.field);if(Ai(A))throw new V(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+y.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const P=y.field.canonicalString();throw new V(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}p.push(A)}return new hn(p,d)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Oo(n.firestore);return function(a,c,l,d,p,y){const A=a.explicitOrderBy;if(p.length>A.length)throw new V(S.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let D=0;D<p.length;D++){const O=p[D];if(A[D].field.isKeyField()){if(typeof O!="string")throw new V(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof O}`);if(!ho(a)&&O.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${O}' contains a slash.`);const k=a.path.child(Y.fromString(O));if(!L.isDocumentKey(k))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const z=new L(k);P.push(oi(c,z))}else{const k=Kh(l,d,O);P.push(k)}}return new hn(P,y)}(n._query,n.firestore._databaseId,i,e,t,r)}}function pu(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ho(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Y.fromString(t));if(!L.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oi(n,new L(r))}if(t instanceof Re)return oi(n,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oi(t)}.`)}function mu(n,e){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zh(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class YE{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ne(a.doubleValue));return new Vo(s)}convertGeoPoint(e){return new Do(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ri(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xn(e));default:return null}}convertTimestamp(e){const t=vt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);K(yh(r));const i=new Zn(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Mo{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Qr extends ed{data(e={}){return super.data(e)}}class XE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qr(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new Qr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Qr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:ZE(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ZE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){n=wt(n,Re);const e=wt(n.firestore,pr);return LE(Co(e),n._key).then(t=>eI(e,n,t))}class td extends YE{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function yI(n){n=wt(n,it);const e=wt(n.firestore,pr),t=Co(e),r=new td(e);return KE(n._query),ME(t,n._query).then(i=>new XE(e,r,n,i))}function vI(n,e,t){n=wt(n,Re);const r=wt(n.firestore,pr),i=JE(n.converter,e);return nd(r,[$E(Oo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,qe.none())])}function EI(n){return nd(wt(n.firestore,pr),[new po(n._key,qe.none())])}function nd(n,e){return function(r,i){const s=new Xe;return r.asyncQueue.enqueueAndForget(async()=>wE(await OE(r),i,s)),s.promise}(Co(n),e)}function eI(n,e,t){const r=t.docs.get(e._key),i=new td(n);return new ed(n,i,e._key,r,new $n(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){_n=i})(mn),$e(new Ne("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new pr(new J_(r.getProvider("auth-internal")),new ty(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ce(kc,"4.7.5",e),Ce(kc,"4.7.5","esm2017")})();export{dI as a,sI as b,tI as c,hI as d,_I as e,vI as f,oI as g,EI as h,lp as i,lI as j,pI as k,gI as l,mI as m,yI as n,iI as o,fI as q,nI as s,rI as u};
//# sourceMappingURL=vendor-CwnuWi2a.js.map
