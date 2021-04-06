/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { get, param } from '@loopback/openapi-v3';
import * as toxicity from '@tensorflow-models/toxicity';

const samples = [
  {
    id: '002261b0415c4f9d',
    text:
      "We're dudes on computers, moron.  You are quite astonishingly stupid.",
  },
  {
    id: '0027160ca62626bc',
    text:
      'Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.',
  },
  {
    id: '002fb627b19c4c0b',
    text:
      'I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.',
  },
];

export class ClassificationController {
  constructor() {}

  @get('/classify', {
    responses: {
      '200': {
        description: 'Success',
      },
    },
  })
  async classify(@param.query.string('sentence') sentence: string) {
    const model = await toxicity.load(0.85, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
    ]);
    const inputs = samples.map(x => x.text);
    const result = await model.classify(inputs);
    return result;
  }
}
