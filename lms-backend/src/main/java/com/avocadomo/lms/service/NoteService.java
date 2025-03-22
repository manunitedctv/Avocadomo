package com.avocadomo.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.avocadomo.lms.model.Note;
import com.avocadomo.lms.repository.NoteRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    
    @Autowired
    private NoteRepository noteRepository;
    
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
    
    public Optional<Note> getNoteById(Long id) {
        return noteRepository.findById(id);
    }
    
    public Note createNote(Note note) {
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        return noteRepository.save(note);
    }
    
    public Note updateNote(Long id, Note noteDetails) {
        Optional<Note> note = noteRepository.findById(id);
        if (note.isPresent()) {
            Note existingNote = note.get();
            existingNote.setTitle(noteDetails.getTitle());
            existingNote.setContent(noteDetails.getContent());
            existingNote.setUpdatedAt(LocalDateTime.now());
            return noteRepository.save(existingNote);
        }
        return null;
    }
    
    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
} 