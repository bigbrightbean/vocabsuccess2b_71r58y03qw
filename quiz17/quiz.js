// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The committee is __________ for organizing the annual charity event.",
    chinese_question: "委员会 __________ 组织年度慈善活动。",
    answers: [
        { option: "A", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
        { option: "C", answer: "uninvolved", chinese_answer: "不参与的", chinese_romanization: "bù cānyù de" },
        { option: "D", answer: "inactive", chinese_answer: "不活跃的", chinese_romanization: "bù huóyuè de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
        "<br><br>" +
        "(A) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
        "<br><br>" +
        "(C) 'uninvolved' means not taking part in something; not engaged." +
        "<br><br>" +
        "(D) 'inactive' means not engaging in any or much physical activity.",
    chinese_explanation: "(B) “负责的” 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
        "<br><br>" +
        "(A) '被动的' 意味着接受或允许发生的事情或其他人所做的事情，而不做出积极的反应或抵抗。" +
        "<br><br>" +
        "(C) '不参与的' 意味着不参与某事；不参与。" +
        "<br><br>" +
        "(D) '不活跃的' 意味着不从事任何或大量的体力活动。"
    },
    {
        id: 2,
        question: "Her __________ return to the stage after a long hiatus was met with applause and admiration.",
        chinese_question: "在长时间的休息后，她 __________ 地重返舞台，赢得了掌声和钦佩。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "C", answer: "triumphant", chinese_answer: "胜利的", chinese_romanization: "shènglì de" },
            { option: "D", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'triumphant' means having won a battle or contest." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(C) '胜利的' 意味着赢得战斗或比赛的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就不夸张的。" +
            "<br><br>" +
            "(B) '安静的' 意味着发出很少或没有噪音的。" +
            "<br><br>" +
            "(D) '压抑的' 意味着安静而相当反思或沮丧的。"
    },
    {
        id: 3,
    question: "Despite the training, his __________ performance in the race disappointed his coach.",
    chinese_question: "尽管进行了训练，他在比赛中的 __________ 表现让教练失望。",
    answers: [
        { option: "A", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
        { option: "B", answer: "vigorous", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
        { option: "D", answer: "spirited", chinese_answer: "精神饱满的", chinese_romanization: "jīngshén bǎomǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sluggish' means lacking energy or alertness; slow to respond or make progress." +
        "<br><br>" +
        "(A) 'dynamic' means characterized by constant change, activity, or progress." +
        "<br><br>" +
        "(B) 'vigorous' means strong, healthy, and full of energy." +
        "<br><br>" +
        "(D) 'spirited' means full of energy, enthusiasm, and determination.",
    chinese_explanation: "(C) '迟缓的' 意味着缺乏能量或警觉性；反应迟钝或进展缓慢的。" +
        "<br><br>" +
        "(A) '动态的' 意味着具有不断变化、活动或进展的特征。" +
        "<br><br>" +
        "(B) '精力充沛的' 意味着强壮、健康和充满能量的。" +
        "<br><br>" +
        "(D) '精神饱满的' 意味着充满能量、热情和决心的。"
    },
    {
        id: 4,
        question: "The movie was so __________ that even the toughest critics were moved to tears by the end.",
        chinese_question: "这部电影如此 __________，以至于连最严厉的评论家到最后都感动得流泪了。",
        answers: [
            { option: "A", answer: "hilarious", chinese_answer: "搞笑的", chinese_romanization: "gǎoxiào de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "thrilling", chinese_answer: "令人激动的", chinese_romanization: "lìngrén jīdòng de" },
            { option: "D", answer: "lachrymose", chinese_answer: "催人泪下的", chinese_romanization: "cuīrén lèixià de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lachrymose' means inducing tears; sad." +
            "<br><br>" +
            "(A) 'hilarious' means extremely amusing." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'thrilling' means causing excitement and pleasure; exhilarating.",
        chinese_explanation: "(D) '催人泪下的' 意味着引发眼泪；悲伤的。" +
            "<br><br>" +
            "(A) '搞笑的' 意味着极其有趣的。" +
            "<br><br>" +
            "(B) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(C) '令人激动的' 意味着引起兴奋和愉悦的；令人振奋的。"
    },
    {
        id: 5,
    question: "His __________ upbringing instilled in him a deep appreciation for nature and simple living.",
    chinese_question: "他的 __________ 成长环境使他对自然和简单生活有了深刻的欣赏。",
    answers: [
        { option: "A", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
        { option: "B", answer: "cosmopolitan", chinese_answer: "国际化的", chinese_romanization: "guójì huà de" },
        { option: "C", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
        { option: "D", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'rural' means relating to, or characteristic of the countryside rather than the town." +
        "<br><br>" +
        "(A) 'urban' means relating to, or characteristic of a city or town." +
        "<br><br>" +
        "(B) 'cosmopolitan' means familiar with and at ease in many different countries and cultures." +
        "<br><br>" +
        "(D) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture.",
    chinese_explanation: "(C) '乡村的' 意味着与乡村而不是城镇相关或具有乡村特点的。" +
        "<br><br>" +
        "(A) '城市的' 意味着与城市或城镇相关或具有城市特点的。" +
        "<br><br>" +
        "(B) '国际化的' 意味着熟悉并适应许多不同国家和文化的。" +
        "<br><br>" +
        "(D) '老练的' 意味着具有、透露或来自大量的世故经验和时尚文化知识的。"
    },
    {
        id: 6,
        question: "The __________ tone in his writing made the argument more compelling and considerate of opposing views.",
        chinese_question: "他写作中的 __________ 语气使得论点更具说服力，并且对反对意见表现得更为体贴。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "condescending", chinese_answer: "居高临下的", chinese_romanization: "jūgāolínxià de" },
            { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'respectful' means feeling or showing deference and respect, often used figuratively to describe a tone that is considerate and acknowledges other perspectives." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(B) 'condescending' means having or showing a feeling of patronizing superiority." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(C) '尊敬的' 意味着感到或表现出敬意和尊重的，常用作比喻，描述一种体贴并承认其他观点的语气。" +
            "<br><br>" +
            "(A) '严厉的' 意味着对感官不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(B) '居高临下的' 意味着有或表现出居高临下优越感的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；对抗的。"
    },
    {
        id: 7,
    question: "Her __________ approach to problem-solving often led to creative and unexpected solutions.",
    chinese_question: "她 __________ 的解决问题的方法常常带来创造性和意想不到的解决方案。",
    answers: [
        { option: "A", answer: "traditional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
        { option: "B", answer: "conventional", chinese_answer: "常规", chinese_romanization: "chángguī" },
        { option: "C", answer: "unconventional", chinese_answer: "非传统", chinese_romanization: "fēi chuántǒng" },
        { option: "D", answer: "standard", chinese_answer: "标准", chinese_romanization: "biāozhǔn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unconventional' means not based on or conforming to what is generally done or believed." +
        "<br><br>" +
        "(A) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(D) 'standard' means used or accepted as normal or average.",
    chinese_explanation: "(C) '非传统' 意味着不基于或不符合通常的做法或信仰。" +
        "<br><br>" +
        "(A) '传统' 意味着存在于或作为传统的一部分；历史悠久的。" +
        "<br><br>" +
        "(B) '常规' 意味着基于或符合通常的做法或信仰。" +
        "<br><br>" +
        "(D) '标准' 意味着被用作或接受为正常或平均。"
    },
    {
        id: 8,
    question: "The __________ wolf howled at the moon, its voice echoing through the valley.",
    chinese_question: "那只 __________ 的狼对着月亮嚎叫，声音在山谷中回荡。",
    answers: [
        { option: "A", answer: "pack", chinese_answer: "群", chinese_romanization: "qún" },
        { option: "B", answer: "lone", chinese_answer: "独自", chinese_romanization: "dúzì" },
        { option: "C", answer: "together", chinese_answer: "一起", chinese_romanization: "yīqǐ" },
        { option: "D", answer: "united", chinese_answer: "团结", chinese_romanization: "tuánjié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lone' means being alone; without companions." +
        "<br><br>" +
        "(A) 'pack' means a group of wolves." +
        "<br><br>" +
        "(C) 'together' means with each other." +
        "<br><br>" +
        "(D) 'united' means joined together politically, for a common purpose, or by common feelings.",
    chinese_explanation: "(B) “独自” 意味着一个人；没有同伴。" +
        "<br><br>" +
        "(A) '群' 意味着一群狼。" +
        "<br><br>" +
        "(C) '一起' 意味着彼此在一起。" +
        "<br><br>" +
        "(D) '团结' 意味着为共同的目的或共同的感觉而联合在一起。"
    },
    {
        id: 9,
    question: "The researchers set up cameras in the forest to study the __________ habits of the animals that come out after dark.",
    chinese_question: "研究人员在森林中安装了摄像机，以研究天黑后出来的动物的 __________ 习性。",
    answers: [
        { option: "A", answer: "nocturnal", chinese_answer: "夜行性的", chinese_romanization: "yèxíngxìng de" },
        { option: "B", answer: "daytime", chinese_answer: "白天的", chinese_romanization: "báitiān de" },
        { option: "C", answer: "morning", chinese_answer: "早晨的", chinese_romanization: "zǎochén de" },
        { option: "D", answer: "afternoon", chinese_answer: "下午的", chinese_romanization: "xiàwǔ de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'nocturnal' means active at night." +
        "<br><br>" +
        "(B) 'daytime' means the time between sunrise and sunset." +
        "<br><br>" +
        "(C) 'morning' means the early part of the day." +
        "<br><br>" +
        "(D) 'afternoon' means the time from noon to evening.",
    chinese_explanation: "(A) '夜行性的' 意味着在夜间活动的。" +
        "<br><br>" +
        "(B) '白天的' 意味着从日出到日落的时间。" +
        "<br><br>" +
        "(C) '早晨的' 意味着一天的早期部分。" +
        "<br><br>" +
        "(D) '下午的' 意味着从中午到晚上的时间。"
    },
    {
        id: 10,
    question: "Her __________ ideas always brought fresh perspectives to the discussions.",
    chinese_question: "她的__________想法总是为讨论带来新的视角。",
    answers: [
        { option: "A", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
        { option: "C", answer: "novel", chinese_answer: "新颖的", chinese_romanization: "xīnyǐng de" },
        { option: "D", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'novel' means new or unusual in an interesting way. Figuratively, it can mean innovative or creative." +
        "<br><br>" +
        "(A) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(B) 'outdated' means no longer produced or used; out of date." +
        "<br><br>" +
        "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
    chinese_explanation: "(C) '新颖的'一词意味着新的或不寻常的，且有趣的。比喻地，它可以表示创新的或有创意的。" +
        "<br><br>" +
        "(A) '传统的' 意味着作为传统一部分存在或作为传统一部分存在的；长久建立的。" +
        "<br><br>" +
        "(B) '过时的' 意味着不再生产或使用的；过时的。" +
        "<br><br>" +
        "(D) '常规的' 意味着基于或符合通常所做的或相信的。"
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
