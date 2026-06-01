// Test data
const testQuestions = [
    { text: "Что означает термин «аддитивные технологии»?", options: ["Удаление лишнего материала из заготовки", "Послойное добавление материала для создания изделия", "Литьё материала в форму", "Механическая обработка на станках"], correct: 1 },
    { text: "Какая технология 3D-печати является самой доступной и широко распространённой?", options: ["SLA", "SLS", "FDM", "DLP"], correct: 2 },
    { text: "В чём главное отличие DLP от SLA?", options: ["DLP использует порошок, а SLA — пластик", "DLP засвечивает слой целиком с помощью проектора, а SLA — лазером", "DLP не требует постобработки, а SLA требует", "DLP печатает только металлом"], correct: 1 },
    { text: "Для какой технологии не требуются поддержки, так как их роль выполняет неиспользованный порошок?", options: ["FDM", "SLA", "DLP", "SLS"], correct: 3 },
    { text: "Какой материал чаще всего используется в SLS-печати?", options: ["PLA", "ABS", "Нейлон", "Фотополимер"], correct: 2 },
    { text: "Какое ограничение характерно для FDM-печати?", options: ["Невозможность печати цветных изделий", "Заметная слоистость и зависимость прочности от направления слоёв", "Очень высокая стоимость оборудования", "Обязательное использование фотополимеров"], correct: 1 },
    { text: "Какое направление моделирования использует параметры и автоматически перестраивает модель при их изменении?", options: ["Скульптинг", "Полигональное моделирование", "Инженерное (параметрическое) моделирование", "Процедурное моделирование"], correct: 2 },
    { text: "Для создания каких объектов чаще всего используется скульптинг?", options: ["Деталей машин", "Органических форм", "Архитектурных чертежей", "Электрических схем"], correct: 1 },
    { text: "Что такое процедурное моделирование?", options: ["Ручное создание каждого полигона", "Использование алгоритмов для автоматической генерации", "Моделирование только твёрдых тел", "Создание моделей по фотографиям"], correct: 1 },
    { text: "Твердотельное моделирование отличается от поверхностного тем, что:", options: ["Учитывает внутреннюю структуру", "Работает только с цветом", "Не требует размеров", "Используется только в играх"], correct: 0 },
    { text: "Какая CAD-программа является российской?", options: ["SolidWorks", "Fusion 360", "КОМПАС-3D", "FreeCAD"], correct: 2 },
    { text: "Какая программа является бесплатной с открытым кодом?", options: ["TinkerCAD", "FreeCAD", "Blender", "SolidWorks"], correct: 1 },
    { text: "Для чего лучше всего подходит Blender?", options: ["Инженерное моделирование", "Художественное моделирование", "Только для 3D-печати", "Чертежи"], correct: 1 },
    { text: "Какая программа работает прямо в браузере?", options: ["КОМПАС-3D", "SolidWorks", "TinkerCAD", "FreeCAD"], correct: 2 },
    { text: "Какой формат является самым распространённым для 3D-печати?", options: ["OBJ", "3MF", "STL", "STEP"], correct: 2 },
    { text: "Какой формат был разработан как альтернатива STL?", options: ["IGES", "3MF", "OBJ", "AMF"], correct: 1 },
    { text: "Какая проблема характерна для STL?", options: ["Не поддерживается слайсерами", "Отсутствие единиц измерения", "Нельзя использовать для печати", "Слишком большой размер"], correct: 1 },
    { text: "Какие форматы используются в инженерных CAD?", options: ["STL и OBJ", "STEP и IGES", "3MF и AMF", "PNG и JPG"], correct: 1 },
    { text: "Какова основная задача слайсера?", options: ["Создание 3D-модели", "Преобразование в G-code", "Печать модели", "Ремонт принтера"], correct: 1 },
    { text: "Что означает высота слоя в слайсере?", options: ["Скорость печати", "Толщину слоя", "Температуру стола", "Количество поддержек"], correct: 1 },
    { text: "Для чего служат поддержки в слайсере?", options: ["Для ускорения печати", "Для удержания нависающих элементов", "Для изменения цвета", "Для калибровки"], correct: 1 },
    { text: "Какой слайсер является самым популярным бесплатным?", options: ["Simplify3D", "Ultimaker Cura", "IdeaMaker", "AutoCAD"], correct: 1 },
    { text: "Что такое юбка, кайма и подложка?", options: ["Типы поддержек", "Элементы для адгезии", "Режимы охлаждения", "Форматы файлов"], correct: 1 },
    { text: "Что получается на выходе слайсера?", options: ["STL", "OBJ", "G-code", "3MF"], correct: 2 },
    { text: "Почему важно учитывать нависающие элементы при проектировании?", options: ["Увеличивают прочность", "Без поддержек материал не удержится", "Ускоряют печать", "Улучшают вид"], correct: 1 },
    { text: "Что такое допуски в 3D-печати?", options: ["Разрешение принтера", "Зазоры между деталями", "Температура печати", "Толщина слоя"], correct: 1 },
    { text: "Для чего используется макетирование?", options: ["Для окончательного производства", "Для быстрой проверки идеи", "Только для демонстрации", "Вместо моделирования"], correct: 1 },
    { text: "Как снизить расход материала?", options: ["Сплошное заполнение", "Решётчатые структуры", "Увеличение слоя", "Отказ от поддержек"], correct: 1 },
    { text: "Когда нужно модульное проектирование?", options: ["При простой геометрии", "Когда модель больше принтера", "Только для декора", "Никогда"], correct: 1 },
    { text: "Что такое визуальный макет?", options: ["Модель для эксплуатации", "Для оценки внешнего вида", "Финальное изделие", "Чертёж"], correct: 1 },
    { text: "Какая технология даёт самую гладкую поверхность?", options: ["FDM", "SLA/DLP", "SLS", "Все одинаково"], correct: 1 },
    { text: "Что такое G-code?", options: ["Формат модели", "Управляющий код для принтера", "Тип пластика", "Название слайсера"], correct: 1 },
    { text: "Какой параметр влияет на прочность детали?", options: ["Цвет пластика", "Плотность заполнения", "Бренд принтера", "Формат файла"], correct: 1 },
    { text: "Что такое ретракция?", options: ["Охлаждение", "Втягивание пластика", "Скорость печати", "Тип поддержек"], correct: 1 }
];

