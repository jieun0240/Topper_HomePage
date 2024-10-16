// 스크롤 애니메이션 함수
function startSmoothScrollAnimation(selector, speed) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        const clone = el.cloneNode(true); // 요소 복제
        // el.parentElement.appendChild(clone); // 부모 요소에 복제된 요소 추가

        let position = 0;

        function animateScroll() {
            position -= speed; // 일정한 속도로 왼쪽으로 이동

            // 원본 텍스트 길이만큼 이동 시 위치를 초기화
            if (position <= -el.offsetWidth) {
                position = 0;
            }

            // 두 개의 텍스트가 자연스럽게 이어지도록 설정
            el.style.transform = `translateX(${position}px)`;
            clone.style.transform = `translateX(${position + el.offsetWidth}px)`; 

            requestAnimationFrame(animateScroll); // 애니메이션 프레임 요청
        }

        requestAnimationFrame(animateScroll); // 애니메이션 시작
    });
}

// 각 텍스트 열에 대해 다른 속도로 애니메이션 적용
window.onload = function() {
    startSmoothScrollAnimation('.scrolling-text1', 0.5); // 첫 번째 텍스트 열
    startSmoothScrollAnimation('.scrolling-text2', 0.8); // 두 번째 텍스트 열
    startSmoothScrollAnimation('.scrolling-text3', 0.6); // 세 번째 텍스트 열
    startSmoothScrollAnimation('.scrolling-text4', 0.5); // 네 번째 텍스트 열
    startSmoothScrollAnimation('.scrolling-text5', 0.8); // 다섯 번째 텍스트 열
    startSmoothScrollAnimation('.scrolling-text6', 0.5); // 다섯 번째 텍스트 열
};

// function topperScrollAnimation(selector, speed) {
//     elements.forEach(to => {
//         const clone = to.cloneNode(true);
//         to.parentElement.appendChild(clone);

//         let position = 0;

//         function animateScroll() {
//             position -= speed; // 일정한 속도로 왼쪽으로 이동

//             // 원본 텍스트 길이만큼 이동 시 위치를 초기화
//             if (position <= -to.offsetWidth) {
//                 position = 0;
//             }

//             // 두 개의 텍스트가 자연스럽게 이어지도록 설정
//             to.style.transform = `translateX(${position}px)`;
//             clone.style.transform = `translateX(${position + to.offsetWidth}px)`; 

//             requestAnimationFrame(animateScroll); // 애니메이션 프레임 요청
//         }

//         requestAnimationFrame(animateScroll); // 애니메이션 시작
        
//     });

//     window.onload = function() {
//         topperScrollAnimation('scrolling-topper1', 0.5); // 첫 번째 텍스트 열
//     };
// }