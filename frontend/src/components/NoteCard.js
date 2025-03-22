import React from 'react';

const NoteCard = ({ note, onEdit, onDelete }) => {
    return (
        <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="mb-4">{note.content}</p>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => onEdit(note)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(note.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard; 