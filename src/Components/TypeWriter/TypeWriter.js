import { useEffect, useState } from "react";

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('asc')

    useEffect(() => {
        if (direction === 'desc') startDescending()
        else if (currentIndex < text.length && direction === 'asc') {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDirection('desc')
            }, 3000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, delay, text, direction]);

    const startDescending = () => {
        if (currentIndex > 0) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText.slice(0, -1));
                setCurrentIndex(prevIndex => prevIndex - 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else setDirection('asc')
    }

    return <span>{currentText || ''}<label className="blink bold"> |</label></span>;
};

export default Typewriter;