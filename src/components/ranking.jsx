import  { useEffect, useState } from 'react';

function Ranking() {
  const [rankingData, setRankingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const apiEndpoint = 'http://127.0.0.1:3000/api/rank';

    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRankingData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
      <h1 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-blue-700">Classement</h1>
      {loading ? (
        <p>Chargement du classement...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Utilisateur</th>
              <th>Tentatives</th>
              <th>Temps</th>
              <th>Nombre à trouver</th>            
            </tr>
          </thead>
          <tbody>
            {rankingData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.uuid}</td>
                <td>{entry.user}</td>
                <td>{entry.attempts}</td>
                <td>{entry.time} s</td>
                <td>{entry.numberToFind}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Ranking;
