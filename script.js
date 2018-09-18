<<<<<<< HEAD

$(document).ready(function(){
  

$("input").change(function(){  

  let task1avg=$(".provsvar div:nth-child(1) .answer"), task1Total=0,task1Average=0;
  for(let i=0;i<task1avg.length;i++)
             {task1Total+= parseFloat(task1avg[i].value)}// lägger samman värdena i arrayen
               task1Average=(task1Total/task1avg.length);// räknar ut medelvärde
                  console.log(task1Average); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
 
 let task2avg=$(".provsvar div:nth-child(2) .answer"), task2Total=0,task2Average=0;
  for(let i=0;i<task2avg.length;i++)
     {task2Total+= parseFloat(task2avg[i].value)}// lägger samman värdena i arrayen
       task2Average=(task2Total/task2avg.length);// räknar ut medelvärde
          console.log(task2Average); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

          let task3avg=$(".provsvar div:nth-child(3) .answer"), task3Total=0,task3Average=0;
          for(let i=0;i<task3avg.length;i++)
             {task3Total+= parseFloat(task3avg[i].value)}// lägger samman värdena i arrayen
               task3Average=(task3Total/task3avg.length);// räknar ut medelvärde
                  console.log(task3Average); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                  let task4avg=$(".provsvar div:nth-child(4) .answer"), task4Total=0,task4Average=0;
                  for(let i=0;i<task4avg.length;i++)
                     {task4Total+= parseFloat(task4avg[i].value)}// lägger samman värdena i arrayen
                       task4Average=(task4Total/task4avg.length);// räknar ut medelvärde
                          console.log(task4Average); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)

                          let task5avg=$(".provsvar div:nth-child(5) .answer"), task5Total=0,task5Average=0;
                            for(let i=0;i<task5avg.length;i++)
                              {task5Total+= parseFloat(task5avg[i].value)}// lägger samman värdena i arrayen
                                task5Average=(task5Total/task5avg.length);// räknar ut medelvärde
                                    console.log(task5Average); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
 
                                    let klassavg=$(".elever .point"), klassTotal=0,klassAverage=0;
                                    for(let i=0;i<klassavg.length;i++)
                                     {klassTotal+= parseFloat(klassavg[i].value)}// lägger samman värdena i arrayen
                                       klassAverage=(klassTotal/klassavg.length);// räknar ut medelvärde
                                           console.log(klassAverage); // Visar resultat (temporär för att kunna se så att detta funkar på fulsidan)
                                           
});
});
=======
>>>>>>> c7eb1b6f61d1eba9ccf47120ea73bfbddb946426
