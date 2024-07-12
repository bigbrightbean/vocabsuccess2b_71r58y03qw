// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The discussion hit an __________ when both parties refused to compromise on their demands.",
        chinese_question: "讨论陷入了 __________，因为双方都拒绝在他们的要求上妥协。",
        answers: [
                { option: "A", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
                { option: "B", answer: "impasse", chinese_answer: "僵局", chinese_romanization: "jiāngjú" },
                { option: "C", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
                { option: "D", answer: "deal", chinese_answer: "交易", chinese_romanization: "jiāoyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impasse' means a situation in which no progress is possible, especially because of disagreement." +
                "<br><br>" +
                "(A) 'agreement' means a negotiated and typically legally binding arrangement between parties." +
                "<br><br>" +
                "(C) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
                "<br><br>" +
                "(D) 'deal' means an agreement entered into by two or more parties for their mutual benefit.",
        chinese_explanation: "(B) '僵局'一词意味着由于分歧而无法取得进展的情况。" +
                "<br><br>" +
                "(A) '协议' 意味着各方之间协商并通常具有法律约束力的安排。" +
                "<br><br>" +
                "(C) '突破' 意味着突然、戏剧性和重要的发现或发展。" +
                "<br><br>" +
                "(D) '交易' 意味着两个或多个当事人为互利而达成的协议。"
    },
    {
        id: 2,
    question: "Despite her __________ that she was not involved in the scandal, evidence surfaced that contradicted her statement.",
    chinese_question: "尽管她 __________ 自己没有参与丑闻，但浮出水面的证据与她的说法相矛盾。",
    answers: [
        { option: "A", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" },
        { option: "B", answer: "confession", chinese_answer: "供认", chinese_romanization: "gòngrèn" },
        { option: "C", answer: "admission", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
        { option: "D", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assertion' means a confident and forceful statement of fact or belief." +
        "<br><br>" +
        "(B) 'confession' means a formal statement admitting that one is guilty of a crime." +
        "<br><br>" +
        "(C) 'admission' means a statement acknowledging the truth of something." +
        "<br><br>" +
        "(D) 'agreement' means harmony or accordance in opinion or feeling.",
    chinese_explanation: "(A) '断言' 意味着自信和有力的事实或信念的陈述。" +
        "<br><br>" +
        "(B) '供认' 意味着正式承认自己有罪的声明。" +
        "<br><br>" +
        "(C) '承认' 意味着承认某事是真实的声明。" +
        "<br><br>" +
        "(D) '同意' 意味着意见或感觉上的一致或协调。"
    },
    {
        id: 3,
    question: "The __________ of a new habit, like daily exercise, can greatly improve one's health.",
    chinese_question: "养成每日锻炼的 __________ 可以极大地改善一个人的健康。",
    answers: [
        { option: "A", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "C", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'acquisition' figuratively means the act of obtaining or gaining possession, especially habits or routines." +
        "<br><br>" +
        "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
        "<br><br>" +
        "(C) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired." +
        "<br><br>" +
        "(D) 'avoidance' means the action of keeping away from or not doing something.",
    chinese_explanation: "(A) '获得' 在此语境下意指获取或获得所有权的行为，特别是习惯或日常行为。" +
        "<br><br>" +
        "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
        "<br><br>" +
        "(C) '破坏' 意味着造成如此多的损害，以至于某物不再存在或无法修复的行为或过程。" +
        "<br><br>" +
        "(D) '避免' 意味着远离或不做某事的行为。"
    },
    {
        id: 4,
    question: "Her __________ in researching the family’s genealogy uncovered several fascinating stories about their ancestors.",
    chinese_question: "她在研究家族谱系时的 __________ 发现了几个关于他们祖先的迷人故事。",
    answers: [
        { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
        { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'diligence' means careful and persistent work or effort." +
        "<br><br>" +
        "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." +
        "<br><br>" +
        "(C) 'neglect' means failure to take proper care over something." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '勤奋' 一词意味着细致和坚持不懈的工作或努力。" +
        "<br><br>" +
        "(A) '懒惰' 意味着不愿意工作或使用精力的品质；懒散。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾某事。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 5,
    question: "Improving __________ in patients recovering from surgery is a key focus for physical therapists.",
    chinese_question: "改善手术康复患者的 __________ 是物理治疗师的一个重要关注点。",
    answers: [
        { option: "A", answer: "locomotion", chinese_answer: "运动", chinese_romanization: "yùndòng" },
        { option: "B", answer: "circulation", chinese_answer: "循环", chinese_romanization: "xúnhuán" },
        { option: "C", answer: "hydration", chinese_answer: "水合作用", chinese_romanization: "shuǐ hé zuòyòng" },
        { option: "D", answer: "nutrition", chinese_answer: "营养", chinese_romanization: "yíngyǎng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'locomotion' means the ability to move from one place to another." +
        "<br><br>" +
        "(B) 'circulation' means the movement of blood through the body." +
        "<br><br>" +
        "(C) 'hydration' means the process of causing something to absorb water." +
        "<br><br>" +
        "(D) 'nutrition' means the process of providing or obtaining the food necessary for health and growth.",
    chinese_explanation: "(A) '运动' 意味着从一个地方移动到另一个地方的能力。" +
        "<br><br>" +
        "(B) '循环' 意味着血液在体内的流动。" +
        "<br><br>" +
        "(C) '水合作用' 意味着使某物吸收水分的过程。" +
        "<br><br>" +
        "(D) '营养' 意味着提供或获取健康和成长所必需的食物的过程。"
    },
    {
        id: 6,
    question: "The fashion show was a __________ of the latest trends and designs, attracting many spectators.",
    chinese_question: "时装秀是最新潮流和设计的 __________，吸引了许多观众。",
    answers: [
        { option: "A", answer: "secret", chinese_answer: "秘密", chinese_romanization: "mìmì" },
        { option: "B", answer: "parade", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
        { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "D", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'parade' means a series or display of a particular type of thing." +
        "<br><br>" +
        "(A) 'secret' means something kept hidden or unexplained." +
        "<br><br>" +
        "(C) 'whisper' means a soft or confidential tone of voice." +
        "<br><br>" +
        "(D) 'protest' means a statement or action expressing disapproval of or objection to something.",
    chinese_explanation: "(B) '展示' 意味着一系列或特定类型事物的展示。" +
        "<br><br>" +
        "(A) '秘密' 意味着隐藏或未解释的事物。" +
        "<br><br>" +
        "(C) '低语' 意味着一种轻声或保密的语调。" +
        "<br><br>" +
        "(D) '抗议' 意味着表示反对或异议的声明或行动。"
    },
    {
        id: 7,
    question: "Before hiring him, the company carefully reviewed his __________, which included a degree from a prestigious university and several years of relevant work experience.",
    chinese_question: "在雇用他之前，公司仔细审查了他的 __________，包括一所著名大学的学位和几年的相关工作经验。",
    answers: [
        { option: "A", answer: "credentials", chinese_answer: "资历", chinese_romanization: "zīlì" },
        { option: "B", answer: "hobbies", chinese_answer: "爱好", chinese_romanization: "àihào" },
        { option: "C", answer: "preferences", chinese_answer: "偏好", chinese_romanization: "piānhào" },
        { option: "D", answer: "shortcomings", chinese_answer: "缺点", chinese_romanization: "quēdiǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'credentials' means qualifications, achievements, personal qualities, or aspects of a person's background, typically when used to indicate their suitability for something." +
        "<br><br>" +
        "(B) 'hobbies' means activities done regularly in one's leisure time for pleasure." +
        "<br><br>" +
        "(C) 'preferences' means a greater liking for one alternative over another or others." +
        "<br><br>" +
        "(D) 'shortcomings' means faults or failures to meet a certain standard.",
    chinese_explanation: "(A) '资历' 意味着资格、成就、个人素质或背景方面的情况，通常用于表明某人适合某事。" +
        "<br><br>" +
        "(B) '爱好' 意味着在闲暇时间为乐趣而定期进行的活动。" +
        "<br><br>" +
        "(C) '偏好' 意味着对一个选择比其他选择有更大的喜好。" +
        "<br><br>" +
        "(D) '缺点' 意味着未能达到某一标准的缺陷或失败。"
    },
    {
        id: 8,
        question: "The __________ with which the fans supported their team created an electrifying atmosphere in the stadium.",
        chinese_question: "球迷们支持他们球队的 __________ 在体育场内创造了一种令人兴奋的氛围。",
        answers: [
                { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "B", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" },
                { option: "C", answer: "passivity", chinese_answer: "被动", chinese_romanization: "bèidòng" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' figuratively means intense and passionate feeling." +
                "<br><br>" +
                "(B) 'detachment' means the state of being objective or aloof." +
                "<br><br>" +
                "(C) 'passivity' means acceptance of what happens, without active response or resistance." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '热情' 在此语境下意指强烈而热情的感情。" +
                "<br><br>" +
                "(B) '超脱' 意味着客观或冷漠的状态。" +
                "<br><br>" +
                "(C) '被动' 意味着接受发生的事情，没有积极的反应或抵抗。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 9,
    question: "The accountant noticed an __________ in the financial report, where expenses were significantly higher than expected for that quarter.",
    chinese_question: "会计在财务报告中发现了一个 __________，该季度的开支比预期显著增加。",
    answers: [
        { option: "A", answer: "anomaly", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng" },
        { option: "B", answer: "pattern", chinese_answer: "规律", chinese_romanization: "guīlǜ" },
        { option: "C", answer: "regularity", chinese_answer: "规律性", chinese_romanization: "guīlǜ xìng" },
        { option: "D", answer: "uniformity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'anomaly' means something that deviates from what is standard, normal, or expected." +
        "<br><br>" +
        "(B) 'pattern' means a repeated decorative design." +
        "<br><br>" +
        "(C) 'regularity' means the state or quality of being regular." +
        "<br><br>" +
        "(D) 'uniformity' means the quality or state of being uniform.",
    chinese_explanation: "(A) '异常现象' 意味着偏离标准、正常或预期的事物。" +
        "<br><br>" +
        "(B) '规律' 意味着重复的装饰设计。" +
        "<br><br>" +
        "(C) '规律性' 意味着规则的状态或质量。" +
        "<br><br>" +
        "(D) '一致性' 意味着一致的质量或状态。"
    },
    {
        id: 10,
    question: "The discovery of penicillin was an example of __________, as it was found while researching something else.",
    chinese_question: "青霉素的发现是 __________ 的一个例子，因为它是在研究其他东西时发现的。",
    answers: [
        { option: "A", answer: "intention", chinese_answer: "意图", chinese_romanization: "yìtú" },
        { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
        { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "accident", chinese_answer: "意外", chinese_romanization: "yìwài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
        "<br><br>" +
        "(A) 'intention' means a thing intended; an aim or plan." +
        "<br><br>" +
        "(C) 'failure' means lack of success." +
        "<br><br>" +
        "(D) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally, typically resulting in damage or injury.",
    chinese_explanation: "(B) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
        "<br><br>" +
        "(A) '意图' 意味着有意的事情；目标或计划。" +
        "<br><br>" +
        "(C) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(D) '意外' 意味着意外发生的不幸事件，通常会导致损坏或伤害。"
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
