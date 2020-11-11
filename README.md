# Learn

Note Application Using Terminal Command in Node Js:

This is a Simple begginer Application for NodeJs which is used to understand the basic concept like module,npm packages,console input logging,File read and writing,getting inputs
from console through argv etc

Commands:

1-> To add the notes to the application

> node app.js add --title="Title-Name" --body="Body-Name"

2-> To remove the notes from application

> node app.js remove --title="Title-Name" 

3-> To list the notes from application

> node app.js list

4-> To read the notes from the application

> node app.js read --title="Title-Name"

NPM Packages Used:

1. Yargs -> Used for making command in terminal
2. Chalk -> Used to make styling in terminal output
3. Fs -> To store and work with notes
