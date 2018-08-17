import { API_ROOT, HEADERS} from '../constants/URLConstants'



const login = (userObj) => {
  const url = 'http://localhost:3000/api/v1/team_members/login'
    const requestOptions = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({team_member: userObj })
    };

    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.id));
            }

            return user;
        });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

const register = (user) => {
  const url = `${API_ROOT}` + 'team_members/create'
  const requestOptions = {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({team_member: user})
  }
  return fetch(url, requestOptions)
  .then(response => response.json())
  .then(user => {
    if (user){
      localStorage.setItem('user', JSON.stringify(user.id));
    }
    return user
  });
}





export const UserService = {
    login,
    logout,
    register
}
