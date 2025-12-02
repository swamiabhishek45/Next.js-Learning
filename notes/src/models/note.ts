import mongoose, { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;
