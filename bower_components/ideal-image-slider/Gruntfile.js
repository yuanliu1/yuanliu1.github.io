module.exports=function(e){e.initConfig({pkg:e.file.readJSON("package.json"),jshint:{options:{reporter:require("jshint-stylish")},dist:{files:{src:["ideal-image-slider.js"]}},extensions:{files:{src:["extensions/**/*.js"]}}},uglify:{options:{banner:"/*! Ideal Image Slider v<%= pkg.version %> */\n"},dist:{files:{"ideal-image-slider.min.js":"ideal-image-slider.js"}}},"string-replace":{version:{options:{replacements:[{pattern:/(v\d+.\d+.\d+)/,replacement:"v<%= pkg.version %>"}]},files:{"ideal-image-slider.js":"ideal-image-slider.js","ideal-image-slider.css":"ideal-image-slider.css"}}},qunit:{all:["tests/**/*.html"]},watch:{options:{livereload:!0},dist:{files:["ideal-image-slider.js"],tasks:["jshint:dist","uglify","string-replace"],options:{spawn:!1}},extensions:{files:["extensions/**/*.js"],tasks:["jshint:extensions"],options:{spawn:!1}}}}),require("load-grunt-tasks")(e),e.registerTask("forceOn","turns the --force option ON",function(){e.option("force")||(e.config.set("forceStatus",!0),e.option("force",!0))}),e.registerTask("forceOff","turns the --force option OFF",function(){e.config.get("forceStatus")&&(e.config.set("forceStatus",!1),e.option("force",!1))}),e.registerTask("default",["jshint","uglify","string-replace","watch"]),e.registerTask("test",["qunit"])};