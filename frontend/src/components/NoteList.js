import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';
import noteService from '../services/noteService';

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const data = await noteService.getAllNotes();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await noteService.createNote(formData);
            setFormData({ title: '', content: '' });
            fetchNotes();
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await noteService.updateNote(selectedNote.id, formData);
            setSelectedNote(null);
            setIsEditing(false);
            setFormData({ title: '', content: '' });
            fetchNotes();
        } catch (error) {
            console.error('Error updating note:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await noteService.deleteNote(id);
            fetchNotes();
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleEdit = (note) => {
        setSelectedNote(note);
        setIsEditing(true);
        setFormData({
            title: note.title,
            content: note.content
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Notes</h1>
            
            <NoteForm
                formData={formData}
                isEditing={isEditing}
                onSubmit={isEditing ? handleUpdate : handleCreate}
                onChange={setFormData}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default NoteList; 