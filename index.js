(async function() {
    const response = await fetch('works.json');
    const works = await response.json();

    function renderWorks(works) {
        const worksContainer = document.querySelector(".work-expirience-container");
        for (const work of works) {
            worksContainer.innerHTML += `
                <article>
                    <h4 class="work-position">${work.position}<span class="organization">${work.corporation}</span></h4>
                    <p class="period">${work.period}   <span class="line">|</span>  ${work.country}</p>
                    <ul class="work-list">
                        <li class="work-list-item"><span class="work-list-text">${work.firstResponsibility}</span></li>
                        <li class="work-list-item"><span class="work-list-text">${work.secondResponsibility}</span></li>
                        <li class="work-list-item"><span class="work-list-text">${work.thirdResponsibility}</span></li>
                        <li class="work-list-item"><span class="work-list-text">${work.fourthResponsibility}</span></li>
                    </ul>
                </article>
            `;
        }
    }
    renderWorks(works);
})();