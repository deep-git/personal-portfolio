interface ContactProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendContactForm = async (data: ContactProps) => {
    const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
    }

    return response.json(); // Return the JSON response if needed
};