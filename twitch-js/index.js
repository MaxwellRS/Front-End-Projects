function getData() {
  
  var streamers = [
    "FreeCodeCamp",
    "MutheadTV",
    "SquishyMuffins",
    "JohnnyStoneHS",
    "esahc30",
    "wowigcasper",
    "Phantoml0rd",
    "HyperRPG",
    "JOVIAN"
  ];

  streamers.forEach(function(streamer) {
    
    function url(stream) {
      return "https://wind-bow.gomix.me/twitch-api/streams/" + stream;
    }
    
    $.ajax({
      url: url(streamer),
      type: "GET",
      dataType: "jsonp"
      
    }).done(function(data) {
      
      if (data.stream === null) {
        
        $("#info").append(
          `<div class="offline"><a href="https://twitch.tv/${streamer}" target="_blank">${streamer}</a> offline</div>`
        );
        
      } else if (data.stream === undefined) {
        $("#info").append(
          `<div class="closed">${streamer}  Closed Channel</div>`
        );
        
      } else {
        $("#info").append(
          `<div class="twitch-game"><a   href="https://twitch.tv/${streamer}"  target="_blank" >${streamer}</a> ${data.stream.channel.status} - ${data.stream.game}</div>`

        );

      }
      
    });
    
  });
  
}

getData();