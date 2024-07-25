// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The repeated exposure to violence in media can __________ aggressive behaviours in some individuals.",
        chinese_question: "媒体中反复出现的暴力内容会 __________ 某些人的攻击行为。",
        answers: [
            { option: "A", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "B", answer: "mitigate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' figuratively means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'mitigate' means to make less severe, serious, or painful." +
            "<br><br>" +
            "(C) 'reduce' means to make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(A) '加强' 在此语境下比喻加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '缓解' 意味着使某事物减轻严重性、严重性或痛苦。" +
            "<br><br>" +
            "(C) '减少' 意味着使某物变小或减少数量、程度或大小。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 2,
        question: "The hacker tried to __________ the security system to gain unauthorized access.",
        chinese_question: "黑客试图 __________ 安全系统以获得未经授权的访问权限。",
        answers: [
            { option: "A", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "ràoguò" },
            { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumvent' means to find a way around (an obstacle)." +
            "<br><br>" +
            "(B) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '绕过' 意味着找到绕过（障碍物）的办法。" +
            "<br><br>" +
            "(B) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(C) '跟随' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
        question: "The aspiring artist __________ the fame and recognition of established painters.",
        chinese_question: "这位有抱负的艺术家 __________ 成名画家的声誉和认可。",
        answers: [
            { option: "A", answer: "coveted", chinese_answer: "垂涎", chinese_romanization: "chuíxián" },
            { option: "B", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coveted' means to yearn to possess or have (something)." +
            "<br><br>" +
            "(B) 'rejected' means to refuse to accept, consider, or submit to." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'doubted' means to feel uncertain about.",
        chinese_explanation: "(A) '垂涎' 意味着渴望拥有或占有（某物）。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝接受、考虑或提交。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '怀疑' 意味着对某事感到不确定。"
    },
    {
        id: 4,
    question: "The scientist's goal was to __________ the seeds evenly across the field for the experiment.",
    chinese_question: "科学家的目标是将种子均匀地 __________ 在田地里进行实验。",
    answers: [
        { option: "A", answer: "scatter", chinese_answer: "撒", chinese_romanization: "sǎ" },
        { option: "B", answer: "collect", chinese_answer: "收集", chinese_romanization: "shōují" },
        { option: "C", answer: "arrange", chinese_answer: "安排", chinese_romanization: "ānpái" },
        { option: "D", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'scatter' means to throw in various random directions." +
        "<br><br>" +
        "(B) 'collect' means to bring or gather together." +
        "<br><br>" +
        "(C) 'arrange' means to put things in a neat, attractive, or required order." +
        "<br><br>" +
        "(D) 'organize' means to arrange into a structured whole.",
    chinese_explanation: "(A) '撒' 意味着朝各个不同方向散开。" +
        "<br><br>" +
        "(B) '收集' 意味着收集或聚集在一起。" +
        "<br><br>" +
        "(C) '安排' 意味着把东西按整齐、有吸引力或所需的顺序排列。" +
        "<br><br>" +
        "(D) '组织' 意味着安排成一个结构化的整体。"
    },
    {
        id: 5,
    question: "The politician sought to __________ his reputation by taking credit for the community improvements.",
    chinese_question: "这位政治家试图通过把社区改善归功于自己来 __________ 他的声誉。",
    answers: [
        { option: "A", answer: "degrade", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
        { option: "B", answer: "aggrandize", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "C", answer: "ruin", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
        { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'aggrandize' figuratively means to increase one's reputation or status." +
        "<br><br>" +
        "(A) 'degrade' means to lower in quality or character." +
        "<br><br>" +
        "(C) 'ruin' means to destroy." +
        "<br><br>" +
        "(D) 'criticize' means to find fault with.",
    chinese_explanation: "(B) '提升' 一词在比喻上意味着增加某人的声誉或地位。" +
        "<br><br>" +
        "(A) '贬低' 意味着降低质量或品格。" +
        "<br><br>" +
        "(C) '毁坏' 意味着破坏。" +
        "<br><br>" +
        "(D) '批评' 意味着找茬。"
    },
    {
        id: 6,
    question: "The new software will __________ employees in managing their tasks more efficiently.",
    chinese_question: "新软件将 __________ 员工更有效地管理他们的任务。",
    answers: [
        { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "D", answer: "complicate", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assist' means to help someone by doing a share of the work." +
        "<br><br>" +
        "(A) 'burden' means to load heavily." +
        "<br><br>" +
        "(C) 'confuse' means to make someone bewildered or perplexed." +
        "<br><br>" +
        "(D) 'complicate' means to make something more difficult or complex.",
    chinese_explanation: "(B) '协助' 意味着通过分担工作来帮助某人。" +
        "<br><br>" +
        "(A) '负担' 意味着重载。" +
        "<br><br>" +
        "(C) '使困惑' 意味着使某人困惑或迷惑。" +
        "<br><br>" +
        "(D) '使复杂化' 意味着使某事更加困难或复杂。"
    },
    {
        id: 7,
    question: "Her brief encounter with the charming stranger left her __________ and unable to concentrate on her work.",
    chinese_question: "与那位迷人陌生人的短暂邂逅使她 __________，无法集中精力工作。",
    answers: [
        { option: "A", answer: "focused", chinese_answer: "集中", chinese_romanization: "jízhōng" },
        { option: "B", answer: "infatuated", chinese_answer: "迷恋", chinese_romanization: "míliàn" },
        { option: "C", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
        { option: "D", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'infatuated' figuratively means to be inspired with an intense but short-lived passion or admiration." +
        "<br><br>" +
        "(A) 'focused' means to direct one's attention to something." +
        "<br><br>" +
        "(C) 'bored' means to feel weary and uninterested." +
        "<br><br>" +
        "(D) 'repelled' means to feel intense distaste.",
    chinese_explanation: "(B) '迷恋' 一词在比喻上意味着受到强烈但短暂的激情或钦佩的激励。" +
        "<br><br>" +
        "(A) '集中' 意味着把注意力集中在某事上。" +
        "<br><br>" +
        "(C) '无聊' 意味着感到厌倦和没有兴趣。" +
        "<br><br>" +
        "(D) '排斥' 意味着感到强烈的厌恶。"
    },
    {
        id: 8,
        question: "Her generous donation helped to __________ the university with a new research facility.",
        chinese_question: "她的慷慨捐赠帮助大学 __________ 了一座新的研究设施。",
        answers: [
            { option: "A", answer: "endow", chinese_answer: "赋予", chinese_romanization: "fùyǔ" },
            { option: "B", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "C", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endow' means to give or bequeath an income or property to (a person or institution)." +
            "<br><br>" +
            "(B) 'deplete' means to use up the supply or resources of." +
            "<br><br>" +
            "(C) 'undermine' means to damage or weaken someone or something, especially gradually." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '赋予' 意味着给与或捐赠收入或财产给（某人或机构）。" +
            "<br><br>" +
            "(B) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(C) '削弱' 意味着逐渐损害或削弱某人或某物。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 9,
    question: "To __________ the delivery of the package, the company used express shipping services.",
    chinese_question: "为了 __________ 包裹的递送，公司使用了快递服务。",
    answers: [
        { option: "A", answer: "slow", chinese_answer: "减慢", chinese_romanization: "jiǎnmàn" },
        { option: "B", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" },
        { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "D", answer: "prolong", chinese_answer: "延长", chinese_romanization: "yáncháng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expedite' means to speed up the process or progress of." +
        "<br><br>" +
        "(A) 'slow' means to reduce speed." +
        "<br><br>" +
        "(C) 'complicate' means to make more complex." +
        "<br><br>" +
        "(D) 'prolong' means to extend the duration of.",
    chinese_explanation: "(B) '加快' 一词意味着加快进程。" +
        "<br><br>" +
        "(A) '减慢' 意味着降低速度。" +
        "<br><br>" +
        "(C) '复杂化' 意味着使变得更复杂。" +
        "<br><br>" +
        "(D) '延长' 意味着延长持续时间。"
    },
    {
        id: 10,
    question: "The doctor was able to __________ the progression of the disease based on the patient's symptoms.",
    chinese_question: "医生能够根据病人的症状 __________ 疾病的发展。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
        { option: "C", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'predict' means to say or estimate that a specified thing will happen in the future or will be a consequence of something." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(C) 'misinterpret' means to interpret something wrongly." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(B) '预测' 意味着说或估计未来会发生某事或某事将是某种结果。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(C) '误解' 意味着错误地解释某事。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
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
