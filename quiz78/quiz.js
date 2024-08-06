// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The new technology had a transformative __________ on the way people communicate, like enabling instant messaging and video calls.",
    chinese_question: "新技术对人们的交流方式产生了变革性的 __________，例如实现即时消息和视频通话。",
    answers: [
        { option: "A", answer: "effect", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "loss", chinese_answer: "损失", chinese_romanization: "sǔnshī" },
        { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'effect' means a change that is a result or consequence of an action or other cause, which is similar to 'impact'." +
        "<br><br>" +
        "(B) 'loss' means the fact or process of losing something or someone." +
        "<br><br>" +
        "(C) 'failure' means lack of success." +
        "<br><br>" +
        "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(A) '影响' 意味着某事对某种情况或某人的强烈影响。" +
        "<br><br>" +
        "(B) '损失' 意味着失去某物或某人的事实或过程。" +
        "<br><br>" +
        "(C) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 2,
    question: "The __________ of a new hobby, such as painting, brought her a lot of joy and relaxation.",
    chinese_question: "她 __________ 了一个新爱好，比如绘画，给她带来了很多快乐和放松。",
    answers: [
        { option: "A", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'acquisition' figuratively means the act of obtaining or gaining possession, especially new interests or hobbies." +
        "<br><br>" +
        "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
        "<br><br>" +
        "(C) 'neglect' means the state or fact of being uncared for." +
        "<br><br>" +
        "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
    chinese_explanation: "(A) '获得' 在此语境下意指获取或获得所有权的行为，特别是新兴趣或爱好。" +
        "<br><br>" +
        "(B) '拒绝' 意味着对提议、想法等的拒绝或拒绝。" +
        "<br><br>" +
        "(C) '忽视' 意味着无人照顾的状态或事实。" +
        "<br><br>" +
        "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 3,
        question: "It was her __________ to approve the budget changes, a privilege reserved for the department head.",
        chinese_question: "批准预算变更是她的 __________，这是部门主管保留的特权。",
        answers: [
            { option: "A", answer: "aberration", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "B", answer: "contraption", chinese_answer: "奇妙的装置", chinese_romanization: "qímiào de zhuāngzhì" },
            { option: "C", answer: "digression", chinese_answer: "离题", chinese_romanization: "lítí" },
            { option: "D", answer: "prerogative", chinese_answer: "特权", chinese_romanization: "tèquán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prerogative' means a right or privilege exclusive to a particular individual or class." +
            "<br><br>" +
            "(A) 'aberration' means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
            "<br><br>" +
            "(B) 'contraption' means a machine or device that appears strange or unnecessarily complicated, and often badly made or unsafe." +
            "<br><br>" +
            "(C) 'digression' means a temporary departure from the main subject in speech or writing.",
        chinese_explanation: "(D) '特权' 意味着某个个人或阶级专有的权利或特权。" +
            "<br><br>" +
            "(A) '异常' 意味着偏离正常、通常或预期的事物，通常是令人不快的。" +
            "<br><br>" +
            "(B) '奇妙的装置' 意味着一种看起来奇怪或不必要复杂的机器或装置，通常做工差或不安全。" +
            "<br><br>" +
            "(C) '离题' 意味着在讲话或写作中暂时偏离主题。"
    },
    {
        id: 4,
    question: "The customer made a __________ for a refund due to the defective product by filling out the required forms and contacting customer service.",
    chinese_question: "由于产品有缺陷，顾客通过填写所需的表格并联系客户服务 __________ 退款。",
    answers: [
        { option: "A", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "B", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "offer", chinese_answer: "提议", chinese_romanization: "tíyì" },
        { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'request' means an act of asking politely or formally for something." +
        "<br><br>" +
        "(B) 'refusal' means an act of denying or rejecting something offered or requested." +
        "<br><br>" +
        "(C) 'offer' means to present or proffer something for someone to accept or reject as desired." +
        "<br><br>" +
        "(D) 'suggestion' means an idea or plan put forward for consideration.",
    chinese_explanation: "(A) '请求' 意味着礼貌或正式地要求某事。" +
        "<br><br>" +
        "(B) '拒绝' 意味着否认或拒绝所提供或要求的东西。" +
        "<br><br>" +
        "(C) '提议' 意味着提出或提供某物供某人接受或拒绝。" +
        "<br><br>" +
        "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 5,
    question: "Finding herself in a __________ over how to balance work and family life, she sought advice from friends.",
    chinese_question: "她发现自己在如何平衡工作和家庭生活的问题上陷入了 __________，于是向朋友寻求建议。",
    answers: [
        { option: "A", answer: "solution", chinese_answer: "解决", chinese_romanization: "jiějué" },
        { option: "B", answer: "quandary", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
        { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
        { option: "D", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quandary' means a state of perplexity or uncertainty over what to do in a difficult situation." +
        "<br><br>" +
        "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(C) 'clarity' means the quality of being coherent and intelligible." +
        "<br><br>" +
        "(D) 'contentment' means a state of happiness and satisfaction.",
    chinese_explanation: "(B) '困境'一词意味着在面对困难情况时感到困惑或不确定的状态。" +
        "<br><br>" +
        "(A) '解决' 意味着解决问题或处理困难情况的方法。" +
        "<br><br>" +
        "(C) '清晰' 意味着连贯和可理解的质量。" +
        "<br><br>" +
        "(D) '满足' 意味着幸福和满意的状态。"
    },
    {
        id: 6,
        question: "The manager's __________ was clear when the team failed to meet their sales targets.",
        chinese_question: "当团队未能达到销售目标时，经理的 __________ 显而易见。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'approval' means the belief that someone or something is good or acceptable." +
            "<br><br>" +
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(C) '责备' 意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞同' 意味着相信某人或某事物是好的或可接受的。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过进行愉快的、通常是社交的活动来标志一个重要事件或场合的愉快行为。" +
            "<br><br>" +
            "(D) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 7,
    question: "The villagers regarded the intruders with __________, distrustful of their intentions.",
    chinese_question: "村民们以 __________ 的目光看待入侵者，不信任他们的意图。",
    answers: [
        { option: "A", answer: "hospitality", chinese_answer: "热情好客", chinese_romanization: "rèqíng hǎokè" },
        { option: "B", answer: "scorn", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
        { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
        { option: "D", answer: "reverence", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scorn' means the feeling or belief that someone or something is worthless or despicable; contempt." +
        "<br><br>" +
        "(A) 'hospitality' means the friendly and generous reception and entertainment of guests, visitors, or strangers." +
        "<br><br>" +
        "(C) 'curiosity' means a strong desire to know or learn something." +
        "<br><br>" +
        "(D) 'reverence' means deep respect for someone or something.",
    chinese_explanation: "(B) '轻蔑' 意味着认为某人或某物毫无价值或可鄙的感觉或信念；蔑视。" +
        "<br><br>" +
        "(A) '热情好客' 意味着对客人、访客或陌生人的友好和慷慨接待。" +
        "<br><br>" +
        "(C) '好奇' 意味着强烈的知道或了解某事的愿望。" +
        "<br><br>" +
        "(D) '敬畏' 意味着对某人或某事的深深尊重。"
    },
    {
        id: 8,
    question: "He is a strong __________ for renewable energy, often writing articles and giving presentations on its benefits.",
    chinese_question: "他是可再生能源的强烈 __________，经常撰写文章并做演讲来介绍其好处。",
    answers: [
        { option: "A", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" },
        { option: "B", answer: "detractor", chinese_answer: "贬低者", chinese_romanization: "biǎndī zhě" },
        { option: "C", answer: "skeptic", chinese_answer: "怀疑者", chinese_romanization: "huáiyí zhě" },
        { option: "D", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'advocate' means a person who publicly supports or recommends a particular cause or policy." +
        "<br><br>" +
        "(B) 'detractor' means a person who disparages someone or something." +
        "<br><br>" +
        "(C) 'skeptic' means a person inclined to question or doubt all accepted opinions." +
        "<br><br>" +
        "(D) 'observer' means a person who watches or notices something.",
    chinese_explanation: "(A) '倡导者' 意味着公开支持或推荐特定事业或政策的人。" +
        "<br><br>" +
        "(B) '贬低者' 意味着贬低某人或某事的人。" +
        "<br><br>" +
        "(C) '怀疑者' 意味着倾向于质疑或怀疑所有公认意见的人。" +
        "<br><br>" +
        "(D) '观察者' 意味着观察或注意某事的人。"
    },
    {
        id: 9,
        question: "Before making the final decision, the CEO carefully considered every __________, such as potential legal issues and financial impacts, because he knew it would affect the entire company.",
        chinese_question: "在做出最终决定之前，CEO仔细考虑了每一个 __________，例如潜在的法律问题和财务影响，因为他知道这将影响整个公司。",
        answers: [
            { option: "A", answer: "manifestation", chinese_answer: "表现", chinese_romanization: "biǎoxiàn" },
            { option: "B", answer: "proclamation", chinese_answer: "公告", chinese_romanization: "gōnggào" },
            { option: "C", answer: "conflagration", chinese_answer: "大火灾", chinese_romanization: "dà huǒzāi" },
            { option: "D", answer: "ramification", chinese_answer: "后果", chinese_romanization: "hòuguǒ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ramification' means a consequence of an action or event, especially when complex or unwelcome." +
            "<br><br>" +
            "(A) 'manifestation' means an event, action, or object that clearly shows or embodies something, especially a theory or an abstract idea." +
            "<br><br>" +
            "(B) 'proclamation' means a public or official announcement, especially one dealing with a matter of great importance." +
            "<br><br>" +
            "(C) 'conflagration' means an extensive fire that destroys a great deal of land or property.",
        chinese_explanation: "(D) '后果' 意味着某个行动或事件的结果，尤其是复杂或不受欢迎的结果。" +
            "<br><br>" +
            "(A) '表现' 意味着清楚地显示或体现某事物的事件、行动或物体，尤其是理论或抽象概念。" +
            "<br><br>" +
            "(B) '公告' 意味着公开或官方的宣布，尤其是涉及重要事项的公告。" +
            "<br><br>" +
            "(C) '大火灾' 意味着毁坏大量土地或财产的重大火灾。"
    },
    {
        id: 10,
    question: "The salesman’s __________ suggested he was not to be trusted.",
    chinese_question: "销售员的 __________ 表示他不值得信任。",
    answers: [
        { option: "A", answer: "leer", chinese_answer: "奸笑", chinese_romanization: "jiānxiào" },
        { option: "B", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
        { option: "C", answer: "glance", chinese_answer: "一瞥", chinese_romanization: "yīpiē" },
        { option: "D", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'leer' means to look or gaze in an unpleasant, malicious, or lascivious way." +
        "<br><br>" +
        "(B) 'smile' means a pleased, kind, or amused expression." +
        "<br><br>" +
        "(C) 'glance' means to take a brief or hurried look." +
        "<br><br>" +
        "(D) 'laugh' means to make sounds and movements of the face and body that express amusement.",
    chinese_explanation: "(A) '奸笑' 意味着以不愉快、恶意或淫秽的方式看或注视。" +
        "<br><br>" +
        "(B) '微笑' 意味着愉快、友好或感到好笑的表情。" +
        "<br><br>" +
        "(C) '一瞥' 意味着快速或匆忙地看一眼。" +
        "<br><br>" +
        "(D) '笑' 意味着发出声音和面部和身体的动作，表示愉快。"
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
