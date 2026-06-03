// ТЕСТ: 30 ВОПРОСОВ (20 стандартных + 10 разных типов)

const testQuestions = [
    // ========== ТИП 1: СТАНДАРТНЫЕ (один правильный ответ) - 20 штук ==========
    
    // Лекция 1: Технологии 3D-печати (вопросы 1-6)
    {
        type: "single",
        text: "Что означает термин «аддитивные технологии»?",
        options: ["Удаление лишнего материала", "Послойное добавление материала", "Литьё в форму", "Механическая обработка"],
        correct: 1
    },
    {
        type: "single",
        text: "Какая технология 3D-печати является самой доступной и распространённой?",
        options: ["SLA", "SLS", "FDM", "DLP"],
        correct: 2
    },
    {
        type: "single",
        text: "В чём главное отличие DLP от SLA?",
        options: ["DLP использует порошок", "DLP засвечивает слой целиком проектором", "DLP не требует постобработки", "DLP печатает только металлом"],
        correct: 1
    },
    {
        type: "single",
        text: "Для какой технологии не требуются поддержки, так как их роль выполняет неиспользованный порошок?",
        options: ["FDM", "SLA", "DLP", "SLS"],
        correct: 3
    },
    {
        type: "single",
        text: "Какой материал чаще всего используется в SLS-печати?",
        options: ["PLA", "ABS", "Нейлон", "Фотополимер"],
        correct: 2
    },
    {
        type: "single",
        text: "Какое ограничение характерно для FDM-печати?",
        options: ["Низкая прочность", "Заметная слоистость", "Высокая стоимость", "Медленная печать"],
        correct: 1
    },

    // Лекция 2: Направления моделирования (вопросы 7-11)
    {
        type: "single",
        text: "Какое моделирование использует параметры и автоматически перестраивается при их изменении?",
        options: ["Скульптинг", "Полигональное", "Параметрическое", "Процедурное"],
        correct: 2
    },
    {
        type: "single",
        text: "Для создания органических форм (персонажи, животные) чаще всего используется:",
        options: ["Твердотельное", "Скульптинг", "Поверхностное", "Параметрическое"],
        correct: 1
    },
    {
        type: "single",
        text: "Что такое процедурное моделирование?",
        options: ["Ручное создание полигонов", "Алгоритмическая генерация", "Лепка из цифрового материала", "Создание чертежей"],
        correct: 1
    },
    {
        type: "single",
        text: "Твердотельное моделирование отличается от поверхностного тем, что:",
        options: ["Учитывает внутреннюю структуру", "Работает только с цветом", "Не требует размеров", "Используется только в играх"],
        correct: 0
    },
    {
        type: "single",
        text: "Какой подход объединяет точность и художественную выразительность?",
        options: ["Параметрический", "Полигональный", "Гибридный", "Процедурный"],
        correct: 2
    },

    // Лекция 3: CAD-программы (вопросы 12-16)
    {
        type: "single",
        text: "Какая CAD-программа является российской и ориентирована на ЕСКД?",
        options: ["SolidWorks", "Fusion 360", "КОМПАС-3D", "FreeCAD"],
        correct: 2
    },
    {
        type: "single",
        text: "Какая программа является бесплатной с открытым кодом?",
        options: ["TinkerCAD", "FreeCAD", "Blender", "SolidWorks"],
        correct: 1
    },
    {
        type: "single",
        text: "Какая программа работает прямо в браузере и ориентирована на начинающих?",
        options: ["КОМПАС-3D", "SolidWorks", "TinkerCAD", "FreeCAD"],
        correct: 2
    },
    {
        type: "single",
        text: "Какая программа лучше всего подходит для художественного моделирования и анимации?",
        options: ["КОМПАС-3D", "SolidWorks", "TinkerCAD", "Blender"],
        correct: 3
    },
    {
        type: "single",
        text: "Какая CAD-система сочетает CAD, CAM и CAE с облачной архитектурой?",
        options: ["Fusion 360", "КОМПАС-3D", "SolidWorks", "FreeCAD"],
        correct: 0
    },

    // Лекция 4: Форматы файлов (вопросы 17-20)
    {
        type: "single",
        text: "Какой формат является самым распространённым для 3D-печати?",
        options: ["OBJ", "3MF", "STL", "STEP"],
        correct: 2
    },
    {
        type: "single",
        text: "Какой формат был разработан как современная альтернатива STL?",
        options: ["IGES", "3MF", "OBJ", "AMF"],
        correct: 1
    },
    {
        type: "single",
        text: "Какая проблема характерна для формата STL?",
        options: ["Не поддерживается слайсерами", "Отсутствие единиц измерения", "Нельзя использовать для печати", "Слишком большой размер"],
        correct: 1
    },
    {
        type: "single",
        text: "Какие форматы используются в инженерных CAD для обмена моделями?",
        options: ["STL и OBJ", "STEP и IGES", "3MF и AMF", "PNG и JPG"],
        correct: 1
    },

    // ========== ТИП 2: МНОЖЕСТВЕННЫЙ ВЫБОР (2 вопроса) ==========
    {
        type: "multiple",
        text: "Какие материалы используются в FDM-печати? (выберите все подходящие)",
        options: ["PLA", "Фотополимер", "ABS", "PETG", "Нейлон"],
        correct: [0, 2, 3]
    },
    {
        type: "multiple",
        text: "Какие операции есть в КОМПАС-3D? (выберите все подходящие)",
        options: ["Выдавливание", "Вращение", "Рендеринг", "Массив по сетке", "Скругление"],
        correct: [0, 1, 3, 4]
    },

    // ========== ТИП 3: ВЕРНО / НЕВЕРНО (2 вопроса) ==========
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

    // ========== ТИП 4: ЧИСЛОВОЙ ВВОД (1 вопрос) ==========
    {
        type: "number",
        text: "Какой минимальный рекомендуемый зазор (в мм) между соединяемыми деталями при FDM-печати?",
        hint: "Типичное значение от 0.2 до 0.4 мм",
        correct: 0.3,
        tolerance: 0.1
    },

    // ========== ТИП 5: СОПОСТАВЛЕНИЕ (1 вопрос) ==========
    {
        type: "matching",
        text: "Сопоставьте технологию 3D-печати с её ключевой особенностью:",
        matchItems: [
            { tech: "FDM", desc: "Самый доступный, пластиковая нить" },
            { tech: "SLA", desc: "Лазер и фотополимер" },
            { tech: "SLS", desc: "Порошок, нет поддержек" },
            { tech: "DLP", desc: "Проектор засвечивает слой" }
        ],
        options: ["FDM", "SLA", "SLS", "DLP"],
        matchDescriptions: [
            "Самый доступный, пластиковая нить",
            "Лазер и фотополимерная смола",
            "Порошок и лазер, нет поддержек",
            "Проектор засвечивает слой целиком"
        ],
        correct: { 0: 0, 1: 1, 2: 2, 3: 3 }
    },

    // ========== ТИП 6: ОТКРЫТЫЙ ВОПРОС (1 вопрос) ==========
    {
        type: "open",
        text: "Как называется программа, которая преобразует 3D-модель в G-code?",
        hint: "Слово от английского 'slice' — нарезать",
        correctKeywords: ["слайсер", "slicer", "Slicer"]
    },

    // ========== ТИП 7: РАССТАНОВКА ПО ПОРЯДКУ (1 вопрос) ==========
    {
        type: "order",
        text: "Расставьте этапы подготовки к 3D-печати в правильном порядке:",
        items: ["Создание модели в CAD", "Экспорт в STL", "Настройка в слайсере", "Генерация G-code", "Печать"],
        correct: [0, 1, 2, 3, 4]
    },

    // ========== ТИП 8: ЗАПОЛНЕНИЕ ПРОПУСКА (1 вопрос) ==========
    {
        type: "fillblank",
        text: "Технология ______ использует жидкие фотополимеры и лазер для послойного отверждения.",
        correct: "SLA",
        alternatives: ["стереолитография", "SLA", "стереолитография"]
    },

    // ========== ТИП 9: ВЫБОР ИЗ СПИСКА (1 вопрос) ==========
    {
        type: "dropdown",
        text: "Выберите правильный формат файла для 3D-печати из предложенных:",
        options: [".docx", ".stl", ".exe", ".mp3"],
        correct: 1
    }
];

