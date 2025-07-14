import {allCategories} from '../../assets/categories.js';



const GetDataUsingURL = async (url) => {
  // 1. Basic URL Validation
  if (!url || typeof url !== "string" || !/^https?:\/\//i.test(url)) {
    console.error("Error: Invalid or missing URL provided to GetDataUsingURL.");
    return { title: "", description: "", error: "Invalid or missing URL" };
  }

  let controller; // Declare controller outside the try block
  let timeoutId; // Declare timeoutId outside the try block

  try {
    // 2. Timeout for Fetch Request
    controller = new AbortController();
    const signal = controller.signal;

    timeoutId = setTimeout(() => {
      controller.abort(); // Abort the fetch request if it takes too long
      console.error(`Error: Fetch timed out for URL: ${url}`);
    }, 10000); // 10 seconds timeout, adjust as needed

    const res = await fetch(url, { signal });

    // Clear the timeout if the fetch completes before the timeout
    clearTimeout(timeoutId);

    // 3. Handle Non-OK HTTP Responses (e.g., 404, 500)
    if (!res.ok) {
      const errorText = `HTTP Error: ${res.status} ${res.statusText} for URL: ${url}`;
      console.error(errorText);
      return { title: "", description: "", error: errorText };
    }

    // 4. Handle Content-Type (Ensure it's HTML)
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("text/html")) {
      const errorText = `URL does not serve HTML content. Content-Type: ${contentType} for URL: ${url}`;
      console.error(errorText);
      return { title: "", description: "", error: errorText };
    }

    const html = await res.text();

    // 5. DOMParser Parsing Error Handling
    let doc;
    try {
      const parser = new DOMParser();
      doc = parser.parseFromString(html, "text/html");
    } catch (parseError) {
      console.error(
        `Error parsing HTML with DOMParser for URL: ${url}`,
        parseError
      );
      return {
        title: "",
        description: "",
        error: "Failed to parse HTML content",
      };
    }

    // 6. Robust Title Extraction
    // Prefer <title> tag, fallback to Open Graph title, then a generic placeholder
    const title =
      doc.title ||
      doc.querySelector('meta[property="og:title"]')?.content ||
      "No Title Found";

    // 7. Robust Description Extraction
    // Prefer meta description, fallback to Open Graph description, then a generic placeholder
    const description =
      doc.querySelector('meta[name="description"]')?.content ||
      doc.querySelector('meta[property="og:description"]')?.content ||
      "No Description Found";

    console.log("Received Title:", title);
    console.log("Received Description:", description);

    return { title, description };
  } catch (error) {
    // Clear timeout if an error occurs before it fires
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // 8. Handle Network Errors, Abort Errors, and Other Unexpected Errors
    if (error.name === "AbortError") {
      // This is specifically for fetch aborts (e.g., due to timeout)
      console.error(`Error: Request aborted for URL: ${url}`);
      return {
        title: "",
        description: "",
        error: "Request timed out or was aborted",
      };
    } else if (error instanceof TypeError) {
      // Network errors (e.g., DNS resolution failure, no internet connection)
      console.error(
        `Network Error during GetDataUsingURL for URL: ${url}`,
        error.message
      );
      return {
        title: "",
        description: "",
        error: `Network error: ${error.message}`,
      };
    } else {
      // Catch-all for any other unexpected errors
      console.error(
        `An unexpected error occurred during GetDataUsingURL for URL: ${url}`,
        error
      );
      return {
        title: "",
        description: "",
        error: `An unexpected error occurred: ${error.message}`,
      };
    }
  } finally {
    // Ensure timeout is cleared even if there's an early return
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

const SummarizeInfoFromAI = async (url) => {
  const { title, description } = await GetDataUsingURL(url);
  if (title.length > 0 && description.length > 0) {
    try {
      const response = await fetch(`http://localhost:3000/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          title: title,
          description: description,
          allowedCategories: allCategories
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
        console.log(`AI API error: ${response.statusText}`);
      }

      const modifiedTitle = data.modifiedTitle || "None from AI";
      const modifiedDescription = data.modifiedDescription || "None from AI";
      const tags = data.categories || [];

      console.log("Modified Title:", modifiedTitle);
      console.log("Modified Description:", modifiedDescription);
      console.log("Generated Tags:", tags);

      // return { modifiedTitle, modifiedDescription, tags };
    } catch (error) {
      console.error("Error during AI summarization:", error);
      // return { modifiedTitle: title, modifiedDescription: description, tags: [] };
    }
  } else {
    console.warn("Title or description is empty.");
    // return { modifiedTitle: "", modifiedDescription: "", tags: [] };
  }
};

// SummarizeInfoFromAI('https://vegamovies.frl/')
GetDataUsingURL("https://gemini.google.com/");

// export {SummarizeInfoFromAI}
