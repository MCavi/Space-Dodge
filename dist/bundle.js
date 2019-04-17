/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/spaceship.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/spaceship.js":
/*!*************************************!*\
  !*** ./src/javascript/spaceship.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/gate */ \"./src/object/gate.js\");\n\n\n\n// ---------------------------------------------------------------------//\n// ---------------------------------------------------------------------//\n// ---------------------------------------------------------------------//\n// ---------------------------------------------------------------------//\n// ---------------------------------------------------------------------//\ndocument.addEventListener('DOMContentLoaded', () => {\n    \n    \n\n    // Firebase Config\n    const firebaseConfig = {\n        apiKey: \"AIzaSyDMyAUaLi0HoaZsTsfFUJ7v0KjPSM5iERc\",\n        authDomain: \"heli-escape.firebaseapp.com\",\n        databaseURL: \"https://heli-escape.firebaseio.com\",\n        projectId: \"heli-escape\",\n        storageBucket: \"heli-escape.appspot.com\",\n        messagingSenderId: \"83868845549\"\n    };\n    firebase.initializeApp(firebaseConfig);\n\n\n    const database = firebase.database();\n    const ref = database.ref('scores');\n\n    ref.on('value', gotData, errData);\n    \n    function gotData(data) {\n        const scores = data.val();\n        // console.log(data);\n        const keys = Object.keys(scores);\n        const scoreList = []\n        for (let idx = 0; idx < keys.length; idx++) {\n\n            const key = keys[idx];\n            scoreList.push(scores[key]);\n\n        };\n\n        scoreList.sort( ( obj1, obj2 ) => { \n            if (obj1.score < obj2.score) return 1;\n            if (obj1.score > obj2.score) return -1;\n            if ( obj1.score === obj2.score ) return 0;\n            })\n\n        const leaderBoardLength = Math.min(scoreList.length, 10);\n        const highScores = scoreList.slice( 0, leaderBoardLength );\n        const ul = document.getElementById(\"leaderboard-list\");\n\n\n        for ( let idx = 0; idx < highScores.length; idx++ ) {\n            if ( highScores[idx].name && highScores[idx].score && !document.getElementById('9') ) {\n                const name = highScores[idx].name;\n                const score = highScores[idx].score;\n                const li = document.createElement( 'li' );\n                li.setAttribute( \"id\", idx );\n                li.innerHTML = name + \" :   \" + score;\n                ul.appendChild(li);\n            };\n        };\n        \n    };\n\n    function errData(err) {\n        console.log('Error!');\n        console.log(err);\n    }\n\n    // Canvas\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n\n    // ---------------------------------------------------------------------//\n    // ---------------------------------------------------------------------//\n    // ---------------------------------------------------------------------//\n    // ---------------------------------------------------------------------//\n    document.getElementById('startButton').addEventListener('click', () => {\n        const startButton = document.getElementById('startButton');\n        startButton.style.display = 'none';\n        \n        document.getElementById(\"restart-button\").onclick = () => { handleRestart() };\n        document.getElementById('submit-button').onclick = () => { handleSubmit() };\n\n        const gates = [];\n        gates[0] = new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n        let score = 0;\n\n        // Adds new gate once previous gate reaches 400px.\n        // Removes gate once it leaves the bounds of the canvas.\n        function checkGate(){\n            for (let i = 0; i < gates.length; i++) {\n                gates[i].draw();\n            };\n            if (gates[0].y == 300) {\n                gates.push(new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n            };\n            if (gates[0].y == 630) {\n                gates.shift();\n            };\n        };\n    \n        // MAIN HIT DETECTION\n        function hitDetected(){\n            if ((ship.y == gates[0].y && !(isHittingWall() || isHittingGate())) || (ship.y == gates[0].y && score == 12) ) {\n                score += 1;\n            };\n            if ( isHittingWall() || isHittingGate() ) {\n                gameOver();\n            };\n        };\n    \n        // Wall hit detection\n        function isHittingWall(){\n            if (ship.x < -2 || ship.x > canvas.width - 85) {\n                return true;\n            };\n        };\n    \n        // Gate hit detection\n        function isHittingGate() {\n            for ( let i = 0; i < gates.length; i++ ) {\n                if (isHittingLeftGate(i) || isHittingRightGate(i)) {\n                    return true ;\n                };\n            };\n        };\n    \n        // Left gate hit detection.\n        function isHittingLeftGate(i) {\n            if (ship.x < gates[i].leftX + gates[i].leftWidth &&\n                ship.x + ship.width > gates[i].leftX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            };\n        };\n    \n        // Right gate hit detection.\n        function isHittingRightGate(i) {\n            if (ship.x < gates[i].rightX + gates[i].rightWidth &&\n                ship.x + ship.width > gates[i].rightX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            }\n        }\n    \n        function gameOver(){\n            ship.acc = 0;\n            ship.hSpeed = 0;\n\n            for ( let i = 0; i < gates.length; i++) {\n                gates[i].vSpeed = 0;\n            }\n\n            sleep(500).then(() => {\n                document.getElementById('score').innerHTML = score;\n                document.getElementById('gameover').style.display = \"flex\";\n            })\n        };\n\n        var count = 4;\n        function countdown() {\n            if (count > 0) {\n                ctx.clearRect(0, 0, canvas.width, canvas.height);\n                ship.draw();\n                ctx.font = \"54px 'Chewy', cursive\";\n                ctx.fillStyle = \"smoke-white\";\n                ctx.fillText(count, 260, 300);\n                count--;\n                setTimeout(countdown, 700);\n            }\n            else {\n                gameEngine()\n            }\n        }\n        \n        function handleRestart(){\n            document.location.reload();\n        }\n\n        function handleSubmit(){\n            let name = document.getElementById('initial-input').value.slice(0,3);\n            const data = {\n                name: name,\n                score: score\n            }\n            ref.push(data);\n            handleRestart();\n        }\n    \n        function drawScore() {\n            ctx.font = \"48px 'Chewy', cursive\";\n            ctx.fillStyle = \"black\";\n            ctx.fillText(score, 260, 50);\n        };\n        \n    \n        // MAIN GAME FUNCTION\n        function gameEngine() {\n            hitDetected();\n            ctx.clearRect( 0, 0, canvas.width, canvas.height );\n            checkGate();\n            drawScore();\n            ship.draw();\n            requestAnimationFrame(gameEngine)\n        };\n\n\n        countdown();\n\n        // Helper functions\n        function sleep(time) {\n            return new Promise((resolve) => setTimeout(resolve, time));\n        }\n\n    })\n\n\n    \n\n\n\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7O0FBRTVDO0FBQ0E7O0FBRUE7O0FBRUEsMkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7O0FBR0EsMEJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixvREFBSTs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTtBQUNuRSxrRUFBa0U7O0FBRWxFO0FBQ0EsdUJBQXVCLG9EQUFJO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9EQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7Ozs7OztBQVFMLENBQUMiLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuLi9vYmplY3Qvc2hpcCc7XG5pbXBvcnQgR2F0ZSBmcm9tICcuLi9vYmplY3QvZ2F0ZSc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBcbiAgICBcblxuICAgIC8vIEZpcmViYXNlIENvbmZpZ1xuICAgIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5RE15QVVhTGkwSG9hWnNUc2ZGVUo3djBLalBTTTVpRVJjXCIsXG4gICAgICAgIGF1dGhEb21haW46IFwiaGVsaS1lc2NhcGUuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vaGVsaS1lc2NhcGUuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgICAgcHJvamVjdElkOiBcImhlbGktZXNjYXBlXCIsXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiaGVsaS1lc2NhcGUuYXBwc3BvdC5jb21cIixcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODM4Njg4NDU1NDlcIlxuICAgIH07XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cblxuICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICBjb25zdCByZWYgPSBkYXRhYmFzZS5yZWYoJ3Njb3JlcycpO1xuXG4gICAgcmVmLm9uKCd2YWx1ZScsIGdvdERhdGEsIGVyckRhdGEpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGdvdERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBzY29yZXMgPSBkYXRhLnZhbCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjb3Jlcyk7XG4gICAgICAgIGNvbnN0IHNjb3JlTGlzdCA9IFtdXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGtleXMubGVuZ3RoOyBpZHgrKykge1xuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2lkeF07XG4gICAgICAgICAgICBzY29yZUxpc3QucHVzaChzY29yZXNba2V5XSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBzY29yZUxpc3Quc29ydCggKCBvYmoxLCBvYmoyICkgPT4geyBcbiAgICAgICAgICAgIGlmIChvYmoxLnNjb3JlIDwgb2JqMi5zY29yZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAob2JqMS5zY29yZSA+IG9iajIuc2NvcmUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggb2JqMS5zY29yZSA9PT0gb2JqMi5zY29yZSApIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsZWFkZXJCb2FyZExlbmd0aCA9IE1hdGgubWluKHNjb3JlTGlzdC5sZW5ndGgsIDEwKTtcbiAgICAgICAgY29uc3QgaGlnaFNjb3JlcyA9IHNjb3JlTGlzdC5zbGljZSggMCwgbGVhZGVyQm9hcmRMZW5ndGggKTtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkLWxpc3RcIik7XG5cblxuICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgaGlnaFNjb3Jlcy5sZW5ndGg7IGlkeCsrICkge1xuICAgICAgICAgICAgaWYgKCBoaWdoU2NvcmVzW2lkeF0ubmFtZSAmJiBoaWdoU2NvcmVzW2lkeF0uc2NvcmUgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc5JykgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGhpZ2hTY29yZXNbaWR4XS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gaGlnaFNjb3Jlc1tpZHhdLnNjb3JlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2xpJyApO1xuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSggXCJpZFwiLCBpZHggKTtcbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBuYW1lICsgXCIgOiAgIFwiICsgc2NvcmU7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVyckRhdGEoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciEnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG5cbiAgICAvLyBDYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3R4KTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydC1idXR0b25cIikub25jbGljayA9ICgpID0+IHsgaGFuZGxlUmVzdGFydCgpIH07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHsgaGFuZGxlU3VibWl0KCkgfTtcblxuICAgICAgICBjb25zdCBnYXRlcyA9IFtdO1xuICAgICAgICBnYXRlc1swXSA9IG5ldyBHYXRlKGN0eCk7XG4gICAgICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICAgICAgLy8gQWRkcyBuZXcgZ2F0ZSBvbmNlIHByZXZpb3VzIGdhdGUgcmVhY2hlcyA0MDBweC5cbiAgICAgICAgLy8gUmVtb3ZlcyBnYXRlIG9uY2UgaXQgbGVhdmVzIHRoZSBib3VuZHMgb2YgdGhlIGNhbnZhcy5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tHYXRlKCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXNbaV0uZHJhdygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChnYXRlc1swXS55ID09IDMwMCkge1xuICAgICAgICAgICAgICAgIGdhdGVzLnB1c2gobmV3IEdhdGUoY3R4KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGdhdGVzWzBdLnkgPT0gNjMwKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIE1BSU4gSElUIERFVEVDVElPTlxuICAgICAgICBmdW5jdGlvbiBoaXREZXRlY3RlZCgpe1xuICAgICAgICAgICAgaWYgKChzaGlwLnkgPT0gZ2F0ZXNbMF0ueSAmJiAhKGlzSGl0dGluZ1dhbGwoKSB8fCBpc0hpdHRpbmdHYXRlKCkpKSB8fCAoc2hpcC55ID09IGdhdGVzWzBdLnkgJiYgc2NvcmUgPT0gMTIpICkge1xuICAgICAgICAgICAgICAgIHNjb3JlICs9IDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCBpc0hpdHRpbmdXYWxsKCkgfHwgaXNIaXR0aW5nR2F0ZSgpICkge1xuICAgICAgICAgICAgICAgIGdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBXYWxsIGhpdCBkZXRlY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nV2FsbCgpe1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IC0yIHx8IHNoaXAueCA+IGNhbnZhcy53aWR0aCAtIDg1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBHYXRlIGhpdCBkZXRlY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nR2F0ZSgpIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGdhdGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGlmIChpc0hpdHRpbmdMZWZ0R2F0ZShpKSB8fCBpc0hpdHRpbmdSaWdodEdhdGUoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWUgO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBMZWZ0IGdhdGUgaGl0IGRldGVjdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nTGVmdEdhdGUoaSkge1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IGdhdGVzW2ldLmxlZnRYICsgZ2F0ZXNbaV0ubGVmdFdpZHRoICYmXG4gICAgICAgICAgICAgICAgc2hpcC54ICsgc2hpcC53aWR0aCA+IGdhdGVzW2ldLmxlZnRYICYmXG4gICAgICAgICAgICAgICAgc2hpcC55IDwgZ2F0ZXNbaV0ueSArIGdhdGVzW2ldLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSArIHNoaXAuaGVpZ2h0ID4gZ2F0ZXNbaV0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gUmlnaHQgZ2F0ZSBoaXQgZGV0ZWN0aW9uLlxuICAgICAgICBmdW5jdGlvbiBpc0hpdHRpbmdSaWdodEdhdGUoaSkge1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IGdhdGVzW2ldLnJpZ2h0WCArIGdhdGVzW2ldLnJpZ2h0V2lkdGggJiZcbiAgICAgICAgICAgICAgICBzaGlwLnggKyBzaGlwLndpZHRoID4gZ2F0ZXNbaV0ucmlnaHRYICYmXG4gICAgICAgICAgICAgICAgc2hpcC55IDwgZ2F0ZXNbaV0ueSArIGdhdGVzW2ldLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSArIHNoaXAuaGVpZ2h0ID4gZ2F0ZXNbaV0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVPdmVyKCl7XG4gICAgICAgICAgICBzaGlwLmFjYyA9IDA7XG4gICAgICAgICAgICBzaGlwLmhTcGVlZCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXNbaV0udlNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2xlZXAoNTAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS5pbm5lckhUTUwgPSBzY29yZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZW92ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb3VudCA9IDQ7XG4gICAgICAgIGZ1bmN0aW9uIGNvdW50ZG93bigpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjU0cHggJ0NoZXd5JywgY3Vyc2l2ZVwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInNtb2tlLXdoaXRlXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNvdW50LCAyNjAsIDMwMCk7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNvdW50ZG93biwgNzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWVFbmdpbmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN0YXJ0KCl7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpe1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbC1pbnB1dCcpLnZhbHVlLnNsaWNlKDAsMyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYucHVzaChkYXRhKTtcbiAgICAgICAgICAgIGhhbmRsZVJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3U2NvcmUoKSB7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiNDhweCAnQ2hld3knLCBjdXJzaXZlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCAyNjAsIDUwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIC8vIE1BSU4gR0FNRSBGVU5DVElPTlxuICAgICAgICBmdW5jdGlvbiBnYW1lRW5naW5lKCkge1xuICAgICAgICAgICAgaGl0RGV0ZWN0ZWQoKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xuICAgICAgICAgICAgY2hlY2tHYXRlKCk7XG4gICAgICAgICAgICBkcmF3U2NvcmUoKTtcbiAgICAgICAgICAgIHNoaXAuZHJhdygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVFbmdpbmUpXG4gICAgICAgIH07XG5cblxuICAgICAgICBjb3VudGRvd24oKTtcblxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb25zXG4gICAgICAgIGZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIFxuXG5cblxuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/gate.js":
