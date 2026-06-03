// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Progress Management
function updateGlobalProgress() {
    const readLectures = JSON.parse(localStorage.getItem('readLectures') || '[]');
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
    
    const totalItems = 12; // 6 лекций + 6 заданий
    const completedItems = readLectures.length + completedTasks.length;
    const percentage = Math.round((completedItems / totalItems) * 100);
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        const dashoffset = 100 - percentage;
        progressFill.style.strokeDashoffset = dashoffset;
    }
    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }
    
    localStorage.setItem('courseProgress', percentage);
}

// Mark lecture as read
function initLectureButtons() {
    const readLectures = JSON.parse(localStorage.getItem('readLectures') || '[]');
    
    document.querySelectorAll('.mark-read-btn').forEach(btn => {
        const lectureNum = btn.getAttribute('data-lecture');
        if (readLectures.includes(lectureNum)) {
            btn.textContent = '✓ Прочитано';
            btn.style.background = 'var(--success)';
            btn.style.color = 'white';
            btn.disabled = true;
        }
        
        btn.addEventListener('click', () => {
            let reads = JSON.parse(localStorage.getItem('readLectures') || '[]');
            if (!reads.includes(lectureNum)) {
                reads.push(lectureNum);
                localStorage.setItem('readLectures', JSON.stringify(reads));
                btn.textContent = '✓ Прочитано';
                btn.style.background = 'var(--success)';
                btn.style.color = 'white';
                btn.disabled = true;
                updateGlobalProgress();
                updateLecturesProgress();
                updateTasksProgress();
            }
        });
    });
}

// Mark task as completed
function initTaskButtons() {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
    
    document.querySelectorAll('.mark-complete-btn').forEach(btn => {
        const taskNum = btn.getAttribute('data-task');
        if (completedTasks.includes(taskNum)) {
            btn.textContent = '✓ Выполнено';
            btn.style.background = 'var(--success)';
            btn.style.color = 'white';
            btn.disabled = true;
        }
        
        btn.addEventListener('click', () => {
            let completed = JSON.parse(localStorage.getItem('completedTasks') || '[]');
            if (!completed.includes(taskNum)) {
                completed.push(taskNum);
                localStorage.setItem('completedTasks', JSON.stringify(completed));
                btn.textContent = '✓ Выполнено';
                btn.style.background = 'var(--success)';
                btn.style.color = 'white';
                btn.disabled = true;
                updateGlobalProgress();
                updateLecturesProgress();
                updateTasksProgress();
            }
        });
    });
}

// Update lectures progress bar
function updateLecturesProgress() {
    const lecturesProgressFill = document.getElementById('lecturesProgressFill');
    const lecturesProgressPercent = document.getElementById('lecturesProgressPercent');
    
    if (lecturesProgressFill) {
        const readLectures = JSON.parse(localStorage.getItem('readLectures') || '[]');
        const percentage = Math.round((readLectures.length / 6) * 100);
        lecturesProgressFill.style.width = `${percentage}%`;
        if (lecturesProgressPercent) {
            lecturesProgressPercent.textContent = `${percentage}%`;
        }
    }
}

// Update tasks progress bar
function updateTasksProgress() {
    const tasksProgressFill = document.getElementById('tasksProgressFill');
    const tasksProgressPercent = document.getElementById('tasksProgressPercent');
    
    if (tasksProgressFill) {
        const completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
        const percentage = Math.round((completedTasks.length / 6) * 100);
        tasksProgressFill.style.width = `${percentage}%`;
        if (tasksProgressPercent) {
            tasksProgressPercent.textContent = `${percentage}%`;
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateGlobalProgress();
    initLectureButtons();
    initTaskButtons();
    updateLecturesProgress();
    updateTasksProgress();
});