module.exports = ()=>{
  var current = null;
  function init(){
    // public
  } 
  function change(){
    // public
    verify();
  }

  function verify(){
    // private
  }

  return {
    init: init,
    change: change
  }
}