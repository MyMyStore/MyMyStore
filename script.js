document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const slideContents = document.querySelectorAll('.slide-content');

    categoryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();  // 기본 링크 동작을 막고, 슬라이드를 열기
            const category = item.dataset.category;

            // 슬라이드 표시
            slideContents.forEach(content => {
                if (content.id === category) {
                    content.style.display = "block"; // 해당 카테고리 슬라이드만 표시
                } else {
                    content.style.display = "none"; // 나머지는 숨김
                }
            });

            // 카테고리 활성화 처리
            categoryItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