/*!****************************!*\
  !*** ./src/object/gate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.vSpeed = 5;\n        this.gap = 250;\n\n        // Gate Widths\n        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 10);\n        this.rightWidth = 600;\n\n        // Gate Xs\n        this.leftX = 0;\n        this.rightX = this.leftWidth + this.gap;\n\n        this.height = 60;\n        this.y = -60;\n        \n    };\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n\n        // Left gate\n        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);\n\n        // Right gate\n        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);\n\n        this.ctx.fillStyle = \"rgb(86,84,106)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2dhdGUuanM/ZDUzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L2dhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy52U3BlZWQgPSA1O1xuICAgICAgICB0aGlzLmdhcCA9IDI1MDtcblxuICAgICAgICAvLyBHYXRlIFdpZHRoc1xuICAgICAgICB0aGlzLmxlZnRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSA1MCkgKyAxMCk7XG4gICAgICAgIHRoaXMucmlnaHRXaWR0aCA9IDYwMDtcblxuICAgICAgICAvLyBHYXRlIFhzXG4gICAgICAgIHRoaXMubGVmdFggPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0WCA9IHRoaXMubGVmdFdpZHRoICsgdGhpcy5nYXA7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy55ID0gLTYwO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52U3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIExlZnQgZ2F0ZVxuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMubGVmdFgsIHRoaXMueSwgdGhpcy5sZWZ0V2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBSaWdodCBnYXRlXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5yaWdodFgsIHRoaXMueSwgdGhpcy5yaWdodFdpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoODYsODQsMTA2KVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/gate.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ship {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 225;\n        this.y = 450;\n        this.height = 40;\n        this.width = 90;\n        this.hSpeed = 0;\n        this.acc = .6;\n        this.sprites = [159, 310, 460];\n        this.frameCount = 0;\n        this.tilt = 0;\n        this.helicopter = new Image();\n        this.helicopter.src = './src/assets/helicopter-spritesheet.png';\n        this.addListeners();\n    };\n\n    draw(){\n        if (this.frameCount > 10) {\n            this.frameCount = 0;\n            this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++;\n        } else {\n            this.frameCount += 1;\n        }\n\n        let spriteFrame = Math.floor(this.frameCount / 10);\n        this.physics();\n\n        this.x += this.hSpeed;\n        \n        // helicopter.onload = () => {\n            this.ctx.drawImage(this.helicopter, \n                                0, \n                                this.sprites[spriteFrame], \n                                // 159,\n                                345,\n                                135,\n                                this.x, \n                                this.y, \n                                this.width, \n                                this.height);\n        // };\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n        document.addEventListener('keydown', this.handleKeyDown.bind(this));\n    };\n\n    handleClick(){\n        this.direction = this.direction * -1;\n    };\n\n    handleKeyDown(e){\n        if (e.key == \"space\" || e.key == \" \") {\n            this.direction = this.direction * -1;\n        };\n    };\n\n    physics(){\n            this.hSpeed += this.acc * this.direction;\n    }; \n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTTs7QUFFQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9vYmplY3Qvc2hpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLnggPSAyMjU7XG4gICAgICAgIHRoaXMueSA9IDQ1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYWNjID0gLjY7XG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFsxNTksIDMxMCwgNDYwXTtcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aWx0ID0gMDtcbiAgICAgICAgdGhpcy5oZWxpY29wdGVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaGVsaWNvcHRlci5zcmMgPSAnLi9zcmMvYXNzZXRzL2hlbGljb3B0ZXItc3ByaXRlc2hlZXQucG5nJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG4gICAgZHJhdygpe1xuICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50ID4gMTApIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUluZGV4ID09PSAyID8gdGhpcy5zcHJpdGVJbmRleCA9IDAgOiB0aGlzLnNwcml0ZUluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mcmFtZUNvdW50IC8gMTApO1xuICAgICAgICB0aGlzLnBoeXNpY3MoKTtcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy5oU3BlZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBoZWxpY29wdGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlbGljb3B0ZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzW3Nwcml0ZUZyYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDE1OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIH07XG4gICAgfTtcblxuICAgIGFkZExpc3RlbmVycygpe1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gKiAtMTtcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUua2V5ID09IFwic3BhY2VcIiB8fCBlLmtleSA9PSBcIiBcIikge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbiAqIC0xO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBwaHlzaWNzKCl7XG4gICAgICAgICAgICB0aGlzLmhTcGVlZCArPSB0aGlzLmFjYyAqIHRoaXMuZGlyZWN0aW9uO1xuICAgIH07IFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });