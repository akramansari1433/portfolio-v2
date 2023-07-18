interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
}

interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

interface Project extends SanityBody {
    _type: "project";
    title: string;
    sourceCodeLink?: string;
    liveLink?: string
    image: Image;
    summary: string;
    technologies: Technology[];
}

interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
