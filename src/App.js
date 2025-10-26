import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaReact } from 'react-icons/fa';
import './App.css';

const components = {
  p: ({node, ...props }) => {
    if (props.children && typeof props.children[0] === 'string' && props.children[0].includes('::react-icons::')) {
      return <FaReact />; 
    }
    return <p {...props} />;
  },
};

function App() {
  const [markdown, setMarkdown] = useState('# Markdown Preview');
  return (
    <main>
    <section className="markdown">
      <textarea
      className="input"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
     </section>
    </main>
  );
}



export default App;
