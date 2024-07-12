// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ plea for help moved everyone in the room.",
    chinese_question: "他__________的求助恳求感动了在场的每一个人。",
    answers: [
        { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "B", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
        { option: "C", answer: "flippant", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" },
        { option: "D", answer: "joking", chinese_answer: "开玩笑的", chinese_romanization: "kāiwánxiào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'earnest' means showing sincere and intense conviction." +
        "<br><br>" +
        "(A) 'casual' means relaxed and unconcerned." +
        "<br><br>" +
        "(C) 'flippant' means not showing a serious or respectful attitude." +
        "<br><br>" +
        "(D) 'joking' means making or given to making jokes; humorous or flippant.",
    chinese_explanation: "(B) '认真的'一词意味着表现出真诚和强烈的信念。" +
        "<br><br>" +
        "(A) '随意的' 意味着放松和不关心的。" +
        "<br><br>" +
        "(C) '轻率的' 意味着没有表现出严肃或尊重的态度。" +
        "<br><br>" +
        "(D) '开玩笑的' 意味着开玩笑的；幽默或轻率的。"
    },
    {
        id: 2,
        question: "The table was __________, making it difficult to enjoy a meal without spilling drinks.",
        chinese_question: "桌子很 __________，让人难以享受一顿不洒饮料的餐。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "wobbly", chinese_answer: "摇晃的", chinese_romanization: "yáohuàng de" },
            { option: "C", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
            { option: "D", answer: "firm", chinese_answer: "坚固的", chinese_romanization: "jiāngù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wobbly' means tending to move unsteadily from side to side." +
            "<br><br>" +
            "(A) 'stable' means not likely to give way or overturn; firmly fixed." +
            "<br><br>" +
            "(C) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(D) 'firm' means having a solid, almost unyielding surface or structure.",
        chinese_explanation: "(B) '摇晃的' 意味着倾向于从一侧不稳地移动到另一侧。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能倒塌或翻倒；牢固固定的。" +
            "<br><br>" +
            "(C) '结实的' 意味着坚固地建造的。" +
            "<br><br>" +
            "(D) '坚固的' 意味着有一个坚固的，几乎不可动摇的表面或结构。"
    },
    {
        id: 3,
        question: "Their personalities were __________ opposites, with one being extremely outgoing and the other very reserved.",
        chinese_question: "他们的性格 __________ 相反，一个极其外向，另一个非常内向。",
        answers: [
            { option: "A", answer: "closely", chinese_answer: "非常", chinese_romanization: "fēicháng" },
            { option: "B", answer: "moderately", chinese_answer: "稍微", chinese_romanization: "shāowéi" },
            { option: "C", answer: "polar", chinese_answer: "对立的", chinese_romanization: "duìlì de" },
            { option: "D", answer: "slightly", chinese_answer: "略微", chinese_romanization: "lüèwéi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'polar' means completely opposite in character or direction." +
            "<br><br>" +
            "(A) 'closely' means near in space, time, or relation." +
            "<br><br>" +
            "(B) 'moderately' means to a certain extent; quite; fairly." +
            "<br><br>" +
            "(D) 'slightly' means to a small degree; not considerably.",
        chinese_explanation: "(C) '对立的' 意味着性格或方向上完全相反的。" +
            "<br><br>" +
            "(A) '非常' 意味着在空间、时间或关系上很近的。" +
            "<br><br>" +
            "(B) '稍微' 意味着在某种程度上；相当；比较。" +
            "<br><br>" +
            "(D) '略微' 意味着程度较小；不显著。"
    },
    {
        id: 4,
        question: "Throughout the crisis, she remained __________ in her support for her team, never wavering in her commitment to help them succeed.",
        chinese_question: "在整个危机期间，她对团队的支持始终 __________，从未动摇她帮助他们成功的承诺。",
        answers: [
            { option: "A", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "fickle", chinese_answer: "反复无常的", chinese_romanization: "fǎnfù wúcháng de" },
            { option: "C", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(B) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(C) 'wavering' means shaking with a quivering motion; becoming weaker or faltering." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(A) '坚定的' 意味着坚定不移地履行职责或坚定不移的。" +
            "<br><br>" +
            "(B) '反复无常的' 意味着经常变化，尤其是指忠诚或感情的变化。" +
            "<br><br>" +
            "(C) '动摇的' 意味着以颤抖的动作摇晃；变得虚弱或犹豫不决的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；不确定的。"
    },
    {
        id: 5,
        question: "The meeting schedule is still __________, and changes might occur before the final confirmation.",
        chinese_question: "会议时间表仍然是 __________ 的，在最终确认之前可能会发生变化。",
        answers: [
            { option: "A", answer: "confirmed", chinese_answer: "确认的", chinese_romanization: "quèrèn de" },
            { option: "B", answer: "tentative", chinese_answer: "暂定的", chinese_romanization: "zàndìng de" },
            { option: "C", answer: "established", chinese_answer: "确立的", chinese_romanization: "quèlì de" },
            { option: "D", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tentative' means not certain or fixed; provisional." +
            "<br><br>" +
            "(A) 'confirmed' means firmly established in a particular habit, belief, or way of life and unlikely to change." +
            "<br><br>" +
            "(C) 'established' means having been in existence for a long time and therefore recognized and generally accepted." +
            "<br><br>" +
            "(D) 'fixed' means fastened securely in position.",
        chinese_explanation: "(B) '暂定的' 意味着不确定的或固定的；暂时的。" +
            "<br><br>" +
            "(A) '确认的' 意味着在特定习惯、信仰或生活方式中牢固确立的，不太可能改变的。" +
            "<br><br>" +
            "(C) '确立的' 意味着存在了很长时间，因此被认可和普遍接受的。" +
            "<br><br>" +
            "(D) '固定的' 意味着牢固地固定在位置上的。"
    },
    {
        id: 6,
    question: "Her __________ demands during the meeting shocked everyone present.",
    chinese_question: "她在会议上的__________要求让在场的所有人都感到震惊。",
    answers: [
        { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "outrageous", chinese_answer: "骇人的", chinese_romanization: "hàirén de" },
        { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "D", answer: "tame", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'outrageous' means shockingly bad or excessive. Figuratively, it can mean being very unreasonable or extravagant." +
        "<br><br>" +
        "(A) 'mild' means gentle and not easily provoked." +
        "<br><br>" +
        "(C) 'boring' means not interesting; tedious." +
        "<br><br>" +
        "(D) 'tame' means not dangerous or exciting.",
    chinese_explanation: "(B) '骇人的' 意味着令人震惊的糟糕或过分的。比喻地，它可以表示非常不合理或奢侈的。" +
        "<br><br>" +
        "(A) '温和的' 意味着温柔且不容易被激怒的。" +
        "<br><br>" +
        "(C) '无聊的' 意味着不有趣的；乏味的。" +
        "<br><br>" +
        "(D) '平淡的' 意味着不危险或令人兴奋的。"
    },
    {
        id: 7,
        question: "Her __________ comments during the meeting showed that she had not prepared or thought deeply about the topic.",
        chinese_question: "她在会议上的 __________ 评论表明她没有准备或深入思考这个话题。",
        answers: [
            { option: "A", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "B", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "C", answer: "vacuous", chinese_answer: "空洞的", chinese_romanization: "kōngdòng de" },
            { option: "D", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vacuous' means having or showing a lack of thought or intelligence; mindless." +
            "<br><br>" +
            "(A) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(B) 'meaningful' means having meaning; full of meaning or significance." +
            "<br><br>" +
            "(D) 'profound' means very great or intense; having or showing great knowledge or insight.",
        chinese_explanation: "(C) '空洞的' 意味着缺乏思考或智慧的；无意识的。" +
            "<br><br>" +
            "(A) '有见地的' 意味着有或显示出准确和深入的理解。" +
            "<br><br>" +
            "(B) '有意义的' 意味着有意义的；充满意义或重要性的。" +
            "<br><br>" +
            "(D) '深刻的' 意味着非常伟大或强烈的；有或显示出很大的知识或见解。"
    },
    {
        id: 8,
        question: "The professor's __________ teaching methods included using puppets to explain complex scientific concepts.",
        chinese_question: "那位教授的 __________ 教学方法包括使用木偶来解释复杂的科学概念。",
        answers: [
            { option: "A", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
            { option: "B", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "C", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "D", answer: "regular", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
            "<br><br>" +
            "(A) 'standard' means used or accepted as normal or average." +
            "<br><br>" +
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(D) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances.",
        chinese_explanation: "(C) '古怪的' 意味着（一个人或他们的行为）不寻常和略微奇怪的。" +
            "<br><br>" +
            "(A) '标准的' 意味着被用作或接受为正常或平均的。" +
            "<br><br>" +
            "(B) '典型的' 意味着具有某种类型的人或事物的独特特征的。" +
            "<br><br>" +
            "(D) '常规的' 意味着排列成或构成一个固定或明确的模式，特别是个体实例之间有相同的间隔。"
    },
    {
        id: 9,
    question: "She became more __________ of her own strengths and weaknesses through self-reflection.",
    chinese_question: "通过自我反思，她对自己的优点和缺点变得更加__________。",
    answers: [
        { option: "A", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
        { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "C", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
        { option: "D", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'aware' means having knowledge or perception of a situation or fact. Figuratively, it can mean being conscious of one's own abilities and limitations." +
        "<br><br>" +
        "(A) 'unaware' means having no knowledge of a situation or fact." +
        "<br><br>" +
        "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
        "<br><br>" +
        "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
    chinese_explanation: "(C) '知道的'一词意味着对某种情况或事实有知识或感知。比喻地，它可以表示对自己的能力和局限性有意识。" +
        "<br><br>" +
        "(A) '不知道的' 意味着对情况或事实没有知识。" +
        "<br><br>" +
        "(B) '无知的' 意味着普遍缺乏知识或意识；未受教育或不成熟的。" +
        "<br><br>" +
        "(D) '无视的' 意味着对周围发生的事情没有意识或不关心。"
    },
    {
        id: 10,
    question: "His __________ thoughts often led him to ponder what might have been if he had made different choices.",
    chinese_question: "他的 __________ 思绪常常让他思考，如果他做了不同的选择，可能会怎样。",
    answers: [
        { option: "A", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" },
        { option: "B", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" },
        { option: "C", answer: "wistful", chinese_answer: "渴望的", chinese_romanization: "kěwàng de" },
        { option: "D", answer: "happy", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'wistful' means having or showing a feeling of vague or regretful longing." +
        "<br><br>" +
        "(A) 'decisive' means settling an issue; producing a definite result." +
        "<br><br>" +
        "(B) 'carefree' means free from anxiety or responsibility." +
        "<br><br>" +
        "(D) 'happy' means feeling or showing pleasure or contentment.",
    chinese_explanation: "(C) '渴望的' 意味着有或表现出模糊或遗憾的渴望的。" +
        "<br><br>" +
        "(A) '果断的' 意味着解决一个问题；产生明确的结果的。" +
        "<br><br>" +
        "(B) '无忧无虑的' 意味着没有焦虑或责任的。" +
        "<br><br>" +
        "(D) '快乐的' 意味着感到或表现出愉快或满足的。"
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