// ========== ОСТАЛЬНОЙ КОД ЛОГИКИ ТЕСТА (такой же как был, но с поддержкой новых типов) ==========

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
                        <input type="radio" name="q${index}" value="${optIndex}" id="opt${index}_${optIndex}" ${isChecked ? 'checked' : ''}>
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
                    <div class="option" onclick="toggleMultiple(${index}, ${optIndex})">
                        <input type="checkbox" id="opt${index}_${optIndex}" ${isChecked ? 'checked' : ''}>
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
                    <div class="option" onclick="selectTF(${index}, true)">
                        <input type="radio" name="tf${index}" id="tf${index}_true" ${tfValue === true ? 'checked' : ''}>
                        <label for="tf${index}_true">✅ Верно</label>
                    </div>
                    <div class="option" onclick="selectTF(${index}, false)">
                        <input type="radio" name="tf${index}" id="tf${index}_false" ${tfValue === false ? 'checked' : ''}>
                        <label for="tf${index}_false">❌ Неверно</label>
                    </div>
                </div>
            `;
            break;
            
        case "number":
            html += `
                <div class="number-input">
                    <input type="number" id="numInput_${index}" step="0.1" placeholder="Введите число" value="${userAnswers[index] !== null ? userAnswers[index] : ''}">
                    <div class="input-hint">${q.hint || ''}</div>
                </div>
            `;
            setTimeout(() => {
                const input = document.getElementById(`numInput_${index}`);
                if (input) {
                    input.oninput = (e) => {
                        const val = parseFloat(e.target.value);
                        userAnswers[index] = isNaN(val) ? null : val;
                        saveAnswers();
                        updateStats();
                    };
                }
            }, 10);
            break;
            
        case "matching":
            const matchSelections = userAnswers[index] || {};
            html += `<div class="matching-grid">`;
            q.matchDescriptions.forEach((desc, idx) => {
                html += `<div class="matching-row">`;
                html += `<div class="matching-desc">${idx+1}. ${desc}</div>`;
                html += `<select class="matching-select" data-idx="${idx}" onchange="updateMatch(${index}, ${idx}, this.value)">`;
                html += `<option value="">— Выберите —</option>`;
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
                    <textarea id="openInput_${index}" rows="3" placeholder="Введите ваш ответ...">${userAnswers[index] !== null ? userAnswers[index] : ''}</textarea>
                    <div class="input-hint">${q.hint || ''}</div>
                </div>
            `;
            setTimeout(() => {
                const textarea = document.getElementById(`openInput_${index}`);
                if (textarea) {
                    textarea.oninput = (e) => {
                        userAnswers[index] = e.target.value;
                        saveAnswers();
                        updateStats();
                    };
                }
            }, 10);
            break;
            
        case "order":
            let orderItems = userAnswers[index] || [...q.items];
            html += `<div class="order-list" id="orderList_${index}">`;
            orderItems.forEach((item, idx) => {
                html += `
                    <div class="order-item" draggable="true" data-order="${idx}">
                        <span class="order-handle">⋮⋮</span>
                        <span class="order-text">${item}</span>
                    </div>
                `;
            });
            html += `</div>`;
            html += `<div class="input-hint">Перетаскивайте элементы мышью для изменения порядка</div>`;
            setTimeout(() => initDragDrop(index, q.items.length), 10);
            break;
            
        case "fillblank":
            html += `
                <div class="fillblank-input">
                    <input type="text" id="fillInput_${index}" placeholder="Введите пропущенное слово" value="${userAnswers[index] !== null ? userAnswers[index] : ''}" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-primary); color: var(--text-primary);">
                </div>
            `;
            setTimeout(() => {
                const input = document.getElementById(`fillInput_${index}`);
                if (input) {
                    input.oninput = (e) => {
                        userAnswers[index] = e.target.value;
                        saveAnswers();
                        updateStats();
                    };
                }
            }, 10);
            break;
            
        case "dropdown":
            html += `
                <div class="dropdown-input">
                    <select id="dropdown_${index}" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-primary); color: var(--text-primary);">
                        <option value="">— Выберите ответ —</option>
                        ${q.options.map((opt, idx) => `<option value="${idx}" ${userAnswers[index] === idx ? 'selected' : ''}>${opt}</option>`).join('')}
                    </select>
                </div>
            `;
            setTimeout(() => {
                const select = document.getElementById(`dropdown_${index}`);
                if (select) {
                    select.onchange = (e) => {
                        userAnswers[index] = parseInt(e.target.value);
                        saveAnswers();
                        updateStats();
                    };
                }
            }, 10);
            break;
    }
    
    container.innerHTML = html;
    updateProgressBar();
    updateStats();
}

