/* MagicMirror²
 * Utils
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
const safecolors = require("colors/safe");

(function (root, factory) {
	if (typeof exports === "object") {
		// Node, CommonJS-like
		module.exports = factory(root.config);
	} else {
		// Browser globals (root is window)
		root.Utils = factory(root.config);
	}
})(this, function (config) {
	const colors = {
		warn: safecolors.yellow,
		error: safecolors.red,
		info: safecolors.blue,
		pass: safecolors.green
	};

	/* cmpVersions(a,b)
	 * Compare two semantic version numbers and return the difference.
	 *
	 * argument a string - Version number a.
	 * argument a string - Version number b.
	 */
	const cmpVersions = (a, b) => {
		var i, diff;
		var regExStrip0 = /(\.0+)+$/;
		var segmentsA = a.replace(regExStrip0, "").split(".");
		var segmentsB = b.replace(regExStrip0, "").split(".");
		var l = Math.min(segmentsA.length, segmentsB.length);

		for (i = 0; i < l; i++) {
			diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
			if (diff) {
				return diff;
			}
		}
		return segmentsA.length - segmentsB.length;
	};

	return { colors, cmpVersions };
});
