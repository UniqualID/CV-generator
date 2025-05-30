import { useState } from 'react';
import './TagBox.css';

export default function TagsBox({ tags, setTags }) {
    const [input, setInput] = useState('');

    function onKeyDown(e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const cleanTag = input.trim().replace(/,$/, '');
            if (cleanTag && !tags.includes(cleanTag)) {
                setTags([...tags, cleanTag]);
            }
            setInput('');
        } else if (e.key === 'Backspace' && !input && tags.length) {
            e.preventDefault();
            setTags(tags.slice(0, -1));
        }
    }

    function removeTag(idx) {
        setTags(tags.filter((_, i) => i !== idx));
    }

    return (
        <div className="tag-box">
            {tags.map((tag, i) => (
                <span key={i}>
                    {tag}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                        onClick={() => removeTag(i)}
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </span>
            ))}
            <input
                type="text"
                spellCheck="false"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}
