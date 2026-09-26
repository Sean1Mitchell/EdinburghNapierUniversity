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

    // Close sidebar if click outside
    document.addEventListener("click", e => {
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            sidebar.classList.remove("active");
            body.classList.remove("sidebar-open");
            closeAllDropdowns();
        }
    });

    // Put this inside your DOMContentLoaded block instead of the function
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.closest('.grid-topic');
            const lessonGrid = topic.querySelector('.lesson-grid');
            lessonGrid.classList.toggle('active');
        });
    });


});