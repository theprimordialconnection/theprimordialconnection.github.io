const listData = [
    {
        title: "Tehran",
        date: "September 10, 2024",
        category: "Video",
        link: "video.htm?title=Tehran",  // Link to video.htm with the title as parameter
        videos: [
            {
                videoSrc: "leaks/video/tehran.mp4",
                description: "Part 1 of the <a href='https://en.wikipedia.org/wiki/Tehran' target='_blank'>Tehran</a> documentary.<br><img src='img/tehran_image1.png' alt='Tehran Image' width='300'>"
            },
            {
                videoSrc: "leaks/video/tehran_part2.mp4",
                description: "Part 2 of the Tehran documentary."
            }
        ],
        tags: ["documentary", "history", "middle-east"] // Tags for Tehran
    },
    {
        title: "Afghanistan",
        date: "September 15, 2024",
        category: "Video",
        link: "video.htm?title=Afghanistan",  // Link to video.htm
        videoSrc: "leaks/video/afghanistan.mp4",  // Single video
        description: "A detailed insight into the war in Afghanistan.",
        tags: ["war", "conflict", "history"] // Tags for Afghanistan
    },
    {
        title: "Research Paper on AI",
        date: "August 1, 2024",
        category: "Document",
        link: "document.htm?title=Research%20Paper%20on%20AI",
        documents: [
            {
                documentSrc: "leaks/documents/research_paper_ai_part1.pdf",
                description: "Part 1 of the research paper on <a href='https://en.wikipedia.org/wiki/Artificial_intelligence' target='_blank'>Artificial Intelligence</a>. <br><img src='img/ai_diagram1.png' alt='AI Diagram' width='300'>"
            },
            {
                documentSrc: "leaks/documents/research_paper_ai_part2.pdf",
                description: "Part 2 of the research paper on AI, focusing on practical applications."
            }
        ],
        tags: ["ai", "technology", "research"] // Tags for AI Research Paper
    },
    {
        title: "User Guide for OpenCart",
        date: "July 15, 2024",
        category: "Document",
        link: "document.htm?title=User%20Guide%20for%20OpenCart",
        documentSrc: "leaks/documents/opencart_user_guide.pdf",  // Single document
        description: "User guide for using the OpenCart e-commerce platform.",
        tags: ["ecommerce", "guide", "opencart"] // Tags for OpenCart Guide
    }
];
