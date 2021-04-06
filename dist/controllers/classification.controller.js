"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationController = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const openapi_v3_1 = require("@loopback/openapi-v3");
const toxicity = tslib_1.__importStar(require("@tensorflow-models/toxicity"));
const samples = [
    {
        id: '002261b0415c4f9d',
        text: "We're dudes on computers, moron.  You are quite astonishingly stupid.",
    },
    {
        id: '0027160ca62626bc',
        text: 'Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.',
    },
    {
        id: '002fb627b19c4c0b',
        text: 'I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.',
    },
];
class ClassificationController {
    constructor() { }
    async classify(sentence) {
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
tslib_1.__decorate([
    openapi_v3_1.get('/classify', {
        responses: {
            '200': {
                description: 'Success',
            },
        },
    }),
    tslib_1.__param(0, openapi_v3_1.param.query.string('sentence')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificationController.prototype, "classify", null);
exports.ClassificationController = ClassificationController;
//# sourceMappingURL=classification.controller.js.map