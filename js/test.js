// Вопросы разных типов
const testQuestions = [
    // ТИП 1: Выбор одного правильного ответа
    {
        type: "single",
        text: "Какая технология 3D-печати является самой доступной и широко распространённой?",
        options: ["SLA", "SLS", "FDM", "DLP"],
        correct: 2
    },
    {
        type: "single",
        text: "Какой формат файла является самым распространённым для 3D-печати?",
        options: ["OBJ", "STL", "3MF", "STEP"],
        correct: 1
    },

    // ТИП 2: Выбор нескольких правильных ответов
    {
        type: "multiple",
        text: "Какие из перечисленных материалов используются в FDM-печати? (выберите все подходящие)",
        options: ["PLA", "Фотополимер", "ABS", "PETG", "Нейлон"],
        correct: [0, 2, 3]
    },
    {
        type: "multiple",
        text: "Какие из перечисленных операций есть в КОМПАС-3D? (выберите все подходящие)",
        options: ["Выдавливание", "Вращение", "Рендеринг видео", "Массив по сетке", "Скругление"],
        correct: [0, 1, 3, 4]
    },

    // ТИП 3: Верно / Неверно (True/False)
    {
        type: "truefalse",
        text: "Утверждение: SLS-печать не требует поддержек, так как неиспользованный порошок выполняет их роль.",
        correct: true
    },
    {
        type: "truefalse",
        text: "Утверждение: Формат STL сохраняет информацию о цвете и текстурах модели.",
        correct: false
    },

    // ТИП 4: Ввод числа (числовой ответ)
    {
        type: "number",
        text: "Какой минимальный рекомендуемый зазор (в миллиметрах) между соединяемыми деталями при проектировании для FDM-печати? (Введите число)",
        hint: "Подсказка: типичное значение от 0.2 до 0.4 мм",
        correct: 0.3,
        tolerance: 0.1  // допустимое отклонение ±0.1
    },

    // ТИП 5: Сопоставление (выбор из списка)
    {
        type: "matching",
        text: "Сопоставьте технологию 3D-печати с её ключевой особенностью:",
        matchItems: [
            { tech: "FDM", desc: "Самый доступный, пластиковая нить" },
            { tech: "SLA", desc: "Лазер и фотополимерная смола" },
            { tech: "SLS", desc: "Порошок и лазер, нет поддержек" },
            { tech: "DLP", desc: "Проектор засвечивает слой целиком" }
        ],
        matchPairs: [
            { option: "FDM", matchTo: 0 },
            { option: "SLA", matchTo: 1 },
            { option: "SLS", matchTo: 2 },
            { option: "DLP", matchTo: 3 }
        ],
        options: ["FDM", "SLA", "SLS", "DLP"],
        matchDescriptions: [
            "Самый доступный, пластиковая нить",
            "Лазер и фотополимерная смола",
            "Порошок и лазер, нет поддержек",
            "Проектор засвечивает слой целиком"
        ]
    },

    // ТИП 6: Открытый вопрос (короткий текст)
    {
        type: "open",
        text: "Как называется программа, которая преобразует 3D-модель в G-code для 3D-принтера?",
        hint: "Слово происходит от английского 'slice' — нарезать слоями",
        correctKeywords: ["слайсер", "slicer", "Слайсер"]
    }
];

let userAnswers = new Array(testQuestions.length).fill(null);
let currentIndex = 0;

