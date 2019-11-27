$(document).ready(function () {
  var button__feeadback = $('.header-info__link');
  var button__fastmodal = $('#button__fast');
  var modal = $('.modal');
  var close = $('.modal-dialog__close');

  button__feeadback.on('click', function () {
    modal.addClass('modal-active');
    var target = $(this).attr('data-target');
    $('.modal-block__content').load(target + '.html');
  })
  button__fastmodal.on('click', function () {
    modal.addClass('modal-active');
    var target = $(this).attr('data-target');
    $('.modal-block__content').load(target + '.html');
  })
  close.on('click', function () {
    modal.removeClass('modal-active');
  })

  // Прокрутка До секцій
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 800);
    return false;
  });
  // Прокрутка До секцій

  // mask-input
  $('#phone').mask("+38 (999) 99-999-99", { placeholder: "X" });
  $('.phone').mask("+38 (999) 99-999-99", { placeholder: "X" });

  // Валідація форми
  $('#consultation').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  $('.application-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      userphone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      },
      userphone: {
        required: "Вкажіть телефон"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  $('.modal-form__feedback').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      userphone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      },
      userphone: {
        required: "Вкажіть телефон"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  $('#fastApplication').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      userphone: {
        required: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      userphone: {
        required: "Вкажіть телефон"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  // Валідація форми

  // Відкриття карти
  var comments = $('.comments');
  var documentTop = comments.offset().top;

  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > documentTop) {
      $('.contact-map').html(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.169451510563!2d30.542587615957984!3d50.43794429614661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa7cf00dbdd%3A0xed786c94764736c2!2z0YPQuy4g0JzQvtGB0LrQvtCy0YHQutCw0Y8sINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1573814477574!5m2!1sru!2sua" width="100%" height="550" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
      )
      $(window).unbind('scroll')
    }
  });
  // Відкриття карти

  // Стрілка прокрутки до початку сторінки
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });

  $('.up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  // Стрілка прокрутки до початку сторінки
});