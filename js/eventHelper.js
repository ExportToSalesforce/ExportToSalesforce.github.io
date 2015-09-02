/**
 * Send event to GA.
 * @param {Object}   options          The event options
 * @param {string}   options.category The event category
 * @param {string}   options.action   The event action
 * @param {string}   options.label    The event label
 * @param {Function} cb               The callback to call after sending the event
 */
var sendEvent = function(options, cb) {
	if (typeof cb !== "undefined" && cb !== null) {
		ga('send', 'event', options.category, options.action, options.label, {'hitCallback': cb});
	} else {
		ga('send', 'event', options.category, options.action, options.label);
	}
};

/**
* Track clicking the top install link.
*/
var trackTopInstallLink = function() {
	sendEvent({
		category: 'index',
		action: 'install clicked',
		label: 'top'
	});
};

/**
* Track clicking the bottom install link.
*/
var trackBottomInstallLink = function() {
	sendEvent({
		category: 'index',
		action: 'install clicked',
		label: 'bottom'
	});
}