// Вспомогательные функции
function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    saveAnswers();
    loadQuestion(currentIndex);
}

function toggleMultiple(qIndex, optIndex) {
    let current = userAnswers[qIndex] || [];
    if (current.includes(optIndex)) {
        current = current.filter(i => i !== optIndex);
    } else {
        current.push(optIndex);
    }
    current.sort((a,b) => a-b);
    userAnswers[qIndex] = current;
    saveAnswers();
    loadQuestion(currentIndex);
}

function selectTF(qIndex, value) {
    userAnswers[qIndex] = value;
    saveAnswers();
    loadQuestion(currentIndex);
}

function updateMatch(qIndex, matchIdx, value) {
    let current = userAnswers[qIndex] || {};
    current[matchIdx] = parseInt(value);
    userAnswers[qIndex] = current;
    saveAnswers();
    updateStats();
}

function initDragDrop(qIndex, itemCount) {
    const container = document.getElementById(`orderList_${qIndex}`);
    if (!container) return;
    
    let items = container.querySelectorAll('.order-item');
    let draggedItem = null;
    
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
        });
        
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
                const rect = item.getBoundingClientRect();
                const isAfter = e.clientY > rect.top + rect.height / 2;
                
                if (isAfter) {
                    item.parentNode.insertBefore(draggedItem, item.nextSibling);
                } else {
                    item.parentNode.insertBefore(draggedItem, item);
                }
                
                // Сохраняем порядок
                const newOrder = Array.from(container.querySelectorAll('.order-text')).map(el => el.textContent);
                const originalItems = testQuestions[qIndex].items;
                const orderIndices = newOrder.map(item => originalItems.indexOf(item));
                userAnswers[qIndex] = orderIndices;
                saveAnswers();
                updateStats();
            }
            draggedItem = null;
        });
    });
}

