//modelo de coleccion por aparte
const { text } = require('express');
const {Schema, model} = require('mongoose');

const NoteSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('Note', NoteSchema);