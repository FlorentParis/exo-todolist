import react, {useState} from 'react';
import "./style/TodoForm.css";

export default function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"  value={input} onChange={handleChange} />
            <button>Ajouter</button>
        </form>
    )
}