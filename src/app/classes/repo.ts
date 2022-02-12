export class Repo {
  constructor(
    public name: string,
    public description: string,
    public repo_url: string,
    public openissues: number,
    public forks: number,
    public watchers: number,
    public stars: number,
    public visibility: number,
    public created_at: number,
    public mainlang: string
  ) {}
}
