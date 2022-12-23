import React, { useRef, useState } from "react";
import "../style/DiaryEditor.scss";

const DiaryEditor = ({ onCreate }) => {
  const userInput = useRef("");
  const contentInput = useRef("");

  const [state, setState] = useState({
    user: "",
    content: "",
    emotion: 1,
  });

  const ChangeE = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitH = () => {
    if (state.user.length < 1) {
      userInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.user, state.content, state.emotion);
    alert("저장 성공");
    setState({ user: "", content: "", emotion: 1 });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={userInput}
          name="user"
          value={state.user}
          onChange={ChangeE}
          placeholder="제목"
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={ChangeE}
          placeholder="일기"
          type="text"
        />
      </div>
      <div className="footer">
        <div>
          오늘의 감정 점수&nbsp;
          <select name="emotion" value={state.emotion} onChange={ChangeE}>
            <option value={1}> 1 🤔</option>
            <option value={2}> 2 😗</option>
            <option value={3}> 3 😉</option>
            <option value={4}> 4 😄</option>
            <option value={5}> 5 🥰</option>
          </select>
        </div>
        <div>
          <button onClick={submitH}>저 장</button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEditor;
