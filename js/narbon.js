$(document).ready(function()
{

	//get galley div which has .product_detail class
	var prod = $(this).find('.product_detail');
	prod_len = prod.length;
	if(prod_len > 0)
	{
		prod.each(function()
		{
		    //get parent div of current element to get main image of prodcut
			var main_img = $(this).parent().closest('div').find('.main_prod_img');
			var main_img_len = main_img.length;
			// get images in gallery of product
			var img = $(this).find('img');
			len = img.length;
			if(len > 0 && main_img_len>0)
			{
			//replace main product image with image that selected
				img.each(function()
				{
					$(this).click(function()
					{
						main_img.attr('src',$(this).attr('src'));
					});



				});
			}
			else
			{
				alert('no image');
			}



		});
	}
	else
	{
			//do something else
	}






	/*$('#secondary_product1-1').click(function()
	{
		$('#main_prod1').attr('src',$('#secondary_product1-1').attr('src'));

	});
	$('#secondary_product1-2').click(function()
	{
		$('#main_prod1').attr('src',$('#secondary_product1-2').attr('src'));

	});
	$('#secondary_product1-3').click(function()
	{
		$('#main_prod1').attr('src',$('#secondary_product1-3').attr('src'));

	});


	$('#secondary_product2-1').click(function()
	{
		$('#main_prod2').attr('src',$('#secondary_product2-1').attr('src'));

	});
	$('#secondary_product2-2').click(function()
	{
		$('#main_prod2').attr('src',$('#secondary_product2-2').attr('src'));

	});
	$('#secondary_product2-3').click(function()
	{
		$('#main_prod2').attr('src',$('#secondary_product2-3').attr('src'));

	});


	$('#secondary_product3-1').click(function()
	{
		$('#main_prod3').attr('src',$('#secondary_product3-1').attr('src'));

	});
	$('#secondary_product3-2').click(function()
	{
		$('#main_prod3').attr('src',$('#secondary_product3-2').attr('src'));

	});
	$('#secondary_product3-3').click(function()
	{
		$('#main_prod3').attr('src',$('#secondary_product3-3').attr('src'));

	});


	$('#secondary_product4-1').click(function()
	{
		$('#main_prod4').attr('src',$('#secondary_product4-1').attr('src'));

	});
	$('#secondary_product4-2').click(function()
	{
		$('#main_prod4').attr('src',$('#secondary_product4-2').attr('src'));

	});
	$('#secondary_product4-3').click(function()
	{
		$('#main_prod4').attr('src',$('#secondary_product4-3').attr('src'));

	});


	$('#secondary_product5-1').click(function()
	{
		$('#main_prod5').attr('src',$('#secondary_product5-1').attr('src'));

	});
	$('#secondary_product5-2').click(function()
	{
		$('#main_prod5').attr('src',$('#secondary_product5-2').attr('src'));

	});
	$('#secondary_product5-3').click(function()
	{
		$('#main_prod5').attr('src',$('#secondary_product5-3').attr('src'));

	});


	$('#secondary_product6-1').click(function()
	{
		$('#main_prod6').attr('src',$('#secondary_product6-1').attr('src'));

	});
	$('#secondary_product6-2').click(function()
	{
		$('#main_prod6').attr('src',$('#secondary_product6-2').attr('src'));

	});
	$('#secondary_product6-3').click(function()
	{
		$('#main_prod6').attr('src',$('#secondary_product6-3').attr('src'));

	});


	$('#secondary_product7-1').click(function()
	{
		$('#main_prod7').attr('src',$('#secondary_product7-1').attr('src'));

	});
	$('#secondary_product7-2').click(function()
	{
		$('#main_prod7').attr('src',$('#secondary_product7-2').attr('src'));

	});
	$('#secondary_product7-3').click(function()
	{
		$('#main_prod7').attr('src',$('#secondary_product7-3').attr('src'));

	});


	$('#secondary_product8-1').click(function()
	{
		$('#main_prod8').attr('src',$('#secondary_product8-1').attr('src'));

	});
	$('#secondary_product8-2').click(function()
	{
		$('#main_prod8').attr('src',$('#secondary_product8-2').attr('src'));

	});
	$('#secondary_product8-3').click(function()
	{
		$('#main_prod8').attr('src',$('#secondary_product8-3').attr('src'));

	});


	$('#secondary_product9-1').click(function()
	{
		$('#main_prod9').attr('src',$('#secondary_product9-1').attr('src'));

	});
	$('#secondary_product9-2').click(function()
	{
		$('#main_prod9').attr('src',$('#secondary_product9-2').attr('src'));

	});
	$('#secondary_product9-3').click(function()
	{
		$('#main_prod9').attr('src',$('#secondary_product9-3').attr('src'));

	});*/




	/*zoom*/
	$('#single_product_img_frame').hover(function()
	{
		$('.zoom').show();
	},function()
	{
		$('.zoom').hide();
	});
	$('#single_product_img_frame').mousemove(function(e)
	{
		var x = e.pageX;
		var y = e.pageY;

		l = $('#single_product_img').offset().left;
		t = $('#single_product_img').offset().top;

		var width = $('#single_product_img').width();
		var height = $('#single_product_img').height();

		var w = $(document).width();
		console.log('w is:::::::'+w);
		$('.img_zoom').css(
		{
			'height' : 3*height,
			'width' : 3*width
		});
		if(w < 767)
		{

			$('.img_zoom').css(
			{
				'top' : -3*((y - t)-50) ,
				'left' : -3*((x - l)-28)
			});
		}
		else
		{
			$('.img_zoom').css(
			{
				'top' : -3*((y - t)-50) ,
				'left' : -3*((x - l)-50)
			});
		}

		/*if(y>t && y<(t+height))
		{
			if(x>l && x<(l+width))
			{
				$('.zoom_frame').show();
				$('.zoom').show();

				$('.zoom_frame').css(
				{
					'top' : (y - t)-50 ,
					'left' : (x - l)-50
				});

				$('.img_zoom').css(
				{
					'top' : -3*((y - t)-50) ,
					'left' : -3*((x - l)-50)
				});
			}
			else
			{
				$('.zoom_frame').hide();
				$('.zoom').hide();
			}
		}
		else
		{
			$('.zoom_frame').hide();
			$('.zoom').hide();
		}*/
	});




	$('#slide_btn1_1').click(function()
	{
		$('#slide_text1_1').slideToggle(1000);
	});
	$('#slide_btn1_2').click(function()
	{
		$('#slide_text1_1').slideToggle(1000);
	});


	$('#slide_btn2_1').click(function()
	{
		$('#slide_text2_1').slideToggle(1000);
	});
	$('#slide_btn2_2').click(function()
	{
		$('#slide_text2_1').slideToggle(1000);
	});


	$('#slide_btn3_1').click(function()
	{
		$('#slide_text3_1').slideToggle(1000);
	});
	$('#slide_btn3_2').click(function()
	{
		$('#slide_text3_1').slideToggle(1000);
	});




	var page_width = $(document).width();
	console.log('page_width:'+page_width);
	if(page_width<768)
	{
		$('.belt_size').text("دور کمر");

	}

});

//95-11-07 change the style of add to card button and quantity
	$('.single_add_to_cart_button').removeClass("button alt");
	$('.single_add_to_cart_button').addClass("btn btn-default col_green font_size9");
	$('.quantity .input-text').addClass("col_green font_size9");
	
	
	
	
	//95-11-09 change the style of women gallery images
	$('#women_gallery_img .attachment-women_gallery').addClass('width100per brd_dd_solid brd_radius4 galary_img height400');
	$('#children_gallery_img .attachment-children_gallery').addClass('width100per brd_dd_solid brd_radius4 galary_img height400');
