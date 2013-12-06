/** OvoiD.JS - Built-in fragment shader - VL_AERDS_FULLTEX
 * 
 * Main fragment shader for per-vertex lighting full textured channels amibient,
 * emissive, reflexion, diffuse, specular with multiple lights.
 */
precision highp float;

#define ML 8

uniform vec4 Ac;
uniform sampler2D Sd;
uniform sampler2D Ss;
uniform sampler2D Se;
uniform sampler2D Sr;
uniform sampler2D Sn;
uniform vec4 Ep;
uniform bool ENa; /* enable ambient/env shading */
uniform bool ENd; /* enable ambient/env shading */
uniform vec4 Md;
uniform vec4 Ma;
uniform vec4 Ms;
uniform vec4 Me;
uniform vec4 Mr;
uniform float Mo;
uniform vec4 Lp[ML]; 
uniform vec3 Ld[ML];
uniform vec4 Lc[ML];
uniform float Li[ML];
uniform float Lr[ML];
uniform float Lf[ML];
uniform float La[ML];
uniform bool Le[ML];

uniform vec4 Fc; /* Fog color */
uniform float Fd; /* Fog density */

varying vec2 Vu;
varying vec4 Cd;
varying vec3 Vn;
varying vec4 Vp;

vec4 f0, f1, f2;
vec4 Dw1, Dw2, Dw3;
vec3 Nm1, Nm2, Nm3;
vec4 t0, t1, t2, t3;
vec4 h0, h1, h2, h3;

float Fz, Ff, nr;

void main(void)
{	      
  if(Me.r!=0.0) {
    gl_FragColor=texture2D(Sd,Vu);
  } else {
    Nm1 = Vn + (normalize(texture2D(Sn, Vu*3.0)).rgb * -2.0);
    Nm2 = Vn + (normalize(texture2D(Sn, Vu*6.0)).rgb * -2.0);
    Nm3 = Vn + (normalize(texture2D(Sn, Vu*64.0)).rgb * -2.0);
    
    Dw1=(Lc[0]*Li[0]* max(dot(Nm1,Ld[0]),0.0) );
    Dw2=(Lc[0]*Li[0]* max(dot(Nm2,Ld[0]),0.0) );
    Dw3=(Lc[0]*Li[0]* max(dot(Nm3,Ld[0]),0.0) );
    
    t0=texture2D(Sd,Vu*2.0);
    t1=texture2D(Ss,Vu*2.0);
    t2=texture2D(Se,Vu*2.0);
    t3=texture2D(Sr,Vu*2.0);
    
    h0=(Ac*t0)+(t0*Dw3);
    h1=(Ac*t1)+(t1*Dw1);
    h2=(Ac*t2)+(t2*Dw2);
    h3=(Ac*t3)+(t3*Dw2);
    
    nr=clamp((1.0-dot(Vn,vec3(0.0,1.0,0.0)))*12.0,0.0,1.0);
    f0=mix(h0,h1,clamp(((Vp.y+400.0)/900.0),0.0,1.0));
    f1=mix(f0,h2,clamp((Vp.y/1200.0)*nr,0.0,1.0));
    f2=mix(f1,h3,clamp(((Vp.y-3000.0)/700.0),0.0,1.0));
    gl_FragColor=f2;
  }
  
  if(Fd>0.0) {
    Fz=gl_FragCoord.z/gl_FragCoord.w;
    Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);
    gl_FragColor=mix(Fc,gl_FragColor,Ff);
  }
}
