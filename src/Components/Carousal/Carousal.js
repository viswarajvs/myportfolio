import { useState } from "react";
import { Carousel } from "react-bootstrap";


const Carousal = ({
    items
}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            {
                items.map(item => (
                    <Carousel.Item>
                        <div style={{ height: '200px' }}>
                            {item}
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Carousal