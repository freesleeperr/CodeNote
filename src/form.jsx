function Form() {
  function handleSubmit(e) {
    //form中的submit点击会默认刷新界面并提交
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
