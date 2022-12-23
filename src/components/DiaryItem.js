import React, { useRef, useState } from "react";
import "../style/DiaryItem.scss";

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  user,
  content,
  emotion,
  created_date,
}) => {
  const [edit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!edit);
  }

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const RemoveH = () => {
    if (window.confirm(`일기 삭제할까용?`)) {
      onRemove(id);
    }
  };

  const QuitEditH = () => {
    setEdit(false);
    setLocalContent(content);
  };

  function EditH() {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`일기 수정할까용?`)) {
      onEdit(id, localContent);
      toggleEdit();
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          제목 : {user} | 감정 점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {edit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {edit ? (
        <>
          <button onClick={QuitEditH}>수정 취소</button>
          <button onClick={EditH}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={RemoveH}>삭제하기</button>
          <button onClick={toggleEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
