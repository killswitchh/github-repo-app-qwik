import type { GithubRepository } from 'src/models/github-repositories.dto'
import { GITHUB_API_URLS } from '../../constants'
import { ApiWrapper } from './../api-wrapper.service'
export const GithubService = {
    getUserRepos(userName: string): Promise<GithubRepository[]> {
        const url = GITHUB_API_URLS.GITHUB_GET_REPOS_URL(userName)
        return ApiWrapper.get(url)
    },
}

export default GithubService
