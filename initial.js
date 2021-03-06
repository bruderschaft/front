    /* --- GLOBALES OPTIONS SETUP --- */
    Ovoid.opt_showHud = false;
    Ovoid.Loader.opt_showPercentage = true;
    Ovoid.Loader.opt_showDetails = true;
    Ovoid.opt_logLevel = 1;
    Ovoid.opt_debugMode = false;
    Ovoid.Queuer.opt_viewcull = false;
    Ovoid.Drawer.opt_lopLevel = 1;
    Ovoid.Drawer.opt_perLightPass = false;
    Ovoid.Drawer.opt_shadowCasting = true;
    Ovoid.Drawer.opt_adaptativeLop = false;
    Ovoid.opt_localSkinData = true;
    Ovoid.opt_showDebug = false;
    Ovoid.Drawer.opt_drawHelpers = false; 
    Ovoid.Drawer.opt_drawLights = true; 
    Ovoid.Drawer.opt_drawCameras = false; 
    Ovoid.Drawer.opt_drawBoundingSphere = true; 
    Ovoid.Drawer.opt_drawBoundingBox = false; 
    Ovoid.Drawer.opt_drawNormals = false;
    Ovoid.Drawer.opt_clearColor = [0.0, 0.5, 1.0, 1.0];
    Ovoid.Drawer.opt_ambientColor = [0.2, 0.3, 0.4, 1.0];
    Ovoid.Drawer.opt_fogColor = [0.8, 0.9, 1.2, 1.0];
    Ovoid.Drawer.opt_fogDensity = 0.00009;
    Ovoid.opt_gravity = [0.0,-9.8,0.0];
    
    // RP test
    //Ovoid.Drawer.opt_pickingMode = Ovoid.RP_OVERLAY;
    //dsdOvoid.Drawer.opt_pickingMode = 0;
    
    // Create scene for simulator
    var scene = new Ovoid.Scene("SDVE");
    
    /* --- Globals utilitary objets --- */
    var Gv = new Ovoid.Vector(); // Global temporary vector
    var Gp = new Ovoid.Point(); // Global temporary point
    var Wz = new Ovoid.Vector(0.0,0.0,1.0); // World Z vector
    var Wy = new Ovoid.Vector(0.0,1.0,0.0); // World Up vector
    var vx = new Ovoid.Vector(); // Three temporary vectors
    var vy = new Ovoid.Vector();
    var vz = new Ovoid.Vector();
    
    /* Aicraft/pilot/game Global variables */
    var RV = 0.0; // Relative Velocity
    var AV = 0.0; // Absolute Velocity
    var AA = 0.0; // Angle Of Attack
    var CM = 0.0; // Contact magnitude
    var CA = 0.0; // Contact angle
    var A = 0.0; // Absolute Alitude
    var uG = 0.0; // G force preview
    
    /* Time helpers to attenuate FIREFOX stuttering side-effets...
    
       Dear Mozilla developers, For THE LOVE OF GOD, PLEASE FIX THIS STUTTERING 
       EFFECT. I have tryed MANY things and now i don't know how to avoid, EVEN 
       attenuate side-effects of this VERY ANNOYING behaviour.
    */
    var mT = 0.0;
    var uT = 0.0;
    var cT = 0;
    var G = 0.0; // G force
    var CMode = 0; // Camera mode (0 = follow, 1 = orbite, 2 = embeded)
    
    /* --- Globals terrain & env elements --- */
    var Abound; // Active range bounding sphere
    var Llands = new Array(); // Landscape squares list
    var Ltrees = new Array(); // Trees list
    var Acamera; // Aimed Camera
    var Fcamera; // fixed camera
    var Ocamera; // Orbit camera
    var Olocate; // Orbit camera locator
    var Bcamera; // Flyby camera
    var ACaim; // Camera aim constraint
    
    /* --- Globals aircraft elements --- */
    var ACmodel; // Aircraft body model
    var ACphycs; // Aircraft physics constraint
    var ACspace; // Aircraft local space locator
    var AChelicesMaterial; // Helice material
    var BsmokeE; // Black smoke emitter
    var BsmokeB; // Black smoke body
    
    var CsmokeE; // Contact smoke emitter
    var CsmokeB; // Contact smoke body
    var CsmokeT = 0.0; // Contact smoke emittion timer
    
    var WsmokeE; // White smoke emitter
    var WsmokeB; // White smoke body
    
    /* ---  Global ingame GUI elements --- */
    var GuiWatermark; // Common watermark
    var GuiHelpframe; // Splash help frame
    var GUIgaugA; // Altimeter gauge layer
    var GUIlocApa; // Altimeter gauge little blade locator
    var GUIlocAga; // Altimeter gauge big blade locator
    var GUIgaugV; // Airspeed gauge layer
    var GUIlocVga; // Airspeed gauge big blade locator
    var GUIgaugM; // RPM gauge layer
    var GUIgaugMga; // RMP gauge big blade layer
    var GUIlocMga; // RPM gauge big blade locator
    var GUIgaugG; // G-factor gauge layer
    var GUIgaugGga; // G-factor gauge big blade layer
    var GUIlocGga; // G-factor gauge big blade locator   
    var GUImsgR; // R - Restart message
    var GUIwrnOS; // Overspeed warning message
    var GUIThrottleP; // Throttle panel
    var GUIThrottleM; // Throttle manet
    var displayR = false;
    var displayHelp = true;
    var WSwitch = true;
    var WTimer = 0.0;
    
    /* Aircraft forward vector */
    var ACfw = new Ovoid.Vector();
    /* Aircraft upward vector */
    var ACup = new Ovoid.Vector();
    /* Aircraft side vector */
    var ACsd = new Ovoid.Vector();
    /* Aircraft local velocity */
    var AClv = new Ovoid.Vector();

    /* --- Global simulation variables --- */
    var F = 500; // Air viscosity / Friction (const)
    var W = 600.0 // Aircraft weight (const)
    
    var Z = 0.0; // Throttle axis value
    var T = 0.0; // Throttle
    var Tid = 0.25; // Throttle idle
    var P = 9.1; // Engine RPM/Traction factor (const)
    var M = 0.0; // Engine RPM
    var Mac = 10.0; // Engine RPM acceleration factor (const)
    var Mmx = 2700.0; // Engine max RPM (const)
    var Mlocp = new Ovoid.Point(0.0, 0.0, 0.0, 1.0); // Engine traction point

    var Pf = 15.0; // Portance factor (const)
    /* Elevator parameters */
    var Y = 0.0; // Elevator axis value
    var E = 0.0; // Elevator angle
    var Ef = 900.0; // Elevator factor (const)
    /* Ailerons parameters */
    var X = 0.0; // Ailerons axis value
    var R = 0.0; // Ailerons angle
    var Rf = 2000.0; // Aileron factor (const)
    var CRASHED = false;
    
    /* --- Aircraft aerodynamic planes/tensors --- */
    var LWplan = new Ovoid.Matrix3(); // Left wing plan
    LWplan.m[0] = -0.05*F; 
    LWplan.m[4] = -0.05*F; LWplan.m[5] = Pf; //  Default Portance 
    LWplan.m[8] = -0.75*F; // Constraint on Z plane
    var LWlocp = new Ovoid.Point(-2.0, 0.0, 0.0, 1.0); // Plane location point
    var RWplan = new Ovoid.Matrix3();
    RWplan.m[0] = -0.05*F;
    RWplan.m[4] = -0.05*F; RWplan.m[5] = Pf; //  Default Portance 
    RWplan.m[8] = -0.75*F; // Constraint on Z plane
    var RWlocp = new Ovoid.Point(2.0, 0.0, 0.0, 1.0); // Plane location point
    var Eplan = new Ovoid.Matrix3();
    Eplan.m[0] = -0.01*F;
    Eplan.m[4] = -0.01*F; Eplan.m[5] = 0.0; //  Default Portance 
    Eplan.m[8] = -0.25*F; // Constraint on Z plane
    var Elocp = new Ovoid.Point(0.0, -2.5, 0.0, 1.0); // Plane location point
    var Vplan = new Ovoid.Matrix3();
    Vplan.m[0] = -0.5*F; // Constraint on X plane
    Vplan.m[4] = -0.01*F;
    Vplan.m[8] = -0.01*F;
    var Vlocp = new Ovoid.Point(0.0, -2.5, 0.0, 1.0); // Plane location point
    
    /* --- Global simulation expressions --- */
    // Increase Engine
    var Mincr = function() {
      ShowHelp(false);
      if(!CRASHED) {
        if(T < 1.0) {
          Z += Ovoid.Timer.quantum*(0.5);
          if(Z > 0) {
            T = 0.165+Math.log((Z*0.3)+2.0);
          } else {
            T = 0.0;
          }
          if(T > 1.0) T = 1.0;
          if(T < Tid) T = Tid;
        }
      }
    };
    // Decrease Engine
    var Mdecr = function() {
      ShowHelp(false);
      if(!CRASHED) {
        if(T > Tid) {
          Z -= Ovoid.Timer.quantum*(0.5);
          if(Z > 0) {
            T = 0.165+Math.log((Z*0.3)+2.0);
          } else {
            T = 0.0;
          }
          if(T < Tid) T = Tid;
        }
      }
    };
    // Engine fan object rotation
    var Mrotate = function(node, t, l)  {
      node.rotateXyz(0.0,((M*0.016)*3.14)*t,0.0, Ovoid.LOCAL, Ovoid.RELATIVE); // RPM/60
    };
    
    /* Expression functions for Elevator up, down and recenter */
    var Erelease = true; // Elevator released to recenter
    var Ebase = 0.103; // Elevator rotation base
    // Elevator pull up
    var EmoveUp = function() {
      if(E < 0.2)
        E+=Ovoid.Timer.quantum*0.5;
      Erelease = false;
    };
    // Elevator push down
    var EmoveDn = function() {
      if(E > -0.2)
        E-=Ovoid.Timer.quantum*0.5;
      Erelease = false;
    };
    // Elevator release/recenter
    var EmoveCt = function() {
      Erelease = true;
      if(E > 0.03)
        E-=Ovoid.Timer.quantum;
      if(E < -0.03)
        E+=Ovoid.Timer.quantum;
      if(Math.abs(E) < 0.03) {
        E = 0.0;
        Erelease = false;
      }
    };
    // Elevator object rotation
    var Erotate = function(node, t, l)  {
      node.rotateXyz(Ebase+E,0.0,0.0, Ovoid.LOCAL, Ovoid.ABSOLUTE);
    };
    
    /* Expression functions for Ailerons up, down and recenter */
    var Rrelease = true; // Aileron released to recenter
    var RHbaseX = 0.12; // Aileron rotation base
    var RHbaseY = 0.01; // Aileron rotation base
    var RHbaseZ = 0.045; // Aileron rotation base
    var RBbaseX = 0.12; // Aileron rotation base
    var RBbaseY = 0.02; // Aileron rotation base
    var RBbaseZ = 0.0; // Aileron rotation base
    // Aileron gouvern to right
    var RmoveR = function() {
      if(R < 0.2)
        R+=Ovoid.Timer.quantum*0.5;
      Rrelease = false;
    };
    // Aileron gouvern to left
    var RmoveL = function() {
      if(R > -0.2)
        R-=Ovoid.Timer.quantum*0.5;
      Rrelease = false;
    };
    // Aileron gouvern release/recenter
    var RmoveCt = function() {
      Rrelease = true;
      if(R > 0.03)
        R-=Ovoid.Timer.quantum;
      if(R < -0.03)
        R+=Ovoid.Timer.quantum;
      if(Math.abs(R) < 0.03) {
        R = 0.0;
        Rrelease = false;
      }
    };
    // Aileron top left wing model rotation
    var RHGrotate = function(node, t, l) {
      node.rotateXyz(RHbaseX+R,-RHbaseY,RHbaseZ, Ovoid.WORLD, Ovoid.ABSOLUTE);
    }
    // Aileron top right wing model rotation
    var RHDrotate = function(node, t, l) {
      node.rotateXyz(RHbaseX-R,RHbaseY,-RHbaseZ, Ovoid.WORLD, Ovoid.ABSOLUTE);
    }
    // Aileron bottom left wing model rotation
    var RBGrotate = function(node, t, l) {
      node.rotateXyz(RBbaseX+R,RBbaseY,RBbaseZ, Ovoid.WORLD, Ovoid.ABSOLUTE);
    }
    // Aileron bottom right wing model rotation
    var RBDrotate = function(node, t, l) {
      node.rotateXyz(RBbaseX-R,-RBbaseY,-RBbaseZ, Ovoid.WORLD, Ovoid.ABSOLUTE);
    }
    
    // Show or hide help message
    var ShowHelp = function(bool) {
      displayHelp = bool;
      GuiHelpframe.visible = bool;
    }
    
    /* --- Globals functions --- */
    // Startup/Restart function
    var startup = function() {
      CRASHED = false;
      // Make fan visible
      var node = scene.search("pittss1-helices");
      node.visible = true;
      A = 0.0; // Absolute Alitude
      V = 0.0; // Vomition value
      G = 0.0; // G force
      M = 0.0; // Engine RPM
      E = 0.0; // Elevator angle
      R = 0.0; // Aulerons angle
      T = Tid; // Throttle
      Z = 0.0;
      LWplan.m[5] = Pf; //  Default Portance 
      Vplan.m[3] = 0.0;
      ACphycs.model = Ovoid.RIGID_LANDSCAPE;
      ACphycs.clearInfluences();
      ACmodel.moveXyz(0.0,2.5,0.0,0,1);
      ACmodel.rotateXyz(0.0,0.0,0.0,0,1);
      ACmodel.rotateXyz(-1.57,-1.57,0.0);
      ACphycs.model = Ovoid.RIGID_MASSIVE_BOX;
      ACphycs.useFriction = false;
      Acamera.moveXyz(4.0,3.0,6.0,0,1);
      BsmokeB.setParent(scene.world);
      BsmokeE.emits = false;
      CsmokeE.emits = false;
      GUImsgR.visible = false;
      ShowHelp(true);
    }
    
    // Switch camera mod function
    var SwCmode = function() {
      CMode++;
      if(CMode > 3) CMode = 0;
      switch(CMode) 
      { 
       case 1:
        scene.useCamera(Fcamera);
        Abound.setParent(Fcamera);
        break;
       case 2:
        scene.useCamera(Ocamera);
        Abound.setParent(Ocamera);
        break;
       case 3:
        scene.useCamera(Bcamera);
        Abound.setParent(Bcamera);
        var m = ACphycs.linearVelocity.size();
        Bcamera.move(ACmodel.worldPosition, Ovoid.WORLD, Ovoid.ABSOLUTE);
        Bcamera.moveXyz(ACfw.v[0]*(30.0+m), ACfw.v[1]*(30.0+m), ACfw.v[2]*(30.0+m),Ovoid.WORLD, Ovoid.RELATIVE);
        Bcamera.moveXyz(ACsd.v[0], ACsd.v[1], ACsd.v[2],Ovoid.WORLD, Ovoid.RELATIVE);
        ACaim.upvector.copy(Wy);
        break;
       default:
        scene.useCamera(Acamera);
        Abound.setParent(Acamera);
        Acamera.move(ACmodel.worldPosition, Ovoid.WORLD, Ovoid.ABSOLUTE);
        Acamera.moveXyz(ACfw.v[0]*-14.0, ACfw.v[1]*-14.0, ACfw.v[2]*-14.0,Ovoid.WORLD, Ovoid.RELATIVE);
        Acamera.moveXyz(ACup.v[0], ACup.v[1]+2.0, ACup.v[2],Ovoid.WORLD, Ovoid.RELATIVE);
        ACaim.upvector.copy(ACup);
        break;
      }
      Ovoid.log(2, "debug", "switch camera mode");
    }
    
    // Crash detection function for the aircraft Physics instance
    var crashDetect = function(node,p,n) {
      CM = n.dot(this.linearVelocity); /* this == ACphycs */
      CA = n.dot(ACup);
      if(CM < -5.0 || CA < 0.93) {
        // Emitt smoke at contact
        CsmokeB.move(p,0,1);
        CsmokeE.emits = true;
        CsmokeT = 0.3;
        // Apply violent impulse according to contact angle
        vx.crossOf(n, this.linearVelocity);
        Gv.crossOf(vx, n);
        Gv.normalize();
        Gv.scaleBy(-8000.0*this.linearVelocity.size());
        ACphycs.impulse(Gv, p, 0);
        // Make fan invisible
        var node = scene.search("pittss1-helices");
        node.visible = false;
        // Use friction for collision
        ACphycs.useFriction = true;
        // Add black smoke
        BsmokeB.setParent(ACmodel);
        BsmokeE.emits = true;
        // Disable engine
        M = 0.0; // Engine RPM
        T = 0.0; // Throttle
        // Show "R for Restart" message
        GUImsgR.visible = true;
        // Crashed state enable
        CRASHED = true;
      } 
      
      // Emitt smoke at contact
      if(this.linearVelocity.size() > 15.0) {
        CsmokeB.move(p,0,1);
        CsmokeE.emits = true;
        CsmokeT = 0.3;
      }
    }
    
    /* --- Common UI functions --- */
    // Go to OvoiD.JS home page
    AcFuncGohome = function() {
      window.location.href = "http://www.ovoid.org/js/home";
    };
    // Highlight Watermark link
    AcFuncMouseEnter = function(node) {
      node.setBgColor(1.0,1.0,1.0,0.8);
    };
    AcFuncMouseLeave = function(node) {
      node.setBgColor(1.0,1.0,1.0,0.6);
    };
    AcFuncMouseOver = function(node) {
      node.moveXyz(0.0,-Math.log(Math.sin(Ovoid.Timer.clock*0.015)+1.05)*2.0,0.0);
    };
    
    /* *** GLOBAL ONLOAD OVOID.JS FUNCTION DEF *** */
    Ovoid.onload = function()
    {
      // Set the scene as active
      Ovoid.useScene(scene);

      /* -- Assing loaded shaders to the Drawer's pipelines and layers -- */
      // Terrain's custom shader to all 1P&LP pipelines at layer 0
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_LP,0,"TERRAIN_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_LP,0,"TERRAIN_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_LP,0,"TERRAIN_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_1P,0,"TERRAIN_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_1P,0,"TERRAIN_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_1P,0,"TERRAIN_1P");
      // Trees's custom shader to all 1P pipelines at layer 4
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_1P,4,"TREES_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_1P,4,"TREES_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_1P,4,"TREES_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_LP,4,"TREES_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_LP,4,"TREES_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_LP,4,"TREES_LP");
      // Clouds's custom shader to all 1P pipelines at layer 3
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_1P,3,"CLOUDS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_1P,3,"CLOUDS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_1P,3,"CLOUDS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_LP,3,"CLOUDS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_LP,3,"CLOUDS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_LP,3,"CLOUDS_LP");
      // Buildings's custom shader to all 1P pipelines at layer 1 & 2
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_LP,1,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_LP,1,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_LP,1,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_1P,1,"BATIMENTS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_1P,1,"BATIMENTS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_1P,1,"BATIMENTS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_LP,2,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_LP,2,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_LP,2,"BATIMENTS_LP");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L2_GEOMETRY_1P,2,"BATIMENTS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L1_GEOMETRY_1P,2,"BATIMENTS_1P");
      Ovoid.Drawer.plugShader(Ovoid.PIPE_L0_GEOMETRY_1P,2,"BATIMENTS_1P");
      
      /* Create some nodes for effects */
      // Texture for smoke
      var smokeTexture = scene.create(Ovoid.TEXTURE, "smokeTexture");
      smokeTexture.loadSource("cloud.png", 1);
      // Black smoke emitter
      BsmokeE = scene.create(Ovoid.EMITTER, "BlackSmokeEmitter");
      BsmokeE.setColours(0.1, 0.1, 0.1, 1.0, 0.1, 0.1, 0.1, 0.0);
      BsmokeE.setSizes(1.0, 2.0);
      BsmokeE.setSprite(smokeTexture);
      BsmokeE.mass = -0.2;
      BsmokeE.life = 3.0;
      BsmokeE.rate = 100.0;
      BsmokeE.damping = 0.5;
      BsmokeE.velocity = 1.0;
      BsmokeE.model = Ovoid.DIFFUSE;
      BsmokeE.billboard = true;
      // Black smoke body
      BsmokeB = scene.create(Ovoid.BODY, "BlackSmokeLocator"); 
      BsmokeB.setShape(BsmokeE);
      BsmokeB.renderLayer = 5;
      BsmokeB.renderAlpha = true;
   
      // Contact smoke emitter
      CsmokeE = scene.create(Ovoid.EMITTER, "ContactSmokeEmitter");
      CsmokeE.setColours(0.4, 0.4, 0.35, 1.0, 0.4, 0.4, 0.35, 0.0);
      CsmokeE.setSizes(0.8, 2.0);
      CsmokeE.setSprite(smokeTexture);
      CsmokeE.mass = -0.1;
      CsmokeE.life = 3.0;
      CsmokeE.rate = 500.0;
      CsmokeE.damping = 0.5;
      CsmokeE.velocity = 3.0;
      CsmokeE.model = Ovoid.DIFFUSE;
      CsmokeE.billboard = true;
      // Contact smoke body
      CsmokeB = scene.create(Ovoid.BODY, "ContactSmokeLocator"); 
      CsmokeB.setShape(CsmokeE);
      CsmokeB.renderLayer = 5;
      CsmokeB.renderAlpha = true;
    
      // White smoke emitter
      WsmokeE = scene.create(Ovoid.EMITTER, "ContactSmokeEmitter");
      WsmokeE.setColours(0.9, 0.9, 0.9, 0.9, 0.6, 0.6, 0.6, 0.0);
      WsmokeE.setSizes(2.0, 40.0);
      WsmokeE.setSprite(smokeTexture);
      WsmokeE.mass = -0.1;
      WsmokeE.life = 11.0;
      WsmokeE.rate = 50.0;
      WsmokeE.damping = 0.99;
      WsmokeE.velocity = 1.8;
      WsmokeE.model = Ovoid.DIFFUSE;
      WsmokeE.billboard = true;
      // White smoke body
      WsmokeB = scene.create(Ovoid.BODY, "ContactSmokeLocator"); 
      WsmokeB.setShape(WsmokeE);
      WsmokeB.renderLayer = 5;
      WsmokeB.renderAlpha = true;
      
      
      /* --- Retrieve and store landscape and tree Bodys --- */
      // Retrieve landscape squares
      var list = Ovoid.searchMatches("terrain");
      for(var i = 0; i < list.length; i++) {
        if(list[i].type & Ovoid.BODY) {
          Llands.push(list[i]);
        }
      }
      // Retrieve trees
      var list = Ovoid.searchMatches("trees");
      for(var i = 0; i < list.length; i++) {
        if(list[i].type & Ovoid.BODY) {
          Ltrees.push(list[i]);
        }
      }
      // Retrieve active bounding sphere
      Abound = Ovoid.search("activeRangeSphere");

      
      /* --- Retrieve and store Aircraft elements --- */
      ACmodel = Ovoid.search("pittss1-fuselage");
      // Set white smoke parent to aircraft
      WsmokeB.setParent(ACmodel);
      WsmokeB.moveXyz(0.0,0.0,-0.8);
      // Retrieve aircraft physics
      ACphycs = Ovoid.search("pittss1-fuselagePhysics");
      ACphycs.setMass(W);
      ACphycs.setDamping(0.95, 0.1);
      ACphycs.restitution = 0.0;
      // Assign crash detection fonction to oncontact trigger
      ACphycs.oncontact = crashDetect;
      // Retrieve aircraft local space locator 
      ACspace = Ovoid.search("pitts-centre");
      // Retrieve aircraft helices material
      AChelicesMaterial = Ovoid.search("pittss1MaterialHelices");
      
      /* --- Assing expression to aircraft mobiles parts -- */
      var expr; // Expression Handle
      // Create and assing Expression to Engine Fan model
      expr = Ovoid.setExpression("pittss1-nez", Mrotate);
      if(expr) expr.play(1.0);
      // Create and assign Expression to Elevator models
      expr = scene.create(Ovoid.EXPRESSION, "EExpr");
      expr.addExpression(Erotate);
      expr.play(1.0);
      expr.setTarget(Ovoid.search("pittss1-gouvprof"));
      // Create and assign Expression to top Left Ailerons models
      expr = scene.create(Ovoid.EXPRESSION, "RHGExpr");
      expr.addExpression(RHGrotate);
      expr.play(1.0);
      expr.setTarget(Ovoid.search("pittss1-aileronhg"));
      // Create and assign Expression to bottom Left Ailerons models
      expr = scene.create(Ovoid.EXPRESSION, "RBGExpr");
      expr.addExpression(RBGrotate);
      expr.play(1.0);
      expr.setTarget(Ovoid.search("pittss1-aileronbg"));
      // Create and assign Expression to top Right Ailerons models
      expr = scene.create(Ovoid.EXPRESSION, "RHDExpr");
      expr.addExpression(RHDrotate);
      expr.play(1.0);
      expr.setTarget(Ovoid.search("pittss1-aileronhd"));
      // Create and assign Expression to bottom Right Ailerons models
      expr = scene.create(Ovoid.EXPRESSION, "RBDExpr");
      expr.addExpression(RBDrotate);
      expr.play(1.0);
      expr.setTarget(Ovoid.search("pittss1-aileronbd"));
      
      /* --- Retrieve and create cameras --- */
      // Retrieve free camera
      Fcamera = Ovoid.search("FreeCamera");
      Fcamera.setCliping(0.1, -1.0);
      Fcamera.moveXyz(0.0,0.0,0.0,1,1);
      Fcamera.rotateXyz(0.0,0.0,0.0,1,1);
      Fcamera.rotateXyz(1.8,0.0,0.0);
      Fcamera.moveXyz(0.0,-1.9,0.3);
      Fcamera.setFov(90);
      Fcamera.setParent(ACmodel);
      
      // Create camera locator for orbit camera
      Olocate = scene.create(Ovoid.TRANSFORM, "OrbitCameraLocator");
      
      // Create orbite camera
      Ocamera = scene.create(Ovoid.CAMERA, "OrbitCamera");
      Ocamera.setCliping(0.1, -1.0);
      Ocamera.setFov(60);
      Ocamera.setParent(Olocate);
      Ocamera.moveXyz(7.0,0.0,0.0);
      Ocamera.rotateXyz(0.0,1.57,0.0);
      
      // Create follower camera 
      Acamera = scene.create(Ovoid.CAMERA, "FollowerCamera");
      Acamera.setCliping(0.1, -1.0);
      Acamera.setFov(60);
      
      // Create flyby camera
      Bcamera = scene.create(Ovoid.CAMERA, "FlyByCamera");
      Bcamera.setCliping(0.1, -1.0);
      Bcamera.setFov(20);
            
      // Create aim constraint to aim at aircraft
      ACaim = scene.create(Ovoid.AIM, "aimToAircraft");
      // Add two camera as target of this constraint
      ACaim.setTarget(Acamera);
      ACaim.setTarget(Bcamera);
      ACaim.aimat = ACmodel;
      
      
      /* --- Retrieve GUI objects --- */
      // Altimeter gauge layer
      GUIgaugA = Ovoid.search("GUIgaugA");
      // Altimeter gauge little blade locator
      GUIlocApa = Ovoid.search("GUIlocApa");
      // Altimeter gauge big blade locator
      GUIlocAga = Ovoid.search("GUIlocAga");
      // Airspeed gauge layer 
      GUIgaugV = Ovoid.search("GUIgaugV");
      // Airspeed gauge big blade locator
      GUIlocVga = Ovoid.search("GUIlocVga");
      // RPM gauge layer
      GUIgaugM = Ovoid.search("GUIgaugM");
      // RPM gauge big blade locator
      GUIlocMga = Ovoid.search("GUIlocMga");
      // G-factor gauge layer
      GUIgaugG = Ovoid.search("GUIgaugG"); 
      // G-factor gauge big blade locator
      GUIlocGga = Ovoid.search("GUIlocGga");
      // R - Restart message
      GUImsgR = Ovoid.search("GUImsgR");
      GUImsgR.setSize(512,512);
      GUImsgR.visible = false;
      // C - Camera message
      GUImsgC = Ovoid.search("GUImsgC");
      GUImsgC.visible = false;
      // Throttle message
      GUImsgT = Ovoid.search("GUImsgT");
      GUImsgT.visible = false;
      // Arrows message
      GUImsgA = Ovoid.search("GUImsgA");
      GUImsgA.visible = false;
      // Overspeed warning message
      GUIwrnOS = Ovoid.search("GUIwrnOS");
      GUIwrnOS.visible = false;
      // Throttle panel
      GUIThrottleP = Ovoid.search("GUIThrottleP");
      // Throttle manet
      GUIThrottleM = Ovoid.search("GUIThrottleM"); 
      
      
      var body = Ovoid.search("aerodrome-macadam");
      body.renderAlpha = false;
      
      body = Ovoid.search("aerodrome-sol");
      body.renderAlpha = false;
      
      // Retrieve the sun
      var sun = Ovoid.search("sun");
      Ovoid.log(2, "debug", "sun.model=" + sun.model);
      Ovoid.log(2, "debug", "sun.worldPosition.w=" + sun.worldPosition.v[3]);
    
      /* --- Key binding --- */
      Ovoid.inputTrigger(null, 104, Ovoid.HELD, function(){Olocate.rotateXyz(0.0,0.0,0.1,1,0);});
      Ovoid.inputTrigger(null, 98, Ovoid.HELD, function(){Olocate.rotateXyz(0.0,0.0,-0.1,1,0);});
      Ovoid.inputTrigger(null, 100, Ovoid.HELD, function(){Olocate.rotateXyz(0.0,0.1,0.0,0,0);});
      Ovoid.inputTrigger(null, 102, Ovoid.HELD, function(){Olocate.rotateXyz(0.0,-0.1,0.0,0,0);});
      
      // Bind up and down arrow keys for Elevator
      Ovoid.inputTrigger(null, 38, Ovoid.HELD, EmoveUp);
      Ovoid.inputTrigger(null, 38, Ovoid.UP, EmoveCt);
      Ovoid.inputTrigger(null, 40, Ovoid.HELD, EmoveDn);
      Ovoid.inputTrigger(null, 40, Ovoid.UP, EmoveCt);
      // Bind left and right arrow keys for Ailerons
      Ovoid.inputTrigger(null, 37, Ovoid.HELD, RmoveL);
      Ovoid.inputTrigger(null, 37, Ovoid.UP, RmoveCt);
      Ovoid.inputTrigger(null, 39, Ovoid.HELD, RmoveR);
      Ovoid.inputTrigger(null, 39, Ovoid.UP, RmoveCt);
      // Bind pgup and pgdwn keys for Engine
      Ovoid.inputTrigger(null, 33, Ovoid.HELD, Mincr);
      Ovoid.inputTrigger(null, 34, Ovoid.HELD, Mdecr);
      Ovoid.inputTrigger(null, Ovoid.KB_P, Ovoid.HELD, Mincr);
      Ovoid.inputTrigger(null, Ovoid.KB_M, Ovoid.HELD, Mdecr);
      
      // Bind R for restart
      Ovoid.inputTrigger(null, Ovoid.KB_R, Ovoid.DOWN, startup);
      
      // Bind C for camera modes
      Ovoid.inputTrigger(null, Ovoid.KB_C, Ovoid.DOWN, SwCmode);
      
      // D key to display debug frame
      Ovoid.inputTrigger(null, Ovoid.KB_D, Ovoid.DOWN, function(){Ovoid.opt_showDebug=!Ovoid.opt_showDebug;Ovoid.opt_showHud=!Ovoid.opt_showHud;});
      
      Ovoid.inputTrigger(null, Ovoid.KB_Y, Ovoid.DOWN, function(){Ovoid.Drawer.opt_perLightPass=!Ovoid.Drawer.opt_perLightPass});
      
      /* --- GUI for debuging purposes --- */
      GUIlegend = scene.create(Ovoid.TEXT, "GUIlegend");
      GUIlegend.setFgColor(1.0,1.0,0.0,1.0);
      GUIlegend.moveXyz(10, 160, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
      GUIlegend.visible = false;

      scene.useCamera(Acamera);
      
      var texture = scene.create(Ovoid.TEXTURE, "watermarkTexture");
      texture.loadSource('ovoid-watermark.png', 1);
      GuiWatermark = scene.create(Ovoid.LAYER, "watermarkLayer");
      GuiWatermark.setSize(200,73);
      GuiWatermark.setBgColor(1.0,1.0,1.0,0.6);
      GuiWatermark.setBgTexture(texture);
      
      texture = scene.create(Ovoid.TEXTURE, "helpframeTexture");
      texture.loadSource('pittsdemo-splash.png', 1);
      GuiHelpframe = scene.create(Ovoid.LAYER, "helpframeLayer");
      GuiHelpframe.setSize(512,512);
      GuiHelpframe.setBgColor(1.0,1.0,1.0,1.0);
      GuiHelpframe.setBgTexture(texture);
      
      // OvoiD.JS home
      Ovoid.setAction(Ovoid.MOUSE_LEAVE, GuiWatermark, AcFuncMouseLeave );
      Ovoid.setAction(Ovoid.MOUSE_ENTER, GuiWatermark, AcFuncMouseEnter );
      Ovoid.setAction(Ovoid.MOUSE_OVER, GuiWatermark, AcFuncMouseOver );
      Ovoid.setAction(Ovoid.MOUSE_OVER_LEFT_DOWN, GuiWatermark, AcFuncGohome );
      
      startup();
    }
    
    /* *** GLOBAL ONLOOP OVOID.JS FUNCTION DEF *** */
    Ovoid.onloop = function()
    {
      // Recenter elevator and ailerons if needed
      if(Erelease) EmoveCt();
      if(Rrelease) RmoveCt();
      
      // Handle contact smole effect
      if(CsmokeE.emits) {
        CsmokeT -= Ovoid.Timer.quantum;
        if(CsmokeT < 0.0) {
          CsmokeE.emits = false;
        }
      }
      
      /* --- Global Aircraft Simulation update --- */
      // Update aircraft orientations
      ACfw.v[0] = ACspace.worldMatrix.m[4];
      ACfw.v[1] = ACspace.worldMatrix.m[5];
      ACfw.v[2] = ACspace.worldMatrix.m[6];

      ACup.v[0] = ACspace.worldMatrix.m[8];
      ACup.v[1] = ACspace.worldMatrix.m[9];
      ACup.v[2] = ACspace.worldMatrix.m[10];
      
      ACsd.v[0] = ACspace.worldMatrix.m[0];
      ACsd.v[1] = ACspace.worldMatrix.m[1];
      ACsd.v[2] = ACspace.worldMatrix.m[2];
      
      RV = ACfw.dot(ACphycs.linearVelocity); // Relative speed
      AV = ACphycs.linearVelocity.size(); // Absolute speed
      // Local velocity vector
      AClv.transform4InverseOf(ACphycs.linearVelocity, ACspace.worldMatrix);   
      // G load factor
      G = (-ACphycs.linearVelocity.dot(ACup)/9.8) + ACup.dot(Wy);

      // Comput vomitive factor
      var d = Math.pow(0.8, Ovoid.Timer.quantum);
      V = d*V + (1-d)*(Math.abs(uG-G)*1000.0);
      uG = G;
      
      A = ACmodel.worldPosition.v[1]; // Aircraft altitude
      
      if(!CRASHED) {
        // Update engine RPM
        M += (((T*Mmx) - M)*(Ovoid.Timer.quantum));
        AChelicesMaterial.opacity = 1.2-(M/Mmx);
      
        // Pull aircraft according to engine
        Gv.copy(ACfw);
        Gv.scaleBy(Math.exp((M/Mmx)*P));
        ACphycs.impulse(Gv, Mlocp, 1);
       
        // Adjust elevator portance to pich aircraft
        Eplan.m[5] = (-6.5)+(E*(Ef-RV));

        // Adjust ailerons portance to roll aircraft
        LWplan.m[5] = Pf+(R*Rf);
        RWplan.m[5] = Pf-(R*Rf); 
        
        // Check overspeed crash
        if(RV > 130.0) {
          // Make fan invisible
          var node = scene.search("pittss1-helices");
          node.visible = false;
          // Use friction for collision
          ACphycs.useFriction = true;
          
          BsmokeB.setParent(ACmodel);
          BsmokeE.emits = true;

          M = 0.0; // Engine RPM
          T = 0.0; // Throttle
          GUImsgR.visible = true;
          CRASHED = true;
          // Asymetric portance to twist aircraft
          LWplan.m[5] = -500.0; //  Default Portance 
        }
      }
      
      // Apply aerodynamic tensors plane to physics node
      Gv.transform3Of(AClv, LWplan);
      Gv.transform4(ACspace.worldMatrix);
      ACphycs.impulse(Gv, LWlocp, 1);

      Gv.transform3Of(AClv, RWplan);
      Gv.transform4(ACspace.worldMatrix);
      ACphycs.impulse(Gv, RWlocp, 1);
      
      Gv.transform3Of(AClv, Eplan);
      Gv.transform4(ACspace.worldMatrix);
      ACphycs.impulse(Gv, Elocp, 1);
  
      Gv.transform3Of(AClv, Vplan);
      Gv.transform4(ACspace.worldMatrix);
      ACphycs.impulse(Gv, Vlocp, 1);
      
      /* --- Global Terrain & trees update --- */
      var i, j, k; // used many times
      // Actualisation de la position des arbres
      var t = 0;
      var l = 0;
      i = Llands.length;
      while(i--) {
        if(Llands[i].boundingSphere.worldCenter.dist(Abound.boundingSphere.worldCenter) <= (Llands[i].boundingSphere.radius+Abound.boundingSphere.radius)) {
          j = Llands[i].shape.triangles[0].length;
          while(j--) {
            Gp.copy(Llands[i].shape.triangles[0][j].center);
            Gp.transform4(Llands[i].worldMatrix);
            Gv.copy(Llands[i].shape.triangles[0][j].normal);
            Gv.transform4(Llands[i].worldMatrix);
            if(Wy.dot(Gv) > 0.9 && Gp.v[1] < 1000.0 ) {
              if(Abound.boundingSphere.worldCenter.dist(Gp) <= Abound.boundingSphere.radius) {
                Ltrees[t].visible = true;
                /* Exception pour les arbres près du terrain d'aviation */
                if(i == 13 && j == 42) {
                  Gp.v[2]+=70.0;
                  Gp.v[0]-=50.0;
                }
                Ltrees[t].move(Gp, Ovoid.WORLD, Ovoid.ABSOLUTE);
                Gv.normalize();
                vx.crossOf(Wz, Gv);
                vy.crossOf(Gv, vx);
                var rx, ry, rz;
                var cy = Math.sqrt(vx.v[0] * vx.v[0] + vx.v[1] * vx.v[1]);
                if (cy > 0.001) {
                  rx = Math.atan2(vy.v[2], Gv.v[2]);
                  ry = Math.atan2(-vx.v[2], cy);
                  rz = Math.atan2(vx.v[1], vx.v[0]);
                } else {
                  rx = Math.atan2(-Gv.v[1], vy.v[1]);
                  ry = Math.atan2(-vx.v[2], cy);
                  rz = 0.0;
                }
                Ltrees[t].rotateXyz(0.0,0.0,0.0,0,1);
                Ltrees[t].rotateXyz(rx,ry,rz);
                t++;
                if(t == 24) break;
              }
            }
          }
          l++;
          if(l > 4) break;
        }
      }
      
      for(i = t; i < 24; i++) {
        Ltrees[i].visible = false;
      }
      
      /* --- Global Cameras update --- */
      switch(CMode) 
      {
        case 1:
          break;
        case 2:
          Olocate.move(ACspace.worldPosition,0,1);
          // Force transformation caching to prevent motion shift
          Olocate.cachTransform();
          Ocamera.cachTransform();
          Ocamera.cachCamera();
          break;
        case 3: 
          // Force transformation caching to prevent motion shift
          ACaim.cachAim();
          Bcamera.cachTransform();
          Bcamera.cachCamera();
          break;
        default:
          Gv.copy(ACspace.worldPosition);
          ACfw.scaleBy(4.0);
          Gv.subBy(ACfw);
          Gv.addBy(ACup);
          Gv.subBy(Acamera.worldPosition);
          Gv.scaleBy((Ovoid.Timer.quantum*0.5)*(0.2+(2.0+(AV*0.3))));
          Acamera.move(Gv, Ovoid.WORLD, Ovoid.RELATIVE);
          Gv.copy(ACup);
          Gv.subBy(ACaim.upvector);
          Gv.scaleBy((Ovoid.Timer.quantum*0.5)*(0.2+(2.0+(AV*0.3))));
          ACaim.upvector.addBy(Gv);
          ACaim.upvector.normalize();
          // Force transformation caching to prevent motion shift
          ACaim.cachAim();
          Acamera.cachTransform();
          Acamera.cachCamera();
          break;
      }
      
      /* --- Global GUI update --- */
      GuiWatermark.moveXyz(Ovoid.Frame.size.v[0]-210, Ovoid.Frame.size.v[1]-83, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
      if(displayHelp)
        GuiHelpframe.moveXyz((Ovoid.Frame.size.v[0]*0.5)-256, (Ovoid.Frame.size.v[1]*0.5)-256, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
      // Update gauges positions
      GUIgaugA.moveXyz(10, Ovoid.Frame.size.v[1]-138, 0, 1, 1); 
      GUIgaugV.moveXyz(10, Ovoid.Frame.size.v[1]-290, 0, 1, 1); 
      GUIgaugM.moveXyz(10, 20, 0, 1, 1);
      GUIgaugG.moveXyz(Ovoid.Frame.size.v[0]-138, 20, 0, 1, 1);
      GUIThrottleP.moveXyz(32, 160, 0, 1, 1);
      // Update blades rotations
      GUIlocApa.rotateXyz(0.0,0.0,((A*3.28)*0.001)*0.318,1,1); // (Meter to Feet) / 1000 / 3.14
      GUIlocAga.rotateXyz(0.0,0.0,((A*3.28)*0.01)*0.318,1,1); // (Meter to Feet) / 100 / 3.14
      GUIlocVga.rotateXyz(0.0,0.0,((AV*1.9438)*0.00294)*3.14159,1,1); // (M/s to knots) / 340 * 3.14
      GUIlocMga.rotateXyz(0.0,0.0,-1.35+((M*0.000285)*2.7),1,1);
      GUIlocGga.rotateXyz(0.0,0.0,-1.1+(G*0.2),1,1);
      // Update throttle manet position
      GUIThrottleM.moveXyz(0, 205-(Z*205), 0, 1, 1);
      
      if(CRASHED) {
        GUImsgR.moveXyz((Ovoid.Frame.size.v[0]*0.5)-256, (Ovoid.Frame.size.v[1]*0.5)-256, 0, Ovoid.WORLD, Ovoid.ABSOLUTE);
      }
      if(RV > 110.0) {
        if(WTimer < 0.0) {
          WTimer = 0.2;
          GUIwrnOS.visible = !GUIwrnOS.visible;
        }
        WTimer -= Ovoid.Timer.quantum;
        GUIwrnOS.moveXyz((0.5*Ovoid.Frame.size.v[0])-256,192,0,1,1);
      } else {
        GUIwrnOS.visible=false;
        WTimer = -0.1;
      }
      
      // Enable or disable smoke emitter
      if(AV > 10 || A > 3) {
        WsmokeE.emits = true;
        WsmokeE.rate = 20+(Math.abs(Math.round(AV))*0.5);
      } else {
        WsmokeE.emits = false;
      }
      
      // Update debug string
      if(GUIlegend.visible) {
        GUIlegend.string = "X axis:" + Math.round(X*100) + " %\n";
        GUIlegend.string += "Y axis:" + Math.round(Y*100) + " %\n";
        GUIlegend.string += "Z axis:" + Math.round(Z*100) + " %\n";
        GUIlegend.string += "Throttle:" + Math.round(T*100) + " %\n";
        GUIlegend.string += "Abs Speed:" + Math.round(AV) + " m/s\n";
        GUIlegend.string += "Rel Speed:" + Math.round(RV) + " m/s\n";
        GUIlegend.string += "G-Force:" + Math.round(G) + "g\n";
        GUIlegend.string += "Vomit Factor:" + Math.round(V) + "%\n";
        GUIlegend.string += "Contact Mag:" + CM + "\n";
        GUIlegend.string += Ovoid.Input._gpHandle + "\n";
      }
    }

    /* *** MAIN START FUNCTION *** */
    var main = function() {

      // Loading landscape and environement scene
      Ovoid.includeOjsScene("pittsdemo-terrain.ojsn", scene);
      Ovoid.includeOjsScene("pittsdemo-pitts-s1-2.ojsn", scene);
      Ovoid.includeOjsScene("pittsdemo-ingame-gui.ojsn", scene);
      
      // Loading custom shaders
      Ovoid.includeShader(-1,-1,"pitts_terrain.vs", "pitts_terrain_1l.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "TERRAIN_LP");
      Ovoid.includeShader(-1,-1,"pitts_terrain.vs", "pitts_terrain_nl.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "TERRAIN_1P");
      Ovoid.includeShader(-1,-1,"pitts_trees.vs", "pitts_trees_nl.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "TREES_1P");
      Ovoid.includeShader(-1,-1,"pitts_trees.vs", "pitts_trees_1l.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "TREES_LP");
      Ovoid.includeShader(-1,-1,"pitts_clouds.vs", "pitts_clouds_nl.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "CLOUDS_1P");
      Ovoid.includeShader(-1,-1,"pitts_clouds.vs", "pitts_clouds_1l.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "CLOUDS_LP");
      Ovoid.includeShader(-1,-1,"pitts_batiments.vs", "pitts_batiments_1l.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "BATIMENTS_LP");
      Ovoid.includeShader(-1,-1,"pitts_batiments.vs", "pitts_batiments_nl.fs", "ovoid.js/lib/glsl/ovoid_glslwm.ojsn", "BATIMENTS_1P");
      
      // Initialize library
      Ovoid.init("canvas");
    }
    main();
    