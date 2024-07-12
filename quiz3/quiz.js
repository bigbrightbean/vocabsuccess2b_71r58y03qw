// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Their __________ friendship has lasted through many ups and downs over the years.",
    chinese_question: "他们的 __________ 友谊在多年的风风雨雨中经久不衰。",
    answers: [
        { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "C", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "D", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'enduring' means lasting over a long period of time; durable." +
        "<br><br>" +
        "(A) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(B) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(D) 'temporary' means lasting for only a limited period of time; not permanent.",
    chinese_explanation: "(C) “持久的” 意味着持续很长时间的；耐用的。" +
        "<br><br>" +
        "(A) '短暂的' 意味着持续时间非常短。" +
        "<br><br>" +
        "(B) '表面的' 意味着存在或发生在表面上。" +
        "<br><br>" +
        "(D) '暂时的' 意味着只持续有限的时间；非永久的。"
    },
    {
        id: 2,
        question: "The __________ nature of the stock market makes investing a risky venture.",
        chinese_question: "股市的 __________ 性质使得投资成为一项风险很大的冒险。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "steady", chinese_answer: "稳固的", chinese_romanization: "wěngù de" },
            { option: "C", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'steady' means firmly fixed, supported, or balanced." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(C) '易变的' 意味着容易迅速和不可预见地变化，尤其是变得更糟。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败的；牢固确立的。" +
            "<br><br>" +
            "(B) '稳固的' 意味着牢固固定、支持或平衡的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够预测的。"
    },
    {
        id: 3,
        question: "He offered his __________ support to his friend, promising to be there no matter what.",
        chinese_question: "他向朋友提供 __________ 支持，承诺无论如何都会在身边。",
        answers: [
            { option: "A", answer: "conditional", chinese_answer: "有条件的", chinese_romanization: "yǒu tiáojiàn de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "unconditional", chinese_answer: "无条件的", chinese_romanization: "wú tiáojiàn de" },
            { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unconditional' means not subject to any conditions." +
            "<br><br>" +
            "(A) 'conditional' means subject to one or more conditions or requirements being met." +
            "<br><br>" +
            "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(D) 'rare' means not occurring very often.",
        chinese_explanation: "(C) '无条件的' 意味着不受任何条件限制的。" +
            "<br><br>" +
            "(A) '有条件的' 意味着在满足一个或多个条件或要求的情况下。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着不经常和不规律地发生、出现或完成的。" +
            "<br><br>" +
            "(D) '罕见的' 意味着不经常发生的。"
    },
    {
        id: 4,
        question: "Her __________ reaction to the surprise party included exaggerated gasps and over-the-top expressions of joy.",
        chinese_question: "她对惊喜派对的 __________ 反应包括夸张的喘息和过度的喜悦表情。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "theatrical", chinese_answer: "戏剧性", chinese_romanization: "xìjùxìng" },
            { option: "C", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "reserved", chinese_answer: "内敛", chinese_romanization: "nèiliǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'theatrical' means exaggerated and dramatic." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '戏剧性' 意味着夸张和戏剧性。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '真诚' 意味着真实的或真正的。" +
            "<br><br>" +
            "(D) '内敛' 意味着不轻易表露情感或意见。"
    },
    {
        id: 5,
        question: "Her __________ spirit led her to travel to new places, always seeking new adventures.",
        chinese_question: "她 __________ 的精神使她不断去新的地方旅行，总是寻找新的冒险。",
        answers: [
            { option: "A", answer: "settled", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "tranquil", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "restless", chinese_answer: "不安分的", chinese_romanization: "bù ānfèn de" },
            { option: "D", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'restless' means unable to rest or relax as a result of anxiety or boredom." +
            "<br><br>" +
            "(A) 'settled' means established in a desired position or place." +
            "<br><br>" +
            "(B) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(D) 'satisfied' means contented; pleased.",
        chinese_explanation: "(C) '不安分的' 意味着由于焦虑或无聊而无法休息或放松的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着处于理想的位置或地方。" +
            "<br><br>" +
            "(B) '平静的' 意味着没有干扰的；冷静的。" +
            "<br><br>" +
            "(D) '满意的' 意味着满足的；高兴的。"
    },
    {
        id: 6,
    question: "The region was hit by a __________ storm, causing widespread damage and leaving many areas without power for days.",
    chinese_question: "该地区遭遇了 __________ 的风暴，造成了广泛的破坏，许多地区停电数天。",
    answers: [
        { option: "A", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
        { option: "B", answer: "mild", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
        { option: "C", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "D", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'severe' means very great; intense." +
        "<br><br>" +
        "(B) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
        "<br><br>" +
        "(D) 'moderate' means average in amount, intensity, quality, or degree.",
    chinese_explanation: "(A) '严重的' 意味着非常大的；强烈的。" +
        "<br><br>" +
        "(B) '轻微的' 意味着不严重的、不严厉的或不苛刻的。" +
        "<br><br>" +
        "(C) '温和的' 意味着有或表现出温和、善良或温柔的性格或特点。" +
        "<br><br>" +
        "(D) '适度的' 意味着在数量、强度、质量或程度上是平均的。"
    },
    {
        id: 7,
        question: "She gave the room a __________ cleaning before the guests arrived, ensuring not a speck of dust was left.",
        chinese_question: "在客人到来之前，她对房间进行了 __________ 的清洁，确保没有一丝灰尘。",
        answers: [
            { option: "A", answer: "cursory", chinese_answer: "草率", chinese_romanization: "cǎoshuài" },
            { option: "B", answer: "lackadaisical", chinese_answer: "懒散", chinese_romanization: "lǎnsǎn" },
            { option: "C", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "D", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(A) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(B) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy." +
            "<br><br>" +
            "(D) 'perfunctory' means carried out with a minimum of effort or reflection.",
        chinese_explanation: "(C) '彻底' 意味着每一个细节都完成的；不肤浅或部分。" +
            "<br><br>" +
            "(A) '草率' 意味着匆忙，因此不详细或不彻底。" +
            "<br><br>" +
            "(B) '懒散' 意味着缺乏热情和决心；懒洋洋的。" +
            "<br><br>" +
            "(D) '敷衍' 意味着以最小的努力或反思进行的。"
    },
    {
        id: 8,
        question: "The diplomat's __________ manner impressed everyone at the international conference, making negotiations smooth and pleasant.",
        chinese_question: "这位外交官的 __________ 举止给国际会议上的每个人留下了深刻的印象，使谈判变得顺利和愉快。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "awkward", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "urbane", chinese_answer: "温文尔雅的", chinese_romanization: "wēnwén'ěryǎ de" },
            { option: "D", answer: "clumsy", chinese_answer: "笨手笨脚的", chinese_romanization: "bènshǒubènjiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urbane' means suave, courteous, and refined in manner." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(D) 'clumsy' means awkward in movement or in handling things.",
        chinese_explanation: "(C) '温文尔雅的' 意味着举止优雅、礼貌和精致。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或不端。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着引起或感到尴尬或不便的。" +
            "<br><br>" +
            "(D) '笨手笨脚的' 意味着在动作或处理事物时笨拙的。"
    },
    {
        id: 9,
        question: "Her __________ nature made it hard to engage her in conversation.",
        chinese_question: "她__________的性格使得与她交谈变得困难。",
        answers: [
            { option: "A", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
            { option: "B", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "C", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "D", answer: "chatty", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'outgoing' means friendly and socially confident." +
            "<br><br>" +
            "(C) 'lively' means full of life and energy." +
            "<br><br>" +
            "(D) 'chatty' means fond of talking in an easy, informal way.",
        chinese_explanation: "(B) '沉默寡言的'一词意味着在言语上保留或不健谈；说得很少。" +
            "<br><br>" +
            "(A) '外向的' 意味着友好和社交自信。" +
            "<br><br>" +
            "(C) '活泼的' 意味着充满生命和能量。" +
            "<br><br>" +
            "(D) '健谈的' 意味着喜欢以轻松、非正式的方式交谈。"
    },
    {
        id: 10,
        question: "His __________ behaviour led his friends to wonder what he was hiding.",
        chinese_question: "他的 __________ 行为让朋友们想知道他在隐藏什么。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "B", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "frank", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "forthright", chinese_answer: "坦白的", chinese_romanization: "tǎnbái de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'secretive' means inclined to conceal feelings and intentions or not to disclose information." +
            "<br><br>" +
            "(A) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(C) 'frank' means open, honest, and direct in speech or writing, especially when dealing with unpalatable matters." +
            "<br><br>" +
            "(D) 'forthright' means (of a person or their manner or speech) direct and outspoken; straightforward and honest.",
        chinese_explanation: "(B) '秘密的' 意味着倾向于隐瞒感情和意图或不披露信息的。" +
            "<br><br>" +
            "(A) '坦率的' 意味着真实和直率的；坦率的。" +
            "<br><br>" +
            "(C) '直率的' 意味着在言语或写作中开诚布公和直接的，尤其是在处理令人不快的事情时。" +
            "<br><br>" +
            "(D) '坦白的' 意味着（指人或他们的态度或言语）直接和坦率的；坦诚的。"
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
