import { useState } from 'react';
import './Certifications.css';

type Certificate = {
  id: number;
  title: string;
  fileName: string;
  year: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Backend Development',
    fileName: 'Backend Development.pdf',
    year: '2022',
    image:
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Machine Learning Using Python & SKLearn Bootcamp',
    fileName: 'Machine Learning using Python and SKLearn Bootcamp.pdf',
    year: '2023',
    image:
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Backend Development using JavaScript and Node.js',
    fileName: 'Z1TDjMz.pdf',
    year: '2022',
    image:
      'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Machine Learning Using Python',
    fileName: 'ufiqK.pdf',
    year: '2023',
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Certifications() {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);
  const [viewerMessage, setViewerMessage] = useState<string | null>(null);

  const closeViewer = () => {
    setActiveCertificate(null);
    setViewerMessage(null);
  };

  const openCertificate = async (certificatePath: string, title: string) => {
    setActiveCertificate(null);
    setViewerMessage('Loading certificate...');

    try {
      const response = await fetch(certificatePath, { method: 'HEAD' });
      const contentType = response.headers.get('content-type') || '';

      if (!response.ok || !contentType.toLowerCase().includes('pdf')) {
        setViewerMessage(
          `${title} file was not found in public/certificates. Add the PDF file to view it here.`
        );
        return;
      }

      setViewerMessage(null);
      setActiveCertificate(certificatePath);
    } catch {
      setViewerMessage('Could not load this certificate right now. Please try again.');
    }
  };

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-grid">
          {certificates.map((certificate) => {
            const certificatePath = `/certificates/${encodeURIComponent(certificate.fileName)}`;

            return (
              <div key={certificate.id} className="certificate-card">
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.title} />
                  <div className="certificate-overlay">
                    <div className="certificate-links">
                      <button
                        className="certificate-link"
                        type="button"
                        onClick={() => void openCertificate(certificatePath, certificate.title)}
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>

                <div className="certificate-content">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-meta">Issued in {certificate.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {(activeCertificate || viewerMessage) && (
        <div
          className="certificate-modal"
          onClick={closeViewer}
          role="presentation"
        >
          <div className="certificate-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="certificate-modal-close"
              onClick={closeViewer}
            >
              Close
            </button>
            {activeCertificate ? (
              <iframe
                src={activeCertificate}
                title="Certificate Viewer"
                className="certificate-frame"
              />
            ) : (
              <div className="certificate-message">{viewerMessage}</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
