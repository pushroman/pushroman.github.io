const skills = ["Swift", "UIKit", "SwiftUI", "Combine", "Firebase", "Supabase"];
const techStackElement = document.querySelector(".tech-stack");

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentSkill = skills[skillIndex];
    if (!isDeleting) {
        techStackElement.textContent = currentSkill.slice(0, charIndex++);
        if (charIndex > currentSkill.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else {
            setTimeout(typeEffect, 150);
        }
    } else {
        techStackElement.textContent = currentSkill.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
        }
        setTimeout(typeEffect, 100);
    }
}

typeEffect();