const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKFollow: '.OLSKFollow',

	OLSKFollowTwitter: '.OLSKFollowTwitter',

	OLSKFollowMastodon: '.OLSKFollowMastodon',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKFollow_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKFollow', function () {
		browser.assert.elements(OLSKFollow, 1);
	});

	it('shows OLSKFollowTwitter', function () {
		browser.assert.elements(OLSKFollowTwitter, 1);
	});

	it('shows OLSKFollowMastodon', function () {
		browser.assert.elements(OLSKFollowMastodon, 1);
	});

});
