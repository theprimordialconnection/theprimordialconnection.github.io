const listData = [
    {
        title: "Tehran",
        date: "September 10, 2024",
        category: "video group",  // Updated category
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
        tags: ["Intl. Troops Footage", "Political Corruption", "Espionage"] // Random tags
    },
    {
        title: "Afghanistan",
        date: "September 15, 2024",
        category: "video",  // Single video
        link: "video.htm?title=Afghanistan",
        videoSrc: "leaks/video/afghanistan.mp4",  // Single video
        description: "A detailed insight into the war in Afghanistan.",
        tags: ["War files", "Terrorist Footage", "UK Troops Footage"] // Random tags
    },
    {
        title: "Research Paper on AI",
        date: "August 1, 2024",
        category: "document group",  // Updated category
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
        tags: ["Espionage", "PsyOp", "Leaks"] // Random tags
    },
    {
        title: "User Guide for OpenCart",
        date: "July 15, 2024",
        category: "document",  // Single document
        link: "document.htm?title=User%20Guide%20for%20OpenCart",
        documentSrc: "leaks/documents/opencart_user_guide.pdf",  // Single document
        description: "User guide for using the OpenCart e-commerce platform.",
        tags: ["Intl. Govt Malpractice", "Political Corruption"] // Random tags
    },
    {
        title: "Art Exhibit",
        date: "October 1, 2024",
        category: "image group",  // Updated category
        link: "image.htm?title=Art%20Exhibit",  // Link to image.htm
        images: [
            {
                imageSrc: "leaks/images/art_exhibit1.jpg",
                description: "Art Exhibit Part 1"
            },
            {
                imageSrc: "leaks/images/art_exhibit2.jpg",
                description: "Art Exhibit Part 2"
            }
        ],
        description: "A collection of images from the <a href='https://example.com' target='_blank'>Art Exhibit</a>.",
        tags: ["War files", "Leaks", "UK Govt Malpractice"] // Random tags
    },
    {
        title: "Nature Photography",
        date: "October 2, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Bloodthirst",
        date: "October 1, 2024",
        category: "image Group",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Mexican Cartel Demonstration",
        date: "July 12, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Brazilian Mafia",
        date: "October 2, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "IRA footage",
        date: "October 2, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Taliban Webcam",
        date: "October 2, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Podesta Documents",
        date: "January 22, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
    {
        title: "Diddy House Party Image Leak",
        date: "October 1, 2024",
        category: "image",  // Single image
        link: "image.htm?title=Nature%20Photography",
        imageSrc: "leaks/images/nature.jpg",  // Single image
        description: "A beautiful nature photography collection.",
        tags: ["UK Gore", "Intl. Gore"] // Random tags
    },
];
