import React, {useState, useEffect} from 'react'
import './Gallery.css'

const cohortsData = [
    {
      year: 1,
      students: [
        { name: 'Arriyan Raza', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Najeeb Baig', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Usman Siddiqui', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Belaal Hai', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Saad Movania', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Hammad Khan', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Naazir Hamzavi', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Zayd Syed', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Raihon Malik', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Mert Gerdan', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        // More students
      ],
    },
    {
      year: 2,
      students: [
        { name: 'Raiyan Movania', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Sami Hao', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Umayr Ahmed', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Yacoub Haydin', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Majid Shabeer', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Yousuf Zaman', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Usmaan Iqbal', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Mateen Sekendari', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: 'Ahmed AlMughrabi', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        { name: '', pictureUrl: '/path-to-image/alice.jpg', url: 'https://example.com/alice' },
        // More students

      ]
    }
    // Add more cohorts as needed
  ];
  

function Gallery(){
    const [visibleYear, setVisibleYear] = useState(1); // Starting with the first year

  useEffect(() => {
    const onScroll = () => {
      const newPosition = Math.min(Math.floor(window.scrollY / 500) + 1, cohortsData.length);
      setVisibleYear(newPosition);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {cohortsData.map((cohort, index) => (
        <div key={cohort.year} className={`cohort ${index + 1 <= visibleYear ? 'visible' : ''}`}>
          <h2>Year {cohort.year}</h2>
          <div className="students">
            {cohort.students.map((student, studentIndex) => (
              <div key={studentIndex} className="student">
                <a href={student.url} target="_blank" rel="noopener noreferrer">
                  <img src={student.pictureUrl} alt={student.name} />
                </a>
                <p>{student.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
