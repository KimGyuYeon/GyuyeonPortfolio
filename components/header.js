// 자바스크립트로 생성된 html components
function header () {
    return `

    <header id="main-header">
        <div id="gnb">
            <ul>
                <li>
                    <a href="index.html">
                        <div class="button-container">
                            <span class="mas">Home</span>
                          <button type="button" name="Hover">Home</button>
                    </a>
                </li>
                <li>
                    <a href="about.html">
                        <div class="button-container">
                            <span class="mas">About</span>
                          <button type="button" name="Hover">About</button>
                    </a>
                </li>
                <li>
                    <a href="skills.html">
                        <div class="button-container">
                            <span class="mas">Skills</span>
                          <button type="button" name="Hover">Skills</button>
                    </a>
                </li>
                <li>
                    <a href="portfolio.html">
                        <div class="button-container">
                            <span class="mas">Portfolio</span>
                          <button type="button" name="Hover">Portfolio</button>
                    </a>
                </li>
                <li>
                    <a href="contact.html">
                        <div class="button-container">
                            <span class="mas">Contact</span>
                          <button type="button" name="Hover">Contact</button>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    `
 }
  
  // 문서에 html 생성
  const headerName = '.header-component'; // class 요소명
  document.querySelector(headerName).innerHTML = header();