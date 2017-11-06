(function(window, $, undefined) {

  var tl = new TimelineLite(),
    $container = $('#autumnContainer'),
    $moon = $container.find('.moon'),
    $title = $container.find('.title'),
    $lanternpart = $container.find('.lantern-part'),
    $lantern = $container.find('.lantern'),
    $litter01 = $container.find('.litter-01'),
    $litter02 = $container.find('.litter-02'),
    $litter03 = $container.find('.litter-03'),
    $litter04 = $container.find('.litter-04'),
    $discount = $container.find('.discount-50');

  $(function() {
    ani4Moon();
  });

  function ani4Moon() {
    tl.clear();
    tl.from($moon, 1, {
      top: '1000px',
      right: '1000px',
      transform: 'scale(0.2)',
      onComplete: ani4Lantern
    });
  }

  function ani4Lantern() {
    tl.clear();
    tl.to($lantern, 0.5, {
      top: '0px',
      transform: 'scale(1)',
      onComplete: ani4Title
    });
  }

  function ani4Title() {
    tl.clear();
    tl.to($title, 1, {
      top: '160px',
      right: '56px',
      '-webkit-transform': 'scale(1)',
      '-moz-transform': 'scale(1)',
      '-ms-transform': 'scale(1)',
      '-o-transform': 'scale(1)',
      'transform': 'scale(1)',
      onComplete: ani4Discount
    });

    tl.to($lanternpart, 2, {
      left: '54px'
    }, -1);
  }

  function ani4Discount() {
    tl.clear();
    tl.to($discount, 0.5, {
      left: '293px',
      onComplete: ani4Litters
    });
  }

  function ani4Litters() {
    tl.clear();
    tl.to($litter01, 1, {
      left: '230px',
      ease: Linear.easeInOut
    });
    tl.to($litter02, 2, {
      left: '350px',
      ease: Linear.easeInOut
    }, -1);
    tl.to($litter03, 3, {
      left: '-50px',
      ease: Linear.easeInOut
    }, -2);
    tl.to($litter04, 4, {
      left: '650px',
      ease: Linear.easeInOut
    }, -3);
  }

})(window, jQuery);