let userAnswers = new Array(34).fill(null);
let currentIndex = 0;

function loadQuestion(index) {
    const q = testQuestions[index];
    const container = document.getElementById('testQuestion');
    
    let optionsHtml = '';
    q.options.forEach((opt, optIndex) => {
        const isChecked = userAnswers[index] === optIndex;
        optionsHtml += `
            <div class="option" onclick="selectOption(${index}, ${optIndex})">
                <input type="radio" name="question" value="${optIndex}" id="opt${index}_${optIndex}" ${isChecked ? 'checked' : ''}>
                <label for="opt${index}_${optIndex}">${String.fromCharCode(65+optIndex)}. ${opt}</label>
            </div>
        `;
    });
    
    container.innerHTML = `
        <div class="question-text">${index+1}. ${q.text}</div>
        <div class="options-list">${optionsHtml}</div>
    `;
    
    document.getElementById('currentQuestion').textContent = index+1;
    document.getElementById('testProgressFill').style.width = `${((index+1)/34)*100}%`;
    
    const remaining = userAnswers.filter(a => a !== null).length;
    document.getElementById('correctCount').textContent = remaining;
    document.getElementById('remainingCount').textContent = 34 - remaining;
    
    document.getElementById('prevBtn').disabled = index === 0;
    const isLast = index === 33;
    document.getElementById('nextBtn').style.display = isLast ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = isLast ? 'inline-block' : 'none';
}

function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    const radio = document.getElementById(`opt${qIndex}_${optIndex}`);
    if (radio) radio.checked = true;
    
    const answered = userAnswers.filter(a => a !== null).length;
    document.getElementById('correctCount').textContent = answered;
    document.getElementById('remainingCount').textContent = 34 - answered;
    
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
}

function nextQuestion() {
    if (currentIndex < 33) {
        currentIndex++;
        loadQuestion(currentIndex);
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion(currentIndex);
    }
}

function calculateScore() {
    let correct = 0;
    for (let i = 0; i < testQuestions.length; i++) {
        if (userAnswers[i] === testQuestions[i].correct) {
            correct++;
        }
    }
    return correct;
}

function getGrade(score) {
    const percent = (score / 34) * 100;
    if (percent >= 90) return { grade: "Отлично (5)", message: "Вы превосходно усвоили материал! 🎉" };
    if (percent >= 75) return { grade: "Хорошо (4)", message: "Хороший результат, но есть к чему стремиться! 📚" };
    if (percent >= 60) return { grade: "Удовлетворительно (3)", message: "Неплохо, рекомендуем повторить некоторые темы. 📖" };
    return { grade: "Неудовлетворительно (2)", message: "Стоит повторить лекции и пройти тест заново. 💪" };
}

function showResults() {
    const score = calculateScore();
    const { grade, message } = getGrade(score);
    
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('resultGrade').textContent = grade;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultModal').style.display = 'flex';
    
    localStorage.setItem('lastTestScore', score);
    localStorage.setItem('lastTestGrade', grade);
}

function restartTest() {
    userAnswers = new Array(34).fill(null);
    currentIndex = 0;
    localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
    loadQuestion(0);
    document.getElementById('resultModal').style.display = 'none';
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