export default (container)=>{
  const tpl = '<form id="form"><input name="uname" id="input" type="text">' +
      '<input name="password" type="text">' +
      '<input value="登录" id="submit" type="submit">' +
      '</form>';
  container.innerHTML =tpl;
}
