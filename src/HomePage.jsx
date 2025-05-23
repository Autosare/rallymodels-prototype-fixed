import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>RallyModels.eu</h1>
      <p>Komunita rally modelov – Všetko na jednom mieste.</p>
      <input placeholder="Nájdi model alebo posádku" style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }} />
      <button style={{ padding: '0.5rem 1rem' }}>Preskúmať katalóg</button>
    </div>
  );
}