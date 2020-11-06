
# Important Links

Link to the deployed [dashboard.](https://billboard-top-100.herokuapp.com/)
Link to the original [github repository.](https://github.com/TheGreekGoddess/Project_3)

# WHAT WE DEVELOPED
After cleaning up dataset of BillBoard Top 100 artist from 1999 to 2020 found on Kaggle, we developed an interactive dashboard which allows user to search the artist by name and it plots the average song attributes of the artist, number of times the artist came on the billboard top 100 chart, word cloud of frequently used words by the artist and a data table on few songs of the artists.

# WHAT WE DISCOVERED
- Top Solo Male Artist by Hits: Drake 
- Top Solo Female Artist by Hits: Taylor Swift
- Top Group Artist by Hits: Maroon 5
- Top Solo Male Artist by Followers: Ed Sheeran
- Top Solo Female Artist by Followers: Rihanna
- Top Group Artist by Followers: Coldplay

# MACHINE LEARNING ANALYSIS
The team developed a machine learning model to predict if the song will be a hit based on certain attributes of the song. At first we tried to predict the exact popularity of the song but the models accuracy was very low, hence the output nodes were decreased to just two, will the song be a hit or a miss? (i.e. Will the song end up in top 10 of the billboard 100?)

The activation functions reLu, sigmoid, linear, and tanh all produced similar Accuracy results. And though we added a deep layer, the Accuracy % did not change much.

As we adjusted the output nodes from 92 to 10 to 2 using reLu, we found that the Accuracy % increased due to the relatively limited Output Nodes. We did not observe a change in the Accuracy upon increasing the number of songs in the top song bin.

Se also built a KNN (k-nearest neighbours algorithm) classifier model that resulted in a similar accuracy of 67.4% as our NN model. Considering both NN and KNN models generated similar accuracy levels, we believe our NN model is robust and can be enhanced by adding more data or training it with a more comprehensive data set.

#### © 2020 Muskatweeters
