// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The abandoned factory's metal structures were heavily __________ after years of exposure to the elements.",
    chinese_question: "废弃工厂的金属结构在多年暴露于自然环境中后严重 __________。",
    answers: [
        { option: "A", answer: "polished", chinese_answer: "抛光", chinese_romanization: "pāoguāng" },
        { option: "B", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
        { option: "C", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "D", answer: "painted", chinese_answer: "涂漆", chinese_romanization: "túqī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'corroded' means worn or eaten away, especially by rust or chemicals." +
        "<br><br>" +
        "(A) 'polished' means made smooth and shiny by rubbing." +
        "<br><br>" +
        "(C) 'protected' means kept safe from harm or injury." +
        "<br><br>" +
        "(D) 'painted' means covered with a layer of paint.",
    chinese_explanation: "(B) '腐蚀' 意味着被侵蚀或被腐蚀，特别是被锈或化学品。" +
        "<br><br>" +
        "(A) '抛光' 意味着通过摩擦使其光滑和有光泽。" +
        "<br><br>" +
        "(C) '保护' 意味着免受伤害或损坏。" +
        "<br><br>" +
        "(D) '涂漆' 意味着覆盖一层油漆。"
    },
    {
        id: 2,
    question: "The rising star quickly __________ the established actor, becoming the new face of the franchise.",
    chinese_question: "这位新星很快 __________ 了那位知名演员，成为该系列的新人选。",
    answers: [
        { option: "A", answer: "assisted", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "B", answer: "ousted", chinese_answer: "取代", chinese_romanization: "qǔdài" },
        { option: "C", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "D", answer: "guided", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ousted' figuratively means to replace or remove." +
        "<br><br>" +
        "(A) 'assisted' means to help." +
        "<br><br>" +
        "(C) 'praised' means to express approval." +
        "<br><br>" +
        "(D) 'guided' means to lead or direct.",
    chinese_explanation: "(B) '取代' 一词在比喻上意味着替代或移除。" +
        "<br><br>" +
        "(A) '协助' 意味着帮助。" +
        "<br><br>" +
        "(C) '赞扬' 意味着表示赞同。" +
        "<br><br>" +
        "(D) '指导' 意味着引导或指导。"
    },
    {
        id: 3,
        question: "To gather feedback, the company decided to __________ opinions from its customers through an online survey.",
        chinese_question: "为了收集反馈，公司决定通过在线调查 __________ 客户的意见。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "solicit", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "D", answer: "dismiss", chinese_answer: "轻视", chinese_romanization: "qīngshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'solicit' means to ask for or try to obtain something from someone." +
            "<br><br>" +
            "(A) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(B) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(C) '请求' 意味着向某人请求或试图从某人那里获得某物。" +
            "<br><br>" +
            "(A) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(B) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。" +
            "<br><br>" +
            "(D) '轻视' 意味着认为不值得认真考虑。"
    },
    {
        id: 4,
        question: "The viral video quickly __________ numerous memes and parodies online.",
        chinese_question: "这段病毒视频很快在网上 __________ 了大量的模因和恶搞视频。",
        answers: [
            { option: "A", answer: "suppressed", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "B", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "limited", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "D", answer: "spawned", chinese_answer: "产生", chinese_romanization: "chǎnshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'spawned' means to generate or bring forth." +
            "<br><br>" +
            "(A) 'suppressed' means to forcibly put an end to." +
            "<br><br>" +
            "(B) 'hindered' means to create difficulties, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'limited' means to set boundaries or restrictions.",
        chinese_explanation: "(D) '产生' 意味着生成或引发。" +
            "<br><br>" +
            "(A) '抑制' 意味着强行终止。" +
            "<br><br>" +
            "(B) '阻碍' 意味着制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(C) '限制' 意味着设定界限或限制。"
    },
    {
        id: 5,
        question: "The company decided to __________ the task force to handle the sudden crisis.",
        chinese_question: "公司决定 __________ 特别工作组来处理突发危机。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' figuratively means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(C) 'confuse' means to make (someone) unable to think clearly." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '派遣' 在此语境下比喻发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使（某人）无法清晰思考。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 6,
    question: "He often tried to __________ his achievements by exaggerating his contributions to the project.",
    chinese_question: "他经常试图通过夸大自己对项目的贡献来 __________ 他的成就。",
    answers: [
        { option: "A", answer: "aggrandize", chinese_answer: "夸大", chinese_romanization: "kuādà" },
        { option: "B", answer: "downplay", chinese_answer: "低调处理", chinese_romanization: "dīdiào chǔlǐ" },
        { option: "C", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎohuà" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrandize' means to increase the power, status, or wealth of." +
        "<br><br>" +
        "(B) 'downplay' means to make something seem less important." +
        "<br><br>" +
        "(C) 'minimize' means to reduce to the smallest amount." +
        "<br><br>" +
        "(D) 'ignore' means to pay no attention to.",
    chinese_explanation: "(A) '夸大' 一词意味着增加权力、地位或财富。" +
        "<br><br>" +
        "(B) '低调处理' 意味着使某事显得不那么重要。" +
        "<br><br>" +
        "(C) '最小化' 意味着减少到最小数量。" +
        "<br><br>" +
        "(D) '忽视' 意味着不注意。"
    },
    {
        id: 7,
        question: "The organizers will __________ the new festival schedule to the public in a press conference.",
        chinese_question: "组织者将在新闻发布会上向公众 __________ 新的节日安排。",
        answers: [
            { option: "A", answer: "unveil", chinese_answer: "公布", chinese_romanization: "gōngbù" },
            { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "withhold", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unveil' figuratively means to reveal or disclose something that has been kept secret." +
            "<br><br>" +
            "(B) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'withhold' means to refuse to give something that is due or desired by another." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '公布' 在此语境下比喻揭示或公开一直保密的事情。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行终止。" +
            "<br><br>" +
            "(C) '保留' 意味着拒绝给予应有或另一个人想要的东西。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "His quick thinking and ability to __________ orders in a crisis saved many lives.",
        chinese_question: "他在危机中迅速思考和 __________ 命令的能力挽救了许多生命。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' figuratively means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '派遣' 在此语境下比喻发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '阻碍' 意味着制造困难，导致延误或障碍。"
    },
    {
        id: 9,
        question: "The team's confidence did not __________ despite the recent losses, but only grew stronger.",
        chinese_question: "尽管最近输了比赛，团队的信心并没有 __________，反而更加强了。",
        answers: [
            { option: "A", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "multiply", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(A) 'grow' means to increase in size, number, or importance." +
            "<br><br>" +
            "(C) 'stabilize' means to make or become unlikely to change, fail, or decline." +
            "<br><br>" +
            "(D) 'multiply' means to increase greatly in number or quantity.",
        chinese_explanation: "(B) '减少'一词意味着使变少或变小。" +
            "<br><br>" +
            "(A) '增长' 意味着在规模、数量或重要性上增加。" +
            "<br><br>" +
            "(C) '稳定' 意味着使不太可能改变、失败或下降。" +
            "<br><br>" +
            "(D) '增加' 意味着在数量或数量上大大增加。"
    },
    {
        id: 10,
    question: "Using various assessment tools like surveys and interviews, the NGO __________ community needs to plan its next humanitarian aid program.",
    chinese_question: "通过调查和访谈等各种评估工具，非政府组织 __________ 社区需求，以规划其下一个人道援助项目。",
    answers: [
        { option: "A", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "surveys", chinese_answer: "调查", chinese_romanization: "diàochá" },
        { option: "C", answer: "neglects", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "disrupts", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'surveys' means to examine and record the opinions or experiences of individuals." +
        "<br><br>" +
        "(A) 'ignores' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(C) 'neglects' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'disrupts' means to interrupt or disturb an event, activity, or process by causing a problem.",
    chinese_explanation: "(B) '调查' 意味着检查和记录个人的意见或经历。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '干扰' 意味着通过引起问题来中断或打扰一个事件、活动或过程。"
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
