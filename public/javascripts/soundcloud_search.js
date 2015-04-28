$(document).ready(function(){
  SC.initialize({
    client_id: '058ea073e0c993e2ef28ba095dca0647'
  });
  $('#search_button').click(doSearch)
});


function doSearch() {
  var searchTerm = $('#search_field').val()

  // Encode spaces
  searchTerm = searchTerm.replace(" ", "+");

  // Search soundcloud for artists
  SC.get('/tracks', { q: searchTerm, license: 'cc-by-sa' }, function(tracks) {
    var output = ""
      for(track in tracks) {
        console.log("There are " + tracks.length + " results.")
        output += getHTML(track, tracks[track])
      }
      $("#search_results").hide().html(output).show()
  });
};

function getHTML(index, data) {
  html = '<li id="SCID"><a onclick="makeOverlay(this.parentElement)" href="TARG"><h3>TITLE</h3><img src="IMG"/></a></li>'
  html = html.replace("TARG", "#modal-container").replace("TITLE", data.title).replace("IMG", data.artwork_url).replace("SCID", data.id)
  return html
}


function makeOverlay(target) {
  console.log($(target).attr('id'))
}