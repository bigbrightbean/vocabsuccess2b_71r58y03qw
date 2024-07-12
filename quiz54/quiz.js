// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The vacation turned into a __________ when their luggage was lost, and their hotel reservation was canceled.",
        chinese_question: "他们的行李丢失，酒店预订被取消，度假变成了一场 __________。",
        answers: [
                { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
                { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
                { option: "C", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
                { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debacle' figuratively means a sudden and ignominious failure; a fiasco." +
                "<br><br>" +
                "(A) 'joy' means a feeling of great pleasure and happiness." +
                "<br><br>" +
                "(B) 'triumph' means a great victory or achievement." +
                "<br><br>" +
                "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        chinese_explanation: "(C) '崩溃' 在此语境下意指突然的、可耻的失败；一场惨败。" +
                "<br><br>" +
                "(A) '快乐' 意味着极大的愉悦和幸福感。" +
                "<br><br>" +
                "(B) '胜利' 意味着巨大的胜利或成就。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过参与愉快的、通常是社交的活动来标志对一个重要事件或场合的愉悦。"
    },
    {
        id: 2,
    question: "Reports of the approaching storm caused __________ among the coastal residents.",
    chinese_question: "关于风暴即将来临的报道在沿海居民中引起了 __________ 。",
    answers: [
        { option: "A", answer: "disquiet", chinese_answer: "不安", chinese_romanization: "bùān" },
        { option: "B", answer: "elation", chinese_answer: "兴高采烈", chinese_romanization: "xìng gāo cǎi liè" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disquiet' means a feeling of anxiety or worry." +
        "<br><br>" +
        "(B) 'elation' means great happiness and exhilaration." +
        "<br><br>" +
        "(C) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'serenity' means the state of being calm, peaceful, and untroubled.",
    chinese_explanation: "(A) '不安' 意味着焦虑或担忧的感觉。" +
        "<br><br>" +
        "(B) '兴高采烈' 意味着极大的幸福和兴奋。" +
        "<br><br>" +
        "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '宁静' 意味着平静、安详和无忧的状态。"
    },
    {
        id: 3,
        question: "Despite the delays and setbacks, she handled the situation with __________, maintaining her composure throughout.",
        chinese_question: "尽管有延误和挫折，她还是以 __________ 处理了这种情况，并始终保持镇静。",
        answers: [
                { option: "A", answer: "irritation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
                { option: "B", answer: "forbearance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" },
                { option: "C", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
                { option: "D", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bù nàifán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'forbearance' means patient self-control; restraint and tolerance." +
                "<br><br>" +
                "(A) 'irritation' means the state of feeling annoyed, impatient, or slightly angry." +
                "<br><br>" +
                "(C) 'anxiety' means a feeling of worry, nervousness, or unease." +
                "<br><br>" +
                "(D) 'impatience' means the tendency to be quickly irritated or provoked.",
        chinese_explanation: "(B) '忍耐'一词意味着有耐心的自我控制；克制和宽容。" +
                "<br><br>" +
                "(A) '恼怒' 意味着感到恼火、不耐烦或稍微生气的状态。" +
                "<br><br>" +
                "(C) '焦虑' 意味着担忧、紧张或不安的感觉。" +
                "<br><br>" +
                "(D) '不耐烦' 意味着容易迅速被激怒或激怒的倾向。"
    },
    {
        id: 4,
        question: "He felt a deep sense of fulfillment in his __________, knowing that he was making a positive impact on the lives of his students.",
        chinese_question: "他在自己的 __________ 中感到深深的满足，因为他知道自己对学生的生活产生了积极的影响。",
        answers: [
                { option: "A", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
                { option: "B", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
                { option: "C", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
                { option: "D", answer: "entertainment", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
                "<br><br>" +
                "(A) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
                "<br><br>" +
                "(C) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
                "<br><br>" +
                "(D) 'entertainment' means the action of providing or being provided with amusement or enjoyment.",
        chinese_explanation: "(B) '职业'一词意味着对特定职业或职业的强烈适应感。" +
                "<br><br>" +
                "(A) '爱好' 意味着在闲暇时间经常进行的活动以获得乐趣。" +
                "<br><br>" +
                "(C) '消遣' 意味着某人定期为享乐而不是工作而做的活动；爱好。" +
                "<br><br>" +
                "(D) '娱乐' 意味着提供或被提供娱乐或享受的行为。"
    },
    {
        id: 5,
        question: "His love letter, though written in __________, conveyed his feelings with deep emotion and clarity.",
        chinese_question: "虽然他的情书是用 __________ 写的，但他清晰地传达了深厚的感情。",
        answers: [
                { option: "A", answer: "rhyme", chinese_answer: "押韵", chinese_romanization: "yāyùn" },
                { option: "B", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
                { option: "C", answer: "verse", chinese_answer: "诗", chinese_romanization: "shī" },
                { option: "D", answer: "melody", chinese_answer: "旋律", chinese_romanization: "xuánlǜ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prose' means written or spoken language in its ordinary form, without metrical structure." +
                "<br><br>" +
                "(A) 'rhyme' means correspondence of sound between words or the endings of words." +
                "<br><br>" +
                "(C) 'verse' means writing arranged with a metrical rhythm, typically having a rhyme." +
                "<br><br>" +
                "(D) 'melody' means a sequence of single notes that is musically satisfying.",
        chinese_explanation: "(B) '散文'一词意味着以普通形式书写或口头表达的语言，没有韵律结构。" +
                "<br><br>" +
                "(A) '押韵' 意味着词之间或词尾之间的声音对应。" +
                "<br><br>" +
                "(C) '诗' 意味着按韵律节奏安排的写作，通常有押韵。" +
                "<br><br>" +
                "(D) '旋律' 意味着单音符的序列，音乐上令人满意。"
    },
    {
        id: 6,
    question: "Given the significant opposition to the plan, the committee agreed to a __________ of the proposed changes.",
    chinese_question: "鉴于对该计划的重大反对，委员会同意对提议的变更进行 __________。",
    answers: [
        { option: "A", answer: "reconsideration", chinese_answer: "重新考虑", chinese_romanization: "chóngxīn kǎolǜ" },
        { option: "B", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
        { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "D", answer: "implementation", chinese_answer: "实施", chinese_romanization: "shíshī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reconsideration' figuratively means the action of considering something again or differently." +
        "<br><br>" +
        "(B) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
        "<br><br>" +
        "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
        "<br><br>" +
        "(D) 'implementation' means the process of putting a decision or plan into effect.",
    chinese_explanation: "(A) '重新考虑' 在此语境下意指再次或以不同方式考虑某事的行为。" +
        "<br><br>" +
        "(B) '批准' 意味着正式同意某事或接受某事为令人满意的行为。" +
        "<br><br>" +
        "(C) '拒绝' 意味着对提议、想法等的驳回或拒绝。" +
        "<br><br>" +
        "(D) '实施' 意味着将决定或计划付诸实施的过程。"
    },
    {
        id: 7,
    question: "The new transportation system greatly improved urban __________, reducing commute times significantly.",
    chinese_question: "新的交通系统大大改善了城市 __________，显著缩短了通勤时间。",
    answers: [
        { option: "A", answer: "locomotion", chinese_answer: "交通", chinese_romanization: "jiāotōng" },
        { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
        { option: "C", answer: "communication", chinese_answer: "交流", chinese_romanization: "jiāoliú" },
        { option: "D", answer: "habitation", chinese_answer: "居住", chinese_romanization: "jūzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'locomotion' figuratively means the movement or flow of people within a city or urban environment." +
        "<br><br>" +
        "(B) 'isolation' means the process or fact of isolating or being isolated." +
        "<br><br>" +
        "(C) 'communication' means the imparting or exchanging of information or news." +
        "<br><br>" +
        "(D) 'habitation' means the state or process of living in a particular place.",
    chinese_explanation: "(A) '交通' 在此语境下意指城市或都市环境中人们的流动或流通。" +
        "<br><br>" +
        "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
        "<br><br>" +
        "(C) '交流' 意味着信息或新闻的传递或交换。" +
        "<br><br>" +
        "(D) '居住' 意味着在特定地方生活的状态或过程。"
    },
    {
        id: 8,
    question: "The corporation’s __________ over the industry was challenged by new competitors entering the market.",
    chinese_question: "新竞争者进入市场，挑战了这家公司的行业 __________。",
    answers: [
        { option: "A", answer: "dominion", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
        { option: "B", answer: "submission", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "C", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dominion' means sovereignty or control." +
        "<br><br>" +
        "(B) 'submission' means the action or fact of accepting or yielding to a superior force or to the will or authority of another person." +
        "<br><br>" +
        "(C) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement." +
        "<br><br>" +
        "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(A) '统治' 意味着主权或控制。" +
        "<br><br>" +
        "(B) '屈服' 意味着接受或屈服于更强大的力量或他人意志或权威的行为或事实。" +
        "<br><br>" +
        "(C) '中立' 意味着在冲突或争执中不支持或帮助任何一方的状态。" +
        "<br><br>" +
        "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 9,
    question: "The train runs on a tight __________ to ensure it arrives on time.",
    chinese_question: "火车运行在紧凑的 __________ 上，以确保准时到达。",
    answers: [
        { option: "A", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiān biǎo" },
        { option: "B", answer: "whim", chinese_answer: "突发奇想", chinese_romanization: "tūfāqíxiǎng" },
        { option: "C", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
        { option: "D", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
        "<br><br>" +
        "(B) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
        "<br><br>" +
        "(C) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
        "<br><br>" +
        "(D) 'break' means a pause in work or during an activity or event.",
    chinese_explanation: "(A) '时间表' 意味着计划执行的过程或程序，列出预定的事件和时间。" +
        "<br><br>" +
        "(B) '突发奇想' 意味着突然的欲望或改变主意，尤其是异常或无法解释的。" +
        "<br><br>" +
        "(C) '事故' 意味着意外且无意中发生的不幸事件。" +
        "<br><br>" +
        "(D) '休息' 意味着工作或活动或事件期间的暂停。"
    },
    {
        id: 10,
    question: "The landmark court decision served as a __________ for all subsequent cases involving digital privacy.",
    chinese_question: "具有里程碑意义的法院判决成为所有涉及数字隐私的后续案件的 __________。",
    answers: [
        { option: "A", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
        { option: "B", answer: "precedent", chinese_answer: "先例", chinese_romanization: "xiānlì" },
        { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "deviation", chinese_answer: "偏差", chinese_romanization: "piānchā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'precedent' means an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances." +
        "<br><br>" +
        "(A) 'anomaly' means something that deviates from what is standard, normal, or expected." +
        "<br><br>" +
        "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(D) 'deviation' means the action of departing from an established course or accepted standard.",
    chinese_explanation: "(B) '先例' 一词意味着被认为在随后的类似情况下考虑的示例或指南的早期事件或行动。" +
        "<br><br>" +
        "(A) '异常' 意味着与标准、正常或预期情况不同的事物。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(D) '偏差' 意味着偏离既定路线或接受标准的行为。"
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
