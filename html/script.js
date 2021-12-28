/* --------------------------------------- */
/* 360px未満の画面でViewPortを変更 */
/* --------------------------------------- */
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 360 ? "width=device-width,initial-scale=1" : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/* --------------------------------------- */
/* FAQのアコーディオン */
/* --------------------------------------- */
$(".faq__q").on("click", function () {
  $(this).parent().toggleClass("-active");
  $(this).next().slideToggle();
});

/* --------------------------------------- */
/* コミュニティメンバーのスライド */
/* --------------------------------------- */
// スライドの数を決定するためにウィンドウ幅を取得する
var wide = window.innerWidth;
if (wide > 767) {
  var slidercount = 4;
} else {
  var slidercount = 3;
}
var mySwiper_member = new Swiper(".slider", {
  // 詳細設定
  loop: true, // 連続でスライド可能にするか。
  speed: 800, // スライドが切り替わる時間(ミリ秒)。
  slidesPerView: slidercount, // スライドを一度に何枚表示するか
  spaceBetween: 0, // スライド間の余白(ピクセル)
  direction: "horizontal", // effectがslideの場合のスライドする方向。 'horizontal'(水平) or 'vertical'(垂直)。
  effect: "slide", // "slide" or "fade"(フェード) or "cube"(キューブ回転) or "coverflow"(カバーフロー) or "flip"(平面回転)。

  // スライダーの自動再生
  // autoplay: trueのみなら既定値での自動再生
  autoplay: {
    delay: 800, // スライドが切り替わるまでの表示時間(ミリ秒)
    stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    disableOnInteraction: false, // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  },

  // ページネーションを有効化
  pagination: {
    el: ".slider__pagination",
    type: "bullets",
    clickable: true,
  },

  // ナビゲーションを有効化
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
});

/* --------------------------------------- */
/* スクロールでアニメーション */
/* --------------------------------------- */
$(function () {
  $(window).scroll(function () {
    var elem = $(".animate__animated");
    elem.each(function () {
      // アニメーションを取得
      var isAnimate = $(this).data("animate");
      // スクロール系の処理
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      // 1/3までスクロールしたらアニメーション
      if (scroll > elemPos - windowHeight + windowHeight / 7) {
        $(this).addClass(isAnimate);
        // スマホより大きいときにディレイする
        if (wide > 767) {
          if ($(this).hasClass("delay__animate1")) {
            $(this).addClass("animate__delay-1s");
          } else if ($(this).hasClass("delay__animate05")) {
            $(this).addClass("animate__delay-05s");
          } else if ($(this).hasClass("delay__animate1-5")) {
            $(this).addClass("animate__delay-1-5s");
          } else if ($(this).hasClass("delay__animate2")) {
            $(this).addClass("animate__delay-2s");
          }
        }
      }
    });
  });
  jQuery(window).scroll();
});

/* --------------------------------------- */
/* iOS用フルスクリーンのテコ入れ */
/* --------------------------------------- */
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

let vw = window.innerWidth;

window.addEventListener("resize", () => {
  if (vw === window.innerWidth) {
    // 画面の横幅にサイズ変動がないので処理を終える。ガタツキ防止
    return;
  }

  // 画面の横幅のサイズ変動があった時のみ高さを再計算する
  vw = window.innerWidth;
  setFillHeight();
});

// 初期化
setFillHeight();
