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
uniform vec4 Lp; 
uniform vec3 Ld;
uniform vec4 Lc;
uniform float Li;
uniform float Lr;
uniform float Lf;
uniform float La;
uniform bool Le;

uniform vec4 Fc; /* Fog color */
uniform float Fd; /* Fog density */

varying vec2 Vu;
varying vec4 Cd;
varying vec3 Vn;
varying vec4 Vp;

float Fz, Ff, Az;

void main(void)
{	  
  if(ENd && ENa) {
    gl_FragColor=vec4(0.0,0.0,0.0,0.0);
    Fz=gl_FragCoord.z/gl_FragCoord.w;
    Az=Fz*0.001;
    gl_FragColor=Ac*texture2D(Sd,Vu);
    gl_FragColor+=Lc[0]*texture2D(Sd,Vu);
    gl_FragColor.a-=Az;
    
    if(gl_FragColor.a < 0.01)
      discard;
      
    if(Fd>0.0) {
      Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);
      gl_FragColor=mix(Fc,gl_FragColor,Ff);
    }
  } else {
    discard;
  }
}
