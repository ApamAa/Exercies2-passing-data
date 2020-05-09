import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};


class MoviesLiked extends Component {
render() {
  const users = this.props.users
  const movie = this.props.movie
 
  return(
    <div>
   <h2>{movie.name}</h2>
  <p>Liked By:</p>
   <ul>
    {users.map(user => 
    <li key={user.id}>{user.name}</li>)}
  </ul>
  </div>
  )
  
  }
}

class MoviesUnliked extends Component {
  render () {
    const movie = this.props.movie
   return (
     <div>
     <h2>{movie.name}</h2>
      <p>None of the current users liked this movie</p>
     </div>
 )
  }
}
class App extends Component {
  userLiked (film){
    let arr = [];
    profiles.map(prof => Number(prof.favoriteMovieID) === film.id ? arr.push(users[Number(prof.userID)]): null)
    return arr
  }
  render() {
    return (
      <div className="App">
      	{Object.values(movies).map((film)=>{
      		const userLiked = this.userLiked(film);
      		return(
      		userLiked.length !== 0?
      		<MoviesLiked users={userLiked} movie= {film}/>
			:
			<MoviesUnliked movie={film}/>
			)
			}
			)
		}
        
        
      </div>
    );
  }
}

export default App;
