// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His sudden resignation from the company __________ everyone, as he was considered the backbone of the team.",
        chinese_question: "他突然从公司辞职让所有人 __________，因为他被认为是团队的支柱。",
        answers: [
                { option: "A", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "B", answer: "flabbergasted", chinese_answer: "惊讶", chinese_romanization: "jīngyà" },
                { option: "C", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
                { option: "D", answer: "soothed", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flabbergasted' used figuratively means to shock or surprise someone greatly." +
                "<br><br>" +
                "(A) 'calmed' means to make someone peaceful or quiet." +
                "<br><br>" +
                "(C) 'delighted' means to cause someone to feel very pleased." +
                "<br><br>" +
                "(D) 'soothed' means to gently calm someone or something.",
        chinese_explanation: "(B) '惊讶' 在比喻意义上指极大地震惊或惊讶某人。" +
                "<br><br>" +
                "(A) '平静' 意味着使某人安静或平和。" +
                "<br><br>" +
                "(C) '高兴' 意味着使某人感到非常高兴。" +
                "<br><br>" +
                "(D) '抚慰' 意味着轻轻地安抚某人或某物。"
    },
    {
        id: 2,
        question: "The new regulations are likely to __________ the process rather than simplify it.",
        chinese_question: "新规定可能会 __________ 这个过程，而不是简化它。",
        answers: [
                { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
                { option: "B", answer: "streamline", chinese_answer: "精简", chinese_romanization: "jīngjiǎn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'complicate' means to make something more difficult or confusing." +
                "<br><br>" +
                "(B) 'streamline' means to make an organization or system more efficient and effective by employing faster or simpler working methods." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '复杂化' 意味着使某事更加困难或令人困惑。" +
                "<br><br>" +
                "(B) '精简' 意味着通过采用更快或更简单的工作方法使组织或系统更高效和有效。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 3,
    question: "The company uses sustainable materials to __________ eco-friendly products.",
    chinese_question: "这家公司使用可持续材料来 __________ 环保产品。",
    answers: [
        { option: "A", answer: "manufacture", chinese_answer: "生产", chinese_romanization: "shēngchǎn" },
        { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
        { option: "C", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
        { option: "D", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'manufacture' means to make something, especially on a large scale using machinery." +
        "<br><br>" +
        "(B) 'discard' means to get rid of something as no longer useful or desirable." +
        "<br><br>" +
        "(C) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(D) 'dismantle' means to take something apart so that it is in separate pieces.",
    chinese_explanation: "(A) '生产' 意味着制作某物，尤其是使用机械大规模制作。" +
        "<br><br>" +
        "(B) '丢弃' 意味着将某物视为不再有用或不需要而丢掉。" +
        "<br><br>" +
        "(C) '浪费' 意味着不小心、奢侈地或无目的地使用或消耗。" +
        "<br><br>" +
        "(D) '拆卸' 意味着将某物拆解成单独的部分。"
    },
    {
        id: 4,
question: "He spoke of their outdated practices with __________, believing they were holding the company back.",
chinese_question: "他说起他们过时的做法时带着 __________，认为这些做法拖累了公司。",
answers: [
    { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
    { option: "B", answer: "scorn", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
    { option: "C", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
    { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
],
correctAnswer: "B",
explanation: "(B) 'scorn' means the feeling or belief that someone or something is worthless or despicable; contempt." +
    "<br><br>" +
    "(A) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
    "<br><br>" +
    "(C) 'interest' means the feeling of wanting to know or learn about something or someone." +
    "<br><br>" +
    "(D) 'admiration' means respect and warm approval.",
chinese_explanation: "(B) '轻蔑'一词意味着认为某人或某物毫无价值或可鄙的感觉或信念；蔑视。" +
    "<br><br>" +
    "(A) '尊重' 意味着对某人或某事因其能力、品质或成就而产生的深深钦佩。" +
    "<br><br>" +
    "(C) '兴趣' 意味着想知道或了解某事或某人的感觉。" +
    "<br><br>" +
    "(D) '钦佩' 意味着尊重和热情赞同。"
    },
    {
        id: 5,
    question: "Desperate for answers, he began to __________ through old documents and files.",
    chinese_question: "为了寻找答案，他开始 __________ 旧文件和档案。",
    answers: [
        { option: "A", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
        { option: "B", answer: "ransack", chinese_answer: "翻箱倒柜", chinese_romanization: "fān xiāng dǎo guì" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ransack' means to search through a place and cause disorder, often in a hurried or desperate manner." +
        "<br><br>" +
        "(A) 'organize' means to arrange in a structured order." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'simplify' means to make something easier to do or understand.",
    chinese_explanation: "(B) '翻箱倒柜' 意味着翻箱倒柜并造成混乱，通常是匆忙或绝望的方式。" +
        "<br><br>" +
        "(A) '组织' 意味着按结构顺序安排。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更易做或理解。"
    },
    {
        id: 6,
        question: "The conman was able to __________ the elderly couple into signing over their property.",
        chinese_question: "骗子设法 __________ 这对老夫妻签署了他们的财产。",
        answers: [
                { option: "A", answer: "dupe", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dupe' means to deceive or trick someone." +
                "<br><br>" +
                "(B) 'assist' means to help someone." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(A) '欺骗' 意味着欺骗或捉弄某人。" +
                "<br><br>" +
                "(B) '帮助' 意味着帮助某人。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保护' 意味着使某人免受伤害。"
    },
    {
        id: 7,
    question: "The sheer size of the project will __________ anyone who takes it on.",
    chinese_question: "项目的庞大规模会让任何承担它的人都 __________ 。",
    answers: [
        { option: "A", answer: "boggle", chinese_answer: "震惊", chinese_romanization: "zhènjīng" },
        { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'boggle' means to overwhelm or bewilder." +
        "<br><br>" +
        "(B) 'assist' means to help or support." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
    chinese_explanation: "(A) '震惊' 意味着使不知所措或迷惑。" +
        "<br><br>" +
        "(B) '帮助' 意味着帮助或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 8,
    question: "The sculptor used a __________ to carefully shape the marble statue.",
    chinese_question: "雕刻家用 __________ 小心翼翼地雕刻大理石雕像。",
    answers: [
        { option: "A", answer: "chisel", chinese_answer: "凿子", chinese_romanization: "záozi" },
        { option: "B", answer: "brush", chinese_answer: "刷子", chinese_romanization: "shuāzi" },
        { option: "C", answer: "hammer", chinese_answer: "锤子", chinese_romanization: "chuízi" },
        { option: "D", answer: "drill", chinese_answer: "钻子", chinese_romanization: "zuànzi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chisel' means a tool with a sharp edge at the end of a handle, used for cutting or shaping wood, stone, or metal." +
        "<br><br>" +
        "(B) 'brush' means an implement with bristles, wire, or other filaments." +
        "<br><br>" +
        "(C) 'hammer' means a tool with a heavy metal head mounted at right angles at the end of a handle." +
        "<br><br>" +
        "(D) 'drill' means a tool or machine with a rotating cutting tip, used for making holes.",
    chinese_explanation: "(A) '凿子' 意味着在手柄末端有锋利边缘的工具，用于切割或雕刻木材、石头或金属。" +
        "<br><br>" +
        "(B) '刷子' 意味着带有刷毛、金属丝或其他纤维的工具。" +
        "<br><br>" +
        "(C) '锤子' 意味着在手柄末端有重金属头的工具。" +
        "<br><br>" +
        "(D) '钻子' 意味着带有旋转切割尖端的工具或机器，用于打孔。"
    },
    {
        id: 9,
        question: "The community gathered to __________ with the family after the tragic accident.",
        chinese_question: "在悲惨的事故后，社区聚集在一起 __________ 那个家庭。",
        answers: [
                { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "blame", chinese_answer: "责备", chinese_romanization: "zébèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commiserate' means to express or feel sympathy or pity." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'blame' means to assign responsibility for a fault or wrong.",
        chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '责备' 意味着对某个错误或过错承担责任。"
    },
    {
        id: 10,
    question: "The high turnout at the event __________ its popularity among the community.",
    chinese_question: "活动的高出席率 __________ 它在社区中的受欢迎程度。",
    answers: [
        { option: "A", answer: "bespeaks", chinese_answer: "表明", chinese_romanization: "biǎomíng" },
        { option: "B", answer: "questions", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
        { option: "C", answer: "undermines", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
        { option: "D", answer: "neglects", chinese_answer: "忽视", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
        "<br><br>" +
        "(B) 'questions' means to ask questions about something." +
        "<br><br>" +
        "(C) 'undermines' means to weaken or damage something." +
        "<br><br>" +
        "(D) 'neglects' means to fail to care for properly.",
    chinese_explanation: "(A) '表明' 意味着表明或作为某事的证据。" +
        "<br><br>" +
        "(B) '质疑' 意味着对某事提出问题。" +
        "<br><br>" +
        "(C) '削弱' 意味着削弱或损害某事。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能适当照顾。"
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
