import { Modal } from "react-bootstrap"


const ContactForm = ({
    isOpen,
    onRequestClose
}) => {
    return (
        <Modal
            show={isOpen}
            onHide={onRequestClose}
            contentLabel="PDF Viewer"
            centered
            size="lg"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div style={{ height: '60vh', overflow: 'auto' }}>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    )
}

export default ContactForm