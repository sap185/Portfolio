document.addEventListener("DOMContentLoaded", () => {
    const skills = ["Web Developer .", "Web Designer .", "Backend Developer .", "Classic Software Programmer ."];
    let currentSkillIndex = 0;
    let currentLetterIndex = 0;
    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.getElementById("cursor");

    function typeSkill() {
        if (currentLetterIndex < skills[currentSkillIndex].length) {
            typedTextSpan.textContent += skills[currentSkillIndex].charAt(currentLetterIndex);
            currentLetterIndex++;
            setTimeout(typeSkill, 150);
        } else {
            setTimeout(eraseSkill, 1500);
        }
    }

    function eraseSkill() {
        if (currentLetterIndex > 0) {
            typedTextSpan.textContent = skills[currentSkillIndex].substring(0, currentLetterIndex - 1);
            currentLetterIndex--;
            setTimeout(eraseSkill, 50);
        } else {
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            setTimeout(typeSkill, 500); // Start typing the next skill
        }
    }

    setTimeout(typeSkill, 500);
});


document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 250); // Delay for 0.3s before starting the scroll
        }
    });
});

