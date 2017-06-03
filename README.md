**This app is under active development. Please be patient!**

This app allows Bible accountability partners to log their readings and view their friends' activity.

**CURRENT FEATURES**
	Create account
	Login 
	Log Readings
	View their own log history
	
**IN FUTURE RELEASES**
	Search for friends
	2-way friend requests/confirm
	View friends' log history
	
**If you have any feature requests, please let me know!

This website is created on the MEAN stack (MongoDB, Express, Angular2, NodeJS).
To install on your server, install nodeJS, clone the repo, run 'npm install' on both the root directory and /angular-src directory, then run 'ng build' on the /angular-src directory. The client files are then found in the /public directory.
Inside the main.js file, the server is started on 'localhost:3000'. Change that line to your server.

The database is a mongoDB server. The only dependencies here are two collections 'olds' (Old Testament books) and 'news' (New Testament books) that hold the books of the bible with the structure {name: <name>, chapter <# of chapters in the book>}. The other collections are created via Mongoose.