function saveAnswers() {
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
}

function updateStats() {
    let answered = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        const a = userAnswers[i];
        if (a !== null && a !== '' && (!Array.isArray(a) || a.length > 0)) {
            if (typeof a === 'object' && !Array.isArray(a)) {
                if (Object.keys(a).length > 0) answered++;
            } else {
                answered++;
            }
        }
    }
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('remainingCount').textContent = testQuestions.length - answered;
}

function updateProgressBar() {
    const progress = ((currentIndex + 1) / testQuestions.length) * 100;
    const fill = document.getElementById('testProgressFill');
    if (fill) fill.style.width = `${progress}%`;
    document.getElementById('currentQuestion').textContent = currentIndex + 1;
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
                if (Array.isArray(answer) && answer.length === q.correct.length && answer.every(v => q.correct.includes(v))) correct++;
                break;
            case "truefalse":
                if (answer === q.correct) correct++;
                break;
            case "number":
                const num = parseFloat(answer);
                if (!isNaN(num) && Math.abs(num - q.correct) <= (q.tolerance || 0.01)) correct++;
                break;
            case "matching":
                let matchCorrect = 0;
                for (let j = 0; j < Object.keys(q.correct).length; j++) {
                    if (answer && answer[j] === q.correct[j]) matchCorrect++;
                }
                if (matchCorrect === Object.keys(q.correct).length) correct++;
                break;
            case "open":
                const answerStr = String(answer).toLowerCase().trim();
                if (q.correctKeywords.some(k => answerStr.includes(k.toLowerCase()))) correct++;
                break;
            case "order":
                if (Array.isArray(answer) && answer.length === q.correct.length && answer.every((v, idx) => v === q.correct[idx])) correct++;
                break;
            case "fillblank":
                const fillAnswer = String(answer).toLowerCase().trim();
                if (q.alternatives.some(alt => fillAnswer === alt.toLowerCase())) correct++;
                break;
            case "dropdown":
                if (answer === q.correct) correct++;
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
    saveAnswers();
    loadQuestion(0);
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('prevBtn').disabled = true;
    updateStats();
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('testAnswers');
    if (saved) userAnswers = JSON.parse(saved);
    loadQuestion(0);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', showResults);
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('resultModal').style.display = 'none';
    });
    document.getElementById('restartTestBtn').addEventListener('click', restartTest);
    
    document.getElementById('totalQuestions').textContent = testQuestions.length;
});