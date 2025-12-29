// Generate stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Reading Game Data
const readingData = [
    {
        story: "Di sebuah desa yang damai, hiduplah seorang petani bernama Pak Budi. Setiap pagi, ia pergi ke sawahnya untuk merawat tanaman padi. Pak Budi selalu bekerja dengan gembira meskipun lelah. Suatu hari, ia menemukan seekor burung kecil yang terluka di sawahnya. Dengan hati-hati, Pak Budi merawat burung itu hingga sembuh.",
        question: "Apa yang ditemukan Pak Budi di sawahnya?",
        options: ["Seekor kucing yang lapar", "Seekor burung yang terluka", "Tanaman padi yang rusak", "Harta karun tersembunyi"],
        correct: 1
    },
    {
        story: "Maya adalah siswi yang rajin belajar. Setiap hari ia selalu mengerjakan PR tepat waktu. Maya juga suka membantu teman-temannya yang kesulitan memahami pelajaran. Guru-guru di sekolah sangat bangga dengan Maya karena prestasinya yang baik dan sikap baiknya terhadap teman-teman.",
        question: "Mengapa guru-guru bangga dengan Maya?",
        options: ["Karena Maya selalu terlambat", "Karena prestasi dan sikap baiknya", "Karena Maya tidak pernah belajar", "Karena Maya suka bermain"],
        correct: 1
    },
    {
        story: "Andi dan Budi adalah sahabat karib sejak kecil. Mereka selalu bermain bersama setelah pulang sekolah. Suatu hari, Andi sakit dan tidak bisa pergi ke sekolah selama seminggu. Budi dengan setia mengunjungi Andi setiap hari dan membantunya belajar agar tidak ketinggalan pelajaran.",
        question: "Apa yang dilakukan Budi ketika Andi sakit?",
        options: ["Tidak mengunjungi Andi", "Mengunjungi dan membantu Andi belajar", "Pergi bermain dengan teman lain", "Lupa dengan Andi"],
        correct: 1
    },
    {
        story: "Keluarga Ibu Sari memiliki kebun sayur yang luas. Setiap pagi, mereka menyiram tanaman dengan penuh kasih sayang. Di kebun itu tumbuh berbagai macam sayuran seperti tomat, kangkung, bayam, dan cabe. Hasil panen mereka tidak hanya untuk dimakan sendiri, tetapi juga dibagikan kepada tetangga.",
        question: "Apa yang dilakukan keluarga Ibu Sari dengan hasil panen mereka?",
        options: ["Dijual semua ke pasar", "Dimakan sendiri dan dibagikan ke tetangga", "Dibuang begitu saja", "Disimpan sampai busuk"],
        correct: 1
    },
    {
        story: "Sekolah Dasar Harapan Bangsa mengadakan lomba kebersihan kelas. Semua siswa bekerja sama membersihkan kelas mereka. Mereka menyapu lantai, membersihkan jendela, dan menata meja dengan rapi. Kelas 5A memenangkan lomba karena kerja sama tim yang solid dan kelas mereka paling bersih.",
        question: "Mengapa kelas 5A memenangkan lomba?",
        options: ["Karena guru yang membantu", "Karena kerja sama tim yang solid", "Karena kelasnya paling besar", "Karena tidak ada kelas lain"],
        correct: 1
    }
];

// Writing Game Data
const writingTasks = [
    {
        prompt: "Tulislah sebuah cerita pendek tentang: 'Petualangan di Hutan Ajaib'",
        minWords: 50
    },
    {
        prompt: "Ceritakan pengalamanmu yang paling berkesan saat liburan!",
        minWords: 50
    },
    {
        prompt: "Bayangkan kamu memiliki kekuatan super. Tulislah apa yang akan kamu lakukan!",
        minWords: 50
    }
];

// Listening Game Data
const listeningData = [
    {
        text: "Dengarkan dengan seksama: Bunga mawar memiliki banyak warna, seperti merah, putih, kuning, dan pink. Mawar merah melambangkan cinta, mawar putih melambangkan kesucian, dan mawar kuning melambangkan persahabatan.",
        question: "Warna mawar apa yang melambangkan persahabatan?",
        options: ["Merah", "Putih", "Kuning", "Pink"],
        correct: 2
    },
    {
        text: "Dengarkan: Planet Bumi memiliki satelit alami bernama Bulan. Bulan mengelilingi Bumi dan membutuhkan waktu sekitar 29 hari untuk satu kali putaran. Bulan tidak memiliki cahaya sendiri, tetapi memantulkan cahaya matahari.",
        question: "Berapa lama Bulan mengelilingi Bumi?",
        options: ["7 hari", "14 hari", "29 hari", "365 hari"],
        correct: 2
    },
    {
        text: "Simak baik-baik: Air sangat penting untuk kehidupan. Tubuh manusia terdiri dari 70% air. Kita harus minum air putih minimal 8 gelas sehari agar tubuh tetap sehat dan terhindar dari dehidrasi.",
        question: "Berapa gelas air putih yang harus diminum setiap hari?",
        options: ["4 gelas", "6 gelas", "8 gelas", "10 gelas"],
        correct: 2
    },
    {
        text: "Perhatikan: Lebah adalah serangga yang sangat bermanfaat. Mereka membantu penyerbukan bunga dan menghasilkan madu. Dalam satu koloni lebah, terdapat ratu lebah, lebah pekerja, dan lebah jantan. Lebah pekerja yang paling banyak jumlahnya.",
        question: "Jenis lebah apa yang paling banyak dalam satu koloni?",
        options: ["Ratu lebah", "Lebah jantan", "Lebah pekerja", "Lebah penjaga"],
        correct: 2
    }
];

