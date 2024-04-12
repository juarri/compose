import { create } from "zustand";

import { nanoid } from "nanoid";

export type SequenceStep = {
  isActive: boolean;
};

export type Sequence = {
  id: string;
  sample: string;
  steps: SequenceStep[];
};

type State = {
  bpm: number;
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  sequences: Sequence[];
};

type Action = {
  setBpm: (bpm: number) => void;
  resetCurrentStep: () => void;
  incrementCurrentStep: () => void;
  toggleIsPlaying: () => void;
  createSequence: (sample: Sequence["sample"]) => void;
  deleteSequence: (id: string) => void;
  setSequenceSteps: (id: string, steps: SequenceStep[]) => void;
  toggleStepIsActive: (sequenceId: string, stepIndex: number) => void;
};

export type SequencerStore = State & Action;

export const useSequencerStore = create<SequencerStore>()((set) => ({
  bpm: 120,
  currentStep: 0,
  totalSteps: 8,
  isPlaying: false,
  sequences: [],
  setBpm: (bpm) => set({ bpm }),
  resetCurrentStep: () => set({ currentStep: 0 }),
  incrementCurrentStep: () =>
    set((state) => ({
      currentStep: (state.currentStep + 1) % state.totalSteps,
    })),
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  createSequence: (sample) =>
    set((state) => ({
      sequences: [...state.sequences, createSequence(sample, state.totalSteps)],
    })),
  deleteSequence: (id) =>
    set((state) => ({ sequences: deleteSequence(state.sequences, id) })),
  setSequenceSteps: (id, steps) =>
    set((state) => ({
      sequences: setSequenceSteps(state.sequences, id, steps),
    })),
  toggleStepIsActive: (sequenceId, stepIndex) =>
    set((state) => ({
      sequences: toggleStepIsActive(state.sequences, sequenceId, stepIndex),
    })),
}));

function createSequence(
  sample: Sequence["sample"],
  amountOfSteps: number,
): Sequence {
  return {
    id: nanoid(),
    sample,
    steps: Array(amountOfSteps).fill({ isActive: false }),
  };
}

function deleteSequence(sequences: Sequence[], id: string) {
  return sequences.filter((sequence) => sequence.id !== id);
}

function setSequenceSteps(
  sequences: Sequence[],
  id: string,
  steps: SequenceStep[],
) {
  return sequences.map((sequence) => {
    if (sequence.id === id) {
      return {
        ...sequence,
        steps,
      };
    }
    return sequence;
  });
}

function toggleStepIsActive(
  sequences: Sequence[],
  sequenceId: string,
  stepIndex: number,
) {
  return sequences.map((sequence) => {
    if (sequence.id === sequenceId) {
      return {
        ...sequence,
        steps: sequence.steps.map((step, index) => {
          if (index === stepIndex) {
            return { isActive: !step.isActive };
          }
          return step;
        }),
      };
    }
    return sequence;
  });
}
