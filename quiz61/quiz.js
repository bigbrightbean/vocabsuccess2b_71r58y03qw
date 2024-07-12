// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The birth __________ in the country has been steadily declining over the past decade.",
    chinese_question: "过去十年该国的出生 __________ 稳步下降。",
    answers: [
        { option: "A", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "B", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" },
        { option: "C", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
        { option: "D", answer: "level", chinese_answer: "水平", chinese_romanization: "shuǐpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." +
        "<br><br>" +
        "(A) 'decrease' means to become smaller or fewer in size, amount, intensity, or degree." +
        "<br><br>" +
        "(C) 'increase' means to become or make greater in size, amount, intensity, or degree." +
        "<br><br>" +
        "(D) 'level' means a specific height or line; a position on a real or imaginary scale of amount, quantity, extent, or quality.",
    chinese_explanation: "(B) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" +
        "<br><br>" +
        "(A) '减少' 意味着在大小、数量、强度或程度上变小或变少。" +
        "<br><br>" +
        "(C) '增加' 意味着在大小、数量、强度或程度上变大或变多。" +
        "<br><br>" +
        "(D) '水平' 意味着特定的高度或线；在真实或想象的数量、程度或质量的尺度上的位置。"
    },
    {
        id: 2,
        question: "Her __________ negotiating skills helped the company secure the best deal possible.",
        chinese_question: "她 __________ 的谈判技巧帮助公司达成了最佳交易。",
        answers: [
                { option: "A", answer: "inept", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
                { option: "B", answer: "amateurish", chinese_answer: "业余", chinese_romanization: "yèyú" },
                { option: "C", answer: "consummate", chinese_answer: "完美", chinese_romanization: "wánměi" },
                { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
                "<br><br>" +
                "(A) 'inept' means having or showing no skill; clumsy." +
                "<br><br>" +
                "(B) 'amateurish' means engaging or engaged in without payment; non-professional." +
                "<br><br>" +
                "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '完美'一词意味着显示出高度的技能和天赋；完整或完美。" +
                "<br><br>" +
                "(A) '笨拙' 意味着没有技能的表现；笨拙。" +
                "<br><br>" +
                "(B) '业余' 意味着不支付报酬的；非专业的。" +
                "<br><br>" +
                "(D) '犹豫' 意味着在行动或说话上犹豫不决、不确定或缓慢。"
    },
    {
        id: 3,
    question: "The sudden drop in temperatures in the middle of summer was an __________ that puzzled meteorologists.",
    chinese_question: "夏季中期气温骤降是一个让气象学家困惑的 __________。",
    answers: [
        { option: "A", answer: "anomaly", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng"},
        { option: "B", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
        { option: "C", answer: "expectation", chinese_answer: "预期", chinese_romanization: "yùqī" },
        { option: "D", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'anomaly' means something that deviates from what is standard, normal, or expected." +
        "<br><br>" +
        "(B) 'norm' means something that is usual, typical, or standard." +
        "<br><br>" +
        "(C) 'expectation' means a strong belief that something will happen or be the case." +
        "<br><br>" +
        "(D) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.",
    chinese_explanation: "(A) '异常现象' 意味着偏离标准、正常或预期的事物。" +
        "<br><br>" +
        "(B) '常态' 意味着通常、典型或标准的事物。" +
        "<br><br>" +
        "(C) '预期' 意味着强烈相信某事会发生或成真。" +
        "<br><br>" +
        "(D) '一致性' 意味着在应用某事物时的符合性，通常是出于逻辑、准确性或公平的需要。"
    },
    {
        id: 4,
    question: "His exaggerated stories often resulted in a collective __________ from his listeners.",
    chinese_question: "他夸张的故事常常引起听众们集体的 __________。",
    answers: [
        { option: "A", answer: "frown", chinese_answer: "皱眉", chinese_romanization: "zhòuméi" },
        { option: "B", answer: "guffaw", chinese_answer: "哄笑", chinese_romanization: "hōngxiào" },
        { option: "C", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
        { option: "D", answer: "gasp", chinese_answer: "喘气", chinese_romanization: "chuǎnqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'guffaw' used figuratively means a loud and boisterous laugh." +
        "<br><br>" +
        "(A) 'frown' means to furrow one's brows in an expression indicating disapproval, displeasure, or concentration." +
        "<br><br>" +
        "(C) 'smile' means to form one's features into a pleased, kind, or amused expression, typically with the corners of the mouth turned up." +
        "<br><br>" +
        "(D) 'gasp' means to inhale suddenly with the mouth open, out of pain or astonishment.",
    chinese_explanation: "(B) '哄笑' 在比喻意义上指响亮而欢闹的笑声。" +
        "<br><br>" +
        "(A) '皱眉' 意味着皱起眉头，表示不赞成、不高兴或集中注意力。" +
        "<br><br>" +
        "(C) '微笑' 意味着让自己的面部特征形成高兴、友好或有趣的表情，通常嘴角上扬。" +
        "<br><br>" +
        "(D) '喘气' 意味着突然张开嘴吸气，因疼痛或惊讶。"
    },
    {
        id: 5,
    question: "The sudden change in weather caused __________ among the hikers, who were not prepared for rain.",
    chinese_question: "天气的突然变化引起了徒步旅行者的 __________，他们没有准备好应对下雨。",
    answers: [
        { option: "A", answer: "dismay", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
        { option: "B", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "C", answer: "contentment", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dismay' means distress caused by something unexpected." +
        "<br><br>" +
        "(B) 'delight' means great pleasure." +
        "<br><br>" +
        "(C) 'contentment' means a state of happiness and satisfaction." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '沮丧' 意味着因意外的事情引起的忧虑。" +
        "<br><br>" +
        "(B) '高兴' 意味着极大的快乐。" +
        "<br><br>" +
        "(C) '满意' 意味着一种幸福和满足的状态。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 6,
    question: "The political debate quickly descended into __________, with candidates shouting over each other about healthcare policies.",
    chinese_question: "政治辩论迅速陷入 __________，候选人就医疗政策互相大喊大叫。",
    answers: [
        { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
        { option: "B", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
        { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'discord' means disagreement between people." +
        "<br><br>" +
        "(B) 'cooperation' means the process of working together to the same end." +
        "<br><br>" +
        "(C) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
        "<br><br>" +
        "(D) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method.",
    chinese_explanation: "(A) '不和' 意味着人们之间的意见不一致。" +
        "<br><br>" +
        "(B) '合作' 意味着为同一个目标一起工作的过程。" +
        "<br><br>" +
        "(C) '尊重' 意味着因某人的能力、品质或成就而产生的深深的钦佩之情。" +
        "<br><br>" +
        "(D) '秩序' 意味着人或事物按照特定顺序、模式或方法的安排或排列。"
    },
    {
        id: 7,
    question: "The judge was careful to avoid any appearance of __________ in her courtroom, ensuring that all parties were treated equally.",
    chinese_question: "法官小心避免在法庭上出现任何 __________，确保所有当事人都得到平等对待。",
    answers: [
        { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
        { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "C", answer: "transparency", chinese_answer: "透明度", chinese_romanization: "tòumíng dù" },
        { option: "D", answer: "empathy", chinese_answer: "同理心", chinese_romanization: "tónglǐ xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bias' figuratively means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
        "<br><br>" +
        "(B) 'integrity' means the quality of being honest and having strong moral principles." +
        "<br><br>" +
        "(C) 'transparency' means the condition of being transparent." +
        "<br><br>" +
        "(D) 'empathy' means the ability to understand and share the feelings of another.",
    chinese_explanation: "(A) '偏见' 在此语境下意指对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
        "<br><br>" +
        "(B) '正直' 意味着诚实和具有强烈道德原则的品质。" +
        "<br><br>" +
        "(C) '透明度' 意味着透明的条件。" +
        "<br><br>" +
        "(D) '同理心' 意味着理解和分享他人感受的能力。"
    },
    {
        id: 8,
        question: "Her voice was filled with __________ as she recounted the injustices she had faced over the years.",
        chinese_question: "当她讲述这些年来遭受的不公正待遇时，她的声音充满了 __________。",
        answers: [
                { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
                { option: "C", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
                { option: "D", answer: "apathy", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
                "<br><br>" +
                "(A) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'contentment' means a state of happiness and satisfaction." +
                "<br><br>" +
                "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
                "<br><br>" +
                "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '满足' 意味着幸福和满足的状态。" +
                "<br><br>" +
                "(D) '漠不关心' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 9,
        question: "The speech was powerful and filled with __________, leaving many in the audience with tears in their eyes.",
        chinese_question: "这篇演讲充满了 __________，让很多观众眼中含泪。",
        answers: [
                { option: "A", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
                { option: "B", answer: "pathos", chinese_answer: "悲情", chinese_romanization: "bēiqíng" },
                { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pathos' means a quality that evokes pity or sadness." +
                "<br><br>" +
                "(A) 'boredom' means the state of feeling bored." +
                "<br><br>" +
                "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(B) '悲情'一词意味着引发怜悯或悲伤的品质。" +
                "<br><br>" +
                "(A) '无聊' 意味着感到无聊的状态。" +
                "<br><br>" +
                "(C) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(D) '困惑' 意味着缺乏理解；不确定。"
    },
    {
        id: 10,
    question: "The car manufacturer has significantly reduced the __________ of harmful pollutants from its latest models.",
    chinese_question: "这家汽车制造商大大减少了最新车型中有害污染物的 __________。",
    answers: [
        { option: "A", answer: "evaporation", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
        { option: "B", answer: "emission", chinese_answer: "排放", chinese_romanization: "páifàng" },
        { option: "C", answer: "adoption", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
        { option: "D", answer: "contraction", chinese_answer: "收缩", chinese_romanization: "shōusuō" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'emission' means the production and discharge of something, especially gas or radiation." +
        "<br><br>" +
        "(A) 'evaporation' means the process of turning from liquid into vapor." +
        "<br><br>" +
        "(C) 'adoption' means the action or fact of choosing to take up, follow, or use something." +
        "<br><br>" +
        "(D) 'contraction' means the process of becoming smaller.",
    chinese_explanation: "(B) '排放' 一词意味着生产和排放某物，尤其是气体或辐射。" +
        "<br><br>" +
        "(A) '蒸发' 意味着从液体变为气体的过程。" +
        "<br><br>" +
        "(C) '采用' 意味着选择接受、遵循或使用某物的行动或事实。" +
        "<br><br>" +
        "(D) '收缩' 意味着变小的过程。"
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
