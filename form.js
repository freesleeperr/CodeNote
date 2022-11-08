function Form() {
  function handleSubmit(e) {
    //form中的submit点击会默认刷新界面并提交
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement(
      "button",
      { type: "submit" },
      "Submit"
    )
  );
}