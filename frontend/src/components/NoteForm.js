import React from 'react';

const NoteForm = ({ formData, isEditing, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit} className="mb-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => onChange({ ...formData, title: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Content"
                    value={formData.content}
                    onChange={(e) => onChange({ ...formData, content: e.target.value })}
                    className="w-full p-2 border rounded"
                    rows="4"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {isEditing ? 'Update Note' : 'Create Note'}
            </button>
        </form>
    );
};

export default NoteForm; 