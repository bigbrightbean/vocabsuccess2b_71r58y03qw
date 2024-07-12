// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Everyone in the office loved his unique __________, such as always wearing mismatched socks.",
    chinese_question: "办公室里的每个人都喜欢他独特的 __________，比如总是穿不配对的袜子。",
    answers: [
        { option: "A", answer: "quirk", chinese_answer: "怪癖", chinese_romanization: "guàipǐ" },
        { option: "B", answer: "habit", chinese_answer: "习惯", chinese_romanization: "xíguàn" },
        { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
        { option: "D", answer: "norm", chinese_answer: "规范", chinese_romanization: "guīfàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'quirk' means a peculiar behavioral habit." +
        "<br><br>" +
        "(B) 'habit' means a regular practice or tendency." +
        "<br><br>" +
        "(C) 'routine' means a sequence of actions regularly followed." +
        "<br><br>" +
        "(D) 'norm' means something that is usual, typical, or standard.",
    chinese_explanation: "(A) '怪癖' 意味着一种奇特的行为习惯。" +
        "<br><br>" +
        "(B) '习惯' 意味着一种常规做法或倾向。" +
        "<br><br>" +
        "(C) '常规' 意味着定期遵循的一系列动作。" +
        "<br><br>" +
        "(D) '规范' 意味着通常的、典型的或标准的东西。"
    },
    {
        id: 2,
    question: "After years of hiding, the fugitive decided to return home following the announcement of a general __________.",
    chinese_question: "在多年躲藏之后，这名逃犯在宣布普遍 __________ 后决定回家。",
    answers: [
        { option: "A", answer: "penalty", chinese_answer: "处罚", chinese_romanization: "chǔfá" },
        { option: "B", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
        { option: "C", answer: "exile", chinese_answer: "流放", chinese_romanization: "liúfàng" },
        { option: "D", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'amnesty' means an official pardon for people who have been convicted of political offenses." +
        "<br><br>" +
        "(A) 'penalty' means a punishment imposed for breaking a law, rule, or contract." +
        "<br><br>" +
        "(C) 'exile' means the state of being barred from one's native country, typically for political or punitive reasons." +
        "<br><br>" +
        "(D) 'punishment' means the infliction or imposition of a penalty as retribution for an offense.",
    chinese_explanation: "(B) '大赦' 意味着对被判有政治罪的人进行官方赦免。" +
        "<br><br>" +
        "(A) '处罚' 意味着因违反法律、规则或合同而施加的惩罚。" +
        "<br><br>" +
        "(C) '流放' 意味着因政治或惩罚原因被禁止回到自己的祖国的状态。" +
        "<br><br>" +
        "(D) '惩罚' 意味着作为对犯罪行为的报复而施加的处罚。"
    },
    {
        id: 3,
        question: "His __________ in debate made him a formidable opponent, able to counter any argument with ease.",
        chinese_question: "他在辩论中的 __________ 使他成为一个强大的对手，能够轻松反驳任何论点。",
        answers: [
                { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "B", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
                { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
                { option: "D", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
                "<br><br>" +
                "(A) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(C) 'uncertainty' means the state of being unsure." +
                "<br><br>" +
                "(D) 'incompetence' means inability to do something successfully; ineptitude.",
        chinese_explanation: "(B) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
                "<br><br>" +
                "(A) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(C) '不确定' 意味着不确定的状态。" +
                "<br><br>" +
                "(D) '无能' 意味着无法成功地做某事；无能。"
    },
    {
        id: 4,
    question: "The right to vote is a __________ that many people around the world do not have.",
    chinese_question: "投票权是一种许多世界各地的人没有的 __________ 。",
    answers: [
        { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
        { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "C", answer: "restriction", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
        { option: "D", answer: "liability", chinese_answer: "责任", chinese_romanization: "zérèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." +
        "<br><br>" +
        "(B) 'burden' means a load, typically a heavy one." +
        "<br><br>" +
        "(C) 'restriction' means a limiting condition or measure, especially a legal one." +
        "<br><br>" +
        "(D) 'liability' means the state of being responsible for something, especially by law.",
    chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" +
        "<br><br>" +
        "(B) '负担' 意味着通常是沉重的负荷。" +
        "<br><br>" +
        "(C) '限制' 意味着限制条件或措施，尤其是法律上的。" +
        "<br><br>" +
        "(D) '责任' 意味着负有责任的状态，尤其是法律上的。"
    },
    {
        id: 5,
    question: "He worked hard to earn the __________ of his colleagues and supervisors.",
    chinese_question: "他努力工作，以赢得同事和上司的 __________。",
    answers: [
        { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "B", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(B) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
    chinese_explanation: "(A) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
        "<br><br>" +
        "(B) '鄙视' 意味着认为某人或某事不值得考虑或尊重的感觉；轻蔑。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、热情或关注。"
    },
    {
        id: 6,
        question: "The company received a substantial __________ from an unexpected investment, enabling it to expand its operations.",
        chinese_question: "公司从一笔意外投资中获得了大量的 __________，使其能够扩大业务。",
        answers: [
                { option: "A", answer: "loss", chinese_answer: "损失", chinese_romanization: "sǔnshī" },
                { option: "B", answer: "windfall", chinese_answer: "意外之财", chinese_romanization: "yìwài zhī cái" },
                { option: "C", answer: "expense", chinese_answer: "花费", chinese_romanization: "huāfèi" },
                { option: "D", answer: "liability", chinese_answer: "负债", chinese_romanization: "fùzhài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'windfall' means a large amount of money that is won or received unexpectedly." +
                "<br><br>" +
                "(A) 'loss' means the fact or process of losing something or someone." +
                "<br><br>" +
                "(C) 'expense' means the cost required for something; the money spent on something." +
                "<br><br>" +
                "(D) 'liability' means the state of being responsible for something, especially by law.",
        chinese_explanation: "(B) '意外之财'一词意味着意外获得的大笔钱。" +
                "<br><br>" +
                "(A) '损失' 意味着失去某物或某人的事实或过程。" +
                "<br><br>" +
                "(C) '花费' 意味着某事所需的费用；为某事花的钱。" +
                "<br><br>" +
                "(D) '负债' 意味着对某事的责任，尤其是法律上的责任。"
    },
    {
        id: 7,
    question: "His __________ for playing the guitar led him to practice for hours every day.",
    chinese_question: "他对弹吉他的 __________ 使他每天练习数小时。",
    answers: [
        { option: "A", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
        { option: "B", answer: "zeal", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'zeal' means great energy or enthusiasm in pursuit of a cause or an objective." +
        "<br><br>" +
        "(A) 'boredom' means the state of feeling bored." +
        "<br><br>" +
        "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '热情'一词意味着在追求事业或目标时充满巨大能量或热情。" +
        "<br><br>" +
        "(A) '无聊' 意味着感到厌倦的状态。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 8,
        question: "Her careful __________ of the letter revealed several important details she had initially overlooked.",
        chinese_question: "她仔细 __________ 信件后，发现了几个最初忽略的重要细节。",
        answers: [
                { option: "A", answer: "glance", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
                { option: "B", answer: "perusal", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
                { option: "C", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perusal' means the action of reading or examining something thoroughly." +
                "<br><br>" +
                "(A) 'glance' means to take a brief or hurried look." +
                "<br><br>" +
                "(C) 'avoidance' means the action of keeping away from or not doing something." +
                "<br><br>" +
                "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
        chinese_explanation: "(B) '阅读'一词意味着彻底阅读或检查某事的行为。" +
                "<br><br>" +
                "(A) '浏览' 意味着匆忙或粗略地看一眼。" +
                "<br><br>" +
                "(C) '避免' 意味着远离或不做某事的行为。" +
                "<br><br>" +
                "(D) '拒绝' 意味着拒绝或拒绝某个提议、想法等。"
    },
    {
        id: 9,
    question: "Before starting the project, the team conducted a thorough __________ study to assess its viability.",
    chinese_question: "在开始项目之前，团队进行了彻底的 __________ 研究，以评估其可行性。",
    answers: [
        { option: "A", answer: "feasibility", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "completion", chinese_answer: "完成", chinese_romanization: "wánchéng" },
        { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'feasibility' means the state or degree of being easily or conveniently done." +
        "<br><br>" +
        "(B) 'completion' means the action or process of finishing something." +
        "<br><br>" +
        "(C) 'failure' means lack of success." +
        "<br><br>" +
        "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(A) '可行性' 意味着易于或方便完成的状态或程度。" +
        "<br><br>" +
        "(B) '完成' 意味着完成某事的行为或过程。" +
        "<br><br>" +
        "(C) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(D) '不情愿' 意味着不愿意或不情愿做某事。"
    },
    {
        id: 10,
    question: "The government introduced a new __________ that emphasized sustainability and environmental protection in all future projects.",
    chinese_question: "政府引入了一项新的 __________，强调在所有未来项目中实现可持续发展和环境保护。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "doctrine", chinese_answer: "教义", chinese_romanization: "jiàoyì" },
        { option: "C", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhú" },
        { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'doctrine' means a belief or set of beliefs held and taught by a Church, political party, or other group." +
        "<br><br>" +
        "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(C) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." +
        "<br><br>" +
        "(D) 'negligence' means failure to take proper care over something.",
    chinese_explanation: "(B) '教义' 一词意味着一个教会、政党或其他团体持有并教授的信仰或信念。" +
        "<br><br>" +
        "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(C) '模糊' 意味着开放不止一种解释的质量；不准确。" +
        "<br><br>" +
        "(D) '疏忽' 意味着未能妥善照顾某事。"
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
