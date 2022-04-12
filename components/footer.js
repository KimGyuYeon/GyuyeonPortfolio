// footer component
function footer() {
    return `
    <footer>
        <p>© COPYRIGHT ⓒ 2022 KIMGYUYEON. ALL RIGHTS RESERVED. <br>
        본 사이트는 개인 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다.  사용된 일부 이미지 및 폰트 등은 별도의 출처가 있습니다.</p>
    </footer>
    `
  }
  
  const footerName = '.footer-component'; // class 요소명
  document.querySelector(footerName).innerHTML = footer();