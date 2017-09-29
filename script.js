jQuery(document).ready(function () {
        jQuery("#null-null").click(function () {
            if (jQuery("#image").css("transform")=='none') {
                jQuery("#image").css("transform", "rotate(180deg)");
            }
            else {
                jQuery("#image").css("transform","")
            }
        });
    });
	
jQuery(document).ready(function() {
    var w = jQuery(window).width(); // Получаем ширину окна
    if (w >= 1141) {
      jQuery("#fixed_btn").remove();
      jQuery("#helper_mobile_1, #helper_mobile_2").remove();
      jQuery(".close-ico").remove();
    }
    if (w <= 1140) { // Если ширина окна меньше, либо равна 600
      jQuery("#box-1_title").appendTo("#content_mq_750").addClass("new_mq_750");
      jQuery(".1-st").removeClass("active");
      jQuery(".0-ls").addClass("active");
      jQuery("#thumbs-lamin").appendTo("#content__right__side").addClass("tabs__content").addClass("active");
      jQuery("#thumbs-gless").appendTo("#content__right__side");
      jQuery("#thumbs-plenka").appendTo("#content__right__side");
      jQuery("#thumbs-gless").removeClass("active");
      jQuery("#box-1").remove();
      if (w >= 751) {
        jQuery("#helper_mobile_1, #helper_mobile_2").remove();
        jQuery(".close-ico").remove();

      }
      if (w <= 750) {
        jQuery("#null-null").remove(); 

        jQuery("#box-1_title").remove();
        jQuery(".font-centr").remove();
        jQuery('<span class="0-ls"><button class="knopka-0">Ламинация</button></span>').remove();
        jQuery(".1-st").addClass("active");
        jQuery("#mobile-320px_frame_lam").prepend('<span class="reauere_320_tiitle">Ламинация</span>')
        jQuery("#thumbs-lamin").appendTo("#mobile-320px_frame_lam");
        jQuery("#box-requara-320px").appendTo("#mobile-320px_frame_plenka_glass");
        jQuery("#fixed_btn").remove();
        jQuery("#thumbs-lamin").removeClass('active');
        jQuery("#thumbs-lamin").removeClass('tabs__content');
        jQuery("#thumbs-gless").addClass('active');
      }
    jQuery(document).ready(function(){

    jQuery("#mobile-320px_frame_lam").hide();
    jQuery("#mobile-320px_frame_plenka_glass").hide();
        jQuery("#helper_mobile_1").click(function(){
          // jQuery("#mobile-320px_frame_lam").hide();
          jQuery("#mobile-320px_frame_lam").show();
          jQuery("#frame_mobile_hide, .shadow").hide();
        })
  })
    jQuery("#close").click(function(){
         jQuery("#mobile-320px_frame_lam").hide();
         jQuery("#frame_mobile_hide, .shadow").show();
      })
        jQuery("#close-2").click(function(){
         jQuery("#mobile-320px_frame_plenka_glass").hide();
         jQuery("#frame_mobile_hide, .shadow").show();
      })
      jQuery(".pad-for-btn").click(function(){
       jQuery("#mobile-320px_frame_lam, #mobile-320px_frame_plenka_glass").hide();
       jQuery("#frame_mobile_hide, .shadow").show();
    })
        jQuery("#helper_mobile_2").click(function(){
       jQuery("#mobile-320px_frame_plenka_glass").show();
       jQuery("#frame_mobile_hide, .shadow").hide();
 })

  }
})

  function l_image_gless (a) {
      document.gless_img.src='http://online.steko.com.ua/'+a
  }
  function l_image_plenka (a) {
      document.plenka_img.src='http://online.steko.com.ua/'+a
  }
  function l_image_lam (a) {
      document.lam_img.src=a
  }
  jQuery(function(){
  jQuery(".tabl-1").click(function(){
  jQuery(".panel3").hide();
  jQuery(".panel2").show();
  jQuery("#tabsik-2 .tabl-2").removeClass("active");
  });
  jQuery(".tabl-2").click(function(){
  jQuery(".panel2").hide();
  jQuery(".panel3").show();
  jQuery("#tabsik-1 .tabl-1").removeClass("active");
  });
  });


(function($) {
$(function() {

  $('div.tabs__caption').on('click', 'span:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  var tabIndex = window.location.hash.replace('#tab','')-1;
  if (tabIndex != -1) $('div.tabs__caption span').eq(tabIndex).click();

  $('a[href*=#tab]').click(function() {
    var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
    $('div.tabs__caption span').eq(tabIndex).click();
  });

});
})(jQuery);

  jQuery(document).ready(function() {
  jQuery("#tabsik").on("click", ".tabl", function(){
  jQuery("#tabsik .tabl").removeClass("active"); //удаляем класс во всех вкладках
  jQuery(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
    });
  
  jQuery(document).ready(function() {
  jQuery("#inner_furniture_blocks").on("click", ".single_item", function(){
  jQuery("#inner_furniture_blocks .single_item").removeClass("active"); //удаляем класс во всех вкладках
  jQuery(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
    });

  jQuery(document).ready(function() {
  jQuery("#tabsik-1").on("click", ".tabl-1", function(){
  jQuery("#tabsik-1 .tabl-1").removeClass("active"); //удаляем класс во всех вкладках
  jQuery(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
    });





  jQuery(document).ready(function() {
  jQuery("#tabsik-2").on("click", ".tabl-2", function(){
  jQuery("#tabsik-2 .tabl-2").removeClass("active"); //удаляем класс во всех вкладках
  jQuery(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
    });

  jQuery(document).ready(function(){
    jQuery("#null-null").click(function(){
      jQuery("#tabsik-2 .tabl-2").removeClass("active"); //удаляем класс во всех вкладках
        jQuery("#tabsik-1 .tabl-1").removeClass("active"); //удаляем класс во всех вкладках
          jQuery("#tabsik .tabl").removeClass("active"); //удаляем класс во всех вкладках
            //$(".tabs__caption .2-nd").removeClass("active");
            //$(".tabs__caption .1-st").addClass("active");
            jQuery("#lamin").attr("src","http://online.steko.com.ua/img/lam/simple-lam.png");
            jQuery("#gless").attr("src","http://online.steko.com.ua/img/gless/simple-gless.png");
            jQuery("#plenka").attr("src","http://online.steko.com.ua/img/plenka/simple.png");
  });
  });


  jQuery(document).ready(function(){
  jQuery('.slider_bxx').bxSlider({
    mode: 'vertical',
    slideWidth: 370,
    minSlides: 5,
    slideMargin: 10,
    slideMargin: 10,
    infiniteLoop: false,
    hideControlOnEnd: true,
    touchEnabled:false
  });
  });