function loadQuestion(index) {
    const q = testQuestions[index];
    const container = document.getElementById('testQuestion');
    
    let html = `<div class="question-text">${index+1}. ${q.text}</div>`;
    
    switch(q.type) {
        case "single":
            html += `<div class="options-list">`;
            q.options.forEach((opt, optIndex) => {
                const isChecked = userAnswers[index] === optIndex;
                html += `
                    <div class="option" onclick="selectOption(${index}, ${optIndex})">
                        <input type="radio" name="question" value="${optIndex}" id="opt${index}_${optIndex}" ${isChecked ? 'checked' : ''}>
                        <label for="opt${index}_${optIndex}">${String.fromCharCode(65+optIndex)}. ${opt}</label>
                    </div>
                `;
            });
            html += `</div>`;
            break;
            
        case "multiple":
            const selected = userAnswers[index] || [];
            html += `<div class="options-list multiple-list">`;
            q.options.forEach((opt, optIndex) => {
                const isChecked = Array.isArray(selected) && selected.includes(optIndex);
                html += `
                    <div class="option" onclick="toggleMultipleOption(${index}, ${optIndex})">
                        <input type="checkbox" value="${optIndex}" id="opt${index}_${optIndex}" ${isChecked ? 'checked' : ''}>
                        <label for="opt${index}_${optIndex}">${String.fromCharCode(65+optIndex)}. ${opt}</label>
                    </div>
                `;
            });
            html += `</div>`;
            break;
            
        case "truefalse":
            const tfValue = userAnswers[index];
            html += `
                <div class="options-list truefalse-list">
                    <div class="option" onclick="selectTrueFalse(${index}, true)">
                        <input type="radio" name="truefalse" id="opt${index}_true" ${tfValue === true ? 'checked' : ''}>
                        <label for="opt${index}_true">✅ Верно</label>
                    </div>
                    <div class="option" onclick="selectTrueFalse(${index}, false)">
                        <input type="radio" name="truefalse" id="opt${index}_false" ${tfValue === false ? 'checked' : ''}>
                        <label for="opt${index}_false">❌ Неверно</label>
                    </div>
                </div>
            `;
            break;
            
        case "number":
            html += `
                <div class="number-input">
                    <input type="number" id="numberInput" step="0.1" placeholder="Введите число" value="${userAnswers[index] !== null ? userAnswers[index] : ''}">
                    <div class="input-hint">${q.hint || ''}</div>
                </div>
            `;
            setTimeout(() => {
                const input = document.getElementById('numberInput');
                if (input) {
                    input.addEventListener('input', (e) => {
                        const val = parseFloat(e.target.value);
                        userAnswers[index] = isNaN(val) ? null : val;
                        localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
                        updateStats();
                    });
                }
            }, 10);
            break;
            
        case "matching":
            const matchSelections = userAnswers[index] || {};
            html += `<div class="matching-grid">`;
            q.matchDescriptions.forEach((desc, idx) => {
                html += `<div class="matching-row">`;
                html += `<div class="matching-desc">${idx+1}. ${desc}</div>`;
                html += `<select class="matching-select" data-match-idx="${idx}" onchange="updateMatching(${index}, ${idx}, this.value)">`;
                html += `<option value="">— Выберите технологию —</option>`;
                q.options.forEach((opt, optIdx) => {
                    const isSelected = matchSelections[idx] === optIdx;
                    html += `<option value="${optIdx}" ${isSelected ? 'selected' : ''}>${opt}</option>`;
                });
                html += `</select>`;
                html += `</div>`;
            });
            html += `</div>`;
            break;
            
        case "open":
            html += `
                <div class="open-input">
                    <textarea id="openInput" rows="3" placeholder="Введите ваш ответ...">${userAnswers[index] !== null ? userAnswers[index] : ''}</textarea>
                    <div class="input-hint">${q.hint || ''}</div>
                </div>
            `;
            setTimeout(() => {
                const textarea = document.getElementById('openInput');
                if (textarea) {
                    textarea.addEventListener('input', (e) => {
                        userAnswers[index] = e.target.value;
                        localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
                        updateStats();
                    });
                }
            }, 10);
            break;
    }
    
    container.innerHTML = html;
    updateProgressBar();
    updateStats();
}

function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    loadQuestion(currentIndex);
    updateStats();
}

function toggleMultipleOption(qIndex, optIndex) {
    let current = userAnswers[qIndex];
    if (!Array.isArray(current)) current = [];
    
    if (current.includes(optIndex)) {
        current = current.filter(i => i !== optIndex);
    } else {
        current.push(optIndex);
    }
    current.sort((a,b) => a-b);
    userAnswers[qIndex] = current;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    loadQuestion(currentIndex);
    updateStats();
}

function selectTrueFalse(qIndex, value) {
    userAnswers[qIndex] = value;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    loadQuestion(currentIndex);
    updateStats();
}

