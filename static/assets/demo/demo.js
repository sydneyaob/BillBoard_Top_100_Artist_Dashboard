type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },

          // ODROD Updated the suggested Min and Max
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 60,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

// ODROD Customize chart label variables
    var chart_labels = ["Acousticness", "Danceability", "Duration", "Energy", "Instrumentalness", "Liveness", "Loudness", "Mode", "Popularity", "Speechiness", "Tempo", "Time Signature", "Valence"];
    var chart_data = [.75,.25,.75,.25,.75,.25,.75,.25,.75,.25,.75,.25,.75,.25];

    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          // ODROD merging changes on 2020.10.15
          // label: "",
          // ODROD update complete
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    
    //Umar Defining function for click on the dropdown menu
    d3.selectAll("#SearchItemsContainer").on("click", selection)
    
    // UMAR creating function for URL creation for Attributes
    function attrUrl(artistName){
      var attributesUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/averageAttributes/${artistName}`
      // Umar sending URL to necassary function to create artist data set
      getAttrData(attributesUrl)
      return attributesUrl
    };

    // UMAR creating function for URL creation for BillBoard Count
    function billUrl(artistName){
      var billboardUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/hot100/${artistName}`
      buildBarChart(billboardUrl)
      return billboardUrl
    };

    // ****** AYAN creating function for URL creation for WordCloud *****************
    function wordUrl(artistName){
      var wordCloudUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/hot100/lyrics/${artistName}`
      buildWordCloud(wordCloudUrl)
      return wordCloudUrl
    };

    // ODROD MIRI MERGES START 2020.10.17
    //Miri function artistUrl
    function artUrl(artistName){
      var artistUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/hot100/artist_followers/${artistName}`;
      getArtistData(artistUrl);
    };

    //Miri function tableUrl
    function tableUrl(artistName){
      var dataTableUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/hot100/no_lyrics/${artistName}`;
      getTableData(dataTableUrl);
    };
    // ODROD MIRI MERGES END

//  ODROD SARAH MERGES START 2020.10.15
    //SARAH Create a function to populate the bar charts with corresponding values for the selected artist
    async function buildBarChart(url) {
    
      //SARAH Define the Data variable
      var data = await d3.json(url);
  
      //SARAH Create two arrays of the number of times on Billboard 100 per year and corresponding year
      var FirstCount = []
      var FirstYear = []
  
      data.forEach(data => {
        var Count = data.counts
        FirstCount.push(Count)
      }); 
  
      data.forEach(data => {
        var Year = data.year
        FirstYear.push(Year)
      }); 
  
      //SARAH Creating Object from Years and Countlist Arrays
      var Combined = {}
      FirstYear.forEach((key, i) => Combined[key] = FirstCount[i]);
  
      //SARAH Creating Array from combined Object
      var FinalYear = Object.keys(Combined);
  
      var FinalCount = Object.values(Combined);
      
      //SARAH Pushing new data to update chart function
      updateBarChart(FinalCount, FinalYear);
      };
  
      //SARAH function to update chart
      function updateBarChart(FinalCount, FinalYear){
        var bar_chart_data = FinalCount;
        var bar_chart_labels = FinalYear;
        var data = BarChartData.config.data;
        data.datasets[0].data = bar_chart_data;
        data.labels = bar_chart_labels;
        BarChartData.update();
       }
//  ODROD SARAH MERGES COMPLETE
    function selection(){
      
      // UMAR Selecting Value of the dropdown which has been selected 
      var selectedArtist = d3.event.target.id
      
      // UMAR Removing the list of searched artists names  
      d3.selectAll(".searchedItems").remove();

      // UMAR replacing SearchBar value by the Selected Artist
      d3.select("#SearchBar").attr("placeholder",null).attr("value", `${selectedArtist}`)
      
      // UMAR clicking on "x" button to close the searchbar
      document.getElementById("close").click()
      
      // UMAR sending selected artist name to URL function to build api URL
      attrUrl(selectedArtist);
      billUrl(selectedArtist);
      wordUrl(selectedArtist);

      // ODROD MIRI MERGES START 2020.10.17
      // Miri sending selected artist name to artUrl function to build api URL
      artUrl(selectedArtist);
      tableUrl(selectedArtist);
      // ODROD MIRI MERGES COMPLETE
    };
    
    // *****   AYAN Word Cloud function for counting word frequency **********
    function wordCount(myString) {
      // Convert string to an array of words
      var stringArray = myString.split(" ");
      var wordFrequency = {};
      // Iterate through the array
      for (var i = 0; i < stringArray.length; i++) {
        var currentWord = stringArray[i];
        // If the word has been seen before...
        if (currentWord in wordFrequency) {
          // Add one to the counter
          wordFrequency[currentWord] += 1;
        }
        else {
          // Set the counter at 1
          wordFrequency[currentWord] = 1;
        }
      }
      return wordFrequency;
    }
    // *****   AYAN Word Cloud function for displaying Word Cloud **********
    function WordCloud(WordList){
    
    d3.select("#print_wordcloud").remove()
    // set the dimensions and margins of the graph
    var element = d3.select("#my_wordcloud").node();
    var boxwidth = element.getBoundingClientRect().width;
    var boxheight = element.getBoundingClientRect().height;
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = boxwidth - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#my_wordcloud")
        .append("div").attr("id","print_wordcloud")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    
    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits our requirements
    var layout = d3.layout.cloud()
      .size([width, height])
      .words(WordList.map(function(d) { return {text: d}; }))
      .padding(5)
      .fontSize(40)
      .rotate(function(){ return ~~(Math.random()*2)*90; })
      .on("end", draw);
    layout.start();
    
    // This function takes the output of 'layout' above and draw the words
    function draw(words) {
      svg.append("g")
         .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
         .selectAll("text")
         .data(words)
         .enter().append("text")
         .style("font-family","Impact")
         .style("fill","#D446B1")
         .style("font-size", function(d) { return d.size + "px"; })
         .attr("text-anchor", "middle")
         .attr("transform", function(d) {
         return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
           })
          .text(function(d) { return d.text; });
      }
    }
    
    function buildWordCloud(url) {
          d3.json(url).then(function(data){
          
            stopwords = ['i','me','I','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves',
            'he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves',
            'what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has',
            'had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by',
            'for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down',
            'in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any',
            'both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t',
            'can','will','just','don','should','now','nigga','Nigga','niggas','Niggas',"I'm","A",'nigga,',"y'all","don't","it's"," ","I—",
            "It's","that's","And",'!','/','the','The',",","By","without","Without","Go,","go,","it,"];
            
            function remove_stopwords(str) {
              reString = []
              words = str.split(' ')
              for(i=0;i<words.length;i++) {
                MyWords = words[i]
                if(!stopwords.includes(MyWords)) {
                    reString.push(MyWords)
                }
              }
              return(reString.join(' '))
            }  
            
            var rawString = "";
            for (var i = 0; i < 3; i++){
              rawString = rawString.concat(data[i].lyrics)
            };
          
            String = remove_stopwords(rawString) ;
            var WordFrequency = wordCount(String);
            WordSorted = Object.keys(WordFrequency).sort(function(a,b){return WordFrequency[b]-WordFrequency[a]});
            Topwords = WordSorted.slice(0,100);
            WordCloud(Topwords);
          })
    }



    // UMAR Function to get artist data after user selection
    function getAttrData(url){

      d3.json(url).then(function(data){
        // UMAR artist data list for plotting
        artistData = []
        // UMAR loop to go inside the data
        for  (i = 0; i < data.length; i++){
          // UMAR loop to get values out of the data set
          Object.values(data[i]).forEach(value => artistData.push(parseFloat(value)));
        }
        // UMAR Removing artist name from the data
        artistData.shift();
        // Pushing new data to update chart function
        updateChart(artistData);
        
      });
    };

    // ODROD MIRI MERGES START 2020.10.17
    function getArtistData(url){

      d3.json(url).then(function(data){
        singerData = []
        singerData.push(data[0].artist);
        singerData.push(data[0].followers);
        singerData.push(data[0].genres);
        singerData.push(data[0].group_or_solo);
        singerData.push(data[0].numalbums);
        singerData.push(data[0].yearfirstalbum);
        updateDashboard(singerData);
      });
    };
    
    function updateDashboard(singerData){
      d3.select("#artistname").text(singerData[0]);
      d3.select("#artistfollowers").text(`${singerData[1]}+ Followers`)
      d3.select("#artistgenres").text(`Genre: ${singerData[2]}`)
      d3.select("#artistgroup").text(` ${singerData[3]} Artist`)
      d3.select("#numalbums").text(`Number of Albums: ${singerData[4]}`)
      d3.select("#yearfirstalbum").text(`First Album Released In: ${singerData[5]}`)
    }
    
    function getTableData(url){
      d3.json(url).then(function(data){
        tableData = data;
        updateTable(tableData);
      });
    };

    function updateTable(tableData){
      d3.selectAll("#songDataRow").remove();
      for (i=0; i<7; i++){
        $("#songTable").append(`<tr id="songDataRow"> <td> ${tableData[i].name} </td> <td> ${tableData[i].genre} </td> <td> ${tableData[i].weekly_rank} </td></tr>`);
      }
    }

    // ODROD MIRI MERGES COMPLETE

    // UMAR function to update chart
    function updateChart(artistData){
      var chart_data = artistData;
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    }

    $("#2").click(function() {
      var chart_data = [.55, 3.59, .7, 0, .01, .19, .09, .73, .29, .06, .52, .78, .45];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });

//  ODROD SARAH MERGES START 2020.10.15
    //SARAH Creating Bar Chart
    // var myChart = new Chart(ctxGreen, {
    //   type: 'bar',
    //   data: data,
    //   options: gradientChartOptionsConfigurationWithTooltipBlue

    // });

    //SARAH Customize chart label variables
    var bar_chart_labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
    var bar_chart_data = [50,	30,	50,	30,	50,	30,	50,	30,	50,	30];

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); 

    var config = {
      type: 'bar',
      data: {
        labels: bar_chart_labels,
        datasets: [{
          // label: "Count",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: bar_chart_data,
        }]
      },
      options: gradientBarChartConfiguration
    };

    var BarChartData = new Chart(ctx, config);
    $("#0").click(function() {
      var data = BarChartData.config.data;
      data.datasets[0].data = bar_chart_data;
      data.labels = bar_chart_labels;
      BarChartData.update();
    }); //SARAH End of Bar Chart Updates
//  ODROD SARAH MERGES COMPLETE

  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};