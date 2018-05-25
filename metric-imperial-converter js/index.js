$(document).ready(function(){
  
$('#lengthInput').keyup(function(){
  
  var inputLength= $('input[name=lengthBox]').val();
  
  var inputIn= $('input[id=in]:checked').val();
  var inputFt= $('input[id=ft]:checked').val();
  var inputYd= $('input[id=yd]:checked').val();
  var inputMi= $('input[id=mi]:checked').val();
  var inputMm= $('input[id=mm]:checked').val();
  var inputCm= $('input[id=cm]:checked').val();
  var inputM= $('input[id=m]:checked').val();
  var inputKm= $('input[id=km]:checked').val();
  
  if(inputIn==="on"){
  $("#result_mm").html((inputLength * 25.4).toFixed(4) + " mm");
  }
  if(inputIn==="on"){
  $("#result_cm").html((inputLength * 2.54).toFixed(4) + " cm");
  }
  if(inputIn==="on"){
  $("#result_m").html((inputLength * 0.0254).toFixed(4) + " m");
  }
  if(inputIn==="on"){
  $("#result_km").html((inputLength * 2.54e-5).toFixed(4) + " km");
  }
  if(inputIn==="on"){
  $("#result_in").html(inputLength + " in");
  }
  if(inputIn==="on"){
  $("#result_ft").html((inputLength / 12).toFixed(4) + " ft");
  }
  if(inputIn==="on"){
  $("#result_yd").html((inputLength * 0.0277778).toFixed(4) + " yd");
  }
  if(inputIn==="on"){
  $("#result_mi").html((inputLength * 1.5783e-5).toFixed(4) + " mi");
  }
  
  if(inputFt==="on"){
  $("#result_mm").html((inputLength * 304.8).toFixed(4) + " mm");
  }
  if(inputFt==="on"){
  $("#result_cm").html((inputLength * 30.48).toFixed(4) + " cm");
  }
  if(inputFt==="on"){
  $("#result_m").html((inputLength * 0.3048).toFixed(4) + " m");
  }
  if(inputFt==="on"){
  $("#result_km").html((inputLength * 0.0003048).toFixed(4) + " km");
  }
  if(inputFt==="on"){
  $("#result_in").html((inputLength * 12).toFixed(4) + "in");
  }
  if(inputFt==="on"){
  $("#result_ft").html(inputLength + " ft");
  }
  if(inputFt==="on"){
  $("#result_yd").html((inputLength / 3).toFixed(4) + " yd");
  }
  if(inputFt==="on"){
  $("#result_mi").html((inputLength * 0.000189394).toFixed(4) + " mi");
  }
  
  if(inputYd==="on"){
  $("#result_mm").html((inputLength * 914.4).toFixed(4) + " mm");
  }
  if(inputYd==="on"){
  $("#result_cm").html((inputLength * 91.44).toFixed(4) + " cm");
  }
  if(inputYd==="on"){
  $("#result_m").html((inputLength * 0.9144).toFixed(4) + " m");
  }
  if(inputYd==="on"){
  $("#result_km").html((inputLength * 0.0009144).toFixed(4) + " km");
  }
  if(inputYd==="on"){
  $("#result_in").html((inputLength * 36).toFixed(4) + " in");
  }
  if(inputYd==="on"){
  $("#result_ft").html((inputLength * 3).toFixed(4) + " ft");
  }
  if(inputYd==="on"){
  $("#result_yd").html(inputLength + " yd");
  }
  if(inputYd==="on"){
  $("#result_mi").html((inputLength * 0.000568182).toFixed(4) + " mi");
  }
  
  if(inputMi==="on"){
  $("#result_mm").html((inputLength * 1.609e+6).toFixed(4) + " mm");
  }
  if(inputMi==="on"){
  $("#result_cm").html((inputLength * 160934).toFixed(4) + " cm");
  }
  if(inputMi==="on"){
  $("#result_m").html((inputLength * 1609.34).toFixed(4) + " m");
  }
  if(inputMi==="on"){
  $("#result_km").html((inputLength * 1.60934).toFixed(4) + " km");
  }
  if(inputMi==="on"){
  $("#result_in").html((inputLength * 63360).toFixed(4) + " in");
  }
  if(inputMi==="on"){
  $("#result_ft").html((inputLength * 5280).toFixed(4) + " ft");
  }
  if(inputMi==="on"){
  $("#result_yd").html((inputLength * 1760).toFixed(4) + " yd");
  }
  if(inputMi==="on"){
  $("#result_mi").html(inputLength + " mi");
  }
  
  if(inputMm==="on"){
  $("#result_mm").html(inputLength + " mm");
  }
  if(inputMm==="on"){
  $("#result_cm").html((inputLength * 0.1).toFixed(4) + " cm");
  }
  if(inputMm==="on"){
  $("#result_m").html((inputLength * 0.001).toFixed(4) + " m");
  }
  if(inputMm==="on"){
  $("#result_km").html((inputLength * 1e-6).toFixed(4) + " km");
  }
  if(inputMm==="on"){
  $("#result_in").html((inputLength * 0.0393701).toFixed(4) + " in");
  }
  if(inputMm==="on"){
  $("#result_ft").html((inputLength * 0.00328084).toFixed(4) + " ft");
  }
  if(inputMm==="on"){
  $("#result_yd").html((inputLength * 0.00109361).toFixed(4) + " yd");
  }
  if(inputMm==="on"){
  $("#result_mi").html((inputLength * 6.2137e-7).toFixed(4) + " mi");
  }
  
  if(inputCm==="on"){
  $("#result_mm").html((inputLength * 10).toFixed(4) + " mm");
  }
  if(inputCm==="on"){
  $("#result_cm").html(inputLength + " cm");
  }
  if(inputCm==="on"){
  $("#result_m").html((inputLength * 0.01).toFixed(4) + " m");
  }
  if(inputCm==="on"){
  $("#result_km").html((inputLength * 1e-5).toFixed(4) + " km");
  }
  if(inputCm==="on"){
  $("#result_in").html((inputLength * 0.393701).toFixed(4) + " in");
  }
  if(inputCm==="on"){
  $("#result_ft").html((inputLength * 0.0328084).toFixed(4) + " ft");
  }
  if(inputCm==="on"){
  $("#result_yd").html((inputLength * 0.0109361).toFixed(4) + " yd");
  }
  if(inputCm==="on"){
  $("#result_mi").html((inputLength * 6.2137e-6).toFixed(4) + " mi");
  }
  
  if(inputM==="on"){
  $("#result_mm").html((inputLength * 1000).toFixed(4) + " mm");
  }
  if(inputM==="on"){
  $("#result_cm").html((inputLength * 100).toFixed(4) + " cm");
  }
  if(inputM==="on"){
  $("#result_m").html(inputLength + " m");
  }
  if(inputM==="on"){
  $("#result_km").html((inputLength * 0.001).toFixed(4) + " km");
  }
  if(inputM==="on"){
  $("#result_in").html((inputLength * 39.3701).toFixed(4) + " in");
  }
  if(inputM==="on"){
  $("#result_ft").html((inputLength * 3.28084).toFixed(4) + " ft");
  }
  if(inputM==="on"){
  $("#result_yd").html((inputLength * 1.09361).toFixed(4) + " yd");
  }
  if(inputM==="on"){
  $("#result_mi").html((inputLength * 0.000621371).toFixed(4) + " mi");
  }
  
  if(inputKm==="on"){
  $("#result_mm").html((inputLength * 1e+6).toFixed(4) + " mm");
  }
  if(inputKm==="on"){
  $("#result_cm").html((inputLength * 100000).toFixed(4) + " cm");
  }
  if(inputKm==="on"){
  $("#result_m").html((inputLength * 1000).toFixed(4) + " m");
  }
  if(inputKm==="on"){
  $("#result_km").html(inputLength + " km");
  }
  if(inputKm==="on"){
  $("#result_in").html((inputLength * 39370.1).toFixed(4) + " in");
  }
  if(inputKm==="on"){
  $("#result_ft").html((inputLength * 3280.84).toFixed(4) + " ft");
  }
  if(inputKm==="on"){
  $("#result_yd").html((inputLength * 1093.61).toFixed(4) + " yd");
  }
  if(inputKm==="on"){
  $("#result_mi").html((inputLength * 0.621371).toFixed(4) + " mi");
  }
  
  $('#num_box1').addClass('num_box');
  $('.listo1').addClass('length_li');
  
});
  
  $('#massInput').keyup(function(){
    
    var inputMass= $('input[name=massBox]').val();
    
    var inputOz= $('input[id=oz]:checked').val();
    var inputLb= $('input[id=lb]:checked').val();
    var inputMg= $('input[id=mg]:checked').val();
    var inputG= $('input[id=g]:checked').val();
    var inputKg= $('input[id=kg]:checked').val();
    
      if(inputOz==="on"){
      $("#result_oz").html(inputMass + " oz");
      }
      if(inputOz==="on"){
      $("#result_lb").html((inputMass * 0.0625).toFixed(4) + " lb");
      }
      if(inputOz==="on"){
      $("#result_mg").html((inputMass * 28349.5).toFixed(4) + " mg");
      }
      if(inputOz==="on"){
      $("#result_g").html((inputMass * 28.3495).toFixed(4) + " g");
      }
      if(inputOz==="on"){
      $("#result_kg").html((inputMass * 0.0283495).toFixed(4) + " kg");
      }
    
      if(inputLb==="on"){
      $("#result_oz").html((inputMass * 16).toFixed(4) + " oz");
      }
      if(inputLb==="on"){
      $("#result_lb").html(inputMass + " lb");
      }
      if(inputLb==="on"){
      $("#result_mg").html((inputMass * 453592).toFixed(4) + " mg");
      }
      if(inputLb==="on"){
      $("#result_g").html((inputMass * 453.592).toFixed(4) + " g");
      }
      if(inputLb==="on"){
      $("#result_kg").html((inputMass * 0.453592).toFixed(4) + " kg");
      }
    
      if(inputMg==="on"){
      $("#result_oz").html((inputMass * 3.5274e-5).toFixed(4) + " oz");
      }
      if(inputMg==="on"){
      $("#result_lb").html((inputMass * 2.2046e-6).toFixed(4) + " lb");
      }
      if(inputMg==="on"){
      $("#result_mg").html(inputMass + " mg");
      }
      if(inputMg==="on"){
      $("#result_g").html((inputMass * 0.001).toFixed(4) + " g");
      }
      if(inputMg==="on"){
      $("#result_kg").html((inputMass * 1e-6).toFixed(4) + " kg");
      }
    
      if(inputG==="on"){
      $("#result_oz").html((inputMass * 0.035274).toFixed(4) + " oz");
      }
      if(inputG==="on"){
      $("#result_lb").html((inputMass * 0.00220462).toFixed(4) + " lb");
      }
      if(inputG==="on"){
      $("#result_mg").html((inputMass * 1000).toFixed(4) + " mg");
      }
      if(inputG==="on"){
      $("#result_g").html(inputMass + " g");
      }
      if(inputG==="on"){
      $("#result_kg").html((inputMass * 0.001).toFixed(4) + " kg");
      }
    
      if(inputKg==="on"){
      $("#result_oz").html((inputMass * 35.274).toFixed(4) + " oz");
      }
      if(inputKg==="on"){
      $("#result_lb").html((inputMass * 2.20462).toFixed(4) + " lb");
      }
      if(inputKg==="on"){
      $("#result_mg").html((inputMass * 1e+6).toFixed(4) + " mg");
      }
      if(inputKg==="on"){
      $("#result_g").html((inputMass * 1000).toFixed(4) + " g");
      }
      if(inputKg==="on"){
      $("#result_kg").html(inputMass + " kg");
      }
    
    $('#num_box2').addClass('num_box');
    $('.listo2').addClass('mass_li');
    
  });
  
  $('#volumeInput').keyup(function(){
    
  var inputVolume= $('input[name=volumeBox]').val();
  
  var inputMl= $('input[id=ml]:checked').val();
  var inputL= $('input[id=l]:checked').val();
  var inputTsp= $('input[id=tsp]:checked').val();
  var inputTbsp= $('input[id=tbsp]:checked').val();
  var inputFlOz= $('input[id=floz]:checked').val();
  var inputCup= $('input[id=cup]:checked').val();
  var inputPt= $('input[id=pt]:checked').val();
  var inputQt= $('input[id=qt]:checked').val();
  var inputGa= $('input[id=ga]:checked').val();
    
    if(inputMl==="on"){
      $('#result_ml').html(inputVolume + " mL");
    }
    if(inputMl==="on"){
      $('#result_l').html((inputVolume * 0.001).toFixed(4) + " L");
    }
    if(inputMl==="on"){
      $('#result_tsp').html((inputVolume * 0.202884).toFixed(4) + " tsp");
    }
    if(inputMl==="on"){
      $('#result_tbsp').html((inputVolume * 0.067628).toFixed(4) + " tbsp");
    }
    if(inputMl==="on"){
      $('#result_floz').html((inputVolume * 0.033814).toFixed(4) + " fl oz");
    }
    if(inputMl==="on"){
      $('#result_cup').html((inputVolume * 0.00416667).toFixed(4) + " cup");
    }
    if(inputMl==="on"){
      $('#result_pt').html((inputVolume * 0.00211338).toFixed(4) + " pt");
    }
    if(inputMl==="on"){
      $('#result_qt').html((inputVolume * 0.00105669).toFixed(4) + " qt");
    }
    if(inputMl==="on"){
      $('#result_ga').html((inputVolume * 0.000264172).toFixed(4) + " ga");
    }
    
    if(inputL==="on"){
      $('#result_ml').html((inputVolume * 1000).toFixed(4) + " mL");
    }
    if(inputL==="on"){
      $('#result_l').html(inputVolume + " L");
    }
    if(inputL==="on"){
      $('#result_tsp').html((inputVolume * 0.202884).toFixed(4) + " tsp");
    }
    if(inputL==="on"){
      $('#result_tbsp').html((inputVolume * 0.067628).toFixed(4) + " tbsp");
    }
    if(inputL==="on"){
      $('#result_floz').html((inputVolume * 0.033814).toFixed(4) + " fl oz");
    }
    if(inputL==="on"){
      $('#result_cup').html((inputVolume * 0.00416667).toFixed(4) + " cup");
    }
    if(inputL==="on"){
      $('#result_pt').html((inputVolume * 0.00211338).toFixed(4) + " pt");
    }
    if(inputL==="on"){
      $('#result_qt').html((inputVolume * 0.00105669).toFixed(4) + " qt");
    }
    if(inputL==="on"){
      $('#result_ga').html((inputVolume * 0.000264172).toFixed(4) + " ga");
    }
    
    if(inputTsp==="on"){
      $('#result_ml').html((inputVolume * 4.92892).toFixed(4) + " mL");
    }
    if(inputTsp==="on"){
      $('#result_l').html((inputVolume * 0.00492892).toFixed(4) + " L");
    }
    if(inputTsp==="on"){
      $('#result_tsp').html(inputVolume + " tsp");
    }
    if(inputTsp==="on"){
      $('#result_tbsp').html((inputVolume / 3).toFixed(4) + " tbsp");
    }
    if(inputTsp==="on"){
      $('#result_floz').html((inputVolume * 0.166667).toFixed(4) + " fl oz");
    }
    if(inputTsp==="on"){
      $('#result_cup').html((inputVolume * 0.0205372).toFixed(4) + " cup");
    }
    if(inputTsp==="on"){
      $('#result_pt').html((inputVolume * 0.0104167).toFixed(4) + " pt");
    }
    if(inputTsp==="on"){
      $('#result_qt').html((inputVolume * 0.00520833).toFixed(4) + " qt");
    }
    if(inputTsp==="on"){
      $('#result_ga').html((inputVolume * 0.00130208).toFixed(4) + " ga");
    }
    
    if(inputTbsp==="on"){
      $('#result_ml').html((inputVolume * 14.7868).toFixed(4) + " mL");
    }
    if(inputTbsp==="on"){
      $('#result_l').html((inputVolume * 0.0147868).toFixed(4) + " L");
    }
    if(inputTbsp==="on"){
      $('#result_tsp').html((inputVolume * 3).toFixed(4) + " tsp");
    }
    if(inputTbsp==="on"){
      $('#result_tbsp').html(inputVolume + " tbsp");
    }
    if(inputTbsp==="on"){
      $('#result_floz').html((inputVolume * 0.5).toFixed(4) + " fl oz");
    }
    if(inputTbsp==="on"){
      $('#result_cup').html((inputVolume * 0.0616115).toFixed(4) + " cup");
    }
    if(inputTbsp==="on"){
      $('#result_pt').html((inputVolume * 0.03125).toFixed(4) + " pt");
    }
    if(inputTbsp==="on"){
      $('#result_qt').html((inputVolume * 0.015625).toFixed(4) + " qt");
    }
    if(inputTbsp==="on"){
      $('#result_ga').html((inputVolume * 0.00390625).toFixed(4) + " ga");
    }
    
    if(inputFlOz==="on"){
      $('#result_ml').html((inputVolume * 29.5735).toFixed(4) + " mL");
    }
    if(inputFlOz==="on"){
      $('#result_l').html((inputVolume * 0.0295735).toFixed(4) + " L");
    }
    if(inputFlOz==="on"){
      $('#result_tsp').html((inputVolume * 6).toFixed(4) + " tsp");
    }
    if(inputFlOz==="on"){
      $('#result_tbsp').html((inputVolume * 2).toFixed(4) + " tbsp");
    }
    if(inputFlOz==="on"){
      $('#result_floz').html(inputVolume + " fl oz");
    }
    if(inputFlOz==="on"){
      $('#result_cup').html((inputVolume * 0.123223).toFixed(4) + " cup");
    }
    if(inputFlOz==="on"){
      $('#result_pt').html((inputVolume * 0.0625).toFixed(4) + " pt");
    }
    if(inputFlOz==="on"){
      $('#result_qt').html((inputVolume * 0.03125).toFixed(4) + " qt");
    }
    if(inputFlOz==="on"){
      $('#result_ga').html((inputVolume * 0.0078125).toFixed(4) + " ga");
    }
    
    if(inputCup==="on"){
      $('#result_ml').html((inputVolume * 240).toFixed(4) + " mL");
    }
    if(inputCup==="on"){
      $('#result_l').html((inputVolume * 0.24).toFixed(4) + " L");
    }
    if(inputCup==="on"){
      $('#result_tsp').html((inputVolume * 48.6922).toFixed(4) + " tsp");
    }
    if(inputCup==="on"){
      $('#result_tbsp').html((inputVolume * 16.2307).toFixed(4) + " tbsp");
    }
    if(inputCup==="on"){
      $('#result_floz').html((inputVolume * 8.11537).toFixed(4) + " fl oz");
    }
    if(inputCup==="on"){
      $('#result_cup').html(inputVolume + " cup");
    }
    if(inputCup==="on"){
      $('#result_pt').html((inputVolume * 0.50721).toFixed(4) + " pt");
    }
    if(inputCup==="on"){
      $('#result_qt').html((inputVolume * 0.253605).toFixed(4) + " qt");
    }
    if(inputCup==="on"){
      $('#result_ga').html((inputVolume * 0.0634013).toFixed(4) + " ga");
    }
    
    if(inputPt==="on"){
      $('#result_ml').html((inputVolume * 473.176).toFixed(4) + " mL");
    }
    if(inputPt==="on"){
      $('#result_l').html((inputVolume * 0.473176).toFixed(4) + " L");
    }
    if(inputPt==="on"){
      $('#result_tsp').html((inputVolume * 96).toFixed(4) + " tsp");
    }
    if(inputPt==="on"){
      $('#result_tbsp').html((inputVolume * 32).toFixed(4) + " tbsp");
    }
    if(inputPt==="on"){
      $('#result_floz').html((inputVolume * 16).toFixed(4) + " fl oz");
    }
    if(inputPt==="on"){
      $('#result_cup').html((inputVolume * 1.97157).toFixed(4) + " cup");
    }
    if(inputPt==="on"){
      $('#result_pt').html(inputVolume + " pt");
    }
    if(inputPt==="on"){
      $('#result_qt').html((inputVolume * 0.5).toFixed(4) + " qt");
    }
    if(inputPt==="on"){
      $('#result_ga').html((inputVolume * 0.125).toFixed(4) + " ga");
    }
    
    if(inputQt==="on"){
      $('#result_ml').html((inputVolume * 946.353).toFixed(4) + " mL");
    }
    if(inputQt==="on"){
      $('#result_l').html((inputVolume * 0.946353).toFixed(4) + " L");
    }
    if(inputQt==="on"){
      $('#result_tsp').html((inputVolume * 192).toFixed(4) + " tsp");
    }
    if(inputQt==="on"){
      $('#result_tbsp').html((inputVolume * 64).toFixed(4) + " tbsp");
    }
    if(inputQt==="on"){
      $('#result_floz').html((inputVolume * 32).toFixed(4) + " fl oz");
    }
    if(inputQt==="on"){
      $('#result_cup').html((inputVolume * 3.94314).toFixed(4) + " cup");
    }
    if(inputQt==="on"){
      $('#result_pt').html((inputVolume * 2).toFixed(4) + " pt");
    }
    if(inputQt==="on"){
      $('#result_qt').html(inputVolume + " qt");
    }
    if(inputQt==="on"){
      $('#result_ga').html((inputVolume * 0.25).toFixed(4) + " ga");
    }
    
    if(inputGa==="on"){
      $('#result_ml').html((inputVolume * 3785.41).toFixed(4) + " mL");
    }
    if(inputGa==="on"){
      $('#result_l').html((inputVolume * 3.78541).toFixed(4) + " L");
    }
    if(inputGa==="on"){
      $('#result_tsp').html((inputVolume * 768).toFixed(4) + " tsp");
    }
    if(inputGa==="on"){
      $('#result_tbsp').html((inputVolume * 256).toFixed(4) + " tbsp");
    }
    if(inputGa==="on"){
      $('#result_floz').html((inputVolume * 128).toFixed(4) + " fl oz");
    }
    if(inputGa==="on"){
      $('#result_cup').html((inputVolume * 15.7725).toFixed(4) + " cup");
    }
    if(inputGa==="on"){
      $('#result_pt').html((inputVolume * 8).toFixed(4) + " pt");
    }
    if(inputGa==="on"){
      $('#result_qt').html((inputVolume * 4).toFixed(4) + " qt");
    }
    if(inputGa==="on"){
      $('#result_ga').html(inputVolume  + " ga");
    }
    
    $('#num_box3').addClass('num_box');
    $('.listo3').addClass('volume_li');
    
  });
  
  $('input[type="radio"]').click(function(){
     
    $('ul').removeClass('num_box');
    $('li').removeClass('length_li');
    $('li').removeClass('mass_li');
    $('li').removeClass('volume_li');
    $('li').html("");
    $('input[name=lengthBox]').val("");
    $('input[name=massBox]').val("");
    $('input[name=volumeBox]').val("");
    
});
  
});