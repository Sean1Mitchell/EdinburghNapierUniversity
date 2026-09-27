document.addEventListener("DOMContentLoaded", () => {

    const lessonData = [
        {
            title: "Corporate Objectives",
            htmlContent: `
            <p><strong>Corporate Objectives</strong> are the targets a listed-company has in order to achieve a desired outcome. However, as the owners of
            the company, the ultime target is to achieve those of the shareholders. Shareholder, however, vary in their desired outcomes and the ways in 
            which they want the company to achieve them.</p>
            <p>For example:</p>
            <ul>
            <li><strong>Remunerations:</strong> Dividends.</li>
            <li><strong>Empire Building:</strong>Assets, Influence, Reach, Expansion.</li>
            <li><strong>Employee Harmony:</strong>Avoidance of Strikes and Redundancies.</li>
            <li><strong>Survival:</strong>.</li>
            <li><strong>Quality:</strong>.</li>
            <li><strong>CRS/ESG:</strong>.</li>
            <li><strong>Low Risk:</strong>.</li>
            <li><strong>Market Share:</strong>.</li>
            </ul>`
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p><strong>The CORE Conflict:</strong> The separation of corporate ownership (the Shareholders) and corporate operational control (the Directors).</p>
            <p>Managers may selfishly prioritize personal utility loops (bonuses, power, executive perks) instead of maximizing fundamental shareholder equity value.</p>`
        },
        {
            title: "Efficient Market Hypothesis (EMH)",
            htmlContent: `
            <p>The EMH claims that capital market asset values completely incorporate all relevant configuration metrics.</p>
            <ul>
            <li><strong>Weak-Form Efficiency:</strong> Prices reflect all historic technical trading history data points.</li>
            <li><strong>Semi-Strong Form:</strong> Prices instantly digest all public balance sheets and statements.</li>
            <li><strong>Strong-Form Efficiency:</strong> Prices accurately map even private insider dataset records.</li>
            </ul>`
        },
        {
            title: "Stock Market Efficiency (SME)",
            htmlContent: `
            <p></p>`
        }
    ];

    let currentPartIndex = 0;

    const titleElement = document.getElementById('presentation-title');
    const contentElement = document.getElementById('presentation-content');
    const prevBtn = document.getElementById('prev-part-btn');
    const nextPartBtn = document.getElementById('next-part-btn');
    const nextPageBtn = document.getElementById('next-page-btn');

    function renderCurrentSlide() {
        const activeData = lessonData[currentPartIndex];

        // Inject titles and custom HTML lists/structures cleanly
        titleElement.textContent = activeData.title;
        contentElement.innerHTML = activeData.htmlContent;

        // Handle first slide previous button visibility boundaries
        if (currentPartIndex === 0) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }

        // Handle final slide route swap to target next file
        if (currentPartIndex === lessonData.length - 1) {
            nextPartBtn.style.display = 'none';
            nextPageBtn.style.display = 'inline-block';
        } else {
            nextPartBtn.style.display = 'inline-block';
            nextPageBtn.style.display = 'none';
        }
    }

    nextPartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPartIndex < lessonData.length - 1) {
            currentPartIndex++; renderCurrentSlide();

        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault(); if (currentPartIndex > 0) { currentPartIndex--; renderCurrentSlide(); }
    });

    renderCurrentSlide();
});