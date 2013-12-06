/* *** MAIN START FUNCTION *** */
		function main() {

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