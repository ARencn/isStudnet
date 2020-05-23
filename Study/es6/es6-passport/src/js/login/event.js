import formCheck from "../common/formCheck";

export default () =>{
  const btn =document.getElementById('submit');
  const input=document.getElementById('input');
  const check = formCheck(document.getElementById('form'));  //设置为变量减少获取id次数
  btn.onclick=()=>{
    check();
      alert('1111');
  };
  input.oninput = ()=>{
      check();
  }
}
