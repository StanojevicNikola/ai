export declare class ClassificationController {
    constructor();
    classify(sentence: string): Promise<{
        label: string;
        results: {
            probabilities: Float32Array;
            match: boolean;
        }[];
    }[]>;
}
