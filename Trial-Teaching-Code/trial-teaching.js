document.addEventListener("DOMContentLoaded", () => {

    const lessonData = [
        {
            title: "Corporate Objectives",
            htmlContent: `
            <p><strong>Corporate Objectives</strong> are the targets a listed-company has in order to achieve the desired outcome of its 
            shareholders. For example:</p>
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
            <p>Failure to balance different shareholder objectives collectively results in reduced value for shareholders that are having their
            objectives forgone.</p>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p>The <strong>Agency Theory</strong> is the idea that management may be inclined to act for their own personal objectives, as opposed to those of the shareholders.
            Some of the personal objectives that management may be influenced by include:</p>
            <ul>
            <li><strong>Remunerations:</strong> Increased cost, reduced reinvestment of profits and dividend payout.</li>
            <li><strong>Job Satisfaction:</strong> Prioritising projects of personal exposure or glamour, less the returns they offer.</li>
            <li><strong>Job Security:</strong> Avoidant of reasonable risk due to fears of being replaced.</li>
            <li><strong>Maximising Firm Value:</strong> Counterintuitive, but focuses on short-term recognition as opposed to long-term value.</li>
            </ul>
            <p>This disconnect affect profits, reinvestment, and growth, but they also extend to the wider markets perception of the company's future prospects.</p>
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
            <li><strong>Board of Directors:</strong> Interference of negative choices.</li>
            <li><strong>Pay Incentives:</strong> Pay based on performance of shareholder objectives.</li>
            <li><strong>Internal Audits:</strong> Ensures accurate repesentation of management performance.</li>
            <li><strong>Ownership Structure:</strong> Such as external institutions - they apply pressure.</li>
            <li><strong>Career Incentives:</strong> Poor performance affects ability to work somewhere esle.</li>
            </ul>
            <strong><li>External Mechanisms</li></strong>
            <ul>
            <li><strong>Takeover:</strong> Fear of hostile takeover.</li>
            <li><strong>The Market:</strong> Fear of negative perception.</li>
            <li><strong>Competition:</strong> Fear of better competitve performance.</li>
            <li><strong>External Audits:</strong> Fear of underperforming for insitutional investors.</li>
            <li><strong>Career Incentives:</strong> Poor performance affects ability to work elsewhere.</li>
            </ul>
            </ol>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p>Should management refuse to act in accordance with shareholders, there are two ways in which they can be removed.</p>
            <ol>
            <strong><li>Direct</li></strong>
            <ul>
            <li>The Board of directors can replace them at the behest of the shareholders.</li>
            <li>The Board themselves can be replaced by shareholders should they fail to replace management.</li>
            </ul>
            <p>(Shareholders do not have the legal authority to replace management themselves, only the board does)</p>
            <strong><li>Indirect</li></strong>
            <ul>
            <li>Shareholders can sell their shares to allow a new shareholder (hostile takeover) to remove the board, and management.</li>
            </ul>
            </ol>
            `
        },
        {
            title: "Efficient Market Hypothesis (EMH)",
            htmlContent: `
            <p>The EMH claims that all assets on a financial markets completely incorporate all information available.</p>
            <p>There are three forms of information that the stock exchange is reflected based on:</p>
            <ul>
            <li><strong>Weak-Form Efficiency:</strong> Prices reflect all historic share price movements.</li>
            <li><strong>Semi-Strong Form:</strong> Prices reflect all historic and publicly available information (annual reports, announcements, etc).</li>
            <li><strong>Strong-Form Efficiency:</strong> Prices reflect all historic, public, and private information (illegal trading).</li>
            </ul>
            <p>The share price is never equal to its true economic value due to many factors and the deviations of them over time.</p>
            `
        },
        {
            title: "Stock Market Efficiency (SME)",
            htmlContent: `
            <p>The SME claims that in order for a financial markets to be efficient, three areas must be efficient:</p>
            <ol>
            <strong><li>Exchange Platform</li></strong>
            <ul>
            <li><strong>Operational:</strong> transactions between buyers and sellers need to be cheap, quick, and reliable - creating 
            much competition between the two as possible.</li>
            </ul>
            <strong><li>Investors</li></strong>
            <ul>
            <li><strong>Allocational:</strong> investors should invest in the growth companies they uncover.</li>
            <li><strong>Pricing:</strong> investors should utilise all available information to uncover growth companies.</li>
            </ul>
            </ol>
            <p>The result is that companies earn the financing they require and investors earn a risk relative to the risk of investing,
            making the exchange between the two sufficient and creating an incentive for it to continue.</p>
            `
        },
        {
            title: "EMH & SME",
            htmlContent:`
            <p>Pricing efficiency of SME directly relates to weak and semi-strong forms of information in EMH because investors can 
            uncover growth companies by utilising <strong>Technical & Fundamental Analysis</strong>.</p>
            <ol>
            <strong><li>Technical Analysis - Weak Form</li></strong>
            <ul>
            <li>The study of past share price movements. Using charts and other tools. They use the past to determine the future.</li>
            </ul>
            <strong><li>Fundamental Analysis - Semi-Strong Form</li></strong>
            <ul>
            <li>The study of underlying factors, like sales, costs, competition, and opportunity risks. They use the present to determine the future.</li>
            </ul>
            </ol>
            `
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