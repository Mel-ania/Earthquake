// MELANIA GOTTARDO - Terremoti

// I dati sono stati inventati per l'esercizio.
// Nota: per rendere più visibili le bolle, il raggio non corrisponde
// esattamente alla magnitudo del terremoto, ma al suo valore raddoppiato.
// Se si desidera impostare i due valori in maniera uguale, basterà
// togliere il " /2 " alla riga 106 dopo " elem.r ", ma in questo caso
// bisognerebbe dimezzare i valori dei raggi.

$(document).ready(function() {
  $('body').prepend("<h1>Terremoti del 2020</h1>");
  var ctx = $("#myChart");

  // GRAFICO
  var bubble = new Chart(ctx,
    {
      type:"bubble",
      data:{
        datasets:[
          {
            label:"America",
            data: [],
            backgroundColor: "rgb(223, 0, 36, 0.5)",
            borderColor: "rgb(223, 0, 36, 1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(223, 0, 36, 0)",
            hoverBorderColor: "rgb(223, 0, 36, 1)",
            hoverBorderWidth: 5,
            hoverRadius: -3
          },
          {
            label:"Europa",
            data: [],
            backgroundColor: "rgb(0, 133, 199, 0.5)",
            borderColor: "rgb(0, 133, 199, 1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(0, 133, 199, 0)",
            hoverBorderColor: "rgb(0, 133, 199, 1)",
            hoverBorderWidth: 5,
            hoverRadius: -3
          },
          {
            label:"Africa",
            data: [],
            backgroundColor:"rgb(0, 0, 0, 0.5)",
            borderColor: "rgb(0, 0, 0, 1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(0, 0, 0, 0)",
            hoverBorderColor: "rgb(0, 0, 0, 1)",
            hoverBorderWidth: 5,
            hoverRadius: -3
          },
          {
            label:"Asia",
            data: [],
            backgroundColor:"rgb(244, 195, 0, 0.5)",
            borderColor: "rgb(244, 195, 0, 1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(244, 195, 0, 0)",
            hoverBorderColor: "rgb(244, 195, 0, 1)",
            hoverBorderWidth: 5,
            hoverRadius: -3
          },
          {
            label:"Oceania",
            data: [],
            backgroundColor: "rgb(0, 159, 61, 0.5)",
            borderColor: "rgb(0, 159, 61, 1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(0, 159, 61, 0)",
            hoverBorderColor: "rgb(0, 159, 61, 1)",
            hoverBorderWidth: 5,
            hoverRadius: -3
          }
        ],
      },
      options:{
        scales:{
          yAxes:[{
            ticks:{
              display: false,
              max: 90,
              min: -90,
              stepSize: 1
            },
            gridLines: {
                  display:false
              }
          }],
          xAxes:[{
              ticks:{
                display: false,
                max: 180,
                min: -180,
                stepSize: 1
              },
              gridLines: {
                  display:false
              }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var elem = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return elem.name + ' - magnitudo: ' + elem.r/2 + ' - data: ' + elem.date;
            }
          }
        },
        legend: {
          display: true,
          position: "bottom"
        },
        animation : {
          duration: 0
        }
      }
  });

  // BOLLE con i dati dei terremoti
  var sf    = {x:-153, y: 30, r:18, name: "San Francisco",  continent: "America", date: "14/09/2020", revDate: "2020/09/14"};
  var la    = {x:-152, y: 26, r:12,  name: "Los Angeles",   continent: "America", date: "16/09/2020", revDate: "2020/09/16"};
  var ny    = {x:-109, y: 30, r:7,  name: "New York",       continent: "America", date: "16/03/2020", revDate: "2020/03/16"};
  var miami = {x:-116, y: 14, r:10, name: "Miami",          continent: "America", date: "09/02/2020", revDate: "2020/02/09"};
  var sd    = {x:-110, y: 6,  r:9,  name: "Santo Domingo",  continent: "America", date: "03/11/2020", revDate: "2020/11/03"};
  var rio   = {x:-79,  y:-44, r:8,  name: "Rio de Janeiro", continent: "America", date: "19/06/2020", revDate: "2020/06/19"};
  var ba    = {x:-92,  y:-58, r:12, name: "Buenos Aires",   continent: "America", date: "23/05/2020", revDate: "2020/05/23"};

  var roma   = {x:-23, y: 33, r:7,  name: "Roma",     continent: "Europa", date: "10/01/2020", revDate: "2020/01/10"};
  var parigi = {x:-32, y: 40, r:5,  name: "Parigi",   continent: "Europa", date: "20/03/2020", revDate: "2020/03/20"};
  var vars   = {x:-16, y: 45, r:9,  name: "Varsavia", continent: "Europa", date: "27/05/2020", revDate: "2020/05/27"};
  var atene  = {x:-14, y: 27, r:13, name: "Atene",    continent: "Europa", date: "31/03/2020", revDate: "2020/03/31"};
  var mosca  = {x: 2,  y: 48, r:4,  name: "Mosca",    continent: "Europa", date: "13/08/2020", revDate: "2020/08/13"};

  var cb      = {x:-42, y: 24, r:10, name: "Casablanca",     continent: "Africa", date: "19/11/2020", revDate: "2020/11/19"};
  var lagos   = {x:-31, y:-9,  r:6,  name: "Lagos",          continent: "Africa", date: "29/10/2020", revDate: "2020/10/29"};
  var ic      = {x:-4,  y: 16, r:12, name: "Il Cairo",       continent: "Africa", date: "11/09/2020", revDate: "2020/09/11"};
  var nairobi = {x: 2,  y:-17, r:8,  name: "Nairobi",        continent: "Africa", date: "04/04/2020", revDate: "2020/04/04"};
  var cdc     = {x:-16, y:-57, r:7,  name: "Città del Capo", continent: "Africa", date: "10/02/2020", revDate: "2020/02/10"};
  var algeri  = {x:-32, y: 26, r:14, name: "Algeri",         continent: "Africa", date: "03/05/2020", revDate: "2020/05/03"};

  var tokyo   = {x:100, y: 25, r:17, name: "Tokyo",       continent: "Asia", date: "27/04/2020", revDate: "2020/04/27"};
  var seul    = {x: 88, y: 27, r:11, name: "Seul",        continent: "Asia", date: "07/01/2020", revDate: "2020/01/07"};
  var pechino = {x: 74, y: 30, r:9,  name: "Pechino",     continent: "Asia", date: "21/07/2020", revDate: "2020/07/21"};
  var nd      = {x: 42, y: 13, r:7,  name: "Nuova Delhi", continent: "Asia", date: "15/08/2020", revDate: "2020/08/15"};
  var bg      = {x: 66, y: 1,  r:5,  name: "Bangkok",     continent: "Asia", date: "25/02/2020", revDate: "2020/02/25"};

  var sydney = {x:114, y:-57, r:8,  name: "Sydney",     continent: "Oceania", date: "18/08/2020", revDate: "2020/08/18"};
  var melb   = {x:104, y:-62, r:5,  name: "Melbourne",  continent: "Oceania", date: "05/02/2020", revDate: "2020/02/05"};
  var well   = {x:131, y:-66, r:10, name: "Wellington", continent: "Oceania", date: "07/04/2020", revDate: "2020/04/07"};
  var suva   = {x:146, y:-39, r:17, name: "Suva",       continent: "Oceania", date: "12/07/2020", revDate: "2020/07/12"};

  var bubbleData = [sf, la, ny, miami, sd, rio, ba,
                    roma, parigi, vars, atene, mosca,
                    cb, lagos, ic, nairobi, cdc, algeri,
                    tokyo, seul, pechino, nd, bg,
                    sydney, melb, well, suva];

  // ordinamento in base alla data
  function sorting(array){
    function compare( a, b ) {
      if ( a.revDate < b.revDate ){
        return -1;
      }
      else if ( a.revDate > b.revDate ){
        return 1;
      }
      else{
        return 0;
      }
    }
    array.sort( compare );
  }

  // funzione che aggiunge i dati ad un grafico
  function addData(chart, data){
      for(var i=0; i<data.length; i++){
        setTimeout(function(i){
          return function(){
            var d = data[i];
            chart.data.datasets.forEach((dataset)=>{
              if(dataset.label == d.continent){
                dataset.data.push(d);
              }
            });
            chart.update();
          }
        }(i), (i+1)*200);
      }
  }

  // aggiunta dei deti in ordine di data
  sorting(bubbleData);
  addData(bubble, bubbleData);
});
