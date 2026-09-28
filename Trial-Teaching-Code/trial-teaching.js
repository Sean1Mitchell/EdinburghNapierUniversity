document.addEventListener("DOMContentLoaded", () => {

    const lessonData = [
        {
            title: "Corporate Objectives",
            htmlContent: `
            <p><strong>Corporate Objectives</strong> are the targets a listed-company has in order to achieve a desired outcome. However, 
            as the owners of the company, the ultime target is to achieve those of the shareholders. Shareholder, however, vary in their 
            desired outcomes and the ways in which they want the company to achieve them. For example:</p>
            <ul>
            <li><strong>Remunerations:</strong> Dividends.</li>
            <li><strong>Empire Building:</strong> Assets, Influence, Reach, Expansion.</li>
            <li><strong>Employee Harmony:</strong> Avoidance of Strikes and Redundancies.</li>
            <li><strong>Survival:</strong> Stability, Low Risk, Higher Liquidity.</li>
            <li><strong>Quality:</strong> Product/Service Quality.</li>
            <li><strong>CRS/ESG:</strong> Corporate Responsibility and Sustainability.</li>
            <li><strong>Low Risk:</strong> Conservative Financial Management.</li>
            <li><strong>Market Share:</strong> Competitive Positioning.</li>
            </ul>
            <p>Failure to balance objectives collectively results in reduced value for shareholders that are having their objectives forgone.
            For example; high dividends means less reinvestment for growth, higher growth means less dividends, high CRS/ESG means less short-term
            profit (but better long-term survivability). Thus, the goal is to focus on balancing these objectives collectively.</p>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p>The <strong>Agency Theory</strong> is the idea that although shareholders elect management to run the business, due to their knowledge
            and experience, they may be inclined to act in their own personal objectives, as opposed to those set by the shareholders. This is "The 
            Agency Problem". Shareholders are the principles and Management are the agents acting on their behalf, or at least they should be. Some 
            of the personal objectives that management may be influenced by include:</p>
            <ul>
            <li><strong>Remunerations:</strong> Increased cost, reduced reinvestment of profits and dividend payout.</li>
            <li><strong>Job Satisfaction:</strong> Prioritising projects of personal exposure or glamour, less the returns they offer.</li>
            <li><strong>Job Security:</strong> Avoidant of reasonable risk due to fears of being replaced.</li>
            <li><strong>Maximising Firm Value:</strong> Counterintuitive, but focuses on short-term recognition as opposed to long-term value.</li>
            </ul>
            <p>This disconnect between shareholders and management do not just affect profits, reinvestment, and growth, they also extend to the 
            wider markets perception of the company's future prospects, including, earning the returns investors would like to receive that would 
            encourage their invetment in the company (i.e., purchasing shares).</p>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p><strong>The Agency Monitoring Mechanisms</strong></p>
            <p>There are ways in which shareholders can mitigate the agency problem, and they are broken into two mechanisms; internal and external</p>
            <ol>
            <strong><li>Internal Mechanisms</li></strong>
            <ul>
            <li><strong>Board of Directors:</strong> .</li>
            <li><strong>Pay Incentives:</strong> .</li>
            <li><strong>Internal Audits:</strong> .</li>
            <li><strong>Ownership Structure:</strong> .</li>
            <li><strong>Career Incentives:</strong> .</li>
            </ul>
            </ol>
            `
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