import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { Link, Route, Switch, Routes } from "react-router-dom";
import React from "react";

function App() {
  const [data, setData] = useState(() => readLocalStorage());

  const dataId = useRef(0);

  const onCreate = (user, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      user,
      content,
      emotion,
      created_date,
      id: created_date,
    };

    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  };

  function onRemove(targetId) {
    setData((data) => data.filter((jo) => jo.id !== targetId));
  }

  function onEdit(targetId, newContent) {
    setData((data) =>
      data.map((jo) =>
        jo.id === targetId ? { ...jo, content: newContent } : jo
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(data));
  }, [data]);

  const Kibun = useMemo(() => {
    const goodCount = data.filter((jo) => jo.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = Kibun;

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DiaryEditor onCreate={onCreate} />} />

        <Route
          path="/list"
          element={
            <DiaryList onEdit={onEdit} onRemove={onRemove} diarylist={data} />
          }
        />
      </Routes>

      {/* <div className="kibun">
        {goodCount}
        {badCount}
        {data.length}
      </div> */}
    </div>
  );
}

function readLocalStorage() {
  const dataB = localStorage.getItem("diary");
  return dataB ? JSON.parse(dataB) : [];
}

export default App;
