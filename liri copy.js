// require fs
var fs = require("fs");

// require key.js
var key = require("./key");
// require twitter
var Twitter = require('twitter');

// require OMBD
var request = require("request");

var action = process.argv[2];


function twentyTweets() {
	
	// Passes Twitter keys into call to Twitter API.
	var client = new Twitter(key.twitterKeys);

	// Search parameters includes my tweets up to last 20 tweets;
    var params = {q: '@jhlmai', count: 20};
    console.log(params);

	// Shows up to last 20 tweets and when created in terminal.
	client.get('search/tweets', params, function(error, tweets, response) {
	  if (!error) {

	  	// Loops through tweets and prints out tweet text and creation date.
	  	for (var i = 0; i < tweets.statuses.length; i++) {
	  		var tweetText = tweets.statuses[i].text;
	  		console.log("Tweet Text: " + tweetText);
	  		var tweetCreationDate = tweets.statuses[i].created_at;
	  		console.log("Tweet Creation Date: " + tweetCreationDate);
	  	}
	  } else {
	  	console.log(error);
	  }
	});
}
twentyTweets();