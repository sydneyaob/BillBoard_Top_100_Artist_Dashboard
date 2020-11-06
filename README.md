https://billboard-top-100.herokuapp.com/

### 2020.10.08 Day 0
Recipe for a successful A+ project:
* Half a dozen brightest team members, at room temp (LOL!)
* Heads brimming with an abundance of knowledge
* Hearts with a willingness to share this knowledge
* Passion for some brute force analysis
* An hour or two or ten to brainstorm every cool idea in the universe
* A few minutes of objective musing to align on what is practical and achievable in 8-9 days!

### 2020.10.10 Day 1: HEROKU & POSTGRES
We decided to use our old pal Heroku to set-up the DB hosting with the subscription of choice. We then created a Postgres server with the Heroku credentials for the host, input, port, etc.
We then proceeded to create tables by defining variables and the corresponding data types.
Then we imported the various CSV files. Caution, you will attempt anywhere from 25 to 5,000 times to import the CSV file. Google the errors. Convert it to TXT format. Reimport. Google the new errors. Curse under your breath. Get some caffeine. Refocus. And voila, we have successfully imported our first file. Only ten more to go!
As homework, our group decided to each chalk out 2-3 visuals each on what we think would be a cool representation of the Billboard data.

### 2020.10.11 - Day 2: APIs & HTML
https://billboard-top-100.herokuapp.com/api/v1.0/hot100/    
https://billboard-top-100.herokuapp.com/api/v1.0/hot100/no_lyrics/    
https://billboard-top-100.herokuapp.com/api/v1.0/attributesByYear/    
https://billboard-top-100.herokuapp.com/api/v1.0/averageAttributes/    

We wrote a script and refreshed the tables to get the connection back up and then it lets us know that the script didn't save. So we were presented with a coveted opportunity for a do-over!?!?!
In parallel, while Ben was working on the do-over, the group finalized the website template that we were gonna use to BLOW YOUR MINDS. We had an AGOT style elimination, and a front runner was selected. Then began the process of brainstorming what graphics we wanted to showcase on our platform. We looked at each attribute and discussed what the appropriate metric representation would look like. We played around with the data in excel and agreed on averages and percentiles to represent the overall data set. Then SQL wizard Ben made the magic of averages happen, and we were all swooning over our data yet again! We chalked out the outline of our website, and finalized the visualizations, and gave ourselves some research as homework!

### 2020.10.12 Day 3: WORD CLOUD
Ayan BLEW our minds with the Word Cloud script he wrote that displayed the most used words in the silhouette of the chosen artist. We then made a list of some NSFW words and reran the scripts! It's looking super slick!
Umar was researching how to make our search bar more "search" compatible so the results aligned with the data contained in our data set. Ben got busy with building a few APIs that would help us visualize the data, and our project was blazing forward. Sarah began her pursuit of looking for creative ways to incorporate the Spotify API into our website, and we started tweaking and customizing our home page and tabs.
We ensured every tiny detail tied in aesthetically to what the Muskatweeters brand is world-renowned for! Be it the icons on the navigation bar or the various visualizations and tables.

### 2020.10.13 Day 4: JAVASCRIPT SEARCH BAR & LINE GRAPH
Ben continued to churn out APIs and add more SQL magic to clean and group the data for our interactive charts. Ayan continued to tinker with the word cloud, with help from Ben, to update the "Stopword" list.
We got busy with how to make our Search Bar results dynamically update the attributes graph. Naturally, the group was brushing up on the JS class recordings, class activities, homework submissions. Umar used the JavaScript Dom document to create a search bar based on the list of artist names available in the data set. It requires at least two letters to populate the artist's name containing the typed letters. Upon clicking the searched artist name, the various API elves get to work and fetch data to make the bar chart, line graph, artists word cloud, songs table, and artist information areas.
We get to work on our first visualization: The Line Graph! It represents the average attributes of the selected artist as compared to those of other artists. The line graph plots the average attributes across all the artists' top songs. As mentioned earlier, each attribute was converted to a percentile (between 0 - 1) for easy comparison and consistency of scale across artists.

### 2020.10.14 Day 5: JAVASCRIPT BAR CHART
Our second visualization to take shape: The Bar Chart that displays the number of times an artist was on the Billboard top 100 each year. It was initially tested by using CSV files, and then we used the API to dynamically pull data based on what the artist is inputted in the search bar. It took a few attempts to figure out how to intake the JSON object information to create the bar chart. We create two empty arrays and a ForEach loop to push the Count and Year data into their respective arrays. The displayed arrays were not in chronological order, so we had to create another object from the two arrays to format the years correctly. We then created two final arrays with the year information in chronological order and its corresponding count data. Eventually, the Bar chart JavaScript code was added to our consolidated demo.js file. It took a lot of trial and error as we had many parts of the dashboard dynamically updating with the new and improved search bar within demo.js. Finally, with the chart label information now customized, we created the update bar chart function that updates both axes and corresponding counts, based on the chosen artist. Basically, the first visual was "an inception" of all bar charts! 

