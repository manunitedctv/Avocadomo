package com.avocadomo.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.avocadomo.lms.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
} 