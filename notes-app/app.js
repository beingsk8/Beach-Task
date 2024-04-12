const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');


/*create custom command using yargs*/
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Title of the note',
            demandOption:true,
            type: 'string',
        },
        body:{
            describe: 'Body of the note',
            demandOption:true,
            type: 'string',
        }
    },
    handler(argv){notes.addNote(argv.title, argv.body)}
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Title note',
            demandOption:true,
            type: 'string',
        }
    },
    handler(argv){notes.removeNotes(argv.title)}
})

yargs.command({
    command: 'read',
    describe: 'Note title',
    builder:{
        title: {
            describe:"Read note",
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv){notes.readNotes(argv.title,argv.body)}
})


yargs.command({
    command: 'list',
    describe: 'list the notes ',
    builder: {
        title:{
            describe: 'Title of the note',
        }
    },
    handler(){return notes.getNotes();}
})

yargs.parse()

