#define ML 8

attribute vec4 p;
attribute vec3 n;
attribute vec3 u;
uniform mat4 MEV;
uniform mat4 MXF;
uniform mat3 MNR;
uniform vec4 Lp[ML]; 
uniform vec3 Ld[ML];
uniform vec4 Lc[ML];
uniform float Li[ML];
uniform float Lr[ML];
uniform float Lf[ML];
uniform float La[ML];
uniform bool Le[ML];

varying vec4 Vp;
varying vec3 Vn;
varying vec2 Vu;
varying vec4 Cd;

void main(void){

  Vp=MXF*p;
  Vn=MNR*n;
  Vu=u.xy;
  gl_Position=MEV*Vp;
  Cd=Lc[0]*max(dot(Vn,Ld[0]),0.0)*Li[0];
}
