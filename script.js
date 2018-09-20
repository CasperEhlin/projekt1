
$(document).ready(function(){
  

$("input").keyup(function(){  
              
        
    let testMaxPre=$(".taskmax"), testMaxMid=0,testmax=0;
    for(let i=0;i<testMaxPre.length;i++)
               {testMaxMid+= parseFloat(testMaxPre[i].value)}// lägger samman värdena i arrayen
               testmax=(testMaxMid);
   
 
        let task1avg=$(".provsvar div:nth-child(2) .answer"), task1Total=0,task1Average=0;
        for(let i=0;i<task1avg.length;i++)
             {task1Total+= parseFloat(task1avg[i].value)}// lägger samman värdena i arrayen
               task1Average=(task1Total/task1avg.length);// räknar ut medelvärde
                // console.log(task1Average);   Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

 let task2avg=$(".provsvar div:nth-child(3) .answer"), task2Total=0,task2Average=0;
  for(let i=0;i<task2avg.length;i++)
     {task2Total+= parseFloat(task2avg[i].value)}// lägger samman värdena i arrayen
       task2Average=(task2Total/task2avg.length);// räknar ut medelvärde
         // console.log(task2Average);  Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

          let task3avg=$(".provsvar div:nth-child(4) .answer"), task3Total=0,task3Average=0;
          for(let i=0;i<task3avg.length;i++)
             {task3Total+= parseFloat(task3avg[i].value)}// lägger samman värdena i arrayen
               task3Average=(task3Total/task3avg.length);// räknar ut medelvärde
                //   console.log(task3Average); Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                  let task4avg=$(".provsvar div:nth-child(5) .answer"), task4Total=0,task4Average=0;
                  for(let i=0;i<task4avg.length;i++)
                     {task4Total+= parseFloat(task4avg[i].value)}// lägger samman värdena i arrayen
                       task4Average=(task4Total/task4avg.length);// räknar ut medelvärde
                        //  console.log(task4Average);  Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                          let task5avg=$(".provsvar div:nth-child(6) .answer"), task5Total=0,task5Average=0;
                            for(let i=0;i<task5avg.length;i++)
                              {task5Total+= parseFloat(task5avg[i].value)}// lägger samman värdena i arrayen
                                task5Average=(task5Total/task5avg.length);// räknar ut medelvärde
                                        //  console.log(task5Average);  Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
 
                                    
                                let elev1tot=$("#elev1provsvar div .answer"), elev1Total=0;
                                for(let i=0;i<elev1tot.length;i++)
                                {elev1Total+= parseFloat(elev1tot[i].value)}// lägger samman värdena i arrayen
                                        // console.log(elev1Total); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                                let elev2tot=$("#elev2provsvar div .answer"), elev2Total=0;
                                for(let i=0;i<elev2tot.length;i++)
                                {elev2Total+= parseFloat(elev2tot[i].value)}// lägger samman värdena i arrayen
                                        // console.log(elev2Total); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                                let elev3tot=$("#elev3provsvar div .answer"), elev3Total=0;
                                for(let i=0;i<elev3tot.length;i++)
                                {elev3Total+= parseFloat(elev3tot[i].value)}// lägger samman värdena i arrayen
                                        // console.log(elev3Total); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                                let elev4tot=$("#elev4provsvar div .answer"), elev4Total=0;
                                for(let i=0;i<elev4tot.length;i++)
                                {elev4Total+= parseFloat(elev4tot[i].value)}// lägger samman värdena i arrayen
                                        // console.log(elev4Total);   //   Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                                let elev5tot=$("#elev5provsvar div .answer"), elev5Total=0;
                                for(let i=0;i<elev5tot.length;i++)
                                {elev5Total+= parseFloat(elev5tot[i].value)}// lägger samman värdena i arrayen
                                        // console.log(elev5Total);   //  Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                                 
                                let klassavg=[elev1Total,elev2Total,elev3Total,elev4Total,elev5Total], klassTotal=0,klassAverage=0;
                                for(let i=0;i<klassavg.length;i++)
                                {klassTotal+= (klassavg[i])}// lägger samman värdena i arrayen
                                        klassAverage=(klassTotal/klassavg.length);// räknar ut medelvärde
                                        //  console.log(klassavg);   Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)


      //Detta är gradient staplarna bakom uppgiftssvaren

                                    $("#elev1svar1").css({
                  
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar1").val() / $("#task1max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar1").val() / $("#task1max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                    });
           
                                      $("#elev1svar2").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar2").val() / $("#task2max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar2").val() / $("#task2max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev1svar3").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar3").val() / $("#task3max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar3").val() / $("#task3max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev1svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                   
                                           $("#elev1svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                           
                                   
                                           $("#elev1svar5").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev1svar5").val() / $("#task5max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev1svar5").val() / $("#task5max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
           
           
                                    $("#elev2svar1").css({
                                    
                                            "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                            +
                                            (($("#elev2svar1").val() / $("#task1max").val()*100))
                                            +
                                            "%,#ffffff " 
                                            +
                                            (($("#elev2svar1").val() / $("#task1max").val()*100))
                                            + 
                                            "%,#ffffff 100%)"
                                    });
           
                                      $("#elev2svar2").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev2svar2").val() / $("#task2max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev2svar2").val() / $("#task2max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev2svar3").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev2svar3").val() / $("#task3max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev2svar3").val() / $("#task3max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev2svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev2svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev2svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                   
                                           $("#elev2svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev2svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev2svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                           
                                   
                                           $("#elev2svar5").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev2svar5").val() / $("#task5max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev2svar5").val() / $("#task5max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
           
                                    $("#elev3svar1").css({
                                    
                                            "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                            +
                                            (($("#elev3svar1").val() / $("#task1max").val()*100))
                                            +
                                            "%,#ffffff " 
                                            +
                                            (($("#elev3svar1").val() / $("#task1max").val()*100))
                                            + 
                                            "%,#ffffff 100%)"
                                    });
           
                                      $("#elev3svar2").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev3svar2").val() / $("#task2max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev3svar2").val() / $("#task2max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev3svar3").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev3svar3").val() / $("#task3max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev3svar3").val() / $("#task3max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev3svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev3svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev3svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                   
                                           $("#elev3svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev3svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev3svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                           
                                   
                                           $("#elev3svar5").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev3svar5").val() / $("#task5max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev3svar5").val() / $("#task5max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
                                   
                                    $("#elev4svar1").css({
                                    
                                            "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                            +
                                            (($("#elev4svar1").val() / $("#task1max").val()*100))
                                            +
                                            "%,#ffffff " 
                                            +
                                            (($("#elev4svar1").val() / $("#task1max").val()*100))
                                            + 
                                            "%,#ffffff 100%)"
                                    });
           
                                      $("#elev4svar2").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev4svar2").val() / $("#task2max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev4svar2").val() / $("#task2max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev4svar3").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev4svar3").val() / $("#task3max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev4svar3").val() / $("#task3max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev4svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev4svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev4svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                   
                                           $("#elev4svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev4svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev4svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                           
                                   
                                           $("#elev4svar5").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev4svar5").val() / $("#task5max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev4svar5").val() / $("#task5max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                    
           
           
                                    $("#elev5svar1").css({
                                    
                                            "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                            +
                                            (($("#elev5svar1").val() / $("#task1max").val()*100))
                                            +
                                            "%,#ffffff " 
                                            +
                                            (($("#elev5svar1").val() / $("#task1max").val()*100))
                                            + 
                                            "%,#ffffff 100%)"
                                    });
           
                                      $("#elev5svar2").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev5svar2").val() / $("#task2max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev5svar2").val() / $("#task2max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev5svar3").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev5svar3").val() / $("#task3max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev5svar3").val() / $("#task3max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
           
           
                                           $("#elev5svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev5svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev5svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                   
                                           $("#elev5svar4").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev5svar4").val() / $("#task4max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev5svar4").val() / $("#task4max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });
                                           
                                   
                                           $("#elev5svar5").css({
                                    
                                    "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                    +
                                    (($("#elev5svar5").val() / $("#task5max").val()*100))
                                    +
                                    "%,#ffffff " 
                                    +
                                    (($("#elev5svar5").val() / $("#task5max").val()*100))
                                    + 
                                    "%,#ffffff 100%)"
                                   });


                                   $("#elev1 .pupil").css({
                                    
                                "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                +
                                (elev1Total/testmax*100)
                                +
                                "%,#ffffff " 
                                +
                                (elev1Total/testmax*100)
                                + 
                                "%,#ffffff 100%)"
                                });

                                $("#elev2 .pupil").css({
                                    
                                "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                +
                                (elev2Total/testmax*100)
                                +
                                "%,#ffffff " 
                                +
                                (elev2Total/testmax*100)
                                + 
                                "%,#ffffff 100%)"
                                });

                                $("#elev3 .pupil").css({
                                    
                                "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                +
                                (elev3Total/testmax*100)
                                +
                                "%,#ffffff " 
                                +
                                (elev3Total/testmax*100)
                                + 
                                "%,#ffffff 100%)"
                                });

                                $("#elev4 .pupil").css({
                                    
                                "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                +
                                (elev4Total/testmax*100)
                                +
                                "%,#ffffff " 
                                +
                                (elev4Total/testmax*100)
                                + 
                                "%,#ffffff 100%)"
                                });

                                $("#elev5 .pupil").css({
                                    
                                "background": "linear-gradient(to right,#69ce78 0%, #69ce78 " 
                                +
                                (elev5Total/testmax*100)
                                +
                                "%,#ffffff " 
                                +
                                (elev5Total/testmax*100)
                                + 
                                "%,#ffffff 100%)"
                                });



                        //detta är staplarna för genomsnitten

                                   $(".f1medel").text("Fråga 1: "+task1Average+" av "+$("#task1max").val());
                                   $(".f2medel").text("Fråga 2: "+task2Average+" av "+$("#task2max").val());
                                   $(".f3medel").text("Fråga 3: "+task3Average+" av "+$("#task3max").val());
                                   $(".f4medel").text("Fråga 4: "+task4Average+" av "+$("#task4max").val());
                                   $(".f5medel").text("Fråga 5: "+task5Average+" av "+$("#task5max").val());
                                   $(".maxmedel").text("Totalt: "+klassAverage+" av "+testmax);

                                   $("#elevtotal1").text(elev1Total);
                                   $("#elevtotal2").text(elev2Total);
                                   $("#elevtotal3").text(elev3Total);
                                   $("#elevtotal4").text(elev4Total);
                                   $("#elevtotal5").text(elev5Total);

                                   var elev1provsvar = $("#elev1 .pupil").val();
                                   $("#elev1provsvar h2").text(elev1provsvar);

                                   var elev2provsvar = $("#elev2 .pupil").val();
                                   $("#elev2provsvar h2").text(elev2provsvar);

                                   var elev3provsvar = $("#elev3 .pupil").val();
                                   $("#elev3provsvar h2").text(elev3provsvar);

                                   var elev4provsvar = $("#elev4 .pupil").val();
                                   $("#elev4provsvar h2").text(elev4provsvar);

                                   var elev5provsvar = $("#elev5 .pupil").val();
                                   $("#elev5provsvar h2").text(elev5provsvar);
     
                                              
                                   $(".f1medel").css({
                                   "padding-top":  83-(task1Average/$("#task1max").val()*83)+"vh"
                                   });
                                   
                                   $(".f2medel").css({
                                   "padding-top":  83-(task2Average/$("#task2max").val()*83)+"vh"
                                   });
                                   
                                   $(".f3medel").css({
                                   "padding-top":  83-(task3Average/$("#task3max").val()*83)+"vh"
                                   });
                                   
                                   $(".f4medel").css({
                                   "padding-top":  83-(task4Average/$("#task4max").val()*83)+"vh"
                                   });
           
                                   $(".f5medel").css({
                                   "padding-top":  83-(task5Average/$("#task5max").val()*83)+"vh"
                                   });
                                   
                                   $(".maxmedel").css({
                                   "padding-top":  83-(klassAverage/testmax*83)+"vh"
                                   });

                                   

                                       
                                if(isNaN(parseFloat(task1Average))) {
                                        $(".f1medel").css("opacity", "0");
                                } else {
                                        $(".f1medel").css("opacity", "1");
                                }
                                if(isNaN(parseFloat(task2Average))) {
                                        $(".f2medel").css("opacity", "0");
                                } else {
                                        $(".f2medel").css("opacity", "1");
                                }
                                if(isNaN(parseFloat(task3Average))) {
                                        $(".f3medel").css("opacity", "0");
                                } else {
                                        $(".f3medel").css("opacity", "1");
                                }
                                if(isNaN(parseFloat(task4Average))) {
                                        $(".f4medel").css("opacity", "0");
                                } else {
                                        $(".f4medel").css("opacity", "1");
                                }
                                if(isNaN(parseFloat(task5Average))) {
                                        $(".f5medel").css("opacity", "0");
                                } else {
                                        $(".f5medel").css("opacity", "1");
                                }
                                if(isNaN(parseFloat(klassAverage))) {
                                        $(".maxmedel").css("opacity", "0");
                                } else {
                                        $(".maxmedel").css("opacity", "1");
                                }
                        
                                if(isNaN(parseFloat(task1Average))) {
                                        task1avg = 0;
                                };  
                              

});
});
