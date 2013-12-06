/** OvoiD.JS - Built-in fragment shader - VL_AERDS_FULLTEX
 * 
 * Main fragment shader for per-vertex lighting full textured channels amibient,
 * emissive, reflexion, diffuse, specular with multiple lights.
 */
precision highp float;

uniform vec4 Ac;
uniform sampler2D Sd;
uniform sampler2D Ss;
uniform sampler2D Se;
uniform sampler2D Sr;
uniform sampler2D Sn;
uniform bool ENa; /* enable ambient/env shading */
uniform bool ENd; /* enable ambient/env shading */
uniform vec4 Ep;
uniform vec4 Md;
uniform vec4 Ma;
uniform vec4 Ms;
uniform vec4 Me;
uniform vec4 Mr;
uniform float Mo;

uniform vec4 Fc; /* Fog color */
uniform float Fd; /* Fog density */

varying vec4 Vp;
varying vec3 Vn;
varying vec2 Vu;
varying vec4 Cd;

float Fz, Ff, An;
vec3 EV;

void main(void)
{	  
  if(ENd && ENa) {
    gl_FragColor=vec4(0.0,0.0,0.0,0.0);
    EV=normalize(Vp-Ep).xyz;
    An=clamp(((dot(EV,Vn)*2.0)-1.2)+texture2D(Sd,(Vu*4.0)+Mo).r*0.5,0.0,1.0);
    if(An < 0.01) discard;
    
    gl_FragColor=vec4(0.3,0.3,0.3,1.0);
    gl_FragColor+=Ac;
    gl_FragColor+=Cd;
    
    if(Fd>0.0) {
      Fz=gl_FragCoord.z/gl_FragCoord.w;
      Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);
      gl_FragColor=mix(Fc,gl_FragColor,Ff);
    }
    
    gl_FragColor.a=An;
  } else {
    discard;
  }
}
