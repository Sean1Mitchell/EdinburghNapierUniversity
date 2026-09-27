document.addEventListener("DOMContentLoaded", () => {
    // --------------------------
    // SIDEBAR TOGGLE + DROPDOWNS
    // --------------------------
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const body = document.body;
    const buttons = document.querySelectorAll(".sidebar-btn");

    // Toggle sidebar
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        body.classList.toggle("sidebar-open");
        if (!sidebar.classList.contains("active")) closeAllDropdowns();
    });

    // Close all sidebar dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll(".sidebar-dropdown").forEach(dropdown => {
            dropdown.style.maxHeight = null;
        });
    }

    // Sidebar dropdown toggle
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const dropdown = btn.nextElementSibling;
            if (!dropdown || !dropdown.classList.contains("sidebar-dropdown")) return;

            if (dropdown.style.maxHeight) {
                dropdown.style.maxHeight = null;
            } else {
                closeAllDropdowns();
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            }
        });
    });

    // --------------------------
    // MAIN CONTENT GRID DROPDOWNS
    // --------------------------
    document.querySelectorAll('.grid-topic').forEach(topic => {
        topic.addEventListener('click', (event) => {
            // 1. SAFETY: If they clicked a lesson link inside the drawer, let it open naturally
            if (event.target.closest('.lesson-card')) {
                return;
            }

            // 2. TOGGLE: Find the lesson grid inside this specific card and flip the active class
            const lessonGrid = topic.querySelector('.lesson-grid');
            if (lessonGrid) {
                lessonGrid.classList.toggle('active');
            }
        });
    });

    // --------------------------
    // GLOBAL CLICK LISTENER (FIXED)
    // --------------------------
    document.addEventListener("click", e => {
        // Only run if the sidebar is open and you click completely outside of it and the hamburger button
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            // Make sure clicking a grid-topic drawer doesn't fire this by checking if it's part of one
            if (!e.target.closest('.grid-topic')) {
                sidebar.classList.remove("active");
                body.classList.remove("sidebar-open");
                closeAllDropdowns();
            }
        }
    });

});
