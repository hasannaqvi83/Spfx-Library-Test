'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        if (build.getConfig().production) {
            var basePath = build.writeManifests.taskConfig.cdnBasePath;
            if (!basePath.endsWith('/')) {
                basePath += '/';
            }
            generatedConfiguration.output.publicPath = basePath;
        }
        else {
            generatedConfiguration.output.publicPath = "/dist/";
        }
  
        //Without below code, SharePoint is going to pull React from the version that comes with SharePoint Online and not include any React dependencies in your bundle.
        //To pull from our installed version of React, we update our configuration as follows:
        generatedConfiguration.externals = generatedConfiguration.externals
        .filter(name => !(["react", "react-dom"].includes(name)))
  
        return generatedConfiguration;
    }
  });
  
  require('./gulpfile.generatelocalkeys.js');
  build.initialize(gulp);
