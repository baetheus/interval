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
    <section class="fld-col flg-2">
      <label for="work">Work ${work} second(s)</label>
      <input type="range" id="work" min="1" max="300" step="1" value=${work} onInput=${setWork} />
    </section>

    <section class="fld-col flg-2">
      <label for="rest">Rest ${rest} second(s)</label>
      <input type="range" id="rest" min="0" max="300" step="1" value=${rest} onInput=${setRest}  />
    </section>

    <section class="fld-col flg-2">
      <label for="repeats">Repeat ${repeat} time(s).</label>
      <input type="range" id="repeats" min="0" max="10" step="1" value=${repeat} onInput=${setRepeat} />
    </section>

    <button onClick=${onGo}>Go!</button>`;
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

  useEffect(() => {
    const handle = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(handle);
  }, [setTime]);

  return html`
  <section class="fld-col flg-4">
    <h2>${currentState}</h2>
    <h1>${time}</h1>
    <p>Index ${index} Length ${plan.length} Time ${time}</p>
    <button onClick=${onCancel}>Cancel!</button>
  </section>`;
};

const Interval = () => {
  const [settings, setSettings] = useState(DefaultIntervalSettings);
  const [run, setRun] = useState(false);

  const onSave = useCallback((s: IntervalSettings) => {
    setSettings(s);
    setRun(true);
  }, []);
  const onCancel = useCallback(() => {
    setRun(false);
  }, []);

  return run
    ? html`<${Timer} settings=${settings} onCancel=${onCancel} />`
    : html`<${Settings} settings=${settings} onSave=${onSave} /`;
};

render(html`<${Interval} />`, document.body);
