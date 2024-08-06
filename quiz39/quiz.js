// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ coat was warm but made it difficult for him to move around.",
    chinese_question: "这个 __________ 的外套很暖和，但让他很难活动。",
    answers: [
        { option: "A", answer: "lightweight", chinese_answer: "轻便", chinese_romanization: "qīngbiàn" },
        { option: "B", answer: "fitted", chinese_answer: "合身", chinese_romanization: "héshēn" },
        { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
        { option: "D", answer: "snug", chinese_answer: "舒适", chinese_romanization: "shūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bulky' means taking up much space, typically large and unwieldy." +
        "<br><br>" +
        "(A) 'lightweight' means light in weight." +
        "<br><br>" +
        "(B) 'fitted' means made to fit closely." +
        "<br><br>" +
        "(D) 'snug' means comfortably tight or close-fitting.",
    chinese_explanation: "(C) “笨重” 意味着占用很多空间，通常是大而笨拙的。" +
        "<br><br>" +
        "(A) '轻便' 意味着重量轻。" +
        "<br><br>" +
        "(B) '合身' 意味着贴身的。" +
        "<br><br>" +
        "(D) '舒适' 意味着舒适紧密的。"
    },
    {
        id: 2,
    question: "The __________ values instilled in him by his parents guided him throughout his life.",
    chinese_question: "他父母灌输给他的 __________ 价值观指导了他的一生。",
    answers: [
        { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
        { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "C", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'enduring' means lasting over a long period of time; durable." +
        "<br><br>" +
        "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
        "<br><br>" +
        "(B) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(D) 'fragile' means easily broken or damaged.",
    chinese_explanation: "(C) “持久的” 意味着持续很长时间的；耐用的。" +
        "<br><br>" +
        "(A) '暂时的' 意味着只持续有限的时间；非永久的。" +
        "<br><br>" +
        "(B) '短暂的' 意味着持续时间非常短。" +
        "<br><br>" +
        "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 3,
    question: "The company's decision to launch its new product was __________, as it coincided perfectly with the holiday shopping season.",
    chinese_question: "公司决定在假日购物季推出新产品是 __________ 的，因为时机非常合适。",
    answers: [
        { option: "A", answer: "untimely", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" },
        { option: "B", answer: "opportune", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" },
        { option: "C", answer: "inconvenient", chinese_answer: "不方便的", chinese_romanization: "bù fāngbiàn de" },
        { option: "D", answer: "unsuitable", chinese_answer: "不适合的", chinese_romanization: "bù shìhé de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'opportune' means well-chosen or particularly favorable or appropriate." +
        "<br><br>" +
        "(A) 'untimely' means happening at a time that is not suitable or convenient." +
        "<br><br>" +
        "(C) 'inconvenient' means causing trouble, difficulties, or discomfort." +
        "<br><br>" +
        "(D) 'unsuitable' means not fitting or appropriate.",
    chinese_explanation: "(B) '恰当的' 意味着选择得好或特别有利或适当的。" +
        "<br><br>" +
        "(A) '不合时宜的' 意味着在不合适或不方便的时间发生的。" +
        "<br><br>" +
        "(C) '不方便的' 意味着引起麻烦、困难或不适的。" +
        "<br><br>" +
        "(D) '不适合的' 意味着不合适的。"
    },
    {
        id: 4,
    question: "Her __________ beliefs about numbers made her choose dates carefully, avoiding certain numbers she considered unlucky.",
    chinese_question: "她关于数字的 __________ 信念使她仔细选择日期，避开她认为不吉利的数字。",
    answers: [
        { option: "A", answer: "superstitious", chinese_answer: "迷信的", chinese_romanization: "míxìn de" },
        { option: "B", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "C", answer: "informed", chinese_answer: "有见识的", chinese_romanization: "yǒu jiànshí de" },
        { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēi bù zú dào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'superstitious' means having beliefs based on superstition rather than reason or knowledge." +
        "<br><br>" +
        "(B) 'logical' means reasonable or following a clear, rational pattern." +
        "<br><br>" +
        "(C) 'informed' means having or showing knowledge of a particular subject or situation." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(A) '迷信的' 意味着基于迷信而不是理性或知识的信念。" +
        "<br><br>" +
        "(B) '合理的' 意味着合理或遵循清晰、合理的模式。" +
        "<br><br>" +
        "(C) '有见识的' 意味着对特定主题或情况有知识或显示知识。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着价值或重要性很小。"
    },
    {
        id: 5,
    question: "The animal was found weak and __________ after being abandoned for days.",
    chinese_question: "这只动物在被遗弃了几天后被发现虚弱且 __________。",
    answers: [
        { option: "A", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" },
        { option: "B", answer: "fed", chinese_answer: "饱腹的", chinese_romanization: "bǎofù de" },
        { option: "C", answer: "starved", chinese_answer: "挨饿的", chinese_romanization: "ái'è de" },
        { option: "D", answer: "nourished", chinese_answer: "营养充足的", chinese_romanization: "yíngyǎng chōngzú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'starved' means to suffer or die from lack of food." +
        "<br><br>" +
        "(A) 'healthy' means in good health." +
        "<br><br>" +
        "(B) 'fed' means having had sufficient food." +
        "<br><br>" +
        "(D) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition.",
    chinese_explanation: "(C) “挨饿的” 意味着因缺乏食物而受苦或死亡。" +
        "<br><br>" +
        "(A) '健康的' 意味着健康状况良好。" +
        "<br><br>" +
        "(B) '饱腹的' 意味着已经吃饱了。" +
        "<br><br>" +
        "(D) '营养充足的' 意味着提供生长、健康和良好状况所需的食物或其他物质。"
    },
    {
        id: 6,
    question: "The __________ professor was invited to give a keynote speech at the international conference.",
    chinese_question: "这位 __________ 教授被邀请在国际会议上发表主题演讲。",
    answers: [
        { option: "A", answer: "eminent", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
        { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
        { option: "C", answer: "obscure", chinese_answer: "默默无闻", chinese_romanization: "mòmòwúwén" },
        { option: "D", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'eminent' means famous and respected within a particular sphere or profession." +
        "<br><br>" +
        "(B) 'novice' means a person new to or inexperienced in a field or situation." +
        "<br><br>" +
        "(C) 'obscure' means not discovered or known about; uncertain." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(A) '杰出' 意味着在某个领域或职业中著名且受人尊敬。" +
        "<br><br>" +
        "(B) '新手' 意味着在某个领域或情况下新的或没有经验的人。" +
        "<br><br>" +
        "(C) '默默无闻' 意味着未被发现或未知的；不确定的。" +
        "<br><br>" +
        "(D) '次要' 意味着重要性、严重性或意义较小。"
    },
    {
        id: 7,
    question: "The author was known for his __________ attitude, never seeking the spotlight despite his fame.",
    chinese_question: "这位作家以其 __________ 的态度而闻名，尽管他很有名，却从不寻求关注。",
    answers: [
        { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "B", answer: "conceited", chinese_answer: "自负", chinese_romanization: "zìfù" },
        { option: "C", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
        { option: "D", answer: "vain", chinese_answer: "虚荣", chinese_romanization: "xūróng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
        "<br><br>" +
        "(B) 'conceited' means excessively proud of oneself; vain." +
        "<br><br>" +
        "(C) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(D) 'vain' means having or showing an excessively high opinion of one's appearance, abilities, or worth.",
    chinese_explanation: "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估。" +
        "<br><br>" +
        "(B) '自负' 意味着对自己过分自豪；虚荣。" +
        "<br><br>" +
        "(C) '自私' 意味着缺乏对他人的考虑；主要关注自己的个人利益或快乐。" +
        "<br><br>" +
        "(D) '虚荣' 意味着对自己的外表、能力或价值有或表现出过高的评价。"
    },
    {
        id: 8,
    question: "Unlike his neighbor who hesitated, his __________ courage in the face of danger saved many lives.",
    chinese_question: "与他的邻居犹豫不决不同，他在面对危险时表现出的 __________ 勇气拯救了许多生命。",
    answers: [
        { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "B", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" },
        { option: "C", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
        { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'extraordinary' means very unusual or remarkable." +
        "<br><br>" +
        "(A) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(B) 'average' means typical or normal." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(C) “非凡的” 意味着非常不寻常或显著的。" +
        "<br><br>" +
        "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
        "<br><br>" +
        "(B) '一般的' 意味着典型的或正常的。" +
        "<br><br>" +
        "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 9,
    question: "The young athlete was __________ after missing the crucial penalty kick in the final match.",
    chinese_question: "年轻的运动员在决赛中错过关键的点球后感到 __________ 。",
    answers: [
        { option: "A", answer: "thrilled", chinese_answer: "激动", chinese_romanization: "jīdòng" },
        { option: "B", answer: "mortified", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
        { option: "C", answer: "overjoyed", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "amused", chinese_answer: "有趣", chinese_romanization: "yǒuqù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mortified' means to feel extremely embarrassed or ashamed." +
        "<br><br>" +
        "(A) 'thrilled' means feeling intense excitement or elation." +
        "<br><br>" +
        "(C) 'overjoyed' means feeling extremely happy." +
        "<br><br>" +
        "(D) 'amused' means finding something funny or entertaining.",
    chinese_explanation: "(B) '尴尬' 意味着感到极度尴尬或羞愧。" +
        "<br><br>" +
        "(A) '激动' 意味着感到强烈的兴奋或高兴。" +
        "<br><br>" +
        "(C) '高兴' 意味着感到非常高兴。" +
        "<br><br>" +
        "(D) '有趣' 意味着觉得某事有趣或娱乐性。"
    },
    {
        id: 10,
        question: "It was __________ of him to assume he would get the promotion without discussing it with his manager first.",
        chinese_question: "他未经先与经理讨论就假设自己会得到晋升是 __________ 的。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "presumptuous", chinese_answer: "放肆的", chinese_romanization: "fàngsì de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'presumptuous' means failing to observe the limits of what is permitted or appropriate; overconfident or arrogant." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(C) '放肆的' 意味着未能遵守许可或适当的限度；过于自信或傲慢的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己重要性的估计谦逊或较低。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出敬意的。"
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
