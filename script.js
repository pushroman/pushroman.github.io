const skills = ["Swift", "UIKit", "SwiftUI", "MVC", "MVP", "MVVM", "Design Patterns", "Core Data", "AVFoundation", "Core Bluetooth", "Combine"];
const techStackElement = document.querySelector(".tech-stack");

let skillIndex = 0;
let isDeleting = false;
let typingInterval;

function typeEffect() {
    let currentSkill = skills[skillIndex];
    
    // Определяем скорость печати / удаления
    let speed = isDeleting ? 100 : 150;
    
    if (!isDeleting) {
        techStackElement.textContent = currentSkill.slice(0, techStackElement.textContent.length + 1);
    } else {
        techStackElement.textContent = currentSkill.slice(0, techStackElement.textContent.length - 1);
    }
    
    // Проверяем окончание печати / удаления
    if (!isDeleting && techStackElement.textContent === currentSkill) {
        clearInterval(typingInterval);
        setTimeout(() => {
            isDeleting = true;
            typingInterval = setInterval(typeEffect, speed);
        }, 1000); // Пауза перед стиранием
    } 
    else if (isDeleting && techStackElement.textContent === "") {
        clearInterval(typingInterval);
        skillIndex = (skillIndex + 1) % skills.length;
        isDeleting = false;
        setTimeout(() => {
            typingInterval = setInterval(typeEffect, speed);
        }, 500); // Пауза перед печатью нового слова
    }
}

// Запуск анимации
typingInterval = setInterval(typeEffect, 150);
