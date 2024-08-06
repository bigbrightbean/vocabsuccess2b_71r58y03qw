// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge was __________ in his ruling, giving the defendant a lighter sentence due to the extenuating circumstances.",
        chinese_question: "法官在裁决中表现出 __________，由于特殊情况，给被告判了较轻的刑罚。",
        answers: [
            { option: "A", answer: "merciful", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "B", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "C", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'merciful' means showing or exercising mercy." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(D) 'severe' means very great; intense.",
        chinese_explanation: "(A) '仁慈的' 意味着表现出或行使仁慈。" +
            "<br><br>" +
            "(B) '严厉的' 意味着对感官有不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(C) '严格的' 意味着要求遵守和观察行为规则的。" +
            "<br><br>" +
            "(D) '严重的' 意味着非常大的；强烈的。"
    },
    {
        id: 2,
        question: "The author's __________ prose style, such as using rich descriptions and elaborate metaphors, made the novel a rich and immersive reading experience.",
        chinese_question: "作者的 __________ 散文风格，例如使用丰富的描述和精致的比喻，使这部小说成为一种丰富而沉浸的阅读体验。",
        answers: [
                { option: "A", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
                { option: "B", answer: "terse", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
                { option: "C", answer: "rotund", chinese答案: "华丽的", chinese romanization: "huálì de" },
                { option: "D", answer: "plain", chinese答案: "简单的", chinese romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rotund' means (in this context) rich and elaborate in sound or style, giving a full and impressive effect." +
            "<br><br>" +
            "(A) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(B) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '华丽的' 意味着（在这个上下文中）声音或风格上丰富和精致的，带来一种丰满和令人印象深刻的效果。" +
            "<br><br>" +
            "(A) '稀疏的' 意味着稀疏或分散的。" +
            "<br><br>" +
            "(B) '简短的' 意味着用词节省的；简洁的。" +
            "<br><br>" +
            "(D) '简单的' 意味着没有装饰或复杂的；性格简单或普通的。"
    },
    {
        id: 3,
        question: "His __________ behaviour at the party, such as talking to himself and making strange gestures, made everyone uncomfortable.",
        chinese_question: "他在聚会上的__________行为，例如自言自语和做奇怪的手势，让所有人都感到不舒服。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
            { option: "B", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "C", answer: "odd", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
            { option: "D", answer: "usual", chinese_answer: "平常的", chinese_romanization: "píngcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'odd' means different from what is usual or expected; strange." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(D) 'usual' means habitually or typically occurring or done; customary.",
        chinese_explanation: "(C) '奇怪的'一词意味着不同于通常或预期的；奇怪的。" +
            "<br><br>" +
            "(A) '正常的' 意味着符合标准的；通常、典型或预期的。" +
            "<br><br>" +
            "(B) '典型的' 意味着具有某种特定类型的人或事物的典型品质的。" +
            "<br><br>" +
            "(D) '平常的' 意味着习惯性或通常发生或完成的；惯常的。"
    },
    {
        id: 4,
    question: "The crowd erupted into __________ applause after the unexpected performance, showing their genuine appreciation and surprise.",
    chinese_question: "在意外的表演之后，观众爆发出 __________ 的掌声，表现出他们的真心欣赏和惊喜。",
    answers: [
        { option: "A", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
        { option: "B", answer: "rehearsed", chinese_answer: "排练的", chinese_romanization: "páiliàn de" },
        { option: "C", answer: "planned", chinese_answer: "计划的", chinese_romanization: "jìhuà de" },
        { option: "D", answer: "scripted", chinese_answer: "照本宣科的", chinese_romanization: "zhàoběn xuānkē de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus." +
        "<br><br>" +
        "(B) 'rehearsed' means practiced and prepared in advance." +
        "<br><br>" +
        "(C) 'planned' means decided on and arranged in advance." +
        "<br><br>" +
        "(D) 'scripted' means written or prepared in advance.",
    chinese_explanation: "(A) '自发的' 意味着因突然的内心冲动或倾向而做出或发生的，没有预谋或外部刺激的。" +
        "<br><br>" +
        "(B) '排练的' 意味着提前练习和准备好的。" +
        "<br><br>" +
        "(C) '计划的' 意味着提前决定和安排好的。" +
        "<br><br>" +
        "(D) '照本宣科的' 意味着提前写好或准备好的。"
    },
    {
        id: 5,
    question: "As the project manager, she is __________ for ensuring the team meets its deadlines.",
    chinese_question: "作为项目经理，她 __________ 确保团队按时完成任务。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
        { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
        { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "D", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(D) 'unreliable' means not able to be relied upon.",
    chinese_explanation: "(B) “负责的” 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
        "<br><br>" +
        "(A) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
        "<br><br>" +
        "(C) '粗心的' 意味着没有充分注意或考虑避免伤害或错误。" +
        "<br><br>" +
        "(D) '不可靠的' 意味着不能依靠的。"
    },
    {
        id: 6,
    question: "Her __________ nature made her a great counselor, as she could understand and share the feelings of others.",
    chinese_question: "她 __________ 的性格使她成为一名优秀的顾问，因为她能够理解和分享他人的感受。",
    answers: [
        { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
        { option: "C", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" },
        { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'empathetic' means showing an ability to understand and share the feelings of others." +
        "<br><br>" +
        "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'selfish' means lacking consideration for others.",
    chinese_explanation: "(C) “有同理心的” 意味着表现出理解和分享他人感受的能力。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有兴趣、热情或关心。" +
        "<br><br>" +
        "(B) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '自私的' 意味着缺乏对他人的考虑。"
    },
    {
        id: 7,
    question: "The details of the contract were __________, leaving both parties confused about the terms and conditions.",
    chinese_question: "合同的细节非常 __________，使得双方对条款和条件感到困惑。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "B", answer: "murky", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
        { option: "C", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
        { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'murky' means not fully explained or understood, especially with concealed dishonesty or immorality." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(C) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
        "<br><br>" +
        "(D) 'obvious' means easily perceived or understood; clear.",
    chinese_explanation: "(B) '模糊的' 意味着没有完全解释或理解，尤其是带有隐瞒的不诚实或不道德。" +
        "<br><br>" +
        "(A) '清晰的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(C) '明确的' 意味着清楚而详细地陈述的，没有混淆或怀疑的余地。" +
        "<br><br>" +
        "(D) '明显的' 意味着容易感知或理解的；清楚的。"
    },
    {
        id: 8,
        question: "The debate team found the discussion to be a __________ environment for developing their arguments, with each member contributing valuable points.",
        chinese_question: "辩论队发现讨论是一个发展他们论点的 __________ 环境，每个成员都贡献了宝贵的观点。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "unyielding", chinese_answer: "顽固的", chinese_romanization: "wángù de" },
            { option: "C", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" },
            { option: "D", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fertile' means producing many new and inventive ideas or conducive to growth and development." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'unyielding' means not giving way to pressure; hard or solid." +
            "<br><br>" +
            "(D) 'barren' means unproductive or unfruitful.",
        chinese_explanation: "(C) '肥沃的' 意味着产生许多新的和有创造性的想法或有利于增长和发展的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(B) '顽固的' 意味着不屈服于压力的；坚硬的或坚固的。" +
            "<br><br>" +
            "(D) '贫瘠的' 意味着无生产力的或无成果的。"
    },
    {
        id: 9,
    question: "Despite his __________ movements on the dance floor that looked like he was tripping over his own feet, he remained confident and continued to enjoy himself.",
    chinese_question: "尽管在舞池上的动作看起来像是被自己的脚绊倒了，他依然自信并继续享受自己。",
    answers: [
        { option: "A", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" },
        { option: "B", answer: "nimble", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
        { option: "C", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
        { option: "D", answer: "fluid", chinese_answer: "流畅的", chinese_romanization: "liúchàng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ungainly' means awkward and clumsy." +
        "<br><br>" +
        "(A) 'agile' means able to move quickly and easily." +
        "<br><br>" +
        "(B) 'nimble' means quick and light in movement or action; agile." +
        "<br><br>" +
        "(D) 'fluid' means smoothly elegant or graceful.",
    chinese_explanation: "(C) '笨拙的' 意味着尴尬和笨拙的。" +
        "<br><br>" +
        "(A) '敏捷的' 意味着能够快速轻松地移动。" +
        "<br><br>" +
        "(B) '灵活的' 意味着动作或行为迅速和轻盈的；敏捷的。" +
        "<br><br>" +
        "(D) '流畅的' 意味着平滑优雅或优雅的。"
    },
    {
        id: 10,
    question: "The idea of moving to a new city was not __________ to her, as she loved her hometown.",
    chinese_question: "搬到一个新城市的想法对她来说并不 __________ ，因为她爱她的家乡。",
    answers: [
        { option: "A", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
        { option: "B", answer: "offensive", chinese_answer: "冒犯的", chinese_romanization: "màofàn de" },
        { option: "C", answer: "disturbing", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" },
        { option: "D", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'palatable' means acceptable or satisfactory." +
        "<br><br>" +
        "(B) 'offensive' means causing someone to feel deeply hurt, upset, or angry." +
        "<br><br>" +
        "(C) 'disturbing' means causing anxiety; worrying." +
        "<br><br>" +
        "(D) 'unsettling' means causing anxiety or uneasiness; disturbing.",
    chinese_explanation: "(A) '可接受的' 意味着可以接受或令人满意的。" +
        "<br><br>" +
        "(B) '冒犯的' 意味着使某人感到深深的伤害、难过或生气。" +
        "<br><br>" +
        "(C) '令人不安的' 意味着引起焦虑；令人担忧。" +
        "<br><br>" +
        "(D) '令人不安的' 意味着引起焦虑或不安；令人不安。"
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
