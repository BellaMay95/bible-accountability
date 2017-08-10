# This app is under active development. Please be patient! #

This app allows Bible accountability partners to log their readings and view their friends' activity.

# CURRENT FEATURES #
	* Create account
	* Login 
	* Log Readings
	* View their own log history
	* Search for friends
	* 2-way friend requests/confirm/remove
	* View friends' profile, reading log, and reading notes
	* Contact page for Bug Reports/Feature Requests/Other Feedback
	* Write notes about a day's reading and view friends' notes
	
# IN FUTURE RELEASES (IN NO SPECIFIC ORDER) #
	* Badge notifications (maybe desktop notifications?) when you receive a friend request/friend updates content/etc.
	* Ability to have separate lists of reading/notes and only share specific content with a friend
	* Read the Bible directly from the site
	* Add a custom Bible reading plan to follow
	* Link reading lists to a plan and share the plan with a specific friend
	
## If you have any feature requests, or if there a feature on the list you'd like to see first, please let me know! ##

This website is created on the MEAN stack (MongoDB, Express, Angular2, NodeJS).
To install on your server, install nodeJS and the angular-cli, clone the repo, run 'npm install' on both the root directory and /angular-src directory. The client files are then found in the /public directory. Inside the main.js file, the server is started on 'localhost:8080'. Change that line to your server.
If you make any changes to the source code, the angular app will run on 'localhost:4200'. Under the /angular-src/src/app/services, in all the '*.service.ts' files, you will need to change the return statements to go to 'http://localhost:3000/path-to-route' for it to connect for the backend from the localhost:4200. When you are satisfied with the code,change the return statements in the services back to the relative path and re-compile the /angular-src directory with the command 'ng build' and both the client and server code will be hosted on the 'localhost:3000' or whatever you choose to set it to.

The database is a mongoDB server. The only dependencies here are two collections 'olds' (Old Testament books) and 'news' (New Testament books) that hold the books of the bible with the structure {name: <name>, chapter <# of chapters in the book>}. The other collections are created via Mongoose.
