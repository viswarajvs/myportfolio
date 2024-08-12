import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { mydata } from '../../metadata/mydata';
import './PdfViewer.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfModal = ({ isOpen, onRequestClose, pdfUrl, title }) => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${mydata.profile.name}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Modal
            show={isOpen}
            onHide={onRequestClose} // Correctly hide the modal
            contentLabel="PDF Viewer"
            centered
            size="lg"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div style={{ height: '60vh', overflow: 'auto' }}>
                    <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} loading=''>
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            )
                        )}
                    </Document>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <CloudDownloadIcon className='hover-zoom-1' onClick={handleDownload} />
            </Modal.Footer>
        </Modal>
    );
};

export default PdfModal;
