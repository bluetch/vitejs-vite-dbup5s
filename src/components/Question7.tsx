import React, { useCallback, useState } from 'react';

let counter = 0;
const descriptions = [
  {
    name: 'foo',
    content: '母元件透過陣列產生 list 元素，沒有綁 key 屬性',
  },
  {
    name: 'bar',
    content: '點選回答會讓 list 元素的順序調換',
  },
];

export default function Question7() {
  const [items, setItems] = useState(descriptions);
  const [answer, setAnswer] = useState<boolean | null>(null);
  console.log('Question 7 answer:', answer);
  const handleClick = useCallback(
    (value: boolean) => {
      setAnswer(value);
      setItems((prev) => prev.slice().reverse());
    },
    [setItems, setAnswer]
  );
  return (
    <div className={'grid gap-5' + `${answer !== null ? ' re-rendered' : ''}`}>
      <h2 className="col-span-3 text-left border-b">
        問題 7 - list without key
      </h2>
      <ul className="text-left col-span-3 pl-4">
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </ul>
      <Selection setAnswer={handleClick} />
    </div>
  );
}

const ListItem = React.memo(function ListItem({
  item,
}: {
  item: { name: string; content: string };
}) {
  console.log(`Render ListItem ${item.name}`);
  return <li>{item.content}</li>;
});

const Selection = React.memo(function Selection({
  setAnswer,
}: {
  setAnswer: (valul: boolean) => void;
}) {
  counter += 1;
  console.log(`Question 7 Selection re-render ${counter}`);
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
