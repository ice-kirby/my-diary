import React from "react";
import DiaryItem from "./DiaryItem";
import "../style/DiaryItem.scss";

const DiaryList = ({ onEdit, onRemove, diarylist }) => {
  console.log(diarylist);

  return (
    <div className="DiaryList">
      <h2>{diarylist.length}개의 일기가 도착했습니다 💌</h2>
      <div>과거에서 현재로, 어제가 오늘에게, 예전부터 지금까지</div>
      <div className="ListBody">
        {diarylist.map((jo) => (
          <DiaryItem
            key={`diaryitem__${jo.id}`}
            {...jo}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diarylist: [],
};

export default DiaryList;
