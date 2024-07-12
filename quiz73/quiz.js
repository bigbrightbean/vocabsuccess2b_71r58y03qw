// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His essay included a thoughtful __________ to address potential criticisms of his main argument.",
    chinese_question: "他的文章包含了一个深思熟虑的 __________，以应对对他主要论点的潜在批评。",
    answers: [
        { option: "A", answer: "summary", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
        { option: "B", answer: "counterargument", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "C", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "D", answer: "outline", chinese_answer: "大纲", chinese_romanization: "dàgāng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'counterargument' means an argument or set of reasons put forward to oppose an idea or theory developed in another argument." +
        "<br><br>" +
        "(A) 'summary' means a brief statement or account of the main points of something." +
        "<br><br>" +
        "(C) 'agreement' means harmony or accordance in opinion or feeling." +
        "<br><br>" +
        "(D) 'outline' means a general description or plan giving the essential features of something but not the detail.",
    chinese_explanation: "(B) '反驳' 一词意味着为反对在另一争论中提出的观点或理论而提出的论点或理由。" +
        "<br><br>" +
        "(A) '总结' 意味着对某事要点的简要陈述或描述。" +
        "<br><br>" +
        "(C) '同意' 意味着意见或感觉上的和谐或一致。" +
        "<br><br>" +
        "(D) '大纲' 意味着对某事物的要点而非细节的总体描述或计划。"
    },
    {
        id: 2,
        question: "Her dance moves were executed with such __________ that the audience was captivated.",
        chinese_question: "她的舞蹈动作执行得如此 __________，以至于观众都被迷住了。",
        answers: [
                { option: "A", answer: "awkwardness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
                { option: "B", answer: "rigidity", chinese_answer: "僵硬", chinese_romanization: "jiāngyìng" },
                { option: "C", answer: "finesse", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
                { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'finesse' means intricate and refined delicacy; skillful handling of a situation." +
                "<br><br>" +
                "(A) 'awkwardness' means lacking grace or ease in movement." +
                "<br><br>" +
                "(B) 'rigidity' means inability to be bent or changed." +
                "<br><br>" +
                "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
        chinese_explanation: "(C) '技巧'一词意味着复杂而精细的技巧；巧妙处理情况。" +
                "<br><br>" +
                "(A) '笨拙' 意味着缺乏优雅或轻松的动作。" +
                "<br><br>" +
                "(B) '僵硬' 意味着无法弯曲或改变。" +
                "<br><br>" +
                "(D) '简单' 意味着易于理解或做的质量或条件。"
    },
    {
        id: 3,
    question: "Her __________ of confidence prevented her from speaking up in the meeting.",
    chinese_question: "她 __________ 自信，导致她在会议上没有发言。",
    answers: [
        { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "B", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
        { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lack' means the state of being without or not having enough of something." +
        "<br><br>" +
        "(A) 'abundance' means a very large quantity of something." +
        "<br><br>" +
        "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
        "<br><br>" +
        "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
    chinese_explanation: "(B) '缺乏' 意味着没有或不足够某物的状态。" +
        "<br><br>" +
        "(A) '丰富' 意味着大量的某物。" +
        "<br><br>" +
        "(C) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
        "<br><br>" +
        "(D) '过量' 意味着超过必要、允许或理想的数量。"
    },
    {
        id: 4,
    question: "The politician's __________ on the policy change was widely quoted in the media.",
    chinese_question: "那位政治家对政策变化的 __________ 在媒体上被广泛引用。",
    answers: [
        { option: "A", answer: "remark", chinese_answer: "言论", chinese_romanization: "yánlùn" },
        { option: "B", answer: "promise", chinese_answer: "承诺", chinese_romanization: "chéngnuò" },
        { option: "C", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
        { option: "D", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remark' means a spoken statement or comment." +
        "<br><br>" +
        "(B) 'promise' means a declaration or assurance that one will do something or that a particular thing will happen." +
        "<br><br>" +
        "(C) 'command' means an authoritative order." +
        "<br><br>" +
        "(D) 'apology' means a regretful acknowledgment of an offense or failure.",
    chinese_explanation: "(A) '言论' 意味着口头的陈述或评论。" +
        "<br><br>" +
        "(B) '承诺' 意味着宣言或保证某人会做某事或某事会发生。" +
        "<br><br>" +
        "(C) '命令' 意味着权威的指令。" +
        "<br><br>" +
        "(D) '道歉' 意味着对冒犯或失败的遗憾承认。"
    },
    {
        id: 5,
    question: "The challenges we face in the __________ require immediate attention.",
    chinese_question: "我们在 __________ 面临的挑战需要立即关注。",
    answers: [
        { option: "A", answer: "present", chinese_answer: "目前", chinese_romanization: "mùqián" },
        { option: "B", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "C", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "D", answer: "distant", chinese_answer: "遥远", chinese_romanization: "yáoyuǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'present' means existing or occurring now." +
        "<br><br>" +
        "(B) 'past' means having happened or existed before now." +
        "<br><br>" +
        "(C) 'future' means the time or a period of time following the moment of speaking or writing." +
        "<br><br>" +
        "(D) 'distant' means far away in space or time.",
    chinese_explanation: "(A) '目前' 意味着现在存在或发生。" +
        "<br><br>" +
        "(B) '过去' 意味着在现在之前发生或存在。" +
        "<br><br>" +
        "(C) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
        "<br><br>" +
        "(D) '遥远' 意味着在空间或时间上遥远。"
    },
    {
        id: 6,
    question: "The release of the new video game caused __________ in the store, with customers fighting to get a copy.",
    chinese_question: "新视频游戏的发布在商店里引起了 __________，顾客们争相抢购。",
    answers: [
        { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "B", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
        { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pandemonium' means wild and noisy disorder or confusion; uproar." +
        "<br><br>" +
        "(A) 'harmony' means agreement or concord." +
        "<br><br>" +
        "(C) 'tranquility' means calmness and peace." +
        "<br><br>" +
        "(D) 'peace' means freedom from disturbance.",
    chinese_explanation: "(B) '混乱' 意味着狂野和嘈杂的混乱或骚动。" +
        "<br><br>" +
        "(A) '和谐' 意味着一致或和睦。" +
        "<br><br>" +
        "(C) '宁静' 意味着平静和安宁。" +
        "<br><br>" +
        "(D) '和平' 意味着没有干扰。"
    },
    {
        id: 7,
    question: "In a moment of panic, he watched his phone __________ into the swimming pool.",
    chinese_question: "在一阵恐慌中，他看着手机 __________ 进游泳池。",
    answers: [
        { option: "A", answer: "plunge", chinese_answer: "掉入", chinese_romanization: "diào rù" },
        { option: "B", answer: "float", chinese_answer: "漂浮", chinese_romanization: "piāofú" },
        { option: "C", answer: "drift", chinese_answer: "漂流", chinese_romanization: "piāoliú" },
        { option: "D", answer: "hover", chinese_answer: "悬停", chinese_romanization: "xuántíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plunge' means to fall or jump suddenly from a high place." +
        "<br><br>" +
        "(B) 'float' means to rest or move on or near the surface of a liquid without sinking." +
        "<br><br>" +
        "(C) 'drift' means to be carried slowly by a current of air or water." +
        "<br><br>" +
        "(D) 'hover' means to remain in one place in the air.",
    chinese_explanation: "(A) '掉入' 意味着从高处突然掉落或跳下。" +
        "<br><br>" +
        "(B) '漂浮' 意味着在液体表面或附近休息或移动而不下沉。" +
        "<br><br>" +
        "(C) '漂流' 意味着被空气或水流慢慢带走。" +
        "<br><br>" +
        "(D) '悬停' 意味着在空中停留在一个地方。"
    },
    {
        id: 8,
    question: "Her cheerful __________ masked a deep sadness that few people knew about.",
    chinese_question: "她愉快的 __________ 掩盖了一种很少有人知道的深深的悲伤。",
    answers: [
        { option: "A", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidù" },
        { option: "B", answer: "veneer", chinese_answer: "外表", chinese_romanization: "wàibiǎo" },
        { option: "C", answer: "outlook", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
        { option: "D", answer: "behavior", chinese_answer: "行为", chinese_romanization: "xíngwéi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'veneer' means an outward appearance that hides the true nature of something." +
        "<br><br>" +
        "(A) 'attitude' means a settled way of thinking or feeling about something." +
        "<br><br>" +
        "(C) 'outlook' means a person's point of view or general attitude to life." +
        "<br><br>" +
        "(D) 'behavior' means the way in which one acts or conducts oneself, especially towards others.",
    chinese_explanation: "(B) '外表' 一词意味着隐藏某物真面目的外表。" +
        "<br><br>" +
        "(A) '态度' 意味着对某事的一种固定思维或感觉方式。" +
        "<br><br>" +
        "(C) '观点' 意味着一个人对生活的观点或总体态度。" +
        "<br><br>" +
        "(D) '行为' 意味着一个人行为或举止的方式，尤其是对他人的方式。"
    },
    {
        id: 9,
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
        id: 10,
    question: "The politician's __________ for his opponents was evident in his dismissive remarks during the debate.",
    chinese_question: "政客对对手的 __________ 在辩论中的轻蔑言论中显而易见。",
    answers: [
        { option: "A", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
        { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "D", answer: "empathy", chinese_answer: "同理心", chinese_romanization: "tónglǐ xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disdain' figuratively means the feeling that someone is unworthy of consideration or respect." +
        "<br><br>" +
        "(B) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
        "<br><br>" +
        "(C) 'admiration' means respect and warm approval." +
        "<br><br>" +
        "(D) 'empathy' means the ability to understand and share the feelings of another.",
    chinese_explanation: "(A) '鄙视' 在此语境下意指认为某人不值得考虑或尊重的感觉。" +
        "<br><br>" +
        "(B) '尊重' 意味着因某人的能力、品质或成就而产生的深深的钦佩之情。" +
        "<br><br>" +
        "(C) '钦佩' 意味着尊重和热情的认可。" +
        "<br><br>" +
        "(D) '同理心' 意味着理解和分享他人感受的能力。"
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
