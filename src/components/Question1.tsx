import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

let counter = 0;
export default function Question1() {
  const [answer, setAnswer] = useState<boolean | null>(null);
  console.log('Question 1 answer:', answer);
  return (
    <div className={'grid gap-5' + `${answer !== null ? ' re-rendered' : ''}`}>
      <h2 className="col-span-3 text-left border-b">問題 1 - setState</h2>
      <p className="text-left col-span-3">由子元件觸發 setState</p>
      <Selection setAnswer={setAnswer} />
    </div>
  );
}

function Selection({
  setAnswer,
}: {
  setAnswer: Dispatch<SetStateAction<boolean | null>>;
}) {
  counter += 1;
  console.log(`Question 1 Selection re-render ${counter}`);

  const radioButtonAttrs = {
    type: 'radio',
    name: 'selection',
  };
  return (
    <div className="flex gap-5 col-start-2 col-end-4">
      <div className="button">
        <input id="yes" {...radioButtonAttrs} />
        <label htmlFor="yes" onClick={() => setAnswer(true)}>
          會
        </label>
      </div>
      <div className="button">
        <input id="no" {...radioButtonAttrs} />
        <label htmlFor="no" onClick={() => setAnswer(false)}>
          不會
        </label>
      </div>
    </div>
  );
}
