/** OvoiD.JS - Built-in vertex shader - VL_PNUIW_HYBRID_1P
 * 
 * Main vertex shader for per-vertex lighting with Mesh or Skin deform mode 
 * choosed through boolean uniform value.
 */
attribute vec4 p;
attribute vec3 n;
attribute vec3 u;
attribute vec4 i;
attribute vec4 w;
uniform mat4 MEV;
uniform mat4 MXF;
uniform mat3 MNR;

varying vec4 Vp;
varying vec3 Vn;
varying vec2 Vu;
varying vec4 Cd;

void main(void){

  Vp=MXF*p;
  Vn=MNR*n;
  Vu=u.xy;
  gl_Position=MEV*Vp;
}
