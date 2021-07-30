$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: 'fade',

    keyboard: {
      keyboardOptions: true,
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      keyboardOptions: true,
    },
  });

  $('.newsletter').parallax({ imageSrc: 'img/newsletter-bg.webp' });

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  $('body').on('keydown', closeModalByEsc);
  closeModalButton.on('click', closeModal);

  function openModal() {
    $('body').css({ overflow: 'hidden' });
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    $('body').css({ overflow: 'auto' });
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  function closeModalByEsc(event) {
    if (event.keyCode && event.keyCode == 27) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  }

  // Обработка форм

  $('.form').each(function () {
    jQuery.validator.addMethod(
      'phoneRU',
      function (phone, element) {
        return phone.match(
          /^(\+7)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        );
      },
      'Please enter correct number phone'
    );
    $.validator.addMethod(
      'minlenghtphone',
      function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
      },
      'Please enter correct number phone'
    );
    $.validator.addMethod(
      'requiredphone',
      function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
      },
      'Field is required'
    );

    $(this).validate({
      errorClass: 'invalid',
      rules: {
        phone: {
          required: true,
          minlenghtphone: true,
          phoneRU: true,
        },
      },
      messages: {
        name: {
          required: 'Please enter your name',
          minlength: 'Name must be at least 2 letters long',
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    });
  });

  $('.newsletter__subscribe').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    });
    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    AOS.init();
  });
});
