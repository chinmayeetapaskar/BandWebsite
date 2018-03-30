(function(window) {
  "use strict";
  var FORM_SELECTOR_COMMENTS = "[data-band-review = \"form\"]";
  var CHECKLIST_SELECTOR = "[data-band-review = \"user-comments\"]";
  var SERVER_URL_COMMENTS = "http://localhost:2403/review";
  var SERVER_URL_BANDS = "http://localhost:2403/band";

  var App = window.App;
  var Band = App.Band;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Comments = App.Comments;
  var bandName = (function(){
    var requestParam = window.location.search.split("?")[1];
    return decodeURIComponent(requestParam.split("=")[1]);
  })();

  var $ = window.jQuery;

  var remoteDSComments = new RemoteDataStore(SERVER_URL_COMMENTS);
  var remoteDSBands = new RemoteDataStore(SERVER_URL_BANDS);

  var myBandComments = new Band(remoteDSComments);
  var bandDetails = new Band(remoteDSBands);

  window.myBandComments = myBandComments;
  window.bandDetails = bandDetails;

  var commentsSummary = new Comments(CHECKLIST_SELECTOR);
  var formHandlerComments = new FormHandler(FORM_SELECTOR_COMMENTS);

  formHandlerComments.addSubmitHandler(function(data) {
      remoteDSComments.add.call(remoteDSComments, 0, data);
      console.log(bandName);
      window.location.href="reviewexample.html?bandName=" + bandName;

  });
$()ready(function(){

});

})(window);
