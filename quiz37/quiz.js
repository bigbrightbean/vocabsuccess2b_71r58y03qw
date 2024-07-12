// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ commentary on the company's new policies, filled with biting humour, left no doubt about her disapproval.",
        chinese_question: "她对公司新政策的 __________ 评论，充满了尖刻的幽默，毫不掩饰她的不满。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "sardonic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "D", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'constructive' means serving a useful purpose; tending to build up.",
        chinese_explanation: "(C) '讽刺的' 意味着冷嘲的或愤世嫉俗的。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "(B) '热情的' 意味着表现出强烈和热切的享受、兴趣或认可。" +
            "<br><br>" +
            "(D) '建设性的' 意味着起有用的作用；倾向于建立的。"
    },
    {
        id: 2,
    question: "She received a __________ opportunity to study abroad on a full scholarship.",
    chinese_question: "她获得了一个 __________ 的机会，可以全额奖学金出国留学。",
    answers: [
        { option: "A", answer: "rare", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
        { option: "B", answer: "usual", chinese_answer: "通常", chinese_romanization: "tōngcháng" },
        { option: "C", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" },
        { option: "D", answer: "frequent", chinese_answer: "频繁", chinese_romanization: "pínfán" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rare' means not occurring very often." +
        "<br><br>" +
        "(B) 'usual' means habitually or typically occurring or done." +
        "<br><br>" +
        "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
        "<br><br>" +
        "(D) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession.",
    chinese_explanation: "(A) '稀有' 意味着不常发生。" +
        "<br><br>" +
        "(B) '通常' 意味着习惯性或典型地发生或完成的。" +
        "<br><br>" +
        "(C) '典型' 意味着具有某种类型的人的或物的独特品质。" +
        "<br><br>" +
        "(D) '频繁' 意味着在许多情况下，或连续发生或完成。"
    },
    {
        id: 3,
    question: "His __________ behavior at the party, including insulting guests and causing a scene, led to his immediate expulsion.",
    chinese_question: "他在聚会上的 __________ 行为，包括侮辱客人和制造混乱，导致他被立即驱逐。",
    answers: [
        { option: "A", answer: "odious", chinese_answer: "可憎的", chinese_romanization: "kězēng de" },
        { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "C", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
        { option: "D", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'odious' means extremely unpleasant; repulsive." +
        "<br><br>" +
        "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
        "<br><br>" +
        "(C) 'delightful' means causing delight; charming." +
        "<br><br>" +
        "(D) 'charming' means pleasant or attractive.",
    chinese_explanation: "(A) '可憎的' 意味着极其令人不快的；令人反感的。" +
        "<br><br>" +
        "(B) '愉快的' 意味着给人一种愉快的满足感或享受。" +
        "<br><br>" +
        "(C) '令人愉快的' 意味着引起愉悦的；迷人的。" +
        "<br><br>" +
        "(D) '迷人的' 意味着令人愉快或有吸引力的。"
    },
    {
        id: 4,
        question: "The __________ influence of technology in modern life can be seen in almost every aspect of our daily activities.",
        chinese_question: "技术在现代生活中的 __________ 影响可以在我们日常活动的几乎每个方面看到。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "pervasive", chinese_answer: "弥漫的", chinese_romanization: "mímàn de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pervasive' means spreading widely throughout an area or a group of people." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree; negligible.",
        chinese_explanation: "(C) '弥漫的' 意味着在一个区域或一群人中广泛传播的。" +
            "<br><br>" +
            "(A) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(B) '零星的' 意味着不规则间隔或仅在少数地方发生的；分散的或孤立的。" +
            "<br><br>" +
            "(D) '最小的' 意味着最小的数量、数量或程度的；微不足道的。"
    },
    {
        id: 5,
    question: "His __________ lifestyle allowed him to focus deeply on his art, free from distractions.",
    chinese_question: "他的 __________ 生活方式使他能够专注于他的艺术，不受干扰。",
    answers: [
        { option: "A", answer: "bustling", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
        { option: "B", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" },
        { option: "C", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
        { option: "D", answer: "busy", chinese_answer: "繁忙的", chinese_romanization: "fánmáng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reclusive' means avoiding the company of other people; solitary." +
        "<br><br>" +
        "(A) 'bustling' means full of activity." +
        "<br><br>" +
        "(C) 'lively' means full of life and energy." +
        "<br><br>" +
        "(D) 'busy' means having a great deal to do.",
    chinese_explanation: "(B) '隐居的' 意味着避免与他人交往；孤独的。" +
        "<br><br>" +
        "(A) '喧闹的' 意味着充满活动的。" +
        "<br><br>" +
        "(C) '活跃的' 意味着充满生命力和活力的。" +
        "<br><br>" +
        "(D) '繁忙的' 意味着有很多事情要做的。"
    },
    {
        id: 6,
    question: "His __________ explanation for the sudden change in plans convinced everyone that it was the best course of action.",
    chinese_question: "他对计划突然改变的 __________ 解释让所有人相信这是最好的行动方案。",
    answers: [
        { option: "A", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
        { option: "B", answer: "emotional", chinese_answer: "情感的", chinese_romanization: "qínggǎn de" },
        { option: "C", answer: "irrational", chinese_answer: "不理智的", chinese_romanization: "bù lǐzhì de" },
        { option: "D", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rational' means based on or in accordance with reason or logic." +
        "<br><br>" +
        "(B) 'emotional' means relating to a person's emotions." +
        "<br><br>" +
        "(C) 'irrational' means not logical or reasonable." +
        "<br><br>" +
        "(D) 'impulsive' means acting or done without forethought.",
    chinese_explanation: "(A) '理性的' 意味着基于或符合理性或逻辑的。" +
        "<br><br>" +
        "(B) '情感的' 意味着与一个人的情感有关的。" +
        "<br><br>" +
        "(C) '不理智的' 意味着不合逻辑或不合理的。" +
        "<br><br>" +
        "(D) '冲动的' 意味着未经深思熟虑的行为或行动。"
    },
    {
        id: 7,
    question: "She felt it was __________ to ask for a raise during the company's financial downturn.",
    chinese_question: "她觉得在公司财务困难期间要求加薪是 __________ 的。",
    answers: [
        { option: "A", answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
        { option: "B", answer: "presumptuous", chinese_answer: "放肆的", chinese_romanization: "fàngsì de" },
        { option: "C", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
        { option: "D", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'presumptuous' means failing to observe the limits of what is permitted or appropriate; overconfident or arrogant." +
        "<br><br>" +
        "(A) 'appropriate' means suitable or proper in the circumstances." +
        "<br><br>" +
        "(C) 'prudent' means acting with or showing care and thought for the future." +
        "<br><br>" +
        "(D) 'considerate' means careful not to cause inconvenience or hurt to others.",
    chinese_explanation: "(B) '放肆的' 意味着未能遵守许可或适当的限度；过于自信或傲慢的。" +
        "<br><br>" +
        "(A) '合适的' 意味着在这种情况下合适的或适当的。" +
        "<br><br>" +
        "(C) '谨慎的' 意味着对未来小心或考虑周到的行动。" +
        "<br><br>" +
        "(D) '体贴的' 意味着小心不引起别人不便或伤害的。"
    },
    {
        id: 8,
    question: "The new laptop is extremely __________, making it easy to carry around for work or travel.",
    chinese_question: "这款新笔记本电脑非常 __________，便于随身携带用于工作或旅行。",
    answers: [
        { option: "A", answer: "portable", chinese_answer: "便携的", chinese_romanization: "biànxié de" },
        { option: "B", answer: "cumbersome", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
        { option: "C", answer: "stationary", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
        { option: "D", answer: "immobile", chinese_answer: "不动的", chinese_romanization: "bù dòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'portable' means able to be easily carried or moved." +
        "<br><br>" +
        "(B) 'cumbersome' means large or heavy and therefore difficult to carry or use." +
        "<br><br>" +
        "(C) 'stationary' means not moving or not intended to be moved." +
        "<br><br>" +
        "(D) 'immobile' means not moving; motionless.",
    chinese_explanation: "(A) '便携的' 意味着能够轻松携带或移动的。" +
        "<br><br>" +
        "(B) '笨重的' 意味着大或重，因此难以携带或使用的。" +
        "<br><br>" +
        "(C) '固定的' 意味着不移动或不打算移动的。" +
        "<br><br>" +
        "(D) '不动的' 意味着不动的；静止的。"
    },
    {
        id: 9,
        question: "Her __________ words helped ease his grief during the difficult time.",
        chinese_question: "她的 __________ 话语帮助他在困难时期减轻了悲伤。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
            { option: "C", answer: "sympathetic", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sympathetic' means feeling, showing, or expressing sympathy." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(B) 'critical' means expressing adverse or disapproving comments." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '富有同情心的' 意味着感受、表现或表达同情的。" +
            "<br><br>" +
            "(A) '严厉的' 意味着让感官不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(B) '批评的' 意味着表达不赞成或不满意的评论。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情的。"
    },
    {
        id: 10,
        question: "The children were in a __________ mood after hearing that school was canceled due to the snowstorm, their laughter and excitement filling the air.",
        chinese_question: "听说因为暴风雪学校停课，孩子们心情非常 __________，笑声和兴奋充满了空气。",
        answers: [
            { option: "A", answer: "buoyant", chinese_answer: "开心的", chinese_romanization: "kāixīn de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "D", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(C) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(A) '开心的' 意味着快乐和乐观的。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着黑暗或光线不足，尤其是看起来令人沮丧或恐怖的。" +
            "<br><br>" +
            "(C) '压抑的' 意味着安静的，相当深思熟虑或情绪低落的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着颜色或色调暗淡的；阴郁的。"
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
