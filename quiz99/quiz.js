// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her habit of __________ her friends' fashion choices did not make her very popular.",
        chinese_question: "她 __________ 朋友们时尚选择的习惯并没有让她很受欢迎。",
        answers: [
            { option: "A", answer: "disparaging", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "celebrating", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparaging' figuratively means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'celebrating' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'supporting' means to give assistance to.",
        chinese_explanation: "(A) '贬低' 在此语境下比喻认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 2,
    question: "She tried to __________ her way into the exclusive club by flattering the bouncer.",
    chinese_question: "她试图通过奉承保镖 __________ 进入那个独家俱乐部。",
    answers: [
        { option: "A", answer: "force", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" },
        { option: "B", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
        { option: "C", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "D", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
        "<br><br>" +
        "(A) 'force' means to make someone do something against their will." +
        "<br><br>" +
        "(C) 'demand' means to ask authoritatively or brusquely." +
        "<br><br>" +
        "(D) 'insult' means to speak to or treat with disrespect or scornful abuse.",
    chinese_explanation: "(B) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
        "<br><br>" +
        "(A) '强迫' 意味着使某人违背意愿做某事。" +
        "<br><br>" +
        "(C) '要求' 意味着以权威或粗鲁的方式要求。" +
        "<br><br>" +
        "(D) '侮辱' 意味着用不尊重或轻蔑的态度说话或对待。"
    },
    {
        id: 3,
    question: "The principal decided to __________ the students involved in the prank, hoping to discourage future mischief.",
    chinese_question: "校长决定 __________ 参与恶作剧的学生，希望阻止未来的恶作剧。",
    answers: [
        { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'castigate' means to reprimand someone severely." +
        "<br><br>" +
        "(B) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help or support.",
    chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
        "<br><br>" +
        "(B) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 4,
    question: "After the announcement of the company's closure, employees gathered to __________ the loss of their jobs.",
    chinese_question: "在公司关闭的消息宣布后，员工们聚集在一起 __________ 失去工作的痛苦。",
    answers: [
        { option: "A", answer: "lament", chinese_answer: "哀悼", chinese_romanization: "āidào" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lament' means to express sorrow, mourning, or regret." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '哀悼' 意味着表达悲伤、哀悼或遗憾。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
    question: "The fake charity was set up to __________ people out of their donations.",
    chinese_question: "这个假慈善机构是为了 __________ 人们的捐款而设立的。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "swindle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "inform", chinese_answer: "告知", chinese_romanization: "gàozhī" },
        { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swindle' means to deceive someone in order to take their money or possessions." +
        "<br><br>" +
        "(A) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(C) 'inform' means to give someone facts or information." +
        "<br><br>" +
        "(D) 'encourage' means to give support, confidence, or hope to someone.",
    chinese_explanation: "(B) '欺骗' 意味着为了骗取某人的钱或财物而欺骗某人。" +
        "<br><br>" +
        "(A) '支持' 意味着承担某物的全部或部分重量。" +
        "<br><br>" +
        "(C) '告知' 意味着给某人提供事实或信息。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 6,
        question: "The new app promises to __________ the tutoring market, making it easier for students to find qualified tutors.",
        chinese_question: "这款新应用承诺 __________ 辅导市场，使学生更容易找到合格的辅导老师。",
        answers: [
            { option: "A", answer: "uberize", chinese_answer: "优步化", chinese_romanization: "yōubù huà" },
            { option: "B", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "regulate", chinese_answer: "规范", chinese_romanization: "guīfàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'uberize' means to transform a service by using a business model similar to that of Uber, usually involving an app-based platform connecting consumers with service providers." +
            "<br><br>" +
            "(B) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(C) 'hinder' means to create difficulties that result in delay or obstruction." +
            "<br><br>" +
            "(D) 'regulate' means to control or maintain the rate or speed of a process so that it operates properly.",
        chinese_explanation: "(A) '优步化' 意味着通过使用类似于优步的商业模式来改变一种服务，通常涉及一个将消费者与服务提供商连接起来的应用程序平台。" +
            "<br><br>" +
            "(B) '复杂化' 意味着使某事更加困难或混乱。" +
            "<br><br>" +
            "(C) '阻碍' 意味着制造导致延误或障碍的困难。" +
            "<br><br>" +
            "(D) '规范' 意味着控制或维持过程的速度，使其正常运行。"
    },
    {
        id: 7,
        question: "Her constant reassurances __________ his confidence and helped him overcome his fears.",
        chinese_question: "她不断的安慰 __________ 了他的信心，帮助他克服了恐惧。",
        answers: [
            { option: "A", answer: "reinforced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "eroded", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
            { option: "C", answer: "undermined", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhìyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforced' figuratively means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'eroded' means to gradually wear away." +
            "<br><br>" +
            "(C) 'undermined' means to damage or weaken someone or something, especially gradually." +
            "<br><br>" +
            "(D) 'questioned' means to ask questions about something; doubt.",
        chinese_explanation: "(A) '增强' 在此语境下比喻加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '侵蚀' 意味着逐渐侵蚀或磨损。" +
            "<br><br>" +
            "(C) '破坏' 意味着损害或削弱某人或某物，尤其是逐渐地。" +
            "<br><br>" +
            "(D) '质疑' 意味着对某事提出问题；怀疑。"
    },
    {
        id: 8,
    question: "He traveled around the world to __________ his desire for adventure.",
    chinese_question: "他环游世界以 __________ 自己对冒险的渴望。",
    answers: [
        { option: "A", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
        { option: "B", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'satiate' means to satisfy fully." +
        "<br><br>" +
        "(A) 'suppress' means to put an end to forcibly." +
        "<br><br>" +
        "(C) 'overlook' means to fail to notice something." +
        "<br><br>" +
        "(D) 'deny' means to refuse to accept or admit.",
    chinese_explanation: "(B) '满足' 意味着完全满足。" +
        "<br><br>" +
        "(A) '压制' 意味着强行结束。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能注意到某事。" +
        "<br><br>" +
        "(D) '否认' 意味着拒绝接受或承认。"
    },
    {
        id: 9,
    question: "The charity's efforts helped to __________ the suffering of those affected by the disaster.",
    chinese_question: "慈善机构的努力帮助 __________ 受灾者的痛苦。",
    answers: [
        { option: "A", answer: "magnify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
        { option: "B", answer: "mitigate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "prolong", chinese_answer: "延长", chinese_romanization: "yáncháng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mitigate' means to make less severe or intense." +
        "<br><br>" +
        "(A) 'magnify' means to make something appear larger." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'prolong' means to extend the duration of.",
    chinese_explanation: "(B) '减轻' 意味着使某事物不那么严重或强烈。" +
        "<br><br>" +
        "(A) '放大' 意味着使某物看起来更大。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '延长' 意味着延长持续时间。"
    },
    {
        id: 10,
    question: "He would __________ about the weather every morning, no matter how perfect it was.",
    chinese_question: "无论天气多么完美，他每天早晨都会 __________ 天气。",
    answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
        { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'carp' means to complain or find fault continually about trivial matters." +
        "<br><br>" +
        "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enjoy' means to take delight or pleasure in something.",
    chinese_explanation: "(C) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
        "<br><br>" +
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '享受' 意味着从某事中获得乐趣或快乐。"
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
