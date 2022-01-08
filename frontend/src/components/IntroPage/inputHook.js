import { useState } from 'react';

const useInput = (init) => {
    const [input, setInput] = useState(init);
    const reset = () => {
        setInput(init);
    }
    const bind = {
        value: input,
        onChange: (e) => setInput(e.target.value)
    }
    return [bind, reset]
}
export default useInput;