var Jd=Object.defineProperty;var Qd=(i,t,e)=>t in i?Jd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Q=(i,t,e)=>Qd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="170",tu=0,Ec=1,eu=2,vh=1,Mh=2,vn=3,$n=0,be=1,An=2,zn=0,Hi=1,Sc=2,xc=3,vc=4,nu=5,ai=100,iu=101,su=102,ru=103,au=104,ou=200,cu=201,lu=202,hu=203,za=204,Va=205,du=206,uu=207,fu=208,_u=209,pu=210,mu=211,gu=212,Eu=213,Su=214,Wa=0,Ya=1,Ka=2,Ki=3,$a=4,Xa=5,qa=6,Za=7,Ah=0,xu=1,vu=2,Vn=0,Mu=1,Au=2,Ru=3,Rh=4,yu=5,Tu=6,wu=7,yh=300,$i=301,Xi=302,ja=303,Ja=304,Dr=306,Qa=1e3,ci=1001,to=1002,je=1003,bu=1004,Vs=1005,on=1006,Kr=1007,li=1008,Cn=1009,Th=1010,wh=1011,Rs=1012,zo=1013,fi=1014,yn=1015,Is=1016,Vo=1017,Wo=1018,qi=1020,bh=35902,Ch=1021,Ph=1022,Ze=1023,Uh=1024,Ih=1025,zi=1026,Zi=1027,Dh=1028,Yo=1029,Lh=1030,Ko=1031,$o=1033,Sr=33776,xr=33777,vr=33778,Mr=33779,eo=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,co=37808,lo=37809,ho=37810,uo=37811,fo=37812,_o=37813,po=37814,mo=37815,go=37816,Eo=37817,So=37818,xo=37819,vo=37820,Mo=37821,Ar=36492,Ao=36494,Ro=36495,Fh=36283,yo=36284,To=36285,wo=36286,Cu=3200,Pu=3201,Oh=0,Uu=1,Bn="",Be="srgb",es="srgb-linear",Lr="linear",Zt="srgb",Ri=7680,Mc=519,Iu=512,Du=513,Lu=514,Nh=515,Fu=516,Ou=517,Nu=518,Bu=519,Ac=35044,Rc="300 es",Tn=2e3,Tr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,bo=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function ku(i,t){return(i%t+t)%t}function Xr(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],_=n[5],m=n[8],E=s[0],p=s[3],f=s[6],R=s[1],x=s[4],g=s[7],P=s[2],b=s[5],y=s[8];return r[0]=a*E+o*R+l*P,r[3]=a*p+o*x+l*b,r[6]=a*f+o*g+l*y,r[1]=c*E+h*R+u*P,r[4]=c*p+h*x+u*b,r[7]=c*f+h*g+u*y,r[2]=d*E+_*R+m*P,r[5]=d*p+_*x+m*b,r[8]=d*f+_*g+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,_=c*r-a*l,m=e*u+n*d+s*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return t[0]=u*E,t[1]=(s*c-h*n)*E,t[2]=(o*n-s*a)*E,t[3]=d*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=_*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Pt;function Bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){const i=wr("canvas");return i.style.display="block",i}const yc={};function ms(i){i in yc||(yc[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Tc=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],bc=[.3127,.329],Cc=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[es]:{primaries:Tc,whitePoint:bc,transfer:Lr,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Tc,whitePoint:bc,transfer:Zt,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let yi;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=wr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Ce extends ns{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=ci,s=ci,r=on,a=li,o=Ze,l=Cn,c=Ce.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ds(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=yh;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],_=l[5],m=l[9],E=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(m+p)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,g=(_+1)/2,P=(f+1)/2,b=(h+d)/4,y=(u+E)/4,C=(m+p)/4;return x>g&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=y/n):g>P?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=y/r,s=C/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-m)*(p-m)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(p-m)/R,this.y=(u-E)/R,this.z=(d-h)/R,this.w=Math.acos((c+_+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends $u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],_=r[a+1],m=r[a+2],E=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=_,t[e+2]=m,t[e+3]=E;return}if(u!==E||l!==d||c!==_||h!==m){let p=1-o;const f=l*d+c*_+h*m+u*E,R=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),b=Math.atan2(P,f*R);p=Math.sin(p*b)/P,o=Math.sin(o*b)/P}const g=o*R;if(l=l*p+d*g,c=c*p+_*g,h=h*p+m*g,u=u*p+E*g,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],_=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*_-c*d,t[e+1]=l*m+h*d+c*u-o*_,t[e+2]=c*m+h*_+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),_=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*_*m,this._y=c*_*u-d*h*m,this._z=c*h*m+d*_*u,this._w=c*h*u-d*_*m;break;case"YXZ":this._x=d*h*u+c*_*m,this._y=c*_*u-d*h*m,this._z=c*h*m-d*_*u,this._w=c*h*u+d*_*m;break;case"ZXY":this._x=d*h*u-c*_*m,this._y=c*_*u+d*h*m,this._z=c*h*m+d*_*u,this._w=c*h*u-d*_*m;break;case"ZYX":this._x=d*h*u-c*_*m,this._y=c*_*u+d*h*m,this._z=c*h*m-d*_*u,this._w=c*h*u+d*_*m;break;case"YZX":this._x=d*h*u+c*_*m,this._y=c*_*u+d*h*m,this._z=c*h*m-d*_*u,this._w=c*h*u-d*_*m;break;case"XZY":this._x=d*h*u-c*_*m,this._y=c*_*u-d*h*m,this._z=c*h*m+d*_*u,this._w=c*h*u+d*_*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-c)*_,this._z=(a-s)*_}else if(n>o&&n>u){const _=2*Math.sqrt(1+n-o-u);this._w=(h-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+c)/_}else if(o>u){const _=2*Math.sqrt(1+o-n-u);this._w=(r-c)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+u-n-o);this._w=(a-s)/_,this._x=(r+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new F,Uc=new Je;class Ls{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ys.subVectors(this.max,hs),Ti.subVectors(t.a,hs),wi.subVectors(t.b,hs),bi.subVectors(t.c,hs),In.subVectors(wi,Ti),Dn.subVectors(bi,wi),Zn.subVectors(Ti,bi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!Jr(e,Ti,wi,bi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Ti,wi,bi,Ys))?!1:(Ks.crossVectors(In,Dn),e=[Ks.x,Ks.y,Ks.z],Jr(e,Ti,wi,bi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new F,new F,new F,new F,new F,new F,new F,new F],Ye=new F,Ws=new Ls,Ti=new F,wi=new F,bi=new F,In=new F,Dn=new F,Zn=new F,hs=new F,Ys=new F,Ks=new F,jn=new F;function Jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qu=new Ls,ds=new F,Qr=new F;class Fr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Qr)),this.expandByPoint(ds.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new F,ta=new F,$s=new F,Ln=new F,ea=new F,Xs=new F,na=new F;class Hh{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=Ln.dot(this.direction),l=-Ln.dot($s),c=Ln.lengthSq(),h=Math.abs(1-a*a);let u,d,_,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const E=1/h;u*=E,d*=E,_=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),_=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),_=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),_=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),_=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),_=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),_=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ta).addScaledVector($s,d),_}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),Xs.subVectors(n,t),na.crossVectors(ea,Xs);let a=this.direction.dot(na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const l=o*this.direction.dot(Xs.crossVectors(Ln,Xs));if(l<0)return null;const c=o*this.direction.dot(ea.cross(Ln));if(c<0||l+c>a)return null;const h=-o*Ln.dot(na);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,d,_,m,E,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,_,m,E,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,_,m,E,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=_,f[7]=m,f[11]=E,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,_=a*u,m=o*h,E=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=_+m*c,e[5]=d-E*c,e[9]=-o*l,e[2]=E-d*c,e[6]=m+_*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,_=l*u,m=c*h,E=c*u;e[0]=d+E*o,e[4]=m*o-_,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=_*o-m,e[6]=E+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,_=l*u,m=c*h,E=c*u;e[0]=d-E*o,e[4]=-a*u,e[8]=m+_*o,e[1]=_+m*o,e[5]=a*h,e[9]=E-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,_=a*u,m=o*h,E=o*u;e[0]=l*h,e[4]=m*c-_,e[8]=d*c+E,e[1]=l*u,e[5]=E*c+d,e[9]=_*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,_=a*c,m=o*l,E=o*c;e[0]=l*h,e[4]=E-d*u,e[8]=m*u+_,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*u+m,e[10]=d-E*u}else if(t.order==="XZY"){const d=a*l,_=a*c,m=o*l,E=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+E,e[5]=a*h,e[9]=_*u-m,e[2]=m*u-_,e[6]=o*h,e[10]=E*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,ju)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Fn.crossVectors(n,Ue),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Fn.crossVectors(n,Ue)),Fn.normalize(),qs.crossVectors(Ue,Fn),s[0]=Fn.x,s[4]=qs.x,s[8]=Ue.x,s[1]=Fn.y,s[5]=qs.y,s[9]=Ue.y,s[2]=Fn.z,s[6]=qs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],_=n[13],m=n[2],E=n[6],p=n[10],f=n[14],R=n[3],x=n[7],g=n[11],P=n[15],b=s[0],y=s[4],C=s[8],A=s[12],S=s[1],w=s[5],B=s[9],O=s[13],H=s[2],W=s[6],k=s[10],X=s[14],V=s[3],it=s[7],ht=s[11],gt=s[15];return r[0]=a*b+o*S+l*H+c*V,r[4]=a*y+o*w+l*W+c*it,r[8]=a*C+o*B+l*k+c*ht,r[12]=a*A+o*O+l*X+c*gt,r[1]=h*b+u*S+d*H+_*V,r[5]=h*y+u*w+d*W+_*it,r[9]=h*C+u*B+d*k+_*ht,r[13]=h*A+u*O+d*X+_*gt,r[2]=m*b+E*S+p*H+f*V,r[6]=m*y+E*w+p*W+f*it,r[10]=m*C+E*B+p*k+f*ht,r[14]=m*A+E*O+p*X+f*gt,r[3]=R*b+x*S+g*H+P*V,r[7]=R*y+x*w+g*W+P*it,r[11]=R*C+x*B+g*k+P*ht,r[15]=R*A+x*O+g*X+P*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],_=t[14],m=t[3],E=t[7],p=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*_-n*l*_)+E*(+e*l*_-e*c*d+r*a*d-s*a*_+s*c*h-r*l*h)+p*(+e*c*u-e*o*_-r*a*u+n*a*_+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],_=t[11],m=t[12],E=t[13],p=t[14],f=t[15],R=u*p*c-E*d*c+E*l*_-o*p*_-u*l*f+o*d*f,x=m*d*c-h*p*c-m*l*_+a*p*_+h*l*f-a*d*f,g=h*E*c-m*u*c+m*o*_-a*E*_-h*o*f+a*u*f,P=m*u*l-h*E*l-m*o*d+a*E*d+h*o*p-a*u*p,b=e*R+n*x+s*g+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=R*y,t[1]=(E*d*r-u*p*r-E*s*_+n*p*_+u*s*f-n*d*f)*y,t[2]=(o*p*r-E*l*r+E*s*c-n*p*c-o*s*f+n*l*f)*y,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*_-n*l*_)*y,t[4]=x*y,t[5]=(h*p*r-m*d*r+m*s*_-e*p*_-h*s*f+e*d*f)*y,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*f-e*l*f)*y,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*_+e*l*_)*y,t[8]=g*y,t[9]=(m*u*r-h*E*r-m*n*_+e*E*_+h*n*f-e*u*f)*y,t[10]=(a*E*r-m*o*r+m*n*c-e*E*c-a*n*f+e*o*f)*y,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*_-e*o*_)*y,t[12]=P*y,t[13]=(h*E*s-m*u*s+m*n*d-e*E*d-h*n*p+e*u*p)*y,t[14]=(m*o*s-a*E*s-m*n*l+e*E*l+a*n*p-e*o*p)*y,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,_=r*h,m=r*u,E=a*h,p=a*u,f=o*u,R=l*c,x=l*h,g=l*u,P=n.x,b=n.y,y=n.z;return s[0]=(1-(E+f))*P,s[1]=(_+g)*P,s[2]=(m-x)*P,s[3]=0,s[4]=(_-g)*b,s[5]=(1-(d+f))*b,s[6]=(p+R)*b,s[7]=0,s[8]=(m+x)*y,s[9]=(p-R)*y,s[10]=(1-(d+E))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/a,u=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Tn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let _,m;if(o===Tn)_=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Tr)_=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,_=(n+s)*h;let m,E;if(o===Tn)m=(a+r)*u,E=-2*u;else if(o===Tr)m=r*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=E,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new F,Ke=new oe,Zu=new F(0,0,0),ju=new F(1,1,1),Fn=new F,qs=new F,Ue=new F,Ic=new oe,Dc=new Je;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const Lc=new F,Pi=new Je,gn=new oe,Zs=new F,us=new F,Qu=new F,tf=new Je,Fc=new F(1,0,0),Oc=new F(0,1,0),Nc=new F(0,0,1),Bc={type:"added"},ef={type:"removed"},Ui={type:"childadded",child:null},ia={type:"childremoved",child:null};class Ee extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new F,e=new dn,n=new Je,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Pt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(us,Zs,this.up):gn.lookAt(Zs,us,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(gn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),_=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new F(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new F,En=new F,sa=new F,Sn=new F,Ii=new F,Di=new F,kc=new F,ra=new F,aa=new F,oa=new F,ca=new le,la=new le,ha=new le;class qe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),En.subVectors(n,e),sa.subVectors(t,e);const a=$e.dot($e),o=$e.dot(En),l=$e.dot(sa),c=En.dot(En),h=En.dot(sa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,_=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-_-m,m,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ca.setScalar(0),la.setScalar(0),ha.setScalar(0),ca.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),En.subVectors(t,e),$e.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),En.subVectors(this.a,this.b),$e.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,n),Di.subVectors(r,n),ra.subVectors(t,n);const l=Ii.dot(ra),c=Di.dot(ra);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,s);const h=Ii.dot(aa),u=Di.dot(aa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);oa.subVectors(t,r);const _=Ii.dot(oa),m=Di.dot(oa);if(m>=0&&_<=m)return e.copy(r);const E=_*c-l*m;if(E<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Di,o);const p=h*m-_*u;if(p<=0&&u-h>=0&&_-m>=0)return kc.subVectors(r,s),o=(u-h)/(u-h+(_-m)),e.copy(s).addScaledVector(kc,o);const f=1/(p+E+d);return a=E*f,o=d*f,e.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},js={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=ku(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=da(a,r,t+1/3),this.g=da(a,r,t),this.b=da(a,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return zt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Te(ve.r*255,0,255))*65536+Math.round(Te(ve.g*255,0,255))*256+Math.round(Te(ve.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Be){zt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(js);const n=Xr(On.h,js.h,e),s=Xr(On.s,js.s,e),r=Xr(On.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Ot;Ot.NAMES=Vh;let nf=0;class xi extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ds(),this.name="",this.blending=Hi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xo extends xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new F,Js=new Kt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}}class Wh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yh extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const Ne=new oe,ua=new Ee,Li=new F,Ie=new Ls,fs=new Ls,pe=new F;class ze extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Yh:Wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ie.min,fs.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,fs.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(fs.min),Ie.expandByPoint(fs.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),pe.add(Li)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const c=new F,h=new F,u=new F,d=new Kt,_=new Kt,m=new Kt,E=new F,p=new F;function f(C,A,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),_.sub(d),m.sub(d);const w=1/(_.x*m.y-m.x*_.y);isFinite(w)&&(E.copy(h).multiplyScalar(m.y).addScaledVector(u,-_.y).multiplyScalar(w),p.copy(u).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(w),o[C].add(E),o[A].add(E),o[S].add(E),l[C].add(p),l[A].add(p),l[S].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,A=R.length;C<A;++C){const S=R[C],w=S.start,B=S.count;for(let O=w,H=w+B;O<H;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new F,g=new F,P=new F,b=new F;function y(C){P.fromBufferAttribute(s,C),b.copy(P);const A=o[C];x.copy(A),x.sub(P.multiplyScalar(P.dot(A))).normalize(),g.crossVectors(b,A);const w=g.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,w)}for(let C=0,A=R.length;C<A;++C){const S=R[C],w=S.start,B=S.count;for(let O=w,H=w+B;O<H;O+=3)y(t.getX(O+0)),y(t.getX(O+1)),y(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,_=t.count;d<_;d+=3){const m=t.getX(d+0),E=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let _=0,m=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?_=l[E]*o.data.stride+o.offset:_=l[E]*h;for(let f=0;f<h;f++)d[m++]=c[_++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],_=t(d,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const _=c[u];h.push(_.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,_=u.length;d<_;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new oe,Jn=new Hh,Qs=new Fr,Hc=new F,tr=new F,er=new F,nr=new F,fa=new F,ir=new F,zc=new F,sr=new F;class te extends Ee{constructor(t=new ze,e=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(fa.fromBufferAttribute(u,t),a?ir.addScaledVector(fa,h):ir.addScaledVector(fa.sub(e),h))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Qs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Qs,Hc)===null||Jn.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,E=d.length;m<E;m++){const p=d[m],f=a[p.materialIndex],R=Math.max(p.start,_.start),x=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let g=R,P=x;g<P;g+=3){const b=o.getX(g),y=o.getX(g+1),C=o.getX(g+2);s=rr(this,f,t,n,c,h,u,b,y,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let p=m,f=E;p<f;p+=3){const R=o.getX(p),x=o.getX(p+1),g=o.getX(p+2);s=rr(this,a,t,n,c,h,u,R,x,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,E=d.length;m<E;m++){const p=d[m],f=a[p.materialIndex],R=Math.max(p.start,_.start),x=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let g=R,P=x;g<P;g+=3){const b=g,y=g+1,C=g+2;s=rr(this,f,t,n,c,h,u,b,y,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let p=m,f=E;p<f;p+=3){const R=p,x=p+1,g=p+2;s=rr(this,a,t,n,c,h,u,R,x,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function rf(i,t,e,n,s,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);const h=rf(i,t,e,n,tr,er,nr,zc);if(h){const u=new F;qe.getBarycoord(zc,tr,er,nr,u),s&&(h.uv=qe.getInterpolatedAttribute(s,o,l,c,u,new Kt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,l,c,u,new Kt)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};qe.getNormal(tr,er,nr,d.normal),h.face=d,h.barycoord=u}return h}class rn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,_=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function m(E,p,f,R,x,g,P,b,y,C,A){const S=g/y,w=P/C,B=g/2,O=P/2,H=b/2,W=y+1,k=C+1;let X=0,V=0;const it=new F;for(let ht=0;ht<k;ht++){const gt=ht*w-O;for(let Lt=0;Lt<W;Lt++){const jt=Lt*S-B;it[E]=jt*R,it[p]=gt*x,it[f]=H,c.push(it.x,it.y,it.z),it[E]=0,it[p]=0,it[f]=b>0?1:-1,h.push(it.x,it.y,it.z),u.push(Lt/y),u.push(1-ht/C),X+=1}}for(let ht=0;ht<C;ht++)for(let gt=0;gt<y;gt++){const Lt=d+gt+W*ht,jt=d+gt+W*(ht+1),$=d+(gt+1)+W*(ht+1),et=d+(gt+1)+W*ht;l.push(Lt,jt,et),l.push(jt,$,et),V+=6}o.addGroup(_,V,A),_+=V,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const of={clone:ji,merge:Me};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $h extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new F,Vc=new Kt,Wc=new Kt;class ke extends $h{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Wc),e.subVectors(Wc,Vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class hf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new ke(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new ke(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new ke(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new ke(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new ke(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,_),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xh extends Ce{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class df extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rn(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:zn});r.uniforms.tEquirect.value=e;const a=new te(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=on),new hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const _a=new F,uf=new F,ff=new Pt;class si{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Fr,ar=new F;class qo{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],_=s[8],m=s[9],E=s[10],p=s[11],f=s[12],R=s[13],x=s[14],g=s[15];if(n[0].setComponents(l-r,d-c,p-_,g-f).normalize(),n[1].setComponents(l+r,d+c,p+_,g+f).normalize(),n[2].setComponents(l+a,d+h,p+m,g+R).normalize(),n[3].setComponents(l-a,d-h,p-m,g-R).normalize(),n[4].setComponents(l-o,d-u,p-E,g-x).normalize(),e===Tn)n[5].setComponents(l+o,d+u,p+E,g+x).normalize();else if(e===Tr)n[5].setComponents(o,u,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _f(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((_,m)=>_.start-m.start);let d=0;for(let _=1;_<u.length;_++){const m=u[d],E=u[_];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++d,u[d]=E)}u.length=d+1;for(let _=0,m=u.length;_<m;_++){const E=u[_];i.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Fs extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,_=[],m=[],E=[],p=[];for(let f=0;f<h;f++){const R=f*d-a;for(let x=0;x<c;x++){const g=x*u-r;m.push(g,-R,0),E.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const x=R+c*f,g=R+c*(f+1),P=R+1+c*(f+1),b=R+1+c*f;_.push(x,g,b),_.push(g,P,b)}this.setIndex(_),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Op=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:Ef,alphatest_fragment:Sf,alphatest_pars_fragment:xf,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:yf,beginnormal_vertex:Tf,bsdfs:wf,iridescence_fragment:bf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Df,color_fragment:Lf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Nf,common:Bf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Hf,displacementmap_vertex:zf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Yf,colorspace_pars_fragment:Kf,envmap_fragment:$f,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:o_,envmap_vertex:jf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:t_,fog_pars_fragment:e_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:l_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:u_,lights_physical_pars_fragment:f_,lights_fragment_begin:__,lights_fragment_maps:p_,lights_fragment_end:m_,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:x_,map_fragment:v_,map_pars_fragment:M_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:y_,metalnessmap_pars_fragment:T_,morphinstance_vertex:w_,morphcolor_vertex:b_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:U_,normal_fragment_begin:I_,normal_fragment_maps:D_,normal_pars_fragment:L_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:H_,opaque_fragment:z_,packing:V_,premultiplied_alpha_fragment:W_,project_vertex:Y_,dithering_fragment:K_,dithering_pars_fragment:$_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:q_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:j_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:cp,transmission_pars_fragment:lp,uv_pars_fragment:hp,uv_pars_vertex:dp,uv_vertex:up,worldpos_vertex:fp,background_vert:_p,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:Ep,cube_frag:Sp,depth_vert:xp,depth_frag:vp,distanceRGBA_vert:Mp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:yp,linedashed_vert:Tp,linedashed_frag:wp,meshbasic_vert:bp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Up,meshmatcap_vert:Ip,meshmatcap_frag:Dp,meshnormal_vert:Lp,meshnormal_frag:Fp,meshphong_vert:Op,meshphong_frag:Np,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Gp,meshtoon_frag:Hp,points_vert:zp,points_frag:Vp,shadow_vert:Wp,shadow_frag:Yp,sprite_vert:Kp,sprite_frag:$p},nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},sn={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};sn.physical={uniforms:Me([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const or={r:0,b:0,g:0},ti=new dn,Xp=new oe;function qp(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,h,u=null,d=0,_=null;function m(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?e:t).get(x)),x}function E(R){let x=!1;const g=m(R);g===null?f(o,l):g&&g.isColor&&(f(g,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,x){const g=m(x);g&&(g.isCubeTexture||g.mapping===Dr)?(h===void 0&&(h=new te(new rn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ji(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(ti)),h.material.toneMapped=zt.getTransfer(g.colorSpace)!==Zt,(u!==g||d!==g.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,_=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new te(new Fs(2,2),new Xn({name:"BackgroundMaterial",uniforms:ji(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=zt.getTransfer(g.colorSpace)!==Zt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,d=g.version,_=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,x){R.getRGB(or,Kh(i)),n.buffers.color.setClear(or.r,or.g,or.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(o,l)},render:E,addToRenderList:p}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,w,B,O,H){let W=!1;const k=u(O,B,w);r!==k&&(r=k,c(r.object)),W=_(S,O,B,H),W&&m(S,O,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,g(S,w,B,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,w,B){const O=B.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let W=H[w.id];W===void 0&&(W={},H[w.id]=W);let k=W[O];return k===void 0&&(k=d(l()),W[O]=k),k}function d(S){const w=[],B=[],O=[];for(let H=0;H<e;H++)w[H]=0,B[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function _(S,w,B,O){const H=r.attributes,W=w.attributes;let k=0;const X=B.getAttributes();for(const V in X)if(X[V].location>=0){const ht=H[V];let gt=W[V];if(gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function m(S,w,B,O){const H={},W=w.attributes;let k=0;const X=B.getAttributes();for(const V in X)if(X[V].location>=0){let ht=W[V];ht===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),H[V]=gt,k++}r.attributes=H,r.attributesNum=k,r.index=O}function E(){const S=r.newAttributes;for(let w=0,B=S.length;w<B;w++)S[w]=0}function p(S){f(S,0)}function f(S,w){const B=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;B[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),H[S]!==w&&(i.vertexAttribDivisor(S,w),H[S]=w)}function R(){const S=r.newAttributes,w=r.enabledAttributes;for(let B=0,O=w.length;B<O;B++)w[B]!==S[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function x(S,w,B,O,H,W,k){k===!0?i.vertexAttribIPointer(S,w,B,H,W):i.vertexAttribPointer(S,w,B,O,H,W)}function g(S,w,B,O){E();const H=O.attributes,W=B.getAttributes(),k=w.defaultAttributeValues;for(const X in W){const V=W[X];if(V.location>=0){let it=H[X];if(it===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const ht=it.normalized,gt=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;const jt=Lt.buffer,$=Lt.type,et=Lt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||it.gpuType===zo;if(it.isInterleavedBufferAttribute){const rt=it.data,Rt=rt.stride,wt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)f(V.location+Ft,rt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Ft=0;Ft<V.locationSize;Ft++)x(V.location+Ft,gt/V.locationSize,$,ht,Rt*et,(wt+gt/V.locationSize*Ft)*et,Et)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)f(V.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<V.locationSize;rt++)x(V.location+rt,gt/V.locationSize,$,ht,gt*et,gt/V.locationSize*rt*et,Et)}}else if(k!==void 0){const ht=k[X];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(V.location,ht);break;case 3:i.vertexAttrib3fv(V.location,ht);break;case 4:i.vertexAttrib4fv(V.location,ht);break;default:i.vertexAttrib1fv(V.location,ht)}}}}R()}function P(){C();for(const S in n){const w=n[S];for(const B in w){const O=w[B];for(const H in O)h(O[H].object),delete O[H];delete w[B]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const B in w){const O=w[B];for(const H in O)h(O[H].object),delete O[H];delete w[B]}delete n[S.id]}function y(S){for(const w in n){const B=n[w];if(B[S.id]===void 0)continue;const O=B[S.id];for(const H in O)h(O[H].object),delete O[H];delete B[S.id]}}function C(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:E,enableAttribute:p,disableUnusedAttributes:R}}function jp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let _=0;for(let m=0;m<u;m++)_+=h[m];e.update(_,n,1)}function l(c,h,u,d){if(u===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let E=0;E<u;E++)m+=h[E]*d[E];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ze&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const C=y===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Cn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==yn&&!C)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:P,maxSamples:b}}function Qp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new si,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const _=u.length!==0||d||n!==0||s;return s=d,n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,_){const m=u.clippingPlanes,E=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const R=r?0:n,x=R*4;let g=f.clippingState||null;l.value=g,g=h(m,d,x,_);for(let P=0;P!==x;++P)g[P]=e[P];f.clippingState=g,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,_,m){const E=u!==null?u.length:0;let p=null;if(E!==0){if(p=l.value,m!==!0||p===null){const f=_+E*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,g=_;x!==E;++x,g+=4)a.copy(u[x]).applyMatrix4(R,o),a.normal.toArray(p,g),p[g+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,p}}function t0(i){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=$i:o===Ja&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===Ja)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new df(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zh extends $h{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Yc=[.125,.215,.35,.446,.526,.582],oi=20,pa=new Zh,Kc=new Ot;let ma=null,ga=0,Ea=0,Sa=!1;const ri=(1+Math.sqrt(5))/2,Ni=1/ri,$c=[new F(-ri,Ni,0),new F(ri,Ni,0),new F(-Ni,0,ri),new F(Ni,0,ri),new F(0,ri,-Ni),new F(0,ri,Ni),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,Ea),this._renderer.xr.enabled=Sa,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Is,format:Ze,colorSpace:es,depthBuffer:!1},s=qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kc),h.toneMapping=Vn,h.autoClear=!1;const _=new Xo({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),m=new te(new rn,_);let E=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,E=!0):(_.color.copy(Kc),E=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):R===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;cr(s,R*x,f>2?x:0,x,x),h.setRenderTarget(s),E&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$i||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$c[(s-r-1)%$c.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new te(this._lodPlanes[s],c),d=c.uniforms,_=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*oi-1),E=r/m,p=isFinite(r)?1+Math.floor(h*E):oi;p>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const f=[];let R=0;for(let y=0;y<oi;++y){const C=y/E,A=Math.exp(-C*C/2);f.push(A),y===0?R+=A:y<p&&(R+=2*A)}for(let y=0;y<f.length;y++)f[y]=f[y]/R;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const g=this._sizeLods[s],P=3*g*(s>x-Gi?s-x+Gi:0),b=4*(this._cubeSize-g);cr(e,P,b,3*g,2*g),l.setRenderTarget(e),l.render(u,pa)}}function e0(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gi?l=Yc[a-i+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],_=6,m=6,E=3,p=2,f=1,R=new Float32Array(E*m*_),x=new Float32Array(p*m*_),g=new Float32Array(f*m*_);for(let b=0;b<_;b++){const y=b%3*2/3-1,C=b>2?0:-1,A=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];R.set(A,E*m*b),x.set(d,p*m*b);const S=[b,b,b,b,b,b];g.set(S,f*m*b)}const P=new ze;P.setAttribute("position",new cn(R,E)),P.setAttribute("uv",new cn(x,p)),P.setAttribute("faceIndex",new cn(g,f)),t.push(P),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qc(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n0(i,t,e){const n=new Float32Array(oi),s=new F(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Zc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function jc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ja||l===Ja,h=l===$i||l===Xi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Xc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const _=o.image;return c&&_&&_.height>0||h&&_&&s(_)?(e===null&&(e=new Xc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function s0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const E=d.morphAttributes[m];for(let p=0,f=E.length;p<f;p++)t.remove(E[p])}d.removeEventListener("dispose",a),delete s[d.id];const _=r.get(d);_&&(t.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const _=u.morphAttributes;for(const m in _){const E=_[m];for(let p=0,f=E.length;p<f;p++)t.update(E[p],i.ARRAY_BUFFER)}}function c(u){const d=[],_=u.index,m=u.attributes.position;let E=0;if(_!==null){const R=_.array;E=_.version;for(let x=0,g=R.length;x<g;x+=3){const P=R[x+0],b=R[x+1],y=R[x+2];d.push(P,b,b,y,y,P)}}else if(m!==void 0){const R=m.array;E=m.version;for(let x=0,g=R.length/3-1;x<g;x+=3){const P=x+0,b=x+1,y=x+2;d.push(P,b,b,y,y,P)}}else return;const p=new(Bh(d)?Yh:Wh)(d,1);p.version=E;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const _=u.index;_!==null&&d.version<_.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function a0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,_){i.drawElements(n,_,r,d*a),e.update(_,n,1)}function c(d,_,m){m!==0&&(i.drawElementsInstanced(n,_,r,d*a,m),e.update(_,n,m))}function h(d,_,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,d,0,m);let p=0;for(let f=0;f<m;f++)p+=_[f];e.update(p,n,1)}function u(d,_,m,E){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,_[f],E[f]);else{p.multiDrawElementsInstancedWEBGL(n,_,0,r,d,0,E,0,m);let f=0;for(let R=0;R<m;R++)f+=_[R]*E[R];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function o0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c0(i,t,e){const n=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var _=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let g=0;m===!0&&(g=1),E===!0&&(g=2),p===!0&&(g=3);let P=o.attributes.position.count*g,b=1;P>t.maxTextureSize&&(b=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const y=new Float32Array(P*b*4*u),C=new Gh(y,P,b,u);C.type=yn,C.needsUpdate=!0;const A=g*4;for(let w=0;w<u;w++){const B=f[w],O=R[w],H=x[w],W=P*b*4*w;for(let k=0;k<B.count;k++){const X=k*A;m===!0&&(s.fromBufferAttribute(B,k),y[W+X+0]=s.x,y[W+X+1]=s.y,y[W+X+2]=s.z,y[W+X+3]=0),E===!0&&(s.fromBufferAttribute(O,k),y[W+X+4]=s.x,y[W+X+5]=s.y,y[W+X+6]=s.z,y[W+X+7]=0),p===!0&&(s.fromBufferAttribute(H,k),y[W+X+8]=s.x,y[W+X+9]=s.y,y[W+X+10]=s.z,y[W+X+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Kt(P,b)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const E=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function l0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class jh extends Ce{constructor(t,e,n,s,r,a,o,l,c,h=zi){if(h!==zi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=fi),n===void 0&&h===Zi&&(n=qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jh=new Ce,Jc=new jh(1,1),Qh=new Gh,td=new Xu,ed=new Xh,Qc=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Or(i,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;il.set(n),i.uniformMatrix2fv(this.addr,!1,il),_e(e,n)}}function p0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;nl.set(n),i.uniformMatrix3fv(this.addr,!1,nl),_e(e,n)}}function m0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;el.set(n),i.uniformMatrix4fv(this.addr,!1,el),_e(e,n)}}function g0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function v0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jc.compareFunction=Nh,r=Jc):r=Jh,e.setTexture2D(t||r,s)}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||td,s)}function w0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ed,s)}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return d0;case 35665:return u0;case 35666:return f0;case 35674:return _0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return E0;case 35668:case 35672:return S0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return M0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return b0}}function P0(i,t){i.uniform1fv(this.addr,t)}function U0(i,t){const e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function I0(i,t){const e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function D0(i,t){const e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function L0(i,t){const e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F0(i,t){const e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function O0(i,t){const e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function N0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function k0(i,t){i.uniform3iv(this.addr,t)}function G0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function z0(i,t){i.uniform2uiv(this.addr,t)}function V0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function Y0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jh,r[a])}function K0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||td,r[a])}function $0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ed,r[a])}function X0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function q0(i){switch(i){case 5126:return P0;case 35664:return U0;case 35665:return I0;case 35666:return D0;case 35674:return L0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return N0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return z0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return X0}}class Z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class J0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function sl(i,t){i.seq.push(t),i.map[t.id]=t}function Q0(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sl(e,c===void 0?new Z0(o,i,t):new j0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new J0(o),sl(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Q0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tm=37297;let em=0;function nm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const al=new Pt;function im(i){zt._getMatrix(al,zt.workingColorSpace,i);const t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ol(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nm(i.getShaderSource(t),a)}else return s}function sm(i,t){const e=im(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rm(i,t){let e;switch(t){case Mu:e="Linear";break;case Au:e="Reinhard";break;case Ru:e="Cineon";break;case Rh:e="ACESFilmic";break;case Tu:e="AgX";break;case wu:e="Neutral";break;case yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new F;function am(){zt.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function cm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function cl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ll(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(hm,um)}const dm=new Map;function um(i,t){let e=It[t];if(e===void 0){const n=dm.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(i){return i.replace(fm,_m)}function _m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Xi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Em(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pm(e),c=mm(e),h=gm(e),u=Em(e),d=Sm(e),_=om(e),m=cm(r),E=s.createProgram();let p,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?It.tonemapping_pars_fragment:"",e.toneMapping!==Vn?rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,sm("linearToOutputTexel",e.outputColorSpace),am(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Co(a),a=cl(a,e),a=ll(a,e),o=Co(o),o=cl(o,e),o=ll(o,e),a=hl(a),o=hl(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=R+p+a,g=R+f+o,P=rl(s,s.VERTEX_SHADER,x),b=rl(s,s.FRAGMENT_SHADER,g);s.attachShader(E,P),s.attachShader(E,b),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function y(w){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(E).trim(),O=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(b).trim();let W=!0,k=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,P,b);else{const X=ol(s,P,"vertex"),V=ol(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+X+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(k=!1);k&&(w.diagnostics={runnable:W,programLog:B,vertexShader:{log:O,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(P),s.deleteShader(b),C=new Rr(s,E),A=lm(s,E)}let C;this.getUniforms=function(){return C===void 0&&y(this),C};let A;this.getAttributes=function(){return A===void 0&&y(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(E,tm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=em++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=b,this}let vm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Am(t),e.set(t,n)),n}}class Am{constructor(t){this.id=vm++,this.code=t,this.usedTimes=0}}function Rm(i,t,e,n,s,r,a){const o=new zh,l=new Mm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let _=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return c.add(A),A===0?"uv":`uv${A}`}function p(A,S,w,B,O){const H=B.fog,W=O.geometry,k=A.isMeshStandardMaterial?B.environment:null,X=(A.isMeshStandardMaterial?e:t).get(A.envMap||k),V=X&&X.mapping===Dr?X.image.height:null,it=m[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=ht!==void 0?ht.length:0;let Lt=0;W.morphAttributes.position!==void 0&&(Lt=1),W.morphAttributes.normal!==void 0&&(Lt=2),W.morphAttributes.color!==void 0&&(Lt=3);let jt,$,et,Et;if(it){const qt=sn[it];jt=qt.vertexShader,$=qt.fragmentShader}else jt=A.vertexShader,$=A.fragmentShader,l.update(A),et=l.getVertexShaderID(A),Et=l.getFragmentShaderID(A);const rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,ae=!!A.map,Gt=!!A.matcap,he=!!X,L=!!A.aoMap,Fe=!!A.lightMap,Nt=!!A.bumpMap,Bt=!!A.normalMap,Mt=!!A.displacementMap,ee=!!A.emissiveMap,vt=!!A.metalnessMap,T=!!A.roughnessMap,v=A.anisotropy>0,N=A.clearcoat>0,q=A.dispersion>0,j=A.iridescence>0,K=A.sheen>0,St=A.transmission>0,at=v&&!!A.anisotropyMap,dt=N&&!!A.clearcoatMap,Ht=N&&!!A.clearcoatNormalMap,J=N&&!!A.clearcoatRoughnessMap,ut=j&&!!A.iridescenceMap,At=j&&!!A.iridescenceThicknessMap,yt=K&&!!A.sheenColorMap,ft=K&&!!A.sheenRoughnessMap,kt=!!A.specularMap,Ut=!!A.specularColorMap,Jt=!!A.specularIntensityMap,U=St&&!!A.transmissionMap,st=St&&!!A.thicknessMap,Y=!!A.gradientMap,Z=!!A.alphaMap,lt=A.alphaTest>0,ot=!!A.alphaHash,bt=!!A.extensions;let ce=Vn;A.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Se={shaderID:it,shaderType:A.type,shaderName:A.name,vertexShader:jt,fragmentShader:$,defines:A.defines,customVertexShaderID:et,customFragmentShaderID:Et,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:es,alphaToCoverage:!!A.alphaToCoverage,map:ae,matcap:Gt,envMap:he,envMapMode:he&&X.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Fe,bumpMap:Nt,normalMap:Bt,displacementMap:d&&Mt,emissiveMap:ee,normalMapObjectSpace:Bt&&A.normalMapType===Uu,normalMapTangentSpace:Bt&&A.normalMapType===Oh,metalnessMap:vt,roughnessMap:T,anisotropy:v,anisotropyMap:at,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:J,dispersion:q,iridescence:j,iridescenceMap:ut,iridescenceThicknessMap:At,sheen:K,sheenColorMap:yt,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Ut,specularIntensityMap:Jt,transmission:St,transmissionMap:U,thicknessMap:st,gradientMap:Y,opaque:A.transparent===!1&&A.blending===Hi&&A.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ot,combine:A.combine,mapUv:ae&&E(A.map.channel),aoMapUv:L&&E(A.aoMap.channel),lightMapUv:Fe&&E(A.lightMap.channel),bumpMapUv:Nt&&E(A.bumpMap.channel),normalMapUv:Bt&&E(A.normalMap.channel),displacementMapUv:Mt&&E(A.displacementMap.channel),emissiveMapUv:ee&&E(A.emissiveMap.channel),metalnessMapUv:vt&&E(A.metalnessMap.channel),roughnessMapUv:T&&E(A.roughnessMap.channel),anisotropyMapUv:at&&E(A.anisotropyMap.channel),clearcoatMapUv:dt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:At&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:ft&&E(A.sheenRoughnessMap.channel),specularMapUv:kt&&E(A.specularMap.channel),specularColorMapUv:Ut&&E(A.specularColorMap.channel),specularIntensityMapUv:Jt&&E(A.specularIntensityMap.channel),transmissionMapUv:U&&E(A.transmissionMap.channel),thicknessMapUv:st&&E(A.thicknessMap.channel),alphaMapUv:Z&&E(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Bt||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(ae||Z),fog:!!H,useFog:A.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ae&&A.map.isVideoTexture===!0&&zt.getTransfer(A.map.colorSpace)===Zt,decodeVideoTextureEmissive:ee&&A.emissiveMap.isVideoTexture===!0&&zt.getTransfer(A.emissiveMap.colorSpace)===Zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===be,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:bt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&A.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function f(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const w in A.defines)S.push(w),S.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(R(S,A),x(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function R(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function x(A,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),A.push(o.mask)}function g(A){const S=m[A.type];let w;if(S){const B=sn[S];w=of.clone(B.uniforms)}else w=A.uniforms;return w}function P(A,S){let w;for(let B=0,O=h.length;B<O;B++){const H=h[B];if(H.cacheKey===S){w=H,++w.usedTimes;break}}return w===void 0&&(w=new xm(i,S,A,r),h.push(w)),w}function b(A){if(--A.usedTimes===0){const S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function y(A){l.remove(A)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:g,acquireProgram:P,releaseProgram:b,releaseShaderCache:y,programs:h,dispose:C}}function ym(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,_,m,E,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:_,groupOrder:m,renderOrder:u.renderOrder,z:E,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=_,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=E,f.group=p),t++,f}function o(u,d,_,m,E,p){const f=a(u,d,_,m,E,p);_.transmission>0?n.push(f):_.transparent===!0?s.push(f):e.push(f)}function l(u,d,_,m,E,p){const f=a(u,d,_,m,E,p);_.transmission>0?n.unshift(f):_.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Tm),n.length>1&&n.sort(d||ul),s.length>1&&s.sort(d||ul)}function h(){for(let u=t,d=i.length;u<d;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fl,i.set(n,[a])):s>=r.length?(a=new fl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ot};break;case"SpotLight":e={position:new F,direction:new F,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pm=0;function Um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Im(i){const t=new bm,e=Cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let _=0,m=0,E=0,p=0,f=0,R=0,x=0,g=0,P=0,b=0,y=0;c.sort(Um);for(let A=0,S=c.length;A<S;A++){const w=c[A],B=w.color,O=w.intensity,H=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],O);y++}else if(w.isDirectionalLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const X=w.shadow,V=e.get(w);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=W,n.directionalShadowMatrix[_]=w.shadow.matrix,R++}n.directional[_]=k,_++}else if(w.isSpotLight){const k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(B).multiplyScalar(O),k.distance=H,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[E]=k;const X=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,X.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[E]=X.matrix,w.castShadow){const V=e.get(w);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[E]=V,n.spotShadowMap[E]=W,g++}E++}else if(w.isRectAreaLight){const k=t.get(w);k.color.copy(B).multiplyScalar(O),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=k,p++}else if(w.isPointLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const X=w.shadow,V=e.get(w);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=w.shadow.matrix,x++}n.point[m]=k,m++}else if(w.isHemisphereLight){const k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(O),k.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[f]=k,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==E||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==R||C.numPointShadows!==x||C.numSpotShadows!==g||C.numSpotMaps!==P||C.numLightProbes!==y)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=g+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=y,C.directionalLength=_,C.pointLength=m,C.spotLength=E,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=R,C.numPointShadows=x,C.numSpotShadows=g,C.numSpotMaps=P,C.numLightProbes=y,n.version=Pm++)}function l(c,h){let u=0,d=0,_=0,m=0,E=0;const p=h.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const x=c[f];if(x.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),u++}else if(x.isSpotLight){const g=n.spot[_];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const g=n.rectArea[m];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const g=n.hemi[E];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(p),E++}}}return{setup:o,setupView:l,state:n}}function _l(i){const t=new Im(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _l(i),t.set(s,[o])):r>=a.length?(o=new _l(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lm extends xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(i,t,e){let n=new qo;const s=new Kt,r=new Kt,a=new le,o=new Lm({depthPacking:Pu}),l=new Fm,c={},h=e.maxTextureSize,u={[$n]:be,[be]:$n,[An]:An},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Om,fragmentShader:Nm}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const m=new ze;m.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new te(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let f=this.type;this.render=function(b,y,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const A=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==vn&&this.type===vn,H=f===vn&&this.type!==vn;for(let W=0,k=b.length;W<k;W++){const X=b[W],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||O===!0||H===!0){const gt=this.type!==vn?{minFilter:je,magFilter:je}:{};V.map!==null&&V.map.dispose(),V.map=new _i(s.x,s.y,gt),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ht=V.getViewportCount();for(let gt=0;gt<ht;gt++){const Lt=V.getViewport(gt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),B.viewport(a),V.updateMatrices(X,gt),n=V.getFrustum(),g(y,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===vn&&R(V,C),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(A,S,w)};function R(b,y){const C=t.update(E);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,C,d,E,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,C,_,E,null)}function x(b,y,C,A){let S=null;const w=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)S=w;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=S.uuid,O=y.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let W=H[O];W===void 0&&(W=S.clone(),H[O]=W,y.addEventListener("dispose",P)),S=W}if(S.visible=y.visible,S.wireframe=y.wireframe,A===vn?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:u[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=C}return S}function g(b,y,C,A,S){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const O=t.update(b),H=b.material;if(Array.isArray(H)){const W=O.groups;for(let k=0,X=W.length;k<X;k++){const V=W[k],it=H[V.materialIndex];if(it&&it.visible){const ht=x(b,it,A,S);b.onBeforeShadow(i,b,y,C,O,ht,V),i.renderBufferDirect(C,null,O,ht,b,V),b.onAfterShadow(i,b,y,C,O,ht,V)}}}else if(H.visible){const W=x(b,H,A,S);b.onBeforeShadow(i,b,y,C,O,W,null),i.renderBufferDirect(C,null,O,W,b,null),b.onAfterShadow(i,b,y,C,O,W,null)}}const B=b.children;for(let O=0,H=B.length;O<H;O++)g(B[O],y,C,A,S)}function P(b){b.target.removeEventListener("dispose",P);for(const C in c){const A=c[C],S=b.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const km={[Wa]:Ya,[Ka]:qa,[$a]:Za,[Ki]:Xa,[Ya]:Wa,[qa]:Ka,[Za]:$a,[Xa]:Ki};function Gm(i,t){function e(){let U=!1;const st=new le;let Y=null;const Z=new le(0,0,0,0);return{setMask:function(lt){Y!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),Y=lt)},setLocked:function(lt){U=lt},setClear:function(lt,ot,bt,ce,Se){Se===!0&&(lt*=ce,ot*=ce,bt*=ce),st.set(lt,ot,bt,ce),Z.equals(st)===!1&&(i.clearColor(lt,ot,bt,ce),Z.copy(st))},reset:function(){U=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,Y=null,Z=null,lt=null;return{setReversed:function(ot){if(st!==ot){const bt=t.get("EXT_clip_control");st?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=lt;lt=null,this.setClear(ce)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!U&&(i.depthMask(ot),Y=ot)},setFunc:function(ot){if(st&&(ot=km[ot]),Z!==ot){switch(ot){case Wa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){U=ot},setClear:function(ot){lt!==ot&&(st&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){U=!1,Y=null,Z=null,lt=null,st=!1}}}function s(){let U=!1,st=null,Y=null,Z=null,lt=null,ot=null,bt=null,ce=null,Se=null;return{setTest:function(qt){U||(qt?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(qt){st!==qt&&!U&&(i.stencilMask(qt),st=qt)},setFunc:function(qt,Ve,fn){(Y!==qt||Z!==Ve||lt!==fn)&&(i.stencilFunc(qt,Ve,fn),Y=qt,Z=Ve,lt=fn)},setOp:function(qt,Ve,fn){(ot!==qt||bt!==Ve||ce!==fn)&&(i.stencilOp(qt,Ve,fn),ot=qt,bt=Ve,ce=fn)},setLocked:function(qt){U=qt},setClear:function(qt){Se!==qt&&(i.clearStencil(qt),Se=qt)},reset:function(){U=!1,st=null,Y=null,Z=null,lt=null,ot=null,bt=null,ce=null,Se=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,_=[],m=null,E=!1,p=null,f=null,R=null,x=null,g=null,P=null,b=null,y=new Ot(0,0,0),C=0,A=!1,S=null,w=null,B=null,O=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=X>=2);let it=null,ht={};const gt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),jt=new le().fromArray(gt),$=new le().fromArray(Lt);function et(U,st,Y,Z){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Y;bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(st+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const Et={};Et[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ki),Nt(!1),Bt(Ec),rt(i.CULL_FACE),L(zn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Rt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function wt(U,st){return u[U]!==st?(i.bindFramebuffer(U,st),u[U]=st,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(U,st){let Y=_,Z=!1;if(U){Y=d.get(st),Y===void 0&&(Y=[],d.set(st,Y));const lt=U.textures;if(Y.length!==lt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,bt=lt.length;ot<bt;ot++)Y[ot]=i.COLOR_ATTACHMENT0+ot;Y.length=lt.length,Z=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Z=!0);Z&&i.drawBuffers(Y)}function ae(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const Gt={[ai]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};Gt[ru]=i.MIN,Gt[au]=i.MAX;const he={[ou]:i.ZERO,[cu]:i.ONE,[lu]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[du]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[_u]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,st,Y,Z,lt,ot,bt,ce,Se,qt){if(U===zn){E===!0&&(Rt(i.BLEND),E=!1);return}if(E===!1&&(rt(i.BLEND),E=!0),U!==nu){if(U!==p||qt!==A){if((f!==ai||g!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,g=ai),qt)switch(U){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,x=null,P=null,b=null,y.set(0,0,0),C=0,p=U,A=qt}return}lt=lt||st,ot=ot||Y,bt=bt||Z,(st!==f||lt!==g)&&(i.blendEquationSeparate(Gt[st],Gt[lt]),f=st,g=lt),(Y!==R||Z!==x||ot!==P||bt!==b)&&(i.blendFuncSeparate(he[Y],he[Z],he[ot],he[bt]),R=Y,x=Z,P=ot,b=bt),(ce.equals(y)===!1||Se!==C)&&(i.blendColor(ce.r,ce.g,ce.b,Se),y.copy(ce),C=Se),p=U,A=!1}function Fe(U,st){U.side===An?Rt(i.CULL_FACE):rt(i.CULL_FACE);let Y=U.side===be;st&&(Y=!Y),Nt(Y),U.blending===Hi&&U.transparent===!1?L(zn):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Bt(U){U!==tu?(rt(i.CULL_FACE),U!==w&&(U===Ec?i.cullFace(i.BACK):U===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),w=U}function Mt(U){U!==B&&(k&&i.lineWidth(U),B=U)}function ee(U,st,Y){U?(rt(i.POLYGON_OFFSET_FILL),(O!==st||H!==Y)&&(i.polygonOffset(st,Y),O=st,H=Y)):Rt(i.POLYGON_OFFSET_FILL)}function vt(U){U?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+W-1),it!==U&&(i.activeTexture(U),it=U)}function v(U,st,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+W-1:Y=it);let Z=ht[Y];Z===void 0&&(Z={type:void 0,texture:void 0},ht[Y]=Z),(Z.type!==U||Z.texture!==st)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(U,st||Et[U]),Z.type=U,Z.texture=st)}function N(){const U=ht[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function ft(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function kt(U,st){let Y=c.get(st);Y===void 0&&(Y=new WeakMap,c.set(st,Y));let Z=Y.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(st,U.name),Y.set(U,Z))}function Ut(U,st){const Z=c.get(st).get(U);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,U.__bindingPointIndex),l.set(st,Z))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ht={},u={},d=new WeakMap,_=[],m=null,E=!1,p=null,f=null,R=null,x=null,g=null,P=null,b=null,y=new Ot(0,0,0),C=0,A=!1,S=null,w=null,B=null,O=null,H=null,jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:ae,setBlending:L,setMaterial:Fe,setFlipSided:Nt,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:vt,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:ut,texImage3D:At,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Ht,texStorage3D:J,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:yt,viewport:ft,reset:Jt}}function pl(i,t,e,n){const s=Hm(n);switch(e){case Ch:return i*t;case Uh:return i*t;case Ih:return i*t*2;case Dh:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case Lh:return i*t*2/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case $o:return i*t*4/s.components*s.byteLength;case Sr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:case so:return Math.max(i,16)*Math.max(t,8)/4;case eo:case io:return Math.max(i,8)*Math.max(t,8)/2;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fh:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hm(i){switch(i){case Cn:case Th:return{byteLength:1,components:1};case Rs:case wh:case Is:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case fi:case zo:case yn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return _?new OffscreenCanvas(T,v):wr("canvas")}function E(T,v,N){let q=1;const j=vt(T);if((j.width>N||j.height>N)&&(q=N/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(q*j.width),St=Math.floor(q*j.height);u===void 0&&(u=m(K,St));const at=v?m(K,St):u;return at.width=K,at.height=St,at.getContext("2d").drawImage(T,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+St+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,v,N,q,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),v===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){const St=j?Lr:zt.getTransfer(q);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=St===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(T,v){let N;return T?v===null||v===fi||v===qi?N=i.DEPTH24_STENCIL8:v===yn?N=i.DEPTH32F_STENCIL8:v===Rs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===qi?N=i.DEPTH_COMPONENT24:v===yn?N=i.DEPTH_COMPONENT32F:v===Rs&&(N=i.DEPTH_COMPONENT16),N}function P(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function b(T){const v=T.target;v.removeEventListener("dispose",b),C(v),v.isVideoTexture&&h.delete(v)}function y(T){const v=T.target;v.removeEventListener("dispose",y),S(v)}function C(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,q=d.get(N);if(q){const j=q[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(T),Object.keys(q).length===0&&d.delete(N)}n.remove(T)}function A(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const N=T.source,q=d.get(N);delete q[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let j=0;j<v.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[q][j]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let q=0,j=N.length;q<j;q++){const K=n.get(N[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(T)}let w=0;function B(){w=0}function O(){const T=w;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const N=n.get(T);if(T.isVideoTexture&&Mt(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,T,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function k(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function X(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function V(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){et(N,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const it={[Qa]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ht={[je]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},gt={[Iu]:i.NEVER,[Bu]:i.ALWAYS,[Du]:i.LESS,[Nh]:i.LEQUAL,[Lu]:i.EQUAL,[Nu]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function Lt(T,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===Kr||v.magFilter===Vs||v.magFilter===li||v.minFilter===on||v.minFilter===Kr||v.minFilter===Vs||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Vs&&v.minFilter!==li||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",b));const q=v.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const K=H(v);if(K!==T.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[K].usedTimes++;const St=j[T.__cacheKey];St!==void 0&&(j[T.__cacheKey].usedTimes--,St.usedTimes===0&&A(v)),T.__cacheKey=K,T.__webglTexture=j[K].texture}return N}function $(T,v,N){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const j=jt(T,v),K=v.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+N);const St=n.get(K);if(K.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const at=zt.getPrimaries(zt.workingColorSpace),dt=v.colorSpace===Bn?null:zt.getPrimaries(v.colorSpace),Ht=v.colorSpace===Bn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let J=E(v.image,!1,s.maxTextureSize);J=ee(v,J);const ut=r.convert(v.format,v.colorSpace),At=r.convert(v.type);let yt=x(v.internalFormat,ut,At,v.colorSpace,v.isVideoTexture);Lt(q,v);let ft;const kt=v.mipmaps,Ut=v.isVideoTexture!==!0,Jt=St.__version===void 0||j===!0,U=K.dataReady,st=P(v,J);if(v.isDepthTexture)yt=g(v.format===Zi,v.type),Jt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,yt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,ut,At,null));else if(v.isDataTexture)if(kt.length>0){Ut&&Jt&&e.texStorage2D(i.TEXTURE_2D,st,yt,kt[0].width,kt[0].height);for(let Y=0,Z=kt.length;Y<Z;Y++)ft=kt[Y],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,At,ft.data):e.texImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ut,At,ft.data);v.generateMipmaps=!1}else Ut?(Jt&&e.texStorage2D(i.TEXTURE_2D,st,yt,J.width,J.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,At,J.data)):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,ut,At,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,yt,kt[0].width,kt[0].height,J.depth);for(let Y=0,Z=kt.length;Y<Z;Y++)if(ft=kt[Y],v.format!==Ze)if(ut!==null)if(Ut){if(U)if(v.layerUpdates.size>0){const lt=pl(ft.width,ft.height,v.format,v.type);for(const ot of v.layerUpdates){const bt=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ot,ft.width,ft.height,1,ut,bt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,J.depth,ut,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,yt,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,J.depth,ut,At,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,yt,ft.width,ft.height,J.depth,0,ut,At,ft.data)}else{Ut&&Jt&&e.texStorage2D(i.TEXTURE_2D,st,yt,kt[0].width,kt[0].height);for(let Y=0,Z=kt.length;Y<Z;Y++)ft=kt[Y],v.format!==Ze?ut!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,At,ft.data):e.texImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ut,At,ft.data)}else if(v.isDataArrayTexture)if(Ut){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,yt,J.width,J.height,J.depth),U)if(v.layerUpdates.size>0){const Y=pl(J.width,J.height,v.format,v.type);for(const Z of v.layerUpdates){const lt=J.data.subarray(Z*Y/J.data.BYTES_PER_ELEMENT,(Z+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ut,At,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,At,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,J.width,J.height,J.depth,0,ut,At,J.data);else if(v.isData3DTexture)Ut?(Jt&&e.texStorage3D(i.TEXTURE_3D,st,yt,J.width,J.height,J.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,At,J.data)):e.texImage3D(i.TEXTURE_3D,0,yt,J.width,J.height,J.depth,0,ut,At,J.data);else if(v.isFramebufferTexture){if(Jt)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,yt,J.width,J.height);else{let Y=J.width,Z=J.height;for(let lt=0;lt<st;lt++)e.texImage2D(i.TEXTURE_2D,lt,yt,Y,Z,0,ut,At,null),Y>>=1,Z>>=1}}else if(kt.length>0){if(Ut&&Jt){const Y=vt(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,yt,Y.width,Y.height)}for(let Y=0,Z=kt.length;Y<Z;Y++)ft=kt[Y],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ut,At,ft):e.texImage2D(i.TEXTURE_2D,Y,yt,ut,At,ft);v.generateMipmaps=!1}else if(Ut){if(Jt){const Y=vt(J);e.texStorage2D(i.TEXTURE_2D,st,yt,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,At,J)}else e.texImage2D(i.TEXTURE_2D,0,yt,ut,At,J);p(v)&&f(q),St.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,N){if(v.image.length!==6)return;const q=jt(T,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const K=n.get(j);if(j.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+N);const St=zt.getPrimaries(zt.workingColorSpace),at=v.colorSpace===Bn?null:zt.getPrimaries(v.colorSpace),dt=v.colorSpace===Bn||St===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Ht&&!J?ut[Z]=E(v.image[Z],!0,s.maxCubemapSize):ut[Z]=J?v.image[Z].image:v.image[Z],ut[Z]=ee(v,ut[Z]);const At=ut[0],yt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),kt=x(v.internalFormat,yt,ft,v.colorSpace),Ut=v.isVideoTexture!==!0,Jt=K.__version===void 0||q===!0,U=j.dataReady;let st=P(v,At);Lt(i.TEXTURE_CUBE_MAP,v);let Y;if(Ht){Ut&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,At.width,At.height);for(let Z=0;Z<6;Z++){Y=ut[Z].mipmaps;for(let lt=0;lt<Y.length;lt++){const ot=Y[lt];v.format!==Ze?yt!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,yt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,yt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,yt,ft,ot.data)}}}else{if(Y=v.mipmaps,Ut&&Jt){Y.length>0&&st++;const Z=vt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,yt,ft,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ut[Z].width,ut[Z].height,0,yt,ft,ut[Z].data);for(let lt=0;lt<Y.length;lt++){const bt=Y[lt].image[Z].image;Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,bt.width,bt.height,yt,ft,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,bt.width,bt.height,0,yt,ft,bt.data)}}else{Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,yt,ft,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,yt,ft,ut[Z]);for(let lt=0;lt<Y.length;lt++){const ot=Y[lt];Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,yt,ft,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,yt,ft,ot.image[Z])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),K.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Et(T,v,N,q,j,K){const St=r.convert(N.format,N.colorSpace),at=r.convert(N.type),dt=x(N.internalFormat,St,at,N.colorSpace),Ht=n.get(v),J=n.get(N);if(J.__renderTarget=v,!Ht.__hasExternalTextures){const ut=Math.max(1,v.width>>K),At=Math.max(1,v.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,dt,ut,At,v.depth,0,St,at,null):e.texImage2D(j,K,dt,ut,At,0,St,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,J.__webglTexture,0,Nt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,J.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const q=v.depthTexture,j=q&&q.isDepthTexture?q.type:null,K=g(v.stencilBuffer,j),St=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Nt(v);Bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{const q=v.textures;for(let j=0;j<q.length;j++){const K=q[j],St=r.convert(K.format,K.colorSpace),at=r.convert(K.type),dt=x(K.internalFormat,St,at,K.colorSpace),Ht=Nt(v);N&&Bt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,dt,v.width,v.height):Bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const j=q.__webglTexture,K=Nt(v);if(v.depthTexture.format===zi)Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===Zi)Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=q}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,v,N){const q=n.get(T);v!==void 0&&Et(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&wt(T)}function ae(T){const v=T.texture,N=n.get(T),q=n.get(v);T.addEventListener("dispose",y);const j=T.textures,K=T.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[at][dt]=i.createFramebuffer()}else N.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)N.__webglFramebuffer[at]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(St)for(let at=0,dt=j.length;at<dt;at++){const Ht=n.get(j[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Bt(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const dt=j[at];N.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const Ht=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),ut=x(dt.internalFormat,Ht,J,dt.colorSpace,T.isXRRenderTarget===!0),At=Nt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,N.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Et(N.__webglFramebuffer[at][dt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else Et(N.__webglFramebuffer[at],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,dt=j.length;at<dt;at++){const Ht=j[at],J=n.get(Ht);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Lt(i.TEXTURE_2D,Ht),Et(N.__webglFramebuffer,T,Ht,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),Lt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Et(N.__webglFramebuffer[dt],T,v,i.COLOR_ATTACHMENT0,at,dt);else Et(N.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,at,0);p(v)&&f(at),e.unbindTexture()}T.depthBuffer&&wt(T)}function Gt(T){const v=T.textures;for(let N=0,q=v.length;N<q;N++){const j=v[N];if(p(j)){const K=R(T),St=n.get(j).__webglTexture;e.bindTexture(K,St),f(K),e.unbindTexture()}}}const he=[],L=[];function Fe(T){if(T.samples>0){if(Bt(T)===!1){const v=T.textures,N=T.width,q=T.height;let j=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,j,i.NEAREST),l===!0&&(he.length=0,L.length=0,he.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Nt(T){return Math.min(s.maxSamples,T.samples)}function Bt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ee(T,v){const N=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==es&&N!==Bn&&(zt.getTransfer(N)===Zt?(q!==Ze||j!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Bt}function Vm(i,t){function e(n,s=Bn){let r;const a=zt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===wh)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Ze)return i.RGBA;if(n===Uh)return i.LUMINANCE;if(n===Ih)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Dh)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Lh)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Sr||n===xr||n===vr||n===Mr)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===ao)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===lo||n===ho||n===uo||n===fo||n===_o||n===po||n===mo||n===go||n===Eo||n===So||n===xo||n===vo||n===Mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Ao||n===Ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===yo||n===To||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gn extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const p=e.getJointPose(E,n),f=this._getHandJoint(c,E);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),_=.02,m=.005;c.inputState.pinching&&d>_+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=_-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends ns{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,_=null,m=null;const E=new Xm,p=e.getContextAttributes();let f=null,R=null;const x=[],g=[],P=new Kt;let b=null;const y=new ke;y.viewport=new le;const C=new ke;C.viewport=new le;const A=[y,C],S=new Wm;let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=x[$];return et===void 0&&(et=new va,x[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=x[$];return et===void 0&&(et=new va,x[$]=et),et.getGripSpace()},this.getHand=function($){let et=x[$];return et===void 0&&(et=new va,x[$]=et),et.getHandSpace()};function O($){const et=g.indexOf($.inputSource);if(et===-1)return;const Et=x[et];Et!==void 0&&(Et.update($.inputSource,$.frame,c||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",W);for(let $=0;$<x.length;$++){const et=g[$];et!==null&&(g[$]=null,x[$].disconnect(et))}w=null,B=null,E.reset(),t.setRenderTarget(f),_=null,d=null,u=null,s=null,R=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new _i(_.framebufferWidth,_.framebufferHeight,{format:Ze,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,Et=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Zi:zi,Et=p.stencil?qi:fi);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new _i(d.textureWidth,d.textureHeight,{format:Ze,type:Cn,depthTexture:new jh(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function W($){for(let et=0;et<$.removed.length;et++){const Et=$.removed[et],rt=g.indexOf(Et);rt>=0&&(g[rt]=null,x[rt].disconnect(Et))}for(let et=0;et<$.added.length;et++){const Et=$.added[et];let rt=g.indexOf(Et);if(rt===-1){for(let wt=0;wt<x.length;wt++)if(wt>=g.length){g.push(Et),rt=wt;break}else if(g[wt]===null){g[wt]=Et,rt=wt;break}if(rt===-1)break}const Rt=x[rt];Rt&&Rt.connect(Et)}}const k=new F,X=new F;function V($,et,Et){k.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(Et.matrixWorld);const rt=k.distanceTo(X),Rt=et.projectionMatrix.elements,wt=Et.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),ae=Rt[14]/(Rt[10]+1),Gt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],L=(Rt[8]-1)/Rt[0],Fe=(wt[8]+1)/wt[0],Nt=Ft*L,Bt=Ft*Fe,Mt=rt/(-L+Fe),ee=Mt*-L;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const vt=Ft+Mt,T=ae+Mt,v=Nt-ee,N=Bt+(rt-ee),q=Gt*ae/T*vt,j=he*ae/T*vt;$.projectionMatrix.makePerspective(v,N,q,j,vt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,Et=$.far;E.texture!==null&&(E.depthNear>0&&(et=E.depthNear),E.depthFar>0&&(Et=E.depthFar)),S.near=C.near=y.near=et,S.far=C.far=y.far=Et,(w!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,B=S.far),y.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,S.layers.mask=y.layers.mask|C.layers.mask;const rt=$.parent,Rt=S.cameras;it(S,rt);for(let wt=0;wt<Rt.length;wt++)it(Rt[wt],rt);Rt.length===2?V(S,y,C):S.projectionMatrix.copy(y.projectionMatrix),ht($,S,rt)};function ht($,et,Et){Et===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(S)};let gt=null;function Lt($,et){if(h=et.getViewerPose(c||a),m=et,h!==null){const Et=h.views;_!==null&&(t.setRenderTargetFramebuffer(R,_.framebuffer),t.setRenderTarget(R));let rt=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let wt=0;wt<Et.length;wt++){const Ft=Et[wt];let ae=null;if(_!==null)ae=_.getViewport(Ft);else{const he=u.getViewSubImage(d,Ft);ae=he.viewport,wt===0&&(t.setRenderTargetTextures(R,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(R))}let Gt=A[wt];Gt===void 0&&(Gt=new ke,Gt.layers.enable(wt),Gt.viewport=new le,A[wt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ae.x,ae.y,ae.width,ae.height),wt===0&&(S.matrix.copy(Gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Gt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const wt=u.getDepthInformation(Et[0]);wt&&wt.isValid&&wt.texture&&E.init(t,wt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const rt=g[Et],Rt=x[Et];rt!==null&&Rt!==void 0&&Rt.update(rt,et,c||a)}gt&&gt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const jt=new qh;jt.setAnimationLoop(Lt),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}}const ei=new dn,Zm=new oe;function jm(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Kh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,R,x,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&_(p,f,g)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),E(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,R,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===be&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===be&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const R=t.get(f),x=R.envMap,g=R.envMapRotation;x&&(p.envMap.value=x,ei.copy(g),ei.x*=-1,ei.y*=-1,ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),p.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(ei)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function _(p,f,R){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function E(p,f){const R=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,x){const g=x.program;n.uniformBlockBinding(R,g)}function c(R,x){let g=s[R.id];g===void 0&&(m(R),g=h(R),s[R.id]=g,R.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(R,P);const b=t.render.frame;r[R.id]!==b&&(d(R),r[R.id]=b)}function h(R){const x=u();R.__bindingPointIndex=x;const g=i.createBuffer(),P=R.__size,b=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,g),g}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const x=s[R.id],g=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,y=g.length;b<y;b++){const C=Array.isArray(g[b])?g[b]:[g[b]];for(let A=0,S=C.length;A<S;A++){const w=C[A];if(_(w,b,A,P)===!0){const B=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let W=0;W<O.length;W++){const k=O[W],X=E(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,B+H,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(R,x,g,P){const b=R.value,y=x+"_"+g;if(P[y]===void 0)return typeof b=="number"||typeof b=="boolean"?P[y]=b:P[y]=b.clone(),!0;{const C=P[y];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return P[y]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function m(R){const x=R.uniforms;let g=0;const P=16;for(let y=0,C=x.length;y<C;y++){const A=Array.isArray(x[y])?x[y]:[x[y]];for(let S=0,w=A.length;S<w;S++){const B=A[S],O=Array.isArray(B.value)?B.value:[B.value];for(let H=0,W=O.length;H<W;H++){const k=O[H],X=E(k),V=g%P,it=V%X.boundary,ht=V+it;g+=it,ht!==0&&P-ht<X.storage&&(g+=P-ht),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=g,g+=X.storage}}}const b=g%P;return b>0&&(g+=P-b),R.__size=g,R.__cache={},this}function E(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function p(R){const x=R.target;x.removeEventListener("dispose",p);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Qm{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const m=new Uint32Array(4),E=new Int32Array(4);let p=null,f=null;const R=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Vn,this.toneMappingExposure=1;const g=this;let P=!1,b=0,y=0,C=null,A=-1,S=null;const w=new le,B=new le;let O=null;const H=new Ot(0);let W=0,k=e.width,X=e.height,V=1,it=null,ht=null;const gt=new le(0,0,k,X),Lt=new le(0,0,k,X);let jt=!1;const $=new qo;let et=!1,Et=!1;const rt=new oe,Rt=new oe,wt=new F,Ft=new le,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function he(){return C===null?V:1}let L=n;function Fe(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const I="webgl2";if(L=Fe(I,M),L===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Nt,Bt,Mt,ee,vt,T,v,N,q,j,K,St,at,dt,Ht,J,ut,At,yt,ft,kt,Ut,Jt,U;function st(){Nt=new s0(L),Nt.init(),Ut=new Vm(L,Nt),Bt=new Jp(L,Nt,t,Ut),Mt=new Gm(L,Nt),Bt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ee=new o0(L),vt=new ym,T=new zm(L,Nt,Mt,vt,Bt,Ut,ee),v=new t0(g),N=new i0(g),q=new _f(L),Jt=new Zp(L,q),j=new r0(L,q,ee,Jt),K=new l0(L,j,q,ee),yt=new c0(L,Bt,T),J=new Qp(vt),St=new Rm(g,v,N,Nt,Bt,Jt,J),at=new jm(g,vt),dt=new wm,Ht=new Dm(Nt),At=new qp(g,v,N,Mt,K,_,l),ut=new Bm(g,K,Bt),U=new Jm(L,ee,Bt,Mt),ft=new jp(L,Nt,ee),kt=new a0(L,Nt,ee),ee.programs=St.programs,g.capabilities=Bt,g.extensions=Nt,g.properties=vt,g.renderLists=dt,g.shadowMap=ut,g.state=Mt,g.info=ee}st();const Y=new qm(g,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(k,X,!1))},this.getSize=function(M){return M.set(k,X)},this.setSize=function(M,I,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,X=I,e.width=Math.floor(M*V),e.height=Math.floor(I*V),G===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(k*V,X*V).floor()},this.setDrawingBufferSize=function(M,I,G){k=M,X=I,V=G,e.width=Math.floor(M*G),e.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,I,G,z){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,I,G,z),Mt.viewport(w.copy(gt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Lt)},this.setScissor=function(M,I,G,z){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,I,G,z),Mt.scissor(B.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){Mt.setScissorTest(jt=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(M=!0,I=!0,G=!0){let z=0;if(M){let D=!1;if(C!==null){const tt=C.texture.format;D=tt===$o||tt===Ko||tt===Yo}if(D){const tt=C.texture.type,ct=tt===Cn||tt===fi||tt===Rs||tt===qi||tt===Vo||tt===Wo,_t=At.getClearColor(),pt=At.getClearAlpha(),Tt=_t.r,Ct=_t.g,mt=_t.b;ct?(m[0]=Tt,m[1]=Ct,m[2]=mt,m[3]=pt,L.clearBufferuiv(L.COLOR,0,m)):(E[0]=Tt,E[1]=Ct,E[2]=mt,E[3]=pt,L.clearBufferiv(L.COLOR,0,E))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT),G&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Ht.dispose(),vt.dispose(),v.dispose(),N.dispose(),K.dispose(),Jt.dispose(),U.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",hc),Y.removeEventListener("sessionend",dc),qn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=ee.autoReset,I=ut.enabled,G=ut.autoUpdate,z=ut.needsUpdate,D=ut.type;st(),ee.autoReset=M,ut.enabled=I,ut.autoUpdate=G,ut.needsUpdate=z,ut.type=D}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bt(M){const I=M.target;I.removeEventListener("dispose",bt),ce(I)}function ce(M){Se(M),vt.remove(M)}function Se(M){const I=vt.get(M).programs;I!==void 0&&(I.forEach(function(G){St.releaseProgram(G)}),M.isShaderMaterial&&St.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,z,D,tt){I===null&&(I=ae);const ct=D.isMesh&&D.matrixWorld.determinant()<0,_t=qd(M,I,G,z,D);Mt.setMaterial(z,ct);let pt=G.index,Tt=1;if(z.wireframe===!0){if(pt=j.getWireframeAttribute(G),pt===void 0)return;Tt=2}const Ct=G.drawRange,mt=G.attributes.position;let Vt=Ct.start*Tt,Qt=(Ct.start+Ct.count)*Tt;tt!==null&&(Vt=Math.max(Vt,tt.start*Tt),Qt=Math.min(Qt,(tt.start+tt.count)*Tt)),pt!==null?(Vt=Math.max(Vt,0),Qt=Math.min(Qt,pt.count)):mt!=null&&(Vt=Math.max(Vt,0),Qt=Math.min(Qt,mt.count));const ne=Qt-Vt;if(ne<0||ne===1/0)return;Jt.setup(D,z,_t,G,pt);let Re,$t=ft;if(pt!==null&&(Re=q.get(pt),$t=kt,$t.setIndex(Re)),D.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*he()),$t.setMode(L.LINES)):$t.setMode(L.TRIANGLES);else if(D.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),Mt.setLineWidth(xt*he()),D.isLineSegments?$t.setMode(L.LINES):D.isLineLoop?$t.setMode(L.LINE_LOOP):$t.setMode(L.LINE_STRIP)}else D.isPoints?$t.setMode(L.POINTS):D.isSprite&&$t.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,_n=D._multiDrawCounts,Xt=D._multiDrawCount,We=pt?q.get(pt).bytesPerElement:1,Ai=vt.get(z).currentProgram.getUniforms();for(let Pe=0;Pe<Xt;Pe++)Ai.setValue(L,"_gl_DrawID",Pe),$t.render(xt[Pe]/We,_n[Pe])}else if(D.isInstancedMesh)$t.renderInstances(Vt,ne,D.count);else if(G.isInstancedBufferGeometry){const xt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_n=Math.min(G.instanceCount,xt);$t.renderInstances(Vt,ne,_n)}else $t.render(Vt,ne)};function qt(M,I,G){M.transparent===!0&&M.side===An&&M.forceSinglePass===!1?(M.side=be,M.needsUpdate=!0,zs(M,I,G),M.side=$n,M.needsUpdate=!0,zs(M,I,G),M.side=An):zs(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),f=Ht.get(G),f.init(I),x.push(f),G.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),M!==G&&M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const z=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const _t=tt[ct];qt(_t,G,D),z.add(_t)}else qt(tt,G,D),z.add(tt)}),x.pop(),f=null,z},this.compileAsync=function(M,I,G=null){const z=this.compile(M,I,G);return new Promise(D=>{function tt(){if(z.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){D(M);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ve=null;function fn(M){Ve&&Ve(M)}function hc(){qn.stop()}function dc(){qn.start()}const qn=new qh;qn.setAnimationLoop(fn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(M){Ve=M,Y.setAnimationLoop(M),M===null?qn.stop():qn.start()},Y.addEventListener("sessionstart",hc),Y.addEventListener("sessionend",dc),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,I,C),f=Ht.get(M,x.length),f.init(I),x.push(f),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Rt),Et=this.localClippingEnabled,et=J.init(this.clippingPlanes,Et),p=dt.get(M,R.length),p.init(),R.push(p),Y.enabled===!0&&Y.isPresenting===!0){const tt=g.xr.getDepthSensingMesh();tt!==null&&Yr(tt,I,-1/0,g.sortObjects)}Yr(M,I,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(it,ht),Gt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Gt&&At.addToRenderList(p,M),this.info.render.frame++,et===!0&&J.beginShadows();const G=f.state.shadowsArray;ut.render(G,M,I),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,D=p.transmissive;if(f.setupLights(),I.isArrayCamera){const tt=I.cameras;if(D.length>0)for(let ct=0,_t=tt.length;ct<_t;ct++){const pt=tt[ct];fc(z,D,M,pt)}Gt&&At.render(M);for(let ct=0,_t=tt.length;ct<_t;ct++){const pt=tt[ct];uc(p,M,pt,pt.viewport)}}else D.length>0&&fc(z,D,M,I),Gt&&At.render(M),uc(p,M,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(g,M,I),Jt.resetDefaultState(),A=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],et===!0&&J.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Yr(M,I,G,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){z&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);const ct=K.update(M),_t=M.material;_t.visible&&p.push(M,ct,_t,G,Ft.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const ct=K.update(M),_t=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(_t)){const pt=ct.groups;for(let Tt=0,Ct=pt.length;Tt<Ct;Tt++){const mt=pt[Tt],Vt=_t[mt.materialIndex];Vt&&Vt.visible&&p.push(M,ct,Vt,G,Ft.z,mt)}}else _t.visible&&p.push(M,ct,_t,G,Ft.z,null)}}const tt=M.children;for(let ct=0,_t=tt.length;ct<_t;ct++)Yr(tt[ct],I,G,z)}function uc(M,I,G,z){const D=M.opaque,tt=M.transmissive,ct=M.transparent;f.setupLightsView(G),et===!0&&J.setGlobalState(g.clippingPlanes,G),z&&Mt.viewport(w.copy(z)),D.length>0&&Hs(D,I,G),tt.length>0&&Hs(tt,I,G),ct.length>0&&Hs(ct,I,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function fc(M,I,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new _i(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Is:Cn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[z.id],ct=z.viewport||w;tt.setSize(ct.z,ct.w);const _t=g.getRenderTarget();g.setRenderTarget(tt),g.getClearColor(H),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),Gt&&At.render(G);const pt=g.toneMapping;g.toneMapping=Vn;const Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),et===!0&&J.setGlobalState(g.clippingPlanes,z),Hs(M,G,z),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let mt=0,Vt=I.length;mt<Vt;mt++){const Qt=I[mt],ne=Qt.object,Re=Qt.geometry,$t=Qt.material,xt=Qt.group;if($t.side===An&&ne.layers.test(z.layers)){const _n=$t.side;$t.side=be,$t.needsUpdate=!0,_c(ne,G,z,Re,$t,xt),$t.side=_n,$t.needsUpdate=!0,Ct=!0}}Ct===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}g.setRenderTarget(_t),g.setClearColor(H,W),Tt!==void 0&&(z.viewport=Tt),g.toneMapping=pt}function Hs(M,I,G){const z=I.isScene===!0?I.overrideMaterial:null;for(let D=0,tt=M.length;D<tt;D++){const ct=M[D],_t=ct.object,pt=ct.geometry,Tt=z===null?ct.material:z,Ct=ct.group;_t.layers.test(G.layers)&&_c(_t,I,G,pt,Tt,Ct)}}function _c(M,I,G,z,D,tt){M.onBeforeRender(g,I,G,z,D,tt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(g,I,G,z,M,tt),D.transparent===!0&&D.side===An&&D.forceSinglePass===!1?(D.side=be,D.needsUpdate=!0,g.renderBufferDirect(G,I,z,D,M,tt),D.side=$n,D.needsUpdate=!0,g.renderBufferDirect(G,I,z,D,M,tt),D.side=An):g.renderBufferDirect(G,I,z,D,M,tt),M.onAfterRender(g,I,G,z,D,tt)}function zs(M,I,G){I.isScene!==!0&&(I=ae);const z=vt.get(M),D=f.state.lights,tt=f.state.shadowsArray,ct=D.state.version,_t=St.getParameters(M,D.state,tt,I,G),pt=St.getProgramCacheKey(_t);let Tt=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",bt),Tt=new Map,z.programs=Tt);let Ct=Tt.get(pt);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===ct)return mc(M,_t),Ct}else _t.uniforms=St.getUniforms(M),M.onBeforeCompile(_t,g),Ct=St.acquireProgram(_t,pt),Tt.set(pt,Ct),z.uniforms=_t.uniforms;const mt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(mt.clippingPlanes=J.uniform),mc(M,_t),z.needsLights=jd(M),z.lightsStateVersion=ct,z.needsLights&&(mt.ambientLightColor.value=D.state.ambient,mt.lightProbe.value=D.state.probe,mt.directionalLights.value=D.state.directional,mt.directionalLightShadows.value=D.state.directionalShadow,mt.spotLights.value=D.state.spot,mt.spotLightShadows.value=D.state.spotShadow,mt.rectAreaLights.value=D.state.rectArea,mt.ltc_1.value=D.state.rectAreaLTC1,mt.ltc_2.value=D.state.rectAreaLTC2,mt.pointLights.value=D.state.point,mt.pointLightShadows.value=D.state.pointShadow,mt.hemisphereLights.value=D.state.hemi,mt.directionalShadowMap.value=D.state.directionalShadowMap,mt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,mt.spotShadowMap.value=D.state.spotShadowMap,mt.spotLightMatrix.value=D.state.spotLightMatrix,mt.spotLightMap.value=D.state.spotLightMap,mt.pointShadowMap.value=D.state.pointShadowMap,mt.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function pc(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Rr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function mc(M,I){const G=vt.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function qd(M,I,G,z,D){I.isScene!==!0&&(I=ae),T.resetTextureUnits();const tt=I.fog,ct=z.isMeshStandardMaterial?I.environment:null,_t=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:es,pt=(z.isMeshStandardMaterial?N:v).get(z.envMap||ct),Tt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ct=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!G.morphAttributes.position,Vt=!!G.morphAttributes.normal,Qt=!!G.morphAttributes.color;let ne=Vn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ne=g.toneMapping);const Re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=Re!==void 0?Re.length:0,xt=vt.get(z),_n=f.state.lights;if(et===!0&&(Et===!0||M!==S)){const Oe=M===S&&z.id===A;J.setState(z,M,Oe)}let Xt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==_n.state.version||xt.outputColorSpace!==_t||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==pt||z.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Tt||xt.vertexTangents!==Ct||xt.morphTargets!==mt||xt.morphNormals!==Vt||xt.morphColors!==Qt||xt.toneMapping!==ne||xt.morphTargetsCount!==$t)&&(Xt=!0):(Xt=!0,xt.__version=z.version);let We=xt.currentProgram;Xt===!0&&(We=zs(z,I,D));let Ai=!1,Pe=!1,os=!1;const ie=We.getUniforms(),Qe=xt.uniforms;if(Mt.useProgram(We.program)&&(Ai=!0,Pe=!0,os=!0),z.id!==A&&(A=z.id,Pe=!0),Ai||S!==M){Mt.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),zu(rt),Vu(rt),ie.setValue(L,"projectionMatrix",rt)):ie.setValue(L,"projectionMatrix",M.projectionMatrix),ie.setValue(L,"viewMatrix",M.matrixWorldInverse);const Pn=ie.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,wt.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&ie.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ie.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Pe=!0,os=!0)}if(D.isSkinnedMesh){ie.setOptional(L,D,"bindMatrix"),ie.setOptional(L,D,"bindMatrixInverse");const Oe=D.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ie.setValue(L,"boneTexture",Oe.boneTexture,T))}D.isBatchedMesh&&(ie.setOptional(L,D,"batchingTexture"),ie.setValue(L,"batchingTexture",D._matricesTexture,T),ie.setOptional(L,D,"batchingIdTexture"),ie.setValue(L,"batchingIdTexture",D._indirectTexture,T),ie.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&ie.setValue(L,"batchingColorTexture",D._colorsTexture,T));const cs=G.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&yt.update(D,G,We),(Pe||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,ie.setValue(L,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=pt,Qe.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Qe.envMapIntensity.value=I.environmentIntensity),Pe&&(ie.setValue(L,"toneMappingExposure",g.toneMappingExposure),xt.needsLights&&Zd(Qe,os),tt&&z.fog===!0&&at.refreshFogUniforms(Qe,tt),at.refreshMaterialUniforms(Qe,z,V,X,f.state.transmissionRenderTarget[M.id]),Rr.upload(L,pc(xt),Qe,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rr.upload(L,pc(xt),Qe,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ie.setValue(L,"center",D.center),ie.setValue(L,"modelViewMatrix",D.modelViewMatrix),ie.setValue(L,"normalMatrix",D.normalMatrix),ie.setValue(L,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Oe=z.uniformsGroups;for(let Pn=0,Un=Oe.length;Pn<Un;Pn++){const gc=Oe[Pn];U.update(gc,We),U.bind(gc,We)}}return We}function Zd(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function jd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,G){vt.get(M.texture).__webglTexture=I,vt.get(M.depthTexture).__webglTexture=G;const z=vt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const G=vt.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,G=0){C=M,b=I,y=G;let z=!0,D=null,tt=!1,ct=!1;if(M){const pt=vt.get(M);if(pt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(pt.__hasExternalTextures)T.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const mt=M.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&vt.has(mt)&&(M.width!==mt.image.width||M.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ct=!0);const Ct=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?D=Ct[I][G]:D=Ct[I],tt=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?D=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[G]:D=Ct,w.copy(M.viewport),B.copy(M.scissor),O=M.scissorTest}else w.copy(gt).multiplyScalar(V).floor(),B.copy(Lt).multiplyScalar(V).floor(),O=jt;if(Mt.bindFramebuffer(L.FRAMEBUFFER,D)&&z&&Mt.drawBuffers(M,D),Mt.viewport(w),Mt.scissor(B),Mt.setScissorTest(O),tt){const pt=vt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,G)}else if(ct){const pt=vt.get(M.texture),Tt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,G||0,Tt)}A=-1},this.readRenderTargetPixels=function(M,I,G,z,D,tt,ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const pt=M.texture,Tt=pt.format,Ct=pt.type;if(!Bt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&G>=0&&G<=M.height-D&&L.readPixels(I,G,z,D,Ut.convert(Tt),Ut.convert(Ct),tt)}finally{const pt=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(M,I,G,z,D,tt,ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const pt=M.texture,Tt=pt.format,Ct=pt.type;if(!Bt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-z&&G>=0&&G<=M.height-D){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);const mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),L.readPixels(I,G,z,D,Ut.convert(Tt),Ut.convert(Ct),0);const Vt=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Vt);const Qt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hu(L,Qt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(mt),L.deleteSync(Qt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,G=0){M.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-G),D=Math.floor(M.image.width*z),tt=Math.floor(M.image.height*z),ct=I!==null?I.x:0,_t=I!==null?I.y:0;T.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ct,_t,D,tt),Mt.unbindTexture()},this.copyTextureToTexture=function(M,I,G=null,z=null,D=0){M.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],I=arguments[2],D=arguments[3]||0,G=null);let tt,ct,_t,pt,Tt,Ct,mt,Vt,Qt;const ne=M.isCompressedTexture?M.mipmaps[D]:M.image;G!==null?(tt=G.max.x-G.min.x,ct=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,pt=G.min.x,Tt=G.min.y,Ct=G.isBox3?G.min.z:0):(tt=ne.width,ct=ne.height,_t=ne.depth||1,pt=0,Tt=0,Ct=0),z!==null?(mt=z.x,Vt=z.y,Qt=z.z):(mt=0,Vt=0,Qt=0);const Re=Ut.convert(I.format),$t=Ut.convert(I.type);let xt;I.isData3DTexture?(T.setTexture3D(I,0),xt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),xt=L.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),xt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const _n=L.getParameter(L.UNPACK_ROW_LENGTH),Xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),We=L.getParameter(L.UNPACK_SKIP_PIXELS),Ai=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const os=M.isDataArrayTexture||M.isData3DTexture,ie=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Qe=vt.get(M),cs=vt.get(I),Oe=vt.get(Qe.__renderTarget),Pn=vt.get(cs.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Un=0;Un<_t;Un++)os&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,D,Ct+Un),M.isDepthTexture?(ie&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,D,Qt+Un),L.blitFramebuffer(pt,Tt,tt,ct,mt,Vt,tt,ct,L.DEPTH_BUFFER_BIT,L.NEAREST)):ie?L.copyTexSubImage3D(xt,D,mt,Vt,Qt+Un,pt,Tt,tt,ct):L.copyTexSubImage2D(xt,D,mt,Vt,Qt+Un,pt,Tt,tt,ct);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ie?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(xt,D,mt,Vt,Qt,tt,ct,_t,Re,$t,ne.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(xt,D,mt,Vt,Qt,tt,ct,_t,Re,ne.data):L.texSubImage3D(xt,D,mt,Vt,Qt,tt,ct,_t,Re,$t,ne):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,mt,Vt,tt,ct,Re,$t,ne.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,mt,Vt,ne.width,ne.height,Re,ne.data):L.texSubImage2D(L.TEXTURE_2D,D,mt,Vt,tt,ct,Re,$t,ne);L.pixelStorei(L.UNPACK_ROW_LENGTH,_n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),D===0&&I.generateMipmaps&&L.generateMipmap(xt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,G=null,z=null,D=0){return M.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,z=arguments[1]||null,M=arguments[2],I=arguments[3],D=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,G,z,D)},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){b=0,y=0,C=null,Mt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class jo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nd extends xi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new F,Cr=new F,ml=new oe,_s=new Hh,hr=new Fr,Ma=new F,gl=new F;class eg extends Ee{constructor(t=new ze,e=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)br.fromBufferAttribute(e,s-1),Cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=br.distanceTo(Cr);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;ml.copy(s).invert(),_s.copy(t.ray).applyMatrix4(ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const _=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let E=_,p=m-1;E<p;E+=c){const f=h.getX(E),R=h.getX(E+1),x=dr(this,t,_s,l,f,R);x&&e.push(x)}if(this.isLineLoop){const E=h.getX(m-1),p=h.getX(_),f=dr(this,t,_s,l,E,p);f&&e.push(f)}}else{const _=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let E=_,p=m-1;E<p;E+=c){const f=dr(this,t,_s,l,E,E+1);f&&e.push(f)}if(this.isLineLoop){const E=dr(this,t,_s,l,m-1,_);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(br.fromBufferAttribute(a,s),Cr.fromBufferAttribute(a,r),e.distanceSqToSegment(br,Cr,Ma,gl)>n)return;Ma.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:gl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const El=new F,Sl=new F;class ng extends eg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)El.fromBufferAttribute(e,s),Sl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+El.distanceTo(Sl);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xe extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],_=[];let m=0;const E=[],p=n/2;let f=0;R(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(_,2));function R(){const g=new F,P=new F;let b=0;const y=(e-t)/n;for(let C=0;C<=r;C++){const A=[],S=C/r,w=S*(e-t)+t;for(let B=0;B<=s;B++){const O=B/s,H=O*l+o,W=Math.sin(H),k=Math.cos(H);P.x=w*W,P.y=-S*n+p,P.z=w*k,u.push(P.x,P.y,P.z),g.set(W,y,k).normalize(),d.push(g.x,g.y,g.z),_.push(O,1-S),A.push(m++)}E.push(A)}for(let C=0;C<s;C++)for(let A=0;A<r;A++){const S=E[A][C],w=E[A+1][C],B=E[A+1][C+1],O=E[A][C+1];(t>0||A!==0)&&(h.push(S,w,O),b+=3),(e>0||A!==r-1)&&(h.push(w,B,O),b+=3)}c.addGroup(f,b,0),f+=b}function x(g){const P=m,b=new Kt,y=new F;let C=0;const A=g===!0?t:e,S=g===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*S,0),d.push(0,S,0),_.push(.5,.5),m++;const w=m;for(let B=0;B<=s;B++){const H=B/s*l+o,W=Math.cos(H),k=Math.sin(H);y.x=A*k,y.y=p*S,y.z=A*W,u.push(y.x,y.y,y.z),d.push(0,S,0),b.x=W*.5+.5,b.y=k*.5*S+.5,_.push(b.x,b.y),m++}for(let B=0;B<s;B++){const O=P+B,H=w+B;g===!0?h.push(H,H+1,O):h.push(H+1,H,O),C+=3}c.addGroup(f,C,g===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new F,d=new F,_=[],m=[],E=[],p=[];for(let f=0;f<=n;f++){const R=[],x=f/n;let g=0;f===0&&a===0?g=.5/e:f===n&&l===Math.PI&&(g=-.5/e);for(let P=0;P<=e;P++){const b=P/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),p.push(b+g,1-x),R.push(c++)}h.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){const x=h[f][R+1],g=h[f][R],P=h[f+1][R],b=h[f+1][R+1];(f!==0||a>0)&&_.push(x,g,b),(f!==n-1||l<Math.PI)&&_.push(g,P,b)}this.setIndex(_),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qo extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new F,u=new F,d=new F;for(let _=0;_<=n;_++)for(let m=0;m<=s;m++){const E=m/s*r,p=_/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(E),u.y=(t+e*Math.cos(p))*Math.sin(E),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(_/n)}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const E=(s+1)*_+m-1,p=(s+1)*(_-1)+m-1,f=(s+1)*(_-1)+m,R=(s+1)*_+m;a.push(E,p,R),a.push(p,f,R)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ig extends xi{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Ot(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ni extends xi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Aa=new oe,xl=new F,vl=new F;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vl),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rg extends sg{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ra extends id{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ag extends id{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends ng{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ot(n),s=new Ot(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,_=0,m=-o;d<=e;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const E=d===r?n:s;E.toArray(c,_),_+=3,E.toArray(c,_),_+=3,E.toArray(c,_),_+=3,E.toArray(c,_),_+=3}const h=new ze;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));const u=new nd({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);const cg="chest",lg=1.75,hg=[{name:"chest",parent:null,length:.36,position:[0,1.25,0],direction:[0,1,0],radius:.05,color:"#38bdf8"},{name:"left_shoulder",parent:"chest",length:.16,position:[.18,.14,0],direction:[1,0,0],radius:.038,color:"#0ea5e9"},{name:"left_upper_arm",parent:"left_shoulder",length:.28,position:[.16,0,0],direction:[0,-1,0],radius:.036,color:"#0284c7"},{name:"left_forearm",parent:"left_upper_arm",length:.25,position:[0,-.28,0],direction:[0,-1,0],radius:.032,color:"#0284c7"},{name:"left_hand",parent:"left_forearm",length:.14,position:[0,-.25,0],direction:[0,-1,0],radius:.026,color:"#38bdf8"},{name:"right_shoulder",parent:"chest",length:.16,position:[-.18,.14,0],direction:[-1,0,0],radius:.038,color:"#0ea5e9"},{name:"right_upper_arm",parent:"right_shoulder",length:.28,position:[-.16,0,0],direction:[0,-1,0],radius:.036,color:"#0284c7"},{name:"right_forearm",parent:"right_upper_arm",length:.25,position:[0,-.28,0],direction:[0,-1,0],radius:.032,color:"#0284c7"},{name:"right_hand",parent:"right_forearm",length:.14,position:[0,-.25,0],direction:[0,-1,0],radius:.026,color:"#38bdf8"},{name:"left_thigh",parent:"chest",length:.42,position:[.1,-.28,0],direction:[0,-1,0],radius:.044,color:"#06b6d4"},{name:"left_shin",parent:"left_thigh",length:.4,position:[0,-.42,0],direction:[0,-1,0],radius:.038,color:"#0891b2"},{name:"left_foot",parent:"left_shin",length:.18,position:[0,-.4,0],direction:[0,0,1],radius:.03,color:"#22d3ee"},{name:"right_thigh",parent:"chest",length:.42,position:[-.1,-.28,0],direction:[0,-1,0],radius:.044,color:"#06b6d4"},{name:"right_shin",parent:"right_thigh",length:.4,position:[0,-.42,0],direction:[0,-1,0],radius:.038,color:"#0891b2"},{name:"right_foot",parent:"right_shin",length:.18,position:[0,-.4,0],direction:[0,0,1],radius:.03,color:"#22d3ee"}],dg={root:cg,height:lg,bones:hg};function sd(i,t,e,n){return new Je(t,n,-e,i).normalize()}class ug{constructor(t){Q(this,"scene");Q(this,"rootGroup");Q(this,"skeleton");Q(this,"boneGroups",new Map);Q(this,"boneMeshes",new Map);Q(this,"trackerLedMeshes",new Map);Q(this,"onlineChassisMaterial");Q(this,"jointPivotMaterial");Q(this,"trackerPuckMaterial");Q(this,"activeSensorLedMaterial");Q(this,"inactiveSensorLedMaterial");Q(this,"offlineChassisMaterial");Q(this,"visorMaterial");Q(this,"accentLineMaterial");Q(this,"isCalibrated",!1);Q(this,"calibOffsets",new Map);Q(this,"reZeroYawOffset",new Je(0,0,0,1));this.scene=t,this.skeleton=dg,this.rootGroup=new Gn,this.rootGroup.name="avatar_root",this.scene.add(this.rootGroup),this.onlineChassisMaterial=new ni({color:3718648,metalness:.35,roughness:.25,emissive:165063,emissiveIntensity:.15}),this.jointPivotMaterial=new ni({color:165063,metalness:.8,roughness:.2,emissive:223649,emissiveIntensity:.12}),this.trackerPuckMaterial=new ni({color:1976635,metalness:.55,roughness:.35}),this.activeSensorLedMaterial=new ni({color:58879,emissive:58879,emissiveIntensity:1.5,metalness:.1,roughness:.1}),this.inactiveSensorLedMaterial=new ni({color:6583435,emissive:3359061,emissiveIntensity:.25,roughness:.5}),this.offlineChassisMaterial=new ni({color:9741240,metalness:.45,roughness:.35,transparent:!1}),this.visorMaterial=new ni({color:58879,emissive:58879,emissiveIntensity:.95,metalness:.2,roughness:.1}),this.accentLineMaterial=new Xo({color:58879}),this.buildSkeleton()}buildSkeleton(){for(const t of this.skeleton.bones){const e=new Gn;e.name=`bone_${t.name}`,e.position.set(t.position[0],t.position[1],t.position[2]),this.boneGroups.set(t.name,e),this.boneMeshes.set(t.name,[])}for(const t of this.skeleton.bones){const e=this.boneGroups.get(t.name);if(t.parent===null)this.rootGroup.add(e);else{const n=this.boneGroups.get(t.parent);n?n.add(e):this.rootGroup.add(e)}this.createBoneMesh(t,e)}}createBoneMesh(t,e){const n=[];if(t.name!=="chest"){const r=t.radius*1.1,a=new Jo(r,18,18),o=new te(a,this.jointPivotMaterial);o.castShadow=!0,e.add(o),n.push(o);const l=new Xe(r*1.08,r*1.08,r*.35,16),c=new te(l,this.jointPivotMaterial);e.add(c),n.push(c)}if(t.name==="chest"){const r=new Xe(.15,.12,.24,8),a=new te(r,this.offlineChassisMaterial);a.position.set(0,-.02,0),a.scale.set(1.15,1,.72),a.castShadow=!0,e.add(a),n.push(a);const o=new Xe(.09,.08,.1,8),l=new te(o,this.jointPivotMaterial);l.position.set(0,-.17,0),l.scale.set(1.05,1,.7),l.castShadow=!0,e.add(l),n.push(l);const c=new Xe(.12,.09,.08,8),h=new te(c,this.offlineChassisMaterial);h.position.set(0,-.24,0),h.scale.set(1.15,1,.75),e.add(h),n.push(h);const u=new Xe(.038,.045,.09,16),d=new te(u,this.jointPivotMaterial);d.position.set(0,.13,0),e.add(d),n.push(d);const _=new Gn;_.position.set(0,.22,0);const m=new Xe(.075,.062,.15,10),E=new te(m,this.offlineChassisMaterial);E.scale.set(.9,1,1.15),E.castShadow=!0,_.add(E),n.push(E);const p=new Xe(.076,.064,.05,10,1,!1,0,Math.PI),f=new te(p,this.visorMaterial);f.position.set(0,.015,.005),f.rotation.y=Math.PI/2,f.scale.set(.92,1,1.18),_.add(f);const R=new rn(.12,.006,.02),x=new te(R,this.accentLineMaterial);x.position.set(0,.04,.08),_.add(x),e.add(_)}else if(t.name.includes("hand")){const r=new rn(.055,t.length*.7,.026),a=new te(r,this.offlineChassisMaterial);a.position.set(0,-t.length*.45,0),a.castShadow=!0,e.add(a),n.push(a);const o=new rn(.046,t.length*.35,.02),l=new te(o,this.jointPivotMaterial);l.position.set(0,-t.length*.88,0),e.add(l),n.push(l)}else if(t.name.includes("foot")){const r=new rn(.065,.042,t.length),a=new te(r,this.offlineChassisMaterial);a.position.set(0,-.02,t.length*.42),a.castShadow=!0,e.add(a),n.push(a);const o=new rn(.062,.05,.06),l=new te(o,this.jointPivotMaterial);l.position.set(0,-.01,.02),e.add(l),n.push(l)}else{const r=new Xe(t.radius*.82,t.radius*1.05,t.length,16),a=new te(r,this.offlineChassisMaterial);a.castShadow=!0;const o=t.direction;o[1]===-1?a.position.set(0,-t.length*.5,0):o[0]===1?(a.rotation.z=-Math.PI/2,a.position.set(t.length*.5,0,0)):o[0]===-1?(a.rotation.z=Math.PI/2,a.position.set(-t.length*.5,0,0)):a.position.set(0,-t.length*.5,0),e.add(a),n.push(a)}if(["chest","left_upper_arm","right_upper_arm","left_forearm","right_forearm","left_hand","right_hand","left_thigh","right_thigh","left_shin","right_shin","left_foot","right_foot"].includes(t.name)){const r=new Gn,a=.024,o=.012,l=new Xe(a,a*1.05,o,16),c=new te(l,this.trackerPuckMaterial);c.rotation.x=Math.PI/2,r.add(c);const h=new Qo(a*.65,.0035,8,20),u=new te(h,this.inactiveSensorLedMaterial);u.position.set(0,0,o*.55),r.add(u),this.trackerLedMeshes.set(t.name,u),t.name==="chest"?r.position.set(0,0,.1):t.name.includes("thigh")?r.position.set(0,-t.length*.45,.052):t.name.includes("shin")?r.position.set(0,-t.length*.45,.046):t.name.includes("upper_arm")?r.position.set(0,-t.length*.45,.044):t.name.includes("forearm")?r.position.set(0,-t.length*.45,.04):t.name.includes("hand")?r.position.set(0,-t.length*.42,.024):t.name.includes("foot")&&(r.position.set(0,.024,t.length*.45),r.rotation.x=-Math.PI/2),e.add(r)}this.boneMeshes.set(t.name,n)}calibratePose(t){this.calibOffsets.clear(),this.reZeroYawOffset.set(0,0,0,1),t.forEach((e,n)=>{const s=e.clone().invert().normalize();this.calibOffsets.set(n,s)}),this.isCalibrated=!0}reZeroYaw(){var r;let t=(r=this.boneGroups.get("chest"))==null?void 0:r.quaternion.clone();t||(t=new Je(0,0,0,1));const e=new F(0,0,1).applyQuaternion(t),s=-Math.atan2(e.x,e.z)*.5;this.reZeroYawOffset.set(0,Math.sin(s),0,Math.cos(s)).normalize()}getCalibrationOffsets(){if(!this.isCalibrated||this.calibOffsets.size===0)return null;const t={};return this.calibOffsets.forEach((e,n)=>{const s=this.reZeroYawOffset.clone().multiply(e).normalize();t[n]=[s.x,s.y,s.z,s.w]}),t}getCalibratedWorldQuat(t,e){const n=this.calibOffsets.get(t);let s;return n?s=n.clone().multiply(e).normalize():s=e.clone(),this.reZeroYawOffset.clone().multiply(s).normalize()}updatePoses(t){const e=new Map;for(const[s,r]of t)if(r.isOnline&&r.quat){const a=this.getCalibratedWorldQuat(s,r.quat);e.set(s,a)}const n=new Je(0,0,0,1);this.traverseAndUpdateBones(this.skeleton.root,n,e,t)}traverseAndUpdateBones(t,e,n,s){const r=this.boneGroups.get(t);if(!r)return;const a=s.get(t),o=a?a.isOnline:!1;let l;n.has(t)?l=n.get(t):l=e.clone();const h=e.clone().invert().multiply(l).normalize();r.quaternion.copy(h),this.updateBoneMaterial(t,o);const u=this.skeleton.bones.filter(d=>d.parent===t);for(const d of u)this.traverseAndUpdateBones(d.name,l,n,s)}updateBoneMaterial(t,e){const n=this.boneMeshes.get(t);if(n){const r=e?this.onlineChassisMaterial:this.offlineChassisMaterial;for(const a of n)(a.material===this.onlineChassisMaterial||a.material===this.offlineChassisMaterial)&&a.material!==r&&(a.material=r)}const s=this.trackerLedMeshes.get(t);if(s){const r=e?this.activeSensorLedMaterial:this.inactiveSensorLedMaterial;s.material!==r&&(s.material=r)}}resetToNPose(){this.isCalibrated=!1,this.calibOffsets.clear(),this.reZeroYawOffset.set(0,0,0,1);for(const t of this.boneGroups.values())t.quaternion.set(0,0,0,1)}}class fg{constructor(){Q(this,"bufferDelayMs",75);Q(this,"buffers",new Map);Q(this,"maxHistorySamples",120);Q(this,"lastSampleRxTimes",new Map);Q(this,"serverTimeOffsetMs",0)}setBufferDelay(t){this.bufferDelayMs=Math.max(30,Math.min(250,t))}setServerTimeSync(t){this.serverTimeOffsetMs=t-Date.now()}pushSample(t,e,n,s,r){const a=performance.now();this.lastSampleRxTimes.set(t,a);let o=this.buffers.get(t);o||(o=[],this.buffers.set(t,o)),o.push({seq:e,t_ms:n,server_time_ms:s||Date.now()+this.serverTimeOffsetMs,rx_time_ms:a,quat:r.clone()}),o.length>this.maxHistorySamples&&o.splice(0,o.length-this.maxHistorySamples)}isRoleOnline(t){const e=this.lastSampleRxTimes.get(t);return e?performance.now()-e<1200:!1}getInterpolatedQuaternion(t,e=performance.now()){const n=this.isRoleOnline(t),s=this.buffers.get(t);if(!s||s.length===0)return null;const r=e-this.bufferDelayMs;for(;s.length>2&&s[0].rx_time_ms<r-600;)s.shift();const a=s[s.length-1];if(r>=a.rx_time_ms){const l=Math.max(10,Math.round(e-a.rx_time_ms+this.bufferDelayMs));return{quat:a.quat.clone(),latencyMs:l,isOnline:n}}const o=s[0];if(r<=o.rx_time_ms){const l=Math.max(10,Math.round(e-o.rx_time_ms+this.bufferDelayMs));return{quat:o.quat.clone(),latencyMs:l,isOnline:n}}for(let l=0;l<s.length-1;l++){const c=s[l],h=s[l+1];if(c.rx_time_ms<=r&&r<=h.rx_time_ms){const u=h.rx_time_ms-c.rx_time_ms,d=u>.001?(r-c.rx_time_ms)/u:0,_=Math.max(0,Math.min(1,d)),m=c.quat.clone().slerp(h.quat,_),E=Math.max(5,e-c.rx_time_ms),p=Math.round(E+this.bufferDelayMs);return{quat:m,latencyMs:p,isOnline:n}}}return{quat:a.quat.clone(),latencyMs:Math.round(e-a.rx_time_ms+this.bufferDelayMs),isOnline:n}}clear(){this.buffers.clear(),this.lastSampleRxTimes.clear()}}class _g{constructor(t){Q(this,"container");Q(this,"scene");Q(this,"camera");Q(this,"renderer");Q(this,"avatar");Q(this,"jitterBuffer");Q(this,"isMouseDown",!1);Q(this,"mousePrev",{x:0,y:0});Q(this,"spherical",{radius:3.2,theta:.45,phi:Math.PI/2.3});Q(this,"cameraTarget",new F(0,1.05,0));Q(this,"currentLatencyMs",0);Q(this,"onLatencyUpdate");Q(this,"onFpsUpdate");Q(this,"isPlaybackMode",!1);Q(this,"playbackPoses",new Map);Q(this,"frameCount",0);Q(this,"lastFpsCheck",performance.now());this.container=t,this.scene=new tg,this.scene.background=new Ot(659229),this.scene.fog=new jo(659229,.015);const e=t.clientWidth||800,n=t.clientHeight||600;this.camera=new ke(42,e/n,.1,100),this.updateCameraPosition(),this.renderer=new Qm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mh,this.renderer.toneMapping=Rh,this.renderer.toneMappingExposure=1.18,t.appendChild(this.renderer.domElement),this.setupLighting(),this.setupEnvironment(),this.setupControls(),this.jitterBuffer=new fg,this.avatar=new ug(this.scene),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLighting(){const t=new ag(16777215,.85);this.scene.add(t);const e=new Ra(16777215,1.8);e.position.set(4,9,6),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=25,e.shadow.camera.left=-2.5,e.shadow.camera.right=2.5,e.shadow.camera.top=2.5,e.shadow.camera.bottom=-2.5,e.shadow.bias=-1e-4,this.scene.add(e);const n=new Ra(12248829,.95);n.position.set(-5,4,3),this.scene.add(n);const s=new Ra(16777215,1.25);s.position.set(0,5,-6),this.scene.add(s)}setupEnvironment(){const t=new og(14,28,3718648,1976635);t.position.y=0,this.scene.add(t);const e=new Fs(32,32),n=new ig({opacity:.4}),s=new te(e,n);s.rotation.x=-Math.PI/2,s.position.y=-.005,s.receiveShadow=!0,this.scene.add(s)}setupControls(){const t=this.renderer.domElement;t.addEventListener("mousedown",e=>{this.isMouseDown=!0,this.mousePrev={x:e.clientX,y:e.clientY}}),window.addEventListener("mousemove",e=>{if(!this.isMouseDown)return;const n=e.clientX-this.mousePrev.x,s=e.clientY-this.mousePrev.y;this.mousePrev={x:e.clientX,y:e.clientY},this.spherical.theta-=n*.006,this.spherical.phi=Math.max(.08,Math.min(Math.PI/2.05,this.spherical.phi-s*.006)),this.updateCameraPosition()}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.spherical.radius=Math.max(1.2,Math.min(8,this.spherical.radius+e.deltaY*.003)),this.updateCameraPosition()})}setCameraView(t){switch(t){case"front":this.spherical.theta=0,this.spherical.phi=Math.PI/2,this.spherical.radius=3;break;case"side":this.spherical.theta=Math.PI/2,this.spherical.phi=Math.PI/2,this.spherical.radius=3;break;case"top":this.spherical.theta=0,this.spherical.phi=.08,this.spherical.radius=3.6;break;case"persp":default:this.spherical.theta=.45,this.spherical.phi=Math.PI/2.3,this.spherical.radius=3.2;break}this.updateCameraPosition()}updateCameraPosition(){const t=Math.sin(this.spherical.phi);this.camera.position.x=this.cameraTarget.x+this.spherical.radius*t*Math.sin(this.spherical.theta),this.camera.position.y=this.cameraTarget.y+this.spherical.radius*Math.cos(this.spherical.phi),this.camera.position.z=this.cameraTarget.z+this.spherical.radius*t*Math.cos(this.spherical.theta),this.camera.lookAt(this.cameraTarget)}resetCamera(){this.setCameraView("persp")}handleSample(t){const[e,n,s,r]=t.quat,a=sd(e,n,s,r);this.jitterBuffer.pushSample(t.role,t.seq,t.t_ms,t.server_time_ms||Date.now(),a)}calibratePose(){const t=new Map,e=performance.now();for(const n of this.avatar.skeleton.bones){const s=this.jitterBuffer.getInterpolatedQuaternion(n.name,e);s&&s.isOnline&&t.set(n.name,s.quat)}this.avatar.calibratePose(t)}reZeroYaw(){this.avatar.reZeroYaw()}getCalibrationOffsets(){return this.avatar.getCalibrationOffsets()}onResize(){if(!this.container)return;const t=this.container.clientWidth||800,e=this.container.clientHeight||600;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){requestAnimationFrame(()=>this.animate());const t=performance.now();if(this.isPlaybackMode)this.avatar.updatePoses(this.playbackPoses);else{const e=new Map;for(const n of this.avatar.skeleton.bones){const s=this.jitterBuffer.getInterpolatedQuaternion(n.name,t);s?e.set(n.name,s):e.set(n.name,{quat:new Je(0,0,0,1),isOnline:!1})}this.avatar.updatePoses(e)}if(this.frameCount++,t-this.lastFpsCheck>=1e3){const e=Math.round(this.frameCount*1e3/(t-this.lastFpsCheck));this.frameCount=0,this.lastFpsCheck=t,this.onFpsUpdate&&this.onFpsUpdate(e)}this.renderer.render(this.scene,this.camera)}}class pg{constructor(t){Q(this,"visualizer");Q(this,"sessionData",null);Q(this,"samplesByRole",new Map);Q(this,"isPlaying",!1);Q(this,"currentTimeMs",0);Q(this,"durationMs",0);Q(this,"speed",1);Q(this,"loop",!0);Q(this,"lastFrameTime",0);Q(this,"animFrameId",null);Q(this,"onTimeUpdate");Q(this,"onPlayStateChange");Q(this,"tick",()=>{var n,s;if(!this.isPlaying)return;const t=performance.now(),e=(t-this.lastFrameTime)*this.speed;if(this.lastFrameTime=t,this.currentTimeMs+=e,this.currentTimeMs>=this.durationMs)if(this.loop&&this.durationMs>0)this.currentTimeMs=0;else{this.currentTimeMs=this.durationMs,this.pause(),this.updateAvatarPoseAtTime(this.currentTimeMs),(n=this.onTimeUpdate)==null||n.call(this,this.currentTimeMs,this.durationMs);return}this.updateAvatarPoseAtTime(this.currentTimeMs),(s=this.onTimeUpdate)==null||s.call(this,this.currentTimeMs,this.durationMs),this.animFrameId=requestAnimationFrame(this.tick)});this.visualizer=t}loadSession(t){var e;this.sessionData=t,this.durationMs=t.duration_ms||1e3,this.currentTimeMs=0,this.isPlaying=!1,this.samplesByRole.clear();for(const n of t.samples){this.samplesByRole.has(n.role)||this.samplesByRole.set(n.role,[]);const s=sd(n.quat[0],n.quat[1],n.quat[2],n.quat[3]);this.samplesByRole.get(n.role).push({t_ms:n.t_ms,quat:s})}for(const n of this.samplesByRole.values())n.sort((s,r)=>s.t_ms-r.t_ms);this.visualizer.isPlaybackMode=!0,this.seek(0),(e=this.onPlayStateChange)==null||e.call(this,!1)}exitPlayback(){this.pause(),this.visualizer.isPlaybackMode=!1,this.visualizer.playbackPoses.clear(),this.sessionData=null,this.samplesByRole.clear()}play(){var t;this.isPlaying||(this.currentTimeMs>=this.durationMs&&(this.currentTimeMs=0),this.isPlaying=!0,this.lastFrameTime=performance.now(),(t=this.onPlayStateChange)==null||t.call(this,!0),this.tick())}pause(){var t;this.isPlaying&&(this.isPlaying=!1,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),(t=this.onPlayStateChange)==null||t.call(this,!1))}togglePlay(){this.isPlaying?this.pause():this.play()}setSpeed(t){this.speed=t}seek(t){var e;this.currentTimeMs=Math.max(0,Math.min(this.durationMs,t)),this.updateAvatarPoseAtTime(this.currentTimeMs),(e=this.onTimeUpdate)==null||e.call(this,this.currentTimeMs,this.durationMs)}updateAvatarPoseAtTime(t){const e=new Map;for(const n of this.visualizer.avatar.skeleton.bones){const s=this.samplesByRole.get(n.name);if(!s||s.length===0){e.set(n.name,{quat:new Je(0,0,0,1),isOnline:!1});continue}const r=this.sampleQuatAtTime(s,t);e.set(n.name,{quat:r,isOnline:!0})}this.visualizer.playbackPoses=e,this.visualizer.avatar.updatePoses(e)}sampleQuatAtTime(t,e){if(e<=t[0].t_ms)return t[0].quat.clone();if(e>=t[t.length-1].t_ms)return t[t.length-1].quat.clone();let n=0,s=t.length-1;for(;n<=s;){const h=n+s>>1;t[h].t_ms<=e?n=h+1:s=h-1}const r=Math.max(0,s),a=Math.min(t.length-1,r+1),o=t[r],l=t[a];if(r===a||l.t_ms===o.t_ms)return o.quat.clone();const c=(e-o.t_ms)/(l.t_ms-o.t_ms);return o.quat.clone().slerp(l.quat,c)}}const mg="modulepreload",gg=function(i){return"/"+i},Ml={},se=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(e.map(c=>{if(c=gg(c),c in Ml)return;Ml[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":mg,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((_,m)=>{d.addEventListener("load",_),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class Dt extends Error{constructor(t){super(t),this.name=new.target.name,Object.setPrototypeOf(this,new.target.prototype)}}class ur extends Dt{constructor(t="unsupported command error"){super(t)}}class ya extends Dt{constructor(t){super(`Unexpected chip ID value ${t}. Failed to autodetect chip type.`)}}class Al extends Dt{constructor(t){super(`Unexpected CHIP magic value 0x${t.toString(16)}. Failed to autodetect chip type.`)}}class Rl extends Dt{constructor(t="Security info command does not contain chip ID. This is expected for ESP32-S2 which doesn't support chip ID in security info."){super(t)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Eg=4,yl=0,Tl=1,Sg=2;function ss(i){let t=i.length;for(;--t>=0;)i[t]=0}const xg=0,rd=1,vg=2,Mg=3,Ag=258,tc=29,Os=256,ys=Os+1+tc,Wi=30,ec=19,ad=2*ys+1,hi=15,Ta=16,Rg=7,nc=256,od=16,cd=17,ld=18,Po=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),yr=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),yg=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),hd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tg=512,Mn=new Array((ys+2)*2);ss(Mn);const xs=new Array(Wi*2);ss(xs);const Ts=new Array(Tg);ss(Ts);const ws=new Array(Ag-Mg+1);ss(ws);const ic=new Array(tc);ss(ic);const Pr=new Array(Wi);ss(Pr);function wa(i,t,e,n,s){this.static_tree=i,this.extra_bits=t,this.extra_base=e,this.elems=n,this.max_length=s,this.has_stree=i&&i.length}let dd,ud,fd;function ba(i,t){this.dyn_tree=i,this.max_code=0,this.stat_desc=t}const _d=i=>i<256?Ts[i]:Ts[256+(i>>>7)],bs=(i,t)=>{i.pending_buf[i.pending++]=t&255,i.pending_buf[i.pending++]=t>>>8&255},we=(i,t,e)=>{i.bi_valid>Ta-e?(i.bi_buf|=t<<i.bi_valid&65535,bs(i,i.bi_buf),i.bi_buf=t>>Ta-i.bi_valid,i.bi_valid+=e-Ta):(i.bi_buf|=t<<i.bi_valid&65535,i.bi_valid+=e)},an=(i,t,e)=>{we(i,e[t*2],e[t*2+1])},pd=(i,t)=>{let e=0;do e|=i&1,i>>>=1,e<<=1;while(--t>0);return e>>>1},wg=i=>{i.bi_valid===16?(bs(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},bg=(i,t)=>{const e=t.dyn_tree,n=t.max_code,s=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,l=t.stat_desc.max_length;let c,h,u,d,_,m,E=0;for(d=0;d<=hi;d++)i.bl_count[d]=0;for(e[i.heap[i.heap_max]*2+1]=0,c=i.heap_max+1;c<ad;c++)h=i.heap[c],d=e[e[h*2+1]*2+1]+1,d>l&&(d=l,E++),e[h*2+1]=d,!(h>n)&&(i.bl_count[d]++,_=0,h>=o&&(_=a[h-o]),m=e[h*2],i.opt_len+=m*(d+_),r&&(i.static_len+=m*(s[h*2+1]+_)));if(E!==0){do{for(d=l-1;i.bl_count[d]===0;)d--;i.bl_count[d]--,i.bl_count[d+1]+=2,i.bl_count[l]--,E-=2}while(E>0);for(d=l;d!==0;d--)for(h=i.bl_count[d];h!==0;)u=i.heap[--c],!(u>n)&&(e[u*2+1]!==d&&(i.opt_len+=(d-e[u*2+1])*e[u*2],e[u*2+1]=d),h--)}},md=(i,t,e)=>{const n=new Array(hi+1);let s=0,r,a;for(r=1;r<=hi;r++)s=s+e[r-1]<<1,n[r]=s;for(a=0;a<=t;a++){let o=i[a*2+1];o!==0&&(i[a*2]=pd(n[o]++,o))}},Cg=()=>{let i,t,e,n,s;const r=new Array(hi+1);for(e=0,n=0;n<tc-1;n++)for(ic[n]=e,i=0;i<1<<Po[n];i++)ws[e++]=n;for(ws[e-1]=n,s=0,n=0;n<16;n++)for(Pr[n]=s,i=0;i<1<<yr[n];i++)Ts[s++]=n;for(s>>=7;n<Wi;n++)for(Pr[n]=s<<7,i=0;i<1<<yr[n]-7;i++)Ts[256+s++]=n;for(t=0;t<=hi;t++)r[t]=0;for(i=0;i<=143;)Mn[i*2+1]=8,i++,r[8]++;for(;i<=255;)Mn[i*2+1]=9,i++,r[9]++;for(;i<=279;)Mn[i*2+1]=7,i++,r[7]++;for(;i<=287;)Mn[i*2+1]=8,i++,r[8]++;for(md(Mn,ys+1,r),i=0;i<Wi;i++)xs[i*2+1]=5,xs[i*2]=pd(i,5);dd=new wa(Mn,Po,Os+1,ys,hi),ud=new wa(xs,yr,0,Wi,hi),fd=new wa(new Array(0),yg,0,ec,Rg)},gd=i=>{let t;for(t=0;t<ys;t++)i.dyn_ltree[t*2]=0;for(t=0;t<Wi;t++)i.dyn_dtree[t*2]=0;for(t=0;t<ec;t++)i.bl_tree[t*2]=0;i.dyn_ltree[nc*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},Ed=i=>{i.bi_valid>8?bs(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},wl=(i,t,e,n)=>{const s=t*2,r=e*2;return i[s]<i[r]||i[s]===i[r]&&n[t]<=n[e]},Ca=(i,t,e)=>{const n=i.heap[e];let s=e<<1;for(;s<=i.heap_len&&(s<i.heap_len&&wl(t,i.heap[s+1],i.heap[s],i.depth)&&s++,!wl(t,n,i.heap[s],i.depth));)i.heap[e]=i.heap[s],e=s,s<<=1;i.heap[e]=n},bl=(i,t,e)=>{let n,s,r=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+r++]&255,n+=(i.pending_buf[i.sym_buf+r++]&255)<<8,s=i.pending_buf[i.sym_buf+r++],n===0?an(i,s,t):(a=ws[s],an(i,a+Os+1,t),o=Po[a],o!==0&&(s-=ic[a],we(i,s,o)),n--,a=_d(n),an(i,a,e),o=yr[a],o!==0&&(n-=Pr[a],we(i,n,o)));while(r<i.sym_next);an(i,nc,t)},Uo=(i,t)=>{const e=t.dyn_tree,n=t.stat_desc.static_tree,s=t.stat_desc.has_stree,r=t.stat_desc.elems;let a,o,l=-1,c;for(i.heap_len=0,i.heap_max=ad,a=0;a<r;a++)e[a*2]!==0?(i.heap[++i.heap_len]=l=a,i.depth[a]=0):e[a*2+1]=0;for(;i.heap_len<2;)c=i.heap[++i.heap_len]=l<2?++l:0,e[c*2]=1,i.depth[c]=0,i.opt_len--,s&&(i.static_len-=n[c*2+1]);for(t.max_code=l,a=i.heap_len>>1;a>=1;a--)Ca(i,e,a);c=r;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],Ca(i,e,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,e[c*2]=e[a*2]+e[o*2],i.depth[c]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,e[a*2+1]=e[o*2+1]=c,i.heap[1]=c++,Ca(i,e,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],bg(i,t),md(e,l,i.bl_count)},Cl=(i,t,e)=>{let n,s=-1,r,a=t[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),t[(e+1)*2+1]=65535,n=0;n<=e;n++)r=a,a=t[(n+1)*2+1],!(++o<l&&r===a)&&(o<c?i.bl_tree[r*2]+=o:r!==0?(r!==s&&i.bl_tree[r*2]++,i.bl_tree[od*2]++):o<=10?i.bl_tree[cd*2]++:i.bl_tree[ld*2]++,o=0,s=r,a===0?(l=138,c=3):r===a?(l=6,c=3):(l=7,c=4))},Pl=(i,t,e)=>{let n,s=-1,r,a=t[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),n=0;n<=e;n++)if(r=a,a=t[(n+1)*2+1],!(++o<l&&r===a)){if(o<c)do an(i,r,i.bl_tree);while(--o!==0);else r!==0?(r!==s&&(an(i,r,i.bl_tree),o--),an(i,od,i.bl_tree),we(i,o-3,2)):o<=10?(an(i,cd,i.bl_tree),we(i,o-3,3)):(an(i,ld,i.bl_tree),we(i,o-11,7));o=0,s=r,a===0?(l=138,c=3):r===a?(l=6,c=3):(l=7,c=4)}},Pg=i=>{let t;for(Cl(i,i.dyn_ltree,i.l_desc.max_code),Cl(i,i.dyn_dtree,i.d_desc.max_code),Uo(i,i.bl_desc),t=ec-1;t>=3&&i.bl_tree[hd[t]*2+1]===0;t--);return i.opt_len+=3*(t+1)+5+5+4,t},Ug=(i,t,e,n)=>{let s;for(we(i,t-257,5),we(i,e-1,5),we(i,n-4,4),s=0;s<n;s++)we(i,i.bl_tree[hd[s]*2+1],3);Pl(i,i.dyn_ltree,t-1),Pl(i,i.dyn_dtree,e-1)},Ig=i=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&i.dyn_ltree[e*2]!==0)return yl;if(i.dyn_ltree[18]!==0||i.dyn_ltree[20]!==0||i.dyn_ltree[26]!==0)return Tl;for(e=32;e<Os;e++)if(i.dyn_ltree[e*2]!==0)return Tl;return yl};let Ul=!1;const Dg=i=>{Ul||(Cg(),Ul=!0),i.l_desc=new ba(i.dyn_ltree,dd),i.d_desc=new ba(i.dyn_dtree,ud),i.bl_desc=new ba(i.bl_tree,fd),i.bi_buf=0,i.bi_valid=0,gd(i)},Sd=(i,t,e,n)=>{we(i,(xg<<1)+(n?1:0),3),Ed(i),bs(i,e),bs(i,~e),e&&i.pending_buf.set(i.window.subarray(t,t+e),i.pending),i.pending+=e},Lg=i=>{we(i,rd<<1,3),an(i,nc,Mn),wg(i)},Fg=(i,t,e,n)=>{let s,r,a=0;i.level>0?(i.strm.data_type===Sg&&(i.strm.data_type=Ig(i)),Uo(i,i.l_desc),Uo(i,i.d_desc),a=Pg(i),s=i.opt_len+3+7>>>3,r=i.static_len+3+7>>>3,r<=s&&(s=r)):s=r=e+5,e+4<=s&&t!==-1?Sd(i,t,e,n):i.strategy===Eg||r===s?(we(i,(rd<<1)+(n?1:0),3),bl(i,Mn,xs)):(we(i,(vg<<1)+(n?1:0),3),Ug(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),bl(i,i.dyn_ltree,i.dyn_dtree)),gd(i),n&&Ed(i)},Og=(i,t,e)=>(i.pending_buf[i.sym_buf+i.sym_next++]=t,i.pending_buf[i.sym_buf+i.sym_next++]=t>>8,i.pending_buf[i.sym_buf+i.sym_next++]=e,t===0?i.dyn_ltree[e*2]++:(i.matches++,t--,i.dyn_ltree[(ws[e]+Os+1)*2]++,i.dyn_dtree[_d(t)*2]++),i.sym_next===i.sym_end);var Ng=Dg,Bg=Sd,kg=Fg,Gg=Og,Hg=Lg,zg={_tr_init:Ng,_tr_stored_block:Bg,_tr_flush_block:kg,_tr_tally:Gg,_tr_align:Hg};const Vg=(i,t,e,n)=>{let s=i&65535|0,r=i>>>16&65535|0,a=0;for(;e!==0;){a=e>2e3?2e3:e,e-=a;do s=s+t[n++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0};var Cs=Vg;const Wg=()=>{let i,t=[];for(var e=0;e<256;e++){i=e;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;t[e]=i}return t},Yg=new Uint32Array(Wg()),Kg=(i,t,e,n)=>{const s=Yg,r=n+e;i^=-1;for(let a=n;a<r;a++)i=i>>>8^s[(i^t[a])&255];return i^-1};var me=Kg,Ji={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Nr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:$g,_tr_stored_block:Io,_tr_flush_block:Xg,_tr_tally:Wn,_tr_align:qg}=zg,{Z_NO_FLUSH:Yn,Z_PARTIAL_FLUSH:Zg,Z_FULL_FLUSH:jg,Z_FINISH:Ge,Z_BLOCK:Il,Z_OK:ge,Z_STREAM_END:Dl,Z_STREAM_ERROR:ln,Z_DATA_ERROR:Jg,Z_BUF_ERROR:Pa,Z_DEFAULT_COMPRESSION:Qg,Z_FILTERED:tE,Z_HUFFMAN_ONLY:fr,Z_RLE:eE,Z_FIXED:nE,Z_DEFAULT_STRATEGY:iE,Z_UNKNOWN:sE,Z_DEFLATED:Br}=Nr,rE=9,aE=15,oE=8,cE=29,lE=256,Do=lE+1+cE,hE=30,dE=19,uE=2*Do+1,fE=15,Wt=3,Hn=258,hn=Hn+Wt+1,_E=32,Qi=42,sc=57,Lo=69,Fo=73,Oo=91,No=103,di=113,Es=666,Ae=1,rs=2,pi=3,as=4,pE=3,ui=(i,t)=>(i.msg=Ji[t],t),Ll=i=>i*2-(i>4?9:0),kn=i=>{let t=i.length;for(;--t>=0;)i[t]=0},mE=i=>{let t,e,n,s=i.w_size;t=i.hash_size,n=t;do e=i.head[--n],i.head[n]=e>=s?e-s:0;while(--t);t=s,n=t;do e=i.prev[--n],i.prev[n]=e>=s?e-s:0;while(--t)};let rc=(i,t,e)=>(t<<i.hash_shift^e)&i.hash_mask;const mi=(i,t)=>{let e;if(i.legacy_hash)e=i.ins_h=rc(i,i.ins_h,i.window[t+Wt-1]);else{const s=i.window,r=s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24;e=i.ins_h=Math.imul(r,66521)+66521>>>16&i.hash_mask}const n=i.prev[t&i.w_mask]=i.head[e];return i.head[e]=t,n},De=i=>{const t=i.state;let e=t.pending;e>i.avail_out&&(e=i.avail_out),e!==0&&(i.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),i.next_out),i.next_out+=e,t.pending_out+=e,i.total_out+=e,i.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},Le=(i,t)=>{Xg(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,t),i.block_start=i.strstart,De(i.strm)},Yt=(i,t)=>{i.pending_buf[i.pending++]=t},ps=(i,t)=>{i.pending_buf[i.pending++]=t>>>8&255,i.pending_buf[i.pending++]=t&255},Bo=(i,t,e,n)=>{let s=i.avail_in;return s>n&&(s=n),s===0?0:(i.avail_in-=s,t.set(i.input.subarray(i.next_in,i.next_in+s),e),i.state.wrap===1?i.adler=Cs(i.adler,t,s,e):i.state.wrap===2&&(i.adler=me(i.adler,t,s,e)),i.next_in+=s,i.total_in+=s,s)},xd=(i,t)=>{let e=i.max_chain_length,n=i.strstart,s,r,a=i.prev_length,o=i.nice_match;const l=i.strstart>i.w_size-hn?i.strstart-(i.w_size-hn):0,c=i.window,h=i.w_mask,u=i.prev,d=i.strstart+Hn;let _=c[n+a-1],m=c[n+a];i.prev_length>=i.good_match&&(e>>=2),o>i.lookahead&&(o=i.lookahead);do if(s=t,!(c[s+a]!==m||c[s+a-1]!==_||c[s]!==c[n]||c[++s]!==c[n+1])){n+=2,s++;do;while(c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&n<d);if(r=Hn-(d-n),n=d-Hn,r>a){if(i.match_start=t,a=r,r>=o)break;_=c[n+a-1],m=c[n+a]}}while((t=u[t&h])>l&&--e!==0);return a<=i.lookahead?a:i.lookahead},ts=i=>{const t=i.w_size;let e,n,s;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=t+(t-hn)&&(i.window.set(i.window.subarray(t,t+t-n),0),i.match_start-=t,i.strstart-=t,i.block_start-=t,i.insert>i.strstart&&(i.insert=i.strstart),mE(i),n+=t),i.strm.avail_in===0)break;if(e=Bo(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=e,i.legacy_hash){if(i.lookahead+i.insert>=Wt)for(s=i.strstart-i.insert,i.ins_h=i.window[s],i.ins_h=rc(i,i.ins_h,i.window[s+1]);i.insert&&(mi(i,s),s++,i.insert--,!(i.lookahead+i.insert<Wt)););}else if(i.lookahead+i.insert>Wt)for(s=i.strstart-i.insert;i.insert&&(mi(i,s),s++,i.insert--,!(i.lookahead+i.insert<=Wt)););}while(i.lookahead<hn&&i.strm.avail_in!==0)},vd=(i,t)=>{let e=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,s,r,a=0,o=i.strm.avail_in;do{if(n=65535,r=i.bi_valid+42>>3,i.strm.avail_out<r||(r=i.strm.avail_out-r,s=i.strstart-i.block_start,n>s+i.strm.avail_in&&(n=s+i.strm.avail_in),n>r&&(n=r),n<e&&(n===0&&t!==Ge||t===Yn||n!==s+i.strm.avail_in)))break;a=t===Ge&&n===s+i.strm.avail_in?1:0,Io(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,De(i.strm),s&&(s>n&&(s=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+s),i.strm.next_out),i.strm.next_out+=s,i.strm.avail_out-=s,i.strm.total_out+=s,i.block_start+=s,n-=s),n&&(Bo(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?as:t!==Yn&&t!==Ge&&i.strm.avail_in===0&&i.strstart===i.block_start?rs:(r=i.window_size-i.strstart,i.strm.avail_in>r&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,r+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),r>i.strm.avail_in&&(r=i.strm.avail_in),r&&(Bo(i.strm,i.window,i.strstart,r),i.strstart+=r,i.insert+=r>i.w_size-i.insert?i.w_size-i.insert:r),i.high_water<i.strstart&&(i.high_water=i.strstart),r=i.bi_valid+42>>3,r=i.pending_buf_size-r>65535?65535:i.pending_buf_size-r,e=r>i.w_size?i.w_size:r,s=i.strstart-i.block_start,(s>=e||(s||t===Ge)&&t!==Yn&&i.strm.avail_in===0&&s<=r)&&(n=s>r?r:s,a=t===Ge&&i.strm.avail_in===0&&n===s?1:0,Io(i,i.block_start,n,a),i.block_start+=n,De(i.strm)),a?pi:Ae)},Ua=(i,t)=>{let e,n;for(;;){if(i.lookahead<hn){if(ts(i),i.lookahead<hn&&t===Yn)return Ae;if(i.lookahead===0)break}if(e=0,i.lookahead>=Wt&&(e=mi(i,i.strstart)),e!==0&&i.strstart-e<=i.w_size-hn&&(i.match_length=xd(i,e)),i.match_length>=Wt)if(n=Wn(i,i.strstart-i.match_start,i.match_length-Wt),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=Wt){i.match_length--;do i.strstart++,e=mi(i,i.strstart);while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.legacy_hash&&(i.ins_h=i.window[i.strstart],i.ins_h=rc(i,i.ins_h,i.window[i.strstart+1]));else n=Wn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=i.strstart<Wt-1?i.strstart:Wt-1,t===Ge?(Le(i,!0),i.strm.avail_out===0?pi:as):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:rs},Bi=(i,t)=>{let e,n,s;for(;;){if(i.lookahead<hn){if(ts(i),i.lookahead<hn&&t===Yn)return Ae;if(i.lookahead===0)break}if(e=0,i.lookahead>=Wt&&(e=mi(i,i.strstart)),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=Wt-1,e!==0&&i.prev_length<i.max_lazy_match&&i.strstart-e<=i.w_size-hn&&(i.match_length=xd(i,e),i.match_length<=5&&(i.strategy===tE||i.match_length===Wt&&i.strstart-i.match_start>4096)&&(i.match_length=Wt-1)),i.prev_length>=Wt&&i.match_length<=i.prev_length){s=i.strstart+i.lookahead-Wt,n=Wn(i,i.strstart-1-i.prev_match,i.prev_length-Wt),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=s&&(e=mi(i,i.strstart));while(--i.prev_length!==0);if(i.match_available=0,i.match_length=Wt-1,i.strstart++,n&&(Le(i,!1),i.strm.avail_out===0))return Ae}else if(i.match_available){if(n=Wn(i,0,i.window[i.strstart-1]),n&&Le(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return Ae}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=Wn(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<Wt-1?i.strstart:Wt-1,t===Ge?(Le(i,!0),i.strm.avail_out===0?pi:as):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:rs},gE=(i,t)=>{let e,n,s,r;const a=i.window;for(;;){if(i.lookahead<=Hn){if(ts(i),i.lookahead<=Hn&&t===Yn)return Ae;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=Wt&&i.strstart>0&&(s=i.strstart-1,n=a[s],n===a[++s]&&n===a[++s]&&n===a[++s])){r=i.strstart+Hn;do;while(n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&s<r);i.match_length=Hn-(r-s),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=Wt?(e=Wn(i,1,i.match_length-Wt),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(e=Wn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),e&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=0,t===Ge?(Le(i,!0),i.strm.avail_out===0?pi:as):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:rs},EE=(i,t)=>{let e;for(;;){if(i.lookahead===0&&(ts(i),i.lookahead===0)){if(t===Yn)return Ae;break}if(i.match_length=0,e=Wn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,e&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=0,t===Ge?(Le(i,!0),i.strm.avail_out===0?pi:as):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:rs};function tn(i,t,e,n,s){this.good_length=i,this.max_lazy=t,this.nice_length=e,this.max_chain=n,this.func=s}const Ss=[new tn(0,0,0,0,vd),new tn(4,4,8,4,Ua),new tn(4,5,16,8,Ua),new tn(4,6,32,32,Ua),new tn(4,4,16,16,Bi),new tn(8,16,32,32,Bi),new tn(8,16,128,128,Bi),new tn(8,32,128,256,Bi),new tn(32,128,258,1024,Bi),new tn(32,258,258,4096,Bi)],SE=i=>{i.window_size=2*i.w_size,kn(i.head),i.max_lazy_match=Ss[i.level].max_lazy,i.good_match=Ss[i.level].good_length,i.nice_match=Ss[i.level].nice_length,i.max_chain_length=Ss[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=Wt-1,i.match_available=0,i.ins_h=0};function xE(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Br,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(uE*2),this.dyn_dtree=new Uint16Array((2*hE+1)*2),this.bl_tree=new Uint16Array((2*dE+1)*2),kn(this.dyn_ltree),kn(this.dyn_dtree),kn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(fE+1),this.heap=new Uint16Array(2*Do+1),kn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Do+1),kn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Ns=i=>{if(!i)return 1;const t=i.state;return!t||t.strm!==i||t.status!==Qi&&t.status!==sc&&t.status!==Lo&&t.status!==Fo&&t.status!==Oo&&t.status!==No&&t.status!==di&&t.status!==Es?1:0},Md=i=>{if(Ns(i))return ui(i,ln);i.total_in=i.total_out=0,i.data_type=sE;const t=i.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?sc:t.wrap?Qi:di,i.adler=t.wrap===2?0:1,t.last_flush=-2,$g(t),ge},Ad=i=>{const t=Md(i);return t===ge&&SE(i.state),t},vE=(i,t)=>Ns(i)||i.state.wrap!==2?ln:(i.state.gzhead=t,ge),Rd=(i,t,e,n,s,r,a)=>{if(!i)return ln;let o=1;if(t===Qg&&(t=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),s<1||s>rE||e!==Br||n<8||n>15||t<0||t>9||r<0||r>nE||n===8&&o!==1)return ui(i,ln);n===8&&(n=9);const l=new xE;return i.state=l,l.strm=i,l.status=Qi,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.legacy_hash=a?1:0,l.hash_bits=s+7,!l.legacy_hash&&l.hash_bits<15&&(l.hash_bits=15),l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+Wt-1)/Wt),l.window=new Uint8Array(l.w_size*2),l.head=new Uint16Array(l.hash_size),l.prev=new Uint16Array(l.w_size),l.lit_bufsize=1<<s+6,l.pending_buf_size=l.lit_bufsize*4,l.pending_buf=new Uint8Array(l.pending_buf_size),l.sym_buf=l.lit_bufsize,l.sym_end=(l.lit_bufsize-1)*3,l.level=t,l.strategy=r,l.method=e,Ad(i)},ME=(i,t)=>Rd(i,t,Br,aE,oE,iE),AE=(i,t)=>{if(Ns(i)||t>Il||t<0)return i?ui(i,ln):ln;const e=i.state;if(!i.output||i.avail_in!==0&&!i.input||e.status===Es&&t!==Ge)return ui(i,i.avail_out===0?Pa:ln);const n=e.last_flush;if(e.last_flush=t,e.pending!==0){if(De(i),i.avail_out===0)return e.last_flush=-1,ge}else if(i.avail_in===0&&Ll(t)<=Ll(n)&&t!==Ge)return ui(i,Pa);if(e.status===Es&&i.avail_in!==0)return ui(i,Pa);if(e.status===Qi&&e.wrap===0&&(e.status=di),e.status===Qi){let s=Br+(e.w_bits-8<<4)<<8,r=-1;if(e.strategy>=fr||e.level<2?r=0:e.level<6?r=1:e.level===6?r=2:r=3,s|=r<<6,e.strstart!==0&&(s|=_E),s+=31-s%31,ps(e,s),e.strstart!==0&&(ps(e,i.adler>>>16),ps(e,i.adler&65535)),i.adler=1,e.status=di,De(i),e.pending!==0)return e.last_flush=-1,ge}if(e.status===sc){if(i.adler=0,Yt(e,31),Yt(e,139),Yt(e,8),e.gzhead)Yt(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),Yt(e,e.gzhead.time&255),Yt(e,e.gzhead.time>>8&255),Yt(e,e.gzhead.time>>16&255),Yt(e,e.gzhead.time>>24&255),Yt(e,e.level===9?2:e.strategy>=fr||e.level<2?4:0),Yt(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(Yt(e,e.gzhead.extra.length&255),Yt(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(i.adler=me(i.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=Lo;else if(Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,e.level===9?2:e.strategy>=fr||e.level<2?4:0),Yt(e,pE),e.status=di,De(i),e.pending!==0)return e.last_flush=-1,ge}if(e.status===Lo){if(e.gzhead.extra){let s=e.pending,r=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+r>e.pending_buf_size;){let o=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+o),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex+=o,De(i),e.pending!==0)return e.last_flush=-1,ge;s=0,r-=o}let a=new Uint8Array(e.gzhead.extra);e.pending_buf.set(a.subarray(e.gzindex,e.gzindex+r),e.pending),e.pending+=r,e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex=0}e.status=Fo}if(e.status===Fo){if(e.gzhead.name){let s=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),De(i),e.pending!==0)return e.last_flush=-1,ge;s=0}e.gzindex<e.gzhead.name.length?r=e.gzhead.name.charCodeAt(e.gzindex++)&255:r=0,Yt(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex=0}e.status=Oo}if(e.status===Oo){if(e.gzhead.comment){let s=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),De(i),e.pending!==0)return e.last_flush=-1,ge;s=0}e.gzindex<e.gzhead.comment.length?r=e.gzhead.comment.charCodeAt(e.gzindex++)&255:r=0,Yt(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s))}e.status=No}if(e.status===No){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(De(i),e.pending!==0))return e.last_flush=-1,ge;Yt(e,i.adler&255),Yt(e,i.adler>>8&255),i.adler=0}if(e.status=di,De(i),e.pending!==0)return e.last_flush=-1,ge}if(i.avail_in!==0||e.lookahead!==0||t!==Yn&&e.status!==Es){let s=e.level===0?vd(e,t):e.strategy===fr?EE(e,t):e.strategy===eE?gE(e,t):Ss[e.level].func(e,t);if((s===pi||s===as)&&(e.status=Es),s===Ae||s===pi)return i.avail_out===0&&(e.last_flush=-1),ge;if(s===rs&&(t===Zg?qg(e):t!==Il&&(Io(e,0,0,!1),t===jg&&(kn(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),De(i),i.avail_out===0))return e.last_flush=-1,ge}return t!==Ge?ge:e.wrap<=0?Dl:(e.wrap===2?(Yt(e,i.adler&255),Yt(e,i.adler>>8&255),Yt(e,i.adler>>16&255),Yt(e,i.adler>>24&255),Yt(e,i.total_in&255),Yt(e,i.total_in>>8&255),Yt(e,i.total_in>>16&255),Yt(e,i.total_in>>24&255)):(ps(e,i.adler>>>16),ps(e,i.adler&65535)),De(i),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?ge:Dl)},RE=i=>{if(Ns(i))return ln;const t=i.state.status;return i.state=null,t===di?ui(i,Jg):ge},yE=(i,t)=>{let e=t.length;if(Ns(i))return ln;const n=i.state,s=n.wrap;if(s===2||s===1&&n.status!==Qi||n.lookahead)return ln;if(s===1&&(i.adler=Cs(i.adler,t,e,0)),n.wrap=0,e>=n.w_size){s===0&&(kn(n.head),n.strstart=0,n.block_start=0,n.insert=0);let l=new Uint8Array(n.w_size);l.set(t.subarray(e-n.w_size,e),0),t=l,e=n.w_size}const r=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=e,i.next_in=0,i.input=t,ts(n);n.lookahead>=Wt;){let l=n.strstart,c=n.lookahead-(Wt-1);do mi(n,l),l++;while(--c);n.strstart=l,n.lookahead=Wt-1,ts(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Wt-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=r,n.wrap=s,ge};var TE=ME,wE=Rd,bE=Ad,CE=Md,PE=vE,UE=AE,IE=RE,DE=yE,LE="pako deflate (from Nodeca project)",vs={deflateInit:TE,deflateInit2:wE,deflateReset:bE,deflateResetKeep:CE,deflateSetHeader:PE,deflate:UE,deflateEnd:IE,deflateSetDictionary:DE,deflateInfo:LE};const FE=(i,t)=>Object.prototype.hasOwnProperty.call(i,t);var OE=function(i){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(const n in e)FE(e,n)&&(i[n]=e[n])}}return i},NE=i=>{let t=0;for(let n=0,s=i.length;n<s;n++)t+=i[n].length;const e=new Uint8Array(t);for(let n=0,s=0,r=i.length;n<r;n++){let a=i[n];e.set(a,s),s+=a.length}return e},kr={assign:OE,flattenChunks:NE};let yd=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{yd=!1}const Ps=new Uint8Array(256);for(let i=0;i<256;i++)Ps[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;Ps[254]=Ps[255]=1;var BE=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let t,e,n,s,r,a=i.length,o=0;for(s=0;s<a;s++)e=i.charCodeAt(s),(e&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),s++)),o+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(o),r=0,s=0;r<o;s++)e=i.charCodeAt(s),(e&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),s++)),e<128?t[r++]=e:e<2048?(t[r++]=192|e>>>6,t[r++]=128|e&63):e<65536?(t[r++]=224|e>>>12,t[r++]=128|e>>>6&63,t[r++]=128|e&63):(t[r++]=240|e>>>18,t[r++]=128|e>>>12&63,t[r++]=128|e>>>6&63,t[r++]=128|e&63);return t};const kE=(i,t)=>{if(t<65534&&i.subarray&&yd)return String.fromCharCode.apply(null,i.length===t?i:i.subarray(0,t));let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(i[n]);return e};var GE=(i,t)=>{const e=t||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,t));let n,s;const r=new Array(e*2);for(s=0,n=0;n<e;){let a=i[n++];if(a<128){r[s++]=a;continue}let o=Ps[a];if(o>4){r[s++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<e;)a=a<<6|i[n++]&63,o--;if(o>1){r[s++]=65533;continue}a<65536?r[s++]=a:(a-=65536,r[s++]=55296|a>>10&1023,r[s++]=56320|a&1023)}return kE(r,s)},HE=(i,t)=>{t=t||i.length,t>i.length&&(t=i.length);let e=t-1;for(;e>=0&&(i[e]&192)===128;)e--;return e<0||e===0?t:e+Ps[i[e]]>t?e:t},Us={string2buf:BE,buf2string:GE,utf8border:HE};function zE(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Td=zE;const wd=Object.prototype.toString,{Z_NO_FLUSH:VE,Z_SYNC_FLUSH:WE,Z_FULL_FLUSH:YE,Z_FINISH:KE,Z_OK:Ur,Z_STREAM_END:$E,Z_DEFAULT_COMPRESSION:XE,Z_DEFAULT_STRATEGY:qE,Z_DEFLATED:ZE}=Nr,jE={level:XE,method:ZE,chunkSize:16384,windowBits:15,memLevel:8,strategy:qE,legacyHash:!0};function Gr(i){this.options=kr.assign({},jE,i||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Td,this.strm.avail_out=0;let e=vs.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy,t.legacyHash);if(e!==Ur)throw new Error(Ji[e]);if(t.header&&vs.deflateSetHeader(this.strm,t.header),t.dictionary){let n;if(typeof t.dictionary=="string"?n=Us.string2buf(t.dictionary):wd.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,e=vs.deflateSetDictionary(this.strm,n),e!==Ur)throw new Error(Ji[e]);this._dict_set=!0}}Gr.prototype.push=function(i,t){const e=this.strm,n=this.options.chunkSize;let s,r;if(this.ended)return!1;for(t===~~t?r=t:r=t===!0?KE:VE,typeof i=="string"?e.input=Us.string2buf(i):wd.call(i)==="[object ArrayBuffer]"?e.input=new Uint8Array(i):e.input=i,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),(r===WE||r===YE)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(s=vs.deflate(e,r),s===$E)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),s=vs.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===Ur;if(e.avail_out===0){this.onData(e.output);continue}if(r>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};Gr.prototype.onData=function(i){this.chunks.push(i)};Gr.prototype.onEnd=function(i){i===Ur&&(this.result=kr.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function JE(i,t){const e=new Gr(t);if(e.push(i,!0),e.err)throw e.msg||Ji[e.err];return e.result}var QE=JE,tS={deflate:QE};const _r=16209,eS=16191;var nS=function(t,e){let n,s,r,a,o,l,c,h,u,d,_,m,E,p,f,R,x,g,P,b,y,C,A,S;const w=t.state;n=t.next_in,A=t.input,s=n+(t.avail_in-5),r=t.next_out,S=t.output,a=r-(e-t.avail_out),o=r+(t.avail_out-257),l=w.dmax,c=w.wsize,h=w.whave,u=w.wnext,d=w.window,_=w.hold,m=w.bits,E=w.lencode,p=w.distcode,f=(1<<w.lenbits)-1,R=(1<<w.distbits)-1;t:do{m<15&&(_+=A[n++]<<m,m+=8,_+=A[n++]<<m,m+=8),x=E[_&f];e:for(;;){if(g=x>>>24,_>>>=g,m-=g,g=x>>>16&255,g===0)S[r++]=x&65535;else if(g&16){P=x&65535,g&=15,g&&(m<g&&(_+=A[n++]<<m,m+=8),P+=_&(1<<g)-1,_>>>=g,m-=g),m<15&&(_+=A[n++]<<m,m+=8,_+=A[n++]<<m,m+=8),x=p[_&R];n:for(;;){if(g=x>>>24,_>>>=g,m-=g,g=x>>>16&255,g&16){if(b=x&65535,g&=15,m<g&&(_+=A[n++]<<m,m+=8,m<g&&(_+=A[n++]<<m,m+=8)),b+=_&(1<<g)-1,b>l){t.msg="invalid distance too far back",w.mode=_r;break t}if(_>>>=g,m-=g,g=r-a,b>g){if(g=b-g,g>h&&w.sane){t.msg="invalid distance too far back",w.mode=_r;break t}if(y=0,C=d,u===0){if(y+=c-g,g<P){P-=g;do S[r++]=d[y++];while(--g);y=r-b,C=S}}else if(u<g){if(y+=c+u-g,g-=u,g<P){P-=g;do S[r++]=d[y++];while(--g);if(y=0,u<P){g=u,P-=g;do S[r++]=d[y++];while(--g);y=r-b,C=S}}}else if(y+=u-g,g<P){P-=g;do S[r++]=d[y++];while(--g);y=r-b,C=S}for(;P>2;)S[r++]=C[y++],S[r++]=C[y++],S[r++]=C[y++],P-=3;P&&(S[r++]=C[y++],P>1&&(S[r++]=C[y++]))}else{y=r-b;do S[r++]=S[y++],S[r++]=S[y++],S[r++]=S[y++],P-=3;while(P>2);P&&(S[r++]=S[y++],P>1&&(S[r++]=S[y++]))}}else if((g&64)===0){x=p[(x&65535)+(_&(1<<g)-1)];continue n}else{t.msg="invalid distance code",w.mode=_r;break t}break}}else if((g&64)===0){x=E[(x&65535)+(_&(1<<g)-1)];continue e}else if(g&32){w.mode=eS;break t}else{t.msg="invalid literal/length code",w.mode=_r;break t}break}}while(n<s&&r<o);P=m>>3,n-=P,m-=P<<3,_&=(1<<m)-1,t.next_in=n,t.next_out=r,t.avail_in=n<s?5+(s-n):5-(n-s),t.avail_out=r<o?257+(o-r):257-(r-o),w.hold=_,w.bits=m};const ki=15,Fl=852,Ol=592,Nl=0,Ia=1,Bl=2,iS=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),sS=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),rS=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),aS=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),oS=(i,t,e,n,s,r,a,o)=>{const l=o.bits;let c=0,h=0,u=0,d=0,_=0,m=0,E=0,p=0,f=0,R=0,x,g,P,b,y,C=null,A;const S=new Uint16Array(ki+1),w=new Uint16Array(ki+1);let B=null,O,H,W;for(c=0;c<=ki;c++)S[c]=0;for(h=0;h<n;h++)S[t[e+h]]++;for(_=l,d=ki;d>=1&&S[d]===0;d--);if(_>d&&(_=d),d===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,o.bits=1,0;for(u=1;u<d&&S[u]===0;u++);for(_<u&&(_=u),p=1,c=1;c<=ki;c++)if(p<<=1,p-=S[c],p<0)return-1;if(p>0&&(i===Nl||d!==1))return-1;for(w[1]=0,c=1;c<ki;c++)w[c+1]=w[c]+S[c];for(h=0;h<n;h++)t[e+h]!==0&&(a[w[t[e+h]]++]=h);if(i===Nl?(C=B=a,A=20):i===Ia?(C=iS,B=sS,A=257):(C=rS,B=aS,A=0),R=0,h=0,c=u,y=r,m=_,E=0,P=-1,f=1<<_,b=f-1,i===Ia&&f>Fl||i===Bl&&f>Ol)return 1;for(;;){O=c-E,a[h]+1<A?(H=0,W=a[h]):a[h]>=A?(H=B[a[h]-A],W=C[a[h]-A]):(H=96,W=0),x=1<<c-E,g=1<<m,u=g;do g-=x,s[y+(R>>E)+g]=O<<24|H<<16|W|0;while(g!==0);for(x=1<<c-1;R&x;)x>>=1;if(x!==0?(R&=x-1,R+=x):R=0,h++,--S[c]===0){if(c===d)break;c=t[e+a[h]]}if(c>_&&(R&b)!==P){for(E===0&&(E=_),y+=u,m=c-E,p=1<<m;m+E<d&&(p-=S[m+E],!(p<=0));)m++,p<<=1;if(f+=1<<m,i===Ia&&f>Fl||i===Bl&&f>Ol)return 1;P=R&b,s[P]=_<<24|m<<16|y-r|0}}return R!==0&&(s[y+R]=c-E<<24|64<<16|0),o.bits=_,0};var Ms=oS;const cS=0,bd=1,Cd=2,{Z_FINISH:kl,Z_BLOCK:lS,Z_TREES:pr,Z_OK:gi,Z_STREAM_END:hS,Z_NEED_DICT:dS,Z_STREAM_ERROR:He,Z_DATA_ERROR:Pd,Z_MEM_ERROR:Ud,Z_BUF_ERROR:uS,Z_DEFLATED:Gl}=Nr,Hr=16180,Hl=16181,zl=16182,Vl=16183,Wl=16184,Yl=16185,Kl=16186,$l=16187,Xl=16188,ql=16189,Ir=16190,xn=16191,Da=16192,Zl=16193,La=16194,jl=16195,Jl=16196,Ql=16197,th=16198,mr=16199,gr=16200,eh=16201,nh=16202,ih=16203,sh=16204,rh=16205,Fa=16206,ah=16207,oh=16208,re=16209,Id=16210,Dd=16211,fS=852,_S=592,pS=15,mS=pS,ch=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function gS(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const vi=i=>{if(!i)return 1;const t=i.state;return!t||t.strm!==i||t.mode<Hr||t.mode>Dd?1:0},Ld=i=>{if(vi(i))return He;const t=i.state;return i.total_in=i.total_out=t.total=0,i.msg="",t.wrap&&(i.adler=t.wrap&1),t.mode=Hr,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(fS),t.distcode=t.distdyn=new Int32Array(_S),t.sane=1,t.back=-1,gi},Fd=i=>{if(vi(i))return He;const t=i.state;return t.wsize=0,t.whave=0,t.wnext=0,Ld(i)},Od=(i,t)=>{let e;if(vi(i))return He;const n=i.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?He:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=e,n.wbits=t,Fd(i))},Nd=(i,t)=>{if(!i)return He;const e=new gS;i.state=e,e.strm=i,e.window=null,e.mode=Hr;const n=Od(i,t);return n!==gi&&(i.state=null),n},ES=i=>Nd(i,mS);let lh=!0,Oa,Na;const SS=i=>{if(lh){Oa=new Int32Array(512),Na=new Int32Array(32);let t=0;for(;t<144;)i.lens[t++]=8;for(;t<256;)i.lens[t++]=9;for(;t<280;)i.lens[t++]=7;for(;t<288;)i.lens[t++]=8;for(Ms(bd,i.lens,0,288,Oa,0,i.work,{bits:9}),t=0;t<32;)i.lens[t++]=5;Ms(Cd,i.lens,0,32,Na,0,i.work,{bits:5}),lh=!1}i.lencode=Oa,i.lenbits=9,i.distcode=Na,i.distbits=5},Bd=(i,t,e,n)=>{let s;const r=i.state;return r.window===null&&(r.window=new Uint8Array(1<<r.wbits)),r.wsize===0&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0),n>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>n&&(s=n),r.window.set(t.subarray(e-n,e-n+s),r.wnext),n-=s,n?(r.window.set(t.subarray(e-n,e),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},xS=(i,t)=>{let e,n,s,r,a,o,l,c,h,u,d,_,m,E,p=0,f,R,x,g,P,b,y,C;const A=new Uint8Array(4);let S,w;const B=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(vi(i)||!i.output||!i.input&&i.avail_in!==0)return He;e=i.state,e.mode===xn&&(e.mode=Da),a=i.next_out,s=i.output,l=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,c=e.hold,h=e.bits,u=o,d=l,C=gi;t:for(;;)switch(e.mode){case Hr:if(e.wrap===0){e.mode=Da;break}for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&2&&c===35615){e.wbits===0&&(e.wbits=15),e.check=0,A[0]=c&255,A[1]=c>>>8&255,e.check=me(e.check,A,2,0),c=0,h=0,e.mode=Hl;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((c&255)<<8)+(c>>8))%31){i.msg="incorrect header check",e.mode=re;break}if((c&15)!==Gl){i.msg="unknown compression method",e.mode=re;break}if(c>>>=4,h-=4,y=(c&15)+8,e.wbits===0&&(e.wbits=y),y>15||y>e.wbits){i.msg="invalid window size",e.mode=re;break}e.dmax=1<<e.wbits,e.flags=0,i.adler=e.check=1,e.mode=c&512?ql:xn,c=0,h=0;break;case Hl:for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.flags=c,(e.flags&255)!==Gl){i.msg="unknown compression method",e.mode=re;break}if(e.flags&57344){i.msg="unknown header flags set",e.mode=re;break}e.head&&(e.head.text=c>>8&1),e.flags&512&&e.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,e.check=me(e.check,A,2,0)),c=0,h=0,e.mode=zl;case zl:for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.head&&(e.head.time=c),e.flags&512&&e.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,A[2]=c>>>16&255,A[3]=c>>>24&255,e.check=me(e.check,A,4,0)),c=0,h=0,e.mode=Vl;case Vl:for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.head&&(e.head.xflags=c&255,e.head.os=c>>8),e.flags&512&&e.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,e.check=me(e.check,A,2,0)),c=0,h=0,e.mode=Wl;case Wl:if(e.flags&1024){for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.length=c,e.head&&(e.head.extra_len=c),e.flags&512&&e.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,e.check=me(e.check,A,2,0)),c=0,h=0}else e.head&&(e.head.extra=null);e.mode=Yl;case Yl:if(e.flags&1024&&(_=e.length,_>o&&(_=o),_&&(e.head&&(y=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(n.subarray(r,r+_),y)),e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,e.length-=_),e.length))break t;e.length=0,e.mode=Kl;case Kl:if(e.flags&2048){if(o===0)break t;_=0;do y=n[r+_++],e.head&&y&&e.length<65536&&(e.head.name+=String.fromCharCode(y));while(y&&_<o);if(e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,y)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=$l;case $l:if(e.flags&4096){if(o===0)break t;_=0;do y=n[r+_++],e.head&&y&&e.length<65536&&(e.head.comment+=String.fromCharCode(y));while(y&&_<o);if(e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,y)break t}else e.head&&(e.head.comment=null);e.mode=Xl;case Xl:if(e.flags&512){for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&4&&c!==(e.check&65535)){i.msg="header crc mismatch",e.mode=re;break}c=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),i.adler=e.check=0,e.mode=xn;break;case ql:for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}i.adler=e.check=ch(c),c=0,h=0,e.mode=Ir;case Ir:if(e.havedict===0)return i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,dS;i.adler=e.check=1,e.mode=xn;case xn:if(t===lS||t===pr)break t;case Da:if(e.last){c>>>=h&7,h-=h&7,e.mode=Fa;break}for(;h<3;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}switch(e.last=c&1,c>>>=1,h-=1,c&3){case 0:e.mode=Zl;break;case 1:if(SS(e),e.mode=mr,t===pr){c>>>=2,h-=2;break t}break;case 2:e.mode=Jl;break;case 3:i.msg="invalid block type",e.mode=re}c>>>=2,h-=2;break;case Zl:for(c>>>=h&7,h-=h&7;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if((c&65535)!==(c>>>16^65535)){i.msg="invalid stored block lengths",e.mode=re;break}if(e.length=c&65535,c=0,h=0,e.mode=La,t===pr)break t;case La:e.mode=jl;case jl:if(_=e.length,_){if(_>o&&(_=o),_>l&&(_=l),_===0)break t;s.set(n.subarray(r,r+_),a),o-=_,r+=_,l-=_,a+=_,e.length-=_;break}e.mode=xn;break;case Jl:for(;h<14;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.nlen=(c&31)+257,c>>>=5,h-=5,e.ndist=(c&31)+1,c>>>=5,h-=5,e.ncode=(c&15)+4,c>>>=4,h-=4,e.nlen>286||e.ndist>30){i.msg="too many length or distance symbols",e.mode=re;break}e.have=0,e.mode=Ql;case Ql:for(;e.have<e.ncode;){for(;h<3;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.lens[B[e.have++]]=c&7,c>>>=3,h-=3}for(;e.have<19;)e.lens[B[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,S={bits:e.lenbits},C=Ms(cS,e.lens,0,19,e.lencode,0,e.work,S),e.lenbits=S.bits,C){i.msg="invalid code lengths set",e.mode=re;break}e.have=0,e.mode=th;case th:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[c&(1<<e.lenbits)-1],f=p>>>24,R=p>>>16&255,x=p&65535,!(f<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(x<16)c>>>=f,h-=f,e.lens[e.have++]=x;else{if(x===16){for(w=f+2;h<w;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(c>>>=f,h-=f,e.have===0){i.msg="invalid bit length repeat",e.mode=re;break}y=e.lens[e.have-1],_=3+(c&3),c>>>=2,h-=2}else if(x===17){for(w=f+3;h<w;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=f,h-=f,y=0,_=3+(c&7),c>>>=3,h-=3}else{for(w=f+7;h<w;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=f,h-=f,y=0,_=11+(c&127),c>>>=7,h-=7}if(e.have+_>e.nlen+e.ndist){i.msg="invalid bit length repeat",e.mode=re;break}for(;_--;)e.lens[e.have++]=y}}if(e.mode===re)break;if(e.lens[256]===0){i.msg="invalid code -- missing end-of-block",e.mode=re;break}if(e.lenbits=9,S={bits:e.lenbits},C=Ms(bd,e.lens,0,e.nlen,e.lencode,0,e.work,S),e.lenbits=S.bits,C){i.msg="invalid literal/lengths set",e.mode=re;break}if(e.distbits=6,e.distcode=e.distdyn,S={bits:e.distbits},C=Ms(Cd,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,S),e.distbits=S.bits,C){i.msg="invalid distances set",e.mode=re;break}if(e.mode=mr,t===pr)break t;case mr:e.mode=gr;case gr:if(o>=6&&l>=258){i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,nS(i,d),a=i.next_out,s=i.output,l=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,c=e.hold,h=e.bits,e.mode===xn&&(e.back=-1);break}for(e.back=0;p=e.lencode[c&(1<<e.lenbits)-1],f=p>>>24,R=p>>>16&255,x=p&65535,!(f<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(R&&(R&240)===0){for(g=f,P=R,b=x;p=e.lencode[b+((c&(1<<g+P)-1)>>g)],f=p>>>24,R=p>>>16&255,x=p&65535,!(g+f<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=g,h-=g,e.back+=g}if(c>>>=f,h-=f,e.back+=f,e.length=x,R===0){e.mode=rh;break}if(R&32){e.back=-1,e.mode=xn;break}if(R&64){i.msg="invalid literal/length code",e.mode=re;break}e.extra=R&15,e.mode=eh;case eh:if(e.extra){for(w=e.extra;h<w;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.length+=c&(1<<e.extra)-1,c>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=nh;case nh:for(;p=e.distcode[c&(1<<e.distbits)-1],f=p>>>24,R=p>>>16&255,x=p&65535,!(f<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if((R&240)===0){for(g=f,P=R,b=x;p=e.distcode[b+((c&(1<<g+P)-1)>>g)],f=p>>>24,R=p>>>16&255,x=p&65535,!(g+f<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=g,h-=g,e.back+=g}if(c>>>=f,h-=f,e.back+=f,R&64){i.msg="invalid distance code",e.mode=re;break}e.offset=x,e.extra=R&15,e.mode=ih;case ih:if(e.extra){for(w=e.extra;h<w;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.offset+=c&(1<<e.extra)-1,c>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){i.msg="invalid distance too far back",e.mode=re;break}e.mode=sh;case sh:if(l===0)break t;if(_=d-l,e.offset>_){if(_=e.offset-_,_>e.whave&&e.sane){i.msg="invalid distance too far back",e.mode=re;break}_>e.wnext?(_-=e.wnext,m=e.wsize-_):m=e.wnext-_,_>e.length&&(_=e.length),E=e.window}else E=s,m=a-e.offset,_=e.length;_>l&&(_=l),l-=_,e.length-=_;do s[a++]=E[m++];while(--_);e.length===0&&(e.mode=gr);break;case rh:if(l===0)break t;s[a++]=e.length,l--,e.mode=gr;break;case Fa:if(e.wrap){for(;h<32;){if(o===0)break t;o--,c|=n[r++]<<h,h+=8}if(d-=l,i.total_out+=d,e.total+=d,e.wrap&4&&d&&(i.adler=e.check=e.flags?me(e.check,s,d,a-d):Cs(e.check,s,d,a-d)),d=l,e.wrap&4&&(e.flags?c:ch(c))!==e.check){i.msg="incorrect data check",e.mode=re;break}c=0,h=0}e.mode=ah;case ah:if(e.wrap&&e.flags){for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&4&&c!==(e.total&4294967295)){i.msg="incorrect length check",e.mode=re;break}c=0,h=0}e.mode=oh;case oh:C=hS;break t;case re:C=Pd;break t;case Id:return Ud;case Dd:default:return He}return i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,(e.wsize||d!==i.avail_out&&e.mode<re&&(e.mode<Fa||t!==kl))&&Bd(i,i.output,i.next_out,d-i.avail_out),u-=i.avail_in,d-=i.avail_out,i.total_in+=u,i.total_out+=d,e.total+=d,e.wrap&4&&d&&(i.adler=e.check=e.flags?me(e.check,s,d,i.next_out-d):Cs(e.check,s,d,i.next_out-d)),i.data_type=e.bits+(e.last?64:0)+(e.mode===xn?128:0)+(e.mode===mr||e.mode===La?256:0),(u===0&&d===0||t===kl)&&C===gi&&(C=uS),C},vS=i=>{if(vi(i))return He;let t=i.state;return t.window&&(t.window=null),i.state=null,gi},MS=(i,t)=>{if(vi(i))return He;const e=i.state;return(e.wrap&2)===0?He:(e.head=t,t.done=!1,gi)},AS=(i,t)=>{const e=t.length;let n,s,r;return vi(i)||(n=i.state,n.wrap!==0&&n.mode!==Ir)?He:n.mode===Ir&&(s=1,s=Cs(s,t,e,0),s!==n.check)?Pd:(r=Bd(i,t,e,e),r?(n.mode=Id,Ud):(n.havedict=1,gi))};var RS=Fd,yS=Od,TS=Ld,wS=ES,bS=Nd,CS=xS,PS=vS,US=MS,IS=AS,DS="pako inflate (from Nodeca project)",nn={inflateReset:RS,inflateReset2:yS,inflateResetKeep:TS,inflateInit:wS,inflateInit2:bS,inflate:CS,inflateEnd:PS,inflateGetHeader:US,inflateSetDictionary:IS,inflateInfo:DS};function LS(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var FS=LS;const kd=Object.prototype.toString,{Z_NO_FLUSH:OS,Z_FINISH:hh,Z_OK:Yi,Z_STREAM_END:Ba,Z_NEED_DICT:ka,Z_STREAM_ERROR:NS,Z_DATA_ERROR:dh,Z_MEM_ERROR:BS,Z_BUF_ERROR:uh}=Nr,kS={chunkSize:1024*64,windowBits:15,to:""};function zr(i){this.options=kr.assign({},kS,i||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(i&&i.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Td,this.strm.avail_out=0;let e=nn.inflateInit2(this.strm,t.windowBits);if(e!==Yi)throw new Error(Ji[e]);if(this.header=new FS,nn.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Us.string2buf(t.dictionary):kd.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=nn.inflateSetDictionary(this.strm,t.dictionary),e!==Yi)))throw new Error(Ji[e])}zr.prototype.push=function(i,t){const e=this.strm,n=this.options.chunkSize,s=this.options.dictionary;let r,a,o;if(this.ended)return!1;for(t===~~t?a=t:a=t===!0?hh:OS,kd.call(i)==="[object ArrayBuffer]"?e.input=new Uint8Array(i):e.input=i,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),r=nn.inflate(e,a),r===ka&&s&&(r=nn.inflateSetDictionary(e,s),r===Yi?r=nn.inflate(e,a):r===dh&&(r=ka));e.avail_in>0&&r===Ba&&e.state.wrap&2&&e.state.flags!==0&&e.input[e.next_in]!==0;)nn.inflateReset(e),r=nn.inflate(e,a);switch(r){case NS:case dh:case ka:case BS:return this.onEnd(r),this.ended=!0,!1}if(o=e.avail_out,e.next_out&&(e.avail_out===0||r===Ba||a>0))if(this.options.to==="string"){let l=Us.utf8border(e.output,e.next_out),c=e.next_out-l,h=Us.buf2string(e.output,l);e.next_out=c,e.avail_out=n-c,c&&e.output.set(e.output.subarray(l,l+c),0),this.onData(h)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out)),e.avail_out=0,e.next_out=0;if(!((r===Yi||r===uh)&&o===0)){if(r===Ba)return r=nn.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(e.avail_in===0){if(a===hh)return r=nn.inflateEnd(this.strm),this.onEnd(r===Yi?uh:r),this.ended=!0,!1;break}}}return!0};zr.prototype.onData=function(i){this.chunks.push(i)};zr.prototype.onEnd=function(i){i===Yi&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=kr.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};var GS=zr,HS={Inflate:GS};const{deflate:zS}=tS,{Inflate:VS}=HS;var WS=zS,YS=VS;function ko(i,t,e=255){const n=i.length%t;if(n!==0){const s=new Uint8Array(t-n).fill(e),r=new Uint8Array(i.length+s.length);return r.set(i),r.set(s,i.length),r}return i}const ac=239;function fh(i,t=ac){for(let e=0;e<i.length;e++)t^=i[e];return t}function Vr(i){const t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return t}function Rn(i){return new Promise(t=>setTimeout(t,i))}class Gd{constructor(t,e=!1,n=!0){this.device=t,this.tracing=e,this.slipReaderEnabled=!1,this.baudrate=0,this.traceLog="",this.lastTraceTime=Date.now(),this.buffer=new Uint8Array(0),this.onDeviceLostCallback=null,this.SLIP_END=192,this.SLIP_ESC=219,this.SLIP_ESC_END=220,this.SLIP_ESC_ESC=221,this._DTR_state=!1,this.slipReaderEnabled=n}setDeviceLostCallback(t){this.onDeviceLostCallback=t}updateDevice(t){this.device=t,this.trace("Device reference updated")}getInfo(){const t=this.device.getInfo();return t.usbVendorId&&t.usbProductId?`WebSerial VendorID 0x${t.usbVendorId.toString(16)} ProductID 0x${t.usbProductId.toString(16)}`:""}getVid(){return this.device.getInfo().usbVendorId}getPid(){return this.device.getInfo().usbProductId}trace(t){const s=`${`TRACE ${(Date.now()-this.lastTraceTime).toFixed(3)}`} ${t}`;console.log(s),this.traceLog+=s+`
`}async returnTrace(){try{await navigator.clipboard.writeText(this.traceLog),console.log("Text copied to clipboard!")}catch(t){console.error("Failed to copy text:",t)}}hexify(t){return Array.from(t).map(e=>e.toString(16).padStart(2,"0")).join("").padEnd(16," ")}hexConvert(t,e=!0){if(e&&t.length>16){let n="",s=t;for(;s.length>0;){const r=s.slice(0,16),a=String.fromCharCode(...r).split("").map(o=>o===" "||o>=" "&&o<="~"&&o!=="  "?o:".").join("");s=s.slice(16),n+=`
    ${this.hexify(r.slice(0,8))} ${this.hexify(r.slice(8))} | ${a}`}return n}else return this.hexify(t)}slipWriter(t){const e=[];e.push(192);for(let n=0;n<t.length;n++)t[n]===219?e.push(219,221):t[n]===192?e.push(219,220):e.push(t[n]);return e.push(192),new Uint8Array(e)}async write(t){const e=this.slipWriter(t);if(this.device.writable){const n=this.device.writable.getWriter();this.tracing&&this.trace(`Write ${e.length} bytes: ${this.hexConvert(e)}`),await n.write(e),n.releaseLock()}}appendArray(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}async readLoop(){for(var t;this.device.readable;){this.reader=(t=this.device.readable)===null||t===void 0?void 0:t.getReader();try{const{value:e,done:n}=await this.reader.read();if(n){this.trace("Serial port done");break}if(e&&e.length){const s=Uint8Array.from(e);this.buffer=this.appendArray(this.buffer,s)}}catch(e){if(e instanceof Error){if(["BufferOverrunError","FramingError","BreakError","ParityError"].includes(e.name)){this.trace(`Recoverable serial port error: ${e.message}`);continue}this.trace(`Unrecoverable serial port error: ${e.message}`);break}if(e instanceof DOMException){this.onDeviceLostCallback?this.onDeviceLostCallback():this.trace(`Unrecoverable serial port error: ${e.message}`);break}this.trace(`Unrecoverable serial port error: ${e}`);break}finally{this.reader.releaseLock()}}this.trace("readLoop exited")}flushInput(){this.buffer=new Uint8Array(0)}async drainInput(t=100,e=400){const n=Date.now()+e;let s=-1;for(;Date.now()<n&&this.buffer.length!==s;)s=this.buffer.length,await Rn(t);this.tracing&&this.trace(`Drained ${this.buffer.length} bytes from serial buffer`),this.flushInput()}async flushOutput(){try{if(this.device.writable){const t=this.device.writable.getWriter();await t.close(),t.releaseLock()}}catch(t){this.trace(`Error while flushing output: ${t}`)}}inWaiting(){return this.buffer.length}peek(){return this.buffer}detectPanicHandler(t){const e=/G?uru Meditation Error: (?:Core \d panic'ed \(([a-zA-Z ]*)\))?/,n=/F?atal exception \(\d+\): (?:([a-zA-Z ]*)?.*epc)?/,s=new TextDecoder("utf-8").decode(t),r=s.match(e)||s.match(n);if(r){const a=r[1]||r[2],o=`Guru Meditation Error detected${a?` (${a})`:""}`;throw new Error(o)}}async read(t){let e=null,n=!1,s=null;for(;;){const r=Date.now();for(s=new Uint8Array(0);Date.now()-r<t;)if(this.buffer.length>0){s=this.buffer,this.buffer=new Uint8Array(0);break}else await Rn(1);if(!s||s.length===0){const a=e===null?"Serial data stream stopped: Possible serial noise or corruption.":"No serial data received.";throw this.tracing&&this.trace(a),new Dt(a)}this.tracing&&this.trace(`Read ${s.length} bytes: ${this.hexConvert(s)}`);for(let a=0;a<s.length;a++){const o=s[a];if(e===null)if(o===this.SLIP_END)e=new Uint8Array(0);else{this.tracing&&this.trace(`Read invalid data: ${this.hexConvert(s)}`);const l=this.buffer;throw this.tracing&&this.trace(`Remaining data in serial buffer: ${this.hexConvert(l)}`),this.detectPanicHandler(new Uint8Array([...s,...l||[]])),new Dt(`Invalid head of packet (0x${o.toString(16)}): Possible serial noise or corruption.`)}else if(n)if(n=!1,o===this.SLIP_ESC_END)e=this.appendArray(e,new Uint8Array([this.SLIP_END]));else if(o===this.SLIP_ESC_ESC)e=this.appendArray(e,new Uint8Array([this.SLIP_ESC]));else{this.tracing&&this.trace(`Read invalid data: ${this.hexConvert(s)}`);const l=this.buffer;throw this.tracing&&this.trace(`Remaining data in serial buffer: ${this.hexConvert(l)}`),this.detectPanicHandler(new Uint8Array([...s,...l||[]])),new Dt(`Invalid SLIP escape (0xdb, 0x${o.toString(16)})`)}else if(o===this.SLIP_ESC)n=!0;else if(o===this.SLIP_END){if(this.tracing&&this.trace(`Received full packet: ${this.hexConvert(e)}`),a+1<s.length){const l=s.slice(a+1);this.buffer=this.appendArray(l,this.buffer)}return e}else e=this.appendArray(e,new Uint8Array([o]))}}}async rawRead(t,e){let n;try{if(!this.device.readable)return;for(n=this.device.readable.getReader(),this.reader=n;!e();){const{value:s,done:r}=await n.read();if(r||!s)break;this.tracing&&this.trace(`Read ${s.length} bytes: ${this.hexConvert(s)}`),t(s)}}catch(s){this.trace(`Error reading from serial port: ${s}`),s instanceof Error&&s.name==="NetworkError"&&s.message.includes("device has been lost")&&(this.trace("Device lost detected (NetworkError)"),this.onDeviceLostCallback&&this.onDeviceLostCallback())}finally{n==null||n.releaseLock(),this.reader===n&&(this.reader=void 0)}}async setRTS(t){await this.device.setSignals({requestToSend:t}),await this.setDTR(this._DTR_state)}async setDTR(t){this._DTR_state=t,await this.device.setSignals({dataTerminalReady:t})}async setSignals(t,e,n){t&&(this._DTR_state=t),await this.device.setSignals({dataTerminalReady:t,requestToSend:e,break:n})}async connect(t=115200,e={}){await this.device.open({baudRate:t,dataBits:e==null?void 0:e.dataBits,stopBits:e==null?void 0:e.stopBits,bufferSize:e==null?void 0:e.bufferSize,parity:e==null?void 0:e.parity,flowControl:e==null?void 0:e.flowControl}),this.baudrate=t}async changeBaudrate(t,e={}){const n=this.device;return typeof n.setBaudRate=="function"?(this.tracing&&this.trace(`Changing host baud rate to ${t} in place`),await n.setBaudRate(t),this.baudrate=t,!1):(this.tracing&&this.trace(`Reopening serial port at ${t} baud`),await this.disconnect(),await Rn(50),await this.connect(t,e),await Rn(50),this.readLoop(),!0)}async waitForUnlock(t){for(;this.device.readable&&this.device.readable.locked||this.device.writable&&this.device.writable.locked;)await Rn(t)}async disconnect(){var t,e;!((t=this.device.readable)===null||t===void 0)&&t.locked&&await((e=this.reader)===null||e===void 0?void 0:e.cancel()),await this.waitForUnlock(400),await this.device.close(),this.reader=void 0}}function bn(i){return new Promise(t=>setTimeout(t,i))}class KS{constructor(t,e){this.resetDelay=e,this.transport=t}async reset(){await this.transport.setSignals(!1,!0),await bn(100),await this.transport.setSignals(!0,!1),await bn(this.resetDelay),await this.transport.setSignals(!1,!1)}}class $S{constructor(t){this.transport=t}async reset(){await this.transport.setRTS(!1),await this.transport.setDTR(!1),await bn(100),await this.transport.setDTR(!0),await this.transport.setRTS(!1),await bn(100),await this.transport.setRTS(!0),await this.transport.setDTR(!1),await this.transport.setRTS(!0),await bn(100),await this.transport.setRTS(!1),await this.transport.setDTR(!1)}}class XS{constructor(t,e=!1){this.transport=t,this.usingUsbOtg=e,this.transport=t}async reset(){this.usingUsbOtg?(await bn(200),await this.transport.setRTS(!1),await bn(200)):(await bn(100),await this.transport.setRTS(!1))}}function qS(i){const t=["D","R","W"],e=i.split("|");for(const n of e){const s=n[0],r=n.slice(1);if(!t.includes(s))return!1;if(s==="D"||s==="R"){if(r!=="0"&&r!=="1")return!1}else if(s==="W"){const a=parseInt(r);if(isNaN(a)||a<=0)return!1}}return!0}class ZS{constructor(t,e){this.transport=t,this.sequenceString=e,this.transport=t}async reset(){const t={D:async e=>await this.transport.setDTR(e),R:async e=>await this.transport.setRTS(e),W:async e=>await bn(e)};try{if(!qS(this.sequenceString))return;const n=this.sequenceString.split("|");for(const s of n){const r=s[0],a=s.slice(1);r==="W"?await t.W(Number(a)):(r==="D"||r==="R")&&await t[r](a==="1")}}catch{throw new Error("Invalid custom reset sequence")}}}function jS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ga,_h;function JS(){return _h||(_h=1,Ga=function(t){return atob(t)}),Ga}var QS=JS();const tx=jS(QS);async function ph(i,t){let e;switch(i){case"ESP32":e=await se(()=>import("./esp32-DjViQH-9.js"),[]);break;case"ESP32-C2":e=await se(()=>import("./esp32c2-C2NjgG-v.js"),[]);break;case"ESP32-C3":e=await se(()=>import("./esp32c3-Dyasi16Q.js"),[]);break;case"ESP32-C5":e=await se(()=>import("./esp32c5-BjQFsfgl.js"),[]);break;case"ESP32-C6":e=await se(()=>import("./esp32c6-Dy7wT69i.js"),[]);break;case"ESP32-C61":e=await se(()=>import("./esp32c61-BY-irt7n.js"),[]);break;case"ESP32-H2":e=await se(()=>import("./esp32h2-p6jcdfQ1.js"),[]);break;case"ESP32-H4":e=await se(()=>import("./esp32h4-D2hE15lu.js"),[]);break;case"ESP32-H21":break;case"ESP32-E22":break;case"ESP32-P4":t&&t<300?e=await se(()=>import("./esp32p4-rev1-CoChmcgP.js"),[]):e=await se(()=>import("./esp32p4-BNiOk16x.js"),[]);break;case"ESP32-S2":e=await se(()=>import("./esp32s2-ogKv7abk.js"),[]);break;case"ESP32-S3":e=await se(()=>import("./esp32s3-TJXdSVhr.js"),[]);break;case"ESP32-S31":e=await se(()=>import("./esp32s31-DL3_mrBD.js"),[]);break;case"ESP8266":e=await se(()=>import("./esp8266-Dm8i-3Sp.js"),[]);break}if(e){const n="default"in e?e.default:e;return{bss_start:n.bss_start,data:n.data,data_start:n.data_start,entry:n.entry,text:n.text,text_start:n.text_start,decodedData:mh(n.data),decodedText:mh(n.text)}}}function mh(i){const e=tx(i).split("").map(function(n){return n.charCodeAt(0)});return new Uint8Array(e)}class Hd{constructor(){this.FLASH_SIZES={"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64,"32MB":80,"64MB":96,"128MB":112},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.USES_MAGIC_VALUE=!1}getEraseSize(t,e){return e}}class Ei extends Hd{constructor(){super(...arguments),this.CHIP_NAME="ESP8266",this.USES_MAGIC_VALUE=!0,this.CHIP_DETECT_MAGIC_VALUE=[4293968129],this.EFUSE_RD_REG_BASE=1072693328,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.XTAL_CLK_DIVIDER=2,this.FLASH_WRITE_SIZE=16384,this.BOOTLOADER_FLASH_OFFSET=0,this.UART_DATE_REG_ADDR=0,this.FLASH_SIZES={"512KB":0,"256KB":16,"1MB":32,"2MB":48,"4MB":64,"2MB-c1":80,"4MB-c1":96,"8MB":128,"16MB":144},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.MEMORY_MAP=[[1072693248,1072693264,"DPORT"],[1073643520,1073741824,"DRAM"],[1074790400,1074823168,"IRAM"],[1075843088,1076760592,"IROM"]],this.SPI_REG_BASE=1610613248,this.SPI_USR_OFFS=28,this.SPI_USR1_OFFS=32,this.SPI_USR2_OFFS=36,this.SPI_MOSI_DLEN_OFFS=0,this.SPI_MISO_DLEN_OFFS=0,this.SPI_W0_OFFS=64,this.getChipFeatures=async t=>{const e=["WiFi"];return await this.getChipDescription(t)=="ESP8285"&&e.push("Embedded Flash"),e}}async readEfuse(t,e){const n=this.EFUSE_RD_REG_BASE+4*e;return t.debug("Read efuse "+n),await t.readReg(n)}async getChipDescription(t){const e=await this.readEfuse(t,2);return(await this.readEfuse(t,0)&16|e&65536)!=0?"ESP8285":"ESP8266EX"}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Detected crystal freq "+n+"MHz is quite different to normalized freq "+s+"MHz. Unsupported crystal in use?"),s}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await this.readEfuse(t,0);e=e>>>0;let n=await this.readEfuse(t,1);n=n>>>0;let s=await this.readEfuse(t,3);s=s>>>0;const r=new Uint8Array(6);return s!=0?(r[0]=s>>16&255,r[1]=s>>8&255,r[2]=s&255):(n>>16&255)==0?(r[0]=24,r[1]=254,r[2]=52):(n>>16&255)==1?(r[0]=172,r[1]=208,r[2]=116):t.error("Unknown OUI"),r[3]=n>>8&255,r[4]=n&255,r[5]=e>>24&255,this._d2h(r[0])+":"+this._d2h(r[1])+":"+this._d2h(r[2])+":"+this._d2h(r[3])+":"+this._d2h(r[4])+":"+this._d2h(r[5])}getEraseSize(t,e){return e}}Ei.IROM_MAP_START=1075838976;Ei.IROM_MAP_END=1076887552;const ex=Object.freeze(Object.defineProperty({__proto__:null,ESP8266ROM:Ei},Symbol.toStringTag,{value:"Module"})),Bs=233;function As(i,t){const e=t-1-i%t;return i+e}function Ha(i,t){return i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24}class Kn{constructor(t,e,n=null,s=0){this.addr=t,this.data=e,this.fileOffs=n,this.flags=s,this.includeInChecksum=!0,this.addr!==0&&this.padToAlignment(4)}copyWithNewAddr(t){return new Kn(t,this.data,0)}splitImage(t){const e=new Kn(this.addr,this.data.slice(0,t),0);return this.data=this.data.slice(t),this.addr+=t,this.fileOffs=null,e}toString(){let t=`len 0x${this.data.length.toString(16).padStart(5,"0")} load 0x${this.addr.toString(16).padStart(8,"0")}`;return this.fileOffs!==null&&(t+=` file_offs 0x${this.fileOffs.toString(16).padStart(8,"0")}`),t}getMemoryType(t){return t.ROM_LOADER.MEMORY_MAP.filter(e=>e[0]<=this.addr&&this.addr<e[1]).map(e=>e[2])}padToAlignment(t){this.data=ko(this.data,t,0)}}class gh extends Kn{constructor(t,e,n,s){super(e,n,null,s),this.name=t}toString(){return`${this.name} ${super.toString()}`}}class oc{constructor(t){this.SEG_HEADER_LEN=8,this.SHA256_DIGEST_LEN=32,this.ELF_FLAG_WRITE=1,this.ELF_FLAG_READ=2,this.ELF_FLAG_EXEC=4,this.segments=[],this.entrypoint=0,this.elfSha256=null,this.elfSha256Offset=0,this.padToSize=0,this.flashMode=0,this.flashSizeFreq=0,this.checksum=0,this.datalength=0,this.IROM_ALIGN=0,this.MMU_PAGE_SIZE_CONF=[],this.ROM_LOADER=t}loadCommonHeader(t,e,n){const s=t[e],r=t[e+1];if(this.flashMode=t[e+2],this.flashSizeFreq=t[e+3],this.entrypoint=Ha(t,e+4),s!==n)throw new Dt(`Invalid firmware image magic=0x${s.toString(16)}`);return r}verify(){if(this.segments.length>16)throw new Dt(`Invalid segment count ${this.segments.length} (max 16). Usually this indicates a linker script problem.`)}loadSegment(t,e,n=!1){const s=e,r=Ha(t,e),a=Ha(t,e+4);this.warnIfUnusualSegment(r,a,n);const o=t.slice(e+8,e+8+a);if(o.length<a)throw new Dt(`End of file reading segment 0x${r.toString(16)}, length ${a} (actual length ${o.length})`);const l=new Kn(r,o,s);return this.segments.push(l),l}warnIfUnusualSegment(t,e,n){n||(t>1075838976||t<1073610752||e>65536)&&console.warn(`WARNING: Suspicious segment 0x${t.toString(16)}, length ${e}`)}maybePatchSegmentData(t,e){const n=t.length;if(this.elfSha256Offset>=e&&this.elfSha256Offset<e+n){const s=this.elfSha256Offset-e;if(s<this.SEG_HEADER_LEN||s+this.SHA256_DIGEST_LEN>n)throw new Dt(`Cannot place SHA256 digest on segment boundary(elf_sha256_offset=${this.elfSha256Offset}, file_pos=${e}, segment_size=${n})`);const r=s-this.SEG_HEADER_LEN;if(!t.slice(r,r+this.SHA256_DIGEST_LEN).every(d=>d===0))throw new Dt(`Contents of segment at SHA256 digest offset 0x${this.elfSha256Offset.toString(16)} are not all zero. Refusing to overwrite.`);if(!this.elfSha256||this.elfSha256.length!==this.SHA256_DIGEST_LEN)throw new Dt("ELF SHA256 digest is not properly initialized");const l=t.slice(0,r),c=t.slice(r+this.SHA256_DIGEST_LEN),h=l.length+this.elfSha256.length+c.length,u=new Uint8Array(h);return u.set(l,0),u.set(this.elfSha256,l.length),u.set(c,l.length+this.elfSha256.length),u}return t}saveSegment(t,e,n,s=null){const r=this.maybePatchSegmentData(n.data,e),a=new DataView(t.buffer,e);return a.setUint32(0,n.addr,!0),a.setUint32(4,r.length,!0),t.set(r,e+8),s!==null?fh(r,s):0}saveFlashSegment(t,e,n,s=null){if(this.ROM_LOADER.CHIP_NAME==="ESP32"){const a=(e+n.data.length+this.SEG_HEADER_LEN)%this.IROM_ALIGN;if(a<36){const o=new Uint8Array(n.data.length+(36-a));o.set(n.data),o.fill(0,n.data.length),n.data=o}}return this.saveSegment(t,e,n,s)}readChecksum(t,e){const n=As(e,16);return t[n]}calculateChecksum(){let t=ac;for(const e of this.segments)e.includeInChecksum&&(t=fh(e.data,t));return t}appendChecksum(t,e,n){const s=As(e,16);t[s]=n}writeCommonHeader(t,e,n){t[e]=Bs,t[e+1]=n,t[e+2]=this.flashMode,t[e+3]=this.flashSizeFreq,new DataView(t.buffer,e+4).setUint32(0,this.entrypoint,!0)}isIromAddr(t){return Ei.IROM_MAP_START<=t&&t<Ei.IROM_MAP_END}getIromSegment(){const t=this.segments.filter(e=>this.isIromAddr(e.addr));if(t.length>0){if(t.length!==1)throw new Dt(`Found ${t.length} segments that could be irom0. Bad ELF file?`);return t[0]}return null}getNonIromSegments(){const t=this.getIromSegment();return this.segments.filter(e=>e!==t)}sortSegments(){this.segments.length&&this.segments.sort((t,e)=>t.addr-e.addr)}mergeAdjacentSegments(){if(!this.segments.length)return;const t=[];for(let e=this.segments.length-1;e>0;e--){const n=this.segments[e-1],s=this.segments[e];if(n.getMemoryType(this).join(",")===s.getMemoryType(this).join(",")&&n.includeInChecksum===s.includeInChecksum&&s.addr===n.addr+n.data.length&&(s.flags&this.ELF_FLAG_EXEC)===(n.flags&this.ELF_FLAG_EXEC)){const r=new Uint8Array(n.data.length+s.data.length);r.set(n.data),r.set(s.data,n.data.length),n.data=r}else t.unshift(s)}t.unshift(this.segments[0]),this.segments=t}setMmuPageSize(t){if(!this.MMU_PAGE_SIZE_CONF&&t!==this.IROM_ALIGN)console.warn(`WARNING: Changing MMU page size is not supported on ${this.ROM_LOADER.CHIP_NAME}! `+(this.IROM_ALIGN!==0?`Defaulting to ${this.IROM_ALIGN/1024}KB.`:""));else if(this.MMU_PAGE_SIZE_CONF&&!this.MMU_PAGE_SIZE_CONF.includes(t)){const e=this.MMU_PAGE_SIZE_CONF.map(n=>`${n/1024}KB`).join(", ");throw new Dt(`${t} bytes is not a valid ${this.ROM_LOADER.CHIP_NAME} page size, select from ${e}.`)}else this.IROM_ALIGN=t}}class un extends oc{constructor(t,e=null,n=!0,s=!1){super(t),this.securePad=null,this.flashMode=0,this.flashSizeFreq=0,this.version=1,this.WP_PIN_DISABLED=238,this.wpPin=this.WP_PIN_DISABLED,this.clkDrv=0,this.qDrv=0,this.dDrv=0,this.csDrv=0,this.hdDrv=0,this.wpDrv=0,this.chipId=0,this.minRev=0,this.minRevFull=0,this.maxRevFull=0,this.storedDigest=null,this.calcDigest=null,this.dataLength=0,this.IROM_ALIGN=65536,this.ROM_LOADER=t,this.appendDigest=n,this.ramOnlyHeader=s,e!==null&&this.loadFromFile(e)}async loadFromFile(t){const n=t instanceof Uint8Array?t:Vr(t);let s=0;const r=this.loadCommonHeader(n,s,Bs);s+=8,this.loadExtendedHeader(n,s),s+=16;for(let a=0;a<r;a++){const o=this.loadSegment(n,s);s+=8+o.data.length}if(this.checksum=this.readChecksum(n,s),s=As(s,16),this.appendDigest){const a=s;this.storedDigest=n.slice(s,s+this.SHA256_DIGEST_LEN);const o=await crypto.subtle.digest("SHA-256",n.slice(0,a));this.calcDigest=new Uint8Array(o),this.dataLength=a-0}this.verify()}isFlashAddr(t){return this.ROM_LOADER.IROM_MAP_START<=t&&t<this.ROM_LOADER.IROM_MAP_END||this.ROM_LOADER.DROM_MAP_START<=t&&t<this.ROM_LOADER.DROM_MAP_END}async save(){let t=0;const e=new Uint8Array(1024*1024);let n=0;this.writeCommonHeader(e,n,this.segments.length),n+=8,this.saveExtendedHeader(e,n),n+=16;let s=ac;const r=this.segments.filter(l=>this.isFlashAddr(l.addr)).sort((l,c)=>l.addr-c.addr),a=this.segments.filter(l=>!this.isFlashAddr(l.addr)).sort((l,c)=>l.addr-c.addr);for(let l=0;l<r.length;l++){const c=r[l];if(c instanceof gh&&c.name===".flash.appdesc"){r.splice(l,1),r.unshift(c);break}}for(let l=0;l<a.length;l++){const c=a[l];if(c instanceof gh&&c.name===".dram0.bootdesc"){a.splice(l,1),a.unshift(c);break}}if(r.length>0){let l=r[0].addr;for(const c of r.slice(1)){if(Math.floor(c.addr/this.IROM_ALIGN)===Math.floor(l/this.IROM_ALIGN))throw new Dt(`Segment loaded at 0x${c.addr.toString(16)} lands in same 64KB flash mapping as segment loaded at 0x${l.toString(16)}. Can't generate binary. Suggest changing linker script or ELF to merge sections.`);l=c.addr}}if(this.ramOnlyHeader){for(const l of a)s=this.saveSegment(e,n,l,s),n+=8+l.data.length,t++;this.appendChecksum(e,n,s),n=As(n,16);for(const l of r.reverse()){let c=this.getAlignmentDataNeeded(l,n);if(c>0){const h=this.ROM_LOADER.BOOTLOADER_FLASH_OFFSET-this.SEG_HEADER_LEN;c<h&&(c+=this.IROM_ALIGN),c-=this.ROM_LOADER.BOOTLOADER_FLASH_OFFSET;const u=new Kn(0,new Uint8Array(c).fill(0),n);s=this.saveSegment(e,n,u,s),n+=8+c,t++}this.saveFlashSegment(e,n,l),n+=8+l.data.length,t++}}else{for(;r.length>0;){const l=r[0],c=this.getAlignmentDataNeeded(l,n);if(c>0){if(a.length>0&&c>this.SEG_HEADER_LEN){const h=a[0].splitImage(c);a[0].data.length===0&&a.shift(),s=this.saveSegment(e,n,h,s)}else{const h=new Kn(0,new Uint8Array(c).fill(0),n);s=this.saveSegment(e,n,h,s)}n+=8+c,t++}else{if((n+8)%this.IROM_ALIGN!==l.addr%this.IROM_ALIGN)throw new Error("Flash segment alignment mismatch");s=this.saveFlashSegment(e,n,l,s),r.shift(),n+=8+l.data.length,t++}}for(const l of a)s=this.saveSegment(e,n,l,s),n+=8+l.data.length,t++}if(this.securePad){if(!this.appendDigest)throw new Error("secure_pad only applies if a SHA-256 digest is also appended to the image");const l=(n+this.SEG_HEADER_LEN)%this.IROM_ALIGN,c=16;let h=0;this.securePad==="1"?h=112:this.securePad==="2"&&(h=32);const u=(this.IROM_ALIGN-l-c-h)%this.IROM_ALIGN,d=new Kn(0,new Uint8Array(u).fill(0),n);s=this.saveSegment(e,n,d,s),n+=8+u,t++}this.ramOnlyHeader||(this.appendChecksum(e,n,s),n=As(n,16));const o=n;if(this.ramOnlyHeader?e[1]=a.length:e[1]=t,this.appendDigest){const l=await crypto.subtle.digest("SHA-256",e.slice(0,o)),c=new Uint8Array(l);e.set(c,o),n+=32}if(this.padToSize&&n%this.padToSize!==0){const l=this.padToSize-n%this.padToSize,c=new Uint8Array(l);c.fill(255),e.set(c,n),n+=l}return e}loadExtendedHeader(t,e){const n=new DataView(t.buffer,e);this.wpPin=n.getUint8(0);const s=n.getUint8(1);[this.clkDrv,this.qDrv]=this.splitByte(s);const r=n.getUint8(2);[this.dDrv,this.csDrv]=this.splitByte(r);const a=n.getUint8(3);[this.hdDrv,this.wpDrv]=this.splitByte(a),this.chipId=n.getUint8(4),this.ROM_LOADER.IMAGE_CHIP_ID!==void 0&&this.chipId!==this.ROM_LOADER.IMAGE_CHIP_ID&&console.warn(`Unexpected chip id in image. Expected ${this.ROM_LOADER.IMAGE_CHIP_ID} but value was ${this.chipId}. Is this image for a different chip model?`),this.minRev=n.getUint8(5),this.minRevFull=n.getUint16(6,!0),this.maxRevFull=n.getUint16(8,!0);const o=n.getUint8(15);if(o===0||o===1)this.appendDigest=o===1;else throw new Error(`Invalid value for append_digest field (0x${o.toString(16)}). Should be 0 or 1.`)}saveExtendedHeader(t,e){var n;const s=new ArrayBuffer(16),r=new DataView(s);r.setUint8(0,this.wpPin),r.setUint8(1,this.joinByte(this.clkDrv,this.qDrv)),r.setUint8(2,this.joinByte(this.dDrv,this.csDrv)),r.setUint8(3,this.joinByte(this.hdDrv,this.wpDrv)),r.setUint8(4,(n=this.ROM_LOADER.IMAGE_CHIP_ID)!==null&&n!==void 0?n:0),r.setUint8(5,this.minRev),r.setUint16(6,this.minRevFull,!0),r.setUint16(8,this.maxRevFull,!0);for(let a=9;a<15;a++)r.setUint8(a,0);r.setUint8(15,this.appendDigest?1:0),t.set(new Uint8Array(s),e)}splitByte(t){return[t&15,t>>4&15]}joinByte(t,e){return t&15|(e&15)<<4}getAlignmentDataNeeded(t,e){const n=t.addr%this.IROM_ALIGN-this.SEG_HEADER_LEN;let s=this.IROM_ALIGN-e%this.IROM_ALIGN+n;return s===0||s===this.IROM_ALIGN?0:(s-=this.SEG_HEADER_LEN,s<0&&(s+=this.IROM_ALIGN),s)}}class nx extends oc{constructor(t,e=null){super(t),this.version=1,this.ROM_LOADER=t,this.flashMode=0,this.flashSizeFreq=0,e!==null&&this.loadFromFile(e)}loadFromFile(t){const e=t instanceof Uint8Array?t:Vr(t);let n=0;const s=this.loadCommonHeader(e,n,Bs);n+=8;for(let r=0;r<s;r++){const a=this.loadSegment(e,n);n+=8+a.data.length}this.checksum=this.readChecksum(e,n),this.verify()}defaultOutputName(t){return t+"-"}}class Si extends oc{constructor(t,e=null){super(t),this.version=2,this.ROM_LOADER=t,this.flashMode=0,this.flashSizeFreq=0,e!==null&&this.loadFromFile(e)}async loadFromFile(t){const e=t instanceof Uint8Array?t:Vr(t);let n=0;const s=this.loadCommonHeader(e,n,Si.IMAGE_V2_MAGIC);n+=8,s!==Si.IMAGE_V2_SEGMENT&&console.warn(`Warning: V2 header has unexpected "segment" count ${s} (usually 4)`);const r=this.flashMode,a=this.flashSizeFreq,o=this.entrypoint,l=this.loadSegment(e,n,!0);l.addr=0,l.includeInChecksum=!1,n+=8+l.data.length;const c=this.loadCommonHeader(e,n,Bs);n+=8,r!==this.flashMode&&console.warn(`WARNING: Flash mode value in first header (0x${r.toString(16)}) disagrees with second (0x${this.flashMode.toString(16)}). Using second value.`),a!==this.flashSizeFreq&&console.warn(`WARNING: Flash size/freq value in first header (0x${a.toString(16)}) disagrees with second (0x${this.flashSizeFreq.toString(16)}). Using second value.`),o!==this.entrypoint&&console.warn(`WARNING: Entrypoint address in first header (0x${o.toString(16)}) disagrees with second header (0x${this.entrypoint.toString(16)}). Using second value.`);for(let h=0;h<c;h++){const u=this.loadSegment(e,n);n+=8+u.data.length}this.checksum=this.readChecksum(e,n),this.verify()}defaultOutputName(t){const e=this.getIromSegment();let n=0;e!==null&&(n=e.addr-Ei.IROM_MAP_START);const s=t.replace(/\.[^/.]+$/,""),r=n&-4096;return`${s}-0x${r.toString(16).padStart(5,"0")}.bin`}}Si.IMAGE_V2_MAGIC=234;Si.IMAGE_V2_SEGMENT=4;class ix extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class sx extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class rx extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class ax extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[16384,32768,65536],this.ROM_LOADER=t}}class Wr extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[8192,16384,32768,65536],this.ROM_LOADER=t}}class ox extends Wr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class zd extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class cx extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class lx extends Wr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class hx extends Wr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class dx extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[8192,16384,32768,65536],this.ROM_LOADER=t}}class ux extends zd{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[32768,65536,131072,262144],this.ROM_LOADER=t}}class fx extends un{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}async function Eh(i,t){const e=t instanceof Uint8Array?t:Vr(t),n=i.CHIP_NAME.toLowerCase().replace(/[-()]/g,"");let s;if(n!=="esp8266")switch(n){case"esp32":s=un;break;case"esp32s2":s=ix;break;case"esp32s3":s=sx;break;case"esp32s31":s=ux;break;case"esp32c3":s=rx;break;case"esp32c2":s=ax;break;case"esp32c6":s=Wr;break;case"esp32c61":s=ox;break;case"esp32c5":s=zd;break;case"esp32e22":s=fx;break;case"esp32h2":s=lx;break;case"esp32h21":s=hx;break;case"esp32h4":s=dx;break;case"esp32p4":s=cx;break;default:throw new Dt(`Unsupported chip name: ${n}`)}else{const o=e[0];if(o===Bs)s=nx;else if(o===Si.IMAGE_V2_MAGIC)s=Si;else throw new Dt(`Invalid image magic number: ${o}`)}const r=new s(i),a=r;if(typeof a.loadFromFile=="function"){const o=a.loadFromFile(e);o instanceof Promise&&await o}return r}class Mi extends Hd{constructor(){super(...arguments),this.CHIP_NAME="ESP32",this.IMAGE_CHIP_ID=0,this.USES_MAGIC_VALUE=!0,this.EFUSE_RD_REG_BASE=1073061888,this.DR_REG_SYSCON_BASE=1073111040,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612856,this.XTAL_CLK_DIVIDER=1,this.IROM_MAP_START=1074593792,this.IROM_MAP_END=1077936128,this.DROM_MAP_START=1061158912,this.DROM_MAP_END=1065353216,this.MEMORY_MAP=[[0,65536,"PADDING"],[1061158912,1065353216,"DROM"],[1065353216,1069547520,"EXTRAM_DATA"],[1073217536,1073225728,"RTC_DRAM"],[1073283072,1073741824,"BYTE_ACCESSIBLE"],[1073405952,1073741824,"DRAM"],[1073610752,1073741820,"DIRAM_DRAM"],[1073741824,1074200576,"IROM"],[1074200576,1074233344,"CACHE_PRO"],[1074233344,1074266112,"CACHE_APP"],[1074266112,1074397184,"IRAM"],[1074397184,1074528252,"DIRAM_IRAM"],[1074528256,1074536448,"RTC_IRAM"],[1074593792,1077936128,"IROM"],[1342177280,1342185472,"RTC_DATA"]],this.FLASH_SIZES={"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64,"32MB":80,"64MB":96,"128MB":112},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=4096,this.SPI_REG_BASE=1072963584,this.SPI_USR_OFFS=28,this.SPI_USR1_OFFS=32,this.SPI_USR2_OFFS=36,this.SPI_W0_OFFS=128,this.SPI_MOSI_DLEN_OFFS=40,this.SPI_MISO_DLEN_OFFS=44}async readEfuse(t,e){const n=this.EFUSE_RD_REG_BASE+4*e;return t.debug("Read efuse "+n),await t.readReg(n)}async getPkgVersion(t){const e=await this.readEfuse(t,3);let n=e>>9&7;return n+=(e>>2&1)<<3,n}async getChipRevision(t){const e=await this.readEfuse(t,3),n=await this.readEfuse(t,5),s=await t.readReg(this.DR_REG_SYSCON_BASE+124),r=e>>15&1,a=n>>20&1,o=s>>31&1;return r!=0?a!=0?o!=0?3:2:1:0}async getChipDescription(t){const e=["ESP32-D0WDQ6","ESP32-D0WD","ESP32-D2WD","","ESP32-U4WDH","ESP32-PICO-D4","ESP32-PICO-V3-02"];let n="";const s=await this.getPkgVersion(t),r=await this.getChipRevision(t),a=r==3;return(await this.readEfuse(t,3)&1)!=0&&(e[0]="ESP32-S0WDQ6",e[1]="ESP32-S0WD"),a&&(e[5]="ESP32-PICO-V3"),s>=0&&s<=6?n=e[s]:n="Unknown ESP32",a&&(s===0||s===1)&&(n+="-V3"),n+" (revision "+r+")"}async getChipFeatures(t){const e=["Wi-Fi"],n=await this.readEfuse(t,3);(n&2)===0&&e.push(" BT"),(n&1)!==0?e.push(" Single Core"):e.push(" Dual Core"),(n&8192)!==0&&((n&4096)!==0?e.push(" 160MHz"):e.push(" 240MHz"));const o=await this.getPkgVersion(t);[2,4,5,6].indexOf(o)!==-1&&e.push(" Embedded Flash"),o===6&&e.push(" Embedded PSRAM"),(await this.readEfuse(t,4)>>8&31)!==0&&e.push(" VRef calibration in efuse"),(n>>14&1)!==0&&e.push(" BLK3 partially reserved");const d=await this.readEfuse(t,6)&3,_=["None","3/4","Repeat (UNSUPPORTED)","Invalid"];return e.push(" Coding Scheme "+_[d]),e}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await this.readEfuse(t,1);e=e>>>0;let n=await this.readEfuse(t,2);n=n>>>0;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}}const _x=Object.freeze(Object.defineProperty({__proto__:null,ESP32ROM:Mi},Symbol.toStringTag,{value:"Module"}));class ks extends Mi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C3",this.IMAGE_CHIP_ID=5,this.USES_MAGIC_VALUE=!1,this.EFUSE_BASE=1610647552,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1015021568,"DROM"],[1070071808,1070465024,"DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1072693248,1072824320,"DROM_MASK"],[1073741824,1074135040,"IROM_MASK"],[1107296256,1115684864,"IROM"],[1077395456,1077805056,"IRAM"],[1342177280,1342185472,"RTC_IRAM"],[1342177280,1342185472,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>21&7}async getChipRevision(t){const e=this.EFUSE_BASE+68,n=3,s=18,r=e+4*n;return(await t.readReg(r)&7<<s)>>s}async getMinorChipVersion(t){const n=this.EFUSE_BASE+68+20,s=await t.readReg(n)>>23&1,a=this.EFUSE_BASE+68+4*3,o=await t.readReg(a)>>18&7;return(s<<3)+o}async getMajorChipVersion(t){const n=this.EFUSE_BASE+68+20;return await t.readReg(n)>>24&3}async getChipDescription(t){const e={0:"ESP32-C3 (QFN32)",1:"ESP8685 (QFN28)",2:"ESP32-C3 AZ (QFN32)",3:"ESP8686 (QFN24)"},n=await this.getPkgVersion(t),s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${e[n]||"Unknown ESP32-C3"} (revision v${s}.${r})`}async getFlashCap(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>27&7}async getFlashVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>0&7;return{1:"XMC",2:"GD",3:"FM",4:"TT",5:"ZBIT"}[a]||""}async getChipFeatures(t){const e=["Wi-Fi","BLE"],n={0:null,1:"Embedded Flash 4MB",2:"Embedded Flash 2MB",3:"Embedded Flash 1MB",4:"Embedded Flash 8MB"},s=await this.getFlashCap(t),r=await this.getFlashVendor(t),a=n[s],o=a!==void 0?a:"Unknown Embedded Flash";return a!==null&&e.push(`${o} (${r})`),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const px=Object.freeze(Object.defineProperty({__proto__:null,ESP32C3ROM:ks},Symbol.toStringTag,{value:"Module"}));class Vd extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C2",this.IMAGE_CHIP_ID=12,this.EFUSE_BASE=1610647552,this.MAC_EFUSE_REG=this.EFUSE_BASE+64,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.XTAL_CLK_DIVIDER=1,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1111490560,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1010827264,"DROM"],[1070202880,1070465024,"DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1072693248,1073020928,"DROM_MASK"],[1073741824,1074331648,"IROM_MASK"],[1107296256,1111490560,"IROM"],[1077395456,1077673984,"IRAM"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+64+4;return await t.readReg(s)>>22&7}async getChipRevision(t){const e=this.EFUSE_BASE+64,n=1,s=20,r=e+4*n;return(await t.readReg(r)&3<<s)>>s}async getChipDescription(t){let e;const n=await this.getPkgVersion(t);n===0||n===1?e="ESP32-C2":e="unknown ESP32-C2";const s=await this.getChipRevision(t);return e+=" (revision "+s+")",e}async getChipFeatures(t){return["Wi-Fi","BLE"]}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}async changeBaudRate(t){await this.getCrystalFreq(t)===26&&t.changeBaud()}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const mx=Object.freeze(Object.defineProperty({__proto__:null,ESP32C2ROM:Vd},Symbol.toStringTag,{value:"Module"}));class Gs extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C6",this.IMAGE_CHIP_ID=13,this.EFUSE_BASE=1611335680,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610625024,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1124073472,"DROM"],[1082130432,1082654720,"DRAM"],[1082130432,1082654720,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1107296256,1124073472,"IROM"],[1082130432,1082654720,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>21&7}async getChipRevision(t){const e=this.EFUSE_BASE+68,n=3,s=18,r=e+4*n;return(await t.readReg(r)&7<<s)>>s}async getChipDescription(t){let e;await this.getPkgVersion(t)===0?e="ESP32-C6":e="unknown ESP32-C6";const s=await this.getChipRevision(t);return e+=" (revision "+s+")",e}async getChipFeatures(t){return["Wi-Fi 6","BT 5","IEEE802.15.4"]}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const gx=Object.freeze(Object.defineProperty({__proto__:null,ESP32C6ROM:Gs},Symbol.toStringTag,{value:"Module"}));class cc extends Gs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C5",this.IMAGE_CHIP_ID=23,this.BOOTLOADER_FLASH_OFFSET=8192,this.EFUSE_BASE=1611352064,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1610612756,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=10,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=22,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=27,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=5,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=10,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=15,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<16,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<25,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1140850688,this.DROM_MAP_START=1107296256,this.DROM_MAP_END=1140850688,this.PCR_SYSCLK_CONF_REG=1611227408,this.PCR_SYSCLK_XTAL_FREQ_V=127<<24,this.PCR_SYSCLK_XTAL_FREQ_S=24,this.XTAL_CLK_DIVIDER=1,this.UARTDEV_BUF_NO=1082520852,this.CHIP_DETECT_MAGIC_VALUE=[285294703,1675706479,1607549039,820080751],this.FLASH_FREQUENCY={"80m":15,"40m":0,"20m":2},this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1140850688,"DROM"],[1082130432,1082523648,"DRAM"],[1082130432,1082523648,"BYTE_ACCESSIBLE"],[1073979392,1074003968,"DROM_MASK"],[1073741824,1073979392,"IROM_MASK"],[1107296256,1140850688,"IROM"],[1082130432,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=4145808195,this.EFUSE_MAX_KEY=5,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",15:"XTS_AES_128_PSRAM_KEY",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>26&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>0&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>4&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-C5":n="unknown ESP32-C5";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6 (dual-band)","BT 5 (LE)","IEEE802.15.4","Single Core + LP Core","240MHz"]}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>45?s=48:n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}async getCrystalFreqRomExpect(t){return(await t.readReg(this.PCR_SYSCLK_CONF_REG)&this.PCR_SYSCLK_XTAL_FREQ_V)>>this.PCR_SYSCLK_XTAL_FREQ_S}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++){const r=await this.getKeyBlockPurpose(t,s);e.push(r)}return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=28))throw new Error("SPI Pin numbers must be in the range 0-28.");e.some(n=>n===13||n===14)&&t.info("GPIO pins 13 and 14 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async usesUsbJtagSerial(t){const e=this.UARTDEV_BUF_NO;return(await t.readReg(e)&255)===3}async watchdogReset(t){throw t.info("Hard resetting with a watchdog..."),new Error("watchdogReset not yet implemented for ESP32-C5")}async changeBaud(t){if(t.secureDownloadMode){t.info("Baud rate change is not supported in secure download mode. Keeping 115200 baud.");return}if(!t.IS_STUB){const e=await this.getCrystalFreqRomExpect(t),n=await this.getCrystalFreq(t);t.info(`ROM expects crystal freq: ${e} MHz, detected ${n} MHz.`),(n===48&&e===40||n===40&&e===48)&&t.info("Crystal frequency mismatch detected. Baud rate adjustment may be needed but is not fully implemented in this version.")}await t.changeBaud()}}const Ex=Object.freeze(Object.defineProperty({__proto__:null,ESP32C5ROM:cc},Symbol.toStringTag,{value:"Module"}));class Wd extends Gs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C61",this.IMAGE_CHIP_ID=20,this.CHIP_DETECT_MAGIC_VALUE=[871374959,606167151],this.UART_DATE_REG_ADDR=1610612860,this.EFUSE_BASE=1611352064,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=4,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY2_SHIFT=8,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY3_SHIFT=12,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY4_SHIFT=16,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY5_SHIFT=20,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=16384,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+48,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<23,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+52,this.EFUSE_SECURE_BOOT_EN_MASK=1<<26,this.FLASH_FREQUENCY={"80m":15,"40m":0,"20m":2},this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1098907648,1107296256,"DROM"],[1082130432,1082523648,"DRAM"],[1082130432,1082523648,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1090519040,1098907648,"IROM"],[1082130432,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=2010665156,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_KEY_1_PSRAM",14:"XTS_AES_256_KEY_2_PSRAM",15:"XTS_AES_128_KEY_PSRAM"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>26&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>0&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>4&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-C61":n="unknown ESP32-C61";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["WiFi 6","BT 5"]}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}}const Sx=Object.freeze(Object.defineProperty({__proto__:null,ESP32C61ROM:Wd},Symbol.toStringTag,{value:"Module"}));class xx extends Mi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-E22",this.IMAGE_CHIP_ID=31,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1006632960,this.IROM_MAP_END=1073741824,this.DROM_MAP_START=1006632960,this.DROM_MAP_END=1073741824,this.BOOTLOADER_FLASH_OFFSET=0,this.UART_DATE_REG_ADDR=3272614028,this.UART_CLKDIV_REG=3272613908,this.EFUSE_BASE=3288367104,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.SPI_REG_BASE=3271569408,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1073741824,"DROM"],[822083584,824180736,"DRAM"],[822083584,824180736,"BYTE_ACCESSIBLE"],[805306368,806486016,"DROM_MASK"],[805306368,806486016,"IROM_MASK"],[1006632960,1073741824,"IROM"],[821952512,824180736,"IRAM"],[3221225472,3221258240,"RTC_IRAM"],[3221225472,3221258240,"RTC_DRAM"]],this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY"}}async getPkgVersion(t){return 0}async getMinorChipVersion(t){return 0}async getMajorChipVersion(t){return 0}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-E22":"unknown ESP32-E22",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6E (tri-band, 2x2 MU-MIMO)","BT 5.4 (LE) + Classic","Dual Core","500MHz"]}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&15}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=52))throw new Error("SPI Pin numbers must be in the range 0-52.");e.some(n=>n===18||n===19)&&t.info("GPIO pins 18 and 19 are used by USB-OTG, consider using other pins for SPI flash connection.")}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}}class lc extends Gs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H2",this.IMAGE_CHIP_ID=16,this.EFUSE_BASE=1611335680,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610625024,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.USB_RAM_BLOCK=2048,this.UARTDEV_BUF_NO_USB=3,this.UARTDEV_BUF_NO=1070526796,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1124073472,"DROM"],[1082130432,1082654720,"DRAM"],[1082130432,1082654720,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1107296256,1124073472,"IROM"],[1082130432,1082654720,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>0&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&7}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-H2":n="unknown ESP32-H2";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Single Core","96MHz"]}async getCrystalFreq(t){return 32}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async postConnect(t){const e=await t.readReg(this.UARTDEV_BUF_NO)&255;t.debug("In _post_connect "+e),e==this.UARTDEV_BUF_NO_USB&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async usesUsbJtagSerial(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const vx=Object.freeze(Object.defineProperty({__proto__:null,ESP32H2ROM:lc},Symbol.toStringTag,{value:"Module"}));class Mx extends lc{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H21",this.IMAGE_CHIP_ID=25,this.USES_MAGIC_VALUE=!1,this.UF2_FAMILY_ID=3067936943,this.DR_REG_LP_WDT_BASE=1611340800,this.RTC_CNTL_WDTCONFIG0_REG=this.DR_REG_LP_WDT_BASE+0,this.RTC_CNTL_WDTWPROTECT_REG=this.DR_REG_LP_WDT_BASE+28,this.RTC_CNTL_SWD_CONF_REG=this.DR_REG_LP_WDT_BASE+32,this.RTC_CNTL_SWD_AUTO_FEED_EN=1<<18,this.RTC_CNTL_SWD_WPROTECT_REG=this.DR_REG_LP_WDT_BASE+36,this.RTC_CNTL_SWD_WKEY=1356348065,this.EFUSE_BASE=1611350016,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"RESERVED",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>11&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>4&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>8&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-H21":"Unknown ESP32-H21",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Single Core","96MHz"]}async getCrystalFreq(t){return 32}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=27))throw new Error("SPI Pin numbers must be in the range 0-27.");e.some(n=>n===26||n===27)&&t.info("GPIO pins 26 and 27 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}}class Ax extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H4",this.IMAGE_CHIP_ID=28,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.DROM_MAP_START=1115684864,this.DROM_MAP_END=1124073472,this.BOOTLOADER_FLASH_OFFSET=8192,this.SPI_REG_BASE=1611239424,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.UART_DATE_REG_ADDR=1610686588,this.EFUSE_BASE=1611339776,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=5,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY2_SHIFT=10,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY3_SHIFT=15,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY4_SHIFT=20,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY5_SHIFT=25,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=16384,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+48,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<23,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=32,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+56,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=19,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.FLASH_FREQUENCY={"48m":15,"24m":0,"16m":1,"12m":2},this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1140850688,"DROM"],[1082195968,1082523648,"DRAM"],[1082195968,1082523648,"BYTE_ACCESSIBLE"],[1073741824,1074069504,"DROM_MASK"],[1073741824,1074069504,"IROM_MASK"],[1107296256,1140850688,"IROM"],[1082195968,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1610612736,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=2651564682,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_FLASH_1",3:"XTS_AES_256_KEY_FLASH_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_KEY_PSRAM_1",14:"XTS_AES_256_KEY_PSRAM_2",15:"XTS_AES_128_KEY_PSRAM",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>12&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>22&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-H4 (QFN40)":"Unknown ESP32-H4",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Dual Core","96MHz"]}async getCrystalFreq(t){return 32}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=39))throw new Error("SPI Pin numbers must be in the range 0-39.");e.some(n=>n===13||n===14)&&t.info("GPIO pins 13 and 14 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}}class Yd extends Mi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-P4",this.IMAGE_CHIP_ID=18,this.IROM_MAP_START=1073741824,this.IROM_MAP_END=1275068416,this.DROM_MAP_START=1073741824,this.DROM_MAP_END=1275068416,this.BOOTLOADER_FLASH_OFFSET=8192,this.CHIP_DETECT_MAGIC_VALUE=[0,182303440],this.UART_DATE_REG_ADDR=1343004812,this.EFUSE_BASE=1343410176,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.SPI_REG_BASE=1342754816,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.USES_MAGIC_VALUE=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=9,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_RD_REPEAT_DATA1_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_RD_REPEAT_DATA1_REG,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_DOWNLOAD_MODE_XPD_ON_MASK=65536,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.SUPPORTS_ENCRYPTED_FLASH=!0,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.GPIO_STRAP_REG=1343094840,this.GPIO_STRAP_SPI_BOOT_MASK=8,this.RTC_CNTL_OPTION1_REG=1343291400,this.RTC_CNTL_FORCE_DOWNLOAD_BOOT_MASK=4,this.DR_REG_LPAON_BASE=1343291392,this.DR_REG_PMU_BASE=this.DR_REG_LPAON_BASE+20480,this.DR_REG_LP_SYS_BASE=this.DR_REG_LPAON_BASE+0,this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG=this.DR_REG_LP_SYS_BASE+268,this.PMU_EXT_LDO_P0_0P1A_ANA_REG=this.DR_REG_PMU_BASE+444,this.PMU_ANA_0P1A_EN_CUR_LIM_0=1<<27,this.PMU_EXT_LDO_P0_0P1A_REG=this.DR_REG_PMU_BASE+440,this.PMU_0P1A_TARGET0_0=255<<23,this.PMU_0P1A_FORCE_TIEH_SEL_0=128,this.PMU_DATE_REG=this.DR_REG_PMU_BASE+1020,this.PMU_DATE_FLASH_FORCE_ON=3,this.UARTDEV_BUF_NO_USB_OTG=5,this.UARTDEV_BUF_NO_USB_JTAG_SERIAL=6,this.DR_REG_LP_WDT_BASE=1343315968,this.RTC_CNTL_WDTCONFIG0_REG=this.DR_REG_LP_WDT_BASE+0,this.RTC_CNTL_WDTCONFIG1_REG=this.DR_REG_LP_WDT_BASE+4,this.RTC_CNTL_WDTWPROTECT_REG=this.DR_REG_LP_WDT_BASE+24,this.RTC_CNTL_WDT_WKEY=1356348065,this.RTC_CNTL_SWD_CONF_REG=this.DR_REG_LP_WDT_BASE+28,this.RTC_CNTL_SWD_AUTO_FEED_EN=1<<18,this.RTC_CNTL_SWD_WPROTECT_REG=this.DR_REG_LP_WDT_BASE+32,this.RTC_CNTL_SWD_WKEY=1356348065,this.MEMORY_MAP=[[0,65536,"PADDING"],[1073741824,1275068416,"DROM"],[1341128704,1341784064,"DRAM"],[1341128704,1341784064,"BYTE_ACCESSIBLE"],[1337982976,1338114048,"DROM_MASK"],[1337982976,1338114048,"IROM_MASK"],[1073741824,1275068416,"IROM"],[1341128704,1341784064,"IRAM"],[1343258624,1343291392,"RTC_IRAM"],[1343258624,1343291392,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=1026592404,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY"}}async getPkgVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8;return await t.readReg(n)>>20&7}async getMinorChipVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8;return await t.readReg(n)>>0&15}async getMajorChipVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8,s=await t.readReg(n);return(s>>23&1)<<2|s>>4&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getStubJsonPath(t){return await this.getChipRevision(t)<300?"./targets/stub_flasher/esp32p4-rev1.json":"./targets/stub_flasher/esp32p4.json"}async getChipDescription(t){const e=await this.getPkgVersion(t),s={0:"ESP32-P4"}[e]||"Unknown ESP32-P4",r=await this.getMajorChipVersion(t),a=await this.getMinorChipVersion(t);return`${s} (revision v${r}.${a})`}async getChipFeatures(t){return["High-Performance MCU"]}async getCrystalFreq(t){return 40}async getFlashVoltage(t){}async overrideVddsdio(t){t.debug("VDD_SDIO overrides are not supported for ESP32-P4")}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}async getFlashCryptConfig(t){}async getSecureBootEnabled(t){return(await t.readReg(this.EFUSE_SECURE_BOOT_EN_REG)&this.EFUSE_SECURE_BOOT_EN_MASK)!==0}async getUartdevBufNo(t){return(await this.getChipRevision(t)<300?1341390512:1341914800)+24}async usesUsbOtg(t){const e=await this.getUartdevBufNo(t);return(await t.readReg(e)&255)===this.UARTDEV_BUF_NO_USB_OTG}async usesUsbJtagSerial(t){if(t.secureDownloadMode)return!1;const e=await this.getUartdevBufNo(t);return(await t.readReg(e)&255)===this.UARTDEV_BUF_NO_USB_JTAG_SERIAL}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY){t.debug(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);return}const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&15}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++){const r=await this.getKeyBlockPurpose(t,s);e.push(r)}return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)||e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_1)&&e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_2)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK),t.IS_STUB||await this.disableWatchdogs(t),t.secureDownloadMode||await this.powerOnFlash(t)}async disableWatchdogs(t){if(await this.usesUsbJtagSerial(t)){await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,this.RTC_CNTL_WDT_WKEY),await t.writeReg(this.RTC_CNTL_WDTCONFIG0_REG,0),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,0),await t.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG,this.RTC_CNTL_SWD_WKEY);const e=await t.readReg(this.RTC_CNTL_SWD_CONF_REG);await t.writeReg(this.RTC_CNTL_SWD_CONF_REG,e|this.RTC_CNTL_SWD_AUTO_FEED_EN),await t.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG,0)}}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=54))throw new Error("SPI Pin numbers must be in the range 0-54.");e.some(n=>n===24||n===25)&&t.debug("GPIO pins 24 and 25 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async watchdogReset(t){t.info("Hard resetting with a watchdog..."),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,this.RTC_CNTL_WDT_WKEY),await t.writeReg(this.RTC_CNTL_WDTCONFIG1_REG,2e3),await t.writeReg(this.RTC_CNTL_WDTCONFIG0_REG,1<<31|5<<28|256|2),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,0),await new Promise(e=>setTimeout(e,500))}async powerOnFlash(t){if(t.secureDownloadMode)throw new Error("Powering on flash in secure download mode is not allowed.");const e=await this.getChipRevision(t);if(e!==301&&e!==302)return;if(e===302&&await t.readReg(this.EFUSE_RD_REPEAT_DATA1_REG)&this.EFUSE_DOWNLOAD_MODE_XPD_ON_MASK){const r=await t.readReg(this.PMU_DATE_REG);(r&this.PMU_DATE_FLASH_FORCE_ON)===this.PMU_DATE_FLASH_FORCE_ON&&await t.writeReg(this.PMU_DATE_REG,r&~this.PMU_DATE_FLASH_FORCE_ON);return}await t.writeReg(this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG,1),await new Promise(s=>setTimeout(s,10));let n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG);await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG,n|this.PMU_ANA_0P1A_EN_CUR_LIM_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n|this.PMU_0P1A_FORCE_TIEH_SEL_0),n=await t.readReg(this.PMU_DATE_REG),await t.writeReg(this.PMU_DATE_REG,n|this.PMU_DATE_FLASH_FORCE_ON),await new Promise(s=>setTimeout(s,1)),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG,n&~this.PMU_ANA_0P1A_EN_CUR_LIM_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n&~this.PMU_0P1A_TARGET0_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n|128),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n&~this.PMU_0P1A_FORCE_TIEH_SEL_0),await new Promise(s=>setTimeout(s,2))}}const Rx=Object.freeze(Object.defineProperty({__proto__:null,ESP32P4ROM:Yd},Symbol.toStringTag,{value:"Module"}));class Kd extends Mi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S2",this.IMAGE_CHIP_ID=2,this.IROM_MAP_START=1074266112,this.IROM_MAP_END=1085800448,this.DROM_MAP_START=1056964608,this.DROM_MAP_END=1061093376,this.CHIP_DETECT_MAGIC_VALUE=[1990],this.SPI_REG_BASE=1061167104,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.MAC_EFUSE_REG=1061265476,this.UART_CLKDIV_REG=1061158932,this.SUPPORTS_ENCRYPTED_FLASH=!0,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.EFUSE_BASE=1061265408,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.EFUSE_BLOCK2_ADDR=this.EFUSE_BASE+92,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<19,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.EFUSE_RD_REPEAT_DATA3_REG=this.EFUSE_BASE+60,this.EFUSE_RD_REPEAT_DATA3_REG_FLASH_TYPE_MASK=512,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.UARTDEV_BUF_NO=1073741076,this.UARTDEV_BUF_NO_USB_OTG=2,this.USB_RAM_BLOCK=2048,this.GPIO_STRAP_REG=1061175352,this.GPIO_STRAP_SPI_BOOT_MASK=8,this.GPIO_STRAP_VDDSPI_MASK=16,this.RTC_CNTL_OPTION1_REG=1061191976,this.RTC_CNTL_FORCE_DOWNLOAD_BOOT_MASK=1,this.RTCCNTL_BASE_REG=1061191680,this.RTC_CNTL_WDTCONFIG0_REG=this.RTCCNTL_BASE_REG+148,this.RTC_CNTL_WDTCONFIG1_REG=this.RTCCNTL_BASE_REG+152,this.RTC_CNTL_WDTWPROTECT_REG=this.RTCCNTL_BASE_REG+172,this.RTC_CNTL_WDT_WKEY=1356348065,this.MEMORY_MAP=[[0,65536,"PADDING"],[1056964608,1073217536,"DROM"],[1062207488,1073217536,"EXTRAM_DATA"],[1073340416,1073348608,"RTC_DRAM"],[1073340416,1073741824,"BYTE_ACCESSIBLE"],[1073340416,1074208768,"MEM_INTERNAL"],[1073414144,1073741824,"DRAM"],[1073741824,1073848576,"IROM_MASK"],[1073872896,1074200576,"IRAM"],[1074200576,1074208768,"RTC_IRAM"],[1074266112,1082130432,"IROM"],[1342177280,1342185472,"RTC_DATA"]],this.EFUSE_VDD_SPI_REG=this.EFUSE_BASE+52,this.VDD_SPI_XPD=16,this.VDD_SPI_TIEH=32,this.VDD_SPI_FORCE=64,this.UF2_FAMILY_ID=3218951918,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"RESERVED",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2"},this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612856,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=4096}async getPkgVersion(t){const n=this.EFUSE_BLOCK1_ADDR+16;return await t.readReg(n)>>0&15}async getMinorChipVersion(t){const n=await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>20&1,r=await t.readReg(this.EFUSE_BLOCK1_ADDR+4*4)>>4&7;return(n<<3)+r}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&3}async getFlashVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&15}async getChipDescription(t){const e={0:"ESP32-S2",1:"ESP32-S2FH2",2:"ESP32-S2FH4",102:"ESP32-S2FNR2",100:"ESP32-S2R2"},n=await this.getFlashCap(t)+await this.getPsramCap(t)*100,s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${e[n]||"unknown ESP32-S2"} (revision v${s}.${r})`}async getFlashCap(t){return await this.getFlashVersion(t)}async getPsramVersion(t){const n=this.EFUSE_BLOCK1_ADDR+12;return await t.readReg(n)>>28&15}async getPsramCap(t){return await this.getPsramVersion(t)}async getBlock2Version(t){const n=this.EFUSE_BLOCK2_ADDR+16;return await t.readReg(n)>>4&7}async getChipFeatures(t){const e=["Wi-Fi"],n={0:"No Embedded Flash",1:"Embedded Flash 2MB",2:"Embedded Flash 4MB"},s=await this.getFlashCap(t),r=n[s]||"Unknown Embedded Flash";e.push(r);const a={0:"No Embedded Flash",1:"Embedded PSRAM 2MB",2:"Embedded PSRAM 4MB"},o=await this.getPsramCap(t),l=a[o]||"Unknown Embedded PSRAM";e.push(l);const c={0:"No calibration in BLK2 of efuse",1:"ADC and temperature sensor calibration in BLK2 of efuse V1",2:"ADC and temperature sensor calibration in BLK2 of efuse V2"},h=await this.getBlock2Version(t),u=c[h]||"Unknown Calibration in BLK2";return e.push(u),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}async usingUsbOtg(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB_OTG}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}}const yx=Object.freeze(Object.defineProperty({__proto__:null,ESP32S2ROM:Kd},Symbol.toStringTag,{value:"Module"}));class $d extends Mi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S3",this.IMAGE_CHIP_ID=9,this.USES_MAGIC_VALUE=!1,this.EFUSE_BASE=1610641408,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.EFUSE_BLOCK2_ADDR=this.EFUSE_BASE+92,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612864,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.USB_RAM_BLOCK=2048,this.UARTDEV_BUF_NO_USB=3,this.UARTDEV_BUF_NO=1070526796,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1140850688,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1023410176,"DROM"],[1023410176,1040187392,"EXTRAM_DATA"],[1611653120,1611661312,"RTC_DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1070104576,1077813248,"MEM_INTERNAL"],[1070104576,1070596096,"DRAM"],[1073741824,1073848576,"IROM_MASK"],[1077346304,1077805056,"IRAM"],[1611653120,1611661312,"RTC_IRAM"],[1107296256,1115684864,"IROM"],[1342177280,1342185472,"RTC_DATA"]]}async getChipDescription(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t),s=await this.getPkgVersion(t);return`${{0:"ESP32-S3 (QFN56)",1:"ESP32-S3-PICO-1 (LGA56)"}[s]||"unknown ESP32-S3"} (revision v${e}.${n})`}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&7}async getRawMinorChipVersion(t){const n=await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>23&1,r=await t.readReg(this.EFUSE_BLOCK1_ADDR+4*3)>>18&7;return(n<<3)+r}async getMinorChipVersion(t){const e=await this.getRawMinorChipVersion(t);return await this.isEco0(t,e)?0:this.getRawMinorChipVersion(t)}async getRawMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>24&3}async getMajorChipVersion(t){const e=await this.getRawMinorChipVersion(t);return await this.isEco0(t,e)?0:this.getRawMajorChipVersion(t)}async getBlkVersionMajor(t){return await t.readReg(this.EFUSE_BLOCK2_ADDR+16)>>0&3}async getBlkVersionMinor(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>24&7}async isEco0(t,e){return(e&7)===0&&await this.getBlkVersionMajor(t)===1&&await this.getBlkVersionMinor(t)===1}async getFlashCap(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>27&7}async getFlashVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>0&7;return{1:"XMC",2:"GD",3:"FM",4:"TT",5:"BY"}[a]||""}async getPsramCap(t){const s=this.EFUSE_BASE+68+16;return await t.readReg(s)>>3&3}async getPsramVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>7&3;return{1:"AP_3v3",2:"AP_1v8"}[a]||""}async getChipFeatures(t){const e=["Wi-Fi","BLE"],n={0:null,1:"Embedded Flash 8MB",2:"Embedded Flash 4MB"},s=await this.getFlashCap(t),r=await this.getFlashVendor(t),a=n[s],o=a!==void 0?a:"Unknown Embedded Flash";a!==null&&e.push(`${o} (${r})`);const l={0:null,1:"Embedded PSRAM 8MB",2:"Embedded PSRAM 2MB"},c=await this.getPsramCap(t),h=await this.getPsramVendor(t),u=l[c],d=u!==void 0?u:"Unknown Embedded PSRAM";return u!==null&&e.push(`${d} (${h})`),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async usesUsbJtagSerial(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const Tx=Object.freeze(Object.defineProperty({__proto__:null,ESP32S3ROM:$d},Symbol.toStringTag,{value:"Module"}));class wx extends cc{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S31",this.IMAGE_CHIP_ID=32,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1073741824,this.IROM_MAP_END=1409286144,this.DROM_MAP_START=1073741824,this.DROM_MAP_END=1409286144,this.BOOTLOADER_FLASH_OFFSET=8192,this.UART_DATE_REG_ADDR=540582028,this.UART_CLKDIV_REG=540581908,this.EFUSE_BASE=544296960,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+80,this.MAC_EFUSE_REG=this.EFUSE_BASE+80,this.SPI_REG_BASE=542117888,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY1_SHIFT=5,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=10,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=15,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=20,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<21,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+60,this.EFUSE_SECURE_BOOT_EN_MASK=4,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=12,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.MEMORY_MAP=[[0,65536,"PADDING"],[1073741824,1409286144,"DROM"],[788529152,789053440,"DRAM"],[788529152,789053440,"BYTE_ACCESSIBLE"],[796917760,797245440,"DROM_MASK"],[796917760,797245440,"IROM_MASK"],[1073741824,1409286144,"IROM"],[788529152,789053440,"IRAM"],[771751936,771784704,"RTC_IRAM"],[771751936,771784704,"RTC_DRAM"]],this.UF2_FAMILY_ID=822212545,this.EFUSE_MAX_KEY=4,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_PSRAM_KEY_1",14:"XTS_AES_256_PSRAM_KEY_2",15:"XTS_AES_128_PSRAM_KEY",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H",19:"SDC_KEY_DIGEST"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>6&3}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>22&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-S31":"unknown ESP32-S31",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6","BT 5.4 (LE)","IEEE802.15.4","Dual Core + LP Core","300MHz"]}async getCrystalFreq(t){return 40}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++)e.push(await this.getKeyBlockPurpose(t,s));return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)||e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_1)&&e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_2)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=60))throw new Error("SPI Pin numbers must be in the range 0-60.");e.some(n=>n===33||n===34)&&t.info("GPIO pins 33 and 34 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async changeBaud(t){await t.changeBaud()}}const Xd={esp8266:new Ei,esp32:new Mi,esp32s2:new Kd,esp32s3:new $d,esp32s31:new wx,esp32c3:new ks,esp32c2:new Vd,esp32c6:new Gs,esp32c61:new Wd,esp32c5:new cc,esp32e22:new xx,esp32h2:new lc,esp32h21:new Mx,esp32p4:new Yd,esp32h4:new Ax},bx=Object.values(Xd),Sh={SECURE_BOOT_EN:1,SECURE_BOOT_AGGRESSIVE_REVOKE:2,SECURE_DOWNLOAD_ENABLE:4,SECURE_BOOT_KEY_REVOKE0:8,SECURE_BOOT_KEY_REVOKE1:16,SECURE_BOOT_KEY_REVOKE2:32,SOFT_DIS_JTAG:64,HARD_DIS_JTAG:128,DIS_USB:256,DIS_DOWNLOAD_DCACHE:512,DIS_DOWNLOAD_ICACHE:1024};function Cx(i){const t={};for(const e of Object.keys(Sh))t[e]=(i&Sh[e])!==0;return t}const Er=12346,xh=4097;async function Px(i){switch(i){case 15736195:{const{ESP32ROM:t}=await se(async()=>{const{ESP32ROM:e}=await Promise.resolve().then(()=>_x);return{ESP32ROM:e}},void 0);return new t}case 203546735:case 1867591791:case 2084675695:{const{ESP32C2ROM:t}=await se(async()=>{const{ESP32C2ROM:e}=await Promise.resolve().then(()=>mx);return{ESP32C2ROM:e}},void 0);return new t}case 1763790959:case 456216687:case 1216438383:case 1130455151:{const{ESP32C3ROM:t}=await se(async()=>{const{ESP32C3ROM:e}=await Promise.resolve().then(()=>px);return{ESP32C3ROM:e}},void 0);return new t}case 752910447:{const{ESP32C6ROM:t}=await se(async()=>{const{ESP32C6ROM:e}=await Promise.resolve().then(()=>gx);return{ESP32C6ROM:e}},void 0);return new t}case 606167151:case 871374959:case 1333878895:{const{ESP32C61ROM:t}=await se(async()=>{const{ESP32C61ROM:e}=await Promise.resolve().then(()=>Sx);return{ESP32C61ROM:e}},void 0);return new t}case 285294703:case 1675706479:case 1607549039:case 820080751:{const{ESP32C5ROM:t}=await se(async()=>{const{ESP32C5ROM:e}=await Promise.resolve().then(()=>Ex);return{ESP32C5ROM:e}},void 0);return new t}case 3619110528:case 2548236392:{const{ESP32H2ROM:t}=await se(async()=>{const{ESP32H2ROM:e}=await Promise.resolve().then(()=>vx);return{ESP32H2ROM:e}},void 0);return new t}case 9:{const{ESP32S3ROM:t}=await se(async()=>{const{ESP32S3ROM:e}=await Promise.resolve().then(()=>Tx);return{ESP32S3ROM:e}},void 0);return new t}case 1990:{const{ESP32S2ROM:t}=await se(async()=>{const{ESP32S2ROM:e}=await Promise.resolve().then(()=>yx);return{ESP32S2ROM:e}},void 0);return new t}case 4293968129:{const{ESP8266ROM:t}=await se(async()=>{const{ESP8266ROM:e}=await Promise.resolve().then(()=>ex);return{ESP8266ROM:e}},void 0);return new t}case 0:case 182303440:case 117676761:{const{ESP32P4ROM:t}=await se(async()=>{const{ESP32P4ROM:e}=await Promise.resolve().then(()=>Rx);return{ESP32P4ROM:e}},void 0);return new t}default:return null}}class Ux{constructor(t){var e,n,s,r,a,o,l,c;this.ESP_RAM_BLOCK=6144,this.ESP_FLASH_BEGIN=2,this.ESP_FLASH_DATA=3,this.ESP_FLASH_END=4,this.ESP_MEM_BEGIN=5,this.ESP_MEM_END=6,this.ESP_MEM_DATA=7,this.ESP_WRITE_REG=9,this.ESP_READ_REG=10,this.ESP_SPI_ATTACH=13,this.ESP_CHANGE_BAUDRATE=15,this.ESP_FLASH_DEFL_BEGIN=16,this.ESP_FLASH_DEFL_DATA=17,this.ESP_FLASH_DEFL_END=18,this.ESP_SPI_FLASH_MD5=19,this.ESP_GET_SECURITY_INFO=20,this.ESP_ERASE_FLASH=208,this.ESP_ERASE_REGION=209,this.ESP_READ_FLASH=210,this.ESP_RUN_USER_CODE=211,this.ESP_IMAGE_MAGIC=233,this.ESP_CHECKSUM_MAGIC=239,this.ROM_INVALID_RECV_MSG=5,this.DEFAULT_TIMEOUT=3e3,this.ERASE_REGION_TIMEOUT_PER_MB=3e4,this.ERASE_WRITE_TIMEOUT_PER_MB=4e4,this.MD5_TIMEOUT_PER_MB=8e3,this.CHIP_ERASE_TIMEOUT=12e4,this.FLASH_READ_TIMEOUT=1e5,this.MAX_TIMEOUT=this.CHIP_ERASE_TIMEOUT*2,this.WRITE_BLOCK_ATTEMPTS=3,this.WRITE_BLOCK_RETRY_DELAY_MS=150,this.SPI_ADDR_REG_MSB=!0,this.CHIP_DETECT_MAGIC_REG_ADDR=1073745920,this.DETECTED_FLASH_SIZES={18:"256KB",19:"512KB",20:"1MB",21:"2MB",22:"4MB",23:"8MB",24:"16MB",25:"32MB",26:"64MB",27:"128MB",28:"256MB",32:"64MB",33:"128MB",34:"256MB",50:"256KB",51:"512KB",52:"1MB",53:"2MB",54:"4MB",55:"8MB",56:"16MB",57:"32MB",58:"64MB"},this.secureDownloadMode=!1,this.securityInfoCache=null,this.romBaudrate=115200,this.debugLogging=!1,this.syncStubDetected=!1,this.IS_STUB=!1,this.FLASH_WRITE_SIZE=16384,this.transport=t.transport,this.baudrate=t.baudrate,typeof t.romBaudrate<"u"&&(this.romBaudrate=t.romBaudrate),this.resetConstructors={classicReset:(h,u)=>new KS(h,u),customReset:(h,u)=>new ZS(h,u),hardReset:(h,u)=>new XS(h,u),usbJTAGSerialReset:h=>new $S(h)},t.serialOptions&&(this.serialOptions=t.serialOptions),t.terminal&&(this.terminal=t.terminal,this.terminal.clean()),typeof t.debugLogging<"u"&&(this.debugLogging=t.debugLogging),t.port&&(this.transport=new Gd(t.port)),typeof t.enableTracing<"u"&&(this.transport.tracing=t.enableTracing),!((e=t.resetConstructors)===null||e===void 0)&&e.classicReset&&(this.resetConstructors.classicReset=(n=t.resetConstructors)===null||n===void 0?void 0:n.classicReset),!((s=t.resetConstructors)===null||s===void 0)&&s.customReset&&(this.resetConstructors.customReset=(r=t.resetConstructors)===null||r===void 0?void 0:r.customReset),!((a=t.resetConstructors)===null||a===void 0)&&a.hardReset&&(this.resetConstructors.hardReset=(o=t.resetConstructors)===null||o===void 0?void 0:o.hardReset),!((l=t.resetConstructors)===null||l===void 0)&&l.usbJTAGSerialReset&&(this.resetConstructors.usbJTAGSerialReset=(c=t.resetConstructors)===null||c===void 0?void 0:c.usbJTAGSerialReset),this.info("esptool.js"),this.info("Serial port "+this.transport.getInfo())}write(t,e=!0){this.terminal?e?this.terminal.writeLine(t):this.terminal.write(t):console.log(t)}error(t,e=!0){this.write(`Error: ${t}`,e)}info(t,e=!0){this.write(t,e)}debug(t,e=!0){this.debugLogging&&this.write(`Debug: ${t}`,e)}_shortToBytearray(t){return new Uint8Array([t&255,t>>8&255])}_intToByteArray(t){return new Uint8Array([t&255,t>>8&255,t>>16&255,t>>24&255])}_byteArrayToInt(t,e,n,s){return t|e<<8|n<<16|s<<24}_appendArray(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}async readPacket(t=null,e=this.DEFAULT_TIMEOUT){for(let n=0;n<100;n++){const s=await this.transport.read(e);if(!s||s.length<8)continue;const r=s[0];if(r!==1)continue;const a=s[1],o=this._byteArrayToInt(s[4],s[5],s[6],s[7]),l=s.slice(8);if(r==1){if(t==null||a==t)return[o,l];if(l[0]!=0&&l[1]==this.ROM_INVALID_RECV_MSG)throw await this.transport.drainInput(),new ur}}throw new Dt("invalid response")}async command(t=null,e=new Uint8Array(0),n=0,s=!0,r=this.DEFAULT_TIMEOUT){if(t!=null){this.transport.flushInput(),this.transport.tracing&&this.transport.trace(`command op:0x${t.toString(16).padStart(2,"0")} data len=${e.length} wait_response=${s?1:0} timeout=${(r/1e3).toFixed(3)} data=${this.transport.hexConvert(e)}`);const a=new Uint8Array(8+e.length);a[0]=0,a[1]=t,a[2]=this._shortToBytearray(e.length)[0],a[3]=this._shortToBytearray(e.length)[1],a[4]=this._intToByteArray(n)[0],a[5]=this._intToByteArray(n)[1],a[6]=this._intToByteArray(n)[2],a[7]=this._intToByteArray(n)[3];let o;for(o=0;o<e.length;o++)a[8+o]=e[o];await this.transport.write(a)}return s?this.readPacket(t,r):[0,new Uint8Array(0)]}async readReg(t,e=this.DEFAULT_TIMEOUT){this.debug(`Read Register:${this.toHex(t)}`);const n=this._intToByteArray(t),s=await this.command(this.ESP_READ_REG,n,void 0,void 0,e);return this.debug(`Read Register Value:${s[0]}`),s[0]}async writeReg(t,e,n=4294967295,s=0,r=0){let a=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));a=this._appendArray(a,this._intToByteArray(n)),a=this._appendArray(a,this._intToByteArray(s)),r>0&&(a=this._appendArray(a,this._intToByteArray(this.chip.UART_DATE_REG_ADDR)),a=this._appendArray(a,this._intToByteArray(0)),a=this._appendArray(a,this._intToByteArray(0)),a=this._appendArray(a,this._intToByteArray(r))),await this.checkCommand("write target memory",this.ESP_WRITE_REG,a)}async sync(){this.debug("Sync");const t=new Uint8Array(36);let e;for(t[0]=7,t[1]=7,t[2]=18,t[3]=32,e=0;e<32;e++)t[4+e]=85;try{let n=await this.command(8,t,void 0,void 0,100);this.syncStubDetected=n[0]===0;for(let s=0;s<7;s++)n=await this.readPacket(8,100),this.syncStubDetected=this.syncStubDetected&&n[0]===0;return n}catch(n){throw this.debug("Sync err "+n),n}}async _connectAttempt(t="default_reset",e){this.debug("_connect_attempt "+t),e&&await e.reset();const n=this.transport.peek(),s=Array.from(n,u=>String.fromCharCode(u)).join(""),r=/boot:(0x[0-9a-fA-F]+)([\s\S]*?waiting for download)?/,a=s.match(r);let o=!1,l="",c=!1;a&&(o=!0,l=a[1],c=!!a[2]),this.debug(`bootMode:${l} downloadMode:${c}`);let h="";for(let u=0;u<5;u++)try{this.debug(`Sync connect attempt ${u}`),this.transport.flushInput();const d=await this.sync();return this.debug(d[0].toString()),"success"}catch(d){this.debug(`Error at sync ${d}`),d instanceof Error?h=d.message:typeof d=="string"?h=d:h=JSON.stringify(d)}return o&&(h=`Wrong boot mode detected (${l}).
        This chip needs to be in download mode.`,c&&(h=`Download mode successfully detected, but getting no sync reply:
           The serial TX path seems to be down.`)),h}isUsbJtagSerialPort(){return this.transport.getVid()===Er&&this.transport.getPid()===xh}async usesUsbOtg(){const t=this.transport.getVid(),e=this.transport.getPid();return t===Er&&this.chip.IMAGE_CHIP_ID!=null&&e===this.chip.IMAGE_CHIP_ID?!0:t===Er&&e===xh||t!==void 0&&t!==Er?!1:typeof this.chip.usesUsbOtg=="function"?await this.chip.usesUsbOtg(this):typeof this.chip.usingUsbOtg=="function"?await this.chip.usingUsbOtg(this):!1}async applyUsbFlashWriteSize(){const t=this.chip.USB_RAM_BLOCK;t&&await this.usesUsbOtg()&&(this.FLASH_WRITE_SIZE=t,this.debug(`Using USB_RAM_BLOCK (0x${t.toString(16)}) for FLASH_WRITE_SIZE (USB-OTG)`))}constructResetSequence(t){if(t==="no_reset")return[];if(t==="usb_reset"||this.isUsbJtagSerialPort()){if(this.resetConstructors.usbJTAGSerialReset)return this.debug("using USB JTAG Serial Reset"),[this.resetConstructors.usbJTAGSerialReset(this.transport)]}else if(this.resetConstructors.classicReset)return this.debug("using Classic Serial Reset"),[this.resetConstructors.classicReset(this.transport,50),this.resetConstructors.classicReset(this.transport,550)];return[]}async openAndSync(t,e){this.securityInfoCache=null;let n;this.info("Connecting...",!1),await this.transport.connect(this.romBaudrate,this.serialOptions),this.transport.readLoop();const s=this.constructResetSequence(t);for(let r=0;r<e;r++){const a=s.length>0?s[r%s.length]:null;if(n=await this._connectAttempt(t,a),n==="success")break}if(n!=="success")throw new Dt("Failed to connect with the device");this.debug("Connect attempt successful."),this.info(`
\r`,!1)}async connect(t="default_reset",e=7,n=!0){if(await this.openAndSync(t,e),!!n){this.info("Detecting chip type... ");try{this.applyDetectedChip(await this.identifyChip())}catch(s){if(s instanceof ya||s instanceof Al||!(s instanceof Dt))throw s;this.info(" Autodetection failed, trying again..."),await this.transport.disconnect(),await this.openAndSync(t,e),this.info("Detecting chip type... "),this.applyDetectedChip(await this.identifyChipByMagic())}}}async identifyChip(){try{const t=await this.getChipId(),e=this.romFromChipId(t);if(e===null)throw new ya(t);return await this.readSecureDownloadMode(),e}catch(t){if(t instanceof ya)throw t;if(t instanceof ur||t instanceof Rl)this.debug("GET_SECURITY_INFO not supported, falling back to magic value");else throw t}return this.identifyChipByMagic()}romFromChipId(t){for(const e of bx)if(!e.USES_MAGIC_VALUE&&t===e.IMAGE_CHIP_ID)return e;return null}async readSecureDownloadMode(){const t=await this.getSecurityInfo();return this.secureDownloadMode=t.parsedFlags.SECURE_DOWNLOAD_ENABLE,this.secureDownloadMode}async identifyChipByMagic(){try{return await this.chipFromMagicValue()}catch(t){if(t instanceof ur)return await this.readSecureDownloadMode(),Xd.esp32s2;throw t}}applyDetectedChip(t){this.chip=t,t.SPI_ADDR_REG_MSB!==void 0&&(this.SPI_ADDR_REG_MSB=t.SPI_ADDR_REG_MSB)}async chipFromMagicValue(){const t=await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR)>>>0;this.debug("Chip Magic "+t.toString(16));const e=await Px(t);if(e===null)throw new Al(t);return e}async getSecurityInfo(t=!0){if(t&&this.securityInfoCache!==null)return this.securityInfoCache;let e,n=!1;try{e=await this.checkCommand("get security info",this.ESP_GET_SECURITY_INFO,new Uint8Array(0),0,20)}catch(a){if(a instanceof ur)throw a;e=await this.checkCommand("get security info",this.ESP_GET_SECURITY_INFO,new Uint8Array(0),0,12),n=!0}const s=this._byteArrayToInt(e[0],e[1],e[2],e[3])>>>0,r={flags:s,flashCryptCnt:e[4],keyPurposes:Array.from(e.slice(5,12)),chipId:n?null:this._byteArrayToInt(e[12],e[13],e[14],e[15])>>>0,apiVersion:n?null:this._byteArrayToInt(e[16],e[17],e[18],e[19])>>>0,parsedFlags:Cx(s)};return this.securityInfoCache=r,r}async getChipId(){const t=(await this.getSecurityInfo()).chipId;if(t===null)throw new Rl;return this.debug("get_chip_id "+t.toString(16)),t}async detectChip(t="default_reset",e=7){await this.connect(t,e,!0),this.chip!=null?this.info(this.chip.CHIP_NAME):this.info("unknown chip! detectchip has failed.")}async checkCommand(t="",e=null,n=new Uint8Array(0),s=0,r=0,a=this.DEFAULT_TIMEOUT){this.debug("check_command "+t);const o=2,l=await this.command(e,n,s,void 0,a);if(l&&l[1]&&l[1].length<r+o){const h=l[1].slice(0,2);throw h[0]!==0?new Dt(`Failed to ${t} failed with status ${h}`):new Dt(`Failed to ${t}.
 Only got ${l[1].length} bytes of data.`)}const c=l[1].slice(r,r+o);if(c[0]!==0)throw new Dt(`Failed to ${t} failed with status ${c}`);return r>0?l[1].slice(0,r):l[0]}async memBegin(t,e,n,s){if(this.IS_STUB){const a=s,o=s+t,l=this.chip.getChipRevision?await this.chip.getChipRevision(this):void 0,c=await ph(this.chip.CHIP_NAME,l);if(c){const h=[[c.bss_start||c.data_start,c.data_start+c.decodedData.length],[c.text_start,c.text_start+c.decodedText.length]];for(const[u,d]of h)if(a<d&&o>u)throw new Dt(`Software loader is resident at 0x${u.toString(16).padStart(8,"0")}-0x${d.toString(16).padStart(8,"0")}.
            Can't load binary at overlapping address range 0x${a.toString(16).padStart(8,"0")}-0x${o.toString(16).padStart(8,"0")}.
            Either change binary loading address, or use the no-stub option to disable the software loader.`)}}this.debug("mem_begin "+t+" "+e+" "+n+" "+s.toString(16));let r=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));r=this._appendArray(r,this._intToByteArray(n)),r=this._appendArray(r,this._intToByteArray(s)),await this.checkCommand("enter RAM download mode",this.ESP_MEM_BEGIN,r)}checksum(t,e=this.ESP_CHECKSUM_MAGIC){for(let n=0;n<t.length;n++)e^=t[n];return e}async memBlock(t,e){let n=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));n=this._appendArray(n,this._intToByteArray(0)),n=this._appendArray(n,this._intToByteArray(0)),n=this._appendArray(n,t);const s=this.checksum(t);await this.checkCommand("write to target RAM",this.ESP_MEM_DATA,n,s)}async memFinish(t){const e=t===0?1:0,n=this._appendArray(this._intToByteArray(e),this._intToByteArray(t));await this.checkCommand("leave RAM download mode",this.ESP_MEM_END,n,void 0,void 0,200)}async flashSpiAttach(t){const e=this._intToByteArray(t);await this.checkCommand("configure SPI flash pins",this.ESP_SPI_ATTACH,e)}timeoutPerMb(t,e){const n=t*(e/1e6);return n<3e3?3e3:n}async flashBegin(t,e){const n=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),s=this.chip.getEraseSize(e,t),r=new Date,a=r.getTime();let o=3e3;this.IS_STUB==!1&&(o=this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB,t)),this.debug("flash begin "+s+" "+n+" "+this.FLASH_WRITE_SIZE+" "+e+" "+t);let l=this._appendArray(this._intToByteArray(s),this._intToByteArray(n));l=this._appendArray(l,this._intToByteArray(this.FLASH_WRITE_SIZE)),l=this._appendArray(l,this._intToByteArray(e)),this.IS_STUB==!1&&(l=this._appendArray(l,this._intToByteArray(0))),await this.checkCommand("enter Flash download mode",this.ESP_FLASH_BEGIN,l,void 0,void 0,o);const c=r.getTime();return t!=0&&this.IS_STUB==!1&&this.info("Took "+(c-a)/1e3+"."+(c-a)%1e3+"s to erase flash block"),n}async flashDeflBegin(t,e,n){const s=Math.floor((e+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),r=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),a=new Date,o=a.getTime();let l,c;this.IS_STUB?(l=t,c=this.DEFAULT_TIMEOUT):(l=r*this.FLASH_WRITE_SIZE,c=this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB,l)),this.info("Compressed "+t+" bytes to "+e+"...");let h=this._appendArray(this._intToByteArray(l),this._intToByteArray(s));h=this._appendArray(h,this._intToByteArray(this.FLASH_WRITE_SIZE)),h=this._appendArray(h,this._intToByteArray(n)),(this.chip.CHIP_NAME==="ESP32-S2"||this.chip.CHIP_NAME==="ESP32-S3"||this.chip.CHIP_NAME==="ESP32-C3"||this.chip.CHIP_NAME==="ESP32-C2")&&this.IS_STUB===!1&&(h=this._appendArray(h,this._intToByteArray(0))),await this.checkCommand("enter compressed flash mode",this.ESP_FLASH_DEFL_BEGIN,h,void 0,void 0,c);const u=a.getTime();return t!=0&&this.IS_STUB===!1&&this.info("Took "+(u-o)/1e3+"."+(u-o)%1e3+"s to erase flash block"),s}async flashBlock(t,e,n){let s=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,t);const r=this.checksum(t);for(let a=this.WRITE_BLOCK_ATTEMPTS-1;a>=0;a--)try{await this.checkCommand("write to target Flash after seq "+e,this.ESP_FLASH_DATA,s,r,void 0,n);return}catch(o){if(a===0)throw o;this.debug(`Block ${e} write failed (${o}), retrying with ${a} attempts left...`),await Rn(this.WRITE_BLOCK_RETRY_DELAY_MS)}}async flashDeflBlock(t,e,n){let s=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,t);const r=this.checksum(t);this.debug(`flash_defl_block ${Array.from(t.slice(0,2)).map(a=>a.toString(16)).join(" ")}`);for(let a=this.WRITE_BLOCK_ATTEMPTS-1;a>=0;a--)try{await this.checkCommand("write compressed data to flash after seq "+e,this.ESP_FLASH_DEFL_DATA,s,r,void 0,n);return}catch(o){if(a===0)throw o;this.debug(`Compressed block ${e} write failed (${o}), retrying with ${a} attempts left...`),await Rn(this.WRITE_BLOCK_RETRY_DELAY_MS)}}async flashFinish(t=!1,e=this.DEFAULT_TIMEOUT){const n=t?0:1,s=this._intToByteArray(n);await this.checkCommand("leave Flash mode",this.ESP_FLASH_END,s,void 0,void 0,e)}async flashDeflFinish(t=!1,e=this.DEFAULT_TIMEOUT){const n=t?0:1,s=this._intToByteArray(n);await this.checkCommand("leave compressed flash mode",this.ESP_FLASH_DEFL_END,s,void 0,void 0,e)}async runSpiflashCommand(t,e,n,s=null,r=0,a=0){const d=this.chip.SPI_REG_BASE,_=d+0,m=d+4,E=d+this.chip.SPI_USR_OFFS,p=d+this.chip.SPI_USR1_OFFS,f=d+this.chip.SPI_USR2_OFFS,R=d+this.chip.SPI_W0_OFFS;let x;this.chip.SPI_MOSI_DLEN_OFFS!=null?x=async(H,W)=>{const k=d+this.chip.SPI_MOSI_DLEN_OFFS,X=d+this.chip.SPI_MISO_DLEN_OFFS;H>0&&await this.writeReg(k,H-1),W>0&&await this.writeReg(X,W-1);let V=0;a>0&&(V|=a-1),r>0&&(V|=r-1<<b),V&&await this.writeReg(p,V)}:x=async(H,W)=>{const k=p,X=17,V=8,it=H===0?0:H-1;let gt=(W===0?0:W-1)<<V|it<<X;a>0&&(gt|=a-1),r>0&&(gt|=r-1<<b),await this.writeReg(k,gt)};const g=1<<18,P=28,b=26;if(n>32)throw new Dt("Reading more than 32 bits back from a SPI flash operation is unsupported");if(e.length>64)throw new Dt("Writing more than 64 bytes of data with one SPI command is unsupported");const y=e.length*8,C=await this.readReg(E),A=await this.readReg(f);let S=-2147483648;n>0&&(S|=268435456),y>0&&(S|=134217728),r>0&&(S|=1073741824),a>0&&(S|=536870912),await x(y,n),await this.writeReg(E,S);let w=7<<P|t;if(await this.writeReg(f,w),s&&r>0&&(this.SPI_ADDR_REG_MSB&&(s=s<<32-r),await this.writeReg(m,s)),y==0)await this.writeReg(R,0);else{e=ko(e,4,0);const H=[];for(let k=0;k<e.length;k+=4)H.push((e[k]|e[k+1]<<8|e[k+2]<<16|e[k+3]<<24)>>>0);let W=R;for(const k of H)await this.writeReg(W,k),W+=4}await this.writeReg(_,g);let B;for(B=0;B<10&&(w=await this.readReg(_)&g,w!=0);B++);if(B===10)throw new Dt("SPI command did not complete in time");const O=await this.readReg(R);return await this.writeReg(E,C),await this.writeReg(f,A),O}async readFlashId(){const e=new Uint8Array(0);return await this.runSpiflashCommand(159,e,24)}async eraseFlash(){this.info("Erasing flash (this may take a while)...");let t=new Date;const e=t.getTime(),n=await this.checkCommand("erase flash",this.ESP_ERASE_FLASH,void 0,void 0,void 0,this.CHIP_ERASE_TIMEOUT);t=new Date;const s=t.getTime();return this.info("Chip erase completed successfully in "+(s-e)/1e3+"s"),n}toHex(t){return Array.prototype.map.call(t,e=>("00"+e.toString(16)).slice(-2)).join("")}async flashMd5sum(t,e){const n=this.timeoutPerMb(this.MD5_TIMEOUT_PER_MB,e);let s=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0));const o=this.IS_STUB?16:32,l=await this.checkCommand("calculate md5sum",this.ESP_SPI_FLASH_MD5,s,void 0,o,n);return this.toHex(l)}async readFlash(t,e,n=null){let s=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(4096)),s=this._appendArray(s,this._intToByteArray(1024));const r=await this.checkCommand("read flash",this.ESP_READ_FLASH,s);if(r!=0)throw new Dt("Failed to read memory: "+r);let a=new Uint8Array(0);for(;a.length<e;){const o=await this.transport.read(this.FLASH_READ_TIMEOUT);if(o instanceof Uint8Array)o.length>0&&(a=this._appendArray(a,o),await this.transport.write(this._intToByteArray(a.length)),n&&n(o,a.length,e));else throw new Dt("Failed to read memory: "+o)}return a}async runStub(){if(this.syncStubDetected)return this.info("Stub is already running. No upload is necessary."),this.IS_STUB=!0,await this.applyUsbFlashWriteSize(),this.chip;if(this.secureDownloadMode)return this.info("Stub flasher is not supported in Secure Download Mode, it has been disabled."),this.chip;const t=this.chip.getChipRevision?await this.chip.getChipRevision(this):void 0,e=await ph(this.chip.CHIP_NAME,t);if(e===void 0)return this.info(`Stub flasher is not yet supported on ${this.chip.CHIP_NAME}, it has been disabled.`),this.chip;this.info("Uploading stub...");const n=[e.decodedText,e.decodedData];for(let a=0;a<n.length;a++)if(n[a]){const o=a===0?e.text_start:e.data_start,l=n[a].length,c=Math.floor((l+this.ESP_RAM_BLOCK-1)/this.ESP_RAM_BLOCK);await this.memBegin(l,c,this.ESP_RAM_BLOCK,o);for(let h=0;h<c;h++){const u=h*this.ESP_RAM_BLOCK,d=u+this.ESP_RAM_BLOCK;await this.memBlock(n[a].slice(u,d),h)}}this.info("Running stub..."),await this.memFinish(e.entry);const s=await this.transport.read(this.DEFAULT_TIMEOUT),r=String.fromCharCode(...s);if(r!=="OHAI")throw new Dt(`Failed to start stub. Unexpected response ${r}`);return this.info("Stub running..."),this.IS_STUB=!0,await this.applyUsbFlashWriteSize(),this.chip}async isResponsive(t=2){for(let e=0;e<t;e++)try{return await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR,500),!0}catch(n){this.debug(`Responsiveness probe failed: ${n}`),this.transport.flushInput()}return!1}async changeBaud(){if(this.secureDownloadMode){this.info("Baud rate change is not supported in secure download mode. Keeping 115200 baud.");return}this.info("Changing baudrate to "+this.baudrate);const t=this.IS_STUB?this.romBaudrate:0,e=this._appendArray(this._intToByteArray(this.baudrate),this._intToByteArray(t));await this.command(this.ESP_CHANGE_BAUDRATE,e),this.info("Changed"),this.info("If the chip does not respond to any further commands, consider using a lower baud rate."),await Rn(50),this.securityInfoCache=null;let n=!1,s;try{n=await this.transport.changeBaudrate(this.baudrate,this.serialOptions)}catch(r){s=r,this.debug(`Host baud-rate change failed: ${r}`)}await this.transport.drainInput(),!(!s&&await this.isResponsive())&&(s?this.info(`Unable to use ${this.baudrate} baud. Continuing at ${this.romBaudrate} baud.`):n?this.info(`The board reset while the serial port was reopened. Continuing at ${this.romBaudrate} baud.`):this.info(`The board stopped responding after changing baud rate. Continuing at ${this.romBaudrate} baud.`),await this.transport.disconnect(),await Rn(50),this.baudrate=this.romBaudrate,this.IS_STUB=!1,await this.connect("default_reset",7,!1),await this.runStub())}async main(t="default_reset"){await this.detectChip(t);let e;if(this.secureDownloadMode)this.info("WARNING: Connected chip is in Secure Download Mode. Register reads (chip description, features, MAC) are not supported."),e=this.chip.CHIP_NAME,this.info("Chip is "+e);else{if(e=await this.chip.getChipDescription(this),this.chip.getChipRevision){const n=await this.chip.getChipRevision(this);this.info("Chip Revision: "+n)}this.info("Chip is "+e),this.info("Features: "+await this.chip.getChipFeatures(this)),this.info("Crystal is "+await this.chip.getCrystalFreq(this)+"MHz"),this.info("MAC: "+await this.chip.readMac(this)),await this.chip.readMac(this),typeof this.chip.postConnect<"u"&&await this.chip.postConnect(this)}if(await this.runStub(),this.romBaudrate!==this.baudrate&&await this.changeBaud(),!this.secureDownloadMode)try{const n=await this.readFlashId();this.info("Flash ID: "+n.toString(16)),(n===16777215||n===0)&&this.info(`WARNING: Failed to communicate with the flash chip,
read/write operations will fail.
Try checking the chip connections or removing
any other hardware connected to IOs.`)}catch(n){throw new Dt("Unable to verify flash chip connection "+n)}return e}flashSizeBytes(t){let e=-1;return this.transport.trace(`Flash size string ${t}`),t.toString().indexOf("KB")!==-1?e=parseInt(t.toString().slice(0,t.toString().indexOf("KB")))*1024:t.toString().indexOf("MB")!==-1&&(e=parseInt(t.toString().slice(0,t.toString().indexOf("MB")))*1024*1024),this.transport.trace(`Flash size in bytes ${e}`),e}parseFlashSizeArg(t){if(typeof this.chip.FLASH_SIZES[t]>"u")throw new Dt("Flash size "+t+" is not supported by this chip type. Supported sizes: "+this.chip.FLASH_SIZES);return this.chip.FLASH_SIZES[t]}async _updateImageFlashParams(t,e,n="keep",s="keep",r="keep"){if(this.debug(`_update_image_flash_params ${r} ${n} ${s}`),t.length<8||e!=this.chip.BOOTLOADER_FLASH_OFFSET)return t;if(r==="keep"&&n==="keep"&&s==="keep")return this.info("Not changing the image"),t;const a=t[0];let o=t[2];const l=t[3];if(a!==this.ESP_IMAGE_MAGIC)return this.info("Warning: Image file at 0x"+e.toString(16)+" doesn't look like an image file, so not changing any flash settings."),t;try{(await Eh(this.chip,t)).verify()}catch{return this.debug(`Warning: Image file at 0x${e.toString(16)} is not a valid ${this.chip.CHIP_NAME} image, so not changing any flash settings.`),t}const c=this.chip.CHIP_NAME!=="ESP8266"&&t[23]===49;n!=="keep"&&(o={qio:0,qout:1,dio:2,dout:3}[n]);let h=l&15;s!=="keep"&&(h={"40m":0,"26m":1,"20m":2,"80m":15}[s]);let u=l&240;r!=="keep"&&(u=this.parseFlashSizeArg(r));const d=o<<8|h+u;this.info("Flash params set to "+d.toString(16));const _=new Uint8Array(t);if(t[2]!==o&&(_[2]=o),t[3]!==h+u&&(_[3]=h+u),c){const m=await Eh(this.chip,_),E=_.slice(0,m.datalength),p=_.slice(m.datalength+m.SHA256_DIGEST_LEN),f=await crypto.subtle.digest("SHA-256",p),R=new Uint8Array(f),x=new Uint8Array(E.length+R.length+p.length);x.set(E,0),x.set(R,E.length),x.set(p,E.length+R.length);const g=x.slice(m.datalength,m.datalength+m.SHA256_DIGEST_LEN);return this.transport.hexify(R)===this.transport.hexify(g)?this.info("SHA digest in image updated"):this.info(`WARNING: SHA recalculation for binary failed!
	Expected calculated SHA: ${this.transport.hexify(R)}
	SHA stored in binary:    ${this.transport.hexify(g)}`),x}return _}async writeFlash(t){this.debug("EspLoader program");for(let r=0;r<t.fileArray.length;r++)if(!(t.fileArray[r].data instanceof Uint8Array))throw new Dt(`File ${r+1} data must be a Uint8Array`);let e=t.flashSize;if(t.flashSize==="detect"){this.info("Configuring flash size...");const r=await this.detectFlashSize();if(!r)throw new Dt("Could not auto-detect Flash size. Set flash size explicitly or check the flash connection.");this.info("Detected flash size set to "+r),e=r}if(e!=="keep"){const r=this.flashSizeBytes(e);if(r<0)throw new Dt(`Invalid flash size: ${e}`);for(let a=0;a<t.fileArray.length;a++)if(t.fileArray[a].data.length+t.fileArray[a].address>r)throw new Dt(`File ${a+1} doesn't fit in the available flash`)}this.IS_STUB===!0&&t.eraseAll===!0&&await this.eraseFlash();let n,s;for(let r=0;r<t.fileArray.length;r++){if(this.debug("Data Length "+t.fileArray[r].data.length),n=t.fileArray[r].data,this.debug("Image Length "+n.length),n.length===0){this.debug("Warning: File is empty");continue}n=ko(n,4),s=t.fileArray[r].address,n=await this._updateImageFlashParams(n,s,t.flashMode,t.flashFreq,e);let a=null;t.calculateMD5Hash&&(a=t.calculateMD5Hash(n),this.debug("Image MD5 "+a));const o=n.length;let l;t.compress?(n=WS(n,{level:9}),l=await this.flashDeflBegin(o,n.length,s)):l=await this.flashBegin(o,s);let c=0,h=0;const u=n.length;t.reportProgress&&t.reportProgress(r,0,u);let d=new Date;const _=d.getTime();let m=5e3;const E=new YS({chunkSize:1});let p=0;E.onData=function(x){p+=x.byteLength};let f=0;for(;f<n.length;){this.debug("Write loop "+s+" "+c+" "+l),this.info("Writing at 0x"+(s+(t.compress?p:h)).toString(16)+"... ("+Math.floor(100*(c+1)/l)+"%)");const x=Math.min(this.FLASH_WRITE_SIZE,n.length-f),g=n.slice(f,f+x),P=f+x>=n.length;if(t.compress){const b=p;E.push(g,P);const y=p-b;let C=3e3;this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,y)>3e3&&(C=this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,y)),this.IS_STUB===!1&&(m=C),await this.flashDeflBlock(g,c,m),this.IS_STUB&&(m=C)}else{let b=g;g.length<this.FLASH_WRITE_SIZE&&(b=new Uint8Array(this.FLASH_WRITE_SIZE).fill(255),b.set(g));let y=3e3;this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,b.length)>3e3&&(y=this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,b.length)),this.IS_STUB===!1&&(m=y),await this.flashBlock(b,c,m),this.IS_STUB&&(m=y)}h+=g.length,f+=x,c++,t.reportProgress&&t.reportProgress(r,h,u)}this.IS_STUB&&(t.compress?await this.flashDeflFinish(!1,m):await this.flashFinish(!1,m)),d=new Date;const R=d.getTime()-_;if(t.compress?this.info("Wrote "+o+" bytes ("+h+" compressed) at 0x"+s.toString(16)+" in "+R/1e3+" seconds."):this.info("Wrote "+h+" bytes at 0x"+s.toString(16)+" in "+R/1e3+" seconds."),a){this.info("File  md5: "+a);const x=await this.flashMd5sum(s,o);if(this.info("Flash md5: "+x),new String(x).valueOf()!=new String(a).valueOf())throw new Dt("MD5 of file does not match data in flash!");this.info("Hash of data verified.")}}this.info("Leaving...")}async flashId(){this.debug("flash_id");const t=await this.readFlashId();this.info("Manufacturer: "+(t&255).toString(16));const e=t>>16&255;this.info("Device: "+(t>>8&255).toString(16)+e.toString(16)),this.info("Detected flash size: "+this.DETECTED_FLASH_SIZES[e])}async detectFlashSize(){this.debug("detectFlashSize");const e=await this.readFlashId()>>16&255,n=this.DETECTED_FLASH_SIZES[e];if(!n){this.info("Could not auto-detect Flash size");return}return this.info("Auto-detected Flash size: "+n),n}async softReset(t){if(this.IS_STUB){if(this.chip.CHIP_NAME!="ESP8266")throw new Dt("Soft resetting is currently only supported on ESP8266");t?(await this.flashBegin(0,0),await this.flashFinish(!0)):await this.command(this.ESP_RUN_USER_CODE,void 0,void 0,!1)}else{if(t)return;await this.flashBegin(0,0),await this.flashFinish(!1)}}async after(t="hard_reset",e,n){switch(t){case"hard_reset":if(this.resetConstructors.hardReset){this.info("Hard resetting via RTS pin...");const s=e??await this.usesUsbOtg();await this.resetConstructors.hardReset(this.transport,s).reset()}break;case"soft_reset":this.info("Soft resetting..."),await this.softReset(!1);break;case"no_reset_stub":this.info("Staying in flasher stub.");break;case"custom_reset":n||this.info("Custom reset sequence not provided, doing nothing."),this.resetConstructors.customReset||this.info("Custom reset constructor not available, doing nothing."),this.resetConstructors.customReset&&n&&(this.info("Custom resetting using sequence "+n),await this.resetConstructors.customReset(this.transport,n).reset());break;default:this.info("Staying in bootloader."),this.IS_STUB&&this.softReset(!0);break}}}class Ix{constructor(t){Q(this,"callbacks");Q(this,"isCancelled",!1);Q(this,"activePort",null);Q(this,"activeReader",null);Q(this,"activeWriter",null);this.callbacks=t}async cleanup(){if(this.activeReader){try{await this.activeReader.cancel()}catch{}try{this.activeReader.releaseLock()}catch{}this.activeReader=null}if(this.activeWriter){try{this.activeWriter.releaseLock()}catch{}this.activeWriter=null}if(this.activePort){try{await this.activePort.close()}catch{}this.activePort=null}}async start(t){this.isCancelled=!1;const e=t.adminToken||"pair_admin_secret";if(!("serial"in navigator))throw new Error("Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.");let n=null,s=null;try{this.callbacks.onStepChange(1,"Connecting to microcontroller via Web Serial..."),this.callbacks.onLog(`Requesting Serial Port... Please select your connected tracker board in the browser popup.
`);try{n=await navigator.serial.requestPort({filters:[{usbVendorId:12346},{usbVendorId:10374},{usbVendorId:6790},{usbVendorId:4292},{usbVendorId:1027},{usbVendorId:1659}]})}catch(x){if(x.name==="NotFoundError")throw x;n=await navigator.serial.requestPort()}this.activePort=n,this.callbacks.onLog(`Serial port selected. Initializing esptool-js transport...
`),s=new Gd(n);const r=new Ux({transport:s,baudrate:115200,terminal:{clean:()=>{},writeLine:x=>this.callbacks.onLog(x+`
`),write:x=>this.callbacks.onLog(x)}});this.callbacks.onLog(`Syncing with ROM bootloader...
`);const a=await r.main()||"";this.callbacks.onLog(`Detected chip: ${a||"Unknown"}
`);let o="esp32c6";if(a.toLowerCase().includes("8266"))o="esp12e";else if(a.toLowerCase().includes("c6"))o="esp32c6";else{let x="";try{x=await r.chip.getChipDescription(r)||""}catch{}x.toLowerCase().includes("8266")?o="esp12e":x.toLowerCase().includes("c6")?o="esp32c6":o=window.confirm(`Detected chip '${a||x||"Unknown"}'. Is this an ESP-12E (ESP8266)?
Click OK for ESP-12E, or Cancel for ESP32-C6.`)?"esp12e":"esp32c6"}const l=o==="esp12e"?"ESP-12E (ESP8266)":"ESP32-C6";this.callbacks.onLog(`Using hardware target profile: ${o} (${l})
`);const c=document.getElementById("flashStepChipText");c&&(c.textContent=`Flash ${l} (esptool-js)`);let h="";try{h=(await r.chip.readMac(r)).replace(/[:-]/g,"").toUpperCase()}catch(x){this.callbacks.onLog(`Warning: Could not read MAC from chip eFuse: ${x.message}
`),h="ESP_"+Math.random().toString(16).substring(2,8).toUpperCase()}this.callbacks.onLog(`Device MAC Address: ${h}
`),this.callbacks.onStepChange(2,`Registering ${h} with role '${t.role}' (${l})...`),this.callbacks.onLog(`Calling POST /v1/devices/register on server...
`);const u=await fetch("/v1/devices/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({device_id:h,role:t.role,token:t.token&&t.token.trim()?t.token.trim():void 0,notes:`Provisioned via Web Serial for role ${t.role} (${o})`})});if(!u.ok){const x=await u.text();throw new Error(`Server registration failed (${u.status}): ${x}`)}const d=await u.json(),_=d.token||t.token;this.callbacks.onLog(`Registration successful! Role: ${d.role}, Token: ${_}
`),this.callbacks.onStepChange(3,`Fetching ${l} firmware binaries from server...`),this.callbacks.onLog(`Fetching /v1/firmware/manifest?hw=${o}...
`);const m=await fetch(`/v1/firmware/manifest?hw=${o}`);if(!m.ok)throw new Error(`Failed to fetch firmware manifest (${m.status})`);const E=await m.json();if(!E.parts||E.parts.length===0)throw new Error(`Firmware manifest for ${o} contains no binary parts. Run "make firmware-bin" first.`);const p=[],f={};_&&(f.Authorization=`Bearer ${_}`);for(const x of E.parts){this.callbacks.onLog(`Downloading ${x.name} (offset 0x${x.offset.toString(16)})...
`);const g=await fetch(x.path,{headers:f});if(!g.ok)throw new Error(`Failed to download ${x.name} from ${x.path} (${g.status} ${g.statusText})`);const P=await g.arrayBuffer();p.push({data:new Uint8Array(P),address:x.offset})}this.callbacks.onStepChange(4,`Flashing firmware to ${l}...`),this.callbacks.onLog(`Starting flash write for ${p.length} binary partitions...
`),await r.writeFlash({fileArray:p,flashSize:"keep",flashMode:"keep",flashFreq:"keep",eraseAll:!1,compress:!0,reportProgress:(x,g,P)=>{var C;const b=Math.round(g/P*100),y=((C=E.parts[x])==null?void 0:C.name)||"binary";this.callbacks.onProgress(`Flashing ${y} (${b}%)`,b)}}),this.callbacks.onLog(`Flash write complete! Triggering hardware reset into user firmware...
`);try{await s.setSignals(!1,!0),await new Promise(x=>setTimeout(x,150)),await s.setSignals(!1,!1),await new Promise(x=>setTimeout(x,200))}catch{}try{await s.disconnect()}catch{}s=null,await new Promise(x=>setTimeout(x,600));const R=o==="esp12e"?9600:115200;this.callbacks.onStepChange(5,`Provisioning WiFi credentials and role over Serial (${R} baud)...`),await this.runSerialProvisioning(n,R,t,_),this.callbacks.onStepChange(6,"Waiting for device to announce on WiFi..."),this.callbacks.onSwitchOnPrompt(h),await this.waitForAnnounce(h,t.role),this.callbacks.onSuccess(h,t.role)}catch(r){throw this.callbacks.onError(r),r}finally{await this.cleanup()}}async quickProvision(t){this.isCancelled=!1;const e=t.adminToken||"pair_admin_secret";if(!("serial"in navigator))throw new Error("Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.");let n=null;try{this.callbacks.onStepChange(1,"Connecting to microcontroller via Web Serial..."),this.callbacks.onLog(`Requesting Serial Port... Please select your connected tracker board.
`);try{n=await navigator.serial.requestPort({filters:[{usbVendorId:12346},{usbVendorId:10374},{usbVendorId:6790},{usbVendorId:4292},{usbVendorId:1027},{usbVendorId:1659}]})}catch(c){if(c.name==="NotFoundError")throw c;n=await navigator.serial.requestPort()}this.activePort=n;const s=window.confirm(`Is this tracker an ESP-12E (NodeMCU / ESP8266)?
Click OK for ESP-12E (9600 baud), or Cancel for ESP32-C6 (115200 baud).`),r=s?9600:115200,a=s?"esp12e":"esp32c6";this.callbacks.onStepChange(2,`Registering role '${t.role}' on Hub...`),this.callbacks.onLog(`Registering device on Hub with role '${t.role}'...
`);const o="TRACKER_"+Math.random().toString(16).substring(2,8).toUpperCase();let l=t.token;try{const c=await fetch("/v1/devices/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({device_id:o,role:t.role,token:t.token&&t.token.trim()?t.token.trim():void 0,notes:`Quick Provisioned via Serial (${a})`})});c.ok&&(l=(await c.json()).token||l)}catch{}this.callbacks.onStepChange(3,"Firmware flash skipped (Quick Provision Mode)"),await new Promise(c=>setTimeout(c,200)),this.callbacks.onStepChange(4,"Firmware verified on board"),await new Promise(c=>setTimeout(c,200)),this.callbacks.onStepChange(5,`Provisioning WiFi & Role over Serial (${r} baud)...`),await this.runSerialProvisioning(n,r,t,l),this.callbacks.onStepChange(6,"Waiting for tracker to connect to WiFi and announce..."),this.callbacks.onSwitchOnPrompt(o),await this.waitForAnyAnnounce(t.role),this.callbacks.onSuccess(o,t.role)}catch(s){throw this.callbacks.onError(s),s}finally{await this.cleanup()}}async runSerialProvisioning(t,e,n,s){this.callbacks.onLog(`Opening serial port at ${e} baud for CLI provisioning...
`);try{await t.open({baudRate:e})}catch(u){throw this.callbacks.onLog(`Failed to open serial port: ${u.message}
`),new Error(`Could not open serial port at ${e} baud: ${u.message}`)}try{await t.setSignals({dataTerminalReady:!1,requestToSend:!1})}catch{}try{this.callbacks.onLog(`Pulsing hardware reset to boot into firmware...
`),await t.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(u=>setTimeout(u,150)),await t.setSignals({dataTerminalReady:!1,requestToSend:!1}),await new Promise(u=>setTimeout(u,500))}catch{}const r=new TextEncoder,a=new TextDecoder,o=t.readable.getReader(),l=t.writable.getWriter();this.activeReader=o,this.activeWriter=l;let c=!0;(async()=>{try{for(;c;){const{value:u,done:d}=await o.read();if(d)break;if(u){const _=a.decode(u,{stream:!0});this.callbacks.onLog(_)}}}catch{}})();const h=async(u,d=300)=>{u&&this.callbacks.onLog(`
[CLI Send] > ${u}
`),await l.write(r.encode(u+`\r
`)),await new Promise(_=>setTimeout(_,d))};await h("",400),await h(`set ssid ${n.ssid}`,300),await h(`set pass ${n.password}`,300),await h(`set server ${n.serverHost}`,300),await h(`set port ${n.serverPort}`,300),s&&await h(`set token ${s}`,300),await h(`set role ${n.role}`,300),await h("show",600),await h("reboot",400),this.callbacks.onLog(`
✓ Provisioning commands successfully sent and saved to flash!
`),c=!1;try{await o.cancel()}catch{}try{o.releaseLock()}catch{}this.activeReader=null;try{l.releaseLock()}catch{}this.activeWriter=null;try{await t.close()}catch{}this.activePort=null}async waitForAnnounce(t,e){const n=Date.now(),s=6e4;for(;Date.now()-n<s;){if(this.isCancelled)return;try{const r=await fetch("/v1/devices");if(r.ok){const o=(await r.json()).find(l=>l.device_id.toUpperCase().replace(/:/g,"")===t.toUpperCase().replace(/:/g,"")&&l.online===!0);if(o){this.callbacks.onLog(`Device ${t} announced successfully as role '${o.role}'!
`);return}}}catch{}await new Promise(r=>setTimeout(r,1500))}throw new Error(`Timed out waiting for tracker ${t} to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and credentials are correct.`)}async waitForAnyAnnounce(t){const e=Date.now(),n=6e4;for(;Date.now()-e<n;){if(this.isCancelled)return;try{const s=await fetch("/v1/devices");if(s.ok){const a=(await s.json()).find(o=>o.online===!0&&(o.role===t||o.role==="unassigned"));if(a){this.callbacks.onLog(`Tracker ${a.device_id} connected and online on WiFi!
`);return}}}catch{}await new Promise(s=>setTimeout(s,1500))}throw new Error("Timed out waiting for tracker to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and tracker has powered on.")}cancel(){this.isCancelled=!0,this.cleanup()}}const ii="pair_admin_secret",en=class en{constructor(){Q(this,"visualizer");Q(this,"playback");Q(this,"flasher",null);Q(this,"ws",null);Q(this,"requiredRoles",[]);Q(this,"devices",new Map);Q(this,"roleToDevice",new Map);Q(this,"activeSession",null);Q(this,"activeRoleFilter","all");Q(this,"latestFirmware",null);Q(this,"otaJobs",new Map);Q(this,"deviceToOtaJob",new Map);Q(this,"isUpdatingAll",!1);Q(this,"recordingTimerInterval",null);Q(this,"recordingStartMs",0);Q(this,"sampleCount",0);Q(this,"lastRateCheck",Date.now());Q(this,"streamRateHz",0);Q(this,"sessionsList",[]);Q(this,"exportSessionId",null);Q(this,"logEntries",[]);Q(this,"activeLogFilter","all");Q(this,"autoScroll",!0);Q(this,"logPaused",!1);Q(this,"lastStreamLogTime",0);this.initVisualizer(),this.initPlayback(),this.initDOM(),this.connectWebSocket(),this.startPeriodicUpdates(),this.fetchSessions(),this.fetchLatestFirmware()}initVisualizer(){const t=document.getElementById("threeContainer");this.visualizer=new _g(t);const e=document.getElementById("valLatency");this.visualizer.onLatencyUpdate=s=>{if(this.visualizer.isPlaybackMode){e&&(e.innerText="Playback Mode",e.className="val");return}e&&(e.innerText=`${s} ms`,s<100?e.className="val text-success":s<150?e.className="val text-warning":e.className="val")};const n=document.getElementById("valFps");this.visualizer.onFpsUpdate=s=>{n&&(n.innerText=`${s}`)}}initPlayback(){this.playback=new pg(this.visualizer);const t=document.getElementById("btnPlayPause"),e=document.getElementById("playbackScrubber"),n=document.getElementById("playbackTimeDisplay");this.playback.onPlayStateChange=s=>{t&&(t.innerText=s?"⏸ Pause":"▶ Play",t.className=s?"btn btn-sm btn-secondary btn-play":"btn btn-sm btn-primary btn-play")},this.playback.onTimeUpdate=(s,r)=>{e&&(e.max=`${r}`,e.value=`${s}`),n&&(n.innerText=`${this.formatPlaybackTime(s)} / ${this.formatPlaybackTime(r)}`)}}initDOM(){const t=document.getElementById("btnStartSession"),e=document.getElementById("btnEndSession"),n=document.getElementById("btnCalibratePose"),s=document.getElementById("btnReZero");t.addEventListener("click",()=>this.startSession()),e.addEventListener("click",()=>this.endSession()),n&&n.addEventListener("click",()=>this.calibratePose()),s&&s.addEventListener("click",()=>this.reZeroYaw());const r=document.getElementById("tabTrackers"),a=document.getElementById("tabSessions"),o=document.getElementById("tabFlash"),l=document.getElementById("tabLogs"),c=document.getElementById("viewTrackers"),h=document.getElementById("viewSessions"),u=document.getElementById("viewFlash"),d=document.getElementById("viewLogs"),_=(H,W)=>{[r,a,o,l].forEach(k=>k==null?void 0:k.classList.remove("active")),[c,h,u,d].forEach(k=>{k&&(k.style.display="none")}),H.classList.add("active"),W.style.display="flex"};r==null||r.addEventListener("click",()=>_(r,c)),a==null||a.addEventListener("click",()=>{_(a,h),this.fetchSessions()}),o==null||o.addEventListener("click",()=>_(o,u)),l==null||l.addEventListener("click",()=>_(l,d)),this.initLoggingUI(),this.initFlashUI();const m=document.getElementById("btnRefreshSessions");m&&m.addEventListener("click",()=>this.fetchSessions());const E=document.getElementById("missingRolesModal"),p=document.getElementById("btnCloseModal"),f=document.getElementById("btnAcknowledgeModal"),R=()=>{E&&(E.style.display="none")};p&&p.addEventListener("click",R),f&&f.addEventListener("click",R);const x=document.getElementById("btnCloseExportModal"),g=document.getElementById("btnCancelExport"),P=document.getElementById("btnConfirmExportDownload");x&&x.addEventListener("click",()=>this.closeExportModal()),g&&g.addEventListener("click",()=>this.closeExportModal()),P&&P.addEventListener("click",()=>this.triggerExportDownload());const b=document.getElementById("btnPlayPause");b&&b.addEventListener("click",()=>this.playback.togglePlay());const y=document.getElementById("playbackScrubber");y&&y.addEventListener("input",()=>{const H=parseFloat(y.value);this.playback.seek(H)});const C=document.querySelectorAll(".btn-speed");C.forEach(H=>{H.addEventListener("click",W=>{const k=W.currentTarget,X=parseFloat(k.dataset.speed||"1.0");this.playback.setSpeed(X),C.forEach(V=>V.classList.remove("active")),k.classList.add("active")})});const A=document.getElementById("btnExitPlayback");A&&A.addEventListener("click",()=>this.exitPlayback());const S=document.getElementById("btnUpdateAll");S&&S.addEventListener("click",()=>this.updateAllDevices());const w=document.querySelectorAll(".btn-cam");w.forEach(H=>{H.addEventListener("click",W=>{const k=W.currentTarget,X=k.dataset.cam||"persp";this.visualizer.setCameraView(X),w.forEach(V=>V.classList.remove("active")),k.classList.add("active")})});const B=document.getElementById("btnResetCamera");B&&B.addEventListener("click",()=>{this.visualizer.resetCamera(),w.forEach(W=>W.classList.remove("active"));const H=document.querySelector('.btn-cam[data-cam="persp"]');H&&H.classList.add("active")});const O=document.querySelectorAll(".btn-role-filter");O.forEach(H=>{H.addEventListener("click",W=>{const k=W.currentTarget,X=k.dataset.roleFilter||"all";this.activeRoleFilter=X,O.forEach(V=>V.classList.remove("active")),k.classList.add("active"),this.renderCards()})})}calibratePose(){this.visualizer.calibratePose();const t=document.getElementById("calibBadge");t&&(t.className="badge-calib badge-calib-done",t.innerText="Calibrated")}reZeroYaw(){this.visualizer.reZeroYaw()}connectWebSocket(){const t=document.getElementById("wsBadge");t.className="badge badge-disconnected",t.innerText="Connecting...";const n=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/v1/dashboard`;this.ws=new WebSocket(n),this.ws.onopen=()=>{t.className="badge badge-connected",t.innerText="Connected Live",this.addLog("sys",`Connected to Eidon server via WebSocket (${n})`,"WS")},this.ws.onmessage=s=>{try{const r=JSON.parse(s.data);this.handleMessage(r)}catch(r){console.error("Failed to parse WS message:",r)}},this.ws.onclose=()=>{t.className="badge badge-disconnected",t.innerText="Disconnected (Reconnecting...)",this.addLog("warn","WebSocket disconnected from server. Reconnecting in 2s...","DISCONNECT"),setTimeout(()=>this.connectWebSocket(),2e3)}}handleMessage(t){var e,n,s,r;switch(t.type){case"init":{const a=t;if(this.requiredRoles=a.required_roles||[],this.devices.clear(),this.roleToDevice.clear(),a.server_time_ms&&this.visualizer.jitterBuffer.setServerTimeSync(a.server_time_ms),a.latest_firmware&&(this.latestFirmware=a.latest_firmware,this.updateLatestFwBadge()),a.ota_jobs)for(const o of a.ota_jobs)this.otaJobs.set(o.job_id,o),this.deviceToOtaJob.set(o.device_id,o);if(a.devices)for(const o of a.devices)this.devices.set(o.device_id,o),o.online&&this.roleToDevice.set(o.role,o);this.activeSession=a.active_session,this.updateSessionUI(),this.renderCards(),this.addLog("sys",`Server init: ${((e=a.devices)==null?void 0:e.length)||0} registered devices, ${((n=a.required_roles)==null?void 0:n.length)||0} required roles`,"INIT");break}case"ota_job_update":{const a=t.job;this.otaJobs.set(a.job_id,a),this.deviceToOtaJob.set(a.device_id,a),this.renderCards(),this.addLog("role",`OTA Job ${a.job_id} on ${a.device_id}: ${a.status.toUpperCase()} (${a.progress_pct}%)`,"OTA");break}case"device_state":{const a=t;this.devices.set(a.device_id,a),a.online?this.roleToDevice.set(a.role,a):((s=this.roleToDevice.get(a.role))==null?void 0:s.device_id)===a.device_id&&this.roleToDevice.delete(a.role),this.renderCards(),this.updateRecordingLossBanner();break}case"device_connected":{const a=t.device;if(a){const o=(a.hw||"esp12e").toUpperCase();this.addLog("announce",`Tracker connected: ${a.device_id} (${o}) role='${a.role}' heap=${a.free_heap||0}B`,"CONNECT")}break}case"device_disconnected":{this.addLog("warn",`Tracker disconnected: ${t.device_id} role='${t.role}'`,"DISCONNECT");break}case"log":{this.addLog(t.category||"sys",t.message,((r=t.level)==null?void 0:r.toUpperCase())||"INFO");break}case"sample":case"pose_update":{const a=t;this.sampleCount++,this.visualizer.handleSample(a);const o=this.devices.get(a.device_id)||this.roleToDevice.get(a.role);o&&(o.last_seen_ms=Date.now(),o.loss_pct=a.loss_pct),this.updateRecordingLossBanner();const l=Date.now();if(l-this.lastStreamLogTime>250){this.lastStreamLogTime=l;const c=a.quat,h=c?`q=[${c.map(m=>m.toFixed(3)).join(", ")}]`:"",u=c&&Math.abs(c[0]-1)<.005&&Math.abs(c[1])<.005&&Math.abs(c[2])<.005&&Math.abs(c[3])<.005,d=((o==null?void 0:o.hw)||"esp12e").toUpperCase(),_=u?" [⚠️ No IMU / Flat Quat]":"";this.addLog("stream",`${a.device_id} (${d}) role:${a.role} seq:${a.seq} ${h} loss:${a.loss_pct.toFixed(2)}%${_}`,"STREAM")}break}case"session_started":this.activeSession=t.session,this.updateSessionUI(),this.fetchSessions(),this.addLog("sys",`Recording session started: ${t.session.name} (${t.session.session_id})`,"SESSION");break;case"session_ended":this.activeSession=null,this.updateSessionUI(),this.fetchSessions(),this.addLog("sys","Recording session ended. Parquet saved.","SESSION");break}}renderCards(){const t=document.getElementById("requiredRolesContainer");t.innerHTML="";let e=0;for(const c of this.requiredRoles){const h=this.roleToDevice.get(c);h&&h.online&&e++}let n=[];if(this.activeRoleFilter==="arms")n=[...en.UPPER_BODY_ROLES];else if(this.activeRoleFilter==="legs")n=[...en.LOWER_BODY_ROLES];else{n=[...en.ALL_BODY_ROLES];for(const c of this.roleToDevice.keys())c&&c!=="unassigned"&&!n.includes(c)&&n.push(c)}if(this.activeRoleFilter==="online"&&(n=n.filter(c=>{const h=this.roleToDevice.get(c);return h&&h.online})),n.length===0){const c=document.createElement("div");c.style.gridColumn="1 / -1",c.style.padding="36px 16px",c.style.textAlign="center",c.style.color="var(--text-tertiary)",c.style.fontSize="0.85rem",c.innerText=this.activeRoleFilter==="online"?"No trackers are currently online.":"No roles found for current filter.",t.appendChild(c)}for(const c of n){const h=this.roleToDevice.get(c),u=h&&h.online,d=this.requiredRoles.includes(c),_=document.createElement("div");_.className=`card-role ${u?"online":"missing"}`;const m=c.replace(/_/g," "),E=u?"status-online":"status-missing",p=u&&h&&h.battery_pct!==null?`${h.battery_pct}%`:"—",f=u&&h?`${h.loss_pct.toFixed(2)}%`:"—",R=u&&h?this.formatTimeAgo(h.last_seen_ms):"Never",x=u&&h?h.device_id:"Not connected",g=h&&h.firmware_version?h.firmware_version:"unknown",P=this.latestFirmware?this.latestFirmware.version:"1.0.0",b=u&&g!=="unknown"&&g!==P,y=h&&h.protocol_outdated,C=h?this.deviceToOtaJob.get(h.device_id):null,A=C&&["queued","downloading","verifying","rebooting"].includes(C.status),S=u&&h&&h.battery_pct!==null&&h.battery_pct<30,w=u&&h&&h.free_heap?`${Math.round(h.free_heap/1024)} KB`:"—",B=u&&(h!=null&&h.hw)?h.hw.toUpperCase():"",O=u&&B?`<span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${B}</span>`:"",H=d?'<span class="role-tag-badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25);">CORE</span>':'<span class="role-tag-badge" style="background: rgba(168, 85, 247, 0.12); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.25);">UPPER BODY</span>',W=u?"ONLINE":"STANDBY";_.innerHTML=`
        <div class="card-top">
          <div class="role-title">
            <span>${m}</span>
            ${H}
            ${O}
          </div>
          <span class="status-indicator ${E}">${W}</span>
        </div>
        <div class="card-metrics">
          <div class="metric-col">
            <span class="metric-lbl">Battery</span>
            <span class="metric-val" id="batt-${c}">${p}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Heap</span>
            <span class="metric-val" id="heap-${c}">${w}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Loss</span>
            <span class="metric-val" id="loss-${c}" style="color: ${u&&h&&h.loss_pct>1?"var(--danger)":"inherit"}">${f}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Last Seen</span>
            <span class="metric-val" id="seen-${c}">${R}</span>
          </div>
        </div>
        <div class="firmware-meta-row">
          <span>FW: <strong>v${g}</strong></span>
          <div class="fw-val-group">
            ${b?`<span class="badge-update-avail" title="Update available to v${P}">v${P} avail</span>`:u&&g!=="unknown"?'<span class="badge-up-to-date">Up to date</span>':""}
            ${y?`<span class="badge-proto-outdated" title="Protocol older than required">Proto v${(h==null?void 0:h.protocol_version)||1} outdated</span>`:""}
          </div>
        </div>
        ${C?`<div class="ota-job-panel ota-status-${C.status}">
                <div class="ota-status-header">
                  <span>OTA: ${C.status.toUpperCase()} ${C.status==="downloading"?`(${C.progress_pct}%)`:""}</span>
                  ${C.error_message?`<span class="ota-error-text" title="${C.error_message}">${C.error_message}</span>`:""}
                </div>
                ${C.status==="downloading"?`<div class="ota-progress-bar"><div class="ota-progress-fill" style="width: ${C.progress_pct}%"></div></div>`:""}
              </div>`:""}
        <div class="card-footer">
          <span><code>${x}</code></span>
          ${u&&h?`<div class="card-actions">
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${h.device_id}', 'identify')">Identify</button>
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${h.device_id}', 'reboot')">Reboot</button>
                  ${A?'<button class="btn btn-secondary btn-sm" disabled>Updating...</button>':`<button class="btn ${b?"btn-primary":"btn-secondary"} btn-sm" ${S?'disabled title="Battery < 30%"':""} onclick="window.dashboardApp.triggerOTA('${h.device_id}')">Update</button>`}
                </div>`:`<span style="color: var(--text-tertiary); font-size: 0.7rem; font-weight: 500;">${d?"Required for recording":"Upper body / Arm role"}</span>`}
        </div>
      `,t.appendChild(_)}const s=document.getElementById("extraDevicesSection"),r=document.getElementById("extraDevicesContainer"),a=document.getElementById("unassignedCountBadge");if(r){r.innerHTML="";const c=Array.from(this.devices.values()).filter(h=>h.online&&(!h.role||h.role==="unassigned"));if(a&&(a.innerText=`${c.length}`),c.length>0&&s){s.style.display="block";for(const h of c){const u=document.createElement("div");u.className="card-role unassigned online";const d=(h.hw||"esp12e").toUpperCase(),_=h.battery_pct!==null?`${h.battery_pct}%`:"—",m=`${h.loss_pct.toFixed(2)}%`,E=this.formatTimeAgo(h.last_seen_ms),p=h.free_heap?`${Math.round(h.free_heap/1024)} KB`:"—",f=h.firmware_version||"unknown";u.innerHTML=`
            <div class="card-top">
              <div class="role-title">
                <span>Unassigned Tracker</span>
                <span class="role-tag-badge" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);">UNASSIGNED</span>
                <span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${d}</span>
              </div>
              <span class="status-indicator status-online">ONLINE</span>
            </div>

            <div class="imu-notice-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span><strong>Streaming Fallback Identity Quat [1, 0, 0, 0]:</strong> No BNO085 IMU detected on I2C bus (SDA=D2/GPIO4, SCL=D1/GPIO5). Connect IMU sensor to stream live motion.</span>
            </div>

            <div class="card-metrics">
              <div class="metric-col">
                <span class="metric-lbl">Battery</span>
                <span class="metric-val">${_}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Heap</span>
                <span class="metric-val">${p}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Loss</span>
                <span class="metric-val">${m}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Last Seen</span>
                <span class="metric-val">${E}</span>
              </div>
            </div>

            <div class="role-assign-row">
              <label for="assignRoleSelect-${h.device_id}">Assign Body Role:</label>
              <select id="assignRoleSelect-${h.device_id}" class="form-select">
                <option value="">-- Choose Role --</option>
                ${en.ALL_BODY_ROLES.map(R=>`<option value="${R}">${R.replace(/_/g," ").toUpperCase()}${this.requiredRoles.includes(R)?" (CORE REQUIRED)":""}</option>`).join("")}
              </select>
              <button class="btn btn-primary btn-sm" onclick="window.dashboardApp.assignRole('${h.device_id}')">Assign</button>
            </div>

            <div class="card-footer" style="margin-top: 8px;">
              <span><code>${h.device_id}</code> (FW: v${f})</span>
              <div class="card-actions">
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${h.device_id}', 'identify')">Identify</button>
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${h.device_id}', 'reboot')">Reboot</button>
              </div>
            </div>
          `,r.appendChild(u)}}else s&&(s.style.display="none")}const o=document.getElementById("roleSummary");o&&(o.innerText=`${e} / ${this.requiredRoles.length} Core Online`,e===this.requiredRoles.length?(o.style.color="var(--success)",o.style.borderColor="var(--success)"):(o.style.color="var(--danger)",o.style.borderColor="var(--danger)"));const l=document.getElementById("valActiveTrackers");if(l&&!this.visualizer.isPlaybackMode){const c=Array.from(this.devices.values()).filter(h=>h.online).length;l.innerText=`${c}`}}async assignRole(t){var s;const e=document.getElementById(`assignRoleSelect-${t}`);if(!e)return;const n=e.value;if(!n){alert("Please select a body role from the dropdown.");return}try{const r=await fetch(`/v1/devices/${t}/role`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ii}`},body:JSON.stringify({role:n})});if(!r.ok){const o=await r.json().catch(()=>({detail:r.statusText}));alert(`Failed to assign role: ${o.detail}`);return}this.addLog("role",`Device ${t} assigned role '${n}'`,"ROLE");const a=this.devices.get(t);a&&(a.role&&((s=this.roleToDevice.get(a.role))==null?void 0:s.device_id)===t&&this.roleToDevice.delete(a.role),a.role=n,a.online&&this.roleToDevice.set(n,a)),this.renderCards()}catch(r){alert(`Error assigning role: ${r.message}`)}}addLog(t,e,n="INFO"){if(this.logPaused)return;const s=new Date,a={time:`${s.toTimeString().split(" ")[0]}.${String(s.getMilliseconds()).padStart(3,"0")}`,badge:n,category:t,message:e};this.logEntries.push(a),this.logEntries.length>800&&this.logEntries.shift();const o=document.getElementById("logEventCountBadge");o&&(o.innerText=`${this.logEntries.length} events`);const l=document.getElementById("quickLogCount");l&&(l.innerText=`${this.logEntries.length}`);const c=document.getElementById("telemetryConsoleLog");c&&(this.activeLogFilter==="all"||this.activeLogFilter===t)&&(this.appendLogLine(c,a),this.autoScroll&&(c.scrollTop=c.scrollHeight));const h=document.getElementById("drawerConsoleLog");h&&(this.appendLogLine(h,a),this.autoScroll&&(h.scrollTop=h.scrollHeight))}appendLogLine(t,e){const n=document.createElement("div");n.className="log-line";const s=`log-badge log-badge-${e.category}`;for(n.innerHTML=`
      <span class="log-time">${e.time}</span>
      <span class="${s}">${e.badge}</span>
      <span class="log-msg">${this.escapeHtml(e.message)}</span>
    `,t.appendChild(n);t.children.length>500;)t.removeChild(t.firstChild)}reRenderConsoleLogs(){const t=document.getElementById("telemetryConsoleLog");if(!t)return;t.innerHTML="",(this.activeLogFilter==="all"?this.logEntries:this.logEntries.filter(n=>n.category===this.activeLogFilter)).forEach(n=>this.appendLogLine(t,n)),this.autoScroll&&(t.scrollTop=t.scrollHeight)}initLoggingUI(){const t=document.querySelectorAll(".btn-filter");t.forEach(h=>{h.addEventListener("click",u=>{t.forEach(_=>_.classList.remove("active"));const d=u.currentTarget;d.classList.add("active"),this.activeLogFilter=d.dataset.filter||"all",this.reRenderConsoleLogs()})});const e=document.getElementById("chkAutoScroll");e&&e.addEventListener("change",()=>{this.autoScroll=e.checked});const n=document.getElementById("btnPauseLog");n&&n.addEventListener("click",()=>{this.logPaused=!this.logPaused,n.innerText=this.logPaused?"▶ Resume":"⏸ Pause"});const s=document.getElementById("btnClearTelemetryLog");s&&s.addEventListener("click",()=>{this.logEntries=[];const h=document.getElementById("telemetryConsoleLog");h&&(h.innerHTML="");const u=document.getElementById("drawerConsoleLog");u&&(u.innerHTML="");const d=document.getElementById("logEventCountBadge");d&&(d.innerText="0 events");const _=document.getElementById("quickLogCount");_&&(_.innerText="0")});const r=document.getElementById("btnCopyTelemetryLog");r&&r.addEventListener("click",()=>{const h=this.logEntries.map(u=>`[${u.time}] [${u.badge}] ${u.message}`).join(`
`);navigator.clipboard.writeText(h).then(()=>{alert("Telemetry logs copied to clipboard!")})});const a=document.getElementById("btnToggleLogDrawer"),o=document.getElementById("bottomLogDrawer"),l=document.getElementById("btnCloseLogDrawer"),c=document.getElementById("btnDrawerClear");a&&o&&a.addEventListener("click",()=>{const h=o.style.display==="none"||!o.style.display;o.style.display=h?"flex":"none"}),l&&o&&l.addEventListener("click",()=>{o.style.display="none"}),c&&c.addEventListener("click",()=>{const h=document.getElementById("drawerConsoleLog");h&&(h.innerHTML="")})}escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}async fetchLatestFirmware(){try{const t=await fetch("/v1/firmware/latest");t.ok&&(this.latestFirmware=await t.json(),this.updateLatestFwBadge(),this.renderCards())}catch(t){console.warn("Failed to fetch latest firmware manifest",t)}}updateLatestFwBadge(){const t=document.getElementById("latestFwBadge");t&&this.latestFirmware&&(t.innerText=`Latest: v${this.latestFirmware.version}`)}async triggerOTA(t,e="latest"){try{const n=await fetch(`/v1/devices/${t}/ota?version=${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ii}`},body:JSON.stringify({version:e})});if(n.status===409){const r=await n.json().catch(()=>({}));return alert(`OTA Rejected: ${r.detail||"Device busy, offline, or battery < 30%"}`),!1}if(!n.ok){const r=await n.json().catch(()=>({detail:n.statusText}));return alert(`OTA Failed: ${r.detail}`),!1}const s=await n.json();return s.job&&(this.otaJobs.set(s.job.job_id,s.job),this.deviceToOtaJob.set(t,s.job),this.renderCards()),!0}catch(n){return alert(`Error initiating OTA: ${n.message}`),!1}}async updateAllDevices(){if(this.isUpdatingAll)return;const t=document.getElementById("btnUpdateAll"),e=[];for(const r of this.devices.values())r.online&&e.push(r);if(e.length===0){alert("No online devices available to update.");return}const n=e.filter(r=>{var a;return r.firmware_version!==((a=this.latestFirmware)==null?void 0:a.version)}),s=n.length>0?n:e;if(confirm(`Update ${s.length} device(s) one at a time to latest firmware?`)){this.isUpdatingAll=!0,t&&(t.disabled=!0);try{for(let r=0;r<s.length;r++){const a=s[r];if(t&&(t.innerText=`Updating ${r+1}/${s.length} (${a.role})...`),!await this.triggerOTA(a.device_id)){console.warn(`Could not start OTA on device ${a.device_id}, moving to next.`);continue}await new Promise(l=>{const c=setTimeout(()=>l(),6e4),h=setInterval(()=>{const u=this.deviceToOtaJob.get(a.device_id);u&&(u.status==="success"||u.status==="failed")&&(clearInterval(h),clearTimeout(c),l())},500)})}}finally{this.isUpdatingAll=!1,t&&(t.disabled=!1,t.innerText="⬆️ Update all (one at a time)")}}}formatTimeAgo(t){const e=Math.max(0,Math.floor((Date.now()-t)/1e3));return e<2?"Just now":e<60?`${e}s ago`:`${Math.floor(e/60)}m ago`}async sendCommand(t,e){try{const n=await fetch(`/v1/devices/${t}/command`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ii}`},body:JSON.stringify({type:e})});n.ok||alert(`Failed to send command: ${n.statusText}`)}catch(n){alert(`Error sending command: ${n.message}`)}}showMissingRolesModal(t){const e=document.getElementById("missingRolesModal"),n=document.getElementById("missingRolesList");if(!(!e||!n)){n.innerHTML="";for(const s of t){const r=document.createElement("li");r.innerText=`${s.replace(/_/g," ")} (${s})`,n.appendChild(r)}e.style.display="flex"}}async startSession(){const t=this.requiredRoles.filter(a=>{var o;return!((o=this.roleToDevice.get(a))!=null&&o.online)});if(t.length>0){this.showMissingRolesModal(t);return}const n=document.getElementById("sessionNameInput").value.trim()||`Session ${new Date().toLocaleTimeString()}`,s=this.visualizer.getCalibrationOffsets(),r={name:n};s&&(r.calibration_offsets=s);try{const a=await fetch("/v1/sessions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ii}`},body:JSON.stringify(r)});if(!a.ok){const l=await a.json().catch(()=>({})),c=l.detail&&typeof l.detail=="string"&&l.detail.includes("Missing required roles")?l.detail.replace("Missing required roles:","").split(",").map(h=>h.trim()):t;this.showMissingRolesModal(c.length>0?c:["required roles offline"]);return}const o=await a.json();this.activeSession=o,this.updateSessionUI(),this.fetchSessions()}catch(a){alert(`Network error starting session: ${a.message}`)}}async endSession(){if(this.activeSession)try{const t=await fetch(`/v1/sessions/${this.activeSession.session_id}/end`,{method:"POST",headers:{Authorization:`Bearer ${ii}`}});if(!t.ok){alert("Failed to end session");return}const e=await t.json();this.activeSession=null,this.updateSessionUI(),this.fetchSessions(),alert(`Session completed!
Total samples: ${e.total_samples}
Parquet dataset saved.`)}catch(t){alert(`Error ending session: ${t.message}`)}}updateSessionUI(){const t=document.getElementById("sessionStatus"),e=document.getElementById("btnStartSession"),n=document.getElementById("btnEndSession"),s=document.getElementById("sessionNameInput"),r=document.getElementById("recTimer"),a=document.getElementById("recordingBanner"),o=document.getElementById("recBannerName");this.activeSession?(t.innerHTML=`<span style="color: var(--danger); font-weight: 800;">● RECORDING</span>: ${this.activeSession.name}`,e.style.display="none",s.style.display="none",n.style.display="inline-flex",r.style.display="inline-block",a.style.display="flex",o.innerText=this.activeSession.name,this.recordingTimerInterval||(this.recordingStartMs=Date.now(),this.recordingTimerInterval=setInterval(()=>{const l=Math.floor((Date.now()-this.recordingStartMs)/1e3),c=String(Math.floor(l/3600)).padStart(2,"0"),h=String(Math.floor(l%3600/60)).padStart(2,"0"),u=String(l%60).padStart(2,"0"),d=`${c}:${h}:${u}`;r.innerText=d;const _=document.getElementById("recBannerTimer");_&&(_.innerText=d)},1e3))):(t.innerText="No Active Session",e.style.display="inline-flex",s.style.display="inline-block",n.style.display="none",r.style.display="none",a.style.display="none",this.recordingTimerInterval&&(clearInterval(this.recordingTimerInterval),this.recordingTimerInterval=null))}updateRecordingLossBanner(){if(!this.activeSession)return;const t=document.getElementById("recBannerLoss");if(!t)return;const e=[];this.roleToDevice.forEach((n,s)=>{n.online&&e.push(`${s}: ${n.loss_pct.toFixed(2)}%`)}),t.innerText=e.length>0?`Per-device loss: ${e.join(" | ")}`:"Per-device loss: waiting for stream..."}async fetchSessions(){try{const t=await fetch("/v1/sessions");if(!t.ok)return;this.sessionsList=await t.json(),this.renderSessionsList()}catch(t){console.warn("Failed to fetch sessions:",t)}}renderSessionsList(){const t=document.getElementById("sessionCountBadge");t&&(t.innerText=`${this.sessionsList.length}`);const e=document.getElementById("sessionsListContainer");if(e){if(this.sessionsList.length===0){e.innerHTML='<div class="empty-sessions">No recorded sessions found. Press <strong>REC</strong> to capture your first session.</div>';return}e.innerHTML="";for(const n of this.sessionsList){const s=document.createElement("div");s.className="card-session";const a=n.status==="completed"?"session-status-completed":"session-status-active",o=n.started_at?new Date(n.started_at).toLocaleString():"—",l=n.ended_at&&n.started_at?`${((n.ended_at-n.started_at)/1e3).toFixed(1)}s`:"Active",c=n.total_samples||0;s.innerHTML=`
        <div class="card-session-top">
          <span class="session-name-title">${n.name}</span>
          <span class="session-status-badge ${a}">${n.status}</span>
        </div>
        <div class="card-session-meta">
          <div class="meta-item"><span>Recorded:</span> <strong>${o}</strong></div>
          <div class="meta-item"><span>Duration:</span> <strong>${l}</strong></div>
          <div class="meta-item"><span>Samples:</span> <strong>${c}</strong></div>
        </div>
        <div class="card-session-actions">
          <button class="btn btn-primary btn-sm" onclick="window.dashboardApp.loadSessionPlayback('${n.session_id}')">
            ▶ Play in 3D
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.openExportModal('${n.session_id}')">
            ⤓ Export
          </button>
        </div>
      `,e.appendChild(s)}}}openExportModal(t){this.exportSessionId=t;const e=this.sessionsList.find(c=>c.session_id===t),n=document.getElementById("exportMocapModal");if(!n)return;const s=document.getElementById("exportModalSessionName"),r=document.getElementById("exportModalSessionId"),a=document.getElementById("exportCalibStatus"),o=document.getElementById("exportUncalibWarning");s&&(s.innerText=e?e.name:"Session"),r&&(r.innerText=t);const l=!!(e&&e.metadata&&e.metadata.calibration_offsets&&Object.keys(e.metadata.calibration_offsets).length>0);a&&(l?(a.innerHTML='<span class="badge-calib badge-calib-done">✓ Pose Calibrated</span> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.4rem;">Offsets stored at recording start</span>',o&&(o.style.display="none")):(a.innerHTML='<span class="badge-calib badge-calib-pending">⚠️ No Calibration</span> <span style="font-size: 0.75rem; color: #f87171; margin-left: 0.4rem;">Recorded without N-pose calibration</span>',o&&(o.style.display="block"))),n.style.display="flex"}closeExportModal(){const t=document.getElementById("exportMocapModal");t&&(t.style.display="none"),this.exportSessionId=null}triggerExportDownload(){if(!this.exportSessionId)return;const t=document.querySelector('input[name="exportFormat"]:checked'),e=t?t.value:"bvh",n=document.getElementById("exportRateInput"),s=n&&parseFloat(n.value)||30,r=`/v1/sessions/${this.exportSessionId}/export?format=${e}&rate=${s}&allow_uncalibrated=true`,a=document.createElement("a");a.href=r,a.download="",document.body.appendChild(a),a.click(),document.body.removeChild(a),this.closeExportModal()}async loadSessionPlayback(t){try{const e=await fetch(`/v1/sessions/${t}/data`);if(!e.ok){alert("Failed to load session playback data");return}const n=await e.json();if(!n.samples||n.samples.length===0){alert("This session contains no recorded motion samples.");return}this.playback.loadSession(n);const s=document.getElementById("playbackOverlay"),r=document.getElementById("playbackSessionName"),a=document.getElementById("viewportHeaderTitle"),o=document.getElementById("viewportHeaderSub");s&&(s.style.display="flex"),r&&(r.innerText=`${n.name} (${n.samples.length} samples)`),a&&(a.innerText=`3D Playback: ${n.name}`),o&&(o.innerText=`Parquet Scrubbing (${n.roles.join(", ")})`);const l=document.getElementById("valActiveTrackers");l&&(l.innerText=`${n.roles.length} (Recorded)`);const c=document.getElementById("valLatency");c&&(c.innerText="Playback Mode",c.className="val"),this.playback.play()}catch(e){alert(`Error loading session playback: ${e.message}`)}}exitPlayback(){this.playback.exitPlayback();const t=document.getElementById("playbackOverlay"),e=document.getElementById("viewportHeaderTitle"),n=document.getElementById("viewportHeaderSub");t&&(t.style.display="none"),e&&(e.innerText="3D Biomechanical Avatar"),n&&(n.innerText="Live Quaternion Forward Kinematics");const s=document.getElementById("valActiveTrackers");s&&(s.innerText=`${this.roleToDevice.size}`)}formatPlaybackTime(t){const e=t/1e3,n=Math.floor(e/60),s=e%60,r=String(n).padStart(2,"0"),a=s.toFixed(1).padStart(4,"0");return`${r}:${a}`}initFlashUI(){const t=document.getElementById("flashRoleSelect"),e=document.getElementById("flashServerHost"),n=document.getElementById("flashServerPort"),s=document.getElementById("btnStartFlash"),r=document.getElementById("btnClearFlashLog"),a=document.getElementById("btnViewOnlineAvatar");e&&window.location.hostname&&window.location.hostname!=="localhost"&&(e.value=window.location.hostname),n&&window.location.port&&(n.value=window.location.port);const o=["chest","left_shoulder","right_shoulder","left_upper_arm","right_upper_arm","left_elbow","right_elbow","left_forearm","right_forearm","left_hand","right_hand","left_thigh","right_thigh","left_shin","right_shin","left_foot","right_foot"];if(t){t.innerHTML="";for(const d of o){const _=document.createElement("option");_.value=d,_.text=`${d.replace(/_/g," ")} (${d})`,t.appendChild(_)}}r&&r.addEventListener("click",()=>{const d=document.getElementById("flashConsoleLog");d&&(d.textContent="")}),a&&a.addEventListener("click",()=>{const d=document.getElementById("tabTrackers");d&&d.click()});const l=document.getElementById("btnQuickProvision"),c=(d,_)=>{const m=document.getElementById("flashConsoleLog"),E=document.getElementById("switchOnTrackerCard"),p=document.getElementById("flashSuccessCard"),f=document.getElementById("flashProgressBarFill"),R=document.getElementById("flashProgressText");return new Ix({onStepChange:(x,g)=>{for(let P=1;P<=6;P++){const b=document.getElementById(`stepItem${P}`);b&&(P<x?b.className="step-row done":P===x?b.className="step-row active":b.className="step-row pending")}R.innerText=g,f.style.width=`${Math.round((x-1)/6*100)}%`},onProgress:(x,g)=>{R.innerText=x,f.style.width=`${g}%`},onLog:x=>{m.textContent+=x,m.scrollTop=m.scrollHeight},onSwitchOnPrompt:x=>{E.style.display="flex";const g=E.querySelector("p");g&&(g.innerHTML=`Device <strong>${x}</strong> configured! Ensure power is ON. Waiting for it to connect to WiFi and announce...`)},onSuccess:(x,g)=>{for(let b=1;b<=6;b++){const y=document.getElementById(`stepItem${b}`);y&&(y.className="step-row done")}f.style.width="100%",R.innerText="Provisioning & Connection Complete!",E.style.display="none",p.style.display="flex";const P=document.getElementById("flashSuccessMessage");P&&(P.innerHTML=`Device <strong>${x}</strong> announced as <strong>${g}</strong> and is online!`),d.disabled=!1,_&&(_.disabled=!1)},onError:x=>{d.disabled=!1,_&&(_.disabled=!1),R.innerText=`Error: ${x.message}`,alert(`Flashing / Provisioning Error: ${x.message}`)}})},h=()=>{const d=t?t.value:"chest",_=document.getElementById("flashSsid"),m=document.getElementById("flashPassword"),E=document.getElementById("flashToken"),p=_?_.value.trim():"",f=m?m.value:"",R=e&&e.value.trim()||"pair.local",x=n?parseInt(n.value||"8000",10):8e3,g=E?E.value.trim():"";return{role:d,ssid:p,pass:f,host:R,port:x,token:g}},u=d=>{const _=document.getElementById("flashStatusSection"),m=document.getElementById("switchOnTrackerCard"),E=document.getElementById("flashSuccessCard"),p=document.getElementById("flashProgressBarFill"),f=document.getElementById("flashProgressText");_.style.display="flex",m.style.display="none",E.style.display="none",p.style.width="0%",f.innerText=d;for(let R=1;R<=6;R++){const x=document.getElementById(`stepItem${R}`);x&&(x.className="step-row pending")}};s&&s.addEventListener("click",async()=>{const d=h();if(!d.ssid){alert("Please enter your WiFi SSID.");return}u("Connecting..."),s.disabled=!0,l&&(l.disabled=!0),this.flasher=c(s,l);try{await this.flasher.start({role:d.role,ssid:d.ssid,password:d.pass,serverHost:d.host,serverPort:d.port,token:d.token||void 0,adminToken:ii})}catch{s.disabled=!1,l&&(l.disabled=!1)}}),l&&l.addEventListener("click",async()=>{const d=h();if(!d.ssid){alert("Please enter your WiFi SSID.");return}u("Connecting for Quick Provisioning..."),l.disabled=!0,s&&(s.disabled=!0),this.flasher=c(l,s);try{await this.flasher.quickProvision({role:d.role,ssid:d.ssid,password:d.pass,serverHost:d.host,serverPort:d.port,token:d.token||void 0,adminToken:ii})}catch{l.disabled=!1,s&&(s.disabled=!1)}})}startPeriodicUpdates(){setInterval(()=>{const t=Date.now(),e=(t-this.lastRateCheck)/1e3;e>=1&&(this.streamRateHz=Math.round(this.sampleCount/e),this.sampleCount=0,this.lastRateCheck=t,document.getElementById("valRate").innerText=`${this.streamRateHz} Hz`);let n=0,s=0;this.roleToDevice.forEach(a=>{n+=a.loss_pct,s++});const r=s>0?(n/s).toFixed(2)+"%":"0.00%";document.getElementById("valAvgLoss").innerText=r,en.ALL_BODY_ROLES.forEach(a=>{const o=this.roleToDevice.get(a),l=document.getElementById(`seen-${a}`);l&&o&&o.online&&(l.innerText=this.formatTimeAgo(o.last_seen_ms))})},1e3)}};Q(en,"ALL_BODY_ROLES",["chest","left_shoulder","left_upper_arm","left_forearm","left_hand","right_shoulder","right_upper_arm","right_forearm","right_hand","left_thigh","left_shin","left_foot","right_thigh","right_shin","right_foot"]),Q(en,"UPPER_BODY_ROLES",["chest","left_shoulder","left_upper_arm","left_forearm","left_hand","right_shoulder","right_upper_arm","right_forearm","right_hand"]),Q(en,"LOWER_BODY_ROLES",["left_thigh","left_shin","left_foot","right_thigh","right_shin","right_foot"]);let Go=en;window.dashboardApp=new Go;
