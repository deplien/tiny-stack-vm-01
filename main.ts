import{mkdirSync as M,readdirSync as D,readFileSync as R,writeFileSync as W}from"fs";
let E=process.env,I=E.MAKEFUN_INPUT_DIR||"/input",O=E.MAKEFUN_OUTPUT_DIR||"/output",T=c=>{throw c};
for(let d of D(I)){
let w=I+"/"+d,q=O+"/"+d,P=R(w+"/program.bin"),N=R(w+"/input.bin"),n=P.length,S=new Int32Array(256),C=new Int32Array(64),Z=new Int32Array(S),U=new Uint8Array(65536),s=0,c=0,u=0,i=0,p=0,t=0,e;
try{for(;;){
t==1e6&&T(10);
(p<0|p>=n)&&T(9);
let o=P[p],m=o==1?1:o==2?4:o>47&o<52?2:0,a,b;
p+m>=n&&T(9);
t++;p+=m+1;a=P[p-2]|P[p-1]<<8;
(86/2**o&1|o==82)&&s>255&&T(3);
switch(o){
case 0:T(0);
case 1:S[s++]=P.readInt8(p-1);break;
case 2:S[s++]=P.readInt32LE(p-4);break;
case 3:s<1&&T(2);s--;break;
case 4:s<1&&T(2);S[s]=S[s-1];s++;break;
case 5:s<2&&T(2);[S[s-1],S[s-2]]=[S[s-2],S[s-1]];break;
case 6:s<2&&T(2);S[s]=S[s-2];s++;break;
case 7:s<3&&T(2);a=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=a;break;
case 23:s<1&&T(2);S[s-1]=-S[s-1]|0;break;
case 27:s<1&&T(2);S[s-1]=~S[s-1];break;
case 48:case 49:case 50:if(o>48){s<1&&T(2);if((S[--s]==0)!=(o==49))break}p+=a<<16>>16;break;
case 51:c>63&&T(7);C[c++]=p;p=a;break;
case 52:c<1&&T(8);p=C[--c];break;
case 64:s<1&&T(2);a=S[s-1];a>>>0>255&&T(6);S[s-1]=Z[a];break;
case 65:s<2&&T(2);a=S[s-1];a>>>0>255&&T(6);Z[a]=S[s-2];s-=2;break;
case 80:s<1&&T(2);a=""+S[--s];u+a.length>65536&&T(11);for(b of a)U[u++]=b.charCodeAt(0);break;
case 81:s<1&&T(2);u>65535&&T(11);U[u++]=S[--s]&255;break;
case 82:S[s++]=i<N.length?N[i++]:-1;break;
case 83:s<1&&T(2);T(S[--s]&255);
default:if(o>15&o<31|o>31&o<35){s<2&&T(2);b=S[--s];a=S[s-1];o>18&o<23&&!b&&T(4);S[s-1]=o==16?a+b|0:o==17?a-b|0:o==18?Math.imul(a,b):o==19?a/b|0:o==20?a%b|0:o==21?(a>>>0)/(b>>>0)|0:o==22?(a>>>0)%(b>>>0)|0:o==24?a&b:o==25?a|b:o==26?a^b:o==28?a<<(b&31):o==29?a>>(b&31):o==30?a>>>(b&31)|0:o==32?(a==b?1:0):o==33?(a<b?1:0):(a>>>0)<(b>>>0)?1:0}else T(5)
}
}}catch(k){e=k}
M(q,{recursive:!0});W(q+"/stdout.bin",U.slice(0,u));W(q+"/exit.txt",e+"\n")}
