// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The journalist’s article was filled with __________, lacking verified information and based mostly on rumours.",
        chinese_question: "记者的文章充满了 __________，缺乏经核实的信息，主要基于谣言。",
        answers: [
                { option: "A", answer: "facts", chinese_answer: "事实", chinese_romanization: "shìshí" },
                { option: "B", answer: "conjecture", chinese_answer: "推测", chinese_romanization: "tuīcè" },
                { option: "C", answer: "truths", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
                { option: "D", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conjecture' means an opinion or conclusion formed on the basis of incomplete information." +
                "<br><br>" +
                "(A) 'facts' means things that are known or proved to be true." +
                "<br><br>" +
                "(C) 'truths' means the quality or state of being true." +
                "<br><br>" +
                "(D) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid.",
        chinese_explanation: "(B) '推测'一词意味着在不完全信息的基础上形成的意见或结论。" +
                "<br><br>" +
                "(A) '事实' 意味着已知或被证明是真实的事情。" +
                "<br><br>" +
                "(C) '真相' 意味着真实的质量或状态。" +
                "<br><br>" +
                "(D) '证据' 意味着表明某一信念或命题真实或有效的事实或信息的可用集合。"
    },
    {
        id: 2,
    question: "The decision to cut down the forest for development was a __________ to the local wildlife.",
    chinese_question: "砍伐森林用于开发的决定对当地野生动物是一个 __________。",
    answers: [
        { option: "A", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
        { option: "B", answer: "detriment", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
        { option: "C", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
        { option: "D", answer: "gain", chinese_answer: "增益", chinese_romanization: "zēngyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'detriment' means a cause of harm or damage." +
        "<br><br>" +
        "(A) 'benefit' means an advantage or profit gained from something." +
        "<br><br>" +
        "(C) 'asset' means a useful or valuable thing, person, or quality." +
        "<br><br>" +
        "(D) 'gain' means an increase in wealth or resources.",
    chinese_explanation: "(B) '损害' 一词意味着造成伤害或损害的原因。" +
        "<br><br>" +
        "(A) '益处' 意味着从某事中获得的优势或利润。" +
        "<br><br>" +
        "(C) '资产' 意味着有用或有价值的事物、人物或品质。" +
        "<br><br>" +
        "(D) '增益' 意味着财富或资源的增加。"
    },
    {
        id: 3,
    question: "The playful __________ between siblings, such as joking about each other's habits and making sarcastic comments, livened up the family dinner.",
    chinese_question: "兄弟姐妹之间的打趣，例如开玩笑谈论彼此的习惯和讽刺的评论， __________ 让家庭晚餐变得热闹。",
    answers: [
        { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "B", answer: "jibes", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "advice", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'jibes' used figuratively means mocking or sarcastic remarks." +
        "<br><br>" +
        "(A) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'advice' means guidance or recommendations concerning prudent future action.",
    chinese_explanation: "(B) '嘲讽' 在比喻意义上指嘲弄或讽刺的言辞。" +
        "<br><br>" +
        "(A) '沉默' 意味着完全没有声音。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '建议' 意味着关于未来谨慎行动的指导或建议。"
    },
    {
        id: 4,
        question: "The event, which was supposed to be a grand celebration, turned into a __________ when the main performer didn't show up.",
        chinese_question: "原本应该是一场盛大庆典的活动，由于主表演者没有出现而变成了一场 __________。",
        answers: [
                { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
                { option: "B", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
                { option: "C", answer: "highlight", chinese_answer: "高潮", chinese_romanization: "gāocháo" },
                { option: "D", answer: "victory", chinese_answer: "胜利", chinese_romanization: "shènglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'debacle' means a sudden and ignominious failure; a fiasco." +
                "<br><br>" +
                "(A) 'success' means the accomplishment of an aim or purpose." +
                "<br><br>" +
                "(C) 'highlight' means an outstanding part of an event or period of time." +
                "<br><br>" +
                "(D) 'victory' means an act of defeating an enemy or opponent in a battle, game, or other competition.",
        chinese_explanation: "(B) '崩溃' 意味着突然的、可耻的失败；一场惨败。" +
                "<br><br>" +
                "(A) '成功' 意味着实现一个目标或目的。" +
                "<br><br>" +
                "(C) '高潮' 意味着一个事件或时间段的突出部分。" +
                "<br><br>" +
                "(D) '胜利' 意味着在战斗、比赛或其他竞争中击败敌人或对手的行为。"
    },
    {
        id: 5,
        question: "The date of the attack will live in __________, remembered as a day of great tragedy and loss.",
        chinese_question: "袭击的日期将永远 __________，被记住为一个重大悲剧和损失的日子。",
        answers: [
                { option: "A", answer: "glory", chinese_answer: "荣耀", chinese_romanization: "róngyào" },
                { option: "B", answer: "infamy", chinese_answer: "恶名", chinese_romanization: "èmíng" },
                { option: "C", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "honor", chinese_answer: "荣誉", chinese_romanization: "róngyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'infamy' means the state of being well known for some bad quality or deed." +
                "<br><br>" +
                "(A) 'glory' means high renown or honor won by notable achievements." +
                "<br><br>" +
                "(C) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
                "<br><br>" +
                "(D) 'honor' means high respect or esteem.",
        chinese_explanation: "(B) '恶名'一词意味着因某种坏品质或行为而众所周知的状态。" +
                "<br><br>" +
                "(A) '荣耀' 意味着因显著成就而赢得的高度声望或荣誉。" +
                "<br><br>" +
                "(C) '庆祝' 意味着通过参与愉快的、通常是社交的活动来标记对重要事件或场合的愉悦。" +
                "<br><br>" +
                "(D) '荣誉' 意味着高度的尊重或敬仰。"
    },
    {
        id: 6,
        question: "The novelist's latest book pays __________ to the influential authors of the past century by incorporating their writing styles and themes.",
        chinese_question: "这位小说家的新书通过融合他们的写作风格和主题向上世纪的影响力作家们致以 __________。",
        answers: [
                { option: "A", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
                { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'homage' figuratively means showing respect or honor to someone or something, often by imitating or referencing them in one's own work." +
                "<br><br>" +
                "(B) 'disregard' means lack of consideration or attention to something." +
                "<br><br>" +
                "(C) 'ridicule' means subjecting someone or something to contemptuous and dismissive language or behavior." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '致敬' 在此语境下意指通过在自己的作品中模仿或引用某人或某事来表示尊敬或荣誉。" +
                "<br><br>" +
                "(B) '忽视' 意味着对某事缺乏考虑或关注。" +
                "<br><br>" +
                "(C) '嘲笑' 意味着对某人或某事的轻蔑和不屑的言语或行为。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
        question: "The manager had serious __________ about the new hire's qualifications, fearing that he might not be up to the job.",
        chinese_question: "经理对新员工的资格有严重的 __________，担心他可能无法胜任这份工作。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "certainties", chinese_answer: "确定", chinese_romanization: "quèdìng" },
                { option: "C", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
                { option: "D", answer: "hopes", chinese_answer: "希望", chinese_romanization: "xīwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' figuratively means uneasy feelings of doubt, worry, or fear, especially about one's own conduct; misgivings." +
                "<br><br>" +
                "(B) 'certainties' means firm conviction that something is the case." +
                "<br><br>" +
                "(C) 'trust' means firm belief in the reliability, truth, or ability of someone or something." +
                "<br><br>" +
                "(D) 'hopes' means a feeling of expectation and desire for a certain thing to happen.",
        chinese_explanation: "(A) '不安' 在此语境下意指对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '确定' 意味着对某事的坚定信念。" +
                "<br><br>" +
                "(C) '信任' 意味着对某人或某事可靠性、真实性或能力的坚定信念。" +
                "<br><br>" +
                "(D) '希望' 意味着对某事发生的期望和愿望。"
    },
    {
        id: 8,
    question: "Whenever he saw injustice, he felt an __________ to intervene and help the victim.",
    chinese_question: "每当看到不公正现象时，他就会有一种 __________ 想要干预并帮助受害者。",
    answers: [
        { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "B", answer: "urge", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'urge' means a strong desire or impulse." +
                "<br><br>" +
                "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(C) 'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '冲动'一词意味着强烈的愿望或冲动。" +
                "<br><br>" +
                "(A) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(C) '勉强' 意味着不愿意或不情愿做某事。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 9,
        question: "Much to her __________, the promotion she had been counting on was given to someone else.",
        chinese_question: "令她非常 __________ 的是，她一直期待的晋升被给了别人。",
        answers: [
                { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
                { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
                { option: "C", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "D", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chagrin' figuratively means feeling distressed or humiliated because of a disappointment or setback." +
                "<br><br>" +
                "(A) 'delight' means great pleasure." +
                "<br><br>" +
                "(C) 'amusement' means the state or experience of finding something funny." +
                "<br><br>" +
                "(D) 'confidence' means the feeling or belief that one can rely on someone or something.",
        chinese_explanation: "(B) '懊恼' 在此语境下意指因为失望或挫折而感到苦恼或羞辱。" +
                "<br><br>" +
                "(A) '高兴' 意味着极大的愉悦。" +
                "<br><br>" +
                "(C) '娱乐' 意味着发现某事有趣的状态或体验。" +
                "<br><br>" +
                "(D) '信心' 意味着可以依赖某人或某事的感觉或信念。"
    },
    {
        id: 10,
        question: "The dictator ruled the country with __________, suppressing any opposition without fear of consequences.",
        chinese_question: "这位独裁者统治国家时肆无忌惮地镇压任何反对声音，毫无后顾之忧。",
        answers: [
                { option: "A", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" },
                { option: "B", answer: "fairness", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
                { option: "C", answer: "justice", chinese_answer: "正义", chinese_romanization: "zhèngyì" },
                { option: "D", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impunity' means exemption from punishment or freedom from the injurious consequences of an action." +
                "<br><br>" +
                "(B) 'fairness' means the quality of making judgments that are free from discrimination." +
                "<br><br>" +
                "(C) 'justice' means just behavior or treatment." +
                "<br><br>" +
                "(D) 'transparency' means the condition of being transparent.",
        chinese_explanation: "(A) '免罚' 意味着免受惩罚或免于行为带来的伤害性后果。" +
                "<br><br>" +
                "(B) '公平' 意味着做出不带歧视的判断的质量。" +
                "<br><br>" +
                "(C) '正义' 意味着正当的行为或待遇。" +
                "<br><br>" +
                "(D) '透明' 意味着透明的状态。"
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
