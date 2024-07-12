// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's financial troubles have put it in a __________, with no clear solution in sight.",
        chinese_question: "公司的财务问题使它陷入了 __________，看不到明确的解决办法。",
        answers: [
                { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
                { option: "B", answer: "quagmire", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
                { option: "C", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
                { option: "D", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quagmire' means an awkward, complex, or hazardous situation." +
                "<br><br>" +
                "(A) 'triumph' means a great victory or achievement." +
                "<br><br>" +
                "(C) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
                "<br><br>" +
                "(D) 'success' means the accomplishment of an aim or purpose.",
        chinese_explanation: "(B) '困境'一词意味着一种尴尬、复杂或危险的情况。" +
                "<br><br>" +
                "(A) '胜利' 意味着伟大的胜利或成就。" +
                "<br><br>" +
                "(C) '突破' 意味着突然、戏剧性和重要的发现或发展。" +
                "<br><br>" +
                "(D) '成功' 意味着实现目标或目的。"
    },
    {
        id: 2,
    question: "After years of rapid advancement, her career seemed to reach a __________, with no further promotions in sight.",
    chinese_question: "在快速进步的几年后，她的职业生涯似乎到达了一个 __________，没有进一步晋升的希望。",
    answers: [
        { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
        { option: "B", answer: "plateau", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
        { option: "C", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "D", answer: "escalation", chinese_answer: "升级", chinese_romanization: "shēngjí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'plateau' figuratively means a period or state of little or no growth or decline." +
        "<br><br>" +
        "(A) 'peak' means the highest point." +
        "<br><br>" +
        "(C) 'decline' means a gradual and continuous loss of strength, numbers, or quality." +
        "<br><br>" +
        "(D) 'escalation' means an increase in the intensity or seriousness of something.",
    chinese_explanation: "(B) '停滞' 在此语境下意指几乎没有增长或下降的时期或状态。" +
        "<br><br>" +
        "(A) '顶峰' 意味着最高点。" +
        "<br><br>" +
        "(C) '衰退' 意味着力量、数量或质量的逐渐和持续的下降。" +
        "<br><br>" +
        "(D) '升级' 意味着某事物强度或严重性的增加。"
    },
    {
        id: 3,
        question: "Before making any investment decisions, a thorough __________ of the financial statements is essential.",
        chinese_question: "在做任何投资决策之前，彻底 __________ 财务报表是必不可少的。",
        answers: [
                { option: "A", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "B", answer: "perusal", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
                { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "D", answer: "oversight", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perusal' means the action of reading or examining something thoroughly." +
                "<br><br>" +
                "(A) 'avoidance' means the action of keeping away from or not doing something." +
                "<br><br>" +
                "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
                "<br><br>" +
                "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(B) '阅读'一词意味着彻底阅读或检查某事的行为。" +
                "<br><br>" +
                "(A) '避免' 意味着远离或不做某事的行为。" +
                "<br><br>" +
                "(C) '拒绝' 意味着拒绝或拒绝某个提议、想法等。" +
                "<br><br>" +
                "(D) '疏忽' 意味着无意间未注意到或未做某事。"
    },
    {
        id: 4,
        question: "The counselor helped students explore their __________ and find careers that matched their interests and skills.",
        chinese_question: "辅导员帮助学生探索他们的 __________ 并找到符合他们兴趣和技能的职业。",
        answers: [
                { option: "A", answer: "hobbies", chinese_answer: "爱好", chinese_romanization: "àihào" },
                { option: "B", answer: "vocations", chinese_answer: "职业", chinese_romanization: "zhíyè" },
                { option: "C", answer: "games", chinese_answer: "游戏", chinese_romanization: "yóuxì" },
                { option: "D", answer: "distractions", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocations' means strong feelings of suitability for particular careers or occupations." +
                "<br><br>" +
                "(A) 'hobbies' means activities done regularly in one's leisure time for pleasure." +
                "<br><br>" +
                "(C) 'games' means forms of play or sports, especially competitive ones played according to rules." +
                "<br><br>" +
                "(D) 'distractions' means things that prevent someone from concentrating on something else.",
        chinese_explanation: "(B) '职业'一词意味着对特定职业或职业的强烈适应感。" +
                "<br><br>" +
                "(A) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
                "<br><br>" +
                "(C) '游戏' 意味着一种游戏或运动形式，特别是按照规则进行的竞争性游戏。" +
                "<br><br>" +
                "(D) '干扰' 意味着阻止某人专注于其他事情的事情。"
    },
    {
        id: 5,
    question: "Customer __________ is essential for the long-term success of any business, as loyal customers are more likely to make repeat purchases.",
    chinese_question: "客户 __________ 对任何业务的长期成功至关重要，因为忠诚的客户更有可能重复购买。",
    answers: [
        { option: "A", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "B", answer: "acquisition", chinese_answer: "获取", chinese_romanization: "huòqǔ" },
        { option: "C", answer: "turnover", chinese_answer: "流失", chinese_romanization: "liúshī" },
        { option: "D", answer: "attrition", chinese_answer: "消耗", chinese_romanization: "xiāohào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'retention' figuratively means the continued possession, use, or control of something." +
        "<br><br>" +
        "(B) 'acquisition' means an asset or object bought or obtained, typically by a library or museum." +
        "<br><br>" +
        "(C) 'turnover' means the rate at which employees leave a workforce and are replaced." +
        "<br><br>" +
        "(D) 'attrition' means the process of gradually reducing the strength or effectiveness of someone or something through sustained attack or pressure.",
    chinese_explanation: "(A) '保留' 在此语境下意指继续持有、使用或控制某物。" +
        "<br><br>" +
        "(B) '获取' 意味着通常由图书馆或博物馆购买或获得的资产或物品。" +
        "<br><br>" +
        "(C) '流失' 意味着员工离开劳动力并被替换的速度。" +
        "<br><br>" +
        "(D) '消耗' 意味着通过持续的攻击或压力逐渐减少某人或某物的力量或效果的过程。"
    },
    {
        id: 6,
        question: "The board meeting was marked by a strong __________ from several members who opposed the new policy.",
        chinese_question: "董事会会议上几位成员强烈 __________ 新政策。",
        answers: [
                { option: "A", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
                { option: "B", answer: "compliance", chinese_answer: "服从", chinese_romanization: "fúcóng" },
                { option: "C", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" },
                { option: "D", answer: "acquiescence", chinese_answer: "默许", chinese_romanization: "mòxǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held." +
                "<br><br>" +
                "(A) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(B) 'compliance' means the action or fact of complying with a wish or command." +
                "<br><br>" +
                "(D) 'acquiescence' means the reluctant acceptance of something without protest.",
        chinese_explanation: "(C) '异议'一词意味着表达或持有与以前、通常或正式持有的意见不同的意见。" +
                "<br><br>" +
                "(A) '协议' 意味着意见或感觉上的和谐或一致。" +
                "<br><br>" +
                "(B) '服从' 意味着遵从愿望或命令的行为或事实。" +
                "<br><br>" +
                "(D) '默许' 意味着不抗议地勉强接受某事。"
    },
    {
        id: 7,
        question: "She had no __________ about speaking her mind during the meeting, even if it meant disagreeing with her boss.",
        chinese_question: "她在会议上毫无 __________ 地表达了自己的想法，即使这意味着要与老板意见不一致。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
                { option: "D", answer: "assurance", chinese_answer: "确信", chinese_romanization: "quèxìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' means an uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving." +
                "<br><br>" +
                "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(C) 'trust' means firm belief in the reliability, truth, or ability of someone or something." +
                "<br><br>" +
                "(D) 'assurance' means confidence or certainty in one's own abilities.",
        chinese_explanation: "(A) '不安' 意味着对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(C) '信任' 意味着对某人或某事可靠性、真实性或能力的坚定信念。" +
                "<br><br>" +
                "(D) '确信' 意味着对自己能力的信心或确定性。"
    },
    {
        id: 8,
        question: "His reputation as a financial __________ grew after his accurate predictions during the economic crisis.",
        chinese_question: "在经济危机期间，他的准确预测使他作为金融 __________ 的声誉大增。",
        answers: [
                { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "D", answer: "learner", chinese_answer: "学习者", chinese_romanization: "xuéxí zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
                "<br><br>" +
                "(C) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(D) 'learner' means a person who is learning a subject or skill.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '业余爱好者' 意味着从事追求，特别是体育活动，而没有报酬的人。" +
                "<br><br>" +
                "(C) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
                "<br><br>" +
                "(D) '学习者' 意味着正在学习某个学科或技能的人。"
    },
    {
        id: 9,
        question: "The environmental __________ introduced stricter regulations on pollution to protect natural resources.",
        chinese_question: "环境 __________ 引入了更严格的污染法规以保护自然资源。",
        answers: [
            { option: "A", answer: "reforms", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "B", answer: "damages", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
            { option: "C", answer: "continuations", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "D", answer: "exploitations", chinese_answer: "剥削", chinese_romanization: "bōxuē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reforms' means changes made to improve a system, organization, or law." +
            "<br><br>" +
            "(B) 'damages' means physical harm caused to something." +
            "<br><br>" +
            "(C) 'continuations' means the action of carrying something on over a period of time." +
            "<br><br>" +
            "(D) 'exploitations' means the action or fact of treating someone unfairly in order to benefit from their work.",
        chinese_explanation: "(A) '改革' 意味着对系统、组织或法律进行改进的变化。" +
            "<br><br>" +
            "(B) '损害' 意味着对某物造成的物理伤害。" +
            "<br><br>" +
            "(C) '继续' 意味着在一段时间内继续进行某事的行为。" +
            "<br><br>" +
            "(D) '剥削' 意味着为了从他人的工作中获益而不公平地对待某人的行为或事实。"
    },
    {
        id: 10,
    question: "Their latest __________ was a daring trek across the desert with minimal supplies.",
    chinese_question: "他们最近的 __________ 是一次勇敢的沙漠跋涉，带着最少的补给。",
    answers: [
        { option: "A", answer: "escapade", chinese_answer: "冒险行为", chinese_romanization: "màoxiǎn xíngwéi" },
        { option: "B", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" },
        { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
        { option: "D", answer: "exploration", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'escapade' means an act or incident involving excitement, daring, or adventure." +
        "<br><br>" +
        "(B) 'journey' means an act of traveling from one place to another." +
        "<br><br>" +
        "(C) 'retreat' means a quiet or secluded place in which one can rest and relax." +
        "<br><br>" +
        "(D) 'exploration' means the action of traveling in or through an unfamiliar area in order to learn about it.",
    chinese_explanation: "(A) '冒险行为' 一词意味着涉及兴奋、大胆或冒险的行为或事件。" +
        "<br><br>" +
        "(B) '旅程' 意味着从一个地方到另一个地方的旅行行为。" +
        "<br><br>" +
        "(C) '撤退' 意味着一个可以休息和放松的安静或隐蔽的地方。" +
        "<br><br>" +
        "(D) '探索' 意味着为了了解而在陌生区域旅行的行为。"
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
