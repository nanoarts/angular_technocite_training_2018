export class Article {
   title: string;
   link: string;
   votes: number;
  // private Domaine: string;


  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
    // this.Domaine = link.slice(7);
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

  domain(): string {
    try {
      const domainPath: string = this.link.split('//')[1];
      return domainPath.split('/')[0];
    } catch {
      return null;
    }
  }
}
