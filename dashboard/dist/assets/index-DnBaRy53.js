var Zd=Object.defineProperty;var jd=(i,t,e)=>t in i?Zd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var et=(i,t,e)=>jd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="170",Jd=0,mc=1,Qd=2,Sh=1,xh=2,xn=3,Kn=0,be=1,Mn=2,Hn=0,Gi=1,Ec=2,gc=3,Sc=4,tu=5,ri=100,eu=101,nu=102,iu=103,su=104,ru=200,au=201,ou=202,cu=203,Ha=204,za=205,lu=206,hu=207,du=208,uu=209,fu=210,_u=211,pu=212,mu=213,Eu=214,Va=0,Wa=1,Ya=2,Yi=3,Ka=4,$a=5,Xa=6,qa=7,vh=0,gu=1,Su=2,zn=0,xu=1,vu=2,Mu=3,Mh=4,Au=5,Ru=6,yu=7,Ah=300,Ki=301,$i=302,Za=303,ja=304,Ir=306,Ja=1e3,oi=1001,Qa=1002,Je=1003,Tu=1004,zs=1005,an=1006,Yr=1007,ci=1008,bn=1009,Rh=1010,yh=1011,As=1012,Go=1013,ui=1014,Rn=1015,Us=1016,Ho=1017,zo=1018,Xi=1020,Th=35902,wh=1021,bh=1022,je=1023,Ch=1024,Ph=1025,Hi=1026,qi=1027,Uh=1028,Vo=1029,Ih=1030,Wo=1031,Yo=1033,gr=33776,Sr=33777,xr=33778,vr=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,co=37809,lo=37810,ho=37811,uo=37812,fo=37813,_o=37814,po=37815,mo=37816,Eo=37817,go=37818,So=37819,xo=37820,vo=37821,Mr=36492,Mo=36494,Ao=36495,Dh=36283,Ro=36284,yo=36285,To=36286,wu=3200,bu=3201,Lh=0,Cu=1,Nn="",Be="srgb",ts="srgb-linear",Dr="linear",Zt="srgb",Ai=7680,xc=519,Pu=512,Uu=513,Iu=514,Fh=515,Du=516,Lu=517,Fu=518,Ou=519,vc=35044,Mc="300 es",yn=2e3,yr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,wo=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Nu(i,t){return(i%t+t)%t}function $r(i,t,e){return(1-e)*i+e*t}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],_=n[5],m=n[8],g=s[0],p=s[3],u=s[6],R=s[1],x=s[4],E=s[7],P=s[2],w=s[5],y=s[8];return r[0]=a*g+o*R+l*P,r[3]=a*p+o*x+l*w,r[6]=a*u+o*E+l*y,r[1]=c*g+h*R+f*P,r[4]=c*p+h*x+f*w,r[7]=c*u+h*E+f*y,r[2]=d*g+_*R+m*P,r[5]=d*p+_*x+m*w,r[8]=d*u+_*E+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,_=c*r-a*l,m=e*f+n*d+s*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=_*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Pt;function Oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Tr("canvas");return i.style.display="block",i}const Ac={};function ps(i){i in Ac||(Ac[i]=!0,console.warn(i))}function ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],Tc=[.3127,.329],wc=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[ts]:{primaries:Rc,whitePoint:Tc,transfer:Dr,toXYZ:wc,fromXYZ:bc,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Rc,whitePoint:Tc,transfer:Zt,toXYZ:wc,fromXYZ:bc,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let Ri;class zu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Tr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vu=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qr(s[a].image)):r.push(qr(s[a]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class Ce extends es{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=oi,s=oi,r=an,a=ci,o=je,l=bn,c=Ce.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Is(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Ah;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],_=l[5],m=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(_+1)/2,P=(u+1)/2,w=(h+d)/4,y=(f+g)/4,C=(m+p)/4;return x>E&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=y/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=y/r,s=C/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-m)*(p-m)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(p-m)/R,this.y=(f-g)/R,this.z=(d-h)/R,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[a+0],_=r[a+1],m=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=_,t[e+2]=m,t[e+3]=g;return}if(f!==g||l!==d||c!==_||h!==m){let p=1-o;const u=l*d+c*_+h*m+f*g,R=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,u*R);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const E=o*R;if(l=l*p+d*E,c=c*p+_*E,h=h*p+m*E,f=f*p+g*E,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],_=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*_-c*d,t[e+1]=l*m+h*d+c*f-o*_,t[e+2]=c*m+h*_+o*d-l*f,t[e+3]=h*m-o*f-l*d-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),_=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*_*m,this._y=c*_*f-d*h*m,this._z=c*h*m+d*_*f,this._w=c*h*f-d*_*m;break;case"YXZ":this._x=d*h*f+c*_*m,this._y=c*_*f-d*h*m,this._z=c*h*m-d*_*f,this._w=c*h*f+d*_*m;break;case"ZXY":this._x=d*h*f-c*_*m,this._y=c*_*f+d*h*m,this._z=c*h*m+d*_*f,this._w=c*h*f-d*_*m;break;case"ZYX":this._x=d*h*f-c*_*m,this._y=c*_*f+d*h*m,this._z=c*h*m-d*_*f,this._w=c*h*f+d*_*m;break;case"YZX":this._x=d*h*f+c*_*m,this._y=c*_*f+d*h*m,this._z=c*h*m-d*_*f,this._w=c*h*f-d*_*m;break;case"XZY":this._x=d*h*f-c*_*m,this._y=c*_*f-d*h*m,this._z=c*h*m+d*_*f,this._w=c*h*f+d*_*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-c)*_,this._z=(a-s)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(h-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(r-c)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-s)/_,this._x=(r+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new O,Cc=new Qe;class Ds{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ws.subVectors(this.max,ls),yi.subVectors(t.a,ls),Ti.subVectors(t.b,ls),wi.subVectors(t.c,ls),Un.subVectors(Ti,yi),In.subVectors(wi,Ti),qn.subVectors(yi,wi);let e=[0,-Un.z,Un.y,0,-In.z,In.y,0,-qn.z,qn.y,Un.z,0,-Un.x,In.z,0,-In.x,qn.z,0,-qn.x,-Un.y,Un.x,0,-In.y,In.x,0,-qn.y,qn.x,0];return!jr(e,yi,Ti,wi,Ws)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,yi,Ti,wi,Ws))?!1:(Ys.crossVectors(Un,In),e=[Ys.x,Ys.y,Ys.z],jr(e,yi,Ti,wi,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new O,new O,new O,new O,new O,new O,new O,new O],Ye=new O,Vs=new Ds,yi=new O,Ti=new O,wi=new O,Un=new O,In=new O,qn=new O,ls=new O,Ws=new O,Ys=new O,Zn=new O;function jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);const o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $u=new Ds,hs=new O,Jr=new O;class Lr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Jr)),this.expandByPoint(hs.copy(t.center).sub(Jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new O,Qr=new O,Ks=new O,Dn=new O,ta=new O,$s=new O,ea=new O;class kh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Dn.dot(this.direction),l=-Dn.dot(Ks),c=Dn.lengthSq(),h=Math.abs(1-a*a);let f,d,_,m;if(h>0)if(f=a*l-o,d=a*o-l,m=r*h,f>=0)if(d>=-m)if(d<=m){const g=1/h;f*=g,d*=g,_=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),_=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),_=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),_=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qr).addScaledVector(Ks,d),_}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),$s.subVectors(n,t),ea.crossVectors(ta,$s);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(Dn,$s));if(l<0)return null;const c=o*this.direction.dot(ta.cross(Dn));if(c<0||l+c>a)return null;const h=-o*Dn.dot(ea);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,f,d,_,m,g,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,_,m,g,p)}set(t,e,n,s,r,a,o,l,c,h,f,d,_,m,g,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=_,u[7]=m,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,_=a*f,m=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=_+m*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=m+_*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,_=l*f,m=c*h,g=c*f;e[0]=d+g*o,e[4]=m*o-_,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=_*o-m,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,_=l*f,m=c*h,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=m+_*o,e[1]=_+m*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,_=a*f,m=o*h,g=o*f;e[0]=l*h,e[4]=m*c-_,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=_*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,_=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=g-d*f,e[8]=m*f+_,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*f+m,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*l,_=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=a*h,e[9]=_*f-m,e[2]=m*f-_,e[6]=o*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Ln.crossVectors(n,Ue),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Ln.crossVectors(n,Ue)),Ln.normalize(),Xs.crossVectors(Ue,Ln),s[0]=Ln.x,s[4]=Xs.x,s[8]=Ue.x,s[1]=Ln.y,s[5]=Xs.y,s[9]=Ue.y,s[2]=Ln.z,s[6]=Xs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],_=n[13],m=n[2],g=n[6],p=n[10],u=n[14],R=n[3],x=n[7],E=n[11],P=n[15],w=s[0],y=s[4],C=s[8],M=s[12],S=s[1],b=s[5],N=s[9],F=s[13],H=s[2],z=s[6],V=s[10],Z=s[14],W=s[3],it=s[7],ht=s[11],Et=s[15];return r[0]=a*w+o*S+l*H+c*W,r[4]=a*y+o*b+l*z+c*it,r[8]=a*C+o*N+l*V+c*ht,r[12]=a*M+o*F+l*Z+c*Et,r[1]=h*w+f*S+d*H+_*W,r[5]=h*y+f*b+d*z+_*it,r[9]=h*C+f*N+d*V+_*ht,r[13]=h*M+f*F+d*Z+_*Et,r[2]=m*w+g*S+p*H+u*W,r[6]=m*y+g*b+p*z+u*it,r[10]=m*C+g*N+p*V+u*ht,r[14]=m*M+g*F+p*Z+u*Et,r[3]=R*w+x*S+E*H+P*W,r[7]=R*y+x*b+E*z+P*it,r[11]=R*C+x*N+E*V+P*ht,r[15]=R*M+x*F+E*Z+P*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],_=t[14],m=t[3],g=t[7],p=t[11],u=t[15];return m*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*_-n*l*_)+g*(+e*l*_-e*c*d+r*a*d-s*a*_+s*c*h-r*l*h)+p*(+e*c*f-e*o*_-r*a*f+n*a*_+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],_=t[11],m=t[12],g=t[13],p=t[14],u=t[15],R=f*p*c-g*d*c+g*l*_-o*p*_-f*l*u+o*d*u,x=m*d*c-h*p*c-m*l*_+a*p*_+h*l*u-a*d*u,E=h*g*c-m*f*c+m*o*_-a*g*_-h*o*u+a*f*u,P=m*f*l-h*g*l-m*o*d+a*g*d+h*o*p-a*f*p,w=e*R+n*x+s*E+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=R*y,t[1]=(g*d*r-f*p*r-g*s*_+n*p*_+f*s*u-n*d*u)*y,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*u+n*l*u)*y,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*_-n*l*_)*y,t[4]=x*y,t[5]=(h*p*r-m*d*r+m*s*_-e*p*_-h*s*u+e*d*u)*y,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*u-e*l*u)*y,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*_+e*l*_)*y,t[8]=E*y,t[9]=(m*f*r-h*g*r-m*n*_+e*g*_+h*n*u-e*f*u)*y,t[10]=(a*g*r-m*o*r+m*n*c-e*g*c-a*n*u+e*o*u)*y,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*_-e*o*_)*y,t[12]=P*y,t[13]=(h*g*s-m*f*s+m*n*d-e*g*d-h*n*p+e*f*p)*y,t[14]=(m*o*s-a*g*s-m*n*l+e*g*l+a*n*p-e*o*p)*y,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,_=r*h,m=r*f,g=a*h,p=a*f,u=o*f,R=l*c,x=l*h,E=l*f,P=n.x,w=n.y,y=n.z;return s[0]=(1-(g+u))*P,s[1]=(_+E)*P,s[2]=(m-x)*P,s[3]=0,s[4]=(_-E)*w,s[5]=(1-(d+u))*w,s[6]=(p+R)*w,s[7]=0,s[8]=(m+x)*y,s[9]=(p-R)*y,s[10]=(1-(d+g))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/a,f=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=f,Ke.elements[9]*=f,Ke.elements[10]*=f,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let _,m;if(o===yn)_=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===yr)_=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,_=(n+s)*h;let m,g;if(o===yn)m=(a+r)*f,g=-2*f;else if(o===yr)m=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new O,Ke=new oe,Xu=new O(0,0,0),qu=new O(1,1,1),Ln=new O,Xs=new O,Ue=new O,Pc=new oe,Uc=new Qe;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const Ic=new O,Ci=new Qe,mn=new oe,qs=new O,ds=new O,ju=new O,Ju=new Qe,Dc=new O(1,0,0),Lc=new O(0,1,0),Fc=new O(0,0,1),Oc={type:"added"},Qu={type:"removed"},Pi={type:"childadded",child:null},na={type:"childremoved",child:null};class ge extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new O,e=new hn,n=new Qe,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Pt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ds,qs,this.up):mn.lookAt(qs,ds,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(mn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),_=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new O(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new O,En=new O,ia=new O,gn=new O,Ui=new O,Ii=new O,Nc=new O,sa=new O,ra=new O,aa=new O,oa=new le,ca=new le,la=new le;class Ze{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),En.subVectors(n,e),ia.subVectors(t,e);const a=$e.dot($e),o=$e.dot(En),l=$e.dot(ia),c=En.dot(En),h=En.dot(ia),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,_=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-_-m,m,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oa.setScalar(0),ca.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(la,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),En.subVectors(t,e),$e.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),En.subVectors(this.a,this.b),$e.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ii.subVectors(r,n),sa.subVectors(t,n);const l=Ui.dot(sa),c=Ii.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);const h=Ui.dot(ra),f=Ii.dot(ra);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);aa.subVectors(t,r);const _=Ui.dot(aa),m=Ii.dot(aa);if(m>=0&&_<=m)return e.copy(r);const g=_*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ii,o);const p=h*m-_*f;if(p<=0&&f-h>=0&&_-m>=0)return Nc.subVectors(r,s),o=(f-h)/(f-h+(_-m)),e.copy(s).addScaledVector(Nc,o);const u=1/(p+g+d);return a=g*u,o=d*u,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=Nu(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return zt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Te(ve.r*255,0,255))*65536+Math.round(Te(ve.g*255,0,255))*256+Math.round(Te(ve.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Be){zt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Zs);const n=$r(Fn.h,Zs.h,e),s=$r(Fn.s,Zs.s,e),r=$r(Fn.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Ot;Ot.NAMES=Hh;let tf=0;class Si extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Is(),this.name="",this.blending=Gi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=za,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ko extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new O,js=new Kt;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class zh extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vh extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const Ne=new oe,da=new ge,Di=new O,Ie=new Ds,us=new Ds,pe=new O;class ze extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Vh:zh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ie.min,us.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,us.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(us.min),Ie.expandByPoint(us.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),pe.add(Di)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new O,l[C]=new O;const c=new O,h=new O,f=new O,d=new Kt,_=new Kt,m=new Kt,g=new O,p=new O;function u(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),h.sub(c),f.sub(c),_.sub(d),m.sub(d);const b=1/(_.x*m.y-m.x*_.y);isFinite(b)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(b),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(b),o[C].add(g),o[M].add(g),o[S].add(g),l[C].add(p),l[M].add(p),l[S].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,M=R.length;C<M;++C){const S=R[C],b=S.start,N=S.count;for(let F=b,H=b+N;F<H;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new O,E=new O,P=new O,w=new O;function y(C){P.fromBufferAttribute(s,C),w.copy(P);const M=o[C];x.copy(M),x.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(w,M);const b=E.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,M=R.length;C<M;++C){const S=R[C],b=S.start,N=S.count;for(let F=b,H=b+N;F<H;F+=3)y(t.getX(F+0)),y(t.getX(F+1)),y(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let d=0,_=t.count;d<_;d+=3){const m=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let _=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?_=l[g]*o.data.stride+o.offset:_=l[g]*h;for(let u=0;u<h;u++)d[m++]=c[_++]}return new on(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],_=t(d,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];h.push(_.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,_=f.length;d<_;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new oe,jn=new kh,Js=new Lr,kc=new O,Qs=new O,tr=new O,er=new O,ua=new O,nr=new O,Gc=new O,ir=new O;class Jt extends ge{constructor(t=new ze,e=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ua.fromBufferAttribute(f,t),a?nr.addScaledVector(ua,h):nr.addScaledVector(ua.sub(e),h))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Js.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Js,kc)===null||jn.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const p=d[m],u=a[p.materialIndex],R=Math.max(p.start,_.start),x=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let E=R,P=x;E<P;E+=3){const w=o.getX(E),y=o.getX(E+1),C=o.getX(E+2);s=sr(this,u,t,n,c,h,f,w,y,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);for(let p=m,u=g;p<u;p+=3){const R=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);s=sr(this,a,t,n,c,h,f,R,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const p=d[m],u=a[p.materialIndex],R=Math.max(p.start,_.start),x=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let E=R,P=x;E<P;E+=3){const w=E,y=E+1,C=E+2;s=sr(this,u,t,n,c,h,f,w,y,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let p=m,u=g;p<u;p+=3){const R=p,x=p+1,E=p+2;s=sr(this,a,t,n,c,h,f,R,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function nf(i,t,e,n,s,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:i}}function sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qs),i.getVertexPosition(l,tr),i.getVertexPosition(c,er);const h=nf(i,t,e,n,Qs,tr,er,Gc);if(h){const f=new O;Ze.getBarycoord(Gc,Qs,tr,er,f),s&&(h.uv=Ze.getInterpolatedAttribute(s,o,l,c,f,new Kt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,o,l,c,f,new Kt)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Ze.getNormal(Qs,tr,er,d.normal),h.face=d,h.barycoord=f}return h}class qe extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,_=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function m(g,p,u,R,x,E,P,w,y,C,M){const S=E/y,b=P/C,N=E/2,F=P/2,H=w/2,z=y+1,V=C+1;let Z=0,W=0;const it=new O;for(let ht=0;ht<V;ht++){const Et=ht*b-F;for(let Lt=0;Lt<z;Lt++){const jt=Lt*S-N;it[g]=jt*R,it[p]=Et*x,it[u]=H,c.push(it.x,it.y,it.z),it[g]=0,it[p]=0,it[u]=w>0?1:-1,h.push(it.x,it.y,it.z),f.push(Lt/y),f.push(1-ht/C),Z+=1}}for(let ht=0;ht<C;ht++)for(let Et=0;Et<y;Et++){const Lt=d+Et+z*ht,jt=d+Et+z*(ht+1),$=d+(Et+1)+z*(ht+1),tt=d+(Et+1)+z*ht;l.push(Lt,jt,tt),l.push(jt,$,tt),W+=6}o.addGroup(_,W,M),_+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const rf={clone:Zi,merge:Me};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new O,Hc=new Kt,zc=new Kt;class ke extends Yh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,zc),e.subVectors(zc,Hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Fi=1;class cf extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Li,Fi,t,e);s.layers=this.layers,this.add(s);const r=new ke(Li,Fi,t,e);r.layers=this.layers,this.add(r);const a=new ke(Li,Fi,t,e);a.layers=this.layers,this.add(a);const o=new ke(Li,Fi,t,e);o.layers=this.layers,this.add(o);const l=new ke(Li,Fi,t,e);l.layers=this.layers,this.add(l);const c=new ke(Li,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,_),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kh extends Ce{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lf extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Hn});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=an),new cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new O,hf=new O,df=new Pt;class ii{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||df.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Lr,rr=new O;class $o{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],_=s[8],m=s[9],g=s[10],p=s[11],u=s[12],R=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-_,E-u).normalize(),n[1].setComponents(l+r,d+c,p+_,E+u).normalize(),n[2].setComponents(l+a,d+h,p+m,E+R).normalize(),n[3].setComponents(l-a,d-h,p-m,E-R).normalize(),n[4].setComponents(l-o,d-f,p-g,E-x).normalize(),e===yn)n[5].setComponents(l+o,d+f,p+g,E+x).normalize();else if(e===yr)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((_,m)=>_.start-m.start);let d=0;for(let _=1;_<f.length;_++){const m=f[d],g=f[_];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,m=f.length;_<m;_++){const g=f[_];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ls extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,_=[],m=[],g=[],p=[];for(let u=0;u<h;u++){const R=u*d-a;for(let x=0;x<c;x++){const E=x*f-r;m.push(E,-R,0),g.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let R=0;R<o;R++){const x=R+c*u,E=R+c*(u+1),P=R+1+c*(u+1),w=R+1+c*u;_.push(x,E,w),_.push(E,P,w)}this.setIndex(_),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s_=`uniform bool receiveShadow;
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
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,d_=`struct PhysicalMaterial {
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
}`,u_=`
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,C_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,vp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,wp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Dp=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Wp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:ff,alphahash_pars_fragment:_f,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:Ef,alphatest_pars_fragment:gf,aomap_fragment:Sf,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:yf,iridescence_fragment:Tf,bumpmap_pars_fragment:wf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Uf,color_fragment:If,color_pars_fragment:Df,color_pars_vertex:Lf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:kf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:zf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Yf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:$f,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:r_,envmap_vertex:qf,fog_vertex:Zf,fog_pars_vertex:jf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:t_,lightmap_pars_fragment:e_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:s_,lights_toon_fragment:a_,lights_toon_pars_fragment:o_,lights_phong_fragment:c_,lights_phong_pars_fragment:l_,lights_physical_fragment:h_,lights_physical_pars_fragment:d_,lights_fragment_begin:u_,lights_fragment_maps:f_,lights_fragment_end:__,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:g_,map_fragment:S_,map_pars_fragment:x_,map_particle_fragment:v_,map_particle_pars_fragment:M_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:y_,morphcolor_vertex:T_,morphnormal_vertex:w_,morphtarget_pars_vertex:b_,morphtarget_vertex:C_,normal_fragment_begin:P_,normal_fragment_maps:U_,normal_pars_fragment:I_,normal_pars_vertex:D_,normal_vertex:L_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:k_,opaque_fragment:G_,packing:H_,premultiplied_alpha_fragment:z_,project_vertex:V_,dithering_fragment:W_,dithering_pars_fragment:Y_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Z_,shadowmask_pars_fragment:j_,skinbase_vertex:J_,skinning_pars_vertex:Q_,skinning_vertex:tp,skinnormal_vertex:ep,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:sp,tonemapping_pars_fragment:rp,transmission_fragment:ap,transmission_pars_fragment:op,uv_pars_fragment:cp,uv_pars_vertex:lp,uv_vertex:hp,worldpos_vertex:dp,background_vert:up,background_frag:fp,backgroundCube_vert:_p,backgroundCube_frag:pp,cube_vert:mp,cube_frag:Ep,depth_vert:gp,depth_frag:Sp,distanceRGBA_vert:xp,distanceRGBA_frag:vp,equirect_vert:Mp,equirect_frag:Ap,linedashed_vert:Rp,linedashed_frag:yp,meshbasic_vert:Tp,meshbasic_frag:wp,meshlambert_vert:bp,meshlambert_frag:Cp,meshmatcap_vert:Pp,meshmatcap_frag:Up,meshnormal_vert:Ip,meshnormal_frag:Dp,meshphong_vert:Lp,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Np,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:Gp,points_frag:Hp,shadow_vert:zp,shadow_frag:Vp,sprite_vert:Wp,sprite_frag:Yp},nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},sn={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};sn.physical={uniforms:Me([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const ar={r:0,b:0,g:0},Qn=new hn,Kp=new oe;function $p(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,h,f=null,d=0,_=null;function m(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?e:t).get(x)),x}function g(R){let x=!1;const E=m(R);E===null?u(o,l):E&&E.isColor&&(u(E,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,x){const E=m(x);E&&(E.isCubeTexture||E.mapping===Ir)?(h===void 0&&(h=new Jt(new qe(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Zi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Qn)),h.material.toneMapped=zt.getTransfer(E.colorSpace)!==Zt,(f!==E||d!==E.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,_=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Jt(new Ls(2,2),new $n({name:"BackgroundMaterial",uniforms:Zi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=zt.getTransfer(E.colorSpace)!==Zt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,_=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function u(R,x){R.getRGB(ar,Wh(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,u(o,l)},render:g,addToRenderList:p}}function Xp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,b,N,F,H){let z=!1;const V=f(F,N,b);r!==V&&(r=V,c(r.object)),z=_(S,F,N,H),z&&m(S,F,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(S,b,N,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,b,N){const F=N.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let z=H[b.id];z===void 0&&(z={},H[b.id]=z);let V=z[F];return V===void 0&&(V=d(l()),z[F]=V),V}function d(S){const b=[],N=[],F=[];for(let H=0;H<e;H++)b[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:F,object:S,attributes:{},index:null}}function _(S,b,N,F){const H=r.attributes,z=b.attributes;let V=0;const Z=N.getAttributes();for(const W in Z)if(Z[W].location>=0){const ht=H[W];let Et=z[W];if(Et===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),ht===void 0||ht.attribute!==Et||Et&&ht.data!==Et.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function m(S,b,N,F){const H={},z=b.attributes;let V=0;const Z=N.getAttributes();for(const W in Z)if(Z[W].location>=0){let ht=z[W];ht===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const Et={};Et.attribute=ht,ht&&ht.data&&(Et.data=ht.data),H[W]=Et,V++}r.attributes=H,r.attributesNum=V,r.index=F}function g(){const S=r.newAttributes;for(let b=0,N=S.length;b<N;b++)S[b]=0}function p(S){u(S,0)}function u(S,b){const N=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;N[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),H[S]!==b&&(i.vertexAttribDivisor(S,b),H[S]=b)}function R(){const S=r.newAttributes,b=r.enabledAttributes;for(let N=0,F=b.length;N<F;N++)b[N]!==S[N]&&(i.disableVertexAttribArray(N),b[N]=0)}function x(S,b,N,F,H,z,V){V===!0?i.vertexAttribIPointer(S,b,N,H,z):i.vertexAttribPointer(S,b,N,F,H,z)}function E(S,b,N,F){g();const H=F.attributes,z=N.getAttributes(),V=b.defaultAttributeValues;for(const Z in z){const W=z[Z];if(W.location>=0){let it=H[Z];if(it===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const ht=it.normalized,Et=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;const jt=Lt.buffer,$=Lt.type,tt=Lt.bytesPerElement,gt=$===i.INT||$===i.UNSIGNED_INT||it.gpuType===Go;if(it.isInterleavedBufferAttribute){const rt=it.data,Rt=rt.stride,wt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)u(W.location+Ft,rt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)p(W.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Ft=0;Ft<W.locationSize;Ft++)x(W.location+Ft,Et/W.locationSize,$,ht,Rt*tt,(wt+Et/W.locationSize*Ft)*tt,gt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)u(W.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt,Et/W.locationSize,$,ht,Et*tt,Et/W.locationSize*rt*tt,gt)}}else if(V!==void 0){const ht=V[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(W.location,ht);break;case 3:i.vertexAttrib3fv(W.location,ht);break;case 4:i.vertexAttrib4fv(W.location,ht);break;default:i.vertexAttrib1fv(W.location,ht)}}}}R()}function P(){C();for(const S in n){const b=n[S];for(const N in b){const F=b[N];for(const H in F)h(F[H].object),delete F[H];delete b[N]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const b=n[S.id];for(const N in b){const F=b[N];for(const H in F)h(F[H].object),delete F[H];delete b[N]}delete n[S.id]}function y(S){for(const b in n){const N=n[b];if(N[S.id]===void 0)continue;const F=N[S.id];for(const H in F)h(F[H].object),delete F[H];delete N[S.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:p,disableUnusedAttributes:R}}function qp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,n,1)}function l(c,h,f,d){if(f===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g]*d[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==je&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const C=y===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==bn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Rn&&!C)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:P,maxSamples:w}}function jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ii,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||s;return s=d,n=f.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,_){const m=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const R=r?0:n,x=R*4;let E=u.clippingState||null;l.value=E,E=h(m,d,x,_);for(let P=0;P!==x;++P)E[P]=e[P];u.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,_,m){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const u=_+g*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=_;x!==g;++x,E+=4)a.copy(f[x]).applyMatrix4(R,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Jp(i){let t=new WeakMap;function e(a,o){return o===Za?a.mapping=Ki:o===ja&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===ja)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xh extends Yh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,Vc=[.125,.215,.35,.446,.526,.582],ai=20,_a=new Xh,Wc=new Ot;let pa=null,ma=0,Ea=0,ga=!1;const si=(1+Math.sqrt(5))/2,Oi=1/si,Yc=[new O(-si,Oi,0),new O(si,Oi,0),new O(-Oi,0,si),new O(Oi,0,si),new O(0,si,-Oi),new O(0,si,Oi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,Ea),this._renderer.xr.enabled=ga,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Us,format:je,colorSpace:ts,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=t0(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wc),h.toneMapping=zn,h.autoClear=!1;const _=new Ko({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),m=new Jt(new qe,_);let g=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,g=!0):(_.color.copy(Wc),g=!0);for(let u=0;u<6;u++){const R=u%3;R===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):R===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;or(s,R*x,u>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yc[(s-r-1)%Yc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Jt(this._lodPlanes[s],c),d=c.uniforms,_=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*ai-1),g=r/m,p=isFinite(r)?1+Math.floor(h*g):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const u=[];let R=0;for(let y=0;y<ai;++y){const C=y/g,M=Math.exp(-C*C/2);u.push(M),y===0?R+=M:y<p&&(R+=2*M)}for(let y=0;y<u.length;y++)u[y]=u[y]/R;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const E=this._sizeLods[s],P=3*E*(s>x-ki?s-x+ki:0),w=4*(this._cubeSize-E);or(e,P,w,3*E,2*E),l.setRenderTarget(e),l.render(f,_a)}}function Qp(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+Vc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ki?l=Vc[a-i+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,m=6,g=3,p=2,u=1,R=new Float32Array(g*m*_),x=new Float32Array(p*m*_),E=new Float32Array(u*m*_);for(let w=0;w<_;w++){const y=w%3*2/3-1,C=w>2?0:-1,M=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];R.set(M,g*m*w),x.set(d,p*m*w);const S=[w,w,w,w,w,w];E.set(S,u*m*w)}const P=new ze;P.setAttribute("position",new on(R,g)),P.setAttribute("uv",new on(x,p)),P.setAttribute("faceIndex",new on(E,u)),t.push(P),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){const n=new fi(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function t0(i,t,e){const n=new Float32Array(ai),s=new O(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Xc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function qc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function e0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===ja,h=l===Ki||l===$i;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Kc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const _=o.image;return c&&_&&_.height>0||h&&_&&s(_)?(e===null&&(e=new Kc(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function n0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const _=r.get(d);_&&(t.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const m in _){const g=_[m];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,m=f.attributes.position;let g=0;if(_!==null){const R=_.array;g=_.version;for(let x=0,E=R.length;x<E;x+=3){const P=R[x+0],w=R[x+1],y=R[x+2];d.push(P,w,w,y,y,P)}}else if(m!==void 0){const R=m.array;g=m.version;for(let x=0,E=R.length/3-1;x<E;x+=3){const P=x+0,w=x+1,y=x+2;d.push(P,w,w,y,y,P)}}else return;const p=new(Oh(d)?Vh:zh)(d,1);p.version=g;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function s0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,_){i.drawElements(n,_,r,d*a),e.update(_,n,1)}function c(d,_,m){m!==0&&(i.drawElementsInstanced(n,_,r,d*a,m),e.update(_,n,m))}function h(d,_,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,d,0,m);let p=0;for(let u=0;u<m;u++)p+=_[u];e.update(p,n,1)}function f(d,_,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,_[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(n,_,0,r,d,0,g,0,m);let u=0;for(let R=0;R<m;R++)u+=_[R]*g[R];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function r0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t,e){const n=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var _=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),p===!0&&(E=3);let P=o.attributes.position.count*E,w=1;P>t.maxTextureSize&&(w=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const y=new Float32Array(P*w*4*f),C=new Bh(y,P,w,f);C.type=Rn,C.needsUpdate=!0;const M=E*4;for(let b=0;b<f;b++){const N=u[b],F=R[b],H=x[b],z=P*w*4*b;for(let V=0;V<N.count;V++){const Z=V*M;m===!0&&(s.fromBufferAttribute(N,V),y[z+Z+0]=s.x,y[z+Z+1]=s.y,y[z+Z+2]=s.z,y[z+Z+3]=0),g===!0&&(s.fromBufferAttribute(F,V),y[z+Z+4]=s.x,y[z+Z+5]=s.y,y[z+Z+6]=s.z,y[z+Z+7]=0),p===!0&&(s.fromBufferAttribute(H,V),y[z+Z+8]=s.x,y[z+Z+9]=s.y,y[z+Z+10]=s.z,y[z+Z+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new Kt(P,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function o0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class qh extends Ce{constructor(t,e,n,s,r,a,o,l,c,h=Hi){if(h!==Hi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=ui),n===void 0&&h===qi&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Ce,Zc=new qh(1,1),jh=new Bh,Jh=new Ku,Qh=new Kh,jc=[],Jc=[],Qc=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),_e(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),_e(e,n)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(fe(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),_e(e,n)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function A0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=Fh,r=Zc):r=Zh,e.setTexture2D(t||r,s)}function R0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qh,s)}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function w0(i){switch(i){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return d0;case 35674:return u0;case 35675:return f0;case 35676:return _0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return E0;case 35669:case 35673:return g0;case 5125:return S0;case 36294:return x0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return T0}}function b0(i,t){i.uniform1fv(this.addr,t)}function C0(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function P0(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function U0(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function I0(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D0(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L0(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function F0(i,t){i.uniform1iv(this.addr,t)}function O0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function B0(i,t){i.uniform4iv(this.addr,t)}function k0(i,t){i.uniform1uiv(this.addr,t)}function G0(i,t){i.uniform2uiv(this.addr,t)}function H0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function V0(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zh,r[a])}function W0(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function Y0(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qh,r[a])}function K0(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jh,r[a])}function $0(i){switch(i){case 5126:return b0;case 35664:return C0;case 35665:return P0;case 35666:return U0;case 35674:return I0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return N0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return G0;case 36295:return H0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function nl(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),a=Sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nl(e,c===void 0?new X0(o,i,t):new q0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Z0(o),nl(e,f)),e=f}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);j0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const J0=37297;let Q0=0;function tm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const sl=new Pt;function em(i){zt._getMatrix(sl,zt.workingColorSpace,i);const t=`mat3( ${sl.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tm(i.getShaderSource(t),a)}else return s}function nm(i,t){const e=em(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function im(i,t){let e;switch(t){case xu:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="Cineon";break;case Mh:e="ACESFilmic";break;case Ru:e="AgX";break;case yu:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new O;function sm(){zt.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function om(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(cm,hm)}const lm=new Map;function hm(i,t){let e=It[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(i){return i.replace(dm,um)}function um(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case $i:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function Em(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fm(e),c=_m(e),h=pm(e),f=mm(e),d=Em(e),_=rm(e),m=am(r),g=s.createProgram();let p,u,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ms).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ms).join(`
`),u.length>0&&(u+=`
`)):(p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),u=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?It.tonemapping_pars_fragment:"",e.toneMapping!==zn?im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=bo(a),a=al(a,e),a=ol(a,e),o=bo(o),o=al(o,e),o=ol(o,e),a=cl(a),o=cl(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=R+p+a,E=R+u+o,P=il(s,s.VERTEX_SHADER,x),w=il(s,s.FRAGMENT_SHADER,E);s.attachShader(g,P),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function y(b){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(w).trim();let z=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,w);else{const Z=rl(s,P,"vertex"),W=rl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+Z+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||H==="")&&(V=!1);V&&(b.diagnostics={runnable:z,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:u}})}s.deleteShader(P),s.deleteShader(w),C=new Ar(s,g),M=om(s,g)}let C;this.getUniforms=function(){return C===void 0&&y(this),C};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,J0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=w,this}let Sm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vm(t),e.set(t,n)),n}}class vm{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Mm(i,t,e,n,s,r,a){const o=new Gh,l=new xm,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let _=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,b,N,F){const H=N.fog,z=F.geometry,V=M.isMeshStandardMaterial?N.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),W=Z&&Z.mapping===Ir?Z.image.height:null,it=m[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Et=ht!==void 0?ht.length:0;let Lt=0;z.morphAttributes.position!==void 0&&(Lt=1),z.morphAttributes.normal!==void 0&&(Lt=2),z.morphAttributes.color!==void 0&&(Lt=3);let jt,$,tt,gt;if(it){const qt=sn[it];jt=qt.vertexShader,$=qt.fragmentShader}else jt=M.vertexShader,$=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),gt=l.getFragmentShaderID(M);const rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),wt=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,ae=!!M.map,Gt=!!M.matcap,he=!!Z,L=!!M.aoMap,Fe=!!M.lightMap,Nt=!!M.bumpMap,Bt=!!M.normalMap,Mt=!!M.displacementMap,ee=!!M.emissiveMap,vt=!!M.metalnessMap,T=!!M.roughnessMap,v=M.anisotropy>0,B=M.clearcoat>0,X=M.dispersion>0,j=M.iridescence>0,K=M.sheen>0,St=M.transmission>0,at=v&&!!M.anisotropyMap,dt=B&&!!M.clearcoatMap,Ht=B&&!!M.clearcoatNormalMap,J=B&&!!M.clearcoatRoughnessMap,ut=j&&!!M.iridescenceMap,At=j&&!!M.iridescenceThicknessMap,yt=K&&!!M.sheenColorMap,ft=K&&!!M.sheenRoughnessMap,kt=!!M.specularMap,Ut=!!M.specularColorMap,Qt=!!M.specularIntensityMap,U=St&&!!M.transmissionMap,st=St&&!!M.thicknessMap,Y=!!M.gradientMap,q=!!M.alphaMap,lt=M.alphaTest>0,ot=!!M.alphaHash,bt=!!M.extensions;let ce=zn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Se={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:$,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:wt,instancingColor:wt&&F.instanceColor!==null,instancingMorph:wt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ts,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Gt,envMap:he,envMapMode:he&&Z.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Fe,bumpMap:Nt,normalMap:Bt,displacementMap:d&&Mt,emissiveMap:ee,normalMapObjectSpace:Bt&&M.normalMapType===Cu,normalMapTangentSpace:Bt&&M.normalMapType===Lh,metalnessMap:vt,roughnessMap:T,anisotropy:v,anisotropyMap:at,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:J,dispersion:X,iridescence:j,iridescenceMap:ut,iridescenceThicknessMap:At,sheen:K,sheenColorMap:yt,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Ut,specularIntensityMap:Qt,transmission:St,transmissionMap:U,thicknessMap:st,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Gi&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:lt,alphaHash:ot,combine:M.combine,mapUv:ae&&g(M.map.channel),aoMapUv:L&&g(M.aoMap.channel),lightMapUv:Fe&&g(M.lightMap.channel),bumpMapUv:Nt&&g(M.bumpMap.channel),normalMapUv:Bt&&g(M.normalMap.channel),displacementMapUv:Mt&&g(M.displacementMap.channel),emissiveMapUv:ee&&g(M.emissiveMap.channel),metalnessMapUv:vt&&g(M.metalnessMap.channel),roughnessMapUv:T&&g(M.roughnessMap.channel),anisotropyMapUv:at&&g(M.anisotropyMap.channel),clearcoatMapUv:dt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(M.sheenRoughnessMap.channel),specularMapUv:kt&&g(M.specularMap.channel),specularColorMapUv:Ut&&g(M.specularColorMap.channel),specularIntensityMapUv:Qt&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:st&&g(M.thicknessMap.channel),alphaMapUv:q&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Bt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ae||q),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const b in M.defines)S.push(b),S.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(R(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function R(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const S=m[M.type];let b;if(S){const N=sn[S];b=rf.clone(N.uniforms)}else b=M.uniforms;return b}function P(M,S){let b;for(let N=0,F=h.length;N<F;N++){const H=h[N];if(H.cacheKey===S){b=H,++b.usedTimes;break}}return b===void 0&&(b=new gm(i,S,M,r),h.push(b)),b}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function y(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:y,programs:h,dispose:C}}function Am(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,_,m,g,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:_,groupOrder:m,renderOrder:f.renderOrder,z:g,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=_,u.groupOrder=m,u.renderOrder=f.renderOrder,u.z=g,u.group=p),t++,u}function o(f,d,_,m,g,p){const u=a(f,d,_,m,g,p);_.transmission>0?n.push(u):_.transparent===!0?s.push(u):e.push(u)}function l(f,d,_,m,g,p){const u=a(f,d,_,m,g,p);_.transmission>0?n.unshift(u):_.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||Rm),n.length>1&&n.sort(d||hl),s.length>1&&s.sort(d||hl)}function h(){for(let f=t,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ym(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new dl,i.set(n,[a])):s>=r.length?(a=new dl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ot};break;case"SpotLight":e={position:new O,direction:new O,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bm=0;function Cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pm(i){const t=new Tm,e=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new oe,a=new oe;function o(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let _=0,m=0,g=0,p=0,u=0,R=0,x=0,E=0,P=0,w=0,y=0;c.sort(Cm);for(let M=0,S=c.length;M<S;M++){const b=c[M],N=b.color,F=b.intensity,H=b.distance,z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*F,f+=N.g*F,d+=N.b*F;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],F);y++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,W=e.get(b);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[_]=W,n.directionalShadowMap[_]=z,n.directionalShadowMatrix[_]=b.shadow.matrix,R++}n.directional[_]=V,_++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[g]=V;const Z=b.shadow;if(b.map&&(n.spotLightMap[P]=b.map,P++,Z.updateMatrices(b),b.castShadow&&w++),n.spotLightMatrix[g]=Z.matrix,b.castShadow){const W=e.get(b);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=z,E++}g++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=V,p++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const Z=b.shadow,W=e.get(b);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=b.shadow.matrix,x++}n.point[m]=V,m++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(F),V.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[u]=V,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==R||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==P||C.numLightProbes!==y)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,C.directionalLength=_,C.pointLength=m,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=R,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=P,C.numLightProbes=y,n.version=bm++)}function l(c,h){let f=0,d=0,_=0,m=0,g=0;const p=h.matrixWorldInverse;for(let u=0,R=c.length;u<R;u++){const x=c[u];if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(x.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ul(i){const t=new Pm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Um(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ul(i),t.set(s,[o])):r>=a.length?(o=new ul(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Im extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Om(i,t,e){let n=new $o;const s=new Kt,r=new Kt,a=new le,o=new Im({depthPacking:bu}),l=new Dm,c={},h=e.maxTextureSize,f={[Kn]:be,[be]:Kn,[Mn]:Mn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Lm,fragmentShader:Fm}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const m=new ze;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let u=this.type;this.render=function(w,y,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Hn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=u!==xn&&this.type===xn,H=u===xn&&this.type!==xn;for(let z=0,V=w.length;z<V;z++){const Z=w[z],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||F===!0||H===!0){const Et=this.type!==xn?{minFilter:Je,magFilter:Je}:{};W.map!==null&&W.map.dispose(),W.map=new fi(s.x,s.y,Et),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ht=W.getViewportCount();for(let Et=0;Et<ht;Et++){const Lt=W.getViewport(Et);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(a),W.updateMatrices(Z,Et),n=W.getFrustum(),E(y,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===xn&&R(W,C),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,b)};function R(w,y){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,C,d,g,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,C,_,g,null)}function x(w,y,C,M){let S=null;const b=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const N=S.uuid,F=y.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let z=H[F];z===void 0&&(z=S.clone(),H[F]=z,y.addEventListener("dispose",P)),S=z}if(S.visible=y.visible,S.wireframe=y.wireframe,M===xn?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:f[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=C}return S}function E(w,y,C,M,S){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),H=w.material;if(Array.isArray(H)){const z=F.groups;for(let V=0,Z=z.length;V<Z;V++){const W=z[V],it=H[W.materialIndex];if(it&&it.visible){const ht=x(w,it,M,S);w.onBeforeShadow(i,w,y,C,F,ht,W),i.renderBufferDirect(C,null,F,ht,w,W),w.onAfterShadow(i,w,y,C,F,ht,W)}}}else if(H.visible){const z=x(w,H,M,S);w.onBeforeShadow(i,w,y,C,F,z,null),i.renderBufferDirect(C,null,F,z,w,null),w.onAfterShadow(i,w,y,C,F,z,null)}}const N=w.children;for(let F=0,H=N.length;F<H;F++)E(N[F],y,C,M,S)}function P(w){w.target.removeEventListener("dispose",P);for(const C in c){const M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Nm={[Va]:Wa,[Ya]:Xa,[Ka]:qa,[Yi]:$a,[Wa]:Va,[Xa]:Ya,[qa]:Ka,[$a]:Yi};function Bm(i,t){function e(){let U=!1;const st=new le;let Y=null;const q=new le(0,0,0,0);return{setMask:function(lt){Y!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),Y=lt)},setLocked:function(lt){U=lt},setClear:function(lt,ot,bt,ce,Se){Se===!0&&(lt*=ce,ot*=ce,bt*=ce),st.set(lt,ot,bt,ce),q.equals(st)===!1&&(i.clearColor(lt,ot,bt,ce),q.copy(st))},reset:function(){U=!1,Y=null,q.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,Y=null,q=null,lt=null;return{setReversed:function(ot){if(st!==ot){const bt=t.get("EXT_clip_control");st?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=lt;lt=null,this.setClear(ce)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!U&&(i.depthMask(ot),Y=ot)},setFunc:function(ot){if(st&&(ot=Nm[ot]),q!==ot){switch(ot){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=ot}},setLocked:function(ot){U=ot},setClear:function(ot){lt!==ot&&(st&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){U=!1,Y=null,q=null,lt=null,st=!1}}}function s(){let U=!1,st=null,Y=null,q=null,lt=null,ot=null,bt=null,ce=null,Se=null;return{setTest:function(qt){U||(qt?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(qt){st!==qt&&!U&&(i.stencilMask(qt),st=qt)},setFunc:function(qt,Ve,un){(Y!==qt||q!==Ve||lt!==un)&&(i.stencilFunc(qt,Ve,un),Y=qt,q=Ve,lt=un)},setOp:function(qt,Ve,un){(ot!==qt||bt!==Ve||ce!==un)&&(i.stencilOp(qt,Ve,un),ot=qt,bt=Ve,ce=un)},setLocked:function(qt){U=qt},setClear:function(qt){Se!==qt&&(i.clearStencil(qt),Se=qt)},reset:function(){U=!1,st=null,Y=null,q=null,lt=null,ot=null,bt=null,ce=null,Se=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,_=[],m=null,g=!1,p=null,u=null,R=null,x=null,E=null,P=null,w=null,y=new Ot(0,0,0),C=0,M=!1,S=null,b=null,N=null,F=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let it=null,ht={};const Et=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),jt=new le().fromArray(Et),$=new le().fromArray(Lt);function tt(U,st,Y,q){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Y;bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(st+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Yi),Nt(!1),Bt(mc),rt(i.CULL_FACE),L(Hn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Rt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function wt(U,st){return f[U]!==st?(i.bindFramebuffer(U,st),f[U]=st,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(U,st){let Y=_,q=!1;if(U){Y=d.get(st),Y===void 0&&(Y=[],d.set(st,Y));const lt=U.textures;if(Y.length!==lt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,bt=lt.length;ot<bt;ot++)Y[ot]=i.COLOR_ATTACHMENT0+ot;Y.length=lt.length,q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,q=!0);q&&i.drawBuffers(Y)}function ae(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const Gt={[ri]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};Gt[iu]=i.MIN,Gt[su]=i.MAX;const he={[ru]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[lu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,st,Y,q,lt,ot,bt,ce,Se,qt){if(U===Hn){g===!0&&(Rt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),U!==tu){if(U!==p||qt!==M){if((u!==ri||E!==ri)&&(i.blendEquation(i.FUNC_ADD),u=ri,E=ri),qt)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,x=null,P=null,w=null,y.set(0,0,0),C=0,p=U,M=qt}return}lt=lt||st,ot=ot||Y,bt=bt||q,(st!==u||lt!==E)&&(i.blendEquationSeparate(Gt[st],Gt[lt]),u=st,E=lt),(Y!==R||q!==x||ot!==P||bt!==w)&&(i.blendFuncSeparate(he[Y],he[q],he[ot],he[bt]),R=Y,x=q,P=ot,w=bt),(ce.equals(y)===!1||Se!==C)&&(i.blendColor(ce.r,ce.g,ce.b,Se),y.copy(ce),C=Se),p=U,M=!1}function Fe(U,st){U.side===Mn?Rt(i.CULL_FACE):rt(i.CULL_FACE);let Y=U.side===be;st&&(Y=!Y),Nt(Y),U.blending===Gi&&U.transparent===!1?L(Hn):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const q=U.stencilWrite;o.setTest(q),q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Bt(U){U!==Jd?(rt(i.CULL_FACE),U!==b&&(U===mc?i.cullFace(i.BACK):U===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),b=U}function Mt(U){U!==N&&(V&&i.lineWidth(U),N=U)}function ee(U,st,Y){U?(rt(i.POLYGON_OFFSET_FILL),(F!==st||H!==Y)&&(i.polygonOffset(st,Y),F=st,H=Y)):Rt(i.POLYGON_OFFSET_FILL)}function vt(U){U?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+z-1),it!==U&&(i.activeTexture(U),it=U)}function v(U,st,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+z-1:Y=it);let q=ht[Y];q===void 0&&(q={type:void 0,texture:void 0},ht[Y]=q),(q.type!==U||q.texture!==st)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(U,st||gt[U]),q.type=U,q.texture=st)}function B(){const U=ht[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function ft(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function kt(U,st){let Y=c.get(st);Y===void 0&&(Y=new WeakMap,c.set(st,Y));let q=Y.get(U);q===void 0&&(q=i.getUniformBlockIndex(st,U.name),Y.set(U,q))}function Ut(U,st){const q=c.get(st).get(U);l.get(st)!==q&&(i.uniformBlockBinding(st,q,U.__bindingPointIndex),l.set(st,q))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ht={},f={},d=new WeakMap,_=[],m=null,g=!1,p=null,u=null,R=null,x=null,E=null,P=null,w=null,y=new Ot(0,0,0),C=0,M=!1,S=null,b=null,N=null,F=null,H=null,jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:ae,setBlending:L,setMaterial:Fe,setFlipSided:Nt,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:vt,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:X,compressedTexImage3D:j,texImage2D:ut,texImage3D:At,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Ht,texStorage3D:J,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:yt,viewport:ft,reset:Qt}}function fl(i,t,e,n){const s=km(n);switch(e){case wh:return i*t;case Ch:return i*t;case Ph:return i*t*2;case Uh:return i*t/s.components*s.byteLength;case Vo:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case gr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(t,8)/4;case to:case no:return Math.max(i,8)*Math.max(t,8)/2;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mr:case Mo:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dh:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(i){switch(i){case bn:case Rh:return{byteLength:1,components:1};case As:case yh:case Us:return{byteLength:2,components:1};case Ho:case zo:return{byteLength:2,components:4};case ui:case Go:case Rn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return _?new OffscreenCanvas(T,v):Tr("canvas")}function g(T,v,B){let X=1;const j=vt(T);if((j.width>B||j.height>B)&&(X=B/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(X*j.width),St=Math.floor(X*j.height);f===void 0&&(f=m(K,St));const at=v?m(K,St):f;return at.width=K,at.height=St,at.getContext("2d").drawImage(T,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+St+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,v,B,X,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),v===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){const St=j?Dr:zt.getTransfer(X);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=St===Zt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(T,v){let B;return T?v===null||v===ui||v===Xi?B=i.DEPTH24_STENCIL8:v===Rn?B=i.DEPTH32F_STENCIL8:v===As&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Xi?B=i.DEPTH_COMPONENT24:v===Rn?B=i.DEPTH_COMPONENT32F:v===As&&(B=i.DEPTH_COMPONENT16),B}function P(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&h.delete(v)}function y(T){const v=T.target;v.removeEventListener("dispose",y),S(v)}function C(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,X=d.get(B);if(X){const j=X[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(X).length===0&&d.delete(B)}n.remove(T)}function M(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,X=d.get(B);delete X[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let j=0;j<v.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[X][j]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let X=0,j=B.length;X<j;X++){const K=n.get(B[X]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(T)}let b=0;function N(){b=0}function F(){const T=b;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function z(T,v){const B=n.get(T);if(T.isVideoTexture&&Mt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function V(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Z(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function W(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){tt(B,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const it={[Ja]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ht={[Je]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Et={[Pu]:i.NEVER,[Ou]:i.ALWAYS,[Uu]:i.LESS,[Fh]:i.LEQUAL,[Iu]:i.EQUAL,[Fu]:i.GEQUAL,[Du]:i.GREATER,[Lu]:i.NOTEQUAL};function Lt(T,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Yr||v.magFilter===zs||v.magFilter===ci||v.minFilter===an||v.minFilter===Yr||v.minFilter===zs||v.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==zs&&v.minFilter!==ci||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const X=v.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const K=H(v);if(K!==T.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[K].usedTimes++;const St=j[T.__cacheKey];St!==void 0&&(j[T.__cacheKey].usedTimes--,St.usedTimes===0&&M(v)),T.__cacheKey=K,T.__webglTexture=j[K].texture}return B}function $(T,v,B){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const j=jt(T,v),K=v.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+B);const St=n.get(K);if(K.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const at=zt.getPrimaries(zt.workingColorSpace),dt=v.colorSpace===Nn?null:zt.getPrimaries(v.colorSpace),Ht=v.colorSpace===Nn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let J=g(v.image,!1,s.maxTextureSize);J=ee(v,J);const ut=r.convert(v.format,v.colorSpace),At=r.convert(v.type);let yt=x(v.internalFormat,ut,At,v.colorSpace,v.isVideoTexture);Lt(X,v);let ft;const kt=v.mipmaps,Ut=v.isVideoTexture!==!0,Qt=St.__version===void 0||j===!0,U=K.dataReady,st=P(v,J);if(v.isDepthTexture)yt=E(v.format===qi,v.type),Qt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,yt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,ut,At,null));else if(v.isDataTexture)if(kt.length>0){Ut&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,yt,kt[0].width,kt[0].height);for(let Y=0,q=kt.length;Y<q;Y++)ft=kt[Y],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,At,ft.data):e.texImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ut,At,ft.data);v.generateMipmaps=!1}else Ut?(Qt&&e.texStorage2D(i.TEXTURE_2D,st,yt,J.width,J.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,At,J.data)):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,ut,At,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,yt,kt[0].width,kt[0].height,J.depth);for(let Y=0,q=kt.length;Y<q;Y++)if(ft=kt[Y],v.format!==je)if(ut!==null)if(Ut){if(U)if(v.layerUpdates.size>0){const lt=fl(ft.width,ft.height,v.format,v.type);for(const ot of v.layerUpdates){const bt=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ot,ft.width,ft.height,1,ut,bt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,J.depth,ut,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,yt,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,J.depth,ut,At,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,yt,ft.width,ft.height,J.depth,0,ut,At,ft.data)}else{Ut&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,yt,kt[0].width,kt[0].height);for(let Y=0,q=kt.length;Y<q;Y++)ft=kt[Y],v.format!==je?ut!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ft.width,ft.height,ut,At,ft.data):e.texImage2D(i.TEXTURE_2D,Y,yt,ft.width,ft.height,0,ut,At,ft.data)}else if(v.isDataArrayTexture)if(Ut){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,yt,J.width,J.height,J.depth),U)if(v.layerUpdates.size>0){const Y=fl(J.width,J.height,v.format,v.type);for(const q of v.layerUpdates){const lt=J.data.subarray(q*Y/J.data.BYTES_PER_ELEMENT,(q+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,ut,At,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,At,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,J.width,J.height,J.depth,0,ut,At,J.data);else if(v.isData3DTexture)Ut?(Qt&&e.texStorage3D(i.TEXTURE_3D,st,yt,J.width,J.height,J.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,At,J.data)):e.texImage3D(i.TEXTURE_3D,0,yt,J.width,J.height,J.depth,0,ut,At,J.data);else if(v.isFramebufferTexture){if(Qt)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,yt,J.width,J.height);else{let Y=J.width,q=J.height;for(let lt=0;lt<st;lt++)e.texImage2D(i.TEXTURE_2D,lt,yt,Y,q,0,ut,At,null),Y>>=1,q>>=1}}else if(kt.length>0){if(Ut&&Qt){const Y=vt(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,yt,Y.width,Y.height)}for(let Y=0,q=kt.length;Y<q;Y++)ft=kt[Y],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ut,At,ft):e.texImage2D(i.TEXTURE_2D,Y,yt,ut,At,ft);v.generateMipmaps=!1}else if(Ut){if(Qt){const Y=vt(J);e.texStorage2D(i.TEXTURE_2D,st,yt,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,At,J)}else e.texImage2D(i.TEXTURE_2D,0,yt,ut,At,J);p(v)&&u(X),St.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,B){if(v.image.length!==6)return;const X=jt(T,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const K=n.get(j);if(j.version!==K.__version||X===!0){e.activeTexture(i.TEXTURE0+B);const St=zt.getPrimaries(zt.workingColorSpace),at=v.colorSpace===Nn?null:zt.getPrimaries(v.colorSpace),dt=v.colorSpace===Nn||St===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let q=0;q<6;q++)!Ht&&!J?ut[q]=g(v.image[q],!0,s.maxCubemapSize):ut[q]=J?v.image[q].image:v.image[q],ut[q]=ee(v,ut[q]);const At=ut[0],yt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),kt=x(v.internalFormat,yt,ft,v.colorSpace),Ut=v.isVideoTexture!==!0,Qt=K.__version===void 0||X===!0,U=j.dataReady;let st=P(v,At);Lt(i.TEXTURE_CUBE_MAP,v);let Y;if(Ht){Ut&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,At.width,At.height);for(let q=0;q<6;q++){Y=ut[q].mipmaps;for(let lt=0;lt<Y.length;lt++){const ot=Y[lt];v.format!==je?yt!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,0,0,ot.width,ot.height,yt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,0,0,ot.width,ot.height,yt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,kt,ot.width,ot.height,0,yt,ft,ot.data)}}}else{if(Y=v.mipmaps,Ut&&Qt){Y.length>0&&st++;const q=vt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,q.width,q.height)}for(let q=0;q<6;q++)if(J){Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ut[q].width,ut[q].height,yt,ft,ut[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,kt,ut[q].width,ut[q].height,0,yt,ft,ut[q].data);for(let lt=0;lt<Y.length;lt++){const bt=Y[lt].image[q].image;Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,0,0,bt.width,bt.height,yt,ft,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,kt,bt.width,bt.height,0,yt,ft,bt.data)}}else{Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,yt,ft,ut[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,kt,yt,ft,ut[q]);for(let lt=0;lt<Y.length;lt++){const ot=Y[lt];Ut?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,0,0,yt,ft,ot.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,kt,yt,ft,ot.image[q])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),K.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function gt(T,v,B,X,j,K){const St=r.convert(B.format,B.colorSpace),at=r.convert(B.type),dt=x(B.internalFormat,St,at,B.colorSpace),Ht=n.get(v),J=n.get(B);if(J.__renderTarget=v,!Ht.__hasExternalTextures){const ut=Math.max(1,v.width>>K),At=Math.max(1,v.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,dt,ut,At,v.depth,0,St,at,null):e.texImage2D(j,K,dt,ut,At,0,St,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,J.__webglTexture,0,Nt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,J.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,j=X&&X.isDepthTexture?X.type:null,K=E(v.stencilBuffer,j),St=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Nt(v);Bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{const X=v.textures;for(let j=0;j<X.length;j++){const K=X[j],St=r.convert(K.format,K.colorSpace),at=r.convert(K.type),dt=x(K.internalFormat,St,at,K.colorSpace),Ht=Nt(v);B&&Bt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,dt,v.width,v.height):Bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const j=X.__webglTexture,K=Nt(v);if(v.depthTexture.format===Hi)Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===qi)Bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,v,B){const X=n.get(T);v!==void 0&&gt(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&wt(T)}function ae(T){const v=T.texture,B=n.get(T),X=n.get(v);T.addEventListener("dispose",y);const j=T.textures,K=T.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)B.__webglFramebuffer[at][dt]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let at=0,dt=j.length;at<dt;at++){const Ht=n.get(j[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Bt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const dt=j[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Ht=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),ut=x(dt.internalFormat,Ht,J,dt.colorSpace,T.isXRRenderTarget===!0),At=Nt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(B.__webglFramebuffer[at][dt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else gt(B.__webglFramebuffer[at],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,dt=j.length;at<dt;at++){const Ht=j[at],J=n.get(Ht);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Lt(i.TEXTURE_2D,Ht),gt(B.__webglFramebuffer,T,Ht,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Ht)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,X.__webglTexture),Lt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(B.__webglFramebuffer[dt],T,v,i.COLOR_ATTACHMENT0,at,dt);else gt(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,at,0);p(v)&&u(at),e.unbindTexture()}T.depthBuffer&&wt(T)}function Gt(T){const v=T.textures;for(let B=0,X=v.length;B<X;B++){const j=v[B];if(p(j)){const K=R(T),St=n.get(j).__webglTexture;e.bindTexture(K,St),u(K),e.unbindTexture()}}}const he=[],L=[];function Fe(T){if(T.samples>0){if(Bt(T)===!1){const v=T.textures,B=T.width,X=T.height;let j=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,j,i.NEAREST),l===!0&&(he.length=0,L.length=0,he.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Nt(T){return Math.min(s.maxSamples,T.samples)}function Bt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ee(T,v){const B=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ts&&B!==Nn&&(zt.getTransfer(B)===Zt?(X!==je||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Ft,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Bt}function Hm(i,t){function e(n,s=Nn){let r;const a=zt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.BYTE;if(n===yh)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===bh)return i.RGB;if(n===je)return i.RGBA;if(n===Ch)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===gr||n===Sr||n===xr||n===vr)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===_o||n===po||n===mo||n===Eo||n===go||n===So||n===xo||n===vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Mo||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dh||n===Ro||n===yo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class zm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kn extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),_=.02,m=.005;c.inputState.pinching&&d>_+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=_-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ym=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Wm,fragmentShader:Ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends es{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,_=null,m=null;const g=new Km,p=e.getContextAttributes();let u=null,R=null;const x=[],E=[],P=new Kt;let w=null;const y=new ke;y.viewport=new le;const C=new ke;C.viewport=new le;const M=[y,C],S=new zm;let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=x[$];return tt===void 0&&(tt=new xa,x[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=x[$];return tt===void 0&&(tt=new xa,x[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=x[$];return tt===void 0&&(tt=new xa,x[$]=tt),tt.getHandSpace()};function F($){const tt=E.indexOf($.inputSource);if(tt===-1)return;const gt=x[tt];gt!==void 0&&(gt.update($.inputSource,$.frame,c||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let $=0;$<x.length;$++){const tt=E[$];tt!==null&&(E[$]=null,x[$].disconnect(tt))}b=null,N=null,g.reset(),t.setRenderTarget(u),_=null,d=null,f=null,s=null,R=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new fi(_.framebufferWidth,_.framebufferHeight,{format:je,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,gt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?qi:Hi,gt=p.stencil?Xi:ui);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new fi(d.textureWidth,d.textureHeight,{format:je,type:bn,depthTexture:new qh(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let tt=0;tt<$.removed.length;tt++){const gt=$.removed[tt],rt=E.indexOf(gt);rt>=0&&(E[rt]=null,x[rt].disconnect(gt))}for(let tt=0;tt<$.added.length;tt++){const gt=$.added[tt];let rt=E.indexOf(gt);if(rt===-1){for(let wt=0;wt<x.length;wt++)if(wt>=E.length){E.push(gt),rt=wt;break}else if(E[wt]===null){E[wt]=gt,rt=wt;break}if(rt===-1)break}const Rt=x[rt];Rt&&Rt.connect(gt)}}const V=new O,Z=new O;function W($,tt,gt){V.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const rt=V.distanceTo(Z),Rt=tt.projectionMatrix.elements,wt=gt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),ae=Rt[14]/(Rt[10]+1),Gt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],L=(Rt[8]-1)/Rt[0],Fe=(wt[8]+1)/wt[0],Nt=Ft*L,Bt=Ft*Fe,Mt=rt/(-L+Fe),ee=Mt*-L;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=Ft+Mt,T=ae+Mt,v=Nt-ee,B=Bt+(rt-ee),X=Gt*ae/T*vt,j=he*ae/T*vt;$.projectionMatrix.makePerspective(v,B,X,j,vt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,gt=$.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),S.near=C.near=y.near=tt,S.far=C.far=y.far=gt,(b!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,N=S.far),y.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,S.layers.mask=y.layers.mask|C.layers.mask;const rt=$.parent,Rt=S.cameras;it(S,rt);for(let wt=0;wt<Rt.length;wt++)it(Rt[wt],rt);Rt.length===2?W(S,y,C):S.projectionMatrix.copy(y.projectionMatrix),ht($,S,rt)};function ht($,tt,gt){gt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Et=null;function Lt($,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){const gt=h.views;_!==null&&(t.setRenderTargetFramebuffer(R,_.framebuffer),t.setRenderTarget(R));let rt=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let wt=0;wt<gt.length;wt++){const Ft=gt[wt];let ae=null;if(_!==null)ae=_.getViewport(Ft);else{const he=f.getViewSubImage(d,Ft);ae=he.viewport,wt===0&&(t.setRenderTargetTextures(R,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(R))}let Gt=M[wt];Gt===void 0&&(Gt=new ke,Gt.layers.enable(wt),Gt.viewport=new le,M[wt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ae.x,ae.y,ae.width,ae.height),wt===0&&(S.matrix.copy(Gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Gt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const wt=f.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,s.renderState)}}for(let gt=0;gt<x.length;gt++){const rt=E[gt],Rt=x[gt];rt!==null&&Rt!==void 0&&Rt.update(rt,tt,c||a)}Et&&Et($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const jt=new $h;jt.setAnimationLoop(Lt),this.setAnimationLoop=function($){Et=$},this.dispose=function(){}}}const ti=new hn,Xm=new oe;function qm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,R,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&_(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),m(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,R,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===be&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===be&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const R=t.get(u),x=R.envMap,E=R.envMapRotation;x&&(p.envMap.value=x,ti.copy(E),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(ti)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,R,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*R,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function _(p,u,R){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===be&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const R=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,x){const E=x.program;n.uniformBlockBinding(R,E)}function c(R,x){let E=s[R.id];E===void 0&&(m(R),E=h(R),s[R.id]=E,R.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(R,P);const w=t.render.frame;r[R.id]!==w&&(d(R),r[R.id]=w)}function h(R){const x=f();R.__bindingPointIndex=x;const E=i.createBuffer(),P=R.__size,w=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const x=s[R.id],E=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,y=E.length;w<y;w++){const C=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,S=C.length;M<S;M++){const b=C[M];if(_(b,w,M,P)===!0){const N=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let z=0;z<F.length;z++){const V=F[z],Z=g(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+H,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(R,x,E,P){const w=R.value,y=x+"_"+E;if(P[y]===void 0)return typeof w=="number"||typeof w=="boolean"?P[y]=w:P[y]=w.clone(),!0;{const C=P[y];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[y]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(R){const x=R.uniforms;let E=0;const P=16;for(let y=0,C=x.length;y<C;y++){const M=Array.isArray(x[y])?x[y]:[x[y]];for(let S=0,b=M.length;S<b;S++){const N=M[S],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,z=F.length;H<z;H++){const V=F[H],Z=g(V),W=E%P,it=W%Z.boundary,ht=W+it;E+=it,ht!==0&&P-ht<Z.storage&&(E+=P-ht),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=Z.storage}}}const w=E%P;return w>0&&(E+=P-w),R.__size=E,R.__cache={},this}function g(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function p(R){const x=R.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class jm{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const m=new Uint32Array(4),g=new Int32Array(4);let p=null,u=null;const R=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=zn,this.toneMappingExposure=1;const E=this;let P=!1,w=0,y=0,C=null,M=-1,S=null;const b=new le,N=new le;let F=null;const H=new Ot(0);let z=0,V=e.width,Z=e.height,W=1,it=null,ht=null;const Et=new le(0,0,V,Z),Lt=new le(0,0,V,Z);let jt=!1;const $=new $o;let tt=!1,gt=!1;const rt=new oe,Rt=new oe,wt=new O,Ft=new le,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function he(){return C===null?W:1}let L=n;function Fe(A,I){return e.getContext(A,I)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const I="webgl2";if(L=Fe(I,A),L===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Nt,Bt,Mt,ee,vt,T,v,B,X,j,K,St,at,dt,Ht,J,ut,At,yt,ft,kt,Ut,Qt,U;function st(){Nt=new n0(L),Nt.init(),Ut=new Hm(L,Nt),Bt=new Zp(L,Nt,t,Ut),Mt=new Bm(L,Nt),Bt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ee=new r0(L),vt=new Am,T=new Gm(L,Nt,Mt,vt,Bt,Ut,ee),v=new Jp(E),B=new e0(E),X=new uf(L),Qt=new Xp(L,X),j=new i0(L,X,ee,Qt),K=new o0(L,j,X,ee),yt=new a0(L,Bt,T),J=new jp(vt),St=new Mm(E,v,B,Nt,Bt,Qt,J),at=new qm(E,vt),dt=new ym,Ht=new Um(Nt),At=new $p(E,v,B,Mt,K,_,l),ut=new Om(E,K,Bt),U=new Zm(L,ee,Bt,Mt),ft=new qp(L,Nt,ee),kt=new s0(L,Nt,ee),ee.programs=St.programs,E.capabilities=Bt,E.extensions=Nt,E.properties=vt,E.renderLists=dt,E.shadowMap=ut,E.state=Mt,E.info=ee}st();const Y=new $m(E,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(V,Z,!1))},this.getSize=function(A){return A.set(V,Z)},this.setSize=function(A,I,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Z=I,e.width=Math.floor(A*W),e.height=Math.floor(I*W),k===!0&&(e.style.width=A+"px",e.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(A,I,k){V=A,Z=I,W=k,e.width=Math.floor(A*k),e.height=Math.floor(I*k),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,I,k,G){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,I,k,G),Mt.viewport(b.copy(Et).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Lt)},this.setScissor=function(A,I,k,G){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,I,k,G),Mt.scissor(N.copy(Lt).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(A){Mt.setScissorTest(jt=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(A=!0,I=!0,k=!0){let G=0;if(A){let D=!1;if(C!==null){const Q=C.texture.format;D=Q===Yo||Q===Wo||Q===Vo}if(D){const Q=C.texture.type,ct=Q===bn||Q===ui||Q===As||Q===Xi||Q===Ho||Q===zo,_t=At.getClearColor(),pt=At.getClearAlpha(),Tt=_t.r,Ct=_t.g,mt=_t.b;ct?(m[0]=Tt,m[1]=Ct,m[2]=mt,m[3]=pt,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Tt,g[1]=Ct,g[2]=mt,g[3]=pt,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT),k&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Ht.dispose(),vt.dispose(),v.dispose(),B.dispose(),K.dispose(),Qt.dispose(),U.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",cc),Y.removeEventListener("sessionend",lc),Xn.stop()};function q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=ee.autoReset,I=ut.enabled,k=ut.autoUpdate,G=ut.needsUpdate,D=ut.type;st(),ee.autoReset=A,ut.enabled=I,ut.autoUpdate=k,ut.needsUpdate=G,ut.type=D}function ot(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const I=A.target;I.removeEventListener("dispose",bt),ce(I)}function ce(A){Se(A),vt.remove(A)}function Se(A){const I=vt.get(A).programs;I!==void 0&&(I.forEach(function(k){St.releaseProgram(k)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,k,G,D,Q){I===null&&(I=ae);const ct=D.isMesh&&D.matrixWorld.determinant()<0,_t=$d(A,I,k,G,D);Mt.setMaterial(G,ct);let pt=k.index,Tt=1;if(G.wireframe===!0){if(pt=j.getWireframeAttribute(k),pt===void 0)return;Tt=2}const Ct=k.drawRange,mt=k.attributes.position;let Vt=Ct.start*Tt,te=(Ct.start+Ct.count)*Tt;Q!==null&&(Vt=Math.max(Vt,Q.start*Tt),te=Math.min(te,(Q.start+Q.count)*Tt)),pt!==null?(Vt=Math.max(Vt,0),te=Math.min(te,pt.count)):mt!=null&&(Vt=Math.max(Vt,0),te=Math.min(te,mt.count));const ne=te-Vt;if(ne<0||ne===1/0)return;Qt.setup(D,G,_t,k,pt);let Re,$t=ft;if(pt!==null&&(Re=X.get(pt),$t=kt,$t.setIndex(Re)),D.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*he()),$t.setMode(L.LINES)):$t.setMode(L.TRIANGLES);else if(D.isLine){let xt=G.linewidth;xt===void 0&&(xt=1),Mt.setLineWidth(xt*he()),D.isLineSegments?$t.setMode(L.LINES):D.isLineLoop?$t.setMode(L.LINE_LOOP):$t.setMode(L.LINE_STRIP)}else D.isPoints?$t.setMode(L.POINTS):D.isSprite&&$t.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,fn=D._multiDrawCounts,Xt=D._multiDrawCount,We=pt?X.get(pt).bytesPerElement:1,Mi=vt.get(G).currentProgram.getUniforms();for(let Pe=0;Pe<Xt;Pe++)Mi.setValue(L,"_gl_DrawID",Pe),$t.render(xt[Pe]/We,fn[Pe])}else if(D.isInstancedMesh)$t.renderInstances(Vt,ne,D.count);else if(k.isInstancedBufferGeometry){const xt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fn=Math.min(k.instanceCount,xt);$t.renderInstances(Vt,ne,fn)}else $t.render(Vt,ne)};function qt(A,I,k){A.transparent===!0&&A.side===Mn&&A.forceSinglePass===!1?(A.side=be,A.needsUpdate=!0,Hs(A,I,k),A.side=Kn,A.needsUpdate=!0,Hs(A,I,k),A.side=Mn):Hs(A,I,k)}this.compile=function(A,I,k=null){k===null&&(k=A),u=Ht.get(k),u.init(I),x.push(u),k.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),A!==k&&A.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const G=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const _t=Q[ct];qt(_t,k,D),G.add(_t)}else qt(Q,k,D),G.add(Q)}),x.pop(),u=null,G},this.compileAsync=function(A,I,k=null){const G=this.compile(A,I,k);return new Promise(D=>{function Q(){if(G.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&G.delete(ct)}),G.size===0){D(A);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ve=null;function un(A){Ve&&Ve(A)}function cc(){Xn.stop()}function lc(){Xn.start()}const Xn=new $h;Xn.setAnimationLoop(un),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Ve=A,Y.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},Y.addEventListener("sessionstart",cc),Y.addEventListener("sessionend",lc),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,I,C),u=Ht.get(A,x.length),u.init(I),x.push(u),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Rt),gt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,gt),p=dt.get(A,R.length),p.init(),R.push(p),Y.enabled===!0&&Y.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&Wr(Q,I,-1/0,E.sortObjects)}Wr(A,I,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(it,ht),Gt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Gt&&At.addToRenderList(p,A),this.info.render.frame++,tt===!0&&J.beginShadows();const k=u.state.shadowsArray;ut.render(k,A,I),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,D=p.transmissive;if(u.setupLights(),I.isArrayCamera){const Q=I.cameras;if(D.length>0)for(let ct=0,_t=Q.length;ct<_t;ct++){const pt=Q[ct];dc(G,D,A,pt)}Gt&&At.render(A);for(let ct=0,_t=Q.length;ct<_t;ct++){const pt=Q[ct];hc(p,A,pt,pt.viewport)}}else D.length>0&&dc(G,D,A,I),Gt&&At.render(A),hc(p,A,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(E,A,I),Qt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],tt===!0&&J.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Wr(A,I,k,G){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){G&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const ct=K.update(A),_t=A.material;_t.visible&&p.push(A,ct,_t,k,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const ct=K.update(A),_t=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(_t)){const pt=ct.groups;for(let Tt=0,Ct=pt.length;Tt<Ct;Tt++){const mt=pt[Tt],Vt=_t[mt.materialIndex];Vt&&Vt.visible&&p.push(A,ct,Vt,k,Ft.z,mt)}}else _t.visible&&p.push(A,ct,_t,k,Ft.z,null)}}const Q=A.children;for(let ct=0,_t=Q.length;ct<_t;ct++)Wr(Q[ct],I,k,G)}function hc(A,I,k,G){const D=A.opaque,Q=A.transmissive,ct=A.transparent;u.setupLightsView(k),tt===!0&&J.setGlobalState(E.clippingPlanes,k),G&&Mt.viewport(b.copy(G)),D.length>0&&Gs(D,I,k),Q.length>0&&Gs(Q,I,k),ct.length>0&&Gs(ct,I,k),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function dc(A,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new fi(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Us:bn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Q=u.state.transmissionRenderTarget[G.id],ct=G.viewport||b;Q.setSize(ct.z,ct.w);const _t=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(H),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear(),Gt&&At.render(k);const pt=E.toneMapping;E.toneMapping=zn;const Tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),tt===!0&&J.setGlobalState(E.clippingPlanes,G),Gs(A,k,G),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let mt=0,Vt=I.length;mt<Vt;mt++){const te=I[mt],ne=te.object,Re=te.geometry,$t=te.material,xt=te.group;if($t.side===Mn&&ne.layers.test(G.layers)){const fn=$t.side;$t.side=be,$t.needsUpdate=!0,uc(ne,k,G,Re,$t,xt),$t.side=fn,$t.needsUpdate=!0,Ct=!0}}Ct===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}E.setRenderTarget(_t),E.setClearColor(H,z),Tt!==void 0&&(G.viewport=Tt),E.toneMapping=pt}function Gs(A,I,k){const G=I.isScene===!0?I.overrideMaterial:null;for(let D=0,Q=A.length;D<Q;D++){const ct=A[D],_t=ct.object,pt=ct.geometry,Tt=G===null?ct.material:G,Ct=ct.group;_t.layers.test(k.layers)&&uc(_t,I,k,pt,Tt,Ct)}}function uc(A,I,k,G,D,Q){A.onBeforeRender(E,I,k,G,D,Q),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(E,I,k,G,A,Q),D.transparent===!0&&D.side===Mn&&D.forceSinglePass===!1?(D.side=be,D.needsUpdate=!0,E.renderBufferDirect(k,I,G,D,A,Q),D.side=Kn,D.needsUpdate=!0,E.renderBufferDirect(k,I,G,D,A,Q),D.side=Mn):E.renderBufferDirect(k,I,G,D,A,Q),A.onAfterRender(E,I,k,G,D,Q)}function Hs(A,I,k){I.isScene!==!0&&(I=ae);const G=vt.get(A),D=u.state.lights,Q=u.state.shadowsArray,ct=D.state.version,_t=St.getParameters(A,D.state,Q,I,k),pt=St.getProgramCacheKey(_t);let Tt=G.programs;G.environment=A.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(A.isMeshStandardMaterial?B:v).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Tt===void 0&&(A.addEventListener("dispose",bt),Tt=new Map,G.programs=Tt);let Ct=Tt.get(pt);if(Ct!==void 0){if(G.currentProgram===Ct&&G.lightsStateVersion===ct)return _c(A,_t),Ct}else _t.uniforms=St.getUniforms(A),A.onBeforeCompile(_t,E),Ct=St.acquireProgram(_t,pt),Tt.set(pt,Ct),G.uniforms=_t.uniforms;const mt=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(mt.clippingPlanes=J.uniform),_c(A,_t),G.needsLights=qd(A),G.lightsStateVersion=ct,G.needsLights&&(mt.ambientLightColor.value=D.state.ambient,mt.lightProbe.value=D.state.probe,mt.directionalLights.value=D.state.directional,mt.directionalLightShadows.value=D.state.directionalShadow,mt.spotLights.value=D.state.spot,mt.spotLightShadows.value=D.state.spotShadow,mt.rectAreaLights.value=D.state.rectArea,mt.ltc_1.value=D.state.rectAreaLTC1,mt.ltc_2.value=D.state.rectAreaLTC2,mt.pointLights.value=D.state.point,mt.pointLightShadows.value=D.state.pointShadow,mt.hemisphereLights.value=D.state.hemi,mt.directionalShadowMap.value=D.state.directionalShadowMap,mt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,mt.spotShadowMap.value=D.state.spotShadowMap,mt.spotLightMatrix.value=D.state.spotLightMatrix,mt.spotLightMap.value=D.state.spotLightMap,mt.pointShadowMap.value=D.state.pointShadowMap,mt.pointShadowMatrix.value=D.state.pointShadowMatrix),G.currentProgram=Ct,G.uniformsList=null,Ct}function fc(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=Ar.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function _c(A,I){const k=vt.get(A);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function $d(A,I,k,G,D){I.isScene!==!0&&(I=ae),T.resetTextureUnits();const Q=I.fog,ct=G.isMeshStandardMaterial?I.environment:null,_t=C===null?E.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ts,pt=(G.isMeshStandardMaterial?B:v).get(G.envMap||ct),Tt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ct=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),mt=!!k.morphAttributes.position,Vt=!!k.morphAttributes.normal,te=!!k.morphAttributes.color;let ne=zn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ne=E.toneMapping);const Re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$t=Re!==void 0?Re.length:0,xt=vt.get(G),fn=u.state.lights;if(tt===!0&&(gt===!0||A!==S)){const Oe=A===S&&G.id===M;J.setState(G,A,Oe)}let Xt=!1;G.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==fn.state.version||xt.outputColorSpace!==_t||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==pt||G.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Tt||xt.vertexTangents!==Ct||xt.morphTargets!==mt||xt.morphNormals!==Vt||xt.morphColors!==te||xt.toneMapping!==ne||xt.morphTargetsCount!==$t)&&(Xt=!0):(Xt=!0,xt.__version=G.version);let We=xt.currentProgram;Xt===!0&&(We=Hs(G,I,D));let Mi=!1,Pe=!1,as=!1;const ie=We.getUniforms(),tn=xt.uniforms;if(Mt.useProgram(We.program)&&(Mi=!0,Pe=!0,as=!0),G.id!==M&&(M=G.id,Pe=!0),Mi||S!==A){Mt.buffers.depth.getReversed()?(rt.copy(A.projectionMatrix),Gu(rt),Hu(rt),ie.setValue(L,"projectionMatrix",rt)):ie.setValue(L,"projectionMatrix",A.projectionMatrix),ie.setValue(L,"viewMatrix",A.matrixWorldInverse);const Cn=ie.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,wt.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&ie.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Pe=!0,as=!0)}if(D.isSkinnedMesh){ie.setOptional(L,D,"bindMatrix"),ie.setOptional(L,D,"bindMatrixInverse");const Oe=D.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ie.setValue(L,"boneTexture",Oe.boneTexture,T))}D.isBatchedMesh&&(ie.setOptional(L,D,"batchingTexture"),ie.setValue(L,"batchingTexture",D._matricesTexture,T),ie.setOptional(L,D,"batchingIdTexture"),ie.setValue(L,"batchingIdTexture",D._indirectTexture,T),ie.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&ie.setValue(L,"batchingColorTexture",D._colorsTexture,T));const os=k.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&yt.update(D,k,We),(Pe||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,ie.setValue(L,"receiveShadow",D.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=pt,tn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(tn.envMapIntensity.value=I.environmentIntensity),Pe&&(ie.setValue(L,"toneMappingExposure",E.toneMappingExposure),xt.needsLights&&Xd(tn,as),Q&&G.fog===!0&&at.refreshFogUniforms(tn,Q),at.refreshMaterialUniforms(tn,G,W,Z,u.state.transmissionRenderTarget[A.id]),Ar.upload(L,fc(xt),tn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(L,fc(xt),tn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(L,"center",D.center),ie.setValue(L,"modelViewMatrix",D.modelViewMatrix),ie.setValue(L,"normalMatrix",D.normalMatrix),ie.setValue(L,"modelMatrix",D.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Oe=G.uniformsGroups;for(let Cn=0,Pn=Oe.length;Cn<Pn;Cn++){const pc=Oe[Cn];U.update(pc,We),U.bind(pc,We)}}return We}function Xd(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function qd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,I,k){vt.get(A.texture).__webglTexture=I,vt.get(A.depthTexture).__webglTexture=k;const G=vt.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const k=vt.get(A);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,k=0){C=A,w=I,y=k;let G=!0,D=null,Q=!1,ct=!1;if(A){const pt=vt.get(A);if(pt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(pt.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(pt.__hasExternalTextures)T.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const mt=A.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&vt.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Tt=A.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ct=!0);const Ct=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?D=Ct[I][k]:D=Ct[I],Q=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?D=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[k]:D=Ct,b.copy(A.viewport),N.copy(A.scissor),F=A.scissorTest}else b.copy(Et).multiplyScalar(W).floor(),N.copy(Lt).multiplyScalar(W).floor(),F=jt;if(Mt.bindFramebuffer(L.FRAMEBUFFER,D)&&G&&Mt.drawBuffers(A,D),Mt.viewport(b),Mt.scissor(N),Mt.setScissorTest(F),Q){const pt=vt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,k)}else if(ct){const pt=vt.get(A.texture),Tt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,k||0,Tt)}M=-1},this.readRenderTargetPixels=function(A,I,k,G,D,Q,ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const pt=A.texture,Tt=pt.format,Ct=pt.type;if(!Bt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-G&&k>=0&&k<=A.height-D&&L.readPixels(I,k,G,D,Ut.convert(Tt),Ut.convert(Ct),Q)}finally{const pt=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(A,I,k,G,D,Q,ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const pt=A.texture,Tt=pt.format,Ct=pt.type;if(!Bt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=A.width-G&&k>=0&&k<=A.height-D){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);const mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),L.readPixels(I,k,G,D,Ut.convert(Tt),Ut.convert(Ct),0);const Vt=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Vt);const te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ku(L,te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(mt),L.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,I=null,k=0){A.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-k),D=Math.floor(A.image.width*G),Q=Math.floor(A.image.height*G),ct=I!==null?I.x:0,_t=I!==null?I.y:0;T.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ct,_t,D,Q),Mt.unbindTexture()},this.copyTextureToTexture=function(A,I,k=null,G=null,D=0){A.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],I=arguments[2],D=arguments[3]||0,k=null);let Q,ct,_t,pt,Tt,Ct,mt,Vt,te;const ne=A.isCompressedTexture?A.mipmaps[D]:A.image;k!==null?(Q=k.max.x-k.min.x,ct=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,pt=k.min.x,Tt=k.min.y,Ct=k.isBox3?k.min.z:0):(Q=ne.width,ct=ne.height,_t=ne.depth||1,pt=0,Tt=0,Ct=0),G!==null?(mt=G.x,Vt=G.y,te=G.z):(mt=0,Vt=0,te=0);const Re=Ut.convert(I.format),$t=Ut.convert(I.type);let xt;I.isData3DTexture?(T.setTexture3D(I,0),xt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),xt=L.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),xt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const fn=L.getParameter(L.UNPACK_ROW_LENGTH),Xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),We=L.getParameter(L.UNPACK_SKIP_PIXELS),Mi=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const as=A.isDataArrayTexture||A.isData3DTexture,ie=I.isDataArrayTexture||I.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const tn=vt.get(A),os=vt.get(I),Oe=vt.get(tn.__renderTarget),Cn=vt.get(os.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<_t;Pn++)as&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,D,Ct+Pn),A.isDepthTexture?(ie&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,D,te+Pn),L.blitFramebuffer(pt,Tt,Q,ct,mt,Vt,Q,ct,L.DEPTH_BUFFER_BIT,L.NEAREST)):ie?L.copyTexSubImage3D(xt,D,mt,Vt,te+Pn,pt,Tt,Q,ct):L.copyTexSubImage2D(xt,D,mt,Vt,te+Pn,pt,Tt,Q,ct);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ie?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(xt,D,mt,Vt,te,Q,ct,_t,Re,$t,ne.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(xt,D,mt,Vt,te,Q,ct,_t,Re,ne.data):L.texSubImage3D(xt,D,mt,Vt,te,Q,ct,_t,Re,$t,ne):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,mt,Vt,Q,ct,Re,$t,ne.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,mt,Vt,ne.width,ne.height,Re,ne.data):L.texSubImage2D(L.TEXTURE_2D,D,mt,Vt,Q,ct,Re,$t,ne);L.pixelStorei(L.UNPACK_ROW_LENGTH,fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),D===0&&I.generateMipmaps&&L.generateMipmap(xt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(A,I,k=null,G=null,D=0){return A.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,A=arguments[2],I=arguments[3],D=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,I,k,G,D)},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){w=0,y=0,C=null,Mt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jm extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class td extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wr=new O,br=new O,_l=new oe,fs=new kh,lr=new Lr,va=new O,pl=new O;class Qm extends ge{constructor(t=new ze,e=new td){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wr.fromBufferAttribute(e,s-1),br.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wr.distanceTo(br);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;_l.copy(s).invert(),fs.copy(t.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const _=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=_,p=m-1;g<p;g+=c){const u=h.getX(g),R=h.getX(g+1),x=hr(this,t,fs,l,u,R);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(m-1),p=h.getX(_),u=hr(this,t,fs,l,g,p);u&&e.push(u)}}else{const _=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=_,p=m-1;g<p;g+=c){const u=hr(this,t,fs,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=hr(this,t,fs,l,m-1,_);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(wr.fromBufferAttribute(a,s),br.fromBufferAttribute(a,r),e.distanceSqToSegment(wr,br,va,pl)>n)return;va.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(va);if(!(l<t.near||l>t.far))return{distance:l,point:pl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ml=new O,El=new O;class tE extends Qm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ml.fromBufferAttribute(e,s),El.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ml.distanceTo(El);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xe extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],_=[];let m=0;const g=[],p=n/2;let u=0;R(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(_,2));function R(){const E=new O,P=new O;let w=0;const y=(e-t)/n;for(let C=0;C<=r;C++){const M=[],S=C/r,b=S*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,H=F*l+o,z=Math.sin(H),V=Math.cos(H);P.x=b*z,P.y=-S*n+p,P.z=b*V,f.push(P.x,P.y,P.z),E.set(z,y,V).normalize(),d.push(E.x,E.y,E.z),_.push(F,1-S),M.push(m++)}g.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const S=g[M][C],b=g[M+1][C],N=g[M+1][C+1],F=g[M][C+1];(t>0||M!==0)&&(h.push(S,b,F),w+=3),(e>0||M!==r-1)&&(h.push(b,N,F),w+=3)}c.addGroup(u,w,0),u+=w}function x(E){const P=m,w=new Kt,y=new O;let C=0;const M=E===!0?t:e,S=E===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*S,0),d.push(0,S,0),_.push(.5,.5),m++;const b=m;for(let N=0;N<=s;N++){const H=N/s*l+o,z=Math.cos(H),V=Math.sin(H);y.x=M*V,y.y=p*S,y.z=M*z,f.push(y.x,y.y,y.z),d.push(0,S,0),w.x=z*.5+.5,w.y=V*.5*S+.5,_.push(w.x,w.y),m++}for(let N=0;N<s;N++){const F=P+N,H=b+N;E===!0?h.push(H,H+1,F):h.push(H+1,H,F),C+=3}c.addGroup(u,C,E===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new O,d=new O,_=[],m=[],g=[],p=[];for(let u=0;u<=n;u++){const R=[],x=u/n;let E=0;u===0&&a===0?E=.5/e:u===n&&l===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){const w=P/e;f.x=-t*Math.cos(s+w*r)*Math.sin(a+x*o),f.y=t*Math.cos(a+x*o),f.z=t*Math.sin(s+w*r)*Math.sin(a+x*o),m.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(w+E,1-x),R.push(c++)}h.push(R)}for(let u=0;u<n;u++)for(let R=0;R<e;R++){const x=h[u][R+1],E=h[u][R],P=h[u+1][R],w=h[u+1][R+1];(u!==0||a>0)&&_.push(x,E,w),(u!==n-1||l<Math.PI)&&_.push(E,P,w)}this.setIndex(_),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jo extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new O,f=new O,d=new O;for(let _=0;_<=n;_++)for(let m=0;m<=s;m++){const g=m/s*r,p=_/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(g),f.y=(t+e*Math.cos(p))*Math.sin(g),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(_/n)}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,p=(s+1)*(_-1)+m-1,u=(s+1)*(_-1)+m,R=(s+1)*_+m;a.push(g,p,R),a.push(p,u,R)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class eE extends Si{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Ot(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ei extends Si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ed extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ma=new oe,gl=new O,Sl=new O;class nE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(gl),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iE extends nE{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends ed{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sE extends ed{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rE extends tE{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ot(n),s=new Ot(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,_=0,m=-o;d<=e;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const g=d===r?n:s;g.toArray(c,_),_+=3,g.toArray(c,_),_+=3,g.toArray(c,_),_+=3,g.toArray(c,_),_+=3}const h=new ze;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));const f=new td({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const aE="chest",oE=1.75,cE=[{name:"chest",parent:null,length:.36,position:[0,1.25,0],direction:[0,1,0],radius:.05,color:"#38bdf8"},{name:"left_shoulder",parent:"chest",length:.16,position:[.18,.14,0],direction:[1,0,0],radius:.038,color:"#0ea5e9"},{name:"left_upper_arm",parent:"left_shoulder",length:.28,position:[.16,0,0],direction:[0,-1,0],radius:.036,color:"#0284c7"},{name:"left_forearm",parent:"left_upper_arm",length:.25,position:[0,-.28,0],direction:[0,-1,0],radius:.032,color:"#0284c7"},{name:"left_hand",parent:"left_forearm",length:.14,position:[0,-.25,0],direction:[0,-1,0],radius:.026,color:"#38bdf8"},{name:"right_shoulder",parent:"chest",length:.16,position:[-.18,.14,0],direction:[-1,0,0],radius:.038,color:"#0ea5e9"},{name:"right_upper_arm",parent:"right_shoulder",length:.28,position:[-.16,0,0],direction:[0,-1,0],radius:.036,color:"#0284c7"},{name:"right_forearm",parent:"right_upper_arm",length:.25,position:[0,-.28,0],direction:[0,-1,0],radius:.032,color:"#0284c7"},{name:"right_hand",parent:"right_forearm",length:.14,position:[0,-.25,0],direction:[0,-1,0],radius:.026,color:"#38bdf8"},{name:"left_thigh",parent:"chest",length:.42,position:[.1,-.28,0],direction:[0,-1,0],radius:.044,color:"#06b6d4"},{name:"left_shin",parent:"left_thigh",length:.4,position:[0,-.42,0],direction:[0,-1,0],radius:.038,color:"#0891b2"},{name:"left_foot",parent:"left_shin",length:.18,position:[0,-.4,0],direction:[0,0,1],radius:.03,color:"#22d3ee"},{name:"right_thigh",parent:"chest",length:.42,position:[-.1,-.28,0],direction:[0,-1,0],radius:.044,color:"#06b6d4"},{name:"right_shin",parent:"right_thigh",length:.4,position:[0,-.42,0],direction:[0,-1,0],radius:.038,color:"#0891b2"},{name:"right_foot",parent:"right_shin",length:.18,position:[0,-.4,0],direction:[0,0,1],radius:.03,color:"#22d3ee"}],lE={root:aE,height:oE,bones:cE};function nd(i,t,e,n){return new Qe(t,n,-e,i).normalize()}class hE{constructor(t){et(this,"scene");et(this,"rootGroup");et(this,"skeleton");et(this,"boneGroups",new Map);et(this,"boneMeshes",new Map);et(this,"trackerLedMeshes",new Map);et(this,"onlineChassisMaterial");et(this,"jointPivotMaterial");et(this,"trackerPuckMaterial");et(this,"activeSensorLedMaterial");et(this,"inactiveSensorLedMaterial");et(this,"offlineChassisMaterial");et(this,"visorMaterial");et(this,"accentLineMaterial");et(this,"isCalibrated",!1);et(this,"calibOffsets",new Map);et(this,"reZeroYawOffset",new Qe(0,0,0,1));this.scene=t,this.skeleton=lE,this.rootGroup=new kn,this.rootGroup.name="avatar_root",this.scene.add(this.rootGroup),this.onlineChassisMaterial=new ei({color:1976376,metalness:.62,roughness:.32}),this.jointPivotMaterial=new ei({color:4674921,metalness:.85,roughness:.18}),this.trackerPuckMaterial=new ei({color:988970,metalness:.45,roughness:.35}),this.activeSensorLedMaterial=new ei({color:3718648,emissive:58879,emissiveIntensity:.85,metalness:.2,roughness:.2}),this.inactiveSensorLedMaterial=new ei({color:2503493,emissive:0,emissiveIntensity:0,roughness:.8}),this.offlineChassisMaterial=new ei({color:1383464,metalness:.2,roughness:.85,transparent:!0,opacity:.36}),this.visorMaterial=new ei({color:198418,metalness:.95,roughness:.05}),this.accentLineMaterial=new Ko({color:3718648}),this.buildSkeleton()}buildSkeleton(){for(const t of this.skeleton.bones){const e=new kn;e.name=`bone_${t.name}`,e.position.set(t.position[0],t.position[1],t.position[2]),this.boneGroups.set(t.name,e),this.boneMeshes.set(t.name,[])}for(const t of this.skeleton.bones){const e=this.boneGroups.get(t.name);if(t.parent===null)this.rootGroup.add(e);else{const n=this.boneGroups.get(t.parent);n?n.add(e):this.rootGroup.add(e)}this.createBoneMesh(t,e)}}createBoneMesh(t,e){const n=[],s=t.radius*1.15,r=new Zo(s,20,20),a=new Jt(r,this.jointPivotMaterial);a.castShadow=!0,e.add(a),n.push(a);const o=new Xe(s*1.12,s*1.12,s*.45,18),l=new Jt(o,this.jointPivotMaterial);if(e.add(l),n.push(l),t.name==="chest"){const p=new Xe(.14,.12,t.length*.65,8),u=new Jt(p,this.onlineChassisMaterial);u.position.set(0,-t.length*.28,0),u.rotation.y=Math.PI/8,u.scale.set(1.15,1,.72),u.castShadow=!0,e.add(u),n.push(u);const R=new Xe(.1,.09,t.length*.35,8),x=new Jt(R,this.jointPivotMaterial);x.position.set(0,-t.length*.65,0),x.scale.set(1.05,1,.7),x.castShadow=!0,e.add(x),n.push(x);const E=new Xe(.12,.1,.12,8),P=new Jt(E,this.onlineChassisMaterial);P.position.set(0,-t.length*.85,0),P.scale.set(1.1,1,.75),e.add(P),n.push(P);const w=new qe(.34,.035,.05),y=new Jt(w,this.jointPivotMaterial);y.position.set(0,.12,0),e.add(y),n.push(y);const C=new Xe(.038,.045,.09,16),M=new Jt(C,this.jointPivotMaterial);M.position.set(0,.11,0),e.add(M),n.push(M);const S=new kn;S.position.set(0,.22,0);const b=new Xe(.075,.062,.15,10),N=new Jt(b,this.onlineChassisMaterial);N.scale.set(.9,1,1.15),N.castShadow=!0,S.add(N),n.push(N);const F=new Xe(.076,.064,.05,10,1,!1,0,Math.PI),H=new Jt(F,this.visorMaterial);H.position.set(0,.015,.005),H.rotation.y=Math.PI/2,H.scale.set(.92,1,1.18),S.add(H);const z=new qe(.12,.006,.02),V=new Jt(z,this.accentLineMaterial);V.position.set(0,.04,.08),S.add(V),e.add(S)}else if(t.name.includes("hand")){const p=new qe(.055,t.length*.7,.026),u=new Jt(p,this.onlineChassisMaterial);u.position.set(0,-t.length*.45,0),u.castShadow=!0,e.add(u),n.push(u);const R=new qe(.046,t.length*.35,.02),x=new Jt(R,this.jointPivotMaterial);x.position.set(0,-t.length*.88,0),e.add(x),n.push(x)}else if(t.name.includes("foot")){const p=new qe(.065,.042,t.length),u=new Jt(p,this.onlineChassisMaterial);u.position.set(0,-.02,t.length*.42),u.castShadow=!0,e.add(u),n.push(u);const R=new qe(.062,.05,.06),x=new Jt(R,this.jointPivotMaterial);x.position.set(0,-.01,.02),e.add(x),n.push(x)}else{const p=new Xe(t.radius*.82,t.radius*1.05,t.length,16),u=new Jt(p,this.onlineChassisMaterial);u.castShadow=!0;const R=t.direction;R[1]===-1?u.position.set(0,-t.length*.5,0):R[0]===1?(u.rotation.z=-Math.PI/2,u.position.set(t.length*.5,0,0)):R[0]===-1?(u.rotation.z=Math.PI/2,u.position.set(-t.length*.5,0,0)):u.position.set(0,-t.length*.5,0),e.add(u),n.push(u)}const c=new kn,h=.024,f=.012,d=new Xe(h,h*1.05,f,16),_=new Jt(d,this.trackerPuckMaterial);_.rotation.x=Math.PI/2,c.add(_);const m=new jo(h*.65,.0035,8,20),g=new Jt(m,this.inactiveSensorLedMaterial);g.position.set(0,0,f*.55),c.add(g),this.trackerLedMeshes.set(t.name,g),t.name==="chest"?c.position.set(0,-t.length*.28,.1):t.name.includes("thigh")?c.position.set(t.direction[0]!==0?0:.048,-t.length*.45,.045):t.name.includes("shin")?c.position.set(0,-t.length*.45,.045):t.name.includes("upper_arm")?c.position.set(t.name.includes("left")?.048:-.048,-t.length*.45,.01):t.name.includes("forearm")?c.position.set(0,-t.length*.45,.04):t.name.includes("hand")?c.position.set(0,-t.length*.42,.022):t.name.includes("foot")?(c.position.set(0,.02,t.length*.45),c.rotation.x=-Math.PI/2):c.position.set(0,0,t.radius*1.1),e.add(c),this.boneMeshes.set(t.name,n)}calibratePose(t){this.calibOffsets.clear(),this.reZeroYawOffset.set(0,0,0,1),t.forEach((e,n)=>{const s=e.clone().invert().normalize();this.calibOffsets.set(n,s)}),this.isCalibrated=!0}reZeroYaw(){var r;let t=(r=this.boneGroups.get("chest"))==null?void 0:r.quaternion.clone();t||(t=new Qe(0,0,0,1));const e=new O(0,0,1).applyQuaternion(t),s=-Math.atan2(e.x,e.z)*.5;this.reZeroYawOffset.set(0,Math.sin(s),0,Math.cos(s)).normalize()}getCalibrationOffsets(){if(!this.isCalibrated||this.calibOffsets.size===0)return null;const t={};return this.calibOffsets.forEach((e,n)=>{const s=this.reZeroYawOffset.clone().multiply(e).normalize();t[n]=[s.x,s.y,s.z,s.w]}),t}getCalibratedWorldQuat(t,e){const n=this.calibOffsets.get(t);let s;return n?s=n.clone().multiply(e).normalize():s=e.clone(),this.reZeroYawOffset.clone().multiply(s).normalize()}updatePoses(t){const e=new Map;for(const[s,r]of t)if(r.isOnline&&r.quat){const a=this.getCalibratedWorldQuat(s,r.quat);e.set(s,a)}const n=new Qe(0,0,0,1);this.traverseAndUpdateBones(this.skeleton.root,n,e,t)}traverseAndUpdateBones(t,e,n,s){const r=this.boneGroups.get(t);if(!r)return;const a=s.get(t),o=a?a.isOnline:!1;let l;n.has(t)?l=n.get(t):l=e.clone();const h=e.clone().invert().multiply(l).normalize();r.quaternion.copy(h),this.updateBoneMaterial(t,o);const f=this.skeleton.bones.filter(d=>d.parent===t);for(const d of f)this.traverseAndUpdateBones(d.name,l,n,s)}updateBoneMaterial(t,e){const n=this.boneMeshes.get(t);if(n){const r=e?this.onlineChassisMaterial:this.offlineChassisMaterial;for(const a of n)(a.material===this.onlineChassisMaterial||a.material===this.offlineChassisMaterial)&&a.material!==r&&(a.material=r)}const s=this.trackerLedMeshes.get(t);if(s){const r=e?this.activeSensorLedMaterial:this.inactiveSensorLedMaterial;s.material!==r&&(s.material=r)}}resetToNPose(){this.isCalibrated=!1,this.calibOffsets.clear(),this.reZeroYawOffset.set(0,0,0,1);for(const t of this.boneGroups.values())t.quaternion.set(0,0,0,1)}}class dE{constructor(){et(this,"bufferDelayMs",75);et(this,"buffers",new Map);et(this,"maxHistorySamples",120);et(this,"lastSampleRxTimes",new Map);et(this,"serverTimeOffsetMs",0)}setBufferDelay(t){this.bufferDelayMs=Math.max(30,Math.min(250,t))}setServerTimeSync(t){this.serverTimeOffsetMs=t-Date.now()}pushSample(t,e,n,s,r){const a=performance.now();this.lastSampleRxTimes.set(t,a);let o=this.buffers.get(t);o||(o=[],this.buffers.set(t,o)),o.push({seq:e,t_ms:n,server_time_ms:s||Date.now()+this.serverTimeOffsetMs,rx_time_ms:a,quat:r.clone()}),o.length>this.maxHistorySamples&&o.splice(0,o.length-this.maxHistorySamples)}isRoleOnline(t){const e=this.lastSampleRxTimes.get(t);return e?performance.now()-e<1200:!1}getInterpolatedQuaternion(t,e=performance.now()){const n=this.isRoleOnline(t),s=this.buffers.get(t);if(!s||s.length===0)return null;const r=e-this.bufferDelayMs;for(;s.length>2&&s[0].rx_time_ms<r-600;)s.shift();const a=s[s.length-1];if(r>=a.rx_time_ms){const l=Math.max(10,Math.round(e-a.rx_time_ms+this.bufferDelayMs));return{quat:a.quat.clone(),latencyMs:l,isOnline:n}}const o=s[0];if(r<=o.rx_time_ms){const l=Math.max(10,Math.round(e-o.rx_time_ms+this.bufferDelayMs));return{quat:o.quat.clone(),latencyMs:l,isOnline:n}}for(let l=0;l<s.length-1;l++){const c=s[l],h=s[l+1];if(c.rx_time_ms<=r&&r<=h.rx_time_ms){const f=h.rx_time_ms-c.rx_time_ms,d=f>.001?(r-c.rx_time_ms)/f:0,_=Math.max(0,Math.min(1,d)),m=c.quat.clone().slerp(h.quat,_),g=Math.max(5,e-c.rx_time_ms),p=Math.round(g+this.bufferDelayMs);return{quat:m,latencyMs:p,isOnline:n}}}return{quat:a.quat.clone(),latencyMs:Math.round(e-a.rx_time_ms+this.bufferDelayMs),isOnline:n}}clear(){this.buffers.clear(),this.lastSampleRxTimes.clear()}}class uE{constructor(t){et(this,"container");et(this,"scene");et(this,"camera");et(this,"renderer");et(this,"avatar");et(this,"jitterBuffer");et(this,"isMouseDown",!1);et(this,"mousePrev",{x:0,y:0});et(this,"spherical",{radius:3.2,theta:.45,phi:Math.PI/2.3});et(this,"cameraTarget",new O(0,1.05,0));et(this,"currentLatencyMs",0);et(this,"onLatencyUpdate");et(this,"onFpsUpdate");et(this,"isPlaybackMode",!1);et(this,"playbackPoses",new Map);et(this,"frameCount",0);et(this,"lastFpsCheck",performance.now());this.container=t,this.scene=new Jm,this.scene.background=new Ot(593174),this.scene.fog=new qo(593174,.042);const e=t.clientWidth||800,n=t.clientHeight||600;this.camera=new ke(42,e/n,.1,100),this.updateCameraPosition(),this.renderer=new jm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xh,this.renderer.toneMapping=Mh,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.setupLighting(),this.setupEnvironment(),this.setupControls(),this.jitterBuffer=new dE,this.avatar=new hE(this.scene),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLighting(){const t=new sE(16777215,.55);this.scene.add(t);const e=new Aa(16777215,1.45);e.position.set(4,9,6),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=25,e.shadow.camera.left=-2.5,e.shadow.camera.right=2.5,e.shadow.camera.top=2.5,e.shadow.camera.bottom=-2.5,e.shadow.bias=-1e-4,this.scene.add(e);const n=new Aa(13621468,.65);n.position.set(-5,4,3),this.scene.add(n);const s=new Aa(14870768,.85);s.position.set(0,5,-6),this.scene.add(s)}setupEnvironment(){const t=new rE(12,24,3359061,1581104);t.position.y=0,this.scene.add(t);const e=new Ls(32,32),n=new eE({opacity:.4}),s=new Jt(e,n);s.rotation.x=-Math.PI/2,s.position.y=-.005,s.receiveShadow=!0,this.scene.add(s)}setupControls(){const t=this.renderer.domElement;t.addEventListener("mousedown",e=>{this.isMouseDown=!0,this.mousePrev={x:e.clientX,y:e.clientY}}),window.addEventListener("mousemove",e=>{if(!this.isMouseDown)return;const n=e.clientX-this.mousePrev.x,s=e.clientY-this.mousePrev.y;this.mousePrev={x:e.clientX,y:e.clientY},this.spherical.theta-=n*.006,this.spherical.phi=Math.max(.08,Math.min(Math.PI/2.05,this.spherical.phi-s*.006)),this.updateCameraPosition()}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.spherical.radius=Math.max(1.2,Math.min(8,this.spherical.radius+e.deltaY*.003)),this.updateCameraPosition()})}setCameraView(t){switch(t){case"front":this.spherical.theta=0,this.spherical.phi=Math.PI/2,this.spherical.radius=3;break;case"side":this.spherical.theta=Math.PI/2,this.spherical.phi=Math.PI/2,this.spherical.radius=3;break;case"top":this.spherical.theta=0,this.spherical.phi=.08,this.spherical.radius=3.6;break;case"persp":default:this.spherical.theta=.45,this.spherical.phi=Math.PI/2.3,this.spherical.radius=3.2;break}this.updateCameraPosition()}updateCameraPosition(){const t=Math.sin(this.spherical.phi);this.camera.position.x=this.cameraTarget.x+this.spherical.radius*t*Math.sin(this.spherical.theta),this.camera.position.y=this.cameraTarget.y+this.spherical.radius*Math.cos(this.spherical.phi),this.camera.position.z=this.cameraTarget.z+this.spherical.radius*t*Math.cos(this.spherical.theta),this.camera.lookAt(this.cameraTarget)}resetCamera(){this.setCameraView("persp")}handleSample(t){const[e,n,s,r]=t.quat,a=nd(e,n,s,r);this.jitterBuffer.pushSample(t.role,t.seq,t.t_ms,t.server_time_ms||Date.now(),a)}calibratePose(){const t=new Map,e=performance.now();for(const n of this.avatar.skeleton.bones){const s=this.jitterBuffer.getInterpolatedQuaternion(n.name,e);s&&s.isOnline&&t.set(n.name,s.quat)}this.avatar.calibratePose(t)}reZeroYaw(){this.avatar.reZeroYaw()}getCalibrationOffsets(){return this.avatar.getCalibrationOffsets()}onResize(){if(!this.container)return;const t=this.container.clientWidth||800,e=this.container.clientHeight||600;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){requestAnimationFrame(()=>this.animate());const t=performance.now();if(this.isPlaybackMode)this.avatar.updatePoses(this.playbackPoses);else{const e=new Map;for(const n of this.avatar.skeleton.bones){const s=this.jitterBuffer.getInterpolatedQuaternion(n.name,t);s?e.set(n.name,s):e.set(n.name,{quat:new Qe(0,0,0,1),isOnline:!1})}this.avatar.updatePoses(e)}if(this.frameCount++,t-this.lastFpsCheck>=1e3){const e=Math.round(this.frameCount*1e3/(t-this.lastFpsCheck));this.frameCount=0,this.lastFpsCheck=t,this.onFpsUpdate&&this.onFpsUpdate(e)}this.renderer.render(this.scene,this.camera)}}class fE{constructor(t){et(this,"visualizer");et(this,"sessionData",null);et(this,"samplesByRole",new Map);et(this,"isPlaying",!1);et(this,"currentTimeMs",0);et(this,"durationMs",0);et(this,"speed",1);et(this,"loop",!0);et(this,"lastFrameTime",0);et(this,"animFrameId",null);et(this,"onTimeUpdate");et(this,"onPlayStateChange");et(this,"tick",()=>{var n,s;if(!this.isPlaying)return;const t=performance.now(),e=(t-this.lastFrameTime)*this.speed;if(this.lastFrameTime=t,this.currentTimeMs+=e,this.currentTimeMs>=this.durationMs)if(this.loop&&this.durationMs>0)this.currentTimeMs=0;else{this.currentTimeMs=this.durationMs,this.pause(),this.updateAvatarPoseAtTime(this.currentTimeMs),(n=this.onTimeUpdate)==null||n.call(this,this.currentTimeMs,this.durationMs);return}this.updateAvatarPoseAtTime(this.currentTimeMs),(s=this.onTimeUpdate)==null||s.call(this,this.currentTimeMs,this.durationMs),this.animFrameId=requestAnimationFrame(this.tick)});this.visualizer=t}loadSession(t){var e;this.sessionData=t,this.durationMs=t.duration_ms||1e3,this.currentTimeMs=0,this.isPlaying=!1,this.samplesByRole.clear();for(const n of t.samples){this.samplesByRole.has(n.role)||this.samplesByRole.set(n.role,[]);const s=nd(n.quat[0],n.quat[1],n.quat[2],n.quat[3]);this.samplesByRole.get(n.role).push({t_ms:n.t_ms,quat:s})}for(const n of this.samplesByRole.values())n.sort((s,r)=>s.t_ms-r.t_ms);this.visualizer.isPlaybackMode=!0,this.seek(0),(e=this.onPlayStateChange)==null||e.call(this,!1)}exitPlayback(){this.pause(),this.visualizer.isPlaybackMode=!1,this.visualizer.playbackPoses.clear(),this.sessionData=null,this.samplesByRole.clear()}play(){var t;this.isPlaying||(this.currentTimeMs>=this.durationMs&&(this.currentTimeMs=0),this.isPlaying=!0,this.lastFrameTime=performance.now(),(t=this.onPlayStateChange)==null||t.call(this,!0),this.tick())}pause(){var t;this.isPlaying&&(this.isPlaying=!1,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),(t=this.onPlayStateChange)==null||t.call(this,!1))}togglePlay(){this.isPlaying?this.pause():this.play()}setSpeed(t){this.speed=t}seek(t){var e;this.currentTimeMs=Math.max(0,Math.min(this.durationMs,t)),this.updateAvatarPoseAtTime(this.currentTimeMs),(e=this.onTimeUpdate)==null||e.call(this,this.currentTimeMs,this.durationMs)}updateAvatarPoseAtTime(t){const e=new Map;for(const n of this.visualizer.avatar.skeleton.bones){const s=this.samplesByRole.get(n.name);if(!s||s.length===0){e.set(n.name,{quat:new Qe(0,0,0,1),isOnline:!1});continue}const r=this.sampleQuatAtTime(s,t);e.set(n.name,{quat:r,isOnline:!0})}this.visualizer.playbackPoses=e,this.visualizer.avatar.updatePoses(e)}sampleQuatAtTime(t,e){if(e<=t[0].t_ms)return t[0].quat.clone();if(e>=t[t.length-1].t_ms)return t[t.length-1].quat.clone();let n=0,s=t.length-1;for(;n<=s;){const h=n+s>>1;t[h].t_ms<=e?n=h+1:s=h-1}const r=Math.max(0,s),a=Math.min(t.length-1,r+1),o=t[r],l=t[a];if(r===a||l.t_ms===o.t_ms)return o.quat.clone();const c=(e-o.t_ms)/(l.t_ms-o.t_ms);return o.quat.clone().slerp(l.quat,c)}}const _E="modulepreload",pE=function(i){return"/"+i},xl={},se=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(e.map(c=>{if(c=pE(c),c in xl)return;xl[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":_E,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((_,m)=>{d.addEventListener("load",_),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class Dt extends Error{constructor(t){super(t),this.name=new.target.name,Object.setPrototypeOf(this,new.target.prototype)}}class dr extends Dt{constructor(t="unsupported command error"){super(t)}}class Ra extends Dt{constructor(t){super(`Unexpected chip ID value ${t}. Failed to autodetect chip type.`)}}class vl extends Dt{constructor(t){super(`Unexpected CHIP magic value 0x${t.toString(16)}. Failed to autodetect chip type.`)}}class Ml extends Dt{constructor(t="Security info command does not contain chip ID. This is expected for ESP32-S2 which doesn't support chip ID in security info."){super(t)}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const mE=4,Al=0,Rl=1,EE=2;function is(i){let t=i.length;for(;--t>=0;)i[t]=0}const gE=0,id=1,SE=2,xE=3,vE=258,Jo=29,Fs=256,Rs=Fs+1+Jo,Vi=30,Qo=19,sd=2*Rs+1,li=15,ya=16,ME=7,tc=256,rd=16,ad=17,od=18,Co=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Rr=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),AE=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),cd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),RE=512,vn=new Array((Rs+2)*2);is(vn);const Ss=new Array(Vi*2);is(Ss);const ys=new Array(RE);is(ys);const Ts=new Array(vE-xE+1);is(Ts);const ec=new Array(Jo);is(ec);const Cr=new Array(Vi);is(Cr);function Ta(i,t,e,n,s){this.static_tree=i,this.extra_bits=t,this.extra_base=e,this.elems=n,this.max_length=s,this.has_stree=i&&i.length}let ld,hd,dd;function wa(i,t){this.dyn_tree=i,this.max_code=0,this.stat_desc=t}const ud=i=>i<256?ys[i]:ys[256+(i>>>7)],ws=(i,t)=>{i.pending_buf[i.pending++]=t&255,i.pending_buf[i.pending++]=t>>>8&255},we=(i,t,e)=>{i.bi_valid>ya-e?(i.bi_buf|=t<<i.bi_valid&65535,ws(i,i.bi_buf),i.bi_buf=t>>ya-i.bi_valid,i.bi_valid+=e-ya):(i.bi_buf|=t<<i.bi_valid&65535,i.bi_valid+=e)},rn=(i,t,e)=>{we(i,e[t*2],e[t*2+1])},fd=(i,t)=>{let e=0;do e|=i&1,i>>>=1,e<<=1;while(--t>0);return e>>>1},yE=i=>{i.bi_valid===16?(ws(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},TE=(i,t)=>{const e=t.dyn_tree,n=t.max_code,s=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,l=t.stat_desc.max_length;let c,h,f,d,_,m,g=0;for(d=0;d<=li;d++)i.bl_count[d]=0;for(e[i.heap[i.heap_max]*2+1]=0,c=i.heap_max+1;c<sd;c++)h=i.heap[c],d=e[e[h*2+1]*2+1]+1,d>l&&(d=l,g++),e[h*2+1]=d,!(h>n)&&(i.bl_count[d]++,_=0,h>=o&&(_=a[h-o]),m=e[h*2],i.opt_len+=m*(d+_),r&&(i.static_len+=m*(s[h*2+1]+_)));if(g!==0){do{for(d=l-1;i.bl_count[d]===0;)d--;i.bl_count[d]--,i.bl_count[d+1]+=2,i.bl_count[l]--,g-=2}while(g>0);for(d=l;d!==0;d--)for(h=i.bl_count[d];h!==0;)f=i.heap[--c],!(f>n)&&(e[f*2+1]!==d&&(i.opt_len+=(d-e[f*2+1])*e[f*2],e[f*2+1]=d),h--)}},_d=(i,t,e)=>{const n=new Array(li+1);let s=0,r,a;for(r=1;r<=li;r++)s=s+e[r-1]<<1,n[r]=s;for(a=0;a<=t;a++){let o=i[a*2+1];o!==0&&(i[a*2]=fd(n[o]++,o))}},wE=()=>{let i,t,e,n,s;const r=new Array(li+1);for(e=0,n=0;n<Jo-1;n++)for(ec[n]=e,i=0;i<1<<Co[n];i++)Ts[e++]=n;for(Ts[e-1]=n,s=0,n=0;n<16;n++)for(Cr[n]=s,i=0;i<1<<Rr[n];i++)ys[s++]=n;for(s>>=7;n<Vi;n++)for(Cr[n]=s<<7,i=0;i<1<<Rr[n]-7;i++)ys[256+s++]=n;for(t=0;t<=li;t++)r[t]=0;for(i=0;i<=143;)vn[i*2+1]=8,i++,r[8]++;for(;i<=255;)vn[i*2+1]=9,i++,r[9]++;for(;i<=279;)vn[i*2+1]=7,i++,r[7]++;for(;i<=287;)vn[i*2+1]=8,i++,r[8]++;for(_d(vn,Rs+1,r),i=0;i<Vi;i++)Ss[i*2+1]=5,Ss[i*2]=fd(i,5);ld=new Ta(vn,Co,Fs+1,Rs,li),hd=new Ta(Ss,Rr,0,Vi,li),dd=new Ta(new Array(0),AE,0,Qo,ME)},pd=i=>{let t;for(t=0;t<Rs;t++)i.dyn_ltree[t*2]=0;for(t=0;t<Vi;t++)i.dyn_dtree[t*2]=0;for(t=0;t<Qo;t++)i.bl_tree[t*2]=0;i.dyn_ltree[tc*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},md=i=>{i.bi_valid>8?ws(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},yl=(i,t,e,n)=>{const s=t*2,r=e*2;return i[s]<i[r]||i[s]===i[r]&&n[t]<=n[e]},ba=(i,t,e)=>{const n=i.heap[e];let s=e<<1;for(;s<=i.heap_len&&(s<i.heap_len&&yl(t,i.heap[s+1],i.heap[s],i.depth)&&s++,!yl(t,n,i.heap[s],i.depth));)i.heap[e]=i.heap[s],e=s,s<<=1;i.heap[e]=n},Tl=(i,t,e)=>{let n,s,r=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+r++]&255,n+=(i.pending_buf[i.sym_buf+r++]&255)<<8,s=i.pending_buf[i.sym_buf+r++],n===0?rn(i,s,t):(a=Ts[s],rn(i,a+Fs+1,t),o=Co[a],o!==0&&(s-=ec[a],we(i,s,o)),n--,a=ud(n),rn(i,a,e),o=Rr[a],o!==0&&(n-=Cr[a],we(i,n,o)));while(r<i.sym_next);rn(i,tc,t)},Po=(i,t)=>{const e=t.dyn_tree,n=t.stat_desc.static_tree,s=t.stat_desc.has_stree,r=t.stat_desc.elems;let a,o,l=-1,c;for(i.heap_len=0,i.heap_max=sd,a=0;a<r;a++)e[a*2]!==0?(i.heap[++i.heap_len]=l=a,i.depth[a]=0):e[a*2+1]=0;for(;i.heap_len<2;)c=i.heap[++i.heap_len]=l<2?++l:0,e[c*2]=1,i.depth[c]=0,i.opt_len--,s&&(i.static_len-=n[c*2+1]);for(t.max_code=l,a=i.heap_len>>1;a>=1;a--)ba(i,e,a);c=r;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],ba(i,e,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,e[c*2]=e[a*2]+e[o*2],i.depth[c]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,e[a*2+1]=e[o*2+1]=c,i.heap[1]=c++,ba(i,e,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],TE(i,t),_d(e,l,i.bl_count)},wl=(i,t,e)=>{let n,s=-1,r,a=t[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),t[(e+1)*2+1]=65535,n=0;n<=e;n++)r=a,a=t[(n+1)*2+1],!(++o<l&&r===a)&&(o<c?i.bl_tree[r*2]+=o:r!==0?(r!==s&&i.bl_tree[r*2]++,i.bl_tree[rd*2]++):o<=10?i.bl_tree[ad*2]++:i.bl_tree[od*2]++,o=0,s=r,a===0?(l=138,c=3):r===a?(l=6,c=3):(l=7,c=4))},bl=(i,t,e)=>{let n,s=-1,r,a=t[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),n=0;n<=e;n++)if(r=a,a=t[(n+1)*2+1],!(++o<l&&r===a)){if(o<c)do rn(i,r,i.bl_tree);while(--o!==0);else r!==0?(r!==s&&(rn(i,r,i.bl_tree),o--),rn(i,rd,i.bl_tree),we(i,o-3,2)):o<=10?(rn(i,ad,i.bl_tree),we(i,o-3,3)):(rn(i,od,i.bl_tree),we(i,o-11,7));o=0,s=r,a===0?(l=138,c=3):r===a?(l=6,c=3):(l=7,c=4)}},bE=i=>{let t;for(wl(i,i.dyn_ltree,i.l_desc.max_code),wl(i,i.dyn_dtree,i.d_desc.max_code),Po(i,i.bl_desc),t=Qo-1;t>=3&&i.bl_tree[cd[t]*2+1]===0;t--);return i.opt_len+=3*(t+1)+5+5+4,t},CE=(i,t,e,n)=>{let s;for(we(i,t-257,5),we(i,e-1,5),we(i,n-4,4),s=0;s<n;s++)we(i,i.bl_tree[cd[s]*2+1],3);bl(i,i.dyn_ltree,t-1),bl(i,i.dyn_dtree,e-1)},PE=i=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&i.dyn_ltree[e*2]!==0)return Al;if(i.dyn_ltree[18]!==0||i.dyn_ltree[20]!==0||i.dyn_ltree[26]!==0)return Rl;for(e=32;e<Fs;e++)if(i.dyn_ltree[e*2]!==0)return Rl;return Al};let Cl=!1;const UE=i=>{Cl||(wE(),Cl=!0),i.l_desc=new wa(i.dyn_ltree,ld),i.d_desc=new wa(i.dyn_dtree,hd),i.bl_desc=new wa(i.bl_tree,dd),i.bi_buf=0,i.bi_valid=0,pd(i)},Ed=(i,t,e,n)=>{we(i,(gE<<1)+(n?1:0),3),md(i),ws(i,e),ws(i,~e),e&&i.pending_buf.set(i.window.subarray(t,t+e),i.pending),i.pending+=e},IE=i=>{we(i,id<<1,3),rn(i,tc,vn),yE(i)},DE=(i,t,e,n)=>{let s,r,a=0;i.level>0?(i.strm.data_type===EE&&(i.strm.data_type=PE(i)),Po(i,i.l_desc),Po(i,i.d_desc),a=bE(i),s=i.opt_len+3+7>>>3,r=i.static_len+3+7>>>3,r<=s&&(s=r)):s=r=e+5,e+4<=s&&t!==-1?Ed(i,t,e,n):i.strategy===mE||r===s?(we(i,(id<<1)+(n?1:0),3),Tl(i,vn,Ss)):(we(i,(SE<<1)+(n?1:0),3),CE(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),Tl(i,i.dyn_ltree,i.dyn_dtree)),pd(i),n&&md(i)},LE=(i,t,e)=>(i.pending_buf[i.sym_buf+i.sym_next++]=t,i.pending_buf[i.sym_buf+i.sym_next++]=t>>8,i.pending_buf[i.sym_buf+i.sym_next++]=e,t===0?i.dyn_ltree[e*2]++:(i.matches++,t--,i.dyn_ltree[(Ts[e]+Fs+1)*2]++,i.dyn_dtree[ud(t)*2]++),i.sym_next===i.sym_end);var FE=UE,OE=Ed,NE=DE,BE=LE,kE=IE,GE={_tr_init:FE,_tr_stored_block:OE,_tr_flush_block:NE,_tr_tally:BE,_tr_align:kE};const HE=(i,t,e,n)=>{let s=i&65535|0,r=i>>>16&65535|0,a=0;for(;e!==0;){a=e>2e3?2e3:e,e-=a;do s=s+t[n++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0};var bs=HE;const zE=()=>{let i,t=[];for(var e=0;e<256;e++){i=e;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;t[e]=i}return t},VE=new Uint32Array(zE()),WE=(i,t,e,n)=>{const s=VE,r=n+e;i^=-1;for(let a=n;a<r;a++)i=i>>>8^s[(i^t[a])&255];return i^-1};var me=WE,ji={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Or={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:YE,_tr_stored_block:Uo,_tr_flush_block:KE,_tr_tally:Vn,_tr_align:$E}=GE,{Z_NO_FLUSH:Wn,Z_PARTIAL_FLUSH:XE,Z_FULL_FLUSH:qE,Z_FINISH:Ge,Z_BLOCK:Pl,Z_OK:Ee,Z_STREAM_END:Ul,Z_STREAM_ERROR:cn,Z_DATA_ERROR:ZE,Z_BUF_ERROR:Ca,Z_DEFAULT_COMPRESSION:jE,Z_FILTERED:JE,Z_HUFFMAN_ONLY:ur,Z_RLE:QE,Z_FIXED:tg,Z_DEFAULT_STRATEGY:eg,Z_UNKNOWN:ng,Z_DEFLATED:Nr}=Or,ig=9,sg=15,rg=8,ag=29,og=256,Io=og+1+ag,cg=30,lg=19,hg=2*Io+1,dg=15,Wt=3,Gn=258,ln=Gn+Wt+1,ug=32,Ji=42,nc=57,Do=69,Lo=73,Fo=91,Oo=103,hi=113,Es=666,Ae=1,ss=2,_i=3,rs=4,fg=3,di=(i,t)=>(i.msg=ji[t],t),Il=i=>i*2-(i>4?9:0),Bn=i=>{let t=i.length;for(;--t>=0;)i[t]=0},_g=i=>{let t,e,n,s=i.w_size;t=i.hash_size,n=t;do e=i.head[--n],i.head[n]=e>=s?e-s:0;while(--t);t=s,n=t;do e=i.prev[--n],i.prev[n]=e>=s?e-s:0;while(--t)};let ic=(i,t,e)=>(t<<i.hash_shift^e)&i.hash_mask;const pi=(i,t)=>{let e;if(i.legacy_hash)e=i.ins_h=ic(i,i.ins_h,i.window[t+Wt-1]);else{const s=i.window,r=s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24;e=i.ins_h=Math.imul(r,66521)+66521>>>16&i.hash_mask}const n=i.prev[t&i.w_mask]=i.head[e];return i.head[e]=t,n},De=i=>{const t=i.state;let e=t.pending;e>i.avail_out&&(e=i.avail_out),e!==0&&(i.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),i.next_out),i.next_out+=e,t.pending_out+=e,i.total_out+=e,i.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},Le=(i,t)=>{KE(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,t),i.block_start=i.strstart,De(i.strm)},Yt=(i,t)=>{i.pending_buf[i.pending++]=t},_s=(i,t)=>{i.pending_buf[i.pending++]=t>>>8&255,i.pending_buf[i.pending++]=t&255},No=(i,t,e,n)=>{let s=i.avail_in;return s>n&&(s=n),s===0?0:(i.avail_in-=s,t.set(i.input.subarray(i.next_in,i.next_in+s),e),i.state.wrap===1?i.adler=bs(i.adler,t,s,e):i.state.wrap===2&&(i.adler=me(i.adler,t,s,e)),i.next_in+=s,i.total_in+=s,s)},gd=(i,t)=>{let e=i.max_chain_length,n=i.strstart,s,r,a=i.prev_length,o=i.nice_match;const l=i.strstart>i.w_size-ln?i.strstart-(i.w_size-ln):0,c=i.window,h=i.w_mask,f=i.prev,d=i.strstart+Gn;let _=c[n+a-1],m=c[n+a];i.prev_length>=i.good_match&&(e>>=2),o>i.lookahead&&(o=i.lookahead);do if(s=t,!(c[s+a]!==m||c[s+a-1]!==_||c[s]!==c[n]||c[++s]!==c[n+1])){n+=2,s++;do;while(c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&c[++n]===c[++s]&&n<d);if(r=Gn-(d-n),n=d-Gn,r>a){if(i.match_start=t,a=r,r>=o)break;_=c[n+a-1],m=c[n+a]}}while((t=f[t&h])>l&&--e!==0);return a<=i.lookahead?a:i.lookahead},Qi=i=>{const t=i.w_size;let e,n,s;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=t+(t-ln)&&(i.window.set(i.window.subarray(t,t+t-n),0),i.match_start-=t,i.strstart-=t,i.block_start-=t,i.insert>i.strstart&&(i.insert=i.strstart),_g(i),n+=t),i.strm.avail_in===0)break;if(e=No(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=e,i.legacy_hash){if(i.lookahead+i.insert>=Wt)for(s=i.strstart-i.insert,i.ins_h=i.window[s],i.ins_h=ic(i,i.ins_h,i.window[s+1]);i.insert&&(pi(i,s),s++,i.insert--,!(i.lookahead+i.insert<Wt)););}else if(i.lookahead+i.insert>Wt)for(s=i.strstart-i.insert;i.insert&&(pi(i,s),s++,i.insert--,!(i.lookahead+i.insert<=Wt)););}while(i.lookahead<ln&&i.strm.avail_in!==0)},Sd=(i,t)=>{let e=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,s,r,a=0,o=i.strm.avail_in;do{if(n=65535,r=i.bi_valid+42>>3,i.strm.avail_out<r||(r=i.strm.avail_out-r,s=i.strstart-i.block_start,n>s+i.strm.avail_in&&(n=s+i.strm.avail_in),n>r&&(n=r),n<e&&(n===0&&t!==Ge||t===Wn||n!==s+i.strm.avail_in)))break;a=t===Ge&&n===s+i.strm.avail_in?1:0,Uo(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,De(i.strm),s&&(s>n&&(s=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+s),i.strm.next_out),i.strm.next_out+=s,i.strm.avail_out-=s,i.strm.total_out+=s,i.block_start+=s,n-=s),n&&(No(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?rs:t!==Wn&&t!==Ge&&i.strm.avail_in===0&&i.strstart===i.block_start?ss:(r=i.window_size-i.strstart,i.strm.avail_in>r&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,r+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),r>i.strm.avail_in&&(r=i.strm.avail_in),r&&(No(i.strm,i.window,i.strstart,r),i.strstart+=r,i.insert+=r>i.w_size-i.insert?i.w_size-i.insert:r),i.high_water<i.strstart&&(i.high_water=i.strstart),r=i.bi_valid+42>>3,r=i.pending_buf_size-r>65535?65535:i.pending_buf_size-r,e=r>i.w_size?i.w_size:r,s=i.strstart-i.block_start,(s>=e||(s||t===Ge)&&t!==Wn&&i.strm.avail_in===0&&s<=r)&&(n=s>r?r:s,a=t===Ge&&i.strm.avail_in===0&&n===s?1:0,Uo(i,i.block_start,n,a),i.block_start+=n,De(i.strm)),a?_i:Ae)},Pa=(i,t)=>{let e,n;for(;;){if(i.lookahead<ln){if(Qi(i),i.lookahead<ln&&t===Wn)return Ae;if(i.lookahead===0)break}if(e=0,i.lookahead>=Wt&&(e=pi(i,i.strstart)),e!==0&&i.strstart-e<=i.w_size-ln&&(i.match_length=gd(i,e)),i.match_length>=Wt)if(n=Vn(i,i.strstart-i.match_start,i.match_length-Wt),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=Wt){i.match_length--;do i.strstart++,e=pi(i,i.strstart);while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.legacy_hash&&(i.ins_h=i.window[i.strstart],i.ins_h=ic(i,i.ins_h,i.window[i.strstart+1]));else n=Vn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=i.strstart<Wt-1?i.strstart:Wt-1,t===Ge?(Le(i,!0),i.strm.avail_out===0?_i:rs):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:ss},Ni=(i,t)=>{let e,n,s;for(;;){if(i.lookahead<ln){if(Qi(i),i.lookahead<ln&&t===Wn)return Ae;if(i.lookahead===0)break}if(e=0,i.lookahead>=Wt&&(e=pi(i,i.strstart)),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=Wt-1,e!==0&&i.prev_length<i.max_lazy_match&&i.strstart-e<=i.w_size-ln&&(i.match_length=gd(i,e),i.match_length<=5&&(i.strategy===JE||i.match_length===Wt&&i.strstart-i.match_start>4096)&&(i.match_length=Wt-1)),i.prev_length>=Wt&&i.match_length<=i.prev_length){s=i.strstart+i.lookahead-Wt,n=Vn(i,i.strstart-1-i.prev_match,i.prev_length-Wt),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=s&&(e=pi(i,i.strstart));while(--i.prev_length!==0);if(i.match_available=0,i.match_length=Wt-1,i.strstart++,n&&(Le(i,!1),i.strm.avail_out===0))return Ae}else if(i.match_available){if(n=Vn(i,0,i.window[i.strstart-1]),n&&Le(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return Ae}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=Vn(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<Wt-1?i.strstart:Wt-1,t===Ge?(Le(i,!0),i.strm.avail_out===0?_i:rs):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:ss},pg=(i,t)=>{let e,n,s,r;const a=i.window;for(;;){if(i.lookahead<=Gn){if(Qi(i),i.lookahead<=Gn&&t===Wn)return Ae;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=Wt&&i.strstart>0&&(s=i.strstart-1,n=a[s],n===a[++s]&&n===a[++s]&&n===a[++s])){r=i.strstart+Gn;do;while(n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&s<r);i.match_length=Gn-(r-s),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=Wt?(e=Vn(i,1,i.match_length-Wt),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(e=Vn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),e&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=0,t===Ge?(Le(i,!0),i.strm.avail_out===0?_i:rs):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:ss},mg=(i,t)=>{let e;for(;;){if(i.lookahead===0&&(Qi(i),i.lookahead===0)){if(t===Wn)return Ae;break}if(i.match_length=0,e=Vn(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,e&&(Le(i,!1),i.strm.avail_out===0))return Ae}return i.insert=0,t===Ge?(Le(i,!0),i.strm.avail_out===0?_i:rs):i.sym_next&&(Le(i,!1),i.strm.avail_out===0)?Ae:ss};function en(i,t,e,n,s){this.good_length=i,this.max_lazy=t,this.nice_length=e,this.max_chain=n,this.func=s}const gs=[new en(0,0,0,0,Sd),new en(4,4,8,4,Pa),new en(4,5,16,8,Pa),new en(4,6,32,32,Pa),new en(4,4,16,16,Ni),new en(8,16,32,32,Ni),new en(8,16,128,128,Ni),new en(8,32,128,256,Ni),new en(32,128,258,1024,Ni),new en(32,258,258,4096,Ni)],Eg=i=>{i.window_size=2*i.w_size,Bn(i.head),i.max_lazy_match=gs[i.level].max_lazy,i.good_match=gs[i.level].good_length,i.nice_match=gs[i.level].nice_length,i.max_chain_length=gs[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=Wt-1,i.match_available=0,i.ins_h=0};function gg(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Nr,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(hg*2),this.dyn_dtree=new Uint16Array((2*cg+1)*2),this.bl_tree=new Uint16Array((2*lg+1)*2),Bn(this.dyn_ltree),Bn(this.dyn_dtree),Bn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(dg+1),this.heap=new Uint16Array(2*Io+1),Bn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Io+1),Bn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Os=i=>{if(!i)return 1;const t=i.state;return!t||t.strm!==i||t.status!==Ji&&t.status!==nc&&t.status!==Do&&t.status!==Lo&&t.status!==Fo&&t.status!==Oo&&t.status!==hi&&t.status!==Es?1:0},xd=i=>{if(Os(i))return di(i,cn);i.total_in=i.total_out=0,i.data_type=ng;const t=i.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?nc:t.wrap?Ji:hi,i.adler=t.wrap===2?0:1,t.last_flush=-2,YE(t),Ee},vd=i=>{const t=xd(i);return t===Ee&&Eg(i.state),t},Sg=(i,t)=>Os(i)||i.state.wrap!==2?cn:(i.state.gzhead=t,Ee),Md=(i,t,e,n,s,r,a)=>{if(!i)return cn;let o=1;if(t===jE&&(t=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),s<1||s>ig||e!==Nr||n<8||n>15||t<0||t>9||r<0||r>tg||n===8&&o!==1)return di(i,cn);n===8&&(n=9);const l=new gg;return i.state=l,l.strm=i,l.status=Ji,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.legacy_hash=a?1:0,l.hash_bits=s+7,!l.legacy_hash&&l.hash_bits<15&&(l.hash_bits=15),l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+Wt-1)/Wt),l.window=new Uint8Array(l.w_size*2),l.head=new Uint16Array(l.hash_size),l.prev=new Uint16Array(l.w_size),l.lit_bufsize=1<<s+6,l.pending_buf_size=l.lit_bufsize*4,l.pending_buf=new Uint8Array(l.pending_buf_size),l.sym_buf=l.lit_bufsize,l.sym_end=(l.lit_bufsize-1)*3,l.level=t,l.strategy=r,l.method=e,vd(i)},xg=(i,t)=>Md(i,t,Nr,sg,rg,eg),vg=(i,t)=>{if(Os(i)||t>Pl||t<0)return i?di(i,cn):cn;const e=i.state;if(!i.output||i.avail_in!==0&&!i.input||e.status===Es&&t!==Ge)return di(i,i.avail_out===0?Ca:cn);const n=e.last_flush;if(e.last_flush=t,e.pending!==0){if(De(i),i.avail_out===0)return e.last_flush=-1,Ee}else if(i.avail_in===0&&Il(t)<=Il(n)&&t!==Ge)return di(i,Ca);if(e.status===Es&&i.avail_in!==0)return di(i,Ca);if(e.status===Ji&&e.wrap===0&&(e.status=hi),e.status===Ji){let s=Nr+(e.w_bits-8<<4)<<8,r=-1;if(e.strategy>=ur||e.level<2?r=0:e.level<6?r=1:e.level===6?r=2:r=3,s|=r<<6,e.strstart!==0&&(s|=ug),s+=31-s%31,_s(e,s),e.strstart!==0&&(_s(e,i.adler>>>16),_s(e,i.adler&65535)),i.adler=1,e.status=hi,De(i),e.pending!==0)return e.last_flush=-1,Ee}if(e.status===nc){if(i.adler=0,Yt(e,31),Yt(e,139),Yt(e,8),e.gzhead)Yt(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),Yt(e,e.gzhead.time&255),Yt(e,e.gzhead.time>>8&255),Yt(e,e.gzhead.time>>16&255),Yt(e,e.gzhead.time>>24&255),Yt(e,e.level===9?2:e.strategy>=ur||e.level<2?4:0),Yt(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(Yt(e,e.gzhead.extra.length&255),Yt(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(i.adler=me(i.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=Do;else if(Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,0),Yt(e,e.level===9?2:e.strategy>=ur||e.level<2?4:0),Yt(e,fg),e.status=hi,De(i),e.pending!==0)return e.last_flush=-1,Ee}if(e.status===Do){if(e.gzhead.extra){let s=e.pending,r=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+r>e.pending_buf_size;){let o=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+o),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex+=o,De(i),e.pending!==0)return e.last_flush=-1,Ee;s=0,r-=o}let a=new Uint8Array(e.gzhead.extra);e.pending_buf.set(a.subarray(e.gzindex,e.gzindex+r),e.pending),e.pending+=r,e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex=0}e.status=Lo}if(e.status===Lo){if(e.gzhead.name){let s=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),De(i),e.pending!==0)return e.last_flush=-1,Ee;s=0}e.gzindex<e.gzhead.name.length?r=e.gzhead.name.charCodeAt(e.gzindex++)&255:r=0,Yt(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),e.gzindex=0}e.status=Fo}if(e.status===Fo){if(e.gzhead.comment){let s=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s)),De(i),e.pending!==0)return e.last_flush=-1,Ee;s=0}e.gzindex<e.gzhead.comment.length?r=e.gzhead.comment.charCodeAt(e.gzindex++)&255:r=0,Yt(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>s&&(i.adler=me(i.adler,e.pending_buf,e.pending-s,s))}e.status=Oo}if(e.status===Oo){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(De(i),e.pending!==0))return e.last_flush=-1,Ee;Yt(e,i.adler&255),Yt(e,i.adler>>8&255),i.adler=0}if(e.status=hi,De(i),e.pending!==0)return e.last_flush=-1,Ee}if(i.avail_in!==0||e.lookahead!==0||t!==Wn&&e.status!==Es){let s=e.level===0?Sd(e,t):e.strategy===ur?mg(e,t):e.strategy===QE?pg(e,t):gs[e.level].func(e,t);if((s===_i||s===rs)&&(e.status=Es),s===Ae||s===_i)return i.avail_out===0&&(e.last_flush=-1),Ee;if(s===ss&&(t===XE?$E(e):t!==Pl&&(Uo(e,0,0,!1),t===qE&&(Bn(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),De(i),i.avail_out===0))return e.last_flush=-1,Ee}return t!==Ge?Ee:e.wrap<=0?Ul:(e.wrap===2?(Yt(e,i.adler&255),Yt(e,i.adler>>8&255),Yt(e,i.adler>>16&255),Yt(e,i.adler>>24&255),Yt(e,i.total_in&255),Yt(e,i.total_in>>8&255),Yt(e,i.total_in>>16&255),Yt(e,i.total_in>>24&255)):(_s(e,i.adler>>>16),_s(e,i.adler&65535)),De(i),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?Ee:Ul)},Mg=i=>{if(Os(i))return cn;const t=i.state.status;return i.state=null,t===hi?di(i,ZE):Ee},Ag=(i,t)=>{let e=t.length;if(Os(i))return cn;const n=i.state,s=n.wrap;if(s===2||s===1&&n.status!==Ji||n.lookahead)return cn;if(s===1&&(i.adler=bs(i.adler,t,e,0)),n.wrap=0,e>=n.w_size){s===0&&(Bn(n.head),n.strstart=0,n.block_start=0,n.insert=0);let l=new Uint8Array(n.w_size);l.set(t.subarray(e-n.w_size,e),0),t=l,e=n.w_size}const r=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=e,i.next_in=0,i.input=t,Qi(n);n.lookahead>=Wt;){let l=n.strstart,c=n.lookahead-(Wt-1);do pi(n,l),l++;while(--c);n.strstart=l,n.lookahead=Wt-1,Qi(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Wt-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=r,n.wrap=s,Ee};var Rg=xg,yg=Md,Tg=vd,wg=xd,bg=Sg,Cg=vg,Pg=Mg,Ug=Ag,Ig="pako deflate (from Nodeca project)",xs={deflateInit:Rg,deflateInit2:yg,deflateReset:Tg,deflateResetKeep:wg,deflateSetHeader:bg,deflate:Cg,deflateEnd:Pg,deflateSetDictionary:Ug,deflateInfo:Ig};const Dg=(i,t)=>Object.prototype.hasOwnProperty.call(i,t);var Lg=function(i){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(const n in e)Dg(e,n)&&(i[n]=e[n])}}return i},Fg=i=>{let t=0;for(let n=0,s=i.length;n<s;n++)t+=i[n].length;const e=new Uint8Array(t);for(let n=0,s=0,r=i.length;n<r;n++){let a=i[n];e.set(a,s),s+=a.length}return e},Br={assign:Lg,flattenChunks:Fg};let Ad=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Ad=!1}const Cs=new Uint8Array(256);for(let i=0;i<256;i++)Cs[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;Cs[254]=Cs[255]=1;var Og=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let t,e,n,s,r,a=i.length,o=0;for(s=0;s<a;s++)e=i.charCodeAt(s),(e&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),s++)),o+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(o),r=0,s=0;r<o;s++)e=i.charCodeAt(s),(e&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),s++)),e<128?t[r++]=e:e<2048?(t[r++]=192|e>>>6,t[r++]=128|e&63):e<65536?(t[r++]=224|e>>>12,t[r++]=128|e>>>6&63,t[r++]=128|e&63):(t[r++]=240|e>>>18,t[r++]=128|e>>>12&63,t[r++]=128|e>>>6&63,t[r++]=128|e&63);return t};const Ng=(i,t)=>{if(t<65534&&i.subarray&&Ad)return String.fromCharCode.apply(null,i.length===t?i:i.subarray(0,t));let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(i[n]);return e};var Bg=(i,t)=>{const e=t||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,t));let n,s;const r=new Array(e*2);for(s=0,n=0;n<e;){let a=i[n++];if(a<128){r[s++]=a;continue}let o=Cs[a];if(o>4){r[s++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<e;)a=a<<6|i[n++]&63,o--;if(o>1){r[s++]=65533;continue}a<65536?r[s++]=a:(a-=65536,r[s++]=55296|a>>10&1023,r[s++]=56320|a&1023)}return Ng(r,s)},kg=(i,t)=>{t=t||i.length,t>i.length&&(t=i.length);let e=t-1;for(;e>=0&&(i[e]&192)===128;)e--;return e<0||e===0?t:e+Cs[i[e]]>t?e:t},Ps={string2buf:Og,buf2string:Bg,utf8border:kg};function Gg(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Rd=Gg;const yd=Object.prototype.toString,{Z_NO_FLUSH:Hg,Z_SYNC_FLUSH:zg,Z_FULL_FLUSH:Vg,Z_FINISH:Wg,Z_OK:Pr,Z_STREAM_END:Yg,Z_DEFAULT_COMPRESSION:Kg,Z_DEFAULT_STRATEGY:$g,Z_DEFLATED:Xg}=Or,qg={level:Kg,method:Xg,chunkSize:16384,windowBits:15,memLevel:8,strategy:$g,legacyHash:!0};function kr(i){this.options=Br.assign({},qg,i||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Rd,this.strm.avail_out=0;let e=xs.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy,t.legacyHash);if(e!==Pr)throw new Error(ji[e]);if(t.header&&xs.deflateSetHeader(this.strm,t.header),t.dictionary){let n;if(typeof t.dictionary=="string"?n=Ps.string2buf(t.dictionary):yd.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,e=xs.deflateSetDictionary(this.strm,n),e!==Pr)throw new Error(ji[e]);this._dict_set=!0}}kr.prototype.push=function(i,t){const e=this.strm,n=this.options.chunkSize;let s,r;if(this.ended)return!1;for(t===~~t?r=t:r=t===!0?Wg:Hg,typeof i=="string"?e.input=Ps.string2buf(i):yd.call(i)==="[object ArrayBuffer]"?e.input=new Uint8Array(i):e.input=i,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),(r===zg||r===Vg)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(s=xs.deflate(e,r),s===Yg)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),s=xs.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===Pr;if(e.avail_out===0){this.onData(e.output);continue}if(r>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};kr.prototype.onData=function(i){this.chunks.push(i)};kr.prototype.onEnd=function(i){i===Pr&&(this.result=Br.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function Zg(i,t){const e=new kr(t);if(e.push(i,!0),e.err)throw e.msg||ji[e.err];return e.result}var jg=Zg,Jg={deflate:jg};const fr=16209,Qg=16191;var tS=function(t,e){let n,s,r,a,o,l,c,h,f,d,_,m,g,p,u,R,x,E,P,w,y,C,M,S;const b=t.state;n=t.next_in,M=t.input,s=n+(t.avail_in-5),r=t.next_out,S=t.output,a=r-(e-t.avail_out),o=r+(t.avail_out-257),l=b.dmax,c=b.wsize,h=b.whave,f=b.wnext,d=b.window,_=b.hold,m=b.bits,g=b.lencode,p=b.distcode,u=(1<<b.lenbits)-1,R=(1<<b.distbits)-1;t:do{m<15&&(_+=M[n++]<<m,m+=8,_+=M[n++]<<m,m+=8),x=g[_&u];e:for(;;){if(E=x>>>24,_>>>=E,m-=E,E=x>>>16&255,E===0)S[r++]=x&65535;else if(E&16){P=x&65535,E&=15,E&&(m<E&&(_+=M[n++]<<m,m+=8),P+=_&(1<<E)-1,_>>>=E,m-=E),m<15&&(_+=M[n++]<<m,m+=8,_+=M[n++]<<m,m+=8),x=p[_&R];n:for(;;){if(E=x>>>24,_>>>=E,m-=E,E=x>>>16&255,E&16){if(w=x&65535,E&=15,m<E&&(_+=M[n++]<<m,m+=8,m<E&&(_+=M[n++]<<m,m+=8)),w+=_&(1<<E)-1,w>l){t.msg="invalid distance too far back",b.mode=fr;break t}if(_>>>=E,m-=E,E=r-a,w>E){if(E=w-E,E>h&&b.sane){t.msg="invalid distance too far back",b.mode=fr;break t}if(y=0,C=d,f===0){if(y+=c-E,E<P){P-=E;do S[r++]=d[y++];while(--E);y=r-w,C=S}}else if(f<E){if(y+=c+f-E,E-=f,E<P){P-=E;do S[r++]=d[y++];while(--E);if(y=0,f<P){E=f,P-=E;do S[r++]=d[y++];while(--E);y=r-w,C=S}}}else if(y+=f-E,E<P){P-=E;do S[r++]=d[y++];while(--E);y=r-w,C=S}for(;P>2;)S[r++]=C[y++],S[r++]=C[y++],S[r++]=C[y++],P-=3;P&&(S[r++]=C[y++],P>1&&(S[r++]=C[y++]))}else{y=r-w;do S[r++]=S[y++],S[r++]=S[y++],S[r++]=S[y++],P-=3;while(P>2);P&&(S[r++]=S[y++],P>1&&(S[r++]=S[y++]))}}else if((E&64)===0){x=p[(x&65535)+(_&(1<<E)-1)];continue n}else{t.msg="invalid distance code",b.mode=fr;break t}break}}else if((E&64)===0){x=g[(x&65535)+(_&(1<<E)-1)];continue e}else if(E&32){b.mode=Qg;break t}else{t.msg="invalid literal/length code",b.mode=fr;break t}break}}while(n<s&&r<o);P=m>>3,n-=P,m-=P<<3,_&=(1<<m)-1,t.next_in=n,t.next_out=r,t.avail_in=n<s?5+(s-n):5-(n-s),t.avail_out=r<o?257+(o-r):257-(r-o),b.hold=_,b.bits=m};const Bi=15,Dl=852,Ll=592,Fl=0,Ua=1,Ol=2,eS=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),nS=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),iS=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),sS=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),rS=(i,t,e,n,s,r,a,o)=>{const l=o.bits;let c=0,h=0,f=0,d=0,_=0,m=0,g=0,p=0,u=0,R=0,x,E,P,w,y,C=null,M;const S=new Uint16Array(Bi+1),b=new Uint16Array(Bi+1);let N=null,F,H,z;for(c=0;c<=Bi;c++)S[c]=0;for(h=0;h<n;h++)S[t[e+h]]++;for(_=l,d=Bi;d>=1&&S[d]===0;d--);if(_>d&&(_=d),d===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&S[f]===0;f++);for(_<f&&(_=f),p=1,c=1;c<=Bi;c++)if(p<<=1,p-=S[c],p<0)return-1;if(p>0&&(i===Fl||d!==1))return-1;for(b[1]=0,c=1;c<Bi;c++)b[c+1]=b[c]+S[c];for(h=0;h<n;h++)t[e+h]!==0&&(a[b[t[e+h]]++]=h);if(i===Fl?(C=N=a,M=20):i===Ua?(C=eS,N=nS,M=257):(C=iS,N=sS,M=0),R=0,h=0,c=f,y=r,m=_,g=0,P=-1,u=1<<_,w=u-1,i===Ua&&u>Dl||i===Ol&&u>Ll)return 1;for(;;){F=c-g,a[h]+1<M?(H=0,z=a[h]):a[h]>=M?(H=N[a[h]-M],z=C[a[h]-M]):(H=96,z=0),x=1<<c-g,E=1<<m,f=E;do E-=x,s[y+(R>>g)+E]=F<<24|H<<16|z|0;while(E!==0);for(x=1<<c-1;R&x;)x>>=1;if(x!==0?(R&=x-1,R+=x):R=0,h++,--S[c]===0){if(c===d)break;c=t[e+a[h]]}if(c>_&&(R&w)!==P){for(g===0&&(g=_),y+=f,m=c-g,p=1<<m;m+g<d&&(p-=S[m+g],!(p<=0));)m++,p<<=1;if(u+=1<<m,i===Ua&&u>Dl||i===Ol&&u>Ll)return 1;P=R&w,s[P]=_<<24|m<<16|y-r|0}}return R!==0&&(s[y+R]=c-g<<24|64<<16|0),o.bits=_,0};var vs=rS;const aS=0,Td=1,wd=2,{Z_FINISH:Nl,Z_BLOCK:oS,Z_TREES:_r,Z_OK:mi,Z_STREAM_END:cS,Z_NEED_DICT:lS,Z_STREAM_ERROR:He,Z_DATA_ERROR:bd,Z_MEM_ERROR:Cd,Z_BUF_ERROR:hS,Z_DEFLATED:Bl}=Or,Gr=16180,kl=16181,Gl=16182,Hl=16183,zl=16184,Vl=16185,Wl=16186,Yl=16187,Kl=16188,$l=16189,Ur=16190,Sn=16191,Ia=16192,Xl=16193,Da=16194,ql=16195,Zl=16196,jl=16197,Jl=16198,pr=16199,mr=16200,Ql=16201,th=16202,eh=16203,nh=16204,ih=16205,La=16206,sh=16207,rh=16208,re=16209,Pd=16210,Ud=16211,dS=852,uS=592,fS=15,_S=fS,ah=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function pS(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const xi=i=>{if(!i)return 1;const t=i.state;return!t||t.strm!==i||t.mode<Gr||t.mode>Ud?1:0},Id=i=>{if(xi(i))return He;const t=i.state;return i.total_in=i.total_out=t.total=0,i.msg="",t.wrap&&(i.adler=t.wrap&1),t.mode=Gr,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(dS),t.distcode=t.distdyn=new Int32Array(uS),t.sane=1,t.back=-1,mi},Dd=i=>{if(xi(i))return He;const t=i.state;return t.wsize=0,t.whave=0,t.wnext=0,Id(i)},Ld=(i,t)=>{let e;if(xi(i))return He;const n=i.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?He:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=e,n.wbits=t,Dd(i))},Fd=(i,t)=>{if(!i)return He;const e=new pS;i.state=e,e.strm=i,e.window=null,e.mode=Gr;const n=Ld(i,t);return n!==mi&&(i.state=null),n},mS=i=>Fd(i,_S);let oh=!0,Fa,Oa;const ES=i=>{if(oh){Fa=new Int32Array(512),Oa=new Int32Array(32);let t=0;for(;t<144;)i.lens[t++]=8;for(;t<256;)i.lens[t++]=9;for(;t<280;)i.lens[t++]=7;for(;t<288;)i.lens[t++]=8;for(vs(Td,i.lens,0,288,Fa,0,i.work,{bits:9}),t=0;t<32;)i.lens[t++]=5;vs(wd,i.lens,0,32,Oa,0,i.work,{bits:5}),oh=!1}i.lencode=Fa,i.lenbits=9,i.distcode=Oa,i.distbits=5},Od=(i,t,e,n)=>{let s;const r=i.state;return r.window===null&&(r.window=new Uint8Array(1<<r.wbits)),r.wsize===0&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0),n>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>n&&(s=n),r.window.set(t.subarray(e-n,e-n+s),r.wnext),n-=s,n?(r.window.set(t.subarray(e-n,e),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},gS=(i,t)=>{let e,n,s,r,a,o,l,c,h,f,d,_,m,g,p=0,u,R,x,E,P,w,y,C;const M=new Uint8Array(4);let S,b;const N=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(xi(i)||!i.output||!i.input&&i.avail_in!==0)return He;e=i.state,e.mode===Sn&&(e.mode=Ia),a=i.next_out,s=i.output,l=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,c=e.hold,h=e.bits,f=o,d=l,C=mi;t:for(;;)switch(e.mode){case Gr:if(e.wrap===0){e.mode=Ia;break}for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&2&&c===35615){e.wbits===0&&(e.wbits=15),e.check=0,M[0]=c&255,M[1]=c>>>8&255,e.check=me(e.check,M,2,0),c=0,h=0,e.mode=kl;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((c&255)<<8)+(c>>8))%31){i.msg="incorrect header check",e.mode=re;break}if((c&15)!==Bl){i.msg="unknown compression method",e.mode=re;break}if(c>>>=4,h-=4,y=(c&15)+8,e.wbits===0&&(e.wbits=y),y>15||y>e.wbits){i.msg="invalid window size",e.mode=re;break}e.dmax=1<<e.wbits,e.flags=0,i.adler=e.check=1,e.mode=c&512?$l:Sn,c=0,h=0;break;case kl:for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.flags=c,(e.flags&255)!==Bl){i.msg="unknown compression method",e.mode=re;break}if(e.flags&57344){i.msg="unknown header flags set",e.mode=re;break}e.head&&(e.head.text=c>>8&1),e.flags&512&&e.wrap&4&&(M[0]=c&255,M[1]=c>>>8&255,e.check=me(e.check,M,2,0)),c=0,h=0,e.mode=Gl;case Gl:for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.head&&(e.head.time=c),e.flags&512&&e.wrap&4&&(M[0]=c&255,M[1]=c>>>8&255,M[2]=c>>>16&255,M[3]=c>>>24&255,e.check=me(e.check,M,4,0)),c=0,h=0,e.mode=Hl;case Hl:for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.head&&(e.head.xflags=c&255,e.head.os=c>>8),e.flags&512&&e.wrap&4&&(M[0]=c&255,M[1]=c>>>8&255,e.check=me(e.check,M,2,0)),c=0,h=0,e.mode=zl;case zl:if(e.flags&1024){for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.length=c,e.head&&(e.head.extra_len=c),e.flags&512&&e.wrap&4&&(M[0]=c&255,M[1]=c>>>8&255,e.check=me(e.check,M,2,0)),c=0,h=0}else e.head&&(e.head.extra=null);e.mode=Vl;case Vl:if(e.flags&1024&&(_=e.length,_>o&&(_=o),_&&(e.head&&(y=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(n.subarray(r,r+_),y)),e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,e.length-=_),e.length))break t;e.length=0,e.mode=Wl;case Wl:if(e.flags&2048){if(o===0)break t;_=0;do y=n[r+_++],e.head&&y&&e.length<65536&&(e.head.name+=String.fromCharCode(y));while(y&&_<o);if(e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,y)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=Yl;case Yl:if(e.flags&4096){if(o===0)break t;_=0;do y=n[r+_++],e.head&&y&&e.length<65536&&(e.head.comment+=String.fromCharCode(y));while(y&&_<o);if(e.flags&512&&e.wrap&4&&(e.check=me(e.check,n,_,r)),o-=_,r+=_,y)break t}else e.head&&(e.head.comment=null);e.mode=Kl;case Kl:if(e.flags&512){for(;h<16;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&4&&c!==(e.check&65535)){i.msg="header crc mismatch",e.mode=re;break}c=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),i.adler=e.check=0,e.mode=Sn;break;case $l:for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}i.adler=e.check=ah(c),c=0,h=0,e.mode=Ur;case Ur:if(e.havedict===0)return i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,lS;i.adler=e.check=1,e.mode=Sn;case Sn:if(t===oS||t===_r)break t;case Ia:if(e.last){c>>>=h&7,h-=h&7,e.mode=La;break}for(;h<3;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}switch(e.last=c&1,c>>>=1,h-=1,c&3){case 0:e.mode=Xl;break;case 1:if(ES(e),e.mode=pr,t===_r){c>>>=2,h-=2;break t}break;case 2:e.mode=Zl;break;case 3:i.msg="invalid block type",e.mode=re}c>>>=2,h-=2;break;case Xl:for(c>>>=h&7,h-=h&7;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if((c&65535)!==(c>>>16^65535)){i.msg="invalid stored block lengths",e.mode=re;break}if(e.length=c&65535,c=0,h=0,e.mode=Da,t===_r)break t;case Da:e.mode=ql;case ql:if(_=e.length,_){if(_>o&&(_=o),_>l&&(_=l),_===0)break t;s.set(n.subarray(r,r+_),a),o-=_,r+=_,l-=_,a+=_,e.length-=_;break}e.mode=Sn;break;case Zl:for(;h<14;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.nlen=(c&31)+257,c>>>=5,h-=5,e.ndist=(c&31)+1,c>>>=5,h-=5,e.ncode=(c&15)+4,c>>>=4,h-=4,e.nlen>286||e.ndist>30){i.msg="too many length or distance symbols",e.mode=re;break}e.have=0,e.mode=jl;case jl:for(;e.have<e.ncode;){for(;h<3;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.lens[N[e.have++]]=c&7,c>>>=3,h-=3}for(;e.have<19;)e.lens[N[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,S={bits:e.lenbits},C=vs(aS,e.lens,0,19,e.lencode,0,e.work,S),e.lenbits=S.bits,C){i.msg="invalid code lengths set",e.mode=re;break}e.have=0,e.mode=Jl;case Jl:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[c&(1<<e.lenbits)-1],u=p>>>24,R=p>>>16&255,x=p&65535,!(u<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(x<16)c>>>=u,h-=u,e.lens[e.have++]=x;else{if(x===16){for(b=u+2;h<b;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(c>>>=u,h-=u,e.have===0){i.msg="invalid bit length repeat",e.mode=re;break}y=e.lens[e.have-1],_=3+(c&3),c>>>=2,h-=2}else if(x===17){for(b=u+3;h<b;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=u,h-=u,y=0,_=3+(c&7),c>>>=3,h-=3}else{for(b=u+7;h<b;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=u,h-=u,y=0,_=11+(c&127),c>>>=7,h-=7}if(e.have+_>e.nlen+e.ndist){i.msg="invalid bit length repeat",e.mode=re;break}for(;_--;)e.lens[e.have++]=y}}if(e.mode===re)break;if(e.lens[256]===0){i.msg="invalid code -- missing end-of-block",e.mode=re;break}if(e.lenbits=9,S={bits:e.lenbits},C=vs(Td,e.lens,0,e.nlen,e.lencode,0,e.work,S),e.lenbits=S.bits,C){i.msg="invalid literal/lengths set",e.mode=re;break}if(e.distbits=6,e.distcode=e.distdyn,S={bits:e.distbits},C=vs(wd,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,S),e.distbits=S.bits,C){i.msg="invalid distances set",e.mode=re;break}if(e.mode=pr,t===_r)break t;case pr:e.mode=mr;case mr:if(o>=6&&l>=258){i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,tS(i,d),a=i.next_out,s=i.output,l=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,c=e.hold,h=e.bits,e.mode===Sn&&(e.back=-1);break}for(e.back=0;p=e.lencode[c&(1<<e.lenbits)-1],u=p>>>24,R=p>>>16&255,x=p&65535,!(u<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(R&&(R&240)===0){for(E=u,P=R,w=x;p=e.lencode[w+((c&(1<<E+P)-1)>>E)],u=p>>>24,R=p>>>16&255,x=p&65535,!(E+u<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=E,h-=E,e.back+=E}if(c>>>=u,h-=u,e.back+=u,e.length=x,R===0){e.mode=ih;break}if(R&32){e.back=-1,e.mode=Sn;break}if(R&64){i.msg="invalid literal/length code",e.mode=re;break}e.extra=R&15,e.mode=Ql;case Ql:if(e.extra){for(b=e.extra;h<b;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.length+=c&(1<<e.extra)-1,c>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=th;case th:for(;p=e.distcode[c&(1<<e.distbits)-1],u=p>>>24,R=p>>>16&255,x=p&65535,!(u<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if((R&240)===0){for(E=u,P=R,w=x;p=e.distcode[w+((c&(1<<E+P)-1)>>E)],u=p>>>24,R=p>>>16&255,x=p&65535,!(E+u<=h);){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}c>>>=E,h-=E,e.back+=E}if(c>>>=u,h-=u,e.back+=u,R&64){i.msg="invalid distance code",e.mode=re;break}e.offset=x,e.extra=R&15,e.mode=eh;case eh:if(e.extra){for(b=e.extra;h<b;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}e.offset+=c&(1<<e.extra)-1,c>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){i.msg="invalid distance too far back",e.mode=re;break}e.mode=nh;case nh:if(l===0)break t;if(_=d-l,e.offset>_){if(_=e.offset-_,_>e.whave&&e.sane){i.msg="invalid distance too far back",e.mode=re;break}_>e.wnext?(_-=e.wnext,m=e.wsize-_):m=e.wnext-_,_>e.length&&(_=e.length),g=e.window}else g=s,m=a-e.offset,_=e.length;_>l&&(_=l),l-=_,e.length-=_;do s[a++]=g[m++];while(--_);e.length===0&&(e.mode=mr);break;case ih:if(l===0)break t;s[a++]=e.length,l--,e.mode=mr;break;case La:if(e.wrap){for(;h<32;){if(o===0)break t;o--,c|=n[r++]<<h,h+=8}if(d-=l,i.total_out+=d,e.total+=d,e.wrap&4&&d&&(i.adler=e.check=e.flags?me(e.check,s,d,a-d):bs(e.check,s,d,a-d)),d=l,e.wrap&4&&(e.flags?c:ah(c))!==e.check){i.msg="incorrect data check",e.mode=re;break}c=0,h=0}e.mode=sh;case sh:if(e.wrap&&e.flags){for(;h<32;){if(o===0)break t;o--,c+=n[r++]<<h,h+=8}if(e.wrap&4&&c!==(e.total&4294967295)){i.msg="incorrect length check",e.mode=re;break}c=0,h=0}e.mode=rh;case rh:C=cS;break t;case re:C=bd;break t;case Pd:return Cd;case Ud:default:return He}return i.next_out=a,i.avail_out=l,i.next_in=r,i.avail_in=o,e.hold=c,e.bits=h,(e.wsize||d!==i.avail_out&&e.mode<re&&(e.mode<La||t!==Nl))&&Od(i,i.output,i.next_out,d-i.avail_out),f-=i.avail_in,d-=i.avail_out,i.total_in+=f,i.total_out+=d,e.total+=d,e.wrap&4&&d&&(i.adler=e.check=e.flags?me(e.check,s,d,i.next_out-d):bs(e.check,s,d,i.next_out-d)),i.data_type=e.bits+(e.last?64:0)+(e.mode===Sn?128:0)+(e.mode===pr||e.mode===Da?256:0),(f===0&&d===0||t===Nl)&&C===mi&&(C=hS),C},SS=i=>{if(xi(i))return He;let t=i.state;return t.window&&(t.window=null),i.state=null,mi},xS=(i,t)=>{if(xi(i))return He;const e=i.state;return(e.wrap&2)===0?He:(e.head=t,t.done=!1,mi)},vS=(i,t)=>{const e=t.length;let n,s,r;return xi(i)||(n=i.state,n.wrap!==0&&n.mode!==Ur)?He:n.mode===Ur&&(s=1,s=bs(s,t,e,0),s!==n.check)?bd:(r=Od(i,t,e,e),r?(n.mode=Pd,Cd):(n.havedict=1,mi))};var MS=Dd,AS=Ld,RS=Id,yS=mS,TS=Fd,wS=gS,bS=SS,CS=xS,PS=vS,US="pako inflate (from Nodeca project)",nn={inflateReset:MS,inflateReset2:AS,inflateResetKeep:RS,inflateInit:yS,inflateInit2:TS,inflate:wS,inflateEnd:bS,inflateGetHeader:CS,inflateSetDictionary:PS,inflateInfo:US};function IS(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var DS=IS;const Nd=Object.prototype.toString,{Z_NO_FLUSH:LS,Z_FINISH:ch,Z_OK:Wi,Z_STREAM_END:Na,Z_NEED_DICT:Ba,Z_STREAM_ERROR:FS,Z_DATA_ERROR:lh,Z_MEM_ERROR:OS,Z_BUF_ERROR:hh}=Or,NS={chunkSize:1024*64,windowBits:15,to:""};function Hr(i){this.options=Br.assign({},NS,i||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(i&&i.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Rd,this.strm.avail_out=0;let e=nn.inflateInit2(this.strm,t.windowBits);if(e!==Wi)throw new Error(ji[e]);if(this.header=new DS,nn.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Ps.string2buf(t.dictionary):Nd.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=nn.inflateSetDictionary(this.strm,t.dictionary),e!==Wi)))throw new Error(ji[e])}Hr.prototype.push=function(i,t){const e=this.strm,n=this.options.chunkSize,s=this.options.dictionary;let r,a,o;if(this.ended)return!1;for(t===~~t?a=t:a=t===!0?ch:LS,Nd.call(i)==="[object ArrayBuffer]"?e.input=new Uint8Array(i):e.input=i,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),r=nn.inflate(e,a),r===Ba&&s&&(r=nn.inflateSetDictionary(e,s),r===Wi?r=nn.inflate(e,a):r===lh&&(r=Ba));e.avail_in>0&&r===Na&&e.state.wrap&2&&e.state.flags!==0&&e.input[e.next_in]!==0;)nn.inflateReset(e),r=nn.inflate(e,a);switch(r){case FS:case lh:case Ba:case OS:return this.onEnd(r),this.ended=!0,!1}if(o=e.avail_out,e.next_out&&(e.avail_out===0||r===Na||a>0))if(this.options.to==="string"){let l=Ps.utf8border(e.output,e.next_out),c=e.next_out-l,h=Ps.buf2string(e.output,l);e.next_out=c,e.avail_out=n-c,c&&e.output.set(e.output.subarray(l,l+c),0),this.onData(h)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out)),e.avail_out=0,e.next_out=0;if(!((r===Wi||r===hh)&&o===0)){if(r===Na)return r=nn.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(e.avail_in===0){if(a===ch)return r=nn.inflateEnd(this.strm),this.onEnd(r===Wi?hh:r),this.ended=!0,!1;break}}}return!0};Hr.prototype.onData=function(i){this.chunks.push(i)};Hr.prototype.onEnd=function(i){i===Wi&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Br.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};var BS=Hr,kS={Inflate:BS};const{deflate:GS}=Jg,{Inflate:HS}=kS;var zS=GS,VS=HS;function Bo(i,t,e=255){const n=i.length%t;if(n!==0){const s=new Uint8Array(t-n).fill(e),r=new Uint8Array(i.length+s.length);return r.set(i),r.set(s,i.length),r}return i}const sc=239;function dh(i,t=sc){for(let e=0;e<i.length;e++)t^=i[e];return t}function zr(i){const t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return t}function An(i){return new Promise(t=>setTimeout(t,i))}class Bd{constructor(t,e=!1,n=!0){this.device=t,this.tracing=e,this.slipReaderEnabled=!1,this.baudrate=0,this.traceLog="",this.lastTraceTime=Date.now(),this.buffer=new Uint8Array(0),this.onDeviceLostCallback=null,this.SLIP_END=192,this.SLIP_ESC=219,this.SLIP_ESC_END=220,this.SLIP_ESC_ESC=221,this._DTR_state=!1,this.slipReaderEnabled=n}setDeviceLostCallback(t){this.onDeviceLostCallback=t}updateDevice(t){this.device=t,this.trace("Device reference updated")}getInfo(){const t=this.device.getInfo();return t.usbVendorId&&t.usbProductId?`WebSerial VendorID 0x${t.usbVendorId.toString(16)} ProductID 0x${t.usbProductId.toString(16)}`:""}getVid(){return this.device.getInfo().usbVendorId}getPid(){return this.device.getInfo().usbProductId}trace(t){const s=`${`TRACE ${(Date.now()-this.lastTraceTime).toFixed(3)}`} ${t}`;console.log(s),this.traceLog+=s+`
`}async returnTrace(){try{await navigator.clipboard.writeText(this.traceLog),console.log("Text copied to clipboard!")}catch(t){console.error("Failed to copy text:",t)}}hexify(t){return Array.from(t).map(e=>e.toString(16).padStart(2,"0")).join("").padEnd(16," ")}hexConvert(t,e=!0){if(e&&t.length>16){let n="",s=t;for(;s.length>0;){const r=s.slice(0,16),a=String.fromCharCode(...r).split("").map(o=>o===" "||o>=" "&&o<="~"&&o!=="  "?o:".").join("");s=s.slice(16),n+=`
    ${this.hexify(r.slice(0,8))} ${this.hexify(r.slice(8))} | ${a}`}return n}else return this.hexify(t)}slipWriter(t){const e=[];e.push(192);for(let n=0;n<t.length;n++)t[n]===219?e.push(219,221):t[n]===192?e.push(219,220):e.push(t[n]);return e.push(192),new Uint8Array(e)}async write(t){const e=this.slipWriter(t);if(this.device.writable){const n=this.device.writable.getWriter();this.tracing&&this.trace(`Write ${e.length} bytes: ${this.hexConvert(e)}`),await n.write(e),n.releaseLock()}}appendArray(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}async readLoop(){for(var t;this.device.readable;){this.reader=(t=this.device.readable)===null||t===void 0?void 0:t.getReader();try{const{value:e,done:n}=await this.reader.read();if(n){this.trace("Serial port done");break}if(e&&e.length){const s=Uint8Array.from(e);this.buffer=this.appendArray(this.buffer,s)}}catch(e){if(e instanceof Error){if(["BufferOverrunError","FramingError","BreakError","ParityError"].includes(e.name)){this.trace(`Recoverable serial port error: ${e.message}`);continue}this.trace(`Unrecoverable serial port error: ${e.message}`);break}if(e instanceof DOMException){this.onDeviceLostCallback?this.onDeviceLostCallback():this.trace(`Unrecoverable serial port error: ${e.message}`);break}this.trace(`Unrecoverable serial port error: ${e}`);break}finally{this.reader.releaseLock()}}this.trace("readLoop exited")}flushInput(){this.buffer=new Uint8Array(0)}async drainInput(t=100,e=400){const n=Date.now()+e;let s=-1;for(;Date.now()<n&&this.buffer.length!==s;)s=this.buffer.length,await An(t);this.tracing&&this.trace(`Drained ${this.buffer.length} bytes from serial buffer`),this.flushInput()}async flushOutput(){try{if(this.device.writable){const t=this.device.writable.getWriter();await t.close(),t.releaseLock()}}catch(t){this.trace(`Error while flushing output: ${t}`)}}inWaiting(){return this.buffer.length}peek(){return this.buffer}detectPanicHandler(t){const e=/G?uru Meditation Error: (?:Core \d panic'ed \(([a-zA-Z ]*)\))?/,n=/F?atal exception \(\d+\): (?:([a-zA-Z ]*)?.*epc)?/,s=new TextDecoder("utf-8").decode(t),r=s.match(e)||s.match(n);if(r){const a=r[1]||r[2],o=`Guru Meditation Error detected${a?` (${a})`:""}`;throw new Error(o)}}async read(t){let e=null,n=!1,s=null;for(;;){const r=Date.now();for(s=new Uint8Array(0);Date.now()-r<t;)if(this.buffer.length>0){s=this.buffer,this.buffer=new Uint8Array(0);break}else await An(1);if(!s||s.length===0){const a=e===null?"Serial data stream stopped: Possible serial noise or corruption.":"No serial data received.";throw this.tracing&&this.trace(a),new Dt(a)}this.tracing&&this.trace(`Read ${s.length} bytes: ${this.hexConvert(s)}`);for(let a=0;a<s.length;a++){const o=s[a];if(e===null)if(o===this.SLIP_END)e=new Uint8Array(0);else{this.tracing&&this.trace(`Read invalid data: ${this.hexConvert(s)}`);const l=this.buffer;throw this.tracing&&this.trace(`Remaining data in serial buffer: ${this.hexConvert(l)}`),this.detectPanicHandler(new Uint8Array([...s,...l||[]])),new Dt(`Invalid head of packet (0x${o.toString(16)}): Possible serial noise or corruption.`)}else if(n)if(n=!1,o===this.SLIP_ESC_END)e=this.appendArray(e,new Uint8Array([this.SLIP_END]));else if(o===this.SLIP_ESC_ESC)e=this.appendArray(e,new Uint8Array([this.SLIP_ESC]));else{this.tracing&&this.trace(`Read invalid data: ${this.hexConvert(s)}`);const l=this.buffer;throw this.tracing&&this.trace(`Remaining data in serial buffer: ${this.hexConvert(l)}`),this.detectPanicHandler(new Uint8Array([...s,...l||[]])),new Dt(`Invalid SLIP escape (0xdb, 0x${o.toString(16)})`)}else if(o===this.SLIP_ESC)n=!0;else if(o===this.SLIP_END){if(this.tracing&&this.trace(`Received full packet: ${this.hexConvert(e)}`),a+1<s.length){const l=s.slice(a+1);this.buffer=this.appendArray(l,this.buffer)}return e}else e=this.appendArray(e,new Uint8Array([o]))}}}async rawRead(t,e){let n;try{if(!this.device.readable)return;for(n=this.device.readable.getReader(),this.reader=n;!e();){const{value:s,done:r}=await n.read();if(r||!s)break;this.tracing&&this.trace(`Read ${s.length} bytes: ${this.hexConvert(s)}`),t(s)}}catch(s){this.trace(`Error reading from serial port: ${s}`),s instanceof Error&&s.name==="NetworkError"&&s.message.includes("device has been lost")&&(this.trace("Device lost detected (NetworkError)"),this.onDeviceLostCallback&&this.onDeviceLostCallback())}finally{n==null||n.releaseLock(),this.reader===n&&(this.reader=void 0)}}async setRTS(t){await this.device.setSignals({requestToSend:t}),await this.setDTR(this._DTR_state)}async setDTR(t){this._DTR_state=t,await this.device.setSignals({dataTerminalReady:t})}async setSignals(t,e,n){t&&(this._DTR_state=t),await this.device.setSignals({dataTerminalReady:t,requestToSend:e,break:n})}async connect(t=115200,e={}){await this.device.open({baudRate:t,dataBits:e==null?void 0:e.dataBits,stopBits:e==null?void 0:e.stopBits,bufferSize:e==null?void 0:e.bufferSize,parity:e==null?void 0:e.parity,flowControl:e==null?void 0:e.flowControl}),this.baudrate=t}async changeBaudrate(t,e={}){const n=this.device;return typeof n.setBaudRate=="function"?(this.tracing&&this.trace(`Changing host baud rate to ${t} in place`),await n.setBaudRate(t),this.baudrate=t,!1):(this.tracing&&this.trace(`Reopening serial port at ${t} baud`),await this.disconnect(),await An(50),await this.connect(t,e),await An(50),this.readLoop(),!0)}async waitForUnlock(t){for(;this.device.readable&&this.device.readable.locked||this.device.writable&&this.device.writable.locked;)await An(t)}async disconnect(){var t,e;!((t=this.device.readable)===null||t===void 0)&&t.locked&&await((e=this.reader)===null||e===void 0?void 0:e.cancel()),await this.waitForUnlock(400),await this.device.close(),this.reader=void 0}}function wn(i){return new Promise(t=>setTimeout(t,i))}class WS{constructor(t,e){this.resetDelay=e,this.transport=t}async reset(){await this.transport.setSignals(!1,!0),await wn(100),await this.transport.setSignals(!0,!1),await wn(this.resetDelay),await this.transport.setSignals(!1,!1)}}class YS{constructor(t){this.transport=t}async reset(){await this.transport.setRTS(!1),await this.transport.setDTR(!1),await wn(100),await this.transport.setDTR(!0),await this.transport.setRTS(!1),await wn(100),await this.transport.setRTS(!0),await this.transport.setDTR(!1),await this.transport.setRTS(!0),await wn(100),await this.transport.setRTS(!1),await this.transport.setDTR(!1)}}class KS{constructor(t,e=!1){this.transport=t,this.usingUsbOtg=e,this.transport=t}async reset(){this.usingUsbOtg?(await wn(200),await this.transport.setRTS(!1),await wn(200)):(await wn(100),await this.transport.setRTS(!1))}}function $S(i){const t=["D","R","W"],e=i.split("|");for(const n of e){const s=n[0],r=n.slice(1);if(!t.includes(s))return!1;if(s==="D"||s==="R"){if(r!=="0"&&r!=="1")return!1}else if(s==="W"){const a=parseInt(r);if(isNaN(a)||a<=0)return!1}}return!0}class XS{constructor(t,e){this.transport=t,this.sequenceString=e,this.transport=t}async reset(){const t={D:async e=>await this.transport.setDTR(e),R:async e=>await this.transport.setRTS(e),W:async e=>await wn(e)};try{if(!$S(this.sequenceString))return;const n=this.sequenceString.split("|");for(const s of n){const r=s[0],a=s.slice(1);r==="W"?await t.W(Number(a)):(r==="D"||r==="R")&&await t[r](a==="1")}}catch{throw new Error("Invalid custom reset sequence")}}}function qS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ka,uh;function ZS(){return uh||(uh=1,ka=function(t){return atob(t)}),ka}var jS=ZS();const JS=qS(jS);async function fh(i,t){let e;switch(i){case"ESP32":e=await se(()=>import("./esp32-DjViQH-9.js"),[]);break;case"ESP32-C2":e=await se(()=>import("./esp32c2-C2NjgG-v.js"),[]);break;case"ESP32-C3":e=await se(()=>import("./esp32c3-Dyasi16Q.js"),[]);break;case"ESP32-C5":e=await se(()=>import("./esp32c5-BjQFsfgl.js"),[]);break;case"ESP32-C6":e=await se(()=>import("./esp32c6-Dy7wT69i.js"),[]);break;case"ESP32-C61":e=await se(()=>import("./esp32c61-BY-irt7n.js"),[]);break;case"ESP32-H2":e=await se(()=>import("./esp32h2-p6jcdfQ1.js"),[]);break;case"ESP32-H4":e=await se(()=>import("./esp32h4-D2hE15lu.js"),[]);break;case"ESP32-H21":break;case"ESP32-E22":break;case"ESP32-P4":t&&t<300?e=await se(()=>import("./esp32p4-rev1-CoChmcgP.js"),[]):e=await se(()=>import("./esp32p4-BNiOk16x.js"),[]);break;case"ESP32-S2":e=await se(()=>import("./esp32s2-ogKv7abk.js"),[]);break;case"ESP32-S3":e=await se(()=>import("./esp32s3-TJXdSVhr.js"),[]);break;case"ESP32-S31":e=await se(()=>import("./esp32s31-DL3_mrBD.js"),[]);break;case"ESP8266":e=await se(()=>import("./esp8266-Dm8i-3Sp.js"),[]);break}if(e){const n="default"in e?e.default:e;return{bss_start:n.bss_start,data:n.data,data_start:n.data_start,entry:n.entry,text:n.text,text_start:n.text_start,decodedData:_h(n.data),decodedText:_h(n.text)}}}function _h(i){const e=JS(i).split("").map(function(n){return n.charCodeAt(0)});return new Uint8Array(e)}class kd{constructor(){this.FLASH_SIZES={"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64,"32MB":80,"64MB":96,"128MB":112},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.USES_MAGIC_VALUE=!1}getEraseSize(t,e){return e}}class Ei extends kd{constructor(){super(...arguments),this.CHIP_NAME="ESP8266",this.USES_MAGIC_VALUE=!0,this.CHIP_DETECT_MAGIC_VALUE=[4293968129],this.EFUSE_RD_REG_BASE=1072693328,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.XTAL_CLK_DIVIDER=2,this.FLASH_WRITE_SIZE=16384,this.BOOTLOADER_FLASH_OFFSET=0,this.UART_DATE_REG_ADDR=0,this.FLASH_SIZES={"512KB":0,"256KB":16,"1MB":32,"2MB":48,"4MB":64,"2MB-c1":80,"4MB-c1":96,"8MB":128,"16MB":144},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.MEMORY_MAP=[[1072693248,1072693264,"DPORT"],[1073643520,1073741824,"DRAM"],[1074790400,1074823168,"IRAM"],[1075843088,1076760592,"IROM"]],this.SPI_REG_BASE=1610613248,this.SPI_USR_OFFS=28,this.SPI_USR1_OFFS=32,this.SPI_USR2_OFFS=36,this.SPI_MOSI_DLEN_OFFS=0,this.SPI_MISO_DLEN_OFFS=0,this.SPI_W0_OFFS=64,this.getChipFeatures=async t=>{const e=["WiFi"];return await this.getChipDescription(t)=="ESP8285"&&e.push("Embedded Flash"),e}}async readEfuse(t,e){const n=this.EFUSE_RD_REG_BASE+4*e;return t.debug("Read efuse "+n),await t.readReg(n)}async getChipDescription(t){const e=await this.readEfuse(t,2);return(await this.readEfuse(t,0)&16|e&65536)!=0?"ESP8285":"ESP8266EX"}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Detected crystal freq "+n+"MHz is quite different to normalized freq "+s+"MHz. Unsupported crystal in use?"),s}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await this.readEfuse(t,0);e=e>>>0;let n=await this.readEfuse(t,1);n=n>>>0;let s=await this.readEfuse(t,3);s=s>>>0;const r=new Uint8Array(6);return s!=0?(r[0]=s>>16&255,r[1]=s>>8&255,r[2]=s&255):(n>>16&255)==0?(r[0]=24,r[1]=254,r[2]=52):(n>>16&255)==1?(r[0]=172,r[1]=208,r[2]=116):t.error("Unknown OUI"),r[3]=n>>8&255,r[4]=n&255,r[5]=e>>24&255,this._d2h(r[0])+":"+this._d2h(r[1])+":"+this._d2h(r[2])+":"+this._d2h(r[3])+":"+this._d2h(r[4])+":"+this._d2h(r[5])}getEraseSize(t,e){return e}}Ei.IROM_MAP_START=1075838976;Ei.IROM_MAP_END=1076887552;const QS=Object.freeze(Object.defineProperty({__proto__:null,ESP8266ROM:Ei},Symbol.toStringTag,{value:"Module"})),Ns=233;function Ms(i,t){const e=t-1-i%t;return i+e}function Ga(i,t){return i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24}class Yn{constructor(t,e,n=null,s=0){this.addr=t,this.data=e,this.fileOffs=n,this.flags=s,this.includeInChecksum=!0,this.addr!==0&&this.padToAlignment(4)}copyWithNewAddr(t){return new Yn(t,this.data,0)}splitImage(t){const e=new Yn(this.addr,this.data.slice(0,t),0);return this.data=this.data.slice(t),this.addr+=t,this.fileOffs=null,e}toString(){let t=`len 0x${this.data.length.toString(16).padStart(5,"0")} load 0x${this.addr.toString(16).padStart(8,"0")}`;return this.fileOffs!==null&&(t+=` file_offs 0x${this.fileOffs.toString(16).padStart(8,"0")}`),t}getMemoryType(t){return t.ROM_LOADER.MEMORY_MAP.filter(e=>e[0]<=this.addr&&this.addr<e[1]).map(e=>e[2])}padToAlignment(t){this.data=Bo(this.data,t,0)}}class ph extends Yn{constructor(t,e,n,s){super(e,n,null,s),this.name=t}toString(){return`${this.name} ${super.toString()}`}}class rc{constructor(t){this.SEG_HEADER_LEN=8,this.SHA256_DIGEST_LEN=32,this.ELF_FLAG_WRITE=1,this.ELF_FLAG_READ=2,this.ELF_FLAG_EXEC=4,this.segments=[],this.entrypoint=0,this.elfSha256=null,this.elfSha256Offset=0,this.padToSize=0,this.flashMode=0,this.flashSizeFreq=0,this.checksum=0,this.datalength=0,this.IROM_ALIGN=0,this.MMU_PAGE_SIZE_CONF=[],this.ROM_LOADER=t}loadCommonHeader(t,e,n){const s=t[e],r=t[e+1];if(this.flashMode=t[e+2],this.flashSizeFreq=t[e+3],this.entrypoint=Ga(t,e+4),s!==n)throw new Dt(`Invalid firmware image magic=0x${s.toString(16)}`);return r}verify(){if(this.segments.length>16)throw new Dt(`Invalid segment count ${this.segments.length} (max 16). Usually this indicates a linker script problem.`)}loadSegment(t,e,n=!1){const s=e,r=Ga(t,e),a=Ga(t,e+4);this.warnIfUnusualSegment(r,a,n);const o=t.slice(e+8,e+8+a);if(o.length<a)throw new Dt(`End of file reading segment 0x${r.toString(16)}, length ${a} (actual length ${o.length})`);const l=new Yn(r,o,s);return this.segments.push(l),l}warnIfUnusualSegment(t,e,n){n||(t>1075838976||t<1073610752||e>65536)&&console.warn(`WARNING: Suspicious segment 0x${t.toString(16)}, length ${e}`)}maybePatchSegmentData(t,e){const n=t.length;if(this.elfSha256Offset>=e&&this.elfSha256Offset<e+n){const s=this.elfSha256Offset-e;if(s<this.SEG_HEADER_LEN||s+this.SHA256_DIGEST_LEN>n)throw new Dt(`Cannot place SHA256 digest on segment boundary(elf_sha256_offset=${this.elfSha256Offset}, file_pos=${e}, segment_size=${n})`);const r=s-this.SEG_HEADER_LEN;if(!t.slice(r,r+this.SHA256_DIGEST_LEN).every(d=>d===0))throw new Dt(`Contents of segment at SHA256 digest offset 0x${this.elfSha256Offset.toString(16)} are not all zero. Refusing to overwrite.`);if(!this.elfSha256||this.elfSha256.length!==this.SHA256_DIGEST_LEN)throw new Dt("ELF SHA256 digest is not properly initialized");const l=t.slice(0,r),c=t.slice(r+this.SHA256_DIGEST_LEN),h=l.length+this.elfSha256.length+c.length,f=new Uint8Array(h);return f.set(l,0),f.set(this.elfSha256,l.length),f.set(c,l.length+this.elfSha256.length),f}return t}saveSegment(t,e,n,s=null){const r=this.maybePatchSegmentData(n.data,e),a=new DataView(t.buffer,e);return a.setUint32(0,n.addr,!0),a.setUint32(4,r.length,!0),t.set(r,e+8),s!==null?dh(r,s):0}saveFlashSegment(t,e,n,s=null){if(this.ROM_LOADER.CHIP_NAME==="ESP32"){const a=(e+n.data.length+this.SEG_HEADER_LEN)%this.IROM_ALIGN;if(a<36){const o=new Uint8Array(n.data.length+(36-a));o.set(n.data),o.fill(0,n.data.length),n.data=o}}return this.saveSegment(t,e,n,s)}readChecksum(t,e){const n=Ms(e,16);return t[n]}calculateChecksum(){let t=sc;for(const e of this.segments)e.includeInChecksum&&(t=dh(e.data,t));return t}appendChecksum(t,e,n){const s=Ms(e,16);t[s]=n}writeCommonHeader(t,e,n){t[e]=Ns,t[e+1]=n,t[e+2]=this.flashMode,t[e+3]=this.flashSizeFreq,new DataView(t.buffer,e+4).setUint32(0,this.entrypoint,!0)}isIromAddr(t){return Ei.IROM_MAP_START<=t&&t<Ei.IROM_MAP_END}getIromSegment(){const t=this.segments.filter(e=>this.isIromAddr(e.addr));if(t.length>0){if(t.length!==1)throw new Dt(`Found ${t.length} segments that could be irom0. Bad ELF file?`);return t[0]}return null}getNonIromSegments(){const t=this.getIromSegment();return this.segments.filter(e=>e!==t)}sortSegments(){this.segments.length&&this.segments.sort((t,e)=>t.addr-e.addr)}mergeAdjacentSegments(){if(!this.segments.length)return;const t=[];for(let e=this.segments.length-1;e>0;e--){const n=this.segments[e-1],s=this.segments[e];if(n.getMemoryType(this).join(",")===s.getMemoryType(this).join(",")&&n.includeInChecksum===s.includeInChecksum&&s.addr===n.addr+n.data.length&&(s.flags&this.ELF_FLAG_EXEC)===(n.flags&this.ELF_FLAG_EXEC)){const r=new Uint8Array(n.data.length+s.data.length);r.set(n.data),r.set(s.data,n.data.length),n.data=r}else t.unshift(s)}t.unshift(this.segments[0]),this.segments=t}setMmuPageSize(t){if(!this.MMU_PAGE_SIZE_CONF&&t!==this.IROM_ALIGN)console.warn(`WARNING: Changing MMU page size is not supported on ${this.ROM_LOADER.CHIP_NAME}! `+(this.IROM_ALIGN!==0?`Defaulting to ${this.IROM_ALIGN/1024}KB.`:""));else if(this.MMU_PAGE_SIZE_CONF&&!this.MMU_PAGE_SIZE_CONF.includes(t)){const e=this.MMU_PAGE_SIZE_CONF.map(n=>`${n/1024}KB`).join(", ");throw new Dt(`${t} bytes is not a valid ${this.ROM_LOADER.CHIP_NAME} page size, select from ${e}.`)}else this.IROM_ALIGN=t}}class dn extends rc{constructor(t,e=null,n=!0,s=!1){super(t),this.securePad=null,this.flashMode=0,this.flashSizeFreq=0,this.version=1,this.WP_PIN_DISABLED=238,this.wpPin=this.WP_PIN_DISABLED,this.clkDrv=0,this.qDrv=0,this.dDrv=0,this.csDrv=0,this.hdDrv=0,this.wpDrv=0,this.chipId=0,this.minRev=0,this.minRevFull=0,this.maxRevFull=0,this.storedDigest=null,this.calcDigest=null,this.dataLength=0,this.IROM_ALIGN=65536,this.ROM_LOADER=t,this.appendDigest=n,this.ramOnlyHeader=s,e!==null&&this.loadFromFile(e)}async loadFromFile(t){const n=t instanceof Uint8Array?t:zr(t);let s=0;const r=this.loadCommonHeader(n,s,Ns);s+=8,this.loadExtendedHeader(n,s),s+=16;for(let a=0;a<r;a++){const o=this.loadSegment(n,s);s+=8+o.data.length}if(this.checksum=this.readChecksum(n,s),s=Ms(s,16),this.appendDigest){const a=s;this.storedDigest=n.slice(s,s+this.SHA256_DIGEST_LEN);const o=await crypto.subtle.digest("SHA-256",n.slice(0,a));this.calcDigest=new Uint8Array(o),this.dataLength=a-0}this.verify()}isFlashAddr(t){return this.ROM_LOADER.IROM_MAP_START<=t&&t<this.ROM_LOADER.IROM_MAP_END||this.ROM_LOADER.DROM_MAP_START<=t&&t<this.ROM_LOADER.DROM_MAP_END}async save(){let t=0;const e=new Uint8Array(1024*1024);let n=0;this.writeCommonHeader(e,n,this.segments.length),n+=8,this.saveExtendedHeader(e,n),n+=16;let s=sc;const r=this.segments.filter(l=>this.isFlashAddr(l.addr)).sort((l,c)=>l.addr-c.addr),a=this.segments.filter(l=>!this.isFlashAddr(l.addr)).sort((l,c)=>l.addr-c.addr);for(let l=0;l<r.length;l++){const c=r[l];if(c instanceof ph&&c.name===".flash.appdesc"){r.splice(l,1),r.unshift(c);break}}for(let l=0;l<a.length;l++){const c=a[l];if(c instanceof ph&&c.name===".dram0.bootdesc"){a.splice(l,1),a.unshift(c);break}}if(r.length>0){let l=r[0].addr;for(const c of r.slice(1)){if(Math.floor(c.addr/this.IROM_ALIGN)===Math.floor(l/this.IROM_ALIGN))throw new Dt(`Segment loaded at 0x${c.addr.toString(16)} lands in same 64KB flash mapping as segment loaded at 0x${l.toString(16)}. Can't generate binary. Suggest changing linker script or ELF to merge sections.`);l=c.addr}}if(this.ramOnlyHeader){for(const l of a)s=this.saveSegment(e,n,l,s),n+=8+l.data.length,t++;this.appendChecksum(e,n,s),n=Ms(n,16);for(const l of r.reverse()){let c=this.getAlignmentDataNeeded(l,n);if(c>0){const h=this.ROM_LOADER.BOOTLOADER_FLASH_OFFSET-this.SEG_HEADER_LEN;c<h&&(c+=this.IROM_ALIGN),c-=this.ROM_LOADER.BOOTLOADER_FLASH_OFFSET;const f=new Yn(0,new Uint8Array(c).fill(0),n);s=this.saveSegment(e,n,f,s),n+=8+c,t++}this.saveFlashSegment(e,n,l),n+=8+l.data.length,t++}}else{for(;r.length>0;){const l=r[0],c=this.getAlignmentDataNeeded(l,n);if(c>0){if(a.length>0&&c>this.SEG_HEADER_LEN){const h=a[0].splitImage(c);a[0].data.length===0&&a.shift(),s=this.saveSegment(e,n,h,s)}else{const h=new Yn(0,new Uint8Array(c).fill(0),n);s=this.saveSegment(e,n,h,s)}n+=8+c,t++}else{if((n+8)%this.IROM_ALIGN!==l.addr%this.IROM_ALIGN)throw new Error("Flash segment alignment mismatch");s=this.saveFlashSegment(e,n,l,s),r.shift(),n+=8+l.data.length,t++}}for(const l of a)s=this.saveSegment(e,n,l,s),n+=8+l.data.length,t++}if(this.securePad){if(!this.appendDigest)throw new Error("secure_pad only applies if a SHA-256 digest is also appended to the image");const l=(n+this.SEG_HEADER_LEN)%this.IROM_ALIGN,c=16;let h=0;this.securePad==="1"?h=112:this.securePad==="2"&&(h=32);const f=(this.IROM_ALIGN-l-c-h)%this.IROM_ALIGN,d=new Yn(0,new Uint8Array(f).fill(0),n);s=this.saveSegment(e,n,d,s),n+=8+f,t++}this.ramOnlyHeader||(this.appendChecksum(e,n,s),n=Ms(n,16));const o=n;if(this.ramOnlyHeader?e[1]=a.length:e[1]=t,this.appendDigest){const l=await crypto.subtle.digest("SHA-256",e.slice(0,o)),c=new Uint8Array(l);e.set(c,o),n+=32}if(this.padToSize&&n%this.padToSize!==0){const l=this.padToSize-n%this.padToSize,c=new Uint8Array(l);c.fill(255),e.set(c,n),n+=l}return e}loadExtendedHeader(t,e){const n=new DataView(t.buffer,e);this.wpPin=n.getUint8(0);const s=n.getUint8(1);[this.clkDrv,this.qDrv]=this.splitByte(s);const r=n.getUint8(2);[this.dDrv,this.csDrv]=this.splitByte(r);const a=n.getUint8(3);[this.hdDrv,this.wpDrv]=this.splitByte(a),this.chipId=n.getUint8(4),this.ROM_LOADER.IMAGE_CHIP_ID!==void 0&&this.chipId!==this.ROM_LOADER.IMAGE_CHIP_ID&&console.warn(`Unexpected chip id in image. Expected ${this.ROM_LOADER.IMAGE_CHIP_ID} but value was ${this.chipId}. Is this image for a different chip model?`),this.minRev=n.getUint8(5),this.minRevFull=n.getUint16(6,!0),this.maxRevFull=n.getUint16(8,!0);const o=n.getUint8(15);if(o===0||o===1)this.appendDigest=o===1;else throw new Error(`Invalid value for append_digest field (0x${o.toString(16)}). Should be 0 or 1.`)}saveExtendedHeader(t,e){var n;const s=new ArrayBuffer(16),r=new DataView(s);r.setUint8(0,this.wpPin),r.setUint8(1,this.joinByte(this.clkDrv,this.qDrv)),r.setUint8(2,this.joinByte(this.dDrv,this.csDrv)),r.setUint8(3,this.joinByte(this.hdDrv,this.wpDrv)),r.setUint8(4,(n=this.ROM_LOADER.IMAGE_CHIP_ID)!==null&&n!==void 0?n:0),r.setUint8(5,this.minRev),r.setUint16(6,this.minRevFull,!0),r.setUint16(8,this.maxRevFull,!0);for(let a=9;a<15;a++)r.setUint8(a,0);r.setUint8(15,this.appendDigest?1:0),t.set(new Uint8Array(s),e)}splitByte(t){return[t&15,t>>4&15]}joinByte(t,e){return t&15|(e&15)<<4}getAlignmentDataNeeded(t,e){const n=t.addr%this.IROM_ALIGN-this.SEG_HEADER_LEN;let s=this.IROM_ALIGN-e%this.IROM_ALIGN+n;return s===0||s===this.IROM_ALIGN?0:(s-=this.SEG_HEADER_LEN,s<0&&(s+=this.IROM_ALIGN),s)}}class tx extends rc{constructor(t,e=null){super(t),this.version=1,this.ROM_LOADER=t,this.flashMode=0,this.flashSizeFreq=0,e!==null&&this.loadFromFile(e)}loadFromFile(t){const e=t instanceof Uint8Array?t:zr(t);let n=0;const s=this.loadCommonHeader(e,n,Ns);n+=8;for(let r=0;r<s;r++){const a=this.loadSegment(e,n);n+=8+a.data.length}this.checksum=this.readChecksum(e,n),this.verify()}defaultOutputName(t){return t+"-"}}class gi extends rc{constructor(t,e=null){super(t),this.version=2,this.ROM_LOADER=t,this.flashMode=0,this.flashSizeFreq=0,e!==null&&this.loadFromFile(e)}async loadFromFile(t){const e=t instanceof Uint8Array?t:zr(t);let n=0;const s=this.loadCommonHeader(e,n,gi.IMAGE_V2_MAGIC);n+=8,s!==gi.IMAGE_V2_SEGMENT&&console.warn(`Warning: V2 header has unexpected "segment" count ${s} (usually 4)`);const r=this.flashMode,a=this.flashSizeFreq,o=this.entrypoint,l=this.loadSegment(e,n,!0);l.addr=0,l.includeInChecksum=!1,n+=8+l.data.length;const c=this.loadCommonHeader(e,n,Ns);n+=8,r!==this.flashMode&&console.warn(`WARNING: Flash mode value in first header (0x${r.toString(16)}) disagrees with second (0x${this.flashMode.toString(16)}). Using second value.`),a!==this.flashSizeFreq&&console.warn(`WARNING: Flash size/freq value in first header (0x${a.toString(16)}) disagrees with second (0x${this.flashSizeFreq.toString(16)}). Using second value.`),o!==this.entrypoint&&console.warn(`WARNING: Entrypoint address in first header (0x${o.toString(16)}) disagrees with second header (0x${this.entrypoint.toString(16)}). Using second value.`);for(let h=0;h<c;h++){const f=this.loadSegment(e,n);n+=8+f.data.length}this.checksum=this.readChecksum(e,n),this.verify()}defaultOutputName(t){const e=this.getIromSegment();let n=0;e!==null&&(n=e.addr-Ei.IROM_MAP_START);const s=t.replace(/\.[^/.]+$/,""),r=n&-4096;return`${s}-0x${r.toString(16).padStart(5,"0")}.bin`}}gi.IMAGE_V2_MAGIC=234;gi.IMAGE_V2_SEGMENT=4;class ex extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class nx extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class ix extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class sx extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[16384,32768,65536],this.ROM_LOADER=t}}class Vr extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[8192,16384,32768,65536],this.ROM_LOADER=t}}class rx extends Vr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class Gd extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class ax extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class ox extends Vr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class cx extends Vr{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}class lx extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[8192,16384,32768,65536],this.ROM_LOADER=t}}class hx extends Gd{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.MMU_PAGE_SIZE_CONF=[32768,65536,131072,262144],this.ROM_LOADER=t}}class dx extends dn{constructor(t,e=null,n=!0,s=!1){super(t,e,n,s),this.ROM_LOADER=t}}async function mh(i,t){const e=t instanceof Uint8Array?t:zr(t),n=i.CHIP_NAME.toLowerCase().replace(/[-()]/g,"");let s;if(n!=="esp8266")switch(n){case"esp32":s=dn;break;case"esp32s2":s=ex;break;case"esp32s3":s=nx;break;case"esp32s31":s=hx;break;case"esp32c3":s=ix;break;case"esp32c2":s=sx;break;case"esp32c6":s=Vr;break;case"esp32c61":s=rx;break;case"esp32c5":s=Gd;break;case"esp32e22":s=dx;break;case"esp32h2":s=ox;break;case"esp32h21":s=cx;break;case"esp32h4":s=lx;break;case"esp32p4":s=ax;break;default:throw new Dt(`Unsupported chip name: ${n}`)}else{const o=e[0];if(o===Ns)s=tx;else if(o===gi.IMAGE_V2_MAGIC)s=gi;else throw new Dt(`Invalid image magic number: ${o}`)}const r=new s(i),a=r;if(typeof a.loadFromFile=="function"){const o=a.loadFromFile(e);o instanceof Promise&&await o}return r}class vi extends kd{constructor(){super(...arguments),this.CHIP_NAME="ESP32",this.IMAGE_CHIP_ID=0,this.USES_MAGIC_VALUE=!0,this.EFUSE_RD_REG_BASE=1073061888,this.DR_REG_SYSCON_BASE=1073111040,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612856,this.XTAL_CLK_DIVIDER=1,this.IROM_MAP_START=1074593792,this.IROM_MAP_END=1077936128,this.DROM_MAP_START=1061158912,this.DROM_MAP_END=1065353216,this.MEMORY_MAP=[[0,65536,"PADDING"],[1061158912,1065353216,"DROM"],[1065353216,1069547520,"EXTRAM_DATA"],[1073217536,1073225728,"RTC_DRAM"],[1073283072,1073741824,"BYTE_ACCESSIBLE"],[1073405952,1073741824,"DRAM"],[1073610752,1073741820,"DIRAM_DRAM"],[1073741824,1074200576,"IROM"],[1074200576,1074233344,"CACHE_PRO"],[1074233344,1074266112,"CACHE_APP"],[1074266112,1074397184,"IRAM"],[1074397184,1074528252,"DIRAM_IRAM"],[1074528256,1074536448,"RTC_IRAM"],[1074593792,1077936128,"IROM"],[1342177280,1342185472,"RTC_DATA"]],this.FLASH_SIZES={"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64,"32MB":80,"64MB":96,"128MB":112},this.FLASH_FREQUENCY={"80m":15,"40m":0,"26m":1,"20m":2},this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=4096,this.SPI_REG_BASE=1072963584,this.SPI_USR_OFFS=28,this.SPI_USR1_OFFS=32,this.SPI_USR2_OFFS=36,this.SPI_W0_OFFS=128,this.SPI_MOSI_DLEN_OFFS=40,this.SPI_MISO_DLEN_OFFS=44}async readEfuse(t,e){const n=this.EFUSE_RD_REG_BASE+4*e;return t.debug("Read efuse "+n),await t.readReg(n)}async getPkgVersion(t){const e=await this.readEfuse(t,3);let n=e>>9&7;return n+=(e>>2&1)<<3,n}async getChipRevision(t){const e=await this.readEfuse(t,3),n=await this.readEfuse(t,5),s=await t.readReg(this.DR_REG_SYSCON_BASE+124),r=e>>15&1,a=n>>20&1,o=s>>31&1;return r!=0?a!=0?o!=0?3:2:1:0}async getChipDescription(t){const e=["ESP32-D0WDQ6","ESP32-D0WD","ESP32-D2WD","","ESP32-U4WDH","ESP32-PICO-D4","ESP32-PICO-V3-02"];let n="";const s=await this.getPkgVersion(t),r=await this.getChipRevision(t),a=r==3;return(await this.readEfuse(t,3)&1)!=0&&(e[0]="ESP32-S0WDQ6",e[1]="ESP32-S0WD"),a&&(e[5]="ESP32-PICO-V3"),s>=0&&s<=6?n=e[s]:n="Unknown ESP32",a&&(s===0||s===1)&&(n+="-V3"),n+" (revision "+r+")"}async getChipFeatures(t){const e=["Wi-Fi"],n=await this.readEfuse(t,3);(n&2)===0&&e.push(" BT"),(n&1)!==0?e.push(" Single Core"):e.push(" Dual Core"),(n&8192)!==0&&((n&4096)!==0?e.push(" 160MHz"):e.push(" 240MHz"));const o=await this.getPkgVersion(t);[2,4,5,6].indexOf(o)!==-1&&e.push(" Embedded Flash"),o===6&&e.push(" Embedded PSRAM"),(await this.readEfuse(t,4)>>8&31)!==0&&e.push(" VRef calibration in efuse"),(n>>14&1)!==0&&e.push(" BLK3 partially reserved");const d=await this.readEfuse(t,6)&3,_=["None","3/4","Repeat (UNSUPPORTED)","Invalid"];return e.push(" Coding Scheme "+_[d]),e}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await this.readEfuse(t,1);e=e>>>0;let n=await this.readEfuse(t,2);n=n>>>0;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}}const ux=Object.freeze(Object.defineProperty({__proto__:null,ESP32ROM:vi},Symbol.toStringTag,{value:"Module"}));class Bs extends vi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C3",this.IMAGE_CHIP_ID=5,this.USES_MAGIC_VALUE=!1,this.EFUSE_BASE=1610647552,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1015021568,"DROM"],[1070071808,1070465024,"DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1072693248,1072824320,"DROM_MASK"],[1073741824,1074135040,"IROM_MASK"],[1107296256,1115684864,"IROM"],[1077395456,1077805056,"IRAM"],[1342177280,1342185472,"RTC_IRAM"],[1342177280,1342185472,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>21&7}async getChipRevision(t){const e=this.EFUSE_BASE+68,n=3,s=18,r=e+4*n;return(await t.readReg(r)&7<<s)>>s}async getMinorChipVersion(t){const n=this.EFUSE_BASE+68+20,s=await t.readReg(n)>>23&1,a=this.EFUSE_BASE+68+4*3,o=await t.readReg(a)>>18&7;return(s<<3)+o}async getMajorChipVersion(t){const n=this.EFUSE_BASE+68+20;return await t.readReg(n)>>24&3}async getChipDescription(t){const e={0:"ESP32-C3 (QFN32)",1:"ESP8685 (QFN28)",2:"ESP32-C3 AZ (QFN32)",3:"ESP8686 (QFN24)"},n=await this.getPkgVersion(t),s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${e[n]||"Unknown ESP32-C3"} (revision v${s}.${r})`}async getFlashCap(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>27&7}async getFlashVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>0&7;return{1:"XMC",2:"GD",3:"FM",4:"TT",5:"ZBIT"}[a]||""}async getChipFeatures(t){const e=["Wi-Fi","BLE"],n={0:null,1:"Embedded Flash 4MB",2:"Embedded Flash 2MB",3:"Embedded Flash 1MB",4:"Embedded Flash 8MB"},s=await this.getFlashCap(t),r=await this.getFlashVendor(t),a=n[s],o=a!==void 0?a:"Unknown Embedded Flash";return a!==null&&e.push(`${o} (${r})`),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const fx=Object.freeze(Object.defineProperty({__proto__:null,ESP32C3ROM:Bs},Symbol.toStringTag,{value:"Module"}));class Hd extends Bs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C2",this.IMAGE_CHIP_ID=12,this.EFUSE_BASE=1610647552,this.MAC_EFUSE_REG=this.EFUSE_BASE+64,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.XTAL_CLK_DIVIDER=1,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1111490560,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1010827264,"DROM"],[1070202880,1070465024,"DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1072693248,1073020928,"DROM_MASK"],[1073741824,1074331648,"IROM_MASK"],[1107296256,1111490560,"IROM"],[1077395456,1077673984,"IRAM"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+64+4;return await t.readReg(s)>>22&7}async getChipRevision(t){const e=this.EFUSE_BASE+64,n=1,s=20,r=e+4*n;return(await t.readReg(r)&3<<s)>>s}async getChipDescription(t){let e;const n=await this.getPkgVersion(t);n===0||n===1?e="ESP32-C2":e="unknown ESP32-C2";const s=await this.getChipRevision(t);return e+=" (revision "+s+")",e}async getChipFeatures(t){return["Wi-Fi","BLE"]}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}async changeBaudRate(t){await this.getCrystalFreq(t)===26&&t.changeBaud()}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const _x=Object.freeze(Object.defineProperty({__proto__:null,ESP32C2ROM:Hd},Symbol.toStringTag,{value:"Module"}));class ks extends Bs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C6",this.IMAGE_CHIP_ID=13,this.EFUSE_BASE=1611335680,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610625024,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1124073472,"DROM"],[1082130432,1082654720,"DRAM"],[1082130432,1082654720,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1107296256,1124073472,"IROM"],[1082130432,1082654720,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>21&7}async getChipRevision(t){const e=this.EFUSE_BASE+68,n=3,s=18,r=e+4*n;return(await t.readReg(r)&7<<s)>>s}async getChipDescription(t){let e;await this.getPkgVersion(t)===0?e="ESP32-C6":e="unknown ESP32-C6";const s=await this.getChipRevision(t);return e+=" (revision "+s+")",e}async getChipFeatures(t){return["Wi-Fi 6","BT 5","IEEE802.15.4"]}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const px=Object.freeze(Object.defineProperty({__proto__:null,ESP32C6ROM:ks},Symbol.toStringTag,{value:"Module"}));class ac extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C5",this.IMAGE_CHIP_ID=23,this.BOOTLOADER_FLASH_OFFSET=8192,this.EFUSE_BASE=1611352064,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1610612756,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=10,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=22,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=27,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=5,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=10,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=15,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<16,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<25,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1140850688,this.DROM_MAP_START=1107296256,this.DROM_MAP_END=1140850688,this.PCR_SYSCLK_CONF_REG=1611227408,this.PCR_SYSCLK_XTAL_FREQ_V=127<<24,this.PCR_SYSCLK_XTAL_FREQ_S=24,this.XTAL_CLK_DIVIDER=1,this.UARTDEV_BUF_NO=1082520852,this.CHIP_DETECT_MAGIC_VALUE=[285294703,1675706479,1607549039,820080751],this.FLASH_FREQUENCY={"80m":15,"40m":0,"20m":2},this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1140850688,"DROM"],[1082130432,1082523648,"DRAM"],[1082130432,1082523648,"BYTE_ACCESSIBLE"],[1073979392,1074003968,"DROM_MASK"],[1073741824,1073979392,"IROM_MASK"],[1107296256,1140850688,"IROM"],[1082130432,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=4145808195,this.EFUSE_MAX_KEY=5,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",15:"XTS_AES_128_PSRAM_KEY",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>26&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>0&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>4&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-C5":n="unknown ESP32-C5";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6 (dual-band)","BT 5 (LE)","IEEE802.15.4","Single Core + LP Core","240MHz"]}async getCrystalFreq(t){const e=await t.readReg(this.UART_CLKDIV_REG)&this.UART_CLKDIV_MASK,n=t.transport.baudrate*e/1e6/this.XTAL_CLK_DIVIDER;let s;return n>45?s=48:n>33?s=40:s=26,Math.abs(s-n)>1&&t.info("WARNING: Unsupported crystal in use"),s}async getCrystalFreqRomExpect(t){return(await t.readReg(this.PCR_SYSCLK_CONF_REG)&this.PCR_SYSCLK_XTAL_FREQ_V)>>this.PCR_SYSCLK_XTAL_FREQ_S}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++){const r=await this.getKeyBlockPurpose(t,s);e.push(r)}return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=28))throw new Error("SPI Pin numbers must be in the range 0-28.");e.some(n=>n===13||n===14)&&t.info("GPIO pins 13 and 14 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async usesUsbJtagSerial(t){const e=this.UARTDEV_BUF_NO;return(await t.readReg(e)&255)===3}async watchdogReset(t){throw t.info("Hard resetting with a watchdog..."),new Error("watchdogReset not yet implemented for ESP32-C5")}async changeBaud(t){if(t.secureDownloadMode){t.info("Baud rate change is not supported in secure download mode. Keeping 115200 baud.");return}if(!t.IS_STUB){const e=await this.getCrystalFreqRomExpect(t),n=await this.getCrystalFreq(t);t.info(`ROM expects crystal freq: ${e} MHz, detected ${n} MHz.`),(n===48&&e===40||n===40&&e===48)&&t.info("Crystal frequency mismatch detected. Baud rate adjustment may be needed but is not fully implemented in this version.")}await t.changeBaud()}}const mx=Object.freeze(Object.defineProperty({__proto__:null,ESP32C5ROM:ac},Symbol.toStringTag,{value:"Module"}));class zd extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C61",this.IMAGE_CHIP_ID=20,this.CHIP_DETECT_MAGIC_VALUE=[871374959,606167151],this.UART_DATE_REG_ADDR=1610612860,this.EFUSE_BASE=1611352064,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=4,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY2_SHIFT=8,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY3_SHIFT=12,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY4_SHIFT=16,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY5_SHIFT=20,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=16384,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+48,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<23,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+52,this.EFUSE_SECURE_BOOT_EN_MASK=1<<26,this.FLASH_FREQUENCY={"80m":15,"40m":0,"20m":2},this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1098907648,1107296256,"DROM"],[1082130432,1082523648,"DRAM"],[1082130432,1082523648,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1090519040,1098907648,"IROM"],[1082130432,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=2010665156,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_KEY_1_PSRAM",14:"XTS_AES_256_KEY_2_PSRAM",15:"XTS_AES_128_KEY_PSRAM"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>26&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>0&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+8)>>4&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-C61":n="unknown ESP32-C61";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["WiFi 6","BT 5"]}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}}const Ex=Object.freeze(Object.defineProperty({__proto__:null,ESP32C61ROM:zd},Symbol.toStringTag,{value:"Module"}));class gx extends vi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-E22",this.IMAGE_CHIP_ID=31,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1006632960,this.IROM_MAP_END=1073741824,this.DROM_MAP_START=1006632960,this.DROM_MAP_END=1073741824,this.BOOTLOADER_FLASH_OFFSET=0,this.UART_DATE_REG_ADDR=3272614028,this.UART_CLKDIV_REG=3272613908,this.EFUSE_BASE=3288367104,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.SPI_REG_BASE=3271569408,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1073741824,"DROM"],[822083584,824180736,"DRAM"],[822083584,824180736,"BYTE_ACCESSIBLE"],[805306368,806486016,"DROM_MASK"],[805306368,806486016,"IROM_MASK"],[1006632960,1073741824,"IROM"],[821952512,824180736,"IRAM"],[3221225472,3221258240,"RTC_IRAM"],[3221225472,3221258240,"RTC_DRAM"]],this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY"}}async getPkgVersion(t){return 0}async getMinorChipVersion(t){return 0}async getMajorChipVersion(t){return 0}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-E22":"unknown ESP32-E22",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6E (tri-band, 2x2 MU-MIMO)","BT 5.4 (LE) + Classic","Dual Core","500MHz"]}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&15}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=52))throw new Error("SPI Pin numbers must be in the range 0-52.");e.some(n=>n===18||n===19)&&t.info("GPIO pins 18 and 19 are used by USB-OTG, consider using other pins for SPI flash connection.")}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}}class oc extends ks{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H2",this.IMAGE_CHIP_ID=16,this.EFUSE_BASE=1611335680,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610625024,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.USB_RAM_BLOCK=2048,this.UARTDEV_BUF_NO_USB=3,this.UARTDEV_BUF_NO=1070526796,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1124073472,"DROM"],[1082130432,1082654720,"DRAM"],[1082130432,1082654720,"BYTE_ACCESSIBLE"],[1074048e3,1074069504,"DROM_MASK"],[1073741824,1074048e3,"IROM_MASK"],[1107296256,1124073472,"IROM"],[1082130432,1082654720,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]]}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>0&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&7}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&3}async getChipDescription(t){const e=await this.getPkgVersion(t);let n;e===0?n="ESP32-H2":n="unknown ESP32-H2";const s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Single Core","96MHz"]}async getCrystalFreq(t){return 32}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async postConnect(t){const e=await t.readReg(this.UARTDEV_BUF_NO)&255;t.debug("In _post_connect "+e),e==this.UARTDEV_BUF_NO_USB&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async usesUsbJtagSerial(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const Sx=Object.freeze(Object.defineProperty({__proto__:null,ESP32H2ROM:oc},Symbol.toStringTag,{value:"Module"}));class xx extends oc{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H21",this.IMAGE_CHIP_ID=25,this.USES_MAGIC_VALUE=!1,this.UF2_FAMILY_ID=3067936943,this.DR_REG_LP_WDT_BASE=1611340800,this.RTC_CNTL_WDTCONFIG0_REG=this.DR_REG_LP_WDT_BASE+0,this.RTC_CNTL_WDTWPROTECT_REG=this.DR_REG_LP_WDT_BASE+28,this.RTC_CNTL_SWD_CONF_REG=this.DR_REG_LP_WDT_BASE+32,this.RTC_CNTL_SWD_AUTO_FEED_EN=1<<18,this.RTC_CNTL_SWD_WPROTECT_REG=this.DR_REG_LP_WDT_BASE+36,this.RTC_CNTL_SWD_WKEY=1356348065,this.EFUSE_BASE=1611350016,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"RESERVED",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>11&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>4&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>8&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-H21":"Unknown ESP32-H21",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Single Core","96MHz"]}async getCrystalFreq(t){return 32}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=27))throw new Error("SPI Pin numbers must be in the range 0-27.");e.some(n=>n===26||n===27)&&t.info("GPIO pins 26 and 27 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}}class vx extends Bs{constructor(){super(...arguments),this.CHIP_NAME="ESP32-H4",this.IMAGE_CHIP_ID=28,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1115684864,this.DROM_MAP_START=1115684864,this.DROM_MAP_END=1124073472,this.BOOTLOADER_FLASH_OFFSET=8192,this.SPI_REG_BASE=1611239424,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.UART_DATE_REG_ADDR=1610686588,this.EFUSE_BASE=1611339776,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=5,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY2_SHIFT=10,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY3_SHIFT=15,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY4_SHIFT=20,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY5_SHIFT=25,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=16384,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+48,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<23,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=32,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+56,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=19,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.FLASH_FREQUENCY={"48m":15,"24m":0,"16m":1,"12m":2},this.MEMORY_MAP=[[0,65536,"PADDING"],[1107296256,1140850688,"DROM"],[1082195968,1082523648,"DRAM"],[1082195968,1082523648,"BYTE_ACCESSIBLE"],[1073741824,1074069504,"DROM_MASK"],[1073741824,1074069504,"IROM_MASK"],[1107296256,1140850688,"IROM"],[1082195968,1082523648,"IRAM"],[1342177280,1342193664,"RTC_IRAM"],[1342177280,1342193664,"RTC_DRAM"],[1610612736,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=2651564682,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_FLASH_1",3:"XTS_AES_256_KEY_FLASH_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_KEY_PSRAM_1",14:"XTS_AES_256_KEY_PSRAM_2",15:"XTS_AES_128_KEY_PSRAM",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>12&7}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>22&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-H4 (QFN40)":"Unknown ESP32-H4",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["BT 5 (LE)","IEEE802.15.4","Dual Core","96MHz"]}async getCrystalFreq(t){return 32}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=39))throw new Error("SPI Pin numbers must be in the range 0-39.");e.some(n=>n===13||n===14)&&t.info("GPIO pins 13 and 14 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}}class Vd extends vi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-P4",this.IMAGE_CHIP_ID=18,this.IROM_MAP_START=1073741824,this.IROM_MAP_END=1275068416,this.DROM_MAP_START=1073741824,this.DROM_MAP_END=1275068416,this.BOOTLOADER_FLASH_OFFSET=8192,this.CHIP_DETECT_MAGIC_VALUE=[0,182303440],this.UART_DATE_REG_ADDR=1343004812,this.EFUSE_BASE=1343410176,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.SPI_REG_BASE=1342754816,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.USES_MAGIC_VALUE=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=9,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_RD_REPEAT_DATA1_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_RD_REPEAT_DATA1_REG,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_DOWNLOAD_MODE_XPD_ON_MASK=65536,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.SUPPORTS_ENCRYPTED_FLASH=!0,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.GPIO_STRAP_REG=1343094840,this.GPIO_STRAP_SPI_BOOT_MASK=8,this.RTC_CNTL_OPTION1_REG=1343291400,this.RTC_CNTL_FORCE_DOWNLOAD_BOOT_MASK=4,this.DR_REG_LPAON_BASE=1343291392,this.DR_REG_PMU_BASE=this.DR_REG_LPAON_BASE+20480,this.DR_REG_LP_SYS_BASE=this.DR_REG_LPAON_BASE+0,this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG=this.DR_REG_LP_SYS_BASE+268,this.PMU_EXT_LDO_P0_0P1A_ANA_REG=this.DR_REG_PMU_BASE+444,this.PMU_ANA_0P1A_EN_CUR_LIM_0=1<<27,this.PMU_EXT_LDO_P0_0P1A_REG=this.DR_REG_PMU_BASE+440,this.PMU_0P1A_TARGET0_0=255<<23,this.PMU_0P1A_FORCE_TIEH_SEL_0=128,this.PMU_DATE_REG=this.DR_REG_PMU_BASE+1020,this.PMU_DATE_FLASH_FORCE_ON=3,this.UARTDEV_BUF_NO_USB_OTG=5,this.UARTDEV_BUF_NO_USB_JTAG_SERIAL=6,this.DR_REG_LP_WDT_BASE=1343315968,this.RTC_CNTL_WDTCONFIG0_REG=this.DR_REG_LP_WDT_BASE+0,this.RTC_CNTL_WDTCONFIG1_REG=this.DR_REG_LP_WDT_BASE+4,this.RTC_CNTL_WDTWPROTECT_REG=this.DR_REG_LP_WDT_BASE+24,this.RTC_CNTL_WDT_WKEY=1356348065,this.RTC_CNTL_SWD_CONF_REG=this.DR_REG_LP_WDT_BASE+28,this.RTC_CNTL_SWD_AUTO_FEED_EN=1<<18,this.RTC_CNTL_SWD_WPROTECT_REG=this.DR_REG_LP_WDT_BASE+32,this.RTC_CNTL_SWD_WKEY=1356348065,this.MEMORY_MAP=[[0,65536,"PADDING"],[1073741824,1275068416,"DROM"],[1341128704,1341784064,"DRAM"],[1341128704,1341784064,"BYTE_ACCESSIBLE"],[1337982976,1338114048,"DROM_MASK"],[1337982976,1338114048,"IROM_MASK"],[1073741824,1275068416,"IROM"],[1341128704,1341784064,"IRAM"],[1343258624,1343291392,"RTC_IRAM"],[1343258624,1343291392,"RTC_DRAM"],[1611653120,1611661312,"MEM_INTERNAL2"]],this.UF2_FAMILY_ID=1026592404,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY"}}async getPkgVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8;return await t.readReg(n)>>20&7}async getMinorChipVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8;return await t.readReg(n)>>0&15}async getMajorChipVersion(t){const n=this.EFUSE_BLOCK1_ADDR+8,s=await t.readReg(n);return(s>>23&1)<<2|s>>4&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getStubJsonPath(t){return await this.getChipRevision(t)<300?"./targets/stub_flasher/esp32p4-rev1.json":"./targets/stub_flasher/esp32p4.json"}async getChipDescription(t){const e=await this.getPkgVersion(t),s={0:"ESP32-P4"}[e]||"Unknown ESP32-P4",r=await this.getMajorChipVersion(t),a=await this.getMinorChipVersion(t);return`${s} (revision v${r}.${a})`}async getChipFeatures(t){return["High-Performance MCU"]}async getCrystalFreq(t){return 40}async getFlashVoltage(t){}async overrideVddsdio(t){t.debug("VDD_SDIO overrides are not supported for ESP32-P4")}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}async getFlashCryptConfig(t){}async getSecureBootEnabled(t){return(await t.readReg(this.EFUSE_SECURE_BOOT_EN_REG)&this.EFUSE_SECURE_BOOT_EN_MASK)!==0}async getUartdevBufNo(t){return(await this.getChipRevision(t)<300?1341390512:1341914800)+24}async usesUsbOtg(t){const e=await this.getUartdevBufNo(t);return(await t.readReg(e)&255)===this.UARTDEV_BUF_NO_USB_OTG}async usesUsbJtagSerial(t){if(t.secureDownloadMode)return!1;const e=await this.getUartdevBufNo(t);return(await t.readReg(e)&255)===this.UARTDEV_BUF_NO_USB_JTAG_SERIAL}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY){t.debug(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);return}const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT],[this.EFUSE_PURPOSE_KEY5_REG,this.EFUSE_PURPOSE_KEY5_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&15}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++){const r=await this.getKeyBlockPurpose(t,s);e.push(r)}return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)||e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_1)&&e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_2)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK),t.IS_STUB||await this.disableWatchdogs(t),t.secureDownloadMode||await this.powerOnFlash(t)}async disableWatchdogs(t){if(await this.usesUsbJtagSerial(t)){await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,this.RTC_CNTL_WDT_WKEY),await t.writeReg(this.RTC_CNTL_WDTCONFIG0_REG,0),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,0),await t.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG,this.RTC_CNTL_SWD_WKEY);const e=await t.readReg(this.RTC_CNTL_SWD_CONF_REG);await t.writeReg(this.RTC_CNTL_SWD_CONF_REG,e|this.RTC_CNTL_SWD_AUTO_FEED_EN),await t.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG,0)}}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=54))throw new Error("SPI Pin numbers must be in the range 0-54.");e.some(n=>n===24||n===25)&&t.debug("GPIO pins 24 and 25 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async watchdogReset(t){t.info("Hard resetting with a watchdog..."),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,this.RTC_CNTL_WDT_WKEY),await t.writeReg(this.RTC_CNTL_WDTCONFIG1_REG,2e3),await t.writeReg(this.RTC_CNTL_WDTCONFIG0_REG,1<<31|5<<28|256|2),await t.writeReg(this.RTC_CNTL_WDTWPROTECT_REG,0),await new Promise(e=>setTimeout(e,500))}async powerOnFlash(t){if(t.secureDownloadMode)throw new Error("Powering on flash in secure download mode is not allowed.");const e=await this.getChipRevision(t);if(e!==301&&e!==302)return;if(e===302&&await t.readReg(this.EFUSE_RD_REPEAT_DATA1_REG)&this.EFUSE_DOWNLOAD_MODE_XPD_ON_MASK){const r=await t.readReg(this.PMU_DATE_REG);(r&this.PMU_DATE_FLASH_FORCE_ON)===this.PMU_DATE_FLASH_FORCE_ON&&await t.writeReg(this.PMU_DATE_REG,r&~this.PMU_DATE_FLASH_FORCE_ON);return}await t.writeReg(this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG,1),await new Promise(s=>setTimeout(s,10));let n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG);await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG,n|this.PMU_ANA_0P1A_EN_CUR_LIM_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n|this.PMU_0P1A_FORCE_TIEH_SEL_0),n=await t.readReg(this.PMU_DATE_REG),await t.writeReg(this.PMU_DATE_REG,n|this.PMU_DATE_FLASH_FORCE_ON),await new Promise(s=>setTimeout(s,1)),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG,n&~this.PMU_ANA_0P1A_EN_CUR_LIM_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n&~this.PMU_0P1A_TARGET0_0),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n|128),n=await t.readReg(this.PMU_EXT_LDO_P0_0P1A_REG),await t.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG,n&~this.PMU_0P1A_FORCE_TIEH_SEL_0),await new Promise(s=>setTimeout(s,2))}}const Mx=Object.freeze(Object.defineProperty({__proto__:null,ESP32P4ROM:Vd},Symbol.toStringTag,{value:"Module"}));class Wd extends vi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S2",this.IMAGE_CHIP_ID=2,this.IROM_MAP_START=1074266112,this.IROM_MAP_END=1085800448,this.DROM_MAP_START=1056964608,this.DROM_MAP_END=1061093376,this.CHIP_DETECT_MAGIC_VALUE=[1990],this.SPI_REG_BASE=1061167104,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.MAC_EFUSE_REG=1061265476,this.UART_CLKDIV_REG=1061158932,this.SUPPORTS_ENCRYPTED_FLASH=!0,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.EFUSE_BASE=1061265408,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.EFUSE_BLOCK2_ADDR=this.EFUSE_BASE+92,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY0_SHIFT=24,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+52,this.EFUSE_PURPOSE_KEY1_SHIFT=28,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=0,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=4,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=8,this.EFUSE_PURPOSE_KEY5_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY5_SHIFT=12,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<19,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<18,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+56,this.EFUSE_SECURE_BOOT_EN_MASK=1<<20,this.EFUSE_RD_REPEAT_DATA3_REG=this.EFUSE_BASE+60,this.EFUSE_RD_REPEAT_DATA3_REG_FLASH_TYPE_MASK=512,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.UARTDEV_BUF_NO=1073741076,this.UARTDEV_BUF_NO_USB_OTG=2,this.USB_RAM_BLOCK=2048,this.GPIO_STRAP_REG=1061175352,this.GPIO_STRAP_SPI_BOOT_MASK=8,this.GPIO_STRAP_VDDSPI_MASK=16,this.RTC_CNTL_OPTION1_REG=1061191976,this.RTC_CNTL_FORCE_DOWNLOAD_BOOT_MASK=1,this.RTCCNTL_BASE_REG=1061191680,this.RTC_CNTL_WDTCONFIG0_REG=this.RTCCNTL_BASE_REG+148,this.RTC_CNTL_WDTCONFIG1_REG=this.RTCCNTL_BASE_REG+152,this.RTC_CNTL_WDTWPROTECT_REG=this.RTCCNTL_BASE_REG+172,this.RTC_CNTL_WDT_WKEY=1356348065,this.MEMORY_MAP=[[0,65536,"PADDING"],[1056964608,1073217536,"DROM"],[1062207488,1073217536,"EXTRAM_DATA"],[1073340416,1073348608,"RTC_DRAM"],[1073340416,1073741824,"BYTE_ACCESSIBLE"],[1073340416,1074208768,"MEM_INTERNAL"],[1073414144,1073741824,"DRAM"],[1073741824,1073848576,"IROM_MASK"],[1073872896,1074200576,"IRAM"],[1074200576,1074208768,"RTC_IRAM"],[1074266112,1082130432,"IROM"],[1342177280,1342185472,"RTC_DATA"]],this.EFUSE_VDD_SPI_REG=this.EFUSE_BASE+52,this.VDD_SPI_XPD=16,this.VDD_SPI_TIEH=32,this.VDD_SPI_FORCE=64,this.UF2_FAMILY_ID=3218951918,this.EFUSE_MAX_KEY=5,this.KEY_PURPOSES={0:"USER/EMPTY",1:"RESERVED",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2"},this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612856,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=4096}async getPkgVersion(t){const n=this.EFUSE_BLOCK1_ADDR+16;return await t.readReg(n)>>0&15}async getMinorChipVersion(t){const n=await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>20&1,r=await t.readReg(this.EFUSE_BLOCK1_ADDR+4*4)>>4&7;return(n<<3)+r}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&3}async getFlashVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&15}async getChipDescription(t){const e={0:"ESP32-S2",1:"ESP32-S2FH2",2:"ESP32-S2FH4",102:"ESP32-S2FNR2",100:"ESP32-S2R2"},n=await this.getFlashCap(t)+await this.getPsramCap(t)*100,s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${e[n]||"unknown ESP32-S2"} (revision v${s}.${r})`}async getFlashCap(t){return await this.getFlashVersion(t)}async getPsramVersion(t){const n=this.EFUSE_BLOCK1_ADDR+12;return await t.readReg(n)>>28&15}async getPsramCap(t){return await this.getPsramVersion(t)}async getBlock2Version(t){const n=this.EFUSE_BLOCK2_ADDR+16;return await t.readReg(n)>>4&7}async getChipFeatures(t){const e=["Wi-Fi"],n={0:"No Embedded Flash",1:"Embedded Flash 2MB",2:"Embedded Flash 4MB"},s=await this.getFlashCap(t),r=n[s]||"Unknown Embedded Flash";e.push(r);const a={0:"No Embedded Flash",1:"Embedded PSRAM 2MB",2:"Embedded PSRAM 4MB"},o=await this.getPsramCap(t),l=a[o]||"Unknown Embedded PSRAM";e.push(l);const c={0:"No calibration in BLK2 of efuse",1:"ADC and temperature sensor calibration in BLK2 of efuse V1",2:"ADC and temperature sensor calibration in BLK2 of efuse V2"},h=await this.getBlock2Version(t),f=c[h]||"Unknown Calibration in BLK2";return e.push(f),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}async usingUsbOtg(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB_OTG}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}}const Ax=Object.freeze(Object.defineProperty({__proto__:null,ESP32S2ROM:Wd},Symbol.toStringTag,{value:"Module"}));class Yd extends vi{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S3",this.IMAGE_CHIP_ID=9,this.USES_MAGIC_VALUE=!1,this.EFUSE_BASE=1610641408,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+68,this.EFUSE_BLOCK2_ADDR=this.EFUSE_BASE+92,this.UART_CLKDIV_REG=1610612756,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612864,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.USB_RAM_BLOCK=2048,this.UARTDEV_BUF_NO_USB=3,this.UARTDEV_BUF_NO=1070526796,this.IROM_MAP_START=1107296256,this.IROM_MAP_END=1140850688,this.MEMORY_MAP=[[0,65536,"PADDING"],[1006632960,1023410176,"DROM"],[1023410176,1040187392,"EXTRAM_DATA"],[1611653120,1611661312,"RTC_DRAM"],[1070104576,1070596096,"BYTE_ACCESSIBLE"],[1070104576,1077813248,"MEM_INTERNAL"],[1070104576,1070596096,"DRAM"],[1073741824,1073848576,"IROM_MASK"],[1077346304,1077805056,"IRAM"],[1611653120,1611661312,"RTC_IRAM"],[1107296256,1115684864,"IROM"],[1342177280,1342185472,"RTC_DATA"]]}async getChipDescription(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t),s=await this.getPkgVersion(t);return`${{0:"ESP32-S3 (QFN56)",1:"ESP32-S3-PICO-1 (LGA56)"}[s]||"unknown ESP32-S3"} (revision v${e}.${n})`}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>21&7}async getRawMinorChipVersion(t){const n=await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>23&1,r=await t.readReg(this.EFUSE_BLOCK1_ADDR+4*3)>>18&7;return(n<<3)+r}async getMinorChipVersion(t){const e=await this.getRawMinorChipVersion(t);return await this.isEco0(t,e)?0:this.getRawMinorChipVersion(t)}async getRawMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+20)>>24&3}async getMajorChipVersion(t){const e=await this.getRawMinorChipVersion(t);return await this.isEco0(t,e)?0:this.getRawMajorChipVersion(t)}async getBlkVersionMajor(t){return await t.readReg(this.EFUSE_BLOCK2_ADDR+16)>>0&3}async getBlkVersionMinor(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>24&7}async isEco0(t,e){return(e&7)===0&&await this.getBlkVersionMajor(t)===1&&await this.getBlkVersionMinor(t)===1}async getFlashCap(t){const s=this.EFUSE_BASE+68+12;return await t.readReg(s)>>27&7}async getFlashVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>0&7;return{1:"XMC",2:"GD",3:"FM",4:"TT",5:"BY"}[a]||""}async getPsramCap(t){const s=this.EFUSE_BASE+68+16;return await t.readReg(s)>>3&3}async getPsramVendor(t){const s=this.EFUSE_BASE+68+16,a=await t.readReg(s)>>7&3;return{1:"AP_3v3",2:"AP_1v8"}[a]||""}async getChipFeatures(t){const e=["Wi-Fi","BLE"],n={0:null,1:"Embedded Flash 8MB",2:"Embedded Flash 4MB"},s=await this.getFlashCap(t),r=await this.getFlashVendor(t),a=n[s],o=a!==void 0?a:"Unknown Embedded Flash";a!==null&&e.push(`${o} (${r})`);const l={0:null,1:"Embedded PSRAM 8MB",2:"Embedded PSRAM 2MB"},c=await this.getPsramCap(t),h=await this.getPsramVendor(t),f=l[c],d=f!==void 0?f:"Unknown Embedded PSRAM";return f!==null&&e.push(`${d} (${h})`),e}async getCrystalFreq(t){return 40}_d2h(t){const e=(+t).toString(16);return e.length===1?"0"+e:e}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async usesUsbJtagSerial(t){return(await t.readReg(this.UARTDEV_BUF_NO)&255)===this.UARTDEV_BUF_NO_USB}async readMac(t){let e=await t.readReg(this.MAC_EFUSE_REG);e=e>>>0;let n=await t.readReg(this.MAC_EFUSE_REG+4);n=n>>>0&65535;const s=new Uint8Array(6);return s[0]=n>>8&255,s[1]=n&255,s[2]=e>>24&255,s[3]=e>>16&255,s[4]=e>>8&255,s[5]=e&255,this._d2h(s[0])+":"+this._d2h(s[1])+":"+this._d2h(s[2])+":"+this._d2h(s[3])+":"+this._d2h(s[4])+":"+this._d2h(s[5])}getEraseSize(t,e){return e}}const Rx=Object.freeze(Object.defineProperty({__proto__:null,ESP32S3ROM:Yd},Symbol.toStringTag,{value:"Module"}));class yx extends ac{constructor(){super(...arguments),this.CHIP_NAME="ESP32-S31",this.IMAGE_CHIP_ID=32,this.USES_MAGIC_VALUE=!1,this.IROM_MAP_START=1073741824,this.IROM_MAP_END=1409286144,this.DROM_MAP_START=1073741824,this.DROM_MAP_END=1409286144,this.BOOTLOADER_FLASH_OFFSET=8192,this.UART_DATE_REG_ADDR=540582028,this.UART_CLKDIV_REG=540581908,this.EFUSE_BASE=544296960,this.EFUSE_BLOCK1_ADDR=this.EFUSE_BASE+80,this.MAC_EFUSE_REG=this.EFUSE_BASE+80,this.SPI_REG_BASE=542117888,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88,this.SPI_ADDR_REG_MSB=!1,this.EFUSE_RD_REG_BASE=this.EFUSE_BASE+48,this.EFUSE_PURPOSE_KEY0_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY0_SHIFT=0,this.EFUSE_PURPOSE_KEY1_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY1_SHIFT=5,this.EFUSE_PURPOSE_KEY2_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY2_SHIFT=10,this.EFUSE_PURPOSE_KEY3_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY3_SHIFT=15,this.EFUSE_PURPOSE_KEY4_REG=this.EFUSE_BASE+56,this.EFUSE_PURPOSE_KEY4_SHIFT=20,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG=this.EFUSE_RD_REG_BASE,this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT=1<<20,this.EFUSE_SPI_BOOT_CRYPT_CNT_REG=this.EFUSE_BASE+52,this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK=7<<21,this.EFUSE_SECURE_BOOT_EN_REG=this.EFUSE_BASE+60,this.EFUSE_SECURE_BOOT_EN_MASK=4,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG=this.EFUSE_BASE+52,this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT=12,this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY=2,this.PURPOSE_VAL_XTS_AES256_KEY_1=2,this.PURPOSE_VAL_XTS_AES256_KEY_2=3,this.PURPOSE_VAL_XTS_AES128_KEY=4,this.FLASH_ENCRYPTED_WRITE_ALIGN=16,this.USB_RAM_BLOCK=2048,this.MEMORY_MAP=[[0,65536,"PADDING"],[1073741824,1409286144,"DROM"],[788529152,789053440,"DRAM"],[788529152,789053440,"BYTE_ACCESSIBLE"],[796917760,797245440,"DROM_MASK"],[796917760,797245440,"IROM_MASK"],[1073741824,1409286144,"IROM"],[788529152,789053440,"IRAM"],[771751936,771784704,"RTC_IRAM"],[771751936,771784704,"RTC_DRAM"]],this.UF2_FAMILY_ID=822212545,this.EFUSE_MAX_KEY=4,this.KEY_PURPOSES={0:"USER/EMPTY",1:"ECDSA_KEY",2:"XTS_AES_256_KEY_1",3:"XTS_AES_256_KEY_2",4:"XTS_AES_128_KEY",5:"HMAC_DOWN_ALL",6:"HMAC_DOWN_JTAG",7:"HMAC_DOWN_DIGITAL_SIGNATURE",8:"HMAC_UP",9:"SECURE_BOOT_DIGEST0",10:"SECURE_BOOT_DIGEST1",11:"SECURE_BOOT_DIGEST2",12:"KM_INIT_KEY",13:"XTS_AES_256_PSRAM_KEY_1",14:"XTS_AES_256_PSRAM_KEY_2",15:"XTS_AES_128_PSRAM_KEY",16:"ECDSA_KEY_P192",17:"ECDSA_KEY_P384_L",18:"ECDSA_KEY_P384_H",19:"SDC_KEY_DIGEST"}}async getPkgVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+16)>>6&3}async getMinorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>18&15}async getMajorChipVersion(t){return await t.readReg(this.EFUSE_BLOCK1_ADDR+12)>>22&3}async getChipRevision(t){const e=await this.getMajorChipVersion(t),n=await this.getMinorChipVersion(t);return e*100+n}async getChipDescription(t){const n=await this.getPkgVersion(t)===0?"ESP32-S31":"unknown ESP32-S31",s=await this.getMajorChipVersion(t),r=await this.getMinorChipVersion(t);return`${n} (revision v${s}.${r})`}async getChipFeatures(t){return["Wi-Fi 6","BT 5.4 (LE)","IEEE802.15.4","Dual Core + LP Core","300MHz"]}async getCrystalFreq(t){return 40}async getKeyBlockPurpose(t,e){if(e<0||e>this.EFUSE_MAX_KEY)throw new Error(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);const n=[[this.EFUSE_PURPOSE_KEY0_REG,this.EFUSE_PURPOSE_KEY0_SHIFT],[this.EFUSE_PURPOSE_KEY1_REG,this.EFUSE_PURPOSE_KEY1_SHIFT],[this.EFUSE_PURPOSE_KEY2_REG,this.EFUSE_PURPOSE_KEY2_SHIFT],[this.EFUSE_PURPOSE_KEY3_REG,this.EFUSE_PURPOSE_KEY3_SHIFT],[this.EFUSE_PURPOSE_KEY4_REG,this.EFUSE_PURPOSE_KEY4_SHIFT]],[s,r]=n[e];return await t.readReg(s)>>r&31}async isFlashEncryptionKeyValid(t){const e=[];for(let s=0;s<=this.EFUSE_MAX_KEY;s++)e.push(await this.getKeyBlockPurpose(t,s));return e.some(s=>s===this.PURPOSE_VAL_XTS_AES128_KEY)||e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_1)&&e.some(s=>s===this.PURPOSE_VAL_XTS_AES256_KEY_2)?!0:(await t.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG)>>this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT&this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY)!==0}checkSpiConnection(t,e){if(!e.every(n=>n>=0&&n<=60))throw new Error("SPI Pin numbers must be in the range 0-60.");e.some(n=>n===33||n===34)&&t.info("GPIO pins 33 and 34 are used by USB-Serial/JTAG, consider using other pins for SPI flash connection.")}async postConnect(t){await t.usesUsbOtg()&&(t.ESP_RAM_BLOCK=this.USB_RAM_BLOCK)}async changeBaud(t){await t.changeBaud()}}const Kd={esp8266:new Ei,esp32:new vi,esp32s2:new Wd,esp32s3:new Yd,esp32s31:new yx,esp32c3:new Bs,esp32c2:new Hd,esp32c6:new ks,esp32c61:new zd,esp32c5:new ac,esp32e22:new gx,esp32h2:new oc,esp32h21:new xx,esp32p4:new Vd,esp32h4:new vx},Tx=Object.values(Kd),Eh={SECURE_BOOT_EN:1,SECURE_BOOT_AGGRESSIVE_REVOKE:2,SECURE_DOWNLOAD_ENABLE:4,SECURE_BOOT_KEY_REVOKE0:8,SECURE_BOOT_KEY_REVOKE1:16,SECURE_BOOT_KEY_REVOKE2:32,SOFT_DIS_JTAG:64,HARD_DIS_JTAG:128,DIS_USB:256,DIS_DOWNLOAD_DCACHE:512,DIS_DOWNLOAD_ICACHE:1024};function wx(i){const t={};for(const e of Object.keys(Eh))t[e]=(i&Eh[e])!==0;return t}const Er=12346,gh=4097;async function bx(i){switch(i){case 15736195:{const{ESP32ROM:t}=await se(async()=>{const{ESP32ROM:e}=await Promise.resolve().then(()=>ux);return{ESP32ROM:e}},void 0);return new t}case 203546735:case 1867591791:case 2084675695:{const{ESP32C2ROM:t}=await se(async()=>{const{ESP32C2ROM:e}=await Promise.resolve().then(()=>_x);return{ESP32C2ROM:e}},void 0);return new t}case 1763790959:case 456216687:case 1216438383:case 1130455151:{const{ESP32C3ROM:t}=await se(async()=>{const{ESP32C3ROM:e}=await Promise.resolve().then(()=>fx);return{ESP32C3ROM:e}},void 0);return new t}case 752910447:{const{ESP32C6ROM:t}=await se(async()=>{const{ESP32C6ROM:e}=await Promise.resolve().then(()=>px);return{ESP32C6ROM:e}},void 0);return new t}case 606167151:case 871374959:case 1333878895:{const{ESP32C61ROM:t}=await se(async()=>{const{ESP32C61ROM:e}=await Promise.resolve().then(()=>Ex);return{ESP32C61ROM:e}},void 0);return new t}case 285294703:case 1675706479:case 1607549039:case 820080751:{const{ESP32C5ROM:t}=await se(async()=>{const{ESP32C5ROM:e}=await Promise.resolve().then(()=>mx);return{ESP32C5ROM:e}},void 0);return new t}case 3619110528:case 2548236392:{const{ESP32H2ROM:t}=await se(async()=>{const{ESP32H2ROM:e}=await Promise.resolve().then(()=>Sx);return{ESP32H2ROM:e}},void 0);return new t}case 9:{const{ESP32S3ROM:t}=await se(async()=>{const{ESP32S3ROM:e}=await Promise.resolve().then(()=>Rx);return{ESP32S3ROM:e}},void 0);return new t}case 1990:{const{ESP32S2ROM:t}=await se(async()=>{const{ESP32S2ROM:e}=await Promise.resolve().then(()=>Ax);return{ESP32S2ROM:e}},void 0);return new t}case 4293968129:{const{ESP8266ROM:t}=await se(async()=>{const{ESP8266ROM:e}=await Promise.resolve().then(()=>QS);return{ESP8266ROM:e}},void 0);return new t}case 0:case 182303440:case 117676761:{const{ESP32P4ROM:t}=await se(async()=>{const{ESP32P4ROM:e}=await Promise.resolve().then(()=>Mx);return{ESP32P4ROM:e}},void 0);return new t}default:return null}}class Cx{constructor(t){var e,n,s,r,a,o,l,c;this.ESP_RAM_BLOCK=6144,this.ESP_FLASH_BEGIN=2,this.ESP_FLASH_DATA=3,this.ESP_FLASH_END=4,this.ESP_MEM_BEGIN=5,this.ESP_MEM_END=6,this.ESP_MEM_DATA=7,this.ESP_WRITE_REG=9,this.ESP_READ_REG=10,this.ESP_SPI_ATTACH=13,this.ESP_CHANGE_BAUDRATE=15,this.ESP_FLASH_DEFL_BEGIN=16,this.ESP_FLASH_DEFL_DATA=17,this.ESP_FLASH_DEFL_END=18,this.ESP_SPI_FLASH_MD5=19,this.ESP_GET_SECURITY_INFO=20,this.ESP_ERASE_FLASH=208,this.ESP_ERASE_REGION=209,this.ESP_READ_FLASH=210,this.ESP_RUN_USER_CODE=211,this.ESP_IMAGE_MAGIC=233,this.ESP_CHECKSUM_MAGIC=239,this.ROM_INVALID_RECV_MSG=5,this.DEFAULT_TIMEOUT=3e3,this.ERASE_REGION_TIMEOUT_PER_MB=3e4,this.ERASE_WRITE_TIMEOUT_PER_MB=4e4,this.MD5_TIMEOUT_PER_MB=8e3,this.CHIP_ERASE_TIMEOUT=12e4,this.FLASH_READ_TIMEOUT=1e5,this.MAX_TIMEOUT=this.CHIP_ERASE_TIMEOUT*2,this.WRITE_BLOCK_ATTEMPTS=3,this.WRITE_BLOCK_RETRY_DELAY_MS=150,this.SPI_ADDR_REG_MSB=!0,this.CHIP_DETECT_MAGIC_REG_ADDR=1073745920,this.DETECTED_FLASH_SIZES={18:"256KB",19:"512KB",20:"1MB",21:"2MB",22:"4MB",23:"8MB",24:"16MB",25:"32MB",26:"64MB",27:"128MB",28:"256MB",32:"64MB",33:"128MB",34:"256MB",50:"256KB",51:"512KB",52:"1MB",53:"2MB",54:"4MB",55:"8MB",56:"16MB",57:"32MB",58:"64MB"},this.secureDownloadMode=!1,this.securityInfoCache=null,this.romBaudrate=115200,this.debugLogging=!1,this.syncStubDetected=!1,this.IS_STUB=!1,this.FLASH_WRITE_SIZE=16384,this.transport=t.transport,this.baudrate=t.baudrate,typeof t.romBaudrate<"u"&&(this.romBaudrate=t.romBaudrate),this.resetConstructors={classicReset:(h,f)=>new WS(h,f),customReset:(h,f)=>new XS(h,f),hardReset:(h,f)=>new KS(h,f),usbJTAGSerialReset:h=>new YS(h)},t.serialOptions&&(this.serialOptions=t.serialOptions),t.terminal&&(this.terminal=t.terminal,this.terminal.clean()),typeof t.debugLogging<"u"&&(this.debugLogging=t.debugLogging),t.port&&(this.transport=new Bd(t.port)),typeof t.enableTracing<"u"&&(this.transport.tracing=t.enableTracing),!((e=t.resetConstructors)===null||e===void 0)&&e.classicReset&&(this.resetConstructors.classicReset=(n=t.resetConstructors)===null||n===void 0?void 0:n.classicReset),!((s=t.resetConstructors)===null||s===void 0)&&s.customReset&&(this.resetConstructors.customReset=(r=t.resetConstructors)===null||r===void 0?void 0:r.customReset),!((a=t.resetConstructors)===null||a===void 0)&&a.hardReset&&(this.resetConstructors.hardReset=(o=t.resetConstructors)===null||o===void 0?void 0:o.hardReset),!((l=t.resetConstructors)===null||l===void 0)&&l.usbJTAGSerialReset&&(this.resetConstructors.usbJTAGSerialReset=(c=t.resetConstructors)===null||c===void 0?void 0:c.usbJTAGSerialReset),this.info("esptool.js"),this.info("Serial port "+this.transport.getInfo())}write(t,e=!0){this.terminal?e?this.terminal.writeLine(t):this.terminal.write(t):console.log(t)}error(t,e=!0){this.write(`Error: ${t}`,e)}info(t,e=!0){this.write(t,e)}debug(t,e=!0){this.debugLogging&&this.write(`Debug: ${t}`,e)}_shortToBytearray(t){return new Uint8Array([t&255,t>>8&255])}_intToByteArray(t){return new Uint8Array([t&255,t>>8&255,t>>16&255,t>>24&255])}_byteArrayToInt(t,e,n,s){return t|e<<8|n<<16|s<<24}_appendArray(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}async readPacket(t=null,e=this.DEFAULT_TIMEOUT){for(let n=0;n<100;n++){const s=await this.transport.read(e);if(!s||s.length<8)continue;const r=s[0];if(r!==1)continue;const a=s[1],o=this._byteArrayToInt(s[4],s[5],s[6],s[7]),l=s.slice(8);if(r==1){if(t==null||a==t)return[o,l];if(l[0]!=0&&l[1]==this.ROM_INVALID_RECV_MSG)throw await this.transport.drainInput(),new dr}}throw new Dt("invalid response")}async command(t=null,e=new Uint8Array(0),n=0,s=!0,r=this.DEFAULT_TIMEOUT){if(t!=null){this.transport.flushInput(),this.transport.tracing&&this.transport.trace(`command op:0x${t.toString(16).padStart(2,"0")} data len=${e.length} wait_response=${s?1:0} timeout=${(r/1e3).toFixed(3)} data=${this.transport.hexConvert(e)}`);const a=new Uint8Array(8+e.length);a[0]=0,a[1]=t,a[2]=this._shortToBytearray(e.length)[0],a[3]=this._shortToBytearray(e.length)[1],a[4]=this._intToByteArray(n)[0],a[5]=this._intToByteArray(n)[1],a[6]=this._intToByteArray(n)[2],a[7]=this._intToByteArray(n)[3];let o;for(o=0;o<e.length;o++)a[8+o]=e[o];await this.transport.write(a)}return s?this.readPacket(t,r):[0,new Uint8Array(0)]}async readReg(t,e=this.DEFAULT_TIMEOUT){this.debug(`Read Register:${this.toHex(t)}`);const n=this._intToByteArray(t),s=await this.command(this.ESP_READ_REG,n,void 0,void 0,e);return this.debug(`Read Register Value:${s[0]}`),s[0]}async writeReg(t,e,n=4294967295,s=0,r=0){let a=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));a=this._appendArray(a,this._intToByteArray(n)),a=this._appendArray(a,this._intToByteArray(s)),r>0&&(a=this._appendArray(a,this._intToByteArray(this.chip.UART_DATE_REG_ADDR)),a=this._appendArray(a,this._intToByteArray(0)),a=this._appendArray(a,this._intToByteArray(0)),a=this._appendArray(a,this._intToByteArray(r))),await this.checkCommand("write target memory",this.ESP_WRITE_REG,a)}async sync(){this.debug("Sync");const t=new Uint8Array(36);let e;for(t[0]=7,t[1]=7,t[2]=18,t[3]=32,e=0;e<32;e++)t[4+e]=85;try{let n=await this.command(8,t,void 0,void 0,100);this.syncStubDetected=n[0]===0;for(let s=0;s<7;s++)n=await this.readPacket(8,100),this.syncStubDetected=this.syncStubDetected&&n[0]===0;return n}catch(n){throw this.debug("Sync err "+n),n}}async _connectAttempt(t="default_reset",e){this.debug("_connect_attempt "+t),e&&await e.reset();const n=this.transport.peek(),s=Array.from(n,f=>String.fromCharCode(f)).join(""),r=/boot:(0x[0-9a-fA-F]+)([\s\S]*?waiting for download)?/,a=s.match(r);let o=!1,l="",c=!1;a&&(o=!0,l=a[1],c=!!a[2]),this.debug(`bootMode:${l} downloadMode:${c}`);let h="";for(let f=0;f<5;f++)try{this.debug(`Sync connect attempt ${f}`),this.transport.flushInput();const d=await this.sync();return this.debug(d[0].toString()),"success"}catch(d){this.debug(`Error at sync ${d}`),d instanceof Error?h=d.message:typeof d=="string"?h=d:h=JSON.stringify(d)}return o&&(h=`Wrong boot mode detected (${l}).
        This chip needs to be in download mode.`,c&&(h=`Download mode successfully detected, but getting no sync reply:
           The serial TX path seems to be down.`)),h}isUsbJtagSerialPort(){return this.transport.getVid()===Er&&this.transport.getPid()===gh}async usesUsbOtg(){const t=this.transport.getVid(),e=this.transport.getPid();return t===Er&&this.chip.IMAGE_CHIP_ID!=null&&e===this.chip.IMAGE_CHIP_ID?!0:t===Er&&e===gh||t!==void 0&&t!==Er?!1:typeof this.chip.usesUsbOtg=="function"?await this.chip.usesUsbOtg(this):typeof this.chip.usingUsbOtg=="function"?await this.chip.usingUsbOtg(this):!1}async applyUsbFlashWriteSize(){const t=this.chip.USB_RAM_BLOCK;t&&await this.usesUsbOtg()&&(this.FLASH_WRITE_SIZE=t,this.debug(`Using USB_RAM_BLOCK (0x${t.toString(16)}) for FLASH_WRITE_SIZE (USB-OTG)`))}constructResetSequence(t){if(t==="no_reset")return[];if(t==="usb_reset"||this.isUsbJtagSerialPort()){if(this.resetConstructors.usbJTAGSerialReset)return this.debug("using USB JTAG Serial Reset"),[this.resetConstructors.usbJTAGSerialReset(this.transport)]}else if(this.resetConstructors.classicReset)return this.debug("using Classic Serial Reset"),[this.resetConstructors.classicReset(this.transport,50),this.resetConstructors.classicReset(this.transport,550)];return[]}async openAndSync(t,e){this.securityInfoCache=null;let n;this.info("Connecting...",!1),await this.transport.connect(this.romBaudrate,this.serialOptions),this.transport.readLoop();const s=this.constructResetSequence(t);for(let r=0;r<e;r++){const a=s.length>0?s[r%s.length]:null;if(n=await this._connectAttempt(t,a),n==="success")break}if(n!=="success")throw new Dt("Failed to connect with the device");this.debug("Connect attempt successful."),this.info(`
\r`,!1)}async connect(t="default_reset",e=7,n=!0){if(await this.openAndSync(t,e),!!n){this.info("Detecting chip type... ");try{this.applyDetectedChip(await this.identifyChip())}catch(s){if(s instanceof Ra||s instanceof vl||!(s instanceof Dt))throw s;this.info(" Autodetection failed, trying again..."),await this.transport.disconnect(),await this.openAndSync(t,e),this.info("Detecting chip type... "),this.applyDetectedChip(await this.identifyChipByMagic())}}}async identifyChip(){try{const t=await this.getChipId(),e=this.romFromChipId(t);if(e===null)throw new Ra(t);return await this.readSecureDownloadMode(),e}catch(t){if(t instanceof Ra)throw t;if(t instanceof dr||t instanceof Ml)this.debug("GET_SECURITY_INFO not supported, falling back to magic value");else throw t}return this.identifyChipByMagic()}romFromChipId(t){for(const e of Tx)if(!e.USES_MAGIC_VALUE&&t===e.IMAGE_CHIP_ID)return e;return null}async readSecureDownloadMode(){const t=await this.getSecurityInfo();return this.secureDownloadMode=t.parsedFlags.SECURE_DOWNLOAD_ENABLE,this.secureDownloadMode}async identifyChipByMagic(){try{return await this.chipFromMagicValue()}catch(t){if(t instanceof dr)return await this.readSecureDownloadMode(),Kd.esp32s2;throw t}}applyDetectedChip(t){this.chip=t,t.SPI_ADDR_REG_MSB!==void 0&&(this.SPI_ADDR_REG_MSB=t.SPI_ADDR_REG_MSB)}async chipFromMagicValue(){const t=await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR)>>>0;this.debug("Chip Magic "+t.toString(16));const e=await bx(t);if(e===null)throw new vl(t);return e}async getSecurityInfo(t=!0){if(t&&this.securityInfoCache!==null)return this.securityInfoCache;let e,n=!1;try{e=await this.checkCommand("get security info",this.ESP_GET_SECURITY_INFO,new Uint8Array(0),0,20)}catch(a){if(a instanceof dr)throw a;e=await this.checkCommand("get security info",this.ESP_GET_SECURITY_INFO,new Uint8Array(0),0,12),n=!0}const s=this._byteArrayToInt(e[0],e[1],e[2],e[3])>>>0,r={flags:s,flashCryptCnt:e[4],keyPurposes:Array.from(e.slice(5,12)),chipId:n?null:this._byteArrayToInt(e[12],e[13],e[14],e[15])>>>0,apiVersion:n?null:this._byteArrayToInt(e[16],e[17],e[18],e[19])>>>0,parsedFlags:wx(s)};return this.securityInfoCache=r,r}async getChipId(){const t=(await this.getSecurityInfo()).chipId;if(t===null)throw new Ml;return this.debug("get_chip_id "+t.toString(16)),t}async detectChip(t="default_reset",e=7){await this.connect(t,e,!0),this.chip!=null?this.info(this.chip.CHIP_NAME):this.info("unknown chip! detectchip has failed.")}async checkCommand(t="",e=null,n=new Uint8Array(0),s=0,r=0,a=this.DEFAULT_TIMEOUT){this.debug("check_command "+t);const o=2,l=await this.command(e,n,s,void 0,a);if(l&&l[1]&&l[1].length<r+o){const h=l[1].slice(0,2);throw h[0]!==0?new Dt(`Failed to ${t} failed with status ${h}`):new Dt(`Failed to ${t}.
 Only got ${l[1].length} bytes of data.`)}const c=l[1].slice(r,r+o);if(c[0]!==0)throw new Dt(`Failed to ${t} failed with status ${c}`);return r>0?l[1].slice(0,r):l[0]}async memBegin(t,e,n,s){if(this.IS_STUB){const a=s,o=s+t,l=this.chip.getChipRevision?await this.chip.getChipRevision(this):void 0,c=await fh(this.chip.CHIP_NAME,l);if(c){const h=[[c.bss_start||c.data_start,c.data_start+c.decodedData.length],[c.text_start,c.text_start+c.decodedText.length]];for(const[f,d]of h)if(a<d&&o>f)throw new Dt(`Software loader is resident at 0x${f.toString(16).padStart(8,"0")}-0x${d.toString(16).padStart(8,"0")}.
            Can't load binary at overlapping address range 0x${a.toString(16).padStart(8,"0")}-0x${o.toString(16).padStart(8,"0")}.
            Either change binary loading address, or use the no-stub option to disable the software loader.`)}}this.debug("mem_begin "+t+" "+e+" "+n+" "+s.toString(16));let r=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));r=this._appendArray(r,this._intToByteArray(n)),r=this._appendArray(r,this._intToByteArray(s)),await this.checkCommand("enter RAM download mode",this.ESP_MEM_BEGIN,r)}checksum(t,e=this.ESP_CHECKSUM_MAGIC){for(let n=0;n<t.length;n++)e^=t[n];return e}async memBlock(t,e){let n=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));n=this._appendArray(n,this._intToByteArray(0)),n=this._appendArray(n,this._intToByteArray(0)),n=this._appendArray(n,t);const s=this.checksum(t);await this.checkCommand("write to target RAM",this.ESP_MEM_DATA,n,s)}async memFinish(t){const e=t===0?1:0,n=this._appendArray(this._intToByteArray(e),this._intToByteArray(t));await this.checkCommand("leave RAM download mode",this.ESP_MEM_END,n,void 0,void 0,200)}async flashSpiAttach(t){const e=this._intToByteArray(t);await this.checkCommand("configure SPI flash pins",this.ESP_SPI_ATTACH,e)}timeoutPerMb(t,e){const n=t*(e/1e6);return n<3e3?3e3:n}async flashBegin(t,e){const n=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),s=this.chip.getEraseSize(e,t),r=new Date,a=r.getTime();let o=3e3;this.IS_STUB==!1&&(o=this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB,t)),this.debug("flash begin "+s+" "+n+" "+this.FLASH_WRITE_SIZE+" "+e+" "+t);let l=this._appendArray(this._intToByteArray(s),this._intToByteArray(n));l=this._appendArray(l,this._intToByteArray(this.FLASH_WRITE_SIZE)),l=this._appendArray(l,this._intToByteArray(e)),this.IS_STUB==!1&&(l=this._appendArray(l,this._intToByteArray(0))),await this.checkCommand("enter Flash download mode",this.ESP_FLASH_BEGIN,l,void 0,void 0,o);const c=r.getTime();return t!=0&&this.IS_STUB==!1&&this.info("Took "+(c-a)/1e3+"."+(c-a)%1e3+"s to erase flash block"),n}async flashDeflBegin(t,e,n){const s=Math.floor((e+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),r=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),a=new Date,o=a.getTime();let l,c;this.IS_STUB?(l=t,c=this.DEFAULT_TIMEOUT):(l=r*this.FLASH_WRITE_SIZE,c=this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB,l)),this.info("Compressed "+t+" bytes to "+e+"...");let h=this._appendArray(this._intToByteArray(l),this._intToByteArray(s));h=this._appendArray(h,this._intToByteArray(this.FLASH_WRITE_SIZE)),h=this._appendArray(h,this._intToByteArray(n)),(this.chip.CHIP_NAME==="ESP32-S2"||this.chip.CHIP_NAME==="ESP32-S3"||this.chip.CHIP_NAME==="ESP32-C3"||this.chip.CHIP_NAME==="ESP32-C2")&&this.IS_STUB===!1&&(h=this._appendArray(h,this._intToByteArray(0))),await this.checkCommand("enter compressed flash mode",this.ESP_FLASH_DEFL_BEGIN,h,void 0,void 0,c);const f=a.getTime();return t!=0&&this.IS_STUB===!1&&this.info("Took "+(f-o)/1e3+"."+(f-o)%1e3+"s to erase flash block"),s}async flashBlock(t,e,n){let s=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,t);const r=this.checksum(t);for(let a=this.WRITE_BLOCK_ATTEMPTS-1;a>=0;a--)try{await this.checkCommand("write to target Flash after seq "+e,this.ESP_FLASH_DATA,s,r,void 0,n);return}catch(o){if(a===0)throw o;this.debug(`Block ${e} write failed (${o}), retrying with ${a} attempts left...`),await An(this.WRITE_BLOCK_RETRY_DELAY_MS)}}async flashDeflBlock(t,e,n){let s=this._appendArray(this._intToByteArray(t.length),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,t);const r=this.checksum(t);this.debug(`flash_defl_block ${Array.from(t.slice(0,2)).map(a=>a.toString(16)).join(" ")}`);for(let a=this.WRITE_BLOCK_ATTEMPTS-1;a>=0;a--)try{await this.checkCommand("write compressed data to flash after seq "+e,this.ESP_FLASH_DEFL_DATA,s,r,void 0,n);return}catch(o){if(a===0)throw o;this.debug(`Compressed block ${e} write failed (${o}), retrying with ${a} attempts left...`),await An(this.WRITE_BLOCK_RETRY_DELAY_MS)}}async flashFinish(t=!1,e=this.DEFAULT_TIMEOUT){const n=t?0:1,s=this._intToByteArray(n);await this.checkCommand("leave Flash mode",this.ESP_FLASH_END,s,void 0,void 0,e)}async flashDeflFinish(t=!1,e=this.DEFAULT_TIMEOUT){const n=t?0:1,s=this._intToByteArray(n);await this.checkCommand("leave compressed flash mode",this.ESP_FLASH_DEFL_END,s,void 0,void 0,e)}async runSpiflashCommand(t,e,n,s=null,r=0,a=0){const d=this.chip.SPI_REG_BASE,_=d+0,m=d+4,g=d+this.chip.SPI_USR_OFFS,p=d+this.chip.SPI_USR1_OFFS,u=d+this.chip.SPI_USR2_OFFS,R=d+this.chip.SPI_W0_OFFS;let x;this.chip.SPI_MOSI_DLEN_OFFS!=null?x=async(H,z)=>{const V=d+this.chip.SPI_MOSI_DLEN_OFFS,Z=d+this.chip.SPI_MISO_DLEN_OFFS;H>0&&await this.writeReg(V,H-1),z>0&&await this.writeReg(Z,z-1);let W=0;a>0&&(W|=a-1),r>0&&(W|=r-1<<w),W&&await this.writeReg(p,W)}:x=async(H,z)=>{const V=p,Z=17,W=8,it=H===0?0:H-1;let Et=(z===0?0:z-1)<<W|it<<Z;a>0&&(Et|=a-1),r>0&&(Et|=r-1<<w),await this.writeReg(V,Et)};const E=1<<18,P=28,w=26;if(n>32)throw new Dt("Reading more than 32 bits back from a SPI flash operation is unsupported");if(e.length>64)throw new Dt("Writing more than 64 bytes of data with one SPI command is unsupported");const y=e.length*8,C=await this.readReg(g),M=await this.readReg(u);let S=-2147483648;n>0&&(S|=268435456),y>0&&(S|=134217728),r>0&&(S|=1073741824),a>0&&(S|=536870912),await x(y,n),await this.writeReg(g,S);let b=7<<P|t;if(await this.writeReg(u,b),s&&r>0&&(this.SPI_ADDR_REG_MSB&&(s=s<<32-r),await this.writeReg(m,s)),y==0)await this.writeReg(R,0);else{e=Bo(e,4,0);const H=[];for(let V=0;V<e.length;V+=4)H.push((e[V]|e[V+1]<<8|e[V+2]<<16|e[V+3]<<24)>>>0);let z=R;for(const V of H)await this.writeReg(z,V),z+=4}await this.writeReg(_,E);let N;for(N=0;N<10&&(b=await this.readReg(_)&E,b!=0);N++);if(N===10)throw new Dt("SPI command did not complete in time");const F=await this.readReg(R);return await this.writeReg(g,C),await this.writeReg(u,M),F}async readFlashId(){const e=new Uint8Array(0);return await this.runSpiflashCommand(159,e,24)}async eraseFlash(){this.info("Erasing flash (this may take a while)...");let t=new Date;const e=t.getTime(),n=await this.checkCommand("erase flash",this.ESP_ERASE_FLASH,void 0,void 0,void 0,this.CHIP_ERASE_TIMEOUT);t=new Date;const s=t.getTime();return this.info("Chip erase completed successfully in "+(s-e)/1e3+"s"),n}toHex(t){return Array.prototype.map.call(t,e=>("00"+e.toString(16)).slice(-2)).join("")}async flashMd5sum(t,e){const n=this.timeoutPerMb(this.MD5_TIMEOUT_PER_MB,e);let s=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(0)),s=this._appendArray(s,this._intToByteArray(0));const o=this.IS_STUB?16:32,l=await this.checkCommand("calculate md5sum",this.ESP_SPI_FLASH_MD5,s,void 0,o,n);return this.toHex(l)}async readFlash(t,e,n=null){let s=this._appendArray(this._intToByteArray(t),this._intToByteArray(e));s=this._appendArray(s,this._intToByteArray(4096)),s=this._appendArray(s,this._intToByteArray(1024));const r=await this.checkCommand("read flash",this.ESP_READ_FLASH,s);if(r!=0)throw new Dt("Failed to read memory: "+r);let a=new Uint8Array(0);for(;a.length<e;){const o=await this.transport.read(this.FLASH_READ_TIMEOUT);if(o instanceof Uint8Array)o.length>0&&(a=this._appendArray(a,o),await this.transport.write(this._intToByteArray(a.length)),n&&n(o,a.length,e));else throw new Dt("Failed to read memory: "+o)}return a}async runStub(){if(this.syncStubDetected)return this.info("Stub is already running. No upload is necessary."),this.IS_STUB=!0,await this.applyUsbFlashWriteSize(),this.chip;if(this.secureDownloadMode)return this.info("Stub flasher is not supported in Secure Download Mode, it has been disabled."),this.chip;const t=this.chip.getChipRevision?await this.chip.getChipRevision(this):void 0,e=await fh(this.chip.CHIP_NAME,t);if(e===void 0)return this.info(`Stub flasher is not yet supported on ${this.chip.CHIP_NAME}, it has been disabled.`),this.chip;this.info("Uploading stub...");const n=[e.decodedText,e.decodedData];for(let a=0;a<n.length;a++)if(n[a]){const o=a===0?e.text_start:e.data_start,l=n[a].length,c=Math.floor((l+this.ESP_RAM_BLOCK-1)/this.ESP_RAM_BLOCK);await this.memBegin(l,c,this.ESP_RAM_BLOCK,o);for(let h=0;h<c;h++){const f=h*this.ESP_RAM_BLOCK,d=f+this.ESP_RAM_BLOCK;await this.memBlock(n[a].slice(f,d),h)}}this.info("Running stub..."),await this.memFinish(e.entry);const s=await this.transport.read(this.DEFAULT_TIMEOUT),r=String.fromCharCode(...s);if(r!=="OHAI")throw new Dt(`Failed to start stub. Unexpected response ${r}`);return this.info("Stub running..."),this.IS_STUB=!0,await this.applyUsbFlashWriteSize(),this.chip}async isResponsive(t=2){for(let e=0;e<t;e++)try{return await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR,500),!0}catch(n){this.debug(`Responsiveness probe failed: ${n}`),this.transport.flushInput()}return!1}async changeBaud(){if(this.secureDownloadMode){this.info("Baud rate change is not supported in secure download mode. Keeping 115200 baud.");return}this.info("Changing baudrate to "+this.baudrate);const t=this.IS_STUB?this.romBaudrate:0,e=this._appendArray(this._intToByteArray(this.baudrate),this._intToByteArray(t));await this.command(this.ESP_CHANGE_BAUDRATE,e),this.info("Changed"),this.info("If the chip does not respond to any further commands, consider using a lower baud rate."),await An(50),this.securityInfoCache=null;let n=!1,s;try{n=await this.transport.changeBaudrate(this.baudrate,this.serialOptions)}catch(r){s=r,this.debug(`Host baud-rate change failed: ${r}`)}await this.transport.drainInput(),!(!s&&await this.isResponsive())&&(s?this.info(`Unable to use ${this.baudrate} baud. Continuing at ${this.romBaudrate} baud.`):n?this.info(`The board reset while the serial port was reopened. Continuing at ${this.romBaudrate} baud.`):this.info(`The board stopped responding after changing baud rate. Continuing at ${this.romBaudrate} baud.`),await this.transport.disconnect(),await An(50),this.baudrate=this.romBaudrate,this.IS_STUB=!1,await this.connect("default_reset",7,!1),await this.runStub())}async main(t="default_reset"){await this.detectChip(t);let e;if(this.secureDownloadMode)this.info("WARNING: Connected chip is in Secure Download Mode. Register reads (chip description, features, MAC) are not supported."),e=this.chip.CHIP_NAME,this.info("Chip is "+e);else{if(e=await this.chip.getChipDescription(this),this.chip.getChipRevision){const n=await this.chip.getChipRevision(this);this.info("Chip Revision: "+n)}this.info("Chip is "+e),this.info("Features: "+await this.chip.getChipFeatures(this)),this.info("Crystal is "+await this.chip.getCrystalFreq(this)+"MHz"),this.info("MAC: "+await this.chip.readMac(this)),await this.chip.readMac(this),typeof this.chip.postConnect<"u"&&await this.chip.postConnect(this)}if(await this.runStub(),this.romBaudrate!==this.baudrate&&await this.changeBaud(),!this.secureDownloadMode)try{const n=await this.readFlashId();this.info("Flash ID: "+n.toString(16)),(n===16777215||n===0)&&this.info(`WARNING: Failed to communicate with the flash chip,
read/write operations will fail.
Try checking the chip connections or removing
any other hardware connected to IOs.`)}catch(n){throw new Dt("Unable to verify flash chip connection "+n)}return e}flashSizeBytes(t){let e=-1;return this.transport.trace(`Flash size string ${t}`),t.toString().indexOf("KB")!==-1?e=parseInt(t.toString().slice(0,t.toString().indexOf("KB")))*1024:t.toString().indexOf("MB")!==-1&&(e=parseInt(t.toString().slice(0,t.toString().indexOf("MB")))*1024*1024),this.transport.trace(`Flash size in bytes ${e}`),e}parseFlashSizeArg(t){if(typeof this.chip.FLASH_SIZES[t]>"u")throw new Dt("Flash size "+t+" is not supported by this chip type. Supported sizes: "+this.chip.FLASH_SIZES);return this.chip.FLASH_SIZES[t]}async _updateImageFlashParams(t,e,n="keep",s="keep",r="keep"){if(this.debug(`_update_image_flash_params ${r} ${n} ${s}`),t.length<8||e!=this.chip.BOOTLOADER_FLASH_OFFSET)return t;if(r==="keep"&&n==="keep"&&s==="keep")return this.info("Not changing the image"),t;const a=t[0];let o=t[2];const l=t[3];if(a!==this.ESP_IMAGE_MAGIC)return this.info("Warning: Image file at 0x"+e.toString(16)+" doesn't look like an image file, so not changing any flash settings."),t;try{(await mh(this.chip,t)).verify()}catch{return this.debug(`Warning: Image file at 0x${e.toString(16)} is not a valid ${this.chip.CHIP_NAME} image, so not changing any flash settings.`),t}const c=this.chip.CHIP_NAME!=="ESP8266"&&t[23]===49;n!=="keep"&&(o={qio:0,qout:1,dio:2,dout:3}[n]);let h=l&15;s!=="keep"&&(h={"40m":0,"26m":1,"20m":2,"80m":15}[s]);let f=l&240;r!=="keep"&&(f=this.parseFlashSizeArg(r));const d=o<<8|h+f;this.info("Flash params set to "+d.toString(16));const _=new Uint8Array(t);if(t[2]!==o&&(_[2]=o),t[3]!==h+f&&(_[3]=h+f),c){const m=await mh(this.chip,_),g=_.slice(0,m.datalength),p=_.slice(m.datalength+m.SHA256_DIGEST_LEN),u=await crypto.subtle.digest("SHA-256",p),R=new Uint8Array(u),x=new Uint8Array(g.length+R.length+p.length);x.set(g,0),x.set(R,g.length),x.set(p,g.length+R.length);const E=x.slice(m.datalength,m.datalength+m.SHA256_DIGEST_LEN);return this.transport.hexify(R)===this.transport.hexify(E)?this.info("SHA digest in image updated"):this.info(`WARNING: SHA recalculation for binary failed!
	Expected calculated SHA: ${this.transport.hexify(R)}
	SHA stored in binary:    ${this.transport.hexify(E)}`),x}return _}async writeFlash(t){this.debug("EspLoader program");for(let r=0;r<t.fileArray.length;r++)if(!(t.fileArray[r].data instanceof Uint8Array))throw new Dt(`File ${r+1} data must be a Uint8Array`);let e=t.flashSize;if(t.flashSize==="detect"){this.info("Configuring flash size...");const r=await this.detectFlashSize();if(!r)throw new Dt("Could not auto-detect Flash size. Set flash size explicitly or check the flash connection.");this.info("Detected flash size set to "+r),e=r}if(e!=="keep"){const r=this.flashSizeBytes(e);if(r<0)throw new Dt(`Invalid flash size: ${e}`);for(let a=0;a<t.fileArray.length;a++)if(t.fileArray[a].data.length+t.fileArray[a].address>r)throw new Dt(`File ${a+1} doesn't fit in the available flash`)}this.IS_STUB===!0&&t.eraseAll===!0&&await this.eraseFlash();let n,s;for(let r=0;r<t.fileArray.length;r++){if(this.debug("Data Length "+t.fileArray[r].data.length),n=t.fileArray[r].data,this.debug("Image Length "+n.length),n.length===0){this.debug("Warning: File is empty");continue}n=Bo(n,4),s=t.fileArray[r].address,n=await this._updateImageFlashParams(n,s,t.flashMode,t.flashFreq,e);let a=null;t.calculateMD5Hash&&(a=t.calculateMD5Hash(n),this.debug("Image MD5 "+a));const o=n.length;let l;t.compress?(n=zS(n,{level:9}),l=await this.flashDeflBegin(o,n.length,s)):l=await this.flashBegin(o,s);let c=0,h=0;const f=n.length;t.reportProgress&&t.reportProgress(r,0,f);let d=new Date;const _=d.getTime();let m=5e3;const g=new VS({chunkSize:1});let p=0;g.onData=function(x){p+=x.byteLength};let u=0;for(;u<n.length;){this.debug("Write loop "+s+" "+c+" "+l),this.info("Writing at 0x"+(s+(t.compress?p:h)).toString(16)+"... ("+Math.floor(100*(c+1)/l)+"%)");const x=Math.min(this.FLASH_WRITE_SIZE,n.length-u),E=n.slice(u,u+x),P=u+x>=n.length;if(t.compress){const w=p;g.push(E,P);const y=p-w;let C=3e3;this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,y)>3e3&&(C=this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,y)),this.IS_STUB===!1&&(m=C),await this.flashDeflBlock(E,c,m),this.IS_STUB&&(m=C)}else{let w=E;E.length<this.FLASH_WRITE_SIZE&&(w=new Uint8Array(this.FLASH_WRITE_SIZE).fill(255),w.set(E));let y=3e3;this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,w.length)>3e3&&(y=this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB,w.length)),this.IS_STUB===!1&&(m=y),await this.flashBlock(w,c,m),this.IS_STUB&&(m=y)}h+=E.length,u+=x,c++,t.reportProgress&&t.reportProgress(r,h,f)}this.IS_STUB&&(t.compress?await this.flashDeflFinish(!1,m):await this.flashFinish(!1,m)),d=new Date;const R=d.getTime()-_;if(t.compress?this.info("Wrote "+o+" bytes ("+h+" compressed) at 0x"+s.toString(16)+" in "+R/1e3+" seconds."):this.info("Wrote "+h+" bytes at 0x"+s.toString(16)+" in "+R/1e3+" seconds."),a){this.info("File  md5: "+a);const x=await this.flashMd5sum(s,o);if(this.info("Flash md5: "+x),new String(x).valueOf()!=new String(a).valueOf())throw new Dt("MD5 of file does not match data in flash!");this.info("Hash of data verified.")}}this.info("Leaving...")}async flashId(){this.debug("flash_id");const t=await this.readFlashId();this.info("Manufacturer: "+(t&255).toString(16));const e=t>>16&255;this.info("Device: "+(t>>8&255).toString(16)+e.toString(16)),this.info("Detected flash size: "+this.DETECTED_FLASH_SIZES[e])}async detectFlashSize(){this.debug("detectFlashSize");const e=await this.readFlashId()>>16&255,n=this.DETECTED_FLASH_SIZES[e];if(!n){this.info("Could not auto-detect Flash size");return}return this.info("Auto-detected Flash size: "+n),n}async softReset(t){if(this.IS_STUB){if(this.chip.CHIP_NAME!="ESP8266")throw new Dt("Soft resetting is currently only supported on ESP8266");t?(await this.flashBegin(0,0),await this.flashFinish(!0)):await this.command(this.ESP_RUN_USER_CODE,void 0,void 0,!1)}else{if(t)return;await this.flashBegin(0,0),await this.flashFinish(!1)}}async after(t="hard_reset",e,n){switch(t){case"hard_reset":if(this.resetConstructors.hardReset){this.info("Hard resetting via RTS pin...");const s=e??await this.usesUsbOtg();await this.resetConstructors.hardReset(this.transport,s).reset()}break;case"soft_reset":this.info("Soft resetting..."),await this.softReset(!1);break;case"no_reset_stub":this.info("Staying in flasher stub.");break;case"custom_reset":n||this.info("Custom reset sequence not provided, doing nothing."),this.resetConstructors.customReset||this.info("Custom reset constructor not available, doing nothing."),this.resetConstructors.customReset&&n&&(this.info("Custom resetting using sequence "+n),await this.resetConstructors.customReset(this.transport,n).reset());break;default:this.info("Staying in bootloader."),this.IS_STUB&&this.softReset(!0);break}}}class Px{constructor(t){et(this,"callbacks");et(this,"isCancelled",!1);et(this,"activePort",null);et(this,"activeReader",null);et(this,"activeWriter",null);this.callbacks=t}async cleanup(){if(this.activeReader){try{await this.activeReader.cancel()}catch{}try{this.activeReader.releaseLock()}catch{}this.activeReader=null}if(this.activeWriter){try{this.activeWriter.releaseLock()}catch{}this.activeWriter=null}if(this.activePort){try{await this.activePort.close()}catch{}this.activePort=null}}async start(t){this.isCancelled=!1;const e=t.adminToken||"pair_admin_secret";if(!("serial"in navigator))throw new Error("Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.");let n=null,s=null;try{this.callbacks.onStepChange(1,"Connecting to microcontroller via Web Serial..."),this.callbacks.onLog(`Requesting Serial Port... Please select your connected tracker board in the browser popup.
`);try{n=await navigator.serial.requestPort({filters:[{usbVendorId:12346},{usbVendorId:10374},{usbVendorId:6790},{usbVendorId:4292},{usbVendorId:1027},{usbVendorId:1659}]})}catch(x){if(x.name==="NotFoundError")throw x;n=await navigator.serial.requestPort()}this.activePort=n,this.callbacks.onLog(`Serial port selected. Initializing esptool-js transport...
`),s=new Bd(n);const r=new Cx({transport:s,baudrate:115200,terminal:{clean:()=>{},writeLine:x=>this.callbacks.onLog(x+`
`),write:x=>this.callbacks.onLog(x)}});this.callbacks.onLog(`Syncing with ROM bootloader...
`);const a=await r.main()||"";this.callbacks.onLog(`Detected chip: ${a||"Unknown"}
`);let o="esp32c6";if(a.toLowerCase().includes("8266"))o="esp12e";else if(a.toLowerCase().includes("c6"))o="esp32c6";else{let x="";try{x=await r.chip.getChipDescription(r)||""}catch{}x.toLowerCase().includes("8266")?o="esp12e":x.toLowerCase().includes("c6")?o="esp32c6":o=window.confirm(`Detected chip '${a||x||"Unknown"}'. Is this an ESP-12E (ESP8266)?
Click OK for ESP-12E, or Cancel for ESP32-C6.`)?"esp12e":"esp32c6"}const l=o==="esp12e"?"ESP-12E (ESP8266)":"ESP32-C6";this.callbacks.onLog(`Using hardware target profile: ${o} (${l})
`);const c=document.getElementById("flashStepChipText");c&&(c.textContent=`Flash ${l} (esptool-js)`);let h="";try{h=(await r.chip.readMac(r)).toUpperCase()}catch(x){this.callbacks.onLog(`Warning: Could not read MAC from chip eFuse: ${x.message}
`),h="ESP_"+Math.random().toString(16).substring(2,8).toUpperCase()}this.callbacks.onLog(`Device MAC Address: ${h}
`),this.callbacks.onStepChange(2,`Registering ${h} with role '${t.role}' (${l})...`),this.callbacks.onLog(`Calling POST /v1/devices/register on server...
`);const f=await fetch("/v1/devices/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({device_id:h,role:t.role,token:t.token&&t.token.trim()?t.token.trim():void 0,notes:`Provisioned via Web Serial for role ${t.role} (${o})`})});if(!f.ok){const x=await f.text();throw new Error(`Server registration failed (${f.status}): ${x}`)}const d=await f.json(),_=d.token||t.token;this.callbacks.onLog(`Registration successful! Role: ${d.role}, Token: ${_}
`),this.callbacks.onStepChange(3,`Fetching ${l} firmware binaries from server...`),this.callbacks.onLog(`Fetching /v1/firmware/manifest?hw=${o}...
`);const m=await fetch(`/v1/firmware/manifest?hw=${o}`);if(!m.ok)throw new Error(`Failed to fetch firmware manifest (${m.status})`);const g=await m.json();if(!g.parts||g.parts.length===0)throw new Error(`Firmware manifest for ${o} contains no binary parts. Run "make firmware-bin" first.`);const p=[],u={};_&&(u.Authorization=`Bearer ${_}`);for(const x of g.parts){this.callbacks.onLog(`Downloading ${x.name} (offset 0x${x.offset.toString(16)})...
`);const E=await fetch(x.path,{headers:u});if(!E.ok)throw new Error(`Failed to download ${x.name} from ${x.path} (${E.status} ${E.statusText})`);const P=await E.arrayBuffer();p.push({data:new Uint8Array(P),address:x.offset})}this.callbacks.onStepChange(4,`Flashing firmware to ${l}...`),this.callbacks.onLog(`Starting flash write for ${p.length} binary partitions...
`),await r.writeFlash({fileArray:p,flashSize:"keep",flashMode:"keep",flashFreq:"keep",eraseAll:!1,compress:!0,reportProgress:(x,E,P)=>{var C;const w=Math.round(E/P*100),y=((C=g.parts[x])==null?void 0:C.name)||"binary";this.callbacks.onProgress(`Flashing ${y} (${w}%)`,w)}}),this.callbacks.onLog(`Flash write complete! Triggering hardware reset into user firmware...
`);try{await s.setSignals(!1,!0),await new Promise(x=>setTimeout(x,150)),await s.setSignals(!1,!1),await new Promise(x=>setTimeout(x,200))}catch{}try{await s.disconnect()}catch{}s=null,await new Promise(x=>setTimeout(x,600));const R=o==="esp12e"?9600:115200;this.callbacks.onStepChange(5,`Provisioning WiFi credentials and role over Serial (${R} baud)...`),await this.runSerialProvisioning(n,R,t,_),this.callbacks.onStepChange(6,"Waiting for device to announce on WiFi..."),this.callbacks.onSwitchOnPrompt(h),await this.waitForAnnounce(h,t.role),this.callbacks.onSuccess(h,t.role)}catch(r){throw this.callbacks.onError(r),r}finally{await this.cleanup()}}async quickProvision(t){this.isCancelled=!1;const e=t.adminToken||"pair_admin_secret";if(!("serial"in navigator))throw new Error("Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.");let n=null;try{this.callbacks.onStepChange(1,"Connecting to microcontroller via Web Serial..."),this.callbacks.onLog(`Requesting Serial Port... Please select your connected tracker board.
`);try{n=await navigator.serial.requestPort({filters:[{usbVendorId:12346},{usbVendorId:10374},{usbVendorId:6790},{usbVendorId:4292},{usbVendorId:1027},{usbVendorId:1659}]})}catch(c){if(c.name==="NotFoundError")throw c;n=await navigator.serial.requestPort()}this.activePort=n;const s=window.confirm(`Is this tracker an ESP-12E (NodeMCU / ESP8266)?
Click OK for ESP-12E (9600 baud), or Cancel for ESP32-C6 (115200 baud).`),r=s?9600:115200,a=s?"esp12e":"esp32c6";this.callbacks.onStepChange(2,`Registering role '${t.role}' on Hub...`),this.callbacks.onLog(`Registering device on Hub with role '${t.role}'...
`);const o="TRACKER_"+Math.random().toString(16).substring(2,8).toUpperCase();let l=t.token;try{const c=await fetch("/v1/devices/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({device_id:o,role:t.role,token:t.token&&t.token.trim()?t.token.trim():void 0,notes:`Quick Provisioned via Serial (${a})`})});c.ok&&(l=(await c.json()).token||l)}catch{}this.callbacks.onStepChange(3,"Firmware flash skipped (Quick Provision Mode)"),await new Promise(c=>setTimeout(c,200)),this.callbacks.onStepChange(4,"Firmware verified on board"),await new Promise(c=>setTimeout(c,200)),this.callbacks.onStepChange(5,`Provisioning WiFi & Role over Serial (${r} baud)...`),await this.runSerialProvisioning(n,r,t,l),this.callbacks.onStepChange(6,"Waiting for tracker to connect to WiFi and announce..."),this.callbacks.onSwitchOnPrompt(o),await this.waitForAnyAnnounce(t.role),this.callbacks.onSuccess(o,t.role)}catch(s){throw this.callbacks.onError(s),s}finally{await this.cleanup()}}async runSerialProvisioning(t,e,n,s){this.callbacks.onLog(`Opening serial port at ${e} baud for CLI provisioning...
`);try{await t.open({baudRate:e})}catch(f){throw this.callbacks.onLog(`Failed to open serial port: ${f.message}
`),new Error(`Could not open serial port at ${e} baud: ${f.message}`)}try{await t.setSignals({dataTerminalReady:!1,requestToSend:!1})}catch{}try{this.callbacks.onLog(`Pulsing hardware reset to boot into firmware...
`),await t.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(f=>setTimeout(f,150)),await t.setSignals({dataTerminalReady:!1,requestToSend:!1}),await new Promise(f=>setTimeout(f,500))}catch{}const r=new TextEncoder,a=new TextDecoder,o=t.readable.getReader(),l=t.writable.getWriter();this.activeReader=o,this.activeWriter=l;let c=!0;(async()=>{try{for(;c;){const{value:f,done:d}=await o.read();if(d)break;if(f){const _=a.decode(f,{stream:!0});this.callbacks.onLog(_)}}}catch{}})();const h=async(f,d=300)=>{f&&this.callbacks.onLog(`
[CLI Send] > ${f}
`),await l.write(r.encode(f+`\r
`)),await new Promise(_=>setTimeout(_,d))};await h("",400),await h(`set ssid ${n.ssid}`,300),await h(`set pass ${n.password}`,300),await h(`set server ${n.serverHost}`,300),await h(`set port ${n.serverPort}`,300),s&&await h(`set token ${s}`,300),await h(`set role ${n.role}`,300),await h("show",600),await h("reboot",400),this.callbacks.onLog(`
✓ Provisioning commands successfully sent and saved to flash!
`),c=!1;try{await o.cancel()}catch{}try{o.releaseLock()}catch{}this.activeReader=null;try{l.releaseLock()}catch{}this.activeWriter=null;try{await t.close()}catch{}this.activePort=null}async waitForAnnounce(t,e){const n=Date.now(),s=6e4;for(;Date.now()-n<s;){if(this.isCancelled)return;try{const r=await fetch("/v1/devices");if(r.ok){const o=(await r.json()).find(l=>l.device_id.toUpperCase().replace(/:/g,"")===t.toUpperCase().replace(/:/g,"")&&l.online===!0);if(o){this.callbacks.onLog(`Device ${t} announced successfully as role '${o.role}'!
`);return}}}catch{}await new Promise(r=>setTimeout(r,1500))}throw new Error(`Timed out waiting for tracker ${t} to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and credentials are correct.`)}async waitForAnyAnnounce(t){const e=Date.now(),n=6e4;for(;Date.now()-e<n;){if(this.isCancelled)return;try{const s=await fetch("/v1/devices");if(s.ok){const a=(await s.json()).find(o=>o.online===!0&&(o.role===t||o.role==="unassigned"));if(a){this.callbacks.onLog(`Tracker ${a.device_id} connected and online on WiFi!
`);return}}}catch{}await new Promise(s=>setTimeout(s,1500))}throw new Error("Timed out waiting for tracker to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and tracker has powered on.")}cancel(){this.isCancelled=!0,this.cleanup()}}const ni="pair_admin_secret";class Ux{constructor(){et(this,"visualizer");et(this,"playback");et(this,"flasher",null);et(this,"ws",null);et(this,"requiredRoles",[]);et(this,"devices",new Map);et(this,"roleToDevice",new Map);et(this,"activeSession",null);et(this,"latestFirmware",null);et(this,"otaJobs",new Map);et(this,"deviceToOtaJob",new Map);et(this,"isUpdatingAll",!1);et(this,"recordingTimerInterval",null);et(this,"recordingStartMs",0);et(this,"sampleCount",0);et(this,"lastRateCheck",Date.now());et(this,"streamRateHz",0);et(this,"sessionsList",[]);et(this,"exportSessionId",null);et(this,"logEntries",[]);et(this,"activeLogFilter","all");et(this,"autoScroll",!0);et(this,"logPaused",!1);et(this,"lastStreamLogTime",0);this.initVisualizer(),this.initPlayback(),this.initDOM(),this.connectWebSocket(),this.startPeriodicUpdates(),this.fetchSessions(),this.fetchLatestFirmware()}initVisualizer(){const t=document.getElementById("threeContainer");this.visualizer=new uE(t);const e=document.getElementById("valLatency");this.visualizer.onLatencyUpdate=s=>{if(this.visualizer.isPlaybackMode){e&&(e.innerText="Playback Mode",e.className="val");return}e&&(e.innerText=`${s} ms`,s<100?e.className="val text-success":s<150?e.className="val text-warning":e.className="val")};const n=document.getElementById("valFps");this.visualizer.onFpsUpdate=s=>{n&&(n.innerText=`${s}`)}}initPlayback(){this.playback=new fE(this.visualizer);const t=document.getElementById("btnPlayPause"),e=document.getElementById("playbackScrubber"),n=document.getElementById("playbackTimeDisplay");this.playback.onPlayStateChange=s=>{t&&(t.innerText=s?"⏸ Pause":"▶ Play",t.className=s?"btn btn-sm btn-secondary btn-play":"btn btn-sm btn-primary btn-play")},this.playback.onTimeUpdate=(s,r)=>{e&&(e.max=`${r}`,e.value=`${s}`),n&&(n.innerText=`${this.formatPlaybackTime(s)} / ${this.formatPlaybackTime(r)}`)}}initDOM(){const t=document.getElementById("btnStartSession"),e=document.getElementById("btnEndSession"),n=document.getElementById("btnCalibratePose"),s=document.getElementById("btnReZero");t.addEventListener("click",()=>this.startSession()),e.addEventListener("click",()=>this.endSession()),n&&n.addEventListener("click",()=>this.calibratePose()),s&&s.addEventListener("click",()=>this.reZeroYaw());const r=document.getElementById("tabTrackers"),a=document.getElementById("tabSessions"),o=document.getElementById("tabFlash"),l=document.getElementById("tabLogs"),c=document.getElementById("viewTrackers"),h=document.getElementById("viewSessions"),f=document.getElementById("viewFlash"),d=document.getElementById("viewLogs"),_=(F,H)=>{[r,a,o,l].forEach(z=>z==null?void 0:z.classList.remove("active")),[c,h,f,d].forEach(z=>{z&&(z.style.display="none")}),F.classList.add("active"),H.style.display="flex"};r==null||r.addEventListener("click",()=>_(r,c)),a==null||a.addEventListener("click",()=>{_(a,h),this.fetchSessions()}),o==null||o.addEventListener("click",()=>_(o,f)),l==null||l.addEventListener("click",()=>_(l,d)),this.initLoggingUI(),this.initFlashUI();const m=document.getElementById("btnRefreshSessions");m&&m.addEventListener("click",()=>this.fetchSessions());const g=document.getElementById("missingRolesModal"),p=document.getElementById("btnCloseModal"),u=document.getElementById("btnAcknowledgeModal"),R=()=>{g&&(g.style.display="none")};p&&p.addEventListener("click",R),u&&u.addEventListener("click",R);const x=document.getElementById("btnCloseExportModal"),E=document.getElementById("btnCancelExport"),P=document.getElementById("btnConfirmExportDownload");x&&x.addEventListener("click",()=>this.closeExportModal()),E&&E.addEventListener("click",()=>this.closeExportModal()),P&&P.addEventListener("click",()=>this.triggerExportDownload());const w=document.getElementById("btnPlayPause");w&&w.addEventListener("click",()=>this.playback.togglePlay());const y=document.getElementById("playbackScrubber");y&&y.addEventListener("input",()=>{const F=parseFloat(y.value);this.playback.seek(F)});const C=document.querySelectorAll(".btn-speed");C.forEach(F=>{F.addEventListener("click",H=>{const z=H.currentTarget,V=parseFloat(z.dataset.speed||"1.0");this.playback.setSpeed(V),C.forEach(Z=>Z.classList.remove("active")),z.classList.add("active")})});const M=document.getElementById("btnExitPlayback");M&&M.addEventListener("click",()=>this.exitPlayback());const S=document.getElementById("btnUpdateAll");S&&S.addEventListener("click",()=>this.updateAllDevices());const b=document.querySelectorAll(".btn-cam");b.forEach(F=>{F.addEventListener("click",H=>{const z=H.currentTarget,V=z.dataset.cam||"persp";this.visualizer.setCameraView(V),b.forEach(Z=>Z.classList.remove("active")),z.classList.add("active")})});const N=document.getElementById("btnResetCamera");N&&N.addEventListener("click",()=>{this.visualizer.resetCamera(),b.forEach(H=>H.classList.remove("active"));const F=document.querySelector('.btn-cam[data-cam="persp"]');F&&F.classList.add("active")})}calibratePose(){this.visualizer.calibratePose();const t=document.getElementById("calibBadge");t&&(t.className="badge-calib badge-calib-done",t.innerText="Calibrated")}reZeroYaw(){this.visualizer.reZeroYaw()}connectWebSocket(){const t=document.getElementById("wsBadge");t.className="badge badge-disconnected",t.innerText="Connecting...";const n=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/v1/dashboard`;this.ws=new WebSocket(n),this.ws.onopen=()=>{t.className="badge badge-connected",t.innerText="Connected Live",this.addLog("sys",`Connected to Eidon server via WebSocket (${n})`,"WS")},this.ws.onmessage=s=>{try{const r=JSON.parse(s.data);this.handleMessage(r)}catch(r){console.error("Failed to parse WS message:",r)}},this.ws.onclose=()=>{t.className="badge badge-disconnected",t.innerText="Disconnected (Reconnecting...)",this.addLog("warn","WebSocket disconnected from server. Reconnecting in 2s...","DISCONNECT"),setTimeout(()=>this.connectWebSocket(),2e3)}}handleMessage(t){var e,n,s,r;switch(t.type){case"init":{const a=t;if(this.requiredRoles=a.required_roles||[],this.devices.clear(),this.roleToDevice.clear(),a.server_time_ms&&this.visualizer.jitterBuffer.setServerTimeSync(a.server_time_ms),a.latest_firmware&&(this.latestFirmware=a.latest_firmware,this.updateLatestFwBadge()),a.ota_jobs)for(const o of a.ota_jobs)this.otaJobs.set(o.job_id,o),this.deviceToOtaJob.set(o.device_id,o);if(a.devices)for(const o of a.devices)this.devices.set(o.device_id,o),o.online&&this.roleToDevice.set(o.role,o);this.activeSession=a.active_session,this.updateSessionUI(),this.renderCards(),this.addLog("sys",`Server init: ${((e=a.devices)==null?void 0:e.length)||0} registered devices, ${((n=a.required_roles)==null?void 0:n.length)||0} required roles`,"INIT");break}case"ota_job_update":{const a=t.job;this.otaJobs.set(a.job_id,a),this.deviceToOtaJob.set(a.device_id,a),this.renderCards(),this.addLog("role",`OTA Job ${a.job_id} on ${a.device_id}: ${a.status.toUpperCase()} (${a.progress_pct}%)`,"OTA");break}case"device_state":{const a=t;this.devices.set(a.device_id,a),a.online?this.roleToDevice.set(a.role,a):((s=this.roleToDevice.get(a.role))==null?void 0:s.device_id)===a.device_id&&this.roleToDevice.delete(a.role),this.renderCards(),this.updateRecordingLossBanner();break}case"device_connected":{const a=t.device;if(a){const o=(a.hw||"esp12e").toUpperCase();this.addLog("announce",`Tracker connected: ${a.device_id} (${o}) role='${a.role}' heap=${a.free_heap||0}B`,"CONNECT")}break}case"device_disconnected":{this.addLog("warn",`Tracker disconnected: ${t.device_id} role='${t.role}'`,"DISCONNECT");break}case"log":{this.addLog(t.category||"sys",t.message,((r=t.level)==null?void 0:r.toUpperCase())||"INFO");break}case"sample":case"pose_update":{const a=t;this.sampleCount++,this.visualizer.handleSample(a);const o=this.devices.get(a.device_id)||this.roleToDevice.get(a.role);o&&(o.last_seen_ms=Date.now(),o.loss_pct=a.loss_pct),this.updateRecordingLossBanner();const l=Date.now();if(l-this.lastStreamLogTime>250){this.lastStreamLogTime=l;const c=a.quat,h=c?`q=[${c.map(m=>m.toFixed(3)).join(", ")}]`:"",f=c&&Math.abs(c[0]-1)<.005&&Math.abs(c[1])<.005&&Math.abs(c[2])<.005&&Math.abs(c[3])<.005,d=((o==null?void 0:o.hw)||"esp12e").toUpperCase(),_=f?" [⚠️ No IMU / Flat Quat]":"";this.addLog("stream",`${a.device_id} (${d}) role:${a.role} seq:${a.seq} ${h} loss:${a.loss_pct.toFixed(2)}%${_}`,"STREAM")}break}case"session_started":this.activeSession=t.session,this.updateSessionUI(),this.fetchSessions(),this.addLog("sys",`Recording session started: ${t.session.name} (${t.session.session_id})`,"SESSION");break;case"session_ended":this.activeSession=null,this.updateSessionUI(),this.fetchSessions(),this.addLog("sys","Recording session ended. Parquet saved.","SESSION");break}}renderCards(){const t=document.getElementById("requiredRolesContainer");t.innerHTML="";let e=0;for(const l of this.requiredRoles){const c=this.roleToDevice.get(l),h=c&&c.online;h&&e++;const f=document.createElement("div");f.className=`card-role ${h?"online":"missing"}`;const d=l.replace(/_/g," "),_=h?"status-online":"status-missing",m=h&&c&&c.battery_pct!==null?`${c.battery_pct}%`:"—",g=h&&c?`${c.loss_pct.toFixed(2)}%`:"—",p=h&&c?this.formatTimeAgo(c.last_seen_ms):"Never",u=h&&c?c.device_id:"Not connected",R=c&&c.firmware_version?c.firmware_version:"unknown",x=this.latestFirmware?this.latestFirmware.version:"1.0.0",E=h&&R!=="unknown"&&R!==x,P=c&&c.protocol_outdated,w=c?this.deviceToOtaJob.get(c.device_id):null,y=w&&["queued","downloading","verifying","rebooting"].includes(w.status),C=h&&c&&c.battery_pct!==null&&c.battery_pct<30,M=h&&c&&c.free_heap?`${Math.round(c.free_heap/1024)} KB`:"—",S=h&&(c!=null&&c.hw)?c.hw.toUpperCase():"",b=h&&S?`<span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${S}</span>`:"",N=h?"ONLINE":"STANDBY";f.innerHTML=`
        <div class="card-top">
          <div class="role-title">
            <span>${d}</span>
            <span class="role-tag-badge">${l}</span>
            ${b}
          </div>
          <span class="status-indicator ${_}">${N}</span>
        </div>
        <div class="card-metrics">
          <div class="metric-col">
            <span class="metric-lbl">Battery</span>
            <span class="metric-val" id="batt-${l}">${m}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Heap</span>
            <span class="metric-val" id="heap-${l}">${M}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Loss</span>
            <span class="metric-val" id="loss-${l}" style="color: ${h&&c&&c.loss_pct>1?"var(--danger)":"inherit"}">${g}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Last Seen</span>
            <span class="metric-val" id="seen-${l}">${p}</span>
          </div>
        </div>
        <div class="firmware-meta-row">
          <span>FW: <strong>v${R}</strong></span>
          <div class="fw-val-group">
            ${E?`<span class="badge-update-avail" title="Update available to v${x}">v${x} avail</span>`:h&&R!=="unknown"?'<span class="badge-up-to-date">Up to date</span>':""}
            ${P?`<span class="badge-proto-outdated" title="Protocol older than required">Proto v${(c==null?void 0:c.protocol_version)||1} outdated</span>`:""}
          </div>
        </div>
        ${w?`<div class="ota-job-panel ota-status-${w.status}">
                <div class="ota-status-header">
                  <span>OTA: ${w.status.toUpperCase()} ${w.status==="downloading"?`(${w.progress_pct}%)`:""}</span>
                  ${w.error_message?`<span class="ota-error-text" title="${w.error_message}">${w.error_message}</span>`:""}
                </div>
                ${w.status==="downloading"?`<div class="ota-progress-bar"><div class="ota-progress-fill" style="width: ${w.progress_pct}%"></div></div>`:""}
              </div>`:""}
        <div class="card-footer">
          <span><code>${u}</code></span>
          ${h&&c?`<div class="card-actions">
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${c.device_id}', 'identify')">Identify</button>
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${c.device_id}', 'reboot')">Reboot</button>
                  ${y?'<button class="btn btn-secondary btn-sm" disabled>Updating...</button>':`<button class="btn ${E?"btn-primary":"btn-secondary"} btn-sm" ${C?'disabled title="Battery < 30%"':""} onclick="window.dashboardApp.triggerOTA('${c.device_id}')">Update</button>`}
                </div>`:'<span style="color: var(--text-tertiary); font-size: 0.7rem; font-weight: 500;">Required for recording</span>'}
        </div>
      `,t.appendChild(f)}const n=document.getElementById("extraDevicesSection"),s=document.getElementById("extraDevicesContainer"),r=document.getElementById("unassignedCountBadge");if(s){s.innerHTML="";const l=Array.from(this.devices.values()).filter(c=>c.online&&(!c.role||c.role==="unassigned"||!this.requiredRoles.includes(c.role)));if(r&&(r.innerText=`${l.length}`),l.length>0&&n){n.style.display="block";for(const c of l){const h=document.createElement("div");h.className="card-role unassigned online";const f=(c.hw||"esp12e").toUpperCase(),d=c.battery_pct!==null?`${c.battery_pct}%`:"—",_=`${c.loss_pct.toFixed(2)}%`,m=this.formatTimeAgo(c.last_seen_ms),g=c.free_heap?`${Math.round(c.free_heap/1024)} KB`:"—",p=c.firmware_version||"unknown";h.innerHTML=`
            <div class="card-top">
              <div class="role-title">
                <span>Unassigned Tracker</span>
                <span class="role-tag-badge" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);">UNASSIGNED</span>
                <span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${f}</span>
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
                <span class="metric-val">${d}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Heap</span>
                <span class="metric-val">${g}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Loss</span>
                <span class="metric-val">${_}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Last Seen</span>
                <span class="metric-val">${m}</span>
              </div>
            </div>

            <div class="role-assign-row">
              <label for="assignRoleSelect-${c.device_id}">Assign Body Role:</label>
              <select id="assignRoleSelect-${c.device_id}" class="form-select">
                <option value="">-- Choose Role --</option>
                ${this.requiredRoles.map(u=>`<option value="${u}">${u.replace(/_/g," ").toUpperCase()}</option>`).join("")}
              </select>
              <button class="btn btn-primary btn-sm" onclick="window.dashboardApp.assignRole('${c.device_id}')">Assign</button>
            </div>

            <div class="card-footer" style="margin-top: 8px;">
              <span><code>${c.device_id}</code> (FW: v${p})</span>
              <div class="card-actions">
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${c.device_id}', 'identify')">Identify</button>
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${c.device_id}', 'reboot')">Reboot</button>
              </div>
            </div>
          `,s.appendChild(h)}}else n&&(n.style.display="none")}const a=document.getElementById("roleSummary");a.innerText=`${e} / ${this.requiredRoles.length} Online`,e===this.requiredRoles.length?(a.style.color="var(--success)",a.style.borderColor="var(--success)"):(a.style.color="var(--danger)",a.style.borderColor="var(--danger)");const o=document.getElementById("valActiveTrackers");if(o&&!this.visualizer.isPlaybackMode){const l=Array.from(this.devices.values()).filter(c=>c.online).length;o.innerText=`${l}`}}async assignRole(t){var s;const e=document.getElementById(`assignRoleSelect-${t}`);if(!e)return;const n=e.value;if(!n){alert("Please select a body role from the dropdown.");return}try{const r=await fetch(`/v1/devices/${t}/role`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ni}`},body:JSON.stringify({role:n})});if(!r.ok){const o=await r.json().catch(()=>({detail:r.statusText}));alert(`Failed to assign role: ${o.detail}`);return}this.addLog("role",`Device ${t} assigned role '${n}'`,"ROLE");const a=this.devices.get(t);a&&(a.role&&((s=this.roleToDevice.get(a.role))==null?void 0:s.device_id)===t&&this.roleToDevice.delete(a.role),a.role=n,a.online&&this.roleToDevice.set(n,a)),this.renderCards()}catch(r){alert(`Error assigning role: ${r.message}`)}}addLog(t,e,n="INFO"){if(this.logPaused)return;const s=new Date,a={time:`${s.toTimeString().split(" ")[0]}.${String(s.getMilliseconds()).padStart(3,"0")}`,badge:n,category:t,message:e};this.logEntries.push(a),this.logEntries.length>800&&this.logEntries.shift();const o=document.getElementById("logEventCountBadge");o&&(o.innerText=`${this.logEntries.length} events`);const l=document.getElementById("quickLogCount");l&&(l.innerText=`${this.logEntries.length}`);const c=document.getElementById("telemetryConsoleLog");c&&(this.activeLogFilter==="all"||this.activeLogFilter===t)&&(this.appendLogLine(c,a),this.autoScroll&&(c.scrollTop=c.scrollHeight));const h=document.getElementById("drawerConsoleLog");h&&(this.appendLogLine(h,a),this.autoScroll&&(h.scrollTop=h.scrollHeight))}appendLogLine(t,e){const n=document.createElement("div");n.className="log-line";const s=`log-badge log-badge-${e.category}`;for(n.innerHTML=`
      <span class="log-time">${e.time}</span>
      <span class="${s}">${e.badge}</span>
      <span class="log-msg">${this.escapeHtml(e.message)}</span>
    `,t.appendChild(n);t.children.length>500;)t.removeChild(t.firstChild)}reRenderConsoleLogs(){const t=document.getElementById("telemetryConsoleLog");if(!t)return;t.innerHTML="",(this.activeLogFilter==="all"?this.logEntries:this.logEntries.filter(n=>n.category===this.activeLogFilter)).forEach(n=>this.appendLogLine(t,n)),this.autoScroll&&(t.scrollTop=t.scrollHeight)}initLoggingUI(){const t=document.querySelectorAll(".btn-filter");t.forEach(h=>{h.addEventListener("click",f=>{t.forEach(_=>_.classList.remove("active"));const d=f.currentTarget;d.classList.add("active"),this.activeLogFilter=d.dataset.filter||"all",this.reRenderConsoleLogs()})});const e=document.getElementById("chkAutoScroll");e&&e.addEventListener("change",()=>{this.autoScroll=e.checked});const n=document.getElementById("btnPauseLog");n&&n.addEventListener("click",()=>{this.logPaused=!this.logPaused,n.innerText=this.logPaused?"▶ Resume":"⏸ Pause"});const s=document.getElementById("btnClearTelemetryLog");s&&s.addEventListener("click",()=>{this.logEntries=[];const h=document.getElementById("telemetryConsoleLog");h&&(h.innerHTML="");const f=document.getElementById("drawerConsoleLog");f&&(f.innerHTML="");const d=document.getElementById("logEventCountBadge");d&&(d.innerText="0 events");const _=document.getElementById("quickLogCount");_&&(_.innerText="0")});const r=document.getElementById("btnCopyTelemetryLog");r&&r.addEventListener("click",()=>{const h=this.logEntries.map(f=>`[${f.time}] [${f.badge}] ${f.message}`).join(`
`);navigator.clipboard.writeText(h).then(()=>{alert("Telemetry logs copied to clipboard!")})});const a=document.getElementById("btnToggleLogDrawer"),o=document.getElementById("bottomLogDrawer"),l=document.getElementById("btnCloseLogDrawer"),c=document.getElementById("btnDrawerClear");a&&o&&a.addEventListener("click",()=>{const h=o.style.display==="none"||!o.style.display;o.style.display=h?"flex":"none"}),l&&o&&l.addEventListener("click",()=>{o.style.display="none"}),c&&c.addEventListener("click",()=>{const h=document.getElementById("drawerConsoleLog");h&&(h.innerHTML="")})}escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}async fetchLatestFirmware(){try{const t=await fetch("/v1/firmware/latest");t.ok&&(this.latestFirmware=await t.json(),this.updateLatestFwBadge(),this.renderCards())}catch(t){console.warn("Failed to fetch latest firmware manifest",t)}}updateLatestFwBadge(){const t=document.getElementById("latestFwBadge");t&&this.latestFirmware&&(t.innerText=`Latest: v${this.latestFirmware.version}`)}async triggerOTA(t,e="latest"){try{const n=await fetch(`/v1/devices/${t}/ota?version=${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ni}`},body:JSON.stringify({version:e})});if(n.status===409){const r=await n.json().catch(()=>({}));return alert(`OTA Rejected: ${r.detail||"Device busy, offline, or battery < 30%"}`),!1}if(!n.ok){const r=await n.json().catch(()=>({detail:n.statusText}));return alert(`OTA Failed: ${r.detail}`),!1}const s=await n.json();return s.job&&(this.otaJobs.set(s.job.job_id,s.job),this.deviceToOtaJob.set(t,s.job),this.renderCards()),!0}catch(n){return alert(`Error initiating OTA: ${n.message}`),!1}}async updateAllDevices(){if(this.isUpdatingAll)return;const t=document.getElementById("btnUpdateAll"),e=[];for(const r of this.devices.values())r.online&&e.push(r);if(e.length===0){alert("No online devices available to update.");return}const n=e.filter(r=>{var a;return r.firmware_version!==((a=this.latestFirmware)==null?void 0:a.version)}),s=n.length>0?n:e;if(confirm(`Update ${s.length} device(s) one at a time to latest firmware?`)){this.isUpdatingAll=!0,t&&(t.disabled=!0);try{for(let r=0;r<s.length;r++){const a=s[r];if(t&&(t.innerText=`Updating ${r+1}/${s.length} (${a.role})...`),!await this.triggerOTA(a.device_id)){console.warn(`Could not start OTA on device ${a.device_id}, moving to next.`);continue}await new Promise(l=>{const c=setTimeout(()=>l(),6e4),h=setInterval(()=>{const f=this.deviceToOtaJob.get(a.device_id);f&&(f.status==="success"||f.status==="failed")&&(clearInterval(h),clearTimeout(c),l())},500)})}}finally{this.isUpdatingAll=!1,t&&(t.disabled=!1,t.innerText="⬆️ Update all (one at a time)")}}}formatTimeAgo(t){const e=Math.max(0,Math.floor((Date.now()-t)/1e3));return e<2?"Just now":e<60?`${e}s ago`:`${Math.floor(e/60)}m ago`}async sendCommand(t,e){try{const n=await fetch(`/v1/devices/${t}/command`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ni}`},body:JSON.stringify({type:e})});n.ok||alert(`Failed to send command: ${n.statusText}`)}catch(n){alert(`Error sending command: ${n.message}`)}}showMissingRolesModal(t){const e=document.getElementById("missingRolesModal"),n=document.getElementById("missingRolesList");if(!(!e||!n)){n.innerHTML="";for(const s of t){const r=document.createElement("li");r.innerText=`${s.replace(/_/g," ")} (${s})`,n.appendChild(r)}e.style.display="flex"}}async startSession(){const t=this.requiredRoles.filter(a=>{var o;return!((o=this.roleToDevice.get(a))!=null&&o.online)});if(t.length>0){this.showMissingRolesModal(t);return}const n=document.getElementById("sessionNameInput").value.trim()||`Session ${new Date().toLocaleTimeString()}`,s=this.visualizer.getCalibrationOffsets(),r={name:n};s&&(r.calibration_offsets=s);try{const a=await fetch("/v1/sessions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ni}`},body:JSON.stringify(r)});if(!a.ok){const l=await a.json().catch(()=>({})),c=l.detail&&typeof l.detail=="string"&&l.detail.includes("Missing required roles")?l.detail.replace("Missing required roles:","").split(",").map(h=>h.trim()):t;this.showMissingRolesModal(c.length>0?c:["required roles offline"]);return}const o=await a.json();this.activeSession=o,this.updateSessionUI(),this.fetchSessions()}catch(a){alert(`Network error starting session: ${a.message}`)}}async endSession(){if(this.activeSession)try{const t=await fetch(`/v1/sessions/${this.activeSession.session_id}/end`,{method:"POST",headers:{Authorization:`Bearer ${ni}`}});if(!t.ok){alert("Failed to end session");return}const e=await t.json();this.activeSession=null,this.updateSessionUI(),this.fetchSessions(),alert(`Session completed!
Total samples: ${e.total_samples}
Parquet dataset saved.`)}catch(t){alert(`Error ending session: ${t.message}`)}}updateSessionUI(){const t=document.getElementById("sessionStatus"),e=document.getElementById("btnStartSession"),n=document.getElementById("btnEndSession"),s=document.getElementById("sessionNameInput"),r=document.getElementById("recTimer"),a=document.getElementById("recordingBanner"),o=document.getElementById("recBannerName");this.activeSession?(t.innerHTML=`<span style="color: var(--danger); font-weight: 800;">● RECORDING</span>: ${this.activeSession.name}`,e.style.display="none",s.style.display="none",n.style.display="inline-flex",r.style.display="inline-block",a.style.display="flex",o.innerText=this.activeSession.name,this.recordingTimerInterval||(this.recordingStartMs=Date.now(),this.recordingTimerInterval=setInterval(()=>{const l=Math.floor((Date.now()-this.recordingStartMs)/1e3),c=String(Math.floor(l/3600)).padStart(2,"0"),h=String(Math.floor(l%3600/60)).padStart(2,"0"),f=String(l%60).padStart(2,"0"),d=`${c}:${h}:${f}`;r.innerText=d;const _=document.getElementById("recBannerTimer");_&&(_.innerText=d)},1e3))):(t.innerText="No Active Session",e.style.display="inline-flex",s.style.display="inline-block",n.style.display="none",r.style.display="none",a.style.display="none",this.recordingTimerInterval&&(clearInterval(this.recordingTimerInterval),this.recordingTimerInterval=null))}updateRecordingLossBanner(){if(!this.activeSession)return;const t=document.getElementById("recBannerLoss");if(!t)return;const e=[];this.roleToDevice.forEach((n,s)=>{n.online&&e.push(`${s}: ${n.loss_pct.toFixed(2)}%`)}),t.innerText=e.length>0?`Per-device loss: ${e.join(" | ")}`:"Per-device loss: waiting for stream..."}async fetchSessions(){try{const t=await fetch("/v1/sessions");if(!t.ok)return;this.sessionsList=await t.json(),this.renderSessionsList()}catch(t){console.warn("Failed to fetch sessions:",t)}}renderSessionsList(){const t=document.getElementById("sessionCountBadge");t&&(t.innerText=`${this.sessionsList.length}`);const e=document.getElementById("sessionsListContainer");if(e){if(this.sessionsList.length===0){e.innerHTML='<div class="empty-sessions">No recorded sessions found. Press <strong>REC</strong> to capture your first session.</div>';return}e.innerHTML="";for(const n of this.sessionsList){const s=document.createElement("div");s.className="card-session";const a=n.status==="completed"?"session-status-completed":"session-status-active",o=n.started_at?new Date(n.started_at).toLocaleString():"—",l=n.ended_at&&n.started_at?`${((n.ended_at-n.started_at)/1e3).toFixed(1)}s`:"Active",c=n.total_samples||0;s.innerHTML=`
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
      `,e.appendChild(s)}}}openExportModal(t){this.exportSessionId=t;const e=this.sessionsList.find(c=>c.session_id===t),n=document.getElementById("exportMocapModal");if(!n)return;const s=document.getElementById("exportModalSessionName"),r=document.getElementById("exportModalSessionId"),a=document.getElementById("exportCalibStatus"),o=document.getElementById("exportUncalibWarning");s&&(s.innerText=e?e.name:"Session"),r&&(r.innerText=t);const l=!!(e&&e.metadata&&e.metadata.calibration_offsets&&Object.keys(e.metadata.calibration_offsets).length>0);a&&(l?(a.innerHTML='<span class="badge-calib badge-calib-done">✓ Pose Calibrated</span> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.4rem;">Offsets stored at recording start</span>',o&&(o.style.display="none")):(a.innerHTML='<span class="badge-calib badge-calib-pending">⚠️ No Calibration</span> <span style="font-size: 0.75rem; color: #f87171; margin-left: 0.4rem;">Recorded without N-pose calibration</span>',o&&(o.style.display="block"))),n.style.display="flex"}closeExportModal(){const t=document.getElementById("exportMocapModal");t&&(t.style.display="none"),this.exportSessionId=null}triggerExportDownload(){if(!this.exportSessionId)return;const t=document.querySelector('input[name="exportFormat"]:checked'),e=t?t.value:"bvh",n=document.getElementById("exportRateInput"),s=n&&parseFloat(n.value)||30,r=`/v1/sessions/${this.exportSessionId}/export?format=${e}&rate=${s}&allow_uncalibrated=true`,a=document.createElement("a");a.href=r,a.download="",document.body.appendChild(a),a.click(),document.body.removeChild(a),this.closeExportModal()}async loadSessionPlayback(t){try{const e=await fetch(`/v1/sessions/${t}/data`);if(!e.ok){alert("Failed to load session playback data");return}const n=await e.json();if(!n.samples||n.samples.length===0){alert("This session contains no recorded motion samples.");return}this.playback.loadSession(n);const s=document.getElementById("playbackOverlay"),r=document.getElementById("playbackSessionName"),a=document.getElementById("viewportHeaderTitle"),o=document.getElementById("viewportHeaderSub");s&&(s.style.display="flex"),r&&(r.innerText=`${n.name} (${n.samples.length} samples)`),a&&(a.innerText=`3D Playback: ${n.name}`),o&&(o.innerText=`Parquet Scrubbing (${n.roles.join(", ")})`);const l=document.getElementById("valActiveTrackers");l&&(l.innerText=`${n.roles.length} (Recorded)`);const c=document.getElementById("valLatency");c&&(c.innerText="Playback Mode",c.className="val"),this.playback.play()}catch(e){alert(`Error loading session playback: ${e.message}`)}}exitPlayback(){this.playback.exitPlayback();const t=document.getElementById("playbackOverlay"),e=document.getElementById("viewportHeaderTitle"),n=document.getElementById("viewportHeaderSub");t&&(t.style.display="none"),e&&(e.innerText="3D Biomechanical Avatar"),n&&(n.innerText="Live Quaternion Forward Kinematics (Three.js)");const s=document.getElementById("valActiveTrackers");s&&(s.innerText=`${this.roleToDevice.size}`)}formatPlaybackTime(t){const e=t/1e3,n=Math.floor(e/60),s=e%60,r=String(n).padStart(2,"0"),a=s.toFixed(1).padStart(4,"0");return`${r}:${a}`}initFlashUI(){const t=document.getElementById("flashRoleSelect"),e=document.getElementById("flashServerHost"),n=document.getElementById("flashServerPort"),s=document.getElementById("btnStartFlash"),r=document.getElementById("btnClearFlashLog"),a=document.getElementById("btnViewOnlineAvatar");e&&window.location.hostname&&window.location.hostname!=="localhost"&&(e.value=window.location.hostname),n&&window.location.port&&(n.value=window.location.port);const o=["chest","left_shoulder","right_shoulder","left_upper_arm","right_upper_arm","left_elbow","right_elbow","left_forearm","right_forearm","left_hand","right_hand","left_thigh","right_thigh","left_shin","right_shin","left_foot","right_foot"];if(t){t.innerHTML="";for(const d of o){const _=document.createElement("option");_.value=d,_.text=`${d.replace(/_/g," ")} (${d})`,t.appendChild(_)}}r&&r.addEventListener("click",()=>{const d=document.getElementById("flashConsoleLog");d&&(d.textContent="")}),a&&a.addEventListener("click",()=>{const d=document.getElementById("tabTrackers");d&&d.click()});const l=document.getElementById("btnQuickProvision"),c=(d,_)=>{const m=document.getElementById("flashConsoleLog"),g=document.getElementById("switchOnTrackerCard"),p=document.getElementById("flashSuccessCard"),u=document.getElementById("flashProgressBarFill"),R=document.getElementById("flashProgressText");return new Px({onStepChange:(x,E)=>{for(let P=1;P<=6;P++){const w=document.getElementById(`stepItem${P}`);w&&(P<x?w.className="step-row done":P===x?w.className="step-row active":w.className="step-row pending")}R.innerText=E,u.style.width=`${Math.round((x-1)/6*100)}%`},onProgress:(x,E)=>{R.innerText=x,u.style.width=`${E}%`},onLog:x=>{m.textContent+=x,m.scrollTop=m.scrollHeight},onSwitchOnPrompt:x=>{g.style.display="flex";const E=g.querySelector("p");E&&(E.innerHTML=`Device <strong>${x}</strong> configured! Ensure power is ON. Waiting for it to connect to WiFi and announce...`)},onSuccess:(x,E)=>{for(let w=1;w<=6;w++){const y=document.getElementById(`stepItem${w}`);y&&(y.className="step-row done")}u.style.width="100%",R.innerText="Provisioning & Connection Complete!",g.style.display="none",p.style.display="flex";const P=document.getElementById("flashSuccessMessage");P&&(P.innerHTML=`Device <strong>${x}</strong> announced as <strong>${E}</strong> and is online!`),d.disabled=!1,_&&(_.disabled=!1)},onError:x=>{d.disabled=!1,_&&(_.disabled=!1),R.innerText=`Error: ${x.message}`,alert(`Flashing / Provisioning Error: ${x.message}`)}})},h=()=>{const d=t?t.value:"chest",_=document.getElementById("flashSsid"),m=document.getElementById("flashPassword"),g=document.getElementById("flashToken"),p=_?_.value.trim():"",u=m?m.value:"",R=e&&e.value.trim()||"pair.local",x=n?parseInt(n.value||"8000",10):8e3,E=g?g.value.trim():"";return{role:d,ssid:p,pass:u,host:R,port:x,token:E}},f=d=>{const _=document.getElementById("flashStatusSection"),m=document.getElementById("switchOnTrackerCard"),g=document.getElementById("flashSuccessCard"),p=document.getElementById("flashProgressBarFill"),u=document.getElementById("flashProgressText");_.style.display="flex",m.style.display="none",g.style.display="none",p.style.width="0%",u.innerText=d;for(let R=1;R<=6;R++){const x=document.getElementById(`stepItem${R}`);x&&(x.className="step-row pending")}};s&&s.addEventListener("click",async()=>{const d=h();if(!d.ssid){alert("Please enter your WiFi SSID.");return}f("Connecting..."),s.disabled=!0,l&&(l.disabled=!0),this.flasher=c(s,l);try{await this.flasher.start({role:d.role,ssid:d.ssid,password:d.pass,serverHost:d.host,serverPort:d.port,token:d.token||void 0,adminToken:ni})}catch{s.disabled=!1,l&&(l.disabled=!1)}}),l&&l.addEventListener("click",async()=>{const d=h();if(!d.ssid){alert("Please enter your WiFi SSID.");return}f("Connecting for Quick Provisioning..."),l.disabled=!0,s&&(s.disabled=!0),this.flasher=c(l,s);try{await this.flasher.quickProvision({role:d.role,ssid:d.ssid,password:d.pass,serverHost:d.host,serverPort:d.port,token:d.token||void 0,adminToken:ni})}catch{l.disabled=!1,s&&(s.disabled=!1)}})}startPeriodicUpdates(){setInterval(()=>{const t=Date.now(),e=(t-this.lastRateCheck)/1e3;e>=1&&(this.streamRateHz=Math.round(this.sampleCount/e),this.sampleCount=0,this.lastRateCheck=t,document.getElementById("valRate").innerText=`${this.streamRateHz} Hz`);let n=0,s=0;this.roleToDevice.forEach(a=>{n+=a.loss_pct,s++});const r=s>0?(n/s).toFixed(2)+"%":"0.00%";document.getElementById("valAvgLoss").innerText=r,this.requiredRoles.forEach(a=>{const o=this.roleToDevice.get(a),l=document.getElementById(`seen-${a}`);l&&o&&o.online&&(l.innerText=this.formatTimeAgo(o.last_seen_ms))})},1e3)}}window.dashboardApp=new Ux;
