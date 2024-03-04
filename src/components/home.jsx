import { useState } from 'react';

function Home() {
  const [attempt, setAttempt] = useState('');
  const [result, setResult] = useState(null);
  

  const handleInputChange = (event) => {
    setAttempt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to send data to.
    const apiEndpoint = 'http://127.0.0.1:3000/api/game';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
           Authorization :  `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attempt: attempt }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">  
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            React Brain
        </h1>
        <h2 className="mt-10 text-center text-m  leading-9 tracking-tight text-gray-900">
            Découvrez en un minimum de tour le nombre  mystère !</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="attempt" className="block text-sm font-medium leading-6 text-gray-900 ">
          Qui suis-je ?
          <input
            type="text"
            name="attempt"
            autoComplete="?"
            value={attempt}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
          />
        </label>
        <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            trouvé ?
        </button>
      </form>
        {result && (
            <div>
            
            <pre>{JSON.stringify(result.resultText, null, 2)}</pre>
            </div>
        )}
        </div>
    </div> 
  );
}

export default Home;