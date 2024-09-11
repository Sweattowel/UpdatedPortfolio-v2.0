'use server';

import ProjectData from './Data/Projects.json';

export async function CollectPosts() {
    try {
        console.log("Received request")
        return ProjectData;
    } catch (error) {
        console.error("Error fetching project data:", error);
        return [];
    }
}
