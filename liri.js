// gives access keys file
var keysFile = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var client = new Twitter(keysFile.twitterKeys);
var inputRequest = process.argv[2];
var inputRequest2 = process.argv[3];





if (inputRequest === 'my-tweets'){

	var params = {
		screen_name: 'johnnypgreengo',
		count: 20,
	};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  
  		if (!error && response.statusCode === 200) {
  			for (i = 0; i < tweets.length; i++){

    			console.log('\n*******************\n' + tweets[i].created_at + '\n' + tweets[i].text);
			}
  		}
	});
};

if(inputRequest === 'spotify-this-song'){

	var songname = process.argv[3];

	spotify.search({ type: 'track', query: songname }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
	console.log(data.tracks.items[0].artists[0].name);

 	// console.log(data.tracks.items[0].artists[0].name);
 	console.log()
    // Do something with 'data' 
});


};
