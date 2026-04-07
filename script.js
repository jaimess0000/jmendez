document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // 1. Intersection Observer for Scroll Animation (Fades elements into view)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-on-load'); // Add a starting class for CSS
        observer.observe(card);
    });

    // 2. Intersection Observer for Loading Dynamic Content (Lazy Loading)
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.lazyLoad === 'true') {
                const lazyDiv = entry.target;
                // Simulate loading content or fetch from an API
                console.log(`Loading detailed content for ${lazyDiv.dataset.projectId}...`);
                
                // *** ACTION REQUIRED: Replace this with actual data fetching ***
                const dummyData = {
                    title: `Full Case Study Details for ${lazyDiv.dataset.projectId}`,
                    description: `This is the extensive content block for ${lazyDiv.dataset.projectId}. It details the methodology, technologies used (e.g., React, Node.js, AWS), and achieved measurable KPIs (e.g., 20% performance increase, 15% user retention).`,
                    techStack: 'React, Three.js, GraphQL, Python',
                    reportUrl: '/downloads/proj' + lazyDiv.dataset.projectId + '.pdf'
                };

                populateModal(dummyData);
                // Optionally, remove the observer once the content is 'loaded'
                observer.unobserve(lazyDiv);
            }
        });
    }, { threshold: 0.5 });

    // Attach the observer to elements marked for lazy loading
    document.querySelectorAll('[data-lazy-load]').forEach(el => {
        lazyLoadObserver.observe(el);
    });
});