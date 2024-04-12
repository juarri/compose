import { useCallback, useEffect, useRef, useState } from "react";

import * as Tone from "tone";

import { animated, useSpringRef, useTransition } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import { Canvas } from "@react-three/fiber";

import type { Shape } from "src/components/shapes/shape";
import ShapeComponent from "src/components/shapes/shape";

import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import snareMP3 from "/sample/kit-snare.mp3";
import tomMP3 from "/sample/kit-tom.mp3";
import hatMP3 from "/sample/kit-hat.mp3";

const AnimatedShape = animated(ShapeComponent);

type Instrument = {
  name: string;
  sample: Tone.Player;
  sequence: boolean[];
  shape: Shape;
  color: string;
};

const snare: Instrument = {
  name: "Snare",
  sample: new Tone.Player(snareMP3).toDestination(),
  sequence: [false, false, true, false, false, false, true, false],
  shape: "circle",
  color: "#3b82f6",
};

const tom: Instrument = {
  name: "Tom",
  sample: new Tone.Player(tomMP3).toDestination(),
  sequence: [true, false, false, false, true, false, false, false],
  shape: "square",
  color: "#ef4444",
};

const hat: Instrument = {
  name: "Hat",
  sample: new Tone.Player(hatMP3).toDestination(),
  sequence: [false, true, false, true, false, true, false, true],
  shape: "diamond",
  color: "#f59e0b",
};

const initialInstruments: Instrument[] = [hat, snare, tom];

const Rythm = () => {
  const [instruments, setInstruments] = useState(initialInstruments);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startPlaying = useCallback(() => {
    Tone.start();
    Tone.Transport.start(0);
    setIsPlaying(true);
  }, []);

  const stopPlaying = useCallback(() => {
    Tone.Transport.stop();
    setIsPlaying(false);
    setCurrentStep(0);
  }, []);

  const handleIsPlayingToggle = useCallback(() => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  }, [isPlaying, startPlaying, stopPlaying]);

  const triggerInstruments = useCallback(() => {
    instruments.forEach((instrument) => {
      if (instrument.sequence[currentStep]) {
        instrument.sample.start();
      }
    });
  }, [instruments, currentStep]);

  const toggleIntrumentSequenceStep = (
    instrumentIndex: number,
    stepIndex: number,
  ) => {
    const newInstruments = instruments.map((instrument, i) => {
      if (i === instrumentIndex) {
        const newSequence = instrument.sequence.map((step, j) => {
          if (j === stepIndex) {
            return !step;
          }
          return step;
        });
        return { ...instrument, sequence: newSequence };
      }
      return instrument;
    });
    setInstruments(newInstruments);
  };

  const loopRef = useRef<Tone.Loop | null>(null);

  useEffect(() => {
    if (isPlaying) {
      loopRef.current = new Tone.Loop(() => {
        triggerInstruments();
        setCurrentStep((prev) => (prev + 1) % 8);
      }, "4n").start(0);
    }

    return () => {
      loopRef.current?.stop();
    };
  }, [isPlaying, triggerInstruments]);

  return (
    <>
      <section className="relative flex-1">
        <div
          className="absolute inset-0 z-0 animate-bg-pan bg-amber-400"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23f59e0b' fill-opacity='0.35'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: 12,
          }}
        />

        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </section>

      <section className="relative py-12 border-t-2 border-gray-200 pt-16">
        <div
          className="absolute inset-0 z-0 animate-bg-pan"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fafafa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "12px",
          }}
        />

        <button
          onClick={handleIsPlayingToggle}
          className="absolute -top-8 -ml-4 left-1/2 p-4 bg-white rounded-full shadow"
        >
          {isPlaying ? (
            <PauseIcon className="size-8" />
          ) : (
            <PlayIcon className="size-8" />
          )}
        </button>

        <div className="max-w-screen-sm mx-auto">
          {instruments.map((instrument, instrumentIndex) => {
            return (
              <div key={instrumentIndex} className="flex justify-between h-12">
                {instrument.sequence.map((step, stepIndex) => {
                  return (
                    <Step
                      key={stepIndex}
                      onClick={() => {
                        toggleIntrumentSequenceStep(instrumentIndex, stepIndex);
                      }}
                      isActive={step}
                      shape={instrument.shape}
                      color={instrument.color}
                      step={stepIndex}
                      currentStep={currentStep}
                      isPlaying={isPlaying}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Rythm;

const Step = ({
  onClick,
  isActive,
  shape,
  color,
  step,
  currentStep,
  isPlaying,
}: {
  onClick: () => void;
  isActive: boolean;
  shape: Shape;
  color: string;
  step: number;
  currentStep: number;
  isPlaying?: boolean;
}) => {
  const transitiosRefs = useSpringRef();

  const [placeholderTransition, placeholderTransitionApi] = useTransition(
    [isActive],
    () => ({
      ref: transitiosRefs,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opactity: 0, scale: 0 },
    }),
  );

  const [shapeTransition, shapeTransitionApi] = useTransition(
    [isActive],
    () => ({
      ref: transitiosRefs,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
    }),
  );

  const bind = useGesture({
    onClick: () => {
      onClick();
    },
    onHover: ({ hovering }) => {
      placeholderTransitionApi.start({ scale: hovering ? 1.25 : 1 });
      shapeTransitionApi.start({ scale: hovering ? 1.25 : 1 });
    },
    onFocus: () => {
      placeholderTransitionApi.start({ scale: 1.25 });
      shapeTransitionApi.start({ scale: 1.25 });
    },
    onBlur: () => {
      placeholderTransitionApi.start({ scale: 1 });
      shapeTransitionApi.start({ scale: 1 });
    },
  });

  useEffect(() => {
    transitiosRefs.start();
  }, [transitiosRefs, isActive]);

  useEffect(() => {
    if (isPlaying && step === currentStep) {
      shapeTransitionApi.start({ scale: 1.5 });
    } else {
      shapeTransitionApi.start({ scale: 1 });
    }
  }, [isPlaying, step, currentStep, shapeTransitionApi]);

  return (
    <button
      className="relative size-full flex justify-center items-center"
      {...bind()}
    >
      {step % 2 === 0 && (
        <div className="absolute h-full w-px bg-gray-300 z-0" />
      )}

      {placeholderTransition(
        (style, item) =>
          !item && (
            <animated.div
              className="absolute size-1 rounded-full bg-gray-400"
              style={style}
            />
          ),
      )}

      {shapeTransition(
        (style, item) =>
          item && <AnimatedShape shape={shape} color={color} style={style} />,
      )}
    </button>
  );
};
