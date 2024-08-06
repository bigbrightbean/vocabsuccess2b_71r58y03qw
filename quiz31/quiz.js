// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new manager was so __________ that everyone in the office felt comfortable approaching him with their concerns, and they appreciated his willingness to listen.",
        chinese_question: "新经理非常 __________，办公室里的每个人都觉得可以放心地向他提出他们的担忧，并且他们很欣赏他愿意倾听。",
        answers: [
                { option: "A", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
                { option: "B", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěnmò de" },
                { option: "C", answer: "irritable", chinese_answer: "易怒的", chinese_romanization: "yìnù de" },
                { option: "D", answer: "affable", chinese_answer: "和蔼可亲的", chinese_romanization: "hé'ǎi kěqīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'affable' means friendly, good-natured, or easy to talk to." +
            "<br><br>" +
            "(A) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
            "<br><br>" +
            "(B) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(C) 'irritable' means having or showing a tendency to be easily annoyed or made angry.",
        chinese_explanation: "(D) '和蔼可亲的' 意味着友好的、性格好的或容易交谈的。" +
            "<br><br>" +
            "(A) '严厉的' 意味着严肃和不懈的，尤其是在行使权威和执行纪律时。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着不友好或不爱交际的；冷淡和疏远的。" +
            "<br><br>" +
            "(C) '易怒的' 意味着有或表现出容易烦恼或生气的倾向。"
    },
    {
        id: 2,
    question: "The __________ temple was a place of worship and reverence for the local community.",
    chinese_question: "那座 __________ 的寺庙是当地社区的一个敬拜和尊敬的地方。",
    answers: [
        { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "B", answer: "profane", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
        { option: "C", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
        { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sacred' means regarded with great respect and reverence by a particular religion, group, or individual." +
        "<br><br>" +
        "(A) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(B) 'profane' means not respectful of religious practice; irreverent." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features; normal.",
    chinese_explanation: "(C) '神圣的' 意味着被某个宗教、群体或个人视为极为尊重和崇敬的。" +
        "<br><br>" +
        "(A) '平凡的' 意味着缺乏兴趣或兴奋的；乏味的。" +
        "<br><br>" +
        "(B) '亵渎的' 意味着不尊重宗教实践的；不敬的。" +
        "<br><br>" +
        "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 3,
        question: "Her __________ dreams often seemed to predict future events with uncanny accuracy, leaving her friends and family in awe.",
        chinese_question: "她的 __________ 梦境经常以惊人的准确性预示未来事件，使她的朋友和家人感到惊叹。",
        answers: [
            { option: "A", answer: "prophetic", chinese_answer: "预言的", chinese_romanization: "yùyán de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prophetic' means accurately describing or predicting what will happen in the future." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(A) '预言的' 意味着准确地描述或预测将要发生的事情。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '随机的' 意味着没有方法或有意识决定的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关的。"
    },
    {
        id: 4,
    question: "Arguing with him is __________; he never changes his mind no matter what you say.",
    chinese_question: "与他争论是 __________ 的；无论你说什么，他都不会改变主意。",
    answers: [
        { option: "A", answer: "productive", chinese_answer: "有成效的", chinese_romanization: "yǒu chéngxiào de" },
        { option: "B", answer: "futile", chinese_answer: "无用的", chinese_romanization: "wúyòng de" },
        { option: "C", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
        { option: "D", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'futile' means incapable of producing any useful result; pointless." +
        "<br><br>" +
        "(A) 'productive' means achieving or producing a significant amount or result." +
        "<br><br>" +
        "(C) 'beneficial' means resulting in good; favorable or advantageous." +
        "<br><br>" +
        "(D) 'helpful' means giving or ready to give help.",
    chinese_explanation: "(B) '无用的' 意味着不能产生任何有用的结果；无意义的。" +
        "<br><br>" +
        "(A) '有成效的' 意味着实现或产生显著的结果。" +
        "<br><br>" +
        "(C) '有益的' 意味着产生好的结果；有利的或有利的。" +
        "<br><br>" +
        "(D) '有帮助的' 意味着给予或准备给予帮助的。"
    },
    {
        id: 5,
        question: "Despite the dangerous conditions, the firefighters made a __________ effort to rescue those trapped in the building.",
        chinese_question: "尽管条件危险，消防员们 __________ 地努力救出被困在建筑物内的人。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "C", answer: "gallant", chinese_answer: "勇敢的", chinese_romanization: "yǒnggǎn de" },
            { option: "D", answer: "timid", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gallant' means brave and heroic, often used figuratively to describe noble and selfless actions." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence.",
        chinese_explanation: "(C) '勇敢的' 意味着勇敢和英雄的，通常用作比喻来描述高尚和无私的行为。" +
            "<br><br>" +
            "(A) '胆小的' 意味着缺乏勇气的。" +
            "<br><br>" +
            "(B) '犹豫的' 意味着试探性的、不确定的或行动或讲话缓慢的。" +
            "<br><br>" +
            "(D) '胆怯的' 意味着表现出缺乏勇气或信心的。"
    },
    {
        id: 6,
    question: "She is highly __________ for the job, having both the necessary skills and years of relevant experience.",
    chinese_question: "她非常 __________ 这份工作，既有必要的技能，又有多年的相关经验。",
    answers: [
        { option: "A", answer: "qualified", chinese_answer: "有资格的", chinese_romanization: "yǒu zīgé de" },
        { option: "B", answer: "unprepared", chinese_answer: "未准备的", chinese_romanization: "wèi zhǔnbèi de" },
        { option: "C", answer: "unsuitable", chinese_answer: "不合适的", chinese_romanization: "bù héshì de" },
        { option: "D", answer: "untrained", chinese_answer: "未受训练的", chinese_romanization: "wèi shòu xùnliàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'qualified' means officially recognized as being trained to perform a particular job; certified." +
        "<br><br>" +
        "(B) 'unprepared' means not ready or able to deal with something." +
        "<br><br>" +
        "(C) 'unsuitable' means not fitting or appropriate." +
        "<br><br>" +
        "(D) 'untrained' means not having been trained.",
    chinese_explanation: "(A) '有资格的' 意味着正式承认的受训以从事某特定工作；有证书的。" +
        "<br><br>" +
        "(B) '未准备的' 意味着没有准备好或能够应对某事。" +
        "<br><br>" +
        "(C) '不合适的' 意味着不合适或不恰当的。" +
        "<br><br>" +
        "(D) '未受训练的' 意味着没有受过训练的。"
    },
    {
        id: 7,
    question: "The old house had __________ walls that allowed moisture to seep in, causing the paint to peel and mold to grow.",
    chinese_question: "这座老房子的墙壁是 __________ 的，允许水分渗入，导致油漆剥落和霉菌滋生。",
    answers: [
        { option: "A", answer: "porous", chinese_answer: "多孔的", chinese_romanization: "duōkǒng de" },
        { option: "B", answer: "solid", chinese_answer: "固体的", chinese_romanization: "gùtǐ de" },
        { option: "C", answer: "impermeable", chinese_answer: "不透水的", chinese_romanization: "bù tòushuǐ de" },
        { option: "D", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'porous' means having tiny holes through which liquid or air may pass." +
        "<br><br>" +
        "(B) 'solid' means firm and stable in shape; not liquid or fluid." +
        "<br><br>" +
        "(C) 'impermeable' means not allowing fluid to pass through." +
        "<br><br>" +
        "(D) 'sturdy' means strongly and solidly built.",
    chinese_explanation: "(A) '多孔的' 意味着有微小孔洞的，液体或空气可以通过。" +
        "<br><br>" +
        "(B) '固体的' 意味着形状稳定和牢固的；不是液体或流体。" +
        "<br><br>" +
        "(C) '不透水的' 意味着不允许液体通过的。" +
        "<br><br>" +
        "(D) '结实的' 意味着建造得非常牢固和坚固的。"
    },
    {
        id: 8,
    question: "Her __________ comments during the meeting were shocking, as she insulted several colleagues without reason.",
    chinese_question: "她在会议上的 __________ 评论令人震惊，因为她无缘无故地侮辱了几位同事。",
    answers: [
        { option: "A", answer: "tactful", chinese_answer: "机智", chinese_romanization: "jīzhì" },
        { option: "B", answer: "uncouth", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
        { option: "C", answer: "diplomatic", chinese_answer: "圆滑", chinese_romanization: "yuánhuá" },
        { option: "D", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'uncouth' means lacking good manners, refinement, or grace." +
        "<br><br>" +
        "(A) 'tactful' means having or showing skill and sensitivity in dealing with others or with difficult issues." +
        "<br><br>" +
        "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
        "<br><br>" +
        "(D) 'respectful' means feeling or showing deference and respect.",
    chinese_explanation: "(B) '粗鲁' 意味着缺乏良好的礼仪、修养或优雅。" +
        "<br><br>" +
        "(A) '机智' 意味着在处理别人或困难问题时表现出技巧和敏感性。" +
        "<br><br>" +
        "(C) '圆滑' 意味着表现出以敏感和有效的方式处理人与人之间关系的能力。" +
        "<br><br>" +
        "(D) '尊重' 意味着感到或表现出敬意和尊重。"
    },
    {
        id: 9,
    question: "The __________ soil in the valley allowed farmers to grow abundant crops each season.",
    chinese_question: "山谷中的 __________ 土壤使农民每个季节都能种植丰富的作物。",
    answers: [
        { option: "A", answer: "barren", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
        { option: "B", answer: "rocky", chinese_answer: "多岩石", chinese_romanization: "duō yánshí" },
        { option: "C", answer: "fertile", chinese_answer: "肥沃", chinese_romanization: "féiwò" },
        { option: "D", answer: "infertile", chinese_answer: "不育", chinese_romanization: "bùyù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fertile' means capable of producing abundant vegetation or crops." +
        "<br><br>" +
        "(A) 'barren' means too poor to produce much or any vegetation." +
        "<br><br>" +
        "(B) 'rocky' means consisting or full of rock or rocks." +
        "<br><br>" +
        "(D) 'infertile' means unable to reproduce or grow.",
    chinese_explanation: "(C) '肥沃' 意味着能够生产丰富的植被或作物。" +
        "<br><br>" +
        "(A) '贫瘠' 意味着太贫瘠而无法生产大量或任何植被。" +
        "<br><br>" +
        "(B) '多岩石' 意味着由岩石组成或充满岩石。" +
        "<br><br>" +
        "(D) '不育' 意味着无法繁殖或生长。"
    },
    {
        id: 10,
        question: "His __________ nature made him the perfect mediator during family disputes.",
        chinese_question: "他 __________ 的性格使他成为家庭纠纷中的完美调解人。",
        answers: [
            { option: "A", answer: "combative", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" },
            { option: "B", answer: "pacific", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "C", answer: "argumentative", chinese_answer: "爱争论的", chinese_romanization: "ài zhēnglùn de" },
            { option: "D", answer: "quarrelsome", chinese_answer: "爱吵架的", chinese_romanization: "ài chǎojià de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pacific' means peaceful in character or intent." +
            "<br><br>" +
            "(A) 'combative' means ready or eager to fight; pugnacious." +
            "<br><br>" +
            "(C) 'argumentative' means given to expressing divergent or opposite views." +
            "<br><br>" +
            "(D) 'quarrelsome' means given to or characterized by quarreling.",
        chinese_explanation: "(B) '和平的' 意味着性格或意图和平的。" +
            "<br><br>" +
            "(A) '好战的' 意味着准备或渴望战斗的；好斗的。" +
            "<br><br>" +
            "(C) '爱争论的' 意味着喜欢表达不同或相反观点的。" +
            "<br><br>" +
            "(D) '爱吵架的' 意味着喜欢或以争吵为特征的。"
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
