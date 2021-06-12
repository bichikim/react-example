import {atom} from 'jotai'
import Axios from 'axios'

export const baseUrlAtom = atom('https://api.github.com/repos/angular/angular-cli/')

const axios = Axios.create({
  baseURL: 'https://api.github.com/repos/angular/angular-cli',
})

export const fetchIssuesOpen = atom(
  async () => {
    const response = await axios.get('issues', {
      params: {
        sort: 'comments',
        state: 'open',
      },
    })
    console.log(response)
    return response.data
  },
)