// Speaking Game Data
const speakingTexts = [
    "Kebersihan adalah sebagian dari iman. Mari kita jaga kebersihan lingkungan kita dengan membuang sampah pada tempatnya.",
    "Belajar dengan giat adalah kunci kesuksesan. Jangan pernah menyerah dalam mengejar cita-citamu!",
    "Persahabatan adalah harta yang berharga. Hargai teman-temanmu dan selalu berbuat baik kepada mereka.",
    "Membaca buku membuka jendela dunia. Semakin banyak kita membaca, semakin luas pengetahuan kita."
];

let currentReadingQ = 0;
let readingScore = 0;
let currentWritingTask = 0;
let currentListeningQ = 0;
let listeningScore = 0;
let currentSpeakingTask = 0;
let speakingComplete = 0;

function startGame(gameType) {
    document.getElementById('mainMenu').style.display = 'none';
    
    if (gameType === 'reading') {
        document.getElementById('readingGame').classList.add('active');
        loadReadingQuestion();
    } else if (gameType === 'writing') {
        document.getElementById('writingGame').classList.add('active');
        loadWritingTask();
    } else if (gameType === 'listening') {
        document.getElementById('listeningGame').classList.add('active');
        loadListeningQuestion();
    } else if (gameType === 'speaking') {
        document.getElementById('speakingGame').classList.add('active');
        loadSpeakingTask();
    }
}

function backToMenu() {
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('mainMenu').style.display = 'grid';
    
    // Reset games
    currentReadingQ = 0;
    readingScore = 0;
    currentWritingTask = 0;
    currentListeningQ = 0;
    listeningScore = 0;
    currentSpeakingTask = 0;
    speakingComplete = 0;
}

function loadReadingQuestion() {
    if (currentReadingQ >= readingData.length) {
        document.getElementById('readingContent').innerHTML = `
            <div class="result-message">
                <h2>🎉 Selamat! 🎉</h2>
                <p>Kamu telah menyelesaikan semua pertanyaan!</p>
                <p style="font-size: 2em; margin: 20px 0;">Skor Akhir: ${readingScore}/5</p>
                <button class="submit-btn" onclick="backToMenu()">Kembali ke Menu</button>
            </div>
        `;
        return;
    }

    const data = readingData[currentReadingQ];
    document.getElementById('readingQuestion').textContent = currentReadingQ + 1;
    document.getElementById('readingScore').textContent = readingScore;
    document.getElementById('readingProgress').style.width = ((currentReadingQ + 1) / 5 * 100) + '%';
    document.getElementById('readingProgress').textContent = ((currentReadingQ + 1) / 5 * 100) + '%';

    let optionsHTML = '';
    data.options.forEach((option, index) => {
        optionsHTML += `<button class="option-btn" onclick="checkReadingAnswer(${index})">${option}</button>`;
    });

    document.getElementById('readingContent').innerHTML = `
        <div class="speech-text">${data.story}</div>
        <div class="question-box">${data.question}</div>
        <div class="options">${optionsHTML}</div>
    `;
}

function checkReadingAnswer(selected) {
    const data = readingData[currentReadingQ];
    const buttons = document.querySelectorAll('#readingContent .option-btn');
    
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === data.correct) {
            btn.classList.add('correct');
        } else if (index === selected && selected !== data.correct) {
            btn.classList.add('wrong');
        }
    });

    if (selected === data.correct) {
        readingScore++;
    }

    setTimeout(() => {
        currentReadingQ++;
        loadReadingQuestion();
    }, 2000);
}

function loadWritingTask() {
    if (currentWritingTask >= writingTasks.length) {
        document.getElementById('writingContent').innerHTML = `
            <div class="result-message">
                <h2>🎉 Hebat! 🎉</h2>
                <p>Kamu telah menyelesaikan semua tugas menulis!</p>
                <p>Kreativitasmu luar biasa! Terus berlatih menulis ya!</p>
                <button class="submit-btn" onclick="backToMenu()">Kembali ke Menu</button>
            </div>
        `;
        return;
    }

    const task = writingTasks[currentWritingTask];
    document.getElementById('writingTask').textContent = currentWritingTask + 1;

    document.getElementById('writingContent').innerHTML = `
        <div class="question-box">${task.prompt}</div>
        <p style="margin: 10px 0; color: #666;">Minimal ${task.minWords} kata</p>
        <textarea class="input-area" id="writingInput" rows="10" placeholder="Mulai menulis ceritamu di sini..." oninput="updateWordCount()"></textarea>
        <button class="submit-btn" onclick="submitWriting()">Kirim Tulisan 📝</button>
    `;
}

