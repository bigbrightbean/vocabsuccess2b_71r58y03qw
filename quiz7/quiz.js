// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ nature made him popular at parties and social events.",
        chinese_question: "他__________的性格使他在聚会和社交活动中很受欢迎。",
        answers: [
            { option: "A", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
            { option: "B", answer: "social", chinese_answer: "善于社交的", chinese_romanization: "shànyú shèjiāo de" },
            { option: "C", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" },
            { option: "D", answer: "introverted", chinese_answer: "内向的", chinese_romanization: "nèixiàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'social' means relating to society or its organization." +
            "<br><br>" +
            "(A) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(C) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people." +
            "<br><br>" +
            "(D) 'introverted' means shy, reticent, and typically self-centered.",
        chinese_explanation: "(B) '善于社交的' 意味着与社会或其组织有关的。" +
            "<br><br>" +
            "(A) '矜持的' 意味着慢慢地透露情感或意见的。" +
            "<br><br>" +
            "(C) '害羞的' 意味着在其他人面前矜持或表现出紧张或胆怯的。" +
            "<br><br>" +
            "(D) '内向的' 意味着害羞、沉默寡言且通常以自我为中心的。"
    },
    {
        id: 2,
    question: "His __________ hair stuck out in all directions, making it difficult for him to maintain a neat appearance.",
    chinese_question: "他的 __________ 头发向四面八方伸展，使他难以保持整洁的外表。",
    answers: [
        { option: "A", answer: "tidy", chinese_answer: "整齐的", chinese_romanization: "zhěngqí de" },
        { option: "B", answer: "unruly", chinese_answer: "不守规矩的", chinese_romanization: "bù shǒu guījǔ de" },
        { option: "C", answer: "manageable", chinese_answer: "易管理的", chinese_romanization: "yì guǎnlǐ de" },
        { option: "D", answer: "controlled", chinese_answer: "受控的", chinese_romanization: "shòu kòng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unruly' means disorderly and disruptive and not amenable to discipline or control." +
        "<br><br>" +
        "(A) 'tidy' means arranged neatly and in order." +
        "<br><br>" +
        "(C) 'manageable' means able to be managed, controlled, or accomplished without great difficulty." +
        "<br><br>" +
        "(D) 'controlled' means having one's emotions or actions under control.",
    chinese_explanation: "(B) '不守规矩的' 意味着无纪律的和破坏性的，不服从管教或控制。" +
        "<br><br>" +
        "(A) '整齐的' 意味着整齐有序地排列。" +
        "<br><br>" +
        "(C) '易管理的' 意味着能够在没有太大困难的情况下进行管理、控制或完成。" +
        "<br><br>" +
        "(D) '受控的' 意味着情绪或行动受到控制。"
    },
    {
        id: 3,
        question: "The ringing of the church bells is __________ of a new beginning, marking the start of the wedding ceremony.",
        chinese_question: "教堂钟声的响起是新开始的 __________ 象征，标志着婚礼仪式的开始。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "symbolic", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "meaningless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'symbolic' means serving as a symbol." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'meaningless' means without meaning, significance, purpose, or value.",
        chinese_explanation: "(B) '象征性的' 意味着作为象征的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '无意义的' 意味着没有意义、重要性、目的或价值的。"
    },
    {
        id: 4,
        question: "His speech had a __________ impact on the audience, leaving them deeply inspired and motivated.",
        chinese_question: "他的演讲对观众产生了 __________ 的影响，让他们深受鼓舞和激励。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "B", answer: "slight", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "C", answer: "tremendous", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tremendous' means very great in amount, scale, or intensity." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '巨大' 意味着数量、规模或强度非常大。" +
            "<br><br>" +
            "(A) '微不足道' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '轻微' 意味着程度很小；不重要的。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 5,
        question: "Burning the national flag was seen as a __________ act that deeply offended many citizens.",
        chinese_question: "焚烧国旗被视为一种 __________ 的行为，深深冒犯了许多公民。",
        answers: [
            { option: "A", answer: "patriotic", chinese_answer: "爱国的", chinese_romanization: "àiguó de" },
            { option: "B", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "D", answer: "lawful", chinese_answer: "合法的", chinese_romanization: "héfǎ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacrilegious' means involving or committing sacrilege; disrespecting something considered sacred." +
            "<br><br>" +
            "(A) 'patriotic' means having or expressing devotion to and vigorous support for one's country." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'lawful' means conforming to, permitted by, or recognized by law or rules.",
        chinese_explanation: "(B) '亵渎的' 意味着涉及或犯亵渎罪；不尊重被认为是神圣的东西。" +
            "<br><br>" +
            "(A) '爱国的' 意味着表达对自己国家的忠诚和积极支持的。" +
            "<br><br>" +
            "(C) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(D) '合法的' 意味着符合、被允许或被法律或规则认可的。"
    },
    {
        id: 6,
        question: "His __________ claim to be an expert in wine tasting was quickly dismissed by the real connoisseurs.",
        chinese_question: "他自称是品酒专家的 __________ 言论很快被真正的行家否定了。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "pretentious", chinese_answer: "做作的", chinese_romanization: "zuòzuò de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(B) '做作的' 意味着通过表现出比实际拥有的更大的重要性、才能、文化等来试图给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着在评价自己的能力或成就时不自以为是的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着某物真正是所说的样子；真实的。" +
            "<br><br>" +
            "(D) '诚实的' 意味着没有欺骗的；诚实和真诚的。"
    },
    {
        id: 7,
        question: "On a __________ decision, they decided to take a road trip to the mountains without any prior planning.",
        chinese_question: "他们在一个 __________ 的决定下，决定没有任何事先计划地开车去山区旅行。",
        answers: [
            { option: "A", answer: "spur-of-the-moment", chinese_answer: "心血来潮的", chinese_romanization: "xīnxuè láicháo de" },
            { option: "B", answer: "premeditated", chinese_answer: "预谋的", chinese_romanization: "yùmóu de" },
            { option: "C", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "D", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spur-of-the-moment' means occurring or done without advance preparation or planning." +
            "<br><br>" +
            "(B) 'premeditated' means considered or planned before an act is done." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(A) '心血来潮的' 意味着在没有提前准备或计划的情况下发生或完成的。" +
            "<br><br>" +
            "(B) '预谋的' 意味着在行为发生之前考虑或计划好的。" +
            "<br><br>" +
            "(C) '故意的' 意味着有意识和故意做出的。" +
            "<br><br>" +
            "(D) '计划好的' 意味着提前决定和安排好的。"
    },
    {
        id: 8,
    question: "The __________ concept of combining art with technology opened new possibilities for creative expression.",
    chinese_question: "将艺术与科技相结合的 __________ 概念为创造性表达开辟了新的可能性。",
    answers: [
        { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "B", answer: "novel", chinese_answer: "新颖的", chinese_romanization: "xīnyǐng de" },
        { option: "C", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" },
        { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'novel' means new or unusual in an interesting way." +
        "<br><br>" +
        "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(C) 'usual' means habitually or typically occurring or done; customary." +
        "<br><br>" +
        "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
    chinese_explanation: "(B) '新颖的' 意味着新的或不同寻常的，有趣的。" +
        "<br><br>" +
        "(A) '传统的' 意味着基于或符合一般做法或信念的。" +
        "<br><br>" +
        "(C) '通常的' 意味着习惯性或典型地发生或完成的；习惯性的。" +
        "<br><br>" +
        "(D) '典型的' 意味着具有某一特定类型的人或事物的独特品质的。"
    },
    {
        id: 9,
    question: "Despite the celebrations around him, his __________ mood was evident as he isolated himself from the group.",
    chinese_question: "尽管周围都是庆祝活动，但他的 __________ 情绪显而易见，因为他把自己孤立在群体之外。",
    answers: [
        { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
        { option: "B", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
        { option: "C", answer: "jubilant", chinese_answer: "欢欣鼓舞的", chinese_romanization: "huānxīn gǔwǔ de" },
        { option: "D", answer: "ecstatic", chinese_answer: "狂喜的", chinese_romanization: "kuángxǐ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'morose' means sullen and ill-tempered." +
        "<br><br>" +
        "(A) 'elated' means very happy or proud; jubilant; in high spirits." +
        "<br><br>" +
        "(C) 'jubilant' means feeling or expressing great happiness and triumph." +
        "<br><br>" +
        "(D) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement.",
    chinese_explanation: "(B) '忧郁的' 意味着闷闷不乐的和脾气暴躁的。" +
        "<br><br>" +
        "(A) '兴高采烈的' 意味着非常高兴或自豪；欢欣鼓舞；情绪高昂的。" +
        "<br><br>" +
        "(C) '欢欣鼓舞的' 意味着感到或表现出极大的快乐和胜利。" +
        "<br><br>" +
        "(D) '狂喜的' 意味着感到或表现出极大的快乐或愉快的兴奋。"
    },
    {
        id: 10,
    question: "Her __________ commitment to her studies ensured she always performed well academically.",
    chinese_question: "她对学习的__________承诺确保了她总是能在学术上表现出色。",
    answers: [
        { option: "A", answer: "playful", chinese_answer: "爱玩的", chinese_romanization: "àiwán de" },
        { option: "B", answer: "joking", chinese_answer: "开玩笑的", chinese_romanization: "kāi wánxiào de" },
        { option: "C", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "D", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wúlǜ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'serious' means solemn or thoughtful in character or manner. Figuratively, it can mean being deeply engaged or earnest in a pursuit." +
        "<br><br>" +
        "(A) 'playful' means fond of games and amusement; lighthearted." +
        "<br><br>" +
        "(B) 'joking' means making jokes; humorous or flippant." +
        "<br><br>" +
        "(D) 'lighthearted' means cheerful and carefree.",
    chinese_explanation: "(C) '严肃的'一词意味着性格或举止严肃或深思熟虑的。比喻地，它可以表示在追求中深深投入或认真的。" +
        "<br><br>" +
        "(A) '爱玩的' 意味着喜欢游戏和娱乐的；无忧无虑的。" +
        "<br><br>" +
        "(B) '开玩笑的' 意味着开玩笑的；幽默或轻率的。" +
        "<br><br>" +
        "(D) '无忧无虑的' 意味着愉快和无忧无虑的。"
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
