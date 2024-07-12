// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The new technology had a transformative __________ on the way people communicate.",
    chinese_question: "新技术对人们的交流方式产生了变革性的 __________。",
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
    question: "The government's new policies did little to __________ the economic challenges faced by the citizens.",
    chinese_question: "政府的新政策对减轻市民面临的经济挑战作用不大。",
    answers: [
        { option: "A", answer: "abate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
        { option: "B", answer: "worsen", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'abate' figuratively means to become less intense or widespread." +
        "<br><br>" +
        "(B) 'worsen' means to make or become worse." +
        "<br><br>" +
        "(C) 'uphold' means to support or maintain." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '减轻' 在此语境下比喻变得不那么强烈或不那么广泛。" +
        "<br><br>" +
        "(B) '加剧' 意味着使或变得更糟。" +
        "<br><br>" +
        "(C) '支持' 意味着支持或维持。" +
        "<br><br>" +
        "(D) '庆祝' 意味着以社交聚会或愉快的活动来纪念（重要或愉快的日子或事件）。"
    },
    {
        id: 4,
    question: "The customer made a __________ for a refund due to the defective product.",
    chinese_question: "由于产品有缺陷，顾客 __________ 退款。",
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
        { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
        "<br><br>" +
        "(A) 'approval' means the belief that someone or something is good or acceptable." +
        "<br><br>" +
        "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
        "<br><br>" +
        "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    chinese_explanation: "(B) '责备' 意味着表示不赞成或失望。" +
        "<br><br>" +
        "(A) '赞同' 意味着相信某人或某事物是好的或可接受的。" +
        "<br><br>" +
        "(C) '兴奋' 意味着极大的热情和渴望。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过进行愉快的、通常是社交的活动来标志一个重要事件或场合的愉快行为。"
    },
    {
        id: 7,
    question: "She couldn't hide the __________ in her voice when she spoke about her colleague's unprofessional behavior.",
    chinese_question: "当她谈到同事的不专业行为时，她无法掩饰语气中的 __________。",
    answers: [
        { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
        { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
        "<br><br>" +
        "(A) 'admiration' means respect and warm approval." +
        "<br><br>" +
        "(C) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
    chinese_explanation: "(B) '责备' 意味着表示不赞成或失望。" +
        "<br><br>" +
        "(A) '钦佩' 意味着尊重和热情赞同。" +
        "<br><br>" +
        "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '兴奋' 意味着极大的热情和渴望。"
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
    question: "The artist felt that commercial success would __________ his creativity, leading him to avoid mainstream projects.",
    chinese_question: "这位艺术家认为商业成功会 __________ 他的创造力，因此他避免参与主流项目。",
    answers: [
        { option: "A", answer: "debauch", chinese_answer: "堕落", chinese_romanization: "duòluò" },
        { option: "B", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "C", answer: "inspire", chinese_answer: "激发", chinese_romanization: "jīfā" },
        { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'debauch' figuratively means to corrupt or pervert the integrity or values of something." +
        "<br><br>" +
        "(B) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something." +
        "<br><br>" +
        "(C) 'inspire' means to fill someone with the urge or ability to do or feel something." +
        "<br><br>" +
        "(D) 'preserve' means to maintain something in its original or existing state.",
    chinese_explanation: "(A) '堕落' 在此语境下比喻腐败或颠覆某物的完整性或价值观。" +
        "<br><br>" +
        "(B) '提高' 意味着增强、增加或进一步改善某事物的质量、价值或程度。" +
        "<br><br>" +
        "(C) '激发' 意味着使某人产生做某事或感受某事的冲动或能力。" +
        "<br><br>" +
        "(D) '保存' 意味着维持某物的原始或现有状态。"
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