function updateWordCount() {
    const text = document.getElementById('writingInput').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCount').textContent = words.length;
}

function submitWriting() {
    const text = document.getElementById('writingInput').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const task = writingTasks[currentWritingTask];

    if (words.length < task.minWords) {
        alert(`Tulisan kamu masih kurang! Minimal ${task.minWords} kata ya.`);
        return;
    }

    alert('🎉 Tulisan berhasil dikirim! Lanjut ke tugas berikutnya!');
    currentWritingTask++;
    loadWritingTask();
}

function loadListeningQuestion() {
    if (currentListeningQ >= listeningData.length) {
        document.getElementById('listeningContent').innerHTML = `
            <div class="result-message">
                <h2>🎉 Luar Biasa! 🎉</h2>
                <p>Kamu telah menyelesaikan semua soal menyimak!</p>
                <p style="font-size: 2em; margin: 20px 0;">Skor Akhir: ${listeningScore}/4</p>
                <button class="submit-btn" onclick="backToMenu()">Kembali ke Menu</button>
            </div>
        `;
        return;
    }

    const data = listeningData[currentListeningQ];
    document.getElementById('listeningQuestion').textContent = currentListeningQ + 1;
    document.getElementById('listeningScore').textContent = listeningScore;

    let optionsHTML = '';
    data.options.forEach((option, index) => {
        optionsHTML += `<button class="option-btn" onclick="checkListeningAnswer(${index})">${option}</button>`;
    });

    document.getElementById('listeningContent').innerHTML = `
        <div class="speech-text">
            <p style="font-size: 0.9em; color: #667eea; margin-bottom: 10px;">📻 Dengarkan baik-baik:</p>
            ${data.text}
        </div>
        <div class="question-box">${data.question}</div>
        <div class="options">${optionsHTML}</div>
    `;
}

function checkListeningAnswer(selected) {
    const data = listeningData[currentListeningQ];
    const buttons = document.querySelectorAll('#listeningContent .option-btn');
    
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === data.correct) {
            btn.classList.add('correct');
        } else if (index === selected && selected !== data.correct) {
            btn.classList.add('wrong');
        }
    });

    if (selected === data.correct) {
        listeningScore++;
    }

    setTimeout(() => {
        currentListeningQ++;
        loadListeningQuestion();
    }, 2000);
}

function loadSpeakingTask() {
    if (currentSpeakingTask >= speakingTexts.length) {
        document.getElementById('speakingContent').innerHTML = `
            <div class="result-message">
                <h2>🎉 Sempurna! 🎉</h2>
                <p>Kamu telah menyelesaikan semua latihan berbicara!</p>
                <p style="font-size: 1.3em; margin: 20px 0;">Total Teks Selesai: ${speakingComplete}/4</p>
                <p>Suaramu sangat bagus! Terus berlatih berbicara dengan percaya diri!</p>
                <button class="submit-btn" onclick="backToMenu()">Kembali ke Menu</button>
            </div>
        `;
        return;
    }

    const text = speakingTexts[currentSpeakingTask];
    document.getElementById('speakingTask').textContent = currentSpeakingTask + 1;
    document.getElementById('speakingComplete').textContent = speakingComplete;

    document.getElementById('speakingContent').innerHTML = `
        <div class="question-box">
            <p style="font-size: 0.9em; margin-bottom: 15px;">🎤 Bacalah teks berikut dengan lantang dan percaya diri:</p>
            <p style="font-size: 1.2em; line-height: 1.8;">${text}</p>
        </div>
        <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666; margin-bottom: 20px;">Bacalah dengan suara yang jelas dan intonasi yang tepat!</p>
            <button class="record-btn" onclick="completeSpeaking()">
                ✅ Selesai Membaca
            </button>
        </div>
        <div style="background: #f0f0f0; padding: 20px; border-radius: 15px; margin-top: 20px;">
            <h4 style="color: #667eea; margin-bottom: 10px;">💡 Tips Berbicara:</h4>
            <ul style="color: #666; line-height: 1.8;">
                <li>Bernapaslah dengan teratur</li>
                <li>Ucapkan setiap kata dengan jelas</li>
                <li>Jangan terburu-buru</li>
                <li>Tersenyumlah saat berbicara</li>
            </ul>
        </div>
    `;
}

function completeSpeaking() {
    speakingComplete++;
    alert('🎉 Bagus sekali! Kamu sudah membaca dengan baik!');
    currentSpeakingTask++;
    loadSpeakingTask();
}