### 2020.10.14 Day 6: MACHINE LEARNING
The Machine Learning model is coming along pretty great! The activation functions reLu, sigmoid, linear, and tanh all produced similar Accuracy results. And though we added a deep layer,  the Accuracy % did not change much. As we adjusted the output nodes from 92 to 10 to 2 using reLu, we found that the Accuracy % increased due to the relatively limited Output Nodes. We did not observe a change in the Accuracy upon increasing the number of songs in the top song bin.
Because we are top-notch data scientists, we also built a KNN (k-nearest neighbors algorithm) classifier model that resulted in a similar accuracy of 67.4% as our NN model. Considering both NN and KNN models generated similar accuracy levels, we believe our NN model is robust and can be enhanced by adding more data or training it with a more comprehensive data set.
Content with this, Miri got busy with our third and fourth visualization: Artist Info cards. The uber complicated and consolidated demo.js file was starting to grow on us, and we picked up the pace with our Javascript coding skills. We added placeholders into the HTML files to ensure the visual appeal on launch was consistent with that of a selected Artist.

### 2020.10.15 Day 7: REST & REJUVENATE
Considering over the past six days we had put in what seemed like a lifetime's worth of work, our team chose to take a break! A day of rest to reset and rejuvenate. To daydream of all the free time that will lie ahead of us within a few days. All the series and movies we've been adding to our watchlists over the last six odd months. Ahhhh, so much bingeing to do!!!

### 2020.10.17 Day 8: TABLEAU RACING BAR CHART
Our Machine Learning model is up to 68.1% accuracy! Bob comforted us with our expectations of it increasing to 99% in 72 hours! It was fulfilling to know we were on the right track!
Back to visualizations, we wanted to display the change in top positions over time. So we used Tableau to visualize artists' appearance on the billboard top 100 chart over the two decades worth of weekly Billboard data. The result was a Racing Bar Chart that outlines the top 15 artists on the Billboard top 100 as the timeline progresses from 1999-2019. An end-user has the option to select the animation for monthly or yearly progression. To keep up with Kevin's challenge of harnessing the power of every topic taught in class, one brave data scientist (who shall remain anonymous) decided to take a walk down the VBA memory lane. Columns in the Billboard top 100 data set that were not essential to the visualization, were eliminated, and artists' appearance counts were calculated using VBA. Tableau allowed us to plot the maximum count of the artist appearances and rank the artist by max count and plot the top 15 artists.

### 2020.10.18 Day 9: WORD CLOUD, DATA TABLES & HTML
We get our first Data Table "Billboard Top 5 Solo Artists by Followers" added to the HTML file. We played around with the formatting to ensure it was aesthetically pleasing. We then proceeded to add the second, third, and fourth tables! Billboard Top 5 Group Artists by Followers, Billboard Song Attributes Table, and Billboard Artist Songs & Genre Table.
We then proceed to embed the Word Cloud into the dashboard, our fifth visualization! It was built using D3 and parses through the data and lists the words that feature most frequently in the selected artist's songs. We censored certain terms and at some point were confounded by the amount of NSFW words used in songs. Our stopword list was going to need to be flipped into a "start word" list! Just kidding!
The Team profiles are linked to each contributor's Git Hub repository. Various HTML updates continue to be made. The CSS file and I have developed a love and hate relationship at this point.

### 2020.10.19 Day 10: ARTIST SONG RANK TABLE & PROJECT SUMMARY
The final and sixth visualization of our dashboard is a dynamically updating Artist Song, Genre & Rank table that lists a handful of songs for the selected artist along with the corresponding genre and highest Billboard song rank. We used Python to group by song name and take the highest rank to avoid songs from being duplicated. We also attempted to do this in SQL, but the Python gods were showering us with speed! And that was of the essence with less than 24 hours to go!
On the HTML side of things, The Team profiles were linked to each contributor's LinkedIn profiles. Cause why not?!? We photoshopped the perfect background too! We make some behind the scenes CSS updates.
Once we pushed the latest and greatest to our Git Hub repository, it was linked to Heroku and our website was live! Sweet satisfaction ensues!

### 2020.10.20 Day 11: SHOWTIME
As I recap the timeline of what we accomplished over a quick span of 9 to 10 days, it is both overwhelming and underwhelming at once. Our journey has been made successful by the guidance of a wonderful teacher like Bob. He has answered every question over the past six months with such care. Irrespective of whether it was for the first time or hundredth time. We're thankful to have Kidus and Kevin help and guide us and our fellow cohort mates. The unchartered conversations, the friendly smack talking of sports teams, the priceless MS Paint musings that Bob blessed us with,  and so much more in between. They will all be missed, as will you, our fellow cohort mates!

#### © 2020 Muskatweeters
