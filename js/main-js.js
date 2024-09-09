document.addEventListener("DOMContentLoaded", function () {
    // 탭 전환 로직
    const tabItems = document.querySelectorAll(".tab-item");
    const memberCards = document.querySelectorAll(".member-card");

    tabItems.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // 모든 탭에서 active 클래스를 제거
            tabItems.forEach(t => t.classList.remove("active"));

            // 클릭한 탭에 active 클래스 추가
            tab.classList.add("active");

            // 각 탭에 맞는 멤버 카드 보여주기
            showMemberCards(index + 1);
        });
    });

    function showMemberCards(batchNumber) {
        memberCards.forEach((card, index) => {
            if (index < batchNumber * 4 && index >= (batchNumber - 1) * 4) {
                card.style.display = "block";
                card.style.animationDelay = `${(index % 4) * 0.2}s`; // 카드별 딜레이 설정
            } else {
                card.style.display = "none";
            }
        });
    }

    // 기본으로 첫 번째 탭이 선택되도록 설정
    showMemberCards(1);

    // 플로팅 버튼 클릭 이벤트 처리
    const floatingButton = document.querySelector(".floating-button");

    floatingButton.addEventListener("click", function () {
        // 플로팅 버튼 클릭 시 애니메이션 또는 다른 동작을 추가할 수 있습니다.
        alert("플로팅 버튼이 클릭되었습니다!");
    });

    // 버블 섹션의 애니메이션 추가 (스크롤에 따른 추가 효과)
    const bubbleItems = document.querySelectorAll(".bubble-item");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        bubbleItems.forEach((bubble, index) => {
            let bubbleTop = bubble.getBoundingClientRect().top;

            if (bubbleTop < window.innerHeight) {
                bubble.style.opacity = 1;
                bubble.style.transform = "scale(1)";
                bubble.style.animationDelay = `${index * 0.1}s`; // 각 버블에 딜레이 적용
            }
        });
    });
});
