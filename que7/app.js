// Async function to fetch Google page using dynamic import
async function fetchInfo() {
    try {
        // Dynamically import node-fetch (ESM in CommonJS)
        const fetch = (await import('node-fetch')).default;

        const response = await fetch('https://www.google.com');
        const html = await response.text(); // get HTML as string
        console.log("Fetched!:\n");
        console.log(html.substring(0, 500)); // print first 500 characters
    } catch (error) {
        console.error('Error fetching page:', error.message);
    }
}

fetchInfo();