function updateMatching(qIndex, matchIdx, value) {
    let current = userAnswers[qIndex];
    if (!current || typeof current !== 'object') current = {};
    current[matchIdx] = parseInt(value);
    userAnswers[qIndex] = current;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    updateStats();
}

function updateStats() {
    const answered = userAnswers.filter(a => a !== null && a !== '' && (!Array.isArray(a) || a.length > 0)).length;
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('remainingCount').textContent = testQuestions.length - answered;
}

function updateProgressBar() {
    const progress = ((currentIndex + 1) / testQuestions.length) * 100;
    document.getElementById('testProgressFill').style.width = `${progress}%`;
}

function nextQuestion() {
    if (currentIndex < testQuestions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
        document.getElementById('prevBtn').disabled = false;
        if (currentIndex === testQuestions.length - 1) {
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('submitBtn').style.display = 'inline-block';
        }
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion(currentIndex);
        document.getElementById('nextBtn').style.display = 'inline-block';
        document.getElementById('submitBtn').style.display = 'none';
        if (currentIndex === 0) {
            document.getElementById('prevBtn').disabled = true;
        }
    }
}

function calculateScore() {
    let correct = 0;
    
    for (let i = 0; i < testQuestions.length; i++) {
        const q = testQuestions[i];
        const answer = userAnswers[i];
        
        if (answer === null || answer === '' || (Array.isArray(answer) && answer.length === 0)) continue;
        
        switch(q.type) {
            case "single":
                if (answer === q.correct) correct++;
                break;
            case "multiple":
                if (Array.isArray(answer) && 
                    answer.length === q.correct.length &&
                    answer.every(v => q.correct.includes(v))) correct++;
                break;
            case "truefalse":
                if (answer === q.correct) correct++;
                break;
            case "number":
                const numAnswer = parseFloat(answer);
                if (!isNaN(numAnswer) && Math.abs(numAnswer - q.correct) <= (q.tolerance || 0.01)) correct++;
                break;
            case "matching":
                let matchCorrect = 0;
                for (let j = 0; j < q.matchPairs.length; j++) {
                    if (answer && answer[j] === q.matchPairs[j].matchTo) matchCorrect++;
                }
                if (matchCorrect === q.matchPairs.length) correct++;
                break;
            case "open":
                const answerStr = String(answer).toLowerCase().trim();
                const matched = q.correctKeywords.some(keyword => 
                    answerStr.includes(keyword.toLowerCase())
                );
                if (matched) correct++;
                break;
        }
    }
    return correct;
}

function getGrade(score, total) {
    const percent = (score / total) * 100;
    if (percent >= 90) return { grade: "Отлично (5)", message: "Превосходно! Вы отлично усвоили материал! 🎉" };
    if (percent >= 75) return { grade: "Хорошо (4)", message: "Хороший результат! Но есть куда расти. 📚" };
    if (percent >= 60) return { grade: "Удовлетворительно (3)", message: "Неплохо! Рекомендуем повторить некоторые темы. 📖" };
    return { grade: "Неудовлетворительно (2)", message: "Стоит повторить лекции и пройти тест заново. 💪" };
}

function showResults() {
    const score = calculateScore();
    const total = testQuestions.length;
    const { grade, message } = getGrade(score, total);
    
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('resultGrade').textContent = grade;
    document.getElementById('resultMessage').innerHTML = `${message}<br><br>Вы ответили правильно на ${score} из ${total} вопросов.`;
    document.getElementById('resultModal').style.display = 'flex';
    
    localStorage.setItem('lastTestScore', score);
}

function restartTest() {
    userAnswers = new Array(testQuestions.length).fill(null);
    currentIndex = 0;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    loadQuestion(0);
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('prevBtn').disabled = true;
    updateStats();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedAnswers = localStorage.getItem('testAnswers');
    if (savedAnswers) {
        userAnswers = JSON.parse(savedAnswers);
    }
    
    loadQuestion(0);
    
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', showResults);
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('resultModal').style.display = 'none';
    });
    document.getElementById('restartTestBtn').addEventListener('click', restartTest);
});