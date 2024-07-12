// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Starting a business was an __________ adventure for him, filled with risks and uncertainties.",
        chinese_question: "创业对他来说是一项 __________ 的冒险，充满了风险和不确定性。",
        answers: [
            { option: "A", answer: "established", chinese_answer: "已建立的", chinese_romanization: "yǐ jiànlì de" },
            { option: "B", answer: "uncharted", chinese_answer: "未知的", chinese_romanization: "wèizhī de" },
            { option: "C", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'uncharted' means not mapped or surveyed." +
            "<br><br>" +
            "(A) 'established' means having been in existence for a long time and therefore recognized and generally accepted." +
            "<br><br>" +
            "(C) 'routine' means a sequence of actions regularly followed." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(B) '未知的' 意味着未绘制地图或未勘测的。" +
            "<br><br>" +
            "(A) '已建立的' 意味着存在已久，因此被认可和普遍接受的。" +
            "<br><br>" +
            "(C) '常规的' 意味着定期遵循的一系列动作。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够预测的。"
    },
    {
        id: 2,
        question: "His __________ email reply suggested he was too busy to engage in a lengthy conversation.",
        chinese_question: "他 __________ 的邮件回复表明他太忙了，无法进行长时间的对话。",
        answers: [
            { option: "A", answer: "expansive", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
            { option: "B", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "terse", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "D", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(A) 'expansive' means covering a wide area in terms of space or scope; extensive or wide-ranging." +
            "<br><br>" +
            "(B) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts; showing attention to detail.",
        chinese_explanation: "(C) '简短的' 意味着用词节省；突然的。" +
            "<br><br>" +
            "(A) '广泛的' 意味着在空间或范围方面覆盖很大的区域；广泛或全面的。" +
            "<br><br>" +
            "(B) '冗长的' 意味着使用或表达的词比需要的更多。" +
            "<br><br>" +
            "(D) '详细的' 意味着有很多细节或事实；表现出对细节的关注。"
    },
    {
        id: 3,
        question: "The charity focuses on providing __________ aid, such as food and clothing, to those in need.",
        chinese_question: "慈善机构专注于提供 __________ 的援助，例如食物和衣物，给有需要的人。",
        answers: [
            { option: "A", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
            { option: "B", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
            { option: "C", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
            { option: "D", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tangible' means perceptible by touch; clear and definite; real." +
            "<br><br>" +
            "(A) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application." +
            "<br><br>" +
            "(B) 'intangible' means unable to be touched or grasped; not having a physical presence." +
            "<br><br>" +
            "(C) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence.",
        chinese_explanation: "(D) '有形的' 意味着可以触摸到的；清晰而确定的；真实的。" +
            "<br><br>" +
            "(A) '理论的' 意味着关注或涉及某一学科或领域的理论而不是其实际应用的。" +
            "<br><br>" +
            "(B) '无形的' 意味着无法触及或抓住的；没有物理存在的。" +
            "<br><br>" +
            "(C) '抽象的' 意味着存在于思想中或作为一种想法而没有物理或具体存在的。"
    },
    {
        id: 4,
    question: "It was a __________ decision to save money for emergencies rather than spending it all on luxury items.",
    chinese_question: "存钱以备紧急情况而不是将其全部花在奢侈品上是一个 __________ 的决定。",
    answers: [
        { option: "A", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
        { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
        { option: "C", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
        { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prudent' means acting with or showing care and thought for the future." +
        "<br><br>" +
        "(B) 'reckless' means without thinking or caring about the consequences of an action." +
        "<br><br>" +
        "(C) 'impulsive' means acting or done without forethought." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(A) '谨慎的' 意味着为未来行动或表现出关心和考虑。" +
        "<br><br>" +
        "(B) '鲁莽的' 意味着不考虑行为后果的。" +
        "<br><br>" +
        "(C) '冲动的' 意味着未经深思熟虑的行为或行动。" +
        "<br><br>" +
        "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。"
    },
    {
        id: 5,
    question: "Fashion trends are __________, constantly evolving with each season.",
    chinese_question: "时尚潮流是 __________ 的，每个季节都在不断演变。",
    answers: [
        { option: "A", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
        { option: "B", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
        { option: "C", answer: "mutable", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
        { option: "D", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mutable' means liable to change." +
        "<br><br>" +
        "(A) 'fixed' means fastened securely in position." +
        "<br><br>" +
        "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
        "<br><br>" +
        "(D) 'enduring' means continuing or long-lasting.",
    chinese_explanation: "(C) '易变的' 意味着容易改变的。" +
        "<br><br>" +
        "(A) '固定的' 意味着牢固地固定在位置上的。" +
        "<br><br>" +
        "(B) '永久的' 意味着持续或意图无限期保持不变的。" +
        "<br><br>" +
        "(D) '持久的' 意味着持续或长期的。"
    },
    {
        id: 6,
    question: "Her __________ resemblance to the portrait painted centuries ago was the talk of the town.",
    chinese_question: "她与几百年前绘制的画像 __________ 的相似之处成了全城热议的话题。",
    answers: [
        { option: "A", answer: "familiar", chinese_answer: "熟悉", chinese_romanization: "shúxī" },
        { option: "B", answer: "uncanny", chinese_answer: "神秘", chinese_romanization: "shénmì" },
        { option: "C", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
        { option: "D", answer: "expected", chinese_answer: "预期", chinese_romanization: "yùqī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'uncanny' means strange or mysterious, especially in an unsettling way." +
        "<br><br>" +
        "(A) 'familiar' means well known from long or close association." +
        "<br><br>" +
        "(C) 'common' means occurring, found, or done often; prevalent." +
        "<br><br>" +
        "(D) 'expected' means regarded as likely to happen.",
    chinese_explanation: "(B) '神秘' 意味着奇怪或神秘，尤其是令人不安的方式。" +
        "<br><br>" +
        "(A) '熟悉' 意味着因长期或密切联系而众所周知。" +
        "<br><br>" +
        "(C) '常见' 意味着经常发生、发现或完成；普遍的。" +
        "<br><br>" +
        "(D) '预期' 意味着被认为可能发生。"
    },
    {
        id: 7,
        question: "The __________ gap between the rich and the poor continues to be a significant issue.",
        chinese_question: "贫富之间的__________差距继续成为一个重大问题。",
        answers: [
            { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
            { option: "B", answer: "widening", chinese_answer: "扩大的", chinese_romanization: "kuòdà de" },
            { option: "C", answer: "reducing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" },
            { option: "D", answer: "shrinking", chinese_answer: "收缩的", chinese_romanization: "shōusuō de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'widening' means becoming larger in distance from side to side; expanding." +
            "<br><br>" +
            "(A) 'narrowing' means becoming smaller in width or extent." +
            "<br><br>" +
            "(C) 'reducing' means making smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'shrinking' means becoming smaller in size or amount.",
        chinese_explanation: "(B) '扩大的'一词意味着从一侧到另一侧的距离变大；扩展的。" +
            "<br><br>" +
            "(A) '缩小的' 意味着在宽度或范围上变小的。" +
            "<br><br>" +
            "(C) '减少的' 意味着在数量、程度或大小上变小的。" +
            "<br><br>" +
            "(D) '收缩的' 意味着在大小或数量上变小的。"
    },
    {
        id: 8,
        question: "The theme of love is __________ in the poet's work, appearing in almost every poem.",
        chinese_question: "爱的主题在这位诗人的作品中是 __________ 的，几乎出现在每一首诗中。",
        answers: [
            { option: "A", answer: "absent", chinese_answer: "缺席的", chinese_romanization: "quēxí de" },
            { option: "B", answer: "uncommon", chinese_answer: "不常见的", chinese_romanization: "bù chángjiàn de" },
            { option: "C", answer: "omnipresent", chinese_answer: "无处不在的", chinese_romanization: "wúchù bùzài de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omnipresent' means widely or constantly encountered; common or widespread." +
            "<br><br>" +
            "(A) 'absent' means not present in a place, at an occasion, or as part of something." +
            "<br><br>" +
            "(B) 'uncommon' means out of the ordinary; rare." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(C) '无处不在的' 意味着广泛或持续地遇到的；普遍的。" +
            "<br><br>" +
            "(A) '缺席的' 意味着不在某个地方、场合或某事的一部分。" +
            "<br><br>" +
            "(B) '不常见的' 意味着不寻常的；罕见的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着如此小或不重要，不值得考虑的。"
    },
    {
        id: 9,
    question: "He took the necessary precautions to ensure the experiment was __________.",
    chinese_question: "他采取了必要的预防措施，以确保实验 __________ 。",
    answers: [
        { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "B", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "C", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
        { option: "D", answer: "haphazard", chinese_answer: "杂乱无章", chinese_romanization: "záluàn wú zhāng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
        "<br><br>" +
        "(B) 'reckless' means without thinking or caring about the consequences of an action." +
        "<br><br>" +
        "(C) 'uncertain' means not able to be relied on; not known or definite." +
        "<br><br>" +
        "(D) 'haphazard' means lacking any obvious principle of organization.",
    chinese_explanation: "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
        "<br><br>" +
        "(B) '鲁莽' 意味着不考虑行动的后果。" +
        "<br><br>" +
        "(C) '不确定' 意味着不能依赖；未知或不确定。" +
        "<br><br>" +
        "(D) '杂乱无章' 意味着缺乏任何明显的组织原则。"
    },
    {
        id: 10,
    question: "His __________ attempt to apologize only made the situation worse.",
    chinese_question: "他 __________ 的道歉尝试只会让情况变得更糟。",
    answers: [
        { option: "A", answer: "smooth", chinese_answer: "平滑的", chinese_romanization: "pínghuá de" },
        { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
        { option: "D", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'awkward' means causing difficulty; hard to deal with; uncomfortable." +
        "<br><br>" +
        "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
        "<br><br>" +
        "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
        "<br><br>" +
        "(D) 'elegant' means pleasingly graceful and stylish in appearance or manner.",
    chinese_explanation: "(C) “尴尬的” 意味着造成困难；难以处理；不舒服的。" +
        "<br><br>" +
        "(A) '平滑的' 意味着具有平整和规则的表面或一致性；没有明显的凸起、疙瘩或凹痕。" +
        "<br><br>" +
        "(B) '自信的' 意味着对自己有信心或表现出自信；自信的。" +
        "<br><br>" +
        "(D) '优雅的' 意味着外观或举止令人愉悦地优雅和时尚。"
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
