const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const notes = require('./notes');
//log(process.argv);
//log(chalk.green.bold.inverse('Success!'));npm
yargs.command({
    command : 'add',
    describe : 'Add notes',
    builder : {
        title : {
            describe : 'Add a title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Add a Description',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        notes.addNote(argv.title,argv.body);
    }
}); 
yargs.command({
    command : 'remove',
    description : 'Remove Notes',
    builder : {
        title : {
            describe : 'Remove the title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        notes.removeNotes(argv.title);
}
}); 
yargs.command({
    command : 'list',
    description : 'List notes',
    handler : function() {
        notes.getNote();
    }
}); 
yargs.command({
    command : 'read',
    describe : 'read notes',
    builder : {
        title : {
            describe : "Read Notes",
            demandOption : true,
            type : "string"
        }
    },
    handler : function(argv) {
        notes.readNotes(argv.title);        
    }
}); 
yargs.parse();
