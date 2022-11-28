import React, { useCallback, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

let counter = 0;
export default function Question4() {
  const [answer, setAnswer] = useState<boolean | null>(null);
  console.log('Question 4 answer:', answer);
  return (
    <div
      className={'grid gap-5' + `${answer !== null ? ' not-re-rendered' : ''}`}
    >
      <h2 className="col-span-3 text-left border-b">問題 4 - useCallback</h2>
      <p className="text-left col-span-3">
        母元件傳
        <code>{'useCallback(() => setAnswer(), [setAnswer])'}</code>給用
        <code>React.memo()</code>包起來的子元件
      </p>
      <Selection
        setAnswer={useCallback((ans) => setAnswer(ans), [setAnswer])}
      />
    </div>
  );
}

const Selection = React.memo(function Selection({
  setAnswer,
}: {
  setAnswer: Dispatch<SetStateAction<boolean | null>>;
}) {
  counter += 1;
  console.log(`Question 4 Selection re-render ${counter}`);
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
});
