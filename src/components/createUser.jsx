import { Component } from 'react';
//import { useNavigate} from "react-router-dom"

class CreateUser extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: '',
      successMessage: '',
    };
  }
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    console.log('Form submitted'); // Log that the form is being submitted
    event.preventDefault();
  
    const { email, nickname, password, passwordConfirmation } = this.state;
  
    console.log('Form data:', { email, nickname, password, passwordConfirmation }); // Log the form data
  
    if (password !== passwordConfirmation) {
      
      this.setState({ errorMessage: 'Les mots de passes ne correspondent pas...' });
      return;
    }
  
    const apiUrl = 'http://127.0.0.1:3000/api/users';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
      });
  
      //console.log('API Response:', response); // Log the API response
  
      if (response.status === 201) {
        this.setState({
          successMessage: 'Utilisateur créé',
          errorMessage: '',
        });
        // console.log('User created successfully'); // Log successful user creation
        // navigate("/login");
      } else {
        const data = await response.json();
        this.setState({ errorMessage: data.error || 'An error occurred' });
        console.log('API Error:', data.error || 'An error occurred'); // Log API error
      }
    } catch (error) {
      this.setState({ errorMessage: 'An error occurred while contacting the server' });
      console.error('Error:', error); // Log any JavaScript errors
    }
  }
  

  render() {
    return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
        <h1>Création de compte</h1>
        <form onSubmit={this.handleSubmit} className="space-y-6">
          <div className="mt-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Pseudo:</label>
            <input
              type="text"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleInputChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Mot de passe:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Confirmation de mot de passe:</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleInputChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

            />
          </div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Valider</button>
        </form>
        {this.state.errorMessage && (
          <div className="error">{this.state.errorMessage}</div>
        )}
        {this.state.successMessage && (
          <div className="success">{this.state.successMessage}</div>
        )}
      </div>
    );
  }
}

export default CreateUser;