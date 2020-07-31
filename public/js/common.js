"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /modalCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (this.btnToggleMenuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						return element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					document.body.classList.toggle("fixed");
					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		if (this.menuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});
			this.menuMobile.classList.remove("active");
			document.body.classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		if (this.menuMobileLink) {
			this.toggleMenu();
			window.addEventListener('resize', function () {
				if (window.matchMedia("(min-width: 992px)").matches) {
					JSCCommon.closeMenu();
				}
			}, {
				passive: true
			});
		}
	},
	// /mobileMenu
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>');
		}
	}
};
var $ = jQuery;

function eventHandler() {
	var _defaultSl;

	JSCCommon.modalCall();
	JSCCommon.mobileMenu();
	JSCCommon.ifie(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// let screenName = '02.jpg';
	// screenName
	// 	? $(".main-wrapper").after(`<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`)
	// 	: '';
	// /добавляет подложку для pixel perfect

	var searchToggle = document.querySelectorAll('.btn-search--js');
	var searchBlock = document.querySelector('.search-block--js');

	if (searchToggle && searchBlock) {
		searchToggle.forEach(function (element) {
			element.addEventListener('click', function () {
				return searchBlock.classList.toggle('show');
			});
		});
	}

	var toggleText = document.querySelectorAll(".card__toggle-text");
	toggleText.forEach(function (element) {
		element.addEventListener('click', function () {
			var hiddenText = this.parentNode.parentNode.querySelector('.card__text--hidden');
			console.log(hiddenText);
			this.classList.toggle('active');
			hiddenText.classList.toggle('active');
		});
	});
	var liHasChildren = document.querySelector('.menu-mobile').querySelectorAll('.nav__item--has-child');

	if (liHasChildren) {
		liHasChildren.forEach(function (element) {
			element.insertAdjacentHTML("beforeend", '<div class="toggle-sub-menu"></div>');
		});
		document.querySelectorAll('.toggle-sub-menu').forEach(function (element) {
			element.addEventListener('click', function () {
				this.parentNode.classList.toggle('show-child');
			});
		});
	}

	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "pagination", {
		el: ' .swiper-pagination',
		type: 'bullets',
		clickable: true
	}), _defaultSl);
	var BannerSlider = '.sBanners__slider--js';
	var swiper4 = new Swiper(BannerSlider, _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 1,
		navigation: {
			nextEl: $(BannerSlider).parent().find('.swiper-button-next'),
			prevEl: $(BannerSlider).parent().find('.swiper-button-prev')
		},
		pagination: {
			el: $(BannerSlider).parent().find('.swiper-pagination'),
			type: 'bullets',
			clickable: true
		},
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	}));
	var thumbs = document.querySelector('.gallery-thumbs');
	var galleryThumbs = new Swiper(thumbs, _objectSpread(_objectSpread({}, defaultSl), {}, {
		// spaceBetween: 10,
		spaceBetween: 16,
		slidesPerView: 3,
		loop: true,
		freeMode: true,
		loopedSlides: 5,
		//looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			576: {
				slidesPerView: 4
			},
			768: {
				slidesPerView: 6
			}
		},
		navigation: {
			nextEl: thumbs.querySelector('.swiper-button-next'),
			prevEl: thumbs.querySelector('.swiper-button-prev')
		}
	}));
	var galleryTop = new Swiper('.gallery-top', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 6,
		//looped slides should be the same
		thumbs: {
			swiper: galleryThumbs
		}
	})); // modal window
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}