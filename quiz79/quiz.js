// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ of meeting an old friend in a foreign country added joy to her travels.",
    chinese_question: "在外国遇见老朋友的 __________ 给她的旅行增添了快乐。",
    answers: [
        { option: "A", answer: "predictability", chinese_answer: "可预见性", chinese_romanization: "kě yùjiàn xìng" },
        { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
        { option: "C", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
        { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
        "<br><br>" +
        "(A) 'predictability' means the quality of being regarded as likely to happen." +
        "<br><br>" +
        "(C) 'monotony' means lack of variety and interest; tedious repetition and routine." +
        "<br><br>" +
        "(D) 'certainty' means firm conviction that something is the case.",
    chinese_explanation: "(B) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
        "<br><br>" +
        "(A) '可预见性' 意味着被认为可能发生的质量。" +
        "<br><br>" +
        "(C) '单调' 意味着缺乏多样性和兴趣；乏味的重复和常规。" +
        "<br><br>" +
        "(D) '确定性' 意味着对某事的坚定信念。"
    },
    {
        id: 2,
    question: "Finding a balance between work and life is the __________ many people seek.",
    chinese_question: "找到工作与生活之间的平衡是许多人寻找的 __________。",
    answers: [
        { option: "A", answer: "dilemma", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
        { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
        { option: "C", answer: "issue", chinese_answer: "问题", chinese_romanization: "wèntí" },
        { option: "D", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(A) 'dilemma' means a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones." +
        "<br><br>" +
        "(C) 'issue' means an important topic or problem for debate or discussion." +
        "<br><br>" +
        "(D) 'question' means a sentence worded or expressed so as to elicit information.",
    chinese_explanation: "(B) '解决方案' 意味着解决问题或处理困难情况的方法。" +
        "<br><br>" +
        "(A) '困境' 意味着必须在两个或多个选择之间做出艰难选择的情况，尤其是同样不受欢迎的选择。" +
        "<br><br>" +
        "(C) '问题' 意味着需要讨论或讨论的重要话题或问题。" +
        "<br><br>" +
        "(D) '问题' 意味着以引出信息为目的的句子。"
    },
    {
        id: 3,
    question: "The __________ events still haunt him, making it hard for him to move on.",
    chinese_question: "那些 __________ 的事件仍然困扰着他，使他难以继续前进。",
    answers: [
        { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "B", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "C", answer: "current", chinese_answer: "当前", chinese_romanization: "dāngqián" },
        { option: "D", answer: "upcoming", chinese_answer: "即将到来", chinese_romanization: "jíjiāng dàolái" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'past' means having happened or existed before now." +
        "<br><br>" +
        "(B) 'future' means the time or a period of time following the moment of speaking or writing." +
        "<br><br>" +
        "(C) 'current' means belonging to the present time." +
        "<br><br>" +
        "(D) 'upcoming' means about to happen.",
    chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" +
        "<br><br>" +
        "(B) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
        "<br><br>" +
        "(C) '当前' 意味着属于现在的时间。" +
        "<br><br>" +
        "(D) '即将到来' 意味着即将发生。"
    },
    {
        id: 4,
    question: "Despite the late hour, she had an __________ to bake cookies and enjoy a midnight snack.",
    chinese_question: "尽管时间很晚，她还是有一种 __________ 想烤饼干，享受午夜小吃。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "urge", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'urge' means a strong desire or impulse." +
                "<br><br>" +
                "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(B) '冲动'一词意味着强烈的愿望或冲动。" +
                "<br><br>" +
                "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
                "<br><br>" +
                "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '勉强' 意味着不愿意或不情愿做某事。"
    },
    {
        id: 5,
    question: "There was a clear __________ among the community members to build a new park in the neighborhood.",
    chinese_question: "社区成员就建造一个新公园达成了明确的 __________。",
    answers: [
        { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
        { option: "B", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" },
        { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
        { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'consensus' means general agreement among a group of people." +
        "<br><br>" +
        "(B) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held." +
        "<br><br>" +
        "(C) 'conflict' means a serious disagreement or argument." +
        "<br><br>" +
        "(D) 'confusion' means lack of understanding; uncertainty.",
    chinese_explanation: "(A) '共识' 意味着一群人之间的普遍同意。" +
        "<br><br>" +
        "(B) '异议' 意味着与先前、普遍或官方持有的意见不一致的表达或持有意见。" +
        "<br><br>" +
        "(C) '冲突' 意味着严重的分歧或争论。" +
        "<br><br>" +
        "(D) '困惑' 意味着缺乏理解；不确定。"
    },
    {
        id: 6,
        question: "He bowed his head in __________ when the elder spoke, showing his respect for the wisdom and experience of his senior.",
        chinese_question: "当长者说话时，他低下了头，以示对长者智慧和经验的 __________。",
        answers: [
                { option: "A", answer: "arrogance", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
                { option: "B", answer: "pride", chinese_answer: "骄傲", chinese_romanization: "jiāo'ào" },
                { option: "C", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deference' means humble submission and respect." +
                "<br><br>" +
                "(A) 'arrogance' means having an exaggerated sense of one's own importance or abilities." +
                "<br><br>" +
                "(B) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '尊重'一词意味着谦卑的服从和尊敬。" +
                "<br><br>" +
                "(A) '傲慢' 意味着对自己的重要性或能力有夸大的感觉。" +
                "<br><br>" +
                "(B) '骄傲' 意味着对自己的成就感到深深的愉悦或满足感。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
    question: "The __________ of smartphones has transformed the way we communicate, work, and entertain ourselves.",
    chinese_question: "智能手机的 __________ 改变了我们交流、工作和娱乐的方式。",
    answers: [
        { option: "A", answer: "advent", chinese_answer: "到来", chinese_romanization: "dàolái" },
        { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "C", answer: "conclusion", chinese_answer: "结束", chinese_romanization: "jiéshù" },
        { option: "D", answer: "disappearance", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'advent' figuratively means the arrival of a notable person, thing, or event." +
        "<br><br>" +
        "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
        "<br><br>" +
        "(C) 'conclusion' means the end or finish of an event, process, or text." +
        "<br><br>" +
        "(D) 'disappearance' means the action or process of disappearing.",
    chinese_explanation: "(A) '到来' 在此语境下意指一个显著的人、事或事件的到来。" +
        "<br><br>" +
        "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
        "<br><br>" +
        "(C) '结束' 意味着事件、过程或文本的结束。" +
        "<br><br>" +
        "(D) '消失' 意味着消失的动作或过程。"
    },
    {
        id: 8,
    question: "The government formed a special __________ to investigate the recent allegations of corruption.",
    chinese_question: "政府成立了一个特别 __________，调查最近的腐败指控。",
    answers: [
        { option: "A", answer: "commission", chinese_answer: "委员会", chinese_romanization: "wěiyuánhuì" },
        { option: "B", answer: "proposal", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "C", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" },
        { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'commission' means a group of people officially charged with a particular function." +
        "<br><br>" +
        "(B) 'proposal' means a plan or suggestion, especially a formal or written one, put forward for consideration by others." +
        "<br><br>" +
        "(C) 'protest' means a statement or action expressing disapproval of or objection to something." +
        "<br><br>" +
        "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
    chinese_explanation: "(A) '委员会'一词意味着正式负责某一特定职能的一群人。" +
        "<br><br>" +
        "(B) '建议' 意味着特别是由他人提出的考虑或讨论的计划或建议。" +
        "<br><br>" +
        "(C) '抗议' 意味着表示不赞成或反对某事的声明或行动。" +
        "<br><br>" +
        "(D) '拒绝' 意味着对提议、想法等的拒绝或拒绝。"
    }
    ,
    {
        id: 9,
    question: "The committee reached a __________ on the new policy after several hours of discussion, agreeing to implement it next month.",
    chinese_question: "委员会在讨论了几个小时后就新政策达成了 __________，同意下个月实施。",
    answers: [
        { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
        { option: "B", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
        { option: "C", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
        { option: "D", answer: "stalemate", chinese_answer: "僵局", chinese_romanization: "jiāngjú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'consensus' means general agreement among a group of people." +
        "<br><br>" +
        "(B) 'disagreement' means lack of consensus or approval." +
        "<br><br>" +
        "(C) 'division' means the action of separating something into parts or the process of being separated." +
        "<br><br>" +
        "(D) 'stalemate' means a situation in which further action or progress by opposing or competing parties seems impossible.",
    chinese_explanation: "(A) '共识' 意味着一群人之间的普遍同意。" +
        "<br><br>" +
        "(B) '分歧' 意味着缺乏共识或赞同。" +
        "<br><br>" +
        "(C) '分裂' 意味着将某物分成部分的动作或被分开的过程。" +
        "<br><br>" +
        "(D) '僵局' 意味着对立或竞争双方无法进一步行动或进展的局面。"
    },
    {
        id: 10,
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
