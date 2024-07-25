// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her passion for helping others __________ her to start a nonprofit organization.",
    chinese_question: "她帮助他人的热情 __________ 她创办了一个非营利组织。",
    answers: [
        { option: "A", answer: "spurred", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "B", answer: "halted", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
        { option: "C", answer: "deterred", chinese_answer: "威慑", chinese_romanization: "wēishè" },
        { option: "D", answer: "restrained", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'spurred' means to encourage or prompt someone to take action or make a greater effort." +
        "<br><br>" +
        "(B) 'halted' means to bring or come to an abrupt stop." +
        "<br><br>" +
        "(C) 'deterred' means to discourage someone from doing something by instilling doubt or fear of the consequences." +
        "<br><br>" +
        "(D) 'restrained' means to prevent someone from doing something; keep under control or within limits.",
    chinese_explanation: "(A) '激励' 意味着鼓励或促使某人采取行动或更加努力。" +
        "<br><br>" +
        "(B) '停止' 意味着突然停止或结束。" +
        "<br><br>" +
        "(C) '威慑' 意味着通过灌输怀疑或对后果的恐惧来阻止某人做某事。" +
        "<br><br>" +
        "(D) '抑制' 意味着阻止某人做某事；保持在控制之下或在限度内。"
    },
    {
        id: 2,
            question:
             "The new video game __________ a whole community of dedicated players and fan clubs.",
            chinese_question: "这款新电子游戏 __________ 了一个由忠实玩家和粉丝俱乐部组成的社区。",
            answers: [
                { option: "A", answer: "spawned", chinese_answer: "产生", chinese_romanization: "chǎnshēng" },
                { option: "B", answer: "limited", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "blocked", chinese_answer: "阻塞", chinese_romanization: "zǔsè" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'spawned' means to generate or bring forth." +
                "<br><br>" +
                "(B) 'limited' means to restrict the amount, extent, or range of." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'blocked' means to make the movement or flow in (a passage, pipe, road, etc.) difficult or impossible.",
            chinese_explanation: "(A) '产生' 意味着生成或引发。" +
                "<br><br>" +
                "(B) '限制' 意味着限制数量、程度或范围。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻塞' 意味着使通道、管道、道路等的流动变得困难或不可能。"
    },
    {
        id: 3,
        question: "The entrepreneur's vision is to __________ the healthcare industry by providing an app that connects patients with doctors for virtual consultations.",
        chinese_question: "企业家的愿景是通过提供一个将患者与医生连接起来进行虚拟咨询的应用程序来 __________ 医疗行业。",
        answers: [
            { option: "A", answer: "uberize", chinese_answer: "优步化", chinese_romanization: "yōubù huà" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "bypass", chinese_answer: "绕过", chinese_romanization: "rào guò" },
            { option: "D", answer: "standardize", chinese_answer: "标准化", chinese_romanization: "biāozhǔn huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'uberize' figuratively means to transform a service by using a business model similar to that of Uber, usually involving an app-based platform connecting consumers with service providers." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'bypass' means to go past or around." +
            "<br><br>" +
            "(D) 'standardize' means to cause something to conform to a standard.",
        chinese_explanation: "(A) '优步化' 在此语境下比喻通过使用类似于优步的商业模式来改变一种服务，通常涉及一个将消费者与服务提供商连接起来的应用程序平台。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事物更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '绕过' 意味着绕过或经过。" +
            "<br><br>" +
            "(D) '标准化' 意味着使某物符合标准。"
    },
    {
        id: 4,
        question: "The prosecutor aimed to __________ all parties involved in the conspiracy.",
        chinese_question: "检察官旨在 __________ 涉及阴谋的所有人。",
        answers: [
            { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prosecute' means to institute legal proceedings against someone." +
            "<br><br>" +
            "(A) 'protect' means to keep safe from harm or injury." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '起诉'一词意味着对某人提起法律诉讼。" +
            "<br><br>" +
            "(A) '保护' 意味着保护免受伤害。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "He began to __________ his neighbor's new car, wishing he could own one just like it.",
        chinese_question: "他开始 __________ 邻居的新车，希望自己也能拥有一辆。",
        answers: [
            { option: "A", answer: "covet", chinese_answer: "垂涎", chinese_romanization: "chuíxián" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'covet' means to yearn to possess or have (something)." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'reject' means to refuse to accept, consider, or submit to.",
        chinese_explanation: "(A) '垂涎' 意味着渴望拥有或占有（某物）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝接受、考虑或提交。"
    },
    {
        id: 6,
        question: "Many people __________ the poor quality of service at the restaurant on social media.",
        chinese_question: "许多人在社交媒体上 __________ 这家餐厅的服务质量差。",
        answers: [
            { option: "A", answer: "applauded", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "decried", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "enjoyed", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decried' means to publicly denounce or criticize." +
            "<br><br>" +
            "(A) 'applauded' means to show strong approval of a person or action, especially by clapping hands." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'enjoyed' means to take delight or pleasure in an activity or occasion.",
        chinese_explanation: "(B) '谴责'一词意味着公开谴责或批评。" +
            "<br><br>" +
            "(A) '赞扬' 意味着通过鼓掌对某人或某行动表示强烈赞同。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '享受' 意味着从一项活动或场合中获得乐趣或享受。"
    },
    {
        id: 7,
    question: "The new movie was __________ as a masterpiece by critics around the world.",
    chinese_question: "新电影被世界各地的评论家 __________ 为杰作。",
    answers: [
        { option: "A", answer: "condemned", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "hailed", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "D", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'hailed' means to acclaim enthusiastically." +
        "<br><br>" +
        "(A) 'condemned' means to express complete disapproval of something, typically in public." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(D) 'dismissed' means to order or allow someone to leave.",
    chinese_explanation: "(C) '欢呼' 意味着热情地欢呼。" +
        "<br><br>" +
        "(A) '谴责' 意味着公开表示完全不赞成某事。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(D) '解雇' 意味着命令或允许某人离开。"
    },
    {
        id: 8,
    question: "The community leaders __________ with the city council to improve the local infrastructure.",
    chinese_question: "社区领导人 __________ 市议会改善当地基础设施。",
    answers: [
        { option: "A", answer: "commanded", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "pleaded", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "D", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pleaded' means to make an emotional appeal." +
        "<br><br>" +
        "(A) 'commanded' means to give an authoritative order." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(D) 'denied' means to state that one refuses to admit the truth or existence of something.",
    chinese_explanation: "(C) '请求' 意味着提出情感上的请求。" +
        "<br><br>" +
        "(A) '命令' 意味着下达权威命令。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(D) '否认' 意味着声明拒绝承认某事的真实性或存在。"
    },
    {
        id: 9,
    question: "His achievements seem to __________ in comparison to her outstanding accomplishments.",
    chinese_question: "与她杰出的成就相比，他的成就显得 __________。",
    answers: [
        { option: "A", answer: "brighten", chinese_answer: "变亮", chinese_romanization: "biàn liàng" },
        { option: "B", answer: "pale", chinese_answer: "相形见绌", chinese_romanization: "xiāngxíngjiànchù" },
        { option: "C", answer: "overshadow", chinese_answer: "使黯然失色", chinese_romanization: "shǐ ànrán shīsè" },
        { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pale' means to seem less impressive or important when compared to something else." +
        "<br><br>" +
        "(A) 'brighten' means to make or become lighter or more cheerful." +
        "<br><br>" +
        "(C) 'overshadow' means to appear much more prominent or important than." +
        "<br><br>" +
        "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
    chinese_explanation: "(B) '相形见绌' 意味着与某事相比显得不那么令人印象深刻或重要。" +
        "<br><br>" +
        "(A) '变亮' 意味着使或变得更亮或更愉快。" +
        "<br><br>" +
        "(C) '使黯然失色' 意味着显得更突出或重要。" +
        "<br><br>" +
        "(D) '增强' 意味着加强、增加或进一步提高质量、价值或范围。"
    },
    {
        id: 10,
    question: "You can __________ on me to keep your secret.",
    chinese_question: "你可以 __________ 我保守你的秘密。",
    answers: [
        { option: "A", answer: "suspect", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "B", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" },
        { option: "C", answer: "question", chinese_answer: "质问", chinese_romanization: "zhìwèn" },
        { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rely' means to depend on with full trust or confidence." +
        "<br><br>" +
        "(A) 'suspect' means to have an idea or impression of the existence, presence, or truth of something without certain proof." +
        "<br><br>" +
        "(C) 'question' means to ask questions of someone, especially in an official context." +
        "<br><br>" +
        "(D) 'doubt' means to feel uncertain about something.",
    chinese_explanation: "(B) '依赖' 意味着完全信任或依赖。" +
        "<br><br>" +
        "(A) '怀疑' 意味着对某事的存在、存在或真实性有想法或印象，但没有确凿的证据。" +
        "<br><br>" +
        "(C) '质问' 意味着在正式场合向某人提问。" +
        "<br><br>" +
        "(D) '怀疑' 意味着对某事感到不确定。"
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
