
$(document.ready(function(){

$("input").change(function(){  
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

var elev1total=0;
var elev2total=0;
var elev3total=0;
var elev4total=0;
var elev5total=0;

var testmax;

  var task1max=0;
    var task2max=0;
      var task3max=0;
        var task4max=0;
          var task5max=0;

          var task1avg=[1,2,3,4,5], task1Total=0,task1Average=0;
  for(var i=0;i<task1avg.length;i++)
     {task1Total+=task1avg[i];}// lägger samman värdena i arrayen
       task1Average=(task1Total/task1avg.length);// räknar ut medelvärde
          alert(task1Average) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
 
 var task2avg=[1,2,3,4,5], task2Total=0,task2Average=0;
  for(var i=0;i<task2avg.length;i++)
     {task2Total+=task2avg[i];}// lägger samman värdena i arrayen
       task3Average=(task2Total/task2avg.length);// räknar ut medelvärde
          alert(task2Average) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

         var task3avg=[1,2,3,4,5], task3Total=0,task3Average=0;
          for(var i=0;i<task3avg.length;i++)
             {task3Total+=task3avg[i];}// lägger samman värdena i arrayen
               task3Average=(task3Total/task3avg.length);// räknar ut medelvärde
                  alert(task3Average) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                  var task4avg=[1,2,3,4,5], task4Total=0,task4Average=0;
                  for(var i=0;i<task4avg.length;i++)
                     {task4Total+=task4avg[i];}// lägger samman värdena i arrayen
                       task4Average=(task4Total/task4avg.length);// räknar ut medelvärde
                          alert(task4Average) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                          var task5avg=[1,2,3,4,5], task5Total=0,task5Average=0;
                            for(var i=0;i<task5avg.length;i++)
                              {task5Total+=task5avg[i];}// lägger samman värdena i arrayen
                                task5Average=(task5Total/task5avg.length);// räknar ut medelvärde
                                    alert(task5Average) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
  
                                    var klassavg=[1,2,3,4,5], klassTotal=0,klassAverage=0;
                                    for(var i=0;i<klassavg.length;i++)
                                     {klassTotal+=klassavg[i];}// lägger samman värdena i arrayen
                                       klassAverage=(klassTotal/klassavg.length);// räknar ut medelvärde
                                           alert(klassAverage) // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
});
});