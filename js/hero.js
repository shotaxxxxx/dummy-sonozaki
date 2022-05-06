  // トップ画像のフェードインスライド
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 2000, //3秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
    speed: 2000,
  });