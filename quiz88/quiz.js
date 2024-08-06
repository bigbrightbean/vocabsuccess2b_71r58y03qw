// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The spy planned to __________ his employers and sell the information to the enemy.",
        chinese_question: "间谍计划 __________ 他的雇主并将信息卖给敌人。",
        answers: [
                { option: "A", answer: "double-cross", chinese_answer: "出卖", chinese_romanization: "chūmài" },
                { option: "B", answer: "inform", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'double-cross' means to betray or deceive someone after initially pretending to support them." +
                "<br><br>" +
                "(B) 'inform' means to give someone facts or information." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(A) '出卖' 意味着在最初假装支持某人后背叛或欺骗某人。" +
                "<br><br>" +
                "(B) '通知' 意味着向某人提供事实或信息。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保护' 意味着使某人免受伤害。"
    },
    {
        id: 2,
        question: "They decided to __________ through the countryside during their vacation.",
        chinese_question: "他们决定在假期中在乡村 __________ 。",
        answers: [
            { option: "A", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" },
            { option: "B", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
            { option: "C", answer: "gallivant", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
            { option: "D", answer: "toil", chinese_answer: "辛劳", chinese_romanization: "xīnláo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gallivant' means to go around from one place to another in the pursuit of pleasure or entertainment." +
            "<br><br>" +
            "(A) 'work' means to be engaged in physical or mental activity in order to achieve a purpose or result." +
            "<br><br>" +
            "(B) 'sleep' means to rest with the eyes closed and the mind and body inactive." +
            "<br><br>" +
            "(D) 'toil' means to work extremely hard or incessantly.",
        chinese_explanation: "(C) '闲逛' 意味着为了追求娱乐或享受而到处闲逛。" +
            "<br><br>" +
            "(A) '工作' 意味着从事体力或脑力活动以达到目的或结果。" +
            "<br><br>" +
            "(B) '睡觉' 意味着闭上眼睛休息，身心处于不活跃状态。" +
            "<br><br>" +
            "(D) '辛劳' 意味着非常努力或不停地工作。"
    },
    {
        id: 3,
    question: "Researchers __________ that there might be a connection between diet and mental health.",
    chinese_question: "研究人员 __________ 饮食和心理健康之间可能存在联系。",
    answers: [
        { option: "A", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "B", answer: "postulate", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'postulate' means to suggest or assume the existence, fact, or truth of something as a basis for reasoning, discussion, or belief." +
        "<br><br>" +
        "(A) 'refute' means to prove a statement or theory to be wrong or false." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'deny' means to refuse to admit the truth or existence of something.",
    chinese_explanation: "(B) '假设' 意味着建议或假定某事物的存在、事实或真实性作为推理、讨论或信仰的基础。" +
        "<br><br>" +
        "(A) '反驳' 意味着证明某个陈述或理论是错误的或虚假的。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '否认' 意味着拒绝承认某事的真实性或存在。"
    },
    {
        id: 4,
    question: "The new policies aim to __________ outdated practices, streamlining operations and improving productivity.",
    chinese_question: "新政策旨在 __________ 过时的做法，简化操作并提高生产力。",
    answers: [
        { option: "A", answer: "reinforce", chinese_answer: "强化", chinese_romanization: "qiánghuà" },
        { option: "B", answer: "oust", chinese_answer: "淘汰", chinese_romanization: "táotài" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oust' figuratively means to replace or remove." +
        "<br><br>" +
        "(A) 'reinforce' means to strengthen." +
        "<br><br>" +
        "(C) 'ignore' means to pay no attention to." +
        "<br><br>" +
        "(D) 'maintain' means to keep.",
    chinese_explanation: "(B) '淘汰' 一词在比喻上意味着替代或移除。" +
        "<br><br>" +
        "(A) '强化' 意味着加强。" +
        "<br><br>" +
        "(C) '忽视' 意味着不注意。" +
        "<br><br>" +
        "(D) '维持' 意味着保持。"
    },
    {
        id: 5,
    question: "She began to __________ herself for not studying harder after failing the exam.",
    chinese_question: "考试不及格后，她开始 __________ 自己没有更努力地学习。",
    answers: [
        { option: "A", answer: "berate", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "B", answer: "console", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'berate' means to scold or criticize someone angrily." +
        "<br><br>" +
        "(B) 'console' means to comfort someone at a time of grief or disappointment." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake.",
    chinese_explanation: "(A) '责备' 意味着愤怒地责备或批评某人。" +
        "<br><br>" +
        "(B) '安慰' 意味着在悲伤或失望时安慰某人。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '原谅' 意味着停止对某人因冒犯、缺陷或错误而感到生气或怨恨。"
    },
    {
        id: 6,
        question: "The hikers were able to __________ themselves from the dense forest after hours of searching for a way out.",
        chinese_question: "经过几个小时的寻找出路，徒步旅行者终于 __________ 自己从密林中脱困。",
        answers: [
                { option: "A", answer: "extricate", chinese_answer: "解脱", chinese_romanization: "jiětūo" },
                { option: "B", answer: "entangle", chinese_answer: "纠缠", chinese_romanization: "jiūchán" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extricate' means to free someone or something from a constraint or difficulty." +
                "<br><br>" +
                "(B) 'entangle' means to cause to become twisted together or caught in." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '解脱' 意味着从约束或困难中解放某人或某物。" +
                "<br><br>" +
                "(B) '纠缠' 意味着使变得缠绕在一起或陷入困境。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 7,
        question: "The ominous music in the movie's opening scene __________ a tragic ending.",
        chinese_question: "电影开场中的不祥音乐 __________ 了一个悲剧的结局。",
        answers: [
                { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "B", answer: "foreshadowed", chinese_answer: "预示", chinese_romanization: "yùshì" },
                { option: "C", answer: "dismissed", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
                { option: "D", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'foreshadowed' means to indicate or hint at a future event." +
                "<br><br>" +
                "(A) 'revealed' means to make known to others." +
                "<br><br>" +
                "(C) 'dismissed' means to treat as unworthy of serious consideration." +
                "<br><br>" +
                "(D) 'clarified' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(B) '预示' 意味着暗示或预示未来的事件。" +
                "<br><br>" +
                "(A) '揭示' 意味着让别人知道。" +
                "<br><br>" +
                "(C) '忽略' 意味着认为不值得认真考虑。" +
                "<br><br>" +
                "(D) '澄清' 意味着使声明或情况不那么混乱，更容易理解。"
    },
    {
        id: 8,
    question: "The documentary aims to __________ the differences between urban and rural lifestyles.",
    chinese_question: "这部纪录片旨在 __________ 城市和农村生活方式之间的差异。",
    answers: [
        { option: "A", answer: "juxtapose", chinese_answer: "并列", chinese_romanization: "bìngliè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'juxtapose' means to place side by side for contrast." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '并列' 意味着并排放置以作对比。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 9,
        question: "The manager did not hesitate to __________ the employee for the repeated mistakes.",
        chinese_question: "经理毫不犹豫地 __________ 员工的重复错误。",
        answers: [
            { option: "A", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" },
            { option: "C", answer: "berate", chinese_answer: "责骂", chinese_romanization: "zémà" },
            { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'berate' means to scold or criticize someone angrily." +
            "<br><br>" +
            "(A) 'commend' means to praise formally or officially." +
            "<br><br>" +
            "(B) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake." +
            "<br><br>" +
            "(D) 'praise' means to express warm approval or admiration of.",
        chinese_explanation: "(C) '责骂' 意味着愤怒地责备或批评某人。" +
            "<br><br>" +
            "(A) '表扬' 意味着正式或官方地赞美。" +
            "<br><br>" +
            "(B) '原谅' 意味着停止对某人因冒犯、缺陷或错误而感到生气或怨恨。" +
            "<br><br>" +
            "(D) '赞美' 意味着表达温暖的赞同或钦佩。"
    },
    {
        id: 10,
        question: "To cover up the error, he decided to __________ a story that would explain the missing funds.",
        chinese_question: "为了掩盖错误，他决定 __________ 一个解释资金丢失的故事。",
        answers: [
                { option: "A", answer: "fabricate", chinese_answer: "编造", chinese_romanization: "biānzào" },
                { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
                "<br><br>" +
                "(B) 'reveal' means to make previously unknown or secret information known to others." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(A) '编造' 意味着发明或编造某物，通常是出于欺骗目的。" +
                "<br><br>" +
                "(B) '揭示' 意味着使以前未知或秘密的信息为人所知。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '澄清' 意味着使陈述或情况不那么混乱和更易理解。"
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
