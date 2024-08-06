// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She felt __________ by her boss's constant demands and unrealistic expectations.",
        chinese_question: "她感到被老板不断的要求和不切实际的期望__________。",
        answers: [
            { option: "A", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "appreciated", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" },
            { option: "C", answer: "badgered", chinese_answer: "骚扰", chinese_romanization: "sāorǎo" },
            { option: "D", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'badgered' means repeatedly ask (someone) to do something; pester. Figuratively, it can mean feeling pressured or harassed by constant demands." +
            "<br><br>" +
            "(A) 'assisted' means helped (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(B) 'appreciated' means recognized the full worth of." +
            "<br><br>" +
            "(D) 'praised' means expressed warm approval or admiration of.",
        chinese_explanation: "(C) '骚扰'一词意味着反复要求（某人）做某事；纠缠。比喻地，它可以表示因不断的要求而感到压力或困扰。" +
            "<br><br>" +
            "(A) '帮助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(B) '感谢' 意味着认识到的全部价值。" +
            "<br><br>" +
            "(D) '赞美' 意味着表达温暖的赞同或钦佩。"
    },
    {
        id: 2,
    question: "The small business __________ to stay afloat during the economic downturn.",
    chinese_question: "在经济衰退期间，小企业 __________ 维持运营。",
    answers: [
        { option: "A", answer: "flourished", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
        "<br><br>" +
        "(A) 'flourished' means to develop rapidly and successfully; thrive." +
        "<br><br>" +
        "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
        "<br><br>" +
        "(A) '繁荣' 意味着快速发展并取得成功；兴旺。" +
        "<br><br>" +
        "(C) '庆祝' 意味着以社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 3,
    question: "To escape the rising water, they had to __________ onto the roof of the building.",
    chinese_question: "为了逃避上升的水，他们不得不 __________ 上建筑物的屋顶。",
    answers: [
        { option: "A", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "B", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" },
        { option: "C", answer: "clamber", chinese_answer: "攀爬", chinese_romanization: "pānpá" },
        { option: "D", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'clamber' means to climb or move in an awkward and laborious way, typically using both hands and feet." +
        "<br><br>" +
        "(A) 'descend' means to move or fall downward." +
        "<br><br>" +
        "(B) 'slide' means to move smoothly along a surface." +
        "<br><br>" +
        "(D) 'stroll' means to walk in a leisurely way.",
    chinese_explanation: "(C) '攀爬' 意味着以笨拙和费力的方式攀登或移动，通常使用双手和双脚。" +
        "<br><br>" +
        "(A) '下降' 意味着向下移动或落下。" +
        "<br><br>" +
        "(B) '滑动' 意味着沿着表面平滑移动。" +
        "<br><br>" +
        "(D) '漫步' 意味着悠闲地走。"
    },
    {
        id: 4,
        question: "After the case was dismissed, the judge ordered the clerk to __________ the defendant’s record by eliminating all traces of it.",
        chinese_question: "案件被驳回后，法官命令书记员通过消除所有记录来 __________ 被告的记录。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "expunge", chinese_answer: "删除", chinese_romanization: "shānchú" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "D", answer: "document", chinese_answer: "记录", chinese_romanization: "jìlù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'expunge' means to erase or remove completely." +
            "<br><br>" +
            "(A) 'preserve' means to maintain or keep intact." +
            "<br><br>" +
            "(C) 'complicate' means to make more complex." +
            "<br><br>" +
            "(D) 'document' means to record in detail.",
        chinese_explanation: "(B) '删除' 一词意味着完全抹去或移除。" +
            "<br><br>" +
            "(A) '保留' 意味着保持或保持完整。" +
            "<br><br>" +
            "(C) '复杂化' 意味着使变得更复杂。" +
            "<br><br>" +
            "(D) '记录' 意味着详细记录。"
    },
    {
        id: 5,
        question: "Ignoring your responsibilities can __________ your chances of success.",
        chinese_question: "忽视你的责任会 __________ 你成功的机会。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undermine' means to weaken or damage something or someone, especially gradually." +
            "<br><br>" +
            "(A) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'improve' means to make or become better." +
            "<br><br>" +
            "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(B) '削弱'一词意味着削弱或损害某事或某人，尤其是逐渐地。" +
            "<br><br>" +
            "(A) '增加' 意味着变得或使更大。" +
            "<br><br>" +
            "(C) '改善' 意味着使变得更好。" +
            "<br><br>" +
            "(D) '提高' 意味着加强、增加或进一步改善质量、价值或程度。"
    },
    {
        id: 6,
        question: "The manual is designed to __________ all the steps required to assemble the furniture.",
        chinese_question: "该手册旨在 __________ 组装家具所需的所有步骤。",
        answers: [
            { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
            { option: "B", answer: "generalize", chinese_answer: "概括", chinese_romanization: "gàikuò" },
            { option: "C", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' figuratively means to mention (a number of things) one by one." +
            "<br><br>" +
            "(B) 'generalize' means to make a general or broad statement by inferring from specific cases." +
            "<br><br>" +
            "(C) 'minimize' means to reduce (something, especially something unwanted or unpleasant) to the smallest possible amount or degree." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(A) '列举' 在此语境下比喻一一提到（若干事情）。" +
            "<br><br>" +
            "(B) '概括' 意味着通过推断具体情况来做出一个一般性或广泛性的陈述。" +
            "<br><br>" +
            "(C) '最小化' 意味着将（某事物，特别是不想要或不愉快的事物）减少到尽可能小的程度或程度。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 7,
        question: "The friendship between them has __________ despite the long distances and years apart.",
        chinese_question: "尽管相隔遥远，分别多年，他们之间的友谊依然 __________。",
        answers: [
            { option: "A", answer: "endured", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "B", answer: "faded", chinese_answer: "逐渐消失", chinese_romanization: "zhújiàn xiāoshī" },
            { option: "C", answer: "weakened", chinese_answer: "变弱", chinese_romanization: "biànruò" },
            { option: "D", answer: "dissolved", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endured' figuratively means to remain in existence; last." +
            "<br><br>" +
            "(B) 'faded' means to gradually grow faint and disappear." +
            "<br><br>" +
            "(C) 'weakened' means to make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(D) 'dissolved' means to close down or dismiss.",
        chinese_explanation: "(A) '持续' 在此语境下比喻继续存在；持续。" +
            "<br><br>" +
            "(B) '逐渐消失' 意味着逐渐变得模糊并消失。" +
            "<br><br>" +
            "(C) '变弱' 意味着在力量、决心或体力上变得更弱。" +
            "<br><br>" +
            "(D) '解散' 意味着关闭或解散。"
    },
    {
        id: 8,
  question: "After losing the intense negotiation, the diplomat decided to __________ the terms and end the discussion.",
  chinese_question: "在激烈的谈判失败后，外交官决定 __________ 条款并结束讨论。",
  answers: [
    { option: "A", answer: "substantiate", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
    { option: "B", answer: "elucidate", chinese_answer: "阐明", chinese_romanization: "chǎnmíng" },
    { option: "C", answer: "perpetuate", chinese_answer: "使永存", chinese_romanization: "shǐ yǒngcún" },
    { option: "D", answer: "concede", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
  ],
  correctAnswer: "D",
  explanation: "(D) 'concede' means to admit or acknowledge something, often reluctantly." +
      "<br><br>" +
      "(A) 'substantiate' means to provide evidence to support or prove the truth of something." +
      "<br><br>" +
      "(B) 'elucidate' means to make something clear or explain." +
      "<br><br>" +
      "(C) 'perpetuate' means to make something continue indefinitely.",
  chinese_explanation: "(D) '承认' 意味着承认或认可某事，通常是不情愿地。" +
      "<br><br>" +
      "(A) '证实' 意味着提供证据以支持或证明某事的真实性。" +
      "<br><br>" +
      "(B) '阐明' 意味着使某事清楚或解释。" +
      "<br><br>" +
      "(C) '使永存' 意味着使某事无限期地持续下去。"
    },
    {
        id: 9,
        question: "The alarming news __________ the residents to demand better safety measures in their neighborhood.",
        chinese_question: "令人担忧的消息 __________ 居民们要求在他们的社区实施更好的安全措施。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "B", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "overlooked", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' figuratively means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'delayed' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'overlooked' means to fail to notice something.",
        chinese_explanation: "(A) '促使' 在此语境下比喻导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 10,
    question: "Parents often try to __________ their children towards good habits.",
    chinese_question: "父母经常试图将孩子 __________ 向良好的习惯。",
    answers: [
        { option: "A", answer: "push", chinese_answer: "推", chinese_romanization: "tuī" },
        { option: "B", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "harm", chinese_answer: "伤害", chinese_romanization: "shānghài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'steer' means to guide or control the movement or course of something." +
        "<br><br>" +
        "(A) 'push' means to exert force on someone or something in order to move them away from oneself." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'harm' means to cause physical injury or mental damage.",
    chinese_explanation: "(B) '引导' 意味着引导或控制某物的运动或进程。" +
        "<br><br>" +
        "(A) '推' 意味着对某人或某物施加力量以将其从自己身边移开。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '伤害' 意味着造成身体伤害或精神损害。"
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
