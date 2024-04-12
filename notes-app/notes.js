const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const listAllNotes= fs.readFileSync('notes.json').toString()
    console.log(listAllNotes)
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}
const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes?.length > 0) {
        console.log(chalk.bold.red('Note title is already used'))
        saveNotes(notes)
    }
    else {
        notes.push({title: title, body: body});
        console.log(chalk.bold.green('New Note Added'))

    }
}

const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
    }catch(e){
        return [];    }
}
const removeNotes = (title) =>{
    const notes = loadNotes();
    const remainingNotes = notes.filter((note)=> note.title !== title)
    remainingNotes?.length < notes?.length ?
        console.log(chalk.bold.green('Note removed'))
        : console.log(chalk.bold.red('No Note found'))
    saveNotes(remainingNotes)
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const readingNotes = notes.find((note)=> note.title === title)
    if(!readingNotes){
        console.log(chalk.bold.red('No Note found'))
    }else {
        console.log(chalk.bold.green('Title:'+ readingNotes?.title + '\n' + "Note:" + readingNotes?.body))
    }

}
module.exports = {
    addNote:addNote,
    getNotes:getNotes,
    removeNotes:removeNotes,
    readNotes:readNotes,
};