import React, { lazy, Suspense, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const importQuestion = (num: number) =>
  lazy(() => import(`./components/Question${num}`));

const LIMIT = {
  MAX: 9,
  MIN: 1,
};

function App() {
  const [num, setNum] = useState<number>(1);
  const Question = importQuestion(num);
  console.log('App re-render');
  function handleClick(step: number) {
    setNum((prev) =>
      prev + step > LIMIT.MAX || prev + step < LIMIT.MIN ? prev : prev + step
    );
  }
  return (
    <div className="App">
      <div className="container">
        <section className="flex flex-col gap-5">
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1 className="mb-4">重新渲染？</h1>
          <p className="text-left">
            總共 9 題，點選按鈕會觸發由母元件給子元件的 setState
            函式，從而更新母元件的 state
            狀態；請依據個別題目的狀況搭配程式碼進行判斷，該子元件會被重新渲染
            (re-render) 嗎？每個問題的程式碼在
            <code>{'src/components/Question<number>'}</code>。
          </p>
          <small className="text-left">
            P.S. console 有 log 可以看，做完或不明白為什麼的話，還請參考
            <a
              href="https://allieschen.github.io/posts/react_re-render/"
              target="_blank"
            >
              我寫的這篇說明文章
            </a>
          </small>
        </section>
        <Suspense fallback={<p className="grid gap-5">Loading...</p>}>
          <Question />
        </Suspense>
      </div>
      <div className="mt-4 flex gap-5">
        <button disabled={num === LIMIT.MIN} onClick={() => handleClick(-1)}>
          上一題
        </button>
        <button disabled={num === LIMIT.MAX} onClick={() => handleClick(1)}>
          下一題
        </button>
      </div>
    </div>
  );
}

export default App;
