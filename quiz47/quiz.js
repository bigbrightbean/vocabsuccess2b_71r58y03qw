// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ birds flew south for the winter, following their annual route to warmer climates.",
    chinese_question: "__________ 鸟类在冬季飞往南方，沿着它们的年度路线迁徙到温暖的气候区。",
    answers: [
        { option: "A", answer: "migratory", chinese_answer: "迁徙的", chinese_romanization: "qiānxǐ de" },
        { option: "B", answer: "stationary", chinese_answer: "静止的", chinese_romanization: "jìngzhǐ de" },
        { option: "C", answer: "local", chinese_answer: "当地的", chinese_romanization: "dāngdì de" },
        { option: "D", answer: "settled", chinese_answer: "定居的", chinese_romanization: "dìngjū de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'migratory' means relating to, or characterized by migration." +
        "<br><br>" +
        "(B) 'stationary' means not moving or not intended to be moved." +
        "<br><br>" +
        "(C) 'local' means relating to or occurring in a particular area, city, or town." +
        "<br><br>" +
        "(D) 'settled' means to establish a permanent place to live.",
    chinese_explanation: "(A) '迁徙的' 意味着与迁徙有关的或以迁徙为特征的。" +
        "<br><br>" +
        "(B) '静止的' 意味着不动的或不打算移动的。" +
        "<br><br>" +
        "(C) '当地的' 意味着与特定区域、城市或城镇有关的或发生在特定区域、城市或城镇的。" +
        "<br><br>" +
        "(D) '定居的' 意味着建立永久居住地的。"
    },
    {
        id: 2,
        question: "The children were __________ after winning the championship, laughing and cheering with excitement.",
        chinese_question: "孩子们在赢得冠军后非常 __________，笑着和欢呼着兴奋不已。",
        answers: [
            { option: "A", answer: "sorrowful", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "C", answer: "gleeful", chinese_answer: "欢欣", chinese_romanization: "huānxīn" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gleeful' means exuberantly or triumphantly joyful." +
            "<br><br>" +
            "(A) 'sorrowful' means feeling or showing grief." +
            "<br><br>" +
            "(B) 'gloomy' means feeling distressed or pessimistic." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '欢欣' 意味着非常开心或胜利地快乐。" +
            "<br><br>" +
            "(A) '悲伤' 意味着感到或表现出悲伤。" +
            "<br><br>" +
            "(B) '忧郁' 意味着感到沮丧或悲观。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 3,
        question: "The construction of the new stadium was a __________ undertaking, requiring years of planning and millions of dollars in funding.",
        chinese_question: "新体育场的建设是一项 __________ 的工程，需要数年的规划和数百万美元的资金。",
        answers: [
            { option: "A", answer: "mammoth", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mammoth' means huge; gigantic." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(A) '巨大的' 意味着巨大的；庞大的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就持谦逊态度的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 4,
        question: "She felt __________ for the opportunity to travel and experience different cultures, which broadened her perspective on life, because her friends could only afford to read about such experiences.",
        chinese_question: "她对有机会旅行和体验不同文化感到__________，这拓宽了她对生活的看法，因为她的朋友们只能负担得起阅读这样的经历。",
        answers: [
            { option: "A", answer: "grateful", chinese_answer: "感激的", chinese_romanization: "gǎnjī de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "unappreciative", chinese_answer: "不感激的", chinese_romanization: "bù gǎnjī de" },
            { option: "D", answer: "resentful", chinese_answer: "愤恨的", chinese_romanization: "fènhèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grateful' means feeling or showing an appreciation of kindness; thankful." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'unappreciative' means not feeling or showing appreciation." +
            "<br><br>" +
            "(D) 'resentful' means feeling or expressing bitterness or indignation at having been treated unfairly.",
        chinese_explanation: "(A) '感激的' 意味着感到或表现出对善意的感激；感恩的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '不感激的' 意味着没有感到或表现出感激之情的。" +
            "<br><br>" +
            "(D) '愤恨的' 意味着对受到不公平对待感到愤怒或愤慨。"
    },
    {
        id: 5,
    question: "She is __________ to the needs of her friends and always offers support when needed.",
    chinese_question: "她对朋友的需求非常 __________，总是在需要时提供支持。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
        { option: "C", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
        { option: "D", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'unaware' means having no knowledge of a situation or fact." +
        "<br><br>" +
        "(D) 'distant' means far away in space or time.",
    chinese_explanation: "(B) “敏感的” 意味着对轻微的变化、信号或影响反应迅速。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(C) '不知道的' 意味着对情况或事实没有了解。" +
        "<br><br>" +
        "(D) '遥远的' 意味着在空间或时间上很远。"
    },
    {
        id: 6,
        question: "The company made an __________ profit this year, surpassing all previous records.",
        chinese_question: "公司今年获得了 __________ 的利润，超过了所有以前的记录。",
        answers: [
            { option: "A", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "B", answer: "modest", chinese_answer: "适中", chinese_romanization: "shìzhōng" },
            { option: "C", answer: "slight", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "D", answer: "enormous", chinese_answer: "巨大", chinese_romanization: "jùdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enormous' means very large in size, quantity, or extent." +
            "<br><br>" +
            "(A) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(D) '巨大' 意味着尺寸、数量或程度非常大。" +
            "<br><br>" +
            "(A) '最小' 意味着最小的数量、数量或程度。" +
            "<br><br>" +
            "(B) '适中' 意味着对自己能力或成就的估计不夸张或适中。" +
            "<br><br>" +
            "(C) '轻微' 意味着程度小；不重要。"
    },
    {
        id: 7,
        question: "Her health was still __________ after the long illness and required her to rest and receive gentle care before she could fully recover.",
        chinese_question: "长时间的病痛后，她的健康仍然__________，需要她休息和温和的护理才能完全康复。",
        answers: [
            { option: "A", answer: "robust", chinese_answer: "强壮", chinese_romanization: "qiángzhuàng" },
            { option: "B", answer: "vigorous", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "C", answer: "resilient", chinese_answer: "有韧性", chinese_romanization: "yǒu rènxìng" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(A) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(B) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(C) 'resilient' means able to withstand or recover quickly from difficult conditions.",
        chinese_explanation: "(D) '脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(A) '强壮' 意味着强壮和健康；有活力。" +
            "<br><br>" +
            "(B) '精力充沛' 意味着强壮、健康且充满能量。" +
            "<br><br>" +
            "(C) '有韧性' 意味着能够承受或迅速从困境中恢复。"
    },
    {
        id: 8,
    question: "She has a __________ habit of talking to her plants as if they were people.",
    chinese_question: "她有一个 __________ 的习惯，把植物当作人一样对话。",
    answers: [
        { option: "A", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
        { option: "B", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
        { option: "C", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
        { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'peculiar' means strange or unusual." +
        "<br><br>" +
        "(B) 'normal' means conforming to a standard; usual, typical, or expected." +
        "<br><br>" +
        "(C) 'standard' means used or accepted as normal or average." +
        "<br><br>" +
        "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
    chinese_explanation: "(A) “奇怪的” 意味着奇怪或不寻常。" +
        "<br><br>" +
        "(B) '正常的' 意味着符合标准的；通常的，典型的，或预期的。" +
        "<br><br>" +
        "(C) '标准的' 意味着被用作正常或平均的。" +
        "<br><br>" +
        "(D) '典型的' 意味着具有某种特定类型的人或物的独特品质。"
    },
    {
        id: 9,
    question: "Despite the heavy subject matter, the lecturer managed to keep his talk __________ and engaging.",
    chinese_question: "尽管主题沉重，但讲师设法使他的演讲保持 __________ 和引人入胜。",
    answers: [
        { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
        { option: "B", answer: "scintillating", chinese_answer: "才华横溢的", chinese_romanization: "cáihuá héngyì de" },
        { option: "C", answer: "drab", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
        { option: "D", answer: "wearisome", chinese_answer: "令人疲倦的", chinese_romanization: "lìng rén píjuàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scintillating' means brilliantly and excitingly clever or skillful." +
        "<br><br>" +
        "(A) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
        "<br><br>" +
        "(C) 'drab' means lacking brightness or interest; drearily dull." +
        "<br><br>" +
        "(D) 'wearisome' means causing one to feel tired or bored.",
    chinese_explanation: "(B) '才华横溢的' 意味着极其聪明和令人兴奋的巧妙或技巧。" +
        "<br><br>" +
        "(A) '单调的' 意味着乏味、冗长和重复的；缺乏变化和兴趣的。" +
        "<br><br>" +
        "(C) '枯燥的' 意味着缺乏亮度或兴趣的；沉闷的。" +
        "<br><br>" +
        "(D) '令人疲倦的' 意味着使人感到疲倦或厌倦的。"
    },
    {
        id: 10,
    question: "She was __________ to believe that everyone she met had good intentions, often putting herself at risk.",
    chinese_question: "她 __________ 地认为她遇到的每个人都有好意，这往往让她陷入危险。",
    answers: [
        { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
        { option: "B", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
        { option: "C", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
        { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'naive' means showing a lack of experience, wisdom, or judgment; innocent." +
        "<br><br>" +
        "(B) 'skeptical' means not easily convinced; having doubts or reservations." +
        "<br><br>" +
        "(C) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(D) 'cautious' means careful to avoid potential problems or dangers.",
    chinese_explanation: "(A) '天真的' 意味着缺乏经验、智慧或判断力；无辜的。" +
        "<br><br>" +
        "(B) '怀疑的' 意味着不容易相信的；有疑虑或保留的。" +
        "<br><br>" +
        "(C) '精明的' 意味着具有或表现出敏锐的判断力；精明的。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着小心避免潜在的问题或危险的。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
