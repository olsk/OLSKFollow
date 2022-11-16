const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFollow_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKFollowTwitter', function test_OLSKFollowTwitter () {

		it('sets target', function () {
			browser.assert.attribute(OLSKFollowTwitter, 'target', '_blank');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKFollowTwitter, 'href', 'https://twitter.com/rosano');
		});

		it('sets text', function () {
			browser.assert.text(OLSKFollowTwitter, 'Twitter');
		});
		
	});

	describe('OLSKFollowMastodon', function test_OLSKFollowMastodon () {

		it('sets target', function () {
			browser.assert.attribute(OLSKFollowMastodon, 'target', '_blank');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKFollowMastodon, 'href', 'https://mastodon.online/@rosano');
		});

		it('sets text', function () {
			browser.assert.text(OLSKFollowMastodon, 'Mastodon');
		});
		
	});

});
