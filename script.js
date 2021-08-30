const projectContainer = document.querySelector(".project-container");

const projects = [
  {
    title: "blizzard-dashboard",
    original:
      "https://www.engadget.com/battle-net-client-blizzard-front-end-upgrade-redesign-101045426.html",
  },
  {
    title: "riot-landing-page",
    original: "https://dribbble.com/shots/15074746-Good-Game-Game-Guide-Portal",
  },
  // {
  //   title: "game-dashboard",
  //   original: "https://dribbble.com/shots/15699779-BBG-Gaming-Dashboard-Design",
  // },
];

projects.forEach((project) => {
  const html = `
  <div class="project-card">
    <div>
        <img src="${project.title}/img/screenshot.jpg" alt="${project.title}">
    </div>
        <div class="links">
            <a class="site" target=_blank href="/${project.title}/index.html">View Site <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85938 1.09985L7.05744 6.29792L1.85938 11.496" stroke="#6072d9" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg></a>
            <a class="design" target=_blank href="${project.original}">Original design <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85938 1.09985L7.05744 6.29792L1.85938 11.496" stroke="#6072d9" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg></a>
        </div>
    </div>
  `;

  projectContainer.insertAdjacentHTML("beforeend", html);
});
