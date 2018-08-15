const teamMemberBaseURL = 'http://localhost:3000/api/v1/team_members/'
const projectBaseURL = 'http://localhost:3000/api/v1/projects'
export const getProjects = () => {
  return fetch(projectBaseURL)
  .then(response => response.json())
}

export const getTeamMember = (memObj) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": 'application/json'
    },
    body: JSON.stringify({team_member: memObj})
  }
  return fetch (teamMemberBaseURL + 'login', options).then(response => response.json())
}

export const createTeamMember = (memObj) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({team_member: memObj})
  }
  return fetch(teamMemberBaseURL + 'create', options).then(response => response.json())


}
