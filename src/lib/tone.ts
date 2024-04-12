import { useRef } from "react";

import * as Tone from "tone";

export type OscillatorOptions = ConstructorParameters<
  typeof Tone.Oscillator
>[0];

export function useOscillator(options: OscillatorOptions): Tone.Oscillator {
  const oscillator = useRef<Tone.Oscillator>(
    new Tone.Oscillator(options).toDestination(),
  );

  return oscillator.current;
}

export type SamplerOptions = ConstructorParameters<typeof Tone.Sampler>[0];

export function useSampler(options: SamplerOptions): Tone.Sampler {
  const sampler = useRef<Tone.Sampler>(
    new Tone.Sampler(options).toDestination(),
  );
  return sampler.current;
}

export type LoopOptions = ConstructorParameters<typeof Tone.Loop>[0];

export function useLoop(options: LoopOptions): Tone.Loop {
  const loop = useRef<Tone.Loop>(new Tone.Loop(options));
  return loop.current;
}
