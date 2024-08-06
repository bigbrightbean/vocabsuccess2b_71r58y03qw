// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher was very __________ of different viewpoints, encouraging open discussions in the classroom.",
        chinese_question: "这位老师非常 __________ 各种观点，鼓励课堂上的公开讨论。",
        answers: [
            { option: "A", answer: "intolerant", chinese_answer: "不宽容的", chinese_romanization: "bù kuānróng de" },
            { option: "B", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "C", answer: "tolerant", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "D", answer: "prejudiced", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(A) 'intolerant' means not tolerant of views, beliefs, or behavior that differ from one's own." +
            "<br><br>" +
            "(B) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice.",
        chinese_explanation: "(C) '宽容的' 意味着愿意允许存在与自己不一定同意的意见或行为。" +
            "<br><br>" +
            "(A) '不宽容的' 意味着不宽容与自己不同的观点、信仰或行为的。" +
            "<br><br>" +
            "(B) '有偏见的' 意味着对某人或某事有不公平的偏见。" +
            "<br><br>" +
            "(D) '偏见的' 意味着有或表现出源于偏见的不喜欢或不信任。"
    },
    {
        id: 2,
    question: "In a __________ gesture, she donated half of her lottery winnings to charity.",
    chinese_question: "她 __________ 地将她一半的彩票奖金捐给了慈善机构。",
    answers: [
        { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
        { option: "B", answer: "magnanimous", chinese_answer: "宽宏大量", chinese_romanization: "kuānhóng dàliàng" },
        { option: "C", answer: "greedy", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
        { option: "D", answer: "stingy", chinese_answer: "吝啬", chinese_romanization: "lìnsè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful than oneself." +
        "<br><br>" +
        "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(C) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power." +
        "<br><br>" +
        "(D) 'stingy' means unwilling to give or spend; ungenerous.",
    chinese_explanation: "(B) '宽宏大量' 意味着非常慷慨或宽恕，尤其是对竞争对手或比自己权力小的人。" +
        "<br><br>" +
        "(A) '自私' 意味着缺乏对他人的考虑；主要关心个人利益或快乐。" +
        "<br><br>" +
        "(C) '贪婪' 意味着对某物，尤其是财富或权力有强烈而自私的渴望。" +
        "<br><br>" +
        "(D) '吝啬' 意味着不愿给予或花费；不慷慨。"
    },
    {
        id: 3,
    question: "His argument was __________, lacking solid evidence to support his claims.",
    chinese_question: "他的论点很__________，缺乏有力的证据支持他的主张。",
    answers: [
        { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
        { option: "B", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" },
        { option: "C", answer: "feeble", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "D", answer: "powerful", chinese_answer: "强大的", chinese_romanization: "qiángdà de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'feeble' means lacking physical strength, especially as a result of age or illness. Figuratively, it can mean weak or inadequate." +
        "<br><br>" +
        "(A) 'strong' means having great physical power and ability." +
        "<br><br>" +
        "(B) 'robust' means strong and healthy; vigorous." +
        "<br><br>" +
        "(D) 'powerful' means having great power or strength.",
    chinese_explanation: "(C) '虚弱的'一词意味着缺乏体力的，尤其是由于年龄或疾病。比喻地，它可以表示弱或不充分的。" +
        "<br><br>" +
        "(A) '强壮的' 意味着具有很大的体力和能力。" +
        "<br><br>" +
        "(B) '健壮的' 意味着强壮和健康的；充满活力的。" +
        "<br><br>" +
        "(D) '强大的' 意味着具有强大力量或力量的。"
    },
    {
        id: 4,
        question: "Despite his __________ income, he always found a way to donate to charity.",
        chinese_question: "尽管收入 __________，他总能找到捐赠给慈善机构的方法。",
        answers: [
            { option: "A", answer: "substantial", chinese_answer: "可观", chinese_romanization: "kěguān" },
            { option: "B", answer: "significant", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" },
            { option: "C", answer: "meager", chinese_answer: "微薄", chinese_romanization: "wēibó" },
            { option: "D", answer: "ample", chinese_answer: "充足", chinese_romanization: "chōngzú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(A) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(D) 'ample' means enough or more than enough; plentiful.",
        chinese_explanation: "(C) '微薄' 意味着在数量或质量上不足。" +
            "<br><br>" +
            "(A) '可观' 意味着具有相当重要性、规模或价值的。" +
            "<br><br>" +
            "(B) '显著' 意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(D) '充足' 意味着足够的或超过足够的；丰富的。"
    },
    {
        id: 5,
        question: "His __________ demeanour made him popular among his peers, who appreciated his cheerful presence.",
        chinese_question: "他那 __________ 的举止使他在同龄人中很受欢迎，他们很欣赏他的快乐存在。",
        answers: [
            { option: "A", answer: "dour", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "winsome", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "D", answer: "severe", chinese_answer: "严肃的", chinese_romanization: "yánsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'winsome' means attractive or appealing in appearance or character." +
            "<br><br>" +
            "(A) 'dour' means relentlessly severe, stern, or gloomy in manner or appearance." +
            "<br><br>" +
            "(B) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(D) 'severe' means strict or harsh.",
        chinese_explanation: "(C) '迷人的' 意味着在外貌或性格上有吸引力的或迷人的。" +
            "<br><br>" +
            "(A) '严厉的' 意味着在态度或外表上严厉、严肃或阴沉的。" +
            "<br><br>" +
            "(B) '阴沉的' 意味着颜色或语调上暗淡或阴沉的。" +
            "<br><br>" +
            "(D) '严肃的' 意味着严格或严厉的。"
    },
    {
        id: 6,
        question: "In the heated debate, she chose to stay __________, listening to both sides without taking a stand.",
        chinese_question: "在激烈的辩论中，她选择保持 __________，听取双方意见而不表态。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "B", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "C", answer: "aggressive", chinese_answer: "咄咄逼人的", chinese_romanization: "duōduō bīrén de" },
            { option: "D", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'neutral' means not supporting or helping either side in a conflict or disagreement; impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(B) '中立的' 意味着不支持或帮助冲突或争执中的任何一方；公正的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某事不公平地偏爱或反对的。" +
            "<br><br>" +
            "(C) '咄咄逼人的' 意味着准备或可能攻击或对抗的。" +
            "<br><br>" +
            "(D) '支持的' 意味着提供鼓励或情感帮助的。"
    },
    {
        id: 7,
    question: "The teenager went through a __________ phase, constantly challenging authority and breaking the rules.",
    chinese_question: "那个青少年经历了一段 __________ 的时期，不断挑战权威并违反规则。",
    answers: [
        { option: "A", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
        { option: "B", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
        { option: "C", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" },
        { option: "D", answer: "submissive", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rebellious' means showing a desire to resist authority, control, or convention." +
        "<br><br>" +
        "(B) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
        "<br><br>" +
        "(C) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
        "<br><br>" +
        "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
    chinese_explanation: "(A) '叛逆的' 意味着表现出抵抗权威、控制或惯例的欲望。" +
        "<br><br>" +
        "(B) '顺从的' 意味着遵守或愿意遵守命令或要求的；服从他人意愿的。" +
        "<br><br>" +
        "(C) '服从的' 意味着倾向于同意他人或服从规则的，尤指过度程度；默许的。" +
        "<br><br>" +
        "(D) '温顺的' 意味着准备好服从权威或他人意愿的；温顺服从的或被动的。"
    },
    {
        id: 8,
    question: "Her __________ behaviour at the party made everyone wonder what was going on with her.",
    chinese_question: "她在聚会上的__________行为让每个人都想知道她发生了什么事。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
        { option: "B", answer: "understandable", chinese_answer: "可理解的", chinese_romanization: "kě lǐjiě de" },
        { option: "C", answer: "puzzling", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
        { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'puzzling' means causing one to be puzzled; perplexing. Figuratively, it can mean being mysterious or confusing." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(B) 'understandable' means able to be understood." +
        "<br><br>" +
        "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
    chinese_explanation: "(C) '令人困惑的'一词意味着让人困惑的；令人费解的。比喻地，它可以表示神秘或令人困惑的。" +
        "<br><br>" +
        "(A) '清楚的' 意味着容易察觉、理解或解释的。" +
        "<br><br>" +
        "(B) '可理解的' 意味着能够被理解的。" +
        "<br><br>" +
        "(D) '明显的' 意味着容易察觉或理解的；清晰的，自明的，或显而易见的。"
    },
    {
        id: 9,
    question: "The weather forecast proved to be __________, accurately predicting the storm's arrival and intensity.",
    chinese_question: "天气预报证明是 __________ 的，准确预测了风暴的到来和强度。",
    answers: [
        { option: "A", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
        { option: "B", answer: "erratic", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" },
        { option: "C", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
        { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reliable' means consistently good in quality or performance; able to be trusted." +
        "<br><br>" +
        "(B) 'erratic' means not even or regular in pattern or movement; unpredictable." +
        "<br><br>" +
        "(C) 'dubious' means hesitating or doubting." +
        "<br><br>" +
        "(D) 'inconsistent' means not staying the same throughout.",
    chinese_explanation: "(A) '可靠的' 意味着质量或性能始终如一；值得信赖的。" +
        "<br><br>" +
        "(B) '不稳定的' 意味着模式或运动不均匀或规律的；不可预测的。" +
        "<br><br>" +
        "(C) '可疑的' 意味着犹豫或怀疑的。" +
        "<br><br>" +
        "(D) '不一致的' 意味着始终不一致的。"
    },
    {
        id: 10,
    question: "The teacher assigned a project that was __________ for the students’ age and skill level.",
    chinese_question: "老师分配了一个 __________ 的项目，适合学生的年龄和技能水平。",
    answers: [
        { option: "A", answer: "suitable", chinese_answer: "合适", chinese_romanization: "héshì" },
        { option: "B", answer: "difficult", chinese_answer: "困难", chinese_romanization: "kùnnán" },
        { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
        { option: "D", answer: "excessive", chinese_answer: "过度", chinese_romanization: "guòdù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
        "<br><br>" +
        "(B) 'difficult' means needing much effort or skill to accomplish, deal with, or understand." +
        "<br><br>" +
        "(C) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(D) 'excessive' means more than is necessary, normal, or desirable; immoderate.",
    chinese_explanation: "(A) '合适' 意味着对特定的人、目的或情况是合适的。" +
        "<br><br>" +
        "(B) '困难' 意味着需要大量努力或技能才能完成、处理或理解。" +
        "<br><br>" +
        "(C) '无关' 意味着与某事无关。" +
        "<br><br>" +
        "(D) '过度' 意味着超过必要、正常或理想的程度；不适度的。"
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
