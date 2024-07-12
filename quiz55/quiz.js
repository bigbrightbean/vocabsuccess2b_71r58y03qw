// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The team members demonstrated great __________ by supporting each other through the project's difficulties.",
    chinese_question: "团队成员在项目的困难时期表现出了很大的 __________，互相支持。",
    answers: [
        { option: "A", answer: "solidarity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "B", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" },
        { option: "C", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
        { option: "D", answer: "competition", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'solidarity' figuratively means unity or agreement of feeling or action, especially among individuals with a common interest; mutual support within a group." +
                "<br><br>" +
                "(B) 'selfishness' means the quality or condition of being selfish." +
                "<br><br>" +
                "(C) 'isolation' means the process or fact of isolating or being isolated." +
                "<br><br>" +
                "(D) 'competition' means the activity or condition of competing.",
    chinese_explanation: "(A) '团结' 在此语境下意指特别是具有共同利益的个人之间的感情或行动的一致性；群体内部的相互支持。" +
                "<br><br>" +
                "(B) '自私' 意味着自私的质量或状态。" +
                "<br><br>" +
                "(C) '隔离' 意味着隔离或被隔离的过程或事实。" +
                "<br><br>" +
                "(D) '竞争' 意味着竞争的活动或状态。"
    },
    {
        id: 2,
    question: "Her insistence on following a strict diet felt like an __________ on their social gatherings, limiting the food options for everyone.",
    chinese_question: "她坚持遵循严格的饮食让他们的社交聚会感到像是一种 __________，限制了每个人的食物选择。",
    answers: [
        { option: "A", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" },
        { option: "B", answer: "luxury", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
        { option: "C", answer: "imposition", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
        { option: "D", answer: "enhancement", chinese_answer: "提升", chinese_romanization: "tíshēng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'imposition' means the action or process of imposing something, especially a burden or obligation." +
        "<br><br>" +
        "(A) 'freedom' means the power or right to act, speak, or think as one wants without hindrance or restraint." +
        "<br><br>" +
        "(B) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
        "<br><br>" +
        "(D) 'enhancement' means an increase or improvement in quality, value, or extent.",
    chinese_explanation: "(C) '强加' 一词意味着施加某物的行动或过程，尤其是负担或义务。" +
        "<br><br>" +
        "(A) '自由' 意味着行动、说话或思考的权力或权利，没有障碍或约束。" +
        "<br><br>" +
        "(B) '奢侈' 意味着极大的舒适或优雅状态，尤其是涉及巨大的花费。" +
        "<br><br>" +
        "(D) '提升' 意味着质量、价值或范围的增加或改进。"
    },
    {
        id: 3,
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
        id: 4,
        question: "The __________ with which she approached her studies earned her top honours in her class.",
        chinese_question: "她以 __________ 对待学习的态度使她在班级中获得了最高荣誉。",
        answers: [
                { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
                { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' figuratively means intense and passionate feeling." +
                "<br><br>" +
                "(B) 'negligence' means failure to take proper care in doing something." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'laziness' means the quality of being unwilling to work or use energy.",
        chinese_explanation: "(A) '热情' 在此语境下意指强烈而热情的感情。" +
                "<br><br>" +
                "(B) '疏忽' 意味着没有适当照顾。" +
                "<br><br>" +
                "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '懒惰' 意味着不愿工作或使用能量的品质。"
    },
    {
        id: 5,
        question: "Reaching the __________ of his profession, he was awarded the highest honour in his field.",
        chinese_question: "达到职业的 __________ 后，他获得了该领域的最高荣誉。",
        answers: [
                { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
                { option: "B", answer: "pinnacle", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
                { option: "C", answer: "baseline", chinese_answer: "基线", chinese_romanization: "jīxiàn" },
                { option: "D", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pinnacle' figuratively means the highest or most successful point in a career or field." +
                "<br><br>" +
                "(A) 'nadir' means the lowest point in the fortunes of a person or organization." +
                "<br><br>" +
                "(C) 'baseline' means a minimum or starting point used for comparisons." +
                "<br><br>" +
                "(D) 'average' means the result obtained by adding several quantities together and then dividing this total by the number of quantities.",
        chinese_explanation: "(B) '顶峰' 在此语境下意指职业或领域的最高点或最成功的点。" +
                "<br><br>" +
                "(A) '最低点' 意味着一个人或组织命运的最低点。" +
                "<br><br>" +
                "(C) '基线' 意味着用于比较的最小值或起点。" +
                "<br><br>" +
                "(D) '平均' 意味着将多个数量相加然后将总数除以数量的结果。"
    },
    {
        id: 6,
        question: "Her speech highlighted the __________ between words and actions, urging people to align their behavior with their promises.",
        chinese_question: "她的演讲强调了言行之间的 __________，敦促人们使自己的行为与承诺一致。",
        answers: [
                { option: "A", answer: "unity", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
                { option: "B", answer: "dichotomy", chinese_answer: "二分法", chinese_romanization: "èrfēnfǎ" },
                { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dichotomy' means a division or contrast between two things that are represented as being opposed or entirely different." +
                "<br><br>" +
                "(A) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(C) 'harmony' means agreement or concord." +
                "<br><br>" +
                "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(B) '二分法'一词意味着两个事物之间的分裂或对比，这两个事物被描述为对立或完全不同。" +
                "<br><br>" +
                "(A) '统一' 意味着团结或联合为一个整体的状态。" +
                "<br><br>" +
                "(C) '和谐' 意味着协议或和睦。" +
                "<br><br>" +
                "(D) '一致' 意味着意见或感觉上的和谐或一致。"
    },
    {
        id: 7,
        question: "The manager had serious __________ about the new hire's qualifications, fearing that he might not be up to the job.",
        chinese_question: "经理对新员工的资格有严重的 __________，担心他可能无法胜任这份工作。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "certainties", chinese_answer: "确定", chinese_romanization: "quèdìng" },
                { option: "C", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
                { option: "D", answer: "hopes", chinese_answer: "希望", chinese_romanization: "xīwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' figuratively means uneasy feelings of doubt, worry, or fear, especially about one's own conduct; misgivings." +
                "<br><br>" +
                "(B) 'certainties' means firm conviction that something is the case." +
                "<br><br>" +
                "(C) 'trust' means firm belief in the reliability, truth, or ability of someone or something." +
                "<br><br>" +
                "(D) 'hopes' means a feeling of expectation and desire for a certain thing to happen.",
        chinese_explanation: "(A) '不安' 在此语境下意指对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '确定' 意味着对某事的坚定信念。" +
                "<br><br>" +
                "(C) '信任' 意味着对某人或某事可靠性、真实性或能力的坚定信念。" +
                "<br><br>" +
                "(D) '希望' 意味着对某事发生的期望和愿望。"
    },
    {
        id: 8,
    question: "The children's __________ was evident when they learned that the school trip had been cancelled last minute.",
    chinese_question: "当孩子们得知学校旅行在最后一刻被取消时，他们的 __________ 显而易见。",
    answers: [
        { option: "A", answer: "dismay", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
        { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "C", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dismay' figuratively means distress caused by something unexpected." +
        "<br><br>" +
        "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
        "<br><br>" +
        "(C) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
        "<br><br>" +
        "(D) 'amusement' means the state or experience of finding something funny.",
    chinese_explanation: "(A) '沮丧' 在此语境下意指因意外的事情引起的忧虑。" +
        "<br><br>" +
        "(B) '兴奋' 意味着极大的热情和渴望。" +
        "<br><br>" +
        "(C) '放松' 意味着在解除焦虑或痛苦后的安心和放松感。" +
        "<br><br>" +
        "(D) '娱乐' 意味着发现某事有趣的状态或经历。"
    },
    {
        id: 9,
    question: "In his essay, he skillfully wove a __________ into his argument to preemptively address opposing viewpoints.",
    chinese_question: "在他的文章中，他巧妙地将 __________ 融入了他的论点，以预先解决反对观点。",
    answers: [
        { option: "A", answer: "summary", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
        { option: "B", answer: "counterargument", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "C", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
        { option: "D", answer: "reinforcement", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'counterargument' means an argument or set of reasons put forward to oppose an idea or theory developed in another argument." +
        "<br><br>" +
        "(A) 'summary' means a brief statement or account of the main points of something." +
        "<br><br>" +
        "(C) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
        "<br><br>" +
        "(D) 'reinforcement' means the action or process of reinforcing or strengthening.",
    chinese_explanation: "(B) '反驳' 一词意味着为反对在另一争论中提出的观点或理论而提出的论点或理由。" +
        "<br><br>" +
        "(A) '总结' 意味着对某事要点的简要陈述或描述。" +
        "<br><br>" +
        "(C) '批准' 意味着正式同意某事或接受某事作为令人满意的行为。" +
        "<br><br>" +
        "(D) '增强' 意味着加强或增强的行为或过程。"
    },
    {
        id: 10,
    question: "The __________ of the parents was understandable as they waited for the doctor to update them on their child's surgery.",
    chinese_question: "父母等待医生更新孩子手术情况时的 __________ 是可以理解的。",
    answers: [
        { option: "A", answer: "apprehension", chinese_answer: "忧虑", chinese_romanization: "yōulǜ" },
        { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'apprehension' figuratively means anxiety or fear that something bad or unpleasant will happen." +
        "<br><br>" +
        "(B) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'calm' means the absence of strong emotions; peace." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '忧虑' 在此语境下意指对某事不好的或不愉快的事情将要发生的焦虑或恐惧。" +
        "<br><br>" +
        "(B) '喜悦' 意味着极大的愉快和幸福的感觉。" +
        "<br><br>" +
        "(C) '平静' 意味着强烈情绪的缺乏；和平。" +
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
