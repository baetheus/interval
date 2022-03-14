import { render } from "https://esm.sh/preact@10.6.6";
import { html } from "https://esm.sh/htm@3.1.0/preact";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "https://esm.sh/preact@10.6.6/hooks";

// Types!
type IntervalSettings = {
  work: number;
  rest: number;
  repeat: number;
};

// Defaults
const DefaultIntervalSettings: IntervalSettings = {
  work: 60,
  rest: 5,
  repeat: 4,
};

// Utilities
const useInput = (initialValue: number): [number, (e: InputEvent) => void] => {
  const [value, setValue] = useState(initialValue);
  const onInput = useCallback((e: InputEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(parseInt(value, 10));
  }, [initialValue, setValue]);
  return [value, onInput];
};

const range = (length: number) => Array.from({ length }, (_, i) => i);

const context = new AudioContext();
const osc = context.createOscillator();
osc.type = "square";
osc.frequency.value = 440;

const sweepEnv = context.createGain();
sweepEnv.gain.value = 0;
osc.connect(sweepEnv).connect(context.destination);

const sweepLength = 0.5;
const attackTime = 0.0;
const releaseTime = 0.2;

const playNote = (frequency = 440) => {
  const time = context.currentTime;
  osc.frequency.value = frequency;

  sweepEnv.gain.cancelScheduledValues(time);
  sweepEnv.gain.setValueAtTime(0, time);
  sweepEnv.gain.linearRampToValueAtTime(0.5, time + attackTime);
  sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);
};

// Components
const Settings = (
  { settings, onSave }: {
    settings: IntervalSettings;
    onSave: (settings: IntervalSettings) => void;
  },
) => {
  const [work, setWork] = useInput(settings.work);
  const [rest, setRest] = useInput(settings.rest);
  const [repeat, setRepeat] = useInput(settings.repeat);

  const onGo = useCallback(() => onSave({ work, rest, repeat }), [
    work,
    rest,
    repeat,
    onSave,
  ]);

  return html`
  <article class="fld-col flg-5">
    <section class="fld-col flg-2">
      <label for="work" class="pwx-3">Work ${work} second${
    work === 1 ? "" : "s"
  }</label>
      <input type="range" id="work" min="1" max="300" step="1" value=${work} onInput=${setWork} class="ct-secondary" />
    </section>

    <section class="fld-col flg-2">
      <label for="rest" class="pwx-3">Rest ${rest} second${
    rest === 1 ? "" : "s"
  }</label>
      <input type="range" id="rest" min="0" max="300" step="1" value=${rest} onInput=${setRest} class="ct-secondary" />
    </section>

    <section class="fld-col flg-2">
      <label for="repeats" class="pwx-3">Repeat ${repeat} time${
    repeat === 1 ? "" : "s"
  }</label>
      <input type="range" id="repeats" min="0" max="10" step="1" value=${repeat} onInput=${setRepeat} class="ct-secondary" />
    </section>

    <button class="ct-secondary vh-2 bwa-0 bra-1" onClick=${onGo}>Start!</button>
  </article>`;
};

const Timer = (
  { settings, onCancel }: { settings: IntervalSettings; onCancel: () => void },
) => {
  const plan = useMemo(
    () =>
      range((settings.repeat + 1) * 2).map((n) =>
        n % 2 === 0 ? settings.work : settings.rest
      ),
    [settings],
  );
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(plan[index]);
  const currentState = index % 2 === 0 ? "Work" : "Rest";

  if (index >= plan.length) {
    onCancel();
  }

  if (time < 0) {
    setIndex((i) => i + 1);
    setTime(plan[index + 1]);
  }

  if (time >= 1 && time <= 3) {
    playNote(440);
  } else if (time === 0) {
    playNote(440 * 2);
  }

  useEffect(() => {
    const handle = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(handle);
  }, [setTime]);

  return html`
  <article class="fld-col flg-4">
    <h2 class="as-ctr js-ctr fs-u5 pwy-6">${currentState} ${time} Second${
    time === 1 ? "" : "s"
  }</h2>
    <button class="ct-secondary vh-2 bwa-0 bra-1" onClick=${onCancel}>Cancel!</button>
  </article>`;
};

const Interval = () => {
  const [settings, setSettings] = useState(DefaultIntervalSettings);
  const [run, setRun] = useState(false);
  const [oscStarted, setOscStarted] = useState(false);

  const onSave = useCallback((s: IntervalSettings) => {
    if (!oscStarted) {
      setOscStarted(true);
      osc.start(context.currentTime);
    }
    setSettings(s);
    setRun(true);
  }, [oscStarted]);
  const onCancel = useCallback(() => {
    setRun(false);
  }, []);

  return html`<main class="vwmx-ch1 vwmn-ch0 mwa-4 fld-col flg-4">
  <h1 class="fs-u3">Interval Timer</h1>
  ${
    run
      ? html`<${Timer} settings=${settings} onCancel=${onCancel} />`
      : html`<${Settings} settings=${settings} onSave=${onSave} /`
  }
  </main>`;
};

render(html`<${Interval} />`, document.body);
