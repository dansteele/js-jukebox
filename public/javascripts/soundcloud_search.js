$(document).ready(function(){
  $('#search_button').click(fetch_data)
});

function fetch_data() {
  var param = $('#search_field').val()
  SC.initialize({
    client_id: '058ea073e0c993e2ef28ba095dca0647'
  });

  function doSearch() {
  var searchTerm = document.getElementById('search').value;

  // Encode spaces
  searchTerm = searchTerm.replace(" ", "+");

  // Search soundcloud for artists
  SC.get('/tracks', { q: searchTerm, license: 'cc-by-sa' }, function(tracks) {
    var output = ""
      for(track in tracks) {
        console.log("There are " + tracks.length + " results.")
        output += getHTML(track, tracks[track])
      }
      document.getElementById("results").innerHTML = output
    }
  );
  }; 
}