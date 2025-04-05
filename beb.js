document.querySelector('button').addEventListener('click', function() {
    const from = document.getElementById('from').value.toUpperCase();
    const to = document.getElementById('to').value.toUpperCase();
    
    if (from === "О" && to === "ГОРИЗОНТ") {
        alert("🎉 Правильно! Разгадка — ГОРИЗОНТ!");
    } else {
        alert("Продолжай искать... Проверь подсказки в коде страницы!");
    }
});