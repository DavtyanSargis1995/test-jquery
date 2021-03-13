$(document).ready(function(){
	$('.list>li').click(function(){
		$(this).find('ul').slideToggle()
		$('.list ul').not($(this).find('ul')).slideUp()
	})


	$('.list li').click(function(event){
		event.stopPropagation()
	})


	$('.btn').click(function(){
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/todos/1",
			success: function(response){
				console.log(response)
			}
		})
	})
})