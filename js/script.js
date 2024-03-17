document.addEventListener('DOMContentLoaded', function () {
    // تعریف انیمیشن
    const imageAnimation = anime({
      targets: '#yourImage',
      translateY: [
        { value: '-50px', duration: 2000 },
        { value: '0px', duration: 2000 }
      ],
      loop: true,
      easing: 'easeInOutSine' // میتوانید نوع easing را تغییر دهید
    });
  });

  // 
  document.querySelectorAll('.image-container').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.filter = 'grayscale(0%)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.filter = 'grayscale(100%)';
    });
})
