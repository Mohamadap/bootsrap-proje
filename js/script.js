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
// 

function toggleContent() {
  var content = document.getElementById('content');
  var icon = document.getElementById('toggle-icon');

  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16"><path d="M0 12l8-8 8 8H0z"/></svg>';
  } else {
    content.style.display = 'none';
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16"><path d="M0 4l8 8 8-8H0z"/></svg>';
  }
}