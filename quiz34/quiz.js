// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She is very __________ to criticism and easily gets upset when someone points out her mistakes.",
    chinese_question: "她对批评非常 __________，当有人指出她的错误时很容易生气。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
        { option: "C", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
        { option: "D", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
        "<br><br>" +
        "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(B) “敏感的” 意味着对轻微的变化、信号或影响反应迅速。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(C) '无视的' 意味着没有意识到或不关心周围发生的事情。" +
        "<br><br>" +
        "(D) '无动于衷的' 意味着不表现出或感觉没有兴趣、热情或关心。"
    },
    {
        id: 2,
    question: "The __________ rules of the game seemed designed to benefit certain players over others, causing dissatisfaction.",
    chinese_question: "游戏的 __________ 规则似乎是为了让某些玩家受益而设计的，导致了不满。",
    answers: [
        { option: "A", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
        { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "C", answer: "arbitrary", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
        "<br><br>" +
        "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
        "<br><br>" +
        "(B) 'transparent' means easy to perceive or detect." +
        "<br><br>" +
        "(D) 'predictable' means able to be predicted.",
    chinese_explanation: "(C) '随意的' 意味着基于随机选择或个人随意，而不是任何理由或系统。" +
        "<br><br>" +
        "(A) '一致的' 意味着一段时间内以同样的方式进行，尤其是为了公平或准确。" +
        "<br><br>" +
        "(B) '透明的' 意味着容易察觉或检测到的。" +
        "<br><br>" +
        "(D) '可预测的' 意味着能够被预测的。"
    },
    {
        id: 3,
    question: "The __________ focus of her work is to promote education for underprivileged children, while her secondary goal is to improve healthcare access.",
    chinese_question: "她工作的 __________ 重点是促进贫困儿童的教育，而她的次要目标是改善医疗保健的可及性。",
    answers: [
        { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
        { option: "B", answer: "secondary", chinese_answer: "次要", chinese_romanization: "cìyào" },
        { option: "C", answer: "marginal", chinese_answer: "边缘", chinese_romanization: "biānyuán" },
        { option: "D", answer: "auxiliary", chinese_answer: "辅助", chinese_romanization: "fǔzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'primary' means of chief importance; principal." +
        "<br><br>" +
        "(B) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
        "<br><br>" +
        "(C) 'marginal' means of secondary or minor importance; not central." +
        "<br><br>" +
        "(D) 'auxiliary' means providing additional help or support.",
    chinese_explanation: "(A) '主要' 意味着最重要的；主要的。" +
        "<br><br>" +
        "(B) '次要' 意味着排在后面的、不如主要的或由主要的某物引起的。" +
        "<br><br>" +
        "(C) '边缘' 意味着次要或不重要的；非核心的。" +
        "<br><br>" +
        "(D) '辅助' 意味着提供额外的帮助或支持。"
    },
    {
        id: 4,
    question: "Ignoring the warning signs of the disease could be __________, leading to severe complications or even death.",
    chinese_question: "忽视疾病的警告信号可能是 __________ 的，导致严重并发症甚至死亡。",
    answers: [
        { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "B", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
        { option: "C", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
        { option: "D", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fatal' means causing death." +
        "<br><br>" +
        "(A) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(C) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(D) 'safe' means protected from or not exposed to danger or risk.",
    chinese_explanation: "(B) '致命的' 意味着导致死亡的。" +
        "<br><br>" +
        "(A) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(C) '可忽略的' 意味着小到或不重要，不值得考虑的。" +
        "<br><br>" +
        "(D) '安全的' 意味着受到保护或没有暴露于危险或风险的。"
    },
    {
        id: 5,
    question: "Despite the __________ weather conditions, the hikers were determined to reach the summit.",
    chinese_question: "尽管天气条件 __________，登山者们仍决心到达山顶。",
    answers: [
        { option: "A", answer: "harsh", chinese_answer: "恶劣的", chinese_romanization: "èliè de" },
        { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "C", answer: "favorable", chinese_answer: "有利的", chinese_romanization: "yǒulì de" },
        { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(B) 'mild' means not severe or strong." +
        "<br><br>" +
        "(C) 'favorable' means advantageous or beneficial." +
        "<br><br>" +
        "(D) 'calm' means peaceful and free from disturbance.",
    chinese_explanation: "(A) '恶劣的' 意味着不愉快的、粗糙或刺耳的。" +
        "<br><br>" +
        "(B) '温和的' 意味着不严重或不强烈的。" +
        "<br><br>" +
        "(C) '有利的' 意味着有利的或有益的。" +
        "<br><br>" +
        "(D) '平静的' 意味着和平且没有干扰的。"
    },
    {
        id: 6,
    question: "The politician's __________ speeches were filled with self-righteous rhetoric that turned off many voters.",
    chinese_question: "那位政客的 __________ 演讲充满了自以为是的言辞，令许多选民反感。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "B", answer: "sanctimonious", chinese_answer: "假装虔诚的", chinese_romanization: "jiǎzhuāng qiánchéng de" },
        { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sanctimonious' means making a show of being morally superior to other people." +
        "<br><br>" +
        "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
    chinese_explanation: "(B) '假装虔诚的' 意味着表现出道德优越于他人的样子。" +
        "<br><br>" +
        "(A) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
        "<br><br>" +
        "(C) '真诚的' 意味着真正的，所说的就是其所是的；真实的。" +
        "<br><br>" +
        "(D) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。"
    },
    {
        id: 7,
    question: "The city faced a __________ problem with graffiti, as it seemed to appear on every available surface despite the authorities' efforts to clean it up.",
    chinese_question: "尽管当局努力清理，城市还是面临 __________ 的涂鸦问题，几乎每个可用的表面都出现了涂鸦。",
    answers: [
        { option: "A", answer: "rampant", chinese_answer: "猖獗的", chinese_romanization: "chāngjué de" },
        { option: "B", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
        { option: "C", answer: "controlled", chinese_answer: "受控的", chinese_romanization: "shòukòng de" },
        { option: "D", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rampant' means (especially of something unwelcome or unpleasant) flourishing or spreading unchecked." +
        "<br><br>" +
        "(B) 'rare' means not occurring very often." +
        "<br><br>" +
        "(C) 'controlled' means under control; managed or regulated." +
        "<br><br>" +
        "(D) 'isolated' means far away from other places, buildings, or people; remote.",
    chinese_explanation: "(A) '猖獗的' 意味着（尤指不受欢迎或不愉快的事物）不受控制地繁茂或蔓延的。" +
        "<br><br>" +
        "(B) '稀有的' 意味着不经常发生的。" +
        "<br><br>" +
        "(C) '受控的' 意味着在控制下的；管理或调节的。" +
        "<br><br>" +
        "(D) '孤立的' 意味着远离其他地方、建筑或人；偏远的。"
    },
    {
        id: 8,
    question: "In the region, agriculture is the __________ industry, with most people relying on farming for their livelihoods.",
    chinese_question: "在该地区，农业是 __________ 行业，大多数人依靠农业谋生。",
    answers: [
        { option: "A", answer: "predominant", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
        { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "C", answer: "secondary", chinese_answer: "辅助的", chinese_romanization: "fǔzhù de" },
        { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predominant' means present as the strongest or main element." +
        "<br><br>" +
        "(B) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(C) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth consideration.",
    chinese_explanation: "(A) '主要的' 意味着作为最强或主要元素存在的。" +
        "<br><br>" +
        "(B) '次要的' 意味着重要性、严重性或显著性较小的。" +
        "<br><br>" +
        "(C) '辅助的' 意味着在某人或某物之后或不如其重要，或者由其引起的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 9,
    question: "Her __________ smile reassured him that she understood his struggles and was there to support him.",
    chinese_question: "她 __________ 的微笑让他放心，她理解他的困难并在那里支持他。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "unsympathetic", chinese_answer: "无同情心的", chinese_romanization: "wú tóngqíng xīn de" },
        { option: "C", answer: "sympathetic", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
        { option: "D", answer: "cold", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sympathetic' means feeling, showing, or expressing sympathy." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(B) 'unsympathetic' means not feeling, showing, or expressing sympathy." +
        "<br><br>" +
        "(D) 'cold' means lacking affection or warmth of feeling; unemotional.",
    chinese_explanation: "(C) '有同情心的' 意味着感受到、表现或表达同情的。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别的兴趣或同情；漠不关心的。" +
        "<br><br>" +
        "(B) '无同情心的' 意味着没有感受到、表现或表达同情的。" +
        "<br><br>" +
        "(D) '冷淡的' 意味着缺乏感情或温暖的感觉；无情的。"
    },
    {
        id: 10,
    question: "In many mythologies, the gods are depicted as __________ beings, capable of controlling the forces of nature and shaping the destiny of humans.",
    chinese_question: "在许多神话中，诸神被描绘成 __________ 的存在，能够控制自然力量和塑造人类的命运。",
    answers: [
        { option: "A", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
        { option: "B", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
        { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
        { option: "D", answer: "mortal", chinese_answer: "凡人的", chinese_romanization: "fánrén de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'omnipotent' means having unlimited power; able to do anything." +
        "<br><br>" +
        "(B) 'powerless' means without ability, influence, or power." +
        "<br><br>" +
        "(C) 'limited' means restricted in size, amount, or extent." +
        "<br><br>" +
        "(D) 'mortal' means subject to death.",
    chinese_explanation: "(A) '全能的' 意味着拥有无限的力量；能够做任何事。" +
        "<br><br>" +
        "(B) '无力的' 意味着没有能力、影响力或权力的。" +
        "<br><br>" +
        "(C) '有限的' 意味着在大小、数量或范围上受限制的。" +
        "<br><br>" +
        "(D) '凡人的' 意味着会死亡的。"
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
