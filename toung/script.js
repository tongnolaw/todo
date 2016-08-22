'uer strict'
$(document).ready(function(){
  console.log($(window));

  var $input =$('.task-input')//selector
  var $btn = $('.btn-add')
  var $content =$('.content')
  var $delete = $('.delete')

  $delete.click(function(){
    //console.log($(this),$(this).parent())
    $(this).parent().empty().remove()
  })

  $btn.click(function(){
    console.log($input.val())

    var temp = '<li><input class="check" type="checkbox" />' + $input.val() + '</li>'
    $content.prepend(temp)
  })

  /*$input.change(function(){
    console.log($(this).val())
  }).keyup(function(){
    console.log($(this).val())
  }).keydown(function(){
    console.log($(this).val())
  })//chain*/



})
