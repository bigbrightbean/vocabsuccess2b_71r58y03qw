// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The candidate's __________ debate performance impressed the voters.",
    chinese_question: "候选人 __________ 的辩论表现给选民留下了深刻的印象。",
    answers: [
        { option: "A", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
        { option: "B", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "C", answer: "unclear", chinese_answer: "不清楚", chinese_romanization: "bù qīngchǔ" },
        { option: "D", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'eloquent' means fluent or persuasive in speaking or writing." +
        "<br><br>" +
        "(B) 'hesitant' means lacking decisiveness; uncertain or unwilling to make a decision." +
        "<br><br>" +
        "(C) 'unclear' means not easy to understand." +
        "<br><br>" +
        "(D) 'weak' means lacking strength or power.",
    chinese_explanation: "(A) '雄辩' 意味着说话或写作流利且有说服力。" +
        "<br><br>" +
        "(B) '犹豫' 意味着缺乏决断力；不确定或不愿做出决定。" +
        "<br><br>" +
        "(C) '不清楚' 意味着不容易理解。" +
        "<br><br>" +
        "(D) '弱' 意味着缺乏力量或力量。"
    },
    {
        id: 2,
    question: "His __________ appetite was legendary; he could eat twice as much as anyone else at the table.",
    chinese_question: "他的 __________ 食欲是传奇；他可以吃下桌上其他人的两倍。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
        { option: "C", answer: "gargantuan", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
        { option: "D", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'gargantuan' means enormous." +
        "<br><br>" +
        "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(B) 'small' means of a size that is less than normal or usual." +
        "<br><br>" +
        "(D) 'average' means having qualities that are seen as typical of the majority.",
    chinese_explanation: "(C) '巨大的' 意味着非常大的。" +
        "<br><br>" +
        "(A) '谦虚的' 意味着对自己能力或成就的估计不过高的。" +
        "<br><br>" +
        "(B) '小的' 意味着尺寸小于正常或通常的。" +
        "<br><br>" +
        "(D) '平均的' 意味着具有大多数人典型特征的。"
    },
    {
        id: 3,
    question: "The changes he implemented were __________ and did not affect the overall structure of the organization.",
    chinese_question: "他实施的变化是 __________ 的，没有影响组织的整体结构。",
    answers: [
        { option: "A", answer: "substantial", chinese_answer: "实质性的", chinese_romanization: "shízhì xìng de" },
        { option: "B", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
        { option: "C", answer: "nominal", chinese_answer: "名义上的", chinese_romanization: "míngyì shàng de" },
        { option: "D", answer: "major", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nominal' means existing in name only; not actual or real." +
        "<br><br>" +
        "(A) 'substantial' means of considerable importance, size, or worth." +
        "<br><br>" +
        "(B) 'significant' means sufficiently great or important to be worthy of attention." +
        "<br><br>" +
        "(D) 'major' means important, serious, or significant.",
    chinese_explanation: "(C) '名义上的' 意味着仅在名义上存在的；不实际或不真实的。" +
        "<br><br>" +
        "(A) '实质性的' 意味着相当重要、大小或价值的。" +
        "<br><br>" +
        "(B) '重要的' 意味着足够大或重要到值得注意的。" +
        "<br><br>" +
        "(D) '主要的' 意味着重要的、严重的或显著的。"
    },
    {
        id: 4,
    question: "The team's __________ approach to the project ensured that everything was completed on time.",
    chinese_question: "团队对项目的 __________ 方法确保了一切按时完成。",
    answers: [
        { option: "A", answer: "disorderly", chinese_answer: "无序的", chinese_romanization: "wú xù de" },
        { option: "B", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
        { option: "C", answer: "orderly", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
        { option: "D", answer: "erratic", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'orderly' means neatly and methodically arranged." +
        "<br><br>" +
        "(A) 'disorderly' means lacking organization; untidy." +
        "<br><br>" +
        "(B) 'haphazard' means lacking any obvious principle of organization." +
        "<br><br>" +
        "(D) 'erratic' means not even or regular in pattern or movement; unpredictable.",
    chinese_explanation: "(C) '有条理的' 意味着整齐和有条理地安排的。" +
        "<br><br>" +
        "(A) '无序的' 意味着缺乏组织；不整洁的。" +
        "<br><br>" +
        "(B) '杂乱的' 意味着缺乏明显的组织原则的。" +
        "<br><br>" +
        "(D) '不稳定的' 意味着模式或运动不均匀或规律的；不可预测的。"
    },
    {
        id: 5,
        question: "The __________ nature of fame means that many celebrities struggle to stay in the spotlight for long.",
        chinese_question: "名声的 __________ 特性意味着许多名人难以长期保持在公众视线中。",
        answers: [
            { option: "A", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "B", answer: "perishable", chinese_answer: "易逝的", chinese_romanization: "yì shì de" },
            { option: "C", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "D", answer: "eternal", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perishable' means likely to decay or go bad quickly." +
            "<br><br>" +
            "(A) 'enduring' means lasting over a long period of time; durable." +
            "<br><br>" +
            "(C) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(D) 'eternal' means lasting or existing forever; without end or beginning.",
        chinese_explanation: "(B) '易逝的' 意味着容易腐烂或很快变质。" +
            "<br><br>" +
            "(A) '持久的' 意味着持续很长一段时间的；耐用的。" +
            "<br><br>" +
            "(C) '永久的' 意味着持续或打算无限期地持续或保持不变的。" +
            "<br><br>" +
            "(D) '永恒的' 意味着永远持续或存在的；没有结束或开始。"
    },
    {
        id: 6,
        question: "His __________ investment strategy led to huge losses for the company.",
        chinese_question: "他的 __________ 投资策略导致了公司巨大的损失。",
        answers: [
            { option: "A", answer: "calculated", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsīshúlǜ de" },
            { option: "B", answer: "deliberate", chinese_answer: "有意的", chinese_romanization: "yǒuyì de" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "D", answer: "methodical", chinese_answer: "有条不紊的", chinese_romanization: "yǒutiáobùwěn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(A) 'calculated' means carefully thought out or planned." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '鲁莽的' 意味着不考虑或不在乎行为的后果。" +
            "<br><br>" +
            "(A) '深思熟虑的' 意味着经过仔细思考或计划的。" +
            "<br><br>" +
            "(B) '有意的' 意味着有意识地和故意地。" +
            "<br><br>" +
            "(D) '有条不紊的' 意味着按照系统或既定的程序完成的。"
    },
    {
        id: 7,
        question: "Her __________ conversation made the evening enjoyable and engaging for everyone at the table.",
        chinese_question: "她 __________ 的谈话让晚上的聚会变得愉快而吸引人，每个人都很投入。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "scintillating", chinese_answer: "闪耀的", chinese_romanization: "shǎnyào de" },
            { option: "C", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "lifeless", chinese_answer: "没有生气的", chinese_romanization: "méiyǒu shēngqì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scintillating' means brilliantly and excitingly clever or skillful." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(D) 'lifeless' means lacking vigor, vitality, or excitement.",
        chinese_explanation: "(B) '闪耀的' 意味着非常聪明和令人兴奋的。" +
            "<br><br>" +
            "(A) '单调的' 意味着沉闷、乏味和重复的；缺乏多样性和兴趣的。" +
            "<br><br>" +
            "(C) '乏味的' 意味着太长、太慢或太无聊的；令人厌烦的或单调的。" +
            "<br><br>" +
            "(D) '没有生气的' 意味着缺乏活力、活力或兴奋的。"
    },
    {
        id: 8,
        question: "Her attitude towards work was __________, often causing conflicts with her colleagues.",
        chinese_question: "她对工作的态度是__________的，经常引起与同事的冲突。",
        answers: [
            { option: "A", answer: "flawless", chinese_answer: "无瑕疵的", chinese_romanization: "wú xiácī de" },
            { option: "B", answer: "perfect", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "untroubled", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wúlǜ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty. Figuratively, it can mean being troublesome or causing difficulties." +
            "<br><br>" +
            "(A) 'flawless' means without any imperfections or defects; perfect." +
            "<br><br>" +
            "(B) 'perfect' means having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be." +
            "<br><br>" +
            "(D) 'untroubled' means not feeling, showing, or affected by anxiety or problems.",
        chinese_explanation: "(C) '有问题的'一词意味着构成或呈现问题或困难的。比喻地，它可以表示麻烦或引起困难的。" +
            "<br><br>" +
            "(A) '无瑕疵的' 意味着没有任何缺陷或缺点的；完美的。" +
            "<br><br>" +
            "(B) '完美的' 意味着具有所有要求或可取的元素、品质或特征；尽可能好的。" +
            "<br><br>" +
            "(D) '无忧无虑的' 意味着没有感到、表现出或受到焦虑或问题的影响。"
    },
    {
        id: 9,
        question: "The artist's __________ style was evident in his bold use of colors and dramatic brush strokes.",
        chinese_question: "这位艺术家的 __________ 风格在他大胆使用颜色和戏剧性的笔触中显而易见。",
        answers: [
            { option: "A", answer: "subdued", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "B", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
            { option: "C", answer: "flamboyant", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
            { option: "D", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(B) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
        chinese_explanation: "(C) '炫耀的' 意味着因其热情、自信和时尚而吸引注意力。" +
            "<br><br>" +
            "(A) '低调的' 意味着安静的，相当反思的或沮丧的。" +
            "<br><br>" +
            "(B) '克制的' 意味着以保留或节制为特征；无动于衷的或不带感情的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己能力或成就的估计不高。"
    },
    {
        id: 10,
        question: "The judge was accused of being __________, giving favorable rulings to his friends.",
        chinese_question: "这位法官被指控__________，对他的朋友做出了有利的裁决。",
        answers: [
            { option: "A", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "B", answer: "objective", chinese_answer: "客观的", chinese_romanization: "kèguān de" },
            { option: "C", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
            { option: "D", answer: "unbiased", chinese_answer: "无偏见的", chinese_romanization: "wú piānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'partial' means favoring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(A) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(B) 'objective' means not influenced by personal feelings or opinions in considering and representing facts." +
            "<br><br>" +
            "(D) 'unbiased' means showing no prejudice for or against something; impartial.",
        chinese_explanation: "(C) '偏袒的'一词意味着在争端中偏袒一方；有偏见的。" +
            "<br><br>" +
            "(A) '公正的' 意味着平等对待所有对手或争论者的；公平的和公正的。" +
            "<br><br>" +
            "(B) '客观的' 意味着在考虑和表达事实时不受个人感情或意见的影响的。" +
            "<br><br>" +
            "(D) '无偏见的' 意味着对某事没有偏见的；公正的。"
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
