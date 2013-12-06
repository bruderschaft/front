var Ovoid = {
    _log: "",
    _lerror: 0,
    _lfatal: !1,
    _lwarning: 0,
    _glerror: 0,
    opt_logLevel: 2
};
Ovoid.error = function (b, c) {
    Ovoid.gl = null;
    Ovoid.al = null;
    var e;
    e = document.getElementsByTagName("canvas");
    if (e.length) e = e[0], e.style.width = "1px", e.style.height = "1px", e.width = 1, e.height = 1;
    e = "<p>Sorry, the page you requested uses the <i>OvoiD.JS's WebGL Wrapper</i> and the library's script has stopped ";
    var g;
    g = '</p><p>This error is related to your web browser and/or your operating system. This may be caused by:<div style="text-align:left;"><ul><b><li>An outdated or incompatible browser</li><li>The browser Hardware Acceleration and/or WebGL support disabled</li> <li>Not properly installed graphic drivers</li></b></ul></div><p>If you already uses a compatible browser try to update it or enable the Hardware Acceleration and WebGL support in the browser parameters (<a href="http://www.ovoid.org/js/doc/index.php#faq">How to enable WebGL</a>). Else, it is recommanded to use the latest version of one of the followings:</p><table cellpadding=10px style="border:0;margin:auto;text-align:center;"><tr><td><a href="http://www.google.com/chrome/">Chrome<a></td><td><a href="http://www.mozilla.org/firefox/">Firefox<a></div></td></tr><tr><td><a href="http://www.opera.com/browser/">Opera</a></td><td><a href="http://www.apple.com/safari/">Safari<a></td></tr></table>';
    var f =
        "";
    switch (b) {
    case 1:
        f += "Error 01 - Non-compatible Web Browser";
        e = e + "because your browser seems to be outdated or rudimentary and does not provide some essentials fonctionnalities." + g;
        break;
    case 2:
        f += "Error 02 - WebGL Context Exception";
        e = e + 'because an exception occured during the <b><a href="http://www.khronos.org/webgl/">WebGL<a></b> context creation.' + g;
        break;
    case 3:
        f += "Error 03 - WebGL Context Not Found";
        e = e + 'because no suitable <b><a href="http://www.khronos.org/webgl/">WebGL<a></b> implementation was found.' +
            g;
        break;
    case 4:
        f += "Error 04 - Initialization Failled";
        e += "because it failed to initialize its own base components. This error may be caused by one or more global classes which encountered errors.";
        break;
    case 5:
        f += "Error 05 - Preloading Error";
        e += "because an error occurend during the data preloading process. This error may be caused by corruped loaded data or importation classes's exceptions.";
        break;
    case 6:
        f += "Error 06 - Errors Flood";
        e += "because of too many errors was reported. This error is raised when too many errors was encountered, this generaly means that something goes really wrong.";
        break;
    case 7:
        f += "Error 07 - On Loop Runtime Error";
        e += "because an exception occured during the main runtime onloop process. This error may be caused by an exception thrown within the main client program loop method (Ovoid.onloop()).";
        break;
    case 8:
        f += "Error 08 - On Load Runtime Error";
        e += "because an exception occured during the main runtime onload process. This error may be caused by an exception thrown within the main client program load method (Ovoid.onload()).";
        break;
    default:
        f += b + " - Unknown or custom Error",
        e += "Unknown or custom exception thrown."
    }
    e = '<div style="text-align:center;width:600px;font-family:sans-serif;font-size:8pt;margin:auto;background-color:#fff;color:#444;padding:20px;"><h5>OVOID.JS ERROR</h5><span style="color:#444;">' + ("<h5>" + f + " :: " + c + "</h5>") + e + '</p><small>For more informations, bug repport or documentation about OvoiD.JS, please visit: <a style="color:#fa0;" href="http://www.ovoid.org/js/doc/">http://www.ovoid.org/js/</a></small><p><div style="text-align:left;padding:10px;background-color:#fff;color:#000;font-family:courier,monospace;font-size:7pt;margin:0px;">- last log/backtrace -<br>';
    g = Ovoid._log;
    g = g.replace(/    /g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    g = g.replace(/</g, "&lt;");
    g = g.replace(/>/g, "&gt;");
    g = g.replace(/\n/g, "<br>");
    document.write(e + ('<span style="color:#00a">' + g) + "</div></div>")
};
"undefined" == typeof console && Ovoid.error(1, "console object unavailable (update your browser !)");
Ovoid.log = function (b, c, e) {
    if (e && b <= Ovoid.opt_logLevel) {
        var g, f = new Date,
            f = "[" + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + "] ";
        switch (b) {
        case 0:
            g = f + "FATAL: " + c + ":: " + e + "\n";
            Ovoid._lerror++;
            Ovoid._lfatal = !0;
            break;
        case 1:
            g = f + "ERROR: " + c + ":: " + e + "\n";
            this._lerror++;
            break;
        case 2:
            g = f + "WARNING: " + c + ":: " + e + "\n";
            Ovoid._lwarning++;
            break;
        case 3:
            g = f + "NOTICE: " + c + ":: " + e + "\n"
        }
        Ovoid._log = g + Ovoid._log;
        console.log(g);
        10 < Ovoid._lerror && Ovoid.error(6, "No more, 10 errors, it's enought !")
    }
};
if ("undefined" == typeof Float32Array || "undefined" == typeof Uint16Array) Ovoid.log(0, "Ovoid", "Undefined Float32Array/Uint16Array objects."), Ovoid.error(1, "ArrayBuffer objects unavailable");
Ovoid.MAX_JOINT_BY_SKIN = 24;
Ovoid.MAX_VERTEX_ATTRIB = 8;
Ovoid.MAX_UNIFORM = 64;
Ovoid.MAX_UNIFORM_MATRIX = 64;
Ovoid.MAX_UNIFORM_SAMPLER = 16;
Ovoid.MAX_LIGHT_BY_DRAW = 8;
Ovoid.MAX_BODY_BY_DRAW = 512;
Ovoid.MAX_LAYER_BY_DRAW = 512;
Ovoid.MAX_CONTACT_BY_CYCLE = 128;
Ovoid.MAX_MESH_LOD = 4;
Ovoid.MAX_EMITTER_PARTICLES = 1024;
Ovoid.PICKING_OFFSCREEN_FRAME_X = 1920;
Ovoid.PICKING_OFFSCREEN_FRAME_Y = 1080;
Ovoid.MAX_RENDER_LAYER = 8;
Ovoid.PHYSICS_MOTION_EPSILON = 1;
Ovoid.MAX_BODY_INTERSECT = 64;
Ovoid.BIT0 = 0;
Ovoid.BIT1 = 1;
Ovoid.BIT2 = 2;
Ovoid.BIT3 = 4;
Ovoid.BIT4 = 8;
Ovoid.BIT5 = 16;
Ovoid.BIT6 = 32;
Ovoid.BIT7 = 64;
Ovoid.BIT8 = 128;
Ovoid.BIT9 = 256;
Ovoid.BIT10 = 512;
Ovoid.BIT11 = 1024;
Ovoid.BIT12 = 2048;
Ovoid.BIT13 = 4096;
Ovoid.BIT14 = 8192;
Ovoid.BIT15 = 16384;
Ovoid.BIT16 = 32768;
Ovoid.BIT17 = 65536;
Ovoid.BIT18 = 131072;
Ovoid.BIT19 = 262144;
Ovoid.BIT20 = 524288;
Ovoid.BIT21 = 1048576;
Ovoid.BIT22 = 2097152;
Ovoid.BIT23 = 4194304;
Ovoid.BIT24 = 8388608;
Ovoid.BIT25 = 16777216;
Ovoid.BIT26 = 33554432;
Ovoid.BIT27 = 67108864;
Ovoid.BIT28 = 134217728;
Ovoid.BIT29 = 268435456;
Ovoid.BIT30 = 536870912;
Ovoid.BIT31 = 1073741824;
Ovoid.BIT32 = 2147483648;
Ovoid._PI = 3.141592653589793;
Ovoid._alfPI = 1.5707963267948966;
Ovoid._2PI = 6.283185307179586;
Ovoid.FLOAT_MAX = 3.402823466E38;
Ovoid.FLOAT_MIN = -107374180;
Ovoid.INT_MIN = -2147483647;
Ovoid.INT_MAX = 2147483647;
Ovoid.UINT_MAX = 4294967295;
Ovoid.FLOAT_EPSILON = 1.1920929E-7;
Ovoid.NODE = Ovoid.BIT1;
Ovoid.TEXTURE = Ovoid.BIT2;
Ovoid.MATERIAL = Ovoid.BIT3;
Ovoid.TRANSFORM = Ovoid.BIT4;
Ovoid.BODY = Ovoid.BIT5;
Ovoid.JOINT = Ovoid.BIT6;
Ovoid.CAMERA = Ovoid.BIT7;
Ovoid.LIGHT = Ovoid.BIT8;
Ovoid.MESH = Ovoid.BIT9;
Ovoid.SKIN = Ovoid.BIT10;
Ovoid.ANIMATION = Ovoid.BIT11;
Ovoid.AIM = Ovoid.BIT12;
Ovoid.ACTION = Ovoid.BIT13;
Ovoid.CONSTRAINT = Ovoid.BIT14;
Ovoid.PHYSICS = Ovoid.BIT15;
Ovoid.EMITTER = Ovoid.BIT16;
Ovoid.TRACK = Ovoid.BIT17;
Ovoid.EXPRESSION = Ovoid.BIT18;
Ovoid.TEXT = Ovoid.BIT20;
Ovoid.LAYER = Ovoid.BIT21;
Ovoid.AUDIO = Ovoid.BIT30;
Ovoid.SOUND = Ovoid.BIT31;
Ovoid.CACH_ALL = Ovoid.BIT0;
Ovoid.CACH_MATRIX = Ovoid.BIT1;
Ovoid.CACH_TRANSFORM = Ovoid.BIT2;
Ovoid.CACH_WORLD = Ovoid.BIT3;
Ovoid.CACH_VIEWPROJ = Ovoid.BIT4;
Ovoid.CACH_GEOMETRY = Ovoid.BIT5;
Ovoid.CACH_LIGHT = Ovoid.BIT6;
Ovoid.CACH_BOUNDING_SHAPE = Ovoid.BIT7;
Ovoid.CACH_SKIN = Ovoid.BIT8;
Ovoid.CACH_LAYER = Ovoid.BIT9;
Ovoid.CACH_ACTION = Ovoid.BIT10;
Ovoid.CACH_INFLUENCES = Ovoid.BIT11;
Ovoid.CACH_PHYSICS = Ovoid.BIT12;
Ovoid.CACH_SOUND = Ovoid.BIT13;
Ovoid.CACH_EXPRESSION = Ovoid.BIT14;
Ovoid.WORLD = 0;
Ovoid.LOCAL = 1;
Ovoid.ABSOLUTE = 1;
Ovoid.RELATIVE = 0;
Ovoid.LIGHT_AMBIENT = 0;
Ovoid.LIGHT_DIRECTIONAL = 1;
Ovoid.LIGHT_POINT = 2;
Ovoid.LIGHT_SPOT = 3;
Ovoid.AMBIENT = 0;
Ovoid.DIFFUSE = 1;
Ovoid.SPECULAR = 2;
Ovoid.EMISSIVE = 3;
Ovoid.REFLECT = 4;
Ovoid.NORMAL = 5;
Ovoid.INTERPOLATION_CSPLINE = 0;
Ovoid.INTERPOLATION_HSPLINE = 1;
Ovoid.INTERPOLATION_BSPLINE = 2;
Ovoid.ANIMATION_CHANNEL_TRANSLATE = Ovoid.BIT21;
Ovoid.ANIMATION_CHANNEL_TRANSLATE_X = Ovoid.BIT1 | Ovoid.BIT21;
Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y = Ovoid.BIT2 | Ovoid.BIT21;
Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z = Ovoid.BIT3 | Ovoid.BIT21;
Ovoid.ANIMATION_CHANNEL_ROTATE = Ovoid.BIT22;
Ovoid.ANIMATION_CHANNEL_ROTATE_X = Ovoid.BIT4 | Ovoid.BIT22;
Ovoid.ANIMATION_CHANNEL_ROTATE_Y = Ovoid.BIT5 | Ovoid.BIT22;
Ovoid.ANIMATION_CHANNEL_ROTATE_Z = Ovoid.BIT6 | Ovoid.BIT22;
Ovoid.ANIMATION_CHANNEL_ORIENTE = Ovoid.BIT23;
Ovoid.ANIMATION_CHANNEL_ORIENTE_X = Ovoid.BIT7 | Ovoid.BIT23;
Ovoid.ANIMATION_CHANNEL_ORIENTE_Y = Ovoid.BIT8 | Ovoid.BIT23;
Ovoid.ANIMATION_CHANNEL_ORIENTE_Z = Ovoid.BIT9 | Ovoid.BIT23;
Ovoid.ANIMATION_CHANNEL_SCALE = Ovoid.BIT24;
Ovoid.ANIMATION_CHANNEL_SCALE_X = Ovoid.BIT10 | Ovoid.BIT24;
Ovoid.ANIMATION_CHANNEL_SCALE_Y = Ovoid.BIT11 | Ovoid.BIT24;
Ovoid.ANIMATION_CHANNEL_SCALE_Z = Ovoid.BIT12 | Ovoid.BIT24;
Ovoid.ANIMATION_CHANNEL_COLOR = Ovoid.BIT25;
Ovoid.ANIMATION_CHANNEL_COLOR_R = Ovoid.BIT13 | Ovoid.BIT25;
Ovoid.ANIMATION_CHANNEL_COLOR_G = Ovoid.BIT14 | Ovoid.BIT25;
Ovoid.ANIMATION_CHANNEL_COLOR_B = Ovoid.BIT15 | Ovoid.BIT25;
Ovoid.ANIMATION_CHANNEL_COLOR_A = Ovoid.BIT16 | Ovoid.BIT25;
Ovoid.ANIMATION_CHANNEL_VISIBILITY = Ovoid.BIT17;
Ovoid.ANIMATION_CHANNEL_TRANSFORM = Ovoid.BIT26;
Ovoid.COLLADA = 0;
Ovoid.OJSON = 1;
Ovoid.DAE_TRANSFORMS = Ovoid.BIT1;
Ovoid.DAE_MESHS = Ovoid.BIT2;
Ovoid.DAE_LIGHTS = Ovoid.BIT3;
Ovoid.DAE_CAMERAS = Ovoid.BIT4;
Ovoid.DAE_JOINTS = Ovoid.BIT5;
Ovoid.DAE_ANIMATIONS = Ovoid.BIT6;
Ovoid.DAE_MATERIALS = Ovoid.BIT7;
Ovoid.DAE_CONTROLLERS = Ovoid.BIT8;
Ovoid.DAE_WORLD_NODES = Ovoid.BIT1 | Ovoid.BIT3 | Ovoid.BIT4 | Ovoid.BIT5;
Ovoid.DAE_DEPENDENCY_NODES = Ovoid.BIT2 | Ovoid.BIT6 | Ovoid.BIT7 | Ovoid.BIT8;
Ovoid.DAE_ALL_NODES = Ovoid.BIT1 | Ovoid.BIT2 | Ovoid.BIT3 | Ovoid.BIT4 | Ovoid.BIT5 | Ovoid.BIT6 | Ovoid.BIT7 | Ovoid.BIT8;
Ovoid.DAE_FORCE_CSPLINE = Ovoid.BIT9;
Ovoid.DAE_OPTIMIZE_MESH_VERTICES = Ovoid.BIT10;
Ovoid.DAE_OPTIMIZE_MESH_TRIANGLES = Ovoid.BIT11;
Ovoid.DAE_OPTIMIZE_ALL = Ovoid.BIT10 | Ovoid.BIT11;
Ovoid.DAE_MAYA_FIXS = Ovoid.BIT13;
Ovoid.DAE_BLENDER_FIXS = Ovoid.BIT14;
Ovoid.DAE_REPARENT_SKIN = Ovoid.BIT15;
Ovoid.DAE_MERGE_DEPENDENCIES = Ovoid.BIT16;
Ovoid.DAE_CREATE_TRACK = Ovoid.BIT17;
Ovoid.DAE_CONVERT_UPAXIS = Ovoid.BIT18;
Ovoid.FRAME_FIXED_SIZE = 0;
Ovoid.FRAME_FULL_CLIENT = 1;
Ovoid.FRAME_FULL_SCREEN = 2;
Ovoid.HTML5_AUDIO = 1;
Ovoid.MOZ_AUDIO_API = 2;
Ovoid.WEBKIT_AUDIO_API = 3;
Ovoid.PIPE_RP_GEOMETRY = 20;
Ovoid.PIPE_RP_PARTICLE = 22;
Ovoid.PIPE_RP_LAYER = 23;
Ovoid.PIPE_RP_STRING = 24;
Ovoid.PIPE_RP_BILLBOARD = 27;
Ovoid.PIPE_L2_GEOMETRY_LP = 0;
Ovoid.PIPE_L2_GEOMETRY_1P = 1;
Ovoid.PIPE_L1_GEOMETRY_LP = 10;
Ovoid.PIPE_L1_GEOMETRY_1P = 11;
Ovoid.PIPE_L0_GEOMETRY_LP = 13;
Ovoid.PIPE_L0_GEOMETRY_1P = 14;
Ovoid.PIPE_PARTICLE = 2;
Ovoid.PIPE_LAYER = 3;
Ovoid.PIPE_STRING = 4;
Ovoid.PIPE_HELPER = 5;
Ovoid.PIPE_SHADOW_VOLUME = 6;
Ovoid.PIPE_BILLBOARD = 7;
Ovoid.RP_OVERLAY = Ovoid.BIT1;
Ovoid.RP_WORLD = Ovoid.BIT2;
Ovoid.VERTEX_VEC4_P = Ovoid.BIT1;
Ovoid.VERTEX_VEC3_N = Ovoid.BIT2;
Ovoid.VERTEX_VEC3_U = Ovoid.BIT3;
Ovoid.VERTEX_VEC3_T = Ovoid.BIT4;
Ovoid.VERTEX_VEC3_B = Ovoid.BIT5;
Ovoid.VERTEX_VEC4_C = Ovoid.BIT6;
Ovoid.VERTEX_VEC4_I = Ovoid.BIT7;
Ovoid.VERTEX_VEC4_W = Ovoid.BIT8;
Ovoid.VERTEX_PARTICLE = Ovoid.BIT1 | Ovoid.BIT3 | Ovoid.BIT6;
Ovoid.GLSL_FRAGMENT = 0;
Ovoid.GLSL_VERTEX = 1;
Ovoid.GLSL_GEOMETRY = 2;
Ovoid.SAMPLER_AMBIENT = 0;
Ovoid.SAMPLER_DEFAULT = 1;
Ovoid.SAMPLER_DIFFUSE = 1;
Ovoid.SAMPLER_SPECULAR = 2;
Ovoid.SAMPLER_EMISSIVE = 3;
Ovoid.SAMPLER_REFLECT = 4;
Ovoid.SAMPLER_NORMAL = 5;
Ovoid.UNIFORM_ENABLE_DIFFUSE_LIGHTING_BOOL = 0;
Ovoid.UNIFORM_ENABLE_AMBIENT_LIGHTING_BOOL = 1;
Ovoid.UNIFORM_ENABLE_SPECULAR_BOOL = 2;
Ovoid.UNIFORM_ENABLE_REFLECT_BOOL = 3;
Ovoid.UNIFORM_ENABLE_PARALAX_BOOL = 4;
Ovoid.UNIFORM_ENABLE_MATERIAL_BOOL = 5;
Ovoid.UNIFORM_ENABLE_VERTEX_WEIGHT_BOOL = 6;
Ovoid.UNIFORM_ENABLE_COMPUT_TANGENT_BOOL = 7;
Ovoid.UNIFORM_ZOFFSET_FLOAT = 8;
Ovoid.UNIFORM_COLOR_VEC4 = 9;
Ovoid.UNIFORM_MATERIAL_AMBIENT_VEC4 = 10;
Ovoid.UNIFORM_MATERIAL_DIFFUSE_VEC4 = 11;
Ovoid.UNIFORM_MATERIAL_SPECULAR_VEC4 = 12;
Ovoid.UNIFORM_MATERIAL_EMISSIVE_VEC4 = 13;
Ovoid.UNIFORM_MATERIAL_REFLECT_VEC4 = 14;
Ovoid.UNIFORM_MATERIAL_SHININESS_FLOAT = 15;
Ovoid.UNIFORM_MATERIAL_OPACITY_FLOAT = 16;
Ovoid.UNIFORM_MATERIAL_REFLECTIVITY_FLOAT = 17;
Ovoid.UNIFORM_MATERIAL_BUMPINESS_FLOAT = 18;
Ovoid.UNIFORM_LIGHT_WEIGHT_FLOAT = 19;
Ovoid.UNIFORM_LIGHT_POSITION_VEC4 = 20;
Ovoid.UNIFORM_LIGHT_DIRECTION_VEC3 = 21;
Ovoid.UNIFORM_LIGHT_COLOR_VEC4 = 22;
Ovoid.UNIFORM_LIGHT_INTENSITY_FLOAT = 23;
Ovoid.UNIFORM_LIGHT_CONSTANT_ATTENUATION_FLOAT = 23;
Ovoid.UNIFORM_LIGHT_RANGE_FLOAT = 24;
Ovoid.UNIFORM_LIGHT_FALLOFF_FLOAT = 25;
Ovoid.UNIFORM_LIGHT_SPOTANGLE_FLOAT = 26;
Ovoid.UNIFORM_LIGHT_LINEAR_ATTENUATION_FLOAT = 27;
Ovoid.UNIFORM_LIGHT_ENABLED_BOOL = 28;
Ovoid.UNIFORM_LIGHT_QUADRIC_ATTENUATION_FLOAT = 29;
Ovoid.UNIFORM_EYE_POSITION_VEC4 = 30;
Ovoid.UNIFORM_EYE_DIRECTION_VEC4 = 31;
Ovoid.UNIFORM_EYE_VIEWSIZE_VEC3 = 32;
Ovoid.UNIFORM_AMBIENT_COLOR_VEC4 = 40;
Ovoid.UNIFORM_LAYER_SIZE_VEC3 = 42;
Ovoid.UNIFORM_MATRIX_TRANSFORM_MAT4 = 0;
Ovoid.UNIFORM_MATRIX_NORMAL_MAT3 = 1;
Ovoid.UNIFORM_MATRIX_MODELVIEW_MAT4 = 2;
Ovoid.UNIFORM_MATRIX_EYEVIEW_MAT4 = 3;
Ovoid.UNIFORM_MATRIX_PROJECTION_MAT4 = 4;
Ovoid.UNIFORM_MATRIX_LOOKAT_MAT4 = 5;
Ovoid.UNIFORM_MATRIX_JOINTS_MAT4 = 6;
Ovoid.BOOL = 35670;
Ovoid.INT = 5124;
Ovoid.FLOAT = 5126;
Ovoid.DOUBLE = 5130;
Ovoid.INT_VEC2 = 35667;
Ovoid.INT_VEC3 = 35668;
Ovoid.INT_VEC4 = 35669;
Ovoid.FLOAT_VEC2 = 35664;
Ovoid.FLOAT_VEC3 = 35665;
Ovoid.FLOAT_VEC4 = 35666;
Ovoid.FLOAT_MAT2 = 35674;
Ovoid.FLOAT_MAT3 = 35675;
Ovoid.FLOAT_MAT4 = 35676;
Ovoid.BUFFER_STATIC = 35044;
Ovoid.BUFFER_DYNAMIC = 35048;
Ovoid.BUFFER_STREAM = 35040;
Ovoid.BUFFER_READ = 35E3;
Ovoid.BUFFER_WRITE = 35001;
Ovoid.BUFFER_READ_WRTIE = 35002;
Ovoid.FILTER_NEAREST = 0;
Ovoid.FILTER_LINEAR = 1;
Ovoid.RIGID_MASSIVE_BOX = 1;
Ovoid.RIGID_MASSIVE_SPHERE = 2;
Ovoid.GHOST_MASSIVE_BOX = 3;
Ovoid.GHOST_MASSIVE_SPHERE = 4;
Ovoid.RIGID_LANDSCAPE = 0;
Ovoid.MOUSE_ENTER = 0;
Ovoid.MOUSE_LEAVE = 1;
Ovoid.MOUSE_OVER = 2;
Ovoid.MOUSE_OVER_LEFT_DOWN = 3;
Ovoid.MOUSE_OVER_LEFT_UP = 4;
Ovoid.MOUSE_OVER_LEFT_HELD = 5;
Ovoid.MOUSE_OVER_MIDDLE_DOWN = 6;
Ovoid.MOUSE_OVER_MIDDLE_UP = 7;
Ovoid.MOUSE_OVER_MIDDLE_HELD = 8;
Ovoid.MOUSE_OVER_RIGHT_DOWN = 9;
Ovoid.MOUSE_OVER_RIGHT_UP = 10;
Ovoid.MOUSE_OVER_RIGHT_HELD = 11;
Ovoid.ON_GRABBED = 12;
Ovoid.ON_UNGRABBED = 13;
Ovoid.ON_INTERSECT = 14;
Ovoid.ON_INTERSECT_ENTER = 15;
Ovoid.ON_INTERSECT_LEAVE = 16;
Ovoid.UP = 0;
Ovoid.DOWN = 1;
Ovoid.HELD = 2;
Ovoid.MB_LEFT = 0;
Ovoid.MB_MIDDLE = 1;
Ovoid.MB_RIGHT = 2;
Ovoid.MOUSE_WHEEL = 7;
Ovoid.CTR_HELD = 1;
Ovoid.ALT_HELD = 2;
Ovoid.SHF_HELD = 3;
Ovoid.LSU_HELD = 4;
Ovoid.RSU_HELD = 5;
Ovoid.KB_BACKSPACE = 8;
Ovoid.KB_TAB = 9;
Ovoid.KB_ENTER = 13;
Ovoid.KB_SHIFT = 16;
Ovoid.KB_CTRL = 17;
Ovoid.KB_ALT = 18;
Ovoid.KB_BREAK = 19;
Ovoid.KB_CAPSLOCK = 20;
Ovoid.KB_ESCAPE = 27;
Ovoid.KB_PGUP = 33;
Ovoid.KB_PGDN = 34;
Ovoid.KB_END = 35;
Ovoid.KB_HOME = 36;
Ovoid.KB_LARROW = 37;
Ovoid.KB_UARROW = 38;
Ovoid.KB_RARROW = 39;
Ovoid.KB_DARROW = 40;
Ovoid.KB_INS = 45;
Ovoid.KB_DEL = 46;
Ovoid.KB_0 = 48;
Ovoid.KB_1 = 49;
Ovoid.KB_2 = 50;
Ovoid.KB_3 = 51;
Ovoid.KB_4 = 52;
Ovoid.KB_5 = 53;
Ovoid.KB_6 = 54;
Ovoid.KB_7 = 55;
Ovoid.KB_8 = 56;
Ovoid.KB_9 = 57;
Ovoid.KB_A = 65;
Ovoid.KB_B = 66;
Ovoid.KB_C = 67;
Ovoid.KB_D = 68;
Ovoid.KB_E = 69;
Ovoid.KB_F = 70;
Ovoid.KB_G = 71;
Ovoid.KB_H = 72;
Ovoid.KB_I = 73;
Ovoid.KB_J = 74;
Ovoid.KB_K = 75;
Ovoid.KB_L = 76;
Ovoid.KB_M = 77;
Ovoid.KB_N = 78;
Ovoid.KB_O = 79;
Ovoid.KB_P = 80;
Ovoid.KB_Q = 81;
Ovoid.KB_R = 82;
Ovoid.KB_S = 83;
Ovoid.KB_T = 84;
Ovoid.KB_U = 85;
Ovoid.KB_V = 86;
Ovoid.KB_W = 87;
Ovoid.KB_X = 88;
Ovoid.KB_Y = 89;
Ovoid.KB_Z = 90;
Ovoid.KB_LSUPER = 91;
Ovoid.KB_RSUPER = 92;
Ovoid.KB_SELECT = 93;
Ovoid.KB_NP0 = 96;
Ovoid.KB_NP1 = 97;
Ovoid.KB_NP2 = 98;
Ovoid.KB_NP3 = 99;
Ovoid.KB_NP4 = 100;
Ovoid.KB_NP5 = 101;
Ovoid.KB_NP6 = 102;
Ovoid.KB_NP7 = 103;
Ovoid.KB_NP8 = 104;
Ovoid.KB_NP9 = 105;
Ovoid.KB_NPMUL = 106;
Ovoid.KB_NPADD = 107;
Ovoid.KB_NPSUB = 109;
Ovoid.KB_NPDOT = 110;
Ovoid.KB_NPDIV = 111;
Ovoid.KB_F1 = 112;
Ovoid.KB_F2 = 113;
Ovoid.KB_F3 = 114;
Ovoid.KB_F4 = 115;
Ovoid.KB_F5 = 116;
Ovoid.KB_F6 = 117;
Ovoid.KB_F7 = 118;
Ovoid.KB_F8 = 119;
Ovoid.KB_F9 = 120;
Ovoid.KB_F10 = 121;
Ovoid.KB_F11 = 122;
Ovoid.KB_F12 = 123;
Ovoid.KB_NUMLOCK = 144;
Ovoid.KB_SCROLLLOCK = 145;
Ovoid.KB_SEMICOLON = 186;
Ovoid.KB_EQUAL = 187;
Ovoid.KB_DASH = 189;
Ovoid.KB_PERIOD = 190;
Ovoid.KB_SLASH = 191;
Ovoid.KB_GACCENT = 192;
Ovoid.KB_LBRACKET = 219;
Ovoid.KB_BACKSLASH = 220;
Ovoid.KB_RBRACKET = 221;
Ovoid.KB_SQUOTE = 222;
Ovoid.GLSL_WRAPMAP = '{"OJSON":1,"type":"glslmap","wrapmap": {"attribute":[{"id":1,"name":"p"},{"id":2,"name":"n"},{"id":4,"name":"u"},{"id":8,"name":"t"},{"id":16,"name":"b"},{"id":32,"name":"c"},{"id":64,"name":"i"},{"id":128,"name":"w"}],"uniform":[{"id":0,"name":"ENd"},{"id":1,"name":"ENa"},{"id":2,"name":"ENs"},{"id":3,"name":"ENr"},{"id":4,"name":"ENp"},{"id":5,"name":"ENm"},{"id":6,"name":"ENw"},{"id":7,"name":"ENt"},{"id":8,"name":"Z"},{"id":9,"name":"C"},{"id":10,"name":"Ma"},{"id":11,"name":"Md"},{"id":12,"name":"Ms"},{"id":13,"name":"Me"},{"id":14,"name":"Mr"},{"id":15,"name":"Mi"},{"id":16,"name":"Mo"},{"id":17,"name":"My"},{"id":18,"name":"Mb"},{"id":19,"name":"Lw"},{"id":20,"name":"Lp"},{"id":21,"name":"Ld"},{"id":22,"name":"Lc"},{"id":23,"name":"Li"},{"id":23,"name":"Lac"},{"id":24,"name":"Lr"},{"id":25,"name":"Lf"},{"id":26,"name":"La"},{"id":27,"name":"Lal"},{"id":28,"name":"Le"},{"id":29,"name":"Laq"},{"id":30,"name":"Ep"},{"id":31,"name":"Ed"},{"id":32,"name":"Es"},{"id":40,"name":"Ac"},{"id":42,"name":"Ls"},{"symbol":"UNIFORM_FOG_COLOR_VEC4","id":44,"name":"Fc"},{"symbol":"UNIFORM_FOG_DENSITY_FLOAT","id":45,"name":"Fd"}],"uniformMatrix":[{"id":0,"name":"MXF"},{"id":1,"name":"MNR"},{"id":2,"name":"MMV"},{"id":3,"name":"MEV"},{"id":4,"name":"MPJ"},{"id":5,"name":"MLA"},{"id":6,"name":"MJT"}],"uniformSampler":[{"id":1,"name":"Sd"},{"id":0,"name":"Sa"},{"id":1,"name":"Sd"},{"id":2,"name":"Ss"},{"id":3,"name":"Se"},{"id":4,"name":"Sr"},{"id":5,"name":"Sn"}]}}';
Ovoid.GLSL_P_VS = "attribute vec4 p;uniform mat4 MXF;uniform mat4 MEV;void main(void){gl_Position=MEV*MXF*p;}";
Ovoid.GLSL_PU_VS = "attribute vec4 p;attribute vec3 u;uniform mat4 MXF;uniform mat4 MEV;varying vec2 Vu;void main(void){Vu=u.xy;gl_Position=MEV*MXF*p;}";
Ovoid.GLSL_PC_VS = "attribute vec4 p;attribute vec4 c;uniform mat4 MEV;uniform mat4 MXF;varying vec4 Vc;void main(void){Vc=c;gl_Position=MEV*(MXF*p);}";
Ovoid.GLSL_P_ZSRING_VS = "attribute vec4 p;uniform mat4 MXF;uniform mat4 MEV;uniform vec4 Ep;void main(void){gl_PointSize=p.z;gl_Position=MEV*MXF*vec4(p.xy,0.0,1.0);}";
Ovoid.GLSL_P_ZWSRING_VS = "attribute vec4 p;uniform mat4 MXF;uniform mat4 MEV;varying float a;void main(void){a=p.w;gl_PointSize=p.z;gl_Position=MEV*MXF*vec4(p.xy,0.0,1.0);}";
Ovoid.GLSL_C_TEX_STRING_FS = "precision highp float;uniform vec4 C;uniform sampler2D Sd;varying float a;vec2 Gu;void main(void){Gu.s=(gl_PointCoord.s*0.0625)+(floor(mod(a,16.0))*0.0625);Gu.t=(1.0-(gl_PointCoord.t*0.0625))-(floor(a/16.0)*0.0625);gl_FragColor=texture2D(Sd, Gu)*C;}";
Ovoid.GLSL_PU_PARTICLE_VS = "attribute vec4 p;attribute vec3 u;uniform mat4 MEV;uniform vec4 Ep;void main(void){gl_PointSize=((u.z*640.0)/distance(p,Ep));gl_Position=MEV*p;}";
Ovoid.GLSL_PUC_PARTICLE_VS = "attribute vec4 p;attribute vec3 u;attribute vec4 c;uniform mat4 MEV;uniform vec4 Ep;varying vec4 Vc;void main(void){Vc=c;gl_PointSize=((u.z*640.0)/abs(distance(p,Ep)));gl_Position=MEV*p;}";
Ovoid.GLSL_PU_BILLBOARD_VS = "attribute vec4 p;attribute vec3 u;uniform mat4 MPJ;uniform mat4 MLA;uniform mat4 MXF;varying vec2 Vu;varying float z;void main(void){Vu=u.xy;gl_Position=MPJ*((MLA*MXF)*vec4(0.0,0.0,0.0,1.0)+(p*MXF[0][0]));}";
Ovoid.GLSL_PIW_HYBRID_VS = "#define MA " + Ovoid.MAX_JOINT_BY_SKIN + "\nattribute vec4 p;attribute vec4 i;attribute vec4 w;uniform bool ENw;uniform mat4 MEV;uniform mat4 MXF[MA];vec4 Vp;void main(void){if(ENw){Vp=vec4(0.0,0.0,0.0,0.0);Vp+=(MXF[int(i.x)]*p)*w.x;Vp+=(MXF[int(i.y)]*p)*w.y;Vp+=(MXF[int(i.z)]*p)*w.z;Vp+=(MXF[int(i.w)]*p)*w.w;}else{Vp=MXF[0]*p;}gl_Position=MEV*Vp;}";
Ovoid.GLSL_PNUIW_HYBRID_VS = "#define MA " + Ovoid.MAX_JOINT_BY_SKIN + "\nattribute vec4 p;attribute vec3 n;attribute vec3 u;attribute vec4 i;attribute vec4 w;uniform bool ENw;uniform mat4 MEV;uniform mat4 MXF[MA];uniform mat3 MNR[MA];varying vec4 Vp;varying vec3 Vn;varying vec2 Vu;void main(void){if(ENw){Vp=vec4(0.0,0.0,0.0,0.0);Vn=vec3(0.0,0.0,0.0);Vp+=(MXF[int(i.x)]*p)*w.x;Vn+=(MNR[int(i.x)]*n)*w.x;Vp+=(MXF[int(i.y)]*p)*w.y;Vn+=(MNR[int(i.y)]*n)*w.y;Vp+=(MXF[int(i.z)]*p)*w.z;Vn+=(MNR[int(i.z)]*n)*w.z;Vp+=(MXF[int(i.w)]*p)*w.w;Vn+=(MNR[int(i.w)]*n)*w.w;}else{Vp=MXF[0]*p;Vn=MNR[0]*n;}Vu=u.xy;gl_Position=MEV*Vp;}";
Ovoid.GLSL_VL_PNUIW_HYBRID_LP_VS = "#define MA " + Ovoid.MAX_JOINT_BY_SKIN + "\nattribute vec4 p;attribute vec3 n;attribute vec3 u;attribute vec4 i;attribute vec4 w;uniform bool ENd;uniform bool ENw;uniform mat4 MEV;uniform mat4 MXF[MA];uniform mat3 MNR[MA];uniform vec4 Ep;uniform vec4 Lp;uniform vec3 Ld;uniform vec4 Lc;uniform float Li;uniform float Lr;uniform float Lf;uniform float La;uniform float My;uniform float Mi;varying vec4 Vp;varying vec3 Vn;varying vec2 Vu;varying vec4 Cd;varying vec4 Cs;vec3 LV, R, EV;float LT, Fw;void main(void){if(ENw){Vp=vec4(0.0,0.0,0.0,0.0);Vn=vec3(0.0,0.0,0.0);Vp+=(MXF[int(i.x)]*p)*w.x;Vn+=(MNR[int(i.x)]*n)*w.x;Vp+=(MXF[int(i.y)]*p)*w.y;Vn+=(MNR[int(i.y)]*n)*w.y;Vp+=(MXF[int(i.z)]*p)*w.z;Vn+=(MNR[int(i.z)]*n)*w.z;Vp+=(MXF[int(i.w)]*p)*w.w;Vn+=(MNR[int(i.w)]*n)*w.w;}else{Vp=MXF[0]*p;Vn=MNR[0]*n;}Vu=u.xy;gl_Position=MEV*Vp;Cd=vec4(0.0,0.0,0.0,0.0);Cs=vec4(0.0,0.0,0.0,0.0);if(ENd){EV=normalize(Ep-Vp).xyz;if(Lp.w==1.0){LV=normalize(Lp-Vp).xyz;LT=max(dot(Vn,LV),0.0);Fw=clamp((-dot(LV,Ld)-(cos(La)))/(Lf),0.0,1.0);}else{LV=Ld;LT=max(dot(Vn,LV),0.0);Fw=1.0;}Cd+=(Lc*Li*LT)*Fw;R=normalize(reflect(-LV,Vn));Cs+=Lc*Li*(pow(max(dot(R,EV),0.0),Mi))*Fw;}}";
Ovoid.GLSL_VL_PNUIW_HYBRID_1P_VS = "#define MA " + Ovoid.MAX_JOINT_BY_SKIN + "\n#define ML " + Ovoid.MAX_LIGHT_BY_DRAW + "\nattribute vec4 p;attribute vec3 n;attribute vec3 u;attribute vec4 i;attribute vec4 w;uniform bool ENw;uniform mat4 MEV;uniform mat4 MXF[MA];uniform mat3 MNR[MA];uniform vec4 Ep;uniform vec4 Lp[ML];uniform vec3 Ld[ML];uniform vec4 Lc[ML];uniform float Li[ML];uniform float Lr[ML];uniform float Lf[ML];uniform float La[ML];uniform bool Le[ML];uniform float My;uniform float Mi;varying vec4 Vp;varying vec3 Vn;varying vec2 Vu;varying vec4 Cd;varying vec4 Cs;vec3 LV, R, EV;float LT, Fw;void main(void){if(ENw){Vp=vec4(0.0,0.0,0.0,0.0);Vn=vec3(0.0,0.0,0.0);Vp+=(MXF[int(i.x)]*p)*w.x;Vn+=(MNR[int(i.x)]*n)*w.x;Vp+=(MXF[int(i.y)]*p)*w.y;Vn+=(MNR[int(i.y)]*n)*w.y;Vp+=(MXF[int(i.z)]*p)*w.z;Vn+=(MNR[int(i.z)]*n)*w.z;Vp+=(MXF[int(i.w)]*p)*w.w;Vn+=(MNR[int(i.w)]*n)*w.w;}else{Vp=MXF[0]*p;Vn=MNR[0]*n;}Vu=u.xy;gl_Position=MEV*Vp;Cd=vec4(0.0,0.0,0.0,0.0);Cs=vec4(0.0,0.0,0.0,0.0);EV=normalize(Ep-Vp).xyz;for(int i=0;i<ML;i++){if(Le[i]){if(Lp[i].w==1.0){LV=normalize(Lp[i]-Vp).xyz;LT=max(dot(Vn,LV),0.0);Fw=clamp((-dot(LV,Ld[i])-(cos(La[i])))/(Lf[i]), 0.0, 1.0);}else{LV=Ld[i];LT=max(dot(Vn,LV),0.0);Fw=1.0;}Cd+=(Lc[i]*Li[i]*LT)*Fw;R=normalize(reflect(-LV,Vn));Cs+=Lc[i]*Li[i]*(pow(max(dot(R,EV),0.0),Mi))*Fw;}}}";
Ovoid.GLSL_C_FS = "precision highp float;uniform vec4 C;void main(void){gl_FragColor=C;}";
Ovoid.GLSL_C_ADEPTH_FS = "precision highp float;uniform vec4 C;void main(void){gl_FragColor=C;gl_FragColor.a=gl_FragCoord.z;}";
Ovoid.GLSL_BLACK_FS = "precision highp float;void main(void){gl_FragColor=vec4(0.0,0.0,0.0,1.0);}";
Ovoid.GLSL_VCC_FS = "precision highp float;uniform vec4 C;varying vec4 Vc;void main(void){gl_FragColor=Vc*C;}";
Ovoid.GLSL_C_TEX_FS = "precision highp float;uniform vec4 C;uniform sampler2D Sd;varying vec2 Vu;void main(void){gl_FragColor=texture2D(Sd,Vu)*C;}";
Ovoid.GLSL_VC_TEX_PARTICLE_FS = "precision highp float;uniform sampler2D Sd;varying vec4 Vc;void main(void){gl_FragColor=texture2D(Sd,gl_PointCoord)*Vc;}";
Ovoid.GLSL_C_TEX_BILLBOARD_FS = "precision highp float;uniform sampler2D Sd;uniform vec4 C;varying vec2 Vu;varying float z;void main(void){gl_FragColor=texture2D(Sd,Vu)*C;}";
Ovoid.GLSL_VL_ADS_1TEX_FS = "precision highp float;uniform vec4 Ac;uniform sampler2D Sd;uniform bool ENa;uniform bool ENd;uniform vec4 Md;uniform vec4 Ms;uniform float Mo;uniform vec4 Fc;uniform float Fd;varying vec2 Vu;varying vec4 Cd;varying vec4 Cs;vec4 D;float Fz, Ff;void main(void){gl_FragColor=vec4(0.0,0.0,0.0,0.0);D=Md*texture2D(Sd,Vu);if(ENa)gl_FragColor+=(D*Ac);if(ENd){gl_FragColor+=(D*Cd)+(Ms*Cs);if(Fd>0.0){Fz=gl_FragCoord.z/gl_FragCoord.w;Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);gl_FragColor=mix(Fc,gl_FragColor,Ff);}}gl_FragColor.a=Mo;}";
Ovoid.GLSL_VL_AERDS_FULLTEX_FS = "precision highp float;uniform vec4 Ac;uniform sampler2D Sd;uniform sampler2D Ss;uniform sampler2D Se;uniform sampler2D Sr;uniform vec4 Ep;uniform bool ENa;uniform bool ENd;uniform vec4 Md;uniform vec4 Ma;uniform vec4 Ms;uniform vec4 Me;uniform vec4 Mr;uniform float My;uniform float Mo;uniform vec4 Fc;uniform float Fd;varying vec2 Vu;varying vec4 Cd;varying vec4 Cs;varying vec3 Vn;varying vec4 Vp;float Fz, Ff;vec4 Td;vec3 R, EV;vec2 Ru;void main(void){gl_FragColor=vec4(0.0,0.0,0.0,0.0);Td=texture2D(Sd,Vu);if(ENa){gl_FragColor=(Md*Ma*Td)*Ac;gl_FragColor+=(texture2D(Se,Vu)*Me);if(My!=0.0){EV=normalize(Ep-Vp).xyz;R=normalize(reflect(EV,Vn));Ru=(R.xy/(2.0*(1.0+abs(R.z))))+0.5;gl_FragColor+=(Mr*texture2D(Sr,Ru))*My;}gl_FragColor.a=Mo*Td.a;}if(ENd){gl_FragColor+=(Md*Td)*Cd;gl_FragColor.a=Mo*Td.a;gl_FragColor+=(Ms*texture2D(Ss,Vu))*Cs;if(Fd>0.0){Fz=gl_FragCoord.z/gl_FragCoord.w;Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);gl_FragColor=mix(Fc,gl_FragColor,Ff);}}}";
Ovoid.GLSL_AERDS_FULLTEX_LP_FS = "precision highp float;uniform bool ENd;uniform bool ENa;uniform vec4 Ep;uniform vec4 Ac;uniform vec4 Lp;uniform vec3 Ld;uniform vec4 Lc;uniform float Li;uniform float Lr;uniform float Lf;uniform float La;uniform vec4 Md;uniform vec4 Ma;uniform vec4 Ms;uniform vec4 Me;uniform vec4 Mr;uniform float Mi;uniform float My;uniform float Mo;uniform sampler2D Sa;uniform sampler2D Sd;uniform sampler2D Ss;uniform sampler2D Se;uniform sampler2D Sr;uniform vec4 Fc;uniform float Fd;varying vec4 Vp;varying vec3 Vn;varying vec2 Vu;vec4 Td;float LT, Fw, Dw, Sw, Fz, Ff;vec3 EV, R, LV;vec2 Ru;void main(void){EV=normalize(Ep-Vp).xyz;gl_FragColor=vec4(0.0,0.0,0.0,0.0);Td=texture2D(Sd,Vu);if(ENa){gl_FragColor=(Ma*Md*Td)*Ac;gl_FragColor+=(Me*texture2D(Se,Vu));if(My!=0.0){R=normalize(reflect(EV,Vn));Ru=(R.xy/(2.0*(1.0+abs(R.z))))+0.5;gl_FragColor+=(Mr*texture2D(Sr,Ru))*My;}gl_FragColor.a=Td.a*Mo;}if(ENd){if(Lp.w==1.0){LV=normalize(Lp-Vp).xyz;LT=max(dot(Vn,LV),0.0);Fw=clamp((-dot(LV,Ld)-(cos(La)))/(Lf),0.0,1.0);}else{LV=Ld;LT=max(dot(Vn,LV),0.0);Fw=1.0;}Dw=LT*Li*Fw;R=normalize(reflect(-LV,Vn));Sw=(pow(max(dot(R,EV),0.0),Mi))*Fw;gl_FragColor+=(Md*Td)*((Lc*Li)*Dw);gl_FragColor.a=Td.a*Mo;gl_FragColor+=(Ms*texture2D(Ss,Vu))*((Lc*Li)*Sw);if(Fd>0.0){Fz=gl_FragCoord.z/gl_FragCoord.w;Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);gl_FragColor=mix(Fc,gl_FragColor,Ff);}}}";
Ovoid.GLSL_AERDS_FULLTEX_1P_FS = "#define ML " + Ovoid.MAX_LIGHT_BY_DRAW + "\nprecision highp float;uniform vec4 Ep;uniform vec4 Ac;uniform vec4 Lp[ML];uniform vec3 Ld[ML];uniform vec4 Lc[ML];uniform float Li[ML];uniform float Lr[ML];uniform float Lf[ML];uniform float La[ML];uniform bool Le[ML];uniform vec4 Md;uniform vec4 Ma;uniform vec4 Ms;uniform vec4 Me;uniform vec4 Mr;uniform float Mi;uniform float My;uniform float Mo;uniform sampler2D Sa;uniform sampler2D Sd;uniform sampler2D Ss;uniform sampler2D Se;uniform sampler2D Sr;uniform vec4 Fc;uniform float Fd;varying vec4 Vp;varying vec3 Vn;varying vec2 Vu;vec4 Td;float LT, Fw, Dw, Sw, Fz, Ff;vec3 EV, R, LV;vec2 Ru;void main(void){EV=normalize(Ep-Vp).xyz;Td=texture2D(Sd,Vu);gl_FragColor=(Ma*Md*Td)*Ac;gl_FragColor+=(Me*texture2D(Se,Vu));if(My!=0.0){R=normalize(reflect(EV,Vn));Ru=(R.xy/(2.0*(1.0+abs(R.z))))+0.5;gl_FragColor+=(Mr*texture2D(Sr,Ru))*My;}for(int i=0;i<ML;i++){if(Le[i]){if(Lp[i].w==1.0){LV=normalize(Lp[i]-Vp).xyz;LT=max(dot(Vn,LV),0.0);Fw=clamp((-dot(LV,Ld[i])-(cos(La[i])))/(Lf[i]),0.0,1.0);}else{LV=Ld[i];LT=max(dot(Vn,LV),0.0);Fw=1.0;}Dw=LT*Li[i]*Fw;R=normalize(reflect(-LV,Vn));Sw=(pow(max(dot(R,EV),0.0),Mi))*Fw;gl_FragColor+=(Md*Td)*((Lc[i]*Li[i])*Dw);gl_FragColor.a=Td.a*Mo;gl_FragColor+=(Ms*texture2D(Ss,Vu))*((Lc[i]*Li[i])*Sw);}}if(Fd>0.0){Fz=gl_FragCoord.z/gl_FragCoord.w;Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);gl_FragColor=mix(Fc,gl_FragColor,Ff);}}";
Ovoid.OVOIDJS_VERSION = "1.1";
Ovoid.OVOIDJS_FIRSTBUILD_DATE = "16-07-2012";
Ovoid.OVOIDJS_RELEASE_DATE = "XX-XX-2012";
Ovoid.deg2Rad = function (b) {
    return 0.017453293 * b
};
Ovoid.rad2Deg = function (b) {
    return 57.295779513 * b
};
Ovoid.isPowerOfTwo = function (b) {
    return 0 == (b & b - 1)
};
Ovoid.noise = function (b) {
    return 1 - (b * (15731 * b * b + 789221) + 1376312589 & 2147483647) / 1073741824
};
Ovoid.randInt = function (b, c) {
    return b + Math.round(Math.random() * (c - b))
};
Ovoid.randFloat = function (b, c) {
    return b + Math.random() * (c - b)
};
Ovoid.getContent = function (b) {
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    var c = new XMLHttpRequest;
    c.open("GET", b, !1);
    c.send(null);
    if (200 == c.status || 304 == c.status) return c.responseText;
    Ovoid.log(1, "Ovoid.Io", "failled to open '" + b + "'");
    return null
};
Ovoid.getXml = function (b) {
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    var c = new XMLHttpRequest;
    c.open("GET", b, !1);
    c.send(null);
    if (200 == c.status || 304 == c.status) return c.responseXML;
    Ovoid.log(1, "Ovoid", "failled to open '" + b + "'");
    return null
};
Ovoid.getJson = function (b) {
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    var c = new XMLHttpRequest;
    c.open("GET", b, !1);
    c.send(null);
    if (200 == c.status || 304 == c.status) return JSON.parse(c.responseText);
    Ovoid.log(1, "Ovoid", "failled to open '" + b + "'");
    return null
};
Ovoid.getBinary = function (b) {
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    var c = new XMLHttpRequest;
    c.responseType = "arraybuffer";
    c.open("GET", b, !1);
    if (200 == c.status || 304 == c.status) return c.response;
    Ovoid.log(1, "Ovoid", "failled to open '" + b + "'");
    return null
};
Ovoid.array2Float32 = function (b) {
    for (var c = b.length, e = new Float32Array(c); c--;) e[c] = b[c];
    return e
};
Ovoid.float322Array = function (b) {
    for (var c = b.length, e = Array(c); c--;) e[c] = b[c];
    return e
};
Ovoid.extractName = function (b, c) {
    var e = b.split("/"),
        e = e[e.length - 1];
    c || (e = e.split("."), e = e[e.length - 2]);
    return e
};
Ovoid.extractExt = function (b) {
    b = b.split("/");
    b = b[b.length - 1];
    b = b.split(".");
    return b[b.length - 1]
};
Ovoid.frnd = function (b) {
    return Math.round(1E3 * b) / 1E3
};
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1E3 / 60)
    }
}();
window.cancelRequestAnimFrame = function () {
    return window.cancelCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout
}();
Ovoid.Stack = function (b) {
    Array.call(this);
    this.count = 0;
    this.length = b
};
Ovoid.Stack.prototype = [];
Ovoid.Stack.prototype.constructor = Ovoid.Stack;
Ovoid.Stack.prototype.add = function (b) {
    this.count != this.length && (this[this.count] = b, this.count++)
};
Ovoid.Stack.prototype.empty = function () {
    this.count = 0
};
Ovoid.Stack.prototype.has = function (b) {
    for (var c = this.count; c--;)
        if (this[c] === b) return !0;
    return !1
};
Ovoid.Stack.prototype.isFull = function () {
    return this.count === this.length
};
Ovoid.Stack.prototype.isEmpty = function () {
    return !this.count
};
Ovoid.Stack.prototype.current = function () {
    return this[this.count]
};
Ovoid.Stack.prototype.forward = function () {
    this.count != this.length && this.count++
};
Ovoid.Stack.prototype.backward = function () {
    this.count && this.count--
};
Ovoid.Vector = function (b, c, e) {
    this.v = new Float32Array(3);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e)
};
Ovoid.Vector.prototype.set = function (b, c, e) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Vector.prototype.copy = function (b) {
    this.v[0] = b.v[0];
    this.v[1] = b.v[1];
    this.v[2] = b.v[2]
};
Ovoid.Vector.prototype.equal = function (b) {
    return this.v[0] == b.v[0] && this.v[1] == b.v[1] && this.v[2] == b.v[2]
};
Ovoid.Vector.prototype.subBy = function (b) {
    this.v[0] -= b.v[0];
    this.v[1] -= b.v[1];
    this.v[2] -= b.v[2]
};
Ovoid.Vector.prototype.scaleBy = function (b) {
    this.v[0] *= b;
    this.v[1] *= b;
    this.v[2] *= b
};
Ovoid.Vector.prototype.addBy = function (b) {
    this.v[0] += b.v[0];
    this.v[1] += b.v[1];
    this.v[2] += b.v[2]
};
Ovoid.Vector.prototype.crossBy = function (b) {
    var c = this.v[2] * b.v[0] - this.v[0] * b.v[2],
        e = this.v[0] * b.v[1] - this.v[1] * b.v[0];
    this.v[0] = this.v[1] * b.v[2] - this.v[2] * b.v[1];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.subOf = function (b, c) {
    this.v[0] = b.v[0] - c.v[0];
    this.v[1] = b.v[1] - c.v[1];
    this.v[2] = b.v[2] - c.v[2]
};
Ovoid.Vector.prototype.addOf = function (b, c) {
    this.v[0] = b.v[0] + c.v[0];
    this.v[1] = b.v[1] + c.v[1];
    this.v[2] = b.v[2] + c.v[2]
};
Ovoid.Vector.prototype.normalize = function () {
    var b = Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2]);
    this.v[0] /= b;
    this.v[1] /= b;
    this.v[2] /= b
};
Ovoid.Vector.prototype.dot = function (b) {
    return this.v[0] * b.v[0] + this.v[1] * b.v[1] + this.v[2] * b.v[2]
};
Ovoid.Vector.prototype.size = function () {
    return Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2])
};
Ovoid.Vector.prototype.size2 = function () {
    return this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2]
};
Ovoid.Vector.prototype.crossOf = function (b, c) {
    this.v[0] = b.v[1] * c.v[2] - b.v[2] * c.v[1];
    this.v[1] = b.v[2] * c.v[0] - b.v[0] * c.v[2];
    this.v[2] = b.v[0] * c.v[1] - b.v[1] * c.v[0]
};
Ovoid.Vector.prototype.dist = function (b) {
    var c = this.v[0] - b.v[0],
        e = this.v[1] - b.v[1],
        b = this.v[2] - b.v[2];
    return Math.sqrt(c * c + e * e + b * b)
};
Ovoid.Vector.prototype.dist2 = function (b) {
    var c = this.v[0] - b.v[0],
        e = this.v[1] - b.v[1],
        b = this.v[2] - b.v[2];
    return c * c + e * e + b * b
};
Ovoid.Vector.prototype.transform4 = function (b) {
    var c = this.v[0] * b.m[1] + this.v[1] * b.m[5] + this.v[2] * b.m[9],
        e = this.v[0] * b.m[2] + this.v[1] * b.m[6] + this.v[2] * b.m[10];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[4] + this.v[2] * b.m[8];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.transform4Of = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[4] + b.v[2] * c.m[8];
    this.v[1] = b.v[0] * c.m[1] + b.v[1] * c.m[5] + b.v[2] * c.m[9];
    this.v[2] = b.v[0] * c.m[2] + b.v[1] * c.m[6] + b.v[2] * c.m[10]
};
Ovoid.Vector.prototype.transform4Inverse = function (b) {
    var c = this.v[0] * b.m[4] + this.v[1] * b.m[5] + this.v[2] * b.m[6],
        e = this.v[0] * b.m[8] + this.v[1] * b.m[9] + this.v[2] * b.m[10];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[1] + this.v[2] * b.m[2];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.transform4InverseOf = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[1] + b.v[2] * c.m[2];
    this.v[1] = b.v[0] * c.m[4] + b.v[1] * c.m[5] + b.v[2] * c.m[6];
    this.v[2] = b.v[0] * c.m[8] + b.v[1] * c.m[9] + b.v[2] * c.m[10]
};
Ovoid.Vector.prototype.transform3 = function (b) {
    var c = this.v[0] * b.m[1] + this.v[1] * b.m[4] + this.v[2] * b.m[7],
        e = this.v[0] * b.m[2] + this.v[1] * b.m[5] + this.v[2] * b.m[8];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[3] + this.v[2] * b.m[6];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.transform3Inverse = function (b) {
    var c = this.v[0] * b.m[3] + this.v[1] * b.m[4] + this.v[2] * b.m[5],
        e = this.v[0] * b.m[6] + this.v[1] * b.m[7] + this.v[2] * b.m[8];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[1] + this.v[2] * b.m[2];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Vector.prototype.transform3Of = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[3] + b.v[2] * c.m[6];
    this.v[1] = b.v[0] * c.m[1] + b.v[1] * c.m[4] + b.v[2] * c.m[7];
    this.v[2] = b.v[0] * c.m[2] + b.v[1] * c.m[5] + b.v[2] * c.m[8]
};
Ovoid.Vector.prototype.transform3InverseOf = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[1] + b.v[2] * c.m[2];
    this.v[1] = b.v[0] * c.m[3] + b.v[1] * c.m[4] + b.v[2] * c.m[5];
    this.v[2] = b.v[0] * c.m[6] + b.v[1] * c.m[7] + b.v[2] * c.m[8]
};
Ovoid.Vector.prototype.addWeightTransform3Of = function (b, c, e) {
    this.v[0] += (b.v[0] * c.m[0] + b.v[1] * c.m[3] + b.v[2] * c.m[6]) * e;
    this.v[1] += (b.v[0] * c.m[1] + b.v[1] * c.m[4] + b.v[2] * c.m[7]) * e;
    this.v[2] += (b.v[0] * c.m[2] + b.v[1] * c.m[5] + b.v[2] * c.m[8]) * e
};
Ovoid.Vector.prototype.reflect = function (b) {
    var c = -2 * (this.v[0] * b.v[0] + this.v[1] * b.v[1] + this.v[2] * b.v[2]);
    this.v[0] += b.v[0] * c;
    this.v[1] += b.v[1] * c;
    this.v[2] += b.v[2] * c
};
Ovoid.Vector.prototype.isNaN = function () {
    return isNaN(this.v[0]) || isNaN(this.v[1]) || isNaN(this.v[2])
};
Ovoid.Vector.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Vector);
    return c
};
Ovoid.Vector.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Point = function (b, c, e, g) {
    this.v = new Float32Array(4);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e, this.v[3] = g)
};
Ovoid.Point.prototype.set = function (b, c, e, g) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e;
    this.v[3] = g
};
Ovoid.Point.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Point.prototype.copy = function (b) {
    this.v[0] = b.v[0];
    this.v[1] = b.v[1];
    this.v[2] = b.v[2];
    this.v[3] = b.v[3]
};
Ovoid.Point.prototype.equal = function (b) {
    return this.v[0] == b.v[0] && this.v[1] == b.v[1] && this.v[2] == b.v[2]
};
Ovoid.Point.prototype.subBy = function (b) {
    this.v[0] -= b.v[0];
    this.v[1] -= b.v[1];
    this.v[2] -= b.v[2];
    this.v[3] -= b.v[3]
};
Ovoid.Point.prototype.addBy = function (b) {
    this.v[0] += b.v[0];
    this.v[1] += b.v[1];
    this.v[2] += b.v[2];
    this.v[3] += b.v[3]
};
Ovoid.Point.prototype.scaleBy = function (b) {
    this.v[0] *= b;
    this.v[1] *= b;
    this.v[2] *= b;
    this.v[3] *= b
};
Ovoid.Point.prototype.subOf = function (b, c) {
    this.v[0] = b.v[0] - c.v[0];
    this.v[1] = b.v[1] - c.v[1];
    this.v[2] = b.v[2] - c.v[2];
    this.v[3] = b.v[3] - c.v[3]
};
Ovoid.Point.prototype.addOf = function (b, c) {
    this.v[0] = b.v[0] + c.v[0];
    this.v[1] = b.v[1] + c.v[1];
    this.v[2] = b.v[2] + c.v[2];
    this.v[3] = b.v[3] + c.v[3]
};
Ovoid.Point.prototype.normalize = function () {
    var b = Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2]);
    this.v[0] /= b;
    this.v[1] /= b;
    this.v[2] /= b;
    this.v[3] = 1
};
Ovoid.Point.prototype.normalizeWeight = function () {
    this.v[0] /= this.v[3];
    this.v[1] /= this.v[3];
    this.v[2] /= this.v[3];
    this.v[3] = 1
};
Ovoid.Point.prototype.dot = function (b) {
    return this.v[0] * b.v[0] + this.v[1] * b.v[1] + this.v[2] * b.v[2]
};
Ovoid.Point.prototype.size = function () {
    return Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2])
};
Ovoid.Point.prototype.size2 = function () {
    return this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2]
};
Ovoid.Point.prototype.dist = function (b) {
    var c = this.v[0] - b.v[0],
        e = this.v[1] - b.v[1],
        b = this.v[2] - b.v[2];
    return Math.sqrt(c * c + e * e + b * b)
};
Ovoid.Point.prototype.dist2 = function (b) {
    var c = this.v[0] - b.v[0],
        e = this.v[1] - b.v[1],
        b = this.v[2] - b.v[2];
    return c * c + e * e + b * b
};
Ovoid.Point.prototype.transform4 = function (b) {
    var c = this.v[0] * b.m[1] + this.v[1] * b.m[5] + this.v[2] * b.m[9] + this.v[3] * b.m[13],
        e = this.v[0] * b.m[2] + this.v[1] * b.m[6] + this.v[2] * b.m[10] + this.v[3] * b.m[14];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[4] + this.v[2] * b.m[8] + this.v[3] * b.m[12];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Point.prototype.transform4Of = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[4] + b.v[2] * c.m[8] + b.v[3] * c.m[12];
    this.v[1] = b.v[0] * c.m[1] + b.v[1] * c.m[5] + b.v[2] * c.m[9] + b.v[3] * c.m[13];
    this.v[2] = b.v[0] * c.m[2] + b.v[1] * c.m[6] + b.v[2] * c.m[10] + b.v[3] * c.m[14]
};
Ovoid.Point.prototype.transform4Inverse = function (b) {
    var c = this.v[0] - b.m[12] * this.v[3],
        e = this.v[1] - b.m[13] * this.v[3],
        g = this.v[2] - b.m[14] * this.v[3];
    this.v[0] = c * b.m[0] + e * b.m[1] + g * b.m[2];
    this.v[1] = c * b.m[4] + e * b.m[5] + g * b.m[6];
    this.v[2] = c * b.m[8] + e * b.m[9] + g * b.m[10]
};
Ovoid.Point.prototype.transform4InverseOf = function (b, c) {
    var e = b.v[0] - c.m[12] * b.v[3],
        g = b.v[1] - c.m[13] * b.v[3],
        f = b.v[2] - c.m[14] * b.v[3];
    this.v[0] = e * c.m[0] + g * c.m[1] + f * c.m[2];
    this.v[1] = e * c.m[4] + g * c.m[5] + f * c.m[6];
    this.v[2] = e * c.m[8] + g * c.m[9] + f * c.m[10]
};
Ovoid.Point.prototype.addWeightTransform4Of = function (b, c, e) {
    this.v[0] += (b.v[0] * c.m[0] + b.v[1] * c.m[4] + b.v[2] * c.m[8] + c.m[12]) * e;
    this.v[1] += (b.v[0] * c.m[1] + b.v[1] * c.m[5] + b.v[2] * c.m[9] + c.m[13]) * e;
    this.v[2] += (b.v[0] * c.m[2] + b.v[1] * c.m[6] + b.v[2] * c.m[10] + c.m[14]) * e;
    this.v[3] += e
};
Ovoid.Point.prototype.transform3 = function (b) {
    var c = this.v[0] * b.m[1] + this.v[1] * b.m[4] + this.v[2] * b.m[7],
        e = this.v[0] * b.m[2] + this.v[1] * b.m[5] + this.v[2] * b.m[8];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[3] + this.v[2] * b.m[6];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Point.prototype.transform3Of = function (b, c) {
    this.v[0] = b.v[0] * c.m[0] + b.v[1] * c.m[3] + b.v[2] * c.m[6];
    this.v[1] = b.v[0] * mat4.m[1] + b.v[1] * c.m[4] + b.v[2] * c.m[7];
    this.v[2] = b.v[0] * mat4.m[2] + b.v[1] * c.m[5] + b.v[2] * c.m[8]
};
Ovoid.Point.prototype.transform3Inverse = function (b) {
    var c = this.v[0] * b.m[3] + this.v[1] * b.m[4] + this.v[2] * b.m[5],
        e = this.v[0] * b.m[6] + this.v[1] * b.m[7] + this.v[2] * b.m[8];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[1] + this.v[2] * b.m[2];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Point.prototype.transform3InverseOf = function (b) {
    this.v[0] = b.v[0] * mat4.m[0] + b.v[1] * mat4.m[1] + b.v[2] * mat4.m[2];
    this.v[1] = b.v[0] * mat4.m[3] + b.v[1] * mat4.m[4] + b.v[2] * mat4.m[5];
    this.v[2] = b.v[0] * mat4.m[6] + b.v[1] * mat4.m[7] + b.v[2] * mat4.m[8]
};
Ovoid.Point.prototype.isNaN = function () {
    return isNaN(this.v[0]) || isNaN(this.v[1]) || isNaN(this.v[2]) || isNaN(this.v[3])
};
Ovoid.Point.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Point);
    return c
};
Ovoid.Point.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Coord = function (b, c, e) {
    this.v = new Float32Array(3);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e)
};
Ovoid.Coord.prototype.set = function (b, c, e) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Coord.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Coord.prototype.copy = function (b) {
    this.v[0] = b.v[0];
    this.v[1] = b.v[1];
    this.v[2] = b.v[2]
};
Ovoid.Coord.prototype.equal = function (b) {
    return this.v[0] == b.v[0] && this.v[1] == b.v[1] && this.v[2] == b.v[2]
};
Ovoid.Coord.prototype.subOf = function (b, c) {
    this.v[0] = b.v[0] - c.v[0];
    this.v[1] = b.v[1] - c.v[1];
    this.v[2] = b.v[2] - c.v[2]
};
Ovoid.Coord.prototype.addOf = function (b, c) {
    this.v[0] = b.v[0] - c.v[0];
    this.v[1] = b.v[1] - c.v[1];
    this.v[2] = b.v[2] - c.v[2]
};
Ovoid.Coord.prototype.scaleBy = function (b) {
    this.v[0] *= b;
    this.v[1] *= b;
    this.v[2] *= b
};
Ovoid.Coord.prototype.transform = function (b) {
    var c = this.v[0] * b.m[1] + this.v[1] * b.m[5] + this.v[2] * b.m[9],
        e = this.v[0] * b.m[2] + this.v[1] * b.m[6] + this.v[2] * b.m[10];
    this.v[0] = this.v[0] * b.m[0] + this.v[1] * b.m[4] + this.v[2] * b.m[8];
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Coord.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Coord);
    return c
};
Ovoid.Coord.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Euler = function (b, c, e) {
    this.v = new Float32Array(3);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e)
};
Ovoid.Euler.prototype.set = function (b, c, e) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e
};
Ovoid.Euler.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Euler.prototype.copy = function (b) {
    this.v[0] = b.v[0];
    this.v[1] = b.v[1];
    this.v[2] = b.v[2]
};
Ovoid.Euler.prototype.addBy = function (b) {
    this.v[0] += b.v[0];
    this.v[1] += b.v[1];
    this.v[2] += b.v[2]
};
Ovoid.Euler.prototype.addByXyx = function (b, c, e) {
    this.v[0] += b;
    this.v[1] += c;
    this.v[2] += e
};
Ovoid.Euler.prototype.fromMat3 = function (b) {
    var c = Math.sqrt(b.m[0] * b.m[0] + b.m[1] * b.m[1]);
    0.001 < c ? (this.v[0] = Math.atan2(b.m[5], b.m[8]), this.v[1] = Math.atan2(-b.m[2], c), this.v[2] = Math.atan2(b.m[1], b.m[0])) : (this.v[0] = Math.atan2(-b.m[7], b.m[4]), this.v[1] = Math.atan2(-b.m[2], c), this.v[2] = 0)
};
Ovoid.Euler.prototype.fromMat4 = function (b) {
    var c = Math.sqrt(b.m[0] * b.m[0] + b.m[1] * b.m[1]);
    0.001 < c ? (this.v[0] = Math.atan2(b.m[6], b.m[10]), this.v[1] = Math.atan2(-b.m[2], c), this.v[2] = Math.atan2(b.m[1], b.m[0])) : (this.v[0] = Math.atan2(-b.m[9], b.m[5]), this.v[1] = Math.atan2(-b.m[2], c), this.v[2] = 0)
};
Ovoid.Euler.prototype.asMat4 = function () {
    var b = new Ovoid.Matrix4,
        c = Math.cos(this.v[0]),
        e = Math.cos(this.v[1]),
        g = Math.cos(this.v[2]),
        f = Math.sin(this.v[0]),
        h = Math.sin(this.v[1]),
        l = Math.sin(this.v[2]),
        m = c * g,
        o = c * l,
        q = f * g,
        w = f * l;
    b.m[0] = e * g;
    b.m[1] = e * l;
    b.m[2] = -h;
    b.m[4] = h * q - o;
    b.m[5] = h * w + m;
    b.m[6] = e * f;
    b.m[8] = h * m + w;
    b.m[9] = h * o - q;
    b.m[10] = e * c;
    return b
};
Ovoid.Euler.prototype.asQuat = function () {
    var b = new Ovoid.Quaternion,
        c = Math.sin(-0.5 * this.v[0]),
        e = Math.cos(-0.5 * this.v[0]),
        g = Math.sin(-0.5 * this.v[1]),
        f = Math.cos(-0.5 * this.v[1]),
        h = Math.sin(-0.5 * this.v[2]),
        l = Math.cos(-0.5 * this.v[2]),
        m = c * f,
        o = e * g,
        c = c * g,
        e = e * f;
    b.v[0] = m * l + o * h;
    b.v[1] = o * l - m * h;
    b.v[2] = e * h + c * l;
    b.v[3] = e * l - c * h;
    return b
};
Ovoid.Euler.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Euler);
    return c
};
Ovoid.Euler.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Quaternion = function (b, c, e, g) {
    this.v = new Float32Array(4);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e, this.v[3] = g)
};
Ovoid.Quaternion.prototype.set = function (b, c, e, g) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e;
    this.v[3] = g
};
Ovoid.Quaternion.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Quaternion.prototype.copy = function (b) {
    this.v.set(b.v)
};
Ovoid.Quaternion.prototype.multBy = function (b) {
    var c = this.v[3] * b.v[1] + this.v[1] * b.v[3] + this.v[2] * b.v[0] - this.v[0] * b.v[2],
        e = this.v[3] * b.v[2] + this.v[2] * b.v[3] + this.v[0] * b.v[1] - this.v[1] * b.v[0],
        g = this.v[3] * b.v[3] - this.v[0] * b.v[0] - this.v[1] * b.v[1] - this.v[2] * b.v[2];
    this.v[0] = this.v[3] * b.v[0] + this.v[0] * b.v[3] + this.v[1] * b.v[2] - this.v[2] * b.v[1];
    this.v[1] = c;
    this.v[2] = e;
    this.v[3] = g
};
Ovoid.Quaternion.prototype.multByXyzw = function (b, c, e, g) {
    var f = this.v[3] * c + this.v[1] * g + this.v[2] * b - this.v[0] * e,
        h = this.v[3] * e + this.v[2] * g + this.v[0] * c - this.v[1] * b,
        l = this.v[3] * g - this.v[0] * b - this.v[1] * c - this.v[2] * e;
    this.v[0] = this.v[3] * b + this.v[0] * g + this.v[1] * e - this.v[2] * c;
    this.v[1] = f;
    this.v[2] = h;
    this.v[3] = l
};
Ovoid.Quaternion.prototype.multOf = function (b, c) {
    this.v[0] = b.v[3] * c.v[0] + b.v[0] * c.v[3] + b.v[1] * c.v[2] - b.v[2] * c.v[1];
    this.v[1] = b.v[3] * c.v[1] + b.v[1] * c.v[3] + b.v[2] * c.v[0] - b.v[0] * c.v[2];
    this.v[2] = b.v[3] * c.v[2] + b.v[2] * c.v[3] + b.v[0] * c.v[1] - b.v[1] * c.v[0];
    this.v[3] = b.v[3] * c.v[3] - b.v[0] * c.v[0] - b.v[1] * c.v[1] - b.v[2] * c.v[2]
};
Ovoid.Quaternion.prototype.multSwapBy = function (b) {
    var c = b.v[3] * this.v[1] + b.v[1] * this.v[3] + b.v[2] * this.v[0] - b.v[0] * this.v[2],
        e = b.v[3] * this.v[2] + b.v[2] * this.v[3] + b.v[0] * this.v[1] - b.v[1] * this.v[0],
        g = b.v[3] * this.v[3] - b.v[0] * this.v[0] - b.v[1] * this.v[1] - b.v[2] * this.v[2];
    this.v[0] = b.v[3] * this.v[0] + b.v[0] * this.v[3] + b.v[1] * this.v[2] - b.v[2] * this.v[1];
    this.v[1] = c;
    this.v[2] = e;
    this.v[3] = g
};
Ovoid.Quaternion.prototype.multSwapByXyz = function (b, c, e, g) {
    var f = g * this.v[1] + c * this.v[3] + e * this.v[0] - b * this.v[2],
        h = g * this.v[2] + e * this.v[3] + b * this.v[1] - c * this.v[0],
        l = g * this.v[3] - b * this.v[0] - c * this.v[1] - e * this.v[2];
    this.v[0] = g * this.v[0] + b * this.v[3] + c * this.v[2] - e * this.v[1];
    this.v[1] = f;
    this.v[2] = h;
    this.v[3] = l
};
Ovoid.Quaternion.prototype.rotateBy = function (b) {
    var c = Math.sin(-0.5 * b.v[0]),
        e = Math.cos(-0.5 * b.v[0]),
        g = Math.sin(-0.5 * b.v[1]),
        f = Math.cos(-0.5 * b.v[1]),
        h = Math.sin(-0.5 * b.v[2]),
        b = Math.cos(-0.5 * b.v[2]),
        l = c * f,
        m = e * g,
        c = c * g,
        f = e * f,
        e = l * b + m * h,
        l = m * b - l * h,
        m = f * h + c * b,
        h = f * b - c * h,
        b = this.v[3] * l + this.v[1] * h + this.v[2] * e - this.v[0] * m,
        c = this.v[3] * m + this.v[2] * h + this.v[0] * l - this.v[1] * e,
        f = this.v[3] * h - this.v[0] * e - this.v[1] * l - this.v[2] * m;
    this.v[0] = this.v[3] * e + this.v[0] * h + this.v[1] * m - this.v[2] * l;
    this.v[1] = b;
    this.v[2] = c;
    this.v[3] =
        f
};
Ovoid.Quaternion.prototype.rotateByXyz = function (b, c, e) {
    var g = Math.sin(-0.5 * b),
        b = Math.cos(-0.5 * b),
        f = Math.sin(-0.5 * c),
        h = Math.cos(-0.5 * c),
        c = Math.sin(-0.5 * e),
        e = Math.cos(-0.5 * e),
        l = g * h,
        m = b * f,
        f = g * f,
        h = b * h,
        g = l * e + m * c,
        b = m * e - l * c,
        l = h * c + f * e,
        c = h * e - f * c,
        e = this.v[3] * b + this.v[1] * c + this.v[2] * g - this.v[0] * l,
        m = this.v[3] * l + this.v[2] * c + this.v[0] * b - this.v[1] * g,
        f = this.v[3] * c - this.v[0] * g - this.v[1] * b - this.v[2] * l;
    this.v[0] = this.v[3] * g + this.v[0] * c + this.v[1] * l - this.v[2] * b;
    this.v[1] = e;
    this.v[2] = m;
    this.v[3] = f
};
Ovoid.Quaternion.prototype.rotateSwapBy = function (b) {
    var c = Math.sin(-0.5 * b.v[0]),
        e = Math.cos(-0.5 * b.v[0]),
        g = Math.sin(-0.5 * b.v[1]),
        f = Math.cos(-0.5 * b.v[1]),
        h = Math.sin(-0.5 * b.v[2]),
        b = Math.cos(-0.5 * b.v[2]),
        l = c * f,
        m = e * g,
        c = c * g,
        f = e * f,
        e = l * b + m * h,
        l = m * b - l * h,
        m = f * h + c * b,
        h = f * b - c * h,
        b = this.v[0],
        c = this.v[1],
        f = this.v[2],
        g = this.v[3];
    this.v[0] = h * b + e * g + l * f - m * c;
    this.v[1] = h * c + l * g + m * b - e * f;
    this.v[2] = h * f + m * g + e * c - l * b;
    this.v[3] = h * g - e * b - l * c - m * f
};
Ovoid.Quaternion.prototype.rotateSwapByXyz = function (b, c, e) {
    var g = Math.sin(-0.5 * b),
        b = Math.cos(-0.5 * b),
        f = Math.sin(-0.5 * c),
        h = Math.cos(-0.5 * c),
        c = Math.sin(-0.5 * e),
        e = Math.cos(-0.5 * e),
        l = g * h,
        m = b * f,
        f = g * f,
        h = b * h,
        g = l * e + m * c,
        b = m * e - l * c,
        l = h * c + f * e,
        c = h * e - f * c,
        e = this.v[0],
        m = this.v[1],
        f = this.v[2],
        h = this.v[3];
    this.v[0] = c * e + g * h + b * f - l * m;
    this.v[1] = c * m + b * h + l * e - g * f;
    this.v[2] = c * f + l * h + g * m - b * e;
    this.v[3] = c * h - g * e - b * m - l * f
};
Ovoid.Quaternion.prototype.vectorRotateBy = function (b) {
    var c = this.v[3] * b.v[0] + 0 * this.v[0] + this.v[1] * b.v[2] - this.v[2] * b.v[1],
        e = this.v[3] * b.v[1] + 0 * this.v[1] + this.v[2] * b.v[0] - this.v[0] * b.v[2],
        g = this.v[3] * b.v[2] + 0 * this.v[2] + this.v[0] * b.v[1] - this.v[1] * b.v[0];
    this.v[3] += -0.5 * (0 * this.v[3] - this.v[0] * b.v[0] - this.v[1] * b.v[1] - this.v[2] * b.v[2]);
    this.v[0] += -0.5 * c;
    this.v[1] += -0.5 * e;
    this.v[2] += -0.5 * g
};
Ovoid.Quaternion.prototype.vectorRotateSwapBy = function (b) {
    var c = 0 * this.v[0] + b.v[0] * this.v[3] + b.v[1] * this.v[2] - b.v[2] * this.v[1],
        e = 0 * this.v[1] + b.v[1] * this.v[3] + b.v[2] * this.v[0] - b.v[0] * this.v[2],
        g = 0 * this.v[2] + b.v[2] * this.v[3] + b.v[0] * this.v[1] - b.v[1] * this.v[0];
    this.v[3] += 0.5 * (0 * this.v[3] - b.v[0] * this.v[0] - b.v[1] * this.v[1] - b.v[2] * this.v[2]);
    this.v[0] += 0.5 * c;
    this.v[1] += 0.5 * e;
    this.v[2] += 0.5 * g
};
Ovoid.Quaternion.prototype.normalize = function () {
    var b = Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2] + this.v[3] * this.v[3]);
    this.v[0] /= b;
    this.v[1] /= b;
    this.v[2] /= b;
    this.v[3] /= b
};
Ovoid.Quaternion.prototype.fromEuler = function (b) {
    var c = Math.sin(-0.5 * b.v[0]),
        e = Math.cos(-0.5 * b.v[0]),
        g = Math.sin(-0.5 * b.v[1]),
        f = Math.cos(-0.5 * b.v[1]),
        h = Math.sin(-0.5 * b.v[2]),
        b = Math.cos(-0.5 * b.v[2]),
        l = c * f,
        m = e * g,
        c = c * g,
        e = e * f;
    this.v[0] = l * b + m * h;
    this.v[1] = m * b - l * h;
    this.v[2] = e * h + c * b;
    this.v[3] = e * b - c * h
};
Ovoid.Quaternion.prototype.fromEulerXyz = function (b, c, e) {
    var g = Math.sin(-0.5 * b),
        b = Math.cos(-0.5 * b),
        f = Math.sin(-0.5 * c),
        h = Math.cos(-0.5 * c),
        c = Math.sin(-0.5 * e),
        e = Math.cos(-0.5 * e),
        l = g * h,
        m = b * f,
        g = g * f,
        b = b * h;
    this.v[0] = l * e + m * c;
    this.v[1] = m * e - l * c;
    this.v[2] = b * c + g * e;
    this.v[3] = b * e - g * c
};
Ovoid.Quaternion.prototype.fromMat4 = function (b) {
    var c = 1 + b.m[0] + b.m[5] + b.m[10];
    0.001 < c ? (c = 0.5 / Math.sqrt(c), this.v[3] = 0.25 / c, this.v[0] = (b.m[9] - b.m[6]) * c, this.v[1] = (b.m[2] - b.m[8]) * c, this.v[2] = (b.m[4] - b.m[1]) * c) : b.m[0] > b.m[5] && b.m[0] > b.m[8] ? (c = 2 * Math.sqrt(1 + b.m[0] - b.m[4] - b.m[10]), this.v[0] = 0.25 * c, this.v[1] = (b.m[1] + b.m[4]) / c, this.v[2] = (b.m[2] + b.m[8]) / c, this.v[3] = (b.m[6] - b.m[9]) / c) : b.m[4] > b.m[8] ? (c = 2 * Math.sqrt(1 + b.m[5] - b.m[0] - b.m[10]), this.v[0] = (b.m[1] + b.m[4]) / c, this.v[1] = 0.25 * c, this.v[2] = (b.m[6] + b.m[9]) /
        c, this.v[3] = (b.m[2] - b.m[8]) / c) : (c = 2 * Math.sqrt(1 + b.m[10] - b.m[0] - b.m[5]), this.v[0] = (b.m[2] + b.m[8]) / c, this.v[1] = (b.m[6] + b.m[9]) / c, this.v[2] = 0.25 * c, this.v[3] = (b.m[1] - b.m[4]) / c);
    b = Math.sqrt(this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2] + this.v[3] * this.v[3]);
    this.v[0] /= b;
    this.v[1] /= b;
    this.v[2] /= b;
    this.v[3] /= b
};
Ovoid.Quaternion.prototype.asMat4 = function () {
    var b = new Ovoid.Matrix4,
        c = this.v[0] + this.v[0],
        e = this.v[1] + this.v[1],
        g = this.v[2] + this.v[2],
        f = this.v[0] * c,
        h = this.v[0] * e,
        l = this.v[0] * g,
        m = this.v[1] * e,
        o = this.v[1] * g,
        q = this.v[1] * g,
        c = this.v[3] * c,
        e = this.v[3] * e,
        g = this.v[3] * g;
    b.m[0] = 1 - (m + q);
    b.m[1] = h - g;
    b.m[2] = l + e;
    b.m[4] = h + g;
    b.m[5] = 1 - (f + q);
    b.m[6] = o - c;
    b.m[8] = l - e;
    b.m[9] = o + c;
    b.m[10] = 1 - (f + m);
    return b
};
Ovoid.Quaternion.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Quaternion);
    return c
};
Ovoid.Quaternion.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Matrix3 = function (b) {
    this.m = new Float32Array(9);
    null != b && void 0 != b ? (this.m[0] = b[0], this.m[1] = b[1], this.m[2] = b[2], this.m[3] = b[3], this.m[4] = b[4], this.m[5] = b[5], this.m[6] = b[6], this.m[7] = b[7], this.m[8] = b[8]) : this.m[0] = this.m[4] = this[8] = 1
};
Ovoid.Matrix3.prototype.setv = function (b) {
    this.m.set(b)
};
Ovoid.Matrix3.prototype.copy = function (b) {
    this.m.set(b.m)
};
Ovoid.Matrix3.prototype.multBy = function (b) {
    var c = new Float32Array(9);
    c[0] = this.m[0] * b.m[0] + this.m[1] * b.m[3] + this.m[2] * b.m[6];
    c[1] = this.m[0] * b.m[1] + this.m[1] * b.m[4] + this.m[2] * b.m[7];
    c[2] = this.m[0] * b.m[2] + this.m[1] * b.m[5] + this.m[2] * b.m[8];
    c[3] = this.m[3] * b.m[0] + this.m[4] * b.m[3] + this.m[5] * b.m[6];
    c[4] = this.m[3] * b.m[1] + this.m[4] * b.m[4] + this.m[5] * b.m[7];
    c[5] = this.m[3] * b.m[2] + this.m[4] * b.m[5] + this.m[5] * b.m[8];
    c[6] = this.m[6] * b.m[0] + this.m[7] * b.m[3] + this.m[8] * b.m[6];
    c[7] = this.m[6] * b.m[1] + this.m[7] * b.m[4] + this.m[8] *
        b.m[7];
    c[8] = this.m[6] * b.m[2] + this.m[7] * b.m[5] + this.m[8] * b.m[8];
    this.m[0] = c[0];
    this.m[1] = c[1];
    this.m[2] = c[2];
    this.m[3] = c[3];
    this.m[4] = c[4];
    this.m[5] = c[5];
    this.m[6] = c[6];
    this.m[7] = c[7];
    this.m[8] = c[8]
};
Ovoid.Matrix3.prototype.multOf = function (b, c) {
    this.m[0] = b.m[0] * c.m[0] + b.m[1] * c.m[3] + b.m[2] * c.m[6];
    this.m[1] = b.m[0] * c.m[1] + b.m[1] * c.m[4] + b.m[2] * c.m[7];
    this.m[2] = b.m[0] * c.m[2] + b.m[1] * c.m[5] + b.m[2] * c.m[8];
    this.m[3] = b.m[3] * c.m[0] + b.m[4] * c.m[3] + b.m[5] * c.m[6];
    this.m[4] = b.m[3] * c.m[1] + b.m[4] * c.m[4] + b.m[5] * c.m[7];
    this.m[5] = b.m[3] * c.m[2] + b.m[4] * c.m[5] + b.m[5] * c.m[8];
    this.m[6] = b.m[6] * c.m[0] + b.m[7] * c.m[3] + b.m[8] * c.m[6];
    this.m[7] = b.m[6] * c.m[1] + b.m[7] * c.m[4] + b.m[8] * c.m[7];
    this.m[8] = b.m[6] * c.m[2] + b.m[7] * c.m[5] + b.m[8] *
        c.m[8]
};
Ovoid.Matrix3.prototype.fromMat4 = function (b) {
    this.m[0] = b.m[0];
    this.m[1] = b.m[1];
    this.m[2] = b.m[2];
    this.m[3] = b.m[4];
    this.m[4] = b.m[5];
    this.m[5] = b.m[6];
    this.m[6] = b.m[8];
    this.m[7] = b.m[9];
    this.m[8] = b.m[10]
};
Ovoid.Matrix3.prototype.toTranspose = function () {
    var b;
    b = this.m[1];
    this.m[1] = this.m[3];
    this.m[3] = b;
    b = this.m[2];
    this.m[2] = this.m[6];
    this.m[6] = b;
    b = this.m[5];
    this.m[5] = this.m[7];
    this.m[7] = b
};
Ovoid.Matrix3.prototype.toInverse = function () {
    var b = 1 / (this.m[0] * (this.m[4] * this.m[8] - this.m[7] * this.m[5]) - this.m[1] * (this.m[3] * this.m[8] - this.m[6] * this.m[5]) + this.m[2] * (this.m[3] * this.m[7] - this.m[6] * this.m[4])),
        c = new Float32Array(9);
    c[0] = (this.m[4] * this.m[8] - this.m[7] * this.m[5]) * b;
    c[1] = -(this.m[1] * this.m[8] - this.m[7] * this.m[2]) * b;
    c[2] = (this.m[1] * this.m[5] - this.m[4] * this.m[2]) * b;
    c[3] = -(this.m[3] * this.m[8] - this.m[6] * this.m[5]) * b;
    c[4] = (this.m[0] * this.m[8] - this.m[6] * this.m[2]) * b;
    c[5] = -(this.m[0] * this.m[5] -
        this.m[3] * this.m[2]) * b;
    c[6] = (this.m[3] * this.m[7] - this.m[6] * this.m[4]) * b;
    c[7] = -(this.m[0] * this.m[7] - this.m[6] * this.m[1]) * b;
    c[8] = (this.m[0] * this.m[4] - this.m[3] * this.m[1]) * b;
    this.m[0] = c[0];
    this.m[1] = c[1];
    this.m[2] = c[2];
    this.m[3] = c[3];
    this.m[4] = c[4];
    this.m[5] = c[5];
    this.m[6] = c[6];
    this.m[7] = c[7];
    this.m[8] = c[8]
};
Ovoid.Matrix3.prototype.toInverseTransform = function () {
    var b;
    b = this.m[1];
    this.m[1] = this.m[3];
    this.m[3] = b;
    b = this.m[2];
    this.m[2] = this.m[6];
    this.m[6] = b;
    b = this.m[5];
    this.m[5] = this.m[7];
    this.m[7] = b
};
Ovoid.Matrix3.prototype.toNormalTransform = function () {
    var b;
    b = this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2];
    1.0E-4 < Math.abs(b - 1) && (b = 1 / Math.sqrt(b), this.m[0] *= b, this.m[1] *= b, this.m[2] *= b);
    b = this.m[3] * this.m[3] + this.m[4] * this.m[4] + this.m[5] * this.m[5];
    1.0E-4 < Math.abs(b - 1) && (b = 1 / Math.sqrt(b), this.m[3] *= b, this.m[4] *= b, this.m[5] *= b);
    b = this.m[6] * this.m[6] + this.m[7] * this.m[7] + this.m[8] * this.m[8];
    1.0E-4 < Math.abs(b - 1) && (b = 1 / Math.sqrt(b), this.m[6] *= b, this.m[7] *= b, this.m[8] *= b)
};
Ovoid.Matrix3.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Matrix3);
    return c
};
Ovoid.Matrix3.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.m.length; c++) b[c] = this.m[c];
    return b
};
Ovoid.Matrix4 = function (b) {
    this.m = new Float32Array(16);
    null != b && void 0 != b ? (this.m[0] = b[0], this.m[1] = b[1], this.m[2] = b[2], this.m[3] = b[3], this.m[4] = b[4], this.m[5] = b[5], this.m[6] = b[6], this.m[7] = b[7], this.m[8] = b[8], this.m[9] = b[9], this.m[10] = b[10], this.m[11] = b[11], this.m[12] = b[12], this.m[13] = b[13], this.m[14] = b[14], this.m[15] = b[15]) : this.m[0] = this.m[5] = this.m[10] = this.m[15] = 1
};
Ovoid.Matrix4.prototype.setv = function (b) {
    this.m.set(b)
};
Ovoid.Matrix4.prototype.copy = function (b) {
    this.m.set(b.m)
};
Ovoid.Matrix4.prototype.multBy = function (b) {
    var c = new Float32Array(16);
    c[0] = this.m[0] * b.m[0] + this.m[1] * b.m[4] + this.m[2] * b.m[8] + this.m[3] * b.m[12];
    c[1] = this.m[0] * b.m[1] + this.m[1] * b.m[5] + this.m[2] * b.m[9] + this.m[3] * b.m[13];
    c[2] = this.m[0] * b.m[2] + this.m[1] * b.m[6] + this.m[2] * b.m[10] + this.m[3] * b.m[14];
    c[3] = this.m[0] * b.m[3] + this.m[1] * b.m[7] + this.m[2] * b.m[11] + this.m[3] * b.m[15];
    c[4] = this.m[4] * b.m[0] + this.m[5] * b.m[4] + this.m[6] * b.m[8] + this.m[7] * b.m[12];
    c[5] = this.m[4] * b.m[1] + this.m[5] * b.m[5] + this.m[6] * b.m[9] + this.m[7] *
        b.m[13];
    c[6] = this.m[4] * b.m[2] + this.m[5] * b.m[6] + this.m[6] * b.m[10] + this.m[7] * b.m[14];
    c[7] = this.m[4] * b.m[3] + this.m[5] * b.m[7] + this.m[6] * b.m[11] + this.m[7] * b.m[15];
    c[8] = this.m[8] * b.m[0] + this.m[9] * b.m[4] + this.m[10] * b.m[8] + this.m[11] * b.m[12];
    c[9] = this.m[8] * b.m[1] + this.m[9] * b.m[5] + this.m[10] * b.m[9] + this.m[11] * b.m[13];
    c[10] = this.m[8] * b.m[2] + this.m[9] * b.m[6] + this.m[10] * b.m[10] + this.m[11] * b.m[14];
    c[11] = this.m[8] * b.m[3] + this.m[9] * b.m[7] + this.m[10] * b.m[11] + this.m[11] * b.m[15];
    c[12] = this.m[12] * b.m[0] + this.m[13] *
        b.m[4] + this.m[14] * b.m[8] + this.m[15] * b.m[12];
    c[13] = this.m[12] * b.m[1] + this.m[13] * b.m[5] + this.m[14] * b.m[9] + this.m[15] * b.m[13];
    c[14] = this.m[12] * b.m[2] + this.m[13] * b.m[6] + this.m[14] * b.m[10] + this.m[15] * b.m[14];
    c[15] = this.m[12] * b.m[3] + this.m[13] * b.m[7] + this.m[14] * b.m[11] + this.m[15] * b.m[15];
    this.m[0] = c[0];
    this.m[1] = c[1];
    this.m[2] = c[2];
    this.m[3] = c[3];
    this.m[4] = c[4];
    this.m[5] = c[5];
    this.m[6] = c[6];
    this.m[7] = c[7];
    this.m[8] = c[8];
    this.m[9] = c[9];
    this.m[10] = c[10];
    this.m[11] = c[11];
    this.m[12] = c[12];
    this.m[13] = c[13];
    this.m[14] = c[14];
    this.m[15] = c[15]
};
Ovoid.Matrix4.prototype.multOf = function (b, c) {
    this.m[0] = b.m[0] * c.m[0] + b.m[1] * c.m[4] + b.m[2] * c.m[8] + b.m[3] * c.m[12];
    this.m[1] = b.m[0] * c.m[1] + b.m[1] * c.m[5] + b.m[2] * c.m[9] + b.m[3] * c.m[13];
    this.m[2] = b.m[0] * c.m[2] + b.m[1] * c.m[6] + b.m[2] * c.m[10] + b.m[3] * c.m[14];
    this.m[3] = b.m[0] * c.m[3] + b.m[1] * c.m[7] + b.m[2] * c.m[11] + b.m[3] * c.m[15];
    this.m[4] = b.m[4] * c.m[0] + b.m[5] * c.m[4] + b.m[6] * c.m[8] + b.m[7] * c.m[12];
    this.m[5] = b.m[4] * c.m[1] + b.m[5] * c.m[5] + b.m[6] * c.m[9] + b.m[7] * c.m[13];
    this.m[6] = b.m[4] * c.m[2] + b.m[5] * c.m[6] + b.m[6] * c.m[10] +
        b.m[7] * c.m[14];
    this.m[7] = b.m[4] * c.m[3] + b.m[5] * c.m[7] + b.m[6] * c.m[11] + b.m[7] * c.m[15];
    this.m[8] = b.m[8] * c.m[0] + b.m[9] * c.m[4] + b.m[10] * c.m[8] + b.m[11] * c.m[12];
    this.m[9] = b.m[8] * c.m[1] + b.m[9] * c.m[5] + b.m[10] * c.m[9] + b.m[11] * c.m[13];
    this.m[10] = b.m[8] * c.m[2] + b.m[9] * c.m[6] + b.m[10] * c.m[10] + b.m[11] * c.m[14];
    this.m[11] = b.m[8] * c.m[3] + b.m[9] * c.m[7] + b.m[10] * c.m[11] + b.m[11] * c.m[15];
    this.m[12] = b.m[12] * c.m[0] + b.m[13] * c.m[4] + b.m[14] * c.m[8] + b.m[15] * c.m[12];
    this.m[13] = b.m[12] * c.m[1] + b.m[13] * c.m[5] + b.m[14] * c.m[9] + b.m[15] * c.m[13];
    this.m[14] = b.m[12] * c.m[2] + b.m[13] * c.m[6] + b.m[14] * c.m[10] + b.m[15] * c.m[14];
    this.m[15] = b.m[12] * c.m[3] + b.m[13] * c.m[7] + b.m[14] * c.m[11] + b.m[15] * c.m[15]
};
Ovoid.Matrix4.prototype.fromMatrix3 = function (b) {
    this.m[0] = b.m[0];
    this.m[1] = b.m[1];
    this.m[2] = b.m[2];
    this.m[4] = b.m[3];
    this.m[5] = b.m[4];
    this.m[6] = b.m[5];
    this.m[8] = b.m[6];
    this.m[9] = b.m[7];
    this.m[10] = b.m[8]
};
Ovoid.Matrix4.prototype.toTranspose = function () {
    var b;
    b = this.m[1];
    this.m[1] = this.m[4];
    this.m[4] = b;
    b = this.m[2];
    this.m[2] = this.m[8];
    this.m[8] = b;
    b = this.m[6];
    this.m[6] = this.m[9];
    this.m[9] = b;
    b = this.m[3];
    this.m[3] = this.m[12];
    this.m[12] = b;
    b = this.m[7];
    this.m[7] = this.m[13];
    this.m[13] = b;
    b = this.m[11];
    this.m[11] = this.m[14];
    this.m[14] = b
};
Ovoid.Matrix4.prototype.toInverse = function () {
    var b = new Float32Array(12);
    b[0] = this.m[0] * this.m[5] - this.m[1] * this.m[4];
    b[1] = this.m[0] * this.m[6] - this.m[2] * this.m[4];
    b[2] = this.m[0] * this.m[7] - this.m[3] * this.m[4];
    b[3] = this.m[1] * this.m[6] - this.m[2] * this.m[5];
    b[4] = this.m[1] * this.m[7] - this.m[3] * this.m[5];
    b[5] = this.m[2] * this.m[7] - this.m[3] * this.m[6];
    b[11] = this.m[8] * this.m[13] - this.m[9] * this.m[12];
    b[10] = this.m[8] * this.m[14] - this.m[10] * this.m[12];
    b[9] = this.m[8] * this.m[15] - this.m[11] * this.m[12];
    b[8] = this.m[9] *
        this.m[14] - this.m[10] * this.m[13];
    b[7] = this.m[9] * this.m[15] - this.m[11] * this.m[13];
    b[6] = this.m[10] * this.m[15] - this.m[11] * this.m[14];
    var c = 1 / (b[0] * b[6] - b[1] * b[7] + b[2] * b[8] + b[3] * b[9] - b[4] * b[10] + b[5] * b[11]),
        e = new Float32Array(16);
    e[0] = +this.m[5] * b[6] - this.m[6] * b[7] + this.m[7] * b[8];
    e[4] = -this.m[4] * b[6] + this.m[6] * b[9] - this.m[7] * b[10];
    e[8] = +this.m[4] * b[7] - this.m[5] * b[9] + this.m[7] * b[11];
    e[12] = -this.m[4] * b[8] + this.m[5] * b[10] - this.m[6] * b[11];
    e[1] = -this.m[1] * b[6] + this.m[2] * b[7] - this.m[3] * b[8];
    e[5] = +this.m[0] *
        b[6] - this.m[2] * b[9] + this.m[3] * b[10];
    e[9] = -this.m[0] * b[7] + this.m[1] * b[9] - this.m[3] * b[11];
    e[13] = +this.m[0] * b[8] - this.m[1] * b[10] + this.m[2] * b[11];
    e[2] = +this.m[13] * b[5] - this.m[14] * b[4] + this.m[15] * b[3];
    e[6] = -this.m[12] * b[5] + this.m[14] * b[2] - this.m[15] * b[1];
    e[10] = +this.m[12] * b[4] - this.m[13] * b[2] + this.m[15] * b[0];
    e[14] = -this.m[12] * b[3] + this.m[13] * b[1] - this.m[14] * b[0];
    e[3] = -this.m[9] * b[5] + this.m[10] * b[4] - this.m[11] * b[3];
    e[7] = +this.m[8] * b[5] - this.m[10] * b[2] + this.m[11] * b[1];
    e[11] = -this.m[8] * b[4] + this.m[9] * b[2] -
        this.m[11] * b[0];
    e[15] = +this.m[8] * b[3] - this.m[9] * b[1] + this.m[10] * b[0];
    e[0] *= c;
    e[1] *= c;
    e[2] *= c;
    e[3] *= c;
    e[4] *= c;
    e[5] *= c;
    e[6] *= c;
    e[7] *= c;
    e[8] *= c;
    e[9] *= c;
    e[10] *= c;
    e[11] *= c;
    e[12] *= c;
    e[13] *= c;
    e[14] *= c;
    e[15] *= c;
    this.m[0] = e[0];
    this.m[1] = e[1];
    this.m[2] = e[2];
    this.m[3] = e[3];
    this.m[4] = e[4];
    this.m[5] = e[5];
    this.m[6] = e[6];
    this.m[7] = e[7];
    this.m[8] = e[8];
    this.m[9] = e[9];
    this.m[10] = e[10];
    this.m[11] = e[11];
    this.m[12] = e[12];
    this.m[13] = e[13];
    this.m[14] = e[14];
    this.m[15] = e[15]
};
Ovoid.Matrix4.prototype.toInverseTransform = function () {
    var b;
    b = this.m[1];
    this.m[1] = this.m[4];
    this.m[4] = b;
    b = this.m[2];
    this.m[2] = this.m[8];
    this.m[8] = b;
    b = this.m[6];
    this.m[6] = this.m[9];
    this.m[9] = b;
    b = -this.m[12];
    var c = -this.m[13],
        e = -this.m[14];
    this.m[12] = b * this.m[0] + c * this.m[4] + e * this.m[8];
    this.m[13] = b * this.m[1] + c * this.m[5] + e * this.m[9];
    this.m[14] = b * this.m[2] + c * this.m[6] + e * this.m[10]
};
Ovoid.Matrix4.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Matrix4);
    return c
};
Ovoid.Matrix4.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.m.length; c++) b[c] = this.m[c];
    return b
};
Ovoid.Color = function (b, c, e, g) {
    this.v = new Float32Array(4);
    void 0 != b && (this.v[0] = b, this.v[1] = c, this.v[2] = e, this.v[3] = g)
};
Ovoid.Color.prototype.set = function (b, c, e, g) {
    this.v[0] = b;
    this.v[1] = c;
    this.v[2] = e;
    this.v[3] = g
};
Ovoid.Color.prototype.setv = function (b) {
    this.v.set(b)
};
Ovoid.Color.prototype.copy = function (b) {
    this.v[0] = b.v[0];
    this.v[1] = b.v[1];
    this.v[2] = b.v[2];
    this.v[3] = b.v[3]
};
Ovoid.Color.prototype.equal = function (b) {
    return this.v[0] == b.v[0] && this.v[1] == b.v[1] && this.v[2] == b.v[2] && this.v[3] == b.v[3]
};
Ovoid.Color.prototype.asInt = function () {
    return 0 | 255 * this.v[0] << 16 | 255 * this.v[1] << 8 | 255 * this.v[2]
};
Ovoid.Color.prototype.fromInt = function (b) {
    this.v[0] = (b >> 16 & 255) / 255;
    this.v[1] = (b >> 8 & 255) / 255;
    this.v[2] = (b & 255) / 255;
    this.v[3] = 1
};
Ovoid.Color.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Color);
    return c
};
Ovoid.Color.prototype.toJSON = function () {
    for (var b = [], c = 0; c < this.v.length; c++) b[c] = this.v[c];
    return b
};
Ovoid.Vertex = function () {
    this.p = new Ovoid.Point;
    this.n = new Ovoid.Vector;
    this.u = new Ovoid.Coord;
    this.t = new Ovoid.Vector;
    this.b = new Ovoid.Vector;
    this.c = new Ovoid.Color;
    this.i = new Ovoid.Point(-1, -1, -1, -1);
    this.w = new Ovoid.Point(0, 0, 0, 0)
};
Ovoid.Vertex.prototype.copy = function (b) {
    this.p.copy(b.p);
    this.n.copy(b.n);
    this.u.copy(b.u);
    this.t.copy(b.t);
    this.b.copy(b.b);
    this.c.copy(b.c);
    this.i.copy(b.i);
    this.w.copy(b.w)
};
Ovoid.Vertex.prototype.equal = function (b) {
    return this.p.equal(b.p) && this.n.equal(b.n) && this.u.equal(b.u) && this.c.equal(b.c) ? !0 : !1
};
Ovoid.Vertex.prototype.fromFloat32Array = function (b, c) {
    stride = 0;
    b & Ovoid.VERTEX_VEC4_P && (this.p.setv(c.subarray(stride, stride + 4)), stride += 4);
    b & Ovoid.VERTEX_VEC3_N && (this.n.setv(c.subarray(stride, stride + 3)), stride += 3);
    b & Ovoid.VERTEX_VEC3_U && (this.u.setv(c.subarray(stride, stride + 3)), stride += 3);
    b & Ovoid.VERTEX_VEC3_T && (this.t.setv(c.subarray(stride, stride + 3)), stride += 3);
    b & Ovoid.VERTEX_VEC3_B && (this.b.setv(c.subarray(stride, stride + 3)), stride += 3);
    b & Ovoid.VERTEX_VEC4_C && (this.c.setv(c.subarray(stride, stride +
        4)), stride += 4);
    b & Ovoid.VERTEX_VEC4_I && (this.i.setv(c.subarray(stride, stride + 4)), stride += 4);
    b & Ovoid.VERTEX_VEC4_W && (this.w.setv(c.subarray(stride, stride + 4)), stride += 4)
};
Ovoid.Vertex.prototype.asFloat32Array = function (b) {
    var c = 0;
    b & Ovoid.VERTEX_VEC4_P && (c += 4);
    b & Ovoid.VERTEX_VEC3_N && (c += 3);
    b & Ovoid.VERTEX_VEC3_U && (c += 3);
    b & Ovoid.VERTEX_VEC3_T && (c += 3);
    b & Ovoid.VERTEX_VEC3_B && (c += 3);
    b & Ovoid.VERTEX_VEC4_C && (c += 4);
    b & Ovoid.VERTEX_VEC4_I && (c += 4);
    b & Ovoid.VERTEX_VEC4_W && (c += 4);
    var c = new Float32Array(c),
        e = 0;
    b & Ovoid.VERTEX_VEC4_P && (c.set(this.p.v, e), e += 4);
    b & Ovoid.VERTEX_VEC3_N && (c.set(this.n.v, e), e += 3);
    b & Ovoid.VERTEX_VEC3_U && (c.set(this.u.v, e), e += 3);
    b & Ovoid.VERTEX_VEC3_T && (c.set(this.t.v,
        e), e += 3);
    b & Ovoid.VERTEX_VEC3_B && (c.set(this.b.v, e), e += 3);
    b & Ovoid.VERTEX_VEC4_C && (c.set(this.c.v, e), e += 4);
    b & Ovoid.VERTEX_VEC4_I && (c.set(this.i.v, e), e += 4);
    b & Ovoid.VERTEX_VEC4_W && c.set(this.w.v, e);
    return c
};
Ovoid.Vertex.getFormatStride = function (b) {
    var c = 0;
    b & Ovoid.VERTEX_VEC4_P && (c += 4);
    b & Ovoid.VERTEX_VEC3_N && (c += 3);
    b & Ovoid.VERTEX_VEC3_U && (c += 3);
    b & Ovoid.VERTEX_VEC3_T && (c += 3);
    b & Ovoid.VERTEX_VEC3_B && (c += 3);
    b & Ovoid.VERTEX_VEC4_C && (c += 4);
    b & Ovoid.VERTEX_VEC4_I && (c += 4);
    b & Ovoid.VERTEX_VEC4_W && (c += 4);
    return c
};
Ovoid.Vertex.getFormatSize = function (b) {
    var c = 0;
    b & Ovoid.VERTEX_VEC4_P && (c += 4);
    b & Ovoid.VERTEX_VEC3_N && (c += 3);
    b & Ovoid.VERTEX_VEC3_U && (c += 3);
    b & Ovoid.VERTEX_VEC3_T && (c += 3);
    b & Ovoid.VERTEX_VEC3_B && (c += 3);
    b & Ovoid.VERTEX_VEC4_C && (c += 4);
    b & Ovoid.VERTEX_VEC4_I && (c += 4);
    b & Ovoid.VERTEX_VEC4_W && (c += 4);
    return 4 * c
};
Ovoid.Vertex.pack = function (b, c) {
    for (var e = c.length, g = Ovoid.Vertex.getFormatStride(b), g = Array(e * g), f = 0, h = 0; h < e; h++) b & Ovoid.VERTEX_VEC4_P && (g[f] = c[h].p.v[0], f++, g[f] = c[h].p.v[1], f++, g[f] = c[h].p.v[2], f++, g[f] = c[h].p.v[3], f++), b & Ovoid.VERTEX_VEC3_N && (g[f] = c[h].n.v[0], f++, g[f] = c[h].n.v[1], f++, g[f] = c[h].n.v[2], f++), b & Ovoid.VERTEX_VEC3_U && (g[f] = c[h].u.v[0], f++, g[f] = c[h].u.v[1], f++, g[f] = c[h].u.v[2], f++), b & Ovoid.VERTEX_VEC3_T && (g[f] = c[h].t.v[0], f++, g[f] = c[h].t.v[1], f++, g[f] = c[h].t.v[2], f++), b & Ovoid.VERTEX_VEC3_B &&
        (g[f] = c[h].b.v[0], f++, g[f] = c[h].b.v[1], f++, g[f] = c[h].b.v[2], f++), b & Ovoid.VERTEX_VEC4_C && (g[f] = c[h].c.v[0], f++, g[f] = c[h].c.v[1], f++, g[f] = c[h].c.v[2], f++, g[f] = c[h].c.v[3], f++), b & Ovoid.VERTEX_VEC4_I && (g[f] = c[h].i.v[0], f++, g[f] = c[h].i.v[1], f++, g[f] = c[h].i.v[2], f++, g[f] = c[h].i.v[3], f++), b & Ovoid.VERTEX_VEC4_W && (g[f] = c[h].w.v[0], f++, g[f] = c[h].w.v[1], f++, g[f] = c[h].w.v[2], f++, g[f] = c[h].w.v[3], f++);
    return g
};
Ovoid.Vertex.upack = function (b, c) {
    for (var e = Ovoid.Vertex.getFormatStride(b), e = c.length / e, g = Ovoid.Vertex.newArray(e), f = 0, h = 0; h < e; h++) b & Ovoid.VERTEX_VEC4_P && (g[h].p.v[0] = c[f], f++, g[h].p.v[1] = c[f], f++, g[h].p.v[2] = c[f], f++, g[h].p.v[3] = c[f], f++), b & Ovoid.VERTEX_VEC3_N && (g[h].n.v[0] = c[f], f++, g[h].n.v[1] = c[f], f++, g[h].n.v[2] = c[f], f++), b & Ovoid.VERTEX_VEC3_U && (g[h].u.v[0] = c[f], f++, g[h].u.v[1] = c[f], f++, g[h].u.v[2] = c[f], f++), b & Ovoid.VERTEX_VEC3_T && (g[h].t.v[0] = c[f], f++, g[h].t.v[1] = c[f], f++, g[h].t.v[2] = c[f], f++),
    b & Ovoid.VERTEX_VEC3_B && (g[h].b.v[0] = c[f], f++, g[h].b.v[1] = c[f], f++, g[h].b.v[2] = c[f], f++), b & Ovoid.VERTEX_VEC4_C && (g[h].c.v[0] = c[f], f++, g[h].c.v[1] = c[f], f++, g[h].c.v[2] = c[f], f++, g[h].c.v[3] = c[f], f++), b & Ovoid.VERTEX_VEC4_I && (g[h].i.v[0] = c[f], f++, g[h].i.v[1] = c[f], f++, g[h].i.v[2] = c[f], f++, g[h].i.v[3] = c[f], f++), b & Ovoid.VERTEX_VEC4_W && (g[h].w.v[0] = c[f], f++, g[h].w.v[1] = c[f], f++, g[h].w.v[2] = c[f], f++, g[h].w.v[3] = c[f], f++);
    return g
};
Ovoid.Vertex.bufferize = function (b, c) {
    var e = c.length,
        g, f, h, l, m, o, q, w, v = 0;
    b & Ovoid.VERTEX_VEC4_P && (g = v, v += 4);
    b & Ovoid.VERTEX_VEC3_N && (f = v, v += 3);
    b & Ovoid.VERTEX_VEC3_U && (h = v, v += 3);
    b & Ovoid.VERTEX_VEC3_T && (l = v, v += 3);
    b & Ovoid.VERTEX_VEC3_B && (m = v, v += 3);
    b & Ovoid.VERTEX_VEC4_C && (o = v, v += 4);
    b & Ovoid.VERTEX_VEC4_I && (q = v, v += 4);
    b & Ovoid.VERTEX_VEC4_W && (w = v, v += 4);
    var x = new Float32Array(e * v),
        r;
    if (b & Ovoid.VERTEX_VEC4_P)
        for (r = 0; r < e; r++) x.set(c[r].p.v, r * v + g);
    if (b & Ovoid.VERTEX_VEC3_N)
        for (r = 0; r < e; r++) x.set(c[r].n.v, r * v + f);
    if (b &
        Ovoid.VERTEX_VEC3_U)
        for (r = 0; r < e; r++) x.set(c[r].u.v, r * v + h);
    if (b & Ovoid.VERTEX_VEC3_T)
        for (r = 0; r < e; r++) x.set(c[r].t.v, r * v + l);
    if (b & Ovoid.VERTEX_VEC3_B)
        for (r = 0; r < e; r++) x.set(c[r].b.v, r * v + m);
    if (b & Ovoid.VERTEX_VEC4_C)
        for (r = 0; r < e; r++) x.set(c[r].c.v, r * v + o);
    if (b & Ovoid.VERTEX_VEC4_I)
        for (r = 0; r < e; r++) x.set(c[r].i.v, r * v + q);
    if (b & Ovoid.VERTEX_VEC4_W)
        for (r = 0; r < e; r++) x.set(c[r].w.v, r * v + w);
    return x
};
Ovoid.Vertex.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Vertex);
    return c
};
Ovoid.Vertex.prototype.toJSON = function () {
    var b = Array(8);
    b[0] = this.p;
    b[1] = this.n;
    b[2] = this.u;
    b[3] = this.t;
    b[4] = this.b;
    b[5] = this.c;
    b[6] = this.i;
    b[7] = this.w;
    return b
};
Ovoid.Triangle = function () {
    this.index = new Uint16Array(3);
    this.normal = new Ovoid.Vector;
    this.center = new Ovoid.Point;
    this.adjacent = new Int16Array([-1, -1, -1]);
    this.equation = 0
};
Ovoid.Triangle.prototype.copy = function (b) {
    this.index.set(b.index);
    this.normal.copy(b.normal);
    this.center.copy(b.center);
    this.adjacent.set(b.adjacent);
    this.equation = b.equation
};
Ovoid.Triangle.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Triangle);
    return c
};
Ovoid.Triangle.arrayAsIbo = function (b) {
    var c = b.length,
        e = new Uint16Array(3 * c),
        g;
    for (g = 0; g < c; g++) e.set(b[g].index, 3 * g);
    return e
};
Ovoid.Triangle.prototype.toJSON = function () {
    var b = Array(6);
    b[0] = this.index[0];
    b[1] = this.index[1];
    b[2] = this.index[2];
    b[3] = this.adjacent[0];
    b[4] = this.adjacent[1];
    b[5] = this.adjacent[2];
    return b
};
Ovoid.Particle = function () {
    this.p = new Ovoid.Point;
    this.c = new Ovoid.Color;
    this.u = new Ovoid.Coord;
    this.v = new Ovoid.Vector;
    this.l = 0
};
Ovoid.Particle.prototype.bufferCopy = function (b, c) {
    b[c] = this.p.v[0];
    c++;
    b[c] = this.p.v[1];
    c++;
    b[c] = this.p.v[2];
    c++;
    b[c] = 1;
    c++;
    b[c] = this.u.v[0];
    c++;
    b[c] = this.u.v[1];
    c++;
    b[c] = this.u.v[2];
    c++;
    b[c] = this.c.v[0];
    c++;
    b[c] = this.c.v[1];
    c++;
    b[c] = this.c.v[2];
    c++;
    b[c] = this.c.v[3]
};
Ovoid.Particle.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Particle);
    return c
};
Ovoid.Particle.arrayAsVbo = function (b) {
    var c = b.length,
        e = 0,
        g = new Float32Array(11 * c);
    for (i = 0; i < c; i++) 0 < b[i].l && (g.set(b[i].p.v, 11 * e), g.set(b[i].u.v, 11 * e + 4), g.set(b[i].c.v, 11 * e + 7), e++);
    return g
};
Ovoid.Polyset = function () {
    this.icount = this.ioffset = 0;
    this.material = null
};
Ovoid.Polyset.prototype.toJSON = function () {
    var b = Array(3);
    b[0] = this.ioffset;
    b[1] = this.icount;
    b[2] = this.material ? this.material.uid : "null";
    return b
};
Ovoid.Boundingbox = function () {
    this.min = new Ovoid.Point(-0.05, -0.05, -0.05, 1);
    this.max = new Ovoid.Point(0.05, 0.05, 0.05, 1);
    this.hsize = new Ovoid.Vector(0.1, 0.1, 0.1);
    this.center = new Ovoid.Point(0, 0, 0, 1);
    this.worldCenter = new Ovoid.Point(0, 0, 0, 1)
};
Ovoid.Boundingbox.prototype.copy = function (b) {
    this.hsize.copy(b.hsize);
    this.min.copy(b.min);
    this.max.copy(b.max);
    this.center.copy(b.center)
};
Ovoid.Boundingbox.prototype.setBound = function (b, c) {
    this.min.copy(b);
    this.max.copy(c);
    this.hsize.set(0.5 * (c.v[0] - b.v[0]), 0.5 * (c.v[1] - b.v[1]), 0.5 * (c.v[2] - b.v[2]));
    this.center.set(this.hsize.v[0] + this.min.v[0], this.hsize.v[1] + this.min.v[1], this.hsize.v[2] + this.min.v[2], 1)
};
Ovoid.Boundingbox.prototype.transform = function (b) {
    this.worldCenter.transform4Of(this.center, b)
};
Ovoid.Boundingbox.prototype.axisProject = function (b, c) {
    return this.hsize.v[0] * Math.abs(b.v[0] * c.m[0] + b.v[1] * c.m[1] + b.v[2] * c.m[2]) + this.hsize.v[1] * Math.abs(b.v[0] * c.m[4] + b.v[1] * c.m[5] + b.v[2] * c.m[6]) + this.hsize.v[2] * Math.abs(b.v[0] * c.m[8] + b.v[1] * c.m[9] + b.v[2] * c.m[10])
};
Ovoid.Boundingsphere = function () {
    this.radius = 0.1;
    this.center = new Ovoid.Point(0, 0, 0, 1);
    this.worldCenter = new Ovoid.Point(0, 0, 0, 1)
};
Ovoid.Boundingsphere.prototype.copy = function (b) {
    this.radius = b.radius;
    this.center.copy(b.center)
};
Ovoid.Boundingsphere.prototype.setBound = function (b, c) {
    this.center.set(0.5 * (c.v[0] - b.v[0]) + b.v[0], 0.5 * (c.v[1] - b.v[1]) + b.v[1], 0.5 * (c.v[2] - b.v[2]) + b.v[2], 1);
    this.radius = 0;
    var e;
    e = c.dist(this.center);
    if (e > this.radius) this.radius = e;
    e = b.dist(this.center);
    if (e > this.radius) this.radius = e
};
Ovoid.Boundingsphere.prototype.setRadius = function (b) {
    this.radius = b
};
Ovoid.Boundingsphere.prototype.transform = function (b) {
    this.worldCenter.transform4Of(this.center, b)
};
Ovoid.Cspline = function (b, c) {
    this._x = b;
    this._y = c;
    this._n = b.length;
    this._d = this._t = 0;
    this._i = this._n;
    this._e = 2 * this._n - 1;
    this._stop = !1;
    this._y3 = this._y2 = this._y1 = this._y0 = this._p = 0;
    this.seekStart(!1, 0)
};
Ovoid.Cspline.prototype.seekStart = function (b, c) {
    this._i = this._n;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._t = c;
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    if (b) this._y0 = this._y[(this._i - 1) % this._n], this._y3 = this._y[(this._i + 2) % this._n];
    this._p = this._t / this._d
};
Ovoid.Cspline.prototype.seekEnd = function (b, c) {
    this._i = this._e - 1;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    this._t = this._d + c;
    if (b) this._y0 = this._y[(this._i - 1) % this._n], this._y3 = this._y[(this._i + 2) % this._n];
    this._p = this._t / this._d
};
Ovoid.Cspline.prototype.seekForward = function (b, c) {
    this._t += c;
    if (this._t >= this._d) {
        for (; this._t >= this._d;) {
            this._i++;
            if (this._i > this._e - 1) {
                this._stop = !0;
                return
            }
            this._t -= this._d;
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n]
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._y0 = this._y[(this._i - 1) % this._n], this._y3 = this._y[(this._i + 2) % this._n]
    }
    this._p = this._t / this._d
};
Ovoid.Cspline.prototype.seekBackward = function (b, c) {
    this._t += c;
    if (0 >= this._t) {
        for (; 0 >= this._t;) {
            this._i--;
            if (this._i < this._n) {
                this._stop = !0;
                return
            }
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
            this._t += this._d
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._y0 = this._y[(this._i - 1) % this._n], this._y3 = this._y[(this._i + 2) % this._n]
    }
    this._p = this._t / this._d
};
Ovoid.Cspline.prototype.getOutput = function (b) {
    if (b) {
        var b = this._p * this._p,
            c = this._y3 - this._y2 - this._y0 + this._y1;
        return c * this._p * b + (this._y0 - this._y1 - c) * b + (this._y2 - this._y0) * this._p + this._y1
    }
    return this._y1 + (this._y2 - this._y1) * this._p
};
Ovoid.Cspline.prototype.toJSON = function () {
    for (var b = {
        t: "Cspline",
        x: []
    }, c = 0; c < this._x.length; c++) b.x[c] = this._x[c];
    b.y = [];
    for (c = 0; c < this._y.length; c++) b.y[c] = this._y[c];
    b.n = this._n;
    return b
};
Ovoid.Hspline = function (b, c, e) {
    this._x = b;
    this._y = c;
    this._v = e;
    this._n = b.length;
    this._nv = e.length;
    this._d = this._t = 0;
    this._i = this._n;
    this._e = 2 * this._n - 1;
    this._stop = !1;
    this._y2 = this._y1 = this._v2 = this._v1 = this._p = 0;
    this.seekStart(!1, 0)
};
Ovoid.Hspline.prototype.seekStart = function (b, c) {
    this._i = this._n;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._t = c;
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    if (b) this._v1 = this._v[(2 * this._i + 1) % this._nv], this._v2 = this._v[(2 * this._i + 2) % this._nv];
    this._p = this._t / this._d
};
Ovoid.Hspline.prototype.seekEnd = function (b, c) {
    this._i = this._e - 1;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    this._t = this._d + c;
    if (b) this._v1 = this._v[(2 * this._i + 1) % this._nv], this._v2 = this._v[(2 * this._i + 2) % this._nv];
    this._p = this._t / this._d
};
Ovoid.Hspline.prototype.seekForward = function (b, c) {
    this._t += c;
    if (this._t > this._d) {
        for (; this._t >= this._d;) {
            this._i++;
            if (this._i > this._e - 1) {
                this._stop = !0;
                return
            }
            this._t -= this._d;
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n]
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._v1 = this._v[(2 * this._i + 1) % this._nv], this._v2 = this._v[(2 * this._i + 2) % this._nv]
    }
    this._p = this._t / this._d
};
Ovoid.Hspline.prototype.seekBackward = function (b, c) {
    this._t += c;
    if (0 > this._t) {
        for (; 0 >= this._t;) {
            this._i--;
            if (this._i < this._n) {
                this._stop = !0;
                return
            }
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
            this._t += this._d
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._v1 = this._v[(2 * this._i + 1) % this._nv], this._v2 = this._v[(2 * this._i + 2) % this._nv]
    }
    this._p = this._t / this._d
};
Ovoid.Hspline.prototype.getOutput = function (b) {
    if (b) {
        var b = this._p * this._p,
            c = b * this._p;
        return (2 * c - 3 * b + 1) * this._y1 + (-2 * c + 3 * b) * this._y2 + (c - 2 * b + this._p) * this._v1 + (c - b) * this._v2
    }
    return this._y1 + (this._y2 - this._y1) * this._p
};
Ovoid.Hspline.prototype.toJSON = function () {
    for (var b = {
        t: "Hspline",
        x: []
    }, c = 0; c < this._x.length; c++) b.x[c] = this._x[c];
    b.y = [];
    for (c = 0; c < this._y.length; c++) b.y[c] = this._y[c];
    b.v = [];
    for (c = 0; c < this._v.length; c++) b.v[c] = this._v[c];
    b.n = this._n;
    b.nv = this._nv;
    return b
};
Ovoid.Bspline = function (b, c, e, g) {
    this._x = b;
    this._y = c;
    this._cx = e;
    this._cy = g;
    this._n = b.length;
    this._nc = e.length;
    this._d = this._t = 0;
    this._i = this._n;
    this._e = 2 * this._n - 1;
    this._stop = !1;
    this._y2 = this._y1 = this._c2 = this._c1 = this._u2 = this._u1 = this._p = 0;
    for (b = this._n; b < this._e;) c = this._x[(b + 1) % this._n] - this._x[b % this._n], this._cx[(2 * b + 1) % this._nc] = (this._cx[(2 * b + 1) % this._nc] - this._x[b % this._n]) / c, this._cx[(2 * b + 2) % this._nc] = (this._cx[(2 * b + 2) % this._nc] - this._x[b % this._n]) / c, b++;
    this.seekStart(!1, 0)
};
Ovoid.Bspline.prototype.seekStart = function (b, c) {
    this._i = this._n;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._t = c;
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    if (b) this._c1 = this._cy[(2 * this._i + 1) % this._nc], this._c2 = this._cy[(2 * this._i + 2) % this._nc], this._u1 = this._cx[(2 * this._i + 1) % this._nc], this._u2 = this._cx[(2 * this._i + 2) % this._nc];
    this._p = this._t / this._d
};
Ovoid.Bspline.prototype.seekEnd = function (b, c) {
    this._i = this._e - 1;
    this._y1 = this._y[this._i % this._n];
    this._y2 = this._y[(this._i + 1) % this._n];
    this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
    this._t = this._d + c;
    if (b) this._c1 = this._cy[(2 * this._i + 1) % this._nc], this._c2 = this._cy[(2 * this._i + 2) % this._nc], this._u1 = this._cx[(2 * this._i + 1) % this._nc], this._u2 = this._cx[(2 * this._i + 2) % this._nc];
    this._p = this._t / this._d
};
Ovoid.Bspline.prototype.seekForward = function (b, c) {
    this._t += c;
    if (this._t > this._d) {
        for (; this._t >= this._d;) {
            this._i++;
            if (this._i > this._e - 1) {
                this._stop = !0;
                return
            }
            this._t -= this._d;
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n]
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._c1 = this._cy[(2 * this._i + 1) % this._nc], this._c2 = this._cy[(2 * this._i + 2) % this._nc], this._u1 = this._cx[(2 * this._i + 1) % this._nc], this._u2 = this._cx[(2 * this._i + 2) % this._nc]
    }
    this._p = this._t / this._d
};
Ovoid.Bspline.prototype.seekBackward = function (b, c) {
    this._t += c;
    if (0 > this._t) {
        for (; 0 >= this._t;) {
            this._i--;
            if (this._i < this._n + 1) {
                this._stop = !0;
                return
            }
            this._d = this._x[(this._i + 1) % this._n] - this._x[this._i % this._n];
            this._t += this._d
        }
        this._y1 = this._y[this._i % this._n];
        this._y2 = this._y[(this._i + 1) % this._n];
        if (b) this._c1 = this._cy[(2 * this._i + 1) % this._nc], this._c2 = this._cy[(2 * this._i + 2) % this._nc], this._u1 = this._cx[(2 * this._i + 1) % this._nc], this._u2 = this._cx[(2 * this._i + 2) % this._nc]
    }
    this._p = this._t / this._d
};
Ovoid.Bspline.prototype.getOutput = function (b) {
    return b ? (b = 3 * this._u1 * this._p * Math.pow(1 - this._p, 2) + 3 * this._u2 * Math.pow(this._p, 2) * (1 - this._p) + 1 * Math.pow(this._p, 3), this._y1 * Math.pow(1 - b, 3) + 3 * this._c1 * b * Math.pow(1 - b, 2) + 3 * this._c2 * Math.pow(b, 2) * (1 - b) + this._y2 * Math.pow(b, 3)) : this._y1 + (this._y2 - this._y1) * this._p
};
Ovoid.Bspline.prototype.toJSON = function () {
    for (var b = {
        t: "Bspline",
        x: []
    }, c = 0; c < this._x.length; c++) b.x[c] = this._x[c];
    b.y = [];
    for (c = 0; c < this._y.length; c++) b.y[c] = this._y[c];
    b.cx = [];
    for (c = 0; c < this._cx.length; c++) b.cx[c] = this._cx[c];
    b.cy = [];
    for (c = 0; c < this._cy.length; c++) b.cy[c] = this._cy[c];
    b.n = this._n;
    b.nc = this._nc;
    return b
};
Ovoid.Shader = function (b) {
    this.name = b;
    this.progstat = this.fragstat = this.vertstat = this.wrapsource = this.fragsource = this.vertsource = this.wrapurl = this.fragurl = this.verturl = "";
    this.proghandle = this.fraghandle = this.verthandle = -1;
    this.linkStatus = !1;
    this.attribute = Array(Ovoid.MAX_VERTEX_ATTRIB);
    for (b = 0; b < Ovoid.MAX_VERTEX_ATTRIB; b++) this.attribute[b] = -1;
    this.attrsize = new Uint16Array(Ovoid.MAX_VERTEX_ATTRIB);
    this.uniform = Array(Ovoid.MAX_UNIFORM);
    for (b = 0; b < Ovoid.MAX_UNIFORM; b++) this.uniform[b] = -1;
    this.uniformMatrix =
        Array(Ovoid.MAX_UNIFORM_MATRIX);
    for (b = 0; b < Ovoid.MAX_UNIFORM_MATRIX; b++) this.uniformMatrix[b] = -1;
    this.uniformSampler = Array(Ovoid.MAX_UNIFORM_SAMPLER);
    for (b = 0; b < Ovoid.MAX_UNIFORM_SAMPLER; b++) this.uniformSampler[b] = -1;
    this.outFragment = Array(Ovoid.MAX_OUT_FRAGMENT);
    for (b = 0; b < Ovoid.MAX_OUT_FRAGMENT; b++) this.outFragment[b] = -1;
    this._wmlstatus = this._fslstatus = this._vslstatus = this.loadStatus = 0
};
Ovoid.Shader.prototype._handleLoad = function () {
    Ovoid.al ? 311 < this.response.byteLength ? (this.owner._albuffer = Ovoid.al.createBuffer(this.response, !1), this.owner.loadStatus = 1) : (Ovoid.log(2, "Ovoid.Shader", "'" + this.owner.name + "' unable to load '" + this.owner.src + "'"), this.owner._albuffer = Ovoid.al.createBuffer(1, 1, 22050), this.owner.loadStatus = -1) : this.owner.loadStatus = 1
};
Ovoid.Shader.prototype._handleError = function () {
    Ovoid.log(2, "Ovoid.Shader", "'" + this.owner.name + "' unable to load '" + this.owner.src + "'");
    this.owner.loadStatus = -1
};
Ovoid.Shader.prototype.loadSource = function (b, c, e, g) {
    this.verturl = b;
    this.fragurl = c;
    this.wrapurl = e;
    Ovoid.opt_debugMode && (c += "?" + Math.random());
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    Ovoid.opt_debugMode && (e += "?" + Math.random());
    var f = new XMLHttpRequest;
    f.id = 0;
    f.owner = this;
    var h = new XMLHttpRequest;
    h.id = 1;
    h.owner = this;
    var l = new XMLHttpRequest;
    l.id = 2;
    l.owner = this;
    if (g) {
        var m = function () {
            if (4 == this.readyState)
                if (200 == this.status || 304 == this.status) {
                    switch (this.id) {
                    case 0:
                        this.owner.vertsource = this.responseText;
                        this.owner._vslstatus = 1;
                        break;
                    case 1:
                        this.owner.fragsource = this.responseText;
                        this.owner._fslstatus = 1;
                        break;
                    case 2:
                        this.owner.wrapsource = this.responseText, this.owner._wmlstatus = 1
                    }
                    if (3 == this.owner._vslstatus + this.owner._fslstatus + this.owner._wmlstatus) this.owner.loadStatus = 1
                } else switch (this.id) {
                case 0:
                    Ovoid.log(2, "Ovoid.Shader " + this.owner.name, "unable to load source '" + this.owner.verturl + "'");
                    this.owner._vslstatus = -1;
                    this.owner.loadStatus = -1;
                    break;
                case 1:
                    Ovoid.log(2, "Ovoid.Shader " + this.owner.name,
                        "unable to load source '" + this.owner.fragurl + "'");
                    this.owner._fslstatus = -1;
                    this.owner.loadStatus = -1;
                    break;
                case 2:
                    Ovoid.log(2, "Ovoid.Shader " + this.owner.name, "unable to load source '" + this.owner.wrapurl + "'"), this.owner._wmlstatus = -1, this.owner.loadStatus = -1
                }
        };
        f.onreadystatechange = m;
        h.onreadystatechange = m;
        l.onreadystatechange = m
    }
    l.open("GET", e, g);
    l.send();
    h.open("GET", c, g);
    h.send();
    f.open("GET", b, g);
    f.send();
    if (!g && (200 == l.status || 304 == l.status ? (this.wrapsource = l.responseText, this._wmlstatus = 1) : (this.loadStatus =
            this._wmlstatus = -1, Ovoid.log(2, "Ovoid.Shader " + this.name, "unable to load source '" + this.wrapurl + "'")), 200 == h.status || 304 == h.status ? (this.fragsource = h.responseText, this._fslstatus = 1) : (this.loadStatus = this._fslstatus = -1, Ovoid.log(2, "Ovoid.Shader " + this.name, "unable to load source '" + this.fragurl + "'")), 200 == f.status || 304 == f.status ? (this.vertsource = f.responseText, this._vslstatus = 1) : (this.loadStatus = this._vslstatus = -1, Ovoid.log(2, "Ovoid.Shader " + this.name, "unable to load source '" + this.verturl + "'")), 3 ==
        this._vslstatus + this._fslstatus + this._wmlstatus)) this.loadStatus = 1
};
Ovoid.Shader.prototype.setSources = function (b, c, e) {
    this.wrapsource = e;
    this.fragsource = c;
    this.vertsource = b;
    this.loadStatus = 1
};
Ovoid.Shader.prototype.linkWrap = function () {
    if (1 != this.loadStatus) return Ovoid.log(2, "Ovoid.Shader", this.name + " link/compil error, sources not loaded."), !1;
    this.verthandle = Ovoid.gl.createShader(Ovoid.gl.VERTEX_SHADER);
    this.fraghandle = Ovoid.gl.createShader(Ovoid.gl.FRAGMENT_SHADER);
    Ovoid.gl.shaderSource(this.verthandle, this.vertsource);
    Ovoid.gl.compileShader(this.verthandle);
    this.vertstat = Ovoid.gl.getShaderInfoLog(this.verthandle);
    if (!Ovoid.gl.getShaderParameter(this.verthandle, Ovoid.gl.COMPILE_STATUS)) return this.clear(),
    Ovoid.log(2, "Ovoid.Shader", this.name + " '" + this.verturl + "' compil error: " + this.vertstat), !1;
    Ovoid.gl.shaderSource(this.fraghandle, this.fragsource);
    Ovoid.gl.compileShader(this.fraghandle);
    this.fragstat = Ovoid.gl.getShaderInfoLog(this.fraghandle);
    if (!Ovoid.gl.getShaderParameter(this.fraghandle, Ovoid.gl.COMPILE_STATUS)) return this.clear(), Ovoid.log(2, "Ovoid.Shader", this.name + " '" + this.fragurl + "' compil error: " + this.fragstat), !1;
    this.proghandle = Ovoid.gl.createProgram();
    Ovoid.gl.attachShader(this.proghandle,
        this.verthandle);
    Ovoid.gl.attachShader(this.proghandle, this.fraghandle);
    Ovoid.gl.linkProgram(this.proghandle);
    this.progstat = Ovoid.gl.getProgramInfoLog(this.proghandle);
    if (!Ovoid.gl.getProgramParameter(this.proghandle, Ovoid.gl.LINK_STATUS)) return this.clear(), Ovoid.log(2, "Ovoid.Shader", this.name + " link error: " + this.progstat), !1;
    Ovoid._logGlerror("Ovoid.Shader.linkWrap :: " + this.name);
    if ("XML" == Ovoid.extractExt(this.wrapurl).toUpperCase()) {
        if (!this._wrapXml()) return Ovoid.log(2, "Ovoid.Shader", "program wrap error."), !1
    } else if (!this._wrapJson()) return Ovoid.log(2, "Ovoid.Shader", "program wrap error."), !1;
    return this.linkStatus = !0
};
Ovoid.Shader.prototype._wrapJson = function () {
    var b = JSON.parse(this.wrapsource);
    if (null == b) return Ovoid.log(2, "Ovoid.Shader", "unable to load Json wrap map '" + wm + "'"), !1;
    if (!b.OJSON) return Ovoid.log(2, "Ovoid.Shader '" + wm, "' is not a valid Ovoid JSON format"), !1;
    if ("glslmap" != b.type) return Ovoid.log(2, "Ovoid.Shader '" + wm, "' is not a valid Ovoid JSON glslmap"), !1;
    if (!b.wrapmap) return Ovoid.log(2, "Ovoid.Shader '" + wm, "' no wrapmap object found in Ovoid JSON"), !1;
    b = b.wrapmap;
    if (b.attribute)
        if (0 < b.attribute.length)
            for (i =
                b.attribute.length; i--;) this.plugVertexAttrib(b.attribute[i].id, b.attribute[i].name);
        else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no attribute slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing attribute map."), !1;
    if (b.uniform)
        if (0 < b.uniform.length)
            for (i = b.uniform.length; i--;) this.plugUniform(b.uniform[i].id, b.uniform[i].name);
        else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no uniform slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniform map."), !1;
    if (b.uniformMatrix)
        if (0 < b.uniformMatrix.length)
            for (i = b.uniformMatrix.length; i--;) this.plugUniformMatrix(b.uniformMatrix[i].id, b.uniformMatrix[i].name);
        else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no uniformMatrix slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniformMatrix map."), !1;
    if (b.uniformSampler)
        if (0 < b.uniformSampler.length)
            for (i = b.uniformSampler.length; i--;) this.plugUniformSampler(b.uniformSampler[i].id, b.uniformSampler[i].name);
        else Ovoid.log(2, "Ovoid.Shader",
            "'" + wm + "' wrap : no uniformSampler slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniformSampler map."), !1;
    return !0
};
Ovoid.Shader.prototype._wrapXml = function () {
    var b = (new DOMParser).parseFromString(this.wrapsource, "text/xml");
    if (null == b) return Ovoid.log(2, "Ovoid.Shader", "unable to load Xml wrap map '" + wm + "'"), !1;
    var c = b.getElementsByTagName("attribute")[0],
        e = b.getElementsByTagName("uniform")[0],
        g = b.getElementsByTagName("uniformMatrix")[0],
        b = b.getElementsByTagName("uniformSampler")[0],
        f, h, l;
    if (null != c)
        if (c = c.getElementsByTagName("s"), 0 < c.length)
            for (l = c.length; l--;) f = parseInt(c[l].getAttribute("id")), h = c[l].childNodes[0].data,
    this.plugVertexAttrib(f, h);
    else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no attribute slot.");
    else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing attribute map."), !1; if (null != e)
        if (c = e.getElementsByTagName("s"), 0 < c.length)
            for (l = c.length; l--;) f = parseInt(c[l].getAttribute("id")), h = c[l].childNodes[0].data, this.plugUniform(f, h);
        else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no uniform slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniform map."), !1;
    if (null != g)
        if (c =
            g.getElementsByTagName("s"), 0 < c.length)
            for (l = c.length; l--;) f = parseInt(c[l].getAttribute("id")), h = c[l].childNodes[0].data, this.plugUniformMatrix(f, h);
        else Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : no uniformMatrix slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniformMatrix map."), !1;
    if (null != b)
        if (c = b.getElementsByTagName("s"), 0 < c.length)
            for (l = c.length; l--;) f = parseInt(c[l].getAttribute("id")), h = c[l].childNodes[0].data, this.plugUniformSampler(f, h);
        else Ovoid.log(2, "Ovoid.Shader",
            "'" + wm + "' wrap : no uniformSampler slot.");
        else return Ovoid.log(2, "Ovoid.Shader", "'" + wm + "' wrap : missing uniformSampler map."), !1;
    return !0
};
Ovoid.Shader.prototype.use = function () {
    Ovoid.gl.useProgram(this.proghandle)
};
Ovoid.Shader.prototype.plugVertexAttrib = function (b, c) {
    var e = Ovoid.gl.getAttribLocation(this.proghandle, c);
    switch (b) {
    case Ovoid.VERTEX_VEC4_P:
        return this.attribute[0] = e, this.attrsize[0] = 4, e;
    case Ovoid.VERTEX_VEC3_N:
        return this.attribute[1] = e, this.attrsize[1] = 3, e;
    case Ovoid.VERTEX_VEC3_U:
        return this.attribute[2] = e, this.attrsize[2] = 3, e;
    case Ovoid.VERTEX_VEC3_T:
        return this.attribute[3] = e, this.attrsize[3] = 3, e;
    case Ovoid.VERTEX_VEC3_B:
        return this.attribute[4] = e, this.attrsize[4] = 3, e;
    case Ovoid.VERTEX_VEC4_C:
        return this.attribute[5] =
            e, this.attrsize[5] = 4, e;
    case Ovoid.VERTEX_VEC4_I:
        return this.attribute[6] = e, this.attrsize[6] = 4, e;
    case Ovoid.VERTEX_VEC4_W:
        return this.attribute[7] = e, this.attrsize[7] = 4, e;
    default:
        return -1
    }
};
Ovoid.Shader.prototype.plugUniform = function (b, c) {
    var e = Ovoid.gl.getUniformLocation(this.proghandle, c);
    return e ? this.uniform[b] = e : -1
};
Ovoid.Shader.prototype.plugUniformMatrix = function (b, c) {
    var e = Ovoid.gl.getUniformLocation(this.proghandle, c);
    return e ? this.uniformMatrix[b] = e : -1
};
Ovoid.Shader.prototype.plugUniformSampler = function (b, c) {
    var e = Ovoid.gl.getUniformLocation(this.proghandle, c);
    return e ? this.uniformSampler[b] = e : -1
};
Ovoid.Shader.prototype.setUniform1f = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform1f(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform1fv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform1fv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform2fv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform2fv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform3fv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform3fv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform4fv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform4fv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform1i = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform1i(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform1iv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform1iv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform2iv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform2iv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform3iv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform3iv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniform4iv = function (b, c) {
    -1 != this.uniform[b] && Ovoid.gl.uniform4iv(this.uniform[b], c)
};
Ovoid.Shader.prototype.setUniformMatrix3fv = function (b, c) {
    -1 != this.uniformMatrix[b] && Ovoid.gl.uniformMatrix3fv(this.uniformMatrix[b], 0, c)
};
Ovoid.Shader.prototype.setUniformMatrix4fv = function (b, c) {
    -1 != this.uniformMatrix[b] && Ovoid.gl.uniformMatrix4fv(this.uniformMatrix[b], 0, c)
};
Ovoid.Shader.prototype.setUniformSampler = function (b) {
    -1 != this.uniformSampler[b] && Ovoid.gl.uniform1i(this.uniformSampler[b], b)
};
Ovoid.Shader.prototype.setVertexAttribPointers = function (b, c) {
    for (var e = 0, g = 1, f = 0; e < Ovoid.MAX_VERTEX_ATTRIB; e++, g <<= 1) b & g ? (-1 != this.attribute[e] && (Ovoid.gl.vertexAttribPointer(this.attribute[e], this.attrsize[e], Ovoid.gl.FLOAT, !1, c, f), Ovoid.gl.enableVertexAttribArray(this.attribute[e])), f += 4 * this.attrsize[e]) : -1 != this.attribute[e] && Ovoid.gl.disableVertexAttribArray(this.attribute[e])
};
Ovoid.Shader.prototype.clearOutFragment = function () {
    for (var b = 0; b < Ovoid.MAX_OUT_FRAGMENT; b++) this.outFragment[b] = -1
};
Ovoid.Shader.prototype.clearVertexAttribs = function () {
    for (var b = 0; b < Ovoid.MAX_VERTEX_ATTRIB; b++) this.attribute[b] = -1
};
Ovoid.Shader.prototype.clearUniforms = function () {
    for (var b = 0; b < Ovoid.MAX_UNIFORM; b++) this.uniform[b] = -1
};
Ovoid.Shader.prototype.clearUniformMatrices = function () {
    for (var b = 0; b < Ovoid.MAX_UNIFORM_MATRIX; b++) this.uniformMatrix[b] = -1
};
Ovoid.Shader.prototype.clearUniformSamplers = function () {
    for (var b = 0; b < Ovoid.MAX_UNIFORM_SAMPLER; b++) this.uniformSampler[b] = -1
};
Ovoid.Shader.prototype.clear = function () {
    if (-1 != this.verthandle) Ovoid.gl.deleteShader(this.verthandle), this.verthandle = -1;
    if (-1 != this.fraghandle) Ovoid.gl.deleteShader(this.fraghandle), this.fraghandle = -1;
    if (-1 != this.proghandle) this.proghandle = -1;
    this.clearVertexAttribs();
    this.clearUniforms();
    this.clearUniformMatrices();
    this.clearUniformSamplers()
};
Ovoid.Node = function (b) {
    this.type |= Ovoid.NODE;
    this.name = b;
    this.pickable = this.visible = !0;
    this.uid = 0;
    this.parent = null;
    this.child = [];
    this.depend = [];
    this.link = [];
    this.cach = 0;
    this.boundingBox = new Ovoid.Boundingbox;
    this.boundingSphere = new Ovoid.Boundingsphere
};
Ovoid.Node.prototype.setParent = function (b) {
    if (this.parent != b) {
        if (null != this.parent)
            for (var c = this.parent.child.length; c--;)
                if (this.parent.child[c] === this) {
                    this.parent.child.splice(c, 1);
                    break
                }
        if (null != b) {
            for (c = b.child.length; c--;)
                if (b.child[c] === b) return;
            b.child.push(this)
        }
        this.parent = b
    }
};
Ovoid.Node.prototype.makeDepend = function (b) {
    for (var c = this.depend.length; c--;)
        if (b === this.depend[c]) return;
    this.depend.push(b);
    b.link.push(this)
};
Ovoid.Node.prototype.breakDepend = function (b) {
    for (var c = this.depend.length; c--;)
        if (b === this.depend[c]) {
            this.depend.splice(c, 1);
            for (c = b.link.length; c--;)
                if (this === b.link[c]) {
                    b.link.splice(c, 1);
                    break
                }
            break
        }
};
Ovoid.Node.prototype.addCach = function (b) {
    this.cach |= b
};
Ovoid.Node.prototype.unCach = function (b) {
    this.cach &= ~b
};
Ovoid.Node.prototype.setTreeVisible = function (b) {
    this.visible = b;
    for (var c = this.child.length; c--;) this.child[c].setTreeVisible(b)
};
Ovoid.Node.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.NODE;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    return b
};
Ovoid.Transform = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.TRANSFORM;
    this.name = b;
    this.scaling = new Ovoid.Vector(1, 1, 1);
    this.translation = new Ovoid.Vector(0, 0, 0);
    this.orientation = new Ovoid.Quaternion(0, 0, 0, 1);
    this.rotation = new Ovoid.Quaternion(0, 0, 0, 1);
    this.matrix = new Ovoid.Matrix4;
    this.worldMatrix = new Ovoid.Matrix4;
    this.normalMatrix = new Ovoid.Matrix3;
    this.worldDirection = new Ovoid.Vector(0, 0, 0);
    this.worldPosition = new Ovoid.Point(0, 0, 0, 1);
    this.rendered = !1;
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype = new Ovoid.Node;
Ovoid.Transform.prototype.constructor = Ovoid.Transform;
Ovoid.Transform.prototype.distanceFrom = function (b) {
    var c = this.worldPosition.v[0] - b.worldPosition.v[0],
        e = this.worldPosition.v[1] - b.worldPosition.v[1],
        b = this.worldPosition.v[2] - b.worldPosition.v[2];
    return Math.sqrt(c * c + e * e + b * b)
};
Ovoid.Transform.prototype.directionTo = function (b) {
    var c = this.worldPosition.v[0] - b.worldPosition.v[0],
        e = this.worldPosition.v[1] - b.worldPosition.v[1],
        b = this.worldPosition.v[2] - b.worldPosition.v[2],
        g = Math.sqrt(c * c + e * e + b * b);
    return new Ovoid.Vector(c / g, e / g, b / g)
};
Ovoid.Transform.prototype.scale = function (b, c) {
    switch (c) {
    case 1:
        this.scaling.v[0] = b.v[0];
        this.scaling.v[1] = b.v[1];
        this.scaling.v[2] = b.v[2];
        break;
    default:
        this.scaling.v[0] += b.v[0], this.scaling.v[1] += b.v[1], this.scaling.v[2] += b.v[2]
    }
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.scaleXyz = function (b, c, e, g) {
    switch (g) {
    case 1:
        this.scaling.v[0] = b;
        this.scaling.v[1] = c;
        this.scaling.v[2] = e;
        break;
    default:
        this.scaling.v[0] += b, this.scaling.v[1] += c, this.scaling.v[2] += e
    }
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.move = function (b, c, e) {
    switch (e) {
    case 1:
        switch (c) {
        case 1:
            this.translation.v[0] = b.v[0] * this.matrix.m[0] + b.v[1] * this.matrix.m[4] + b.v[2] * this.matrix.m[8];
            this.translation.v[1] = b.v[0] * this.matrix.m[1] + b.v[1] * this.matrix.m[5] + b.v[2] * this.matrix.m[9];
            this.translation.v[2] = b.v[0] * this.matrix.m[2] + b.v[1] * this.matrix.m[6] + b.v[2] * this.matrix.m[10];
            break;
        default:
            this.translation.v[0] = b.v[0], this.translation.v[1] = b.v[1], this.translation.v[2] = b.v[2]
        }
        break;
    default:
        switch (c) {
        case 1:
            this.translation.v[0] +=
                b.v[0] * this.matrix.m[0] + b.v[1] * this.matrix.m[4] + b.v[2] * this.matrix.m[8];
            this.translation.v[1] += b.v[0] * this.matrix.m[1] + b.v[1] * this.matrix.m[5] + b.v[2] * this.matrix.m[9];
            this.translation.v[2] += b.v[0] * this.matrix.m[2] + b.v[1] * this.matrix.m[6] + b.v[2] * this.matrix.m[10];
            break;
        default:
            this.translation.v[0] += b.v[0], this.translation.v[1] += b.v[1], this.translation.v[2] += b.v[2]
        }
    }
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.moveXyz = function (b, c, e, g, f) {
    switch (f) {
    case 1:
        switch (g) {
        case 1:
            this.translation.v[0] = b * this.matrix.m[0] + c * this.matrix.m[4] + e * this.matrix.m[8];
            this.translation.v[1] = b * this.matrix.m[1] + c * this.matrix.m[5] + e * this.matrix.m[9];
            this.translation.v[2] = b * this.matrix.m[2] + c * this.matrix.m[6] + e * this.matrix.m[10];
            break;
        default:
            this.translation.v[0] = b, this.translation.v[1] = c, this.translation.v[2] = e
        }
        break;
    default:
        switch (g) {
        case 1:
            this.translation.v[0] += b * this.matrix.m[0] + c * this.matrix.m[4] +
                e * this.matrix.m[8];
            this.translation.v[1] += b * this.matrix.m[1] + c * this.matrix.m[5] + e * this.matrix.m[9];
            this.translation.v[2] += b * this.matrix.m[2] + c * this.matrix.m[6] + e * this.matrix.m[10];
            break;
        default:
            this.translation.v[0] += b, this.translation.v[1] += c, this.translation.v[2] += e
        }
    }
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.orient = function (b, c, e) {
    switch (e) {
    case 1:
        this.orientation.fromEuler(b);
        break;
    default:
        switch (c) {
        case 1:
            this.orientation.rotateSwapBy(b);
            break;
        default:
            this.orientation.rotateBy(b)
        }
    }
    this.orientation.normalize();
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.orientXyz = function (b, c, e, g, f) {
    switch (f) {
    case 1:
        this.orientation.fromEulerXyz(b, c, e);
        break;
    default:
        switch (g) {
        case 1:
            this.orientation.rotateSwapByXyz(b, c, e);
            break;
        default:
            this.orientation.rotateByXyz(b, c, e)
        }
    }
    this.orientation.normalize();
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.rotate = function (b, c, e) {
    switch (e) {
    case 1:
        this.rotation.fromEuler(b);
        break;
    default:
        switch (c) {
        case 1:
            this.rotation.rotateSwapBy(b);
            break;
        default:
            this.rotation.rotateBy(b)
        }
    }
    this.rotation.normalize();
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.rotateXyz = function (b, c, e, g, f) {
    switch (f) {
    case 1:
        this.rotation.fromEulerXyz(b, c, e);
    default:
        switch (g) {
        case 1:
            this.rotation.rotateSwapByXyz(b, c, e);
            break;
        default:
            this.rotation.rotateByXyz(b, c, e)
        }
    }
    this.rotation.normalize();
    this.unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
};
Ovoid.Transform.prototype.cachTransform = function () {
    if (!(this.cach & Ovoid.CACH_TRANSFORM)) {
        var b = this.rotation.v[3] * this.orientation.v[0] + this.rotation.v[0] * this.orientation.v[3] + this.rotation.v[1] * this.orientation.v[2] - this.rotation.v[2] * this.orientation.v[1],
            c = this.rotation.v[3] * this.orientation.v[1] + this.rotation.v[1] * this.orientation.v[3] + this.rotation.v[2] * this.orientation.v[0] - this.rotation.v[0] * this.orientation.v[2],
            e = this.rotation.v[3] * this.orientation.v[2] + this.rotation.v[2] * this.orientation.v[3] +
                this.rotation.v[0] * this.orientation.v[1] - this.rotation.v[1] * this.orientation.v[0],
            g = this.rotation.v[3] * this.orientation.v[3] - this.rotation.v[0] * this.orientation.v[0] - this.rotation.v[1] * this.orientation.v[1] - this.rotation.v[2] * this.orientation.v[2],
            f = b + b,
            h = c + c,
            l = e + e,
            m = b * f,
            o = b * h,
            b = b * l,
            q = c * h,
            c = c * l,
            e = e * l,
            f = g * f,
            h = g * h,
            g = g * l;
        this.matrix.m[0] = (1 - (q + e)) * this.scaling.v[0];
        this.matrix.m[1] = (o - g) * this.scaling.v[0];
        this.matrix.m[2] = (b + h) * this.scaling.v[0];
        this.matrix.m[3] = 0;
        this.matrix.m[4] = (o + g) * this.scaling.v[1];
        this.matrix.m[5] = (1 - (m + e)) * this.scaling.v[1];
        this.matrix.m[6] = (c - f) * this.scaling.v[1];
        this.matrix.m[7] = 0;
        this.matrix.m[8] = (b - h) * this.scaling.v[2];
        this.matrix.m[9] = (c + f) * this.scaling.v[2];
        this.matrix.m[10] = (1 - (m + q)) * this.scaling.v[2];
        this.matrix.m[11] = 0;
        this.matrix.m[12] = this.translation.v[0];
        this.matrix.m[13] = this.translation.v[1];
        this.matrix.m[14] = this.translation.v[2];
        this.matrix.m[15] = 1;
        this.addCach(Ovoid.CACH_TRANSFORM);
        this.unCach(Ovoid.CACH_MATRIX)
    }
    if (!(this.cach & Ovoid.CACH_MATRIX)) {
        null != this.parent ?
            this.parent.type & Ovoid.TRANSFORM ? this.worldMatrix.multOf(this.matrix, this.parent.worldMatrix) : this.worldMatrix.copy(this.matrix) : this.worldMatrix.copy(this.matrix);
        this.normalMatrix.fromMat4(this.worldMatrix);
        this.normalMatrix.toNormalTransform();
        this.worldDirection.v[0] = -this.worldMatrix.m[8];
        this.worldDirection.v[1] = -this.worldMatrix.m[9];
        this.worldDirection.v[2] = -this.worldMatrix.m[10];
        this.worldPosition.v[0] = this.worldMatrix.m[12];
        this.worldPosition.v[1] = this.worldMatrix.m[13];
        this.worldPosition.v[2] =
            this.worldMatrix.m[14];
        this.worldPosition.v[3] = 1;
        this.boundingBox.transform(this.worldMatrix);
        this.boundingSphere.transform(this.worldMatrix);
        for (m = 0; m < this.child.length; m++) this.child[m].unCach(Ovoid.CACH_MATRIX);
        this.addCach(Ovoid.CACH_MATRIX);
        this.unCach(Ovoid.CACH_WORLD)
    }
};
Ovoid.Transform.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.TRANSFORM;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    return b
};
Ovoid.Body = function (b) {
    Ovoid.Transform.call(this);
    this.type |= Ovoid.BODY;
    this.name = b;
    this.shape = null;
    this.distFromEye = 0;
    this.shadowCasting = !0;
    this.intersectable = !1;
    this.intersect = new Ovoid.Stack(Ovoid.MAX_BODY_INTERSECT);
    this.enter = new Ovoid.Stack(Ovoid.MAX_BODY_INTERSECT);
    this.leave = new Ovoid.Stack(Ovoid.MAX_BODY_INTERSECT);
    this.renderLayer = 0;
    this.renderAlpha = !1
};
Ovoid.Body.prototype = new Ovoid.Transform;
Ovoid.Body.prototype.constructor = Ovoid.Body;
Ovoid.Body.prototype.setShape = function (b) {
    null != this.shape && this.breakDepend(this.shape);
    this.shape = b;
    this.makeDepend(b)
};
Ovoid.Body.prototype.cachBody = function () {
    this.cach & Ovoid.CACH_BOUNDING_SHAPE || (this.shape && (this.boundingBox.copy(this.shape.boundingBox), this.boundingSphere.copy(this.shape.boundingSphere), this.shape.type & Ovoid.SKIN && (this.boundingBox.center.transform4Inverse(this.worldMatrix), this.boundingSphere.center.transform4Inverse(this.worldMatrix))), this.addCach(Ovoid.CACH_BOUNDING_SHAPE))
};
Ovoid.Body.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.BODY;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.bs = this.shape ? this.shape.uid : "null";
    b.bi = this.intersectable;
    b.bc = this.shadowCasting;
    b.bl = this.renderLayer;
    b.ba = this.renderAlpha;
    return b
};
Ovoid.Joint = function (b) {
    Ovoid.Transform.call(this);
    this.type |= Ovoid.JOINT;
    this.name = b;
    this.skin = null;
    this.size = 1
};
Ovoid.Joint.prototype = new Ovoid.Transform;
Ovoid.Joint.prototype.constructor = Ovoid.Joint;
Ovoid.Joint.prototype.cachJoint = function () {
    this.cach & Ovoid.CACH_WORLD || this.skin.unCach(Ovoid.CACH_SKIN)
};
Ovoid.Joint.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.JOINT;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pivot = this.pivot;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.sz = this.size;
    b.sk = this.skin ? this.skin.uid : "null";
    return b
};
Ovoid.Mesh = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.MESH;
    this.name = b;
    this.polyset = Array(Ovoid.MAX_MESH_LOD);
    for (b = 0; b < Ovoid.MAX_MESH_LOD; b++) this.polyset[b] = [];
    this.vertices = Array(Ovoid.MAX_MESH_LOD);
    for (b = 0; b < Ovoid.MAX_MESH_LOD; b++) this.vertices[b] = [];
    this.triangles = Array(Ovoid.MAX_MESH_LOD);
    for (b = 0; b < Ovoid.MAX_MESH_LOD; b++) this.triangles[b] = [];
    this._ibuffer = Array(Ovoid.MAX_MESH_LOD);
    this._vbuffer = Array(Ovoid.MAX_MESH_LOD);
    this._vfbytes = this._vformat = 0
};
Ovoid.Mesh.prototype = new Ovoid.Node;
Ovoid.Mesh.prototype.constructor = Ovoid.Mesh;
Ovoid.Mesh.prototype.addPolyset = function (b, c, e) {
    if (b >= Ovoid.MAX_MESH_LOD) return Ovoid.log(1, "Ovoid.Mesh", "'" + this.name + "' Lod index > MAX_MESH_LOD"), !1;
    if (0 != c.length % 3) return Ovoid.log(1, "Ovoid.Mesh", "'" + this.name + "' Not multple of 3 vertices count : " + c.length), !1;
    for (var g = c.length, f = 0; f < g; f++) this.vertices[b].push(c[f]);
    f = 3 * this.triangles[b].length;
    g = new Ovoid.Polyset;
    g.ioffset = 2 * f;
    g.icount = c.length;
    g.material = e;
    null != e && this.makeDepend(e);
    this.polyset[b].push(g);
    for (var h, l, e = new Ovoid.Vector,
            m = new Ovoid.Vector, o, g = c.length / 3, q = 0; q < g; q++) o = new Ovoid.Triangle, c = this.vertices[b][f].p, o.index[0] = f, f++, h = this.vertices[b][f].p, o.index[1] = f, f++, l = this.vertices[b][f].p, o.index[2] = f, f++, e.subOf(c, h), m.subOf(c, l), o.normal.crossOf(e, m), o.normal.normalize(), o.center.set((c.v[0] + h.v[0] + l.v[0]) / 3, (c.v[1] + h.v[1] + l.v[1]) / 3, (c.v[2] + h.v[2] + l.v[2]) / 3, 1), o.equation = -(o.normal.v[0] * o.center.v[0] + o.normal.v[1] * o.center.v[1] + o.normal.v[2] * o.center.v[2]), this.triangles[b].push(o);
    this.unCach(Ovoid.CACH_GEOMETRY);
    return !0
};
Ovoid.Mesh.prototype.setMaterial = function (b, c, e) {
    null != this.polyset[b][c].material && this.breakDepend(this.polyset[b][c].material);
    this.polyset[b][c].material = e;
    this.makeDepend(e)
};
Ovoid.Mesh.prototype.recalcTriangles = function (b) {
    if (this.triangles[b].length) {
        for (var c, e, g, f, h = new Ovoid.Vector, l = new Ovoid.Vector, m = 0; m < this.triangles[b].length; m++) c = this.triangles[b][m], e = this.vertices[b][c.index[0]].p, g = this.vertices[b][c.index[1]].p, f = this.vertices[b][c.index[2]].p, h.subOf(e, g), l.subOf(e, f), c.normal.crossOf(h, l), c.normal.normalize(), c.center.set((e.v[0] + g.v[0] + f.v[0]) / 3, (e.v[1] + g.v[1] + f.v[1]) / 3, (e.v[2] + g.v[2] + f.v[2]) / 3, 1), c.equation = -(c.normal.v[0] * c.center.v[0] + c.normal.v[1] *
            c.center.v[1] + c.normal.v[2] * c.center.v[2]);
        this.unCach(Ovoid.CACH_GEOMETRY)
    }
};
Ovoid.Mesh.prototype.recalcGeometry = function (b) {
    if (this.vertices[b].length) {
        for (var c, e, g, f, h, l, m, o = new Ovoid.Vector, q = new Ovoid.Vector, w = 0; w < this.triangles[b].length; w++) c = this.triangles[b][w], e = this.vertices[b][c.index[0]].p, g = this.vertices[b][c.index[1]].p, f = this.vertices[b][c.index[2]].p, h = this.vertices[b][c.index[0]].n, l = this.vertices[b][c.index[1]].n, m = this.vertices[b][c.index[2]].n, o.subOf(e, g), q.subOf(e, f), c.normal.crossOf(o, q), c.normal.normalize(), h.addBy(c.normal), l.addBy(c.normal), m.addBy(c.normal),
        c.center.set((e.v[0] + g.v[0] + f.v[0]) / 3, (e.v[1] + g.v[1] + f.v[1]) / 3, (e.v[2] + g.v[2] + f.v[2]) / 3, 1), c.equation = -(c.normal.v[0] * c.center.v[0] + c.normal.v[1] * c.center.v[1] + c.normal.v[2] * c.center.v[2]);
        for (c = 0; c < this.vertices[b].length; c++) this.vertices[b][c].n.normalize();
        this.unCach(Ovoid.CACH_GEOMETRY)
    }
};
Ovoid.Mesh.prototype.createBuffers = function (b, c) {
    Ovoid._clearGlerror();
    this._vformat = b;
    this._vfbytes = Ovoid.Vertex.getFormatSize(this._vformat);
    for (var e, g, f = 0; f < Ovoid.MAX_MESH_LOD; f++)
        if (0 != this.triangles[f].length && (e = Ovoid.gl.createBuffer(), g = Ovoid.gl.createBuffer(), Ovoid.gl.bindBuffer(Ovoid.gl.ARRAY_BUFFER, g), Ovoid.gl.bufferData(Ovoid.gl.ARRAY_BUFFER, Ovoid.Vertex.bufferize(this._vformat, this.vertices[f]), c), Ovoid.log(3, "Ovoid.Mesh", "'" + this.name + "' lod#" + f + " Adding VBO " + this.vertices[f].length *
            this._vfbytes + " bytes"), Ovoid.gl.bindBuffer(Ovoid.gl.ELEMENT_ARRAY_BUFFER, e), Ovoid.gl.bufferData(Ovoid.gl.ELEMENT_ARRAY_BUFFER, Ovoid.Triangle.arrayAsIbo(this.triangles[f]), Ovoid.gl.STATIC_DRAW), Ovoid.log(3, "Ovoid.Mesh", "'" + this.name + "' lod#" + f + " Adding IBO " + 12 * this.triangles[f].length + " bytes"), this._ibuffer[f] = e, this._vbuffer[f] = g, Ovoid._logGlerror("Ovoid.Mesh.createBuffers :: " + this.name))) return !1
};
Ovoid.Mesh.prototype.genDebugBox = function (b, c, e, g) {
    var f, h, l, m, o, q, w, v, x, r, z, y, C, p, D, B, u, t, A, s;
    f = Ovoid.Vertex.newArray(6 * 6 * e * e);
    y = c / e;
    C = 1 / e;
    z = -(0.5 * c);
    o = -(0.5 * c);
    q = 0.5 * c;
    u = new Float32Array([0, 0, 0, 1]);
    t = new Float32Array([0, 0, 0]);
    A = new Float32Array([0, 0, 0]);
    s = new Float32Array([1, 1, 1, 1]);
    for (D = p = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = D * C;
        v = C + D * C;
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[0] = c, u[1] = o, u[2] = l, t[0] = 0, t[1] = -1, t[2] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t),
        f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = o, u[2] = m, t[0] = 0, t[1] = -1, t[2] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[1] = o, u[2] = m, t[0] = 0, t[1] = -1, t[2] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = o, u[2] = m, t[0] = 0, t[1] = -1, t[2] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[1] = o, u[2] = l,
        t[0] = 0, t[1] = -1, t[2] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = o, u[2] = l, t[0] = 0, t[1] = -1, t[2] = 0, A[0] = v, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    for (D = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = 1 - D * C;
        v = 1 - (C + D * C);
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[0] = c, u[1] = q, u[2] = l, t[0] = 0, t[1] = 1, t[2] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A),
        f[p].c.setv(s), p++, u[0] = c, u[1] = q, u[2] = m, t[0] = 0, t[1] = 1, t[2] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = q, u[2] = m, t[0] = 0, t[1] = 1, t[2] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = q, u[2] = m, t[0] = 0, t[1] = 1, t[2] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[1] = q, u[2] = l, t[0] = 0, t[1] = 1, t[2] =
            0, A[0] = v, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[1] = q, u[2] = l, t[0] = 0, t[1] = 1, t[2] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    for (D = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = D * C;
        v = C + D * C;
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[2] = c, u[0] = o, u[1] = l, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s),
        p++, u[2] = h, u[0] = o, u[1] = m, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = c, u[0] = o, u[1] = m, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = h, u[0] = o, u[1] = m, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = c, u[0] = o, u[1] = l, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = w,
        A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = h, u[0] = o, u[1] = l, t[2] = 0, t[0] = -1, t[1] = 0, A[0] = v, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    for (D = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = 1 - D * C;
        v = 1 - (C + D * C);
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[2] = c, u[0] = q, u[1] = l, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++,
        u[2] = c, u[0] = q, u[1] = m, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = h, u[0] = q, u[1] = m, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = h, u[0] = q, u[1] = m, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = h, u[0] = q, u[1] = l, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = v, A[1] = x, s[0] =
            1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[2] = c, u[0] = q, u[1] = l, t[2] = 0, t[0] = 1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    for (D = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = 1 - D * C;
        v = 1 - (C + D * C);
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[0] = c, u[2] = o, u[1] = l, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[2] =
            o, u[1] = m, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = o, u[1] = m, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = o, u[1] = m, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = o, u[1] = l, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = v, A[1] = x, s[0] = 1, s[1] =
            1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[2] = o, u[1] = l, t[0] = 0, t[2] = -1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    for (D = 0; D < e; D++) {
        c = z + D * y;
        h = z + (y + D * y);
        w = D * C;
        v = C + D * C;
        for (B = 0; B < e; B++) l = z + B * y, m = z + (y + B * y), x = B * C, r = C + B * C, u[0] = c, u[2] = q, u[1] = l, t[0] = 0, t[2] = 1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = q, u[1] = m, t[0] =
            0, t[2] = 1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[2] = q, u[1] = m, t[0] = 0, t[2] = 1, t[1] = 0, A[0] = w, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = q, u[1] = m, t[0] = 0, t[2] = 1, t[1] = 0, A[0] = v, A[1] = r, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = c, u[2] = q, u[1] = l, t[0] = 0, t[2] = 1, t[1] = 0, A[0] = w, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1,
        f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++, u[0] = h, u[2] = q, u[1] = l, t[0] = 0, t[2] = 1, t[1] = 0, A[0] = v, A[1] = x, s[0] = 1, s[1] = 1, s[2] = 1, s[3] = 1, f[p].p.setv(u), f[p].n.setv(t), f[p].u.setv(A), f[p].c.setv(s), p++
    }
    this.addPolyset(b, f, g)
};
Ovoid.Mesh.prototype.genDebugGrid = function (b, c, e, g) {
    var f, h, l, m, o, q, w, v, x, r, z, y, C, p, D, B, u, t;
    f = Ovoid.Vertex.newArray(6 * 6 * e * e);
    r = c / e;
    z = 1 / e;
    x = -(0.5 * c);
    D = new Float32Array([0, 0, 0, 1]);
    B = new Float32Array([0, 0, 0]);
    u = new Float32Array([0, 0, 0]);
    t = new Float32Array([1, 1, 1, 1]);
    for (C = y = 0; C < e; C++) {
        c = x + C * r;
        h = x + (r + C * r);
        o = 1 - C * z;
        q = 1 - (z + C * z);
        for (p = 0; p < e; p++) l = x + p * r, m = x + (r + p * r), w = p * z, v = z + p * z, D[0] = c, D[1] = 0, D[2] = l, B[0] = 0, B[1] = 1, B[2] = 0, u[0] = o, u[1] = w, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u),
        f[y].c.setv(t), y++, D[0] = c, D[1] = 0, D[2] = m, B[0] = 0, B[1] = 1, B[2] = 0, u[0] = o, u[1] = v, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u), f[y].c.setv(t), y++, D[0] = h, D[1] = 0, D[2] = m, B[0] = 0, B[1] = 1, B[2] = 0, u[0] = q, u[1] = v, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u), f[y].c.setv(t), y++, D[0] = h, D[1] = 0, D[2] = m, B[0] = 0, B[1] = 1, B[2] = 0, u[0] = q, u[1] = v, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u), f[y].c.setv(t), y++, D[0] = h, D[1] = 0, D[2] = l, B[0] = 0, B[1] = 1, B[2] =
            0, u[0] = q, u[1] = w, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u), f[y].c.setv(t), y++, D[0] = c, D[1] = 0, D[2] = l, B[0] = 0, B[1] = 1, B[2] = 0, u[0] = o, u[1] = w, t[0] = 1, t[1] = 1, t[2] = 1, t[3] = 1, f[y].p.setv(D), f[y].n.setv(B), f[y].u.setv(u), f[y].c.setv(t), y++
    }
    this.addPolyset(b, f, g)
};
Ovoid.Mesh.prototype.optimizeVertices = function () {
    for (var b, c, e, g = Array(3), f = Array(3), h = Ovoid.MAX_MESH_LOD; h--;)
        if (0 != this.triangles[h].length) {
            var l = [],
                m = 0,
                o = this.triangles[h].length;
            for (b = 0; b < o; b++) {
                g[0] = this.vertices[h][this.triangles[h][b].index[0]];
                g[1] = this.vertices[h][this.triangles[h][b].index[1]];
                g[2] = this.vertices[h][this.triangles[h][b].index[2]];
                f[0] = f[1] = f[2] = !0;
                for (c = 0; c < m; c++)
                    for (e = 0; 3 > e; e++) l[c].equal(g[e]) && (this.triangles[h][b].index[e] = c, f[e] = !1);
                for (e = 0; 3 > e; e++) f[e] && (this.triangles[h][b].index[e] =
                    m, l.push(g[e]), m++)
            }
            this.vertices[h] = l
        }
};
Ovoid.Mesh.prototype.optimizeTriangles = function () {
    for (var b, c, e = Ovoid.MAX_MESH_LOD; e--;)
        if (0 != this.triangles[e].length) {
            var g = Array(2),
                f = Array(2),
                h = Array(2),
                l = Array(2),
                m = Array(2),
                o = Array(2),
                q = this.triangles[e].length;
            for (b = 0; b < q; b++) {
                g[0] = this.vertices[e][this.triangles[e][b].index[0]].p;
                g[1] = this.vertices[e][this.triangles[e][b].index[1]].p;
                f[0] = this.vertices[e][this.triangles[e][b].index[1]].p;
                f[1] = this.vertices[e][this.triangles[e][b].index[2]].p;
                h[0] = this.vertices[e][this.triangles[e][b].index[2]].p;
                h[1] =
                    this.vertices[e][this.triangles[e][b].index[0]].p;
                for (c = 0; c < q; c++)
                    if (b != c) {
                        l[0] = this.vertices[e][this.triangles[e][c].index[0]].p;
                        l[1] = this.vertices[e][this.triangles[e][c].index[1]].p;
                        m[0] = this.vertices[e][this.triangles[e][c].index[1]].p;
                        m[1] = this.vertices[e][this.triangles[e][c].index[2]].p;
                        o[0] = this.vertices[e][this.triangles[e][c].index[2]].p;
                        o[1] = this.vertices[e][this.triangles[e][c].index[0]].p;
                        if (-1 == this.triangles[e][b].adjacent[0]) {
                            if (g[0].equal(l[0]) && g[1].equal(l[1]) || g[0].equal(l[1]) &&
                                g[1].equal(l[0])) this.triangles[e][b].adjacent[0] = c, this.triangles[e][c].adjacent[0] = b;
                            if (g[0].equal(m[0]) && g[1].equal(m[1]) || g[0].equal(m[1]) && g[1].equal(m[0])) this.triangles[e][b].adjacent[0] = c, this.triangles[e][c].adjacent[1] = b;
                            if (g[0].equal(o[0]) && g[1].equal(o[1]) || g[0].equal(o[1]) && g[1].equal(o[0])) this.triangles[e][b].adjacent[0] = c, this.triangles[e][c].adjacent[2] = b
                        }
                        if (-1 == this.triangles[e][b].adjacent[1]) {
                            if (f[0].equal(l[0]) && f[1].equal(l[1]) || f[0].equal(l[1]) && f[1].equal(l[0])) this.triangles[e][b].adjacent[1] =
                                c, this.triangles[e][c].adjacent[0] = b;
                            if (f[0].equal(m[0]) && f[1].equal(m[1]) || f[0].equal(m[1]) && f[1].equal(m[0])) this.triangles[e][b].adjacent[1] = c, this.triangles[e][c].adjacent[1] = b;
                            if (f[0].equal(o[0]) && f[1].equal(o[1]) || f[0].equal(o[1]) && f[1].equal(o[0])) this.triangles[e][b].adjacent[1] = c, this.triangles[e][c].adjacent[2] = b
                        }
                        if (-1 == this.triangles[e][b].adjacent[2]) {
                            if (h[0].equal(l[0]) && h[1].equal(l[1]) || h[0].equal(l[1]) && h[1].equal(l[0])) this.triangles[e][b].adjacent[2] = c, this.triangles[e][c].adjacent[0] =
                                b;
                            if (h[0].equal(m[0]) && h[1].equal(m[1]) || h[0].equal(m[1]) && h[1].equal(m[0])) this.triangles[e][b].adjacent[2] = c, this.triangles[e][c].adjacent[1] = b;
                            if (h[0].equal(o[0]) && h[1].equal(o[1]) || h[0].equal(o[1]) && h[1].equal(o[0])) this.triangles[e][b].adjacent[2] = c, this.triangles[e][c].adjacent[2] = b
                        }
                    }
            }
        }
};
Ovoid.Mesh.prototype.cachMesh = function () {
    if (!(this.cach & Ovoid.CACH_GEOMETRY)) {
        for (var b = new Ovoid.Point(Ovoid.FLOAT_MAX, Ovoid.FLOAT_MAX, Ovoid.FLOAT_MAX, 1), c = new Ovoid.Point(Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, 1), e, g = this.vertices[0].length, f = 0; f < g; f++) e = this.vertices[0][f].p, e.v[0] > c.v[0] && (c.v[0] = e.v[0]), e.v[1] > c.v[1] && (c.v[1] = e.v[1]), e.v[2] > c.v[2] && (c.v[2] = e.v[2]), e.v[0] < b.v[0] && (b.v[0] = e.v[0]), e.v[1] < b.v[1] && (b.v[1] = e.v[1]), e.v[2] < b.v[2] && (b.v[2] = e.v[2]);
        this.boundingBox.setBound(b,
            c);
        this.boundingSphere.setBound(b, c);
        for (f = 0; f < this.link.length; f++) this.link[f].unCach(Ovoid.CACH_BOUNDING_SHAPE);
        this.addCach(Ovoid.CACH_GEOMETRY)
    }
};
Ovoid.Mesh.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.MESH;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.mp = this.polyset;
    b.mv = Array(Ovoid.MAX_MESH_LOD);
    for (c = 0; c < Ovoid.MAX_MESH_LOD; c++) b.mv[c] =
        Ovoid.Vertex.pack(this._vformat, this.vertices[c]);
    b.mt = this.triangles;
    b.mf = this._vformat;
    b.mb = this._vfbytes;
    b.mm = this.modifier ? this.modifier.uid : "null";
    return b
};
Ovoid.Texture = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.TEXTURE;
    this.name = b;
    this.url = "";
    this.handle = null;
    this.target = 0;
    this.filter = !1;
    this.loadStatus = 0;
    this.pixmap = null
};
Ovoid.Texture.prototype = new Ovoid.Node;
Ovoid.Texture.prototype.constructor = Ovoid.Texture;
Ovoid.Texture.prototype._handleLoad = function () {
    Ovoid._clearGlerror();
    this.o.width = this.width;
    this.o.height = this.height;
    Ovoid.gl.bindTexture(this.o.target, this.o.handle);
    Ovoid.gl.texImage2D(this.o.target, 0, 6408, 6408, 5121, this);
    Ovoid.isPowerOfTwo(this.width) && Ovoid.isPowerOfTwo(this.height) && (Ovoid.gl.generateMipmap(this.o.target), Ovoid.log(2, "Ovoid.Texture", "'" + this.o.name + "' is NPO2, unable to create mipmaps."));
    this.o.setFilter(this.o.filter);
    Ovoid.gl.bindTexture(this.o.target, null);
    if (Ovoid._logGlerror("Ovoid.Texture._handleLoad :: " +
        this.o.url)) return !1;
    this.o.loadStatus = 1;
    Ovoid.log(3, "Ovoid.Texture", "'" + this.o.name + "' loaded");
    return !0
};
Ovoid.Texture.prototype._handleError = function () {
    Ovoid.log(2, "Ovoid.Texture", "'" + this.o.name + "' unable to load '" + this.o.url + "'");
    this.o.loadStatus = -1
};
Ovoid.Texture.prototype.setFilter = function (b) {
    Ovoid._clearGlerror();
    this.filter = b;
    Ovoid.gl.bindTexture(this.target, this.handle);
    b ? Ovoid.isPowerOfTwo(this.width) && Ovoid.isPowerOfTwo(this.height) ? (Ovoid.gl.texParameteri(this.target, 10240, 9729), Ovoid.gl.texParameteri(this.target, 10241, 9987)) : (Ovoid.log(2, "Ovoid.Texture", "'" + this.name + "' is NPO2, unable to set filtering."), Ovoid.gl.texParameteri(this.target, 10242, 33071), Ovoid.gl.texParameteri(this.target, 10243, 33071), Ovoid.gl.texParameteri(this.target,
        10240, 9729), Ovoid.gl.texParameteri(this.target, 10241, 9729)) : (Ovoid.gl.texParameteri(this.target, 10240, 9728), Ovoid.gl.texParameteri(this.target, 10241, 9728), Ovoid.gl.texParameteri(this.target, 10242, 33071), Ovoid.gl.texParameteri(this.target, 10243, 33071));
    Ovoid.gl.bindTexture(this.target, null);
    Ovoid._logGlerror("Ovoid.Texture.setFilter :: " + this.url)
};
Ovoid.Texture.prototype.loadSource = function (b, c) {
    var e = this.url = b;
    Ovoid.opt_debugMode && (e += "?" + Math.random());
    this.handle = Ovoid.gl.createTexture();
    this.target = 3553;
    this.filter = c;
    this.pixmap = new Image;
    this.pixmap.o = this;
    this.pixmap.onload = this._handleLoad;
    this.pixmap.onerror = this._handleError;
    this.pixmap.src = e
};
Ovoid.Texture.prototype.create2d = function (b, c, e, g) {
    Ovoid._clearGlerror();
    this.handle = Ovoid.gl.createTexture();
    this.target = Ovoid.gl.TEXTURE_2D;
    Ovoid.gl.bindTexture(this.target, this.handle);
    Ovoid.gl.texImage2D(Ovoid.gl.TEXTURE_2D, 0, b, c, e, 0, b, Ovoid.gl.UNSIGNED_BYTE, g);
    Ovoid.gl.bindTexture(this.target, null);
    Ovoid._logGlerror("Ovoid.Texture.create2d :: " + this.name)
};
Ovoid.Texture.prototype.bind = function () {
    Ovoid.gl.bindTexture(this.target, this.handle)
};
Ovoid.Texture.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Texture);
    return c
};
Ovoid.Texture.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.TEXTURE;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.url = this.url;
    b.fl = this.filter;
    return b
};
Ovoid.Material = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.MATERIAL;
    this.name = b;
    this.color = Ovoid.Color.newArray(5);
    this.color[0].set(1, 1, 1, 1);
    this.color[1].set(0, 1, 0, 1);
    this.color[2].set(1, 1, 1, 1);
    this.color[3].set(0, 0, 0, 1);
    this.color[4].set(1, 1, 1, 1);
    this.texture = Array(6);
    for (b = 6; b--;) this.texture[b] = null;
    this.shininess = 100;
    this.reflectivity = 0;
    this.opacity = 1
};
Ovoid.Material.prototype = new Ovoid.Node;
Ovoid.Material.prototype.constructor = Ovoid.Material;
Ovoid.Material.prototype.setTexture = function (b, c) {
    5 < b || (null != this.texture[b] && this.breakDepend(this.texture[b]), this.texture[b] = c, null != c && this.makeDepend(c))
};
Ovoid.Material.prototype.setColor = function (b, c, e, g, f) {
    this.color[b].v[0] = c;
    this.color[b].v[1] = e;
    this.color[b].v[2] = g;
    this.color[b].v[3] = f
};
Ovoid.Material.prototype.setColorv = function (b, c) {
    this.color[b].v.set(c)
};
Ovoid.Material.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.MATERIAL;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.name : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.cl = this.color;
    b.tx = Array(6);
    for (c = 0; 6 > c; c++) b.tx[c] = this.texture[c] ?
        this.texture[c].uid : "null";
    b.sh = this.shininess;
    b.re = this.reflectivity;
    b.op = this.opacity;
    return b
};
Ovoid.Camera = function (b) {
    Ovoid.Transform.call(this);
    this.type |= Ovoid.CAMERA;
    this.name = b;
    this.viewY = this.viewX = 1;
    this.fov = 60;
    this.clipNear = this.aspect = 1;
    this.clipFar = 500;
    this.lookat = new Ovoid.Matrix4;
    this.perspective = new Ovoid.Matrix4;
    this.orthographic = new Ovoid.Matrix4;
    this.eyeview = new Ovoid.Matrix4;
    this._fstum = Ovoid.Point.newArray(6);
    this.unCach(Ovoid.CACH_VIEWPROJ)
};
Ovoid.Camera.prototype = new Ovoid.Transform;
Ovoid.Camera.prototype.constructor = Ovoid.Camera;
Ovoid.Camera.prototype.setView = function (b, c) {
    this.viewX = b;
    this.viewY = c;
    this.aspect = b / c;
    this.unCach(Ovoid.CACH_VIEWPROJ)
};
Ovoid.Camera.prototype.setFov = function (b) {
    this.fov = b;
    this.unCach(Ovoid.CACH_VIEWPROJ)
};
Ovoid.Camera.prototype.setCliping = function (b, c) {
    this.clipNear = b;
    this.clipFar = c;
    this.unCach(Ovoid.CACH_VIEWPROJ)
};
Ovoid.Camera.prototype.isWatching = function (b) {
    if (b.worldPosition.dist(this.worldPosition) < b.boundingSphere.radius) return !0;
    for (var c = 5; c--;)
        if (this._fstum[c].v[0] * b.boundingSphere.worldCenter.v[0] + this._fstum[c].v[1] * b.boundingSphere.worldCenter.v[1] + this._fstum[c].v[2] * b.boundingSphere.worldCenter.v[2] + this._fstum[c].v[3] <= -b.boundingSphere.radius) return !1;
    return !0
};
Ovoid.Camera.prototype.unproject = function (b, c, e, g) {
    var f = new Ovoid.Matrix4;
    f.copy(this.eyeview);
    f.toInverse();
    var h, b = 2 * (b / this.viewX) - 1,
        c = 2 * (c / this.viewY) - 1;
    h = 2 * e - 1;
    e = new Ovoid.Point;
    e.v[0] = b * f.m[0] + c * f.m[4] + h * f.m[8] + f.m[12];
    e.v[1] = b * f.m[1] + c * f.m[5] + h * f.m[9] + f.m[13];
    e.v[2] = b * f.m[2] + c * f.m[6] + h * f.m[10] + f.m[14];
    e.v[3] = b * f.m[3] + c * f.m[7] + h * f.m[11] + f.m[15];
    e.v[0] /= e.v[3];
    e.v[1] /= e.v[3];
    e.v[2] /= e.v[3];
    e.v[3] = 1;
    f = new Ovoid.Vector(0, 1, 0);
    b = new Ovoid.Vector;
    c = new Ovoid.Vector;
    h = new Ovoid.Vector;
    b.subOf(e,
        this.worldPosition);
    b.normalize();
    h.crossOf(f, b);
    c.crossOf(b, h);
    g.m[0] = h.v[0];
    g.m[1] = h.v[1];
    g.m[2] = h.v[2];
    g.m[4] = c.v[0];
    g.m[5] = c.v[1];
    g.m[6] = c.v[2];
    g.m[8] = b.v[0];
    g.m[9] = b.v[1];
    g.m[10] = b.v[2];
    g.m[12] = e.v[0];
    g.m[13] = e.v[1];
    g.m[14] = e.v[2];
    g.m[15] = 1;
    return !0
};
Ovoid.Camera.prototype.cachCamera = function () {
    if (!(this.cach & Ovoid.CACH_VIEWPROJ)) {
        var b = 1 / Math.tan(0.5 * Ovoid.deg2Rad(this.fov));
        this.perspective.m[0] = b / this.aspect;
        this.perspective.m[5] = b;
        this.perspective.m[15] = 0;
        this.perspective.m[11] = -1;
        Ovoid.Drawer.opt_shadowCasting ? (b = 1 / (this.clipNear - -1), this.perspective.m[10] = 0, this.perspective.m[14] = -2 * this.clipNear * b) : (b = 1 / (this.clipNear - this.clipFar), this.perspective.m[10] = (this.clipFar + this.clipNear) * b, this.perspective.m[14] = 2 * this.clipFar * this.clipNear *
            b);
        this.orthographic.m[0] = 2 / this.viewX;
        this.orthographic.m[5] = 2 / this.viewY;
        this.orthographic.m[10] = -2 / (this.clipNear - this.clipFar);
        this.orthographic.m[3] = 0;
        this.orthographic.m[7] = 0;
        this.orthographic.m[11] = (this.clipNear + this.clipFar) / (this.clipNear - this.clipFar);
        this.orthographic.m[12] = -1;
        this.orthographic.m[13] = 1;
        this.orthographic.m[14] = 0;
        this.addCach(Ovoid.CACH_VIEWPROJ)
    }
    if (!(this.cach & Ovoid.CACH_WORLD)) {
        var c = new Ovoid.Vector(this.worldMatrix.m[0], this.worldMatrix.m[1], this.worldMatrix.m[2]),
            e =
                new Ovoid.Vector(this.worldMatrix.m[4], this.worldMatrix.m[5], this.worldMatrix.m[6]),
            b = new Ovoid.Vector(this.worldMatrix.m[8], this.worldMatrix.m[9], this.worldMatrix.m[10]),
            g = new Ovoid.Vector(this.worldMatrix.m[12], this.worldMatrix.m[13], this.worldMatrix.m[14]);
        this.lookat.m[0] = c.v[0];
        this.lookat.m[4] = c.v[1];
        this.lookat.m[8] = c.v[2];
        this.lookat.m[1] = e.v[0];
        this.lookat.m[5] = e.v[1];
        this.lookat.m[9] = e.v[2];
        this.lookat.m[2] = b.v[0];
        this.lookat.m[6] = b.v[1];
        this.lookat.m[10] = b.v[2];
        this.lookat.m[12] = -g.v[0] *
            c.v[0] + -g.v[1] * c.v[1] + -g.v[2] * c.v[2];
        this.lookat.m[13] = -g.v[0] * e.v[0] + -g.v[1] * e.v[1] + -g.v[2] * e.v[2];
        this.lookat.m[14] = -g.v[0] * b.v[0] + -g.v[1] * b.v[1] + -g.v[2] * b.v[2];
        this.eyeview.multOf(this.lookat, this.perspective);
        if (Ovoid.Queuer.opt_viewcull) {
            for (i = b = 0; 3 > i; i++) this._fstum[b].v[0] = this.eyeview.m[3] - this.eyeview.m[0 + i], this._fstum[b].v[1] = this.eyeview.m[7] - this.eyeview.m[4 + i], this._fstum[b].v[2] = this.eyeview.m[11] - this.eyeview.m[8 + i], this._fstum[b].v[3] = this.eyeview.m[15] - this.eyeview.m[12 + i], b++, this._fstum[b].v[0] =
                this.eyeview.m[3] + this.eyeview.m[0 + i], this._fstum[b].v[1] = this.eyeview.m[7] + this.eyeview.m[4 + i], this._fstum[b].v[2] = this.eyeview.m[11] + this.eyeview.m[8 + i], this._fstum[b].v[3] = this.eyeview.m[15] + this.eyeview.m[12 + i], b++;
            for (b = 6; b--;) c = Math.sqrt(this._fstum[b].v[0] * this._fstum[b].v[0] + this._fstum[b].v[1] * this._fstum[b].v[1] + this._fstum[b].v[2] * this._fstum[b].v[2]), this._fstum[b].v[0] /= c, this._fstum[b].v[1] /= c, this._fstum[b].v[2] /= c, this._fstum[b].v[3] /= c
        }
    }
};
Ovoid.Camera.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.CAMERA;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr =
        this.rotation;
    b.vx = this.viewX;
    b.vy = this.viewY;
    b.fv = this.fov;
    b.ar = this.aspect;
    b.cn = this.clipNear;
    b.cf = this.clipFar;
    return b
};
Ovoid.Light = function (b) {
    Ovoid.Transform.call(this);
    this.type |= Ovoid.LIGHT;
    this.name = b;
    this.model = Ovoid.LIGHT_POINT;
    this.color = new Ovoid.Color(1, 1, 1, 1);
    this.attenuationC = this.intensity = 1;
    this.attenuationL = 0;
    this.attenuationQ = 0.01;
    this.range = 1 / (0.01 * this.attenuationL + Math.sqrt(0.01 * this.attenuationQ));
    this.falloff = 0;
    this.spotAngle = Ovoid.deg2Rad(180);
    this.shadowCasting = !0
};
Ovoid.Light.prototype = new Ovoid.Transform;
Ovoid.Light.prototype.constructor = Ovoid.Light;
Ovoid.Light.prototype.setColor = function (b, c, e, g) {
    this.color.set(b, c, e, g)
};
Ovoid.Light.prototype.setColorv = function (b) {
    this.color.v.set(b)
};
Ovoid.Light.prototype.setRange = function (b) {
    this.range = b;
    this.unCach(Ovoid.CACH_LIGHT)
};
Ovoid.Light.prototype.setAttenuation = function (b, c, e) {
    this.attenuationC = b;
    this.attenuationL = c;
    this.attenuationQ = e;
    if (0 < this.attenuationQ || 0 < this.attenuationL) this.range = 1 / (0.01 * this.attenuationL + Math.sqrt(0.01 * this.attenuationQ));
    this.unCach(Ovoid.CACH_LIGHT)
};
Ovoid.Light.prototype.setSpotAngle = function (b, c) {
    this.spotAngle = Ovoid.deg2Rad(b);
    if (c) this.falloff = c
};
Ovoid.Light.prototype.isLightening = function (b) {
    return this.boundingSphere.worldCenter.dist(b.boundingSphere.worldCenter) <= this.boundingSphere.radius + b.boundingSphere.radius
};
Ovoid.Light.prototype.cachLight = function () {
    this.model == Ovoid.LIGHT_DIRECTIONAL && (this.worldPosition.v[3] = 0);
    this.cach & Ovoid.CACH_LIGHT || (this.boundingSphere.setRadius(this.range), this.addCach(Ovoid.CACH_LIGHT))
};
Ovoid.Light.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.LIGHT;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pivot = this.pivot;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.md = this.model;
    b.cl = this.color;
    b.it = this.intensity;
    b.ac = this.attenuationC;
    b.al = this.attenuationL;
    b.aq = this.attenuationQ;
    b.rn = this.range;
    b.ff = this.falloff;
    b.sa = this.spotAngle;
    b.sc = this.shadowCasting;
    return b
};
Ovoid.Action = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.ACTION;
    this.name = b;
    this.onEnter = function () {};
    this.onLeave = function () {};
    this.onOver = function () {};
    this.onLmbDn = function () {};
    this.onLmbUp = function () {};
    this.onLmbHl = function () {};
    this.onMmbDn = function () {};
    this.onMmbUp = function () {};
    this.onMmbHl = function () {};
    this.onRmbDn = function () {};
    this.onRmbUp = function () {};
    this.onRmbHl = function () {};
    this.onGrabd = function () {};
    this.onUgrabd = function () {};
    this.onIntersect = [
        [],
        []
    ];
    this.onIntersectEnter = [
        [],
        []
    ];
    this.onIntersectLeave = [
        [],
        []
    ]
};
Ovoid.Action.prototype = new Ovoid.Node;
Ovoid.Action.prototype.constructor = Ovoid.Action;
Ovoid.Action.prototype.linkNode = function (b) {
    for (i = this.link.length; i--;)
        if (this.link[i] === b) return;
    b.pickable = !0;
    if (this.onIntersect.length || this.onIntersectEnter.length || this.onIntersectLeave.length) b.intersectable = !0;
    b.makeDepend(this)
};
Ovoid.Action.prototype.setTrigger = function (b, c, e) {
    switch (b) {
    case 0:
        this.onEnter = c;
        break;
    case 1:
        this.onLeave = c;
        break;
    case 2:
        this.onOver = c;
        break;
    case 3:
        this.onLmbDn = c;
        break;
    case 4:
        this.onLmbUp = c;
        break;
    case 5:
        this.onLmbHl = c;
        break;
    case 6:
        this.onMmbDn = c;
        break;
    case 7:
        this.onMmbUp = c;
        break;
    case 8:
        this.onMmbHl = c;
        break;
    case 9:
        this.onRmbDn = c;
        break;
    case 10:
        this.onRmbUp = c;
        break;
    case 11:
        this.onRmbHl = c;
        break;
    case 12:
        this.onGrabd = c;
        break;
    case 13:
        this.onUgrabd = c;
        break;
    case 14:
        this.onIntersect[0].push(e);
        this.onIntersect[1].push(c);
        for (b = this.link.length; b--;) this.link[b].intersectable = !0;
        if (e) e.intersectable = !0;
        break;
    case 15:
        this.onIntersectEnter[0].push(e);
        this.onIntersectEnter[1].push(c);
        for (b = this.link.length; b--;) this.link[b].intersectable = !0;
        if (e) e.intersectable = !0;
        break;
    case 16:
        this.onIntersectLeave[0].push(e);
        this.onIntersectLeave[1].push(c);
        for (b = this.link.length; b--;) this.link[b].intersectable = !0;
        if (e) e.intersectable = !0
    }
};
Ovoid.Action.prototype.cachAction = function () {
    if (!(this.cach & Ovoid.CACH_ACTION)) {
        var b;
        for (b = this.link.length; b--;) {
            if (this.link[b].uid == Ovoid.Input.mouseLeaveUid) this.onLeave(this.link[b]), document.body.style.cursor = "default";
            if (this.link[b].uid == Ovoid.Input.mouseEnterUid) this.onEnter(this.link[b]), Ovoid.Input.mouseOverNode = this.link[b];
            if (0 == Ovoid.Input.mouseOverUid) Ovoid.Input.mouseOverNode = null;
            else if (this.link[b].uid == Ovoid.Input.mouseOverUid && (document.body.style.cursor = "pointer", this.onOver(this.link[b]), !Ovoid.Input.grabbedNode)) {
                if (Ovoid.Input.intDn[0]) this.onLmbDn(this.link[b]);
                if (Ovoid.Input.intUp[0]) this.onLmbUp(this.link[b]);
                if (Ovoid.Input.intHl[0]) this.onLmbHl(this.link[b]);
                if (Ovoid.Input.intDn[1]) this.onMmbDn(this.link[b]);
                if (Ovoid.Input.intUp[1]) this.onMmbUp(this.link[b]);
                if (Ovoid.Input.intHl[1]) this.onMmbHl(this.link[b]);
                if (Ovoid.Input.intDn[2]) this.onRmbDn(this.link[b]);
                if (Ovoid.Input.intUp[2]) this.onRmbUp(this.link[b]);
                if (Ovoid.Input.intHl[2]) this.onRmbHl(this.link[b])
            }
            if (this.link[b] ==
                Ovoid.Input.grabbedNode) {
                document.body.style.cursor = "crosshair";
                this.onGrabd(this.link[b]);
                if (Ovoid.Input.intDn[0]) this.onLmbDn(this.link[b]);
                if (Ovoid.Input.intUp[0]) this.onLmbUp(this.link[b]);
                if (Ovoid.Input.intHl[0]) this.onLmbHl(this.link[b]);
                if (Ovoid.Input.intDn[1]) this.onMmbDn(this.link[b]);
                if (Ovoid.Input.intUp[1]) this.onMmbUp(this.link[b]);
                if (Ovoid.Input.intHl[1]) this.onMmbHl(this.link[b]);
                if (Ovoid.Input.intDn[2]) this.onRmbDn(this.link[b]);
                if (Ovoid.Input.intUp[2]) this.onRmbUp(this.link[b]);
                if (Ovoid.Input.intHl[2]) this.onRmbHl(this.link[b])
            } else this.onUgrabd(this.link[b]);
            if (this.onIntersect[0].length)
                for (var c = this.link[b].intersect.count, e = this.onIntersect[0].length; e--;)
                    if (null == this.onIntersect[0][e])
                        for (; c--;) this.onIntersect[1][e](this.link[b], this.link[b].intersect[c]);
                    else
                        for (; c--;)
                            if (this.link[b].intersect[c] === this.onIntersect[0][e]) this.onIntersect[1][e](this.link[b], this.link[b].intersect[c]);
            if (this.onIntersectEnter[0].length) {
                c = this.link[b].enter.count;
                for (e = this.onIntersectEnter[0].length; e--;)
                    if (null == this.onIntersectEnter[0][e])
                        for (; c--;) this.onIntersectEnter[1][e](this.link[b],
                            this.link[b].enter[c]);
                    else
                        for (; c--;)
                            if (this.link[b].enter[c] === this.onIntersectEnter[0][e]) this.onIntersectEnter[1][e](this.link[b], this.link[b].enter[c])
            }
            if (this.onIntersectLeave[0].length) {
                c = this.link[b].leave.count;
                for (e = this.onIntersectLeave[0].length; e--;)
                    if (null == this.onIntersectLeave[0][e])
                        for (; c--;) this.onIntersectLeave[1][e](this.link[b], this.link[b].leave[c]);
                    else
                        for (; c--;)
                            if (this.link[b].leave[c] === this.onIntersectLeave[0][e]) this.onIntersectLeave[1][e](this.link[b], this.link[b].leave[c])
            }
        }
        this.addCach(Ovoid.CACH_ACTION)
    }
};
Ovoid.Action.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.ACTION;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.onEnter = "" + this.onEnter;
    b.onLeave = "" + this.onLeave;
    b.onOver = "" +
        this.onOver;
    b.onLmbDn = "" + this.onLmbDn;
    b.onLmbUp = "" + this.onLmbUp;
    b.onLmbHl = "" + this.onLmbHl;
    b.onMmbDn = "" + this.onMmbDn;
    b.onMmbUp = "" + this.onMmbUp;
    b.onMmbHl = "" + this.onMmbHl;
    b.onRmbDn = "" + this.onRmbDn;
    b.onRmbUp = "" + this.onRmbUp;
    b.onRmbHl = "" + this.onRmbHl;
    b.onGrabd = "" + this.onGrabd;
    b.onUgrabd = "" + this.onUgrabd;
    b.onIntersect = [
        [],
        []
    ];
    for (c = 0; c < this.onIntersect[0].length; c++) b.onIntersect[0][c] = this.onIntersect[0][c].uid, b.onIntersect[1][c] = "" + this.onIntersect[1][c];
    b.onIntersectEnter = [
        [],
        []
    ];
    for (c = 0; c < this.onIntersectEnter[0].length; c++) b.onIntersectEnter[0][c] =
        this.onIntersectEnter[0][c].uid, b.onIntersectEnter[1][c] = "" + this.onIntersectEnter[1][c];
    b.onIntersectLeave = [
        [],
        []
    ];
    for (c = 0; c < this.onIntersectLeave[0].length; c++) b.onIntersectLeave[0][c] = this.onIntersectLeave[0][c].uid, b.onIntersectLeave[1][c] = "" + this.onIntersectLeave[1][c];
    return b
};
Ovoid.Constraint = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.CONSTRAINT;
    this.name = b;
    this.target = []
};
Ovoid.Constraint.prototype = new Ovoid.Node;
Ovoid.Constraint.prototype.constructor = Ovoid.Constraint;
Ovoid.Constraint.prototype.setTarget = function (b) {
    this.target.push(b);
    b.makeDepend(this)
};
Ovoid.Constraint.prototype.remTarget = function (b) {
    for (var c = this.target.length; c--;) this.target[c] === b && (this.target.splice(c, 1), b.breakDepend(this))
};
Ovoid.Constraint.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.CONSTRAINT;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ct = [];
    for (c = 0; c < this.target.length; c++) b.ct[c] = this.target[c].uid;
    return b
};
Ovoid.Animation = function (b) {
    Ovoid.Constraint.call(this);
    this.type |= Ovoid.ANIMATION;
    this.name = b;
    this.ended = this.loop = this.playing = !1;
    this.smooth = !0;
    this.factor = 1;
    this.onended = function () {};
    this._format = 0;
    this._channel = Array(21);
    this._output = new Float32Array(21);
    this._time = 0
};
Ovoid.Animation.prototype = new Ovoid.Constraint;
Ovoid.Animation.prototype.constructor = Ovoid.Animation;
Ovoid.Animation.prototype.setCspline = function (b, c, e) {
    this._format |= b;
    for (var g = 0, f = 1; 21 > g; g++, f <<= 1) b & f && (this._channel[g] = new Ovoid.Cspline(c, e))
};
Ovoid.Animation.prototype.setHspline = function (b, c, e, g) {
    this._format |= b;
    for (var f = 0, h = 1; 21 > f; f++, h <<= 1) b & h && (this._channel[f] = new Ovoid.Hspline(c, e, g))
};
Ovoid.Animation.prototype.setBspline = function (b, c, e, g, f) {
    this._format |= b;
    for (var h = 0, l = 1; 21 > h; h++, l <<= 1) b & l && (this._channel[h] = new Ovoid.Bspline(c, e, g, f))
};
Ovoid.Animation.prototype.setLoop = function (b) {
    this.loop = b
};
Ovoid.Animation.prototype.stop = function () {
    if (this.playing) this.playing = !1
};
Ovoid.Animation.prototype.play = function (b) {
    if (b) this.factor = b;
    if (this.ended)
        for (; i--;)
            if (this._channel[i]) this._channel[i]._stop = !1;
    this.playing = !0
};
Ovoid.Animation.prototype.rewind = function (b) {
    var c = 32;
    if (b) this.factor = b;
    if (0 < this.factor)
        for (; c--;) {
            if (this._channel[c]) this._channel[c].seekStart(this.smooth, 0), this._channel[c]._stop = !1, this._output[c] = this._channel[c].getOutput(this.smooth)
        } else
            for (; c--;)
                if (this._channel[c]) this._channel[c].seekEnd(this.smooth, 0), this._channel[c]._stop = !1, this._output[c] = this._channel[c].getOutput(this.smooth);
    this.target[0] && (this._format & Ovoid.ANIMATION_CHANNEL_TRANSLATE && (this.target[0].translation.setv(this._output.subarray(0,
        3)), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_ROTATE && (this.target[0].rotation.fromEulerXyz(this._output[3], this._output[4], this._output[5]), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_ORIENTE && (this.body.orientation.fromEulerXyz(this._output[6], this._output[7], this._output[8]), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_SCALE && (this.target[0].scaling.setv(this._output.subarray(9,
        12)), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)));
    this._time = 0;
    this.ended = !1
};
Ovoid.Animation.prototype.time = function () {
    return this._time
};
Ovoid.Animation.prototype.cachAnimation = function () {
    if (this.playing) {
        this.playing = !1;
        var b = Ovoid.Timer.quantum * this.factor,
            c = 32;
        if (0 < this.factor)
            for (; c--;) {
                if (this._channel[c] && !this._channel[c]._stop) this._channel[c].seekForward(this.smooth, b), this._output[c] = this._channel[c].getOutput(this.smooth), this.playing = !0
            } else
                for (; c--;)
                    if (this._channel[c] && !this._channel[c]._stop) this._channel[c].seekBackward(this.smooth, b), this._output[c] = this._channel[c].getOutput(this.smooth), this.playing = !0;
        this._time +=
            Ovoid.Timer.quantum * this.factor;
        if (!this.playing)
            if (this.onended(this), this.loop) {
                if (0 < this.factor)
                    for (; c--;) {
                        if (this._channel[c]) this._channel[c].seekStart(this.smooth, 0), this._channel[c]._stop = !1, this._output[c] = this._channel[c].getOutput(this.smooth)
                    } else
                        for (; c--;)
                            if (this._channel[c]) this._channel[c].seekEnd(this.smooth, 0), this._channel[c]._stop = !1, this._output[c] = this._channel[c].getOutput(this.smooth);
                this._time = 0;
                this.ended = !1;
                this.playing = !0
            } else {
                this.ended = !0;
                return
            }
        this.target[0] && (this._format &
            Ovoid.ANIMATION_CHANNEL_TRANSLATE && (this.target[0].translation.setv(this._output.subarray(0, 3)), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_ROTATE && (this.target[0].rotation.fromEulerXyz(this._output[3], this._output[4], this._output[5]), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_ORIENTE && (this.body.orientation.fromEulerXyz(this._output[6], this._output[7], this._output[8]), this.target[0].unCach(Ovoid.CACH_WORLD |
                Ovoid.CACH_TRANSFORM)), this._format & Ovoid.ANIMATION_CHANNEL_SCALE && (this.target[0].scaling.setv(this._output.subarray(9, 12)), this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)))
    }
};
Ovoid.Animation.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.ANIMATION;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ct = [];
    for (c = 0; c < this.target.length; c++) b.ct[c] = this.target[c].uid;
    b.ft = this._format;
    b.pl = this.playing;
    b.lo = this.loop;
    b.en = this.ended;
    b.sm = this.smooth;
    b.fc = this.factor;
    b.cn = Array(21);
    for (c = 0; 21 > c; c++) b.cn[c] = this._channel[c] ? this._channel[c] : "null";
    b.oe = "" + this.onended;
    return b
};
Ovoid.Expression = function (b) {
    Ovoid.Constraint.call(this);
    this.type |= Ovoid.EXPRESSION;
    this.name = b;
    this.playing = !1;
    this.timel = this.timeq = 0;
    this.factor = 1;
    this.exprfunc = []
};
Ovoid.Expression.prototype = new Ovoid.Constraint;
Ovoid.Expression.prototype.constructor = Ovoid.Expression;
Ovoid.Expression.prototype.addExpression = function (b) {
    this.exprfunc.push(b)
};
Ovoid.Expression.prototype.stop = function () {
    this.playing = !1
};
Ovoid.Expression.prototype.play = function (b) {
    if (b) this.factor = b;
    this.playing = !0
};
Ovoid.Expression.prototype.cachExpression = function () {
    if (!(this.cach & Ovoid.CACH_EXPRESSION)) {
        if (this.playing) {
            this.timeq = this.factor * Ovoid.Timer.quantum;
            this.timel += this.timeq;
            var b, c, e;
            b = this.target.length;
            for (e = this.exprfunc.length; b--;)
                for (c = 0; c < e; c++) this.exprfunc[c](this.target[b], this.timeq, this.timel)
        }
        this.addCach(Ovoid.CACH_EXPRESSION)
    }
};
Ovoid.Expression.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.EXPRESSION;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ct = [];
    for (c = 0; c < this.target.length; c++) b.ct[c] = this.target[c].uid;
    b.pl = this.playing;
    b.fc = this.factor;
    b.ex = [];
    for (c = 0; c < this.exprfunc.length; c++) b.ex[c] = "" + this.exprfunc[c];
    return b
};
Ovoid.Physics = function (b) {
    Ovoid.Constraint.call(this);
    this.type |= Ovoid.PHYSICS;
    this.name = b;
    this.imass = 10;
    this.itensor = new Ovoid.Matrix3;
    this.model = Ovoid.RIGID_MASSIVE_SPHERE;
    this.angularDamping = this.linearDamping = 0.9;
    this.useFriction = !1;
    this.restitution = 0.5;
    this.linearVelocity = new Ovoid.Vector(0, 0, 0);
    this.angularVelocity = new Ovoid.Vector(0, 0, 0);
    this.sleeping = 1;
    this.oncontact = function () {};
    this._scaledLinear = new Ovoid.Vector(0, 0, 0);
    this._scaledTorque = new Ovoid.Vector(0, 0, 0);
    this.linearInfluence = new Ovoid.Vector(0,
        0, 0);
    this.torqueInfluence = new Ovoid.Vector(0, 0, 0);
    this._oldLinear = new Ovoid.Vector(0, 0, 0);
    this._oldTorque = new Ovoid.Vector(0, 0, 0);
    this._motion = 10 * Ovoid.PHYSICS_MOTION_EPSILON
};
Ovoid.Physics.prototype = new Ovoid.Constraint;
Ovoid.Physics.prototype.constructor = Ovoid.Physics;
Ovoid.Physics.prototype.setMass = function (b) {
    0 < b ? this.imass = 1 / b : this.imass = 0
};
Ovoid.Physics.prototype.setDamping = function (b, c) {
    this.linearDamping = b;
    this.angularDamping = c
};
Ovoid.Physics.prototype.newton = function (b) {
    if (!(this.cach & Ovoid.CACH_PHYSICS)) {
        var c;
        0 < this.imass ? c = 1 / this.imass : c = 0;
        this.linearInfluence.v[0] += c * b.v[0];
        this.linearInfluence.v[1] += c * b.v[1];
        this.linearInfluence.v[2] += c * b.v[2];
        this.unCach(Ovoid.CACH_INFLUENCES)
    }
};
Ovoid.Physics.prototype.newtonXyz = function (b, c, e) {
    if (!(this.cach & Ovoid.CACH_PHYSICS)) {
        var g;
        0 < this.imass ? g = 1 / this.imass : g = 0;
        this.linearInfluence.v[0] += g * b;
        this.linearInfluence.v[1] += g * c;
        this.linearInfluence.v[2] += g * e;
        this.unCach(Ovoid.CACH_INFLUENCES)
    }
};
Ovoid.Physics.prototype.wind = function (b) {
    this.cach & Ovoid.CACH_PHYSICS || (this.linearInfluence.addBy(b), this.unCach(Ovoid.CACH_INFLUENCES))
};
Ovoid.Physics.prototype.windXyz = function (b, c, e) {
    this.cach & Ovoid.CACH_PHYSICS || (this.linearInfluence.v[0] += b, this.linearInfluence.v[1] += c, this.linearInfluence.v[2] += e, this.unCach(Ovoid.CACH_INFLUENCES))
};
Ovoid.Physics.prototype.impulse = function (b, c, e) {
    if (0 < b.size2()) {
        this.linearInfluence.addBy(b);
        var g;
        switch (e) {
        case 1:
            e = c.v[0] * this.target[0].worldMatrix.m[0] + c.v[1] * this.target[0].worldMatrix.m[4] + c.v[2] * this.target[0].worldMatrix.m[8];
            g = c.v[0] * this.target[0].worldMatrix.m[1] + c.v[1] * this.target[0].worldMatrix.m[5] + c.v[2] * this.target[0].worldMatrix.m[9];
            c = c.v[0] * this.target[0].worldMatrix.m[2] + c.v[1] * this.target[0].worldMatrix.m[6] + c.v[2] * this.target[0].worldMatrix.m[10];
            break;
        default:
            e = c.v[0] - this.target[0].worldPosition.v[0],
            g = c.v[1] - this.target[0].worldPosition.v[1], c = c.v[2] - this.target[0].worldPosition.v[2]
        }
        this.torqueInfluence.v[0] += g * b.v[2] - c * b.v[1];
        this.torqueInfluence.v[1] += c * b.v[0] - e * b.v[2];
        this.torqueInfluence.v[2] += e * b.v[1] - g * b.v[0];
        this.unCach(Ovoid.CACH_INFLUENCES | Ovoid.CACH_PHYSICS)
    }
};
Ovoid.Physics.prototype.spring = function (b, c, e, g, f) {
    var h = new Ovoid.Vector;
    h.subOf(this.target[0].worldPosition, c);
    if (c = h.size()) h.normalize(), h.scaleBy(-((c - g) * e)), this.impulse(h, b, f)
};
Ovoid.Physics.prototype.clearInfluences = function () {
    this.linearVelocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.linearInfluence.set(0, 0, 0);
    this.torqueInfluence.set(0, 0, 0);
    this._motion = 10 * this.sleeping
};
Ovoid.Physics.prototype.getMotion = function () {
    return this._motion
};
Ovoid.Physics.prototype.cachPhysics = function () {
    if (this.model && !(this.cach & Ovoid.CACH_PHYSICS)) {
        if (0 < this.target[0].boundingBox.hsize.v[0] + this.target[0].boundingBox.hsize.v[1] + this.target[0].boundingBox.hsize.v[2]) {
            var b;
            0 < this.imass ? b = 1 / this.imass : b = 0;
            var c, e, g;
            switch (this.model) {
            case 2:
                g = 2 * this.target[0].boundingSphere.radius;
                g *= g;
                c = 1 / (0.3 * b * g);
                e = 1 / (0.3 * b * g);
                g = 1 / (0.3 * b * g);
                break;
            default:
                g = 2 * this.target[0].boundingBox.hsize.v[0];
                var f = 2 * this.target[0].boundingBox.hsize.v[1];
                e = 2 * this.target[0].boundingBox.hsize.v[2];
                g *= g;
                f *= f;
                e *= e;
                c = 1 / (0.333 * b * (f + e));
                e = 1 / (0.333 * b * (g + e));
                g = 1 / (0.333 * b * (g + f))
            }
            f = new Float32Array(9);
            f[0] = this.target[0].worldMatrix.m[0] * c;
            f[1] = this.target[0].worldMatrix.m[1] * e;
            f[2] = this.target[0].worldMatrix.m[2] * g;
            f[3] = this.target[0].worldMatrix.m[4] * c;
            f[4] = this.target[0].worldMatrix.m[5] * e;
            f[5] = this.target[0].worldMatrix.m[6] * g;
            f[6] = this.target[0].worldMatrix.m[8] * c;
            f[7] = this.target[0].worldMatrix.m[9] * e;
            f[8] = this.target[0].worldMatrix.m[10] * g;
            this.itensor.m[0] = f[0] * this.target[0].worldMatrix.m[0] +
                f[1] * this.target[0].worldMatrix.m[1] + f[2] * this.target[0].worldMatrix.m[2];
            this.itensor.m[1] = f[0] * this.target[0].worldMatrix.m[4] + f[1] * this.target[0].worldMatrix.m[5] + f[2] * this.target[0].worldMatrix.m[6];
            this.itensor.m[2] = f[0] * this.target[0].worldMatrix.m[8] + f[1] * this.target[0].worldMatrix.m[9] + f[2] * this.target[0].worldMatrix.m[10];
            this.itensor.m[3] = f[3] * this.target[0].worldMatrix.m[0] + f[4] * this.target[0].worldMatrix.m[1] + f[5] * this.target[0].worldMatrix.m[2];
            this.itensor.m[4] = f[3] * this.target[0].worldMatrix.m[4] +
                f[4] * this.target[0].worldMatrix.m[5] + f[5] * this.target[0].worldMatrix.m[6];
            this.itensor.m[5] = f[3] * this.target[0].worldMatrix.m[8] + f[4] * this.target[0].worldMatrix.m[9] + f[5] * this.target[0].worldMatrix.m[10];
            this.itensor.m[6] = f[6] * this.target[0].worldMatrix.m[0] + f[7] * this.target[0].worldMatrix.m[1] + f[8] * this.target[0].worldMatrix.m[2];
            this.itensor.m[7] = f[6] * this.target[0].worldMatrix.m[4] + f[7] * this.target[0].worldMatrix.m[5] + f[8] * this.target[0].worldMatrix.m[6];
            this.itensor.m[8] = f[6] * this.target[0].worldMatrix.m[8] +
                f[7] * this.target[0].worldMatrix.m[9] + f[8] * this.target[0].worldMatrix.m[10];
            this.linearInfluence.v[0] += b * Ovoid.opt_gravity[0];
            this.linearInfluence.v[1] += b * Ovoid.opt_gravity[1];
            this.linearInfluence.v[2] += b * Ovoid.opt_gravity[2];
            this.unCach(Ovoid.CACH_INFLUENCES)
        }
        this.cach & Ovoid.CACH_INFLUENCES || (this.linearInfluence.scaleBy(this.imass), this.torqueInfluence.transform3(this.itensor), this.linearInfluence.scaleBy(Ovoid.Timer.quantum), this.torqueInfluence.scaleBy(Ovoid.Timer.quantum), this.linearVelocity.addBy(this.linearInfluence),
            this.angularVelocity.addBy(this.torqueInfluence), this._oldLinear.copy(this.linearInfluence), this._oldTorque.copy(this.torqueInfluence), this.linearInfluence.set(0, 0, 0), this.torqueInfluence.set(0, 0, 0), this.addCach(Ovoid.CACH_INFLUENCES));
        this.linearVelocity.scaleBy(Math.pow(this.linearDamping, Ovoid.Timer.quantum));
        this.angularVelocity.scaleBy(Math.pow(this.angularDamping, Ovoid.Timer.quantum));
        this._scaledLinear.copy(this.linearVelocity);
        this._scaledLinear.scaleBy(Ovoid.Timer.quantum);
        this.target[0].translation.addBy(this._scaledLinear);
        this._scaledTorque.copy(this.angularVelocity);
        this._scaledTorque.scaleBy(Ovoid.Timer.quantum);
        this.target[0].rotation.vectorRotateBy(this._scaledTorque);
        this.target[0].rotation.normalize();
        b = Math.pow(0.1, Ovoid.Timer.quantum);
        this._motion = b * this._motion + (1 - b) * (this.linearVelocity.size() + this.angularVelocity.size());
        this._motion < this.sleeping && (this.clearInfluences(), this.addCach(Ovoid.CACH_PHYSICS));
        this.target[0].unCach(Ovoid.CACH_WORLD | Ovoid.CACH_TRANSFORM)
    }
};
Ovoid.Physics.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.PHYSICS;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ct = [];
    for (c = 0; c < this.target.length; c++) b.ct[c] = this.target[c].uid;
    b.im = this.imass;
    b.it = this.itensor;
    b.md = this.model;
    b.dm = this.damping;
    b.uf = this.useFriction;
    b.re = this.restitution;
    b.oc = "" + this.oncontact;
    return b
};
Ovoid.Skin = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.SKIN;
    this.name = b;
    this.mesh = null;
    this.joint = [];
    this.bindJointMatrix = [];
    this.bindShapeMatrix = new Ovoid.Matrix4;
    this.infWorldMatrix = [];
    this.infNormalMatrix = [];
    this.infMxfArray = new Float32Array(16 * Ovoid.MAX_JOINT_BY_SKIN);
    this.infMnrArray = new Float32Array(9 * Ovoid.MAX_JOINT_BY_SKIN);
    this.vertices = Array(Ovoid.MAX_MESH_LOD);
    this.triangles = Array(Ovoid.MAX_MESH_LOD)
};
Ovoid.Skin.prototype = new Ovoid.Node;
Ovoid.Skin.prototype.constructor = Ovoid.Skin;
Ovoid.Skin.prototype.linkJoint = function (b) {
    this.joint.push(b);
    this.makeDepend(b);
    b.skin = this;
    this.bindJointMatrix.push(new Ovoid.Matrix4);
    this.infWorldMatrix.push(new Ovoid.Matrix4);
    this.infNormalMatrix.push(new Ovoid.Matrix3);
    this.unCach(Ovoid.CACH_SKIN)
};
Ovoid.Skin.prototype.unlinkJoint = function (b) {
    for (var c = this.joint.length; c--;) this.joint[c] === b && (this.joint.splice(c, 1), this.bindJointMatrix.splice(c, 1), this.infWorldMatrix.splice(c, 1), this.infNormalMatrix.splice(c, 1));
    this.breakDepend(b);
    b.skin = null;
    this.unCach(Ovoid.CACH_SKIN)
};
Ovoid.Skin.prototype._localMirror = function () {
    for (var b = 0; b < Ovoid.MAX_MESH_LOD; b++) {
        this.triangles[b] = Ovoid.Triangle.newArray(this.mesh.triangles[b].length);
        this.vertices[b] = Ovoid.Vertex.newArray(this.mesh.vertices[b].length);
        for (var c = 0; c < this.mesh.triangles[b].length; c++) this.triangles[b][c].copy(this.mesh.triangles[b][c])
    }
};
Ovoid.Skin.prototype.bindSkin = function (b, c, e, g, f, h) {
    null != this.mesh && this.breakDepend(this.mesh);
    this.mesh = b;
    this.makeDepend(b);
    Ovoid.opt_localSkinData && this._localMirror();
    for (var l, m, b = this.mesh.vertices[0].length; b--;)
        for (m = g.length / 3; m--;) l = this.mesh.vertices[0][b].p, l.v[0] == g[3 * m + 0] && l.v[1] == g[3 * m + 1] && l.v[2] == g[3 * m + 2] && (l = 4 * m, this.mesh.vertices[0][b].i.setv(f.subarray(l, l + 4)), this.mesh.vertices[0][b].w.setv(h.subarray(l, l + 4)));
    this.bindShapeMatrix = c;
    c = e.length;
    for (b = 0; b < c; b++) this.bindJointMatrix[b] =
        new Ovoid.Matrix4, this.bindJointMatrix[b].multOf(this.bindShapeMatrix, e[b]);
    this.mesh.createBuffers(this.mesh._vformat | Ovoid.VERTEX_VEC4_I | Ovoid.VERTEX_VEC4_W, Ovoid.BUFFER_STATIC);
    this.unCach(Ovoid.CACH_SKIN)
};
Ovoid.Skin.prototype.cachSkin = function () {
    if (!(this.cach & Ovoid.CACH_SKIN)) {
        for (var b = this.joint.length, c = 0; c < b; c++) this.infWorldMatrix[c].multOf(this.bindJointMatrix[c], this.joint[c].worldMatrix), this.infNormalMatrix[c].fromMat4(this.infWorldMatrix[c]), this.infNormalMatrix[c].toNormalTransform(), this.infMxfArray.set(this.infWorldMatrix[c].m, 16 * c), this.infMnrArray.set(this.infNormalMatrix[c].m, 9 * c), this.joint[c].addCach(Ovoid.CACH_WORLD);
        if (Ovoid.opt_localSkinData && this.mesh) {
            for (var e = new Ovoid.Point(Ovoid.FLOAT_MAX,
                Ovoid.FLOAT_MAX, Ovoid.FLOAT_MAX, 1), g = new Ovoid.Point(Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, 1), f, h, b = this.mesh.vertices[0].length, c = 0; c < b; c++) h = this.vertices[0][c], f = this.mesh.vertices[0][c], h.p.set(0, 0, 0, 0), 0 != f.w.v[0] && h.p.addWeightTransform4Of(f.p, this.infWorldMatrix[f.i.v[0]], f.w.v[0]), 0 != f.w.v[1] && h.p.addWeightTransform4Of(f.p, this.infWorldMatrix[f.i.v[1]], f.w.v[1]), 0 != f.w.v[2] && h.p.addWeightTransform4Of(f.p, this.infWorldMatrix[f.i.v[2]], f.w.v[2]), 0 != f.w.v[3] && h.p.addWeightTransform4Of(f.p,
                this.infWorldMatrix[f.i.v[3]], f.w.v[3]), h.p.normalizeWeight(), h.p.v[0] > g.v[0] && (g.v[0] = h.p.v[0]), h.p.v[1] > g.v[1] && (g.v[1] = h.p.v[1]), h.p.v[2] > g.v[2] && (g.v[2] = h.p.v[2]), h.p.v[0] < e.v[0] && (e.v[0] = h.p.v[0]), h.p.v[1] < e.v[1] && (e.v[1] = h.p.v[1]), h.p.v[2] < e.v[2] && (e.v[2] = h.p.v[2]);
            if (Ovoid.Drawer.opt_shadowCasting) {
                h = new Ovoid.Vector;
                for (var l = new Ovoid.Vector, m = 0; m < this.triangles[0].length; m++) b = this.vertices[0][this.triangles[0][m].index[0]].p, c = this.vertices[0][this.triangles[0][m].index[1]].p, f = this.vertices[0][this.triangles[0][m].index[2]].p,
                h.subOf(b, c), l.subOf(b, f), this.triangles[0][m].normal.crossOf(h, l), this.triangles[0][m].center.set((b.v[0] + c.v[0] + f.v[0]) / 3, (b.v[1] + c.v[1] + f.v[1]) / 3, (b.v[2] + c.v[2] + f.v[2]) / 3, 1)
            }
            this.boundingBox.setBound(e, g);
            this.boundingSphere.setBound(e, g);
            for (c = 0; c < this.link.length; c++) this.link[c].unCach(Ovoid.CACH_BOUNDING_SHAPE)
        }
        this.addCach(Ovoid.CACH_SKIN)
    }
};
Ovoid.Skin.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.SKIN;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.mh = this.mesh ? this.mesh.uid : "null";
    b.jt = [];
    for (c = 0; c < this.joint.length; c++) b.jt[c] =
        this.joint[c].uid;
    b.bjm = this.bindJointMatrix;
    b.bsm = this.bindShapeMatrix;
    return b
};
Ovoid.Emitter = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.EMITTER;
    this.name = b;
    this.model = Ovoid.EMISSIVE;
    this.life = this.mass = 1;
    this.rate = 100;
    this.velocity = 5;
    this.damping = 0.1;
    this.delta = 0.2;
    this.scattering = 3.14;
    this.color = Ovoid.Color.newArray(2);
    this.color[0].set(1, 1, 1, 1);
    this.color[1].set(1, 1, 1, 0);
    this.size = Array(2);
    this.size[0] = 1;
    this.size[1] = 10;
    this.emits = !0;
    this.texture = null;
    this.billboard = !0;
    this._alives = this._ctdown = 0;
    this._vmatrix = new Ovoid.Matrix3;
    this._particles = Ovoid.Particle.newArray(Ovoid.MAX_EMITTER_PARTICLES);
    this._fbuffer = new Float32Array(11 * Ovoid.MAX_EMITTER_PARTICLES)
};
Ovoid.Emitter.prototype = new Ovoid.Node;
Ovoid.Emitter.prototype.constructor = Ovoid.Emitter;
Ovoid.Emitter.prototype.setColours = function (b, c, e, g, f, h, l, m) {
    this.color[0].set(b, c, e, g);
    this.color[1].set(f, h, l, m)
};
Ovoid.Emitter.prototype.setSprite = function (b) {
    this.texture = b
};
Ovoid.Emitter.prototype.setSizes = function (b, c) {
    this.size[0] = b;
    this.size[1] = c
};
Ovoid.Emitter.prototype.setVelocity = function (b, c, e) {
    this.velocity = b;
    this.delta = c;
    this.damping = e
};
Ovoid.Emitter.prototype.setScattering = function (b) {
    this.scattering = Ovoid.deg2Rad(b)
};
Ovoid.Emitter.prototype.getAlives = function () {
    return this._alives
};
Ovoid.Emitter.prototype.cachEmitter = function () {
    if (this.link[0]) {
        if (this.emits || 0 != this._alives) {
            var b;
            this._ctdown -= Ovoid.Timer.quantum;
            if (0 >= this._ctdown) b = Math.floor(this.rate * Ovoid.Timer.quantum), 1 > b && (b = 1), this._ctdown = 1 / this.rate;
            for (var c, e = 0; e < this.link.length; e++) this.link[e].type & Ovoid.BODY && (c = this.link[e])
        }
        if (0 != this._alives || 0 != b) {
            var g = new Ovoid.Point(Ovoid.FLOAT_MAX, Ovoid.FLOAT_MAX, Ovoid.FLOAT_MAX, 1),
                f = new Ovoid.Point(Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, Ovoid.FLOAT_MIN, 1),
                h, l, m, o, q;
            this.unCach(Ovoid.CACH_GEOMETRY);
            var w = new Ovoid.Point,
                v = new Ovoid.Vector(this.mass * Ovoid.opt_gravity[0], this.mass * Ovoid.opt_gravity[1], this.mass * Ovoid.opt_gravity[2]);
            v.scaleBy(Ovoid.Timer.quantum);
            var x = Math.pow(this.damping, Ovoid.Timer.quantum)
        }
        if (0 != this._alives || this.emits) {
            this._alives = 0;
            for (e = this._particles.length; e--;)
                if (0 < this._particles[e].l) this._particles[e].l -= Ovoid.Timer.quantum, q = this._particles[e].l / this.life, h = this._particles[e].p, l = this._particles[e].v, m = this._particles[e].c, o = this._particles[e].u, 0 == e % 50 && (w.copy(h),
                    w.transform4Inverse(c.worldMatrix), w.v[0] > f.v[0] && (f.v[0] = w.v[0]), w.v[1] > f.v[1] && (f.v[1] = w.v[1]), w.v[2] > f.v[2] && (f.v[2] = w.v[2]), w.v[0] < g.v[0] && (g.v[0] = w.v[0]), w.v[1] < g.v[1] && (g.v[1] = w.v[1]), w.v[2] < g.v[2] && (g.v[2] = w.v[2])), h.v[0] += l.v[0] * Ovoid.Timer.quantum, h.v[1] += l.v[1] * Ovoid.Timer.quantum, h.v[2] += l.v[2] * Ovoid.Timer.quantum, l.addBy(v), l.scaleBy(x), m.v[0] = this.color[1].v[0] + (this.color[0].v[0] - this.color[1].v[0]) * q, m.v[1] = this.color[1].v[1] + (this.color[0].v[1] - this.color[1].v[1]) * q, m.v[2] = this.color[1].v[2] +
                    (this.color[0].v[2] - this.color[1].v[2]) * q, m.v[3] = this.color[1].v[3] + (this.color[0].v[3] - this.color[1].v[3]) * q, o.v[2] = this.size[1] + (this.size[0] - this.size[1]) * q, this.billboard || this._particles[e].bufferCopy(this._fbuffer, 11 * this._alives), this._alives++;
                else if (this.emits && 0 < b) {
                h = this._particles[e].p;
                l = this._particles[e].v;
                m = this._particles[e].c;
                o = this._particles[e].u;
                this._particles[e].l = this.life;
                h.copy(c.worldPosition);
                1 == b && (w.copy(h), w.transform4Inverse(c.worldMatrix), w.v[0] > f.v[0] && (f.v[0] = w.v[0]),
                    w.v[1] > f.v[1] && (f.v[1] = w.v[1]), w.v[2] > f.v[2] && (f.v[2] = w.v[2]), w.v[0] < g.v[0] && (g.v[0] = w.v[0]), w.v[1] < g.v[1] && (g.v[1] = w.v[1]), w.v[2] < g.v[2] && (g.v[2] = w.v[2]));
                l.copy(c.worldDirection);
                var r = (1 - 2 * Math.random()) * this.scattering,
                    z = (1 - 2 * Math.random()) * this.scattering,
                    y = (1 - 2 * Math.random()) * this.scattering;
                h = Math.cos(r);
                q = Math.cos(z);
                var C = Math.cos(y),
                    r = Math.sin(r),
                    z = Math.sin(z),
                    y = Math.sin(y),
                    p = h * C,
                    D = h * y,
                    B = r * C,
                    u = r * y;
                this._vmatrix.m[0] = q * C;
                this._vmatrix.m[1] = q * y;
                this._vmatrix.m[2] = -z;
                this._vmatrix.m[3] = z * B -
                    D;
                this._vmatrix.m[4] = z * u + p;
                this._vmatrix.m[5] = q * r;
                this._vmatrix.m[6] = z * p + u;
                this._vmatrix.m[7] = z * D - B;
                this._vmatrix.m[8] = q * h;
                l.transform3(this._vmatrix);
                l.normalize();
                l.scaleBy(this.velocity + (1 - 2 * Math.random()) * this.delta);
                o.set(0, 1, this.size[0]);
                m.copy(this.color[0]);
                this.billboard || this._particles[e].bufferCopy(this._fbuffer, 11 * this._alives);
                this._alives++;
                b--
            }
        }
        if (!(this.cach & Ovoid.CACH_GEOMETRY)) {
            this.boundingBox.setBound(g, f);
            this.boundingSphere.setBound(g, f);
            for (e = 0; e < this.link.length; e++) this.link[e].unCach(Ovoid.CACH_BOUNDING_SHAPE);
            this.addCach(Ovoid.CACH_GEOMETRY)
        }
    }
};
Ovoid.Emitter.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.EMITTER;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.md = this.model;
    b.ms = this.mass;
    b.lf = this.life;
    b.rt = this.rate;
    b.vl =
        this.velocity;
    b.dm = this.damping;
    b.dt = this.delta;
    b.sc = this.scattering;
    b.cl = this.color;
    b.sz = this.size;
    b.em = this.emits;
    b.tx = this.texture;
    b.bb = this.billboard;
    return b
};
Ovoid.Layer = function (b) {
    Ovoid.Transform.call(this);
    this.type |= Ovoid.LAYER;
    this.name = b;
    this.size = new Ovoid.Coord(1, 1, 1);
    this.fgColor = new Ovoid.Color(0, 0, 0, 1);
    this.bgColor = new Ovoid.Color(1, 1, 1, 1);
    this.bgTexture = null;
    this.layerMatrix = new Ovoid.Matrix4;
    this.unCach(Ovoid.CACH_LAYER)
};
Ovoid.Layer.prototype = new Ovoid.Transform;
Ovoid.Layer.prototype.constructor = Ovoid.Layer;
Ovoid.Layer.prototype.setSize = function (b, c) {
    this.size.set(b, c, 1)
};
Ovoid.Layer.prototype.setBgColor = function (b, c, e, g) {
    this.bgColor.set(b, c, e, g)
};
Ovoid.Layer.prototype.setBgTexture = function (b) {
    null != this.bgTexture && this.breakDepend(this.bgTexture);
    this.bgTexture = b;
    null != b && this.makeDepend(b)
};
Ovoid.Layer.prototype.setFgColor = function (b, c, e, g) {
    this.fgColor.set(b, c, e, g)
};
Ovoid.Layer.prototype.isPointOver = function (b) {
    return b.v[0] >= this.worldMatrix.m[12] && b.v[0] <= this.worldMatrix.m[12] + this.size.v[0] && b.v[1] >= this.worldMatrix.m[13] && b.v[1] <= this.worldMatrix.m[13] + this.size.v[1]
};
Ovoid.Layer.prototype.cachLayer = function () {
    if (!(this.cach & Ovoid.CACH_WORLD) || !(this.cach & Ovoid.CACH_LAYER)) this.layerMatrix.copy(this.worldMatrix), this.layerMatrix.m[0] *= this.size.v[0], this.layerMatrix.m[1] *= this.size.v[1], this.layerMatrix.m[4] *= this.size.v[0], this.layerMatrix.m[5] *= this.size.v[1], this.layerMatrix.m[8] *= this.size.v[0], this.layerMatrix.m[9] *= this.size.v[1], this.addCach(Ovoid.CACH_LAYER)
};
Ovoid.Layer.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.LAYER;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pivot = this.pivot;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.sz = this.size;
    b.fc = this.fgColor;
    b.bc = this.bgColor;
    b.bt = this.bgTexture ? this.bgTexture.uid : "null";
    return b
};
Ovoid.Text = function (b) {
    Ovoid.Layer.call(this);
    this.type |= Ovoid.TEXT;
    this.name = b;
    this.fontmap = null;
    this.string = "";
    this.param = new Ovoid.Coord(16, 0.5, 1)
};
Ovoid.Text.prototype = new Ovoid.Layer;
Ovoid.Text.prototype.constructor = Ovoid.Text;
Ovoid.Text.prototype.setFormat = function (b, c, e) {
    this.param.set(b, c, e)
};
Ovoid.Text.prototype.setFontmap = function (b) {
    null != this.fontmap && this.breakDepend(this.fontmap);
    this.fontmap = b;
    null != b && this.makeDepend(b)
};
Ovoid.Text.prototype.getWidth = function () {
    for (var b, c, e = b = c = 0; e < this.string.length; e++) "\n" == this.string[e] && (b > c && (c = b), b = 0), b++;
    b > c && (c = b);
    return c * this.param.v[0] * this.param.v[1]
};
Ovoid.Text.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.TEXT;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pivot = this.pivot;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.sz = this.size;
    b.fc = this.fgColor;
    b.bc = this.bgColor;
    b.bt = this.bgTexture ? this.bgTexture.uid : "null";
    b.fm = this.fontmap ? this.fontmap.uid : "null";
    b.st = this.string;
    b.pr = this.param;
    return b
};
Ovoid.Audio = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.AUDIO;
    this.name = b;
    this.url = "";
    this.loadStatus = this.duration = this.samplerate = this.channels = 0;
    switch (Ovoid.al.type) {
    case 2:
        this._albuffer = null;
        break;
    case 3:
        this._albuffer = Ovoid.al.createBuffer(1, 1, 22050);
        break;
    default:
        this._albuffer = null
    }
};
Ovoid.Audio.prototype = new Ovoid.Node;
Ovoid.Audio.prototype.constructor = Ovoid.Audio;
Ovoid.Audio.prototype._handleLoad = function () {
    switch (Ovoid.al.type) {
    case 2:
        this.owner.loadStatus = 1;
        this.owner.duration = this.duration;
        break;
    case 3:
        311 < this.response.byteLength ? (this.owner._albuffer = Ovoid.al.createBuffer(this.response, !1), this.owner.loadStatus = 1) : (Ovoid.log(2, "Ovoid.Audio", "'" + this.owner.name + "' unable to load '" + this.owner.src + "'"), this.owner.loadStatus = -1);
        break;
    default:
        this.owner.loadStatus = 1, this.owner.duration = this.duration
    }
};
Ovoid.Audio.prototype._handleBuffer = function (b) {
    switch (Ovoid.al.type) {
    case 2:
        var c = 0;
        this.owner._albuffer && (c += this.owner._albuffer.length);
        c += b.frameBuffer.length;
        c = new Float32Array(c);
        this.owner._albuffer ? (c.set(this.owner._albuffer, 0), c.set(b.frameBuffer, this.owner._albuffer.length)) : c.set(b.frameBuffer);
        this.owner._albuffer = c
    }
};
Ovoid.Audio.prototype._handleMeta = function () {
    switch (Ovoid.al.type) {
    case 2:
        this.owner.channels = this.mozChannels, this.owner.samplerate = this.mozSampleRate
    }
};
Ovoid.Audio.prototype._handleError = function () {
    Ovoid.log(2, "Ovoid.Audio", "'" + this.owner.name + "' unable to load '" + this.owner.src + "'");
    this.owner.loadStatus = -1
};
Ovoid.Audio.prototype.loadSource = function (b) {
    b = this.url = b;
    Ovoid.opt_debugMode && (b += "?" + Math.random());
    switch (Ovoid.al.type) {
    case 1:
        this._albuffer = new Audio;
        this._albuffer.owner = this;
        this._albuffer.addEventListener("canplaythrough", this._handleLoad, !1);
        this._albuffer.addEventListener("error", this._handleError, !1);
        this._albuffer.src = b;
        this._albuffer.load();
        break;
    case 2:
        this._albuffer = new Audio;
        this._albuffer.owner = this;
        this._albuffer.addEventListener("loadeddata", this._handleLoad, !1);
        this._albuffer.addEventListener("error",
            this._handleError, !1);
        this._albuffer.src = b;
        this._albuffer.load();
        break;
    case 3:
        var c = new XMLHttpRequest;
        c.owner = this;
        c.onload = this._handleLoad;
        c.open("GET", b, !0);
        c.responseType = "arraybuffer";
        c.send()
    }
};
Ovoid.Audio.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Audio);
    return c
};
Ovoid.Audio.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.AUDIO;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.url = this.url;
    return b
};
Ovoid.Sound = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.SOUND;
    this.name = b;
    this.audio = null;
    this.flat = !0;
    this.outerCone = this.innerCone = 360;
    this.outerGain = 0.5;
    this.refDistance = 1;
    this.maxDistance = 0;
    this.rolloffFactor = 0.5;
    this._alpanner = this._algain = this._alsource = null;
    switch (Ovoid.al.type) {
    case 3:
        this._alsource = Ovoid.al.createBufferSource(), this._algain = Ovoid.al.createGainNode(), this._alpanner = Ovoid.al.createPanner(), this._algain.connect(Ovoid.al.destination)
    }
    this.unCach(Ovoid.CACH_SOUND)
};
Ovoid.Sound.prototype = new Ovoid.Transform;
Ovoid.Sound.prototype.constructor = Ovoid.Sound;
Ovoid.Sound.prototype.spatialize = function (b) {
    3 == Ovoid.al.type ? (this._alpanner.disconnect(), this._algain.disconnect(), b ? (this._alpanner.connect(this._algain), this._algain.connect(Ovoid.al.destination), this.flat = !1) : (this._algain.connect(Ovoid.al.destination), this.flat = !0)) : this.flat = !0
};
Ovoid.Sound.prototype.setPannerCone = function (b, c, e) {
    this.innerCone = b;
    this.outerCone = c;
    this.outerGain = e
};
Ovoid.Sound.prototype.setPannerDist = function (b, c, e) {
    this.refDistance = b;
    this.maxDistance = c;
    this.rolloffFactor = e
};
Ovoid.Sound.prototype.setAudio = function (b) {
    switch (Ovoid.al.type) {
    case 1:
        this._alsource = b._albuffer.cloneNode(!0);
        break;
    case 2:
        this._alsource = b._albuffer.cloneNode(!0)
    }
    null != this.audio && this.breakDepend(this.audio);
    this.audio = b;
    this.makeDepend(b)
};
Ovoid.Sound.prototype.setLoop = function (b) {
    if (this._alsource) switch (Ovoid.al.type) {
    case 1:
        this._alsource.loop = b;
        break;
    case 2:
        this._alsource.loop = b;
        break;
    case 3:
        this._alsource.loop = b
    }
};
Ovoid.Sound.prototype.play = function () {
    if (this._alsource) switch (Ovoid.al.type) {
    case 1:
        if (4 != this._alsource.readyState) break;
        this._alsource.currentTime = 0;
        this._alsource.play();
        break;
    case 2:
        if (4 != this._alsource.readyState) break;
        this._alsource.currentTime = 0;
        this._alsource.play();
        break;
    case 3:
        this._alsource = Ovoid.al.createBufferSource(), this.flat ? this._alsource.connect(this._algain) : this._alsource.connect(this._alpanner), this._alsource.buffer = this.audio._albuffer, this._alsource.noteOn(0)
    }
};
Ovoid.Sound.prototype.stop = function () {
    if (this._alsource) switch (Ovoid.al.type) {
    case 1:
        this._alsource.pause();
        break;
    case 2:
        this._alsource.pause();
        break;
    case 3:
        this._alsource.noteOff(0)
    }
};
Ovoid.Sound.prototype.volum = function (b) {
    if (this._alsource) switch (Ovoid.al.type) {
    case 1:
        1 < b && (b = 1);
        this._alsource.volume = b;
        break;
    case 2:
        1 < b && (b = 1);
        this._alsource.volume = b;
        break;
    case 3:
        this._algain.gain.value = b
    }
};
Ovoid.Sound.prototype.cachSound = function () {
    if (this.audio && 3 > Ovoid.al.type && this._alsource.duration && this._alsource.currentTime > this._alsource.duration - 0.7) this._alsource.pause(), this._alsource.currentTime = 0;
    if (!(this.cach & Ovoid.CACH_SOUND)) {
        if (3 == Ovoid.al.type) this._alpanner.coneInnerAngle = this.innerCone, this._alpanner.coneOuterAngle = this.outerCone, this._alpanner.coneOuterGain = this.outerGain, this._alpanner.refDistance = this.refDistance, this._alpanner.maxDistance = this.maxDistance, this._alpanner.rolloffFactor =
            this.rolloffFactor;
        this.addCach(Ovoid.CACH_SOUND)
    }!this.flat && !(this.cach & Ovoid.CACH_WORLD) && (this._alpanner.setPosition(this.worldMatrix.m[12], this.worldMatrix.m[13], this.worldMatrix.m[14]), this._alpanner.setOrientation(-this.worldMatrix.m[8], -this.worldMatrix.m[9], -this.worldMatrix.m[10], this.worldMatrix.m[4], this.worldMatrix.m[5], this.worldMatrix.m[6]), this.addCach(Ovoid.CACH_WORLD))
};
Ovoid.Sound.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.SOUND;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pivot = this.pivot;
    b.ts = this.scaling;
    b.tt = this.translation;
    b.to = this.orientation;
    b.tr = this.rotation;
    b.au = this.audio ? this.audio.uid : "null";
    b.fl = this.flat;
    if (this._alpanner) b.ia = this._alpanner.coneInnerAngle, b.oa = this._alpanner.coneOuterAngle, b.og = this._alpanner.coneOuterGain, b.rd = this._alpanner.refDistance, b.md = this._alpanner.maxDistance, b.rf = this._alpanner.rolloffFactor;
    b.lo = this._alsource ? this._alsource.loop : !1;
    return b
};
Ovoid.Sound.newArray = function (b) {
    for (var c = []; b--;) c.push(new Ovoid.Sound);
    return c
};
Ovoid.Track = function (b) {
    Ovoid.Node.call(this);
    this.type |= Ovoid.TRACK;
    this.name = b;
    this.ended = this.loop = this.playing = !1;
    this.factor = 1;
    this.animation = [];
    this.onended = function () {};
    this._time = 0
};
Ovoid.Track.prototype = new Ovoid.Node;
Ovoid.Track.prototype.constructor = Ovoid.Track;
Ovoid.Track.prototype.addAnimation = function (b) {
    this.animation.push(b);
    this.makeDepend(b)
};
Ovoid.Track.prototype.remAnimation = function (b) {
    for (var c = this.animation.length; c--;) this.animation[c] === b && this.animation.splice(c, 1);
    this.breakDepend(b)
};
Ovoid.Track.prototype.setLoop = function (b) {
    this.loop = b
};
Ovoid.Track.prototype.setFactor = function (b) {
    this.factor = b;
    for (b = this.animation.length; b--;) this.animation[b].factor = this.factor
};
Ovoid.Track.prototype.play = function (b) {
    if (b) this.factor = b;
    this.ended && this.rewind();
    for (b = this.animation.length; b--;) this.animation[b].play(this.factor);
    this.playing = !0
};
Ovoid.Track.prototype.stop = function () {
    for (var b = this.animation.length; b--;) this.animation[b].stop();
    this.playing = !1
};
Ovoid.Track.prototype.rewind = function (b) {
    if (b) this.factor = b;
    for (b = this.animation.length; b--;) this.animation[b].rewind(this.factor);
    this.ended = !1;
    this._time = 0
};
Ovoid.Track.prototype.time = function () {
    return this._time
};
Ovoid.Track.prototype.cachTrack = function () {
    if (this.playing) {
        this.playing = !1;
        for (var b = this.animation.length; b--;)
            if (this.animation[b].playing) {
                this.playing = !0;
                break
            }
        this._time += Ovoid.Timer.quantum * this.factor;
        if (!this.playing)
            if (this.onended(this), this.loop) {
                for (b = this.animation.length; b--;) this.animation[b].rewind(), this.animation[b].play();
                this._time = 0;
                this.ended = !1;
                this.playing = !0
            } else this.ended = !0
    }
};
Ovoid.Track.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.TRACK;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.pl = this.playing;
    b.lo = this.loop;
    b.en = this.ended;
    b.an = [];
    for (c = 0; c <
        this.animation.length; c++) b.an[c] = this.animation[c].uid;
    b.oe = "" + this.onended;
    return b
};
Ovoid.Aim = function (b) {
    Ovoid.Constraint.call(this);
    this.type |= Ovoid.AIM;
    this.name = b;
    this.upvector = new Ovoid.Vector(0, 1, 0);
    this.aimvector = new Ovoid.Vector(0, 0, 1);
    this.aimat = null;
    this._x = new Ovoid.Vector;
    this._y = new Ovoid.Vector;
    this._z = new Ovoid.Vector
};
Ovoid.Aim.prototype = new Ovoid.Constraint;
Ovoid.Aim.prototype.constructor = Ovoid.Aim;
Ovoid.Aim.prototype.cachAim = function () {
    if (this.aimat)
        for (var b = this.target.length; b--;)
            if (!(this.aimat.cach & Ovoid.CACH_WORLD) || !(this.target[b].cach & Ovoid.CACH_WORLD)) {
                this._z.subOf(this.target[b].worldPosition, this.aimat.worldPosition);
                this._z.normalize();
                this._x.crossOf(this.upvector, this._z);
                this._y.crossOf(this._z, this._x);
                var c, e, g;
                e = Math.sqrt(this._x.v[0] * this._x.v[0] + this._x.v[1] * this._x.v[1]);
                0.001 < e ? (c = Math.atan2(this._y.v[2], this._z.v[2]), e = Math.atan2(-this._x.v[2], e), g = Math.atan2(this._x.v[1],
                    this._x.v[0])) : (c = Math.atan2(-this._z.v[1], this._y.v[1]), e = Math.atan2(-this._x.v[2], e), g = 0);
                this.target[b].rotateXyz(0, 0, 0, 0, 1);
                this.target[b].rotateXyz(c, e, g)
            }
};
Ovoid.Aim.prototype.toJSON = function () {
    var b = {};
    b.t = Ovoid.EXPRESSION;
    b.n = this.name;
    b.v = this.visible;
    b.u = this.uid;
    b.p = this.parent ? this.parent.uid : "null";
    b.c = [];
    for (var c = 0; c < this.child.length; c++) b.c[c] = this.child[c].uid;
    b.dp = [];
    for (c = 0; c < this.depend.length; c++) b.dp[c] = this.depend[c].uid;
    b.lk = [];
    for (c = 0; c < this.link.length; c++) b.lk[c] = this.link[c].uid;
    b.bmn = this.boundingBox.min;
    b.bmx = this.boundingBox.max;
    b.brd = this.boundingSphere.radius;
    b.ct = [];
    for (c = 0; c < this.target.length; c++) b.ct[c] = this.target[c].uid;
    b.up = this.upvector;
    b.at = this.aimat ? this.aimat.uid : "null";
    return b
};
Ovoid.WgIterator = function (b) {
    this.current = this.root = b;
    this.depth = 0;
    this.queue = new Uint16Array(128);
    this.completed = !1
};
Ovoid.WgIterator.prototype.init = function (b) {
    this.current = this.root = b;
    for (b = 128; b--;) this.queue[b] = 0;
    this.depth = 0;
    this.completed = !1
};
Ovoid.WgIterator.prototype.explore = function () {
    if (!this.completed) {
        for (; this.queue[this.depth] == this.current.child.length;) {
            this.queue[this.depth] = 0;
            if (0 == this.depth) return this.completed = !0, !1;
            this.depth--;
            this.current = this.current.parent
        }
        this.current = this.current.child[this.queue[this.depth]];
        this.queue[this.depth]++;
        this.depth++
    }
    return !this.completed
};
Ovoid.DgIterator = function (b) {
    this.current = this.root = b;
    this.currentParent = null;
    this.depth = 0;
    this.queue = Array(64);
    this.parent = Array(64);
    this.completed = !1
};
Ovoid.DgIterator.prototype.init = function (b) {
    this.current = this.root = b;
    this.currentParent = null;
    for (b = 64; b--;) this.queue[b] = 0, this.parent[b] = null;
    this.depth = 0;
    this.completed = !1
};
Ovoid.DgIterator.prototype.exploreDepend = function () {
    if (!this.completed) {
        for (; this.queue[this.depth] == this.current.depend.length;) {
            this.queue[this.depth] = 0;
            this.parent[this.depth] = null;
            if (0 == this.depth) return this.completed = !0, !1;
            this.depth--;
            this.current = this.parent[this.depth]
        }
        this.currentParent = this.parent[this.depth] = this.current;
        this.current = this.current.depend[this.queue[this.depth]];
        this.queue[this.depth]++;
        this.depth++
    }
    return !this.completed
};
Ovoid.DgIterator.prototype.exploreLink = function () {
    if (!this.completed) {
        for (; this.queue[this.depth] == this.current.link.length;) {
            this.queue[this.depth] = 0;
            this.parent[this.depth] = null;
            if (0 == this.depth) return this.completed = !0, !1;
            this.depth--;
            this.current = this.parent[this.depth]
        }
        this.currentParent = this.parent[this.depth] = this.current;
        this.current = this.current.link[this.queue[this.depth]];
        this.queue[this.depth]++;
        this.depth++
    }
    return !this.completed
};
Ovoid.DgIterator.prototype.jumpDepend = function () {
    this.queue[this.depth] = 0;
    this.parent[this.depth] = null;
    if (0 == this.depth) return this.completed = !0, !1;
    this.depth--;
    this.current = this.parent[this.depth]
};
Ovoid.Scene = function (b) {
    this.name = b;
    this.world = new Ovoid.Node("world");
    this.overlay = new Ovoid.Node("overlay");
    this.node = [];
    this.light = [];
    this.camera = [];
    this.transform = [];
    this.shape = [];
    this.material = [];
    this.action = [];
    this.texture = [];
    this.animation = [];
    this.expression = [];
    this.aim = [];
    this.track = [];
    this.physics = [];
    this.layer = [];
    this.audio = [];
    this.sound = [];
    this._uidn = 1E3 + Math.floor(9999 * Math.random());
    this.activeCamera = null
};
Ovoid.Scene.prototype.create = function (b, c, e) {
    if (this.search(c)) {
        Ovoid.log(2, "Ovoid.Scene.create", "name collision '" + c + "'");
        for (var g = 1, f = c; this.search(c);) c = f + "#" + g.toString(), g++
    }
    var h;
    switch (b) {
    case Ovoid.TRANSFORM:
        b = new Ovoid.Transform(c);
        this.transform.push(b);
        h = this.world;
        break;
    case Ovoid.CAMERA:
        b = new Ovoid.Camera(c);
        this.camera.push(b);
        this.transform.push(b);
        h = this.world;
        break;
    case Ovoid.LIGHT:
        b = new Ovoid.Light(c);
        this.light.push(b);
        this.transform.push(b);
        h = this.world;
        break;
    case Ovoid.BODY:
        b =
            new Ovoid.Body(c);
        this.transform.push(b);
        h = this.world;
        break;
    case Ovoid.JOINT:
        b = new Ovoid.Joint(c);
        this.transform.push(b);
        h = this.world;
        break;
    case Ovoid.MESH:
        b = new Ovoid.Mesh(c);
        this.shape.push(b);
        break;
    case Ovoid.MATERIAL:
        b = new Ovoid.Material(c);
        this.material.push(b);
        break;
    case Ovoid.TEXTURE:
        b = new Ovoid.Texture(c);
        this.texture.push(b);
        break;
    case Ovoid.ACTION:
        b = new Ovoid.Action(c);
        this.action.push(b);
        break;
    case Ovoid.PHYSICS:
        b = new Ovoid.Physics(c);
        this.physics.push(b);
        break;
    case Ovoid.ANIMATION:
        b = new Ovoid.Animation(c);
        this.animation.push(b);
        break;
    case Ovoid.AIM:
        b = new Ovoid.Aim(c);
        this.aim.push(b);
        break;
    case Ovoid.EXPRESSION:
        b = new Ovoid.Expression(c);
        this.expression.push(b);
        break;
    case Ovoid.TRACK:
        b = new Ovoid.Track(c);
        this.track.push(b);
        break;
    case Ovoid.SKIN:
        b = new Ovoid.Skin(c);
        this.shape.push(b);
        break;
    case Ovoid.EMITTER:
        b = new Ovoid.Emitter(c);
        this.shape.push(b);
        break;
    case Ovoid.AUDIO:
        b = new Ovoid.Audio(c);
        this.audio.push(b);
        break;
    case Ovoid.TEXT:
        b = new Ovoid.Text(c);
        this.layer.push(b);
        h = this.overlay;
        break;
    case Ovoid.LAYER:
        b =
            new Ovoid.Layer(c);
        this.layer.push(b);
        h = this.overlay;
        break;
    case Ovoid.SOUND:
        b = new Ovoid.Sound(c);
        this.sound.push(b);
        this.transform.push(b);
        h = this.world;
        break;
    default:
        b = new Ovoid.Node(c)
    }
    this.node.push(b);
    null == e ? e = h : this.ownsNode(e) || (e = h);
    b.setParent(e);
    b.uid = this._uidn;
    this._uidn++;
    return b
};
Ovoid.Scene.prototype.remove = function (b, c) {
    var e, g, f;
    if ("number" == typeof b || "string" == typeof b) {
        if (f = this.search(b), !f) return
    } else f = b;
    var h = [],
        l = [];
    for (e = 0; e < f.link.length; e++) l.push(f.link[e]);
    for (e = 0; e < l.length; e++) l[e].breakDepend(f), Ovoid.log(2, "Ovoid.Scene.remove", "Break link " + l[e].name), l[e].type & Ovoid.TRACK && (Ovoid.log(2, "Ovoid.Scene.remove", "Removing animation from " + l[e].name), l[e].remAnimation(f)), l[e].type & Ovoid.SKIN && (Ovoid.log(2, "Ovoid.Scene.remove", "Removing joint from " + l[e].name),
        l[e].unlinkJoint(f));
    l = [];
    for (e = 0; e < f.depend.length; e++) l.push(f.depend[e]);
    for (e = 0; e < l.length; e++) f.breakDepend(l[e]), Ovoid.log(2, "Ovoid.Scene.remove", "Break Dependency " + l[e].name), 0 == l[e].link.length && c && (Ovoid.log(2, "Ovoid.Scene.remove", "Removes unused dependency " + l[e].name), h.push(l[e]));
    for (e = new Ovoid.WgIterator(f); e.explore();) h.push(e.current);
    for (e = 0; e < h.length; e++) this.remove(h[e], c);
    if (f.type & Ovoid.CAMERA) g = this.camera;
    if (f.type & Ovoid.LIGHT) g = this.light;
    if (f.type & Ovoid.MESH || f.type & Ovoid.SKIN ||
        f.type & Ovoid.EMITTER) g = this.shape;
    if (f.type & Ovoid.MATERIAL) g = this.material;
    if (f.type & Ovoid.TEXTURE) g = this.texture;
    if (f.type & Ovoid.ANIMATION) g = this.animation;
    if (f.type & Ovoid.EXPRESSION) g = this.expression;
    if (f.type & Ovoid.AIM) g = this.aim;
    if (f.type & Ovoid.TRACK) g = this.track;
    if (f.type & Ovoid.PHYSICS) g = this.physics;
    if (f.type & Ovoid.ACTION) g = this.action;
    if (f.type & Ovoid.LAYER) g = this.layer;
    if (f.type & Ovoid.SOUND) g = this.sound;
    if (f.type & Ovoid.AUDIO) g = this.audio;
    if (g)
        for (e = g.length; e--;) g[e] === f && g.splice(e, 1);
    if (f.type &
        Ovoid.TRANSFORM)
        for (e = this.transform.length; e--;) this.transform[e] === f && this.transform.splice(e, 1);
    for (e = this.node.length; e--;) this.node[e] === f && this.node.splice(e, 1);
    f.setParent(null);
    Ovoid.log(2, "Ovoid.Scene.remove", "Removing node " + f.name)
};
Ovoid.Scene.prototype.insert = function (b, c, e, g) {
    if (this.ownsNode(b)) return !1;
    if (this.search(b.name)) {
        Ovoid.log(2, "Ovoid.Scene.insert", "name collision '" + name + "'");
        for (var f = 1, h = b.name; this.search(b.name);) b.name = h + "#" + f.toString(), f++
    }
    if (b.type & Ovoid.NODE) this.node.push(b);
    else return !1; if (!g) b.uid = this._uidn, this._uidn++;
    b.type & Ovoid.MATERIAL && this.material.push(b);
    b.type & Ovoid.TEXTURE && this.texture.push(b);
    b.type & Ovoid.ACTION && this.action.push(b);
    b.type & Ovoid.ANIMATION && this.animation.push(b);
    b.type &
        Ovoid.EXPRESSION && this.expression.push(b);
    b.type & Ovoid.AIM && this.aim.push(b);
    b.type & Ovoid.TRACK && this.track.push(b);
    b.type & Ovoid.PHYSICS && this.physics.push(b);
    b.type & Ovoid.CAMERA && this.camera.push(b);
    b.type & Ovoid.LIGHT && this.light.push(b);
    b.type & Ovoid.SOUND && this.sound.push(b);
    (b.type & Ovoid.SKIN || b.type & Ovoid.MESH || b.type & Ovoid.EMITTER) && this.shape.push(b);
    b.type & Ovoid.AUDIO && this.audio.push(b);
    var l;
    if (b.type & Ovoid.TRANSFORM) this.transform.push(b), l = this.world;
    if (b.type & Ovoid.LAYER) this.layer.push(b),
    l = this.overlay;
    e || (null == c ? c = l : this.ownsNode(c) || (c = l), b.setParent(c));
    return !0
};
Ovoid.Scene.prototype.parent = function (b, c) {
    var e, g;
    if ("string" === typeof b || "number" === typeof b) {
        if (e = this.search(b), !e) {
            Ovoid.log(2, "Ovoid.Scene.parent", "No node matches with name or UID:" + b);
            return
        }
    } else e = b; if ("string" === typeof c || "number" === typeof c) {
        if (g = this.search(c), !g) {
            Ovoid.log(2, "Ovoid.Scene.parent", "No node matches with name or UID:" + c);
            return
        }
    } else g = c;
    e.setParent(g)
};
Ovoid.Scene.prototype.transplant = function (b) {
    var c, e = new Ovoid.DgIterator,
        g = new Ovoid.DagIterator;
    for (g.init(b); g.explore();) {
        c = g.current;
        this.insert(c, null, !0);
        for (e.init(c); e.exploreDepend();) c = e.current, this.insert(c, null, !0)
    }
    g = Array(b.child.length);
    for (e = b.child.length; e--;) g[e] = b.child[e];
    for (e = g.length; e--;) g[e].type & Ovoid.TRANSFORM && g[e].setParent(this.world), g[e].type & Ovoid.LAYER && g[e].setParent(this.overlay)
};
Ovoid.Scene.prototype.useCamera = function (b) {
    if ("object" === typeof b)
        if (null != b) {
            if (this.ownsNode(b)) this.activeCamera = b
        } else this.activeCamera = null;
        else this.activeCamera = this.search(b);
    this.activeCamera && (this.activeCamera.setView(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]), this.activeCamera.cachTransform(), this.activeCamera.cachCamera())
};
Ovoid.Scene.prototype.ownsNode = function (b) {
    for (var c = this.node.length; c--;)
        if (this.node[c] === b) return !0;
    return !1
};
Ovoid.Scene.prototype.search = function (b) {
    var c = this.node.length;
    if ("string" == typeof b)
        for (; c--;) {
            if (this.node[c].name == b) return this.node[c]
        } else if ("number" == typeof b)
            for (; c--;)
                if (this.node[c].uid == b) return this.node[c];
    return null
};
Ovoid.Scene.prototype.searchMatches = function (b) {
    var c = [],
        e = this.node.length;
    if ("string" == typeof b)
        for (; e--;) - 1 != this.node[e].name.indexOf(b, 0) && c.push(this.node[e]);
    else if ("number" == typeof b)
        for (; e--;) this.node[e].type & b && c.push(this.node[e]);
    return c
};
Ovoid.Scene.prototype.removeMatches = function (b) {
    var c = this.node.length,
        e = !1;
    if ("string" == typeof b)
        for (; c--;) - 1 != this.node[c].name.indexOf(b, 0) && (this.remove(this.node[c]), e = !0);
    else if ("number" == typeof b)
        for (; c--;) this.node[c].type & b && (this.remove(this.node[c]), e = !0);
    return e
};
Ovoid.Scene.prototype.clean = function () {
    Ovoid.log(3, "Ovoid.Scene.clean", "start scene cleaning");
    var b, c = [];
    for (b = 0; b < this.material.length; b++) c.push(this.material[b]);
    for (b = 0; b < this.texture.length; b++) c.push(this.texture[b]);
    for (b = 0; b < this.audio.length; b++) c.push(this.audio[b]);
    for (b = 0; b < this.shape.length; b++) c.push(this.shape[b]);
    for (b = 0; b < this.animation.length; b++) c.push(this.animation[b]);
    for (b = 0; b < this.expression.length; b++) c.push(this.expression[b]);
    for (b = 0; b < this.action.length; b++) c.push(this.action[b]);
    for (b = 0; b < this.physics.length; b++) c.push(this.physics[b]);
    for (b = 0; b < this.aim.length; b++) c.push(this.aim[b]);
    for (b = c.length; b--;) c[b].link.length || this.remove(c[b], !0);
    Ovoid.log(3, "Ovoid.Scene.clean", "scene cleaning finished")
};
Ovoid.Scene.prototype.toJSON = function () {
    var b = {};
    b.n = this.name;
    b.u = this._uidn;
    b.ac = this.activeCamera ? this.activeCamera.uid : "null";
    b.nl = this.node;
    return b
};
Ovoid.Collada = function () {
    this.url = this.name = "";
    this.loadStatus = 0;
    this._upaxis = -1;
    this._dae = null;
    this._mask = 0;
    this._sfix = this._pfix = "";
    this._dstsc = null
};
Ovoid.Collada.prototype._gTxtData = function (b) {
    for (var c = "", e = b.length, g = 0; g < e; g++) c += b[g].data;
    return c
};
Ovoid.Collada.prototype._gTxtDataSplit = function (b) {
    for (var c = "", e = b.length, g = 0; g < e; g++) c += b[g].data;
    32 == c.charCodeAt(0) && (c = c.slice(1));
    return c.split(/\s+/)
};
Ovoid.Collada.prototype._getById = function (b, c) {
    for (var e = this._dae.getElementsByTagName(b), g = e.length, f = 0; f < g; f++)
        if (e[f].getAttribute("id") == c || e[f].getAttribute("sid") == c) return e[f];
    return null
};
Ovoid.Collada.prototype._getNameById = function (b, c) {
    for (var e = this._dae.getElementsByTagName(b), g = e.length, f = 0; f < g; f++)
        if (e[f].getAttribute("id") == c || e[f].getAttribute("sid") == c) return e[f].getAttribute("name");
    return null
};
Ovoid.Collada.prototype._getChildByTag = function (b, c) {
    for (var e = [], g = b.childNodes.length, f = 0; f < g; f++) b.childNodes[f].tagName == c && e.push(b.childNodes[f]);
    return e
};
Ovoid.Collada.prototype._getChildById = function (b, c) {
    for (var e = b.childNodes.length, g = 0; g < e; g++)
        if (1 == b.childNodes[g].nodeType && (b.childNodes[g].getAttribute("id") == c || b.childNodes[g].getAttribute("sid") == c)) return b.childNodes[g];
    return null
};
Ovoid.Collada.prototype._hasChildByTag = function (b, c) {
    for (var e = b.childNodes.length, g = 0; g < e; g++)
        if (b.childNodes[g].tagName == c) return !0;
    return !1
};
Ovoid.Collada.prototype._retrieveNode = function (b) {
    var c = null;
    if (this._mask & Ovoid.DAE_MERGE_DEPENDENCIES) {
        b = this._pfix + b;
        if (c = this._dstsc.search(b)) return c;
        b += this._sfix
    } else b = this._pfix + b + this._sfix;
    return c = this._dstsc.search(b)
};
Ovoid.Collada.prototype._switch2YVect = function (b) {
    switch (this._upaxis) {
    case 2:
        var c;
        c = b.v[1];
        b.v[1] = -b.v[2];
        b.v[2] = c
    }
};
Ovoid.Collada.prototype._switch2YMat4 = function (b) {
    switch (this._upaxis) {
    case 2:
        var c = new Ovoid.Matrix4;
        c.m[5] = 0;
        c.m[6] = -1;
        c.m[9] = 1;
        c.m[10] = 0;
        b.multBy(c)
    }
};
Ovoid.Collada.prototype._switch2YNode = function (b) {
    switch (this._upaxis) {
    case 2:
        var c = new Float32Array([0, 0, 0]),
            e = new Float32Array([0, 0, 0]);
        b.cachTransform();
        var g = b.matrix;
        this._switch2YMat4(g);
        c[0] = g.m[12];
        c[1] = g.m[13];
        c[2] = g.m[14];
        var f = Math.sqrt(g.m[0] * g.m[0] + g.m[1] * g.m[1]);
        0.001 < f ? (e[0] = Math.atan2(g.m[6], g.m[10]), e[1] = Math.atan2(-g.m[2], f), e[2] = Math.atan2(g.m[1], g.m[0])) : (e[0] = Math.atan2(-g.m[9], g.m[5]), e[1] = Math.atan2(-g.m[2], f), e[2] = 0);
        b.moveXyz(0, 0, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
        b.rotateXyz(0,
            0, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
        b.moveXyz(c[0], c[1], c[2], Ovoid.WORLD, Ovoid.ABSOLUTE);
        b.rotateXyz(e[0], e[1], e[2], Ovoid.LOCAL, Ovoid.RELATIVE)
    }
};
Ovoid.Collada.prototype._procCam = function (b) {
    var c = this._pfix + b.getAttribute("id") + this._sfix,
        c = new Ovoid.Camera(c);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Camera '" + c.name + "' : created");
    b = b.getElementsByTagName("technique_common");
    if (b.length) {
        var e = b[0].getElementsByTagName("yfov");
        if (e.length) c.fov = parseFloat(e[0].childNodes[0].data);
        else if (e = b[0].getElementsByTagName("xfov"), e.length) c.fov = parseFloat(e[0].childNodes[0].data);
        e = b[0].getElementsByTagName("znear");
        if (e.length) c.clipNear = parseFloat(e[0].childNodes[0].data);
        e = b[0].getElementsByTagName("zfar");
        if (e.length) c.clipFar = parseFloat(e[0].childNodes[0].data)
    } else return Ovoid.log(2, "Ovoid.Collada " + this.name, "Camera '" + c.name + "' missing <technique_common>: Camera data not found."), null;
    return c
};
Ovoid.Collada.prototype._procLig = function (b) {
    var c = this._pfix + b.getAttribute("id") + this._sfix,
        c = new Ovoid.Light(c);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Light '" + c.name + "' : created");
    b = b.getElementsByTagName("technique_common");
    if (b.length) {
        var e;
        e = b[0].getElementsByTagName("color");
        e.length ? (e = this._gTxtDataSplit(e[0].childNodes), c.setColor(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), 1)) : Ovoid.log(2, "Ovoid.Collada " + this.name, "Light '" + c.name + "' : missing <color>: Light color data not found.");
        e = b[0].getElementsByTagName("intensity");
        if (e.length) c.intensity = parseFloat(e[0].childNodes[0].data);
        c.kind = -1;
        if (b[0].getElementsByTagName("ambient").length) c.kind = Ovoid.LIGHT_AMBIENT;
        if (b[0].getElementsByTagName("point").length) c.kind = Ovoid.LIGHT_POINT;
        if (b[0].getElementsByTagName("directional").length) c.kind = Ovoid.LIGHT_DIRECTIONAL;
        if (b[0].getElementsByTagName("spot").length && (c.kind = Ovoid.LIGHT_SPOT, b[0].getElementsByTagName("falloff_angle").length ? c.spotAngle = 0.5 * Ovoid.deg2Rad(parseFloat(b[0].getElementsByTagName("falloff_angle")[0].childNodes[0].data)) :
            Ovoid.log(2, "Ovoid.Collada " + this.name, "Light '" + c.name + "' : missing <spot>/<falloff_angle>: Light data not found."), b[0].getElementsByTagName("falloff_exponent").length)) c.falloff = 0.1 * parseFloat(b[0].getElementsByTagName("falloff_exponent")[0].childNodes[0].data); - 1 == c.kind && Ovoid.log(2, "Ovoid.Collada " + this.name, "Light '" + c.name + "' : missing <ambient>|<point>|<directional>|<spot>: Light data not found.");
        if (c.kind != Ovoid.LIGHT_AMBIENT && c.kind != Ovoid.LIGHT_DIRECTIONAL) {
            var g, f, h;
            e = b[0].getElementsByTagName("constant_attenuation");
            e.length && (g = parseFloat(e[0].childNodes[0].data));
            e = b[0].getElementsByTagName("linear_attenuation");
            e.length && (f = parseFloat(e[0].childNodes[0].data));
            e = b[0].getElementsByTagName("quadratic_attenuation");
            e.length && (h = parseFloat(e[0].childNodes[0].data));
            void 0 != g && void 0 != f && void 0 != h && c.setAttenuation(g, f, h)
        }
    } else return Ovoid.log(2, "Ovoid.Collada " + this.name, "Light '" + c.name + "' : missing <technique_common>: Light data not found."), null;
    return c
};
Ovoid.Collada.prototype._procImg = function (b) {
    var c = this._pfix + b.getAttribute("name") + this._sfix,
        c = new Ovoid.Texture(c);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Texture '" + c.name + "' : created");
    b = b.getElementsByTagName("init_from");
    if (b.length) {
        var b = b[0].childNodes[0].data,
            b = b.split("/"),
            e = b[b.length - 1],
            e = e.split(".");
        if (1 < e.length) c.url = b[b.length - 1];
        else return Ovoid.log(2, "Ovoid.Collada " + this.name, "Texture '" + c.name + "' : invalid URI."), null
    } else return Ovoid.log(2, "Ovoid.Collada " + this.name, "Texture '" +
        c.name + "' : missing <init_from>: Image data not found."), null;
    return c
};
Ovoid.Collada.prototype._procEfxComp = function (b, c, e, g) {
    c = c.getElementsByTagName(e);
    if (c.length) {
        var f = c[0].getElementsByTagName("color");
        if (f.length) e = this._gTxtDataSplit(f[0].childNodes), b.setColor(g, parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]));
        else if (c = c[0].getElementsByTagName("texture"), c.length) {
            var f = null,
                h = this._getById("newparam", c[0].getAttribute("texture"));
            h ? h.getElementsByTagName("source").length && (h = this._getById("newparam", h.getElementsByTagName("source")[0].childNodes[0].data),
                h.getElementsByTagName("init_from").length && (f = this._getById("image", h.getElementsByTagName("init_from")[0].childNodes[0].data))) : f = this._getById("image", c[0].getAttribute("texture"));
            f ? (e = this._retrieveNode(f.getAttribute("name"))) ? (b.setColor(g, 1, 1, 1, 1), b.setTexture(g, e)) : b.setColor(g, 0, 0, 0, 1) : Ovoid.log(2, "Ovoid.Collada " + this.name, "Material '" + b.name + "' : missing <" + e + ">/<texture>/<image>: Material/Texture data not found.")
        } else Ovoid.log(2, "Ovoid.Collada " + this.name, "Material '" + b.name + "' : missing <" +
            e + ">/<color>|<texture>: Material/Texture data not found.")
    } else b.setColor(g, 0, 0, 0, 1)
};
Ovoid.Collada.prototype._procMat = function (b) {
    var c = this._pfix + b.getAttribute("name") + this._sfix,
        c = new Ovoid.Material(c);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Material '" + c.name + "' : created");
    b = this._getById("effect", b.getElementsByTagName("instance_effect")[0].getAttribute("url").substring(1));
    this._procEfxComp(c, b, "ambient", 0);
    this._procEfxComp(c, b, "diffuse", 1);
    this._procEfxComp(c, b, "specular", 2);
    this._procEfxComp(c, b, "emission", 3);
    this._procEfxComp(c, b, "reflective", 4);
    var e;
    e = b.getElementsByTagName("shininess");
    e.length ? (e = e[0].getElementsByTagName("float"), e = parseFloat(e[0].childNodes[0].data), c.shininess = e) : c.shininess = 1;
    e = b.getElementsByTagName("reflectivity");
    if (e.length) e = e[0].getElementsByTagName("float"), e = parseFloat(e[0].childNodes[0].data), c.reflectivity = e;
    e = b.getElementsByTagName("transparency");
    if (e.length) e = e[0].getElementsByTagName("float"), e = parseFloat(e[0].childNodes[0].data), c.opacity = 0 == e ? 1 : e;
    return c
};
Ovoid.Collada.prototype._procGeo = function (b) {
    var c = this._pfix + b.getAttribute("id") + this._sfix,
        c = new Ovoid.Mesh(c);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Mesh '" + c.name + "' : created");
    for (var e = {
        id: [],
        count: [],
        stride: [],
        data: []
    }, g = b.getElementsByTagName("source"), f, h, l = g.length; l--;) {
        e.id.push(g[l].getAttribute("id"));
        f = g[l].getElementsByTagName("accessor");
        e.stride.push(parseInt(f[0].getAttribute("stride")));
        e.count.push(parseInt(f[0].getAttribute("count")));
        h = g[l].getElementsByTagName("float_array");
        f = this._gTxtDataSplit(h[0].childNodes);
        h = new Float32Array(parseInt(h[0].getAttribute("count")));
        for (var m = f.length, o = 0, q = 0; q < m; q++) h[o] = parseFloat(f[q]), isNaN(h[o]) || o++;
        e.data.push(h)
    }
    g = b.getElementsByTagName("polylist");
    if (0 == g.length && (g = b.getElementsByTagName("polygons"), 0 == g.length && (g = b.getElementsByTagName("triangles"), 0 == g.length))) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' : missing polyset <polylist>|<polygons>|<triangles>: Mesh data not found."), null;
    for (l = g.length; l--;) {
        var w =
            0,
            v = g[l].getAttribute("count");
        h = 3 * v;
        b = g[l].getAttribute("material");
        b || (b = "null", Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/polyset " + l + "' : missing material symbol."));
        f = g[l].getElementsByTagName("vcount");
        if (f.length && (f = f[0].childNodes[0].data, -1 != f.indexOf("4", 0) || -1 != f.indexOf("5", 0) || -1 != f.indexOf("6", 0) || -1 != f.indexOf("7", 0) || -1 != f.indexOf("8", 0))) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/" + b + "' : bad mesh triangulation: mesh ingnored."), null;
        for (var x = {
            enable: {},
            source: {},
            offset: {}
        }, o = g[l].getElementsByTagName("input"), r, z = o.length; z--;) {
            if ("VERTEX" == o[z].getAttribute("semantic")) {
                m = this._getById("vertices", o[z].getAttribute("source").substring(1)).getElementsByTagName("input");
                for (q = m.length; q--;) {
                    if ("POSITION" == m[q].getAttribute("semantic")) {
                        f = m[q].getAttribute("source").substring(1);
                        for (r = e.id.length; r--;)
                            if (e.id[r] == f) x.source.p = r, x.enable.p = !0, x.offset.p = parseInt(o[z].getAttribute("offset")), w |= Ovoid.VERTEX_VEC4_P
                    }
                    if ("NORMAL" == m[q].getAttribute("semantic")) {
                        f =
                            m[q].getAttribute("source").substring(1);
                        for (r = e.id.length; r--;)
                            if (e.id[r] == f) x.source.n = r, x.enable.n = !0, x.offset.n = parseInt(o[z].getAttribute("offset")), w |= Ovoid.VERTEX_VEC3_N
                    }
                }
                if (-1 == x.source.p) {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/" + b + "' : missing vertices POSITION source: polyset ignored.");
                    continue
                }
            }
            if ("NORMAL" == o[z].getAttribute("semantic")) {
                f = o[z].getAttribute("source").substring(1);
                for (r = e.id.length; r--;)
                    if (e.id[r] == f) x.source.n = r, x.enable.n = !0, x.offset.n = parseInt(o[z].getAttribute("offset")),
                w |= Ovoid.VERTEX_VEC3_N
            }
            if ("TEXCOORD" == o[z].getAttribute("semantic")) {
                f = o[z].getAttribute("source").substring(1);
                for (r = e.id.length; r--;)
                    if (e.id[r] == f) x.source.u = r, x.enable.u = !0, x.offset.u = parseInt(o[z].getAttribute("offset")), w |= Ovoid.VERTEX_VEC3_U
            }
        }
        var y = g[l].getElementsByTagName("p"),
            v = new Uint16Array(3 * v * o.length);
        r = 0;
        m = y.length;
        for (z = 0; z < m; z++) {
            f = this._gTxtDataSplit(y[z].childNodes);
            for (var C = f.length, q = 0; q < C; q++) v[r] = parseInt(f[q]), isNaN(v[r]) || r++
        }
        v.length != r && Ovoid.log(2, "Ovoid.Collada " + this.name,
            "Geometry '" + c.name + "/" + b + "' found indices mismatch triangles count (" + r + "/" + v.length + ")");
        q = Ovoid.Vertex.newArray(h);
        o = o.length;
        if (x.enable.p) {
            f = x.source.p;
            m = x.offset.p;
            r = e.stride[f];
            f = e.data[f];
            for (z = 0; z < h; z++) y = v[z * o + m] * r, q[z].p.set(f[y + 0], f[y + 1], f[y + 2], 1)
        }
        if (x.enable.n) {
            f = x.source.n;
            m = x.offset.n;
            r = e.stride[f];
            f = e.data[f];
            for (z = 0; z < h; z++) y = v[z * o + m] * r, q[z].n.set(f[y + 0], f[y + 1], f[y + 2])
        }
        if (x.enable.u) {
            f = x.source.u;
            m = x.offset.u;
            r = e.stride[f];
            f = e.data[f];
            for (z = 0; z < h; z++) y = v[z * o + m] * r, q[z].u.set(f[y + 0],
                f[y + 1], 0)
        }
        f = null;
        if ("null" != b) {
            h = this._dae.getElementsByTagName("instance_material");
            for (z = h.length; z--;)
                if (h[z].getAttribute("symbol") == b) {
                    f = this._retrieveNode(this._getNameById("material", h[z].getAttribute("target").substring(1)));
                    break
                }
            f || (Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/" + b + "' : material not found"), f = new Ovoid.Material("newmaterial#" + this._dstsc.material.length), Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/polyset " + l + "' : assign new material node " +
                f.name), this._dstsc.insert(f))
        } else f = new Ovoid.Material("newmaterial#" + this._dstsc.material.length), Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "/polyset " + l + "' : assign new material node " + f.name), this._dstsc.insert(f);
        Ovoid.log(3, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' polyset#" + l + ": " + q.length + " vertices.");
        c.addPolyset(0, q, f)
    }
    this._mask & Ovoid.DAE_OPTIMIZE_MESH_VERTICES && (Ovoid.log(3, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' Optimize vertices."), 5E3 < c.vertices[0].length &&
        (Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' Vertices optimization with more than 5000 triangles: May take long time."), Ovoid.opt_disableAlerts || alert("OvoiD.JS - COLLADA importation alert.\n\nDAE_OPTIMIZE_MESH_VERTICES option is enabled and the current mesh has more than 5000 vertices (" + c.vertices[0].length + "). The operation can take long time and the browser may prompt a 'script not responding' error. You can ignore the browser alert by choosing 'Continue'\n\nNote: You should use OJSON import/export for the next stage. See the Ovoid.Ojson() class documentation at OvoiD.JS documentation's home page.\nhttp://doc.ovoid.org\n\nTo avoid this alert, set the Ovoid.opt_disableAlerts option to true in the config.js file.")),
        c.optimizeVertices());
    this._mask & Ovoid.DAE_OPTIMIZE_MESH_TRIANGLES && (Ovoid.log(3, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' Optimize triangles."), 1E3 < c.triangles[0].length && (Ovoid.log(2, "Ovoid.Collada " + this.name, "Geometry '" + c.name + "' Triangles optimization with more than 1000 triangles: May take VERY LONG time."), Ovoid.opt_disableAlerts || alert("OvoiD.JS - COLLADA importation alert.\n\nDAE_OPTIMIZE_MESH_TRIANGLES option is enabled and the current mesh has more than 1000 triangles (" + c.triangles[0].length +
        "). The operation can take a VERY long time and the browser may prompt a 'script not responding' error. You can ignore the browser alert by choosing 'Continue'\n\nNote: You should use OJSON import/export for the next stage. See the Ovoid.Ojson() class documentation at OvoiD.JS documentation's home page.\nhttp://doc.ovoid.org\n\nTo avoid this alert, set the Ovoid.opt_disableAlerts option to true in the config.js file.")), c.optimizeTriangles());
    c.createBuffers(w, Ovoid.BUFFER_STATIC);
    return c
};
Ovoid.Collada.prototype._procCtr = function (b) {
    var c = b.getAttribute("id"),
        e;
    if (this._hasChildByTag(b, "skin")) {
        e = this._retrieveNode(c);
        if (null == e) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + c + "' not found as instanced: Ignored. "), null;
        var g, f, h, l, m, b = b.getElementsByTagName("skin")[0];
        l = {
            weight: {}
        };
        l.weight.offset = -1;
        l.weight.data = null;
        l.bonesi = {};
        l.bonesi.offset = -1;
        l.bonesi.data = null;
        g = b.getElementsByTagName("vertex_weights");
        m = g[0].getElementsByTagName("input");
        for (c = m.length; c--;) {
            if ("WEIGHT" ==
                m[c].getAttribute("semantic")) {
                l.weight.offset = parseInt(m[c].getAttribute("offset"));
                var o = this._getChildById(b, m[c].getAttribute("source").substring(1)),
                    o = o.getElementsByTagName("float_array")[0],
                    q = this._gTxtDataSplit(o.childNodes);
                h = new Float32Array(parseInt(o.getAttribute("count")));
                for (var w = q.length, v = 0, o = 0; o < w; o++) h[v] = parseFloat(q[o]), isNaN(h[v]) || v++;
                l.weight.data = h
            }
            if ("JOINT" == m[c].getAttribute("semantic")) {
                l.bonesi.offset = parseInt(m[c].getAttribute("offset"));
                o = this._getChildById(b, m[c].getAttribute("source").substring(1));
                q = this._gTxtDataSplit(o.getElementsByTagName("Name_array")[0].childNodes);
                h = [];
                w = q.length;
                for (o = 0; o < w; o++) 1 < q[o].length && h.push(q[o]);
                l.bonesi.data = h
            }
        }
        if (-1 == l.weight.offset || -1 == l.bonesi.offset || null == l.weight.data || null == l.bonesi.data) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' missing <input> informations: Aborting."), null;
        m = parseInt(g[0].getAttribute("count"));
        if (0 == m) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' no weights data found: Aborting."), null;
        c = 0;
        q = this._gTxtDataSplit(g[0].getElementsByTagName("vcount")[0].childNodes);
        h = new Uint16Array(m);
        w = q.length;
        for (o = v = 0; o < w; o++) h[v] = parseInt(q[o]), isNaN(h[v]) || (c += 2 * h[v], v++);
        for (var q = this._gTxtDataSplit(g[0].getElementsByTagName("v")[0].childNodes), x = new Uint16Array(c), w = q.length, o = v = 0; o < w; o++) x[v] = parseFloat(q[o]), isNaN(x[v]) || v++;
        ijointa = new Float32Array(4 * m);
        g = new Float32Array(4 * m);
        for (c = 0; c < 4 * m; c++) ijointa[c] = -1;
        for (var o = 0, v = l.weight.offset, r = l.bonesi.offset, c = 0; c < m; c++) {
            q = h[c];
            for (w = 0; w <
                q; w++) ijointa[4 * c + w] = x[o + 2 * w + r], g[4 * c + w] = l.weight.data[x[o + 2 * w + v]];
            o += 2 * q
        }
        h = this._getById("geometry", b.getAttribute("source").substring(1));
        x = h.getElementsByTagName("vertices")[0].getElementsByTagName("input");
        for (c = x.length; c--;)
            if ("POSITION" == x[c].getAttribute("semantic")) {
                o = this._getChildById(h.getElementsByTagName("mesh")[0], x[c].getAttribute("source").substring(1)).getElementsByTagName("float_array")[0];
                q = this._gTxtDataSplit(o.childNodes);
                f = new Float32Array(parseInt(o.getAttribute("count")));
                w = q.length;
                for (o = v = 0; o < w; o++) f[v] = parseFloat(q[o]), isNaN(f[v]) || v++
            }
        if (f.length / 3 != m) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' positions/wheights count mismatch (" + f.length / 3 + "/" + m + "): Aborting."), null;
        m = [];
        w = l.bonesi.data.length;
        for (c = 0; c < w; c++) o = this._retrieveNode(l.bonesi.data[c]), m.push(o), Ovoid.log(3, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' has influence joint '" + o.name + "'");
        l = [];
        o = b.getElementsByTagName("joints")[0].getElementsByTagName("input");
        for (c = o.length; c--;)
            if ("INV_BIND_MATRIX" ==
                o[c].getAttribute("semantic")) {
                o = this._getChildById(b, o[c].getAttribute("source").substring(1)).getElementsByTagName("float_array")[0];
                q = this._gTxtDataSplit(o.childNodes);
                h = new Float32Array(16);
                w = q.length;
                for (o = v = 0; o < w; o++) h[v] = parseFloat(q[o]), isNaN(h[v]) || v++, 15 < v && (mat = new Ovoid.Matrix4(h), mat.toTranspose(), l.push(mat), v = 0);
                break
            }
        if (l.length != m.length) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' joints list / bind matrices count mismatch. Aborting."), null;
        h = new Ovoid.Matrix4;
        q = this._gTxtDataSplit(b.getElementsByTagName("bind_shape_matrix")[0].childNodes);
        w = q.length;
        for (o = v = 0; o < w; o++) h.m[v] = parseFloat(q[o]), isNaN(h.m[v]) || v++;
        h.toTranspose();
        if (o = this._retrieveNode(b.getAttribute("source").substring(1))) Ovoid.log(3, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' has binded mesh '" + o.name + "'");
        else return Ovoid.log(2, "Ovoid.Collada " + this.name, "Skin '" + e.name + "' binded mesh '" + this._pfix + b.getAttribute("source").substring(1) + "' not found. Aborting."), null;
        w = m.length;
        for (c =
            0; c < w; c++) e.linkJoint(m[c]);
        e.bindSkin(o, h, l, f, ijointa, g);
        this._mask & Ovoid.DAE_REPARENT_SKIN && m[0].setParent(e.link[0]);
        return e
    }
    this._hasChildByTag(daeController, "morph") ? Ovoid.log(2, "Ovoid.Collada " + this.name, "controller '" + c + "' <morph> controller not yet supported") : Ovoid.log(2, "Ovoid.Collada " + this.name, "controller '" + c + "' unknow controller type");
    return null
};
Ovoid.Collada.prototype._procNod = function (b) {
    var c = this._pfix + b.getAttribute("id") + this._sfix,
        e = null;
    if (this._hasChildByTag(b, "instance_camera")) {
        var g = this._getChildByTag(b, "instance_camera"),
            f = g[0].getAttribute("url").substring(1);
        if (e = this._retrieveNode(f)) Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + e.name + "' is instance camera '" + c + "'"), e.name = c;
        else return Ovoid.log(2, "Ovoid.Collada " + this.name, "'" + f + "' instance camera not found '" + c + "'"), null
    }
    if (this._hasChildByTag(b, "instance_light"))
        if (g = this._getChildByTag(b,
            "instance_light"), f = g[0].getAttribute("url").substring(1), e = this._retrieveNode(f)) Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + e.name + "' is instance light '" + c + "'"), e.name = c;
        else return Ovoid.log(2, "Ovoid.Collada " + this.name, "'" + f + "' instance light not found '" + c + "'"), null;
    this._hasChildByTag(b, "instance_geometry") && (e = new Ovoid.Body(c), Ovoid.log(3, "Ovoid.Collada " + this.name, "Body '" + e.name + "' : created"), g = this._getChildByTag(b, "instance_geometry"), f = g[0].getAttribute("url").substring(1), (g = this._retrieveNode(f)) ?
        (e.setShape(g), Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + e.name + "' has geometry shape '" + g.name + "'")) : Ovoid.log(2, "Ovoid.Collada " + this.name, "'" + e.name + "' geometry shape not found '" + f + "'"));
    if (this._hasChildByTag(b, "instance_controller")) {
        e = new Ovoid.Body(c);
        Ovoid.log(3, "Ovoid.Collada " + this.name, "Body '" + e.name + "' : created");
        var g = this._getChildByTag(b, "instance_controller"),
            h = this._getById("controller", g[0].getAttribute("url").substring(1));
        h ? this._hasChildByTag(h, "skin") ? (f = this._pfix + g[0].getAttribute("url").substring(1) +
            this._sfix, g = new Ovoid.Skin(f), e.setShape(g), this._dstsc.insert(g), Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + e.name + "' has shape '" + g.name + "'")) : Ovoid.log(2, "Ovoid.Collada " + this.name, "'" + f + "' unsuported controller type'") : Ovoid.log(2, "Ovoid.Collada " + this.name, "'" + f + "' <controller> instance not found.'")
    }
    b.getAttribute("type") && "JOINT" == b.getAttribute("type") && (e = new Ovoid.Joint(c), Ovoid.log(3, "Ovoid.Collada " + this.name, "Joint '" + e.name + "' : created"));
    e || (e = new Ovoid.Transform(c), Ovoid.log(3, "Ovoid.Collada " +
        this.name, "Transform (NULL) '" + e.name + "' : created"));
    var l = this._getChildByTag(b, "matrix"),
        m = this._getChildByTag(b, "translate"),
        c = this._getChildByTag(b, "rotate"),
        b = this._getChildByTag(b, "scale"),
        f = new Float32Array([0, 0, 0]),
        g = new Float32Array([0, 0, 0]),
        h = new Float32Array([1, 1, 1]),
        o = new Float32Array([0, 0, 0]);
    if (l.length) {
        l = this._gTxtDataSplit(l[0].childNodes);
        l = new Ovoid.Matrix4(l);
        l.toTranspose();
        f[0] += l.m[12];
        f[1] += l.m[13];
        f[2] += l.m[14];
        var q = Math.sqrt(l.m[0] * l.m[0] + l.m[1] * l.m[1]);
        0.001 < q ? (g[0] +=
            Math.atan2(l.m[6], l.m[10]), g[1] += Math.atan2(-l.m[2], q), g[2] += Math.atan2(l.m[1], l.m[0])) : (g[0] += Math.atan2(-l.m[9], l.m[5]), g[1] += Math.atan2(-l.m[2], q), g[2] = 0)
    }
    m.length && (m = this._gTxtDataSplit(m[0].childNodes), f[0] += parseFloat(m[0]), f[1] += parseFloat(m[1]), f[2] += parseFloat(m[2]));
    if (c.length)
        for (m = c.length; m--;) l = this._gTxtDataSplit(c[m].childNodes), -1 != c[m].getAttribute("sid").indexOf("Orient", 0) ? (o[0] += parseFloat(l[0]) * Ovoid.deg2Rad(parseFloat(l[3])), o[1] += parseFloat(l[1]) * Ovoid.deg2Rad(parseFloat(l[3])),
            o[2] += parseFloat(l[2]) * Ovoid.deg2Rad(parseFloat(l[3]))) : (g[0] += parseFloat(l[0]) * Ovoid.deg2Rad(parseFloat(l[3])), g[1] += parseFloat(l[1]) * Ovoid.deg2Rad(parseFloat(l[3])), g[2] += parseFloat(l[2]) * Ovoid.deg2Rad(parseFloat(l[3])));
    b.length && (l = this._gTxtDataSplit(b[0].childNodes), h[0] = parseFloat(l[0]), h[1] = parseFloat(l[1]), h[2] = parseFloat(l[2]));
    e.moveXyz(f[0], f[1], f[2], Ovoid.LOCAL, Ovoid.RELATIVE);
    e.rotateXyz(g[0], g[1], g[2], Ovoid.LOCAL, Ovoid.RELATIVE);
    e.orientXyz(o[0], o[1], o[2], Ovoid.LOCAL, Ovoid.RELATIVE);
    e.scaleXyz(h[0], h[1], h[2], Ovoid.ABSOLUTE);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Transform '" + e.name + "' move:" + f[0] + ", " + f[1] + ", " + f[2]);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Transform '" + e.name + "' rotate:" + g[0] + ", " + g[1] + ", " + g[2]);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Transform '" + e.name + "' orient:" + o[0] + ", " + o[1] + ", " + o[2]);
    Ovoid.log(3, "Ovoid.Collada " + this.name, "Transform '" + e.name + "' scale:" + h[0] + ", " + h[1] + ", " + h[2]);
    return e
};
Ovoid.Collada.prototype._procAni = function (b) {
    for (var c = b.getAttribute("id"), e = {
            id: [],
            count: [],
            stride: [],
            data: [],
            type: []
        }, g = b.getElementsByTagName("source"), f = g.length; f--;) {
        if (g[f].getElementsByTagName("float_array").length) {
            e.id.push(g[f].getAttribute("id"));
            e.count.push(parseInt(g[f].getElementsByTagName("accessor")[0].getAttribute("count")));
            e.stride.push(parseInt(g[f].getElementsByTagName("accessor")[0].getAttribute("stride")));
            e.type.push(g[f].getElementsByTagName("param")[0].getAttribute("type"));
            for (var h = g[f].getElementsByTagName("float_array")[0], l = this._gTxtDataSplit(h.childNodes), m = new Float32Array(parseInt(h.getAttribute("count"))), o = l.length, q = 0, h = 0; h < o; h++) m[q] = parseFloat(l[h]), isNaN(m[q]) || q++;
            e.data.push(m)
        }
        if (g[f].getElementsByTagName("Name_array").length) {
            e.id.push(g[f].getAttribute("id"));
            e.count.push(parseInt(g[f].getElementsByTagName("accessor")[0].getAttribute("count")));
            e.stride.push(parseInt(g[f].getElementsByTagName("accessor")[0].getAttribute("stride")));
            e.type.push(g[f].getElementsByTagName("param")[0].getAttribute("type"));
            h = g[f].getElementsByTagName("Name_array")[0];
            l = this._gTxtDataSplit(h.childNodes);
            m = Array(parseInt(h.getAttribute("count")));
            o = l.length;
            for (h = q = 0; h < o; h++) m[q] = l[h];
            e.data.push(m)
        }
    }
    l = {
        name: [],
        tname: [],
        ttsid: [],
        ttaxis: [],
        xdata: [],
        ydata: [],
        ytype: [],
        idata: [],
        odata: [],
        xerp: []
    };
    b = b.getElementsByTagName("channel");
    for (f = b.length; f--;) {
        h = b[f].getAttribute("target").split("/");
        l.tname.push(h[0]);
        l.name.push(h[0] + "Animation");
        h = h[1].split(".");
        l.ttsid.push(h[0]);
        l.ttaxis.push(h[1]);
        g = this._getById("sampler",
            b[f].getAttribute("source").substring(1));
        si = g.getElementsByTagName("input");
        for (g = si.length; g--;) {
            if ("INPUT" == si[g].getAttribute("semantic")) {
                o = si[g].getAttribute("source").substring(1);
                for (h = e.id.length; h--;) e.id[h] == o && l.xdata.push(e.data[h])
            }
            if ("OUTPUT" == si[g].getAttribute("semantic")) {
                o = si[g].getAttribute("source").substring(1);
                for (h = e.id.length; h--;) e.id[h] == o && (l.ydata.push(e.data[h]), l.ytype.push(e.type[h]))
            }
            if ("IN_TANGENT" == si[g].getAttribute("semantic")) {
                o = si[g].getAttribute("source").substring(1);
                for (h = e.id.length; h--;) e.id[h] == o && l.idata.push(e.data[h])
            }
            if ("OUT_TANGENT" == si[g].getAttribute("semantic")) {
                o = si[g].getAttribute("source").substring(1);
                for (h = e.id.length; h--;) e.id[h] == o && l.odata.push(e.data[h])
            }
            if ("INTERPOLATION" == si[g].getAttribute("semantic")) {
                o = si[g].getAttribute("source").substring(1);
                for (h = e.id.length; h--;) e.id[h] == o && l.xerp.push(e.data[h])
            }
        }
    }
    for (f = l.name.length; f--;)
        if (2 > l.xdata[f].length) Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation '" + c + "' has only one keyframe: ignored.");
        else {
            var e = -1,
                w, v, x;
            if (this._mask & Ovoid.DAE_FORCE_CSPLINE) l.xerp[f] = Ovoid.INTERPOLATION_CSPLINE;
            else if ("BEZIER" == l.xerp[f][0])
                if (l.xerp[f] = Ovoid.INTERPOLATION_BSPLINE, l.idata[f].length == 2 * l.xdata[f].length) {
                    o = l.xdata[f].length;
                    w = new Float32Array(2 * o);
                    v = new Float32Array(2 * o);
                    for (var r = 0, h = 0; h < o; h++) w[r] = l.idata[f][2 * h], v[r] = l.idata[f][2 * h + 1], r++, w[r] = l.odata[f][2 * h], v[r] = l.odata[f][2 * h + 1], r++
                } else if (l.idata[f].length == l.xdata[f].length) {
                o = l.xdata[f].length;
                w = new Float32Array(2 * o);
                v = new Float32Array(2 *
                    o);
                for (h = r = 0; h < o; h++) w[r] = l.xdata[f][h - 1] + 0.9 * (l.xdata[f][h] - l.xdata[f][h - 1]), v[r] = l.idata[f][2 * h + 1], r++, w[r] = l.xdata[f][h] + 0.1 * (l.xdata[f][h + 1] - l.xdata[f][h]), v[r] = l.odata[f][2 * h + 1], r++
            } else Ovoid.log(3, "Ovoid.Collada " + this.name, "Animation '" + c + "' inconsistant tangent/keyframe count ratio"), l.xerp[f] = Ovoid.INTERPOLATION_CSPLINE;
            else if ("HERMITE" == l.xerp[f][0])
                if (l.idata[f].length == l.xdata[f].length) {
                    l.xerp[f] = Ovoid.INTERPOLATION_HSPLINE;
                    o = l.xdata[f].length;
                    x = new Float32Array(2 * o);
                    for (h = r = 0; h < o; h++) x[r] =
                        l.idata[f][h], r++, x[r] = l.odata[f][h], r++
                } else Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation '" + c + "' wrong tangent/keyframe count ratio"), l.xerp[f] = Ovoid.INTERPOLATION_CSPLINE;
                else l.xerp[f] = Ovoid.INTERPOLATION_CSPLINE;
            r = this._retrieveNode(l.name[f]);
            if (!r)
                if (r = new Ovoid.Animation(this._pfix + l.name[f] + this._sfix), this._dstsc.insert(r), Ovoid.log(3, "Ovoid.Collada " + this.name, "Animation '" + r.name + "' : created"), h = this._retrieveNode(l.tname[f])) r.setTarget(h), Ovoid.log(3, "Ovoid.Collada " + this.name,
                    "Animation '" + r.name + "' has target '" + h.name + "'");
                else {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation '" + r.name + "' target '" + l.tname[f] + "' not found");
                    continue
                }
            if (0 == this._dae.getElementsByTagName("visual_scene").length) return Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation : <visual_scene> not found (Is DAE source corrupted ?)."), null;
            var z;
            this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("matrix").length && (z = this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("matrix")[0].getAttribute("sid"));
            if (l.ttsid[f] == z)
                if ("float4x4" == l.ytype[f]) {
                    for (var e = l.ydata[f].length / 16, g = new Ovoid.Matrix4, b = new Float32Array(e), o = new Float32Array(e), m = new Float32Array(e), q = new Float32Array(e), y = new Float32Array(e), C = new Float32Array(e), h = 0; h < e; h++) {
                        g.setv(l.ydata[f].subarray(16 * h, 16 * h + 16));
                        g.toTranspose();
                        b[h] = g.m[12];
                        o[h] = g.m[13];
                        m[h] = g.m[14];
                        var p = Math.sqrt(g.m[0] * g.m[0] + g.m[1] * g.m[1]);
                        0.001 < p ? (q[h] = Math.atan2(g.m[6], g.m[10]), y[h] = Math.atan2(-g.m[2], p), C[h] = Math.atan2(g.m[1], g.m[0])) : (q[h] = Math.atan2(-g.m[9],
                            g.m[5]), y[h] = Math.atan2(-g.m[2], p), C[h] = 0)
                    }
                    switch (l.xerp[f]) {
                    case Ovoid.INTERPOLATION_BSPLINE:
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_X, l.xdata[f], b, w, v);
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y, l.xdata[f], o, w, v);
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z, l.xdata[f], m, w, v);
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_ROTATE_X, l.xdata[f], q, w, v);
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Y, l.xdata[f], y, w, v);
                        r.setBspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Z, l.xdata[f], C, w, v);
                        break;
                    case Ovoid.INTERPOLATION_HSPLINE:
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_X,
                            l.xdata[f], b, x);
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y, l.xdata[f], o, x);
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z, l.xdata[f], m, x);
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_ROTATE_X, l.xdata[f], q, x);
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Y, l.xdata[f], y, x);
                        r.setHspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Z, l.xdata[f], C, x);
                        break;
                    default:
                        r.setCspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_X, l.xdata[f], b), r.setCspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y, l.xdata[f], o), r.setCspline(Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z,
                            l.xdata[f], m), r.setCspline(Ovoid.ANIMATION_CHANNEL_ROTATE_X, l.xdata[f], q), r.setCspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Y, l.xdata[f], y), r.setCspline(Ovoid.ANIMATION_CHANNEL_ROTATE_Z, l.xdata[f], C)
                    }
                    Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + r.name + "' add curve channels from matrix")
                } else Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation '" + r.name + "' unsuported matrix data type '" + l.ytype[f] + "': Aborting.");
                else {
                    var D, B, u;
                    this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("translate").length &&
                        (D = this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("translate")[0].getAttribute("sid"));
                    if (this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("rotate").length) {
                        o = this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("rotate").length;
                        B = Array(o);
                        for (h = 0; h < o; h++) B[h] = this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("rotate")[h].getAttribute("sid")
                    }
                    this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("scale").length &&
                        (u = this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("scale")[0].getAttribute("sid"));
                    e = -1;
                    if (l.ttsid[f] == D) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE;
                    if (l.ttsid[f] == u) e = Ovoid.ANIMATION_CHANNEL_SCALE;
                    if (B)
                        for (h = B.length; h--;)
                            if (l.ttsid[f] == B[h]) {
                                h = this._gTxtDataSplit(this._dae.getElementsByTagName("visual_scene")[0].getElementsByTagName("rotate")[h].childNodes);
                                if (1 == parseFloat(h[0])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_X;
                                if (1 == parseFloat(h[1])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_Y;
                                if (1 == parseFloat(h[2])) e =
                                    Ovoid.ANIMATION_CHANNEL_ROTATE_Z;
                                switch (this._upaxis) {
                                case 2:
                                    if (1 == parseFloat(h[0])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_X;
                                    if (1 == parseFloat(h[1])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_Z;
                                    if (1 == parseFloat(h[2])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_Y;
                                    break;
                                case 0:
                                    break;
                                default:
                                    if (1 == parseFloat(h[0])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_X;
                                    if (1 == parseFloat(h[1])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_Y;
                                    if (1 == parseFloat(h[2])) e = Ovoid.ANIMATION_CHANNEL_ROTATE_Z
                                }
                                break
                            }
                    if (e == Ovoid.ANIMATION_CHANNEL_TRANSLATE) switch (this._upaxis) {
                    case 2:
                        if ("X" ==
                            l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_X;
                        if ("Y" == l.ttaxis[f]) {
                            e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z;
                            for (h = l.ydata[f].length; h--;) l.ydata[f][h] = -l.ydata[f][h]
                        }
                        if ("Z" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y;
                        break;
                    case 0:
                        break;
                    default:
                        if ("X" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_X;
                        if ("Y" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_Y;
                        if ("Z" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_TRANSLATE_Z
                    }
                    if (e == Ovoid.ANIMATION_CHANNEL_ROTATE_X) {
                        h = l.ydata[f].length;
                        switch (this._upaxis) {
                        case 2:
                            for (; h--;) l.ydata[f][h] =
                                Ovoid.deg2Rad(l.ydata[f][h] - 90);
                            break;
                        case 0:
                            break;
                        default:
                            for (; h--;) l.ydata[f][h] = Ovoid.deg2Rad(l.ydata[f][h])
                        }
                        if (l.xerp[f] == Ovoid.INTERPOLATION_BSPLINE)
                            for (h = v.length; h--;) v[h] = Ovoid.deg2Rad(v[h])
                    }
                    if (e == Ovoid.ANIMATION_CHANNEL_ROTATE_Y) {
                        h = l.ydata[f].length;
                        switch (this._upaxis) {
                        case 2:
                            for (; h--;) l.ydata[f][h] = Ovoid.deg2Rad(l.ydata[f][h]);
                            break;
                        case 0:
                            break;
                        default:
                            for (; h--;) l.ydata[f][h] = Ovoid.deg2Rad(l.ydata[f][h])
                        }
                        if (l.xerp[f] == Ovoid.INTERPOLATION_BSPLINE)
                            for (h = v.length; h--;) v[h] = Ovoid.deg2Rad(v[h])
                    }
                    if (e ==
                        Ovoid.ANIMATION_CHANNEL_ROTATE_Z) {
                        h = l.ydata[f].length;
                        switch (this._upaxis) {
                        case 2:
                            for (; h--;) l.ydata[f][h] = Ovoid.deg2Rad(-l.ydata[f][h]);
                            break;
                        case 0:
                            break;
                        default:
                            for (; h--;) l.ydata[f][h] = Ovoid.deg2Rad(l.ydata[f][h])
                        }
                        if (l.xerp[f] == Ovoid.INTERPOLATION_BSPLINE)
                            for (h = v.length; h--;) v[h] = Ovoid.deg2Rad(v[h])
                    }
                    if (e == Ovoid.ANIMATION_CHANNEL_SCALE) {
                        if ("X" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_SCALE_X;
                        if ("Y" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_SCALE_Y;
                        if ("Z" == l.ttaxis[f]) e = Ovoid.ANIMATION_CHANNEL_SCALE_Z
                    }
                    if (-1 !=
                        e) {
                        switch (l.xerp[f]) {
                        case Ovoid.INTERPOLATION_BSPLINE:
                            r.setBspline(e, l.xdata[f], l.ydata[f], w, v);
                            break;
                        case Ovoid.INTERPOLATION_HSPLINE:
                            r.setHspline(e, l.xdata[f], l.ydata[f], x);
                            break;
                        default:
                            r.setCspline(e, l.xdata[f], l.ydata[f])
                        }
                        Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + r.name + "' add curve channel " + l.ttsid[f] + "." + l.ttaxis[f])
                    } else Ovoid.log(2, "Ovoid.Collada " + this.name, "Animation '" + r.name + "' unsuported channel '" + l.ttsid[f] + "'")
                }
        }
    return r
};
Ovoid.Collada.prototype.loadSource = function (b, c) {
    this.url = b;
    this.loadStatus = 0;
    var e = new XMLHttpRequest;
    if (c) e.owner = this, e.onreadystatechange = function () {
        if (4 == this.readyState) 200 == this.status || 304 == this.status ? (this.owner._dae = (new DOMParser).parseFromString(this.responseText, "text/xml"), this.owner.loadStatus = 1) : (this.owner.loadStatus = -1, Ovoid.log(2, "Ovoid.Collada " + this.name, "unable to load source '" + this.owner.url + "'"))
    };
    var g = this.url;
    Ovoid.opt_debugMode && (g += "?" + Math.random());
    e.open("GET", g,
        c);
    e.send(null);
    if (!c) 200 == e.status || 304 == e.status ? (this._dae = (new DOMParser).parseFromString(e.responseText, "text/xml"), this.loadStatus = 1) : (this.loadStatus = -1, Ovoid.log(2, "Ovoid.Collada " + this.name, "unable to load source '" + this.url + "'"))
};
Ovoid.Collada.prototype.importDae = function (b, c, e, g) {
    if (!this._dae) return Ovoid.log(2, "Ovoid.Collada", "no DAE data."), !1;
    Ovoid.log(3, "Ovoid.Collada", this.url + " start.");
    this._dstsc = c;
    this.name = Ovoid.extractName(this.url);
    this._sfix = g ? "." + g : "";
    this._pfix = e ? e + "." : "";
    this._mask = b;
    b = this._dae.getElementsByTagName("up_axis")[0].childNodes[0].data;
    if ("Z_UP" == b) this._upaxis = 2;
    if ("Y_UP" == b) this._upaxis = 1;
    if ("X_UP" == b) this._upaxis = 0;
    if (this._mask & Ovoid.DAE_CONVERT_UPAXIS) switch (this._upaxis) {
    case 0:
        Ovoid.log(2,
            "Ovoid.Collada " + this.name, "Conversion from X-Up axis not supported, data will be importedwithout modification.");
        this._upaxis = 1;
        break;
    case 2:
        Ovoid.log(2, "Ovoid.Collada " + this.name, "Conversion from Z-Up axis to Y-Up axis")
    } else {
        switch (this._upaxis) {
        case 0:
            Ovoid.log(2, "Ovoid.Collada " + this.name, "is X-Up axis, OvoiD.JS usually work in Right-Handed Y-Up.");
            break;
        case 2:
            Ovoid.log(2, "Ovoid.Collada " + this.name, "is Z-Up axis, OvoiD.JS usually work in Right-Handed Y-Up.Use option Ovoid.DAE_CONVERT_UPAXIS to convert Z-up to Y-up.")
        }
        this._upaxis =
            1
    } if (this._mask & Ovoid.DAE_CREATE_TRACK) {
        var f = new Ovoid.Track(this.name + "Track");
        Ovoid.log(3, "Ovoid.Collada " + this.name, " Track '" + f.name + "' : created")
    }
    var h;
    if (this._mask & Ovoid.DAE_MATERIALS) {
        Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_MATERIALS.");
        if (this._dae.getElementsByTagName("library_images").length) {
            c = this._dae.getElementsByTagName("library_images")[0].childNodes;
            for (b = c.length; b--;)
                if (1 == c[b].nodeType) {
                    try {
                        h = this._procImg(c[b])
                    } catch (l) {
                        Ovoid.log(2, "Ovoid.Collada " + this.name, " _procImg exception: " +
                            l.stack + ". (Is DAE source corrupted ?).")
                    }
                    h && this._dstsc.insert(h)
                }
        }
        if (this._dae.getElementsByTagName("library_materials").length) {
            c = this._dae.getElementsByTagName("library_materials")[0].childNodes;
            for (b = c.length; b--;)
                if (1 == c[b].nodeType) {
                    try {
                        h = this._procMat(c[b])
                    } catch (m) {
                        Ovoid.log(2, "Ovoid.Collada " + this.name, " _procMat exception: " + m.stack + ". (Is DAE source corrupted ?).")
                    }
                    h && this._dstsc.insert(h)
                }
        }
    }
    if (this._mask & Ovoid.DAE_CAMERAS && (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_CAMERAS."), this._dae.getElementsByTagName("library_cameras").length)) {
        c =
            this._dae.getElementsByTagName("library_cameras")[0].childNodes;
        for (b = c.length; b--;)
            if (1 == c[b].nodeType) {
                try {
                    h = this._procCam(c[b])
                } catch (o) {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, " _procCam exception: " + o.stack + ". (Is DAE source corrupted ?).")
                }
                h && this._dstsc.insert(h)
            }
    }
    if (this._mask & Ovoid.DAE_LIGHTS && (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_LIGHTS."), this._dae.getElementsByTagName("library_lights").length)) {
        c = this._dae.getElementsByTagName("library_lights")[0].childNodes;
        for (b = c.length; b--;)
            if (1 ==
                c[b].nodeType) {
                try {
                    h = this._procLig(c[b])
                } catch (q) {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, " _procLig exception: " + q.stack + ". (Is DAE source corrupted ?).")
                }
                h && this._dstsc.insert(h)
            }
    }
    if (this._mask & Ovoid.DAE_MESHS && (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_MESHS."), this._dae.getElementsByTagName("library_geometries").length)) {
        c = this._dae.getElementsByTagName("library_geometries")[0].childNodes;
        for (b = c.length; b--;)
            if (1 == c[b].nodeType) {
                try {
                    h = this._procGeo(c[b])
                } catch (w) {
                    Ovoid.log(2, "Ovoid.Collada " +
                        this.name, " _procGeo exception: " + w.stack + ". (Is DAE source corrupted ?).")
                }
                h && this._dstsc.insert(h)
            }
    }
    if (this._mask & Ovoid.DAE_TRANSFORMS || this._mask & Ovoid.DAE_BONES)
        if (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_TRANSFORMS."), this._dae.getElementsByTagName("library_visual_scenes").length) {
            b = this._dae.getElementsByTagName("library_visual_scenes")[0].getElementsByTagName("visual_scene")[0];
            c = new Uint32Array(128);
            e = 0;
            for (g = !1; !g;) {
                for (; c[e] == this._getChildByTag(b, "node").length;) {
                    c[e] = 0;
                    if (0 == e) {
                        g = !0;
                        break
                    }
                    e--;
                    b = b.parentNode
                }
                if (g) break;
                b = this._getChildByTag(b, "node")[c[e]];
                c[e]++;
                e++;
                try {
                    h = this._procNod(b)
                } catch (v) {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, " _procNod exception: " + v + ". (Is DAE source corrupted ?).")
                }
                if (h) {
                    this._dstsc.insert(h);
                    var x = this._retrieveNode(b.parentNode.getAttribute("id"));
                    x ? (h.setParent(x), Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + h.name + "' child of '" + x.name + "'")) : (this._switch2YNode(h), Ovoid.log(3, "Ovoid.Collada " + this.name, "'" + h.name + "' in scene root"));
                    h.cachTransform()
                }
            }
        }
    if (this._mask &
        Ovoid.DAE_CONTROLLERS && (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_CONTROLLERS."), this._dae.getElementsByTagName("library_controllers").length)) {
        c = this._dae.getElementsByTagName("library_controllers")[0].childNodes;
        for (b = c.length; b--;)
            if (1 == c[b].nodeType) try {
                this._procCtr(c[b])
            } catch (r) {
                Ovoid.log(2, "Ovoid.Collada " + this.name, " _procCtr exception: " + r.stack + ". (Is DAE source corrupted ?).")
            }
    }
    if (this._mask & Ovoid.DAE_ANIMATIONS && (Ovoid.log(3, "Ovoid.Collada " + this.name, " DAE_ANIMATIONS."), this._dae.getElementsByTagName("library_animations").length)) {
        c =
            this._dae.getElementsByTagName("library_animations")[0].childNodes;
        for (b = c.length; b--;)
            if (1 == c[b].nodeType) {
                try {
                    h = this._procAni(c[b])
                } catch (z) {
                    Ovoid.log(2, "Ovoid.Collada " + this.name, " _procAni exception: " + z.stack + ". (Is DAE source corrupted ?).")
                }
                h && this._mask & Ovoid.DAE_CREATE_TRACK && (Ovoid.log(3, "Ovoid.Collada " + this.name, "adding animation '" + h.name + "' to Track '" + f.name + "'"), f.addAnimation(h))
            }
    }
    this._mask & Ovoid.DAE_CREATE_TRACK && 0 < f.animation.length && (Ovoid.log(2, "Ovoid.Collada " + this.name, "Importation has generated new Animation Track '" +
        f.name + "'"), this._dstsc.insert(f));
    Ovoid.log(3, "Ovoid.Collada " + this.name, " end.");
    return !0
};
Ovoid.Ojson = function () {
    this.url = this.name = "";
    this._dstsc = this._json = null;
    this._rlnkstack = [];
    this.loadStatus = 0
};
Ovoid.Ojson.prototype.loadSource = function (b, c) {
    this.url = b;
    Ovoid.log(3, "Ovoid.Ojson", "loading source file '" + this.url + "'");
    this.loadStatus = 0;
    var e = new XMLHttpRequest;
    if (c) e.owner = this, e.onreadystatechange = function () {
        if (4 == this.readyState)
            if (200 == this.status || 304 == this.status) {
                Ovoid.log(3, "Ovoid.Ojson", "parsing source file '" + this.owner.url + "'");
                try {
                    this.owner._json = JSON.parse(this.responseText)
                } catch (b) {
                    Ovoid.log(2, "Ovoid.Ojson", "parse error '" + b.stack + "'")
                }
                this.owner.loadStatus = 1
            } else this.owner.loadStatus = -1, Ovoid.log(2, "Ovoid.Ojson " + this.name, "unable to load source '" + this.owner.url + "'")
    };
    var g = this.url;
    Ovoid.opt_debugMode && (g += "?" + Math.random());
    e.open("GET", g, c);
    e.send(null);
    if (!c) 200 == e.status || 304 == e.status ? (this._json = JSON.parse(e.responseText), this.loadStatus = 1) : (this.loadStatus = -1, Ovoid.log(1, "Ovoid.Ojson " + this.name, "unable to load source '" + this.url + "'"))
};
Ovoid.Ojson.prototype.exportScene = function (b) {
    this._json = {};
    this._json.OJSON = Ovoid.OVOIDJS_VERSION;
    this._json.TYPE = "SCN";
    this._json.SCENE = b;
    for (var b = JSON.stringify(this._json), c = b.length, e = 0, g = 0; g < c; g++, e++) 2048 < e && "," == b[g] && (b = [b.slice(0, g + 1), "<br>", b.slice(g + 1)].join(""), e = 0);
    c = window.open("scene.ojsn", "Ojson export", "width=600,height=300,scrollbars=yes,resizable=yes", !0).document.open();
    c.write('<html><header><title>Ojson export</title><header><body style="font-family:monospace;font-size:10">');
    c.write(b);
    c.write("</body></html>");
    return b
};
Ovoid.Ojson.prototype._parseFunc = function (b) {
    var c = b.indexOf("(") + 1,
        e = b.indexOf(")"),
        c = b.substring(c, e),
        e = b.indexOf("{") + 1,
        g = b.lastIndexOf("}"),
        b = b.substring(e, g);
    return 0 < c.length ? new Function(c, b) : new Function(b)
};
Ovoid.Ojson.prototype._linkReport = function (b, c, e) {
    Ovoid.log(3, "Ovoid.Ojson " + this.name, "relink '" + b.name + "' has " + e + " '" + (c ? c.name : "null") + "'")
};
Ovoid.Ojson.prototype._importNode = function (b) {
    switch (b.t) {
    case Ovoid.TRANSFORM:
        n = new Ovoid.Transform(b.n);
        this._procTransform(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Transform node '" + b.n + "'");
        break;
    case Ovoid.CAMERA:
        n = new Ovoid.Camera(b.n);
        this._procCamera(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Camera node '" + b.n + "'");
        break;
    case Ovoid.LIGHT:
        n = new Ovoid.Light(b.n);
        this._procLight(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Light node '" + b.n + "'");
        break;
    case Ovoid.BODY:
        n =
            new Ovoid.Body(b.n);
        this._procBody(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Body node '" + b.n + "'");
        break;
    case Ovoid.JOINT:
        n = new Ovoid.Joint(b.n);
        this._procJoint(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Joint node '" + b.n + "'");
        break;
    case Ovoid.MESH:
        n = new Ovoid.Mesh(b.n);
        this._procMesh(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Mesh node '" + b.n + "'");
        break;
    case Ovoid.MATERIAL:
        n = new Ovoid.Material(b.n);
        this._procMaterial(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Material node '" +
            b.n + "'");
        break;
    case Ovoid.TEXTURE:
        n = new Ovoid.Texture(b.n);
        this._procTexture(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Texture node '" + b.n + "'");
        break;
    case Ovoid.ACTION:
        n = new Ovoid.Action(b.n);
        this._procAction(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Action node '" + b.n + "'");
        break;
    case Ovoid.PHYSICS:
        n = new Ovoid.Physics(b.n);
        this._procPhysic(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Physics node '" + b.n + "'");
        break;
    case Ovoid.ANIMATION:
        n = new Ovoid.Animation(b.n);
        this._procAnimation(n,
            b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Animation node '" + b.n + "'");
        break;
    case Ovoid.EXPRESSION:
        n = new Ovoid.Expression(b.n);
        this._procExpression(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Expression node '" + b.n + "'");
        break;
    case Ovoid.AIM:
        n = new Ovoid.Aim(b.n);
        this._procAim(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Aim node '" + b.n + "'");
        break;
    case Ovoid.TRACK:
        n = new Ovoid.Track(b.n);
        this._procTrack(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Track node '" + b.n + "'");
        break;
    case Ovoid.SKIN:
        n =
            new Ovoid.Skin(b.n);
        this._procSkin(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Skin node '" + b.n + "'");
        break;
    case Ovoid.EMITTER:
        n = new Ovoid.Emitter(b.n);
        this._procEmitter(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Emitter node '" + b.n + "'");
        break;
    case Ovoid.AUDIO:
        n = new Ovoid.Audio(b.n);
        this._procAudio(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Audio node '" + b.n + "'");
        break;
    case Ovoid.TEXT:
        n = new Ovoid.Text(b.n);
        this._procText(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Text node '" +
            b.n + "'");
        break;
    case Ovoid.LAYER:
        n = new Ovoid.Layer(b.n);
        this._procLayer(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Layer node '" + b.n + "'");
        break;
    case Ovoid.SOUND:
        n = new Ovoid.Sound(b.n);
        this._procSound(n, b);
        Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Sound node '" + b.n + "'");
        break;
    default:
        n = new Ovoid.Node(b.n), this._procNode(n, b), Ovoid.log(3, "Ovoid.Ojson " + this.name, "import Null node '" + b.n + "'")
    }
    this._dstsc.insert(n, null, !0, !0);
    this._rlnkstack.push(n)
};
Ovoid.Ojson.prototype._relinkNode = function (b) {
    if (null != b.parent) 0 != b.parent ? b.parent = this._dstsc.search(b.parent) : (b.parent = null, b.type & Ovoid.LAYER ? b.setParent(this._dstsc.overlay) : b.type & Ovoid.TRANSFORM && b.setParent(this._dstsc.world));
    for (var c = 0; c < b.child.length; c++) b.child[c] = this._dstsc.search(b.child[c]);
    for (c = 0; c < b.depend.length; c++) b.depend[c] = this._dstsc.search(b.depend[c]);
    for (c = 0; c < b.link.length; c++) b.link[c] = this._dstsc.search(b.link[c]);
    if (b.type & Ovoid.CONSTRAINT)
        for (c = 0; c < b.target.length; c++) b.target[c] =
            this._dstsc.search(b.target[c]);
    b.type & Ovoid.AIM && (b.aimat[c] = this._dstsc.search(b.aimat[c]));
    if (b.type & Ovoid.BODY) b.shape = this._dstsc.search(b.shape);
    if (b.type & Ovoid.SKIN) {
        b.mesh = this._dstsc.search(b.mesh);
        for (c = 0; c < b.joint.length; c++) b.joint[c] = this._dstsc.search(b.joint[c]), this._linkReport(b, b.joint[c], "joint"), b.bindJointMatrix.push(new Ovoid.Matrix4), b.infWorldMatrix.push(new Ovoid.Matrix4), b.infNormalMatrix.push(new Ovoid.Matrix3), b.unCach(Ovoid.CACH_SKIN);
        Ovoid.opt_localSkinData && b._localMirror()
    }
    if (b.type &
        Ovoid.JOINT) b.skin = this._dstsc.search(b.skin);
    if (b.type & Ovoid.SOUND) b.audio = this._dstsc.search(b.audio);
    if (b.type & Ovoid.LAYER) b.bgTexture = this._dstsc.search(b.bgTexture);
    if (b.type & Ovoid.TEXT) b.fontmap = this._dstsc.search(b.fontmap);
    if (b.type & Ovoid.MATERIAL)
        for (c = 0; c < b.texture.length; c++) b.texture[c] = this._dstsc.search(b.texture[c]);
    if (b.type & Ovoid.TRACK)
        for (c = 0; c < b.animation.length; c++) b.animation[c] = this._dstsc.search(b.animation[c]);
    if (b.type & Ovoid.MESH)
        for (c = 0; c < Ovoid.MAX_MESH_LOD; c++)
            for (var e =
                0; e < b.polyset[c].length; e++) b.polyset[c][e].material = this._dstsc.search(b.polyset[c][e].material), b.polyset[c][e].material || Ovoid.log(2, "Ovoid.Ojson " + this.name, "polyset #" + c + " of '" + b.name + "' has null material.");
    if (b.type & Ovoid.ACTION) {
        for (c = 0; c < b.onIntersect[0].length; c++) b.onIntersect[0][c] = this._dstsc.search(b.onIntersect[0][c]);
        for (c = 0; c < b.onIntersectEnter[0].length; c++) b.onIntersectEnter[0][c] = this._dstsc.search(b.onIntersectEnter[0][c]);
        for (c = 0; c < b.onIntersectLeave[0].length; c++) b.onIntersectLeave[0][c] =
            this._dstsc.search(b.onIntersectLeave[0][c])
    }
};
Ovoid.Ojson.prototype._procNode = function (b, c) {
    b.visible = c.v;
    b.uid = c.u;
    "null" == c.p ? b.parent = null : b.parent = c.p;
    for (var e = 0; e < c.c.length; e++) b.child.push(c.c[e]);
    for (e = 0; e < c.dp.length; e++) b.depend.push(c.dp[e]);
    for (e = 0; e < c.lk.length; e++) b.link.push(c.lk[e]);
    var e = new Ovoid.Point,
        g = new Ovoid.Point;
    e.setv(c.bmn);
    g.setv(c.bmx);
    b.boundingBox.setBound(e, g);
    b.boundingSphere.setBound(e, g);
    b.boundingSphere.setRadius(c.brd)
};
Ovoid.Ojson.prototype._procMaterial = function (b, c) {
    this._procNode(b, c);
    for (var e = 0; e < c.cl.length; e++) b.color[e].setv(c.cl[e]);
    for (e = 0; e < c.tx.length; e++) "null" != b.texture[e] && (b.texture[e] = c.tx[e]);
    b.shininess = c.sh;
    b.reflectivity = c.re;
    b.opacity = c.op
};
Ovoid.Ojson.prototype._procTexture = function (b, c) {
    this._procNode(b, c);
    b.url = c.url;
    b.filter = c.fl
};
Ovoid.Ojson.prototype._procAudio = function (b, c) {
    this._procNode(b, c);
    b.url = c.url
};
Ovoid.Ojson.prototype._procTrack = function (b, c) {
    this._procNode(b, c);
    b.playing = c.pl;
    b.loop = c.lo;
    b.ended = c.en;
    for (var e = 0; e < c.an.length; e++) b.animation.push(c.an[e]);
    b.onended = this._parseFunc(c.oe)
};
Ovoid.Ojson.prototype._procMesh = function (b, c) {
    this._procNode(b, c);
    for (var e = 0; e < Ovoid.MAX_MESH_LOD; e++) {
        if (0 < c.mp[e].length)
            for (var g = 0; g < c.mp[e].length; g++) {
                var f = new Ovoid.Polyset;
                f.ioffset = c.mp[e][g][0];
                f.icount = c.mp[e][g][1];
                f.material = c.mp[e][g][2];
                b.polyset[e].push(f)
            }
        0 < c.mv[e].length && (Ovoid.log(3, "Ovoid.Ojson " + this.name, "unpack vertices buffer:" + c.mv[e].length + " floats"), b.vertices[e] = Ovoid.Vertex.upack(c.mf, c.mv[e]));
        if (0 < c.mt[e].length)
            for (g = 0; g < c.mt[e].length; g++) f = new Ovoid.Triangle,
        f.index[0] = c.mt[e][g][0], f.index[1] = c.mt[e][g][1], f.index[2] = c.mt[e][g][2], f.adjacent[0] = c.mt[e][g][3], f.adjacent[1] = c.mt[e][g][4], f.adjacent[2] = c.mt[e][g][5], b.triangles[e].push(f);
        b.recalcTriangles(e)
    }
    b._vfbytes = c.mb;
    b._vformat = c.mf;
    "null" == c.mm ? b.modifier = null : b.modifier = c.mm;
    b.createBuffers(b._vformat, Ovoid.BUFFER_STATIC)
};
Ovoid.Ojson.prototype._procConstraint = function (b, c) {
    this._procNode(b, c);
    for (var e = 0; e < c.ct.length; e++) b.target.push(c.ct[e])
};
Ovoid.Ojson.prototype._procAnimation = function (b, c) {
    this._procConstraint(b, c);
    b._format = c.ft;
    b.playing = c.pl;
    b.loop = c.lo;
    b.ended = c.en;
    b.smooth = c.sm;
    b.factor = c.fc;
    for (var e = 0; 21 > e; e++)
        if ("null" == c.cn[e]) b._channel[e] = null;
        else {
            var g;
            switch (c.cn[e].type) {
            case "Bspline":
                g = new Ovoid.Bspline(new Float32Array(c.cn[e].x), new Float32Array(c.cn[e].y), new Float32Array(c.cn[e].cx), new Float32Array(c.cn[e].cy));
                break;
            case "Hspline":
                g = new Ovoid.Hspline(new Float32Array(c.cn[e].x), new Float32Array(c.cn[e].y), new Float32Array(c.cn[e].v));
                break;
            default:
                g = new Ovoid.Cspline(new Float32Array(c.cn[e].x), new Float32Array(c.cn[e].y))
            }
            b._channel[e] = g
        }
    b.onended = this._parseFunc(c.oe)
};
Ovoid.Ojson.prototype._procPhysic = function (b, c) {
    this._procConstraint(b, c);
    b.imass = c.im;
    b.itensor.setv(c.it);
    b.model = c.md;
    b.damping = c.dm;
    b.useFriction = c.uf;
    b.restitution = c.re;
    b.oncontact = this._parseFunc(c.oc)
};
Ovoid.Ojson.prototype._procSkin = function (b, c) {
    this._procNode(b, c);
    "null" == c.mh ? b.mesh = null : b.mesh = c.mh;
    for (var e = 0; e < c.jt.length; e++) b.joint.push(c.jt[e]);
    b.bindJointMatrix = Array(c.bjm.length);
    for (e = 0; e < b.bindJointMatrix.length; e++) b.bindJointMatrix[e] = new Ovoid.Matrix4, b.bindJointMatrix[e].setv(c.bjm[e]);
    b.bindShapeMatrix.setv(c.bsm)
};
Ovoid.Ojson.prototype._procEmitter = function (b, c) {
    this._procNode(b, c);
    b.model = c.md;
    b.mass = c.ms;
    b.life = c.lf;
    b.rate = c.rt;
    b.velocity = c.vl;
    b.damping = c.dm;
    b.delta = c.dt;
    b.scattering = c.sc;
    for (var e = 0; e < c.cl.length; e++) b.color[e].setv(c.cl[e]);
    b.size[0] = c.sz[0];
    b.size[1] = c.sz[1];
    b.emits = c.em;
    "null" == c.tx ? b.texture = null : b.texture = c.tx;
    b.billboard = c.bb
};
Ovoid.Ojson.prototype._procTransform = function (b, c) {
    this._procNode(b, c);
    b.scaling.setv(c.ts);
    b.translation.setv(c.tt);
    b.orientation.setv(c.to);
    b.rotation.setv(c.tr)
};
Ovoid.Ojson.prototype._procCamera = function (b, c) {
    this._procTransform(b, c);
    b.viewX = c.vx;
    b.viewY = c.vy;
    b.fov = c.fv;
    b.aspect = c.ar;
    b.clipNear = c.cn;
    b.clipFar = c.cf
};
Ovoid.Ojson.prototype._procLight = function (b, c) {
    this._procTransform(b, c);
    b.model = c.md;
    b.color.setv(c.cl);
    b.intensity = c.it;
    b.attenuationC = c.ac;
    b.attenuationL = c.al;
    b.attenuationQ = c.aq;
    b.range = c.rn;
    b.falloff = c.ff;
    b.spotAngle = c.sa;
    b.shadowCasting = c.sc
};
Ovoid.Ojson.prototype._procBody = function (b, c) {
    this._procTransform(b, c);
    "null" == c.shape ? b.shape = null : b.shape = c.bs;
    b.intersectable = c.bi;
    b.shadowCasting = c.bc;
    b.renderLayer = c.bl;
    b.renderAlpha = c.ba
};
Ovoid.Ojson.prototype._procJoint = function (b, c) {
    this._procTransform(b, c);
    b.sz = c.size;
    "null" == c.sk ? b.skin = null : b.skin = c.sk
};
Ovoid.Ojson.prototype._procSound = function (b, c) {
    this._procTransform(b, c);
    "null" == c.au ? b.audio = null : b.audio = c.au;
    b.spatialize(!c.fl);
    if (b.alpanner && c.ia) b.alpanner.coneInnerAngle = c.ia, b.alpanner.coneOuterAngle = c.oa, b.alpanner.coneOuterGain = c.og, b.alpanner.refDistance = c.rd, b.alpanner.maxDistance = c.md, b.alpanner.rolloffFactor = c.rf;
    b.setLoop(c.lo)
};
Ovoid.Ojson.prototype._procLayer = function (b, c) {
    this._procTransform(b, c);
    b.size.setv(c.sz);
    b.fgColor.setv(c.fc);
    b.bgColor.setv(c.bc);
    "null" == c.bt ? b.bgTexture = null : b.bgTexture = c.bt
};
Ovoid.Ojson.prototype._procText = function (b, c) {
    this._procLayer(b, c);
    "null" == c.fm ? b.fontmap = null : b.fontmap = c.fm;
    b.string = c.st;
    b.param.setv(c.pr)
};
Ovoid.Ojson.prototype._procExpression = function (b, c) {
    this._procConstraint(b, c);
    b.playing = c.pl;
    b.factor = c.fc;
    for (var e = 0; e < c.ex.length; e++) b.exprfunc.push(this._parseFunc(c.ex[e]))
};
Ovoid.Ojson.prototype._procAim = function (b, c) {
    this._procConstraint(b, c);
    b.upvector.set(c.up);
    "null" == c.at ? b.aimat = null : b.aimat = c.at
};
Ovoid.Ojson.prototype._procAction = function (b, c) {
    this._procNode(b, c);
    b.onEnter = this._parseFunc(c.onEnter);
    b.onLeave = this._parseFunc(c.onLeave);
    b.onOver = this._parseFunc(c.onOver);
    b.onLmbDn = this._parseFunc(c.onLmbDn);
    b.onLmbUp = this._parseFunc(c.onLmbUp);
    b.onLmbHl = this._parseFunc(c.onLmbHl);
    b.onMmbDn = this._parseFunc(c.onMmbDn);
    b.onMmbUp = this._parseFunc(c.onMmbUp);
    b.onMmbHl = this._parseFunc(c.onMmbHl);
    b.onRmbDn = this._parseFunc(c.onRmbDn);
    b.onRmbUp = this._parseFunc(c.onRmbUp);
    b.onRmbHl = this._parseFunc(c.onRmbHl);
    b.onGrabd = this._parseFunc(c.onGrabd);
    b.onUgrabd = this._parseFunc(c.onUgrabd);
    for (var e = 0; e < c.onIntersect[0].length; e++) "null" == c.onIntersect[0][e] ? b.onIntersect[0][e] = null : b.onIntersect[0][e] = c.onIntersect[0][e], b.onIntersect[1][e] = this._parseFunc(c.onIntersect[1][e]);
    for (e = 0; e < c.onIntersectEnter[0].length; e++) "null" == c.onIntersectEnter[0][e] ? b.onIntersectEnter[0][e] = null : b.onIntersectEnter[0][e] = c.onIntersectEnter[0][e], b.onIntersectEnter[1][e] = this._parseFunc(c.onIntersectEnter[1][e]);
    for (e = 0; e <
        c.onIntersectLeave[0].length; e++) "null" == c.onIntersectLeave[0][e] ? b.onIntersectLeave[0][e] = null : b.onIntersectLeave[0][e] = c.onIntersectLeave[0][e], b.onIntersectLeave[1][e] = this._parseFunc(c.onIntersectLeave[1][e])
};
Ovoid.Ojson.prototype.importScene = function (b) {
    var c = this.url,
        c = c.split("/"),
        c = c[c.length - 1],
        c = c.split(".");
    this.name = c[0];
    Ovoid.log(3, "Ovoid.Ojson " + this.name, "importScene START");
    if (!this._json) return Ovoid.log(1, "Ovoid.Ojson " + this.name, "no data to import."), !1;
    if (!this._json.OJSON) return Ovoid.log(1, "Ovoid.Ojson " + this.name, "is not a valid Ovoid JSON format"), !1;
    if ("SCN" != this._json.TYPE) return Ovoid.log(1, "Ovoid.Ojson " + this.name, "is not a valid Ovoid JSON Scene"), !1;
    if (!this._json.SCENE) return Ovoid.log(1,
        "Ovoid.Ojson " + this.name, "no scene object found in Ovoid JSON"), !1;
    this._rlnkstack = [];
    this._dstsc = b;
    b = this._json.SCENE.nl;
    Ovoid.log(3, "Ovoid.Ojson " + this.name, "importing nodes...");
    for (c = 0; c < b.length; c++) try {
        this._importNode(b[c])
    } catch (e) {
        Ovoid.log(1, "Ovoid.Ojson " + this.name, "Error during node importation:" + e.stack + " File may be corrupted.")
    }
    Ovoid.log(3, "Ovoid.Ojson " + this.name, "relinking nodes...");
    for (c = 0; c < this._rlnkstack.length; c++) this._relinkNode(this._rlnkstack[c]);
    this._dstsc.name = this._json.SCENE.n;
    this._dstsc._uidn = this._json.SCENE.u;
    Ovoid.log(3, "Ovoid.Ojson " + this.name, "importScene END");
    return !0
};
Ovoid.Contact = function () {
    this._f = !1;
    this._r = 0.5;
    this._b = Array(2);
    this._p = 0;
    this._c = new Ovoid.Point;
    this._n = new Ovoid.Vector;
    this._v = new Ovoid.Vector;
    this._rc = [new Ovoid.Vector, new Ovoid.Vector];
    this._rt = [new Ovoid.Vector, new Ovoid.Vector];
    this._d = 0;
    this._li = [new Ovoid.Vector, new Ovoid.Vector];
    this._ti = [new Ovoid.Vector, new Ovoid.Vector];
    this._ap = [new Ovoid.Vector, new Ovoid.Vector];
    this._ar = [new Ovoid.Vector, new Ovoid.Vector];
    this._as = [0, 0];
    this._matrix = new Ovoid.Matrix3
};
Ovoid.Contact.prototype._solveDelta = function (b) {
    var c = new Ovoid.Vector,
        e;
    c.copy(this._b[0]._oldLinear);
    c.scaleBy(b);
    e = c.dot(this._n);
    this._b[1] && (c.copy(this._b[1]._oldLinear), c.scaleBy(b), e -= c.dot(this._n));
    b = this._r;
    0.25 > Math.abs(this._v.v[0]) && (b = 0);
    this._d = -this._v.v[0] - b * (this._v.v[0] - e)
};
Ovoid.Contact.prototype.set = function (b, c, e, g, f, h) {
    c ? (this._f = b.useFriction && c.useFriction, this._r = b.restitution * c.restitution) : (this._f = b.useFriction, this._r = b.restitution);
    if (!(0 > this._r)) this._b[0] = b, this._b[1] = c, this._c.copy(e), this._n.copy(g), this._p = f, this._matrix.m[0] = this._n.v[0], this._matrix.m[1] = this._n.v[1], this._matrix.m[2] = this._n.v[2], Math.abs(this._n.v[0]) > Math.abs(this._n.v[1]) ? (b = 1 / Math.sqrt(this._n.v[2] * this._n.v[2] + this._n.v[0] * this._n.v[0]), this._matrix.m[3] = this._n.v[2] * b, this._matrix.m[4] =
        0, this._matrix.m[5] = -this._n.v[0] * b, this._matrix.m[6] = this._n.v[1] * this._matrix.m[3], this._matrix.m[7] = this._n.v[2] * this._matrix.m[3] - this._n.v[0] * this._matrix.m[5], this._matrix.m[8] = -this._n.v[1] * this._matrix.m[3]) : (b = 1 / Math.sqrt(this._n.v[2] * this._n.v[2] + this._n.v[1] * this._n.v[1]), this._matrix.m[3] = 0, this._matrix.m[4] = -this._n.v[2] * b, this._matrix.m[5] = this._n.v[1] * b, this._matrix.m[6] = this._n.v[1] * this._matrix.m[5] - this._n.v[2] * this._matrix.m[4], this._matrix.m[7] = -this._n.v[0] * this._matrix.m[5],
        this._matrix.m[8] = this._n.v[0] * this._matrix.m[4]), this._rc[0].subOf(this._c, this._b[0].target[0].worldPosition), this._b[1] && this._rc[1].subOf(this._c, this._b[1].target[0].worldPosition), b = new Ovoid.Vector, c = new Ovoid.Vector, b.crossOf(this._b[0].angularVelocity, this._rc[0]), b.addBy(this._b[0].linearVelocity), b.transform3Inverse(this._matrix), c.copy(this._b[0]._oldLinear), c.scaleBy(h), c.transform3Inverse(this._matrix), c.v[0] = 0, b.addBy(c), this._v.copy(b), this._b[1] && (b.crossOf(this._b[1].angularVelocity,
        this._rc[1]), b.addBy(this._b[1].linearVelocity), b.transform3Inverse(this._matrix), c.copy(this._b[1]._oldLinear), c.scaleBy(h), c.transform3Inverse(this._matrix), c.v[0] = 0, b.addBy(c), this._v.subBy(b)), this._solveDelta(h), this._rt[0].crossOf(this._rc[0], this._n), this._rt[0].transform3(this._b[0].itensor), this._b[1] && (this._rt[1].crossOf(this._rc[1], this._n), this._rt[1].transform3(this._b[1].itensor))
};
Ovoid.Contact.prototype._adjustPositions = function (b) {
    if (!(0 > this._r)) {
        for (var c = new Ovoid.Vector, e = new Ovoid.Vector, g = 0, f = [0, 0], h = [0, 0], l = 0; 2 > l; l++)
            if (this._b[l]) c.crossOf(this._rt[l], this._rc[l]), h[l] = c.dot(this._n), f[l] = this._b[l].imass, g += h[l] + f[l];
        var m = [0, 0],
            o = [0, 0];
        m[0] = b * h[0] / g;
        o[0] = b * f[0] / g;
        this._b[1] && (m[1] = -1 * (b * h[1] / g), o[1] = -1 * (b * f[1] / g));
        for (l = 0; 2 > l; l++) this._b[l] && (0 != m[l] ? (this._ar[l].copy(this._rt[l]), this._as[l] = m[l] / h[l]) : (this._ar[l].set(0, 0, 0), this._as[l] = 1), e.copy(this._n), e.scaleBy(o[l]),
            this._b[l].target[0].translation.addBy(e), c.copy(this._ar[l]), c.scaleBy(0.5 * this._as[l]), this._b[l].target[0].rotation.vectorRotateBy(c), this._b[l].target[0].rotation.normalize(), this._ap[l].copy(this._n), this._ap[l].scaleBy(o[l] / this._as[l]))
    }
};
Ovoid.Contact.prototype._applyImpulses = function () {
    if (!(0 > this._r)) {
        var b = new Ovoid.Vector;
        if (this._f) {
            var c = new Ovoid.Matrix3,
                e = new Float32Array(9),
                g = new Float32Array(9);
            e[0] = -this._rc[0].v[2] * this._b[0].itensor.m[3] + this._rc[0].v[1] * this._b[0].itensor.m[6];
            e[1] = -this._rc[0].v[2] * this._b[0].itensor.m[4] + this._rc[0].v[1] * this._b[0].itensor.m[7];
            e[2] = -this._rc[0].v[2] * this._b[0].itensor.m[5] + this._rc[0].v[1] * this._b[0].itensor.m[8];
            e[3] = this._rc[0].v[2] * this._b[0].itensor.m[0] + -this._rc[0].v[0] * this._b[0].itensor.m[6];
            e[4] = this._rc[0].v[2] * this._b[0].itensor.m[1] + -this._rc[0].v[0] * this._b[0].itensor.m[7];
            e[5] = this._rc[0].v[2] * this._b[0].itensor.m[2] + -this._rc[0].v[0] * this._b[0].itensor.m[8];
            e[6] = -this._rc[0].v[1] * this._b[0].itensor.m[0] + this._rc[0].v[0] * this._b[0].itensor.m[3];
            e[7] = -this._rc[0].v[1] * this._b[0].itensor.m[1] + this._rc[0].v[0] * this._b[0].itensor.m[4];
            e[8] = -this._rc[0].v[1] * this._b[0].itensor.m[2] + this._rc[0].v[0] * this._b[0].itensor.m[5];
            g[0] = -1 * (e[1] * this._rc[0].v[2] + e[2] * -this._rc[0].v[1]);
            g[1] = -1 *
                (e[0] * -this._rc[0].v[2] + e[2] * this._rc[0].v[0]);
            g[2] = -1 * (e[0] * this._rc[0].v[1] + e[1] * -this._rc[0].v[0]);
            g[3] = -1 * (e[4] * this._rc[0].v[2] + e[5] * -this._rc[0].v[1]);
            g[4] = -1 * (e[3] * -this._rc[0].v[2] + e[5] * this._rc[0].v[0]);
            g[5] = -1 * (e[3] * this._rc[0].v[1] + e[4] * -this._rc[0].v[0]);
            g[6] = -1 * (e[7] * this._rc[0].v[2] + e[8] * -this._rc[0].v[1]);
            g[7] = -1 * (e[6] * -this._rc[0].v[2] + e[8] * this._rc[0].v[0]);
            g[8] = -1 * (e[6] * this._rc[0].v[1] + e[7] * -this._rc[0].v[0]);
            var f = this._b[0].imass;
            this._b[1] && (e[0] = -this._rc[1].v[2] * this._b[1].itensor.m[3] +
                this._rc[1].v[1] * this._b[1].itensor.m[6], e[1] = -this._rc[1].v[2] * this._b[1].itensor.m[4] + this._rc[1].v[1] * this._b[1].itensor.m[7], e[2] = -this._rc[1].v[2] * this._b[1].itensor.m[5] + this._rc[1].v[1] * this._b[1].itensor.m[8], e[3] = this._rc[1].v[2] * this._b[1].itensor.m[0] + -this._rc[1].v[0] * this._b[1].itensor.m[6], e[4] = this._rc[1].v[2] * this._b[1].itensor.m[1] + -this._rc[1].v[0] * this._b[1].itensor.m[7], e[5] = this._rc[1].v[2] * this._b[1].itensor.m[2] + -this._rc[1].v[0] * this._b[1].itensor.m[8], e[6] = -this._rc[1].v[1] *
                this._b[1].itensor.m[0] + this._rc[1].v[0] * this._b[1].itensor.m[3], e[7] = -this._rc[1].v[1] * this._b[1].itensor.m[1] + this._rc[1].v[0] * this._b[1].itensor.m[4], e[8] = -this._rc[1].v[1] * this._b[1].itensor.m[2] + this._rc[1].v[0] * this._b[1].itensor.m[5], g[0] += -1 * (e[1] * this._rc[1].v[2] + e[2] * -this._rc[1].v[1]), g[1] += -1 * (e[0] * -this._rc[1].v[2] + e[2] * this._rc[1].v[0]), g[2] += -1 * (e[0] * this._rc[1].v[1] + e[1] * -this._rc[1].v[0]), g[3] += -1 * (e[4] * this._rc[1].v[2] + e[5] * -this._rc[1].v[1]), g[4] += -1 * (e[3] * -this._rc[1].v[2] + e[5] *
                    this._rc[1].v[0]), g[5] += -1 * (e[3] * this._rc[1].v[1] + e[4] * -this._rc[1].v[0]), g[6] += -1 * (e[7] * this._rc[1].v[2] + e[8] * -this._rc[1].v[1]), g[7] += -1 * (e[6] * -this._rc[1].v[2] + e[8] * this._rc[1].v[0]), g[8] += -1 * (e[6] * this._rc[1].v[1] + e[7] * -this._rc[1].v[0]), f += this._b[1].imass);
            e[0] = this._matrix.m[0] * g[0] + this._matrix.m[3] * g[3] + this._matrix.m[6] * g[6];
            e[1] = this._matrix.m[0] * g[1] + this._matrix.m[3] * g[4] + this._matrix.m[6] * g[7];
            e[2] = this._matrix.m[0] * g[2] + this._matrix.m[3] * g[5] + this._matrix.m[6] * g[8];
            e[3] = this._matrix.m[1] *
                g[0] + this._matrix.m[4] * g[3] + this._matrix.m[7] * g[6];
            e[4] = this._matrix.m[1] * g[1] + this._matrix.m[4] * g[4] + this._matrix.m[7] * g[7];
            e[5] = this._matrix.m[1] * g[2] + this._matrix.m[4] * g[5] + this._matrix.m[7] * g[8];
            e[6] = this._matrix.m[2] * g[0] + this._matrix.m[5] * g[3] + this._matrix.m[8] * g[6];
            e[7] = this._matrix.m[2] * g[1] + this._matrix.m[5] * g[4] + this._matrix.m[8] * g[7];
            e[8] = this._matrix.m[2] * g[2] + this._matrix.m[5] * g[5] + this._matrix.m[8] * g[8];
            c.m[0] = e[0] * this._matrix.m[0] + e[1] * this._matrix.m[3] + e[2] * this._matrix.m[6];
            c.m[1] =
                e[0] * this._matrix.m[1] + e[1] * this._matrix.m[4] + e[2] * this._matrix.m[7];
            c.m[2] = e[0] * this._matrix.m[2] + e[1] * this._matrix.m[5] + e[2] * this._matrix.m[8];
            c.m[3] = e[3] * this._matrix.m[0] + e[4] * this._matrix.m[3] + e[5] * this._matrix.m[6];
            c.m[4] = e[3] * this._matrix.m[1] + e[4] * this._matrix.m[4] + e[5] * this._matrix.m[7];
            c.m[5] = e[3] * this._matrix.m[2] + e[4] * this._matrix.m[5] + e[5] * this._matrix.m[8];
            c.m[6] = e[6] * this._matrix.m[0] + e[7] * this._matrix.m[3] + e[8] * this._matrix.m[6];
            c.m[7] = e[6] * this._matrix.m[1] + e[7] * this._matrix.m[4] +
                e[8] * this._matrix.m[7];
            c.m[8] = e[6] * this._matrix.m[2] + e[7] * this._matrix.m[5] + e[8] * this._matrix.m[8];
            c.m[0] += f;
            c.m[4] += f;
            c.m[8] += f;
            e = c.m[0];
            g = c.m[1];
            f = c.m[2];
            c.toInverse();
            b.set(this._d, -this._v.v[1], -this._v.v[2]);
            b.transform3(c);
            c = Math.sqrt(b.v[1] * b.v[1] + b.v[2] * b.v[2]);
            c > b.v[0] * this._f && (b.v[1] /= c, b.v[2] /= c, b.v[0] = e + g * this._f * b.v[1] + f * this._f * b.v[2], b.v[0] = this._d / b.v[0], b.v[1] *= this._f * b.v[0], b.v[2] *= this._f * b.v[0])
        } else {
            for (var e = new Ovoid.Vector, c = 0, g = 0; 2 > g; g++) this._b[g] && (e.crossOf(this._rt[g],
                this._rc[g]), c += e.dot(this._n), c += this._b[g].imass);
            b.v[0] = this._d / c;
            b.v[1] = 0;
            b.v[2] = 0
        }
        b.transform3(this._matrix);
        this._ti[0].crossOf(this._rc[0], b);
        this._ti[0].transform3(this._b[0].itensor);
        this._li[0].copy(b);
        this._li[0].scaleBy(this._b[0].imass);
        this._b[0].linearVelocity.addBy(this._li[0]);
        this._b[0].angularVelocity.addBy(this._ti[0]);
        this._b[0].unCach(Ovoid.CACH_INFLUENCES | Ovoid.CACH_PHYSICS);
        this._b[1] && (this._ti[1].crossOf(b, this._rc[1]), this._ti[1].transform3(this._b[1].itensor), this._li[1].copy(b),
            this._li[1].scaleBy(-this._b[1].imass), this._b[1].linearVelocity.addBy(this._li[1]), this._b[1].angularVelocity.addBy(this._ti[1]), this._b[1].unCach(Ovoid.CACH_INFLUENCES | Ovoid.CACH_PHYSICS))
    }
};
Ovoid.Solver = {};
Ovoid.Solver.opt_iterativeSolver = !0;
Ovoid.Solver.opt_contactItFactor = 4;
Ovoid.Solver._contactq = new Ovoid.Stack(Ovoid.MAX_CONTACT_BY_CYCLE);
Ovoid.Solver._tmpVect = Ovoid.Vector.newArray(22);
Ovoid.Solver._tmpPoint = Ovoid.Point.newArray(11);
Ovoid.Solver._tmpc = new Ovoid.Point;
Ovoid.Solver._tmpn = new Ovoid.Vector;
Ovoid.Solver.init = function () {
    Ovoid.log(3, "Ovoid.Solver", "initialization");
    for (var b = Ovoid.Solver._contactq.length; b--;) Ovoid.Solver._contactq[b] = new Ovoid.Contact;
    return !0
};
Ovoid.Solver._hasContact = function (b, c) {
    for (var e = Ovoid.Solver._contactq.count; e--;)
        if (Ovoid.Solver._contactq[e]._b[0] == c && Ovoid.Solver._contactq[e]._b[1] == b || Ovoid.Solver._contactq[e]._b[0] == b && Ovoid.Solver._contactq[e]._b[1] == c) return !0;
    return !1
};
Ovoid.Solver._canContact = function (b, c, e) {
    return b.target[0].boundingSphere.worldCenter.dist(c.target[0].boundingSphere.worldCenter) <= b.target[0].boundingSphere.radius + c.target[0].boundingSphere.radius + e
};
Ovoid.Solver._addContact = function (b, c, e, g, f) {
    if (Ovoid.Solver._contactq.isFull()) Ovoid.log(2, "Ovoid.Solver", "Contact stack overflow.");
    else if (Ovoid.Solver._contactq.current().set(b, c, e, g, f, Ovoid.Timer.quantum), Ovoid.Solver._contactq.forward(), b.oncontact(c, e, g), c) c.oncontact(b, e, g)
};
Ovoid.Solver._getContactB2L = function (b, c) {
    var e = null;
    if (c.target[0].shape && c.target[0].shape.type & Ovoid.MESH) e = c.target[0].shape;
    if (e) {
        var g = b.target[0].boundingBox,
            f = c.target[0].worldMatrix,
            h = b.target[0].worldMatrix,
            l = Ovoid.Solver._tmpPoint[8];
        l.transform4InverseOf(g.worldCenter, f);
        var m = g.max.dist(g.min),
            o = Array(8);
        o[0] = Ovoid.Solver._tmpPoint[0];
        o[0].set(g.min.v[0], g.min.v[1], g.min.v[2], 1);
        o[1] = Ovoid.Solver._tmpPoint[1];
        o[1].set(g.min.v[0], g.min.v[1], g.max.v[2], 1);
        o[2] = Ovoid.Solver._tmpPoint[2];
        o[2].set(g.max.v[0], g.min.v[1], g.min.v[2], 1);
        o[3] = Ovoid.Solver._tmpPoint[3];
        o[3].set(g.max.v[0], g.min.v[1], g.max.v[2], 1);
        o[4] = Ovoid.Solver._tmpPoint[4];
        o[4].set(g.min.v[0], g.max.v[1], g.min.v[2], 1);
        o[5] = Ovoid.Solver._tmpPoint[5];
        o[5].set(g.min.v[0], g.max.v[1], g.max.v[2], 1);
        o[6] = Ovoid.Solver._tmpPoint[6];
        o[6].set(g.max.v[0], g.max.v[1], g.min.v[2], 1);
        o[7] = Ovoid.Solver._tmpPoint[7];
        o[7].set(g.max.v[0], g.max.v[1], g.max.v[2], 1);
        for (g = 8; g--;) o[g].transform4(h), o[g].transform4Inverse(f);
        var h = 0,
            q = Ovoid.Solver._tmpc;
        q.set(0, 0, 0, 1);
        var w = Ovoid.Solver._tmpn;
        w.set(0, 0, 0);
        for (var v = 0, x = new Ovoid.Vector, r = new Ovoid.Point, z, y, C, p, D = Ovoid.Solver._tmpVect[1], B = Ovoid.Solver._tmpVect[2], u = Ovoid.Solver._tmpVect[3], t, A, s, F, E = e.triangles[0].length; E--;)
            if (p = e.triangles[0][E].normal, F = l.dot(p) + e.triangles[0][E].equation, !(0 > F) && !(F > m)) {
                for (g = 8; g-- && !(F = o[g].dot(p) + e.triangles[0][E].equation, 0 >= F && (z = e.vertices[0][e.triangles[0][E].index[0]].p, y = e.vertices[0][e.triangles[0][E].index[1]].p, C = e.vertices[0][e.triangles[0][E].index[2]].p,
                    D.subOf(C, z), B.subOf(y, z), u.subOf(l, z), z = D.dot(D), y = D.dot(B), t = B.dot(B), C = D.dot(u), A = B.dot(u), s = 1 / (z * t - y * y), t = (t * C - y * A) * s, z = (z * A - y * C) * s, 0 <= t && 0 <= z && 1 > t + z && (x.transform4Of(p, f), r.transform4Of(o[g], f), v += -F, w.addBy(x), q.addBy(r), h++, 4 == h))););
                if (h) {
                    1 < h && (w.normalize(), v /= h, q.v[0] /= h, q.v[1] /= h, q.v[2] /= h, q.v[3] = 1);
                    Ovoid.Solver._addContact(b, null, q, w, 1.5 * v);
                    break
                }
            }
    }
};
Ovoid.Solver._getContactS2L = function (b, c) {
    var e = null;
    if (c.target[0].shape && c.target[0].shape.type & Ovoid.MESH) e = c.target[0].shape;
    if (e) {
        var g = b.target[0].boundingSphere,
            f = c.target[0].worldMatrix,
            h = Ovoid.Solver._tmpPoint[0];
        h.transform4InverseOf(g.worldCenter, f);
        for (var l, m, o, q, w = Ovoid.Solver._tmpVect[1], v = Ovoid.Solver._tmpVect[2], x = Ovoid.Solver._tmpVect[3], r, z, y, C, p = e.triangles[0].length; p--;)
            if (q = e.triangles[0][p].normal, C = h.dot(q) + e.triangles[0][p].equation, !(0 > C) && C < g.radius && (l = e.vertices[0][e.triangles[0][p].index[0]].p,
                m = e.vertices[0][e.triangles[0][p].index[1]].p, o = e.vertices[0][e.triangles[0][p].index[2]].p, w.subOf(o, l), v.subOf(m, l), x.subOf(h, l), l = w.dot(w), m = w.dot(v), o = w.dot(x), r = v.dot(v), z = v.dot(x), y = 1 / (l * r - m * m), r = (r * o - m * z) * y, l = (l * z - m * o) * y, 0 <= r && 0 <= l && 1 > r + l)) {
                e = 0;
                w = Ovoid.Solver._tmpc;
                v = Ovoid.Solver._tmpn;
                e = g.radius - C;
                v.transform4Of(q, f);
                g = Ovoid.Solver._tmpVect[0];
                g.copy(v);
                g.scaleBy(-C);
                w.addOf(h, g);
                w.v[3] = 1;
                w.transform4(f);
                Ovoid.Solver._addContact(b, null, w, v, e);
                break
            }
    }
};
Ovoid.Solver._getContactS2S = function (b, c) {
    var e = b.target[0].boundingSphere,
        g = c.target[0].boundingSphere,
        f = Ovoid.Solver._tmpVect[16];
    f.subOf(e.worldCenter, g.worldCenter);
    var h = f.size(),
        g = e.radius + g.radius;
    if (!(h > g)) {
        var l = 0,
            m = Ovoid.Solver._tmpc,
            o = Ovoid.Solver._tmpn,
            l = g - h;
        f.normalize();
        o.copy(f);
        f.scaleBy(e.radius);
        m.addOf(e.worldCenter, f);
        Ovoid.Solver._addContact(b, c, m, o, l)
    }
};
Ovoid.Solver._getContactB2S = function (b, c) {
    var e = b.target[0].boundingBox,
        g = c.target[0].boundingSphere,
        f = b.target[0].worldMatrix,
        h = Ovoid.Solver._tmpPoint[0];
    h.transform4InverseOf(g.worldCenter, f);
    var l = 0,
        l = Ovoid.Solver._tmpc,
        m = Ovoid.Solver._tmpn;
    l.copy(h);
    h.v[0] > e.hsize.v[0] && (l.v[0] = e.hsize.v[0]);
    h.v[0] < -e.hsize.v[0] && (l.v[0] = -e.hsize.v[0]);
    h.v[1] > e.hsize.v[1] && (l.v[1] = e.hsize.v[1]);
    h.v[1] < -e.hsize.v[1] && (l.v[1] = -e.hsize.v[1]);
    h.v[2] > e.hsize.v[2] && (l.v[2] = e.hsize.v[2]);
    h.v[2] < -e.hsize.v[2] && (l.v[2] = -e.hsize.v[2]);
    l.addBy(e.center);
    l.v[3] = 1;
    e = g.radius;
    h = l.dist(h);
    h > e || (l.transform4(f), m.subOf(l, g.worldCenter), m.normalize(), Ovoid.Solver._addContact(b, c, l, m, e - h))
};
Ovoid.Solver._getContactB2B = function (b, c) {
    var e = b.target[0].boundingBox,
        g = c.target[0].boundingBox,
        f = b.target[0].worldMatrix,
        h = c.target[0].worldMatrix,
        l = Ovoid.Solver._tmpVect[16];
    l.subOf(g.worldCenter, e.worldCenter);
    var m = Ovoid.Solver._tmpVect;
    m[0].set(f.m[0], f.m[1], f.m[2]);
    m[1].set(f.m[4], f.m[5], f.m[6]);
    m[2].set(f.m[8], f.m[9], f.m[10]);
    m[3].set(h.m[0], h.m[1], h.m[2]);
    m[4].set(h.m[4], h.m[5], h.m[6]);
    m[5].set(h.m[8], h.m[9], h.m[10]);
    m[6].crossOf(m[0], m[3]);
    m[7].crossOf(m[0], m[4]);
    m[8].crossOf(m[0], m[5]);
    m[9].crossOf(m[1], m[3]);
    m[10].crossOf(m[1], m[4]);
    m[11].crossOf(m[1], m[5]);
    m[12].crossOf(m[2], m[3]);
    m[13].crossOf(m[2], m[4]);
    m[14].crossOf(m[2], m[5]);
    for (var o, q, w, v = Ovoid.FLOAT_MAX, x = -1, r = -1, z = 0; 15 > z; z++) {
        o = e.hsize.v[0] * Math.abs(m[z].dot(m[0])) + e.hsize.v[1] * Math.abs(m[z].dot(m[1])) + e.hsize.v[2] * Math.abs(m[z].dot(m[2]));
        q = g.hsize.v[0] * Math.abs(m[z].dot(m[3])) + g.hsize.v[1] * Math.abs(m[z].dot(m[4])) + g.hsize.v[2] * Math.abs(m[z].dot(m[5]));
        w = Math.abs(l.dot(m[z]));
        o = o + q - w;
        if (0 > o) return;
        o < v && (v = o, x = z, 6 > z &&
            (r = x))
    }
    if (-1 != x) {
        z = 0;
        o = Ovoid.Solver._tmpc;
        q = Ovoid.Solver._tmpn;
        z = v;
        if (5 < x) {
            w = Math.floor((x - 6) / 3);
            v = (x - 6) % 3;
            0 == m[x].v[0] + m[x].v[1] + m[x].v[2] ? q.copy(m[r]) : q.copy(m[x]);
            q.normalize();
            0 < q.dot(l) && q.scaleBy(-1);
            l = Ovoid.Solver._tmpVect[17];
            l.copy(e.hsize);
            x = Ovoid.Solver._tmpVect[18];
            x.copy(g.hsize);
            l.v[w] = 0;
            0 < m[0].dot(q) && (l.v[0] *= -1);
            0 < m[1].dot(q) && (l.v[1] *= -1);
            0 < m[2].dot(q) && (l.v[2] *= -1);
            l.addBy(e.center);
            x.v[v] = 0;
            0 > m[3].dot(q) && (x.v[0] *= -1);
            0 > m[4].dot(q) && (x.v[1] *= -1);
            0 > m[5].dot(q) && (x.v[2] *= -1);
            x.addBy(g.center);
            var y, C;
            y = l.v[0] * f.m[0] + l.v[1] * f.m[4] + l.v[2] * f.m[8] + f.m[12];
            C = l.v[0] * f.m[1] + l.v[1] * f.m[5] + l.v[2] * f.m[9] + f.m[13];
            f = l.v[0] * f.m[2] + l.v[1] * f.m[6] + l.v[2] * f.m[10] + f.m[14];
            l.set(y, C, f);
            y = x.v[0] * h.m[0] + x.v[1] * h.m[4] + x.v[2] * h.m[8] + h.m[12];
            C = x.v[0] * h.m[1] + x.v[1] * h.m[5] + x.v[2] * h.m[9] + h.m[13];
            f = x.v[0] * h.m[2] + x.v[1] * h.m[6] + x.v[2] * h.m[10] + h.m[14];
            x.set(y, C, f);
            h = m[w];
            m = m[v + 3];
            e = e.hsize.v[w];
            g = g.hsize.v[v];
            C = Ovoid.Solver._tmpVect[19];
            C.subOf(l, x);
            v = h.size2();
            f = m.size2();
            w = m.dot(h);
            y = h.dot(C);
            C = m.dot(C);
            var p = v * f -
                w * w;
            if (0.001 > Math.abs(p)) return 2 < r ? o.copy(l) : o.copy(x), Ovoid.Solver._addContact(b, c, o, q, z), !0;
            f = (w * C - f * y) / p;
            v = (v * C - w * y) / p;
            f > e || f < -e || v > g || v < -g ? 2 < r ? o.copy(l) : o.copy(x) : (r = Ovoid.Solver._tmpVect[20], g = Ovoid.Solver._tmpVect[21], h.scaleBy(f), m.scaleBy(v), r.addOf(l, h), r.scaleBy(0.5), g.addOf(x, m), g.scaleBy(0.5), o.addOf(r, g))
        } else q.copy(m[x]), q.normalize(), 2 < x ? (0 < q.dot(l) && q.scaleBy(-1), o.copy(e.hsize), 0 > m[0].dot(q) && (o.v[0] *= -1), 0 > m[1].dot(q) && (o.v[1] *= -1), 0 > m[2].dot(q) && (o.v[2] *= -1), o.addBy(e.center),
            o.v[3] = 1, o.transform4(f)) : (l.scaleBy(-1), 0 < q.dot(l) && q.scaleBy(-1), o.copy(g.hsize), 0 > m[3].dot(q) && (o.v[0] *= -1), 0 > m[4].dot(q) && (o.v[1] *= -1), 0 > m[5].dot(q) && (o.v[2] *= -1), o.addBy(g.center), o.v[3] = 1, o.transform4(h));
        Ovoid.Solver._addContact(b, c, o, q, z)
    }
};
Ovoid.Solver._detectContacts = function () {
    Ovoid.Solver._contactq.empty();
    var b, c, e, g;
    for (e = Ovoid.Queuer.qphycs.count; e--;)
        for (g = Ovoid.Queuer.qphycs.count; g--;)
            if (g != e && !Ovoid.Solver._contactq.isFull() && (b = Ovoid.Queuer.qphycs[e], c = Ovoid.Queuer.qphycs[g], Ovoid.Solver._canContact(b, c, 0) && !Ovoid.Solver._hasContact(b, c))) switch (b.model) {
            case 2:
                switch (c.model) {
                case 2:
                    Ovoid.Solver._getContactS2S(b, c);
                    break;
                case 0:
                    b.cach & Ovoid.CACH_PHYSICS || Ovoid.Solver._getContactS2L(b, c);
                    break;
                default:
                    Ovoid.Solver._getContactB2S(c,
                        b)
                }
                break;
            case 0:
                continue;
            default:
                switch (c.model) {
                case 2:
                    Ovoid.Solver._getContactB2S(b, c);
                    break;
                case 0:
                    b.cach & Ovoid.CACH_PHYSICS || Ovoid.Solver._getContactB2L(b, c);
                    break;
                default:
                    Ovoid.Solver._getContactB2B(b, c)
                }
            }
};
Ovoid.Solver._solveContactsHr = function () {
    for (var b = Ovoid.Solver._contactq.count * Ovoid.Solver.opt_contactItFactor, c, e, g, f = new Ovoid.Vector, h = 0; h < b;) {
        c = 0;
        for (e = g = Ovoid.Solver._contactq.count; e--;)
            if (Ovoid.Solver._contactq[e]._p > c) c = Ovoid.Solver._contactq[e]._p, g = e;
        if (g == Ovoid.Solver._contactq.count) break;
        g = Ovoid.Solver._contactq[g];
        g._adjustPositions(c);
        for (e = Ovoid.Solver._contactq.count; e--;) c = Ovoid.Solver._contactq[e], c._b[0] === g._b[0] ? (f.crossOf(c._ar[0], c._rc[0]), f.addBy(c._ap[0]), c._p -= c._as[0] *
            f.dot(c._n)) : c._b[0] === g._b[1] && (f.crossOf(c._ar[1], c._rc[0]), f.addBy(c._ap[1]), c._p -= c._as[1] * f.dot(c._n)), c._b[1] && (c._b[1] === g._b[0] ? (f.crossOf(c._ar[0], c._rc[1]), f.addBy(c._ap[0]), c._p += c._as[0] * f.dot(c._n)) : c._b[1] === g._b[1] && (f.crossOf(c._ar[1], c._rc[1]), f.addBy(c._ap[1]), c._p += c._as[1] * f.dot(c._n)));
        h++
    }
    for (h = 0; h < b;) {
        d = 0;
        for (e = g = Ovoid.Solver._contactq.count; e--;)
            if (Ovoid.Solver._contactq[e]._d > d) d = Ovoid.Solver._contactq[e]._d, g = e;
        if (g == Ovoid.Solver._contactq.count) break;
        g = Ovoid.Solver._contactq[g];
        g._applyImpulses();
        for (e = Ovoid.Solver._contactq.count; e--;) c = Ovoid.Solver._contactq[e], c._b[0] && (c._b[0] === g._b[0] ? (f.crossOf(c._ti[0], c._rc[0]), f.addBy(c._li[0]), f.transform3Inverse(c._matrix), c._v.addBy(f), c._solveDelta(Ovoid.Timer.quantum)) : c._b[0] === g._b[1] && (f.crossOf(c._ti[1], c._rc[0]), f.addBy(c._li[1]), f.transform3Inverse(c._matrix), c._v.addBy(f), c._solveDelta(Ovoid.Timer.quantum))), c._b[1] && (c._b[1] == g._b[0] ? (f.crossOf(c._ti[0], c._rc[1]), f.addBy(c._li[0]), f.transform3Inverse(c._matrix), c._v.subBy(f),
            c._solveDelta(Ovoid.Timer.quantum)) : c._b[1] == g._b[1] && (f.crossOf(c._ti[1], c._rc[1]), f.addBy(c._li[1]), f.transform3Inverse(c._matrix), c._v.subBy(f), c._solveDelta(Ovoid.Timer.quantum)));
        h++
    }
};
Ovoid.Solver._solveContactsLr = function () {
    for (var b = Ovoid.Solver._contactq.count; b--;) Ovoid.Solver._contactq[b]._adjustPositions(Ovoid.Solver._contactq[b]._p), Ovoid.Solver._contactq[b]._applyImpulses()
};
Ovoid.Solver.solveQueue = function () {
    Ovoid.Solver._detectContacts();
    Ovoid.Solver.opt_iterativeSolver ? Ovoid.Solver._solveContactsHr() : Ovoid.Solver._solveContactsLr()
};
Ovoid.Frame = {};
Ovoid.Frame.opt_frameMode = 0;
Ovoid.Frame.canvas = null;
Ovoid.Frame.page = null;
Ovoid.Frame.fixed = new Ovoid.Coord(0, 0, 0);
Ovoid.Frame.position = new Ovoid.Coord(0, 0, 0);
Ovoid.Frame.size = new Ovoid.Coord(0, 0, 0);
Ovoid.Frame.scroll = new Ovoid.Coord(0, 0, 0);
Ovoid.Frame.matrix = new Ovoid.Matrix4;
Ovoid.Frame.changed = !1;
Ovoid.Frame.mode = 0;
Ovoid.Frame._handleResize = function () {
    if (1 == Ovoid.Frame.mode) Ovoid.Frame.canvas.width = Ovoid.Frame.page.clientWidth, Ovoid.Frame.canvas.height = Ovoid.Frame.page.clientHeight, Ovoid.Frame.size.set(Ovoid.Frame.page.clientWidth, Ovoid.Frame.page.clientHeight, 0), Ovoid.Frame.matrix.m[0] = 2 / Ovoid.Frame.size.v[0], Ovoid.Frame.matrix.m[5] = 2 / -Ovoid.Frame.size.v[1], Ovoid.Frame.matrix.m[10] = 1, Ovoid.Frame.matrix.m[3] = 0, Ovoid.Frame.matrix.m[7] = 0, Ovoid.Frame.matrix.m[11] = 0, Ovoid.Frame.matrix.m[12] = -1, Ovoid.Frame.matrix.m[13] =
        1, Ovoid.Frame.matrix.m[14] = 0, Ovoid.Frame.matrix.m[15] = 1, Ovoid.Frame.changed = !0
};
Ovoid.Frame._handleScroll = function () {
    var b = Ovoid.Frame.canvas;
    for (Ovoid.Frame.position.set(0, 0, 0);
        "BODY" != b.tagName;) Ovoid.Frame.position.v[1] += b.offsetTop, Ovoid.Frame.position.v[0] += b.offsetLeft, b = b.offsetParent;
    Ovoid.Frame.scroll.set(window.pageXOffset, window.pageYOffset, 0);
    Ovoid.Frame.changed = !0
};
Ovoid.Frame.init = function (b) {
    Ovoid.log(3, "Ovoid.Frame", "initialization");
    Ovoid.Frame.canvas = document.getElementById(b);
    if (null == Ovoid.Frame.canvas) return Ovoid.log(1, "Ovoid.Frame", "Undable to found canvas '" + b + "' in document."), !1;
    Ovoid.Frame.page = document.getElementsByTagName("BODY")[0];
    Ovoid.Frame.mode = Ovoid.Frame.opt_frameMode;
    window.onresize = Ovoid.Frame._handleResize;
    window.onscroll = Ovoid.Frame._handleScroll;
    Ovoid.Frame.fixed.set(Ovoid.Frame.canvas.width, Ovoid.Frame.canvas.height, 0);
    if (0 == Ovoid.Frame.mode) Ovoid.Frame.size.set(Ovoid.Frame.canvas.width,
        Ovoid.Frame.canvas.height, 0);
    else if (1 == Ovoid.Frame.mode) Ovoid.Frame.canvas.width = Ovoid.Frame.page.clientWidth, Ovoid.Frame.canvas.height = Ovoid.Frame.page.clientHeight, Ovoid.Frame.size.set(Ovoid.Frame.page.clientWidth, Ovoid.Frame.page.clientHeight, 0);
    Ovoid.Frame.matrix.m[0] = 2 / Ovoid.Frame.size.v[0];
    Ovoid.Frame.matrix.m[5] = 2 / -Ovoid.Frame.size.v[1];
    Ovoid.Frame.matrix.m[10] = 1;
    Ovoid.Frame.matrix.m[3] = 0;
    Ovoid.Frame.matrix.m[7] = 0;
    Ovoid.Frame.matrix.m[11] = 0;
    Ovoid.Frame.matrix.m[12] = -1;
    Ovoid.Frame.matrix.m[13] =
        1;
    Ovoid.Frame.matrix.m[14] = 0;
    Ovoid.Frame.matrix.m[15] = 1;
    return Ovoid.Frame.changed = !0
};
Ovoid.Frame.update = function () {
    Ovoid.Frame.changed = !1
};
Ovoid.Frame.setMode = function (b) {
    Ovoid.Frame.mode = b;
    if (0 == Ovoid.Frame.mode) Ovoid.Frame.resize(Ovoid.Frame.fixed.v[0], Ovoid.Frame.fixed.v[1]);
    else if (1 == Ovoid.Frame.mode) Ovoid.Frame.canvas.width = Ovoid.Frame.page.clientWidth, Ovoid.Frame.canvas.height = Ovoid.Frame.page.clientHeight, Ovoid.Frame.size.set(Ovoid.Frame.page.clientWidth, Ovoid.Frame.page.clientHeight, 0), Ovoid.Frame.canvas.width = Ovoid.Frame.page.clientWidth, Ovoid.Frame.canvas.height = Ovoid.Frame.page.clientHeight;
    Ovoid.Frame.matrix.m[0] = 2 / Ovoid.Frame.size.v[0];
    Ovoid.Frame.matrix.m[5] = 2 / -Ovoid.Frame.size.v[1];
    Ovoid.Frame.matrix.m[10] = 1;
    Ovoid.Frame.matrix.m[3] = 0;
    Ovoid.Frame.matrix.m[7] = 0;
    Ovoid.Frame.matrix.m[11] = 0;
    Ovoid.Frame.matrix.m[12] = -1;
    Ovoid.Frame.matrix.m[13] = 1;
    Ovoid.Frame.matrix.m[14] = 0;
    Ovoid.Frame.matrix.m[15] = 1;
    Ovoid.Frame.changed = !0
};
Ovoid.Frame.resize = function (b, c) {
    Ovoid.Frame.canvas.width = b;
    Ovoid.Frame.canvas.height = c;
    Ovoid.Frame.size.set(b, c, 0);
    Ovoid.Frame.changed = !0
};
Ovoid.Queuer = {};
Ovoid.Queuer.opt_viewcull = !0;
Ovoid.Queuer.opt_lightcull = !0;
Ovoid.Queuer.opt_intersect = !0;
Ovoid.Queuer.opt_defaultCameraPos = [0, 0, 10];
Ovoid.Queuer.opt_defaultCameraRot = [0, 0, 0];
Ovoid.Queuer._wgit = new Ovoid.WgIterator;
Ovoid.Queuer.qsolid = Array(Ovoid.MAX_RENDER_LAYER);
Ovoid.Queuer.qalpha = Array(Ovoid.MAX_RENDER_LAYER);
Ovoid.Queuer.qtform = new Ovoid.Stack(Ovoid.MAX_BODY_BY_DRAW);
Ovoid.Queuer.qlight = new Ovoid.Stack(Ovoid.MAX_LIGHT_BY_DRAW);
Ovoid.Queuer.qlayer = new Ovoid.Stack(Ovoid.MAX_LAYER_BY_DRAW);
Ovoid.Queuer.qtext = new Ovoid.Stack(Ovoid.MAX_LAYER_BY_DRAW);
Ovoid.Queuer.qphycs = new Ovoid.Stack(Ovoid.MAX_BODY_BY_DRAW);
Ovoid.Queuer._rcamera = null;
Ovoid.Queuer._dcamera = new Ovoid.Camera("defaultCamera");
Ovoid.Queuer.init = function () {
    Ovoid.log(3, "Ovoid.Queuer", "initialization");
    for (var b = 0; b < Ovoid.MAX_RENDER_LAYER; b++) Ovoid.Queuer.qsolid[b] = new Ovoid.Stack(Ovoid.MAX_BODY_BY_DRAW), Ovoid.Queuer.qalpha[b] = new Ovoid.Stack(Ovoid.MAX_BODY_BY_DRAW);
    Ovoid.Queuer._dcamera.moveXyz(Ovoid.Queuer.opt_defaultCameraPos[0], Ovoid.Queuer.opt_defaultCameraPos[1], Ovoid.Queuer.opt_defaultCameraPos[2], Ovoid.WORLD, Ovoid.ABSOLUTE);
    Ovoid.Queuer._dcamera.rotateXyz(Ovoid.Queuer.opt_defaultCameraRot[0], Ovoid.Queuer.opt_defaultCameraRot[1],
        Ovoid.Queuer.opt_defaultCameraRot[2], Ovoid.WORLD, Ovoid.RELATIVE);
    Ovoid.Queuer._dcamera.setView(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]);
    Ovoid.Queuer._dcamera.cachTransform();
    Ovoid.Queuer._dcamera.cachCamera();
    Ovoid.Queuer._rcamera = Ovoid.Queuer._dcamera;
    return !0
};
Ovoid.Queuer._cachDependencies = function (b) {
    for (var c = b.depend.length; c--;) b.depend[c].type & Ovoid.ACTION && b.depend[c].cachAction(), b.depend[c].type & Ovoid.PHYSICS && b.depend[c].cachPhysics(), b.depend[c].type & Ovoid.ANIMATION && b.depend[c].cachAnimation(), b.depend[c].type & Ovoid.AIM && b.depend[c].cachAim(), b.depend[c].type & Ovoid.EXPRESSION && b.depend[c].cachExpression(), b.depend[c].type & Ovoid.MESH && b.depend[c].cachMesh(), b.depend[c].type & Ovoid.SKIN && b.depend[c].cachSkin(), b.depend[c].type & Ovoid.EMITTER && b.depend[c].cachEmitter(),
    b.depend[c].addCach(Ovoid.CACH_WORLD)
};
Ovoid.Queuer._lightcull = function (b, c) {
    if (Ovoid.Queuer.opt_lightcull)
        for (i = c.length; i--;)
            if (c[i].isLightening(b) && !Ovoid.Queuer.qlight.has(c[i])) c[i].rendered = !0, Ovoid.Queuer.qlight.add(c[i])
};
Ovoid.Queuer._viewcull = function (b) {
    if (Ovoid.Queuer.opt_viewcull) {
        if (Ovoid.Queuer._rcamera.isWatching(b)) return b.rendered = !0, b.distFromEye = b.shape.type & Ovoid.EMITTER ? Ovoid.FLOAT_MIN : b.worldPosition.dist(Ovoid.Queuer._rcamera.worldPosition) - b.boundingSphere.radius, b.renderAlpha ? Ovoid.Queuer.qalpha[b.renderLayer].add(b) : Ovoid.Queuer.qsolid[b.renderLayer].add(b), !0
    } else return b.rendered = !0, b.distFromEye = b.shape.type & Ovoid.EMITTER ? Ovoid.FLOAT_MIN : b.worldPosition.dist(Ovoid.Queuer._rcamera.worldPosition) -
        b.boundingSphere.radius, b.renderAlpha ? Ovoid.Queuer.qalpha[b.renderLayer].add(b) : Ovoid.Queuer.qsolid[b.renderLayer].add(b), !0;
    return !1
};
Ovoid.Queuer._physicscull = function (b) {
    b.visible && 3 > b.model && Ovoid.Queuer.qphycs.add(b)
};
Ovoid.Queuer._bodyZSortFunc = function (b, c) {
    return b.distFromEye - c.distFromEye
};
Ovoid.Queuer.reset = function () {
    for (var b = 0; b < Ovoid.MAX_RENDER_LAYER; b++) Ovoid.Queuer.qsolid[b].empty(), Ovoid.Queuer.qalpha[b].empty();
    Ovoid.Queuer.qlayer.empty();
    Ovoid.Queuer.qtext.empty();
    Ovoid.Queuer.qlight.empty();
    Ovoid.Queuer.qtform.empty();
    Ovoid.Queuer.qphycs.empty()
};
Ovoid.Queuer.queueScene = function (b) {
    var c, e;
    b.activeCamera ? Ovoid.Queuer._rcamera = b.activeCamera : (Ovoid.Queuer._dcamera.cachTransform(), Ovoid.Queuer._dcamera.cachCamera(), Ovoid.Queuer._rcamera = Ovoid.Queuer._dcamera);
    Ovoid.Frame.changed && (Ovoid.Queuer._rcamera.setView(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]), Ovoid.Queuer._rcamera.cachCamera());
    Ovoid.Queuer._cachDependencies(Ovoid.Queuer._rcamera);
    if (3 == Ovoid.al.type) e = Ovoid.Queuer._rcamera.worldMatrix, Ovoid.al.listener.setPosition(e.m[12], e.m[13],
        e.m[14]), Ovoid.al.listener.setOrientation(-e.m[8], -e.m[9], -e.m[10], e.m[4], e.m[5], e.m[6]);
    for (e = b.action.length; e--;) b.action[e].unCach(Ovoid.CACH_ACTION);
    for (e = b.expression.length; e--;) b.expression[e].unCach(Ovoid.CACH_EXPRESSION);
    for (e = b.material.length; e--;) Ovoid.Queuer._cachDependencies(b.material[e]);
    for (Ovoid.Queuer._wgit.init(b.world); Ovoid.Queuer._wgit.explore();) c = Ovoid.Queuer._wgit.current, Ovoid.Queuer._cachDependencies(c), c.rendered = !1, c.visible && c.type & Ovoid.TRANSFORM && (c.cachTransform(),
        Ovoid.Drawer.opt_drawHelpers && Ovoid.Queuer.qtform.add(c), c.type & Ovoid.BODY && c.shape && (c.cachBody(), Ovoid.Queuer._viewcull(c) && Ovoid.Queuer._lightcull(c, b.light)), c.type & Ovoid.JOINT ? c.skin && c.cachJoint() : c.type & Ovoid.SOUND ? c.audio && c.cachSound() : c.type & Ovoid.CAMERA ? (Ovoid.Frame.changed && c.setView(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]), c.cachCamera()) : c.type & Ovoid.LIGHT && c.cachLight());
    if (Ovoid.Queuer.opt_intersect) {
        var g, f, h = new Ovoid.Stack(Ovoid.MAX_BODY_INTERSECT);
        for (e = b.transform.length; e--;)
            if (g =
                b.transform[e], g.intersectable) {
                c = b.transform.length;
                for (h.empty(); c--;) f = b.transform[c], c != e && f.intersectable && g.boundingSphere.worldCenter.dist(f.boundingSphere.worldCenter) <= g.boundingSphere.radius + f.boundingSphere.radius && h.add(f);
                g.enter.empty();
                g.leave.empty();
                for (c = h.count; c--;) g.intersect.has(h[c]) || g.enter.add(h[c]);
                for (c = g.intersect.count; c--;) h.has(g.intersect[c]) || g.leave.add(g.intersect[c]);
                g.intersect.empty();
                for (c = h.count; c--;) g.intersect.add(h[c])
            }
    }
    for (e = b.physics.length; e--;) Ovoid.Queuer._physicscull(b.physics[e]);
    for (e = b.track.length; e--;) b.track[e].cachTrack();
    for (e = 0; e < Ovoid.MAX_RENDER_LAYER; e++) Ovoid.Queuer.qalpha[e].sort(Ovoid.Queuer._bodyZSortFunc);
    if (!Ovoid.Queuer.opt_lightcull)
        for (e = b.light.length; e--;)
            if (!Ovoid.Queuer.qlight.has(b.light[e])) b.light[e].rendered = !0, Ovoid.Queuer.qlight.add(b.light[e]);
    e = 0;
    for (Ovoid.Queuer._wgit.init(b.overlay); Ovoid.Queuer._wgit.explore();)
        if (c = Ovoid.Queuer._wgit.current, Ovoid.Queuer._cachDependencies(c), c.visible)
            if (c.cachTransform(), c.cachLayer(), c.type & Ovoid.TEXT) Ovoid.Queuer.qtext.add(c);
            else {
                if (0 == Ovoid.Drawer.opt_pickingMode && c.isPointOver(Ovoid.Input.mousePosition)) e = c.uid;
                Ovoid.Queuer.qlayer.add(c)
            }
    if (0 == Ovoid.Drawer.opt_pickingMode) e == Ovoid.Input.mouseOverUid ? Ovoid.Input.mouseEnterUid = Ovoid.Input.mouseLeaveUid = 0 : (Ovoid.Input.mouseLeaveUid = Ovoid.Input.mouseOverUid, Ovoid.Input.mouseEnterUid = Ovoid.Input.mouseOverUid = e)
};
Ovoid.Drawer = {};
Ovoid.Drawer.opt_clearColor = [1, 1, 1, 1];
Ovoid.Drawer.opt_ambientColor = [0.2, 0.2, 0.2, 1];
Ovoid.Drawer.opt_fogColor = [1, 1, 1, 1];
Ovoid.Drawer.opt_fogDensity = 0;
Ovoid.Drawer.opt_pickingMode = 0;
Ovoid.Drawer.opt_lopLevel = 2;
Ovoid.Drawer.opt_adaptativeLop = !0;
Ovoid.Drawer.opt_adaptiveLopThreshold = 45;
Ovoid.Drawer.opt_perLightPass = !0;
Ovoid.Drawer.opt_shadowCasting = !0;
Ovoid.Drawer.opt_shadowCastingExclusion = 2;
Ovoid.Drawer.opt_drawLayers = !0;
Ovoid.Drawer.opt_drawHelpers = !1;
Ovoid.Drawer.opt_drawAxis = !1;
Ovoid.Drawer.opt_drawBoundingBox = !1;
Ovoid.Drawer.opt_drawBoundingSphere = !1;
Ovoid.Drawer.opt_drawJointBones = !1;
Ovoid.Drawer.opt_drawLights = !1;
Ovoid.Drawer.opt_drawCameras = !1;
Ovoid.Drawer.opt_drawNormals = !1;
Ovoid.Drawer.opt_jointSize = 1;
Ovoid.Drawer.opt_normalScale = 0.7;
Ovoid.Drawer.glInfo = {};
Ovoid.Drawer._drawnpolyset = 0;
Ovoid.Drawer._drawndynamic = 0;
Ovoid.Drawer._drawnsprite = 0;
Ovoid.Drawer._drawnsymbolic = 0;
Ovoid.Drawer._drawnchar = 0;
Ovoid.Drawer._drawnparticle = 0;
Ovoid.Drawer._drawnshadow = 0;
Ovoid.Drawer._renderpasses = 0;
Ovoid.Drawer._tcolor = Ovoid.Color.newArray(12);
Ovoid.Drawer._tcolor[0].set(1, 1, 1, 1);
Ovoid.Drawer._tcolor[1].set(0, 0, 0, 1);
Ovoid.Drawer._tcolor[2].set(0.5, 0.5, 0.5, 1);
Ovoid.Drawer._tcolor[3].set(1, 0, 0, 1);
Ovoid.Drawer._tcolor[4].set(1, 0.5, 0, 1);
Ovoid.Drawer._tcolor[5].set(1, 1, 0, 1);
Ovoid.Drawer._tcolor[6].set(0.5, 1, 0.5, 1);
Ovoid.Drawer._tcolor[7].set(0, 1, 0, 1);
Ovoid.Drawer._tcolor[8].set(0.3, 0.6, 1, 1);
Ovoid.Drawer._tcolor[9].set(0, 0, 1, 1);
Ovoid.Drawer._tcolor[10].set(0.5, 0, 1, 1);
Ovoid.Drawer._tcolor[11].set(0.1, 0, 1, 1);
Ovoid.Drawer._mblank = null;
Ovoid.Drawer._tblank = null;
Ovoid.Drawer._tfontm = null;
Ovoid.Drawer._bprimitive = null;
Ovoid.Drawer._bdynamic = null;
Ovoid.Drawer._fbrpixel = null;
Ovoid.Drawer._splib = [];
Ovoid.Drawer._sppipe = Array(Ovoid.MAX_RENDER_LAYER);
Ovoid.Drawer.sp = null;
Ovoid.Drawer._swpipe = Array(2);
Ovoid.Drawer._swlayer = Array(2);
Ovoid.Drawer._swshader = Array(2);
Ovoid.Drawer._swblend = Array(2);
Ovoid.Drawer._swdepth = Array(2);
Ovoid.Drawer._abcolor = new Float32Array(4);
Ovoid.Drawer._fogcolor = new Float32Array(4);
Ovoid.Drawer._rpcolor = new Uint8Array(256);
Ovoid.Drawer._rpdepth = new Float32Array(1);
Ovoid.Drawer._lop = 2;
Ovoid.Drawer.init = function () {
    Ovoid.log(3, "Ovoid.Drawer", "initialization");
    Ovoid._clearGlerror();
    var b = (new Date).getTime();
    Ovoid.Drawer.glInfo.VENDOR = Ovoid.gl.getParameter(Ovoid.gl.VENDOR);
    Ovoid.log(3, "Ovoid.Drawer", "VENDOR : " + Ovoid.Drawer.glInfo.VENDOR);
    Ovoid.Drawer.glInfo.VERSION = Ovoid.gl.getParameter(Ovoid.gl.VERSION);
    Ovoid.log(3, "Ovoid.Drawer", "VERSION : " + Ovoid.Drawer.glInfo.VERSION);
    Ovoid.Drawer.glInfo.SHADING_LANGUAGE_VERSION = Ovoid.gl.getParameter(Ovoid.gl.SHADING_LANGUAGE_VERSION);
    Ovoid.log(3,
        "Ovoid.Drawer", "SHADING_LANGUAGE_VERSION : " + Ovoid.Drawer.glInfo.SHADING_LANGUAGE_VERSION);
    Ovoid.Drawer.glInfo.MAX_TEXTURE_IMAGE_UNITS = Ovoid.gl.getParameter(Ovoid.gl.MAX_TEXTURE_IMAGE_UNITS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_TEXTURE_IMAGE_UNITS : " + Ovoid.Drawer.glInfo.MAX_TEXTURE_IMAGE_UNITS);
    Ovoid.Drawer.glInfo.MAX_COMBINED_TEXTURE_IMAGE_UNITS = Ovoid.gl.getParameter(Ovoid.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_COMBINED_TEXTURE_IMAGE_UNITS : " + Ovoid.Drawer.glInfo.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    Ovoid.Drawer.glInfo.MAX_VARYING_VECTORS = Ovoid.gl.getParameter(Ovoid.gl.MAX_VARYING_VECTORS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_VARYING_VECTORS : " + Ovoid.Drawer.glInfo.MAX_VARYING_VECTORS);
    Ovoid.Drawer.glInfo.MAX_VERTEX_ATTRIBS = Ovoid.gl.getParameter(Ovoid.gl.MAX_VERTEX_ATTRIBS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_VERTEX_ATTRIBS : " + Ovoid.Drawer.glInfo.MAX_VERTEX_ATTRIBS);
    Ovoid.Drawer.glInfo.MAX_VERTEX_UNIFORM_VECTORS = Ovoid.gl.getParameter(Ovoid.gl.MAX_VERTEX_UNIFORM_VECTORS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_VERTEX_UNIFORM_VECTORS : " +
        Ovoid.Drawer.glInfo.MAX_VERTEX_UNIFORM_VECTORS);
    Ovoid.Drawer.glInfo.MAX_FRAGMENT_UNIFORM_VECTORS = Ovoid.gl.getParameter(Ovoid.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_FRAGMENT_UNIFORM_VECTORS : " + Ovoid.Drawer.glInfo.MAX_FRAGMENT_UNIFORM_VECTORS);
    Ovoid.Drawer.glInfo.MAX_VERTEX_TEXTURE_IMAGE_UNITS = Ovoid.gl.getParameter(Ovoid.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    Ovoid.log(3, "Ovoid.Drawer", "MAX_VERTEX_TEXTURE_IMAGE_UNITS : " + Ovoid.Drawer.glInfo.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    Ovoid.gl.pixelStorei(Ovoid.gl.UNPACK_FLIP_Y_WEBGL, !0);
    Ovoid.Drawer._tblank = new Ovoid.Texture("blank");
    for (var c = new Uint8Array(256), e = 0; 256 > e; e++) c[e] = 255;
    Ovoid.Drawer._tblank.create2d(Ovoid.gl.RGBA, 8, 8, c);
    Ovoid.Drawer._tblank.setFilter(!1);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Blank texture creation")) return !1;
    Ovoid.Drawer._tfontm = new Ovoid.Texture("fontm");
    Ovoid.Drawer._tfontm.loadSource(Ovoid.opt_defaultFontmapUrl, Ovoid.opt_defaultFontmapFilter, !0);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Font map creation")) return !1;
    Ovoid.Drawer._mblank =
        new Ovoid.Material;
    Ovoid.Drawer._bprimitive = Array(6);
    c = [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0];
    Ovoid.Drawer._bprimitive[0] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[0]);
    Ovoid.gl.bufferData(34962, new Float32Array(c), 35044);
    c = [-0.5, -0.5, 0, 0, 0, 1, 0, -0.5, 0.5, 0, 0, 0, 0, 0, 0.5, -0.5, 0, 0, 1, 1, 0, 0.5, 0.5, 0, 0, 1, 0, 0];
    Ovoid.Drawer._bprimitive[6] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[6]);
    Ovoid.gl.bufferData(34962,
        new Float32Array(c), 35044);
    c = [0.5, 0.5, 0.5, 1, 1, 1, 1, 1, -0.5, 0.5, 0.5, 1, 1, 1, 1, 1, -0.5, 0.5, 0.5, 1, 1, 1, 1, 1, -0.5, 0.5, -0.5, 1, 1, 1, 1, 1, 0.5, 0.5, -0.5, 1, 1, 1, 1, 1, -0.5, 0.5, -0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, -0.5, 1, 1, 1, 1, 1, 0.5, -0.5, 0.5, 1, 1, 1, 1, 1, -0.5, -0.5, 0.5, 1, 1, 1, 1, 1, -0.5, -0.5, 0.5, 1, 1, 1, 1, 1, -0.5, -0.5, -0.5, 1, 1, 1, 1, 1, 0.5, -0.5, -0.5, 1, 1, 1, 1, 1, -0.5, -0.5, -0.5, 1, 1, 1, 1, 1, 0.5, -0.5, 0.5, 1, 1, 1, 1, 1, 0.5, -0.5, -0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, -0.5, 0.5, 1, 1, 1, 1, 1, -0.5, 0.5, 0.5, 1, 1, 1, 1, 1, -0.5, -0.5, 0.5, 1, 1, 1, 1, 1, 0.5,
        0.5, -0.5, 1, 1, 1, 1, 1, 0.5, -0.5, -0.5, 1, 1, 1, 1, 1, -0.5, 0.5, -0.5, 1, 1, 1, 1, 1, -0.5, -0.5, -0.5, 1, 1, 1, 1, 1
    ];
    Ovoid.Drawer._bprimitive[1] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[1]);
    Ovoid.gl.bufferData(34962, new Float32Array(c), 35044);
    for (var c = Ovoid.Vertex.newArray(144), g, f, h, l, m, o, q, w = 0, e = 0; 48 > e; e += 2) g = Math.sin(Ovoid._2PI * (w / 24)), f = Math.cos(Ovoid._2PI * (w / 24)), h = Math.sin(Ovoid._2PI * ((w + 1) / 24)), l = Math.cos(Ovoid._2PI * ((w + 1) / 24)), m = e, o = m + 48, q = o + 48, c[m].p.set(f, 0, g, 1), c[m + 1].p.set(l,
        0, h, 1), c[o].p.set(f, g, 0, 1), c[o + 1].p.set(l, h, 0, 1), c[q].p.set(0, f, g, 1), c[q + 1].p.set(0, l, h, 1), c[m].c.set(1, 1, 1, 1), c[m + 1].c.set(1, 1, 1, 1), c[o].c.set(1, 1, 1, 1), c[o + 1].c.set(1, 1, 1, 1), c[q].c.set(1, 1, 1, 1), c[q + 1].c.set(1, 1, 1, 1), w++;
    Ovoid.Drawer._bprimitive[2] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[2]);
    Ovoid.gl.bufferData(34962, Ovoid.Vertex.bufferize(Ovoid.VERTEX_VEC4_P | Ovoid.VERTEX_VEC4_C, c), 35044);
    c = [0, 0, 0, 1, 1, 0, 0, 1, 0.25, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0.25, 0, 1, 0, 1, 0, 1, 0,
        0, 0, 1, 0, 0, 1, 1, 0, 0, 0.25, 1, 0, 0, 1, 1
    ];
    Ovoid.Drawer._bprimitive[3] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[3]);
    Ovoid.gl.bufferData(34962, new Float32Array(c), 35044);
    c = [0, 0, 0, 1, 1, 1, 1, 1, 0.5, 0.5, -1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, -0.5, 0.5, -1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, -0.5, -0.5, -1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0.5, -0.5, -1, 1, 1, 1, 1, 1, 0.5, 0.5, -1, 1, 1, 1, 1, 1, -0.5, 0.5, -1, 1, 1, 1, 1, 1, -0.5, 0.5, -1, 1, 1, 1, 1, 1, -0.5, -0.5, -1, 1, 1, 1, 1, 1, -0.5, -0.5, -1, 1, 1, 1, 1, 1, 0.5, -0.5, -1, 1, 1, 1, 1, 1, 0.5, -0.5, -1, 1, 1, 1, 1,
        1, 0.5, 0.5, -1, 1, 1, 1, 1, 1
    ];
    Ovoid.Drawer._bprimitive[4] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[4]);
    Ovoid.gl.bufferData(34962, new Float32Array(c), 35044);
    c = [0.25, 0, 0, 1, 1, 1, 1, 1, -0.25, 0, 0, 1, 1, 1, 1, 1, 0, 0.25, 0, 1, 1, 1, 1, 1, 0, -0.25, 0, 1, 1, 1, 1, 1, 0, 0, 0.25, 1, 1, 1, 1, 1, 0, 0, -1, 1, 1, 1, 1, 1, 0.125, 0.125, 0.125, 1, 1, 1, 1, 1, -0.125, -0.125, -0.125, 1, 1, 1, 1, 1, -0.125, 0.125, 0.125, 1, 1, 1, 1, 1, 0.125, -0.125, -0.125, 1, 1, 1, 1, 1];
    Ovoid.Drawer._bprimitive[5] = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[5]);
    Ovoid.gl.bufferData(34962, new Float32Array(c), 35044);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Primitive buffer creation")) return !1;
    Ovoid.Drawer._bdynamic = Ovoid.gl.createBuffer();
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bdynamic);
    Ovoid.gl.bufferData(34962, new Float32Array(9), 35048);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Dynamic buffer creation")) return !1;
    Ovoid.gl.bindBuffer(34962, null);
    Ovoid.gl.bindBuffer(34963, null);
    e = Ovoid.PICKING_OFFSCREEN_FRAME_X;
    c = Ovoid.PICKING_OFFSCREEN_FRAME_Y;
    g = Ovoid.gl.createTexture();
    Ovoid.gl.bindTexture(3553, g);
    Ovoid.gl.texImage2D(3553, 0, 6408, e, c, 0, 6408, 5121, null);
    Ovoid.gl.bindTexture(3553, null);
    f = Ovoid.gl.createRenderbuffer();
    Ovoid.gl.bindRenderbuffer(36161, f);
    Ovoid.gl.renderbufferStorage(36161, 33189, e, c);
    Ovoid.gl.bindRenderbuffer(36161, null);
    Ovoid.Drawer._fbrpixel = Ovoid.gl.createFramebuffer();
    Ovoid.gl.bindFramebuffer(36160, Ovoid.Drawer._fbrpixel);
    Ovoid.gl.framebufferTexture2D(36160, 36064, 3553, g, 0);
    Ovoid.gl.framebufferRenderbuffer(36160, 36096, 36161, f);
    Ovoid.gl.bindFramebuffer(36160,
        null);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: RP Frame buffer creation")) return !1;
    for (e = 0; e < Ovoid.MAX_RENDER_LAYER; e++) Ovoid.Drawer._sppipe[e] = [];
    e = new Ovoid.Shader("PIPE_L2_GEOMETRY_LP");
    e.setSources(Ovoid.GLSL_PNUIW_HYBRID_VS, Ovoid.GLSL_AERDS_FULLTEX_LP_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L2_GEOMETRY_LP pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(0, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_L2_GEOMETRY_1P");
    e.setSources(Ovoid.GLSL_PNUIW_HYBRID_VS, Ovoid.GLSL_AERDS_FULLTEX_1P_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L2_GEOMETRY_1P pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(1, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_L1_GEOMETRY_LP");
    e.setSources(Ovoid.GLSL_VL_PNUIW_HYBRID_LP_VS, Ovoid.GLSL_VL_AERDS_FULLTEX_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L1_GEOMETRY_LP pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(10, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_L1_GEOMETRY_1P");
    e.setSources(Ovoid.GLSL_VL_PNUIW_HYBRID_1P_VS, Ovoid.GLSL_VL_AERDS_FULLTEX_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L1_GEOMETRY_1P pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(11, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_L0_GEOMETRY_LP");
    e.setSources(Ovoid.GLSL_VL_PNUIW_HYBRID_LP_VS, Ovoid.GLSL_VL_ADS_1TEX_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L0_GEOMETRY_LP pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(13, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_L0_GEOMETRY_1P");
    e.setSources(Ovoid.GLSL_VL_PNUIW_HYBRID_1P_VS, Ovoid.GLSL_VL_ADS_1TEX_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_L0_GEOMETRY_1P pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(14, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_PARTICLE");
    e.setSources(Ovoid.GLSL_PUC_PARTICLE_VS, Ovoid.GLSL_VC_TEX_PARTICLE_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_PARTICLE pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(2, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_LAYER");
    e.setSources(Ovoid.GLSL_PU_VS, Ovoid.GLSL_C_TEX_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_LAYER pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(3, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_STRING");
    e.setSources(Ovoid.GLSL_P_ZWSRING_VS, Ovoid.GLSL_C_TEX_STRING_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_STRING pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(4, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_HELPER");
    e.setSources(Ovoid.GLSL_PC_VS, Ovoid.GLSL_VCC_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_HELPER pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(5, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_SHADOW_VOLUME");
    e.setSources(Ovoid.GLSL_P_VS, Ovoid.GLSL_BLACK_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_SHADOW_VOLUME pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(6, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_BILLBOARD");
    e.setSources(Ovoid.GLSL_PU_BILLBOARD_VS, Ovoid.GLSL_C_TEX_BILLBOARD_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1,
        "Ovoid.Drawer", "error wrapping default PIPE_BILLBOARD pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(7, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_RP_GEOMETRY");
    e.setSources(Ovoid.GLSL_PIW_HYBRID_VS, Ovoid.GLSL_C_ADEPTH_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_RP_GEOMETRY pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(20, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_RP_PARTICLE");
    e.setSources(Ovoid.GLSL_PU_PARTICLE_VS,
        Ovoid.GLSL_C_ADEPTH_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_RP_PARTICLE pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(22, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_RP_LAYER");
    e.setSources(Ovoid.GLSL_P_VS, Ovoid.GLSL_C_ADEPTH_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_RP_LAYER pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(23, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_RP_STRING");
    e.setSources(Ovoid.GLSL_P_ZSRING_VS, Ovoid.GLSL_C_ADEPTH_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_RP_STRING pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(24, -1, Ovoid.Drawer.addShader(e));
    e = new Ovoid.Shader("PIPE_RP_BILLBOARD");
    e.setSources(Ovoid.GLSL_PU_BILLBOARD_VS, Ovoid.GLSL_C_ADEPTH_FS, Ovoid.GLSL_WRAPMAP);
    if (!e.linkWrap()) return Ovoid.log(1, "Ovoid.Drawer", "error wrapping default PIPE_RP_BILLBOARD pipeline shader program."), !1;
    Ovoid.Drawer.plugShader(27, -1, Ovoid.Drawer.addShader(e));
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Shader program creation.")) return !1;
    Ovoid.gl.viewport(0, 0, Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]);
    Ovoid.gl.clear(16640);
    Ovoid.gl.enable(3042);
    Ovoid.gl.blendFunc(770, 771);
    Ovoid.gl.lineWidth(1);
    Ovoid.gl.disable(2884);
    Ovoid.gl.cullFace(1029);
    Ovoid.gl.depthMask(1);
    Ovoid.gl.enable(2929);
    Ovoid.gl.depthFunc(513);
    Ovoid.gl.disable(2960);
    if (Ovoid._logGlerror("Ovoid.Drawer.init:: Default settings")) return !1;
    Ovoid.log(3, "Ovoid.Drawer", "initialized in: " + 0.001 * ((new Date).getTime() - b) + "s");
    return !0
};
Ovoid.Drawer.addShader = function (b) {
    if (!b.linkStatus) return Ovoid.log(2, "Ovoid.Drawer", "Adding shader '" + b.name + "' fail, shader is not linked"), -1;
    var c = Ovoid.Drawer._splib.length;
    Ovoid.Drawer._splib.push(b);
    Ovoid.log(3, "Ovoid.Drawer", "Adding shader '" + b.name + "' in stock with id:" + c);
    return c
};
Ovoid.Drawer.plugShader = function (b, c, e) {
    if (c > Ovoid.MAX_RENDER_LAYER) return Ovoid.log(2, "Ovoid.Drawer", "Invalid layer index"), !1;
    if ("number" == typeof e) {
        if (!Ovoid.Drawer._splib[e]) return Ovoid.log(2, "Ovoid.Drawer", "No such shader with id " + e), !1
    } else if ("string" == typeof e) {
        for (var g = -1, f = 0; f < Ovoid.Drawer._splib.length; f++)
            if (Ovoid.Drawer._splib[f].name == e) {
                g = f;
                break
            }
        if (0 > g) return Ovoid.log(2, "Ovoid.Drawer", "No such shader with name " + e), !1;
        e = g
    }
    if (-1 == c) {
        Ovoid.log(3, "Ovoid.Drawer", "Plug shader " + e + " to pipe " +
            b + " for all layers");
        for (f = 0; f < Ovoid.MAX_RENDER_LAYER; f++) Ovoid.Drawer._sppipe[f][b] = e
    } else Ovoid.log(3, "Ovoid.Drawer", "Plug shader " + e + " to pipe " + b + " for layer " + c), Ovoid.Drawer._sppipe[c][b] = e;
    return !0
};
Ovoid.Drawer.switchSp = function (b) {
    Ovoid.Drawer._swshader[0] = Ovoid.Drawer._swshader[1];
    Ovoid.Drawer._swshader[1] = b;
    Ovoid.Drawer.sp = Ovoid.Drawer._splib[b];
    Ovoid.Drawer.sp.use()
};
Ovoid.Drawer.restorSp = function () {
    Ovoid.Drawer.switchSp(Ovoid.Drawer._swshader[0])
};
Ovoid.Drawer.switchPipe = function (b, c) {
    Ovoid.Drawer._swpipe[0] = Ovoid.Drawer._swpipe[1];
    Ovoid.Drawer._swpipe[1] = b;
    Ovoid.Drawer._swlayer[0] = Ovoid.Drawer._swlayer[1];
    Ovoid.Drawer._swlayer[1] = c;
    Ovoid.Drawer.sp = Ovoid.Drawer._splib[Ovoid.Drawer._sppipe[c][b]];
    Ovoid.Drawer.sp.use()
};
Ovoid.Drawer.restorePipe = function () {
    Ovoid.Drawer.switchPipe(Ovoid.Drawer._swpipe[0], Ovoid.Drawer._swlayer[0])
};
Ovoid.Drawer.switchBlend = function (b) {
    Ovoid.Drawer._swblend[0] = Ovoid.Drawer._swblend[1];
    Ovoid.Drawer._swblend[1] = b;
    switch (b) {
    case 0:
        Ovoid.gl.disable(3042);
        break;
    case 1:
        Ovoid.gl.enable(3042);
        Ovoid.gl.blendFunc(770, 1);
        break;
    case 2:
        Ovoid.gl.enable(3042);
        Ovoid.gl.blendFunc(1, 1);
        break;
    default:
        Ovoid.gl.enable(3042), Ovoid.gl.blendFunc(770, 771)
    }
};
Ovoid.Drawer.restoreBlend = function () {
    Ovoid.Drawer.switchBlend(Ovoid.Drawer._swblend[0])
};
Ovoid.Drawer.switchDepth = function (b) {
    Ovoid.Drawer._swdepth[0] = Ovoid.Drawer._swdepth[1];
    Ovoid.Drawer._swdepth[1] = b;
    switch (b) {
    case 0:
        Ovoid.gl.depthMask(0);
        Ovoid.gl.disable(2929);
        break;
    case 1:
        Ovoid.gl.depthMask(1);
        Ovoid.gl.enable(2929);
        Ovoid.gl.depthFunc(513);
        break;
    case 2:
        Ovoid.gl.depthMask(0);
        Ovoid.gl.enable(2929);
        Ovoid.gl.depthFunc(513);
        break;
    case 4:
        Ovoid.gl.depthMask(0);
        Ovoid.gl.enable(2929);
        Ovoid.gl.depthFunc(514);
        break;
    default:
        Ovoid.gl.depthMask(0), Ovoid.gl.enable(2929), Ovoid.gl.depthFunc(515)
    }
};
Ovoid.Drawer.restoreDepth = function () {
    Ovoid.Drawer.switchDepth(Ovoid.Drawer._swdepth[0])
};
Ovoid.Drawer.setCull = function (b) {
    Ovoid.Drawer._swdepth[0] = Ovoid.Drawer._swdepth[1];
    Ovoid.Drawer._swdepth[1] = b;
    switch (b) {
    case 0:
        Ovoid.gl.disable(2884);
        break;
    case 2:
        Ovoid.gl.enable(2884);
        Ovoid.gl.cullFace(1028);
        break;
    default:
        Ovoid.gl.enable(2884), Ovoid.gl.cullFace(1029)
    }
};
Ovoid.Drawer.beginDraw = function () {
    Ovoid.Drawer._pc = (new Date).getTime();
    Ovoid.Frame.changed && Ovoid.gl.viewport(0, 0, Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]);
    var b;
    b = Ovoid.Drawer.opt_ambientColor;
    Ovoid.Drawer._abcolor[0] = b[0];
    Ovoid.Drawer._abcolor[1] = b[1];
    Ovoid.Drawer._abcolor[2] = b[2];
    Ovoid.Drawer._abcolor[3] = b[3];
    if (0 < Ovoid.Drawer.opt_fogDensity) b = Ovoid.Drawer.opt_fogColor, Ovoid.Drawer._fogcolor[0] = b[0], Ovoid.Drawer._fogcolor[1] = b[1], Ovoid.Drawer._fogcolor[2] = b[2], Ovoid.Drawer._fogcolor[3] = b[3];
    b = Ovoid.Drawer.opt_clearColor;
    Ovoid.gl.clearColor(b[0], b[1], b[2], b[3]);
    Ovoid.gl.depthMask(1);
    Ovoid.gl.clear(16640);
    Ovoid.Drawer._drawnpolyset = 0;
    Ovoid.Drawer._drawnparticle = 0;
    Ovoid.Drawer._renderpasses = 0;
    Ovoid.Drawer._drawndynamic = 0;
    Ovoid.Drawer._drawnsprite = 0;
    Ovoid.Drawer._drawnsymbolic = 0;
    Ovoid.Drawer._drawnchar = 0;
    Ovoid.Drawer._drawnshadow = 0;
    if (Ovoid.Drawer.opt_adaptativeLop) {
        if (Ovoid.Timer._lopfps < Ovoid.Drawer.opt_adaptiveLopThreshold) Ovoid.Drawer._lop--, Ovoid.Timer._lopfps = Ovoid.Drawer.opt_adaptiveLopThreshold;
        59 <= Ovoid.Timer._lopfps && Ovoid.Drawer._lop++;
        if (Ovoid.Drawer._lop > Ovoid.Drawer.opt_lopLevel) Ovoid.Drawer._lop = Ovoid.Drawer.opt_lopLevel;
        if (0 > Ovoid.Drawer._lop) Ovoid.Drawer._lop = 0
    } else Ovoid.Drawer._lop = Ovoid.Drawer.opt_lopLevel
};
Ovoid.Drawer.endDraw = function () {
    Ovoid.gl.flush()
};
Ovoid.Drawer.beginRpDraw = function () {
    Ovoid.gl.bindFramebuffer(36160, Ovoid.Drawer._fbrpixel);
    Ovoid.gl.clearColor(0, 0, 0, 1);
    Ovoid.gl.clear(16640)
};
Ovoid.Drawer.endRpDraw = function () {
    Ovoid.gl.readPixels(Ovoid.Input.mousePosition.v[0], Ovoid.Frame.size.v[1] - Ovoid.Input.mousePosition.v[1], 1, 1, 6408, 5121, Ovoid.Drawer._rpcolor);
    Ovoid.gl.bindFramebuffer(36160, null);
    Ovoid.Input.mouseLeaveUid = Ovoid.Input.mouseOverUid;
    Ovoid.Input.mouseOverUid = 0 | Ovoid.Drawer._rpcolor[0] << 16 | Ovoid.Drawer._rpcolor[1] << 8 | Ovoid.Drawer._rpcolor[2];
    Ovoid.Drawer._rpdepth[0] = Ovoid.Drawer._rpcolor[3] / 255;
    Ovoid.Queuer._rcamera.unproject(Ovoid.Input.mousePosition.v[0], Ovoid.Frame.size.v[1] -
        Ovoid.Input.mousePosition.v[1], Ovoid.Drawer._rpdepth[0], Ovoid.Input.mouseCursor);
    Ovoid.Input.mouseEnterUid = Ovoid.Input.mouseLeaveUid != Ovoid.Input.mouseOverUid ? Ovoid.Input.mouseOverUid : Ovoid.Input.mouseLeaveUid = 0
};
Ovoid.Drawer.light = function (b) {
    if (b.count) {
        for (var c = Ovoid.MAX_LIGHT_BY_DRAW, e = new Float32Array(4 * c), g = new Float32Array(3 * c), f = new Float32Array(4 * c), h = new Float32Array(c), l = new Float32Array(c), m = new Float32Array(c), o = new Float32Array(c), c = new Int32Array(c), q = 0; q < Ovoid.MAX_LIGHT_BY_DRAW; q++) q < b.count ? (e.set(b[q].worldPosition.v, 4 * q), g.set(b[q].worldDirection.v, 3 * q), f.set(b[q].color.v, 4 * q), h[q] = b[q].intensity, l[q] = b[q].range, m[q] = b[q].falloff, o[q] = b[q].spotAngle, c[q] = 1) : c[q] = 0;
        Ovoid.Drawer.sp.setUniform4fv(20,
            e);
        Ovoid.Drawer.sp.setUniform3fv(21, g);
        Ovoid.Drawer.sp.setUniform4fv(22, f);
        Ovoid.Drawer.sp.setUniform1fv(23, h);
        Ovoid.Drawer.sp.setUniform1fv(24, l);
        Ovoid.Drawer.sp.setUniform1fv(25, m);
        Ovoid.Drawer.sp.setUniform1fv(26, o);
        Ovoid.Drawer.sp.setUniform1iv(28, c)
    } else b.type && (Ovoid.Drawer.sp.setUniform4fv(20, b.worldPosition.v), Ovoid.Drawer.sp.setUniform3fv(21, b.worldDirection.v), Ovoid.Drawer.sp.setUniform4fv(22, b.color.v), Ovoid.Drawer.sp.setUniform1f(23, b.intensity), Ovoid.Drawer.sp.setUniform1f(24, b.range),
        Ovoid.Drawer.sp.setUniform1f(25, b.falloff), Ovoid.Drawer.sp.setUniform1f(26, b.spotAngle))
};
Ovoid.Drawer.ambient = function () {
    Ovoid.Drawer.sp.setUniform4fv(40, Ovoid.Drawer._abcolor);
    0 < Ovoid.Drawer.opt_fogDensity && (Ovoid.Drawer.sp.setUniform4fv(44, Ovoid.Drawer._fogcolor), Ovoid.Drawer.sp.setUniform1f(45, Ovoid.Drawer.opt_fogDensity))
};
Ovoid.Drawer.persp = function (b) {
    Ovoid.Drawer.sp.setUniformMatrix4fv(3, b.eyeview.m);
    Ovoid.Drawer.sp.setUniformMatrix4fv(4, b.perspective.m);
    Ovoid.Drawer.sp.setUniformMatrix4fv(5, b.lookat.m);
    Ovoid.Drawer.sp.setUniform4fv(30, b.worldPosition.v)
};
Ovoid.Drawer.ortho = function (b) {
    Ovoid.Drawer.sp.setUniformMatrix4fv(3, b.orthographic.m)
};
Ovoid.Drawer.screen = function (b) {
    Ovoid.Drawer.sp.setUniformMatrix4fv(3, b.m)
};
Ovoid.Drawer.model = function (b, c) {
    Ovoid.Drawer.sp.setUniformMatrix4fv(0, b);
    c && Ovoid.Drawer.sp.setUniformMatrix3fv(1, c)
};
Ovoid.Drawer.enable = function (b) {
    Ovoid.Drawer.sp.setUniform1i(b, 1)
};
Ovoid.Drawer.disable = function (b) {
    Ovoid.Drawer.sp.setUniform1i(b, 0)
};
Ovoid.Drawer.sprite = function () {
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[0]);
    Ovoid.Drawer.sp.setVertexAttribPointers(5, 28);
    Ovoid.gl.drawArrays(4, 0, 6);
    Ovoid.Drawer._drawnsprite++
};
Ovoid.Drawer.symBox = function (b) {
    Ovoid.Drawer.sp.setUniform4fv(9, b.v);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[1]);
    Ovoid.Drawer.sp.setVertexAttribPointers(33, 32);
    Ovoid.gl.drawArrays(1, 0, 24);
    Ovoid.Drawer._drawnsymbolic++
};
Ovoid.Drawer.symSphere = function (b) {
    Ovoid.Drawer.sp.setUniform4fv(9, b.v);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[2]);
    Ovoid.Drawer.sp.setVertexAttribPointers(33, 32);
    Ovoid.gl.drawArrays(1, 0, 144);
    Ovoid.Drawer._drawnsymbolic++
};
Ovoid.Drawer.symAxis = function (b) {
    Ovoid.Drawer.sp.setUniform4fv(9, b.v);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[3]);
    Ovoid.Drawer.sp.setVertexAttribPointers(33, 32);
    Ovoid.gl.drawArrays(1, 0, 6);
    Ovoid.Drawer._drawnsymbolic++
};
Ovoid.Drawer.symPyramid = function (b) {
    Ovoid.Drawer.sp.setUniform4fv(9, b.v);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[4]);
    Ovoid.Drawer.sp.setVertexAttribPointers(33, 32);
    Ovoid.gl.drawArrays(1, 0, 16);
    Ovoid.Drawer._drawnsymbolic++
};
Ovoid.Drawer.symStar = function (b) {
    Ovoid.Drawer.sp.setUniform4fv(9, b.v);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[5]);
    Ovoid.Drawer.sp.setVertexAttribPointers(33, 32);
    Ovoid.gl.drawArrays(1, 0, 10);
    Ovoid.Drawer._drawnsymbolic++
};
Ovoid.Drawer.string = function (b, c, e, g) {
    for (var f = new Float32Array(4 * g.length), h = 0, l, m = 0, o = 0, b = e * b, q = e * c, w = 0; w < g.length; w++) c = l, l = g.charCodeAt(w), 10 == l ? (o++, m = 0) : 9 == l ? m += 4 : 194 == l || 195 == l || (195 == c && (l += 64), f[h] = b + m * b, f[h + 1] = 0.5 * q + o * q, f[h + 2] = e, f[h + 3] = l - 32, h += 4, m++);
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bdynamic);
    Ovoid.gl.bufferData(34962, f, 35048);
    Ovoid.Drawer.sp.setVertexAttribPointers(1, 16);
    Ovoid.gl.drawArrays(0, 0, h / 4);
    Ovoid.Drawer._drawnchar += h / 4
};
Ovoid.Drawer.raw = function (b, c, e, g, f) {
    Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bdynamic);
    Ovoid.gl.bufferData(34962, f, 35048);
    Ovoid.Drawer.sp.setVertexAttribPointers(b, c);
    Ovoid.gl.drawArrays(e, 0, g);
    Ovoid.Drawer._drawndynamic++
};
Ovoid.Drawer.layer = function (b, c) {
    Ovoid.gl.activeTexture(33985);
    c ? (Ovoid.Drawer.sp.setUniform4fv(9, c.v), Ovoid.Drawer._tblank.bind()) : (Ovoid.Drawer.sp.setUniform4fv(9, b.bgColor.v), b.bgTexture ? b.bgTexture.bind() : Ovoid.Drawer._tblank.bind());
    Ovoid.Drawer.sp.setUniformSampler(1, 1);
    Ovoid.Drawer.sprite()
};
Ovoid.Drawer.text = function (b, c) {
    Ovoid.gl.activeTexture(33985);
    c ? (Ovoid.Drawer.sp.setUniform4fv(9, c.v), Ovoid.Drawer._tblank.bind()) : (Ovoid.Drawer.sp.setUniform4fv(9, b.fgColor.v), b.fontmap ? b.fontmap.bind() : Ovoid.Drawer._tfontm.bind());
    Ovoid.Drawer.sp.setUniformSampler(1, 1);
    Ovoid.Drawer.string(b.param.v[1], b.param.v[2], b.param.v[0], b.string)
};
Ovoid.Drawer.mesh = function (b, c) {
    var e, g, f, h;
    Ovoid.gl.bindBuffer(34962, b._vbuffer[0]);
    Ovoid.gl.bindBuffer(34963, b._ibuffer[0]);
    Ovoid.Drawer.sp.setVertexAttribPointers(b._vformat, b._vfbytes);
    e = b.polyset[0].length;
    if (c)
        for (Ovoid.Drawer.sp.setUniform4fv(9, c.v); e--;) f = b.polyset[0][e], Ovoid.gl.drawElements(4, f.icount, 5123, f.ioffset), Ovoid.Drawer._drawnpolyset++;
    else
        for (; e--;) {
            f = b.polyset[0][e];
            f.material ? h = f.material : h = Ovoid.Drawer._mblank;
            Ovoid.Drawer.sp.setUniform4fv(10, h.color[0].v);
            Ovoid.Drawer.sp.setUniform4fv(11,
                h.color[1].v);
            Ovoid.Drawer.sp.setUniform4fv(12, h.color[2].v);
            Ovoid.Drawer.sp.setUniform4fv(13, h.color[3].v);
            Ovoid.Drawer.sp.setUniform4fv(14, h.color[4].v);
            Ovoid.Drawer.sp.setUniform1f(15, h.shininess);
            Ovoid.Drawer.sp.setUniform1f(16, h.opacity);
            Ovoid.Drawer.sp.setUniform1f(17, h.reflectivity);
            for (g = 0; 6 > g; g++) - 1 != Ovoid.Drawer.sp.uniformSampler[g] && (Ovoid.gl.activeTexture(33984 + g), h.texture[g] ? h.texture[g].bind() : Ovoid.Drawer._tblank.bind(), Ovoid.gl.uniform1i(Ovoid.Drawer.sp.uniformSampler[g], g));
            Ovoid.gl.drawElements(4,
                f.icount, 5123, f.ioffset);
            Ovoid.Drawer._drawnpolyset++
        }
};
Ovoid.Drawer.emitter = function (b, c, e) {
    if (e)
        if (b.billboard ? Ovoid.Drawer.switchPipe(27, c) : Ovoid.Drawer.switchPipe(22, c), Ovoid.Drawer.sp.setUniform4fv(9, e.v), Ovoid.Drawer.persp(Ovoid.Queuer._rcamera), Ovoid.gl.activeTexture(33985), Ovoid.Drawer._tblank.bind(), Ovoid.Drawer.sp.setUniformSampler(1, 1), Ovoid.Drawer.switchBlend(0), Ovoid.Drawer.switchDepth(2), b.billboard) {
            Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[6]);
            Ovoid.Drawer.sp.setVertexAttribPointers(5, 28);
            var g, c = new Float32Array(16);
            for (g = b._particles.length; g--;) e =
                b._particles[g], 0 < e.l && (c[0] = e.u.v[2], c[12] = e.p.v[0], c[13] = e.p.v[1], c[14] = e.p.v[2], c[15] = 1, Ovoid.Drawer.model(c), Ovoid.gl.drawArrays(5, 0, 4), Ovoid.Drawer._drawnsprite++)
        } else Ovoid.Drawer.raw(Ovoid.VERTEX_PARTICLE, 44, 0, b._alives, b._fbuffer), Ovoid.Drawer._drawnparticle += b._alives;
        else {
            switch (b.model) {
            case 3:
                Ovoid.Drawer.switchBlend(1);
                break;
            default:
                Ovoid.Drawer.switchBlend(3)
            }
            b.billboard ? Ovoid.Drawer.switchPipe(7, c) : Ovoid.Drawer.switchPipe(2, c);
            Ovoid.Drawer.persp(Ovoid.Queuer._rcamera);
            Ovoid.gl.activeTexture(33985);
            b.texture ? b.texture.bind() : Ovoid.Drawer._tblank.bind();
            Ovoid.Drawer.sp.setUniformSampler(1, 1);
            Ovoid.Drawer.switchDepth(2);
            if (b.billboard) {
                Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bprimitive[6]);
                Ovoid.Drawer.sp.setVertexAttribPointers(5, 28);
                c = new Float32Array(16);
                for (g = b._particles.length; g--;) e = b._particles[g], 0 < e.l && (c[0] = e.u.v[2], c[12] = e.p.v[0], c[13] = e.p.v[1], c[14] = e.p.v[2], c[15] = 1, Ovoid.Drawer.sp.setUniform4fv(9, e.c.v), Ovoid.Drawer.model(c), Ovoid.gl.drawArrays(5, 0, 4), Ovoid.Drawer._drawnsprite++)
            } else Ovoid.Drawer.raw(Ovoid.VERTEX_PARTICLE,
                44, 0, b._alives, b._fbuffer), Ovoid.Drawer._drawnparticle += b._alives
        }
    Ovoid.Drawer.restoreBlend();
    Ovoid.Drawer.restoreDepth();
    Ovoid.Drawer.restorePipe()
};
Ovoid.Drawer.shadow = function (b, c) {
    var e;
    if (c.shape.type & Ovoid.MESH) Ovoid.Drawer.model(c.worldMatrix.m), e = c.shape;
    if (c.shape.type & Ovoid.SKIN && c.shape.mesh) {
        if (!Ovoid.opt_localSkinData) return;
        Ovoid.Drawer.model((new Ovoid.Matrix4).m);
        e = c.shape.mesh
    }
    if (e) {
        e = e.triangles[0].length;
        var g = Array(6);
        g[3] = new Ovoid.Point;
        g[4] = new Ovoid.Point;
        g[5] = new Ovoid.Point;
        var f = new Ovoid.Point,
            h = new Ovoid.Vector,
            l = new Float32Array(32 * e);
        b.model == Ovoid.LIGHT_DIRECTIONAL ? (h.copy(b.worldDirection), c.shape.type & Ovoid.MESH &&
            h.transform4Inverse(c.worldMatrix), f.copy(h), f.scaleBy(-1)) : (f.copy(b.worldPosition), c.shape.type & Ovoid.MESH && f.transform4Inverse(c.worldMatrix));
        for (var m = 0, o = 0; o < e; o++)
            if (b.model != Ovoid.LIGHT_DIRECTIONAL && h.subOf(f, c.shape.triangles[0][o].center), 0 < h.dot(c.shape.triangles[0][o].normal)) {
                g[0] = c.shape.vertices[0][c.shape.triangles[0][o].index[0]].p;
                g[1] = c.shape.vertices[0][c.shape.triangles[0][o].index[1]].p;
                g[2] = c.shape.vertices[0][c.shape.triangles[0][o].index[2]].p;
                b.model == Ovoid.LIGHT_DIRECTIONAL ?
                    (g[3].copy(f), g[4].copy(f), g[5].copy(f)) : (g[3].subOf(g[0], f), g[4].subOf(g[1], f), g[5].subOf(g[2], f));
                l[m] = g[0].v[0];
                m++;
                l[m] = g[0].v[1];
                m++;
                l[m] = g[0].v[2];
                m++;
                l[m] = 1;
                m++;
                l[m] = g[1].v[0];
                m++;
                l[m] = g[1].v[1];
                m++;
                l[m] = g[1].v[2];
                m++;
                l[m] = 1;
                m++;
                l[m] = g[2].v[0];
                m++;
                l[m] = g[2].v[1];
                m++;
                l[m] = g[2].v[2];
                m++;
                l[m] = 1;
                m++;
                l[m] = g[3].v[0];
                m++;
                l[m] = g[3].v[1];
                m++;
                l[m] = g[3].v[2];
                m++;
                l[m] = 0;
                m++;
                l[m] = g[5].v[0];
                m++;
                l[m] = g[5].v[1];
                m++;
                l[m] = g[5].v[2];
                m++;
                l[m] = 0;
                m++;
                l[m] = g[4].v[0];
                m++;
                l[m] = g[4].v[1];
                m++;
                l[m] = g[4].v[2];
                m++;
                l[m] =
                    0;
                m++;
                for (j = 0; 3 > j; j++) a = c.shape.triangles[0][o].adjacent[j], -1 != a ? (b.model != Ovoid.LIGHT_DIRECTIONAL && h.subOf(f, c.shape.triangles[0][a].center), 0 >= h.dot(c.shape.triangles[0][a].normal) && (k = (j + 1) % 3, b.model == Ovoid.LIGHT_DIRECTIONAL ? (g[3].copy(f), g[4].copy(f)) : (g[3].subOf(g[j], f), g[4].subOf(g[k], f)), l[m] = g[j].v[0], m++, l[m] = g[j].v[1], m++, l[m] = g[j].v[2], m++, l[m] = 1, m++, l[m] = g[4].v[0], m++, l[m] = g[4].v[1], m++, l[m] = g[4].v[2], m++, l[m] = 0, m++, l[m] = g[k].v[0], m++, l[m] = g[k].v[1], m++, l[m] = g[k].v[2], m++, l[m] = 1, m++,
                    l[m] = g[j].v[0], m++, l[m] = g[j].v[1], m++, l[m] = g[j].v[2], m++, l[m] = 1, m++, l[m] = g[3].v[0], m++, l[m] = g[3].v[1], m++, l[m] = g[3].v[2], m++, l[m] = 0, m++, l[m] = g[4].v[0], m++, l[m] = g[4].v[1], m++, l[m] = g[4].v[2], m++, l[m] = 0, m++)) : (k = (j + 1) % 3, b.model == Ovoid.LIGHT_DIRECTIONAL ? (g[3].copy(f), g[4].copy(f)) : (g[3].subOf(g[j], f), g[4].subOf(g[k], f)), l[m] = g[j].v[0], m++, l[m] = g[j].v[1], m++, l[m] = g[j].v[2], m++, l[m] = 1, m++, l[m] = g[4].v[0], m++, l[m] = g[4].v[1], m++, l[m] = g[4].v[2], m++, l[m] = 0, m++, l[m] = g[k].v[0], m++, l[m] = g[k].v[1], m++, l[m] = g[k].v[2],
                    m++, l[m] = 1, m++, l[m] = g[j].v[0], m++, l[m] = g[j].v[1], m++, l[m] = g[j].v[2], m++, l[m] = 1, m++, l[m] = g[3].v[0], m++, l[m] = g[3].v[1], m++, l[m] = g[3].v[2], m++, l[m] = 0, m++, l[m] = g[4].v[0], m++, l[m] = g[4].v[1], m++, l[m] = g[4].v[2], m++, l[m] = 0, m++)
            }
        Ovoid.gl.bindBuffer(34962, Ovoid.Drawer._bdynamic);
        Ovoid.gl.bufferData(34962, l, 35048);
        Ovoid.Drawer.sp.setVertexAttribPointers(1, 16);
        Ovoid.gl.cullFace(1028);
        Ovoid.gl.stencilOp(7680, 7682, 7680);
        Ovoid.gl.drawArrays(4, 0, m / 4);
        Ovoid.Drawer._drawndynamic++;
        Ovoid.gl.cullFace(1029);
        Ovoid.gl.stencilOp(7680,
            7683, 7680);
        Ovoid.gl.drawArrays(4, 0, m / 4);
        Ovoid.Drawer._drawndynamic++;
        Ovoid.Drawer._drawnshadow++
    }
};
Ovoid.Drawer.normals = function (b, c) {
    if (b.shape.triangles) {
        Ovoid.Drawer.model(b.worldMatrix.m);
        triangles = b.shape.triangles[0];
        for (var e = new Float32Array(16 * triangles.length), g, f, h = 0, l = 0; l < triangles.length; l++) g = triangles[l].center, f = triangles[l].normal, e[h] = g.v[0], h++, e[h] = g.v[1], h++, e[h] = g.v[2], h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = g.v[0] + f.v[0] * c, h++, e[h] = g.v[1] + f.v[1] * c, h++, e[h] = g.v[2] + f.v[2] * c, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++, e[h] = 1, h++;
        Ovoid.Drawer.sp.setUniform4fv(9,
            Ovoid.Drawer._tcolor[10].v);
        Ovoid.Drawer.raw(33, 32, 1, h / 8, e)
    }
};
Ovoid.Drawer.helpers = function (b) {
    Ovoid.Drawer.model(b.worldMatrix.m);
    Ovoid.Drawer.opt_drawAxis && Ovoid.Drawer.symAxis(Ovoid.Drawer._tcolor[0]);
    b.type & Ovoid.CAMERA && Ovoid.Drawer.opt_drawCameras && Ovoid.Drawer.symPyramid(Ovoid.Drawer._tcolor[1]);
    b.type & Ovoid.LIGHT && Ovoid.Drawer.opt_drawLights && Ovoid.Drawer.symStar(Ovoid.Drawer._tcolor[4]);
    if (b.type & Ovoid.JOINT && Ovoid.Drawer.opt_drawJointBones) {
        var c = new Float32Array(b.worldMatrix.m),
            e = Ovoid.Drawer.opt_jointSize * b.size;
        c[0] *= e;
        c[1] *= e;
        c[2] *= e;
        c[4] *= e;
        c[5] *= e;
        c[6] *= e;
        c[8] *= e;
        c[9] *= e;
        c[10] *= e;
        Ovoid.Drawer.model(c);
        Ovoid.Drawer.symSphere(Ovoid.Drawer._tcolor[2])
    }
    if (b.type & Ovoid.BODY) {
        if (Ovoid.Drawer.opt_drawBoundingBox) {
            var c = new Float32Array(b.worldMatrix.m),
                e = 2 * b.boundingBox.hsize.v[0],
                g = 2 * b.boundingBox.hsize.v[1],
                f = 2 * b.boundingBox.hsize.v[2],
                h = b.boundingBox.center.v[0],
                l = b.boundingBox.center.v[1],
                m = b.boundingBox.center.v[2];
            c[0] *= e;
            c[1] *= e;
            c[2] *= e;
            c[4] *= g;
            c[5] *= g;
            c[6] *= g;
            c[8] *= f;
            c[9] *= f;
            c[10] *= f;
            c[12] += h * b.worldMatrix.m[0] + l * b.worldMatrix.m[4] +
                m * b.worldMatrix.m[8];
            c[13] += h * b.worldMatrix.m[1] + l * b.worldMatrix.m[5] + m * b.worldMatrix.m[9];
            c[14] += h * b.worldMatrix.m[2] + l * b.worldMatrix.m[6] + m * b.worldMatrix.m[10];
            Ovoid.Drawer.model(c);
            Ovoid.Drawer.symBox(Ovoid.Drawer._tcolor[8])
        }
        if (Ovoid.Drawer.opt_drawBoundingSphere) c = new Float32Array(b.worldMatrix.m), e = b.boundingSphere.radius, h = b.boundingSphere.center.v[0], l = b.boundingSphere.center.v[1], m = b.boundingSphere.center.v[2], c[0] *= e, c[1] *= e, c[2] *= e, c[4] *= e, c[5] *= e, c[6] *= e, c[8] *= e, c[9] *= e, c[10] *= e, c[12] +=
            h * b.worldMatrix.m[0] + l * b.worldMatrix.m[4] + m * b.worldMatrix.m[8], c[13] += h * b.worldMatrix.m[1] + l * b.worldMatrix.m[5] + m * b.worldMatrix.m[9], c[14] += h * b.worldMatrix.m[2] + l * b.worldMatrix.m[6] + m * b.worldMatrix.m[10], Ovoid.Drawer.model(c), Ovoid.Drawer.symSphere(Ovoid.Drawer._tcolor[6])
    }
};
Ovoid.Drawer.body = function (b, c, e) {
    b.shape.type & Ovoid.MESH ? (Ovoid.Drawer.model(b.worldMatrix.m, b.normalMatrix.m), Ovoid.Drawer.mesh(b.shape, e), b.addCach(Ovoid.CACH_WORLD)) : b.shape.type & Ovoid.SKIN ? (b.shape.mesh && (Ovoid.Drawer.model(b.shape.infMxfArray, b.shape.infMnrArray), Ovoid.Drawer.enable(6), Ovoid.Drawer.mesh(b.shape.mesh, e), Ovoid.Drawer.disable(6)), b.addCach(Ovoid.CACH_WORLD)) : b.shape.type & Ovoid.EMITTER && (Ovoid.Drawer.model(b.worldMatrix.m), Ovoid.Drawer.emitter(b.shape, c, e), b.addCach(Ovoid.CACH_WORLD))
};
Ovoid.Drawer.bodyStack = function (b, c, e) {
    var g = b.count;
    if (e)
        for (e = new Ovoid.Color; g--;) b[g].pickable && (e.fromInt(b[g].uid), Ovoid.Drawer.body(b[g], c, e));
    else
        for (; g--;) Ovoid.Drawer.body(b[g], c)
};
Ovoid.Drawer.layerStack = function (b, c) {
    var e = b.count;
    if (c)
        for (var g = new Ovoid.Color, f = 0; f < e; f++) b[f].pickable && (g.fromInt(b[f].uid), Ovoid.Drawer.model(b[f].layerMatrix.m), Ovoid.Drawer.layer(b[f], g), b[f].addCach(Ovoid.CACH_WORLD));
    else
        for (f = 0; f < e; f++) Ovoid.Drawer.model(b[f].layerMatrix.m), Ovoid.Drawer.layer(b[f], g), b[f].addCach(Ovoid.CACH_WORLD)
};
Ovoid.Drawer.textStack = function (b, c) {
    var e = b.count;
    if (c) {
        var g = new Ovoid.Color;
        for (i = 0; i < e; i++) b[i].pickable && (g.fromInt(b[i].uid), Ovoid.Drawer.model(b[i].layerMatrix.m), Ovoid.Drawer.text(b[i], g), b[i].addCach(Ovoid.CACH_WORLD))
    } else
        for (i = 0; i < e; i++) Ovoid.Drawer.model(b[i].layerMatrix.m), Ovoid.Drawer.text(b[i], g), b[i].addCach(Ovoid.CACH_WORLD)
};
Ovoid.Drawer.helpersStack = function (b) {
    for (var c = b.count; c--;) Ovoid.Drawer.helpers(b[c])
};
Ovoid.Drawer.normalsStack = function (b) {
    for (var c = b.count; c--;) Ovoid.Drawer.normals(b[c], Ovoid.Drawer.opt_normalScale)
};
Ovoid.Drawer.zfailStack = function (b, c) {
    Ovoid.gl.enable(2960);
    Ovoid.gl.clear(1024);
    Ovoid.gl.colorMask(0, 0, 0, 0);
    Ovoid.gl.stencilFunc(519, 0, 0);
    for (var e = c.count; e--;) c[e].shadowCasting && Ovoid.Drawer.shadow(b, c[e]);
    Ovoid.gl.stencilFunc(514, 0, -1);
    Ovoid.gl.stencilOp(7680, 7680, 7680);
    Ovoid.gl.colorMask(1, 1, 1, 1)
};
Ovoid.Drawer.drawQueueRP = function () {
    if (Ovoid.Drawer.opt_pickingMode) {
        Ovoid.Drawer.beginRpDraw();
        Ovoid.Drawer.switchBlend(0);
        Ovoid.Drawer.switchDepth(1);
        if (Ovoid.Drawer.opt_pickingMode & Ovoid.RP_WORLD)
            for (var b = 0; b < Ovoid.MAX_RENDER_LAYER; b++) Ovoid.Drawer.switchPipe(20, 0), Ovoid.Drawer.persp(Ovoid.Queuer._rcamera), Ovoid.Drawer.setCull(1), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qsolid[b], 0, !0), Ovoid.Drawer.setCull(0), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qalpha[b], 0, !0);
        Ovoid.Drawer.opt_drawLayers && Ovoid.Drawer.opt_pickingMode &
            Ovoid.RP_OVERLAY && (Ovoid.Drawer.switchDepth(0), Ovoid.Drawer.switchPipe(23, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.layerStack(Ovoid.Queuer.qlayer, !0), Ovoid.Drawer.switchPipe(24, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.textStack(Ovoid.Queuer.qtext, !0));
        Ovoid.Drawer.endRpDraw();
        Ovoid.Drawer._renderpasses++
    }
};
Ovoid.Drawer.drawQueueHL = function () {
    Ovoid.Drawer.switchDepth(0);
    if (Ovoid.Drawer.opt_drawHelpers) {
        Ovoid.Drawer.switchPipe(5, 0);
        Ovoid.Drawer.persp(Ovoid.Queuer._rcamera);
        if (Ovoid.Drawer.opt_drawNormals)
            for (var b = 0; b < Ovoid.MAX_RENDER_LAYER; b++) Ovoid.Drawer.normalsStack(Ovoid.Queuer.qsolid[b]);
        Ovoid.Drawer.helpersStack(Ovoid.Queuer.qtform);
        Ovoid.Drawer.model(Ovoid.Input.mouseCursor.m);
        Ovoid.Drawer.symSphere(Ovoid.Drawer._tcolor[1])
    }
    Ovoid.Drawer.opt_drawLayers && (Ovoid.Drawer.switchBlend(3), Ovoid.Queuer.qlayer.count &&
        (Ovoid.Drawer.switchPipe(3, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.layerStack(Ovoid.Queuer.qlayer, !1)), Ovoid.Queuer.qtext.count && (Ovoid.Drawer.switchPipe(4, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.textStack(Ovoid.Queuer.qtext, !1)))
};
Ovoid.Drawer.drawQueueLP = function (b) {
    Ovoid.Drawer.setCull(1);
    Ovoid.Drawer.switchBlend(3);
    Ovoid.Drawer.switchDepth(1);
    Ovoid.Drawer.switchPipe(6, 0);
    Ovoid.Drawer.persp(Ovoid.Queuer._rcamera);
    for (var c = 0; c < Ovoid.MAX_RENDER_LAYER; c++) Ovoid.Queuer.qsolid[c].count && (Ovoid.Drawer.switchPipe(b, c), Ovoid.Drawer.persp(Ovoid.Queuer._rcamera), Ovoid.Drawer.ambient(), Ovoid.Drawer.disable(0), Ovoid.Drawer.enable(1), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qsolid[c], c, !1));
    Ovoid.Drawer._renderpasses++;
    Ovoid.Drawer.switchBlend(2);
    Ovoid.Drawer.switchDepth(3);
    for (var e = Ovoid.Queuer.qlight.count; e--;) {
        if (Ovoid.Queuer.qlight[e].shadowCasting && Ovoid.Drawer.opt_shadowCasting) {
            Ovoid.Drawer.switchPipe(6, 0);
            Ovoid.Drawer.switchBlend(0);
            Ovoid.Drawer.switchDepth(2);
            for (c = 0; c < Ovoid.MAX_RENDER_LAYER; c++) Ovoid.Queuer.qsolid[c].count && Ovoid.Drawer.zfailStack(Ovoid.Queuer.qlight[e], Ovoid.Queuer.qsolid[c]);
            Ovoid.Drawer.restoreBlend();
            Ovoid.Drawer.restoreDepth()
        }
        for (c = 0; c < Ovoid.MAX_RENDER_LAYER; c++) Ovoid.Queuer.qsolid[c].count && (Ovoid.Drawer.switchPipe(b,
            c), Ovoid.Drawer.ambient(), Ovoid.Drawer.enable(0), Ovoid.Drawer.disable(1), Ovoid.Drawer.light(Ovoid.Queuer.qlight[e]), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qsolid[c], c, !1));
        Ovoid.Drawer._renderpasses++
    }
    Ovoid.gl.disable(2960)
};
Ovoid.Drawer.drawQueue1P = function (b) {
    Ovoid.Drawer.setCull(1);
    Ovoid.Drawer.switchBlend(3);
    Ovoid.Drawer.switchDepth(1);
    for (var c = 0; c < Ovoid.MAX_RENDER_LAYER; c++) Ovoid.Queuer.qsolid[c].count && (Ovoid.Drawer.switchPipe(b, c), Ovoid.Drawer.persp(Ovoid.Queuer._rcamera), Ovoid.Drawer.ambient(), Ovoid.Drawer.enable(0), Ovoid.Drawer.enable(1), Ovoid.Drawer.light(Ovoid.Queuer.qlight), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qsolid[c], c, !1));
    Ovoid.Drawer._renderpasses++
};
Ovoid.Drawer.drawQueueFX = function (b) {
    Ovoid.Drawer.setCull(0);
    Ovoid.Drawer.switchBlend(3);
    Ovoid.Drawer.switchDepth(2);
    for (var c = 0; c < Ovoid.MAX_RENDER_LAYER; c++) Ovoid.Queuer.qalpha[c].count && (Ovoid.Drawer.switchPipe(b, c), Ovoid.Drawer.persp(Ovoid.Queuer._rcamera), Ovoid.Drawer.ambient(), Ovoid.Drawer.light(Ovoid.Queuer.qlight), Ovoid.Drawer.bodyStack(Ovoid.Queuer.qalpha[c], c, !1));
    Ovoid.Drawer._renderpasses++
};
Ovoid.Drawer.drawQueue = function () {
    Ovoid.Drawer.beginDraw();
    var b, c;
    switch (Ovoid.Drawer._lop) {
    case 0:
        b = 13;
        c = 14;
        break;
    case 1:
        b = 10;
        c = 11;
        break;
    default:
        b = 0, c = 1
    }
    Ovoid.Drawer.drawQueueRP();
    Ovoid.Drawer.opt_perLightPass ? Ovoid.Drawer.drawQueueLP(b) : Ovoid.Drawer.drawQueue1P(c);
    Ovoid.Drawer.drawQueueFX(c);
    Ovoid.Drawer.drawQueueHL();
    Ovoid.Drawer.endDraw()
};
Ovoid.Input = {};
Ovoid.Input.mouseWheel = Array(3);
Ovoid.Input.mouseWheelDelta = 0;
Ovoid.Input.mousePosition = new Ovoid.Coord(0, 0, 0);
Ovoid.Input.mouseVelocity = new Ovoid.Vector(0, 0, 0);
Ovoid.Input.mouseCursor = new Ovoid.Matrix4;
Ovoid.Input.grabbedNode = null;
Ovoid.Input.mouseOverUid = 0;
Ovoid.Input.mouseEnterUid = 0;
Ovoid.Input.mouseLeaveUid = 0;
Ovoid.Input.mouseOverNode = null;
Ovoid.Input.intDn = new Uint8Array(256);
Ovoid.Input.intUp = new Uint8Array(256);
Ovoid.Input.intHl = new Uint8Array(256);
Ovoid.Input.gpAxis = new Ovoid.Point(0, 0, 0, 0);
Ovoid.Input.onInt = [
    [],
    [],
    []
];
Ovoid.Input.onCTRInt = [
    [],
    [],
    []
];
Ovoid.Input.onALTInt = [
    [],
    [],
    []
];
Ovoid.Input.onSHFInt = [
    [],
    [],
    []
];
Ovoid.Input.onLSUInt = [
    [],
    [],
    []
];
Ovoid.Input.onRSUInt = [
    [],
    [],
    []
];
Ovoid.Input._eventMouseDn = function (b) {
    Ovoid.Input.intDn[b.button] = !0;
    Ovoid.Input.intUp[b.button] = !1;
    Ovoid.Input.intHl[b.button] = !0
};
Ovoid.Input._eventMouseUp = function (b) {
    Ovoid.Input.intDn[b.button] = !1;
    Ovoid.Input.intUp[b.button] = !0;
    Ovoid.Input.intHl[b.button] = !1
};
Ovoid.Input._eventMouseMove = function (b) {
    var c = b.clientX - Ovoid.Frame.position.v[0] + Ovoid.Frame.scroll.v[0],
        b = b.clientY - Ovoid.Frame.position.v[1] + Ovoid.Frame.scroll.v[1];
    Ovoid.Input.mouseVelocity.set(Ovoid.Input.mousePosition.v[0] - c, Ovoid.Input.mousePosition.v[1] - b, 0);
    Ovoid.Input.mousePosition.set(c, b, 0)
};
Ovoid.Input._eventMouseWheel = function (b) {
    if (!b) b = window.event;
    var c;
    b.wheelDelta ? c = b.wheelDelta / 120 : b.detail && (c = -b.detail / 3);
    0 < c ? Ovoid.Input.intUp[7] = !0 : 0 > c && (Ovoid.Input.intDn[7] = !0);
    Ovoid.Input.mouseWheelDelta = c
};
Ovoid.Input._eventKeyDn = function (b) {
    Ovoid.Input.intDn[b.keyCode] = !0;
    Ovoid.Input.intHl[b.keyCode] = !0
};
Ovoid.Input._eventKeyUp = function (b) {
    Ovoid.Input.intUp[b.keyCode] = !0;
    Ovoid.Input.intHl[b.keyCode] = !1
};
Ovoid.Input._eventGpAxis = function () {};
Ovoid.Input._eventGpConnect = function () {};
alert('l1');
Ovoid.Input.init = function () {
	alert('l2');
    Ovoid.log(3, "Ovoid.Input", "initialization");
    window.onmousedown = Ovoid.Input._eventMouseDn;
    window.onmouseup = Ovoid.Input._eventMouseUp;
    window.onmousemove = Ovoid.Input._eventMouseMove;
    window.onmousewheel = Ovoid.Input._eventMouseWheel;
    window.addEventListener("DOMMouseScroll", Ovoid.Input._eventMouseWheel, !1);
    document.addEventListener('keydown', Ovoid.Input._eventKeyDn);
    document.addEventListener('keyup', Ovoid.Input._eventKeyUp);
    window.addEventListener("MozGamepadConnected", Ovoid.Input._eventGpConnect, !1);
    window.addEventListener("MozGamepadAxisMove",
        Ovoid.Input._eventGpAxis, !1);
    return !0
};
Ovoid.Input.update = function () {
    var b = Ovoid.Input.onInt;
    if (Ovoid.Input.intHl[16]) b = Ovoid.Input.onSHFInt;
    if (Ovoid.Input.intHl[17]) b = Ovoid.Input.onCTRInt;
    if (Ovoid.Input.intHl[18]) b = Ovoid.Input.onALTInt;
    if (Ovoid.Input.intHl[91]) b = Ovoid.Input.onLSUInt;
    if (Ovoid.Input.intHl[92]) b = Ovoid.Input.onRSUInt;
    var c;
    for (c = b[0].length; c--;)
        if (Ovoid.Input.intUp[b[0][c][0]]) b[0][c][1]();
    for (c = b[1].length; c--;)
        if (Ovoid.Input.intDn[b[1][c][0]]) b[1][c][1]();
    for (c = b[2].length; c--;)
        if (Ovoid.Input.intHl[b[2][c][0]]) b[2][c][1]();
    Ovoid.Input.mouseVelocity.set(0,
        0, 0);
    for (b = Ovoid.Input.mouseWheelDelta = 0; 255 > b; b++) Ovoid.Input.intDn[b] = !1, Ovoid.Input.intUp[b] = !1
};
Ovoid.Input.trigger = function (b, c, e, g) {
    if (2 < c) Ovoid.log(2, "Ovoid.Input.trigger", "Invalid key status code.");
    else if (255 < e) Ovoid.log(2, "Ovoid.Input.trigger", "Invalid key code.");
    else if (g instanceof Function) {
        var f = Array(2);
        f[0] = e;
        f[1] = g;
        switch (b) {
        case 1:
            b = Ovoid.Input.onCTRInt;
            break;
        case 2:
            b = Ovoid.Input.onALTInt;
            break;
        case 3:
            b = Ovoid.Input.onSHFInt;
            break;
        case 4:
            b = Ovoid.Input.onLSUInt;
            break;
        case 5:
            b = Ovoid.Input.onRSUInt;
            break;
        default:
            b = Ovoid.Input.onInt
        }
        for (g = b[c].length; g--;)
            if (b[c][g][0] == e) {
                b[c][g] =
                    f;
                return
            }
        b[c].push(f)
    } else Ovoid.log(2, "Ovoid.Input.trigger", "Non-Function instance given as trigger function")
};
Ovoid.Input.grabNode = function (b) {
    Ovoid.Input.grabbedNode = b
};
Ovoid.Input.grabRelease = function () {
    Ovoid.Input.grabbedNode = null
};
Ovoid.Timer = {};
Ovoid.Timer.clock = 0;
Ovoid.Timer.quantum = 0;
Ovoid.Timer.framerate = 0;
Ovoid.Timer._timecurr = 0;
Ovoid.Timer._timelast = 0;
Ovoid.Timer._timeq = 0;
Ovoid.Timer._fcount = 0;
Ovoid.Timer._fcumul = 0;
Ovoid.Timer._lopfps = 0;
Ovoid.Timer.init = function () {
    Ovoid.log(3, "Ovoid.Timer", "initialization");
    Ovoid.Timer._timecurr = Ovoid.Timer._timelast = (new Date).getTime();
    return !0
};
Ovoid.Timer.update = function () {
    Ovoid.Timer.clock = (new Date).getTime();
    Ovoid.Timer._timecurr = Ovoid.Timer.clock;
    Ovoid.Timer._timeq = 0.001 * (Ovoid.Timer._timecurr - Ovoid.Timer._timelast);
    Ovoid.Timer._timelast = Ovoid.Timer.clock;
    if (0.5 < Ovoid.Timer._timeq) Ovoid.Timer._timeq = 0.01;
    Ovoid.Timer._fcount++;
    Ovoid.Timer._fcumul += Ovoid.Timer._timeq;
    if (0.5 < Ovoid.Timer._fcumul) Ovoid.Timer.framerate = Math.floor(Ovoid.Timer._fcount / Ovoid.Timer._fcumul), Ovoid.Timer.quantum = Ovoid.Timer._fcumul / Ovoid.Timer._fcount, Ovoid.Timer._lopfps =
        Ovoid.Timer.framerate, Ovoid.Timer._fcount = 0, Ovoid.Timer._fcumul = 0
};
Ovoid.Timer.wait = function (b) {
    for (var c = 0, e = (new Date).getTime(), g = e; c < b;) e = (new Date).getTime(), c += 0.001 * (e - g), g = e
};
Ovoid.Loader = {};
Ovoid.Loader.opt_drawWaitScreen = !0;
Ovoid.Loader.opt_foregroundColor = [0, 0, 0, 0.6];
Ovoid.Loader.opt_backgroundColor = [1, 1, 1, 1];
Ovoid.Loader.opt_fontmapSrc = "";
Ovoid.Loader.opt_backgroundSrc = "";
Ovoid.Loader.opt_iconsColor = [1, 1, 1, 0.6];
Ovoid.Loader.opt_iconsSize = [32, 32];
Ovoid.Loader.opt_iconscenesSrc = "";
Ovoid.Loader.opt_iconscenesPos = [330, 270];
Ovoid.Loader.opt_icontexturesSrc = "";
Ovoid.Loader.opt_icontexturesPos = [370, 270];
Ovoid.Loader.opt_iconaudiosSrc = "";
Ovoid.Loader.opt_iconaudiosPos = [405, 270];
Ovoid.Loader.opt_iconconfigSrc = "";
Ovoid.Loader.opt_iconconfigPos = [436, 270];
Ovoid.Loader.opt_loadcircleColor = [1, 1, 1, 0.5];
Ovoid.Loader.opt_loadcircleSrc = "";
Ovoid.Loader.opt_loadcircleSize = [64, 64];
Ovoid.Loader.opt_loadcirclePos = [400, 230];
Ovoid.Loader.opt_showPercentage = !0;
Ovoid.Loader.opt_percentageXys = [387, 224, 16];
Ovoid.Loader.opt_showTitle = !0;
Ovoid.Loader.opt_titleXys = [387, 224, 16];
Ovoid.Loader.opt_titleStr = "Loading please wait...";
Ovoid.Loader.opt_showDetails = !0;
Ovoid.Loader.opt_detailsXys = [387, 224, 16];
Ovoid.Loader._detailsStr = "";
Ovoid.Loader.opt_longwaitXys = [387, 224, 16];
Ovoid.Loader.opt_longwaitStr = "Heavy computing, please wait...";
Ovoid.Loader._heavyComput = !1;
Ovoid.Loader._bg = new Ovoid.Layer;
Ovoid.Loader._iconscn = new Ovoid.Layer;
Ovoid.Loader._icontex = new Ovoid.Layer;
Ovoid.Loader._iconaud = new Ovoid.Layer;
Ovoid.Loader._iconcgf = new Ovoid.Layer;
Ovoid.Loader._lcirclei = new Ovoid.Layer;
Ovoid.Loader._lcirclea = new Ovoid.Layer;
Ovoid.Loader._percent = new Ovoid.Text;
Ovoid.Loader._title = new Ovoid.Text;
Ovoid.Loader._details = new Ovoid.Text;
Ovoid.Loader._longwait = new Ovoid.Text;
Ovoid.Loader._fontmap = null;
Ovoid.Loader._loadstage = [!0, !1, !1, !1];
Ovoid.Loader._remains = [0, 0, 0, 0];
Ovoid.Loader._ntotal = 0;
Ovoid.Loader._ndone = 0;
Ovoid.Loader._nratio = 0;
Ovoid.Loader._stackscn = [];
Ovoid.Loader._stacktex = [];
Ovoid.Loader._stackaud = [];
Ovoid.Loader._stackgls = [];
Ovoid.Loader._obj = null;
Ovoid.Loader._item = null;
Ovoid.Loader.init = function () {
    Ovoid.log(3, "Ovoid.Loader", "initialization");
    if (0 == Ovoid.Loader._ntotal) return Ovoid.log(3, "Ovoid.Loader", "nothing to preload, skip initialization"), !0;
    if (!Ovoid.Loader.opt_drawWaitScreen) return !0;
    new Ovoid.Coord(Ovoid.Loader.opt_iconsSize);
    if (1 < Ovoid.Loader.opt_fontmapSrc.length) Ovoid.Loader._fontmap = new Ovoid.Texture, Ovoid.Loader._fontmap.loadSource(Ovoid.Loader.opt_fontmapSrc, 0, !0), Ovoid.Loader._percent.fontmap = Ovoid.Loader._fontmap, Ovoid.Loader._title.fontmap = Ovoid.Loader._fontmap;
    if (1 < Ovoid.Loader.opt_loadcircleSrc.length) Ovoid.Loader._lcirclei.bgTexture = new Ovoid.Texture, Ovoid.Loader._lcirclei.bgTexture.loadSource(Ovoid.Loader.opt_loadcircleSrc, 1, !0), Ovoid.Loader._lcirclei.setSize(Ovoid.Loader.opt_loadcircleSize[0], Ovoid.Loader.opt_loadcircleSize[1]), Ovoid.Loader._lcirclei.bgColor.setv(Ovoid.Loader.opt_loadcircleColor), Ovoid.Loader._lcirclei.moveXyz(-0.5 * Ovoid.Loader.opt_loadcircleSize[0], -0.5 * Ovoid.Loader.opt_loadcircleSize[1], 0), Ovoid.Loader._lcirclei.cachTransform(), Ovoid.Loader._lcirclei.setParent(Ovoid.Loader._lcirclea),
    Ovoid.Loader._lcirclea.moveXyz(Ovoid.Loader.opt_loadcirclePos[0], Ovoid.Loader.opt_loadcirclePos[1], 0), Ovoid.Loader._lcirclea.cachTransform(), Ovoid.Loader._lcirclea.cachLayer();
    if (1 < Ovoid.Loader.opt_backgroundSrc.length) Ovoid.Loader._bg.bgTexture = new Ovoid.Texture, Ovoid.Loader._bg.bgTexture.loadSource(Ovoid.Loader.opt_backgroundSrc, 0, !0);
    Ovoid.Loader._bg.bgColor.setv(Ovoid.Loader.opt_backgroundColor);
    Ovoid.Loader._bg.moveXyz(0, 0, 0);
    Ovoid.Loader._bg.size.set(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1],
        0);
    Ovoid.Loader._bg.cachTransform();
    Ovoid.Loader._bg.cachLayer();
    if (1 < Ovoid.Loader.opt_iconscenesSrc.length) Ovoid.Loader._iconscn.bgTexture = new Ovoid.Texture, Ovoid.Loader._iconscn.bgTexture.loadSource(Ovoid.Loader.opt_iconscenesSrc, 1, !0), Ovoid.Loader._iconscn.bgColor.setv(Ovoid.Loader.opt_iconsColor), Ovoid.Loader._iconscn.moveXyz(Ovoid.Loader.opt_iconscenesPos[0], Ovoid.Loader.opt_iconscenesPos[1], 0), Ovoid.Loader._iconscn.setSize(Ovoid.Loader.opt_iconsSize[0], Ovoid.Loader.opt_iconsSize[1]), Ovoid.Loader._iconscn.cachTransform(),
    Ovoid.Loader._iconscn.cachLayer();
    if (1 < Ovoid.Loader.opt_icontexturesSrc.length) Ovoid.Loader._icontex.bgTexture = new Ovoid.Texture, Ovoid.Loader._icontex.bgTexture.loadSource(Ovoid.Loader.opt_icontexturesSrc, 1, !0), Ovoid.Loader._icontex.bgColor.setv(Ovoid.Loader.opt_iconsColor), Ovoid.Loader._icontex.moveXyz(Ovoid.Loader.opt_icontexturesPos[0], Ovoid.Loader.opt_icontexturesPos[1], 0), Ovoid.Loader._icontex.setSize(Ovoid.Loader.opt_iconsSize[0], Ovoid.Loader.opt_iconsSize[1]), Ovoid.Loader._icontex.cachTransform(),
    Ovoid.Loader._icontex.cachLayer();
    if (1 < Ovoid.Loader.opt_iconaudiosSrc.length) Ovoid.Loader._iconaud.bgTexture = new Ovoid.Texture, Ovoid.Loader._iconaud.bgTexture.loadSource(Ovoid.Loader.opt_iconaudiosSrc, 1, !0), Ovoid.Loader._iconaud.bgColor.setv(Ovoid.Loader.opt_iconsColor), Ovoid.Loader._iconaud.moveXyz(Ovoid.Loader.opt_iconaudiosPos[0], Ovoid.Loader.opt_iconaudiosPos[1], 0), Ovoid.Loader._iconaud.setSize(Ovoid.Loader.opt_iconsSize[0], Ovoid.Loader.opt_iconsSize[1]), Ovoid.Loader._iconaud.cachTransform(),
    Ovoid.Loader._iconaud.cachLayer();
    if (1 < Ovoid.Loader.opt_iconconfigSrc.length) Ovoid.Loader._iconcgf.bgTexture = new Ovoid.Texture, Ovoid.Loader._iconcgf.bgTexture.loadSource(Ovoid.Loader.opt_iconconfigSrc, 1, !0), Ovoid.Loader._iconcgf.bgColor.setv(Ovoid.Loader.opt_iconsColor), Ovoid.Loader._iconcgf.moveXyz(Ovoid.Loader.opt_iconconfigPos[0], Ovoid.Loader.opt_iconconfigPos[1], 0), Ovoid.Loader._iconcgf.setSize(Ovoid.Loader.opt_iconsSize[0], Ovoid.Loader.opt_iconsSize[1]), Ovoid.Loader._iconcgf.cachTransform(),
    Ovoid.Loader._iconcgf.cachLayer();
    Ovoid.Loader._percent.setFormat(Ovoid.Loader.opt_percentageXys[2], 0.5, 1);
    Ovoid.Loader._percent.fgColor.setv(Ovoid.Loader.opt_foregroundColor);
    Ovoid.Loader._percent.moveXyz(Ovoid.Loader.opt_percentageXys[0] - 0.5 * Ovoid.Loader._percent.getWidth(), Ovoid.Loader.opt_percentageXys[1], 0);
    Ovoid.Loader._percent.cachTransform();
    Ovoid.Loader._percent.cachLayer();
    Ovoid.Loader._title.string = Ovoid.Loader.opt_titleStr;
    Ovoid.Loader._title.setFormat(Ovoid.Loader.opt_titleXys[2], 0.5,
        1);
    Ovoid.Loader._title.fgColor.setv(Ovoid.Loader.opt_foregroundColor);
    Ovoid.Loader._title.moveXyz(Ovoid.Loader.opt_titleXys[0] - 0.5 * Ovoid.Loader._title.getWidth(), Ovoid.Loader.opt_titleXys[1], 0);
    Ovoid.Loader._title.cachTransform();
    Ovoid.Loader._title.cachLayer();
    Ovoid.Loader._details.string = "Scenes...";
    Ovoid.Loader._details.setFormat(Ovoid.Loader.opt_detailsXys[2], 0.5, 1);
    Ovoid.Loader._details.fgColor.setv(Ovoid.Loader.opt_foregroundColor);
    Ovoid.Loader._details.moveXyz(Ovoid.Loader.opt_detailsXys[0] -
        0.5 * Ovoid.Loader._details.getWidth(), Ovoid.Loader.opt_detailsXys[1], 0);
    Ovoid.Loader._details.cachTransform();
    Ovoid.Loader._details.cachLayer();
    Ovoid.Loader._longwait.string = Ovoid.Loader.opt_longwaitStr;
    Ovoid.Loader._longwait.setFormat(Ovoid.Loader.opt_longwaitXys[2], 0.5, 1);
    Ovoid.Loader._longwait.fgColor.setv(Ovoid.Loader.opt_foregroundColor);
    Ovoid.Loader._longwait.moveXyz(Ovoid.Loader.opt_longwaitXys[0] - 0.5 * Ovoid.Loader._longwait.getWidth(), Ovoid.Loader.opt_longwaitXys[1], 0);
    Ovoid.Loader._longwait.cachTransform();
    Ovoid.Loader._longwait.cachLayer();
    return Ovoid._logGlerror("Ovoid.Loader.init") ? !1 : !0
};
Ovoid.Loader._drawStep = function () {
    Ovoid.gl.clear(Ovoid.gl.COLOR_BUFFER_BIT | Ovoid.gl.DEPTH_BUFFER_BIT);
    Ovoid.Drawer.switchPipe(3, 0);
    Ovoid.Drawer.model(Ovoid.Loader._bg.layerMatrix.m);
    Ovoid.Drawer.layer(Ovoid.Loader._bg);
    Ovoid.Loader._iconscn.bgColor.setv(Ovoid.Loader.opt_iconsColor);
    Ovoid.Loader._loadstage[0] || (Ovoid.Loader._iconscn.bgColor.v[3] = 0.1);
    Ovoid.Drawer.model(Ovoid.Loader._iconscn.layerMatrix.m);
    Ovoid.Drawer.layer(Ovoid.Loader._iconscn);
    Ovoid.Loader._icontex.bgColor.setv(Ovoid.Loader.opt_iconsColor);
    Ovoid.Loader._loadstage[1] || (Ovoid.Loader._icontex.bgColor.v[3] = 0.1);
    Ovoid.Drawer.model(Ovoid.Loader._icontex.layerMatrix.m);
    Ovoid.Drawer.layer(Ovoid.Loader._icontex);
    Ovoid.Loader._iconaud.bgColor.setv(Ovoid.Loader.opt_iconsColor);
    Ovoid.Loader._loadstage[2] || (Ovoid.Loader._iconaud.bgColor.v[3] = 0.1);
    Ovoid.Drawer.model(Ovoid.Loader._iconaud.layerMatrix.m);
    Ovoid.Drawer.layer(Ovoid.Loader._iconaud);
    Ovoid.Loader._iconcgf.bgColor.setv(Ovoid.Loader.opt_iconsColor);
    Ovoid.Loader._loadstage[3] || (Ovoid.Loader._iconcgf.bgColor.v[3] =
        0.1);
    Ovoid.Drawer.model(Ovoid.Loader._iconcgf.layerMatrix.m);
    Ovoid.Drawer.layer(Ovoid.Loader._iconcgf);
    Ovoid.Loader._lcirclei.bgTexture && (Ovoid.Loader._lcirclea.rotateXyz(0, 0, 0.2, Ovoid.WORLD, Ovoid.RELATIVE), Ovoid.Loader._lcirclea.cachTransform(), Ovoid.Loader._lcirclei.cachTransform(), Ovoid.Loader._lcirclei.cachLayer(), Ovoid.Drawer.model(Ovoid.Loader._lcirclei.layerMatrix.m), Ovoid.Drawer.layer(Ovoid.Loader._lcirclei));
    Ovoid.Drawer.switchPipe(4, 0);
    if (Ovoid.Loader.opt_showPercentage) Ovoid.Loader._percent.string =
        Math.floor(Ovoid.Loader._nratio).toString() + "%", Ovoid.Loader._percent.moveXyz(Ovoid.Loader.opt_percentageXys[0] - 0.5 * Ovoid.Loader._percent.getWidth(), Ovoid.Loader.opt_percentageXys[1], 0, 0, 1), Ovoid.Loader._percent.cachTransform(), Ovoid.Loader._percent.cachLayer(), Ovoid.Drawer.model(Ovoid.Loader._percent.layerMatrix.m), Ovoid.Drawer.text(Ovoid.Loader._percent);
    Ovoid.Loader.opt_showTitle && (Ovoid.Drawer.drawText(Ovoid.Loader._title), Ovoid.Drawer.model(Ovoid.Loader._title.layerMatrix.m), Ovoid.Drawer.text(Ovoid.Loader._title));
    if (Ovoid.Loader.opt_showDetails) Ovoid.Loader._details.string = Ovoid.Loader._detailsStr, Ovoid.Loader._details.moveXyz(Ovoid.Loader.opt_detailsXys[0] - 0.5 * Ovoid.Loader._details.getWidth(), Ovoid.Loader.opt_detailsXys[1], 0, 0, 1), Ovoid.Loader._details.cachTransform(), Ovoid.Loader._details.cachLayer(), Ovoid.Drawer.model(Ovoid.Loader._details.layerMatrix.m), Ovoid.Drawer.text(Ovoid.Loader._details);
    Ovoid.Loader._heavyComput && (Ovoid.Drawer.model(Ovoid.Loader._longwait.layerMatrix.m), Ovoid.Drawer.text(Ovoid.Loader._longwait));
    Ovoid.gl.getError()
};
Ovoid.Loader._loadStep = function () {
    if (Ovoid.Loader._loadstage[3] && 0 != Ovoid.Loader._remains[3])
        if (null != Ovoid.Loader._obj) {
            if (0 != Ovoid.Loader._obj.loadStatus) {
                if (1 == Ovoid.Loader._obj.loadStatus && Ovoid.Loader._obj.linkWrap()) {
                    var b = Ovoid.Drawer.addShader(Ovoid.Loader._obj); - 1 != Ovoid.Loader._item[0] && Ovoid.Drawer.plugShader(Ovoid.Loader._item[0], Ovoid.Loader._item[5], b)
                }
                Ovoid.Loader._ndone++;
                Ovoid.Loader._obj = null;
                Ovoid.Loader._remains[3]--
            }
        } else if (0 < Ovoid.Loader._stackgls.length) Ovoid.Loader._item = Ovoid.Loader._stackgls.pop(),
    Ovoid.Loader._obj = new Ovoid.Shader(Ovoid.Loader._item[4]), Ovoid.Loader._obj.loadSource(Ovoid.Loader._item[1], Ovoid.Loader._item[2], Ovoid.Loader._item[3], !0), Ovoid.Loader._detailsStr = "Shader...(" + Ovoid.Loader._obj.name + ")";
    if (Ovoid.Loader._loadstage[2])
        if (0 != Ovoid.Loader._remains[2])
            if (null != Ovoid.Loader._obj) {
                if (0 != Ovoid.Loader._obj.loadStatus) Ovoid.Loader._ndone++, Ovoid.Loader._obj = null, Ovoid.Loader._remains[2]--
            } else {
                if (0 < Ovoid.Loader._stackaud.length) b = Ovoid.Loader._stackaud.pop(), Ovoid.Loader._obj =
                    b[0], Ovoid.Loader._obj.loadSource(Ovoid.Loader._obj.url), Ovoid.Loader._detailsStr = "Audio...(" + Ovoid.Loader._obj.url + ")"
            } else if (!Ovoid.Loader._loadstage[3]) Ovoid.Loader._loadstage[3] = !0, Ovoid.Loader._detailsStr = "Shaders...";
    if (Ovoid.Loader._loadstage[1])
        if (0 != Ovoid.Loader._remains[1])
            if (null != Ovoid.Loader._obj) {
                if (0 != Ovoid.Loader._obj.loadStatus) Ovoid.Loader._ndone++, Ovoid.Loader._obj = null, Ovoid.Loader._remains[1]--
            } else {
                if (0 < Ovoid.Loader._stacktex.length) b = Ovoid.Loader._stacktex.pop(), Ovoid.Loader._obj =
                    b[0], Ovoid.Loader._obj.loadSource(Ovoid.Loader._obj.url, b[2]), Ovoid.Loader._detailsStr = "Texture..(" + Ovoid.Loader._obj.url + ")"
            } else if (!Ovoid.Loader._loadstage[2]) Ovoid.Loader._loadstage[2] = !0, Ovoid.Loader._detailsStr = "Sounds...";
    if (0 != Ovoid.Loader._remains[0])
        if (null != Ovoid.Loader._obj) {
            if (0 != Ovoid.Loader._obj.loadStatus) {
                if (1 == Ovoid.Loader._obj.loadStatus) {
                    switch (Ovoid.Loader._item[0]) {
                    case Ovoid.OJSON:
                        Ovoid.Loader._obj.importScene(Ovoid.Loader._item[3]);
                        break;
                    default:
                        Ovoid.Loader._obj.importDae(Ovoid.Loader._item[2],
                            Ovoid.Loader._item[3], Ovoid.Loader._item[4], Ovoid.Loader._item[5]), Ovoid.Loader._heavyComput = !1
                    }
                    for (b = Ovoid.Loader._item[3].texture.length; b--;) Ovoid.Loader.includeTexture(Ovoid.Loader._item[3].texture[b], 1);
                    for (b = Ovoid.Loader._item[3].audio.length; b--;) Ovoid.Loader.includeAudio(Ovoid.Loader._item[3].audio[b])
                }
                Ovoid.Loader._ndone++;
                Ovoid.Loader._obj = null;
                Ovoid.Loader._remains[0]--
            }
        } else {
            if (0 < Ovoid.Loader._stackscn.length) {
                Ovoid.Loader._item = Ovoid.Loader._stackscn.pop();
                switch (Ovoid.Loader._item[0]) {
                case Ovoid.OJSON:
                    Ovoid.Loader._obj =
                        new Ovoid.Ojson;
                    break;
                default:
                    Ovoid.Loader._obj = new Ovoid.Collada, Ovoid.Loader._heavyComput = !0
                }
                Ovoid.Loader._obj.loadSource(Ovoid.Loader._item[1], !0);
                Ovoid.Loader._detailsStr = "Scene...(" + Ovoid.Loader._obj.url + ")"
            }
        } else if (!Ovoid.Loader._loadstage[1]) Ovoid.Loader._loadstage[1] = !0, Ovoid.Loader._detailsStr = "Textures...";
    Ovoid.Loader._nratio = 100 * (Ovoid.Loader._ndone / Ovoid.Loader._ntotal);
    Ovoid._logGlerror("Ovoid.Loader._loadStep") && Ovoid.error(4, "Loading loop encounter WebGL error");
    Ovoid.Loader._ndone <
        Ovoid.Loader._ntotal ? window.requestAnimFrame(Ovoid.Loader._loadingLoop) : (Ovoid.log(3, "Ovoid.Loader", "loading done"), Ovoid.Loader._loadingDone())
};
Ovoid.Loader._loadingDone = function () {
    Ovoid._hasError() ? Ovoid.error(5, "Loader has encountered errors") : (Ovoid.log(3, "Ovoid.Loader", "loading loop duration: " + 0.001 * ((new Date).getTime() - Ovoid.Loader._tcnt) + "s"), Ovoid.Frame.setMode(Ovoid.Frame.opt_frameMode), Ovoid.gl.viewport(0, 0, Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]), Ovoid.log(3, "Ovoid.Loader", "run onload()"), Ovoid._mainload() && (Ovoid.log(3, "Ovoid.Loader", "jump to main loop"), Ovoid._mainloop()))
};
Ovoid.Loader._loadingLoop = function () {
    Ovoid.Loader._drawStep();
    Ovoid.Loader._loadStep()
};
Ovoid.Loader._launch = function () {
    Ovoid.Loader._tcnt = (new Date).getTime();
    if (Ovoid.Loader._ntotal)
        if (Ovoid.log(3, "Ovoid.Loader", "entering loading loop"), Ovoid.Loader.opt_drawWaitScreen) Ovoid.Frame.setMode(0), Ovoid.gl.viewport(0, 0, Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1]), Ovoid.Drawer.switchPipe(4, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.switchPipe(3, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.switchDepth(0), Ovoid.Drawer.switchBlend(3), Ovoid.Loader._loadingLoop();
        else {
            for (var b =
                0; b < Ovoid.Loader._stackscn.length; b++) {
                Ovoid.Loader._item = Ovoid.Loader._stackscn[b];
                switch (Ovoid.Loader._item[0]) {
                case Ovoid.OJSON:
                    Ovoid.Loader._obj = new Ovoid.Ojson;
                    Ovoid.Loader._obj.loadSource(Ovoid.Loader._item[1], !1);
                    Ovoid.Loader._obj.importScene(Ovoid.Loader._item[3]);
                    break;
                default:
                    Ovoid.Loader._obj = new Ovoid.Collada, Ovoid.Loader._obj.loadSource(Ovoid.Loader._item[1], !1), Ovoid.Loader._obj.importDae(Ovoid.Loader._item[2], Ovoid.Loader._item[3], Ovoid.Loader._item[4], Ovoid.Loader._item[5])
                }
                for (var c =
                    Ovoid.Loader._item[3].texture.length; c--;) Ovoid.Loader.includeTexture(Ovoid.Loader._item[3].texture[c], 1);
                for (c = Ovoid.Loader._item[3].audio.length; c--;) Ovoid.Loader.includeAudio(Ovoid.Loader._item[3].audio[c])
            }
            for (b = 0; b < Ovoid.Loader._stacktex.length; b++) Ovoid.Loader._stacktex[b][0].loadSource(Ovoid.Loader._stacktex[b][0].url, Ovoid.Loader._stacktex[b][1]);
            for (b = 0; b < Ovoid.Loader._stackaud.length; b++) Ovoid.Loader._stackaud[b][0].loadSource(Ovoid.Loader._stackaud[b][0].url);
            for (b = 0; b < Ovoid.Loader._stackgls.length; b++) Ovoid.Loader._item =
                Ovoid.Loader._stackgls[b], Ovoid.Loader._obj = new Ovoid.Shader(Ovoid.Loader._item[4]), Ovoid.Loader._obj.loadSource(Ovoid.Loader._item[1], Ovoid.Loader._item[2], Ovoid.Loader._item[3], !1), Ovoid.Loader._obj.linkWrap() && (c = Ovoid.Drawer.addShader(Ovoid.Loader._obj), -1 != Ovoid.Loader._item[0] && Ovoid.Drawer.plugShader(Ovoid.Loader._item[0], c));
            Ovoid.Loader._loadingDone()
        } else Ovoid.log(3, "Ovoid.Loader", "nothing to preload, skip loading loop"), Ovoid.Loader._loadingDone()
};
Ovoid.Loader.includeOjson = function (b, c) {
    for (var e = 0; e < Ovoid.Loader._stackscn.length; e++)
        if (Ovoid.Loader._stackscn[e][1] == b && Ovoid.Loader._stackscn[e][3] == c) return;
    void 0 != Ovoid.Ojson ? (Ovoid.Loader._stackscn.unshift(Array(6)), Ovoid.Loader._stackscn[0][0] = Ovoid.OJSON, Ovoid.Loader._stackscn[0][1] = b, Ovoid.Loader._stackscn[0][3] = c, Ovoid.Loader._ntotal++, Ovoid.Loader._remains[0]++) : Ovoid.opt_disableAlerts || alert("OvoiD.JS - Loader alert.\n\nIncluded '" + b + "' scene file will not be imported. The OJSON importation module is not loaded.\n\nYou should load the OvoiD's OJSON importation module (ojson.js) before including COLLADA contents.\n\nTo avoid this alert, set the Ovoid.opt_disableAlerts option to true in the config.js file.")
};
Ovoid.Loader.includeCollada = function (b, c, e, g, f) {
    for (var h = 0; h < Ovoid.Loader._stackscn.length; h++)
        if (Ovoid.Loader._stackscn[h][1] == b && Ovoid.Loader._stackscn[h][2] == c && Ovoid.Loader._stackscn[h][4] == g && Ovoid.Loader._stackscn[h][5] == f && Ovoid.Loader._stackscn[h][3] == e) return;
    void 0 != Ovoid.Collada ? (Ovoid.Loader._stackscn.unshift(Array(6)), Ovoid.Loader._stackscn[0][0] = Ovoid.COLLADA, Ovoid.Loader._stackscn[0][1] = b, Ovoid.Loader._stackscn[0][2] = c, Ovoid.Loader._stackscn[0][3] = e, Ovoid.Loader._stackscn[0][4] = g,
        Ovoid.Loader._stackscn[0][5] = f, Ovoid.Loader._ntotal++, Ovoid.Loader._remains[0]++) : Ovoid.opt_disableAlerts || alert("OvoiD.JS - Loader alert.\n\nIncluded '" + b + "' scene file will not be imported. The COLLADA importation module is not loaded.\n\nYou should load the OvoiD's COLLADA importation module (collada.js) before including COLLADA contents.\n\nTo avoid this alert, set the Ovoid.opt_disableAlerts option to true in the config.js file.")
};
Ovoid.Loader.includeTexture = function (b, c) {
    for (var e = 0; e < Ovoid.Loader._stacktex.length; e++)
        if (Ovoid.Loader._stacktex[e][0] == b) return;
    e = Ovoid.Loader._stacktex.length;
    Ovoid.Loader._stacktex.push(Array(2));
    Ovoid.Loader._stacktex[e][0] = b;
    Ovoid.Loader._stacktex[e][2] = c;
    Ovoid.Loader._ntotal++;
    Ovoid.Loader._remains[1]++
};
Ovoid.Loader.includeAudio = function (b) {
    for (var c = 0; c < Ovoid.Loader._stackaud.length; c++)
        if (Ovoid.Loader._stackaud[c][0] == b) return;
    c = Ovoid.Loader._stackaud.length;
    Ovoid.Loader._stackaud.push(Array(2));
    Ovoid.Loader._stackaud[c][0] = b;
    Ovoid.Loader._ntotal++;
    Ovoid.Loader._remains[2]++
};
Ovoid.Loader.includeShader = function (b, c, e, g, f, h) {
    for (var l = 0; l < Ovoid.Loader._stackgls.length; l++)
        if (Ovoid.Loader._stackgls[l][0] == b && Ovoid.Loader._stackgls[l][1] == e && Ovoid.Loader._stackgls[l][2] == g && Ovoid.Loader._stackgls[l][3] == f && Ovoid.Loader._stackgls[l][5] == c) return;
    l = Ovoid.Loader._stackgls.length;
    Ovoid.Loader._stackgls.push(Array(4));
    Ovoid.Loader._stackgls[l][0] = b;
    Ovoid.Loader._stackgls[l][1] = e;
    Ovoid.Loader._stackgls[l][2] = g;
    Ovoid.Loader._stackgls[l][3] = f;
    Ovoid.Loader._stackgls[l][4] = void 0 ==
        h ? e + "|" + g : h;
    Ovoid.Loader._stackgls[l][5] = c;
    Ovoid.Loader._ntotal++;
    Ovoid.Loader._remains[3]++
};
Ovoid.opt_libPath = "ovoid.js/";
Ovoid.opt_alpha = !1;
Ovoid.opt_preserveDrawingBuffer = !0;
Ovoid.opt_antialias = !0;
Ovoid.opt_stencil = !0;
Ovoid.opt_premultipliedAlpha = !0;
Ovoid.opt_debugMode = !1;
Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "lib/maps/font_DroidSansMono.png";
Ovoid.opt_defaultFontmapFilter = 0;
Ovoid.opt_disableAlerts = !1;
Ovoid.opt_showHud = !0;
Ovoid.opt_showDebug = !1;
Ovoid.opt_gravity = [0, -0.98, 0];
Ovoid.rscene = new Ovoid.Scene("null");
Ovoid._hudbg = new Ovoid.Layer;
Ovoid._dbgbg = new Ovoid.Layer;
Ovoid._dbg = [];
for (var i = 0; 8 > i; i++) Ovoid._dbg[i] = new Ovoid.Text;
Ovoid.gl = null;
Ovoid.al = null;
Ovoid._modules = [];
Ovoid.init = function (b) {
    if (Ovoid._lfatal) return !1;
    Ovoid.log(3, "Ovoid.init", "Application start");
    Ovoid.opt_debugMode && Ovoid.log(2, "Ovoid.init", "Debug mode is enabled, external contents will be redownloaded.");
    if (window.WebGLRenderingContext) {
        var c = {
            alpha: Ovoid.opt_alpha,
            preserveDrawingBuffer: Ovoid.opt_preserveDrawingBuffer,
            antialias: Ovoid.opt_antialias,
            stencil: Ovoid.opt_stencil,
            premultipliedAlpha: Ovoid.opt_premultipliedAlpha
        }, e = (new Date).getTime(),
            g = ["webgl", "experimental-webgl"];
        if (Ovoid.Frame.init(b)) {
            Ovoid.log(3,
                "Ovoid.init", "create WebGL context");
            for (b = 0; b < g.length; b++) try {
                if (Ovoid.gl = Ovoid.Frame.canvas.getContext(g[b], c), Ovoid.gl) break
            } catch (f) {
                Ovoid.log(1, "Ovoid.init", "getContext 'webgl' error : " + f);
                Ovoid.error(2, "WebGL context 'webgl' creation exception");
                return
            }
            if (Ovoid.gl) {
                Ovoid.log(3, "Ovoid.init", "WebGL context created in: " + 0.001 * ((new Date).getTime() - e) + "s");
                Ovoid.log(3, "Ovoid.init", "Search for suitable Audio API.");
                if (window.AudioContext) try {
                    Ovoid.log(3, "Ovoid.init", "Using Webkit Audio API."),
                    Ovoid.al = new AudioContext, Ovoid.al.type = Ovoid.WEBKIT_AUDIO_API
                } catch (h) {
                    Ovoid.log(2, "Ovoid.init", "new AudioContext error : " + h)
                } else if (window.webkitAudioContext) try {
                    Ovoid.log(3, "Ovoid.init", "Using Webkit Audio API."), Ovoid.al = new webkitAudioContext, Ovoid.al.type = Ovoid.WEBKIT_AUDIO_API
                } catch (l) {
                    Ovoid.log(2, "Ovoid.init", "new webkitAudioContext error : " + l)
                } else Ovoid.al = new Audio, Ovoid.al ? void 0 != Ovoid.al.mozWriteAudio ? (Ovoid.log(2, "Ovoid.init", "Using Moz Audio Data API: Spatial sound not available."),
                    Ovoid.al.type = Ovoid.MOZ_AUDIO_API) : (Ovoid.log(2, "Ovoid.init", "Using HTML5 Audio Object: Spatial sound not available."), Ovoid.al.type = Ovoid.HTML5_AUDIO) : (Ovoid.al = {}, Ovoid.al.type = 0, Ovoid.log(2, "Ovoid.init", "No suitable Audio API found."));
                Ovoid.log(3, "Ovoid.init", "initilizing classes");
                try {
                    Ovoid.Drawer.init() ? Ovoid.Input.init() ? Ovoid.Timer.init() ? Ovoid.Queuer.init() ? Ovoid.Loader.init() ? void 0 != Ovoid.Solver && !Ovoid.Solver.init() ? (Ovoid.log(0, "Ovoid.init", "Ovoid.Solver initialization error"), Ovoid.error(4,
                        "Solver class initialization error")) : (Ovoid._hudbg.setBgColor(0.6, 0.6, 0.6, 1), Ovoid._hudbg.setSize(Ovoid.Frame.size.v[0], 17, 1), Ovoid._dbg[7].setFormat(16, 0.5, 1), Ovoid._dbg[7].moveXyz(4, 0, 0), Ovoid._dbg[7].setFgColor(1, 1, 1, 0.6), Ovoid._dbgbg.setBgColor(0, 0, 0, 0.5), Ovoid._dbgbg.setSize(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1] - 17, 1), Ovoid._dbgbg.moveXyz(0, 16, 0), Ovoid._dbg[0].setFormat(16, 0.5, 1), Ovoid._dbg[0].moveXyz(1, 20, 0), Ovoid._dbg[0].setFgColor(1, 1, 1, 1), Ovoid._dbg[1].setFormat(16, 0.5, 1), Ovoid._dbg[1].moveXyz(250,
                        20, 0), Ovoid._dbg[1].setFgColor(1, 1, 1, 1), Ovoid._dbg[2].setFormat(16, 0.5, 1), Ovoid._dbg[2].moveXyz(470, 20, 0), Ovoid._dbg[2].setFgColor(1, 1, 1, 1), Ovoid._dbg[3].setFormat(16, 0.5, 1), Ovoid._dbg[3].moveXyz(720, 20, 0), Ovoid._dbg[3].setFgColor(1, 1, 1, 1), Ovoid._dbg[4].setFormat(16, 0.5, 1), Ovoid._dbg[4].moveXyz(1, 216, 0), Ovoid._dbg[4].setFgColor(1, 1, 1, 1), Ovoid._dbg[5].setFormat(16, 0.5, 1), Ovoid._dbg[5].moveXyz(300, 216, 0), Ovoid._dbg[5].setFgColor(1, 1, 1, 1), Ovoid._dbg[6].setFormat(16, 0.5, 1), Ovoid._dbg[6].moveXyz(600, 216,
                        0), Ovoid._dbg[6].setFgColor(1, 1, 1, 1), Ovoid._dbg[0].cachTransform(), Ovoid._dbg[0].cachLayer(), Ovoid._dbg[1].cachTransform(), Ovoid._dbg[1].cachLayer(), Ovoid._dbg[2].cachTransform(), Ovoid._dbg[2].cachLayer(), Ovoid._dbg[3].cachTransform(), Ovoid._dbg[3].cachLayer(), Ovoid._dbg[4].cachTransform(), Ovoid._dbg[4].cachLayer(), Ovoid._dbg[5].cachTransform(), Ovoid._dbg[5].cachLayer(), Ovoid._dbg[6].cachTransform(), Ovoid._dbg[6].cachLayer(), Ovoid.Loader._launch()) : (Ovoid.log(0, "Ovoid.init", "Ovoid.Loader initialization error"),
                        Ovoid.error(4, "Loader class initialization error")) : (Ovoid.log(0, "Ovoid.init", "Ovoid.Queuer initialization error"), Ovoid.error(4, "Scener class initialization error")) : (Ovoid.log(0, "Ovoid.init", "Ovoid.Timer initialization error"), Ovoid.error(4, "Timer class initialization error")) : (Ovoid.log(0, "Ovoid.init", "Ovoid.Input initialization error"), Ovoid.error(4, "Input class initialization error")) : (Ovoid.log(0, "Ovoid.init", "Ovoid.Drawer initialization error"), Ovoid.error(4, "Drawer class initialization error"))
                } catch (m) {
                    Ovoid.log(0,
                        "Ovoid.init", "(Exception) " + m.stack), Ovoid.error(4, "Initialization Exception thrown")
                }
            } else Ovoid.log(0, "Ovoid.init", "WebGL context not found"), Ovoid.error(3, "Unable to find a suitable WebGL context")
        } else Ovoid.log(0, "Ovoid.init", "Ovoid.Frame initialization error"), Ovoid.error(4, "Frame class initialization error")
    } else Ovoid.log(0, "Ovoid.init", "Browser does not support OpenGL ES / WebGL"), Ovoid.error(1, "WebGLRenderingContext is null")
};
Ovoid.onload = function () {};
Ovoid.onloop = function () {};
Ovoid.ondraw = Ovoid.Drawer.drawQueue;
Ovoid._hasError = function () {
    return 0 != Ovoid._lerror
};
Ovoid._hasWarning = function () {
    return 0 != Ovoid._lwarning
};
Ovoid.getLog = function () {
    return Ovoid._log
};
Ovoid._clearGlerror = function () {
    Ovoid.gl.getError()
};
Ovoid._hasGlerror = function () {
    Ovoid._glerror = Ovoid.gl.getError();
    return Ovoid._glerror ? !0 : !1
};
Ovoid._getGlerror = function () {
    switch (Ovoid._glerror) {
    case 0:
        return null;
    case 1280:
        return "GL_INVALID_ENUM";
    case 1281:
        return "GL_INVALID_VALUE";
    case 1282:
        return "GL_INVALID_OPERATION";
    case 1283:
        return "GL_STACK_OVERFLOW";
    case 1284:
        return "GL_STACK_UNDERFLOW";
    case 1285:
        return "GL_OUT_OF_MEMORY"
    }
};
Ovoid._logGlerror = function (b) {
    return Ovoid._hasGlerror() ? (Ovoid.log(1, b, " Erreur WebGL: " + Ovoid._getGlerror()), !0) : !1
};
Ovoid._mainload = function () {
    var b = (new Date).getTime();
    try {
        Ovoid.onload()
    } catch (c) {
        return Ovoid.log(0, "Ovoid.onload", "(Exception) " + c.stack), Ovoid.error(8, "Main onload Exception thrown"), !1
    }
    Ovoid.log(3, "Ovoid.onload", "executed in: " + 0.001 * ((new Date).getTime() - b) + "s");
    return !0
};
Ovoid._mainloop = function () {
    try {
        Ovoid.Queuer.reset();
        Ovoid.Queuer.queueScene(Ovoid.rscene);
        void 0 != Ovoid.Solver && Ovoid.Solver.solveQueue();
        Ovoid.onloop();
        Ovoid.ondraw();
        if (Ovoid.opt_showHud && (Ovoid.Drawer.switchPipe(4, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.switchPipe(3, 0), Ovoid.Drawer.screen(Ovoid.Frame.matrix), Ovoid.Drawer.switchDepth(0), Ovoid.Drawer.switchBlend(3), Ovoid._hudbg.setSize(Ovoid.Frame.size.v[0], 17, 1), Ovoid._dbg[7].string = Ovoid.Debug.Sumary(), Ovoid._hudbg.cachTransform(),
            Ovoid._hudbg.cachLayer(), Ovoid.Drawer.model(Ovoid._hudbg.layerMatrix.m), Ovoid.Drawer.layer(Ovoid._hudbg), Ovoid.Drawer.switchPipe(4, 0), Ovoid.Drawer.model(Ovoid._dbg[7].layerMatrix.m), Ovoid.Drawer.text(Ovoid._dbg[7]), Ovoid.opt_showDebug)) {
            Ovoid._dbgbg.setSize(Ovoid.Frame.size.v[0], Ovoid.Frame.size.v[1] - 17, 1);
            Ovoid._dbgbg.cachTransform();
            Ovoid._dbgbg.cachLayer();
            if (Ovoid.Input.mouseOverUid) {
                var b = Ovoid.rscene.search(Ovoid.Input.mouseOverUid);
                if (b) Ovoid._dbg[5].string = Ovoid.Debug.Node(b) + "\n", Ovoid._dbg[5].string +=
                    Ovoid.Debug.Transform(b, !0) + "\n", b.shape && (Ovoid._dbg[5].string += Ovoid.Debug.Body(b) + "\n", b.shape.type & Ovoid.MESH && (Ovoid._dbg[5].string += Ovoid.Debug.Mesh(b.shape, !0)), b.shape.type & Ovoid.SKIN && b.shape.mesh && (Ovoid._dbg[5].string += Ovoid.Debug.Mesh(b.shape.mesh, !0))), b.type & Ovoid.LAYER && (Ovoid._dbg[5].string += Ovoid.Debug.Layer(b, !1)), Ovoid._dbg[6].string = Ovoid.Debug.DependTree(b)
            } else Ovoid._dbg[5].string = "", Ovoid._dbg[6].string = "";
            Ovoid._dbg[0].string = Ovoid.Debug.Drawer();
            Ovoid._dbg[1].string = Ovoid.Debug.Queuer();
            Ovoid._dbg[2].string = Ovoid.Debug.Input();
            Ovoid._dbg[3].string = Ovoid.Debug.Timer() + "\n";
            Ovoid._dbg[3].string += Ovoid.Debug.Frame();
            Ovoid._dbg[4].string = Ovoid.Debug.WorldGraph(Ovoid.rscene);
            Ovoid.Drawer.switchPipe(3, 0);
            Ovoid.Drawer.model(Ovoid._dbgbg.layerMatrix.m);
            Ovoid.Drawer.layer(Ovoid._dbgbg);
            Ovoid.Drawer.switchPipe(4, 0);
            for (b = 0; 7 > b; b++) Ovoid.Drawer.model(Ovoid._dbg[b].layerMatrix.m), Ovoid.Drawer.text(Ovoid._dbg[b])
        }
        Ovoid.Input.update();
        Ovoid.Frame.update();
        Ovoid.Timer.update();
        window.requestAnimFrame(Ovoid._mainloop)
    } catch (c) {
        Ovoid.log(0,
            "Ovoid.onloop", "(Exception) " + c.stack), Ovoid.error(7, "Main loop Exception thrown")
    }
};
Ovoid.includeOjsScene = function (b, c) {
    Ovoid.Loader.includeOjson(b, c)
};
Ovoid.includeDaeScene = function (b, c, e, g, f) {
    c || (c = Ovoid.DAE_ALL_NODES | Ovoid.DAE_CREATE_TRACK | Ovoid.DAE_FORCE_CSPLINE | Ovoid.DAE_MERGE_DEPENDENCIES | Ovoid.DAE_OPTIMIZE_ALL | Ovoid.DAE_CONVERT_UPAXIS, Ovoid.log(3, "Ovoid.includeDaeScene", "null options, use default."));
    Ovoid.Loader.includeCollada(b, c, e, g, f)
};
Ovoid.includeDaeAnimation = function (b, c, e, g) {
    Ovoid.Loader.includeCollada(b, Ovoid.DAE_ANIMATIONS | Ovoid.DAE_CREATE_TRACK | Ovoid.DAE_MERGE_DEPENDENCIES | Ovoid.DAE_FORCE_CSPLINE | Ovoid.DAE_CONVERT_UPAXIS, c, e, g)
};
Ovoid.includeDaeMesh = function (b, c, e, g) {
    Ovoid.Loader.includeCollada(b, Ovoid.DAE_MESHS | Ovoid.DAE_MATERIALS | Ovoid.DAE_MERGE_DEPENDENCIES | Ovoid.DAE_OPTIMIZE_ALL | Ovoid.DAE_CONVERT_UPAXIS, c, e, g)
};
Ovoid.includeAudio = function (b, c) {
    var e = Ovoid.extractName(b, !1),
        e = c.create(Ovoid.AUDIO, e, null);
    e.url = b;
    Ovoid.Loader.includeAudio(e)
};
Ovoid.includeTexture = function (b, c, e) {
    var g = Ovoid.extractName(b, !1),
        e = e.create(Ovoid.TEXTURE, g, null);
    e.url = b;
    Ovoid.Loader.includeTexture(e, c)
};
Ovoid.includeShader = function (b, c, e, g, f, h) {
    Ovoid.Loader.includeShader(b, c, e, g, f, h)
};
Ovoid.useScene = function (b) {
    Ovoid.rscene = b
};
Ovoid.useCamera = function (b) {
    Ovoid.rscene.useCamera(b)
};
Ovoid.cameraYaw = function (b) {
    Ovoid.Queuer._rcamera.rotateXyz(0, b, 0, Ovoid.WORLD, Ovoid.RELATIVE)
};
Ovoid.cameraPitch = function (b) {
    Ovoid.Queuer._rcamera.rotateXyz(b, 0, 0, Ovoid.LOCAL, Ovoid.RELATIVE)
};
Ovoid.cameraRoll = function (b) {
    Ovoid.Queuer._rcamera.rotateXyz(0, 0, b, Ovoid.LOCAL, Ovoid.RELATIVE)
};
Ovoid.cameraDolly = function (b) {
    Ovoid.Queuer._rcamera.moveXyz(0, 0, b, Ovoid.LOCAL, Ovoid.RELATIVE)
};
Ovoid.search = function (b) {
    return Ovoid.rscene.search(b)
};
Ovoid.searchMatches = function (b) {
    return Ovoid.rscene.searchMatches(b)
};
Ovoid.move = function (b, c, e, g, f, h) {
    for (var l = Ovoid.rscene.transform.length; l--;)
        if (b == Ovoid.rscene.transform[l].name) {
            Ovoid.rscene.transform[l].moveXyz(c, e, g, f, h);
            break
        }
};
Ovoid.rotate = function (b, c, e, g, f, h) {
    for (var l = Ovoid.rscene.transform.length; l--;)
        if (b == Ovoid.rscene.transform[l].name) {
            Ovoid.rscene.transform[l].rotateXyz(c, e, g, f, h);
            break
        }
};
Ovoid.scale = function (b, c, e, g, f) {
    for (var h = Ovoid.rscene.transform.length; h--;)
        if (b == Ovoid.rscene.transform[h].name) {
            Ovoid.rscene.transform[h].scaleXyz(c, e, g, f);
            break
        }
};
Ovoid.trackRewind = function (b, c) {
    for (var e = Ovoid.rscene.track.length; e--;) Ovoid.rscene.track[e].name == b && (c || (c = 1), Ovoid.rscene.track[e].rewind(c))
};
Ovoid.trackPlay = function (b, c, e) {
    for (var g = Ovoid.rscene.track.length; g--;)
        if (Ovoid.rscene.track[g].name == b) {
            if (null == c || void 0 == c) c = 1;
            Ovoid.rscene.track[g].setLoop(e);
            Ovoid.rscene.track[g].play(c)
        }
};
Ovoid.trackPause = function (b) {
    for (var c = Ovoid.rscene.track.length; c--;) Ovoid.rscene.track[c].name == b && Ovoid.rscene.track[c].stop()
};
Ovoid.soundRewind = function (b) {
    for (var c = Ovoid.rscene.sound.length; c--;) Ovoid.rscene.sound[c].name == b && Ovoid.rscene.sound[c].rewind()
};
Ovoid.soundPlay = function (b, c) {
    for (var e = Ovoid.rscene.sound.length; e--;) Ovoid.rscene.sound[e].name == b && (Ovoid.rscene.sound[e].setLoop(c), Ovoid.rscene.sound[e].play())
};
Ovoid.soundPause = function (b) {
    for (var c = Ovoid.rscene.sound.length; c--;) Ovoid.rscene.sound[c].name == b && Ovoid.rscene.sound[c].stop()
};
Ovoid.inputTrigger = function (b, c, e, g) {
    Ovoid.Input.trigger(b, e, c, g)
};
Ovoid.setAction = function (b, c, e, g) {
    if (16 < b) Ovoid.log(2, "Ovoid.setAction", "Unknown event (" + b + ").");
    else {
        if (e instanceof Function) {
            var f = null;
            if (g)
                if ("string" == typeof g) {
                    var h = Ovoid.rscene.searchMatches(g);
                    if (0 == h.length) {
                        Ovoid.log(2, "Ovoid.setAction", "no node found with matching name '" + g + "' in the current active scene '" + Ovoid.rscene.name + "'.");
                        return
                    }
                    f = h
                } else if (g.type & Ovoid.BODY) f = [], f.push(g);
            else {
                Ovoid.log(2, "Ovoid.setAction", "node " + g.name + " is not a Body instance.");
                return
            } if ("string" == typeof c) {
                h =
                    Ovoid.rscene.searchMatches(c);
                if (0 == h.length) {
                    Ovoid.log(2, "Ovoid.setAction", "no node found with matching name '" + c + "' in the current active scene '" + Ovoid.rscene.name + "'.");
                    return
                }
                c = new Ovoid.Action(c + "Action")
            } else if (c.type & Ovoid.BODY || c.type & Ovoid.LAYER) h = [], h.push(c), c = new Ovoid.Action(c.name + "Action");
            else {
                Ovoid.log(2, "Ovoid.setAction", "node " + c.name + " is not a Body or Layer instance.");
                return
            }
            for (var g = !1, l, m = !1, o = h.length; o--;)
                if (h[o].type & Ovoid.BODY || h[o].type & Ovoid.LAYER) {
                    l = null;
                    for (var q =
                        h[o].depend.length; q--;)
                        if (h[o].depend[q].type & Ovoid.ACTION && h[o].depend[q].name == c.name) {
                            l = h[o].depend[q];
                            break
                        }
                    if (l) m = !0, Ovoid.log(3, "Ovoid.setAction", "updating action " + l.name);
                    else if (l = c, l.linkNode(h[o]), Ovoid.log(3, "Ovoid.setAction", "linking action " + l.name + " to " + h[o].name), g) continue;
                    else Ovoid.log(3, "Ovoid.setAction", "adding action node " + l.name + " to active scene"), Ovoid.rscene.insert(l), g = !0; if (f)
                        for (q = f.length; q--;) l.setTrigger(b, e, f[q]);
                    else l.setTrigger(b, e); if (m) break
                } else Ovoid.log(2,
                    "Ovoid.setAction", "node " + h[o].name + " is not a Body or Layer instance.");
            return l
        }
        Ovoid.log(2, "Ovoid.setAction", "Not valid Function (" + e + ").")
    }
};
Ovoid.setConstraint = function (b, c) {
    var e;
    if ("string" == typeof c) {
        if (e = Ovoid.rscene.searchMatches(c), 0 == e.length) {
            Ovoid.log(2, "Ovoid.setConstraint", "no node found with matching name '" + c + "' in the current active scene '" + Ovoid.rscene.name + "'.");
            return
        }
    } else if (c.type & Ovoid.TRANSFORM) e = [], e.push(c);
    else {
        Ovoid.log(2, "Ovoid.setConstraint", "node " + c.name + " is not a Transform instance.");
        return
    }
    for (var g = [], f, h = e.length; h--;)
        if (e[h].type & Ovoid.TRANSFORM) {
            switch (b) {
            case Ovoid.PHYSICS:
                f = Ovoid.rscene.create(b,
                    e[h].name + "Physics", null);
                Ovoid.log(3, "Ovoid.setConstraint", "creating Physics node " + f.name + " in active scene");
                break;
            case Ovoid.ANIMATION:
                f = Ovoid.rscene.create(b, e[h].name + "Animation", null);
                Ovoid.log(3, "Ovoid.setConstraint", "creating Animation node " + f.name + " in active scene");
                break;
            case Ovoid.EXPRESSION:
                f = Ovoid.rscene.create(b, e[h].name + "Animation", null);
                Ovoid.log(3, "Ovoid.setConstraint", "creating Animation node " + f.name + " in active scene");
                break;
            default:
                Ovoid.log(2, "Ovoid.setConstraint", "invalid Constraint type.");
                return
            }
            Ovoid.log(3, "Ovoid.setConstraint", "adding constraint " + f.name + " to " + e[h].name);
            f.setTarget(e[h]);
            g.push(f)
        } else Ovoid.log(2, "Ovoid.setConstraint", "node " + e[h].name + " is not a Transform instance.");
    return g
};
Ovoid.setPhysics = function (b) {
    var c;
    if ("string" == typeof b) {
        if (c = Ovoid.rscene.searchMatches(b), 0 == c.length) {
            Ovoid.log(2, "Ovoid.setPhysics", "no node found with matching name '" + b + "' in the current active scene '" + Ovoid.rscene.name + "'.");
            return
        }
    } else if (b.type & Ovoid.TRANSFORM) c = [], c.push(b);
    else {
        Ovoid.log(2, "Ovoid.setPhysics", "node " + b.name + " is not a Transform instance.");
        return
    }
    for (var b = [], e, g = c.length; g--;) c[g].type & Ovoid.TRANSFORM ? (e = Ovoid.rscene.create(Ovoid.PHYSICS, c[g].name + "Physics", null), Ovoid.log(3,
        "Ovoid.setPhysics", "creating Physics node " + e.name + " in active scene"), Ovoid.log(3, "Ovoid.setPhysics", "adding constraint " + e.name + " to " + c[g].name), e.setTarget(c[g]), b.push(e)) : Ovoid.log(2, "Ovoid.setPhysics", "node " + c[g].name + " is not a Transform instance.");
    return b
};
Ovoid.setExpression = function (b, c) {
    if (c instanceof Function) {
        var e, g;
        if ("string" == typeof b) {
            if (e = b, g = Ovoid.rscene.searchMatches(b), 0 == g.length) {
                Ovoid.log(2, "Ovoid.setExpression", "no node found with matching name '" + b + "' in the current active scene '" + Ovoid.rscene.name + "'.");
                return
            }
        } else if (b.type & Ovoid.TRANSFORM || b.type & Ovoid.MATERIAL) e = b.name, g = [], g.push(b);
        else {
            Ovoid.log(2, "Ovoid.setExpression", "node " + b.name + " is not a valide node type instance.");
            return
        }
        e = Ovoid.rscene.create(Ovoid.EXPRESSION, e +
            "Expression");
        Ovoid.log(3, "Ovoid.setExpression", "creating Expression node " + e.name + " in active scene");
        e.addExpression(c);
        for (var f = g.length; f--;) g[f].type & Ovoid.TRANSFORM || g[f].type & Ovoid.MATERIAL ? (Ovoid.log(3, "Ovoid.setExpression", "adding expression " + e.name + " to " + g[f].name), e.setTarget(g[f])) : Ovoid.log(2, "Ovoid.setExpression", "node " + g[f].name + " is not a valide node type instance.");
        return e
    }
    Ovoid.log(2, "Ovoid.setExpression", "Not valid Function (" + c + ").")
};
Ovoid.grabNode = function (b) {
    Ovoid.Input.grabNode(b)
};
Ovoid.grabRelease = function () {
    Ovoid.Input.grabRelease()
};
Ovoid.Debug = {};
Ovoid.Debug.Float16v = function (b, c) {
    c || (c = "");
    var e;
    e = "" + (c + Ovoid.frnd(b[0]) + "\t" + Ovoid.frnd(b[1]) + "\t" + Ovoid.frnd(b[2]) + "\t" + Ovoid.frnd(b[3]) + "\n");
    e += c + Ovoid.frnd(b[4]) + "\t" + Ovoid.frnd(b[5]) + "\t" + Ovoid.frnd(b[6]) + "\t" + Ovoid.frnd(b[7]) + "\n";
    e += c + Ovoid.frnd(b[8]) + "\t" + Ovoid.frnd(b[9]) + "\t" + Ovoid.frnd(b[10]) + "\t" + Ovoid.frnd(b[11]) + "\n";
    return e += c + Ovoid.frnd(b[12]) + "\t" + Ovoid.frnd(b[13]) + "\t" + Ovoid.frnd(b[14]) + "\t" + Ovoid.frnd(b[15])
};
Ovoid.Debug.Float9v = function (b, c) {
    c || (c = "");
    var e;
    e = "" + (c + Ovoid.frnd(b[0]) + "\t" + Ovoid.frnd(b[1]) + "\t" + Ovoid.frnd(b[2]) + "\n");
    e += c + Ovoid.frnd(b[3]) + "\t" + Ovoid.frnd(b[4]) + "\t" + Ovoid.frnd(b[5]) + "\n";
    return e += c + Ovoid.frnd(b[6]) + "\t" + Ovoid.frnd(b[7]) + "\t" + Ovoid.frnd(b[8])
};
Ovoid.Debug.Float3v = function (b, c) {
    c || (c = "");
    var e;
    return e = "" + (c + Ovoid.frnd(b[0]) + ", " + Ovoid.frnd(b[1]) + ", " + Ovoid.frnd(b[2]))
};
Ovoid.Debug.Float4v = function (b, c) {
    c || (c = "");
    var e;
    return e = "" + (c + Ovoid.frnd(b[0]) + ", " + Ovoid.frnd(b[1]) + ", " + Ovoid.frnd(b[2]) + ", " + Ovoid.frnd(b[3]))
};
Ovoid.Debug.Vertex = function (b, c) {
    c || (c = "");
    var e;
    e = "" + (c + "[p:" + Ovoid.Debug.Float4v(b.p.v, "") + "]");
    e += "[n:" + Ovoid.Debug.Float3v(b.n.v, "") + "]";
    return e += "[u:" + Ovoid.Debug.Float3v(b.u.v, "") + "]"
};
Ovoid.Debug.Node = function (b) {
    for (var c = 'Ovoid.Node "' + b.name + '" infos\n{\n', c = c + ("  visible: " + b.visible + "\n"), c = c + ("  uid:     " + b.uid + "\n"), c = c + "  parent:  " + (b.parent ? b.parent.name : "null"), c = c + "\n  child: ", e = 0; e < b.child.length; e++) c += "\n   > " + b.child[e].name;
    c += "\n  link: ";
    for (e = 0; e < b.link.length; e++) c += "\n   > " + b.link[e].name;
    c += "\n  depend: ";
    for (e = 0; e < b.depend.length; e++) c += "\n   > " + b.depend[e].name;
    return c + "\n}"
};
Ovoid.Debug.Mesh = function (b, c) {
    var e = Ovoid.MAX_MESH_LOD;
    c && (e = 1);
    for (var g = 'Ovoid.Mesh "' + b.name + '" infos\n{\n', f = 0; f < e; f++) {
        c || (g += " LOD#" + f + " {\n");
        for (var h = 0; h < b.polyset[f].length; h++) g += "  polyset#" + h + " {", g += " " + b.polyset[f][h].ioffset, g += ", " + b.polyset[f][h].icount, g += ", ", g = b.polyset[f][h].material ? g + b.polyset[f][h].material.name : g + "null", g += " }\n";
        g += "  vertices: " + b.vertices[f].length;
        if (!c) {
            g += " {\n";
            for (h = 0; h < b.vertices[f].length; h++) g += Ovoid.Debug.Vertex(b.vertices[f][h], "      ") + "\n";
            g += "\n }"
        }
        g += "\n";
        g += "  triangles: " + b.triangles[f].length;
        if (!c) {
            g += " {\n";
            g += "      indices: {";
            for (h = 0; h < b.triangles[f].length; h++) g += "[" + b.triangles[f][h].index[0] + "," + b.triangles[f][h].index[1] + "," + b.triangles[f][h].index[2] + "]";
            g += "\n   }\n";
            g += "\n }\n"
        }
        g += "\n"
    }
    return g + "}"
};
Ovoid.Debug.Material = function (b) {
    var c = 'Ovoid.Material "' + b.name + '" infos\n{\n',
        c = c + ("  ambient: " + Ovoid.Debug.Float4v(b.color[0].v, "  ") + "\n");
    b.texture[0] && (c += "    texture: " + b.texture[0].name + "\n");
    c += "  diffuse: " + Ovoid.Debug.Float4v(b.color[1].v, "  ") + "\n";
    b.texture[1] && (c += "    texture: " + b.texture[1].name + "\n");
    c += "  specular: " + Ovoid.Debug.Float4v(b.color[2].v, "  ") + "\n";
    b.texture[2] && (c += "    texture: " + b.texture[2].name + "\n");
    c += "  emissive: " + Ovoid.Debug.Float4v(b.color[3].v, "  ") + "\n";
    b.texture[3] && (c += "    texture: " + b.texture[3].name + "\n");
    c += "  reflect: " + Ovoid.Debug.Float4v(b.color[4].v, "  ") + "\n";
    b.texture[4] && (c += "    texture: " + b.texture[4].name + "\n");
    b.texture[5] && (c += "  normal map: " + b.texture[5].name + "\n");
    c += "  shininess: " + b.shininess + "\n";
    c += "  reflectivity: " + b.reflectivity + "\n";
    c += "  opacity: " + b.opacity + "\n";
    return c + "}"
};
Ovoid.Debug.Transform = function (b, c) {
    var e = 'Ovoid.Transform "' + b.name + '" infos\n{\n',
        e = e + ("  scaling:     " + Ovoid.Debug.Float3v(b.scaling.v, "") + "\n"),
        e = e + ("  translation: " + Ovoid.Debug.Float3v(b.translation.v, "") + "\n"),
        e = e + ("  rotation:    " + Ovoid.Debug.Float4v(b.rotation.v, "") + "\n"),
        e = e + ("  orientation: " + Ovoid.Debug.Float4v(b.orientation.v, "") + "\n");
    c || (e = e + "\n  matrix {\n" + (Ovoid.Debug.Float16v(b.matrix.m, "    ") + "\n"), e = e + "  }\n  worldMatrix {\n" + (Ovoid.Debug.Float16v(b.worldMatrix.m, "    ") + "\n"),
        e = e + "  }\n  normalMatrix {\n" + (Ovoid.Debug.Float9v(b.normalMatrix.m, "    ") + "\n"), e += "  }\n");
    e += "  worldDirection: " + Ovoid.Debug.Float3v(b.worldDirection.v, "") + "\n";
    e += "  worldPosition:  " + Ovoid.Debug.Float3v(b.worldPosition.v, "") + "\n";
    return e + "}"
};
Ovoid.Debug.Body = function (b) {
    var c = 'Ovoid.Body "' + b.name + '" infos\n{\n',
        c = c + "  shape: ";
    b.shape ? c += b.shape.name : c += "null";
    for (var c = c + "\n  intersect: ", e = 0; e < b.intersect.count; e++) c += "\n   > " + b.intersect[e].name;
    c += "\n  enter: ";
    for (e = 0; e < b.enter.count; e++) c += "\n   > " + b.enter[e].name;
    c += "\n  leave: ";
    for (e = 0; e < b.leave.count; e++) c += "\n   > " + b.leave[e].name;
    return c + "\n}"
};
Ovoid.Debug.Light = function (b) {
    var c = 'Ovoid.Light "' + b.name + '" infos\n{\n',
        c = c + ("  model: " + b.model + "\n"),
        c = c + ("  Color: " + Ovoid.Debug.Float4v(b.color.v, "") + "\n"),
        c = c + ("  intensity: " + b.intensity + "\n"),
        c = c + ("  Constant Att: " + b.attenuationC + "\n"),
        c = c + ("  Linear Att: " + b.attenuationL + "\n"),
        c = c + ("  Quadratic Att: " + b.attenuationQ + "\n"),
        c = c + ("  Range: " + b.range + "\n\n"),
        c = c + ("  Falloff: " + b.falloff + "\n\n"),
        c = c + ("  Spot angle: " + b.spotAngle + "\n\n"),
        c = c + ("  Cast shadows: " + b.shadowCasting + "\n\n");
    return c +
        "}"
};
Ovoid.Debug.Camera = function (b, c) {
    var e = 'Ovoid.Camera "' + b.name + '" infos\n{\n',
        e = e + ("  viewX:    " + b.viewX + "\n"),
        e = e + ("  viewY:    " + b.viewY + "\n"),
        e = e + ("  fov:      " + b.fov + "\n"),
        e = e + ("  aspect:   " + b.aspect + "\n"),
        e = e + ("  clipNear: " + b.clipNear + "\n"),
        e = e + ("  clipFar:  " + b.clipFar + "\n\n");
    c || (e = e + "  perspective {\n" + (Ovoid.Debug.Float16v(b.perspective.m, "    ") + "\n"), e = e + "  }\n\n  lookat {\n" + (Ovoid.Debug.Float16v(b.lookat.m, "    ") + "\n"), e = e + "  }\n\n  orthographic {\n" + (Ovoid.Debug.Float16v(b.orthographic.m, "    ") +
        "\n"), e = e + "  }\n\n  eyeview {\n" + (Ovoid.Debug.Float16v(b.eyeview.m, "    ") + "\n"), e += "  }\n\n");
    return e + "}"
};
Ovoid.Debug.Layer = function (b, c) {
    var e = 'Ovoid.Layer "' + b.name + '" infos\n{\n',
        e = e + ("  size:      " + Ovoid.Debug.Float3v(b.size.v, "") + "\n"),
        e = e + ("  fgColor:   " + Ovoid.Debug.Float4v(b.fgColor.v, "") + "\n"),
        e = e + ("  bgColor:   " + Ovoid.Debug.Float4v(b.bgColor.v, "") + "\n"),
        e = e + "  bgTexture: ";
    b.bgTexture ? e += b.bgTexture.name + "\n" : e += "null\n";
    c || (e = e + "  layerMatrix {\n" + (Ovoid.Debug.Float16v(b.layerMatrix.m, "    ") + "\n"), e += "  }\n");
    return e + "}"
};
Ovoid.Debug.NodeList = function (b) {
    var c = 'Ovoid.Scene "' + b.name + '" node list\n{\n',
        e;
    if (b.audio.length)
        for (var c = c + " Audios:\n", g = 0; g < b.audio.length; g++) e = b.audio[g], c += "  " + e.name + "\n";
    if (b.texture.length) {
        c += " Textures:\n";
        for (g = 0; g < b.texture.length; g++) e = b.texture[g], c += " " + e.name + "\n"
    }
    if (b.material.length) {
        c += " Materials:\n";
        for (g = 0; g < b.material.length; g++) e = b.material[g], c += "  " + e.name + "\n"
    }
    if (b.shape.length) {
        c += " Shapes:\n";
        for (g = 0; g < b.shape.length; g++) e = b.shape[g], c += "  " + e.name + "\n"
    }
    b.transform.length &&
        (c += " Transforms:\n");
    if (b.sound.length) {
        c += "   Sounds:\n";
        for (g = 0; g < b.sound.length; g++) e = b.sound[g], c += "    " + e.name + "\n"
    }
    if (b.light.length) {
        c += "   Lights:\n";
        for (g = 0; g < b.light.length; g++) e = b.light[g], c += "    " + e.name + "\n"
    }
    if (b.camera.length) {
        c += "   Cameras:\n";
        for (g = 0; g < b.camera.length; g++) e = b.camera[g], c += "    " + e.name + "\n"
    }
    if (b.transform.length) {
        c += "   Commons:\n";
        for (g = 0; g < b.transform.length; g++) e = b.transform[g], e.type & Ovoid.LIGHT || e.type & Ovoid.CAMERA || e.type & Ovoid.SOUND || (c += "    " + e.name + "\n")
    }
    if (b.layer.length) {
        c +=
            " Layer:\n";
        for (g = 0; g < b.layer.length; g++) e = b.layer[g], c += " " + e.name + "\n"
    }
    if (b.animation.length) {
        c += " Animation:\n";
        for (g = 0; g < b.animation.length; g++) e = b.animation[g], c += "  " + e.name + "\n"
    }
    if (b.physics.length) {
        c += " Physics:\n";
        for (g = 0; g < b.physics.length; g++) e = b.physics[g], c += "  " + e.name + "\n"
    }
    if (b.action.length) {
        c += " Actions:\n";
        for (g = 0; g < b.action.length; g++) e = b.action[g], c += "  " + e.name + "\n"
    }
    if (b.track.length) {
        c += " Track:\n";
        for (g = 0; g < b.track.length; g++) e = b.track[g], c += "  " + e.name + "\n"
    }
    return c + "}"
};
Ovoid.Debug.WorldGraph = function (b) {
    var c = 'Ovoid.Scene "' + b.name + '" world graph\n{\n',
        c = c + " \u00a4 World\n",
        e, g = new Ovoid.WgIterator;
    for (g.init(b.world); g.explore();) {
        e = g.current;
        for (var c = c + "", f = 0; f < g.depth; f++) c += "  ";
        c += " > " + e.name + "\n"
    }
    c += "\n \u00a4 Overlay\n";
    for (g.init(b.overlay); g.explore();) {
        e = g.current;
        c += "";
        for (f = 0; f < g.depth; f++) c += "  ";
        c += " > " + e.name + "\n"
    }
    return c + "}"
};
Ovoid.Debug.DependGraph = function (b) {
    for (var c = 'Ovoid.Scene "' + b.name + '" dependency graph\n{\n', e, g = new Ovoid.DgIterator, f = 0; f < b.transform.length; f++) {
        c += " \u00a4 " + b.transform[f].name + "\n";
        for (g.init(b.transform[f]); g.exploreDepend();) {
            e = g.current;
            for (var c = c + "", h = 0; h < g.depth; h++) c += "  ";
            c += " > " + e.name + "\n";
            e.type & Ovoid.TRANSFORM && g.jumpDepend()
        }
    }
    return c + "}"
};
Ovoid.Debug.DependTree = function (b) {
    var c = 'Ovoid.Node "' + b.name + '" dependency tree\n{\n',
        e = new Ovoid.DgIterator,
        c = c + (" \u00a4 " + b.name + "\n");
    for (e.init(b); e.exploreDepend();) {
        for (var b = e.current, c = c + "", g = 0; g < e.depth; g++) c += "  ";
        c += " > " + b.name + "\n"
    }
    return c + "}"
};
Ovoid.Debug.Queuer = function () {
    var b, c;
    b = "Ovoid.Queuer status\n{\n" + ("  rcamera:   " + Ovoid.Queuer._rcamera.name + "\n");
    b += "  viewcull:  ";
    Ovoid.Queuer.opt_viewcull ? b += "on\n" : b += "off\n";
    b += "  lightcull: ";
    Ovoid.Queuer.opt_lightcull ? b += "on\n" : b += "off\n";
    c = Ovoid.Queuer.qlight.count;
    b += "  qlight: " + c + " node(s)\n";
    for (var e = c = 0; e < Ovoid.MAX_RENDER_LAYER; e++) c += Ovoid.Queuer.qsolid[e].count;
    b += "  qsolid: " + c + " node(s)\n";
    for (e = c = 0; e < Ovoid.MAX_RENDER_LAYER; e++) c += Ovoid.Queuer.qalpha[e].count;
    b += "  qalpha: " +
        c + " node(s)\n";
    c = Ovoid.Queuer.qphycs.count;
    b += "  qphycs: " + c + " node(s)\n";
    c = Ovoid.Queuer.qlayer.count;
    b += "  qlayer: " + c + " node(s)\n";
    c = Ovoid.Queuer.qtext.count;
    return b + ("  qtext:  " + c + " node(s)\n") + "}"
};
Ovoid.Debug.Input = function () {
    var b;
    b = "Ovoid.Input status\n{\n   intDn: [";
    for (var c = 0; 256 > c; c++) Ovoid.Input.intDn[c] && (b += c + " ");
    b += "]\n   intUp: [";
    for (c = 0; 256 > c; c++) Ovoid.Input.intUp[c] && (b += c + " ");
    b += "]\n   intHl: [";
    for (c = 0; 256 > c; c++) Ovoid.Input.intHl[c] && (b += c + " ");
    b = b + "]\n" + ("   mousePosition: " + Ovoid.Input.mousePosition.v[0] + ", " + Ovoid.Input.mousePosition.v[1] + "\n");
    b += "   mouseVelocity: " + Ovoid.Input.mouseVelocity.v[0] + ", " + Ovoid.Input.mouseVelocity.v[1] + "\n";
    b += "   mouseOverUid:  " + Ovoid.Input.mouseOverUid +
        "\n";
    b += "   mouseEnterUid: " + Ovoid.Input.mouseEnterUid + "\n";
    b += "   mouseLeaveUid: " + Ovoid.Input.mouseLeaveUid + "\n";
    b = b + "   mouseCursor: " + (Ovoid.frnd(Ovoid.Input.mouseCursor.m[12]) + ", ");
    b += Ovoid.frnd(Ovoid.Input.mouseCursor.m[13]) + ", ";
    b += Ovoid.frnd(Ovoid.Input.mouseCursor.m[14]);
    return b + "\n}"
};
Ovoid.Debug.Drawer = function () {
    var b;
    b = "Ovoid.Drawer status\n{\n   rp:" + Ovoid.Drawer.opt_pickingMode;
    b += " lp:";
    Ovoid.Drawer.opt_perLightPass ? b += "yes" : b += "no";
    b += " zf:";
    Ovoid.Drawer.opt_shadowCasting ? b += "yes\n" : b += "no\n";
    b += "   renderpasses:  " + Ovoid.Drawer._renderpasses + " call(s)\n";
    b += "   drawndynamic:  " + Ovoid.Drawer._drawndynamic + " call(s)\n";
    b += "   drawnsprite:   " + Ovoid.Drawer._drawnsprite + " call(s)\n";
    b += "   drawnchar:     " + Ovoid.Drawer._drawnchar + " point(s)\n";
    b += "   drawnsymbolic: " + Ovoid.Drawer._drawnsymbolic +
        " call(s)\n";
    b += "   drawnpolyset:  " + Ovoid.Drawer._drawnpolyset + " call(s)\n";
    b += "   drawnparticle: " + Ovoid.Drawer._drawnparticle + " point(s)\n";
    b += "   drawnshadow:   " + Ovoid.Drawer._drawnshadow + " call(s)\n";
    return b + "}"
};
Ovoid.Debug.Timer = function () {
    var b;
    b = "Ovoid.Timer status\n{\n" + ("   quantum:   " + Math.round(1E4 * Ovoid.Timer.quantum) / 1E4 + "\n");
    b += "   framerate: " + Ovoid.Timer.framerate + "\n";
    return b + "}"
};
Ovoid.Debug.Frame = function () {
    var b;
    b = "Ovoid.Frame status\n{\n" + ("   position: " + Ovoid.Frame.position.v[0] + ", " + Ovoid.Frame.position.v[1] + "\n");
    b += "   size:     " + Ovoid.Frame.size.v[0] + ", " + Ovoid.Frame.size.v[1] + "\n";
    b += "   scroll:   " + Ovoid.Frame.scroll.v[0] + ", " + Ovoid.Frame.scroll.v[1] + "\n";
    return b + "}"
};
Ovoid.Debug.Shader = function (b) {
    var c = "VERTEX_VEC4_P,VERTEX_VEC3_N,VERTEX_VEC3_U,VERTEX_VEC3_T,VERTEX_VEC3_B,VERTEX_VEC4_C,VERTEX_VEC4_I,VERTEX_VEC4_W".split(","),
        e = "UNIFORM_MATRIX_TRANSFORM_MAT4,UNIFORM_MATRIX_NORMAL_MAT3,UNIFORM_MATRIX_MODELVIEW_MAT4,UNIFORM_MATRIX_EYEVIEW_MAT4,UNIFORM_MATRIX_PROJECTION_MAT4,UNIFORM_MATRIX_LOOKAT_MAT4,UNIFORM_MATRIX_BONES_MAT4".split(","),
        g = "UNIFORM_ENABLE_DIFFUSE_LIGHTING_BOOL,UNIFORM_ENABLE_AMBIENT_LIGHTING_BOOL,UNIFORM_ENABLE_SPECULAR_BOOL,UNIFORM_ENABLE_REFLECT_BOOL,UNIFORM_ENABLE_PARALAX_BOOL,UNIFORM_ENABLE_MATERIAL_BOOL,UNIFORM_ENABLE_VERTEX_WEIGHT_BOOL,UNIFORM_ENABLE_COMPUT_TANGENT_BOOL,UNIFORM_ZOFFSET_FLOAT,UNIFORM_COLOR_VEC4,UNIFORM_MATERIAL_AMBIENT_VEC4,UNIFORM_MATERIAL_DIFFUSE_VEC4,UNIFORM_MATERIAL_SPECULAR_VEC4,UNIFORM_MATERIAL_EMISSIVE_VEC4,UNIFORM_MATERIAL_REFLECT_VEC4,UNIFORM_MATERIAL_SHININESS_FLOAT,UNIFORM_MATERIAL_OPACITY_FLOAT,UNIFORM_MATERIAL_REFLECTIVITY_FLOAT,UNIFORM_MATERIAL_BUMPINESS_FLOAT,,UNIFORM_LIGHT_POSITION_VEC4,UNIFORM_LIGHT_DIRECTION_VEC3,UNIFORM_LIGHT_COLOR_VEC4,UNIFORM_LIGHT_CONSTANT_ATTENUATION_FLOAT,UNIFORM_LIGHT_RANGE_FLOAT,UNIFORM_LIGHT_FALLOFF_FLOAT,UNIFORM_LIGHT_SPOTANGLE_FLOAT,UNIFORM_LIGHT_LINEAR_ATTENUATION_FLOAT,UNIFORM_LIGHT_ENABLED_BOOL,UNIFORM_LIGHT_QUADRIC_ATTENUATION_FLOAT,UNIFORM_EYE_POSITION_VEC4,UNIFORM_EYE_DIRECTION_VEC4,UNIFORM_EYE_VIEWSIZE_VEC3,Unassigned Slot #33,Unassigned Slot #34,Unassigned Slot #35,Unassigned Slot #36,Unassigned Slot #37,Unassigned Slot #38,Unassigned Slot #39,UNIFORM_AMBIENT_COLOR_VEC4,#41,UNIFORM_LAYER_SIZE_VEC3".split(","),
        f = "SAMPLER_AMBIENT,SAMPLER_DIFFUSE,SAMPLER_SPECULAR,SAMPLER_EMISSIVE,SAMPLER_REFLECT,SAMPLER_NORMAL".split(","),
        h;
    h = "Ovoid.Shader [] debug\n{\n\tvertex attribs {\n";
    for (var l = 0; l < Ovoid.MAX_VERTEX_ATTRIB; l++) - 1 != b.attribute[l] && (h += "\t\t" + c[l] + " \n");
    h += "\t}\n\tuniforms {\n";
    for (l = 0; l < Ovoid.MAX_UNIFORM; l++) - 1 != b.uniform[l] && (h += "\t\t" + g[l] + " \n");
    h += "\t}\n\tuniforms matrices {\n";
    for (l = 0; l < Ovoid.MAX_UNIFORM_MATRIX; l++) - 1 != b.uniformMatrix[l] && (h += "\t\t" + e[l] + " \n");
    h += "\t}\n\tuniforms samplers {\n";
    for (l = 0; l < Ovoid.MAX_UNIFORM_SAMPLER; l++) - 1 != b.uniformSampler[l] && (h += "\t\t #" + l + " " + f[l] + " \n");
    return h + "\t}\n}\n"
};
Ovoid.Debug.Sumary = function () {
    var b = "",
        b = "Fps:[" + Ovoid.Timer.framerate + "]",
        b = b + " Drawn:[" + ("polyset:" + Ovoid.Drawer._drawnpolyset),
        b = b + (" dynamic:" + Ovoid.Drawer._drawndynamic),
        b = b + (" sprite:" + Ovoid.Drawer._drawnsprite),
        b = b + (" symbolic:" + Ovoid.Drawer._drawnsymbolic),
        b = b + (" particle:" + Ovoid.Drawer._drawnparticle),
        b = b + (" shadow:" + Ovoid.Drawer._drawnshadow),
        b = b + "]" + (" Mouse:[x" + Ovoid.Input.mousePosition.v[0]),
        b = b + (" y" + Ovoid.Input.mousePosition.v[1] + "]"),
        b = b + " Picking:[";
    Ovoid.Drawer.opt_enablePicking ?
        b += "on" : b += "off";
    return b = b + "]" + (" Timeq:[" + Math.round(1E3 * Ovoid.Timer.quantum) / 1E3 + "]")
};