export default async function fetchMessages() {
    const mes = await new Promise(r => r(
        [
            {
                role: "me",
                content: "text"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            },
            {
                role: "you",
                content: "text2"
            }
        ]
    ));
    return mes
}
