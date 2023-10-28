function addFakeArticleToContentArea() {
    const contentAreaElem = document.querySelector(".content-area");

    const fakeArticleElemString = `<article class="content-item">
                        <div class="article-image-area">
                            <img src="https://content.surfit.io/thumbs/image/wdyYK/9RyrO/682182019639f0f879229e/cover-center-1x.webp"
                                alt="" class="article-thumbnail" />
                            <div class="article-author-icon-wrapper">
                                <img src="https://api.surfit.io/v1/channel/logo/wdyYK/1x" alt="test의 로고"
                                    class="article-author-icon" />
                            </div>
                        </div>
                        <header class="article-header">
                            <span class="article-info">
                                <a href="" class="article-author-name">test</a>
                                <time datetime="2022-12-22T00:00:03+09:00">2022.12.22</time>
                            </span>
                            <h2 class="article-title">커뮤니케이션을 잘하는 5가지 방법</h2>
                            <h3 class="article-desc">
                                가장 큰 원인은 '인간관계'가 아닐까 싶다.
                            </h3>
                        </header>
                        <footer class="article-footer">
                            <div class="footer-tag-area">
                                <div class="footer-tag-item">일반 스타트업</div>
                                <div class="footer-tag-item">꿀팁</div>
                            </div>
                            <div class="footer-option-area">
                                <div class="footer-option-item-wrapper">
                                    <div class="footer-option-item">
                                        <span><i class="fa-solid fa-heart"></i></span>
                                    </div>
                                </div>
                                <div class="footer-option-item-wrapper">
                                    <div class="footer-option-item">
                                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </article>
    `;
    
    contentAreaElem.insertAdjacentHTML("beforeend", fakeArticleElemString);
}

function loadFakeArticles(quantity = 16) {
    for (let i = 0; i < quantity; i++) {
        addFakeArticleToContentArea();
    }
}

const contentArea = document.querySelector('.content-area');

document.addEventListener('scroll', () => {
    const lastArticleRect = contentArea.lastElementChild.getBoundingClientRect();
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight,
    );
    if (lastArticleRect.bottom <= document.documentElement.clientHeight + 100) {
        loadFakeArticles();
        // console.log(`${lastArticleRect.bottom}, ${document.documentElement.clientHeight}`);
    }
});
