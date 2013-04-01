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
 * RSS Feed view for App.Models.Feeds (Collection)
 *
 */
App.Views.FeedCollectionView = Backbone.View.extend({
  el: '#content',
  collection: null,
  icon: null,

  initialize: function(options){
    _.bind(this, 'render');
    this.listenTo(this.collection, 'reset', this.render);
    App.UI.loading();
  },

   render: function(){
    App.UI.doneLoading();

    var params = { feeds: this.collection.models };
    var template = _.template($("#feeds").html(), params);
    $(this.el).html(template);
    return this;
  },
  events: {
    "click span.ellipsis": "handleTap"
  },
  handleTap: function (e) {
    e.preventDefault();

    //
    var id =  $(e.target).attr("id");

  }
});
