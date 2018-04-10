
$(document).ready(function(){
  
  $('#search').click(function(){
    
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        $('#results').html('');
        for (i=0; i<data[1].length; i++){
       $('#results').append("<li><a href="+data[3][i]+" target='_blank' class= deep-purple>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
        $('#searchTerm').val('');
      },
      error: function(errorMessage){
        alert('Error');
      }
      
           });
  });
  
  $('#searchTerm').keypress(function(e){
    if(e.which==13){
      $('#search').click();
    }
  })
  
});