document.addEventListener("DOMContentLoaded", () => {
    const typingText = "Chúc mọi người một năm mới vui vẻ, hạnh phúc, bình an, an khang thịnh vượng, sức khoẻ dồi dào 💪💪💪, gặp nhiều may mắn 🍀🍀🍀,phát tài phát lộc, 6262 💵💵💵!!! ^^ ✌️✌️✌️";
    const typingContainer = document.getElementById("typing-container");
    const typingElement = document.getElementById("typing-text");

    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            typingElement.textContent += typingText[index];
            index++;
            setTimeout(typeEffect, 150); 
        } else {
            
            setTimeout(() => {
                typingContainer.classList.add("hidden");
            }, 60000);
        }
    }

    typeEffect();
});
