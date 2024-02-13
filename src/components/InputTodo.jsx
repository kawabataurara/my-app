// propsで受け取ったものを参照できるようにリファクタリングしていく
export const InputTodo = (props) => {
  // propsを分割代入していく
  const { todoText, onChange, onClick } = props;
  return (
    <>
      {/* Todo.jsxからコンポーネントになりえる部分を切り取り */}
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
