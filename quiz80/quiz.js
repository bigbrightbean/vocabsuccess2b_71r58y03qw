// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "During the final review of the project, the manager had to __________ the importance of meeting deadlines, providing accurate data, and maintaining clear communication to the team multiple times.",
    chinese_question: "在项目的最终审核期间，经理不得不多次 __________ 团队，强调按时完成任务、提供准确数据和保持清晰沟通的重要性。",
    answers: [
        { option: "A", answer: "expatiate", chinese_answer: "详细叙述", chinese_romanization: "xiángxì xùshù" },
        { option: "B", answer: "extrapolate", chinese_answer: "推断", chinese_romanization: "tuīduàn" },
        { option: "C", answer: "perambulate", chinese_answer: "巡行", chinese_romanization: "xúnxíng" },
        { option: "D", answer: "reiterate", chinese_answer: "重申", chinese_romanization: "chóngshēn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'reiterate' means to say something again or a number of times, typically for emphasis or clarity." +
        "<br><br>" +
        "(A) 'expatiate' means to speak or write in detail about a particular topic." +
        "<br><br>" +
        "(B) 'extrapolate' means to extend the application of a method or conclusion to an unknown situation by assuming that existing trends will continue." +
        "<br><br>" +
        "(C) 'perambulate' means to walk or travel through or around a place for pleasure and in a leisurely way.",
    chinese_explanation: "(D) '重申' 意味着再说一次，通常是为了强调或澄清。" +
        "<br><br>" +
        "(A) '详细叙述' 意味着详细讨论某个特定主题。" +
        "<br><br>" +
        "(B) '推断' 意味着通过假设现有趋势将继续来扩展一种方法或结论的应用到未知情况。" +
        "<br><br>" +
        "(C) '巡行' 意味着为了娱乐和悠闲地走过或游览一个地方。"
    },
    {
        id: 2,
    question: "Her essay __________ her deep understanding of the subject.",
    chinese_question: "她的文章 __________ 她对这个主题的深刻理解。",
    answers: [
        { option: "A", answer: "reflected", chinese_answer: "反映", chinese_romanization: "fǎnyìng" },
        { option: "B", answer: "obscured", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
        { option: "C", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "distorted", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reflected' means to show an image of; to demonstrate." +
        "<br><br>" +
        "(B) 'obscured' means to keep from being seen; conceal." +
        "<br><br>" +
        "(C) 'hid' means to put or keep out of sight." +
        "<br><br>" +
        "(D) 'distorted' means to pull or twist out of shape.",
    chinese_explanation: "(A) '反映' 意味着显示图像；展示。" +
        "<br><br>" +
        "(B) '掩盖' 意味着不让被看到；隐藏。" +
        "<br><br>" +
        "(C) '隐藏' 意味着把或保持在视线之外。" +
        "<br><br>" +
        "(D) '扭曲' 意味着拉或扭曲变形。"
    },
    {
        id: 3,
    question: "The goal of the new policy is to __________ the local economy and create jobs, so that the community can thrive and residents can enjoy a better quality of life.",
    chinese_question: "新政策的目标是 __________ 当地经济并创造就业机会，这样社区可以繁荣发展，居民可以享受更高的生活质量。",
    answers: [
        { option: "A", answer: "revive", chinese_answer: "振兴", chinese_romanization: "zhènxīng" },
        { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'revive' means to restore to life or consciousness." +
        "<br><br>" +
        "(B) 'undermine' means to damage or weaken." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '振兴' 意味着恢复生机或意识。" +
        "<br><br>" +
        "(B) '破坏' 意味着损害或削弱。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
    question: "Parents often need to __________ their time between work and family.",
    chinese_question: "父母经常需要在工作和家庭之间 __________ 时间。",
    answers: [
        { option: "A", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
        { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
        { option: "C", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
        { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'allocate' means to distribute resources or duties for a particular purpose." +
        "<br><br>" +
        "(A) 'hoard' means to accumulate money or valued objects and hide or store away." +
        "<br><br>" +
        "(B) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(C) '分配' 意味着为特定目的分配资源或职责。" +
        "<br><br>" +
        "(A) '囤积' 意味着积累金钱或有价值的物品并隐藏或储藏起来。" +
        "<br><br>" +
        "(B) '浪费' 意味着不小心、奢侈或无目的地使用或消耗。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 5,
    question: "Her wrists began to __________ after wearing the tight bracelets for hours.",
    chinese_question: "戴了几个小时紧手镯后，她的手腕开始 __________。",
    answers: [
        { option: "A", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
        { option: "B", answer: "chafe", chinese_answer: "摩擦", chinese_romanization: "mócā" },
        { option: "C", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
        { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'chafe' means to make sore by rubbing against something." +
        "<br><br>" +
        "(A) 'heal' means to become sound or healthy again." +
        "<br><br>" +
        "(C) 'rest' means to cease work or movement in order to relax, refresh oneself, or recover strength." +
        "<br><br>" +
        "(D) 'relax' means to make or become less tense or anxious.",
    chinese_explanation: "(B) '摩擦' 意味着因摩擦而使某物疼痛。" +
        "<br><br>" +
        "(A) '治愈' 意味着恢复健康或健全。" +
        "<br><br>" +
        "(C) '休息' 意味着停止工作或运动以放松、恢复精力或恢复力量。" +
        "<br><br>" +
        "(D) '放松' 意味着使紧张或焦虑减轻。"
    },
    {
        id: 6,
        question: "The doctor managed to __________ him from continuing his unhealthy eating habits.",
        chinese_question: "医生设法 __________ 他继续不健康的饮食习惯。",
        answers: [
                { option: "A", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
                { option: "B", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dissuade' means to persuade someone not to take a particular course of action." +
                "<br><br>" +
                "(B) 'promote' means to further the progress of something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'applaud' means to show approval or praise by clapping.",
        chinese_explanation: "(A) '劝阻' 意味着说服某人不采取某一特定行动。" +
                "<br><br>" +
                "(B) '促进' 意味着促进某事的发展。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '鼓掌' 意味着通过鼓掌表示赞同或赞扬。"
    },
    {
        id: 7,
        question: "The speaker had to __________ his entire speech when the teleprompter malfunctioned.",
        chinese_question: "当提词器发生故障时，演讲者不得不 __________ 他的整个演讲。",
        answers: [
                { option: "A", answer: "extemporize", chinese_answer: "即兴创作", chinese_romanization: "jíxìng chuàngzuò" },
                { option: "B", answer: "rehearse", chinese_answer: "排练", chinese_romanization: "páiliàn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "memorize", chinese_answer: "记住", chinese_romanization: "jì zhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extemporize' means to compose, perform, or produce something such as music or a speech without preparation; improvise." +
                "<br><br>" +
                "(B) 'rehearse' means to practice for a performance." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'memorize' means to learn by heart.",
        chinese_explanation: "(A) '即兴创作' 意味着在没有准备的情况下创作、表演或制作某物，如音乐或演讲；即兴发挥。" +
                "<br><br>" +
                "(B) '排练' 意味着为表演进行练习。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '记住' 意味着记在心里。"
    },
    {
        id: 8,
        question: "Ever since that tragic accident, the memory of that day was __________ in her mind forever and haunted her every waking moment.",
        chinese_question: "自那场悲惨的事故以来，那天的记忆永远 __________ 在她的脑海里，时刻困扰着她。",
        answers: [
                { option: "A", answer: "erased", chinese_answer: "擦除", chinese_romanization: "cāchú" },
                { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "forgotten", chinese_answer: "遗忘", chinese_romanization: "yíwàng" },
                { option: "D", answer: "inscribed", chinese_answer: "铭刻", chinese_romanization: "míngkè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inscribed' means to mark or engrave deeply, used figuratively here to mean a memory deeply embedded in someone's mind." +
                "<br><br>" +
                "(A) 'erased' means to remove all traces of something." +
                "<br><br>" +
                "(B) 'supported' means to give assistance to." +
                "<br><br>" +
                "(C) 'forgotten' means to fail to remember something.",
        chinese_explanation: "(D) '铭刻' 意味着深深刻在某物上，这里是比喻用法，表示记忆深深嵌入某人的脑海中。" +
                "<br><br>" +
                "(A) '擦除' 意味着去除所有痕迹。" +
                "<br><br>" +
                "(B) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(C) '遗忘' 意味着未能记住某事。"
    },
    {
        id: 9,
        question: "The new policy implementation caused the department to __________, as no one knew exactly what to do.",
        chinese_question: "新政策的实施导致部门 __________，因为没有人确切知道该怎么做。",
        answers: [
                { option: "A", answer: "succeed", chinese_answer: "成功", chinese_romanization: "chénggōng" },
                { option: "B", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
                { option: "C", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flounder' used figuratively means to struggle or have difficulty." +
                "<br><br>" +
                "(A) 'succeed' means to achieve the desired aim or result." +
                "<br><br>" +
                "(C) 'organize' means to arrange or coordinate." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '挣扎' 在比喻意义上指困难或挣扎。" +
                "<br><br>" +
                "(A) '成功' 意味着实现预期的目标或结果。" +
                "<br><br>" +
                "(C) '组织' 意味着安排或协调。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 10,
        question: "She had to __________ through her notes to prepare for the exam.",
        chinese_question: "她必须 __________ 她的笔记来准备考试。",
        answers: [
                { option: "A", answer: "ferret", chinese_answer: "搜索", chinese_romanization: "sōusuǒ" },
                { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "memorize", chinese_answer: "记住", chinese_romanization: "jì zhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ferret' means to search tenaciously for and find something." +
                "<br><br>" +
                "(B) 'discard' means to get rid of something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'memorize' means to commit to memory.",
        chinese_explanation: "(A) '搜索' 意味着坚韧地搜索并找到某物。" +
                "<br><br>" +
                "(B) '丢弃' 意味着摆脱某物。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '记住' 意味着记在心里。"
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
