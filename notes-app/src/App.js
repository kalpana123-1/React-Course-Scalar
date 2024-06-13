import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (title, content) => (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      {
        id: Date.now(),
        title: title,
        content: content,
      },
    ]);

    localStorage.setItem("notes", JSON.stringify(notes));

    console.log(notes);

    setTitle("");
    setContent("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app-container">
      <form className="note-form">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        ></input>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        ></textarea>

        <button type="submit" onClick={handleSubmit(title, content)}>
          Add Note
        </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="notes-header">
              <button>x</button>
            </div>
            <div className="notes-body">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
