// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The company __________ to adapt to the rapidly changing market conditions.",
    chinese_question: "公司 __________ 适应快速变化的市场环境。",
    answers: [
        { option: "A", answer: "succeeded", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "dominated", chinese_answer: "主宰", chinese_romanization: "zhǔzǎi" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
        "<br><br>" +
        "(A) 'succeeded' means to achieve the desired aim or result." +
        "<br><br>" +
        "(C) 'dominated' means to have a commanding influence on; exercise control over." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
        "<br><br>" +
        "(A) '成功' 意味着实现预期的目标或结果。" +
        "<br><br>" +
        "(C) '主宰' 意味着对某事物有控制或影响。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 2,
    question: "She had to __________ for more time to complete the project as the deadline approached.",
    chinese_question: "随着截止日期的临近，她不得不 __________ 以便有更多时间完成项目。",
    answers: [
        { option: "A", answer: "plead", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "B", answer: "offer", chinese_answer: "提供", chinese_romanization: "tígōng" },
        { option: "C", answer: "suggest", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "D", answer: "refuse", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plead' means to make an emotional appeal." +
        "<br><br>" +
        "(B) 'offer' means to present or proffer something for someone to accept or reject as desired." +
        "<br><br>" +
        "(C) 'suggest' means to put forward for consideration." +
        "<br><br>" +
        "(D) 'refuse' means to indicate or show that one is not willing to do something.",
    chinese_explanation: "(A) '请求' 意味着提出情感上的请求。" +
        "<br><br>" +
        "(B) '提供' 意味着呈现或提供某物以供某人接受或拒绝。" +
        "<br><br>" +
        "(C) '建议' 意味着提出供考虑。" +
        "<br><br>" +
        "(D) '拒绝' 意味着表明或表示某人不愿意做某事。"
    },
    {
        id: 3,
    question: "The teacher's explanations __________ the students in understanding complex concepts.",
    chinese_question: "老师的解释 __________ 学生理解复杂的概念。",
    answers: [
        { option: "A", answer: "perplexed", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "C", answer: "assisted", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'assisted' means to help someone by doing a share of the work." +
        "<br><br>" +
        "(A) 'perplexed' means to make someone feel completely baffled." +
        "<br><br>" +
        "(B) 'delayed' means to make someone or something late or slow." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(C) '协助' 意味着通过分担工作来帮助某人。" +
        "<br><br>" +
        "(A) '使困惑' 意味着使某人感到完全困惑。" +
        "<br><br>" +
        "(B) '延迟' 意味着使某人或某事迟到或缓慢。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "The government moved to __________ the outdated law, considering it no longer applicable.",
    chinese_question: "政府决定 __________ 这项过时的法律，认为它已不再适用。",
    answers: [
        { option: "A", answer: "annul", chinese_answer: "废除", chinese_romanization: "fèichú" },
        { option: "B", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
        { option: "C", answer: "uphold", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'annul' means to declare invalid (an official agreement, decision, or result)." +
        "<br><br>" +
        "(B) 'enforce' means to compel observance of or compliance with (a law, rule, or obligation)." +
        "<br><br>" +
        "(C) 'uphold' means to confirm or support (something that has been questioned)." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '废除' 意味着宣布无效（正式协议、决定或结果）。" +
        "<br><br>" +
        "(B) '执行' 意味着强制遵守或遵从（法律、规则或义务）。" +
        "<br><br>" +
        "(C) '维持' 意味着确认或支持（已被质疑的事情）。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
    question: "His aggressive behavior at the meeting __________ his colleagues, making them reluctant to work with him.",
    chinese_question: "他在会议上的咄咄逼人的行为 __________ 了同事们，使他们不愿与他合作。",
    answers: [
        { option: "A", answer: "charmed", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "B", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
        { option: "C", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repulsed' means to cause someone to feel intense distaste and aversion." +
        "<br><br>" +
        "(A) 'charmed' means to delight greatly." +
        "<br><br>" +
        "(C) 'encouraged' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of.",
    chinese_explanation: "(B) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
        "<br><br>" +
        "(A) '吸引' 意味着极大地取悦。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 6,
        question: "The teacher’s condescending tone during the lecture made the student feel __________.",
        chinese_question: "老师在讲课时的高傲语气让学生感到被 __________ 。",
        answers: [
            { option: "A", answer: "demeaned", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "inspired", chinese_answer: "鼓舞", chinese_romanization: "gǔwǔ" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "respected", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'demeaned' means to cause a severe loss in the dignity of and respect for (someone or something)." +
            "<br><br>" +
            "(B) 'inspired' means to fill (someone) with the urge or ability to do or feel something, especially to do something creative." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'respected' means to admire (someone or something) deeply, as a result of their abilities, qualities, or achievements.",
        chinese_explanation: "(A) '贬低' 意味着导致（某人或某物）尊严和尊重的严重丧失。" +
            "<br><br>" +
            "(B) '鼓舞' 意味着激发（某人）做某事的冲动或能力，尤其是做某事创意。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '尊重' 意味着由于（某人或某物）的能力、品质或成就而深深钦佩。"
    },
    {
        id: 7,
    question: "The idea of eating insects __________ him, even though he knew they were nutritious.",
    chinese_question: "吃昆虫的想法 __________ 了他，尽管他知道它们很有营养。",
    answers: [
        { option: "A", answer: "intrigued", chinese_answer: "引起兴趣", chinese_romanization: "yǐnqǐ xìngqù" },
        { option: "B", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
        { option: "C", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "D", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repulsed' means to cause someone to feel intense distaste and aversion." +
        "<br><br>" +
        "(A) 'intrigued' means to arouse the curiosity or interest of someone." +
        "<br><br>" +
        "(C) 'comforted' means to soothe or console someone." +
        "<br><br>" +
        "(D) 'satisfied' means to meet the expectations, needs, or desires of someone.",
    chinese_explanation: "(B) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
        "<br><br>" +
        "(A) '引起兴趣' 意味着引起某人的好奇心或兴趣。" +
        "<br><br>" +
        "(C) '安慰' 意味着安抚或安慰某人。" +
        "<br><br>" +
        "(D) '满足' 意味着满足某人的期望、需求或愿望。"
    },
    {
        id: 8,
        question: "In times of trouble, people often __________ with those who are suffering to show they care.",
        chinese_question: "在困难时期，人们常常 __________ 那些正在受苦的人，以示关心。",
        answers: [
                { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "compete", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commiserate' means to express or feel sympathy or pity, used figuratively here." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'compete' means to strive to gain or win something by defeating or establishing superiority over others.",
        chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯，这里是比喻用法。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '竞争' 意味着通过击败或建立优势来争取或赢得某物。"
    },
    {
        id: 9,
        question: "Joy seemed to __________ from the crowd as they watched the fireworks display.",
        chinese_question: "当人群观看烟花表演时，喜悦似乎从他们身上 __________ 出来。",
        answers: [
            { option: "A", answer: "emanate", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emanate' means to issue or spread out from a source." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(A) '散发' 意味着从源头发出或散发。" +
            "<br><br>" +
            "(B) '减少' 意味着减少或变少。" +
            "<br><br>" +
            "(C) '隐藏' 意味着防止被看到；隐藏。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 10,
        question: "As the excitement of the event began to __________, people started leaving the venue.",
        chinese_question: "随着活动的兴奋之情开始 __________，人们开始离开会场。",
        answers: [
            { option: "A", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "B", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "C", answer: "persist", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "D", answer: "spread", chinese_answer: "扩散", chinese_romanization: "kuòsàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abate' means to become less intense or widespread." +
            "<br><br>" +
            "(A) 'grow' means to increase in size, number, or importance." +
            "<br><br>" +
            "(C) 'persist' means to continue to exist; be prolonged." +
            "<br><br>" +
            "(D) 'spread' means to extend over a large or increasing area.",
        chinese_explanation: "(B) '减弱'一词意味着变得不那么强烈或广泛。" +
            "<br><br>" +
            "(A) '增长' 意味着在规模、数量或重要性上增加。" +
            "<br><br>" +
            "(C) '持续' 意味着继续存在；被延长。" +
            "<br><br>" +
            "(D) '扩散' 意味着在大面积或增加的区域内扩展。"
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
