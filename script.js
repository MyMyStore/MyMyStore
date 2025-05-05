document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const productList = document.getElementById('product-list');

    // 각 카테고리별 제품 목록
    const products = {
        '침실': [
            { name: '침대', url: '침대_URL', img: '침대_이미지_URL' },
            { name: '서랍장', url: '서랍장_URL', img: '서랍장_이미지_URL' },
            { name: '옷장', url: '옷장_URL', img: '옷장_이미지_URL' },
        ],
        '거실': [
            { name: '소파', url: '소파_URL', img: '소파_이미지_URL' },
            { name: '커튼', url: '커튼_URL', img: '커튼_이미지_URL' },
            { name: 'TV', url: 'TV_URL', img: 'TV_이미지_URL' },
        ],
        '주방': [
            { name: '냉장고', url: '냉장고_URL', img: '냉장고_이미지_URL' },
            { name: '식탁', url: '식탁_URL', img: '식탁_이미지_URL' },
            { name: '조리기구', url: '조리기구_URL', img: '조리기구_이미지_URL' },
        ]
    };

    categoryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const category = item.dataset.category;

            // 해당 카테고리의 제품 목록을 표시합니다.
            const categoryProducts = products[category] || [];

            // 제품 목록 초기화
            productList.innerHTML = '';

            // 카테고리 제품 목록 표시
            categoryProducts.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product-item');
                productElement.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <a href="${product.url}" target="_blank">${product.name}</a>
                `;
                productList.appendChild(productElement);
            });
        });
    });
});
