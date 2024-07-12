// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The CEO believed it was __________ to expand the business into international markets despite the risks.",
        chinese_question: "首席执行官认为，尽管存在风险，将业务扩展到国际市场是 __________ 的。",
        answers: [
            { option: "A", answer: "unachievable", chinese_answer: "无法实现的", chinese_romanization: "wúfǎ shíxiàn de" },
            { option: "B", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "C", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "D", answer: "unlikely", chinese_answer: "不大可能的", chinese_romanization: "bù dà kěnéng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(A) 'unachievable' means not able to be brought about or accomplished." +
            "<br><br>" +
            "(B) 'impractical' means not adapted for use or action; not sensible." +
            "<br><br>" +
            "(D) 'unlikely' means not likely to happen, be done, or be true.",
        chinese_explanation: "(C) '可行的' 意味着容易或方便地完成的。" +
            "<br><br>" +
            "(A) '无法实现的' 意味着不能实现或完成的。" +
            "<br><br>" +
            "(B) '不切实际的' 意味着不适合使用或行动的；不明智的。" +
            "<br><br>" +
            "(D) '不大可能的' 意味着不可能发生、完成或是真实的。"
    },
    {
        id: 2,
    question: "The small village nestled in the mountains was __________, with its charming cottages, winding paths, and vibrant gardens creating a scene straight out of a storybook.",
    chinese_question: "位于山间的小村庄非常 __________，迷人的小屋、蜿蜒的小径和充满活力的花园，仿佛童话中的场景。",
    answers: [
        { option: "A", answer: "picturesque", chinese_answer: "如画的", chinese_romanization: "rúhuà de" },
        { option: "B", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
        { option: "C", answer: "drab", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
        { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'picturesque' means visually attractive, especially in a quaint or charming way." +
        "<br><br>" +
        "(B) 'unattractive' means not pleasing or appealing to look at." +
        "<br><br>" +
        "(C) 'drab' means lacking brightness or interest; drearily dull." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(A) '如画的' 意味着视觉上有吸引力的，尤其是以一种古雅或迷人的方式。" +
        "<br><br>" +
        "(B) '不吸引人的' 意味着不令人愉快或不吸引人的。" +
        "<br><br>" +
        "(C) '单调的' 意味着缺乏亮度或兴趣的；沉闷的。" +
        "<br><br>" +
        "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 3,
        question: "The __________ boulder blocked the entire path, making it impossible for hikers to continue their journey.",
        chinese_question: "__________ 巨石挡住了整个小路，使徒步旅行者无法继续前行。",
        answers: [
            { option: "A", answer: "massive", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "B", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wéixiǎo de" },
            { option: "C", answer: "light", chinese_answer: "轻的", chinese_romanization: "qīng de" },
            { option: "D", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'massive' means large and heavy or solid." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'light' means having little weight; not heavy." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking strength.",
        chinese_explanation: "(A) '巨大的' 意味着大而重的或坚固的。" +
            "<br><br>" +
            "(B) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(C) '轻的' 意味着重量很轻；不重的。" +
            "<br><br>" +
            "(D) '弱的' 意味着缺乏执行体力任务的力量；无力的。"
    },
    {
        id: 4,
        question: "His musical talent remained __________ for years until he finally took piano lessons and amazed everyone with his skill.",
        chinese_question: "他的音乐天赋 __________ 了多年，直到他最终上了钢琴课，并以他的技艺让每个人惊叹。",
        answers: [
            { option: "A", answer: "latent", chinese_answer: "潜在的", chinese_romanization: "qiánzài de" },
            { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "C", answer: "evident", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
            { option: "D", answer: "apparent", chinese_answer: "显而易见的", chinese_romanization: "xiǎn'ér yìjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'latent' means existing but not yet developed or manifest; hidden or concealed." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear." +
            "<br><br>" +
            "(C) 'evident' means clearly seen or understood; obvious." +
            "<br><br>" +
            "(D) 'apparent' means clearly visible or understood; obvious.",
        chinese_explanation: "(A) '潜在的' 意味着存在但尚未开发或显现的；隐藏的。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易察觉或理解的；清楚的。" +
            "<br><br>" +
            "(C) '显然的' 意味着清楚地看见或理解的；显然的。" +
            "<br><br>" +
            "(D) '显而易见的' 意味着清楚地看见或理解的；显而易见的。"
    },
    {
        id: 5,
        question: "Her __________ remarks were intended to hurt his feelings and tarnish his reputation among his peers.",
        chinese_question: "她的 __________ 言论意在伤害他的感情，并在他的同龄人中玷污他的声誉。",
        answers: [
            { option: "A", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "B", answer: "benevolent", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "C", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "D", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'malicious' means characterized by malice; intending or intended to do harm." +
            "<br><br>" +
            "(B) 'benevolent' means well meaning and kindly." +
            "<br><br>" +
            "(C) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '恶意的' 意味着充满恶意的；意图或旨在造成伤害的。" +
            "<br><br>" +
            "(B) '仁慈的' 意味着善良和好意的。" +
            "<br><br>" +
            "(C) '善良的' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(D) '中立的' 意味着在冲突或争议中不支持或帮助任何一方的。"
    },
    {
        id: 6,
    question: "He was __________ by the technical jargon in the instruction manual, finding it hard to follow the steps.",
    chinese_question: "他被说明书中的技术术语弄得 __________，发现很难跟上步骤。",
    answers: [
        { option: "A", answer: "enlightened", chinese_answer: "开明的", chinese_romanization: "kāimíng de" },
        { option: "B", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "D", answer: "informed", chinese_answer: "知情的", chinese_romanization: "zhīqíng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'befuddled' means unable to think clearly; confused." +
        "<br><br>" +
        "(A) 'enlightened' means having or showing a rational, modern, and well-informed outlook." +
        "<br><br>" +
        "(C) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'informed' means having or showing knowledge of a particular subject or situation.",
    chinese_explanation: "(B) '困惑的' 意味着无法清晰思考；感到困惑的。" +
        "<br><br>" +
        "(A) '开明的' 意味着具有或显示出理性、现代和知识渊博的观点。" +
        "<br><br>" +
        "(C) '清晰的' 意味着容易察觉、理解或解释的。" +
        "<br><br>" +
        "(D) '知情的' 意味着对特定主题或情况有知识或了解。"
    },
    {
        id: 7,
    question: "His __________ leadership skills helped the company navigate through difficult times.",
    chinese_question: "他的 __________ 领导才能帮助公司渡过难关。",
    answers: [
        { option: "A", answer: "outstanding", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
        { option: "B", answer: "inadequate", chinese_answer: "不足", chinese_romanization: "bùzú" },
        { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
        { option: "D", answer: "poor", chinese_answer: "差", chinese_romanization: "chà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'outstanding' means exceptionally good or impressive." +
        "<br><br>" +
        "(B) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose." +
        "<br><br>" +
        "(C) 'average' means of the usual or ordinary standard." +
        "<br><br>" +
        "(D) 'poor' means lacking quality or excellence.",
    chinese_explanation: "(A) '杰出' 意味着特别好或令人印象深刻。" +
        "<br><br>" +
        "(B) '不足' 意味着缺乏所需的质量或数量；不够充分。" +
        "<br><br>" +
        "(C) '平均' 意味着通常或普通标准。" +
        "<br><br>" +
        "(D) '差' 意味着缺乏质量或优点。"
    },
    {
        id: 8,
    question: "The __________ advocate never stopped fighting for the rights of the underprivileged.",
    chinese_question: "这位 __________ 的倡导者从未停止为弱势群体的权利而奋斗。",
    answers: [
        { option: "A", answer: "weary", chinese_answer: "疲倦的", chinese_romanization: "píjuàn de" },
        { option: "B", answer: "tireless", chinese_answer: "不知疲倦的", chinese_romanization: "bùzhī píjuàn de" },
        { option: "C", answer: "exhausted", chinese_answer: "精疲力尽的", chinese_romanization: "jīngpí lìjìn de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tireless' means having or showing great effort or energy." +
        "<br><br>" +
        "(A) 'weary' means feeling or showing tiredness." +
        "<br><br>" +
        "(C) 'exhausted' means very tired." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy.",
    chinese_explanation: "(B) '不知疲倦的' 意味着表现出巨大努力或能量的。" +
        "<br><br>" +
        "(A) '疲倦的' 意味着感到或表现出疲劳的。" +
        "<br><br>" +
        "(C) '精疲力尽的' 意味着非常疲惫的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别兴趣或同情的。"
    },
    {
        id: 9,
        question: "The horror movie had an __________ atmosphere, with eerie sounds and sudden movements that kept the audience on edge.",
        chinese_question: "这部恐怖电影有一种 __________ 的氛围，怪异的声音和突然的动作让观众始终紧张不安。",
        answers: [
            { option: "A", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" },
            { option: "B", answer: "comforting", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" },
            { option: "C", answer: "soothing", chinese_answer: "抚慰的", chinese_romanization: "fǔwèi de" },
            { option: "D", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unsettling' means causing anxiety or uneasiness; disturbing." +
            "<br><br>" +
            "(B) 'comforting' means serving to alleviate a person's feelings of grief or distress." +
            "<br><br>" +
            "(C) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'relaxing' means making or becoming less tense or anxious.",
        chinese_explanation: "(A) '令人不安的' 意味着引起焦虑或不安的；令人不安的。" +
            "<br><br>" +
            "(B) '安慰的' 意味着缓解一个人的悲伤或痛苦的。" +
            "<br><br>" +
            "(C) '抚慰的' 意味着具有轻柔的平静效果的。" +
            "<br><br>" +
            "(D) '放松的' 意味着使或变得不那么紧张或焦虑的。"
    },
    {
        id: 10,
    question: "The path through the forest was __________, making it easy to get lost.",
    chinese_question: "穿过森林的小径十分 __________，很容易迷路。",
    answers: [
        { option: "A", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
        { option: "B", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
        { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "D", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'convoluted' means complex and difficult to follow." +
        "<br><br>" +
        "(A) 'straight' means extending or moving uniformly in one direction only." +
        "<br><br>" +
        "(C) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'direct' means going straight to the point without deviating.",
    chinese_explanation: "(B) “复杂的” 意味着复杂且难以跟随。" +
        "<br><br>" +
        "(A) '直的' 意味着只向一个方向延伸或移动。" +
        "<br><br>" +
        "(C) '清晰的' 意味着容易察觉、理解或解释。" +
        "<br><br>" +
        "(D) '直接的' 意味着不偏离地直达要点。"
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
