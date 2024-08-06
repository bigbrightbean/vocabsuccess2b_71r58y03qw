// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Their team's __________ in preparing for the championship was evident in their flawless performance.",
    chinese_question: "他们团队在为锦标赛做准备时的 __________ 在他们完美的表现中得到了体现。",
    answers: [
        { option: "A", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
        { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
        { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'diligence' means careful and persistent work or effort." +
        "<br><br>" +
        "(A) 'negligence' means failure to take proper care over something." +
        "<br><br>" +
        "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '勤奋' 一词意味着细致和坚持不懈的工作或努力。" +
        "<br><br>" +
        "(A) '疏忽' 意味着未能妥善照顾某事。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
    question: "The __________ of seeing his book published was worth all the late nights and hard work.",
    chinese_question: "看到他的书出版的 __________ 值得所有的熬夜和辛勤工作。",
    answers: [
        { option: "A", answer: "gratification", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "B", answer: "despair", chinese_answer: "绝望", chinese_romanization: "juéwàng" },
        { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gratification' means pleasure, especially when gained from the satisfaction of a desire." +
        "<br><br>" +
        "(B) 'despair' means the complete loss or absence of hope." +
        "<br><br>" +
        "(C) 'confusion' means lack of understanding; uncertainty." +
        "<br><br>" +
        "(D) 'hesitation' means the action of pausing before saying or doing something.",
    chinese_explanation: "(A) '满足' 意味着快乐，尤其是从实现愿望中获得的快乐。" +
        "<br><br>" +
        "(B) '绝望' 意味着完全失去或没有希望。" +
        "<br><br>" +
        "(C) '困惑' 意味着缺乏理解；不确定。" +
        "<br><br>" +
        "(D) '犹豫' 意味着在说或做某事之前的暂停动作。"
    },
    {
        id: 3,
    question: "In __________ to the feedback, the author revised several chapters of the book.",
    chinese_question: "为了回应反馈，作者修改了书中的几个章节。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'response' means a reaction to something." +
        "<br><br>" +
        "(A) 'disregard' means the action or state of disregarding or ignoring something." +
        "<br><br>" +
        "(B) 'avoidance' means the action of keeping away from or not doing something." +
        "<br><br>" +
        "(D) 'silence' means complete absence of sound.",
    chinese_explanation: "(C) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(A) '忽视' 意味着忽视或无视某事的行为或状态。" +
        "<br><br>" +
        "(B) '避免' 意味着远离或不做某事的行为。" +
        "<br><br>" +
        "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 4,
    question: "Every __________ he made to explain the concept only seemed to confuse the students more.",
    chinese_question: "他每次 __________ 解释这个概念，似乎只会让学生更加困惑。",
    answers: [
        { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
        { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "C", answer: "attempt", chinese_answer: "尝试", chinese_romanization: "chángshì" },
        { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'attempt' means an effort to achieve or complete a difficult task or action." +
        "<br><br>" +
        "(A) 'retreat' means to withdraw from an enemy force as a result of their superior power or after a defeat." +
        "<br><br>" +
        "(B) 'success' means the accomplishment of an aim or purpose." +
        "<br><br>" +
        "(D) 'avoidance' means the action of keeping away from or not doing something.",
    chinese_explanation: "(C) '尝试' 意味着努力完成一项困难的任务或行动。" +
        "<br><br>" +
        "(A) '撤退' 意味着在敌方势力强大或战败后撤离。" +
        "<br><br>" +
        "(B) '成功' 意味着实现目标或目的。" +
        "<br><br>" +
        "(D) '避免' 意味着远离或不做某事的行为。"
    },
    {
        id: 5,
    question: "The __________ of the adventurer made him take unnecessary risks, like climbing dangerous cliffs and diving into unknown waters.",
    chinese_question: "冒险者的 __________ 使他冒了不必要的风险，比如攀爬危险的悬崖和跳入未知的水域。",
    answers: [
        { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "B", answer: "caution", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
        { option: "C", answer: "foresight", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
        { option: "D", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
        "<br><br>" +
        "(B) 'caution' means care taken to avoid danger or mistakes." +
        "<br><br>" +
        "(C) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future." +
        "<br><br>" +
        "(D) 'wisdom' means the quality of having experience, knowledge, and good judgment.",
    chinese_explanation: "(A) '鲁莽' 意味着对危险或后果缺乏关注。" +
        "<br><br>" +
        "(B) '小心' 意味着避免危险或错误的谨慎。" +
        "<br><br>" +
        "(C) '预见' 意味着预测或预测将来会发生什么或需要什么的能力。" +
        "<br><br>" +
        "(D) '智慧' 意味着拥有经验、知识和良好判断力的品质。"
    },
    {
        id: 6,
        question: "While the politician's __________ of accepting a free meal was widely reported, most people considered it a minor issue compared to his overall achievements.",
        chinese_question: "尽管这位政治家接受免费餐的__________被广泛报道，但大多数人认为相比于他的整体成就，这只是一个小问题。",
        answers: [
            { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "campaign", chinese_answer: "竞选活动", chinese_romanization: "jìngxuǎn huódòng" },
            { option: "C", answer: "policy", chinese_answer: "政策", chinese_romanization: "zhèngcè" },
            { option: "D", answer: "peccadillo", chinese_answer: "小过失", chinese_romanization: "xiǎo guòshī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'peccadillo' means a small, relatively unimportant offense or sin." +
            "<br><br>" +
            "(A) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(B) 'campaign' means an organized course of action to achieve a goal." +
            "<br><br>" +
            "(C) 'policy' means a course or principle of action adopted or proposed by an organization or individual.",
        chinese_explanation: "(D) '小过失' 意味着一个小的、相对不重要的过错或罪过。" +
            "<br><br>" +
            "(A) '胜利' 意味着巨大的胜利或成就。" +
            "<br><br>" +
            "(B) '竞选活动' 意味着为实现目标而组织的行动。" +
            "<br><br>" +
            "(C) '政策' 意味着由组织或个人采用或提出的行动方针或原则。"
    },
    {
        id: 7,
    question: "The nightclub was notorious for late-night __________ that often required police intervention.",
    chinese_question: "这家夜总会因深夜 __________ 而臭名昭著，经常需要警方干预。",
    answers: [
        { option: "A", answer: "brawls", chinese_answer: "斗殴", chinese_romanization: "dòu'ōu" },
        { option: "B", answer: "celebrations", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "seminars", chinese_answer: "研讨会", chinese_romanization: "yántǎohuì" },
        { option: "D", answer: "exhibitions", chinese_answer: "展览", chinese_romanization: "zhǎnlǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brawls' means rough or noisy fights or quarrels." +
        "<br><br>" +
        "(B) 'celebrations' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
        "<br><br>" +
        "(C) 'seminars' means conferences or other meetings for discussion or training." +
        "<br><br>" +
        "(D) 'exhibitions' means public displays of works of art or items of interest, held in art galleries or museums or at trade fairs.",
    chinese_explanation: "(A) '斗殴' 意味着一场粗暴或喧闹的打斗或争吵。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过参加愉快的社交活动来纪念一个重要事件或场合的行为。" +
        "<br><br>" +
        "(C) '研讨会' 意味着进行讨论或培训的会议或其他会议。" +
        "<br><br>" +
        "(D) '展览' 意味着在艺术馆、博物馆或贸易展览会上公开展示艺术作品或感兴趣的物品。"
    },
    {
        id: 8,
    question: "He showed __________ towards volunteering for the project; he wanted to help but was worried about the time commitment.",
    chinese_question: "他对自愿参加这个项目表现出 __________，因为他想帮忙但又担心时间投入。",
    answers: [
        { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
        { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "C", answer: "certainty", chinese_answer: "确信", chinese_romanization: "quèxìn" },
        { option: "D", answer: "disinterest", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ambivalence' means having mixed feelings or contradictory ideas about something or someone." +
        "<br><br>" +
        "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(C) 'certainty' means firm conviction that something is the case." +
        "<br><br>" +
        "(D) 'disinterest' means lack of interest or concern.",
    chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法。" +
        "<br><br>" +
        "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
        "<br><br>" +
        "(C) '确信' 意味着坚信某事是事实。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣或关心。"
    },
    {
        id: 9,
    question: "The international summit concluded with a __________ on strategies to combat global poverty.",
    chinese_question: "国际峰会以就应对全球贫困的策略达成 __________ 结束。",
    answers: [
        { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
        { option: "B", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
        { option: "C", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" },
        { option: "D", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'consensus' figuratively means general agreement among a group of people." +
        "<br><br>" +
        "(B) 'discord' means disagreement between people." +
        "<br><br>" +
        "(C) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held." +
        "<br><br>" +
        "(D) 'ambiguity' means the quality of being open to more than one interpretation; inexactness.",
    chinese_explanation: "(A) '共识' 在此语境下意指一群人之间的普遍同意。" +
        "<br><br>" +
        "(B) '不和' 意味着人们之间的分歧。" +
        "<br><br>" +
        "(C) '异议' 意味着与先前、普遍或官方持有的意见不一致的表达或持有意见。" +
        "<br><br>" +
        "(D) '模糊' 意味着开放多种解释的质量；不准确。"
    },
    {
        id: 10,
    question: "The __________ between the siblings over the inheritance caused a rift in the family that took years to heal.",
    chinese_question: "兄弟姐妹之间关于遗产的 __________ 导致家庭关系的裂痕，花了多年时间才愈合。",
    answers: [
        { option: "A", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
        { option: "B", answer: "reconciliation", chinese_answer: "和解", chinese_romanization: "héjiě" },
        { option: "C", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
        { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'altercation' figuratively means a noisy argument or disagreement." +
        "<br><br>" +
        "(B) 'reconciliation' means the restoration of friendly relations." +
        "<br><br>" +
        "(C) 'agreement' means harmony or accordance in opinion or feeling." +
        "<br><br>" +
        "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    chinese_explanation: "(A) '争吵' 在此语境下意指喧闹的争论或争执。" +
        "<br><br>" +
        "(B) '和解' 意味着友好关系的恢复。" +
        "<br><br>" +
        "(C) '协议' 意味着意见或感觉上的和谐或一致。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过参加愉快的社交活动来纪念一个重要事件或场合的行为。"
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
