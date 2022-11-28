import React, { useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

let counter = 0;
export default function Question6() {
  const [answer, setAnswer] = useState<boolean | null>(null);
  const childStyle = useMemo(
    () => ({
      fontWeight: answer ? '500' : '700',
      color: answer ? '#fff' : 'salmon',
    }),
    [setAnswer]
  );
  console.log('Question 6 answer:', answer);
  return (
    <div
      className={'grid gap-5' + `${answer !== null ? ' not-re-rendered' : ''}`}
    >
      <h2 className="col-span-3 text-left border-b">問題 6 - useMemo</h2>
      <p className="text-left col-span-3">
        母元件的
        <code>childStyle</code>物件使用了<code>useMemo</code>，依據 setState
        函式是否有改變，決定子元件
        <code>div</code>的 inline style。
      </p>
      <Selection style={childStyle} setAnswer={setAnswer} />
    </div>
  );
}

const Selection = React.memo(function Selection({
  style,
  setAnswer,
}: {
  style: object;
  setAnswer: Dispatch<SetStateAction<boolean | null>>;
}) {
  counter += 1;
  console.log(`Question 6 Selection re-render ${counter}`);
  const radioButtonAttrs = {
    type: 'radio',
    name: 'selection',
  };
  return (
    <div style={style} className="flex gap-5 col-start-2 col-end-4">
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
