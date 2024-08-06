// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The university promotes an __________ policy, ensuring that students from all socioeconomic backgrounds have access to education.",
        chinese_question: "该大学推行 __________ 政策，确保来自所有社会经济背景的学生都有接受教育的机会。",
        answers: [
            { option: "A", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "B", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "C", answer: "discriminatory", chinese_answer: "歧视的", chinese_romanization: "qíshì de" },
            { option: "D", answer: "elitist", chinese_answer: "精英主义的", chinese_romanization: "jīngyīng zhǔyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inclusive' means not excluding any section of society or any party involved in something." +
            "<br><br>" +
            "(A) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(C) 'discriminatory' means making or showing an unfair or prejudicial distinction between different categories of people or things." +
            "<br><br>" +
            "(D) 'elitist' means relating to or supporting the view that a society or system should be led by an elite.",
        chinese_explanation: "(B) '包容的' 意味着不排斥社会的任何部分或参与其中的任何一方。" +
            "<br><br>" +
            "(A) '排外的' 意味着排斥或不承认其他事物的。" +
            "<br><br>" +
            "(C) '歧视的' 意味着在不同类别的人或事物之间做出不公平或有偏见的区分的。" +
            "<br><br>" +
            "(D) '精英主义的' 意味着与或支持一种社会或制度应该由精英领导的观点有关的。"
    },
    {
        id: 2,
        question: "The country's leader declared __________ law, placing the military in control of the government and suspending civilian rights.",
        chinese_question: "国家领导人宣布 __________ 法，军队接管政府，暂停民众的权利。",
        answers: [
            { option: "A", answer: "martial", chinese_answer: "军事的", chinese_romanization: "jūnshì de" },
            { option: "B", answer: "civil", chinese_answer: "民事的", chinese_romanization: "mínshì de" },
            { option: "C", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "D", answer: "diplomatic", chinese_answer: "外交的", chinese_romanization: "wàijiāo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'martial' means relating to war, soldiers, or the military." +
            "<br><br>" +
            "(B) 'civil' means relating to ordinary citizens and their concerns, as distinct from military or ecclesiastical matters." +
            "<br><br>" +
            "(C) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(D) 'diplomatic' means concerning the profession, activity, or skill of managing international relations.",
        chinese_explanation: "(A) '军事的' 意味着与战争、士兵或军队有关的。" +
            "<br><br>" +
            "(B) '民事的' 意味着与普通市民及其关切有关的，与军事或教会事务不同。" +
            "<br><br>" +
            "(C) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(D) '外交的' 意味着与管理国际关系的职业、活动或技能有关的。"
    },
    {
        id: 3,
        question: "In today's job market, opportunities for recent graduates are __________, making the search for employment challenging.",
        chinese_question: "在今天的就业市场上，应届毕业生的机会 __________，使得求职变得具有挑战性。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
            { option: "B", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "C", answer: "plentiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scarce' means insufficient for the demand; rare." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities." +
            "<br><br>" +
            "(C) 'plentiful' means existing in or yielding great quantities." +
            "<br><br>" +
            "(D) 'ample' means enough or more than enough; plentiful.",
        chinese_explanation: "(B) '稀缺的' 意味着需求不足的；稀有的。" +
            "<br><br>" +
            "(A) '大量的' 意味着存在或可获得的大量数量。" +
            "<br><br>" +
            "(C) '丰富的' 意味着存在或产量大的。" +
            "<br><br>" +
            "(D) '充足的' 意味着足够的或超出足够的；丰富的。"
    },
    {
        id: 4,
    question: "The child's __________ attempt to help his mother with the chores was heartwarming.",
    chinese_question: "孩子 __________ 地试图帮妈妈做家务，这一幕令人感动。",
    answers: [
        { option: "A", answer: "endearing", chinese_answer: "讨人喜欢", chinese_romanization: "tǎo rén xǐhuān" },
        { option: "B", answer: "annoying", chinese_answer: "令人讨厌", chinese_romanization: "lìng rén tǎoyàn" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
        { option: "D", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'endearing' means inspiring affection." +
        "<br><br>" +
        "(B) 'annoying' means causing irritation or annoyance." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(A) '讨人喜欢' 意味着激发喜爱的。" +
        "<br><br>" +
        "(B) '令人讨厌' 意味着引起烦恼或烦恼。" +
        "<br><br>" +
        "(C) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '粗心' 意味着没有足够的注意或考虑避免伤害或错误。"
    },
    {
        id: 5,
    question: "The cost of the repair was __________ compared to the overall budget of the project, so it didn’t affect the finances much.",
    chinese_question: "修理费用相对于项目的整体预算来说是 __________ 的，所以对财务影响不大。",
    answers: [
        { option: "A", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
        { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "C", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
        { option: "D", answer: "considerable", chinese_answer: "可观的", chinese_romanization: "kěguān de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
        "<br><br>" +
        "(A) 'significant' means sufficiently great or important to be worthy of attention." +
        "<br><br>" +
        "(C) 'substantial' means of considerable importance, size, or worth." +
        "<br><br>" +
        "(D) 'considerable' means notably large in size, amount, or extent.",
    chinese_explanation: "(B) '微不足道的' 意味着小到或不重要，不值得考虑；无足轻重的。" +
        "<br><br>" +
        "(A) '显著的' 意味着足够大或重要，值得注意的。" +
        "<br><br>" +
        "(C) '大量的' 意味着相当重要、规模或价值的。" +
        "<br><br>" +
        "(D) '可观的' 意味着大小、数量或程度显著的。"
    },
    {
        id: 6,
        question: "The __________ economy showed little signs of recovery, worrying many investors.",
        chinese_question: "__________ 的经济显示出很少复苏的迹象，令许多投资者担忧。",
        answers: [
            { option: "A", answer: "robust", chinese_answer: "强劲的", chinese_romanization: "qiángjìn de" },
            { option: "B", answer: "booming", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "D", answer: "thriving", chinese_answer: "兴旺的", chinese_romanization: "xīngwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sluggish' means lacking energy or alertness; slow to respond or make progress." +
            "<br><br>" +
            "(A) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(B) 'booming' means experiencing a period of great prosperity or rapid economic growth." +
            "<br><br>" +
            "(D) 'thriving' means prospering or flourishing.",
        chinese_explanation: "(C) '迟缓的' 意味着缺乏能量或警觉性；反应迟钝或进展缓慢的。" +
            "<br><br>" +
            "(A) '强劲的' 意味着强壮和健康的；有活力的。" +
            "<br><br>" +
            "(B) '繁荣的' 意味着经历一个伟大的繁荣或快速经济增长的时期。" +
            "<br><br>" +
            "(D) '兴旺的' 意味着繁荣或兴旺的。"
    },
    {
        id: 7,
        question: "She had an __________ ability to predict the weather accurately, which amazed everyone.",
        chinese_question: "她有一种 __________ 的能力，能准确预测天气，这让所有人都感到惊讶。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "uncanny", chinese_answer: "神秘的", chinese_romanization: "shénmì de" },
            { option: "C", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'uncanny' means strange or mysterious, especially in an unsettling way." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(B) '神秘的' 意味着奇怪或神秘的，尤其是以一种令人不安的方式。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '常见的' 意味着经常发生、发现或完成的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某一类型的人或事物的独特品质。"
    },
    {
        id: 8,
    question: "The scientist was __________ in her research, publishing groundbreaking studies every year and making significant contributions to her field.",
    chinese_question: "这位科学家在研究方面非常 __________，每年都发表开创性的研究，并为她的领域做出了重大贡献。",
    answers: [
        { option: "A", answer: "prolific", chinese_answer: "多产的", chinese_romanization: "duōchǎn de" },
        { option: "B", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
        { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
        { option: "D", answer: "infrequent", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'prolific' means producing much fruit, foliage, or many offspring; producing many works, results, or ideas." +
        "<br><br>" +
        "(B) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
        "<br><br>" +
        "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
        "<br><br>" +
        "(D) 'infrequent' means not occurring often; rare.",
    chinese_explanation: "(A) '多产的' 意味着产生大量果实、叶子或许多后代；产生许多作品、结果或想法。" +
        "<br><br>" +
        "(B) '间歇的' 意味着在不规则间隔发生的；不连续或不稳定的。" +
        "<br><br>" +
        "(C) '零星的' 意味着在不规则间隔或仅在少数地方发生的；分散的或孤立的。" +
        "<br><br>" +
        "(D) '罕见的' 意味着不经常发生的；稀有的。"
    },
    {
        id: 9,
    question: "The philanthropist's __________ donation to the university funded scholarships for hundreds of students.",
    chinese_question: "慈善家的 __________ 捐款为数百名学生提供了奖学金。",
    answers: [
        { option: "A", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
        { option: "B", answer: "small", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
        { option: "C", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
        { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'munificent' means larger or more generous than is usual or necessary." +
        "<br><br>" +
        "(A) 'stingy' means unwilling to give or spend; ungenerous." +
        "<br><br>" +
        "(B) 'small' means of a size that is less than normal or usual." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering.",
    chinese_explanation: "(C) '慷慨的' 意味着比平常或必要的大或更慷慨的。" +
        "<br><br>" +
        "(A) '吝啬的' 意味着不愿给予或花费的；不慷慨的。" +
        "<br><br>" +
        "(B) '微小的' 意味着比正常或通常的大小要小。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着小到或不重要，不值得考虑的。"
    },
    {
        id: 10,
    question: "The company's data storage methods are designed to keep sensitive information __________ so that it is protected from unauthorized access.",
    chinese_question: "公司的数据存储方法旨在使敏感信息保持 __________，以保护其不被未经授权的访问。",
    answers: [
        { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "B", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" },
        { option: "C", answer: "vulnerable", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
        { option: "D", answer: "unprotected", chinese_answer: "无保护", chinese_romanization: "wú bǎohù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
        "<br><br>" +
        "(B) 'exposed' means not covered or hidden; visible." +
        "<br><br>" +
        "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
        "<br><br>" +
        "(D) 'unprotected' means not protected or kept safe from harm or injury.",
    chinese_explanation: "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
        "<br><br>" +
        "(B) '暴露' 意味着没有覆盖或隐藏；可见的。" +
        "<br><br>" +
        "(C) '脆弱' 意味着容易受到身体或情感的攻击或伤害。" +
        "<br><br>" +
        "(D) '无保护' 意味着没有受到保护或保持安全不受伤害。"
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
