// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The factory was shut down due to its failure to maintain __________ with environmental regulations, leading to severe pollution.",
    chinese_question: "由于未能遵守环境法规，工厂被关闭，导致严重污染。",
    answers: [
        { option: "A", answer: "compliance", chinese_answer: "合规", chinese_romanization: "hégūi" },
        { option: "B", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
        { option: "C", answer: "rebellion", chinese_answer: "反叛", chinese_romanization: "fǎnpàn" },
        { option: "D", answer: "nonconformity", chinese_answer: "不符合", chinese_romanization: "bù fúhé" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'compliance' means the action or fact of complying with a wish or command." +
        "<br><br>" +
        "(B) 'defiance' means open resistance; bold disobedience." +
        "<br><br>" +
        "(C) 'rebellion' means an act of violent or open resistance to an established government or ruler." +
        "<br><br>" +
        "(D) 'nonconformity' means failure or refusal to conform to a prevailing rule or practice.",
    chinese_explanation: "(A) '合规' 意味着遵从愿望或命令的行为或事实。" +
        "<br><br>" +
        "(B) '反抗' 意味着公开抵抗；大胆的不服从。" +
        "<br><br>" +
        "(C) '反叛' 意味着对既定政府或统治者的暴力或公开抵抗行为。" +
        "<br><br>" +
        "(D) '不符合' 意味着未能或拒绝遵从现行规则或惯例。"
    },
    {
        id: 2,
    question: "His __________ of lies finally caught up with him, leading to his downfall.",
    chinese_question: "他的 __________ 谎言最终暴露，导致了他的失败。",
    answers: [
        { option: "A", answer: "bundle", chinese_answer: "捆", chinese_romanization: "kǔn" },
        { option: "B", answer: "pack", chinese_answer: "一包", chinese_romanization: "yī bāo" },
        { option: "C", answer: "array", chinese_answer: "一系列", chinese_romanization: "yī xìliè" },
        { option: "D", answer: "piece", chinese_answer: "一块", chinese_romanization: "yī kuài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pack' means a group or collection of related things, often used figuratively." +
        "<br><br>" +
        "(A) 'bundle' means a collection of things, or a quantity of material, tied or wrapped up together." +
        "<br><br>" +
        "(C) 'array' means an impressive display or range of a particular type of thing." +
        "<br><br>" +
        "(D) 'piece' means a portion of an object or of material.",
    chinese_explanation: "(B) '一包' 意味着一组或一组相关的事物，通常比喻使用。" +
        "<br><br>" +
        "(A) '捆' 意味着捆绑在一起的东西或材料的数量。" +
        "<br><br>" +
        "(C) '一系列' 意味着某一类型事物的令人印象深刻的展示或范围。" +
        "<br><br>" +
        "(D) '一块' 意味着物体或材料的一部分。"
    },
    {
        id: 3,
    question: "Traveling during the pandemic posed a significant __________ to his health.",
    chinese_question: "在疫情期间旅行对他的健康构成了重大 __________。",
    answers: [
        { option: "A", answer: "security", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "B", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "C", answer: "safety", chinese_answer: "保障", chinese_romanization: "bǎozhàng" },
        { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'risk' means a situation involving exposure to danger." +
        "<br><br>" +
        "(A) 'security' means the state of being free from danger or threat." +
        "<br><br>" +
        "(C) 'safety' means the condition of being protected from or unlikely to cause danger, risk, or injury." +
        "<br><br>" +
        "(D) 'certainty' means the state of being sure or confident.",
    chinese_explanation: "(B) '风险' 意味着涉及暴露于危险的情况。" +
        "<br><br>" +
        "(A) '安全' 意味着没有危险或威胁的状态。" +
        "<br><br>" +
        "(C) '保障' 意味着保护某人或某事或防止不希望发生的事情的措施。" +
        "<br><br>" +
        "(D) '确定性' 意味着确定或自信的状态。"
    },
    {
        id: 4,
    question: "He went out on a __________ and invested all his savings in the new startup.",
    chinese_question: "他冒险把所有积蓄都投资到了这个新创企业。",
    answers: [
        { option: "A", answer: "limb", chinese_answer: "肢体", chinese_romanization: "zhītǐ" },
        { option: "B", answer: "dream", chinese_answer: "梦", chinese_romanization: "mèng" },
        { option: "C", answer: "branch", chinese_answer: "树枝", chinese_romanization: "shùzhī" },
        { option: "D", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'limb' means taking a risk by doing or saying something that could lead to failure or embarrassment." +
        "<br><br>" +
        "(B) 'dream' means a series of thoughts, images, and sensations occurring in a person's mind during sleep." +
        "<br><br>" +
        "(C) 'branch' means a part of a tree that grows out from the trunk or from a bough." +
        "<br><br>" +
        "(D) 'risk' means a situation involving exposure to danger.",
    chinese_explanation: "(A) '肢体' 在这里指冒险做某事或说某事，这可能导致失败或尴尬。" +
        "<br><br>" +
        "(B) '梦' 意味着人在睡眠中发生的一系列想法、图像和感觉。" +
        "<br><br>" +
        "(C) '树枝' 意味着从树干或树枝上长出的部分。" +
        "<br><br>" +
        "(D) '风险' 意味着涉及暴露于危险的情况。"
    },
    {
        id: 5,
    question: "When the truth finally came to the __________, everyone was shocked.",
    chinese_question: "当真相最终浮出 __________ 时，所有人都震惊了。",
    answers: [
        { option: "A", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
        { option: "B", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
        { option: "C", answer: "bottom", chinese_answer: "底部", chinese_romanization: "dǐbù" },
        { option: "D", answer: "limit", chinese_answer: "极限", chinese_romanization: "jíxiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'surface' means to become apparent or emerge." +
        "<br><br>" +
        "(B) 'end' means the final part of something." +
        "<br><br>" +
        "(C) 'bottom' means the lowest point or part." +
        "<br><br>" +
        "(D) 'limit' means a point or level beyond which something does not or may not extend or pass.",
    chinese_explanation: "(A) '表面' 意味着变得显而易见或浮现。" +
        "<br><br>" +
        "(B) '结束' 意味着某事的最后部分。" +
        "<br><br>" +
        "(C) '底部' 意味着最低点或部分。" +
        "<br><br>" +
        "(D) '极限' 意味着某事不延伸或超出的点或水平。"
    },
    {
        id: 6,
    question: "The artist’s painting was a __________ of vibrant hues and intricate patterns that mesmerized viewers with its complexity and beauty.",
    chinese_question: "艺术家的画作是一幅充满鲜艳色彩和复杂图案的 __________，其复杂性和美感让观众着迷。",
    answers: [
        { option: "A", answer: "doodle", chinese_answer: "涂鸦", chinese_romanization: "túyā" },
        { option: "B", answer: "kaleidoscope", chinese_answer: "万花筒", chinese_romanization: "wànhuātǒng" },
        { option: "C", answer: "blueprint", chinese_answer: "蓝图", chinese_romanization: "lántú" },
        { option: "D", answer: "landscape", chinese_answer: "风景画", chinese_romanization: "fēngjǐng huà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'kaleidoscope' means a constantly changing pattern or sequence of elements." +
        "<br><br>" +
        "(A) 'doodle' means a rough drawing made absentmindedly." +
        "<br><br>" +
        "(C) 'blueprint' means a detailed plan or program of action." +
        "<br><br>" +
        "(D) 'landscape' means a picture representing a view of natural inland scenery.",
    chinese_explanation: "(B) '万花筒' 一词意味着不断变化的元素或序列的图案。" +
        "<br><br>" +
        "(A) '涂鸦' 意味着心不在焉地画的草图。" +
        "<br><br>" +
        "(C) '蓝图' 意味着详细的计划或行动方案。" +
        "<br><br>" +
        "(D) '风景画' 意味着表现自然内陆风景的画作。"
    },
    {
        id: 7,
    question: "His __________ that everyone admired his work was shattered when he received negative feedback that highlighted numerous flaws and criticisms.",
    chinese_question: "他认为每个人都钦佩他的工作，这是他的 __________，在收到指出许多缺陷和批评的负面反馈时被打破了。",
    answers: [
        { option: "A", answer: "knowledge", chinese_answer: "知识", chinese_romanization: "zhīshì" },
        { option: "B", answer: "delusion", chinese_answer: "错觉", chinese_romanization: "cuòjué" },
        { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "D", answer: "obsession", chinese_answer: "痴迷", chinese_romanization: "chīmí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'delusion' means a false belief or judgment about external reality." +
        "<br><br>" +
        "(A) 'knowledge' means facts, information, and skills acquired through experience or education." +
        "<br><br>" +
        "(C) 'confusion' means lack of understanding; uncertainty." +
        "<br><br>" +
        "(D) 'obsession' means an idea or thought that continually preoccupies or intrudes on a person's mind.",
    chinese_explanation: "(B) '错觉' 一词意味着对外部现实的错误信念或判断。" +
        "<br><br>" +
        "(A) '知识' 意味着通过经验或教育获得的事实、信息和技能。" +
        "<br><br>" +
        "(C) '困惑' 意味着缺乏理解；不确定性。" +
        "<br><br>" +
        "(D) '痴迷' 意味着一种持续占据或侵入一个人思想的想法或思维。"
    },
    {
        id: 8,
    question: "She had a strong __________ to speak out against the injustice she witnessed, but she decided to remain silent for the sake of peace.",
    chinese_question: "她有一种强烈的 __________ 想要对目睹的不公正行为发声，但为了和平，她决定保持沉默。",
    answers: [
        { option: "A", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
        { option: "B", answer: "urge", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'urge' means a strong desire or impulse." +
                "<br><br>" +
                "(A) 'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(C) 'aversion' means a strong dislike or disinclination." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '冲动'一词意味着强烈的愿望或冲动。" +
                "<br><br>" +
                "(A) '勉强' 意味着不愿意或不情愿做某事。" +
                "<br><br>" +
                "(C) '厌恶' 意味着强烈的厌恶或不情愿。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 9,
    question: "The politician's speech appealed to the __________ of the voters, promising better living conditions and a brighter future.",
    chinese_question: "这位政客的演讲打动了选民的 __________，承诺更好的生活条件和更光明的未来。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
        { option: "C", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
        "<br><br>" +
        "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(C) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '情感' 一词意味着对某种情况或事件的看法或态度；意见或感觉。" +
        "<br><br>" +
        "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(C) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 10,
    question: "The government’s __________ to the plight of the homeless was criticized by many activists.",
    chinese_question: "政府对无家可归者困境的 __________ 受到了许多活动家的批评。",
    answers: [
        { option: "A", answer: "compassion", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "involvement", chinese_answer: "参与", chinese_romanization: "cānyù" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(A) 'compassion' means sympathetic pity and concern for the sufferings or misfortunes of others." +
        "<br><br>" +
        "(C) 'involvement' means the fact or condition of being involved with or participating in something." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of; hold up.",
    chinese_explanation: "(B) '冷漠' 一词意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(A) '同情' 意味着对他人的痛苦或不幸的同情和关心。" +
        "<br><br>" +
        "(C) '参与' 意味着参与某事的事实或条件。" +
        "<br><br>" +
        "(D) '支持' 意味着承受全部或部分重量；支撑。"
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
