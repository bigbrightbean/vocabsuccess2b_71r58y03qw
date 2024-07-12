// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The new building's __________ facade, with its flashing lights and oversized advertisements, stood out awkwardly among the historic structures.",
    chinese_question: "新建筑的 __________ 外观，带有闪烁的灯光和超大的广告牌，在历史建筑中显得格外突兀。",
    answers: [
        { option: "A", answer: "muted", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
        { option: "B", answer: "refined", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
        { option: "C", answer: "gaudy", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
        { option: "D", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless." +
        "<br><br>" +
        "(A) 'muted' means (of a color or lighting) not bright; subdued." +
        "<br><br>" +
        "(B) 'refined' means with impurities or unwanted elements having been removed by processing." +
        "<br><br>" +
        "(D) 'understated' means presented or expressed in a subtle and effective way.",
    chinese_explanation: "(C) '俗丽的' 意味着华而不实的亮丽或炫耀，通常显得没有品味。" +
        "<br><br>" +
        "(A) '柔和的' 意味着（颜色或光线）不亮的；柔和的。" +
        "<br><br>" +
        "(B) '精致的' 意味着通过加工去除杂质或不需要的元素。" +
        "<br><br>" +
        "(D) '低调的' 意味着以微妙和有效的方式呈现或表达的。"
    },
    {
        id: 2,
        question: "His __________ lifestyle, filled with luxury cars and extravagant parties, was the talk of the town.",
        chinese_question: "他那 __________ 的生活方式，充满了豪华汽车和奢华派对，成为了全城的谈资。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "humble", chinese_answer: "卑微的", chinese_romanization: "bēiwēi de" },
            { option: "C", answer: "flamboyant", chinese_answer: "华丽的", chinese_romanization: "huálì de" },
            { option: "D", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(C) '华丽的' 意味着因其热情、自信和时尚而吸引注意。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己能力或成就的估计不过高的。" +
            "<br><br>" +
            "(B) '卑微的' 意味着对自己重要性的估计或表现较低的。" +
            "<br><br>" +
            "(D) '矜持的' 意味着慢于表达情感或意见的。"
    },
    {
        id: 3,
        question: "His __________ voice boomed through the hall, capturing everyone's attention.",
        chinese_question: "他 __________ 的声音在大厅里回响，吸引了每个人的注意。",
        answers: [
            { option: "A", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "rotund", chinese_answer: "洪亮的", chinese_romanization: "hóngliàng de" },
            { option: "D", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīngróu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rotund' means (of speech or literary style) indulging in grandiloquent expression." +
            "<br><br>" +
            "(A) 'faint' means (of a sight, smell, or sound) barely perceptible." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch.",
        chinese_explanation: "(C) '洪亮的' 意味着（演讲或文学风格）沉迷于夸张的表达。" +
            "<br><br>" +
            "(A) '微弱的' 意味着（视、嗅或声音）几乎察觉不到的。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(D) '轻柔的' 意味着易于模制、切割、压缩或折叠的；摸起来不硬或不牢的。"
    },
    {
        id: 4,
        question: "Freedom of speech is considered __________ in a democratic society and is protected by law.",
        chinese_question: "言论自由在民主社会中被视为 __________ 的，并受到法律保护。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sacred' means regarded with great respect and reverence by a particular religion, group, or individual." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'unimportant' means lacking in significance or value." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '神圣的' 意味着被特定宗教、团体或个人高度尊重和崇敬的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着没有意义或价值的。" +
            "<br><br>" +
            "(D) '不相关的' 意味着与某事物无关的。"
    },
    {
        id: 5,
        question: "Wearing a seatbelt is __________ in many countries to ensure passenger safety.",
        chinese_question: "在许多国家，系安全带是 __________ 的，以确保乘客的安全。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选", chinese_romanization: "kě xuǎn" },
            { option: "B", answer: "voluntary", chinese_answer: "自愿", chinese_romanization: "zìyuàn" },
            { option: "C", answer: "mandatory", chinese_answer: "强制", chinese_romanization: "qiángzhì" },
            { option: "D", answer: "elective", chinese_answer: "选修", chinese_romanization: "xuǎnxiū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mandatory' means required by law or rules; compulsory." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(B) 'voluntary' means done, given, or acting of one's own free will." +
            "<br><br>" +
            "(D) 'elective' means related to or working by means of election.",
        chinese_explanation: "(C) '强制' 意味着依法或根据规则要求的；强制性的。" +
            "<br><br>" +
            "(A) '可选' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(B) '自愿' 意味着出于个人自由意愿的。" +
            "<br><br>" +
            "(D) '选修' 意味着通过选举的或与选举有关的。"
    },
    {
        id: 6,
    question: "His __________ decision-making helped the team navigate through the crisis efficiently.",
    chinese_question: "他 __________ 的决策帮助团队有效地度过了危机。",
    answers: [
        { option: "A", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
        { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
        { option: "C", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
        { option: "D", answer: "delayed", chinese_answer: "推迟的", chinese_romanization: "tuīchí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'swift' means happening quickly or promptly." +
        "<br><br>" +
        "(A) 'slow' means taking a long time to perform an action or reach a decision." +
        "<br><br>" +
        "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
        "<br><br>" +
        "(D) 'delayed' means postponed or put off to a later time.",
    chinese_explanation: "(C) “快速的” 意味着迅速或及时发生。" +
        "<br><br>" +
        "(A) '缓慢的' 意味着花费很长时间来执行动作或做出决定。" +
        "<br><br>" +
        "(B) '犹豫的' 意味着行动或说话时犹豫不决或不确定的。" +
        "<br><br>" +
        "(D) '推迟的' 意味着推迟到以后的时间。"
    },
    {
        id: 7,
    question: "Their __________ action in response to the emergency saved many lives.",
    chinese_question: "他们对紧急情况的 __________ 行动拯救了许多生命。",
    answers: [
        { option: "A", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
        { option: "B", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
        { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swift' means happening quickly or promptly." +
        "<br><br>" +
        "(A) 'sluggish' means slow-moving or inactive." +
        "<br><br>" +
        "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) “快速的” 意味着迅速或及时发生。" +
        "<br><br>" +
        "(A) '缓慢的' 意味着缓慢移动或不活跃的。" +
        "<br><br>" +
        "(C) '犹豫的' 意味着行动或说话时犹豫不决或不确定的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 8,
    question: "After years of political activism, he became __________ with the system, realizing it was deeply flawed.",
    chinese_question: "经过多年的政治活动，他对体制感到 __________，意识到它有严重的缺陷。",
    answers: [
        { option: "A", answer: "hopeful", chinese_answer: "充满希望的", chinese_romanization: "chōngmǎn xīwàng de" },
        { option: "B", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
        { option: "C", answer: "disillusioned", chinese_answer: "幻灭的", chinese_romanization: "huànmiè de" },
        { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'disillusioned' means disappointed in someone or something that one discovers to be less good than one had believed." +
        "<br><br>" +
        "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
        "<br><br>" +
        "(B) 'optimistic' means hopeful and confident about the future." +
        "<br><br>" +
        "(D) 'content' means in a state of peaceful happiness.",
    chinese_explanation: "(C) '幻灭的' 意味着对被发现不如所信的那么好的人或事物感到失望的。" +
        "<br><br>" +
        "(A) '充满希望的' 意味着对未来事件感到或激发乐观的。" +
        "<br><br>" +
        "(B) '乐观的' 意味着对未来充满希望和信心的。" +
        "<br><br>" +
        "(D) '满足的' 意味着处于和平幸福的状态。"
    },
    {
        id: 9,
        question: "Despite the intense pain from his injury, he remained __________, showing no signs of discomfort and maintaining his calm demeanour.",
        chinese_question: "尽管他的伤口疼痛难忍，他依然保持 __________，没有表现出任何不适，保持着冷静的举止。",
        answers: [
            { option: "A", answer: "stoic", chinese_answer: "坚忍的", chinese_romanization: "jiānrěn de" },
            { option: "B", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
            { option: "C", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "D", answer: "expressive", chinese_answer: "富有表现力的", chinese_romanization: "fùyǒu biǎoxiàn lì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stoic' means enduring pain and hardship without showing one's feelings or complaining." +
            "<br><br>" +
            "(B) 'emotional' means having feelings that are easily excited and openly displayed." +
            "<br><br>" +
            "(C) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(D) 'expressive' means effectively conveying thought or feeling.",
        chinese_explanation: "(A) '坚忍的' 意味着忍受痛苦和困难而不表现出情感或抱怨。" +
            "<br><br>" +
            "(B) '情绪化的' 意味着情感容易激动和公开表现的。" +
            "<br><br>" +
            "(C) '敏感的' 意味着对细微变化、信号或影响迅速做出反应的。" +
            "<br><br>" +
            "(D) '富有表现力的' 意味着有效地传达思想或感情的。"
    },
    {
        id: 10,
        question: "The old castle had an __________ charm, with its dimly lit hallways and ancient tapestries, creating a hauntingly beautiful experience.",
        chinese_question: "古老的城堡有一种 __________ 的魅力，昏暗的走廊和古老的挂毯，营造出一种令人难忘的美丽体验。",
        answers: [
            { option: "A", answer: "atmospheric", chinese_answer: "具有氛围的", chinese_romanization: "jùyǒu fēnwéi de" },
            { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "C", answer: "sterile", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'atmospheric' means creating a distinctive mood, typically of romance, mystery, or nostalgia." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'sterile' means lacking in imagination, creativity, or excitement; uninspiring or unproductive." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '具有氛围的' 意味着营造出一种独特的情绪，通常是浪漫、神秘或怀旧的。" +
            "<br><br>" +
            "(B) '平淡的' 意味着缺乏鲜明特征或特点，因此无趣的。" +
            "<br><br>" +
            "(C) '无趣的' 意味着缺乏想象力、创造力或兴奋的；无趣或无生产力的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
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
