import type { GithubRepository, Owner } from '../models/github-repositories.dto';

export type Store = {
    searchString: string
    userInfo: Owner | null
    userRepositories: GithubRepository[] | null
    error?: string | null
}
