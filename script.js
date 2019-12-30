$(document).ready(function () {
    function checkgoup(){
        if($('html').scrollTop() < 50){
            $('.goup').fadeOut()
        }else{
            $('.goup').fadeIn()
        }
    }
    checkgoup()
    $(document).scroll(function(){
        checkgoup()
    })
    $('.goup').hover(function(){
        $(this).addClass('goupHover')
    },function(){
        $(this).removeClass('goupHover')
    })
    $('.goup').click(function(){
        $('html').animate({
            scrollTop : '0px'
        },200);
    })
    setInterval(() => {
        $('.year').text(new Date().getFullYear())
    }, 500)
    setTimeout(() => {
                // $('.loader').fadeOut()
                $('body').css('overflow','visible')
                // $('.loader').show()
                $('.loader').fadeOut()
            }, 1000
            )
    switch (window.location.pathname.split("/").pop()) {
        case 'home.html':
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll > 110) {
                    $(".leftanimation").css("visibility", "visible")
                    $(".rightanimation").css("visibility", "visible")
                    $(".leftanimation").addClass("animated fadeInLeft")
                    $(".rightanimation").addClass("animated fadeInRight")
                }
            })
            riddles = [{ riddle: "What has to be broken before you can use it?", answer: "egg" }, { riddle: "What can you break, even if you never pick it up or touch it?", answer: "promise" }, { riddle: "What goes up but never comes down?", answer: "age" }, { riddle: "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?", answer: "he was bald" }]
            function newriddle() {
                if (riddles.length == 0) {
                    $('.cong').siblings().hide()
                    $('.givepadd').css('padding', '100px')
                    $('.cong').css('z-index', '5')
                    return
                }
                riddle = riddles[Math.floor(Math.random() * riddles.length)]
                answer = riddle['answer']
                riddles = riddles.filter(a => a != riddle)
                $('.ques').text(riddle['riddle'])
            }
            newriddle()
            $('.nexti').click(function () {
                if (answer == $('.typein').val().toLowerCase()) {
                    $('.typein').val('')
                    newriddle()
                }
            })
            
    
            break
        case 'information.html':
            baguetteBox.run('.tz-gallery');
			function fully(){
				swiper = '';
				var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 40,
				freeMode: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
            }
            fully()
            break
        case 'gallery.html':
            console.log(999)
            num = 0;
		function _(x) {
			return document.querySelector(x);
		}
		_('#gallerytoggle').addEventListener('click', function () {
			if (num == 0) {
				this.innerText = 'Show less';
				num = 1;
			} else {
				this.innerText = 'Show more';
				num = 0;
			}
        })
		baguetteBox.run('.tz-gallery')

}
})