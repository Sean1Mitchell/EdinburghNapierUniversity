document.addEventListener("DOMContentLoaded", () => {

    const lessonData = [
        {
            title: "Corporate Objectives",
            htmlContent: `
            <p><strong>Corporate Objectives</strong> are the targets a listed-company has in order to achieve the desired outcome of its 
            shareholders. For example:</p>
            <ul>
            <li><strong>Remunerations:</strong> Maximising dividend payouts and capital growth.</li>
            <li><strong>Employee Harmony:</strong> Fostering good labour relations to avoid strikes and costly redundancies.</li>
            <li><strong>Survival:</strong> Long-term business stability, conservative risk management, and high liquidity.</li>
            <li><strong>Quality:</strong> Maintaining high product or service standards to retain customer loyalty.</li>
            <li><strong>CSR/ESG:</strong> Corporate social responsibility and environment, social, and governance sustainability.</li>
            <li><strong>Market Share:</strong> Expanding competitive positioning and industry dominance.</li>
            </ul>
            <p>Failure to balance different shareholder objectives collectively results in reduced value for shareholders that are having their
            objectives forgone.</p>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p>The <strong>Agency Theory</strong> is the idea that management may be inclined to act on their own personal objectives, as opposed to those of the shareholders.
            Some of the personal objectives that management may be influenced by include:</p>
            <ul>
            <li><strong>Remunerations:</strong> Demanding higher executive pay and bonuses, which reduces profit reinvestment.</li>
            <li><strong>Empire Building:</strong> Expanding assets, influence, and corporate reach purely to increase personal prestige, even if it degrades shareholder value.</li>
            <li><strong>Job Satisfaction:</strong> Prioritising glamourous, high-exposure projects over those offering the highest financial returns.</li>
            <li><strong>Job Security:</strong> Becoming overly risk-adverse to avoid failures that could lead to being fired.</li>
            <li><strong>Maximising Firm Value:</strong> Focusing on short-term window dressing and quick recognition at the expense of long-term wealth creation.</li>
            </ul>
            <p>This disconnect affect profits, reinvestment, and growth, but they also extend to the wider markets perception of the company's future prospects.</p>
            `
        },
        {
            title: "Agency Theory",
            htmlContent: `
            <p><strong>The Agency Monitoring Mechanisms</strong></p>
            <p>There are ways in which shareholders can mitigate the agency problem, and they are broken into two mechanisms; internal and external.</p>
            <ol>
            <strong><li>Internal Mechanisms</li></strong>
            <ul>
            <li><strong>Board of Directors:</strong> Monitoring executive actions and intervening against value-destroying choices.</li>
            <li><strong>Pay Incentives:</strong> Structuring executive performance bonuses and share options around shareholder wealth goals.</li>
            <li><strong>Internal Audits:</strong> Reviewing operations to ensure accurate reporting of management performance.</li>
            <li><strong>Ownership Structure:</strong> Institutional blocks or large external shareholders applying direct pressure on executives.</li>
            </ul>
            <strong><li>External Mechanisms</li></strong>
            <ul>
            <li><strong>Takeover Threat:</strong> The constant fear of a hostile takeover if the stock price drops too low.</li>
            <li><strong>The Market:</strong> The disciplinary pressure of a negative public market perception.</li>
            <li><strong>Competition:</strong> Product market competition forcing management to stay efficient or fail.</li>
            <li><strong>External Audits:</strong> Independent financial scrutiny ensuring transparency for institutional investors.</li>
            <li><strong>Career Incentives:</strong> The threat that poor performance will ruin managers' future employment prospects elsewhere.</li>
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
            <li>Shareholders use their voting power to replace the board of directors, and the new board legally fires and 
            replaces the management team.</li>
            </ul>
            <strong><li>Indirect</li></strong>
            <ul>
            <li>Dissatisfied shareholders sell their shares, dropping the stock price and triggering a hostile takeover. The new 
            majority buyer installs a new board, who then axes management.</li>
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
            <li><strong>Weak-Form Efficiency:</strong> Prices reflect all historic share price movements and volume.</li>
            <li><strong>Semi-Strong Form:</strong> Prices reflect all historic and publicly available information (annual reports, announcements, etc).</li>
            <li><strong>Strong-Form Efficiency:</strong> Prices reflect all historic, public, and private information (insider trading - illegal).</li>
            </ul>
            <p>The share price is never equal to its true economic value due to many factors and the deviations of them over time.</p>
            `
        },
        {
            title: "Stock Market Efficiency (SME)",
            htmlContent: `
            <p>The SME claims that in order for financial markets to be efficient, there must be efficiency in three areas:</p>
            <ol>
            <strong><li>Exchange Platform</li></strong>
            <ul>
            <li><strong>Operational:</strong> Transactions between buyers and sellers need to be cheap, quick, and reliable - creating 
            as much competition between the two as possible.</li>
            </ul>
            <strong><li>Investors</li></strong>
            <ul>
            <li><strong>Allocational:</strong> Capital and resources must flow seamlessly into the most productive, high-growth companies based on 
            those accurate market prices.</li>
            <li><strong>Pricing:</strong> Investors must actively process and gather information to ensure that market prices accurately match an 
            asset's underlying value.</li>
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
            <li>The study of market sentiment, like past share price movements, volumes, and seasonal differences.</li>
            </ul>
            <strong><li>Fundamental Analysis - Semi-Strong Form</li></strong>
            <ul>
            <li>The study of underlying factors, like sales, costs, competition, and opportunity risks.</li>
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