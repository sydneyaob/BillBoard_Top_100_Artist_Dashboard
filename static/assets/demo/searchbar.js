// Search Bar Functions and Manipulation

// UMAR Selecting Document
$( document ).ready(function()
{
  // UMAR function running on user keyboard key up
  $ ( "#SearchBar" ).keyup( function()
   {
     // UMAR removing any search list created
     $("#SearchItemsContainer").empty(); 
     
     // UMAR running loop to generate search list
     for (var i= 0; i < artistList.length; i++)
     {
        // UMAR selecting input variable for search
        var searchInput = $( "#SearchBar").val().toLowerCase().trim();

        // UMAR defining condition for search input to be included with minimum lenght of 2 letters
        if (artistList[i].toLowerCase().includes(searchInput) && searchInput.length > 1)
        {
          // UMAR appending the populated searched items on the HTML
          $("#SearchItemsContainer").append( 
            `<div class = "searchHover container" id = "searchedDiv">
              <div class = "row">
                  <div class = "col-md-12">
                    <p class = "searchHover pl-3 pt-3 pb-2 searchedItems" id="${artistList[i]}" >${artistList[i]}</p> 
                  </div>
                </div>
            </div>`
            );
        };
     };
   });
});

