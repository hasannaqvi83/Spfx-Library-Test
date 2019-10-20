// const { paths } = require('react-app-rewired');

// module.exports = (config, env) => {
//     const path = paths.appPath;
//     console.log('path ', path);
//     config.module.rules.push(
//         {
//             test: /\.css$/i,
//             use: [
//                 'css-loader',
//                 {
//                     loader: require.resolve('css-loader'),
//                     options: {
//                         modules: true,
//                         importLoaders: 1,
//                         localIdentName: '[local]'
//                     }
//                 }
//             ],
//             include: path //path.resolve('src')
//         }
//     )

//     // const cssLoader = getLoader(
//     //     config.module.rules,
//     //     rule => String(rule.test) === String(/\.module\.css$/),
//     //   ).loader.find(loader => loaderNameMatches(loader, "css-loader"));
//     //   cssLoader.options.localIdentName = "[local]";

//     return config
// }


// // const { getLoader } = require('react-app-rewired');

// // const cssLoaderMatcher = function (rule) {
// //   return rule.loader && rule.loader.indexOf('css-loader') !== -1;
// // };

// // function rewireCSS(config, env) {
// //   const cssRules = getLoader(config.module.rules, rule => rule.test && String(rule.test) === String(/\.css$/));
// //   cssRules.test = /\.s?css$/;
// //   const cssLoader = getLoader(config.module.rules, cssLoaderMatcher);
// //   cssLoader.options = {
// //     modules: true,
// //     importLoaders: 1,
// //     localIdentName: '[local]',
// //   };
// //   return config;
// // }
// // module.exports = rewireCSS;

//   //___[hash:base64:5]