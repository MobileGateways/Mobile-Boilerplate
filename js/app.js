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


var App = {
	Config:      {},
	Models:      {},
	Collections: {},
	UI:          {},
	Views:       {},
	Router:      null,
	Utils:       {},
	Today: 		 null,
	init:(function() {
		console.log('App initilized');
		_.templateSettings = {
		interpolate: /\{\{\=(.+?)\}\}/g,
		evaluate: /\{\{(.+?)\}\}/g
		};

		var router = new App.Routes();
		App.Router = router;
		// check for data service
		// small delay before launch
		Backbone.history.start({pushstate:false});

	}

)}
