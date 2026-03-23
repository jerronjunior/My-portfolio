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
    fileName: 'Machine Learning using Python & SKLearn Bootcamp.pdf',
    year: '2023',
    image:
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Z1TDjMz Certificate',
    fileName: 'Z1TDjMz.pdf',
    year: '2022',
    image:
      'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'UfiqK Certificate',
    fileName: 'ufiqK.pdf',
    year: '2023',
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Certifications() {
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
                      <a
                        className="certificate-link"
                        href={certificatePath}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                      <a className="certificate-link" href={certificatePath} download>
                        Download
                      </a>
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
    </section>
  );
}
