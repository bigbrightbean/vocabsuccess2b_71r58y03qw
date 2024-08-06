// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After a strenuous workout, he took a day off to __________ and regain his energy.",
        chinese_question: "在进行了一次剧烈的锻炼后，他休息了一天来 __________ 并恢复体力。",
        answers: [
            { option: "A", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "B", answer: "exhaust", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "C", answer: "recuperate", chinese_answer: "康复", chinese_romanization: "kāngfù" },
            { option: "D", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recuperate' means to recover from illness or exertion." +
            "<br><br>" +
            "(A) 'deteriorate' means to become progressively worse." +
            "<br><br>" +
            "(B) 'exhaust' means to drain someone of their physical or mental resources." +
            "<br><br>" +
            "(D) 'aggravate' means to make a problem worse or more serious.",
        chinese_explanation: "(C) '康复' 意味着从疾病或劳累中恢复。" +
            "<br><br>" +
            "(A) '恶化' 意味着变得越来越糟。" +
            "<br><br>" +
            "(B) '耗尽' 意味着消耗某人的体力或精神资源。" +
            "<br><br>" +
            "(D) '加重' 意味着使问题变得更糟或更严重。"
    },
    {
        id: 2,
        question: "Confidence seemed to __________ from her as she took the stage to deliver her speech.",
        chinese_question: "当她走上舞台发表演讲时，自信似乎从她身上 __________ 出来。",
        answers: [
            { option: "A", answer: "emanate", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emanate' means to issue or spread out from a source." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(A) '散发' 意味着从源头发出或散发。" +
            "<br><br>" +
            "(B) '减少' 意味着减少或变少。" +
            "<br><br>" +
            "(C) '隐藏' 意味着防止被看到；隐藏。" +
            "<br><br>" +
            "(D) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。"
    },
    {
        id: 3,
        question: "The company is looking to __________ its outdated policies to keep up with modern practices, by implementing new technologies and adopting innovative strategies.",
        chinese_question: "公司正在寻求 __________ 其过时的政策，以跟上现代实践，通过实施新技术和采用创新策略。",
        answers: [
            { option: "A", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "B", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "C", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reform' means to make changes in something in order to improve it." +
            "<br><br>" +
            "(A) 'enforce' means to compel observance of or compliance with a law, rule, or obligation." +
            "<br><br>" +
            "(C) 'retain' means to continue to have something; keep possession of." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(B) '改革'一词意味着为了改善某事而进行变革。" +
            "<br><br>" +
            "(A) '执行' 意味着强迫遵守或遵从法律、规则或义务。" +
            "<br><br>" +
            "(C) '保留' 意味着继续拥有某物；保有。" +
            "<br><br>" +
            "(D) '忽视' 意味着不注意；忽略。"
    },
    {
        id: 4,
        question: "Criticism from others did not __________ her enthusiasm for the project.",
        chinese_question: "他人的批评并没有 __________ 她对项目的热情。",
        answers: [
            { option: "A", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "amplify", chinese_answer: "扩大", chinese_romanization: "kuòdà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(A) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'amplify' means to increase the volume of sound.",
        chinese_explanation: "(B) '减少'一词意味着使变少或变小。" +
            "<br><br>" +
            "(A) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '扩大' 意味着增加声音的音量。"
    },
    {
        id: 5,
        question: "During the intense argument, she could feel herself __________ her teeth and clenching her fists.",
        chinese_question: "在激烈的争论中，她能感觉到自己在 __________ 牙齿并紧握拳头。",
        answers: [
            { option: "A", answer: "praising", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "calming", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "gnashing", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
            { option: "D", answer: "applauding", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gnashing' means to grind one's teeth together, typically as a sign of anger." +
            "<br><br>" +
            "(A) 'praising' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'calming' means to make someone peaceful and free from disturbance." +
            "<br><br>" +
            "(D) 'applauding' means to show approval or praise by clapping.",
        chinese_explanation: "(C) '咬牙' 意味着磨牙，通常是愤怒的表现。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '平静' 意味着使某人平静和远离干扰。" +
            "<br><br>" +
            "(D) '鼓掌' 意味着通过鼓掌表示赞同或赞美。"
    },
    {
        id: 6,
    question: "The politician did not hesitate to __________ his support for the new policy, by making public statements and participating in rallies.",
    chinese_question: "这位政治家毫不犹豫地 __________ 对新政策的支持，通过发表公开声明和参加集会。",
    answers: [
        { option: "A", answer: "avow", chinese_answer: "公开承认", chinese_romanization: "gōngkāi chéngrèn" },
        { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'avow' means to assert or confess openly." +
        "<br><br>" +
        "(B) 'deny' means to state that something is not true." +
        "<br><br>" +
        "(C) 'doubt' means to feel uncertain about." +
        "<br><br>" +
        "(D) 'conceal' means to keep something secret.",
    chinese_explanation: "(A) '公开承认' 意味着公开断言或承认。" +
        "<br><br>" +
        "(B) '否认' 意味着声明某事不真实。" +
        "<br><br>" +
        "(C) '怀疑' 意味着对某事感到不确定。" +
        "<br><br>" +
        "(D) '隐藏' 意味着保密某事。"
    },
    {
        id: 7,
    question: "To __________ the anger of the protesters, the company issued a public apology and promised to make changes.",
    chinese_question: "为了 __________ 抗议者的愤怒，公司发表了公开道歉并承诺进行改进。",
    answers: [
        { option: "A", answer: "inflame", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "B", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "provoke", chinese_answer: "激起", chinese_romanization: "jīqǐ" },
        { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(A) 'inflame' means to provoke or intensify strong feelings." +
        "<br><br>" +
        "(C) 'provoke' means to stimulate or give rise to a reaction or emotion." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(B) '缓解' 意味着减轻不愉快的感觉。" +
        "<br><br>" +
        "(A) '激怒' 意味着激起或加剧强烈的情感。" +
        "<br><br>" +
        "(C) '激起' 意味着引起反应或情感。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 8,
        question: "She feared her advice would be __________ by her children as criticism rather than guidance.",
        chinese_question: "她担心她的建议会被孩子们 __________ 为批评而不是指导。",
        answers: [
            { option: "A", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "misconstrued", chinese_answer: "曲解", chinese_romanization: "qūjiě" },
            { option: "C", answer: "appreciated", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'misconstrued' means to interpret something, especially a person's words or actions, wrongly." +
            "<br><br>" +
            "(A) 'accepted' means to consent to receive or undertake something." +
            "<br><br>" +
            "(C) 'appreciated' means to recognize the full worth of something." +
            "<br><br>" +
            "(D) 'dismissed' means to treat something as unworthy of serious consideration.",
        chinese_explanation: "(B) '曲解' 意味着错误地解释某事，特别是某人的话或行为。" +
            "<br><br>" +
            "(A) '接受' 意味着同意接收或承担某事。" +
            "<br><br>" +
            "(C) '欣赏' 意味着认识到某物的全部价值。" +
            "<br><br>" +
            "(D) '驳回' 意味着认为某事不值得认真考虑。"
    },
    {
        id: 9,
        question: "The fraudulent scheme was designed to __________ investors out of their money.",
        chinese_question: "这个诈骗计划旨在 __________ 投资者的钱财。",
        answers: [
                { option: "A", answer: "fleece", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "inform", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fleece' means to deceive or swindle someone out of money." +
                "<br><br>" +
                "(B) 'inform' means to give someone facts or information." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(A) '欺骗' 意味着骗取或诈骗某人钱财。" +
                "<br><br>" +
                "(B) '通知' 意味着向某人提供事实或信息。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保护' 意味着保护免受伤害或损害。"
    },
    {
        id: 10,
    question: "The new software update aims to __________ the workflow, allowing employees to complete tasks more efficiently.",
    chinese_question: "新的软件更新旨在 __________ 工作流程，让员工更有效地完成任务。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "B", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" },
        { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔài" },
        { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expedite' figuratively means to make an action or process happen sooner or be accomplished more quickly." +
        "<br><br>" +
        "(A) 'complicate' means to make more complex." +
        "<br><br>" +
        "(C) 'hinder' means to obstruct or delay." +
        "<br><br>" +
        "(D) 'confuse' means to make unclear.",
    chinese_explanation: "(B) '加快' 一词在比喻上意味着使某个动作或过程更快发生或完成。" +
        "<br><br>" +
        "(A) '复杂化' 意味着使变得更复杂。" +
        "<br><br>" +
        "(C) '阻碍' 意味着阻碍或延迟。" +
        "<br><br>" +
        "(D) '使困惑' 意味着使不清楚。"
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
