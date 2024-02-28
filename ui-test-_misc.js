const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFollow_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKFollowTwitter', function test_OLSKFollowTwitter () {

		it('sets target', function () {
			return browser.assert.attribute(OLSKFollowTwitter, 'target', '_blank');
		});

		it('sets href', function () {
			return browser.assert.attribute(OLSKFollowTwitter, 'href', 'https://rosano.ca/twitter');
		});

		it('sets text', function () {
			return browser.assert.text(OLSKFollowTwitter, 'Twitter');
		});
		
	});

	describe('OLSKFollowMastodon', function test_OLSKFollowMastodon () {

		it('sets target', function () {
			return browser.assert.attribute(OLSKFollowMastodon, 'target', '_blank');
		});

		it('sets href', function () {
			return browser.assert.attribute(OLSKFollowMastodon, 'href', 'https://rosano.ca/mastodon');
		});

		it('sets text', function () {
			return browser.assert.text(OLSKFollowMastodon, 'Mastodon');
		});
		
	});

});
