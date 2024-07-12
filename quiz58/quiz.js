// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The nonprofit organization's __________ grew after they successfully campaigned for changes in environmental policies.",
    chinese_question: "在成功推动环境政策变化后，这家非营利组织的 __________ 增加了。",
    answers: [
        { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
        { option: "B", answer: "obscurity", chinese_answer: "默默无闻", chinese_romanization: "mòmò wú wén" },
        { option: "C", answer: "indecision", chinese_answer: "犹豫不决", chinese_romanization: "yóuyù bù jué" },
        { option: "D", answer: "mediocrity", chinese_answer: "平庸", chinese_romanization: "píngyōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'clout' figuratively means influence or power." +
        "<br><br>" +
        "(B) 'obscurity' means the state of being unknown, inconspicuous, or unimportant." +
        "<br><br>" +
        "(C) 'indecision' means the inability to make a decision quickly." +
        "<br><br>" +
        "(D) 'mediocrity' means the quality or state of being mediocre.",
    chinese_explanation: "(A) '影响力' 在此语境下意指影响力或权力。" +
        "<br><br>" +
        "(B) '默默无闻' 意味着不知名、不显眼或不重要的状态。" +
        "<br><br>" +
        "(C) '犹豫不决' 意味着无法快速做出决定。" +
        "<br><br>" +
        "(D) '平庸' 意味着平庸的质量或状态。"
    },
    {
        id: 2,
    question: "The manager's __________ was clear when he always promoted male employees over equally qualified female employees.",
    chinese_question: "当经理总是提拔男性员工而忽视同样有资格的女性员工时，他的 __________ 显而易见。",
    answers: [
        { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
        { option: "B", answer: "impartiality", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
        { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "D", answer: "transparency", chinese_answer: "透明度", chinese_romanization: "tòumíng dù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
        "<br><br>" +
        "(B) 'impartiality' means equal treatment of all rivals or disputants; fairness." +
        "<br><br>" +
        "(C) 'integrity' means the quality of being honest and having strong moral principles." +
        "<br><br>" +
        "(D) 'transparency' means the condition of being transparent.",
    chinese_explanation: "(A) '偏见' 意味着对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
        "<br><br>" +
        "(B) '公正' 意味着对所有对手或争论者的平等对待；公平。" +
        "<br><br>" +
        "(C) '正直' 意味着诚实和具有强烈道德原则的品质。" +
        "<br><br>" +
        "(D) '透明度' 意味着透明的条件。"
    },
    {
        id: 3,
    question: "Her __________ for baking led her to try new recipes every week, delighting her family with delicious treats.",
    chinese_question: "她对烘焙的 __________ 使她每周都尝试新食谱，为家人带来美味的点心。",
    answers: [
        { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "B", answer: "zeal", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'zeal' means great energy or enthusiasm in pursuit of a cause or an objective." +
        "<br><br>" +
        "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
        "<br><br>" +
        "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
    chinese_explanation: "(B) '热情'一词意味着在追求事业或目标时充满巨大能量或热情。" +
        "<br><br>" +
        "(A) '怀疑' 意味着不确定的感觉或缺乏信念。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 4,
        question: "His __________ as a firefighter was more than just a job; it was a calling that he felt deeply passionate about.",
        chinese_question: "他的 __________ 作为一名消防员不仅仅是一份工作；这是他深感热情的使命。",
        answers: [
                { option: "A", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
                { option: "B", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
                { option: "C", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
                { option: "D", answer: "recreation", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
                "<br><br>" +
                "(A) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
                "<br><br>" +
                "(B) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
                "<br><br>" +
                "(D) 'recreation' means activity done for enjoyment when one is not working.",
        chinese_explanation: "(C) '职业'一词意味着对特定职业或职业的强烈适应感。" +
                "<br><br>" +
                "(A) '消遣' 意味着某人定期为享乐而不是工作而做的活动；爱好。" +
                "<br><br>" +
                "(B) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
                "<br><br>" +
                "(D) '娱乐' 意味着不工作时为了享乐而进行的活动。"
    },
    {
        id: 5,
        question: "Her speech was more about __________ than substance, aiming to stir emotions rather than present facts.",
        chinese_question: "她的演讲更多是关于 __________ 而不是实质内容，旨在激起情感而不是呈现事实。",
        answers: [
                { option: "A", answer: "rhetoric", chinese_answer: "修辞", chinese_romanization: "xiūcí" },
                { option: "B", answer: "information", chinese_answer: "信息", chinese_romanization: "xìnxī" },
                { option: "C", answer: "action", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
                { option: "D", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rhetoric' means the art of effective or persuasive speaking or writing, especially the use of figures of speech and other compositional techniques." +
                "<br><br>" +
                "(B) 'information' means facts provided or learned about something or someone." +
                "<br><br>" +
                "(C) 'action' means the fact or process of doing something, typically to achieve an aim." +
                "<br><br>" +
                "(D) 'truth' means the quality or state of being true.",
        chinese_explanation: "(A) '修辞' 意味着有效或有说服力的演讲或写作艺术，尤其是使用修辞手法和其他构图技巧。" +
                "<br><br>" +
                "(B) '信息' 意味着提供或了解到的有关某事或某人的事实。" +
                "<br><br>" +
                "(C) '行动' 意味着做某事的事实或过程，通常是为了实现一个目标。" +
                "<br><br>" +
                "(D) '真相' 意味着真实的质量或状态。"
    },
    {
        id: 6,
        question: "Their home, filled with love and laughter, is the __________ of a happy family.",
        chinese_question: "他们的家充满了爱和笑声，是一个幸福家庭的 __________。",
        answers: [
                { option: "A", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
                { option: "B", answer: "embodiment", chinese_answer: "体现", chinese_romanization: "tǐxiàn" },
                { option: "C", answer: "reflection", chinese_answer: "反映", chinese_romanization: "fǎnyìng" },
                { option: "D", answer: "representation", chinese_answer: "代表", chinese_romanization: "dàibiǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embodiment' means a tangible or visible form of an idea, quality, or feeling." +
                "<br><br>" +
                "(A) 'illusion' means a deceptive appearance or impression." +
                "<br><br>" +
                "(C) 'reflection' means serious thought or consideration." +
                "<br><br>" +
                "(D) 'representation' means the action of speaking or acting on behalf of someone.",
        chinese_explanation: "(B) '体现'一词意味着一种思想、品质或感觉的有形或可见形式。" +
                "<br><br>" +
                "(A) '幻觉' 意味着一种欺骗性的外观或印象。" +
                "<br><br>" +
                "(C) '反映' 意味着认真思考或考虑。" +
                "<br><br>" +
                "(D) '代表' 意味着代表某人的行动。"
    },
    {
        id: 7,
    question: "The education __________ sought to address inequalities in the system and provide all students with equal opportunities.",
    chinese_question: "教育 __________ 旨在解决系统中的不平等问题，并为所有学生提供平等的机会。",
    answers: [
        { option: "A", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
        { option: "B", answer: "collapse", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
        { option: "C", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "D", answer: "controversy", chinese_answer: "争议", chinese_romanization: "zhēngyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reform' figuratively means a plan or movement for improvement or amendment of what is wrong, corrupt, or unsatisfactory." +
        "<br><br>" +
        "(B) 'collapse' means a sudden failure or breakdown." +
        "<br><br>" +
        "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
        "<br><br>" +
        "(D) 'controversy' means disagreement, typically when prolonged, public, and heated.",
    chinese_explanation: "(A) '改革' 在此语境下意指改进或修改错误、腐败或不满意的事物的计划或运动。" +
        "<br><br>" +
        "(B) '崩溃' 意味着突然的失败或崩溃。" +
        "<br><br>" +
        "(C) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
        "<br><br>" +
        "(D) '争议' 意味着分歧，通常是长期的、公开的和激烈的。"
    },
    {
        id: 8,
    question: "The government's new policies gave a considerable __________ to small businesses, helping them thrive in a competitive market.",
    chinese_question: "政府的新政策为小企业提供了可观的 __________，帮助它们在竞争激烈的市场中茁壮成长。",
    answers: [
        { option: "A", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
        { option: "C", answer: "threat", chinese_answer: "威胁", chinese_romanization: "wēixié" },
        { option: "D", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'boost' figuratively means an increase or improvement." +
        "<br><br>" +
        "(B) 'setback' means a reversal or check in progress." +
        "<br><br>" +
        "(C) 'threat' means a statement of an intention to inflict pain, injury, damage, or other hostile action on someone." +
        "<br><br>" +
        "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
    chinese_explanation: "(A) '提升' 在此语境下意指增加或改善。" +
        "<br><br>" +
        "(B) '挫折' 意味着进展中的逆转或检查。" +
        "<br><br>" +
        "(C) '威胁' 意味着意图对某人施加痛苦、伤害、损害或其他敌对行动的声明。" +
        "<br><br>" +
        "(D) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 9,
        question: "The rough terrain was a significant __________ to the hikers, slowing their progress considerably.",
        chinese_question: "崎岖的地形是对徒步旅行者的一个重大 __________，极大地减慢了他们的进度。",
        answers: [
                { option: "A", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
                { option: "B", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
                { option: "C", answer: "impediment", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "D", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impediment' means a hindrance or obstruction in doing something." +
                "<br><br>" +
                "(A) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
                "<br><br>" +
                "(B) 'benefit' means an advantage or profit gained from something." +
                "<br><br>" +
                "(D) 'asset' means a useful or valuable thing, person, or quality.",
        chinese_explanation: "(C) '障碍'一词意味着做某事的障碍或阻碍。" +
                "<br><br>" +
                "(A) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
                "<br><br>" +
                "(B) '好处' 意味着从某事中获得的优势或利益。" +
                "<br><br>" +
                "(D) '资产' 意味着有用或有价值的东西、人物或品质。"
    },
    {
        id: 10,
        question: "The film's soundtrack was an excellent __________ of the time period, making the audience feel as though they were living in that era.",
        chinese_question: "这部电影的原声带是对那个时代的绝佳 __________，让观众仿佛置身于那个时代。",
        answers: [
                { option: "A", answer: "evocation", chinese_answer: "唤起", chinese_romanization: "huànqǐ" },
                { option: "B", answer: "elimination", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "C", answer: "distortion", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
                { option: "D", answer: "interruption", chinese_answer: "打断", chinese_romanization: "dǎduàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evocation' means the act of bringing or recalling a feeling, memory, or image to the conscious mind." +
                "<br><br>" +
                "(B) 'elimination' means the complete removal or destruction of something." +
                "<br><br>" +
                "(C) 'distortion' means the action of distorting or the state of being distorted." +
                "<br><br>" +
                "(D) 'interruption' means the action of interrupting or being interrupted.",
        chinese_explanation: "(A) '唤起' 意味着将一种感觉、记忆或图像带到意识中的行为。" +
                "<br><br>" +
                "(B) '消除' 意味着完全去除或破坏某物。" +
                "<br><br>" +
                "(C) '扭曲' 意味着扭曲的行为或扭曲的状态。" +
                "<br><br>" +
                "(D) '打断' 意味着打断或被打断的行为。"
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
