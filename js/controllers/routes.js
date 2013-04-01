/*
Copyright (c) 2013 Austin Conner Group, http://theaustinconnergroup.com

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * App route controller
 *
 */

App.Routes = Backbone.Router.extend({

	routes: {
        "" : "index",         		// entry point: no hash fragment or #
        "about" : "about"        		// entry point: no hash fragment or #
	},


	// main and initial route calendar of events
	index: function() {
		console.log('index route called');
		cacheFeed = new App.Collections.Feeds();
		new App.Views.FeedCollectionView({collection: cacheFeed});
		cacheFeed.fetch();

	},

	about: function(){}
});
