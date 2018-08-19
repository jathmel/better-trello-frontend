import { MEMBER_API_ROOT, PROJECT_API_ROOT, JOIN_API_ROOT, HEADERS } from '../constants'
const teamMemberBaseURL = 'http://localhost:3000/api/v1/team_members/'
const projectBaseURL = 'http://localhost:3000/api/v1/projects'

export const getProjects = () => {
  return fetch(projectBaseURL)
  .then(response => response.json())
}

export const getTeamMember = (memObj) => {
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({team_member: memObj})
  }
  return fetch (MEMBER_API_ROOT + 'login', options).then(response => response.json())
}

export const createTeamMember = (memObj) => {
  const options = {
    method: 'POST',
    headers:HEADERS,
    body: JSON.stringify({team_member: memObj})
  }
  return fetch(MEMBER_API_ROOT + 'create', options).then(response => response.json())

}

export const addTaskForTeamMember = (task_id, member_id) => {
  const options = {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({team_member_project:{team_member_id: member_id, task_id}})
  }
  return fetch(JOIN_API_ROOT + 'update', options).then(response => response.json())
}

export const getProjectTeamMembers = () => {
  return fetch(PROJECT_API_ROOT).then(response => response.json())
}

export const createProject = (name, description) => {
  const options = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({project:{name, description}})
  }
  return fetch(PROJECT_API_ROOT + 'create', options).then(response => response.json())
}
