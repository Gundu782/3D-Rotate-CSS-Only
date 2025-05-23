const token="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"
const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("btn")
   
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
        {
            headers: { Authorization: `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify("input":inputTxt.value),
        }
    );
    const result = await response.blob();
    return result;
}

query({ "inputs": inputTxt.value }).then((response) => {
    // Use image
});