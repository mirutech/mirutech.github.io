'use strict';
(function () {

  const currentYear = (new Date()).getFullYear()
  const backEndStartYear = 2014
  const frontEndStartYear = 2016
  const backEndYears = currentYear - backEndStartYear
  const frontEndYears = currentYear - frontEndStartYear

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var getHeight = function () {
    var extraHeight = 0;

    if (isMobile.any()) extraHeight = 50;

    setTimeout(function () {
      $('#fh5co-main').stop().animate({
        'height': $('.fh5co-tab-content.active').height() + extraHeight
      });
    }, 200);
  };

  var pieChart = function () {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 10,
      lineCap: 'butt',
      barColor: '#1C39BB',
      trackColor: "#000000",
      size: 160,
      animate: 1000
    });
  };

  var tabContainer = function () {
    getHeight();
    $(window).resize(function () {
      getHeight();
    })
  };

  var tabClickTrigger = function () {
    $('.fh5co-tab-menu a').on('click', function (event) {
      event.preventDefault();
      var $this = $(this),
        data = $this.data('tab'),
        pie = $this.data('pie');

      // add/remove active class
      $('.fh5co-tab-menu li').removeClass('active');
      $this.closest('li').addClass('active');

      $('.fh5co-tab-content.active').addClass('animated fadeOutDown');

      setTimeout(function () {
        $('.fh5co-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
        $('.fh5co-tab-content[data-content="' + data + '"]').addClass('animated fadeInUp active');
        getHeight();
      }, 500);

      if (pie === 'yes') {
        setTimeout(function () {
          pieChart();
        }, 800);
      }

    })
  };
  // Document on load.
  $(function () {
    $("#be").text(backEndYears);
    $("#fe").text(frontEndYears);
    $("#mainCard").addClass("active");
    tabContainer();
    tabClickTrigger();
  });
}());

let downloadEuroPassCV = (lang) => {
  if (lang && lang === "it") {
    window.location = 'http://' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3000' : '') + '/api/MiRu/files/download/Mirko_Russo_EuroPass_CV_IT.pdf'
  }
  else {
    window.location = 'http://' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3000' : '') + '/api/MiRu/files/download/Mirko_Russo_EuroPass_CV_EN.pdf'
  }
}

let downloadCustomCV = () => {
  window.location = 'http://' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3000' : '') + '/api/MiRu/files/download/Mirko_Russo_Custom_CV.pdf'
}
