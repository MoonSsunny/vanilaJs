/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/main.js":
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
/***/ (() => {

eval("// // 웹팩빌드시 사용\n// import \"../stylesheets/style.css\";\n\n\nwindow.onload = () => {\n  const title = document.querySelector(\".title\");\n  const container = document.querySelector(\".content\");\n  const bestLife = document.querySelector(\".best__life\");\n  const bestFood = document.querySelector(\".best__food\");\n  const bestTrip = document.querySelector(\".best__trip\");\n  const bestCulture = document.querySelector(\".best__culture\"); // ranking rendering\n\n  const listItems = () => {\n    title.innerHTML = `<div class=\"title__ranking\"><span>실시간 TOP12</span></div>`;\n    return fetch(\"/api/best\").then(response => response.json()).then(json => json);\n  };\n\n  const displayItems = items => {\n    const container = document.querySelector(\".content__best\");\n    container.innerHTML = items.map((item, index) => createHomeString(item, index)).join(\"\");\n  };\n\n  const createHomeString = (item, index) => {\n    return `  \n \n   <a href=\"${item.url}\">\n  \n    <div class=\"content__best__title\">\n\n        <p class=\"ranking__number\">${index + 1}</p>\n        <div>  \n            <h2>${item.title}</h2>\n            <h3> by ${item.mediaName}</h3>\n        </div>\n \n    </div>\n    </a>\n `;\n  };\n\n  listItems().then(item => displayItems(item)).catch(error => console.log(error));\n\n  const dataApi = data => {\n    return fetch(`/api/content/${data}`).then(response => response.json()).then(json => json);\n  }; // 메인페이지 best\n\n\n  const mainBest = (best, bestName) => {\n    return dataApi(`${best}`).then(item => item.slice(0, 4)).then(json => setState(bestName, json));\n  };\n\n  mainBest(\"life\", bestLife);\n  mainBest(\"food\", bestFood);\n  mainBest(\"trip\", bestTrip);\n  mainBest(\"culture\", bestCulture); // 서브페이지 랜더링\n\n  const state = data => {\n    switch (data) {\n      case \"life\":\n        title.innerHTML = `<div class=\"title__life\"><span >라이프</span></div>`;\n        dataApi(data).then(json => setState(container, json));\n        break;\n\n      case \"food\":\n        title.innerHTML = `<div class=\"title__food\"><span >음식</span></div>`;\n        dataApi(data).then(json => setState(container, json));\n        break;\n\n      case \"trip\":\n        title.innerHTML = `<div class=\"title__trip\"><span >여행</span></div>`;\n        dataApi(data).then(json => setState(container, json));\n        break;\n\n      case \"culture\":\n        title.innerHTML = `<div class=\"title__culture\"><span >문화</span></div>`;\n        dataApi(data).then(json => setState(container, json));\n        break;\n\n      case \"favorite\":\n        title.innerHTML = `<div class=\"title__favorite\"><span >즐겨찾기</span></div>`;\n\n      default:\n        break;\n    }\n  };\n\n  const setState = (name, newState) => {\n    name.innerHTML = newState.map(item => render(item)).join(\"\");\n  };\n\n  const render = item => {\n    return ` \n  <div class=\"content__section\">\n    <a href=\"${item.url}\">\n      <img\n          src=\"${item.imageUrl}\"\n          alt=\"\"\n      />\n      <div class=\"content__title\">\n        <h2>${item.title}</h2>\n        <p>${item.summaryContent}</p>\n        <h3> by ${item.mediaName}</h3>\n      </div>\n  </a>\n\n</div>\n  `;\n  }; // 새로고침 없이 router 처리\n\n\n  const listBtn = document.querySelector(\".navbar__list\");\n  listBtn.addEventListener(\"click\", event => {\n    const targetName = event.target.id;\n    const pathName = event.target.getAttribute(\"route\");\n\n    if (!targetName) {\n      return;\n    } else if (targetName === \"ranking\") {\n      listItems().then(item => displayItems(item)).catch(console.log);\n      location.href = \"/\";\n    } else {\n      historyRouterPush(pathName);\n      state(targetName);\n    }\n  });\n\n  const historyRouterPush = pathName => {\n    window.history.pushState({}, pathName, window.location.origin + pathName);\n  };\n\n  const reloadPage = () => {\n    const pathName = window.location.pathname;\n    const pathNameItem = document.querySelector(`[route=\"${pathName}\"]`);\n\n    if (pathName.id === \"ranking\") {\n      location.href = \"/\";\n    } else {\n      state(pathNameItem.id);\n    }\n  };\n\n  window.onpopstate = () => {\n    reloadPage();\n  };\n\n  reloadPage();\n};\n\n//# sourceURL=webpack://zum/./public/javascripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/javascripts/main.js"]();
/******/ 	
/******/ })()
;