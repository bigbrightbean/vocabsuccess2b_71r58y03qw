// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The artist created a __________ replica of the famous castle, complete with tiny windows and detailed turrets.",
    chinese_question: "艺术家制作了一个 __________ 的著名城堡复制品，配有微小的窗户和精细的塔楼。",
    answers: [
        { option: "A", answer: "miniature", chinese_answer: "微型的", chinese_romanization: "wēixíng de" },
        { option: "B", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
        { option: "C", answer: "enormous", chinese_answer: "庞大的", chinese_romanization: "pángdà de" },
        { option: "D", answer: "immense", chinese_answer: "巨大的", chinese_romanization: "jùdà de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'miniature' means very small of its kind." +
        "<br><br>" +
        "(B) 'gigantic' means of very great size or extent; huge." +
        "<br><br>" +
        "(C) 'enormous' means very large in size, quantity, or extent." +
        "<br><br>" +
        "(D) 'immense' means extremely large or great, especially in scale or degree.",
    chinese_explanation: "(A) '微型的' 意味着非常小的。" +
        "<br><br>" +
        "(B) '巨大的' 意味着非常大的或范围广的；巨大的。" +
        "<br><br>" +
        "(C) '庞大的' 意味着非常大，数量或程度非常大的。" +
        "<br><br>" +
        "(D) '巨大的' 意味着极大的或伟大的，尤其是规模或程度上的。"
    },
    {
        id: 2,
    question: "It was __________ for the villagers to celebrate the harvest with a large feast, a tradition passed down through generations.",
    chinese_question: "村民们__________地庆祝丰收，举行了一场盛大的宴会，这是一代代传下来的传统。",
    answers: [
        { option: "A", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
        { option: "B", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
        { option: "C", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
        { option: "D", answer: "improper", chinese_answer: "不适当的", chinese_romanization: "bù shìdàng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances. Figuratively, it can mean something that is traditionally done." +
        "<br><br>" +
        "(A) 'unusual' means not habitually or commonly occurring or done." +
        "<br><br>" +
        "(C) 'rude' means offensively impolite or ill-mannered." +
        "<br><br>" +
        "(D) 'improper' means not in accordance with accepted rules or standards, especially of morality or honesty.",
    chinese_explanation: "(B) '习惯的' 一词意味着根据与特定社会、地方或环境相关的习俗或惯常做法。比喻地，它可以表示传统上做的事情。" +
        "<br><br>" +
        "(A) '不寻常的' 意味着不习惯或不常见。" +
        "<br><br>" +
        "(C) '粗鲁的' 意味着冒犯性的无礼或粗鲁。" +
        "<br><br>" +
        "(D) '不适当的' 意味着不符合接受的规则或标准，特别是道德或诚实的标准。"
    },
    {
        id: 3,
    question: "The __________ achievements of the company, including groundbreaking innovations and major milestones during the last decade, were highlighted during the anniversary celebration.",
    chinese_question: "公司的 __________ 成就，包括在过去十年中的开创性创新和重大里程碑，在周年庆典上被强调。",
    answers: [
        { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "B", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "C", answer: "current", chinese_answer: "当前", chinese_romanization: "dāngqián" },
        { option: "D", answer: "imminent", chinese_answer: "即将发生", chinese_romanization: "jíjiāng fāshēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'past' means having happened or existed before now." +
        "<br><br>" +
        "(B) 'future' means the time or a period of time following the moment of speaking or writing." +
        "<br><br>" +
        "(C) 'current' means belonging to the present time." +
        "<br><br>" +
        "(D) 'imminent' means about to happen.",
    chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" +
        "<br><br>" +
        "(B) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
        "<br><br>" +
        "(C) '当前' 意味着属于现在的时间。" +
        "<br><br>" +
        "(D) '即将发生' 意味着即将发生。"
    },
    {
        id: 4,
        question: "The comedian's __________ one-liners had the entire audience laughing throughout the show.",
        chinese_question: "这位喜剧演员 __________ 的俏皮话让整个观众在整个节目中笑个不停。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "witty", chinese_answer: "机智的", chinese_romanization: "jīzhì de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'witty' means showing or characterized by quick and inventive verbal humor." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'serious' means solemn or thoughtful in character or manner.",
        chinese_explanation: "(B) '机智的' 意味着表现出或以快速和富有创造力的口头幽默为特征。" +
            "<br><br>" +
            "(A) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '单调的' 意味着沉闷、乏味和重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(D) '严肃的' 意味着性格或举止严肃或深思的。"
    },
    {
        id: 5,
    question: "The film director took great care to ensure the costumes and settings were __________, accurately reflecting the time period of the story.",
    chinese_question: "电影导演非常注重确保服装和布景具有 __________ 性，准确反映故事的时代背景。",
    answers: [
        { option: "A", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
        { option: "B", answer: "anachronistic", chinese_answer: "时代错误的", chinese_romanization: "shídài cuòwù de" },
        { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
        { option: "D", answer: "inaccurate", chinese_answer: "不准确的", chinese_romanization: "bù zhǔnquè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'historical' means relating to the study or representation of past events." +
        "<br><br>" +
        "(A) 'futuristic' means having or involving very modern technology or design." +
        "<br><br>" +
        "(B) 'anachronistic' means belonging to a period other than that being portrayed." +
        "<br><br>" +
        "(D) 'inaccurate' means not correct or precise.",
    chinese_explanation: "(C) '历史的' 意味着与过去事件的研究或表现有关的。" +
        "<br><br>" +
        "(A) '未来的' 意味着具有或涉及非常现代的技术或设计的。" +
        "<br><br>" +
        "(B) '时代错误的' 意味着属于所描绘的时期之外的。" +
        "<br><br>" +
        "(D) '不准确的' 意味着不正确或不精确的。"
    },
    {
        id: 6,
        question: "Despite the team's success, his __________ attitude often dampened their spirits.",
        chinese_question: "尽管团队取得了成功，他的 __________ 态度常常打击他们的士气。",
        answers: [
            { option: "A", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "C", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
            { option: "D", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(A) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence." +
            "<br><br>" +
            "(C) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(D) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(B) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情将会发生。" +
            "<br><br>" +
            "(A) '积极的' 意味着存在或拥有特征或品质，而不是它们的缺失。" +
            "<br><br>" +
            "(C) '鼓励的' 意味着给某人支持或信心的；支持的。" +
            "<br><br>" +
            "(D) '支持的' 意味着提供鼓励或情感帮助的。"
    },
    {
        id: 7,
        question: "He gave a __________ answer when asked about his future plans, leaving everyone unsure of his intentions.",
        chinese_question: "当被问及他的未来计划时，他给出了一个 __________ 的答案，使每个人都不确定他的意图。",
        answers: [
            { option: "A", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" },
            { option: "D", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vague' means not clearly expressed, known, described, or decided." +
            "<br><br>" +
            "(A) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'specific' means clearly defined or identified.",
        chinese_explanation: "(B) '模糊的' 意味着表达不清楚、未知、描述不清或未决定的。" +
            "<br><br>" +
            "(A) '明确的' 意味着清楚地陈述或决定的；不模糊或怀疑的。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着简单易做或理解的。" +
            "<br><br>" +
            "(D) '具体的' 意味着清晰定义或识别的。"
    },
    {
        id: 8,
        question: "In any emergency situation, ensuring people's safety is of __________ importance because it is essential to protect lives first before addressing other concerns.",
        chinese_question: "在任何紧急情况下，确保人们的安全是 __________ 的，因为首先保护生命是至关重要的，然后再处理其他问题。",
        answers: [
            { option: "A", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "minor", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "C", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paramount' means more important than anything else; supreme." +
            "<br><br>" +
            "(A) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering; insignificant.",
        chinese_explanation: "(C) '最重要的' 意味着比其他任何事情都重要；至高无上的。" +
            "<br><br>" +
            "(A) '次要的' 意味着排在后面，不如某人或某物重要或由其产生。" +
            "<br><br>" +
            "(B) '小的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 9,
        question: "The __________ lake, surrounded by tall trees, provided the perfect spot for a peaceful afternoon picnic.",
        chinese_question: "被高大树木环绕的 __________ 湖泊为一个宁静的下午野餐提供了完美的地点。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "turbulent", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "C", answer: "tranquil", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹", chinese_romanization: "chǎonào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '宁静' 意味着没有干扰；平静。" +
            "<br><br>" +
            "(A) '混乱' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '动荡' 意味着以冲突、无序或混乱为特征；不稳定或不平静。" +
            "<br><br>" +
            "(D) '吵闹' 意味着发出或习惯发出大量噪音。"
    },
    {
        id: 10,
        question: "Her performance was __________, standing out among all the other acts with its unique style and impressive skill.",
        chinese_question: "她的表演非常 __________，以其独特的风格和令人印象深刻的技巧在所有其他表演中脱颖而出。",
        answers: [
            { option: "A", answer: "singular", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "common", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "ordinary", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'singular' means exceptionally good or great; remarkable." +
            "<br><br>" +
            "(B) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(A) '杰出的' 意味着异常好或伟大的；卓越的。" +
            "<br><br>" +
            "(B) '普通的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某一类型人或事物的独特品质的。"
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
