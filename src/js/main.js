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
  // Валідація форми
});