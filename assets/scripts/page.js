$(function() {

	//Category modal image
    $( '.category a' ).click(function() {

      resetCategorySelection();

      if($(this).attr('file') != null) {
      	var fileName = '../assets/images/' + $(this).attr('file');
      	$(this).css('color','#00f');
      	$(this).css('text-decoration','underline');
      	$( "#modalImage" ).attr("src",fileName);	
	  	$( "#modal" ).show();
	  }

	});

	//Close modal image
	$( ".close" ).click(function() {
	  $( "#modal" ).hide();
	  resetCategorySelection();
	});

    //Hide/show category information
	$( '.toggleInfo' ).click(function() {

      if($(this).attr('target') != null) {
      	var paragraphId = '#' + $(this).attr('target');
      	var innerHtml = $(this).html();
      	var isExpanded = innerHtml.indexOf('-') >= 0;

      	$(paragraphId).toggle('fast');

      	innerHtml = isExpanded ? innerHtml.replace('-','+') : innerHtml.replace('+','-');
      	$(this).html(innerHtml);
      	$(this).toggleClass('expanded');
	  }
	  
	});

	//FUNCTIONS

	function resetCategorySelection(){
	  //reset all category text color and underline
	  $( '.category a' ).css('color','#000');
	  $( '.category a' ).css('text-decoration','none');
	}
 });
