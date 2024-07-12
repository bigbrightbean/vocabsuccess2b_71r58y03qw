// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The company operates on the __________ of providing excellent customer service, ensuring satisfaction and loyalty.",
    chinese_question: "公司以提供优质客户服务的 __________ 运营，确保满意和忠诚。",
    answers: [
        { option: "A", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
        { option: "B", answer: "strategy", chinese_answer: "战略", chinese_romanization: "zhànlüè" },
        { option: "C", answer: "tactic", chinese_answer: "策略", chinese_romanization: "cèlüè" },
        { option: "D", answer: "goal", chinese_answer: "目标", chinese_romanization: "mùbiāo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'principle' means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning." +
        "<br><br>" +
        "(B) 'strategy' means a plan of action designed to achieve a long-term or overall aim." +
        "<br><br>" +
        "(C) 'tactic' means an action or strategy carefully planned to achieve a specific end." +
        "<br><br>" +
        "(D) 'goal' means the object of a person's ambition or effort; an aim or desired result.",
    chinese_explanation: "(A) '原则' 意味着作为信仰或行为体系或推理链基础的基本真理或命题。" +
        "<br><br>" +
        "(B) '战略' 意味着为实现长期或总体目标而设计的行动计划。" +
        "<br><br>" +
        "(C) '策略' 意味着为实现特定目标而精心策划的行动或策略。" +
        "<br><br>" +
        "(D) '目标' 意味着一个人雄心或努力的对象；目标或期望的结果。"
    },
    {
        id: 2,
    question: "The company's __________ in the global market was challenged by emerging startups with innovative solutions.",
    chinese_question: "这家公司的全球市场 __________ 受到了具有创新解决方案的新兴初创公司的挑战。",
    answers: [
        { option: "A", answer: "dominion", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
        { option: "B", answer: "submission", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "C", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
        { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dominion' figuratively means control or dominance over a particular field or market." +
        "<br><br>" +
        "(B) 'submission' means the action or fact of accepting or yielding to a superior force or to the will or authority of another person." +
        "<br><br>" +
        "(C) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
        "<br><br>" +
        "(D) 'avoidance' means the action of keeping away from or not doing something.",
    chinese_explanation: "(A) '统治' 在此语境下意指对特定领域或市场的控制或支配。" +
        "<br><br>" +
        "(B) '屈服' 意味着接受或屈服于更强大的力量或他人意志或权威的行为或事实。" +
        "<br><br>" +
        "(C) '批准' 意味着正式同意某事或接受某事为令人满意的行为。" +
        "<br><br>" +
        "(D) '避免' 意味着避免或不做某事的行为。"
    },
    {
        id: 3,
    question: "The lecturer’s monotonous __________ made it hard for the students to stay awake.",
    chinese_question: "讲师单调的 __________ 使学生难以保持清醒。",
    answers: [
        { option: "A", answer: "drone", chinese_answer: "嗡嗡声", chinese_romanization: "wēngwēng shēng" },
        { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "C", answer: "shout", chinese_answer: "喊叫", chinese_romanization: "hǎnjiào" },
        { option: "D", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'drone' means to speak in a monotonous tone." +
        "<br><br>" +
        "(B) 'whisper' means to speak very softly using one's breath without vocal cords." +
        "<br><br>" +
        "(C) 'shout' means to utter a loud call or cry." +
        "<br><br>" +
        "(D) 'silence' means the absence of sound.",
    chinese_explanation: "(A) '嗡嗡声' 意味着以单调的语调说话。" +
        "<br><br>" +
        "(B) '低语' 意味着非常轻声地说话，使用气息而不使用声带。" +
        "<br><br>" +
        "(C) '喊叫' 意味着发出大声的呼喊或叫声。" +
        "<br><br>" +
        "(D) '安静' 意味着没有声音。"
    },
    {
        id: 4,
    question: "She wanted to identify the __________ of the mysterious noise coming from the attic.",
    chinese_question: "她想找出从阁楼传来的神秘噪音的 __________ 。",
    answers: [
        { option: "A", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" },
        { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng àn" },
        { option: "C", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "D", answer: "replacement", chinese_answer: "替代品", chinese_romanization: "tìdàipǐn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'source' means a place, person, or thing from which something comes or can be obtained." +
        "<br><br>" +
        "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(C) 'consequence' means a result or effect of an action or condition." +
        "<br><br>" +
        "(D) 'replacement' means a person or thing that takes the place of another.",
    chinese_explanation: "(A) '来源' 意味着某物来自或可以从中获得的地方、人物或事物。" +
        "<br><br>" +
        "(B) '解决方案' 意味着解决问题或应对困难情况的方法。" +
        "<br><br>" +
        "(C) '结果' 意味着行动或情况的结果或影响。" +
        "<br><br>" +
        "(D) '替代品' 意味着代替另一人的人或事物。"
    },
    {
        id: 5,
    question: "Finding a __________ to the traffic congestion in the city has been a major challenge for urban planners.",
    chinese_question: "找到解决城市交通拥堵的 __________ 一直是城市规划者的重大挑战。",
    answers: [
        { option: "A", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "C", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
        { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(A) 'question' means a sentence worded or expressed so as to elicit information." +
        "<br><br>" +
        "(B) 'mistake' means an action or judgment that is misguided or wrong." +
        "<br><br>" +
        "(D) 'guess' means an estimate or conclusion reached by guessing.",
    chinese_explanation: "(C) '解决方案' 意味着解决问题或处理困难情况的方法。" +
        "<br><br>" +
        "(A) '问题' 意味着以引出信息为目的的句子。" +
        "<br><br>" +
        "(B) '错误' 意味着误导或错误的行为或判断。" +
        "<br><br>" +
        "(D) '猜测' 意味着通过猜测得出的估计或结论。"
    },
    {
        id: 6,
    question: "The success of the project served as __________ of the team's capabilities.",
    chinese_question: "项目的成功证明了团队的能力，是他们能力的 __________。",
    answers: [
        { option: "A", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
        { option: "B", answer: "proof", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
        { option: "C", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "D", answer: "myth", chinese_answer: "神话", chinese_romanization: "shénhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'proof' means something that demonstrates the truth or existence of something." +
        "<br><br>" +
        "(A) 'guess' means an estimate or conjecture without sufficient information." +
        "<br><br>" +
        "(C) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
        "<br><br>" +
        "(D) 'myth' means a widely held but false belief or idea.",
    chinese_explanation: "(B) '证据' 意味着证明某事真实性或存在的事物。" +
        "<br><br>" +
        "(A) '猜测' 意味着在信息不足的情况下进行估计或推测。" +
        "<br><br>" +
        "(C) '假设' 意味着在没有证据的情况下被接受为真实或确定会发生的事物。" +
        "<br><br>" +
        "(D) '神话' 意味着广泛持有但错误的信仰或观念。"
    },
    {
        id: 7,
    question: "The __________ on Black Friday made shopping a nightmare, with people pushing and shoving for deals.",
    chinese_question: "黑色星期五的 __________ 让购物成为一场噩梦，人们为了抢购而推挤。",
    answers: [
        { option: "A", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
        { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mayhem' means a state of chaos and disorder." +
        "<br><br>" +
        "(B) 'calm' means a state of tranquility." +
        "<br><br>" +
        "(C) 'peace' means a state of tranquility or quiet." +
        "<br><br>" +
        "(D) 'tranquility' means the quality or state of being tranquil.",
    chinese_explanation: "(A) '混乱' 意味着一种混乱和无序的状态。" +
        "<br><br>" +
        "(B) '平静' 意味着一种宁静的状态。" +
        "<br><br>" +
        "(C) '和平' 意味着一种宁静或安静的状态。" +
        "<br><br>" +
        "(D) '宁静' 意味着宁静的质量或状态。"
    },
    {
        id: 8,
    question: "His investment in the apple __________ paid off with a profitable harvest.",
    chinese_question: "他在苹果 __________ 上的投资带来了丰厚的收益。",
    answers: [
        { option: "A", answer: "orchard", chinese_answer: "果园", chinese_romanization: "guǒyuán" },
        { option: "B", answer: "venture", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
        { option: "C", answer: "scheme", chinese_answer: "计划", chinese_romanization: "jìhuà" },
        { option: "D", answer: "project", chinese_answer: "项目", chinese_romanization: "xiàngmù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'orchard' means a piece of land planted with fruit trees." +
        "<br><br>" +
        "(B) 'venture' means a risky or daring journey or undertaking." +
        "<br><br>" +
        "(C) 'scheme' means a large-scale systematic plan or arrangement for attaining a particular object or putting a particular idea into effect." +
        "<br><br>" +
        "(D) 'project' means an individual or collaborative enterprise that is carefully planned to achieve a particular aim.",
    chinese_explanation: "(A) '果园' 意味着种植果树的一块土地。" +
        "<br><br>" +
        "(B) '冒险' 意味着一个冒险或大胆的旅程或事业。" +
        "<br><br>" +
        "(C) '计划' 意味着为实现特定目标或实施特定想法而制定的大规模系统计划或安排。" +
        "<br><br>" +
        "(D) '项目' 意味着精心计划的个人或合作企业，以实现特定目标。"
    },
    {
        id: 9,
        question: "His __________ in debate made him a formidable opponent, able to counter any argument with ease.",
        chinese_question: "他在辩论中的 __________ 使他成为一个强大的对手，能够轻松反驳任何论点。",
        answers: [
                { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "B", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
                { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
                { option: "D", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
                "<br><br>" +
                "(A) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(C) 'uncertainty' means the state of being unsure." +
                "<br><br>" +
                "(D) 'incompetence' means inability to do something successfully; ineptitude.",
        chinese_explanation: "(B) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
                "<br><br>" +
                "(A) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(C) '不确定' 意味着不确定的状态。" +
                "<br><br>" +
                "(D) '无能' 意味着无法成功地做某事；无能。"
    },
    {
        id: 10,
    question: "The luxurious lifestyle of the celebrity was a source of __________ for many, who wished they could live the same way.",
    chinese_question: "这位名人的奢华生活方式是许多人 __________ 的来源，他们希望自己也能过上同样的生活。",
    answers: [
        { option: "A", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
        { option: "B", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "C", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'envy' figuratively means a feeling of discontented or resentful longing aroused by someone else's lifestyle or possessions." +
        "<br><br>" +
        "(B) 'admiration' means respect and warm approval." +
        "<br><br>" +
        "(C) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '嫉妒' 在此语境下意指因他人的生活方式或财产而引起的不满或愤恨的渴望。" +
        "<br><br>" +
        "(B) '钦佩' 意味着尊重和热情的认可。" +
        "<br><br>" +
        "(C) '鄙视' 意味着认为某人或某物不值得考虑或尊重的感觉。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
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
