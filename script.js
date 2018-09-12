
$(document.ready(function(){

$("input").change(function(){  
  var klassavg=[1,2,3,4,5], klassTotal=0,klassAverage=0;
 for(var i=0;i<klassavg.length;i++)
  {klassTotal+=klassavg[i];}// lägger samman värdena i arrayen
    klassAverage=(klassTotal/klassavg.length);// räknar ut medelvärde
        alert(klassAverage) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

 
var taskavg=[1,2,3,4,5], taskTotal=0,taskAverage=0;
  for(var i=0;i<taskavg.length;i++)
     {taskTotal+=taskavg[i];}// lägger samman värdena i arrayen
       taskAverage=(taskTotal/taskavg.length);// räknar ut medelvärde
          alert(taskAverage) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
 

var elev1f1=1;
  var elev1f2=1;
    var elev1f3=1;
      var elev1f4=1;
        var elev1f5=1;

        var elev2f1=1;
        var elev2f2=1;
          var elev2f3=1;
            var elev2f4=1;
              var elev2f5=1;

              var elev3f1=1;
              var elev3f2=1;
                var elev3f3=1;
                  var elev3f4=1;
                    var elev3f5=1;

                    var elev4f1=1;
                    var elev4f2=1;
                      var elev4f3=1;
                        var elev4f4=1;
                          var elev4f5=1;

                          var elev5f1=1;
                            var elev5f2=1;
                              var elev5f3=1;
                                var elev5f4=1;
                                  var elev5f5=1;



var testmax;

  var task1max=0;
    var task2max=0;
      var task3max=0;
        var task4max=0;
          var task5max=0;

  
});
});