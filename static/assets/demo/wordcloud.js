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

function WordCloud(WordList){

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_wordcloud").append("svg")
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

// Load data from billboardHot100_1999-2019.csv
(async function(){
  var link = "https://billboard-top-100.herokuapp.com/api/v1.0/hot100/lyrics/Drake";
  var data = await d3.json(link).catch(function(error) {
    console.log(error);
  });
  // console.log(data); 
  console.log("Sample Size:" + data.length);

  stopwords = [
  "a", "A", "about", "About", "ABOUT", "above", "Above", "ABOVE", "after", "After", "AFTER", "again", "Again", "AGAIN", "against", "Against", "AGAINST", "all", "All", "ALL", "am", "Am", "AM", "an", "An", "AN",
  "and", "And", "AND", "any", "Any", "ANY", "are", "Are", "ARE", "as", "As", "AS", "at", "At", "AT",
  "be", "Be", "BE", "because", "Because", "BECAUSE", "been", "Been", "BEEN", "before", "Before", "BEFORE", "being", "Being", "BEING", "below", "Below", "BELOW", "between", "Between", "BETWEEN", "big", "Big", "BIG",
  "both", "Both", "BOTH", "but", "But", "BUT", "by", "By", "BY",
  "can", "Can", "CAN",
  "did", "Did", "DID", "do", "Do", "DO", "does", "Does", "DOES", "doing", "Doing", "DOING", "don", "Don", "DON", "don't'", "Don'T'", "DON'T'", "down", "Down", "DOWN", "during", "During", "DURING",
  "each", "Each", "EACH", "few", "Few", "FEW",
  "for", "For", "FOR", "from", "From", "FROM", "further", "Further", "FURTHER",
  "had", "Had", "HAD", "has", "Has", "HAS", "have", "Have", "HAVE", "having", "Having", "HAVING", "he", "He", "HE", "her", "Her", "HER","here", "Here", "HERE", "hers", "Hers", "HERS", "herself", "Herself", "HERSELF",
  "him", "Him", "HIM", "himself", "Himself", "HIMSELF", "his", "His", "HIS", "how", "How", "HOW",
  "i—", "I—", "i", "I", "if", "If", "IF", "I'm'", "I'M'", "I'M'", "in", "In", "IN", "into", "Into", "INTO", "is", "Is", "IS", "it", "It", "IT", "it's'", "It's'", "IT'S'", "its", "Its", "ITS", "itself", "Itself", "ITSELF",
  "just", "Just", "JUST",
  "let", "Let", "LET", "like", "Like", "LIKE",
  "me", "Me", "ME", "me,", "Me,", "ME,", "more", "More", "MORE", "most", "Most", "MOST", "my", "My", "MY", "myself", "Myself", "MYSELF",
  "nigga", "Nigga", "NIGGA", "'nigga", "'Nigga", "'NIGGA", "niggas", "Niggas", "NIGGAS", "no", "No", "NO", "nor", "Nor", "NOR", "not", "Not", "NOT", "now", "Now", "NOW",
  "of", "Of", "OF", "off", "Off", "OFF", "oh", "Oh", "OH", "on", "On", "ON", "once", "Once", "ONCE", "only", "Only", "ONLY", "or", "Or", "OR", "other", "Other", "OTHER", "our", "Our", "OUR", "ours", "Ours", "OURS", "ourselves",
  "Ourselves", "OURSELVES", "out", "Out", "OUT", "over", "Over", "OVER", "own", "Own", "OWN",
  "same", "Same", "SAME", "she", "She", "SHE", "should", "Should", "SHOULD", "so", "So", "SO", "some", "Some", "SOME", "such", "Such", "SUCH",
  "than", "Than", "THAN", "that", "That", "THAT", "that's'", "That's'", "THAT'S'", "the", "The", "THE", "their", "Their", "THEIR", "theirs", "Theirs", "THEIRS", "them", "Them", "THEM", "themselves", "Themselves", "THEMSELVES",
  "then", "Then", "THEN", "there", "There", "THERE", "these", "These", "THESE", "they", "They", "THEY", "this", "This", "THIS", "those", "Those", "THOSE", "through", "Through", "THROUGH", "to", "To", "TO", "too", "Too", "TOO",
  "under", "Under", "UNDER", "until", "Until", "UNTIL", "up", "Up", "UP", "very", "Very", "VERY",
  "was", "Was", "WAS", "we", "We", "WE", "were", "Were", "WERE", "what", "What", "WHAT", "when", "When", "WHEN", "where", "Where", "WHERE", "which", "Which", "WHICH", "while", "While", "WHILE", "who", "Who", "WHO",
  "whom", "Whom", "WHOM", "why", "Why", "WHY", "will", "Will", "WILL", "with", "With", "WITH", 
  "y'all'", "Y'All'", "Y'ALL'", "you", "You", "YOU", "your", "Your", "YOUR", "yours", "Yours", "YOURS", "yourself", "Yourself", "YOURSELF", "yourselves", "Yourselves", "YOURSELVES",
"!", "/", "—", ",", "?",];
  
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
  // console.log(String);
  var WordFrequency = wordCount(String);
  // console.log(WordFrequency);
  WordSorted = Object.keys(WordFrequency).sort(function(a,b){return WordFrequency[b]-WordFrequency[a]});
  Topwords = WordSorted.slice(0,100);
  WordCloud(Topwords);
  console.log(Topwords); 
})()