
export const requestData = async () => {

  try {
    const response = await fetch(
      "https://mocki.io/v1/427f2fc9-f6d4-47a3-9dd9-9a5ec4b35ac2",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    

    return data;
  } catch (error) {
    console.error("API call failed:", error);
  }
};
