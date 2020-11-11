const fs = require('fs');
const chalk = require('chalk');

function readNotes(title){
    const notes = loadNotes();
    const data  = notes.find((note) => note.title === title);
    if(data){
    console.log(chalk.inverse(data.title) +" : "+ data.body);
    }else{
       console.log(chalk.inverse.red("No Data Found"));
    }
}

function getNote(){
    const notes = loadNotes();
    console.log(chalk.inverse.bold("Your Notes"));
    notes.forEach((note)=>console.log(chalk.yellow(note.title)));
}

function addNote(title,body){
    const notes = loadNotes();
    var dupNotes = notes.filter(function(note){
        return note.title === title;
    });
    if(dupNotes.length === 0){
        notes.push({
            title : title,
            body : body
        });    
        saveNotes(notes);
        console.log(chalk.green.bold.inverse("Add Succesful"));
    }else{
        console.log(chalk.red.bold.inverse("Title Already Present"));
    }
}
function saveNotes(notes){
    var strNotes = JSON.stringify(notes);
    fs.writeFileSync("./notes.json",strNotes);
}
function loadNotes(){
    var finalData = [];
    try{
    var dataBuffer = fs.readFileSync('notes.json');
    var data = dataBuffer.toString();
    finalData = JSON.parse(data);
    return finalData;
    }catch(err){
        return finalData;
    }
}
function removeNotes(title){
    var notes = loadNotes();
    var findNotes = notes.filter(function(note){
        if(!(note.title === title))
            return note;
    });
    if(notes.length === findNotes.length){
        console.log(chalk.red.bold.inverse("No Note Found"));
    }else{
        saveNotes(findNotes);
        console.log(chalk.green.bold.inverse("Remove Successful"));
    }
}
module.exports = {
    getNote : getNote,
    addNote : addNote,
    removeNotes : removeNotes,
    readNotes : readNotes
};