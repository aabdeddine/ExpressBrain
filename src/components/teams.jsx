import { useState, useEffect } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/teams';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Equipes</h1>
      {loading ? (
        <p>Equipes en cours de récuperation...</p>
      ) : (
        <ul>
          {teams.map((team) => (
            <div key={team.uuid}> 
            <li>{team.name}</li>
            <li>{team.members}</li>
            </div>
            
            
          
          ))}
        </ul>
      )}
    </div>
  );
}


