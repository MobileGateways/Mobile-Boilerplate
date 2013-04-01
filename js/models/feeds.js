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
 * Feed Model
 *
 *
 */
App.Models.Feed = Backbone.Model.extend({
   url: App.Config.NewsFeedUrl
});

/**
 * Feed Collection
 *
 *
 */
App.Collections.Feeds = Backbone.Collection.extend({
	url: App.Config.NewsFeedUrl,
    model:App.Models.Feed,

    parse:function(response){

        return response.data;
    }
});
