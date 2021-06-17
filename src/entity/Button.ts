import type { IStep } from './Step';

export interface IAddStepButton {
  createStep(id: number): IStep;
}

export class AddStepButton implements IAddStepButton {
  public options;
  public stepType;

  constructor(stepClass, options) {
    this.options = options;
    this.stepType = stepClass;
  }

  public createStep(id: number): IStep {
    const options = {id, ...this.options}
    return new this.stepType(options);
  }
}