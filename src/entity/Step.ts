export interface IStep {
  id: number;
  title: string;
}

interface IAnswer {
  text: string;
  goto: number;
  dialog: IStep[];
}

class Step implements IStep {
  public id: number;
  public title: string;
  public icon: string;
  public bg: string;
  public placeholder: string;

  constructor(options) {
    this.id = options.id;
    this.title = options.title;
    this.icon = options.icon;
    this.bg = options.bg;
    this.placeholder = options.placeholder;
  }
}


export class TextStep extends Step {

}

export class QuestionStep extends Step {
  public question: string = '';
  public answers: IAnswer[] = [];
}